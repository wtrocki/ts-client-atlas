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

export class ApiAtlasNetPeerRequestBase {
    /**
    * Unique 24-hexadecimal digit string that identifies the MongoDB Cloud network container that contains the specified network peering connection.
    */
    'containerId': string;
    /**
    * Cloud service provider that determines the needed settings to configure the network connection for a virtual private connection.
    */
    'providerName': ApiAtlasNetPeerRequestBaseProviderNameEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "containerId",
            "baseName": "containerId",
            "type": "string",
            "format": ""
        },
        {
            "name": "providerName",
            "baseName": "providerName",
            "type": "ApiAtlasNetPeerRequestBaseProviderNameEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiAtlasNetPeerRequestBase.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ApiAtlasNetPeerRequestBaseProviderNameEnum = "AWS" | "AZURE" | "GCP" ;

