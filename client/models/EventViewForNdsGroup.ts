/**
 * MongoDB Atlas Administration API
 * The MongoDB Atlas Administration API allows developers to manage all components in MongoDB Atlas.  The Atlas Administration API uses HTTP Digest Authentication to authenticate requests. Provide a programmatic API public key and corresponding private key as the username and password when constructing the HTTP request. For example, to [return database access history](#tag/Access-Tracking/operation/listAccessLogsByClusterName) with [cURL](https://en.wikipedia.org/wiki/CURL), run the following command in the terminal:  ``` curl --user \"{PUBLIC-KEY}:{PRIVATE-KEY}\" \\   --digest \\   --header \"Accept: application/vnd.atlas.2023-02-01+json\" \\   GET \"https://cloud.mongodb.com/api/atlas/v2/groups/{groupId}/dbAccessHistory/clusters/{clusterName}?pretty=true\" ```  To learn more, see [Get Started with the Atlas Administration API](https://www.mongodb.com/docs/atlas/configure-api-access/). For support, see [MongoDB Support](https://www.mongodb.com/support/get-started).
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Link } from '../models/Link';
import { NumberMetricValue } from '../models/NumberMetricValue';
import { Raw } from '../models/Raw';
import { HttpFile } from '../http/http';

export class EventViewForNdsGroup {
    /**
    * Unique 24-hexadecimal digit string that identifies the [API Key](https://dochub.mongodb.org/core/atlas-create-prog-api-key) that triggered the event. If this resource returns this parameter, it doesn't return the **userId** parameter.
    */

    'apiKeyId'?: string;
    /**
    * Date and time when this event occurred. This parameter expresses its value in the <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener noreferrer\">ISO 8601</a> timestamp format in UTC.
    */

    'created'?: Date;
    /**
    * Unique identifier of event type.
    */

    'eventTypeName'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the project in which the event occurred. The **eventId** identifies the specific event.
    */

    'groupId'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the event.
    */

    'id'?: string;
    /**
    * Flag that indicates whether a MongoDB employee triggered the specified event.
    */

    'isGlobalAdmin'?: boolean;
    /**
    * List of one or more Uniform Resource Locators (URLs) that point to API sub-resources, related API resources, or both. RFC 5988 outlines these relationships.
    */

    'links'?: Array<Link>;
    /**
    * Unique 24-hexadecimal digit string that identifies the organization to which these events apply.
    */

    'orgId'?: string;
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
    * Unique 24-hexadecimal digit string that identifies the console user who triggered the event. If this resource returns this parameter, it doesn't return the **apiKeyId** parameter.
    */

    'userId'?: string;
    /**
    * Email address for the user who triggered this event. If this resource returns this parameter, it doesn't return the **publicApiKey** parameter.
    */

    'username'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the alert associated with the event.
    */

    'alertId'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the alert configuration associated with the **alertId**.
    */

    'alertConfigId'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies of the invoice associated with the event.
    */

    'invoiceId'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the invoice payment associated with this event.
    */

    'paymentId'?: string;
    /**
    * Human-readable label of the shard associated with the event.
    */

    'shardName'?: string;
    /**
    * Human-readable label of the collection on which the event occurred. The resource returns this parameter when the **eventTypeName** includes `DATA_EXPLORER`.
    */

    'collection'?: string;
    /**
    * Human-readable label of the database on which this incident occurred. The resource returns this parameter when `\"eventTypeName\" : \"DATA_EXPLORER\"` or `\"eventTypeName\" : \"DATA_EXPLORER_CRUD\"`.
    */

    'database'?: string;
    /**
    * Action that the database attempted to execute when the event triggered. The response returns this parameter when `eventTypeName\" : \"DATA_EXPLORER\"`.
    */

    'opType'?: string;
    /**
    * IANA port on which the MongoDB process listens for requests.
    */

    'port'?: number;
    /**
    * Human-readable label of the replica set associated with the event.
    */

    'replicaSetName'?: string;

    'currentValue'?: NumberMetricValue;
    /**
    * Human-readable label of the metric associated with the **alertId**. This field may change type of **currentValue** field.
    */

    'metricName'?: string;
    /**
    * The username of the MongoDB User that was created, deleted, or edited.
    */

    'dbUserUsername'?: string;
    /**
    * Entry in the list of source host addresses that the API key accepts and this event targets.
    */

    'whitelistEntry'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the endpoint associated with this event.
    */

    'endpointId'?: string;
    /**
    * Unique identification string that the cloud provider uses to identify the private endpoint.
    */

    'providerEndpointId'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the organization team associated with this event.
    */

    'teamId'?: string;
    /**
    * Email address for the console user that this event targets. The resource returns this parameter when `\"eventTypeName\" : \"USER\"`.
    */

    'targetUsername'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the resource associated with the event.
    */

    'resourceId'?: string;
    /**
    * Unique identifier of resource type.
    */

    'resourceType'?: string;

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
            "name": "orgId",
            "baseName": "orgId",
            "type": "string",
            "format": ""
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
        },
        {
            "name": "alertId",
            "baseName": "alertId",
            "type": "string",
            "format": ""
        },
        {
            "name": "alertConfigId",
            "baseName": "alertConfigId",
            "type": "string",
            "format": ""
        },
        {
            "name": "invoiceId",
            "baseName": "invoiceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentId",
            "baseName": "paymentId",
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
            "name": "collection",
            "baseName": "collection",
            "type": "string",
            "format": ""
        },
        {
            "name": "database",
            "baseName": "database",
            "type": "string",
            "format": ""
        },
        {
            "name": "opType",
            "baseName": "opType",
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
            "name": "replicaSetName",
            "baseName": "replicaSetName",
            "type": "string",
            "format": ""
        },
        {
            "name": "currentValue",
            "baseName": "currentValue",
            "type": "NumberMetricValue",
            "format": ""
        },
        {
            "name": "metricName",
            "baseName": "metricName",
            "type": "string",
            "format": ""
        },
        {
            "name": "dbUserUsername",
            "baseName": "dbUserUsername",
            "type": "string",
            "format": ""
        },
        {
            "name": "whitelistEntry",
            "baseName": "whitelistEntry",
            "type": "string",
            "format": ""
        },
        {
            "name": "endpointId",
            "baseName": "endpointId",
            "type": "string",
            "format": ""
        },
        {
            "name": "providerEndpointId",
            "baseName": "providerEndpointId",
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
            "name": "targetUsername",
            "baseName": "targetUsername",
            "type": "string",
            "format": "email"
        },
        {
            "name": "resourceId",
            "baseName": "resourceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "resourceType",
            "baseName": "resourceType",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EventViewForNdsGroup.attributeTypeMap;
    }

    public constructor() {
    }
}

