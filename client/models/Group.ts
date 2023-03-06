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
