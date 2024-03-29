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
* User-to-Distinguished Name (DN) map that MongoDB Cloud uses to transform a Lightweight Directory Access Protocol (LDAP) username into an LDAP DN.
*/
export class UserToDNMapping {
    /**
    * Lightweight Directory Access Protocol (LDAP) query template that inserts the LDAP name that the regular expression matches into an LDAP query Uniform Resource Identifier (URI). The formatting for the query must conform to [RFC 4515](https://datatracker.ietf.org/doc/html/rfc4515) and [RFC 4516](https://datatracker.ietf.org/doc/html/rfc4516).
    */

    'ldapQuery'?: string;
    /**
    * Regular expression that MongoDB Cloud uses to match against the provided Lightweight Directory Access Protocol (LDAP) username. Each parenthesis-enclosed section represents a regular expression capture group that the substitution or `ldapQuery` template uses.
    */

    'match': string;
    /**
    * Lightweight Directory Access Protocol (LDAP) Distinguished Name (DN) template that converts the LDAP username that matches regular expression in the *match* parameter into an LDAP Distinguished Name (DN).
    */

    'substitution'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ldapQuery",
            "baseName": "ldapQuery",
            "type": "string",
            "format": ""
        },
        {
            "name": "match",
            "baseName": "match",
            "type": "string",
            "format": ""
        },
        {
            "name": "substitution",
            "baseName": "substitution",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserToDNMapping.attributeTypeMap;
    }

    public constructor() {
    }
}

