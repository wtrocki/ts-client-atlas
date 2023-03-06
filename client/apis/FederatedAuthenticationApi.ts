// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiError } from '../models/ApiError';
import { ConnectedOrgConfigView } from '../models/ConnectedOrgConfigView';
import { IdentityProviderUpdate } from '../models/IdentityProviderUpdate';
import { IdentityProviderView } from '../models/IdentityProviderView';
import { OrgFederationSettingsView } from '../models/OrgFederationSettingsView';
import { RoleMappingView } from '../models/RoleMappingView';

/**
 * no description
 */
export class FederatedAuthenticationApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Adds one role mapping to the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Add One Role Mapping to One Organization
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param roleMappingView The role mapping that you want to create.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public async createRoleMapping(federationSettingsId: string, orgId: string, roleMappingView: RoleMappingView, envelope?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'federationSettingsId' is not null or undefined
        if (federationSettingsId === null || federationSettingsId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "createRoleMapping", "federationSettingsId");
        }


        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "createRoleMapping", "orgId");
        }


        // verify required parameter 'roleMappingView' is not null or undefined
        if (roleMappingView === null || roleMappingView === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "createRoleMapping", "roleMappingView");
        }



        // Path Params
        const localVarPath = '/api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings'
            .replace('{' + 'federationSettingsId' + '}', encodeURIComponent(String(federationSettingsId)))
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/vnd.atlas.2023-01-01+json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(roleMappingView, "RoleMappingView", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Deletes the federation settings instance and all associated data, including identity providers and domains. To use this resource, the requesting API Key must have the Organization Owner role in the last remaining connected organization. This resource doesn't require the API Key to have an Access List. **Note**: requests to this resource will fail if there is more than one connected organization in the federation.
     * Delete the federation settings instance.
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     */
    public async deleteFederationApp(federationSettingsId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'federationSettingsId' is not null or undefined
        if (federationSettingsId === null || federationSettingsId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "deleteFederationApp", "federationSettingsId");
        }


        // Path Params
        const localVarPath = '/api/atlas/v2/federationSettings/{federationSettingsId}'
            .replace('{' + 'federationSettingsId' + '}', encodeURIComponent(String(federationSettingsId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Removes one role mapping in the specified organization from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Remove One Role Mapping from One Organization
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param id Unique 24-hexadecimal digit string that identifies the role mapping that you want to remove.
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public async deleteRoleMapping(federationSettingsId: string, id: string, orgId: string, envelope?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'federationSettingsId' is not null or undefined
        if (federationSettingsId === null || federationSettingsId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "deleteRoleMapping", "federationSettingsId");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "deleteRoleMapping", "id");
        }


        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "deleteRoleMapping", "orgId");
        }



        // Path Params
        const localVarPath = '/api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings/{id}'
            .replace('{' + 'federationSettingsId' + '}', encodeURIComponent(String(federationSettingsId)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the specified connected org config from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in the connected org. This resource doesn't require the API Key to have an Access List.
     * Return One Org Config Connected to One Federation
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param orgId Unique 24-hexadecimal digit string that identifies the connected organization configuration to return.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public async getConnectedOrgConfig(federationSettingsId: string, orgId: string, envelope?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'federationSettingsId' is not null or undefined
        if (federationSettingsId === null || federationSettingsId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "getConnectedOrgConfig", "federationSettingsId");
        }


        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "getConnectedOrgConfig", "orgId");
        }



        // Path Params
        const localVarPath = '/api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}'
            .replace('{' + 'federationSettingsId' + '}', encodeURIComponent(String(federationSettingsId)))
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns information about the federation settings for the specified organization. To use this resource, the requesting API Key must have the Organization Owner role in the connected org. This resource doesn't require the API Key to have an Access List.
     * Return Federation Settings for One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public async getFederationSettings(orgId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "getFederationSettings", "orgId");
        }




        // Path Params
        const localVarPath = '/api/atlas/v2/orgs/{orgId}/federationSettings'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns one identity provider from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations. This resource doesn't require the API Key to have an Access List.
     * Return one identity provider from the specified federation.
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param identityProviderId Unique 20-hexadecimal digit string that identifies the identity provider.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public async getIdentityProvider(federationSettingsId: string, identityProviderId: string, envelope?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'federationSettingsId' is not null or undefined
        if (federationSettingsId === null || federationSettingsId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "getIdentityProvider", "federationSettingsId");
        }


        // verify required parameter 'identityProviderId' is not null or undefined
        if (identityProviderId === null || identityProviderId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "getIdentityProvider", "identityProviderId");
        }



        // Path Params
        const localVarPath = '/api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders/{identityProviderId}'
            .replace('{' + 'federationSettingsId' + '}', encodeURIComponent(String(federationSettingsId)))
            .replace('{' + 'identityProviderId' + '}', encodeURIComponent(String(identityProviderId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the metadata of one identity provider in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations. This resource doesn't require the API Key to have an Access List.
     * Return the metadata of one identity provider in the specified federation.
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param identityProviderId Unique 20-hexadecimal digit string that identifies the identity provider.
     */
    public async getIdentityProviderMetadata(federationSettingsId: string, identityProviderId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'federationSettingsId' is not null or undefined
        if (federationSettingsId === null || federationSettingsId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "getIdentityProviderMetadata", "federationSettingsId");
        }


        // verify required parameter 'identityProviderId' is not null or undefined
        if (identityProviderId === null || identityProviderId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "getIdentityProviderMetadata", "identityProviderId");
        }


        // Path Params
        const localVarPath = '/api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders/{identityProviderId}/metadata.xml'
            .replace('{' + 'federationSettingsId' + '}', encodeURIComponent(String(federationSettingsId)))
            .replace('{' + 'identityProviderId' + '}', encodeURIComponent(String(identityProviderId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns one role mapping from the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Return One Role Mapping from One Organization
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param id Unique 24-hexadecimal digit string that identifies the role mapping that you want to return.
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public async getRoleMapping(federationSettingsId: string, id: string, orgId: string, envelope?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'federationSettingsId' is not null or undefined
        if (federationSettingsId === null || federationSettingsId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "getRoleMapping", "federationSettingsId");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "getRoleMapping", "id");
        }


        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "getRoleMapping", "orgId");
        }



        // Path Params
        const localVarPath = '/api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings/{id}'
            .replace('{' + 'federationSettingsId' + '}', encodeURIComponent(String(federationSettingsId)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns all connected org configs in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected orgs. This resource doesn't require the API Key to have an Access List.
     * Return All Connected Org Configs from the Federation
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public async listConnectedOrgConfigs(federationSettingsId: string, envelope?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'federationSettingsId' is not null or undefined
        if (federationSettingsId === null || federationSettingsId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "listConnectedOrgConfigs", "federationSettingsId");
        }



        // Path Params
        const localVarPath = '/api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs'
            .replace('{' + 'federationSettingsId' + '}', encodeURIComponent(String(federationSettingsId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns all identity providers in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations. This resource doesn't require the API Key to have an Access List.
     * Return all identity providers from the specified federation.
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public async listIdentityProviders(federationSettingsId: string, envelope?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'federationSettingsId' is not null or undefined
        if (federationSettingsId === null || federationSettingsId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "listIdentityProviders", "federationSettingsId");
        }



        // Path Params
        const localVarPath = '/api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders'
            .replace('{' + 'federationSettingsId' + '}', encodeURIComponent(String(federationSettingsId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns all role mappings from the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Return All Role Mappings from One Organization
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public async listRoleMappings(federationSettingsId: string, orgId: string, envelope?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'federationSettingsId' is not null or undefined
        if (federationSettingsId === null || federationSettingsId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "listRoleMappings", "federationSettingsId");
        }


        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "listRoleMappings", "orgId");
        }



        // Path Params
        const localVarPath = '/api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings'
            .replace('{' + 'federationSettingsId' + '}', encodeURIComponent(String(federationSettingsId)))
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Removes one connected organization configuration from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List. Note: This request fails if only one connected organization exists in the federation.
     * Remove One Org Config Connected to One Federation
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param orgId Unique 24-hexadecimal digit string that identifies the connected organization configuration to remove.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public async removeConnectedOrgConfig(federationSettingsId: string, orgId: string, envelope?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'federationSettingsId' is not null or undefined
        if (federationSettingsId === null || federationSettingsId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "removeConnectedOrgConfig", "federationSettingsId");
        }


        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "removeConnectedOrgConfig", "orgId");
        }



        // Path Params
        const localVarPath = '/api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}'
            .replace('{' + 'federationSettingsId' + '}', encodeURIComponent(String(federationSettingsId)))
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates one connected organization configuration from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.   **Note** If the organization configuration has no associated identity provider, you can't use this resource to update role mappings or post authorization role grants.    **Note**: The domainRestrictionEnabled field defaults to false if not provided in the request.   **Note**: If the identityProviderId field is not provided, you will disconnect the organization and the identity provider.
     * Update One Org Config Connected to One Federation
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param orgId Unique 24-hexadecimal digit string that identifies the connected organization configuration to update.
     * @param connectedOrgConfigView The connected organization configuration that you want to update.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public async updateConnectedOrgConfig(federationSettingsId: string, orgId: string, connectedOrgConfigView: ConnectedOrgConfigView, envelope?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'federationSettingsId' is not null or undefined
        if (federationSettingsId === null || federationSettingsId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "updateConnectedOrgConfig", "federationSettingsId");
        }


        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "updateConnectedOrgConfig", "orgId");
        }


        // verify required parameter 'connectedOrgConfigView' is not null or undefined
        if (connectedOrgConfigView === null || connectedOrgConfigView === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "updateConnectedOrgConfig", "connectedOrgConfigView");
        }



        // Path Params
        const localVarPath = '/api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}'
            .replace('{' + 'federationSettingsId' + '}', encodeURIComponent(String(federationSettingsId)))
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/vnd.atlas.2023-01-01+json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(connectedOrgConfigView, "ConnectedOrgConfigView", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates one identity provider in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations. This resource doesn't require the API Key to have an Access List.
     * Update the identity provider.
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param identityProviderId Unique 20-hexadecimal digit string that identifies the identity provider.
     * @param identityProviderUpdate The identity provider that you want to update.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public async updateIdentityProvider(federationSettingsId: string, identityProviderId: string, identityProviderUpdate: IdentityProviderUpdate, envelope?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'federationSettingsId' is not null or undefined
        if (federationSettingsId === null || federationSettingsId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "updateIdentityProvider", "federationSettingsId");
        }


        // verify required parameter 'identityProviderId' is not null or undefined
        if (identityProviderId === null || identityProviderId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "updateIdentityProvider", "identityProviderId");
        }


        // verify required parameter 'identityProviderUpdate' is not null or undefined
        if (identityProviderUpdate === null || identityProviderUpdate === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "updateIdentityProvider", "identityProviderUpdate");
        }



        // Path Params
        const localVarPath = '/api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders/{identityProviderId}'
            .replace('{' + 'federationSettingsId' + '}', encodeURIComponent(String(federationSettingsId)))
            .replace('{' + 'identityProviderId' + '}', encodeURIComponent(String(identityProviderId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/vnd.atlas.2023-01-01+json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(identityProviderUpdate, "IdentityProviderUpdate", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates one role mapping in the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Update One Role Mapping in One Organization
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param id Unique 24-hexadecimal digit string that identifies the role mapping that you want to update.
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param roleMappingView The role mapping that you want to update.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public async updateRoleMapping(federationSettingsId: string, id: string, orgId: string, roleMappingView: RoleMappingView, envelope?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'federationSettingsId' is not null or undefined
        if (federationSettingsId === null || federationSettingsId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "updateRoleMapping", "federationSettingsId");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "updateRoleMapping", "id");
        }


        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "updateRoleMapping", "orgId");
        }


        // verify required parameter 'roleMappingView' is not null or undefined
        if (roleMappingView === null || roleMappingView === undefined) {
            throw new RequiredError("FederatedAuthenticationApi", "updateRoleMapping", "roleMappingView");
        }



        // Path Params
        const localVarPath = '/api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings/{id}'
            .replace('{' + 'federationSettingsId' + '}', encodeURIComponent(String(federationSettingsId)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/vnd.atlas.2023-01-01+json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(roleMappingView, "RoleMappingView", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class FederatedAuthenticationApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRoleMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createRoleMapping(response: ResponseContext): Promise<RoleMappingView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RoleMappingView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoleMappingView", ""
            ) as RoleMappingView;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RoleMappingView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoleMappingView", ""
            ) as RoleMappingView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteFederationApp
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteFederationApp(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRoleMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteRoleMapping(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getConnectedOrgConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getConnectedOrgConfig(response: ResponseContext): Promise<ConnectedOrgConfigView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConnectedOrgConfigView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConnectedOrgConfigView", ""
            ) as ConnectedOrgConfigView;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConnectedOrgConfigView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConnectedOrgConfigView", ""
            ) as ConnectedOrgConfigView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFederationSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFederationSettings(response: ResponseContext): Promise<OrgFederationSettingsView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrgFederationSettingsView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrgFederationSettingsView", ""
            ) as OrgFederationSettingsView;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OrgFederationSettingsView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrgFederationSettingsView", ""
            ) as OrgFederationSettingsView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getIdentityProvider(response: ResponseContext): Promise<IdentityProviderView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IdentityProviderView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IdentityProviderView", ""
            ) as IdentityProviderView;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: IdentityProviderView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IdentityProviderView", ""
            ) as IdentityProviderView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIdentityProviderMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getIdentityProviderMetadata(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRoleMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRoleMapping(response: ResponseContext): Promise<RoleMappingView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RoleMappingView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoleMappingView", ""
            ) as RoleMappingView;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RoleMappingView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoleMappingView", ""
            ) as RoleMappingView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listConnectedOrgConfigs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listConnectedOrgConfigs(response: ResponseContext): Promise<Array<ConnectedOrgConfigView> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ConnectedOrgConfigView> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ConnectedOrgConfigView>", ""
            ) as Array<ConnectedOrgConfigView>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ConnectedOrgConfigView> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ConnectedOrgConfigView>", ""
            ) as Array<ConnectedOrgConfigView>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIdentityProviders
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listIdentityProviders(response: ResponseContext): Promise<Array<IdentityProviderView> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<IdentityProviderView> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<IdentityProviderView>", ""
            ) as Array<IdentityProviderView>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<IdentityProviderView> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<IdentityProviderView>", ""
            ) as Array<IdentityProviderView>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRoleMappings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listRoleMappings(response: ResponseContext): Promise<Array<RoleMappingView> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<RoleMappingView> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RoleMappingView>", ""
            ) as Array<RoleMappingView>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<RoleMappingView> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RoleMappingView>", ""
            ) as Array<RoleMappingView>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeConnectedOrgConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeConnectedOrgConfig(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateConnectedOrgConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateConnectedOrgConfig(response: ResponseContext): Promise<ConnectedOrgConfigView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConnectedOrgConfigView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConnectedOrgConfigView", ""
            ) as ConnectedOrgConfigView;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConnectedOrgConfigView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConnectedOrgConfigView", ""
            ) as ConnectedOrgConfigView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateIdentityProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateIdentityProvider(response: ResponseContext): Promise<IdentityProviderView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IdentityProviderView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IdentityProviderView", ""
            ) as IdentityProviderView;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: IdentityProviderView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IdentityProviderView", ""
            ) as IdentityProviderView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateRoleMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateRoleMapping(response: ResponseContext): Promise<RoleMappingView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RoleMappingView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoleMappingView", ""
            ) as RoleMappingView;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RoleMappingView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoleMappingView", ""
            ) as RoleMappingView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
