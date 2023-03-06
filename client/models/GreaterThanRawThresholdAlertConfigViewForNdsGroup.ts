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

import { GreaterThanRawThresholdView } from '../models/GreaterThanRawThresholdView';
import { Link } from '../models/Link';
import { NotificationViewForNdsGroup } from '../models/NotificationViewForNdsGroup';
import { ReplicaSetEventTypeViewForNdsGroupAlertableWithThreshold } from '../models/ReplicaSetEventTypeViewForNdsGroupAlertableWithThreshold';
import { ReplicaSetMatcherView } from '../models/ReplicaSetMatcherView';
import { HttpFile } from '../http/http';

export class GreaterThanRawThresholdAlertConfigViewForNdsGroup {
    /**
    * Date and time when MongoDB Cloud created the alert configuration. This parameter expresses its value in the <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener noreferrer\">ISO 8601</a> timestamp format in UTC.
    */
    'created'?: Date;
    /**
    * Flag that indicates whether someone enabled this alert configuration for the specified project.
    */
    'enabled'?: boolean;
    'eventTypeName': ReplicaSetEventTypeViewForNdsGroupAlertableWithThreshold;
    /**
    * Unique 24-hexadecimal digit string that identifies the project that owns this alert configuration.
    */
    'groupId'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies this alert configuration.
    */
    'id'?: string;
    /**
    * List of one or more Uniform Resource Locators (URLs) that point to API sub-resources, related API resources, or both. RFC 5988 outlines these relationships.
    */
    'links'?: Array<Link>;
    /**
    * List of rules that determine whether MongoDB Cloud checks an object for the alert configuration. You can filter using the matchers array if the **eventTypeName** specifies an event for a host, replica set, or sharded cluster.
    */
    'matchers'?: Array<ReplicaSetMatcherView>;
    /**
    * List that contains the targets that MongoDB Cloud sends notifications.
    */
    'notifications'?: Array<NotificationViewForNdsGroup>;
    'threshold'?: GreaterThanRawThresholdView;
    /**
    * Date and time when someone last updated this alert configuration. This parameter expresses its value in the <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener noreferrer\">ISO 8601</a> timestamp format in UTC.
    */
    'updated'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "eventTypeName",
            "baseName": "eventTypeName",
            "type": "ReplicaSetEventTypeViewForNdsGroupAlertableWithThreshold",
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
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>",
            "format": ""
        },
        {
            "name": "matchers",
            "baseName": "matchers",
            "type": "Array<ReplicaSetMatcherView>",
            "format": ""
        },
        {
            "name": "notifications",
            "baseName": "notifications",
            "type": "Array<NotificationViewForNdsGroup>",
            "format": ""
        },
        {
            "name": "threshold",
            "baseName": "threshold",
            "type": "GreaterThanRawThresholdView",
            "format": ""
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return GreaterThanRawThresholdAlertConfigViewForNdsGroup.attributeTypeMap;
    }

    public constructor() {
    }
}



