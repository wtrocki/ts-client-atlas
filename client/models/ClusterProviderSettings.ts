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

import { ClusterFreeAutoScaling } from '../models/ClusterFreeAutoScaling';
import { HttpFile } from '../http/http';

/**
* Group of cloud provider settings that configure the provisioned MongoDB hosts.
*/
export class ClusterProviderSettings {

    'providerName': string;

    'autoScaling'?: ClusterFreeAutoScaling;
    /**
    * Maximum Disk Input/Output Operations per Second (IOPS) that the database host can perform.
    */

    'diskIOPS'?: number;
    /**
    * Flag that indicates whether the Amazon Elastic Block Store (EBS) encryption feature encrypts the host's root volume for both data at rest within the volume and for data moving between the volume and the cluster. Clusters always have this setting enabled.
    */

    'encryptEBSVolume'?: boolean;
    /**
    * Cluster tier, with a default storage and memory capacity, that applies to all the data-bearing hosts in your cluster.  Alternatively: Cluster tier, with a default storage and memory capacity, that applies to all the data-bearing hosts in your cluster. You must set **providerSettings.providerName** to `TENANT` and specify the cloud service provider in **providerSettings.backingProviderName**.
    */

    'instanceSizeName'?: string;
    /**
    * Physical location where MongoDB Cloud deploys your AWS-hosted MongoDB cluster nodes. The region you choose can affect network latency for clients accessing your databases. When MongoDB Cloud deploys a dedicated cluster, it checks if a VPC or VPC connection exists for that provider and region. If not, MongoDB Cloud creates them as part of the deployment. MongoDB Cloud assigns the VPC a CIDR block. To limit a new VPC peering connection to one CIDR block and region, create the connection first. Deploy the cluster after the connection starts.  Alternatively: Microsoft Azure Regions.  Alternatively: Google Compute Regions.  Alternatively: Human-readable label that identifies the geographic location of your MongoDB cluster. The region you choose can affect network latency for clients accessing your databases. For a complete list of region names, see [AWS](https://docs.atlas.mongodb.com/reference/amazon-aws/#std-label-amazon-aws), [GCP](https://docs.atlas.mongodb.com/reference/google-gcp/), and [Azure](https://docs.atlas.mongodb.com/reference/microsoft-azure/). For multi-region clusters, see **replicationSpec.{region}**.
    */

    'regionName'?: string;
    /**
    * Disk Input/Output Operations per Second (IOPS) setting for Amazon Web Services (AWS) storage that you configure only for abbr title=\"Amazon Web Services\">AWS</abbr>. Specify whether Disk Input/Output Operations per Second (IOPS) must not exceed the default Input/Output Operations per Second (IOPS) rate for the selected volume size (`STANDARD`), or must fall within the allowable Input/Output Operations per Second (IOPS) range for the selected volume size (`PROVISIONED`). You must set this value to (`PROVISIONED`) for NVMe clusters.
    */

    'volumeType'?: string;
    /**
    * Disk type that corresponds to the host's root volume for Azure instances. If omitted, the default disk type for the selected **providerSettings.instanceSizeName** applies.
    */

    'diskTypeName'?: string;
    /**
    * Cloud service provider on which MongoDB Cloud provisioned the multi-tenant host. The resource returns this parameter when **providerSettings.providerName** is `TENANT` and **providerSetting.instanceSizeName** is `M0`, `M2` or `M5`.
    */

    'backingProviderName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "providerName",
            "baseName": "providerName",
            "type": "string",
            "format": ""
        },
        {
            "name": "autoScaling",
            "baseName": "autoScaling",
            "type": "ClusterFreeAutoScaling",
            "format": ""
        },
        {
            "name": "diskIOPS",
            "baseName": "diskIOPS",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "encryptEBSVolume",
            "baseName": "encryptEBSVolume",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "instanceSizeName",
            "baseName": "instanceSizeName",
            "type": "string",
            "format": ""
        },
        {
            "name": "regionName",
            "baseName": "regionName",
            "type": "string",
            "format": ""
        },
        {
            "name": "volumeType",
            "baseName": "volumeType",
            "type": "string",
            "format": ""
        },
        {
            "name": "diskTypeName",
            "baseName": "diskTypeName",
            "type": "string",
            "format": ""
        },
        {
            "name": "backingProviderName",
            "baseName": "backingProviderName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ClusterProviderSettings.attributeTypeMap;
    }

    public constructor() {
    }
}

