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
* Webhook notification configuration for MongoDB Cloud to send information when an event triggers an alert condition.
*/
export class WebhookNotificationView {
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

    'typeName': string;
    /**
    * Authentication secret for a webhook-based alert.  Atlas returns this value if you set `\"notifications.[n].typeName\" :\"WEBHOOK\"` and either: * You set `notification.[n].webhookSecret` to a non-empty string * You set a default webhookSecret either on the [Integrations](https://www.mongodb.com/docs/atlas/tutorial/third-party-service-integrations/#std-label-third-party-integrations) page, or with the [Integrations API](#tag/Third-Party-Service-Integrations/operation/createIntegration)  **NOTE**: When you view or edit the alert for a webhook notification, the secret appears completely redacted.
    */

    'webhookSecret'?: string;
    /**
    * Target URL for a webhook-based alert.  Atlas returns this value if you set `\"notifications.[n].typeName\" :\"WEBHOOK\"` and either: * You set `notification.[n].webhookURL` to a non-empty string * You set a default webhookUrl either on the [Integrations](https://www.mongodb.com/docs/atlas/tutorial/third-party-service-integrations/#std-label-third-party-integrations) page, or with the [Integrations API](#tag/Third-Party-Service-Integrations/operation/createIntegration)  **NOTE**: When you view or edit the alert for a Webhook URL notification, the URL appears partially redacted.
    */

    'webhookUrl'?: string;

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
            "type": "string",
            "format": ""
        },
        {
            "name": "webhookSecret",
            "baseName": "webhookSecret",
            "type": "string",
            "format": ""
        },
        {
            "name": "webhookUrl",
            "baseName": "webhookUrl",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WebhookNotificationView.attributeTypeMap;
    }

    public constructor() {
    }
}


export type WebhookNotificationViewTypeNameEnum = "WEBHOOK" ;

