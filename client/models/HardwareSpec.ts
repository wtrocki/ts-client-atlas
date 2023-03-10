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
* Hardware specifications for all electable nodes deployed in the region. Electable nodes can become the primary and can enable local reads. If you don't specify this option, MongoDB Cloud deploys no electable nodes to the region.
*/
export class HardwareSpec {
    /**
    * Target throughput desired for storage attached to your AWS-provisioned cluster. Change this parameter only if you:  - set `\"replicationSpecs[n].regionConfigs[m].providerName\" : \"AWS\"`. - set `\"replicationSpecs[n].regionConfigs[m].electableSpecs.instanceSize\" : \"M30\"` or greater not including `Mxx_NVME` tiers.  The maximum input/output operations per second (IOPS) depend on the selected **.instanceSize** and **.diskSizeGB**. This parameter defaults to the cluster tier's standard IOPS value. Changing this value impacts cluster cost. MongoDB Cloud enforces minimum ratios of storage capacity to system memory for given cluster tiers. This keeps cluster performance consistent with large datasets.  - Instance sizes `M10` to `M40` have a ratio of disk capacity to system memory of 60:1. - Instance sizes greater than `M40` have a ratio of 120:1.
    */

    'diskIOPS'?: number;
    /**
    * Type of storage you want to attach to your AWS-provisioned cluster.  - `STANDARD` volume types can't exceed the default input/output operations per second (IOPS) rate for the selected volume size.   - `PROVISIONED` volume types must fall within the allowable IOPS range for the selected volume size.
    */

    'ebsVolumeType'?: string;
    /**
    * Hardware specification for the instance sizes in this region. Each instance size has a default storage and memory capacity. The instance size you select applies to all the data-bearing hosts in your instance size.
    */

    'instanceSize'?: string;
    /**
    * Number of read-only nodes for MongoDB Cloud to deploy to the region. Read-only nodes can never become the primary, but can enable local reads.
    */

    'nodeCount'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "diskIOPS",
            "baseName": "diskIOPS",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "ebsVolumeType",
            "baseName": "ebsVolumeType",
            "type": "string",
            "format": ""
        },
        {
            "name": "instanceSize",
            "baseName": "instanceSize",
            "type": "string",
            "format": ""
        },
        {
            "name": "nodeCount",
            "baseName": "nodeCount",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return HardwareSpec.attributeTypeMap;
    }

    public constructor() {
    }
}


export type HardwareSpecEbsVolumeTypeEnum = "STANDARD" | "PROVISIONED" ;
export type HardwareSpecInstanceSizeEnum = "M0" | "M2" | "M5" ;

