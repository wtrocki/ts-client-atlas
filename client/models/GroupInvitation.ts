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

import { Link } from '../models/Link';
import { HttpFile } from '../http/http';

export class GroupInvitation {
    /**
    * Date and time when MongoDB Cloud sent the invitation. This parameter expresses its value in ISO 8601 format in UTC.
    */

    'createdAt'?: Date;
    /**
    * Date and time when MongoDB Cloud expires the invitation. This parameter expresses its value in ISO 8601 format in UTC.
    */

    'expiresAt'?: Date;
    /**
    * Unique 24-hexadecimal character string that identifies the project.
    */

    'groupId'?: string;
    /**
    * Human-readable label that identifies the project to which you invited the MongoDB Cloud user.
    */

    'groupName'?: string;
    /**
    * Unique 24-hexadecimal character string that identifies the invitation.
    */

    'id'?: string;
    /**
    * Email address of the MongoDB Cloud user who sent the invitation.
    */

    'inviterUsername'?: string;
    /**
    * List of one or more Uniform Resource Locators (URLs) that point to API sub-resources, related API resources, or both. RFC 5988 outlines these relationships.
    */

    'links'?: Array<Link>;
    /**
    * One or more organization or project level roles to assign to the MongoDB Cloud user.
    */

    'roles'?: Set<string>;
    /**
    * Email address of the MongoDB Cloud user invited to join the project.
    */

    'username'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "string",
            "format": ""
        },
        {
            "name": "groupName",
            "baseName": "groupName",
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
            "name": "inviterUsername",
            "baseName": "inviterUsername",
            "type": "string",
            "format": "email"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>",
            "format": ""
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Set<string>",
            "format": ""
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": "email"
        }    ];

    static getAttributeTypeMap() {
        return GroupInvitation.attributeTypeMap;
    }

    public constructor() {
    }
}

