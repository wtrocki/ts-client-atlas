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
* Authentication attempt, one per object, made against the cluster.
*/
export class ApiMongoDBAccessLogsView {
    /**
    * Flag that indicates whether the response should return successful authentication attempts only.
    */
    'authResult'?: boolean;
    /**
    * Database against which someone attempted to authenticate.
    */
    'authSource'?: string;
    /**
    * Reason that the authentication failed. Null if authentication succeeded.
    */
    'failureReason'?: string;
    /**
    * Unique 24-hexadecimal character string that identifies the project.
    */
    'groupId'?: string;
    /**
    * Human-readable label that identifies the hostname of the target node that received the authentication attempt.
    */
    'hostname'?: string;
    /**
    * Internet Protocol address that attempted to authenticate with the database.
    */
    'ipAddress'?: string;
    /**
    * Text of the host log concerning the authentication attempt.
    */
    'logLine'?: string;
    /**
    * Date and time when someone made this authentication attempt. MongoDB Cloud represents this timestamp in ISO 8601 format in UTC.
    */
    'timestamp'?: string;
    /**
    * Username used to authenticate against the database.
    */
    'username'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "authResult",
            "baseName": "authResult",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "authSource",
            "baseName": "authSource",
            "type": "string",
            "format": ""
        },
        {
            "name": "failureReason",
            "baseName": "failureReason",
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
            "name": "hostname",
            "baseName": "hostname",
            "type": "string",
            "format": ""
        },
        {
            "name": "ipAddress",
            "baseName": "ipAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "logLine",
            "baseName": "logLine",
            "type": "string",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "string",
            "format": ""
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiMongoDBAccessLogsView.attributeTypeMap;
    }

    public constructor() {
    }
}

