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

import { ClusterEventTypeViewAlertable } from '../models/ClusterEventTypeViewAlertable';
import { Link } from '../models/Link';
import { HttpFile } from '../http/http';

/**
* Cluster alert notifies different activities and conditions about cluster of mongod hosts.
*/
export class ClusterAlertView {
    /**
    * Date and time until which this alert has been acknowledged. This parameter expresses its value in the <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener noreferrer\">ISO 8601</a> timestamp format in UTC. The resource returns this parameter if a MongoDB User previously acknowledged this alert.  - To acknowledge this alert forever, set the parameter value to 100 years in the future.  - To unacknowledge a previously acknowledged alert, set the parameter value to a date in the past.
    */
    'acknowledgedUntil': Date;
    /**
    * Comment that a MongoDB Cloud user submitted when acknowledging the alert.
    */
    'acknowledgementComment'?: string;
    /**
    * MongoDB Cloud username of the person who acknowledged the alert. The response returns this parameter if a MongoDB Cloud user previously acknowledged this alert.
    */
    'acknowledgingUsername'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the alert configuration that sets this alert.
    */
    'alertConfigId': string;
    /**
    * Human-readable label that identifies the cluster to which this alert applies. This resource returns this parameter for alerts of events impacting backups, replica sets, or sharded clusters.
    */
    'clusterName'?: string;
    /**
    * Date and time when MongoDB Cloud created this alert. This parameter expresses its value in the <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener noreferrer\">ISO 8601</a> timestamp format in UTC.
    */
    'created': Date;
    'eventTypeName': ClusterEventTypeViewAlertable;
    /**
    * Unique 24-hexadecimal digit string that identifies the project that owns this alert.
    */
    'groupId'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies this alert.
    */
    'id': string;
    /**
    * Date and time that any notifications were last sent for this alert. This parameter expresses its value in the <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener noreferrer\">ISO 8601</a> timestamp format in UTC. The resource returns this parameter if MongoDB Cloud has sent notifications for this alert.
    */
    'lastNotified'?: Date;
    /**
    * List of one or more Uniform Resource Locators (URLs) that point to API sub-resources, related API resources, or both. RFC 5988 outlines these relationships.
    */
    'links'?: Array<Link>;
    /**
    * Unique 24-hexadecimal character string that identifies the organization that owns the project to which this alert applies.
    */
    'orgId'?: string;
    /**
    * Date and time that this alert changed to `\"status\" : \"CLOSED\"`. This parameter expresses its value in the <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener noreferrer\">ISO 8601</a> timestamp format in UTC. The resource returns this parameter once `\"status\" : \"CLOSED\"`.
    */
    'resolved'?: Date;
    /**
    * State of this alert at the time you requested its details.
    */
    'status': ClusterAlertViewStatusEnum;
    /**
    * Date and time when someone last updated this alert. This parameter expresses its value in the <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener noreferrer\">ISO 8601</a> timestamp format in UTC.
    */
    'updated': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "acknowledgedUntil",
            "baseName": "acknowledgedUntil",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "acknowledgementComment",
            "baseName": "acknowledgementComment",
            "type": "string",
            "format": ""
        },
        {
            "name": "acknowledgingUsername",
            "baseName": "acknowledgingUsername",
            "type": "string",
            "format": "email"
        },
        {
            "name": "alertConfigId",
            "baseName": "alertConfigId",
            "type": "string",
            "format": ""
        },
        {
            "name": "clusterName",
            "baseName": "clusterName",
            "type": "string",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "eventTypeName",
            "baseName": "eventTypeName",
            "type": "ClusterEventTypeViewAlertable",
            "format": ""
        },
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastNotified",
            "baseName": "lastNotified",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>",
            "format": ""
        },
        {
            "name": "orgId",
            "baseName": "orgId",
            "type": "string",
            "format": ""
        },
        {
            "name": "resolved",
            "baseName": "resolved",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ClusterAlertViewStatusEnum",
            "format": ""
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return ClusterAlertView.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ClusterAlertViewStatusEnum = "CANCELLED" | "CLOSED" | "OPEN" | "TRACKING" ;
