import * as atlas from "../client"
import { DigestFetchHttpLibrary } from "../lib/digest-fetch"


// Values provided as part of env variables
// See: https://www.mongodb.com/docs/atlas/app-services/authentication/api-key/
const apiKey = process.env.MDB_API_KEY 
const apiSecret = process.env.MDB_API_SECRET

const apiUrl = new atlas.ServerConfiguration<{  }>(process.env.MDB_BASE_URL || "https://cloud.mongodb.com", {  }) 

if (!apiKey || !apiSecret){
    throw new Error(`Missing MDB_API_KEY and MDB_API_SECRET env vars`)
}

// Create configuration parameter object
const configurationParameters = {
    httpApi: new DigestFetchHttpLibrary(apiKey,apiSecret), // Can also be ignored - default is usually fine
    baseServer: apiUrl
}

// Convert to actual configuration
const config = atlas.createConfiguration(configurationParameters);

// Use configuration with your_api
const api = new atlas.ProjectsApi(config);
api.listProjects().then(console.log).catch(console.error)
