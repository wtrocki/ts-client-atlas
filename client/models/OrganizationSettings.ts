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
* Collection of settings that configures the organization.
*/
export class OrganizationSettings {
    /**
    * Flag that indicates whether to require API operations to originate from an IP Address added to the API access list for the specified organization.
    */

    'apiAccessListRequired'?: boolean;
    /**
    * Flag that indicates whether to require users to set up Multi-Factor Authentication (MFA) before accessing the specified organization. To learn more, see: https://www.mongodb.com/docs/atlas/security-multi-factor-authentication/.
    */

    'multiFactorAuthRequired'?: boolean;
    /**
    * Flag that indicates whether to block MongoDB Support from accessing Atlas infrastructure for any deployment in the specified organization without explicit permission. Once this setting is turned on, you can grant MongoDB Support a 24-hour bypass access to the Atlas deployment to resolve support issues. To learn more, see: https://www.mongodb.com/docs/atlas/security-restrict-support-access/.
    */

    'restrictEmployeeAccess'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiAccessListRequired",
            "baseName": "apiAccessListRequired",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "multiFactorAuthRequired",
            "baseName": "multiFactorAuthRequired",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "restrictEmployeeAccess",
            "baseName": "restrictEmployeeAccess",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrganizationSettings.attributeTypeMap;
    }

    public constructor() {
    }
}

