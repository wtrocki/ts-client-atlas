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
* MongoDB Cloud user linked to this federated authentication.
*/
export class FederatedUserView {
    /**
    * Email address of the MongoDB Cloud user linked to the federated organization.
    */

    'emailAddress': string;
    /**
    * Unique 24-hexadecimal digit string that identifies the federation to which this MongoDB Cloud user belongs.
    */

    'federationSettingsId': string;
    /**
    * First or given name that belongs to the MongoDB Cloud user.
    */

    'firstName': string;
    /**
    * Last name, family name, or surname that belongs to the MongoDB Cloud user.
    */

    'lastName': string;
    /**
    * Unique 24-hexadecimal digit string that identifies this user.
    */

    'userId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "emailAddress",
            "baseName": "emailAddress",
            "type": "string",
            "format": "email"
        },
        {
            "name": "federationSettingsId",
            "baseName": "federationSettingsId",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FederatedUserView.attributeTypeMap;
    }

    public constructor() {
    }
}

