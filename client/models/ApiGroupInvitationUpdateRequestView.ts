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

export class ApiGroupInvitationUpdateRequestView {
    /**
    * One or more organization or project level roles to assign to the MongoDB Cloud user.
    */

    'roles'?: Set<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Set<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiGroupInvitationUpdateRequestView.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ApiGroupInvitationUpdateRequestViewRolesEnum = "GROUP_CLUSTER_MANAGER" | "GROUP_DATA_ACCESS_ADMIN" | "GROUP_DATA_ACCESS_READ_ONLY" | "GROUP_DATA_ACCESS_READ_WRITE" | "GROUP_OWNER" | "GROUP_READ_ONLY" ;

