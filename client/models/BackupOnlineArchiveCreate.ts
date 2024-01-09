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

import { Criteria } from '../models/Criteria';
import { DataExpirationRule } from '../models/DataExpirationRule';
import { DataProcessRegion } from '../models/DataProcessRegion';
import { OnlineArchiveSchedule } from '../models/OnlineArchiveSchedule';
import { PartitionField } from '../models/PartitionField';
import { HttpFile } from '../http/http';

export class BackupOnlineArchiveCreate {
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

    'collName': string;
    /**
    * Classification of MongoDB database collection that you want to return.  If you set this parameter to `TIMESERIES`, set `\"criteria.type\" : \"date\"` and `\"criteria.dateFormat\" : \"ISODATE\"`.
    */

    'collectionType'?: string;

    'criteria': Criteria;

    'dataExpirationRule'?: DataExpirationRule;

    'dataProcessRegion'?: DataProcessRegion;
    /**
    * Human-readable label that identifies the dataset that Atlas generates for this online archive.
    */

    'dataSetName'?: string;
    /**
    * Human-readable label of the database that contains the collection that contains the online archive.
    */

    'dbName': string;
    /**
    * Unique 24-hexadecimal digit string that identifies the project that contains the specified cluster. The specified cluster contains the collection for which to create the online archive.
    */

    'groupId'?: string;
    /**
    * List that contains document parameters to use to logically divide data within a collection. Partitions provide a coarse level of filtering of the underlying collection data. To divide your data, specify parameters that you frequently query. If you \"specified :criteria.type\": \"DATE\" in the CREATE ONE ONLINE ARCHIVE endpoint, then you can specify up to three parameters by which to query. One of these parameters must be the DATE value, which is required in this case. If you \"specified :criteria.type\": \"CUSTOM\" in the CREATE ONE ONLINE ARCHIVE endpoint, then you can specify up to two parameters by which to query. Queries that don't use \":criteria.type\": \"DATE\" or \":criteria.type\": \"CUSTOM\" parameters cause MongoDB to scan a full collection of all archived documents. This takes more time and increases your costs.
    */

    'partitionFields'?: Array<PartitionField>;
    /**
    * Flag that indicates whether this online archive exists in the paused state. A request to resume fails if the collection has another active online archive. To pause an active online archive or resume a paused online archive, you must include this parameter. To pause an active archive, set this to **true**. To resume a paused archive, set this to **false**.
    */

    'paused'?: boolean;

    'schedule'?: OnlineArchiveSchedule;
    /**
    * Phase of the process to create this online archive when you made this request.  | State       | Indication | |-------------|------------| | `PENDING`   | MongoDB Cloud has queued documents for archive. Archiving hasn't started. | | `ARCHIVING` | MongoDB Cloud started archiving documents that meet the archival criteria. | | `IDLE`      | MongoDB Cloud waits to start the next archival job. | | `PAUSING`   | Someone chose to stop archiving. MongoDB Cloud finishes the running archival job then changes the state to `PAUSED` when that job completes. | | `PAUSED`    | MongoDB Cloud has stopped archiving. Archived documents can be queried. The specified archiving operation on the active cluster cannot archive additional documents. You can resume archiving for paused archives at any time. | | `ORPHANED`  | Someone has deleted the collection associated with an active or paused archive. MongoDB Cloud doesn't delete the archived data. You must manually delete the online archives associated with the deleted collection. | | `DELETED`   | Someone has deleted the archive was deleted. When someone deletes an online archive, MongoDB Cloud removes all associated archived documents from the cloud object storage. |
    */

    'state'?: string;

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
            "type": "string",
            "format": ""
        },
        {
            "name": "criteria",
            "baseName": "criteria",
            "type": "Criteria",
            "format": ""
        },
        {
            "name": "dataExpirationRule",
            "baseName": "dataExpirationRule",
            "type": "DataExpirationRule",
            "format": ""
        },
        {
            "name": "dataProcessRegion",
            "baseName": "dataProcessRegion",
            "type": "DataProcessRegion",
            "format": ""
        },
        {
            "name": "dataSetName",
            "baseName": "dataSetName",
            "type": "string",
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
            "type": "Array<PartitionField>",
            "format": ""
        },
        {
            "name": "paused",
            "baseName": "paused",
            "type": "boolean",
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
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BackupOnlineArchiveCreate.attributeTypeMap;
    }

    public constructor() {
    }
}
