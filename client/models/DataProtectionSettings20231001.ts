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

import { BackupComplianceOnDemandPolicyItem } from '../models/BackupComplianceOnDemandPolicyItem';
import { BackupComplianceScheduledPolicyItem } from '../models/BackupComplianceScheduledPolicyItem';
import { HttpFile } from '../http/http';

export class DataProtectionSettings20231001 {
    /**
    * Email address of the user who authorized to update the Backup Compliance Policy  settings.
    */

    'authorizedEmail': string;
    /**
    * First name of the user who authorized to updated the Backup Compliance Policy  settings.
    */

    'authorizedUserFirstName': string;
    /**
    * Last name of the user who authorized to updated the Backup Compliance Policy  settings.
    */

    'authorizedUserLastName': string;
    /**
    * Flag that indicates whether to prevent cluster users from deleting backups copied to other regions, even if those additional snapshot regions are removed. If unspecified, this value defaults to false.
    */

    'copyProtectionEnabled'?: boolean;
    /**
    * Flag that indicates whether Encryption at Rest using Customer Key  Management is required for all clusters with a Backup Compliance Policy. If unspecified, this value defaults to false.
    */

    'encryptionAtRestEnabled'?: boolean;

    'onDemandPolicyItem'?: BackupComplianceOnDemandPolicyItem;
    /**
    * Flag that indicates whether the cluster uses Continuous Cloud Backups with a Backup Compliance Policy. If unspecified, this value defaults to false.
    */

    'pitEnabled'?: boolean;
    /**
    * Unique 24-hexadecimal digit string that identifies the project for the Backup Compliance Policy.
    */

    'projectId'?: string;
    /**
    * Number of previous days that you can restore back to with Continuous Cloud Backup with a Backup Compliance Policy. You must specify a positive, non-zero integer, and the maximum retention window can't exceed the hourly retention time. This parameter applies only to Continuous Cloud Backups with a Backup Compliance Policy.
    */

    'restoreWindowDays'?: number;
    /**
    * List that contains the specifications for one scheduled policy.
    */

    'scheduledPolicyItems'?: Array<BackupComplianceScheduledPolicyItem>;
    /**
    * Label that indicates the state of the Backup Compliance Policy settings. MongoDB Cloud ignores this setting when you enable or update the Backup Compliance Policy settings.
    */

    'state'?: string;
    /**
    * ISO 8601 timestamp format in UTC that indicates when the user updated the Data Protection Policy settings. MongoDB Cloud ignores this setting when you enable or update the Backup Compliance Policy settings.
    */

    'updatedDate'?: Date;
    /**
    * Email address that identifies the user who updated the Backup Compliance Policy settings. MongoDB Cloud ignores this email setting when you enable or update the Backup Compliance Policy settings.
    */

    'updatedUser'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "authorizedEmail",
            "baseName": "authorizedEmail",
            "type": "string",
            "format": "email"
        },
        {
            "name": "authorizedUserFirstName",
            "baseName": "authorizedUserFirstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "authorizedUserLastName",
            "baseName": "authorizedUserLastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "copyProtectionEnabled",
            "baseName": "copyProtectionEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "encryptionAtRestEnabled",
            "baseName": "encryptionAtRestEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "onDemandPolicyItem",
            "baseName": "onDemandPolicyItem",
            "type": "BackupComplianceOnDemandPolicyItem",
            "format": ""
        },
        {
            "name": "pitEnabled",
            "baseName": "pitEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string",
            "format": ""
        },
        {
            "name": "restoreWindowDays",
            "baseName": "restoreWindowDays",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "scheduledPolicyItems",
            "baseName": "scheduledPolicyItems",
            "type": "Array<BackupComplianceScheduledPolicyItem>",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedDate",
            "baseName": "updatedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedUser",
            "baseName": "updatedUser",
            "type": "string",
            "format": "email"
        }    ];

    static getAttributeTypeMap() {
        return DataProtectionSettings20231001.attributeTypeMap;
    }

    public constructor() {
    }
}
