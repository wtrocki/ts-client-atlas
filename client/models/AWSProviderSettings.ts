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

import { AWSAutoScaling } from '../models/AWSAutoScaling';
import { HttpFile } from '../http/http';

export class AWSProviderSettings {
    'autoScaling'?: AWSAutoScaling;
    /**
    * Maximum Disk Input/Output Operations per Second (IOPS) that the database host can perform.
    */
    'diskIOPS'?: number;
    /**
    * Flag that indicates whether the Amazon Elastic Block Store (EBS) encryption feature encrypts the host's root volume for both data at rest within the volume and for data moving between the volume and the cluster. Clusters always have this setting enabled.
    */
    'encryptEBSVolume'?: boolean;
    /**
    * Cluster tier, with a default storage and memory capacity, that applies to all the data-bearing hosts in your cluster.
    */
    'instanceSizeName'?: AWSProviderSettingsInstanceSizeNameEnum;
    /**
    *  Physical location where MongoDB Cloud deploys your AWS-hosted MongoDB cluster nodes. The region you choose can affect network latency for clients accessing your databases. When MongoDB Cloud deploys a dedicated cluster, it checks if a VPC or VPC connection exists for that provider and region. If not, MongoDB Cloud creates them as part of the deployment. MongoDB Cloud assigns the VPC a CIDR block. To limit a new VPC peering connection to one CIDR block and region, create the connection first. Deploy the cluster after the connection starts.
    */
    'regionName'?: AWSProviderSettingsRegionNameEnum;
    /**
    * Disk Input/Output Operations per Second (IOPS) setting for Amazon Web Services (AWS) storage that you configure only for abbr title=\"Amazon Web Services\">AWS</abbr>. Specify whether Disk Input/Output Operations per Second (IOPS) must not exceed the default Input/Output Operations per Second (IOPS) rate for the selected volume size (`STANDARD`), or must fall within the allowable Input/Output Operations per Second (IOPS) range for the selected volume size (`PROVISIONED`).
    */
    'volumeType'?: AWSProviderSettingsVolumeTypeEnum;
    'providerName': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "autoScaling",
            "baseName": "autoScaling",
            "type": "AWSAutoScaling",
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
            "type": "AWSProviderSettingsInstanceSizeNameEnum",
            "format": ""
        },
        {
            "name": "regionName",
            "baseName": "regionName",
            "type": "AWSProviderSettingsRegionNameEnum",
            "format": ""
        },
        {
            "name": "volumeType",
            "baseName": "volumeType",
            "type": "AWSProviderSettingsVolumeTypeEnum",
            "format": ""
        },
        {
            "name": "providerName",
            "baseName": "providerName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AWSProviderSettings.attributeTypeMap;
    }

    public constructor() {
    }
}


export type AWSProviderSettingsInstanceSizeNameEnum = "M10" | "M20" | "M30" | "M40" | "M50" | "M60" | "M80" | "M100" | "M140" | "M200" | "M300" | "R40" | "R50" | "R60" | "R80" | "R200" | "R300" | "R400" | "R700" | "M40_NVME" | "M50_NVME" | "M60_NVME" | "M80_NVME" | "M200_NVME" | "M400_NVME" ;
export type AWSProviderSettingsRegionNameEnum = "US_GOV_WEST_1" | "US_GOV_EAST_1" | "US_EAST_1" | "US_EAST_2" | "US_WEST_1" | "US_WEST_2" | "CA_CENTRAL_1" | "EU_NORTH_1" | "EU_WEST_1" | "EU_WEST_2" | "EU_WEST_3" | "EU_CENTRAL_1" | "AP_EAST_1" | "AP_NORTHEAST_1" | "AP_NORTHEAST_2" | "AP_NORTHEAST_3" | "AP_SOUTHEAST_1" | "AP_SOUTHEAST_2" | "AP_SOUTHEAST_3" | "AP_SOUTH_1" | "SA_EAST_1" | "CN_NORTH_1" | "CN_NORTHWEST_1" | "ME_SOUTH_1" | "AF_SOUTH_1" | "EU_SOUTH_1" | "GLOBAL" ;
export type AWSProviderSettingsVolumeTypeEnum = "STANDARD" | "PROVISIONED" ;

