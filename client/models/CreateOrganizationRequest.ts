/**
 * MongoDB Atlas Administration API
 * The MongoDB Atlas Administration API allows developers to manage all components in MongoDB Atlas. To learn more, review the [Administration API overview](https://www.mongodb.com/docs/atlas/api/atlas-admin-api/). This OpenAPI specification covers all of the collections with the exception of Alerts, Alert Configurations, and Events. Refer to the [legacy documentation](https://www.mongodb.com/docs/atlas/reference/api-resources/) for the specifications of these resources.
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApiCreateApiKeyView } from '../models/ApiCreateApiKeyView';
import { HttpFile } from '../http/http';

export class CreateOrganizationRequest {

    'apiKey'?: ApiCreateApiKeyView;
    /**
    * Human-readable label that identifies the organization.
    */

    'name': string;
    /**
    * Unique 24-hexadecimal digit string that identifies the Atlas user that you want to assign the Organization Owner role. This user must be a member of the same organization as the calling API key. This is required if you call the Admin API endpoint directly, but not required when you call through the Atlas CLI.
    */

    'orgOwnerId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiKey",
            "baseName": "apiKey",
            "type": "ApiCreateApiKeyView",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "orgOwnerId",
            "baseName": "orgOwnerId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateOrganizationRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

