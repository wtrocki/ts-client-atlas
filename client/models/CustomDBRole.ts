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

import { DBAction } from '../models/DBAction';
import { InheritedRole } from '../models/InheritedRole';
import { HttpFile } from '../http/http';

export class CustomDBRole {
    /**
    * List of the individual privilege actions that the role grants.
    */
    'actions'?: Array<DBAction>;
    /**
    * List of the built-in roles that this custom role inherits.
    */
    'inheritedRoles'?: Set<InheritedRole>;
    /**
    * Human-readable label that identifies the role for the request. This name must be unique for this custom role in this project.
    */
    'roleName': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "actions",
            "baseName": "actions",
            "type": "Array<DBAction>",
            "format": ""
        },
        {
            "name": "inheritedRoles",
            "baseName": "inheritedRoles",
            "type": "Set<InheritedRole>",
            "format": ""
        },
        {
            "name": "roleName",
            "baseName": "roleName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomDBRole.attributeTypeMap;
    }

    public constructor() {
    }
}
