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

import { ConnectedOrgConfig } from '../models/ConnectedOrgConfig';
import { PemFileInfo } from '../models/PemFileInfo';
import { HttpFile } from '../http/http';

export class FederationIdentityProvider {
    /**
    * List that contains the domains associated with the identity provider.
    */

    'associatedDomains'?: Set<string>;
    /**
    * List that contains the connected organization configurations associated with the identity provider.
    */

    'associatedOrgs'?: Set<ConnectedOrgConfig>;
    /**
    * The description of the identity provider.
    */

    'description'?: string;
    /**
    * Human-readable label that identifies the identity provider.
    */

    'displayName'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the identity provider.
    */

    'id': string;
    /**
    * Unique string that identifies the issuer of the SAML Assertion.
    */

    'issuerUri'?: string;
    /**
    * Unique 20-hexadecimal digit string that identifies the identity provider.
    */

    'oktaIdpId': string;
    /**
    * The protocol of the identity provider.
    */

    'protocol'?: string;
    /**
    * URL that points to where to send the SAML response.
    */

    'acsUrl'?: string;
    /**
    * Unique string that identifies the intended audience of the SAML assertion.
    */

    'audienceUri'?: string;

    'pemFileInfo'?: PemFileInfo;
    /**
    * SAML Authentication Request Protocol HTTP method binding (POST or REDIRECT) that Federated Authentication uses to send the authentication request.
    */

    'requestBinding'?: string;
    /**
    * Signature algorithm that Federated Authentication uses to encrypt the identity provider signature.
    */

    'responseSignatureAlgorithm'?: string;
    /**
    * Flag that indicates whether the identity provider has SSO debug enabled.
    */

    'ssoDebugEnabled'?: boolean;
    /**
    * URL that points to the receiver of the SAML authentication request.
    */

    'ssoUrl'?: string;
    /**
    * String enum that indicates whether the identity provider is active.
    */

    'status'?: string;
    /**
    * Identifier of the intended recipient of the token.
    */

    'audienceClaim'?: Array<string>;
    /**
    * Client identifier that is assigned to an application by the Identity Provider.
    */

    'clientId'?: string;
    /**
    * Identifier of the claim which contains IdP Group IDs in the token.
    */

    'groupsClaim'?: string;
    /**
    * The description of an IdP, configured by customers.
    */

    'requestedScopes'?: Array<string>;
    /**
    * Identifier of the claim which contains the user ID in the token.
    */

    'userClaim'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "associatedDomains",
            "baseName": "associatedDomains",
            "type": "Set<string>",
            "format": ""
        },
        {
            "name": "associatedOrgs",
            "baseName": "associatedOrgs",
            "type": "Set<ConnectedOrgConfig>",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayName",
            "baseName": "displayName",
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
            "name": "issuerUri",
            "baseName": "issuerUri",
            "type": "string",
            "format": ""
        },
        {
            "name": "oktaIdpId",
            "baseName": "oktaIdpId",
            "type": "string",
            "format": ""
        },
        {
            "name": "protocol",
            "baseName": "protocol",
            "type": "string",
            "format": ""
        },
        {
            "name": "acsUrl",
            "baseName": "acsUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "audienceUri",
            "baseName": "audienceUri",
            "type": "string",
            "format": ""
        },
        {
            "name": "pemFileInfo",
            "baseName": "pemFileInfo",
            "type": "PemFileInfo",
            "format": ""
        },
        {
            "name": "requestBinding",
            "baseName": "requestBinding",
            "type": "string",
            "format": ""
        },
        {
            "name": "responseSignatureAlgorithm",
            "baseName": "responseSignatureAlgorithm",
            "type": "string",
            "format": ""
        },
        {
            "name": "ssoDebugEnabled",
            "baseName": "ssoDebugEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "ssoUrl",
            "baseName": "ssoUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "audienceClaim",
            "baseName": "audienceClaim",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "clientId",
            "baseName": "clientId",
            "type": "string",
            "format": ""
        },
        {
            "name": "groupsClaim",
            "baseName": "groupsClaim",
            "type": "string",
            "format": ""
        },
        {
            "name": "requestedScopes",
            "baseName": "requestedScopes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "userClaim",
            "baseName": "userClaim",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FederationIdentityProvider.attributeTypeMap;
    }

    public constructor() {
    }
}

