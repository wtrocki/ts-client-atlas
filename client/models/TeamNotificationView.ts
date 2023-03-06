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
* Team notification configuration for MongoDB Cloud to send information when an event triggers an alert condition.
*/
export class TeamNotificationView {
    /**
    * Number of minutes that MongoDB Cloud waits after detecting an alert condition before it sends out the first notification.
    */
    'delayMin'?: number;
    /**
    * Flag that indicates whether MongoDB Cloud should send email notifications. The resource requires this parameter when one of the following values have been set:  - `\"notifications.[n].typeName\" : \"ORG\"` - `\"notifications.[n].typeName\" : \"GROUP\"` - `\"notifications.[n].typeName\" : \"USER\"`
    */
    'emailEnabled'?: boolean;
    /**
    * Number of minutes to wait between successive notifications. MongoDB Cloud sends notifications until someone acknowledges the unacknowledged alert.  PagerDuty, VictorOps, and OpsGenie notifications don't return this element. Configure and manage the notification interval within each of those services.
    */
    'intervalMin'?: number;
    /**
    * Flag that indicates whether MongoDB Cloud should send text message notifications. The resource requires this parameter when one of the following values have been set:  - `\"notifications.[n].typeName\" : \"ORG\"` - `\"notifications.[n].typeName\" : \"GROUP\"` - `\"notifications.[n].typeName\" : \"USER\"`
    */
    'smsEnabled'?: boolean;
    /**
    * Unique 24-hexadecimal digit string that identifies one MongoDB Cloud team. The resource requires this parameter when `\"notifications.[n].typeName\" : \"TEAM\"`.
    */
    'teamId'?: string;
    /**
    * Name of the MongoDB Cloud team that receives this notification. The resource requires this parameter when `\"notifications.[n].typeName\" : \"TEAM\"`.
    */
    'teamName'?: string;
    /**
    * Human-readable label that displays the alert notification type.
    */
    'typeName': TeamNotificationViewTypeNameEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "delayMin",
            "baseName": "delayMin",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "emailEnabled",
            "baseName": "emailEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "intervalMin",
            "baseName": "intervalMin",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "smsEnabled",
            "baseName": "smsEnabled",
            "type": "boolean",
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
            "name": "typeName",
            "baseName": "typeName",
            "type": "TeamNotificationViewTypeNameEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TeamNotificationView.attributeTypeMap;
    }

    public constructor() {
    }
}


export type TeamNotificationViewTypeNameEnum = "TEAM" ;
