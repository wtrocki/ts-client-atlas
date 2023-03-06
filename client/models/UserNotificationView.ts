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
* User notification configuration for MongoDB Cloud to send information when an event triggers an alert condition.
*/
export class UserNotificationView {
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
    * Human-readable label that displays the alert notification type.
    */
    'typeName': UserNotificationViewTypeNameEnum;
    /**
    * MongoDB Cloud username of the person to whom MongoDB Cloud sends notifications. Specify only MongoDB Cloud users who belong to the project that owns the alert configuration. The resource requires this parameter when `\"notifications.[n].typeName\" : \"USER\"`.
    */
    'username'?: string;

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
            "name": "typeName",
            "baseName": "typeName",
            "type": "UserNotificationViewTypeNameEnum",
            "format": ""
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": "email"
        }    ];

    static getAttributeTypeMap() {
        return UserNotificationView.attributeTypeMap;
    }

    public constructor() {
    }
}


export type UserNotificationViewTypeNameEnum = "USER" ;
