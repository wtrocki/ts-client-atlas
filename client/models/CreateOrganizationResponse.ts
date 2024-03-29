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

import { ApiKeyUserDetails } from '../models/ApiKeyUserDetails';
import { AtlasOrganization } from '../models/AtlasOrganization';
import { HttpFile } from '../http/http';

export class CreateOrganizationResponse {

    'apiKey'?: ApiKeyUserDetails;
    /**
    * Unique 24-hexadecimal digit string that identifies the federation that you linked the newly created organization to.
    */

    'federationSettingsId'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the MongoDB Cloud user that you assigned the Organization Owner role in the new organization.
    */

    'orgOwnerId'?: string;

    'organization'?: AtlasOrganization;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiKey",
            "baseName": "apiKey",
            "type": "ApiKeyUserDetails",
            "format": ""
        },
        {
            "name": "federationSettingsId",
            "baseName": "federationSettingsId",
            "type": "string",
            "format": ""
        },
        {
            "name": "orgOwnerId",
            "baseName": "orgOwnerId",
            "type": "string",
            "format": ""
        },
        {
            "name": "organization",
            "baseName": "organization",
            "type": "AtlasOrganization",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateOrganizationResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

