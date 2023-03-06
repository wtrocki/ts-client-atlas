// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiError } from '../models/ApiError';
import { ServerlessTenantEndpoint } from '../models/ServerlessTenantEndpoint';
import { ServerlessTenantEndpointCreate } from '../models/ServerlessTenantEndpointCreate';
import { ServerlessTenantEndpointUpdate } from '../models/ServerlessTenantEndpointUpdate';

/**
 * no description
 */
export class ServerlessPrivateEndpointsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates one private endpoint for one serverless instance. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.   A new endpoint won't be immediately available after creation.  Read the steps in the linked tutorial for detailed guidance.
     * Create One Private Endpoint for One Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param instanceName Human-readable label that identifies the serverless instance for which the tenant endpoint will be created.
     * @param serverlessTenantEndpointCreate Information about the Private Endpoint to create for the Serverless Instance.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public async createServerlessPrivateEndpoint(groupId: string, instanceName: string, serverlessTenantEndpointCreate: ServerlessTenantEndpointCreate, envelope?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("ServerlessPrivateEndpointsApi", "createServerlessPrivateEndpoint", "groupId");
        }


        // verify required parameter 'instanceName' is not null or undefined
        if (instanceName === null || instanceName === undefined) {
            throw new RequiredError("ServerlessPrivateEndpointsApi", "createServerlessPrivateEndpoint", "instanceName");
        }


        // verify required parameter 'serverlessTenantEndpointCreate' is not null or undefined
        if (serverlessTenantEndpointCreate === null || serverlessTenantEndpointCreate === undefined) {
            throw new RequiredError("ServerlessPrivateEndpointsApi", "createServerlessPrivateEndpoint", "serverlessTenantEndpointCreate");
        }



        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/privateEndpoint/serverless/instance/{instanceName}/endpoint'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'instanceName' + '}', encodeURIComponent(String(instanceName)));

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
            ObjectSerializer.serialize(serverlessTenantEndpointCreate, "ServerlessTenantEndpointCreate", ""),
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
     * Remove one private endpoint from one serverless instance. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Remove One Private Endpoint for One Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param instanceName Human-readable label that identifies the serverless instance from which the tenant endpoint will be removed.
     * @param endpointId Unique 24-hexadecimal digit string that identifies the tenant endpoint which will be removed.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public async deleteServerlessPrivateEndpoint(groupId: string, instanceName: string, endpointId: string, envelope?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("ServerlessPrivateEndpointsApi", "deleteServerlessPrivateEndpoint", "groupId");
        }


        // verify required parameter 'instanceName' is not null or undefined
        if (instanceName === null || instanceName === undefined) {
            throw new RequiredError("ServerlessPrivateEndpointsApi", "deleteServerlessPrivateEndpoint", "instanceName");
        }


        // verify required parameter 'endpointId' is not null or undefined
        if (endpointId === null || endpointId === undefined) {
            throw new RequiredError("ServerlessPrivateEndpointsApi", "deleteServerlessPrivateEndpoint", "endpointId");
        }



        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/privateEndpoint/serverless/instance/{instanceName}/endpoint/{endpointId}'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'instanceName' + '}', encodeURIComponent(String(instanceName)))
            .replace('{' + 'endpointId' + '}', encodeURIComponent(String(endpointId)));

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
     * Return one private endpoint for one serverless instance. Identify this endpoint using its unique ID. You must have at least the Project Read Only role for the project to successfully call this resource. This resource doesn't require the API Key to have an Access List.
     * Return One Private Endpoint for One Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param instanceName Human-readable label that identifies the serverless instance associated with the tenant endpoint.
     * @param endpointId Unique 24-hexadecimal digit string that identifies the tenant endpoint.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public async getServerlessPrivateEndpoint(groupId: string, instanceName: string, endpointId: string, envelope?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("ServerlessPrivateEndpointsApi", "getServerlessPrivateEndpoint", "groupId");
        }


        // verify required parameter 'instanceName' is not null or undefined
        if (instanceName === null || instanceName === undefined) {
            throw new RequiredError("ServerlessPrivateEndpointsApi", "getServerlessPrivateEndpoint", "instanceName");
        }


        // verify required parameter 'endpointId' is not null or undefined
        if (endpointId === null || endpointId === undefined) {
            throw new RequiredError("ServerlessPrivateEndpointsApi", "getServerlessPrivateEndpoint", "endpointId");
        }



        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/privateEndpoint/serverless/instance/{instanceName}/endpoint/{endpointId}'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'instanceName' + '}', encodeURIComponent(String(instanceName)))
            .replace('{' + 'endpointId' + '}', encodeURIComponent(String(endpointId)));

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
     * Returns all private endpoints for one serverless instance. You must have at least the Project Read Only role for the project to successfully call this resource. This resource doesn't require the API Key to have an Access List.
     * Return All Private Endpoints for One Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param instanceName Human-readable label that identifies the serverless instance associated with the tenant endpoint.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public async listServerlessPrivateEndpoints(groupId: string, instanceName: string, envelope?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("ServerlessPrivateEndpointsApi", "listServerlessPrivateEndpoints", "groupId");
        }


        // verify required parameter 'instanceName' is not null or undefined
        if (instanceName === null || instanceName === undefined) {
            throw new RequiredError("ServerlessPrivateEndpointsApi", "listServerlessPrivateEndpoints", "instanceName");
        }



        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/privateEndpoint/serverless/instance/{instanceName}/endpoint'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'instanceName' + '}', encodeURIComponent(String(instanceName)));

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
     * Updates one private endpoint for one serverless instance. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Update One Private Endpoint for One Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param instanceName Human-readable label that identifies the serverless instance associated with the tenant endpoint that will be updated.
     * @param endpointId Unique 24-hexadecimal digit string that identifies the tenant endpoint which will be updated.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param serverlessTenantEndpointUpdate 
     */
    public async updateServerlessPrivateEndpoint(groupId: string, instanceName: string, endpointId: string, envelope?: boolean, serverlessTenantEndpointUpdate?: ServerlessTenantEndpointUpdate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("ServerlessPrivateEndpointsApi", "updateServerlessPrivateEndpoint", "groupId");
        }


        // verify required parameter 'instanceName' is not null or undefined
        if (instanceName === null || instanceName === undefined) {
            throw new RequiredError("ServerlessPrivateEndpointsApi", "updateServerlessPrivateEndpoint", "instanceName");
        }


        // verify required parameter 'endpointId' is not null or undefined
        if (endpointId === null || endpointId === undefined) {
            throw new RequiredError("ServerlessPrivateEndpointsApi", "updateServerlessPrivateEndpoint", "endpointId");
        }




        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/privateEndpoint/serverless/instance/{instanceName}/endpoint/{endpointId}'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'instanceName' + '}', encodeURIComponent(String(instanceName)))
            .replace('{' + 'endpointId' + '}', encodeURIComponent(String(endpointId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(serverlessTenantEndpointUpdate, "ServerlessTenantEndpointUpdate", ""),
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

export class ServerlessPrivateEndpointsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createServerlessPrivateEndpoint
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createServerlessPrivateEndpoint(response: ResponseContext): Promise<ServerlessTenantEndpoint > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ServerlessTenantEndpoint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ServerlessTenantEndpoint", ""
            ) as ServerlessTenantEndpoint;
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
            const body: ServerlessTenantEndpoint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ServerlessTenantEndpoint", ""
            ) as ServerlessTenantEndpoint;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteServerlessPrivateEndpoint
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteServerlessPrivateEndpoint(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to getServerlessPrivateEndpoint
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getServerlessPrivateEndpoint(response: ResponseContext): Promise<ServerlessTenantEndpoint > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ServerlessTenantEndpoint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ServerlessTenantEndpoint", ""
            ) as ServerlessTenantEndpoint;
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
            const body: ServerlessTenantEndpoint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ServerlessTenantEndpoint", ""
            ) as ServerlessTenantEndpoint;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listServerlessPrivateEndpoints
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listServerlessPrivateEndpoints(response: ResponseContext): Promise<Array<ServerlessTenantEndpoint> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ServerlessTenantEndpoint> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ServerlessTenantEndpoint>", ""
            ) as Array<ServerlessTenantEndpoint>;
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
            const body: Array<ServerlessTenantEndpoint> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ServerlessTenantEndpoint>", ""
            ) as Array<ServerlessTenantEndpoint>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateServerlessPrivateEndpoint
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateServerlessPrivateEndpoint(response: ResponseContext): Promise<ServerlessTenantEndpoint > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ServerlessTenantEndpoint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ServerlessTenantEndpoint", ""
            ) as ServerlessTenantEndpoint;
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
            const body: ServerlessTenantEndpoint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ServerlessTenantEndpoint", ""
            ) as ServerlessTenantEndpoint;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
