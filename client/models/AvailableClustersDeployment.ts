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

/**
* Deployments that can be migrated to MongoDB Atlas.
*/
export class AvailableClustersDeployment {
    /**
    * Version of MongoDB Agent that monitors/manages the cluster.
    */

    'agentVersion'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the cluster.
    */

    'clusterId'?: string;
    /**
    * Size of this database on disk at the time of the request expressed in bytes.
    */

    'dbSizeBytes'?: number;
    /**
    * Version of MongoDB [features](https://docs.mongodb.com/manual/reference/command/setFeatureCompatibilityVersion) that this cluster supports.
    */

    'featureCompatibilityVersion': string;
    /**
    * Flag that indicates whether Automation manages this cluster.
    */

    'managed': boolean;
    /**
    * Version of MongoDB that this cluster runs.
    */

    'mongoDBVersion': string;
    /**
    * Human-readable label that identifies this cluster.
    */

    'name': string;
    /**
    * Size of the Oplog on disk at the time of the request expressed in MB.
    */

    'oplogSizeMB'?: number;
    /**
    * Flag that indicates whether someone configured this cluster as a sharded cluster.  - If `true`, this cluster serves as a sharded cluster. - If `false`, this cluster serves as a replica set.
    */

    'sharded': boolean;
    /**
    * Number of shards that comprise this cluster.
    */

    'shardsSize'?: number;
    /**
    * Flag that indicates whether someone enabled TLS for this cluster.
    */

    'tlsEnabled': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "agentVersion",
            "baseName": "agentVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "clusterId",
            "baseName": "clusterId",
            "type": "string",
            "format": ""
        },
        {
            "name": "dbSizeBytes",
            "baseName": "dbSizeBytes",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "featureCompatibilityVersion",
            "baseName": "featureCompatibilityVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "managed",
            "baseName": "managed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mongoDBVersion",
            "baseName": "mongoDBVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "oplogSizeMB",
            "baseName": "oplogSizeMB",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "sharded",
            "baseName": "sharded",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "shardsSize",
            "baseName": "shardsSize",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "tlsEnabled",
            "baseName": "tlsEnabled",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AvailableClustersDeployment.attributeTypeMap;
    }

    public constructor() {
    }
}

