/**
 * MongoDB Atlas Administration API
 * The MongoDB Atlas Administration API allows developers to manage all components in MongoDB Atlas. To learn more, review the [Administration API overview](https://www.mongodb.com/docs/atlas/api/atlas-admin-api/). This OpenAPI specification covers all of the collections with the exception of Alerts, Alert Configurations, and Events. Refer to the [legacy documentation](https://www.mongodb.com/docs/atlas/reference/api-resources/) for the specifications of these resources.
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ConnectedOrgConfigView } from '../models/ConnectedOrgConfigView';
import { PemFileInfoView } from '../models/PemFileInfoView';
import { HttpFile } from '../http/http';

export class IdentityProviderView {
    /**
    * URL that points to where to send the SAML response.
    */
    'acsUrl'?: string;
    /**
    * List that contains the domains associated with the identity provider.
    */
    'associatedDomains'?: Set<string>;
    /**
    * List that contains the connected organization configurations associated with the identity provider.
    */
    'associatedOrgs'?: Set<ConnectedOrgConfigView>;
    /**
    * Unique string that identifies the intended audience of the SAML assertion.
    */
    'audienceUri'?: string;
    /**
    * Human-readable label that identifies the identity provider.
    */
    'displayName'?: string;
    /**
    * Unique string that identifies the issuer of the SAML Assertion.
    */
    'issuerUri'?: string;
    /**
    * Unique 20-hexadecimal digit string that identifies the identity provider.
    */
    'oktaIdpId': string;
    'pemFileInfo'?: PemFileInfoView;
    /**
    * SAML Authentication Request Protocol HTTP method binding (POST or REDIRECT) that Federated Authentication uses to send the authentication request.
    */
    'requestBinding'?: IdentityProviderViewRequestBindingEnum;
    /**
    * Signature algorithm that Federated Authentication uses to encrypt the identity provider signature.
    */
    'responseSignatureAlgorithm'?: IdentityProviderViewResponseSignatureAlgorithmEnum;
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
    'status'?: IdentityProviderViewStatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "acsUrl",
            "baseName": "acsUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "associatedDomains",
            "baseName": "associatedDomains",
            "type": "Set<string>",
            "format": ""
        },
        {
            "name": "associatedOrgs",
            "baseName": "associatedOrgs",
            "type": "Set<ConnectedOrgConfigView>",
            "format": ""
        },
        {
            "name": "audienceUri",
            "baseName": "audienceUri",
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
            "name": "pemFileInfo",
            "baseName": "pemFileInfo",
            "type": "PemFileInfoView",
            "format": ""
        },
        {
            "name": "requestBinding",
            "baseName": "requestBinding",
            "type": "IdentityProviderViewRequestBindingEnum",
            "format": ""
        },
        {
            "name": "responseSignatureAlgorithm",
            "baseName": "responseSignatureAlgorithm",
            "type": "IdentityProviderViewResponseSignatureAlgorithmEnum",
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
            "type": "IdentityProviderViewStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IdentityProviderView.attributeTypeMap;
    }

    public constructor() {
    }
}


export type IdentityProviderViewRequestBindingEnum = "HTTP-POST" | "HTTP-REDIRECT" ;
export type IdentityProviderViewResponseSignatureAlgorithmEnum = "SHA-1" | "SHA-256" ;
export type IdentityProviderViewStatusEnum = "ACTIVE" | "INACTIVE" ;
