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

import { ApiBSONTimestampView } from '../models/ApiBSONTimestampView';
import { HttpFile } from '../http/http';

/**
* Metadata contained in one document that describes the complete snapshot taken for this node.
*/
export class ApiCheckpointPartView {
    /**
    * Human-readable label that identifies the replica set to which this checkpoint applies.
    */

    'replicaSetName'?: string;
    /**
    * Human-readable label that identifies the shard to which this checkpoint applies.
    */

    'shardName'?: string;
    /**
    * Flag that indicates whether the token exists.
    */

    'tokenDiscovered'?: boolean;

    'tokenTimestamp'?: ApiBSONTimestampView;
    /**
    * Human-readable label that identifies the type of host that the part represents.
    */

    'typeName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "replicaSetName",
            "baseName": "replicaSetName",
            "type": "string",
            "format": ""
        },
        {
            "name": "shardName",
            "baseName": "shardName",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenDiscovered",
            "baseName": "tokenDiscovered",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "tokenTimestamp",
            "baseName": "tokenTimestamp",
            "type": "ApiBSONTimestampView",
            "format": ""
        },
        {
            "name": "typeName",
            "baseName": "typeName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiCheckpointPartView.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ApiCheckpointPartViewTypeNameEnum = "REPLICA_SET" | "CONFIG_SERVER" | "CONFIG_SERVER_REPLICA_SET" ;

