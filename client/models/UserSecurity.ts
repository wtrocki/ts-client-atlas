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

import { CustomerX509 } from '../models/CustomerX509';
import { Link } from '../models/Link';
import { NDSLDAP } from '../models/NDSLDAP';
import { HttpFile } from '../http/http';

export class UserSecurity {
    'customerX509'?: CustomerX509;
    'ldap'?: NDSLDAP;
    /**
    * List of one or more Uniform Resource Locators (URLs) that point to API sub-resources, related API resources, or both. RFC 5988 outlines these relationships.
    */
    'links'?: Array<Link>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "customerX509",
            "baseName": "customerX509",
            "type": "CustomerX509",
            "format": ""
        },
        {
            "name": "ldap",
            "baseName": "ldap",
            "type": "NDSLDAP",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserSecurity.attributeTypeMap;
    }

    public constructor() {
    }
}
