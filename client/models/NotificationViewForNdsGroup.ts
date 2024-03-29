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

import { DatadogNotificationView } from '../models/DatadogNotificationView';
import { EmailNotificationView } from '../models/EmailNotificationView';
import { GroupNotificationView } from '../models/GroupNotificationView';
import { HipChatNotificationView } from '../models/HipChatNotificationView';
import { MicrosoftTeamsNotificationView } from '../models/MicrosoftTeamsNotificationView';
import { OpsGenieNotificationView } from '../models/OpsGenieNotificationView';
import { OrgNotificationView } from '../models/OrgNotificationView';
import { PagerDutyNotificationView } from '../models/PagerDutyNotificationView';
import { SMSNotificationView } from '../models/SMSNotificationView';
import { SlackNotificationView } from '../models/SlackNotificationView';
import { TeamNotificationView } from '../models/TeamNotificationView';
import { UserNotificationView } from '../models/UserNotificationView';
import { VictorOpsNotificationView } from '../models/VictorOpsNotificationView';
import { WebhookNotificationView } from '../models/WebhookNotificationView';
import { HttpFile } from '../http/http';

/**
* One target that MongoDB Cloud sends notifications when an alert triggers.
*/
export class NotificationViewForNdsGroup {
    /**
    * Datadog API Key that MongoDB Cloud needs to send alert notifications to Datadog. You can find this API key in the Datadog dashboard. The resource requires this parameter when `\"notifications.[n].typeName\" : \"DATADOG\"`.  **NOTE**: After you create a notification which requires an API or integration key, the key appears partially redacted when you:  * View or edit the alert through the Atlas UI.  * Query the alert for the notification through the Atlas Administration API.
    */

    'datadogApiKey'?: string;
    /**
    * Datadog region that indicates which API Uniform Resource Locator (URL) to use. The resource requires this parameter when `\"notifications.[n].typeName\" : \"DATADOG\"`.  To learn more about Datadog's regions, see <a href=\"https://docs.datadoghq.com/getting_started/site/\" target=\"_blank\" rel=\"noopener noreferrer\">Datadog Sites</a>.
    */

    'datadogRegion'?: string;
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
    * Email address to which MongoDB Cloud sends alert notifications. The resource requires this parameter when `\"notifications.[n].typeName\" : \"EMAIL\"`. You don’t need to set this value to send emails to individual or groups of MongoDB Cloud users including:  - specific MongoDB Cloud users (`\"notifications.[n].typeName\" : \"USER\"`) - MongoDB Cloud users with specific project roles (`\"notifications.[n].typeName\" : \"GROUP\"`) - MongoDB Cloud users with specific organization roles (`\"notifications.[n].typeName\" : \"ORG\"`) - MongoDB Cloud teams (`\"notifications.[n].typeName\" : \"TEAM\"`)  To send emails to one MongoDB Cloud user or grouping of users, set the `notifications.[n].emailEnabled` parameter.
    */

    'emailAddress'?: string;
    /**
    * Flag that indicates whether MongoDB Cloud should send email notifications. The resource requires this parameter when one of the following values have been set:  - `\"notifications.[n].typeName\" : \"ORG\"` - `\"notifications.[n].typeName\" : \"GROUP\"` - `\"notifications.[n].typeName\" : \"USER\"`
    */

    'emailEnabled'?: boolean;
    /**
    * List that contains the one or more [organization](https://dochub.mongodb.org/core/atlas-org-roles) or [project roles](https://dochub.mongodb.org/core/atlas-proj-roles) that receive the configured alert. The resource requires this parameter when `\"notifications.[n].typeName\" : \"GROUP\"` or `\"notifications.[n].typeName\" : \"ORG\"`. If you include this parameter, MongoDB Cloud sends alerts only to users assigned the roles you specify in the array. If you omit this parameter, MongoDB Cloud sends alerts to users assigned any role.
    */

    'roles'?: Array<string>;
    /**
    * Flag that indicates whether MongoDB Cloud should send text message notifications. The resource requires this parameter when one of the following values have been set:  - `\"notifications.[n].typeName\" : \"ORG\"` - `\"notifications.[n].typeName\" : \"GROUP\"` - `\"notifications.[n].typeName\" : \"USER\"`
    */

    'smsEnabled'?: boolean;
    /**
    * HipChat API token that MongoDB Cloud needs to send alert notifications to HipChat. The resource requires this parameter when `\"notifications.[n].typeName\" : \"HIP_CHAT\"`\". If the token later becomes invalid, MongoDB Cloud sends an email to the project owners. If the token remains invalid, MongoDB Cloud removes it.  **NOTE**: After you create a notification which requires an API or integration key, the key appears partially redacted when you:  * View or edit the alert through the Atlas UI.  * Query the alert for the notification through the Atlas Administration API.
    */

    'notificationToken'?: string;
    /**
    * HipChat API room name to which MongoDB Cloud sends alert notifications. The resource requires this parameter when `\"notifications.[n].typeName\" : \"HIP_CHAT\"`\".
    */

    'roomName'?: string;
    /**
    * Microsoft Teams Webhook Uniform Resource Locator (URL) that MongoDB Cloud needs to send this notification via Microsoft Teams. The resource requires this parameter when `\"notifications.[n].typeName\" : \"MICROSOFT_TEAMS\"`. If the URL later becomes invalid, MongoDB Cloud sends an email to the project owners. If the key remains invalid, MongoDB Cloud removes it.  **NOTE**: When you view or edit the alert for a Microsoft Teams notification, the URL appears partially redacted.
    */

    'microsoftTeamsWebhookUrl'?: string;
    /**
    * API Key that MongoDB Cloud needs to send this notification via Opsgenie. The resource requires this parameter when `\"notifications.[n].typeName\" : \"OPS_GENIE\"`. If the key later becomes invalid, MongoDB Cloud sends an email to the project owners. If the key remains invalid, MongoDB Cloud removes it.  **NOTE**: After you create a notification which requires an API or integration key, the key appears partially redacted when you:  * View or edit the alert through the Atlas UI.  * Query the alert for the notification through the Atlas Administration API.
    */

    'opsGenieApiKey'?: string;
    /**
    * Opsgenie region that indicates which API Uniform Resource Locator (URL) to use.
    */

    'opsGenieRegion'?: string;
    /**
    * PagerDuty region that indicates which API Uniform Resource Locator (URL) to use.
    */

    'region'?: string;
    /**
    * PagerDuty service key that MongoDB Cloud needs to send notifications via PagerDuty. The resource requires this parameter when `\"notifications.[n].typeName\" : \"PAGER_DUTY\"`. If the key later becomes invalid, MongoDB Cloud sends an email to the project owners. If the key remains invalid, MongoDB Cloud removes it.  **NOTE**: After you create a notification which requires an API or integration key, the key appears partially redacted when you:  * View or edit the alert through the Atlas UI.  * Query the alert for the notification through the Atlas Administration API.
    */

    'serviceKey'?: string;
    /**
    * Slack API token or Bot token that MongoDB Cloud needs to send alert notifications via Slack. The resource requires this parameter when `\"notifications.[n].typeName\" : \"SLACK\"`. If the token later becomes invalid, MongoDB Cloud sends an email to the project owners. If the token remains invalid, MongoDB Cloud removes the token.   **NOTE**: After you create a notification which requires an API or integration key, the key appears partially redacted when you:  * View or edit the alert through the Atlas UI.  * Query the alert for the notification through the Atlas Administration API.
    */

    'apiToken'?: string;
    /**
    * Name of the Slack channel to which MongoDB Cloud sends alert notifications. The resource requires this parameter when `\"notifications.[n].typeName\" : \"SLACK\"`.
    */

    'channelName'?: string;
    /**
    * Mobile phone number to which MongoDB Cloud sends alert notifications. The resource requires this parameter when `\"notifications.[n].typeName\" : \"SMS\"`.
    */

    'mobileNumber'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies one MongoDB Cloud team. The resource requires this parameter when `\"notifications.[n].typeName\" : \"TEAM\"`.
    */

    'teamId'?: string;
    /**
    * Name of the MongoDB Cloud team that receives this notification. The resource requires this parameter when `\"notifications.[n].typeName\" : \"TEAM\"`.
    */

    'teamName'?: string;
    /**
    * MongoDB Cloud username of the person to whom MongoDB Cloud sends notifications. Specify only MongoDB Cloud users who belong to the project that owns the alert configuration. The resource requires this parameter when `\"notifications.[n].typeName\" : \"USER\"`.
    */

    'username'?: string;
    /**
    * API key that MongoDB Cloud needs to send alert notifications to Splunk On-Call. The resource requires this parameter when `\"notifications.[n].typeName\" : \"VICTOR_OPS\"`. If the key later becomes invalid, MongoDB Cloud sends an email to the project owners. If the key remains invalid, MongoDB Cloud removes it.  **NOTE**: After you create a notification which requires an API or integration key, the key appears partially redacted when you:  * View or edit the alert through the Atlas UI.  * Query the alert for the notification through the Atlas Administration API.
    */

    'victorOpsApiKey'?: string;
    /**
    * Routing key that MongoDB Cloud needs to send alert notifications to Splunk On-Call. The resource requires this parameter when `\"notifications.[n].typeName\" : \"VICTOR_OPS\"`. If the key later becomes invalid, MongoDB Cloud sends an email to the project owners. If the key remains invalid, MongoDB Cloud removes it.
    */

    'victorOpsRoutingKey'?: string;
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
            "name": "datadogApiKey",
            "baseName": "datadogApiKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "datadogRegion",
            "baseName": "datadogRegion",
            "type": "string",
            "format": ""
        },
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
            "name": "emailAddress",
            "baseName": "emailAddress",
            "type": "string",
            "format": "email"
        },
        {
            "name": "emailEnabled",
            "baseName": "emailEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "smsEnabled",
            "baseName": "smsEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "notificationToken",
            "baseName": "notificationToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "roomName",
            "baseName": "roomName",
            "type": "string",
            "format": ""
        },
        {
            "name": "microsoftTeamsWebhookUrl",
            "baseName": "microsoftTeamsWebhookUrl",
            "type": "string",
            "format": ""
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
            "type": "string",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string",
            "format": ""
        },
        {
            "name": "serviceKey",
            "baseName": "serviceKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "apiToken",
            "baseName": "apiToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "channelName",
            "baseName": "channelName",
            "type": "string",
            "format": ""
        },
        {
            "name": "mobileNumber",
            "baseName": "mobileNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "teamId",
            "baseName": "teamId",
            "type": "string",
            "format": ""
        },
        {
            "name": "teamName",
            "baseName": "teamName",
            "type": "string",
            "format": ""
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": "email"
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
        return NotificationViewForNdsGroup.attributeTypeMap;
    }

    public constructor() {
    }
}


export type NotificationViewForNdsGroupDatadogRegionEnum = "US" | "EU" | "US3" | "US5" ;
export type NotificationViewForNdsGroupTypeNameEnum = "WEBHOOK" ;
export type NotificationViewForNdsGroupRolesEnum = "GROUP_CLUSTER_MANAGER" | "GROUP_DATA_ACCESS_ADMIN" | "GROUP_DATA_ACCESS_READ_ONLY" | "GROUP_DATA_ACCESS_READ_WRITE" | "GROUP_OWNER" | "GROUP_READ_WRITE" | "ORG_OWNER" | "ORG_MEMBER" | "ORG_GROUP_CREATOR" | "ORG_BILLING_ADMIN" | "ORG_READ_ONLY" ;
export type NotificationViewForNdsGroupOpsGenieRegionEnum = "US" | "EU" ;
export type NotificationViewForNdsGroupRegionEnum = "US" | "EU" ;

