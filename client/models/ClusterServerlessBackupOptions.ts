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

import { HttpFile } from '../http/http';

/**
* Group of settings that configure serverless backup.
*/
export class ClusterServerlessBackupOptions {
    /**
    * Flag that indicates whether the serverless instance uses **Serverless Continuous Backup**.  If this parameter is `false`, the serverless instance uses **Basic Backup**.   | Option | Description |  |---|---|  | Serverless Continuous Backup | Atlas takes incremental [snapshots](https://www.mongodb.com/docs/atlas/backup/cloud-backup/overview/#std-label-serverless-snapshots) of the data in your serverless instance every six hours and lets you restore the data from a selected point in time within the last 72 hours. Atlas also takes daily snapshots and retains these daily snapshots for 35 days. To learn more, see [Serverless Instance Costs](https://www.mongodb.com/docs/atlas/billing/serverless-instance-costs/#std-label-serverless-instance-costs). |  | Basic Backup | Atlas takes incremental [snapshots](https://www.mongodb.com/docs/atlas/backup/cloud-backup/overview/#std-label-serverless-snapshots) of the data in your serverless instance every six hours and retains only the two most recent snapshots. You can use this option for free. |
    */

    'serverlessContinuousBackupEnabled'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "serverlessContinuousBackupEnabled",
            "baseName": "serverlessContinuousBackupEnabled",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ClusterServerlessBackupOptions.attributeTypeMap;
    }

    public constructor() {
    }
}

