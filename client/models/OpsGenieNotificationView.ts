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
* OpsGenie notification configuration for MongoDB Cloud to send information when an event triggers an alert condition.
*/
export class OpsGenieNotificationView {
    /**
    * Number of minutes that MongoDB Cloud waits after detecting an alert condition before it sends out the first notification.
    */
    'delayMin'?: number;
    /**
    * Number of minutes to wait between successive notifications. MongoDB Cloud sends notifications until someone acknowledges the unacknowledged alert.  PagerDuty, VictorOps, and OpsGenie notifications don't return this element. Configure and manage the notification interval within each of those services.
    */
    'intervalMin'?: number;
    /**
    * API Key that MongoDB Cloud needs to send this notification via Opsgenie. The resource requires this parameter when `\"notifications.[n].typeName\" : \"OPS_GENIE\"`. If the key later becomes invalid, MongoDB Cloud sends an email to the project owners. If the key remains invalid, MongoDB Cloud removes it.  **NOTE**: After you create a notification which requires an API or integration key, the key appears partially redacted when you:  * View or edit the alert through the Atlas UI.  * Query the alert for the notification through the Atlas Administration API.
    */
    'opsGenieApiKey'?: string;
    /**
    * Opsgenie region that indicates which API Uniform Resource Locator (URL) to use.
    */
    'opsGenieRegion'?: OpsGenieNotificationViewOpsGenieRegionEnum;
    /**
    * Human-readable label that displays the alert notification type.
    */
    'typeName': OpsGenieNotificationViewTypeNameEnum;

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
            "name": "opsGenieApiKey",
            "baseName": "opsGenieApiKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "opsGenieRegion",
            "baseName": "opsGenieRegion",
            "type": "OpsGenieNotificationViewOpsGenieRegionEnum",
            "format": ""
        },
        {
            "name": "typeName",
            "baseName": "typeName",
            "type": "OpsGenieNotificationViewTypeNameEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OpsGenieNotificationView.attributeTypeMap;
    }

    public constructor() {
    }
}


export type OpsGenieNotificationViewOpsGenieRegionEnum = "US" | "EU" ;
export type OpsGenieNotificationViewTypeNameEnum = "OPS_GENIE" ;

