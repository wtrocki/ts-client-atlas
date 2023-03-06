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

import { Link } from '../models/Link';
import { MatcherView } from '../models/MatcherView';
import { NotificationView } from '../models/NotificationView';
import { HttpFile } from '../http/http';

/**
* Alert settings allows to select which conditions trigger alerts and how users are notified.
*/
export class AlertConfigView {
    /**
    * Date and time when MongoDB Cloud created the alert configuration. This parameter expresses its value in the <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener noreferrer\">ISO 8601</a> timestamp format in UTC.
    */
    'created'?: Date;
    /**
    * Flag that indicates whether someone enabled this alert configuration for the specified project.
    */
    'enabled'?: boolean;
    'eventTypeName'?: string;
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
    'matchers'?: Array<MatcherView>;
    /**
    * List that contains the targets that MongoDB Cloud sends notifications.
    */
    'notifications'?: Array<NotificationView>;
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
            "type": "string",
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
            "type": "Array<MatcherView>",
            "format": ""
        },
        {
            "name": "notifications",
            "baseName": "notifications",
            "type": "Array<NotificationView>",
            "format": ""
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return AlertConfigView.attributeTypeMap;
    }

    public constructor() {
    }
}

