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

import { CloudProviderAccessAWSIAMRole } from '../models/CloudProviderAccessAWSIAMRole';
import { HttpFile } from '../http/http';

export class CloudProviderAccess {
    /**
    * List that contains the Amazon Web Services (AWS) IAM roles registered and authorized with MongoDB Cloud.
    */

    'awsIamRoles'?: Array<CloudProviderAccessAWSIAMRole>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "awsIamRoles",
            "baseName": "awsIamRoles",
            "type": "Array<CloudProviderAccessAWSIAMRole>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CloudProviderAccess.attributeTypeMap;
    }

    public constructor() {
    }
}

