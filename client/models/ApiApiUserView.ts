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

import { ApiRoleAssignmentView } from '../models/ApiRoleAssignmentView';
import { Link } from '../models/Link';
import { HttpFile } from '../http/http';

export class ApiApiUserView {
    /**
    * Purpose or explanation provided when someone created this organization API key.
    */

    'desc'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies this organization API key assigned to this project.
    */

    'id'?: string;
    /**
    * List of one or more Uniform Resource Locators (URLs) that point to API sub-resources, related API resources, or both. RFC 5988 outlines these relationships.
    */

    'links'?: Array<Link>;
    /**
    * Redacted private key returned for this organization API key. This key displays unredacted when first created.
    */

    'privateKey'?: string;
    /**
    * Public API key value set for the specified organization API key.
    */

    'publicKey'?: string;
    /**
    * List that contains the roles that the API key needs to have. All roles you provide must be valid for the specified project or organization. Each request must include a minimum of one valid role. The resource returns all project and organization roles assigned to the API key.
    */

    'roles'?: Array<ApiRoleAssignmentView>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "desc",
            "baseName": "desc",
            "type": "string",
            "format": ""
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
            "name": "privateKey",
            "baseName": "privateKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "publicKey",
            "baseName": "publicKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<ApiRoleAssignmentView>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiApiUserView.attributeTypeMap;
    }

    public constructor() {
    }
}

