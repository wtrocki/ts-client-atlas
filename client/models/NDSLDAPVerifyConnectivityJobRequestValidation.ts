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
* One test that MongoDB Cloud runs to test verification of the provided Lightweight Directory Access Protocol (LDAP) over Transport Layer Security (TLS) configuration details.
*/
export class NDSLDAPVerifyConnectivityJobRequestValidation {
    /**
    * Human-readable string that indicates the result of this verification test.
    */

    'status'?: string;
    /**
    * Human-readable label that identifies this verification test that MongoDB Cloud runs.
    */

    'validationType'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "validationType",
            "baseName": "validationType",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NDSLDAPVerifyConnectivityJobRequestValidation.attributeTypeMap;
    }

    public constructor() {
    }
}


export type NDSLDAPVerifyConnectivityJobRequestValidationStatusEnum = "FAIL" | "OK" ;
export type NDSLDAPVerifyConnectivityJobRequestValidationValidationTypeEnum = "AUTHENTICATE" | "AUTHORIZATION_ENABLED" | "CONNECT" | "PARSE_AUTHZ_QUERY" | "QUERY_SERVER" | "SERVER_SPECIFIED" | "TEMPLATE" ;

