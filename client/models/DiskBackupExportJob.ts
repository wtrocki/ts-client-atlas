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

import { ApiExportStatusView } from '../models/ApiExportStatusView';
import { DiskBackupBaseRestoreMember } from '../models/DiskBackupBaseRestoreMember';
import { Label } from '../models/Label';
import { Link } from '../models/Link';
import { HttpFile } from '../http/http';

export class DiskBackupExportJob {
    /**
    * Information on the export job for each replica set in the sharded cluster.
    */

    'components'?: Array<DiskBackupBaseRestoreMember>;
    /**
    * Date and time when someone created this export job. MongoDB Cloud represents this timestamp in ISO 8601 format in UTC.
    */

    'createdAt'?: Date;
    /**
    * Collection of key-value pairs that represent custom data for the metadata file that MongoDB Cloud uploads to the bucket when the export job finishes.
    */

    'customData'?: Array<Label>;
    /**
    * One or more Uniform Resource Locators (URLs) that point to the compressed snapshot files for manual download. MongoDB Cloud returns this parameter when `\"deliveryType\" : \"download\"`.
    */

    'deliveryUrl'?: Array<string>;
    /**
    * Unique 24-hexadecimal character string that identifies the AWS bucket to which MongoDB Cloud exports the Cloud Backup snapshot.
    */

    'exportBucketId': string;

    'exportStatus'?: ApiExportStatusView;
    /**
    * Date and time when this export job completed. MongoDB Cloud represents this timestamp in ISO 8601 format in UTC.
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
    * Full path on the cloud provider bucket to the folder where the snapshot is exported.
    */

    'prefix'?: string;
    /**
    * Unique 24-hexadecimal character string that identifies the snapshot.
    */

    'snapshotId'?: string;
    /**
    * State of the export job.
    */

    'state'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "components",
            "baseName": "components",
            "type": "Array<DiskBackupBaseRestoreMember>",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "customData",
            "baseName": "customData",
            "type": "Array<Label>",
            "format": ""
        },
        {
            "name": "deliveryUrl",
            "baseName": "deliveryUrl",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "exportBucketId",
            "baseName": "exportBucketId",
            "type": "string",
            "format": ""
        },
        {
            "name": "exportStatus",
            "baseName": "exportStatus",
            "type": "ApiExportStatusView",
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
            "name": "prefix",
            "baseName": "prefix",
            "type": "string",
            "format": ""
        },
        {
            "name": "snapshotId",
            "baseName": "snapshotId",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DiskBackupExportJob.attributeTypeMap;
    }

    public constructor() {
    }
}


export type DiskBackupExportJobStateEnum = "Cancelled" | "Failed" | "InProgress" | "Queued" | "Successful" ;

