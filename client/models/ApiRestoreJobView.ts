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
import { ApiRestoreJobDeliveryView } from '../models/ApiRestoreJobDeliveryView';
import { ApiRestoreJobFileHashView } from '../models/ApiRestoreJobFileHashView';
import { Link } from '../models/Link';
import { HttpFile } from '../http/http';

export class ApiRestoreJobView {
    /**
    * Unique 24-hexadecimal digit string that identifies the batch to which this restore job belongs. This parameter exists only for a sharded cluster restore.
    */

    'batchId'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the sharded cluster checkpoint. The checkpoint represents the point in time back to which you want to restore you data. This parameter applies when `\"delivery.methodName\" : \"AUTOMATED_RESTORE\"`. Use this parameter with sharded clusters only.  - If you set **checkpointId**, you can't set **oplogInc**, **oplogTs**, **snapshotId**, or **pointInTimeUTCMillis**. - If you provide this parameter, this endpoint restores all data up to this checkpoint to the database you specify in the **delivery** object.
    */

    'checkpointId'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the cluster with the snapshot you want to return. This parameter returns for restore clusters.
    */

    'clusterId'?: string;
    /**
    * Human-readable label that identifies the cluster containing the snapshots you want to retrieve.
    */

    'clusterName'?: string;
    /**
    * Date and time when someone requested this restore job. This parameter expresses its value in the ISO 8601 timestamp format in UTC.
    */

    'created'?: Date;

    'delivery': ApiRestoreJobDeliveryView;
    /**
    * Flag that indicates whether someone encrypted the data in the restored snapshot.
    */

    'encryptionEnabled'?: boolean;
    /**
    * Unique 24-hexadecimal digit string that identifies the project that owns the snapshots.
    */

    'groupId'?: string;
    /**
    * List that contains documents mapping each restore file to a hashed checksum. This parameter applies after you download the corresponding **delivery.url**. If `\"methodName\" : \"HTTP\"`, this list contains one object that represents the hash of the **.tar.gz** file.
    */

    'hashes'?: Array<ApiRestoreJobFileHashView>;
    /**
    * Unique 24-hexadecimal digit string that identifies the restore job.
    */

    'id'?: string;
    /**
    * List of one or more Uniform Resource Locators (URLs) that point to API sub-resources, related API resources, or both. RFC 5988 outlines these relationships.
    */

    'links'?: Array<Link>;
    /**
    * Universally Unique Identifier (UUID) that identifies the Key Management Interoperability (KMIP) master key used to encrypt the snapshot data. This parameter applies only when `\"encryptionEnabled\" : \"true\"`.
    */

    'masterKeyUUID'?: string;
    /**
    * Thirty-two-bit incrementing ordinal that represents operations within a given second. When paired with **oplogTs**, this represents the point in time to which MongoDB Cloud restores your data. This parameter applies when `\"delivery.methodName\" : \"AUTOMATED_RESTORE\"`.  - If you set **oplogInc**, you must set **oplogTs**, and can't set **checkpointId**, **snapshotId**, or **pointInTimeUTCMillis**. - If you provide this parameter, this endpoint restores all data up to and including this Oplog timestamp to the database you specified in the **delivery** object.
    */

    'oplogInc'?: number;
    /**
    * Date and time from which you want to restore this snapshot. This parameter expresses its value in ISO 8601 format in UTC. This represents the first part of an Oplog timestamp. When paired with **oplogInc**, they represent the last database operation to which you want to restore your data. This parameter applies when `\"delivery.methodName\" : \"AUTOMATED_RESTORE\"`. Run a query against **local.oplog.rs** on your replica set to find the desired timestamp.  - If you set **oplogTs**, you must set **oplogInc**, and you can't set **checkpointId**, **snapshotId**, or **pointInTimeUTCMillis**. - If you provide this parameter, this endpoint restores all data up to and including this Oplog timestamp to the database you specified in the **delivery** object.
    */

    'oplogTs'?: string;
    /**
    * Timestamp from which you want to restore this snapshot. This parameter expresses its value in the number of milliseconds elapsed since the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time). This timestamp must fall within the last 24 hours of the current time. This parameter applies when `\"delivery.methodName\" : \"AUTOMATED_RESTORE\"`.  - If you provide this parameter, this endpoint restores all data up to this point in time to the database you specified in the **delivery** object. - If you set **pointInTimeUTCMillis**, you can't set **oplogInc**, **oplogTs**, **snapshotId**, or **checkpointId**.
    */

    'pointInTimeUTCMillis'?: number;
    /**
    * Unique 24-hexadecimal digit string that identifies the snapshot to restore. If you set **snapshotId**, you can't set **oplogInc**, **oplogTs**, **pointInTimeUTCMillis**, or **checkpointId**.
    */

    'snapshotId'?: string;
    /**
    * Human-readable label that identifies the status of the downloadable file at the time of the request.
    */

    'statusName'?: string;

    'timestamp'?: ApiBSONTimestampView;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "batchId",
            "baseName": "batchId",
            "type": "string",
            "format": ""
        },
        {
            "name": "checkpointId",
            "baseName": "checkpointId",
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
            "name": "clusterName",
            "baseName": "clusterName",
            "type": "string",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "delivery",
            "baseName": "delivery",
            "type": "ApiRestoreJobDeliveryView",
            "format": ""
        },
        {
            "name": "encryptionEnabled",
            "baseName": "encryptionEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "string",
            "format": ""
        },
        {
            "name": "hashes",
            "baseName": "hashes",
            "type": "Array<ApiRestoreJobFileHashView>",
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
            "name": "oplogInc",
            "baseName": "oplogInc",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "oplogTs",
            "baseName": "oplogTs",
            "type": "string",
            "format": ""
        },
        {
            "name": "pointInTimeUTCMillis",
            "baseName": "pointInTimeUTCMillis",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "snapshotId",
            "baseName": "snapshotId",
            "type": "string",
            "format": ""
        },
        {
            "name": "statusName",
            "baseName": "statusName",
            "type": "string",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "ApiBSONTimestampView",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiRestoreJobView.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ApiRestoreJobViewStatusNameEnum = "IN_PROGRESS" | "BROKEN" | "KILLED" | "FINISHED" ;

