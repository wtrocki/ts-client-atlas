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

import { Link } from '../models/Link';
import { HttpFile } from '../http/http';

export class SnapshotSchedule {
    /**
    * Quantity of time expressed in minutes between successive cluster checkpoints. This parameter applies only to sharded clusters. This number determines the granularity of continuous cloud backups for sharded clusters.
    */
    'clusterCheckpointIntervalMin': SnapshotScheduleClusterCheckpointIntervalMinEnum;
    /**
    * Unique 24-hexadecimal digit string that identifies the cluster with the snapshot you want to return.
    */
    'clusterId': string;
    /**
    * Quantity of time to keep daily snapshots. MongoDB Cloud expresses this value in days. Set this value to `0` to disable daily snapshot retention.
    */
    'dailySnapshotRetentionDays': SnapshotScheduleDailySnapshotRetentionDaysEnum;
    /**
    * Unique 24-hexadecimal digit string that identifies the project that contains the cluster.
    */
    'groupId': string;
    /**
    * List of one or more Uniform Resource Locators (URLs) that point to API sub-resources, related API resources, or both. RFC 5988 outlines these relationships.
    */
    'links'?: Array<Link>;
    /**
    * Number of months that MongoDB Cloud must keep monthly snapshots. Set this value to `0` to disable monthly snapshot retention.
    */
    'monthlySnapshotRetentionMonths': SnapshotScheduleMonthlySnapshotRetentionMonthsEnum;
    /**
    * Number of hours before the current time from which MongoDB Cloud can create a Continuous Cloud Backup snapshot.
    */
    'pointInTimeWindowHours': number;
    /**
    * Number of hours that must elapse before taking another snapshot.
    */
    'snapshotIntervalHours': SnapshotScheduleSnapshotIntervalHoursEnum;
    /**
    * Number of days that MongoDB Cloud must keep recent snapshots.
    */
    'snapshotRetentionDays': SnapshotScheduleSnapshotRetentionDaysEnum;
    /**
    * Number of weeks that MongoDB Cloud must keep weekly snapshots. Set this value to `0` to disable weekly snapshot retention.
    */
    'weeklySnapshotRetentionWeeks': SnapshotScheduleWeeklySnapshotRetentionWeeksEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "clusterCheckpointIntervalMin",
            "baseName": "clusterCheckpointIntervalMin",
            "type": "SnapshotScheduleClusterCheckpointIntervalMinEnum",
            "format": "int32"
        },
        {
            "name": "clusterId",
            "baseName": "clusterId",
            "type": "string",
            "format": ""
        },
        {
            "name": "dailySnapshotRetentionDays",
            "baseName": "dailySnapshotRetentionDays",
            "type": "SnapshotScheduleDailySnapshotRetentionDaysEnum",
            "format": "int32"
        },
        {
            "name": "groupId",
            "baseName": "groupId",
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
            "name": "monthlySnapshotRetentionMonths",
            "baseName": "monthlySnapshotRetentionMonths",
            "type": "SnapshotScheduleMonthlySnapshotRetentionMonthsEnum",
            "format": "int32"
        },
        {
            "name": "pointInTimeWindowHours",
            "baseName": "pointInTimeWindowHours",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "snapshotIntervalHours",
            "baseName": "snapshotIntervalHours",
            "type": "SnapshotScheduleSnapshotIntervalHoursEnum",
            "format": "int32"
        },
        {
            "name": "snapshotRetentionDays",
            "baseName": "snapshotRetentionDays",
            "type": "SnapshotScheduleSnapshotRetentionDaysEnum",
            "format": "int32"
        },
        {
            "name": "weeklySnapshotRetentionWeeks",
            "baseName": "weeklySnapshotRetentionWeeks",
            "type": "SnapshotScheduleWeeklySnapshotRetentionWeeksEnum",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return SnapshotSchedule.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SnapshotScheduleClusterCheckpointIntervalMinEnum = "15" | "30" | "60" ;
export type SnapshotScheduleDailySnapshotRetentionDaysEnum = "0" | "3" | "4" | "5" | "6" | "7" | "15" | "30" | "60" | "90" | "120" | "180" | "360" ;
export type SnapshotScheduleMonthlySnapshotRetentionMonthsEnum = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "18" | "24" | "36" ;
export type SnapshotScheduleSnapshotIntervalHoursEnum = "6" | "8" | "12" | "24" ;
export type SnapshotScheduleSnapshotRetentionDaysEnum = "2" | "3" | "4" | "5" ;
export type SnapshotScheduleWeeklySnapshotRetentionWeeksEnum = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "12" | "16" | "20" | "24" | "52" ;
