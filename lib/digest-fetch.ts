import {HttpLibrary, RequestContext, ResponseContext} from '../client/http/http';
import { from, Observable } from '../client/rxjsStub';
const DigestFetch = require('digest-fetch')

export class DigestFetchHttpLibrary implements HttpLibrary {
    // Digest fetch is missing types
    private client: any; 

    constructor(apiKey: string, apiSecret: string){
      this.client = new DigestFetch(apiKey, apiSecret, { algorithm: "MD5" })
    }  
    public send(request: RequestContext): Observable<ResponseContext> {
        let method = request.getHttpMethod().toString();
        let body = request.getBody();

        const resultPromise = this.client.fetch(request.getUrl(), {
            method: method,
            body: body as any,
            headers: request.getHeaders(),
            credentials: "same-origin"
        }).then((resp: any) => {
            const headers: { [name: string]: string } = {};
            resp.headers.forEach((value: string, name: string) => {
              headers[name] = value;
            });

            const body = {
              text: () => resp.text(),
              binary: () => resp.blob()
            };
            return new ResponseContext(resp.status, headers, body);
        });

        return from<Promise<ResponseContext>>(resultPromise);

    }
}
