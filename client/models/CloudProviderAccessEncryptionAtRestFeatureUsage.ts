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
* Details that describe the Key Management Service (KMS) linked to this Amazon Web Services (AWS) Identity and Access Management (IAM) role.
*/
export class CloudProviderAccessEncryptionAtRestFeatureUsage {
    /**
    * Object that contains the identifying characteristics of the Amazon Web Services (AWS) Key Management Service (KMS). This field always returns a null value.
    */

    'featureId'?: any;
    /**
    * Human-readable label that describes one MongoDB Cloud feature linked to this Amazon Web Services (AWS) Identity and Access Management (IAM) role.
    */

    'featureType'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "featureId",
            "baseName": "featureId",
            "type": "any",
            "format": ""
        },
        {
            "name": "featureType",
            "baseName": "featureType",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CloudProviderAccessEncryptionAtRestFeatureUsage.attributeTypeMap;
    }

    public constructor() {
    }
}


export type CloudProviderAccessEncryptionAtRestFeatureUsageFeatureTypeEnum = "ATLAS_DATA_LAKE" | "ENCRYPTION_AT_REST" | "EXPORT_SNAPSHOT" ;

