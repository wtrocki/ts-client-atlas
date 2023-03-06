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
* Summary notification configuration for MongoDB Cloud to send information when an event triggers an alert condition.
*/
export class SummaryNotificationView {
    /**
    * Number of minutes that MongoDB Cloud waits after detecting an alert condition before it sends out the first notification.
    */
    'delayMin'?: number;
    /**
    * Email address to which MongoDB Cloud sends alert notifications. The resource requires this parameter when `\"notifications.[n].typeName\" : \"EMAIL\"`. You don’t need to set this value to send emails to individual or groups of MongoDB Cloud users including:  - specific MongoDB Cloud users (`\"notifications.[n].typeName\" : \"USER\"`) - MongoDB Cloud users with specific project roles (`\"notifications.[n].typeName\" : \"GROUP\"`) - MongoDB Cloud users with specific organization roles (`\"notifications.[n].typeName\" : \"ORG\"`) - MongoDB Cloud teams (`\"notifications.[n].typeName\" : \"TEAM\"`)  To send emails to one MongoDB Cloud user or grouping of users, set the **notifications.[n].emailEnabled** parameter.
    */
    'emailAddress'?: string;
    /**
    * Number of minutes to wait between successive notifications. MongoDB Cloud sends notifications until someone acknowledges the unacknowledged alert.  PagerDuty, VictorOps, and OpsGenie notifications don't return this element. Configure and manage the notification interval within each of those services.
    */
    'intervalMin'?: number;
    /**
    * Human-readable label that displays the alert notification type.
    */
    'typeName': SummaryNotificationViewTypeNameEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "delayMin",
            "baseName": "delayMin",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "emailAddress",
            "baseName": "emailAddress",
            "type": "string",
            "format": "email"
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
            "type": "SummaryNotificationViewTypeNameEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SummaryNotificationView.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SummaryNotificationViewTypeNameEnum = "SUMMARY" ;
