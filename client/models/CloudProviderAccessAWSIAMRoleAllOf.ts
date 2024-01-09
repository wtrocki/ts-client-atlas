/**
 * MongoDB Atlas Administration API
 * The MongoDB Atlas Administration API allows developers to manage all components in MongoDB Atlas.  The Atlas Administration API uses HTTP Digest Authentication to authenticate requests. Provide a programmatic API public key and corresponding private key as the username and password when constructing the HTTP request. For example, to [return database access history](#tag/Access-Tracking/operation/listAccessLogsByClusterName) with [cURL](https://en.wikipedia.org/wiki/CURL), run the following command in the terminal:  ``` curl --user \"{PUBLIC-KEY}:{PRIVATE-KEY}\" \\   --digest \\   --header \"Accept: application/vnd.atlas.2023-02-01+json\" \\   GET \"https://cloud.mongodb.com/api/atlas/v2/groups/{groupId}/dbAccessHistory/clusters/{clusterName}?pretty=true\" ```  To learn more, see [Get Started with the Atlas Administration API](https://www.mongodb.com/docs/atlas/configure-api-access/). For support, see [MongoDB Support](https://www.mongodb.com/support/get-started).
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CloudProviderAccessFeatureUsage } from '../models/CloudProviderAccessFeatureUsage';
import { HttpFile } from '../http/http';

export class CloudProviderAccessAWSIAMRoleAllOf {
    /**
    * Amazon Resource Name that identifies the Amazon Web Services (AWS) user account that MongoDB Cloud uses when it assumes the Identity and Access Management (IAM) role.
    */

    'atlasAWSAccountArn'?: string;
    /**
    * Unique external ID that MongoDB Cloud uses when it assumes the IAM role in your Amazon Web Services (AWS) account.
    */

    'atlasAssumedRoleExternalId'?: string;
    /**
    * Date and time when someone authorized this role for the specified cloud service provider. This parameter expresses its value in the ISO 8601 timestamp format in UTC.
    */

    'authorizedDate'?: Date;
    /**
    * Date and time when someone created this role for the specified cloud service provider. This parameter expresses its value in the ISO 8601 timestamp format in UTC.
    */

    'createdDate'?: Date;
    /**
    * List that contains application features associated with this Amazon Web Services (AWS) Identity and Access Management (IAM) role.
    */

    'featureUsages'?: Array<CloudProviderAccessFeatureUsage>;
    /**
    * Amazon Resource Name (ARN) that identifies the Amazon Web Services (AWS) Identity and Access Management (IAM) role that MongoDB Cloud assumes when it accesses resources in your AWS account.
    */

    'iamAssumedRoleArn'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the role.
    */

    'roleId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "atlasAWSAccountArn",
            "baseName": "atlasAWSAccountArn",
            "type": "string",
            "format": ""
        },
        {
            "name": "atlasAssumedRoleExternalId",
            "baseName": "atlasAssumedRoleExternalId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "authorizedDate",
            "baseName": "authorizedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "featureUsages",
            "baseName": "featureUsages",
            "type": "Array<CloudProviderAccessFeatureUsage>",
            "format": ""
        },
        {
            "name": "iamAssumedRoleArn",
            "baseName": "iamAssumedRoleArn",
            "type": "string",
            "format": ""
        },
        {
            "name": "roleId",
            "baseName": "roleId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CloudProviderAccessAWSIAMRoleAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

