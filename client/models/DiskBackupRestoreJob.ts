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
import { DiskBackupBaseRestoreMember } from '../models/DiskBackupBaseRestoreMember';
import { Link } from '../models/Link';
import { HttpFile } from '../http/http';

export class DiskBackupRestoreJob {
    /**
    * Flag that indicates whether someone canceled this restore job.
    */

    'cancelled'?: boolean;
    /**
    * Information on the restore job for each replica set in the sharded cluster.
    */

    'components'?: Array<DiskBackupBaseRestoreMember>;
    /**
    * Human-readable label that categorizes the restore job to create.
    */

    'deliveryType': string;
    /**
    * One or more Uniform Resource Locators (URLs) that point to the compressed snapshot files for manual download. MongoDB Cloud returns this parameter when `\"deliveryType\" : \"download\"`.
    */

    'deliveryUrl'?: Array<string>;

    'desiredTimestamp'?: ApiBSONTimestampView;
    /**
    * Flag that indicates whether the restore job expired.
    */

    'expired'?: boolean;
    /**
    * Date and time when the restore job expires. This parameter expresses its value in the ISO 8601 timestamp format in UTC.
    */

    'expiresAt'?: Date;
    /**
    * Flag that indicates whether the restore job failed.
    */

    'failed'?: boolean;
    /**
    * Date and time when the restore job completed. This parameter expresses its value in the ISO 8601 timestamp format in UTC.
    */

    'finishedAt'?: Date;
    /**
    * Unique 24-hexadecimal character string that identifies the restore job.
    */

    'id'?: string;
    /**
    * List of one or more Uniform Resource Locators (URLs) that point to API sub-resources, related API resources, or both. RFC 5988 outlines these relationships.
    */

    'links'?: Array<Link>;
    /**
    * Oplog operation number from which you want to restore this snapshot. This number represents the second part of an Oplog timestamp. The resource returns this parameter when `\"deliveryType\" : \"pointInTime\"` and **oplogTs** exceeds `0`.
    */

    'oplogInc'?: number;
    /**
    * Date and time from which you want to restore this snapshot. This parameter expresses this timestamp in the number of seconds that have elapsed since the UNIX epoch. This number represents the first part of an Oplog timestamp. The resource returns this parameter when `\"deliveryType\" : \"pointInTime\"` and **oplogTs** exceeds `0`.
    */

    'oplogTs'?: number;
    /**
    * Date and time from which MongoDB Cloud restored this snapshot. This parameter expresses this timestamp in the number of seconds that have elapsed since the UNIX epoch. The resource returns this parameter when `\"deliveryType\" : \"pointInTime\"` and **pointInTimeUTCSeconds** exceeds `0`.
    */

    'pointInTimeUTCSeconds'?: number;
    /**
    * Unique 24-hexadecimal character string that identifies the snapshot.
    */

    'snapshotId'?: string;
    /**
    * Human-readable label that identifies the target cluster to which the restore job restores the snapshot. The resource returns this parameter when `\"deliveryType\":` `\"automated\"`.
    */

    'targetClusterName': string;
    /**
    * Unique 24-hexadecimal digit string that identifies the target project for the specified **targetClusterName**.
    */

    'targetGroupId': string;
    /**
    * Date and time when MongoDB Cloud took the snapshot associated with **snapshotId**. This parameter expresses its value in the ISO 8601 timestamp format in UTC.
    */

    'timestamp'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cancelled",
            "baseName": "cancelled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "components",
            "baseName": "components",
            "type": "Array<DiskBackupBaseRestoreMember>",
            "format": ""
        },
        {
            "name": "deliveryType",
            "baseName": "deliveryType",
            "type": "string",
            "format": ""
        },
        {
            "name": "deliveryUrl",
            "baseName": "deliveryUrl",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "desiredTimestamp",
            "baseName": "desiredTimestamp",
            "type": "ApiBSONTimestampView",
            "format": ""
        },
        {
            "name": "expired",
            "baseName": "expired",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "failed",
            "baseName": "failed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "finishedAt",
            "baseName": "finishedAt",
            "type": "Date",
            "format": "date-time"
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
            "name": "oplogInc",
            "baseName": "oplogInc",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "oplogTs",
            "baseName": "oplogTs",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "pointInTimeUTCSeconds",
            "baseName": "pointInTimeUTCSeconds",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "snapshotId",
            "baseName": "snapshotId",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetClusterName",
            "baseName": "targetClusterName",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetGroupId",
            "baseName": "targetGroupId",
            "type": "string",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return DiskBackupRestoreJob.attributeTypeMap;
    }

    public constructor() {
    }
}


export type DiskBackupRestoreJobDeliveryTypeEnum = "automated" | "download" | "pointInTime" ;

