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
* Options that determine how this cluster handles CPU scaling.
*/
export class AdvancedComputeAutoScaling {
    /**
    * Flag that indicates whether someone enabled instance size auto-scaling.  - Set to `true` to enable instance size auto-scaling. If enabled, you must specify a value for **replicationSpecs[n].regionConfigs[m].autoScaling.compute.maxInstanceSize**. - Set to `false` to disable instance size automatic scaling.
    */

    'enabled'?: boolean;
    /**
    * Minimum instance size to which your cluster can automatically scale. MongoDB Cloud requires this parameter if `\"replicationSpecs[n].regionConfigs[m].autoScaling.compute.scaleDownEnabled\" : true`.
    */

    'maxInstanceSize'?: string;
    /**
    * Minimum instance size to which your cluster can automatically scale. MongoDB Cloud requires this parameter if `\"replicationSpecs[n].regionConfigs[m].autoScaling.compute.scaleDownEnabled\" : true`.
    */

    'minInstanceSize'?: string;
    /**
    * Flag that indicates whether the instance size may scale down. MongoDB Cloud requires this parameter if `\"replicationSpecs[n].regionConfigs[m].autoScaling.compute.enabled\" : true`. If you enable this option, specify a value for **replicationSpecs[n].regionConfigs[m].autoScaling.compute.minInstanceSize**.
    */

    'scaleDownEnabled'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "maxInstanceSize",
            "baseName": "maxInstanceSize",
            "type": "string",
            "format": ""
        },
        {
            "name": "minInstanceSize",
            "baseName": "minInstanceSize",
            "type": "string",
            "format": ""
        },
        {
            "name": "scaleDownEnabled",
            "baseName": "scaleDownEnabled",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AdvancedComputeAutoScaling.attributeTypeMap;
    }

    public constructor() {
    }
}
