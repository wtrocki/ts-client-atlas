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

export class ApiUserRoleAssignment {
    /**
    * Unique 24-hexadecimal digit string that identifies the organization API key.
    */
    'apiUserId'?: string;
    /**
    * List of roles to grant this API key. If you provide this list, provide a minimum of one role and ensure each role applies to this project.
    */
    'roles'?: Array<ApiUserRoleAssignmentRolesEnum>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiUserId",
            "baseName": "apiUserId",
            "type": "string",
            "format": ""
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<ApiUserRoleAssignmentRolesEnum>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiUserRoleAssignment.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ApiUserRoleAssignmentRolesEnum = "GROUP_CLUSTER_MANAGER" | "GROUP_DATA_ACCESS_ADMIN" | "GROUP_DATA_ACCESS_READ_ONLY" | "GROUP_DATA_ACCESS_READ_WRITE" | "GROUP_SEARCH_INDEX_EDITOR" | "GROUP_OWNER" | "GROUP_READ_ONLY" ;

