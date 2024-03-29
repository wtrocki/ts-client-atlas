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

import { AdvancedAutoScalingSettings } from '../models/AdvancedAutoScalingSettings';
import { DedicatedHardwareSpec } from '../models/DedicatedHardwareSpec';
import { HardwareSpec } from '../models/HardwareSpec';
import { HttpFile } from '../http/http';

/**
* Cloud service provider on which MongoDB Cloud provisions the hosts.
*/
export class CloudRegionConfig {

    'electableSpecs'?: HardwareSpec;
    /**
    * Precedence is given to this region when a primary election occurs. If your **regionConfigs** has only **readOnlySpecs**, **analyticsSpecs**, or both, set this value to `0`. If you have multiple **regionConfigs** objects (your cluster is multi-region or multi-cloud), they must have priorities in descending order. The highest priority is `7`.  **Example:** If you have three regions, their priorities would be `7`, `6`, and `5` respectively. If you added two more regions for supporting electable nodes, the priorities of those regions would be `4` and `3` respectively.
    */

    'priority'?: number;
    /**
    * Cloud service provider on which MongoDB Cloud provisions the hosts. Set dedicated clusters to `AWS`, `GCP`, `AZURE` or `TENANT`.
    */

    'providerName'?: string;
    /**
    * Physical location of your MongoDB cluster nodes. The region you choose can affect network latency for clients accessing your databases. When MongoDB Cloud deploys a dedicated cluster, it checks if a VPC or VPC connection exists for that provider and region. If not, MongoDB Cloud creates them as part of the deployment. It assigns the VPC a Classless Inter-Domain Routing (CIDR) block. To limit a new VPC peering connection to one Classless Inter-Domain Routing (CIDR) block and region, create the connection first. Deploy the cluster after the connection starts. GCP Clusters and Multi-region clusters require one VPC peering connection for each region. MongoDB nodes can use only the peering connection that resides in the same region as the nodes to communicate with the peered VPC.
    */

    'regionName'?: string;

    'analyticsAutoScaling'?: AdvancedAutoScalingSettings;

    'analyticsSpecs'?: DedicatedHardwareSpec;

    'autoScaling'?: AdvancedAutoScalingSettings;

    'readOnlySpecs'?: DedicatedHardwareSpec;
    /**
    * Cloud service provider on which MongoDB Cloud provisioned the multi-tenant cluster. The resource returns this parameter when **providerName** is `TENANT` and **electableSpecs.instanceSize** is `M0`, `M2` or `M5`.
    */

    'backingProviderName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "electableSpecs",
            "baseName": "electableSpecs",
            "type": "HardwareSpec",
            "format": ""
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "providerName",
            "baseName": "providerName",
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
            "name": "analyticsAutoScaling",
            "baseName": "analyticsAutoScaling",
            "type": "AdvancedAutoScalingSettings",
            "format": ""
        },
        {
            "name": "analyticsSpecs",
            "baseName": "analyticsSpecs",
            "type": "DedicatedHardwareSpec",
            "format": ""
        },
        {
            "name": "autoScaling",
            "baseName": "autoScaling",
            "type": "AdvancedAutoScalingSettings",
            "format": ""
        },
        {
            "name": "readOnlySpecs",
            "baseName": "readOnlySpecs",
            "type": "DedicatedHardwareSpec",
            "format": ""
        },
        {
            "name": "backingProviderName",
            "baseName": "backingProviderName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CloudRegionConfig.attributeTypeMap;
    }

    public constructor() {
    }
}

