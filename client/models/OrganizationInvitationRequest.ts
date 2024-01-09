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

import { OrganizationInvitationGroupRoleAssignmentsRequest } from '../models/OrganizationInvitationGroupRoleAssignmentsRequest';
import { HttpFile } from '../http/http';

export class OrganizationInvitationRequest {

    'groupRoleAssignments'?: Array<OrganizationInvitationGroupRoleAssignmentsRequest>;
    /**
    * One or more organization level roles to assign to the MongoDB Cloud user.
    */

    'roles'?: Set<string>;
    /**
    * List of teams to which you want to invite the desired MongoDB Cloud user.
    */

    'teamIds'?: Set<string>;
    /**
    * Email address that belongs to the desired MongoDB Cloud user.
    */

    'username'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "groupRoleAssignments",
            "baseName": "groupRoleAssignments",
            "type": "Array<OrganizationInvitationGroupRoleAssignmentsRequest>",
            "format": ""
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Set<string>",
            "format": ""
        },
        {
            "name": "teamIds",
            "baseName": "teamIds",
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
        return OrganizationInvitationRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

