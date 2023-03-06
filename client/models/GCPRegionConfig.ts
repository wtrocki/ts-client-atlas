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

import { AutoScalingV15 } from '../models/AutoScalingV15';
import { DedicatedHardwareSpec } from '../models/DedicatedHardwareSpec';
import { HardwareSpec } from '../models/HardwareSpec';
import { HttpFile } from '../http/http';

/**
* Details that explain how MongoDB Cloud replicates data in one region on the specified MongoDB database.
*/
export class GCPRegionConfig {
    'analyticsAutoScaling'?: AutoScalingV15;
    'analyticsSpecs'?: DedicatedHardwareSpec;
    'autoScaling'?: AutoScalingV15;
    'readOnlySpecs'?: DedicatedHardwareSpec;
    'electableSpecs'?: HardwareSpec;
    /**
    * Precedence is given to this region when a primary election occurs. If your **regionConfigs** has only **readOnlySpecs**, **analyticsSpecs**, or both, set this value to `0`. If you have multiple **regionConfigs** objects (your cluster is multi-region or multi-cloud), they must have priorities in descending order. The highest priority is `7`.  **Example:** If you have three regions, their priorities would be `7`, `6`, and `5` respectively. If you added two more regions for supporting electable nodes, the priorities of those regions would be `4` and `3` respectively.
    */
    'priority'?: number;
    /**
    * Cloud service provider on which MongoDB Cloud provisions the hosts. Set dedicated clusters to `AWS`, `GCP`, `AZURE` or `TENANT`.
    */
    'providerName'?: GCPRegionConfigProviderNameEnum;
    /**
    * Physical location of your MongoDB cluster nodes. The region you choose can affect network latency for clients accessing your databases. When MongoDB Cloud deploys a dedicated cluster, it checks if a VPC or VPC connection exists for that provider and region. If not, MongoDB Cloud creates them as part of the deployment. It assigns the VPC a Classless Inter-Domain Routing (CIDR) block. To limit a new VPC peering connection to one Classless Inter-Domain Routing (CIDR) block and region, create the connection first. Deploy the cluster after the connection starts. GCP Clusters and Multi-region clusters require one VPC peering connection for each region. MongoDB nodes can use only the peering connection that resides in the same region as the nodes to communicate with the peered VPC.
    */
    'regionName'?: GCPRegionConfigRegionNameEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "analyticsAutoScaling",
            "baseName": "analyticsAutoScaling",
            "type": "AutoScalingV15",
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
            "type": "AutoScalingV15",
            "format": ""
        },
        {
            "name": "readOnlySpecs",
            "baseName": "readOnlySpecs",
            "type": "DedicatedHardwareSpec",
            "format": ""
        },
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
            "type": "GCPRegionConfigProviderNameEnum",
            "format": ""
        },
        {
            "name": "regionName",
            "baseName": "regionName",
            "type": "GCPRegionConfigRegionNameEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GCPRegionConfig.attributeTypeMap;
    }

    public constructor() {
    }
}


export type GCPRegionConfigProviderNameEnum = "AWS" | "AZURE" | "GCP" | "TENANT" ;
export type GCPRegionConfigRegionNameEnum = "US_GOV_WEST_1" | "US_GOV_EAST_1" | "US_EAST_1" | "US_EAST_2" | "US_WEST_1" | "US_WEST_2" | "CA_CENTRAL_1" | "EU_NORTH_1" | "EU_WEST_1" | "EU_WEST_2" | "EU_WEST_3" | "EU_CENTRAL_1" | "AP_EAST_1" | "AP_NORTHEAST_1" | "AP_NORTHEAST_2" | "AP_NORTHEAST_3" | "AP_SOUTHEAST_1" | "AP_SOUTHEAST_2" | "AP_SOUTHEAST_3" | "AP_SOUTH_1" | "SA_EAST_1" | "CN_NORTH_1" | "CN_NORTHWEST_1" | "ME_SOUTH_1" | "AF_SOUTH_1" | "EU_SOUTH_1" | "GLOBAL" | "US_CENTRAL" | "US_EAST" | "US_NORTH_CENTRAL" | "US_WEST" | "US_SOUTH_CENTRAL" | "EUROPE_NORTH" | "EUROPE_WEST" | "US_WEST_CENTRAL" | "US_WEST_3" | "CANADA_EAST" | "CANADA_CENTRAL" | "BRAZIL_SOUTH" | "BRAZIL_SOUTHEAST" | "AUSTRALIA_CENTRAL" | "AUSTRALIA_CENTRAL_2" | "AUSTRALIA_EAST" | "AUSTRALIA_SOUTH_EAST" | "GERMANY_CENTRAL" | "GERMANY_NORTH_EAST" | "GERMANY_WEST_CENTRAL" | "GERMANY_NORTH" | "SWEDEN_CENTRAL" | "SWEDEN_SOUTH" | "SWITZERLAND_NORTH" | "SWITZERLAND_WEST" | "UK_SOUTH" | "UK_WEST" | "NORWAY_EAST" | "NORWAY_WEST" | "INDIA_CENTRAL" | "INDIA_SOUTH" | "INDIA_WEST" | "CHINA_EAST" | "CHINA_NORTH" | "ASIA_EAST" | "JAPAN_EAST" | "JAPAN_WEST" | "ASIA_SOUTH_EAST" | "KOREA_CENTRAL" | "KOREA_SOUTH" | "FRANCE_CENTRAL" | "FRANCE_SOUTH" | "SOUTH_AFRICA_NORTH" | "SOUTH_AFRICA_WEST" | "UAE_CENTRAL" | "UAE_NORTH" | "EASTERN_US" | "US_EAST_4" | "US_WEST_4" | "CENTRAL_US" | "WESTERN_US" | "NORTH_AMERICA_NORTHEAST_1" | "NORTH_AMERICA_NORTHEAST_2" | "SOUTH_AMERICA_EAST_1" | "SOUTH_AMERICA_WEST_1" | "WESTERN_EUROPE" | "EUROPE_NORTH_1" | "EUROPE_WEST_2" | "EUROPE_WEST_3" | "EUROPE_WEST_4" | "EUROPE_WEST_6" | "EUROPE_WEST_8" | "EUROPE_WEST_9" | "EUROPE_SOUTHWEST_1" | "EUROPE_CENTRAL_2" | "AUSTRALIA_SOUTHEAST_1" | "AUSTRALIA_SOUTHEAST_2" | "EASTERN_ASIA_PACIFIC" | "NORTHEASTERN_ASIA_PACIFIC" | "SOUTHEASTERN_ASIA_PACIFIC" | "ASIA_EAST_2" | "ASIA_NORTHEAST_2" | "ASIA_NORTHEAST_3" | "ASIA_SOUTH_1" | "ASIA_SOUTH_2" | "ASIA_SOUTHEAST_2" ;

