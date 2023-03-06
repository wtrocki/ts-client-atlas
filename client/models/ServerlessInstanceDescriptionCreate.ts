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

import { ServerlessBackupOptions } from '../models/ServerlessBackupOptions';
import { ServerlessProviderSettings } from '../models/ServerlessProviderSettings';
import { HttpFile } from '../http/http';

/**
* Settings that you can specify when you create a serverless instance.
*/
export class ServerlessInstanceDescriptionCreate {
    /**
    * Human-readable label that identifies the serverless instance.
    */

    'name': string;

    'providerSettings': ServerlessProviderSettings;

    'serverlessBackupOptions'?: ServerlessBackupOptions;
    /**
    * Human-readable label that indicates the current operating condition of the serverless instance.
    */

    'stateName'?: string;
    /**
    * Flag that indicates whether termination protection is enabled on the serverless instance. If set to `true`, MongoDB Cloud won't delete the serverless instance. If set to `false`, MongoDB Cloud will delete the serverless instance.
    */

    'terminationProtectionEnabled'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "providerSettings",
            "baseName": "providerSettings",
            "type": "ServerlessProviderSettings",
            "format": ""
        },
        {
            "name": "serverlessBackupOptions",
            "baseName": "serverlessBackupOptions",
            "type": "ServerlessBackupOptions",
            "format": ""
        },
        {
            "name": "stateName",
            "baseName": "stateName",
            "type": "string",
            "format": ""
        },
        {
            "name": "terminationProtectionEnabled",
            "baseName": "terminationProtectionEnabled",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ServerlessInstanceDescriptionCreate.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ServerlessInstanceDescriptionCreateStateNameEnum = "IDLE" | "CREATING" | "UPDATING" | "DELETING" | "DELETED" | "REPAIRING" ;

