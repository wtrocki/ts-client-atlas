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

import { DiskBackupReplicaSet } from '../models/DiskBackupReplicaSet';
import { DiskBackupShardedClusterSnapshot } from '../models/DiskBackupShardedClusterSnapshot';
import { DiskBackupShardedClusterSnapshotMember } from '../models/DiskBackupShardedClusterSnapshotMember';
import { Link } from '../models/Link';
import { HttpFile } from '../http/http';

export class DiskBackupSnapshot {
    /**
    * Human-readable label that identifies the cloud provider that stores this snapshot. The resource returns this parameter when `\"type\": \"replicaSet\"`.
    */
    'cloudProvider'?: DiskBackupSnapshotCloudProviderEnum;
    /**
    * List that identifies the regions to which MongoDB Cloud copies the snapshot.
    */
    'copyRegions'?: Array<string>;
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
    'frequencyType'?: DiskBackupSnapshotFrequencyTypeEnum;
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
    * Version of the MongoDB host that this snapshot backs up.
    */
    'mongodVersion'?: string;
    /**
    * List that contains unique identifiers for the policy items.
    */
    'policyItems'?: Array<string>;
    /**
    * Human-readable label that identifies the replica set from which MongoDB Cloud took this snapshot. The resource returns this parameter when `\"type\": \"replicaSet\"`.
    */
    'replicaSetName'?: string;
    /**
    * Human-readable label that identifies when this snapshot triggers.
    */
    'snapshotType'?: DiskBackupSnapshotSnapshotTypeEnum;
    /**
    * Human-readable label that indicates the stage of the backup process for this snapshot.
    */
    'status'?: DiskBackupSnapshotStatusEnum;
    /**
    * Number of bytes taken to store the backup snapshot.
    */
    'storageSizeBytes'?: number;
    /**
    * Human-readable label that categorizes the cluster as a replica set or sharded cluster.
    */
    'type'?: DiskBackupSnapshotTypeEnum;
    /**
    * List that includes the snapshots and the cloud provider that stores the snapshots. The resource returns this parameter when `\"type\" : \"SHARDED_CLUSTER\"`.
    */
    'members'?: Array<DiskBackupShardedClusterSnapshotMember>;
    /**
    * List that contains the unique identifiers of the snapshots created for the shards and config host for a sharded cluster. The resource returns this parameter when `\"type\": \"SHARDED_CLUSTER\"`. These identifiers should match the ones specified in the **members[n].id** parameters. This allows you to map a snapshot to its shard or config host name.
    */
    'snapshotIds'?: Array<string>;

    static readonly discriminator: string | undefined = "type";

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cloudProvider",
            "baseName": "cloudProvider",
            "type": "DiskBackupSnapshotCloudProviderEnum",
            "format": ""
        },
        {
            "name": "copyRegions",
            "baseName": "copyRegions",
            "type": "Array<string>",
            "format": ""
        },
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
            "type": "DiskBackupSnapshotFrequencyTypeEnum",
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
            "name": "replicaSetName",
            "baseName": "replicaSetName",
            "type": "string",
            "format": ""
        },
        {
            "name": "snapshotType",
            "baseName": "snapshotType",
            "type": "DiskBackupSnapshotSnapshotTypeEnum",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "DiskBackupSnapshotStatusEnum",
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
            "type": "DiskBackupSnapshotTypeEnum",
            "format": ""
        },
        {
            "name": "members",
            "baseName": "members",
            "type": "Array<DiskBackupShardedClusterSnapshotMember>",
            "format": ""
        },
        {
            "name": "snapshotIds",
            "baseName": "snapshotIds",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DiskBackupSnapshot.attributeTypeMap;
    }

    public constructor() {
        this.type = "DiskBackupSnapshot";
    }
}


export type DiskBackupSnapshotCloudProviderEnum = "AWS" | "AZURE" | "GCP" ;
export type DiskBackupSnapshotFrequencyTypeEnum = "hourly" | "daily" | "weekly" | "monthly" ;
export type DiskBackupSnapshotSnapshotTypeEnum = "onDemand" | "scheduled" ;
export type DiskBackupSnapshotStatusEnum = "queued" | "inProgress" | "completed" | "failed" ;
export type DiskBackupSnapshotTypeEnum = "REPLICA_SET" | "SHARDED_CLUSTER" ;
