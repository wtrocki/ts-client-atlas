import * as atlas from "../client"
import { DigestFetchHttpLibrary } from "../lib/digest-fetch"
const DigestFetch = require('digest-fetch')

// Values provided as part of env variables
// See: https://www.mongodb.com/docs/atlas/app-services/authentication/api-key/
const apiKey = process.env.MDB_API_KEY
const apiSecret = process.env.MDB_API_SECRET
 
const client = new DigestFetch(apiKey, apiSecret, { algorithm: "MD5" })

// Covers all auth methods included in your OpenAPI yaml definition

// Implements a simple middleware to modify requests before (`pre`) they are sent
// and after (`post`) they have been received 
class Test implements atlas.Middleware {
    pre(context: atlas.RequestContext): Promise<atlas.RequestContext> {
        // Modify context here and return
        return Promise.resolve(context);
    }

    post(context: atlas.ResponseContext): Promise<atlas.ResponseContext> {
        return Promise.resolve(context);
    }

}

const apiUrl = new atlas.ServerConfiguration<{  }>(process.env.MDB_BASE_URL || "https://cloud.mongodb.com", {  }) 

// Create configuration parameter object
const configurationParameters = {
    httpApi: new DigestFetchHttpLibrary(client), // Can also be ignored - default is usually fine
    baseServer: apiUrl,
    
    // authMethods: authConfig, // No auth is default
    promiseMiddleware: [new Test()],
}

// Convert to actual configuration
const config = atlas.createConfiguration(configurationParameters);

// Use configuration with your_api
const api = new atlas.ProjectsApi(config);
api.listProjects().then(console.log).catch(console.error)
