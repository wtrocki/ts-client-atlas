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

import { RegionConfig } from '../models/RegionConfig';
import { HttpFile } from '../http/http';

/**
* Details that explain how MongoDB Cloud replicates data on the specified MongoDB database.
*/
export class ReplicationSpec {
    /**
    * Unique 24-hexadecimal digit string that identifies the replication object for a zone in a Multi-Cloud Cluster. If you include existing zones in the request, you must specify this parameter. If you add a new zone to an existing Multi-Cloud Cluster, you may specify this parameter. The request deletes any existing zones in the Multi-Cloud Cluster that you exclude from the request.
    */

    'id'?: string;
    /**
    * Positive integer that specifies the number of shards to deploy in each specified zone. If you set this value to `1` and **clusterType** is `SHARDED`, MongoDB Cloud deploys a single-shard sharded cluster. Don't create a sharded cluster with a single shard for production environments. Single-shard sharded clusters don't provide the same benefits as multi-shard configurations.
    */

    'numShards'?: number;
    /**
    * Hardware specifications for nodes set for a given region. Each **regionConfigs** object describes the region's priority in elections and the number and type of MongoDB nodes that MongoDB Cloud deploys to the region. Each **regionConfigs** object must have either an **analyticsSpecs** object, **electableSpecs** object, or **readOnlySpecs** object. Tenant clusters only require **electableSpecs. Dedicated** clusters can specify any of these specifications, but must have at least one **electableSpecs** object within a **replicationSpec**. Every hardware specification must use the same **instanceSize**.  **Example:**  If you set `\"replicationSpecs[n].regionConfigs[m].analyticsSpecs.instanceSize\" : \"M30\"`, set `\"replicationSpecs[n].regionConfigs[m].electableSpecs.instanceSize\" : `\"M30\"` if you have electable nodes and `\"replicationSpecs[n].regionConfigs[m].readOnlySpecs.instanceSize\" : `\"M30\"` if you have read-only nodes.
    */

    'regionConfigs'?: Array<RegionConfig>;
    /**
    * Human-readable label that identifies the zone in a Global Cluster. Provide this value only if `\"clusterType\" : \"GEOSHARDED\"`.
    */

    'zoneName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "numShards",
            "baseName": "numShards",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "regionConfigs",
            "baseName": "regionConfigs",
            "type": "Array<RegionConfig>",
            "format": ""
        },
        {
            "name": "zoneName",
            "baseName": "zoneName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ReplicationSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

