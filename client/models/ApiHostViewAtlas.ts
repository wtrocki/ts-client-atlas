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

import { LinkAtlas } from '../models/LinkAtlas';
import { HttpFile } from '../http/http';

export class ApiHostViewAtlas {
    /**
    * Date and time when MongoDB Cloud created this MongoDB process. This parameter expresses its value in the ISO 8601 timestamp format in UTC.
    */
    'created'?: Date;
    /**
    * Unique 24-hexadecimal digit string that identifies the project. The project contains MongoDB processes that you want to return. The MongoDB process can be either the `mongod` or `mongos`.
    */
    'groupId'?: string;
    /**
    * Hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (`mongod` or `mongos`).
    */
    'hostname'?: string;
    /**
    * Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (`mongod` or `mongos`). The port must be the IANA port on which the MongoDB process listens for requests.
    */
    'id'?: string;
    /**
    * Date and time when MongoDB Cloud received the last ping for this MongoDB process. This parameter expresses its value in the ISO 8601 timestamp format in UTC.
    */
    'lastPing'?: Date;
    /**
    * List of one or more Uniform Resource Locators (URLs) that point to API sub-resources, related API resources, or both. RFC 5988 outlines these relationships.
    */
    'links'?: Array<LinkAtlas>;
    /**
    * Internet Assigned Numbers Authority (IANA) port on which the MongoDB process listens for requests.
    */
    'port'?: number;
    /**
    * Human-readable label that identifies the replica set that contains this process. This resource returns this parameter if this process belongs to a replica set.
    */
    'replicaSetName'?: string;
    /**
    * Type of MongoDB process that MongoDB Cloud tracks. MongoDB Cloud returns new processes as **NO_DATA** until MongoDB Cloud completes deploying the process.
    */
    'typeName'?: ApiHostViewAtlasTypeNameEnum;
    /**
    * Human-readable label that identifies the cluster node. MongoDB Cloud sets this hostname usually to the standard hostname for the cluster node. It appears in the connection string for a cluster instead of the value of the hostname parameter.
    */
    'userAlias'?: string;
    /**
    * Version of MongoDB that this process runs.
    */
    'version'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "string",
            "format": ""
        },
        {
            "name": "hostname",
            "baseName": "hostname",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastPing",
            "baseName": "lastPing",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<LinkAtlas>",
            "format": ""
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "replicaSetName",
            "baseName": "replicaSetName",
            "type": "string",
            "format": ""
        },
        {
            "name": "typeName",
            "baseName": "typeName",
            "type": "ApiHostViewAtlasTypeNameEnum",
            "format": ""
        },
        {
            "name": "userAlias",
            "baseName": "userAlias",
            "type": "string",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiHostViewAtlas.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ApiHostViewAtlasTypeNameEnum = "REPLICA_PRIMARY" | "REPLICA_SECONDARY" | "RECOVERING" | "SHARD_MONGOS" | "SHARD_CONFIG" | "SHARD_STANDALONE" | "SHARD_PRIMARY" | "SHARD_SECONDARY" | "NO_DATA" ;
