/**
 * MongoDB Atlas Administration API
 * The MongoDB Atlas Administration API allows developers to manage all components in MongoDB Atlas.  The Atlas Administration API uses HTTP Digest Authentication to authenticate requests. Provide a programmatic API public key and corresponding private key as the username and password when constructing the HTTP request. For example, to [return database access history](#tag/Access-Tracking/operation/listAccessLogsByClusterName) with [cURL](https://en.wikipedia.org/wiki/CURL), run the following command in the terminal:  ``` curl --user \"{PUBLIC-KEY}:{PRIVATE-KEY}\" \\   --digest \\   --header \"Accept: application/vnd.atlas.2023-02-01+json\" \\   GET \"https://cloud.mongodb.com/api/atlas/v2/groups/{groupId}/dbAccessHistory/clusters/{clusterName}?pretty=true\" ```  To learn more, see [Get Started with the Atlas Administration API](https://www.mongodb.com/docs/atlas/configure-api-access/). For support, see [MongoDB Support](https://www.mongodb.com/support/get-started).
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ServerlessConnectionStringsPrivateEndpointItem } from '../models/ServerlessConnectionStringsPrivateEndpointItem';
import { HttpFile } from '../http/http';

/**
* Private endpoint connection string that you can use to connect to this serverless instance through a private endpoint.
*/
export class ServerlessConnectionStringsPrivateEndpointList {
    /**
    * List that contains the private endpoints through which you connect to MongoDB Cloud when you use **connectionStrings.privateEndpoint[n].srvConnectionString**.
    */

    'endpoints'?: Array<ServerlessConnectionStringsPrivateEndpointItem>;
    /**
    * Private endpoint-aware connection string that uses the `mongodb+srv://` protocol to connect to MongoDB Cloud through a private endpoint. The `mongodb+srv` protocol tells the driver to look up the seed list of hosts in the Domain Name System (DNS).
    */

    'srvConnectionString'?: string;
    /**
    * MongoDB process type to which your application connects.
    */

    'type'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "endpoints",
            "baseName": "endpoints",
            "type": "Array<ServerlessConnectionStringsPrivateEndpointItem>",
            "format": ""
        },
        {
            "name": "srvConnectionString",
            "baseName": "srvConnectionString",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ServerlessConnectionStringsPrivateEndpointList.attributeTypeMap;
    }

    public constructor() {
    }
}

