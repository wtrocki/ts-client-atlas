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
* Dataset Retention Policy for a Scheduled Data Lake Pipeline.
*/
export class DatasetRetentionPolicy {
    /**
    * Date when retention policy was last modified.
    */

    'lastModifiedDate'?: Date;
    /**
    * Quantity of time in which the Data Lake Pipeline measures dataset retention.
    */

    'units': string;
    /**
    * Number that indicates the amount of days, weeks, or months that the Data Lake Pipeline will retain datasets.
    */

    'value': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "lastModifiedDate",
            "baseName": "lastModifiedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "units",
            "baseName": "units",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return DatasetRetentionPolicy.attributeTypeMap;
    }

    public constructor() {
    }
}

