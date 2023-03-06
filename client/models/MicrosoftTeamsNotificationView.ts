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
* Microsoft Teams notification configuration for MongoDB Cloud to send information when an event triggers an alert condition.
*/
export class MicrosoftTeamsNotificationView {
    /**
    * Number of minutes that MongoDB Cloud waits after detecting an alert condition before it sends out the first notification.
    */
    'delayMin'?: number;
    /**
    * Number of minutes to wait between successive notifications. MongoDB Cloud sends notifications until someone acknowledges the unacknowledged alert.  PagerDuty, VictorOps, and OpsGenie notifications don't return this element. Configure and manage the notification interval within each of those services.
    */
    'intervalMin'?: number;
    /**
    * Microsoft Teams Webhook Uniform Resource Locator (URL) that MongoDB Cloud needs to send this notification via Microsoft Teams. The resource requires this parameter when `\"notifications.[n].typeName\" : \"MICROSOFT_TEAMS\"`. If the URL later becomes invalid, MongoDB Cloud sends an email to the project owners. If the key remains invalid, MongoDB Cloud removes it.  **NOTE**: When you view or edit the alert for a Microsoft Teams notification, the URL appears partially redacted.
    */
    'microsoftTeamsWebhookUrl'?: string;
    /**
    * Human-readable label that displays the alert notification type.
    */
    'typeName': MicrosoftTeamsNotificationViewTypeNameEnum;

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
            "name": "microsoftTeamsWebhookUrl",
            "baseName": "microsoftTeamsWebhookUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "typeName",
            "baseName": "typeName",
            "type": "MicrosoftTeamsNotificationViewTypeNameEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MicrosoftTeamsNotificationView.attributeTypeMap;
    }

    public constructor() {
    }
}


export type MicrosoftTeamsNotificationViewTypeNameEnum = "MICROSOFT_TEAMS" ;

