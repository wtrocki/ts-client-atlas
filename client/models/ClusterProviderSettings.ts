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

import { AWSProviderSettings } from '../models/AWSProviderSettings';
import { AzureProviderSettings } from '../models/AzureProviderSettings';
import { FreeAutoScaling } from '../models/FreeAutoScaling';
import { FreeProviderSettings } from '../models/FreeProviderSettings';
import { GCPProviderSettings } from '../models/GCPProviderSettings';
import { HttpFile } from '../http/http';

/**
* Group of cloud provider settings that configure the provisioned MongoDB hosts.
*/
export class ClusterProviderSettings {
    'autoScaling'?: FreeAutoScaling;
    /**
    * Maximum Disk Input/Output Operations per Second (IOPS) that the database host can perform.
    */
    'diskIOPS'?: number;
    /**
    * Flag that indicates whether the Amazon Elastic Block Store (EBS) encryption feature encrypts the host's root volume for both data at rest within the volume and for data moving between the volume and the cluster. Clusters always have this setting enabled.
    */
    'encryptEBSVolume'?: boolean;
    /**
    * Cluster tier, with a default storage and memory capacity, that applies to all the data-bearing hosts in your cluster. You must set **providerSettings.providerName** to `TENANT` and specify the cloud service provider in **providerSettings.backingProviderName**.
    */
    'instanceSizeName'?: ClusterProviderSettingsInstanceSizeNameEnum;
    /**
    * Human-readable label that identifies the geographic location of your MongoDB cluster. The region you choose can affect network latency for clients accessing your databases. For a complete list of region names, see [AWS](https://docs.atlas.mongodb.com/reference/amazon-aws/#std-label-amazon-aws), [GCP](https://docs.atlas.mongodb.com/reference/google-gcp/), and [Azure](https://docs.atlas.mongodb.com/reference/microsoft-azure/). For multi-region clusters, see **replicationSpec.{region}**.
    */
    'regionName'?: string;
    /**
    * Disk Input/Output Operations per Second (IOPS) setting for Amazon Web Services (AWS) storage that you configure only for abbr title=\"Amazon Web Services\">AWS</abbr>. Specify whether Disk Input/Output Operations per Second (IOPS) must not exceed the default Input/Output Operations per Second (IOPS) rate for the selected volume size (`STANDARD`), or must fall within the allowable Input/Output Operations per Second (IOPS) range for the selected volume size (`PROVISIONED`).
    */
    'volumeType'?: ClusterProviderSettingsVolumeTypeEnum;
    'providerName': string;
    /**
    * Disk type that corresponds to the host's root volume for Azure instances. If omitted, the default disk type for the selected **providerSettings.instanceSizeName** applies.
    */
    'diskTypeName'?: ClusterProviderSettingsDiskTypeNameEnum;
    /**
    * Cloud service provider on which MongoDB Cloud provisioned the multi-tenant host. The resource returns this parameter when **providerSettings.providerName** is `TENANT` and **providerSetting.instanceSizeName** is `M2` or `M5`.
    */
    'backingProviderName'?: ClusterProviderSettingsBackingProviderNameEnum;

    static readonly discriminator: string | undefined = "providerName";

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "autoScaling",
            "baseName": "autoScaling",
            "type": "FreeAutoScaling",
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
            "type": "ClusterProviderSettingsInstanceSizeNameEnum",
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
            "type": "ClusterProviderSettingsVolumeTypeEnum",
            "format": ""
        },
        {
            "name": "providerName",
            "baseName": "providerName",
            "type": "string",
            "format": ""
        },
        {
            "name": "diskTypeName",
            "baseName": "diskTypeName",
            "type": "ClusterProviderSettingsDiskTypeNameEnum",
            "format": ""
        },
        {
            "name": "backingProviderName",
            "baseName": "backingProviderName",
            "type": "ClusterProviderSettingsBackingProviderNameEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ClusterProviderSettings.attributeTypeMap;
    }

    public constructor() {
        this.providerName = "ClusterProviderSettings";
    }
}


export type ClusterProviderSettingsInstanceSizeNameEnum = "M0" | "M2" | "M5" ;
export type ClusterProviderSettingsVolumeTypeEnum = "STANDARD" | "PROVISIONED" ;
export type ClusterProviderSettingsDiskTypeNameEnum = "P2" | "P3" | "P4" | "P6" | "P10" | "P15" | "P20" | "P30" | "P40" | "P50" ;
export type ClusterProviderSettingsBackingProviderNameEnum = "AWS" | "GCP" | "AZURE" | "TENANT" | "SERVERLESS" ;

