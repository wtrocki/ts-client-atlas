// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiError } from '../models/ApiError';
import { CreateEndpointServiceRequest } from '../models/CreateEndpointServiceRequest';
import { CreatePrivateEndpointRequest } from '../models/CreatePrivateEndpointRequest';
import { Endpoint } from '../models/Endpoint';
import { EndpointService } from '../models/EndpointService';
import { PaginatedPrivateLinkConnectionView } from '../models/PaginatedPrivateLinkConnectionView';
import { ProjectSettingItemView } from '../models/ProjectSettingItemView';

/**
 * no description
 */
export class PrivateEndpointServicesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates one private resource in the specified private resource service hosted from one cloud service provider. This cloud service provider manages the private resource service for the project. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Create One Private Endpoint for One Provider
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudProvider Cloud service provider that manages this private endpoint.
     * @param endpointServiceId Unique 24-hexadecimal digit string that identifies the private endpoint service for which you want to create a private endpoint.
     * @param createPrivateEndpointRequest Creates one private resource endpoint for the specified cloud service provider.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public async createPrivateEndpoint(groupId: string, cloudProvider: 'AWS' | 'AZURE' | 'GCP', endpointServiceId: string, createPrivateEndpointRequest: CreatePrivateEndpointRequest, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("PrivateEndpointServicesApi", "createPrivateEndpoint", "groupId");
        }


        // verify required parameter 'cloudProvider' is not null or undefined
        if (cloudProvider === null || cloudProvider === undefined) {
            throw new RequiredError("PrivateEndpointServicesApi", "createPrivateEndpoint", "cloudProvider");
        }


        // verify required parameter 'endpointServiceId' is not null or undefined
        if (endpointServiceId === null || endpointServiceId === undefined) {
            throw new RequiredError("PrivateEndpointServicesApi", "createPrivateEndpoint", "endpointServiceId");
        }


        // verify required parameter 'createPrivateEndpointRequest' is not null or undefined
        if (createPrivateEndpointRequest === null || createPrivateEndpointRequest === undefined) {
            throw new RequiredError("PrivateEndpointServicesApi", "createPrivateEndpoint", "createPrivateEndpointRequest");
        }




        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/privateEndpoint/{cloudProvider}/endpointService/{endpointServiceId}/endpoint'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'cloudProvider' + '}', encodeURIComponent(String(cloudProvider)))
            .replace('{' + 'endpointServiceId' + '}', encodeURIComponent(String(endpointServiceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/vnd.atlas.2023-01-01+json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createPrivateEndpointRequest, "CreatePrivateEndpointRequest", ""),
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
     * Creates one private resource service for the specified cloud service provider. This cloud service provider manages the private resource service for the project. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Create One Private Endpoint Service for One Provider
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param createEndpointServiceRequest Creates one private resource service for the specified cloud service provider.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public async createPrivateEndpointService(groupId: string, createEndpointServiceRequest: CreateEndpointServiceRequest, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("PrivateEndpointServicesApi", "createPrivateEndpointService", "groupId");
        }


        // verify required parameter 'createEndpointServiceRequest' is not null or undefined
        if (createEndpointServiceRequest === null || createEndpointServiceRequest === undefined) {
            throw new RequiredError("PrivateEndpointServicesApi", "createPrivateEndpointService", "createEndpointServiceRequest");
        }




        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/privateEndpoint/endpointService'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/vnd.atlas.2023-01-01+json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createEndpointServiceRequest, "CreateEndpointServiceRequest", ""),
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
     * Removes one private resource from the specified project. This cloud service provider manages the private resource service that manages the private resource that belongs to the project. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Remove One Private Endpoint for One Provider
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudProvider Cloud service provider that manages this private endpoint.
     * @param endpointId Unique string that identifies the private endpoint you want to delete. The format of the **endpointId** parameter differs for AWS and Azure. You must URL encode the **endpointId** for Azure private endpoints.
     * @param endpointServiceId Unique 24-hexadecimal digit string that identifies the private endpoint service from which you want to delete a private endpoint.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public async deletePrivateEndpoint(groupId: string, cloudProvider: 'AWS' | 'AZURE' | 'GCP', endpointId: string, endpointServiceId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("PrivateEndpointServicesApi", "deletePrivateEndpoint", "groupId");
        }


        // verify required parameter 'cloudProvider' is not null or undefined
        if (cloudProvider === null || cloudProvider === undefined) {
            throw new RequiredError("PrivateEndpointServicesApi", "deletePrivateEndpoint", "cloudProvider");
        }


        // verify required parameter 'endpointId' is not null or undefined
        if (endpointId === null || endpointId === undefined) {
            throw new RequiredError("PrivateEndpointServicesApi", "deletePrivateEndpoint", "endpointId");
        }


        // verify required parameter 'endpointServiceId' is not null or undefined
        if (endpointServiceId === null || endpointServiceId === undefined) {
            throw new RequiredError("PrivateEndpointServicesApi", "deletePrivateEndpoint", "endpointServiceId");
        }




        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/privateEndpoint/{cloudProvider}/endpointService/{endpointServiceId}/endpoint/{endpointId}'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'cloudProvider' + '}', encodeURIComponent(String(cloudProvider)))
            .replace('{' + 'endpointId' + '}', encodeURIComponent(String(endpointId)))
            .replace('{' + 'endpointServiceId' + '}', encodeURIComponent(String(endpointServiceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * Removes one private resource service from the specified project. This cloud service provider manages the private resource service that belongs to the project. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Remove One Private Endpoint Service for One Provider
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudProvider Cloud service provider that manages this private endpoint service.
     * @param endpointServiceId Unique 24-hexadecimal digit string that identifies the private endpoint service that you want to delete.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public async deletePrivateEndpointService(groupId: string, cloudProvider: 'AWS' | 'AZURE' | 'GCP', endpointServiceId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("PrivateEndpointServicesApi", "deletePrivateEndpointService", "groupId");
        }


        // verify required parameter 'cloudProvider' is not null or undefined
        if (cloudProvider === null || cloudProvider === undefined) {
            throw new RequiredError("PrivateEndpointServicesApi", "deletePrivateEndpointService", "cloudProvider");
        }


        // verify required parameter 'endpointServiceId' is not null or undefined
        if (endpointServiceId === null || endpointServiceId === undefined) {
            throw new RequiredError("PrivateEndpointServicesApi", "deletePrivateEndpointService", "endpointServiceId");
        }




        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/privateEndpoint/{cloudProvider}/endpointService/{endpointServiceId}'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'cloudProvider' + '}', encodeURIComponent(String(cloudProvider)))
            .replace('{' + 'endpointServiceId' + '}', encodeURIComponent(String(endpointServiceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * Returns the connection state of the specified private resource. The private resource service manages this private resource which belongs to one project hosted from one cloud service provider. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Private Endpoint for One Provider
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudProvider Cloud service provider that manages this private endpoint.
     * @param endpointId Unique string that identifies the private endpoint you want to return. The format of the **endpointId** parameter differs for AWS and Azure. You must URL encode the **endpointId** for Azure private endpoints.
     * @param endpointServiceId Unique 24-hexadecimal digit string that identifies the private endpoint service for which you want to return a private endpoint.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public async getPrivateEndpoint(groupId: string, cloudProvider: 'AWS' | 'AZURE' | 'GCP', endpointId: string, endpointServiceId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("PrivateEndpointServicesApi", "getPrivateEndpoint", "groupId");
        }


        // verify required parameter 'cloudProvider' is not null or undefined
        if (cloudProvider === null || cloudProvider === undefined) {
            throw new RequiredError("PrivateEndpointServicesApi", "getPrivateEndpoint", "cloudProvider");
        }


        // verify required parameter 'endpointId' is not null or undefined
        if (endpointId === null || endpointId === undefined) {
            throw new RequiredError("PrivateEndpointServicesApi", "getPrivateEndpoint", "endpointId");
        }


        // verify required parameter 'endpointServiceId' is not null or undefined
        if (endpointServiceId === null || endpointServiceId === undefined) {
            throw new RequiredError("PrivateEndpointServicesApi", "getPrivateEndpoint", "endpointServiceId");
        }




        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/privateEndpoint/{cloudProvider}/endpointService/{endpointServiceId}/endpoint/{endpointId}'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'cloudProvider' + '}', encodeURIComponent(String(cloudProvider)))
            .replace('{' + 'endpointId' + '}', encodeURIComponent(String(endpointId)))
            .replace('{' + 'endpointServiceId' + '}', encodeURIComponent(String(endpointServiceId)));

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
     * Returns the name, interfaces, and state of the specified private resource service from one project. The cloud service provider hosted this private resource service that belongs to the project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Private Endpoint Service for One Provider
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudProvider Cloud service provider that manages this private endpoint service.
     * @param endpointServiceId Unique 24-hexadecimal digit string that identifies the private endpoint service that you want to return.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public async getPrivateEndpointService(groupId: string, cloudProvider: 'AWS' | 'AZURE' | 'GCP', endpointServiceId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("PrivateEndpointServicesApi", "getPrivateEndpointService", "groupId");
        }


        // verify required parameter 'cloudProvider' is not null or undefined
        if (cloudProvider === null || cloudProvider === undefined) {
            throw new RequiredError("PrivateEndpointServicesApi", "getPrivateEndpointService", "cloudProvider");
        }


        // verify required parameter 'endpointServiceId' is not null or undefined
        if (endpointServiceId === null || endpointServiceId === undefined) {
            throw new RequiredError("PrivateEndpointServicesApi", "getPrivateEndpointService", "endpointServiceId");
        }




        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/privateEndpoint/{cloudProvider}/endpointService/{endpointServiceId}'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'cloudProvider' + '}', encodeURIComponent(String(cloudProvider)))
            .replace('{' + 'endpointServiceId' + '}', encodeURIComponent(String(endpointServiceId)));

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
     * Checks whether each region in the specified cloud service provider can create multiple private resources per region. The cloud service provider manages the private resource for the project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Regionalized Private Endpoint Status
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public async getRegionalizedPrivateEndpointSetting(groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("PrivateEndpointServicesApi", "getRegionalizedPrivateEndpointSetting", "groupId");
        }




        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/privateEndpoint/regionalMode'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));

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
     * Returns the name, interfaces, and state of all private resource services for the specified cloud service provider. This cloud service provider manages the private resource service for the project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Private Endpoint Services for One Provider
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudProvider Cloud service provider that manages this private endpoint service.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public async listPrivateEndpointServices(groupId: string, cloudProvider: 'AWS' | 'AZURE' | 'GCP', envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("PrivateEndpointServicesApi", "listPrivateEndpointServices", "groupId");
        }


        // verify required parameter 'cloudProvider' is not null or undefined
        if (cloudProvider === null || cloudProvider === undefined) {
            throw new RequiredError("PrivateEndpointServicesApi", "listPrivateEndpointServices", "cloudProvider");
        }




        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/privateEndpoint/{cloudProvider}/endpointService'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'cloudProvider' + '}', encodeURIComponent(String(cloudProvider)));

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
     * Enables or disables the ability can create multiple private resources per region in all cloud service providers in one project. The cloud service provider manages the private resource for the project. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Toggle Regionalized Private Endpoint Status
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param projectSettingItemView Enables or disables the ability can create multiple private resources per region in all cloud service providers in one project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public async toggleRegionalizedPrivateEndpointSetting(groupId: string, projectSettingItemView: ProjectSettingItemView, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("PrivateEndpointServicesApi", "toggleRegionalizedPrivateEndpointSetting", "groupId");
        }


        // verify required parameter 'projectSettingItemView' is not null or undefined
        if (projectSettingItemView === null || projectSettingItemView === undefined) {
            throw new RequiredError("PrivateEndpointServicesApi", "toggleRegionalizedPrivateEndpointSetting", "projectSettingItemView");
        }




        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/privateEndpoint/regionalMode'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/vnd.atlas.2023-01-01+json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(projectSettingItemView, "ProjectSettingItemView", ""),
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

export class PrivateEndpointServicesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPrivateEndpoint
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPrivateEndpoint(response: ResponseContext): Promise<Endpoint > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Endpoint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Endpoint", ""
            ) as Endpoint;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("402", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Payment Required", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Conflict", body, response.headers);
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
            const body: Endpoint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Endpoint", ""
            ) as Endpoint;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPrivateEndpointService
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPrivateEndpointService(response: ResponseContext): Promise<EndpointService > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EndpointService = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EndpointService", ""
            ) as EndpointService;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
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
            const body: EndpointService = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EndpointService", ""
            ) as EndpointService;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePrivateEndpoint
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deletePrivateEndpoint(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to deletePrivateEndpointService
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deletePrivateEndpointService(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to getPrivateEndpoint
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPrivateEndpoint(response: ResponseContext): Promise<Endpoint > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Endpoint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Endpoint", ""
            ) as Endpoint;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
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
            const body: Endpoint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Endpoint", ""
            ) as Endpoint;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPrivateEndpointService
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPrivateEndpointService(response: ResponseContext): Promise<EndpointService > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EndpointService = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EndpointService", ""
            ) as EndpointService;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
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
            const body: EndpointService = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EndpointService", ""
            ) as EndpointService;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRegionalizedPrivateEndpointSetting
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRegionalizedPrivateEndpointSetting(response: ResponseContext): Promise<ProjectSettingItemView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProjectSettingItemView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProjectSettingItemView", ""
            ) as ProjectSettingItemView;
            return body;
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
            const body: ProjectSettingItemView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProjectSettingItemView", ""
            ) as ProjectSettingItemView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPrivateEndpointServices
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listPrivateEndpointServices(response: ResponseContext): Promise<PaginatedPrivateLinkConnectionView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PaginatedPrivateLinkConnectionView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginatedPrivateLinkConnectionView", ""
            ) as PaginatedPrivateLinkConnectionView;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
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
            const body: PaginatedPrivateLinkConnectionView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginatedPrivateLinkConnectionView", ""
            ) as PaginatedPrivateLinkConnectionView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to toggleRegionalizedPrivateEndpointSetting
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async toggleRegionalizedPrivateEndpointSetting(response: ResponseContext): Promise<ProjectSettingItemView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProjectSettingItemView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProjectSettingItemView", ""
            ) as ProjectSettingItemView;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Conflict", body, response.headers);
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
            const body: ProjectSettingItemView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProjectSettingItemView", ""
            ) as ProjectSettingItemView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
