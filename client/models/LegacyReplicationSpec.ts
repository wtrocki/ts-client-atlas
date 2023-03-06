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

import { RegionSpec } from '../models/RegionSpec';
import { HttpFile } from '../http/http';

export class LegacyReplicationSpec {
    /**
    * Unique 24-hexadecimal digit string that identifies the replication object for a zone in a Global Cluster.  - If you include existing zones in the request, you must specify this parameter.  - If you add a new zone to an existing Global Cluster, you may specify this parameter. The request deletes any existing zones in a Global Cluster that you exclude from the request.
    */
    'id'?: string;
    /**
    * Positive integer that specifies the number of shards to deploy in each specified zone If you set this value to `1` and **clusterType** is `SHARDED`, MongoDB Cloud deploys a single-shard sharded cluster. Don't create a sharded cluster with a single shard for production environments. Single-shard sharded clusters don't provide the same benefits as multi-shard configurations.
    */
    'numShards'?: number;
    /**
    * Physical location where MongoDB Cloud provisions cluster nodes.
    */
    'regionsConfig'?: { [key: string]: RegionSpec; };
    /**
    * Human-readable label that identifies the zone in a Global Cluster. Provide this value only if **clusterType** is `GEOSHARDED`.
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
            "name": "regionsConfig",
            "baseName": "regionsConfig",
            "type": "{ [key: string]: RegionSpec; }",
            "format": ""
        },
        {
            "name": "zoneName",
            "baseName": "zoneName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LegacyReplicationSpec.attributeTypeMap;
    }

    public constructor() {
    }
}
