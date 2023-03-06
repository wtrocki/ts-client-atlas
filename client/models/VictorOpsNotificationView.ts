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
* VictorOps notification configuration for MongoDB Cloud to send information when an event triggers an alert condition.
*/
export class VictorOpsNotificationView {
    /**
    * Number of minutes that MongoDB Cloud waits after detecting an alert condition before it sends out the first notification.
    */
    'delayMin'?: number;
    /**
    * Number of minutes to wait between successive notifications. MongoDB Cloud sends notifications until someone acknowledges the unacknowledged alert.  PagerDuty, VictorOps, and OpsGenie notifications don't return this element. Configure and manage the notification interval within each of those services.
    */
    'intervalMin'?: number;
    /**
    * Human-readable label that displays the alert notification type.
    */
    'typeName': VictorOpsNotificationViewTypeNameEnum;
    /**
    * API key that MongoDB Cloud needs to send alert notifications to Splunk On-Call. The resource requires this parameter when `\"notifications.[n].typeName\" : \"VICTOR_OPS\"`. If the key later becomes invalid, MongoDB Cloud sends an email to the project owners. If the key remains invalid, MongoDB Cloud removes it.  **NOTE**: After you create a notification which requires an API or integration key, the key appears partially redacted when you:  * View or edit the alert through the Atlas UI.  * Query the alert for the notification through the Atlas Administration API.
    */
    'victorOpsApiKey'?: string;
    /**
    * Routing key that MongoDB Cloud needs to send alert notifications to Splunk On-Call. The resource requires this parameter when `\"notifications.[n].typeName\" : \"VICTOR_OPS\"`. If the key later becomes invalid, MongoDB Cloud sends an email to the project owners. If the key remains invalid, MongoDB Cloud removes it.
    */
    'victorOpsRoutingKey'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "delayMin",
            "baseName": "delayMin",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "intervalMin",
            "baseName": "intervalMin",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "typeName",
            "baseName": "typeName",
            "type": "VictorOpsNotificationViewTypeNameEnum",
            "format": ""
        },
        {
            "name": "victorOpsApiKey",
            "baseName": "victorOpsApiKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "victorOpsRoutingKey",
            "baseName": "victorOpsRoutingKey",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VictorOpsNotificationView.attributeTypeMap;
    }

    public constructor() {
    }
}


export type VictorOpsNotificationViewTypeNameEnum = "VICTOR_OPS" ;
