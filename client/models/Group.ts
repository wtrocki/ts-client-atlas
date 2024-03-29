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
import { HttpFile } from '../http/http';

export class Group {
    /**
    * Quantity of MongoDB Cloud clusters deployed in this project.
    */

    'clusterCount': number;
    /**
    * Date and time when MongoDB Cloud created this project. This parameter expresses its value in the ISO 8601 timestamp format in UTC.
    */

    'created': Date;
    /**
    * Unique 24-hexadecimal digit string that identifies the MongoDB Cloud project.
    */

    'id'?: string;
    /**
    * List of one or more Uniform Resource Locators (URLs) that point to API sub-resources, related API resources, or both. RFC 5988 outlines these relationships.
    */

    'links'?: Array<Link>;
    /**
    * Human-readable label that identifies the project included in the MongoDB Cloud organization.
    */

    'name': string;
    /**
    * Unique 24-hexadecimal digit string that identifies the MongoDB Cloud organization to which the project belongs.
    */

    'orgId': string;
    /**
    * Region usage restrictions that designate the project's AWS region.
    */

    'regionUsageRestrictions'?: string;
    /**
    * Flag that indicates whether to create the project with default alert settings.
    */

    'withDefaultAlertsSettings'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "clusterCount",
            "baseName": "clusterCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
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
            "name": "name",
            "baseName": "name",
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
            "name": "regionUsageRestrictions",
            "baseName": "regionUsageRestrictions",
            "type": "string",
            "format": ""
        },
        {
            "name": "withDefaultAlertsSettings",
            "baseName": "withDefaultAlertsSettings",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Group.attributeTypeMap;
    }

    public constructor() {
    }
}

