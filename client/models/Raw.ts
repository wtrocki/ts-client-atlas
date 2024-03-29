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
* Additional meta information captured about this event. The response returns this parameter as a JSON object when the query parameter `includeRaw=true`. The list of fields in the raw document may change. Don't rely on raw values for formal monitoring.
*/
export class Raw {
    /**
    * Unique identifier of event type.
    */

    't'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the alert configuration related to the event.
    */

    'alertConfigId'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the project in which the event occurred.
    */

    'cid'?: string;
    /**
    * Date and time when this event occurred. This parameter expresses its value in the <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener noreferrer\">ISO 8601</a> timestamp format in UTC.
    */

    'cre'?: Date;
    /**
    * Description of the event.
    */

    'description'?: string;
    /**
    * Human-readable label that identifies the project.
    */

    'gn'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the event.
    */

    'id'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the organization to which these events apply.
    */

    'orgId'?: string;
    /**
    * Human-readable label that identifies the organization that contains the project.
    */

    'orgName'?: string;

    'severity'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "t",
            "baseName": "_t",
            "type": "string",
            "format": ""
        },
        {
            "name": "alertConfigId",
            "baseName": "alertConfigId",
            "type": "string",
            "format": ""
        },
        {
            "name": "cid",
            "baseName": "cid",
            "type": "string",
            "format": ""
        },
        {
            "name": "cre",
            "baseName": "cre",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "gn",
            "baseName": "gn",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "orgId",
            "baseName": "orgId",
            "type": "string",
            "format": ""
        },
        {
            "name": "orgName",
            "baseName": "orgName",
            "type": "string",
            "format": ""
        },
        {
            "name": "severity",
            "baseName": "severity",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Raw.attributeTypeMap;
    }

    public constructor() {
    }
}

