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
* Details to integrate one Splunk On-Call account with one MongoDB Cloud project.
*/
export class ApiVictorOpsView {
    /**
    * Key that allows MongoDB Cloud to access your VictorOps account.  **NOTE**: After you create a notification which requires an API or integration key, the key appears partially redacted when you:  * View or edit the alert through the Atlas UI.  * Query the alert for the notification through the Atlas Administration API.
    */
    'apiKey': string;
    /**
    * Routing key associated with your Splunk On-Call account.
    */
    'routingKey'?: string;
    /**
    * Human-readable label that identifies the service to which you want to integrate with MongoDB Cloud. The value must match the third-party service integration type.
    */
    'type'?: ApiVictorOpsViewTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiKey",
            "baseName": "apiKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "routingKey",
            "baseName": "routingKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ApiVictorOpsViewTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiVictorOpsView.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ApiVictorOpsViewTypeEnum = "VICTOR_OPS" ;
