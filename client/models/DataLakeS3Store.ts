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

export class DataLakeS3Store {
    /**
    * Collection of AWS S3 [storage classes](https://aws.amazon.com/s3/storage-classes/). Atlas Data Lake includes the files in these storage classes in the query results.
    */
    'additionalStorageClasses'?: Array<DataLakeS3StoreAdditionalStorageClassesEnum>;
    /**
    * Human-readable label that identifies the AWS S3 bucket. This label must exactly match the name of an S3 bucket that the data lake can access with the configured AWS Identity and Access Management (IAM) credentials.
    */
    'bucket'?: string;
    /**
    * The delimiter that separates **databases.[n].collections.[n].dataSources.[n].path** segments in the data store. MongoDB Cloud uses the delimiter to efficiently traverse S3 buckets with a hierarchical directory structure. You can specify any character supported by the S3 object keys as the delimiter. For example, you can specify an underscore (_) or a plus sign (+) or multiple characters, such as double underscores (__) as the delimiter. If omitted, defaults to `/`.
    */
    'delimiter'?: string;
    /**
    * Flag that indicates whether to use S3 tags on the files in the given path as additional partition attributes. If set to `true`, data lake adds the S3 tags as additional partition attributes and adds new top-level BSON elements associating each tag to each document.
    */
    'includeTags'?: boolean;
    /**
    * Prefix that MongoDB Cloud applies when searching for files in the S3 bucket. The data store prepends the value of prefix to the **databases.[n].collections.[n].dataSources.[n].path** to create the full path for files to ingest. If omitted, MongoDB Cloud searches all files from the root of the S3 bucket.
    */
    'prefix'?: string;
    /**
    * Flag that indicates whether the bucket is public. If set to `true`, MongoDB Cloud doesn't use the configured AWS Identity and Access Management (IAM) role to access the S3 bucket. If set to `false`, the configured AWS IAM role must include permissions to access the S3 bucket.
    */
    '_public'?: boolean;
    /**
    *  Physical location where MongoDB Cloud deploys your AWS-hosted MongoDB cluster nodes. The region you choose can affect network latency for clients accessing your databases. When MongoDB Cloud deploys a dedicated cluster, it checks if a VPC or VPC connection exists for that provider and region. If not, MongoDB Cloud creates them as part of the deployment. MongoDB Cloud assigns the VPC a CIDR block. To limit a new VPC peering connection to one CIDR block and region, create the connection first. Deploy the cluster after the connection starts.
    */
    'region'?: DataLakeS3StoreRegionEnum;
    /**
    * Human-readable label that identifies the data store. The **databases.[n].collections.[n].dataSources.[n].storeName** field references this values as part of the mapping configuration. To use MongoDB Cloud as a data store, the data lake requires a serverless instance or an `M10` or higher cluster.
    */
    'name'?: string;
    'provider': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "additionalStorageClasses",
            "baseName": "additionalStorageClasses",
            "type": "Array<DataLakeS3StoreAdditionalStorageClassesEnum>",
            "format": ""
        },
        {
            "name": "bucket",
            "baseName": "bucket",
            "type": "string",
            "format": ""
        },
        {
            "name": "delimiter",
            "baseName": "delimiter",
            "type": "string",
            "format": ""
        },
        {
            "name": "includeTags",
            "baseName": "includeTags",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "prefix",
            "baseName": "prefix",
            "type": "string",
            "format": ""
        },
        {
            "name": "_public",
            "baseName": "public",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "DataLakeS3StoreRegionEnum",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DataLakeS3Store.attributeTypeMap;
    }

    public constructor() {
    }
}


export type DataLakeS3StoreAdditionalStorageClassesEnum = "STANDARD" | "INTELLIGENT_TIERING" | "STANDARD_IA" ;
export type DataLakeS3StoreRegionEnum = "US_GOV_WEST_1" | "US_GOV_EAST_1" | "US_EAST_1" | "US_EAST_2" | "US_WEST_1" | "US_WEST_2" | "CA_CENTRAL_1" | "EU_NORTH_1" | "EU_WEST_1" | "EU_WEST_2" | "EU_WEST_3" | "EU_CENTRAL_1" | "AP_EAST_1" | "AP_NORTHEAST_1" | "AP_NORTHEAST_2" | "AP_NORTHEAST_3" | "AP_SOUTHEAST_1" | "AP_SOUTHEAST_2" | "AP_SOUTHEAST_3" | "AP_SOUTH_1" | "SA_EAST_1" | "CN_NORTH_1" | "CN_NORTHWEST_1" | "ME_SOUTH_1" | "AF_SOUTH_1" | "EU_SOUTH_1" | "GLOBAL" ;
