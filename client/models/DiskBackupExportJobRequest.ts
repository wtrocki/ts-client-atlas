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

import { Label } from '../models/Label';
import { Link } from '../models/Link';
import { HttpFile } from '../http/http';

export class DiskBackupExportJobRequest {
    /**
    * Collection of key-value pairs that represent custom data to add to the metadata file that MongoDB Cloud uploads to the bucket when the export job finishes.
    */
    'customData'?: Array<Label>;
    /**
    * Unique 24-hexadecimal character string that identifies the AWS bucket to which MongoDB Cloud exports the Cloud Backup snapshot.
    */
    'exportBucketId': string;
    /**
    * List of one or more Uniform Resource Locators (URLs) that point to API sub-resources, related API resources, or both. RFC 5988 outlines these relationships.
    */
    'links'?: Array<Link>;
    /**
    * Unique 24-hexadecimal character string that identifies the Cloud Backup snasphot to export.
    */
    'snapshotId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "customData",
            "baseName": "customData",
            "type": "Array<Label>",
            "format": ""
        },
        {
            "name": "exportBucketId",
            "baseName": "exportBucketId",
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
            "name": "snapshotId",
            "baseName": "snapshotId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DiskBackupExportJobRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

