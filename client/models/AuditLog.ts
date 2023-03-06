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

export class AuditLog {
    /**
    * Flag that indicates whether someone set auditing to track successful authentications. This only applies to the `\"atype\" : \"authCheck\"` audit filter. Setting this parameter to `true` degrades cluster performance.
    */
    'auditAuthorizationSuccess': boolean;
    /**
    * JSON document that specifies which events to record. Escape any characters that may prevent parsing, such as single or double quotes, using a backslash (`\\`).
    */
    'auditFilter': string;
    /**
    * Human-readable label that displays how to configure the audit filter.
    */
    'configurationType'?: AuditLogConfigurationTypeEnum;
    /**
    * Flag that indicates whether someone enabled database auditing for the specified project.
    */
    'enabled': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "auditAuthorizationSuccess",
            "baseName": "auditAuthorizationSuccess",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "auditFilter",
            "baseName": "auditFilter",
            "type": "string",
            "format": ""
        },
        {
            "name": "configurationType",
            "baseName": "configurationType",
            "type": "AuditLogConfigurationTypeEnum",
            "format": ""
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AuditLog.attributeTypeMap;
    }

    public constructor() {
    }
}


export type AuditLogConfigurationTypeEnum = "NONE" | "FILTER_BUILDER" | "FILTER_JSON" ;
