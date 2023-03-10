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
* Policy for automatically exporting cloud backup snapshots.
*/
export class AutoExportPolicyView {
    /**
    * Unique 24-hexadecimal character string that identifies the AWS Bucket.
    */

    'exportBucketId'?: string;
    /**
    * Human-readable label that indicates the rate at which the export policy item occurs.
    */

    'frequencyType'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "exportBucketId",
            "baseName": "exportBucketId",
            "type": "string",
            "format": ""
        },
        {
            "name": "frequencyType",
            "baseName": "frequencyType",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AutoExportPolicyView.attributeTypeMap;
    }

    public constructor() {
    }
}


export type AutoExportPolicyViewFrequencyTypeEnum = "monthly" ;

