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

import { CriteriaView } from '../models/CriteriaView';
import { OnlineArchiveSchedule } from '../models/OnlineArchiveSchedule';
import { PartitionFieldView } from '../models/PartitionFieldView';
import { HttpFile } from '../http/http';

export class OnlineArchive {
    /**
    * Unique 24-hexadecimal digit string that identifies the online archive.
    */
    'id'?: string;
    /**
    * Human-readable label that identifies the cluster that contains the collection for which you want to create an online archive.
    */
    'clusterName'?: string;
    /**
    * Human-readable label that identifies the collection for which you created the online archive.
    */
    'collName'?: string;
    /**
    * Classification of MongoDB database collection that you want to return.  If you set this parameter to `TIMESERIES`, set `\"criteria.type\" : \"date\"` and `\"criteria.dateFormat\" : \"ISODATE\"`.
    */
    'collectionType'?: OnlineArchiveCollectionTypeEnum;
    'criteria': CriteriaView;
    /**
    * Human-readable label of the database that contains the collection that contains the online archive.
    */
    'dbName'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the project that contains the specified cluster. The specified cluster contains the collection for which to create the online archive.
    */
    'groupId'?: string;
    /**
    * List that contains document parameters to use to logically divide data within a collection. Partitions provide a coarse level of filtering of the underlying collection data. To divide your data, specify up to two parameters that you frequently query. Any queries that don't use these parameters result in a full collection scan of all archived documents. This takes more time and increase your costs.
    */
    'partitionFields'?: Array<PartitionFieldView>;
    'schedule'?: OnlineArchiveSchedule;
    /**
    * Phase of the process to create this online archive when you made this request.  | State       | Indication | |-------------|------------| | `PENDING`   | MongoDB Cloud has queued documents for archive. Archiving hasn't started. | | `ARCHIVING` | MongoDB Cloud started archiving documents that meet the archival criteria. | | `IDLE`      | MongoDB Cloud waits to start the next archival job. | | `PAUSING`   | Someone chose to stop archiving. MongoDB Cloud finishes the running archival job then changes the state to `PAUSED` when that job completes. | | `PAUSED`    | MongoDB Cloud has stopped archiving. Archived documents can be queried. The specified archiving operation on the active cluster cannot archive additional documents. You can resume archiving for paused archives at any time. | | `ORPHANED`  | Someone has deleted the collection associated with an active or paused archive. MongoDB Cloud doesn't delete the archived data. You must manually delete the online archives associated with the deleted collection. | | `DELETED`   | Someone has deleted the archive was deleted. When someone deletes an online archive, MongoDB Cloud removes all associated archived documents from the cloud object storage. |
    */
    'state'?: OnlineArchiveStateEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "_id",
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
            "name": "collName",
            "baseName": "collName",
            "type": "string",
            "format": ""
        },
        {
            "name": "collectionType",
            "baseName": "collectionType",
            "type": "OnlineArchiveCollectionTypeEnum",
            "format": ""
        },
        {
            "name": "criteria",
            "baseName": "criteria",
            "type": "CriteriaView",
            "format": ""
        },
        {
            "name": "dbName",
            "baseName": "dbName",
            "type": "string",
            "format": ""
        },
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "string",
            "format": ""
        },
        {
            "name": "partitionFields",
            "baseName": "partitionFields",
            "type": "Array<PartitionFieldView>",
            "format": ""
        },
        {
            "name": "schedule",
            "baseName": "schedule",
            "type": "OnlineArchiveSchedule",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "OnlineArchiveStateEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OnlineArchive.attributeTypeMap;
    }

    public constructor() {
    }
}


export type OnlineArchiveCollectionTypeEnum = "TIMESERIES" | "STANDARD" ;
export type OnlineArchiveStateEnum = "PENDING" | "ACTIVE" | "PAUSING" | "PAUSED" | "DELETED" | "ORPHANED" ;
