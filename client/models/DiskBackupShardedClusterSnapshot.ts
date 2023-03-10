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

import { DiskBackupShardedClusterSnapshotMember } from '../models/DiskBackupShardedClusterSnapshotMember';
import { Link } from '../models/Link';
import { HttpFile } from '../http/http';

/**
* Details of the sharded cluster snapshot that MongoDB Cloud created.
*/
export class DiskBackupShardedClusterSnapshot {
    /**
    * Date and time when MongoDB Cloud took the snapshot. This parameter expresses its value in the ISO 8601 timestamp format in UTC.
    */

    'createdAt'?: Date;
    /**
    * Human-readable phrase or sentence that explains the purpose of the snapshot. The resource returns this parameter when `\"status\": \"onDemand\"`.
    */

    'description'?: string;
    /**
    * Date and time when MongoDB Cloud deletes the snapshot. This parameter expresses its value in the ISO 8601 timestamp format in UTC.
    */

    'expiresAt'?: Date;
    /**
    * Human-readable label that identifies how often this snapshot triggers.
    */

    'frequencyType'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the snapshot.
    */

    'id'?: string;
    /**
    * List of one or more Uniform Resource Locators (URLs) that point to API sub-resources, related API resources, or both. RFC 5988 outlines these relationships.
    */

    'links'?: Array<Link>;
    /**
    * Unique string that identifies the Amazon Web Services (AWS) Key Management Service (KMS) Customer Master Key (CMK) used to encrypt the snapshot. The resource returns this value when `\"encryptionEnabled\" : true`.
    */

    'masterKeyUUID'?: string;
    /**
    * List that includes the snapshots and the cloud provider that stores the snapshots. The resource returns this parameter when `\"type\" : \"SHARDED_CLUSTER\"`.
    */

    'members'?: Array<DiskBackupShardedClusterSnapshotMember>;
    /**
    * Version of the MongoDB host that this snapshot backs up.
    */

    'mongodVersion'?: string;
    /**
    * List that contains unique identifiers for the policy items.
    */

    'policyItems'?: Array<string>;
    /**
    * List that contains the unique identifiers of the snapshots created for the shards and config host for a sharded cluster. The resource returns this parameter when `\"type\": \"SHARDED_CLUSTER\"`. These identifiers should match the ones specified in the **members[n].id** parameters. This allows you to map a snapshot to its shard or config host name.
    */

    'snapshotIds'?: Array<string>;
    /**
    * Human-readable label that identifies when this snapshot triggers.
    */

    'snapshotType'?: string;
    /**
    * Human-readable label that indicates the stage of the backup process for this snapshot.
    */

    'status'?: string;
    /**
    * Number of bytes taken to store the backup snapshot.
    */

    'storageSizeBytes'?: number;
    /**
    * Human-readable label that categorizes the cluster as a replica set or sharded cluster.
    */

    'type'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "frequencyType",
            "baseName": "frequencyType",
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
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>",
            "format": ""
        },
        {
            "name": "masterKeyUUID",
            "baseName": "masterKeyUUID",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "members",
            "baseName": "members",
            "type": "Array<DiskBackupShardedClusterSnapshotMember>",
            "format": ""
        },
        {
            "name": "mongodVersion",
            "baseName": "mongodVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "policyItems",
            "baseName": "policyItems",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "snapshotIds",
            "baseName": "snapshotIds",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "snapshotType",
            "baseName": "snapshotType",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "storageSizeBytes",
            "baseName": "storageSizeBytes",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DiskBackupShardedClusterSnapshot.attributeTypeMap;
    }

    public constructor() {
    }
}


export type DiskBackupShardedClusterSnapshotFrequencyTypeEnum = "hourly" | "daily" | "weekly" | "monthly" ;
export type DiskBackupShardedClusterSnapshotSnapshotTypeEnum = "onDemand" | "scheduled" ;
export type DiskBackupShardedClusterSnapshotStatusEnum = "queued" | "inProgress" | "completed" | "failed" ;
export type DiskBackupShardedClusterSnapshotTypeEnum = "REPLICA_SET" | "SHARDED_CLUSTER" ;

