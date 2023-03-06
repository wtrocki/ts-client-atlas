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

import { ServerlessAWSTenantEndpointUpdate } from '../models/ServerlessAWSTenantEndpointUpdate';
import { ServerlessAzureTenantEndpointUpdate } from '../models/ServerlessAzureTenantEndpointUpdate';
import { HttpFile } from '../http/http';

/**
* Update view for a serverless tenant endpoint.
*/
export class ServerlessTenantEndpointUpdate {
    /**
    * Unique string that identifies the Azure private endpoint's network interface for this private endpoint service.
    */
    'cloudProviderEndpointId'?: string;
    /**
    * Human-readable comment associated with the private endpoint.
    */
    'comment'?: string;
    'providerName': string;
    /**
    * IPv4 address of the private endpoint in your Azure VNet that someone added to this private endpoint service.
    */
    'privateEndpointIpAddress'?: string;

    static readonly discriminator: string | undefined = "providerName";

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cloudProviderEndpointId",
            "baseName": "cloudProviderEndpointId",
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
        },
        {
            "name": "privateEndpointIpAddress",
            "baseName": "privateEndpointIpAddress",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ServerlessTenantEndpointUpdate.attributeTypeMap;
    }

    public constructor() {
        this.providerName = "ServerlessTenantEndpointUpdate";
    }
}
