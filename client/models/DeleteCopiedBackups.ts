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
* Deleted copy setting whose backup copies need to also be deleted.
*/
export class DeleteCopiedBackups {
    /**
    * Human-readable label that identifies the cloud provider for the deleted copy setting whose backup copies you want to delete.
    */

    'cloudProvider'?: string;
    /**
    * Target region for the deleted copy setting whose backup copies you want to delete. Please supply the 'Atlas Region' which can be found under [Cloud Providers](https://www.mongodb.com/docs/atlas/reference/cloud-providers/) 'regions' link.
    */

    'regionName'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the replication object for a zone in a cluster. For global clusters, there can be multiple zones to choose from. For sharded clusters and replica setclusters, there is only one zone in the cluster. To find the Replication Spec Id, do a GET request to Return One Cluster in One Project and consult the replicationSpecs array [Return One Cluster in One Project](#operation/getLegacyCluster).
    */

    'replicationSpecId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cloudProvider",
            "baseName": "cloudProvider",
            "type": "string",
            "format": ""
        },
        {
            "name": "regionName",
            "baseName": "regionName",
            "type": "string",
            "format": ""
        },
        {
            "name": "replicationSpecId",
            "baseName": "replicationSpecId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DeleteCopiedBackups.attributeTypeMap;
    }

    public constructor() {
    }
}

