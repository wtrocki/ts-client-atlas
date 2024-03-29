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
* Details that define the configuration of Encryption at Rest using Google Cloud Key Management Service (KMS).
*/
export class GoogleCloudKMS {
    /**
    * Flag that indicates whether someone enabled encryption at rest for the specified  project. To disable encryption at rest using customer key management and remove the configuration details, pass only this parameter with a value of `false`.
    */

    'enabled'?: boolean;
    /**
    * Resource path that displays the key version resource ID for your Google Cloud KMS.
    */

    'keyVersionResourceID'?: string;
    /**
    * JavaScript Object Notation (JSON) object that contains the Google Cloud Key Management Service (KMS). Format the JSON as a string and not as an object.
    */

    'serviceAccountKey'?: string;
    /**
    * Flag that indicates whether the Google Cloud Key Management Service (KMS) encryption key can encrypt and decrypt data.
    */

    'valid'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "keyVersionResourceID",
            "baseName": "keyVersionResourceID",
            "type": "string",
            "format": ""
        },
        {
            "name": "serviceAccountKey",
            "baseName": "serviceAccountKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "valid",
            "baseName": "valid",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GoogleCloudKMS.attributeTypeMap;
    }

    public constructor() {
    }
}

