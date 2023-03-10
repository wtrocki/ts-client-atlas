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

import { HttpFile } from '../http/http';

/**
* Updates to a serverless Azure tenant endpoint.
*/
export class ServerlessAzureTenantEndpointUpdate {
    /**
    * Unique string that identifies the Azure private endpoint's network interface for this private endpoint service.
    */

    'cloudProviderEndpointId'?: string;
    /**
    * IPv4 address of the private endpoint in your Azure VNet that someone added to this private endpoint service.
    */

    'privateEndpointIpAddress'?: string;
    /**
    * Human-readable comment associated with the private endpoint.
    */

    'comment'?: string;

    'providerName': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cloudProviderEndpointId",
            "baseName": "cloudProviderEndpointId",
            "type": "string",
            "format": ""
        },
        {
            "name": "privateEndpointIpAddress",
            "baseName": "privateEndpointIpAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "comment",
            "baseName": "comment",
            "type": "string",
            "format": ""
        },
        {
            "name": "providerName",
            "baseName": "providerName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ServerlessAzureTenantEndpointUpdate.attributeTypeMap;
    }

    public constructor() {
    }
}

