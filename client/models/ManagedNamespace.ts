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

import { HttpFile } from '../http/http';

export class ManagedNamespace {
    /**
    * Human-readable label of the collection to manage for this Global Cluster.
    */

    'collection'?: string;
    /**
    * Database parameter used to divide the *collection* into shards. Global clusters require a compound shard key. This compound shard key combines the location parameter and the user-selected custom key.
    */

    'customShardKey'?: string;
    /**
    * Human-readable label of the database to manage for this Global Cluster.
    */

    'db'?: string;
    /**
    * Flag that indicates whether someone hashed the custom shard key. If this parameter returns `false`, this cluster uses ranged sharding.
    */

    'isCustomShardKeyHashed'?: boolean;
    /**
    * Flag that indicates whether the underlying index enforces unique values.
    */

    'isShardKeyUnique'?: boolean;
    /**
    * Minimum number of chunks to create initially when sharding an empty collection with a hashed shard key.
    */

    'numInitialChunks'?: number;
    /**
    * Flag that indicates whether MongoDB Cloud should create and distribute initial chunks for an empty or non-existing collection. MongoDB Cloud distributes data based on the defined zones and zone ranges for the collection.
    */

    'presplitHashedZones'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "collection",
            "baseName": "collection",
            "type": "string",
            "format": ""
        },
        {
            "name": "customShardKey",
            "baseName": "customShardKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "db",
            "baseName": "db",
            "type": "string",
            "format": ""
        },
        {
            "name": "isCustomShardKeyHashed",
            "baseName": "isCustomShardKeyHashed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isShardKeyUnique",
            "baseName": "isShardKeyUnique",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "numInitialChunks",
            "baseName": "numInitialChunks",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "presplitHashedZones",
            "baseName": "presplitHashedZones",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ManagedNamespace.attributeTypeMap;
    }

    public constructor() {
    }
}

