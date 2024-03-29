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
* Details that define how to connect one MongoDB Cloud organization to one federated authentication service.
*/
export class OrgFederationSettings {
    /**
    * List of domains associated with the organization's identity provider.
    */

    'federatedDomains'?: Set<string>;
    /**
    * Flag that indicates whether this organization has role mappings configured.
    */

    'hasRoleMappings'?: boolean;
    /**
    * Unique 24-hexadecimal digit string that identifies this federation.
    */

    'id'?: string;
    /**
    * Unique 20-hexadecimal digit string that identifies the identity provider connected to this organization.
    */

    'identityProviderId'?: string;
    /**
    * String enum that indicates whether the identity provider is active.
    */

    'identityProviderStatus'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "federatedDomains",
            "baseName": "federatedDomains",
            "type": "Set<string>",
            "format": ""
        },
        {
            "name": "hasRoleMappings",
            "baseName": "hasRoleMappings",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "identityProviderId",
            "baseName": "identityProviderId",
            "type": "string",
            "format": ""
        },
        {
            "name": "identityProviderStatus",
            "baseName": "identityProviderStatus",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrgFederationSettings.attributeTypeMap;
    }

    public constructor() {
    }
}

