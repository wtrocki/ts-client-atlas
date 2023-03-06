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

export class AzureHardwareSpec {
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
        return AzureHardwareSpec.attributeTypeMap;
    }

    public constructor() {
    }
}


export type AzureHardwareSpecInstanceSizeEnum = "M10" | "M20" | "M30" | "M40" | "M50" | "M60" | "M80" | "M90" | "M200" | "R40" | "R50" | "R60" | "R80" | "R200" | "R300" | "R400" | "M60_NVME" | "M80_NVME" | "M200_NVME" | "M300_NVME" | "M400_NVME" | "M600_NVME" ;

