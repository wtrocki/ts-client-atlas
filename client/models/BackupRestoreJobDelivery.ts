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
* Method and details that indicate how to deliver the restored snapshot data.
*/
export class BackupRestoreJobDelivery {
    /**
    * Header name to use when downloading the restore, used with `\"delivery.methodName\" : \"HTTP\"`.
    */

    'authHeader'?: string;
    /**
    * Header value to use when downloading the restore, used with `\"delivery.methodName\" : \"HTTP\"`.
    */

    'authValue'?: string;
    /**
    * Number of hours after the restore job completes that indicates when the Uniform Resource Locator (URL) for the snapshot download file expires. The resource returns this parameter when `\"delivery.methodName\" : \"HTTP\"`.
    */

    'expirationHours'?: number;
    /**
    * Date and time when the Uniform Resource Locator (URL) for the snapshot download file expires. This parameter expresses its value in the ISO 8601 timestamp format in UTC. The resource returns this parameter when `\"delivery.methodName\" : \"HTTP\"`.
    */

    'expires'?: Date;
    /**
    * Positive integer that indicates how many times you can use the Uniform Resource Locator (URL) for the snapshot download file. The resource returns this parameter when `\"delivery.methodName\" : \"HTTP\"`.
    */

    'maxDownloads'?: number;
    /**
    * Human-readable label that identifies the means for delivering the data. If you set `\"delivery.methodName\" : \"AUTOMATED_RESTORE\"`, you must also set: **delivery.targetGroupId** and **delivery.targetClusterName** or **delivery.targetClusterId**. The response returns `\"delivery.methodName\" : \"HTTP\"` as an automated restore uses HyperText Transport Protocol (HTTP) to deliver the restore job to the target host.
    */

    'methodName': string;
    /**
    * State of the downloadable snapshot file when MongoDB Cloud received this request.
    */

    'statusName'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the target cluster. Use the **clusterId** returned in the response body of the **Get All Snapshots** and **Get a Snapshot** endpoints. This parameter applies when `\"delivery.methodName\" : \"AUTOMATED_RESTORE\"`.   If the target cluster doesn't have backup enabled, two resources return parameters with empty values:  - **Get All Snapshots** endpoint returns an empty results array without **clusterId** elements - **Get a Snapshot** endpoint doesn't return a **clusterId** parameter.  To return a response with the **clusterId** parameter, either use the **delivery.targetClusterName** parameter or enable backup on the target cluster.
    */

    'targetClusterId'?: string;
    /**
    * Human-readable label that identifies the target cluster. Use the **clusterName** returned in the response body of the **Get All Snapshots** and **Get a Snapshot** endpoints.  This parameter applies when `\"delivery.methodName\" : \"AUTOMATED_RESTORE\"`.  If the target cluster doesn't have backup enabled, two resources return parameters with empty values:  - **Get All Snapshots** endpoint returns an empty results array without **clusterId** elements - **Get a Snapshot** endpoint doesn't return a **clusterId** parameter.  To return a response with the **clusterId** parameter, either use the **delivery.targetClusterName** parameter or enable backup on the target cluster.
    */

    'targetClusterName'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the project that contains the destination cluster for the restore job. The resource returns this parameter when `\"delivery.methodName\" : \"AUTOMATED_RESTORE\"`.
    */

    'targetGroupId'?: string;
    /**
    * Uniform Resource Locator (URL) from which you can download the restored snapshot data. Url includes the verification key. The resource returns this parameter when `\"delivery.methodName\" : \"HTTP\"`.
    */

    'url'?: string;
    /**
    * Uniform Resource Locator (URL) from which you can download the restored snapshot data. This should be preferred over **url**. The verification key must be sent as an HTTP header. The resource returns this parameter when `\"delivery.methodName\" : \"HTTP\"`.
    */

    'urlV2'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "authHeader",
            "baseName": "authHeader",
            "type": "string",
            "format": ""
        },
        {
            "name": "authValue",
            "baseName": "authValue",
            "type": "string",
            "format": ""
        },
        {
            "name": "expirationHours",
            "baseName": "expirationHours",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "expires",
            "baseName": "expires",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "maxDownloads",
            "baseName": "maxDownloads",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "methodName",
            "baseName": "methodName",
            "type": "string",
            "format": ""
        },
        {
            "name": "statusName",
            "baseName": "statusName",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetClusterId",
            "baseName": "targetClusterId",
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
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "urlV2",
            "baseName": "urlV2",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BackupRestoreJobDelivery.attributeTypeMap;
    }

    public constructor() {
    }
}
