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

export class ApiCreateApiKeyView {
    /**
    * Purpose or explanation provided when someone created this organization API key.
    */
    'desc'?: string;
    /**
    * List of roles to grant this API key. If you provide this list, provide a minimum of one role and ensure each role applies to this organization or project.
    */
    'roles'?: Array<ApiCreateApiKeyViewRolesEnum>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "desc",
            "baseName": "desc",
            "type": "string",
            "format": ""
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<ApiCreateApiKeyViewRolesEnum>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiCreateApiKeyView.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ApiCreateApiKeyViewRolesEnum = "ORG_OWNER" | "ORG_MEMBER" | "ORG_GROUP_CREATOR" | "ORG_BILLING_ADMIN" | "ORG_READ_ONLY" ;
