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

import { HostMetricEventTypeView } from '../models/HostMetricEventTypeView';
import { Link } from '../models/Link';
import { Raw } from '../models/Raw';
import { TimeMetricValueView } from '../models/TimeMetricValueView';
import { HttpFile } from '../http/http';

export class TimeMetricEventView {
    /**
    * Unique 24-hexadecimal digit string that identifies the [API Key](https://dochub.mongodb.org/core/atlas-create-prog-api-key) that triggered the event. If this resource returns this parameter, it doesn't return the **userId** parameter.
    */

    'apiKeyId'?: string;
    /**
    * Date and time when this event occurred. This parameter expresses its value in the <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener noreferrer\">ISO 8601</a> timestamp format in UTC.
    */

    'created': Date;

    'currentValue'?: TimeMetricValueView;

    'eventTypeName': HostMetricEventTypeView;
    /**
    * Unique 24-hexadecimal digit string that identifies the project in which the event occurred. The **eventId** identifies the specific event.
    */

    'groupId'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the event.
    */

    'id': string;
    /**
    * Flag that indicates whether a MongoDB employee triggered the specified event.
    */

    'isGlobalAdmin'?: boolean;
    /**
    * List of one or more Uniform Resource Locators (URLs) that point to API sub-resources, related API resources, or both. RFC 5988 outlines these relationships.
    */

    'links'?: Array<Link>;
    /**
    * Human-readable label of the metric associated with the **alertId**. This field may change type of **currentValue** field.
    */

    'metricName'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the organization to which these events apply.
    */

    'orgId'?: string;
    /**
    * IANA port on which the MongoDB process listens for requests.
    */

    'port'?: number;
    /**
    * Public part of the [API Key](https://dochub.mongodb.org/core/atlas-create-prog-api-key) that triggered the event. If this resource returns this parameter, it doesn't return the **username** parameter.
    */

    'publicKey'?: string;

    'raw'?: Raw;
    /**
    * IPv4 or IPv6 address from which the user triggered this event.
    */

    'remoteAddress'?: string;
    /**
    * Human-readable label of the replica set associated with the event.
    */

    'replicaSetName'?: string;
    /**
    * Human-readable label of the shard associated with the event.
    */

    'shardName'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the console user who triggered the event. If this resource returns this parameter, it doesn't return the **apiKeyId** parameter.
    */

    'userId'?: string;
    /**
    * Email address for the user who triggered this event. If this resource returns this parameter, it doesn't return the **publicApiKey** parameter.
    */

    'username'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiKeyId",
            "baseName": "apiKeyId",
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
            "name": "currentValue",
            "baseName": "currentValue",
            "type": "TimeMetricValueView",
            "format": ""
        },
        {
            "name": "eventTypeName",
            "baseName": "eventTypeName",
            "type": "HostMetricEventTypeView",
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
            "name": "isGlobalAdmin",
            "baseName": "isGlobalAdmin",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>",
            "format": ""
        },
        {
            "name": "metricName",
            "baseName": "metricName",
            "type": "string",
            "format": ""
        },
        {
            "name": "orgId",
            "baseName": "orgId",
            "type": "string",
            "format": ""
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "publicKey",
            "baseName": "publicKey",
            "type": "string",
            "format": "email"
        },
        {
            "name": "raw",
            "baseName": "raw",
            "type": "Raw",
            "format": ""
        },
        {
            "name": "remoteAddress",
            "baseName": "remoteAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "replicaSetName",
            "baseName": "replicaSetName",
            "type": "string",
            "format": ""
        },
        {
            "name": "shardName",
            "baseName": "shardName",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string",
            "format": ""
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": "email"
        }    ];

    static getAttributeTypeMap() {
        return TimeMetricEventView.attributeTypeMap;
    }

    public constructor() {
    }
}



