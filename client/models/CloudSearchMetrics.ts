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

import { FTSMetric } from '../models/FTSMetric';
import { Link } from '../models/Link';
import { HttpFile } from '../http/http';

export class CloudSearchMetrics {
    /**
    * Unique 24-hexadecimal digit string that identifies the project.
    */

    'groupId': string;
    /**
    * List that contains all host compute, memory, and storage utilization dedicated to Atlas Search when MongoDB Atlas received this request.
    */

    'hardwareMetrics'?: Array<FTSMetric>;
    /**
    * List that contains all performance and utilization measurements that Atlas Search index performed by the time MongoDB Atlas received this request.
    */

    'indexMetrics'?: Array<FTSMetric>;
    /**
    * List of one or more Uniform Resource Locators (URLs) that point to API sub-resources, related API resources, or both. RFC 5988 outlines these relationships.
    */

    'links'?: Array<Link>;
    /**
    * Hostname and port that identifies the process.
    */

    'processId': string;
    /**
    * List that contains all available Atlas Search status metrics when MongoDB Atlas received this request.
    */

    'statusMetrics'?: Array<FTSMetric>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "string",
            "format": ""
        },
        {
            "name": "hardwareMetrics",
            "baseName": "hardwareMetrics",
            "type": "Array<FTSMetric>",
            "format": ""
        },
        {
            "name": "indexMetrics",
            "baseName": "indexMetrics",
            "type": "Array<FTSMetric>",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>",
            "format": ""
        },
        {
            "name": "processId",
            "baseName": "processId",
            "type": "string",
            "format": ""
        },
        {
            "name": "statusMetrics",
            "baseName": "statusMetrics",
            "type": "Array<FTSMetric>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CloudSearchMetrics.attributeTypeMap;
    }

    public constructor() {
    }
}
