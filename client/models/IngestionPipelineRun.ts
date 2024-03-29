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

import { DatasetRetentionPolicy } from '../models/DatasetRetentionPolicy';
import { PipelineRunStats } from '../models/PipelineRunStats';
import { HttpFile } from '../http/http';

/**
* Run details of a Data Lake Pipeline.
*/
export class IngestionPipelineRun {
    /**
    * Unique 24-hexadecimal character string that identifies a Data Lake Pipeline run.
    */

    'id'?: string;
    /**
    * Backup schedule interval of the Data Lake Pipeline.
    */

    'backupFrequencyType'?: string;
    /**
    * Timestamp that indicates when the pipeline run was created.
    */

    'createdDate'?: Date;
    /**
    * Human-readable label that identifies the dataset that Atlas generates during this pipeline run. You can use this dataset as a `dataSource` in a Federated Database collection.
    */

    'datasetName'?: string;

    'datasetRetentionPolicy'?: DatasetRetentionPolicy;
    /**
    * Unique 24-hexadecimal character string that identifies the project.
    */

    'groupId'?: string;
    /**
    * Timestamp that indicates the last time that the pipeline run was updated.
    */

    'lastUpdatedDate'?: Date;
    /**
    * Processing phase of the Data Lake Pipeline.
    */

    'phase'?: string;
    /**
    * Unique 24-hexadecimal character string that identifies a Data Lake Pipeline.
    */

    'pipelineId'?: string;
    /**
    * Timestamp that indicates when the pipeline run will expire and its dataset will be deleted.
    */

    'scheduledDeletionDate'?: Date;
    /**
    * Unique 24-hexadecimal character string that identifies the snapshot of a cluster.
    */

    'snapshotId'?: string;
    /**
    * State of the pipeline run.
    */

    'state'?: string;

    'stats'?: PipelineRunStats;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "backupFrequencyType",
            "baseName": "backupFrequencyType",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "datasetName",
            "baseName": "datasetName",
            "type": "string",
            "format": ""
        },
        {
            "name": "datasetRetentionPolicy",
            "baseName": "datasetRetentionPolicy",
            "type": "DatasetRetentionPolicy",
            "format": ""
        },
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastUpdatedDate",
            "baseName": "lastUpdatedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "phase",
            "baseName": "phase",
            "type": "string",
            "format": ""
        },
        {
            "name": "pipelineId",
            "baseName": "pipelineId",
            "type": "string",
            "format": ""
        },
        {
            "name": "scheduledDeletionDate",
            "baseName": "scheduledDeletionDate",
            "type": "Date",
            "format": "date-time"
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
        },
        {
            "name": "stats",
            "baseName": "stats",
            "type": "PipelineRunStats",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IngestionPipelineRun.attributeTypeMap;
    }

    public constructor() {
    }
}

