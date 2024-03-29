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
import { UserToDNMapping } from '../models/UserToDNMapping';
import { HttpFile } from '../http/http';

/**
* Lightweight Directory Access Protocol (LDAP) over Transport Layer Security (TLS) configuration details that apply to the specified project.
*/
export class LDAPSecuritySettings {
    /**
    * Flag that indicates whether users can authenticate using an Lightweight Directory Access Protocol (LDAP) host.
    */

    'authenticationEnabled'?: boolean;
    /**
    * Flag that indicates whether users can authorize access to MongoDB Cloud resources using an Lightweight Directory Access Protocol (LDAP) host.
    */

    'authorizationEnabled'?: boolean;
    /**
    * Lightweight Directory Access Protocol (LDAP) query template that MongoDB Cloud runs to obtain the LDAP groups associated with the authenticated user. MongoDB Cloud uses this parameter only for user authorization. Use the `{USER}` placeholder in the Uniform Resource Locator (URL) to substitute the authenticated username. The query relates to the host specified with the hostname. Format this query according to [RFC 4515](https://tools.ietf.org/search/rfc4515) and [RFC 4516](https://datatracker.ietf.org/doc/html/rfc4516).
    */

    'authzQueryTemplate'?: string;
    /**
    * Password that MongoDB Cloud uses to authenticate the **bindUsername**.
    */

    'bindPassword'?: string;
    /**
    * Full Distinguished Name (DN) of the Lightweight Directory Access Protocol (LDAP) user that MongoDB Cloud uses to connect to the LDAP host. LDAP distinguished names must be formatted according to RFC 2253.
    */

    'bindUsername'?: string;
    /**
    * Certificate Authority (CA) certificate that MongoDB Cloud uses to verify the identity of the Lightweight Directory Access Protocol (LDAP) host. MongoDB Cloud allows self-signed certificates. To delete an assigned value, pass an empty string: `\"caCertificate\": \"\"`.
    */

    'caCertificate'?: string;
    /**
    * Human-readable label that identifies the hostname or Internet Protocol (IP) address of the Lightweight Directory Access Protocol (LDAP) host. This host must have access to the internet or have a Virtual Private Cloud (VPC) peering connection to your cluster.
    */

    'hostname'?: string;
    /**
    * List of one or more Uniform Resource Locators (URLs) that point to API sub-resources, related API resources, or both. RFC 5988 outlines these relationships.
    */

    'links'?: Array<Link>;
    /**
    * Port to which the Lightweight Directory Access Protocol (LDAP) host listens for client connections.
    */

    'port'?: number;
    /**
    * User-to-Distinguished Name (DN) map that MongoDB Cloud uses to transform a Lightweight Directory Access Protocol (LDAP) username into an LDAP DN.
    */

    'userToDNMapping'?: Array<UserToDNMapping>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "authenticationEnabled",
            "baseName": "authenticationEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "authorizationEnabled",
            "baseName": "authorizationEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "authzQueryTemplate",
            "baseName": "authzQueryTemplate",
            "type": "string",
            "format": ""
        },
        {
            "name": "bindPassword",
            "baseName": "bindPassword",
            "type": "string",
            "format": ""
        },
        {
            "name": "bindUsername",
            "baseName": "bindUsername",
            "type": "string",
            "format": ""
        },
        {
            "name": "caCertificate",
            "baseName": "caCertificate",
            "type": "string",
            "format": ""
        },
        {
            "name": "hostname",
            "baseName": "hostname",
            "type": "string",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>",
            "format": ""
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "userToDNMapping",
            "baseName": "userToDNMapping",
            "type": "Array<UserToDNMapping>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LDAPSecuritySettings.attributeTypeMap;
    }

    public constructor() {
    }
}

