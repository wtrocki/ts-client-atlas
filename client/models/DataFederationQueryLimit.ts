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
* Details of a query limit for Data Federation. Query limit is the limit on the amount of usage during a time period based on cost.
*/
export class DataFederationQueryLimit {
    /**
    * Amount that indicates the current usage of the limit.
    */

    'currentUsage'?: number;
    /**
    * Default value of the limit.
    */

    'defaultLimit'?: number;
    /**
    * Only used for Data Federation limits. Timestamp that indicates when this usage limit was last modified. This field uses the ISO 8601 timestamp format in UTC.
    */

    'lastModifiedDate'?: Date;
    /**
    * Maximum value of the limit.
    */

    'maximumLimit'?: number;
    /**
    * Human-readable label that identifies the user-managed limit to modify.
    */

    'name': string;
    /**
    * Only used for Data Federation limits. Action to take when the usage limit is exceeded. If limit span is set to QUERY, this is ignored because MongoDB Cloud stops the query when it exceeds the usage limit.
    */

    'overrunPolicy'?: string;
    /**
    * Amount to set the limit to.
    */

    'value': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "currentUsage",
            "baseName": "currentUsage",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "defaultLimit",
            "baseName": "defaultLimit",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "lastModifiedDate",
            "baseName": "lastModifiedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "maximumLimit",
            "baseName": "maximumLimit",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "overrunPolicy",
            "baseName": "overrunPolicy",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return DataFederationQueryLimit.attributeTypeMap;
    }

    public constructor() {
    }
}


export type DataFederationQueryLimitOverrunPolicyEnum = "BLOCK" | "BLOCK_AND_KILL" ;

