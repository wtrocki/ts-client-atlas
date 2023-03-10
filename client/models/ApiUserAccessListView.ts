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
import { HttpFile } from '../http/http';

export class ApiUserAccessListView {
    /**
    * Range of network addresses that you want to add to the access list for the API key. This parameter requires the range to be expressed in classless inter-domain routing (CIDR) notation of Internet Protocol version 4 or version 6 addresses. You can set a value for this parameter or **ipAddress** but not both in the same request.
    */

    'cidrBlock'?: string;
    /**
    * Total number of requests that have originated from the Internet Protocol (IP) address given as the value of the *lastUsedAddress* parameter.
    */

    'count'?: number;
    /**
    * Date and time when someone added the network addresses to the specified API access list. This parameter expresses its value in the ISO 8601 timestamp format in UTC.
    */

    'created'?: Date;
    /**
    * Network address that you want to add to the access list for the API key. This parameter requires the address to be expressed as one Internet Protocol version 4 or version 6 address. You can set a value for this parameter or **cidrBlock** but not both in the same request.
    */

    'ipAddress'?: string;
    /**
    * Date and time when MongoDB Cloud received the most recent request that originated from this Internet Protocol version 4 or version 6 address. The resource returns this parameter when at least one request has originated from this IP address. MongoDB Cloud updates this parameter each time a client accesses the permitted resource. This parameter expresses its value in the ISO 8601 timestamp format in UTC.
    */

    'lastUsed'?: Date;
    /**
    * Network address that issued the most recent request to the API. This parameter requires the address to be expressed as one Internet Protocol version 4 or version 6 address. The resource returns this parameter after this IP address made at least one request.
    */

    'lastUsedAddress'?: string;
    /**
    * List of one or more Uniform Resource Locators (URLs) that point to API sub-resources, related API resources, or both. RFC 5988 outlines these relationships.
    */

    'links'?: Array<Link>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cidrBlock",
            "baseName": "cidrBlock",
            "type": "string",
            "format": ""
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "ipAddress",
            "baseName": "ipAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastUsed",
            "baseName": "lastUsed",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastUsedAddress",
            "baseName": "lastUsedAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiUserAccessListView.attributeTypeMap;
    }

    public constructor() {
    }
}

