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

import { HttpFile } from '../http/http';

/**
* Characteristics that identify this snapshot.
*/
export class ApiSnapshotPartView {
    /**
    * Unique 24-hexadecimal digit string that identifies the cluster with the snapshots you want to return.
    */
    'clusterId'?: string;
    /**
    * Human-readable label that identifies the method of compression for the snapshot.
    */
    'compressionSetting'?: ApiSnapshotPartViewCompressionSettingEnum;
    /**
    * Total size of the data stored on each node in the cluster. This parameter expresses its value in bytes.
    */
    'dataSizeBytes'?: number;
    /**
    * Flag that indicates whether someone encrypted this snapshot.
    */
    'encryptionEnabled'?: boolean;
    /**
    * Number that indicates the total size of the data files in bytes.
    */
    'fileSizeBytes'?: number;
    /**
    * Unique string that identifies the Key Management Interoperability (KMIP) master key used to encrypt the snapshot data. The resource returns this parameter when `\"parts.encryptionEnabled\" : true`.
    */
    'masterKeyUUID'?: string;
    /**
    * Number that indicates the version of MongoDB that the replica set primary ran when MongoDB Cloud created the snapshot.
    */
    'mongodVersion'?: string;
    /**
    * Human-readable label that identifies the replica set.
    */
    'replicaSetName'?: string;
    /**
    * Number that indicates the total size of space allocated for document storage.
    */
    'storageSizeBytes'?: number;
    /**
    * Human-readable label that identifies the type of server from which MongoDB Cloud took this snapshot.
    */
    'typeName'?: ApiSnapshotPartViewTypeNameEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "clusterId",
            "baseName": "clusterId",
            "type": "string",
            "format": ""
        },
        {
            "name": "compressionSetting",
            "baseName": "compressionSetting",
            "type": "ApiSnapshotPartViewCompressionSettingEnum",
            "format": ""
        },
        {
            "name": "dataSizeBytes",
            "baseName": "dataSizeBytes",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "encryptionEnabled",
            "baseName": "encryptionEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "fileSizeBytes",
            "baseName": "fileSizeBytes",
            "type": "number",
            "format": "int64"
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
            "name": "replicaSetName",
            "baseName": "replicaSetName",
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
            "name": "typeName",
            "baseName": "typeName",
            "type": "ApiSnapshotPartViewTypeNameEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiSnapshotPartView.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ApiSnapshotPartViewCompressionSettingEnum = "NONE" | "GZIP" ;
export type ApiSnapshotPartViewTypeNameEnum = "REPLICA_SET" | "CONFIG_SERVER" | "CONFIG_SERVER_REPLICA_SET" ;
