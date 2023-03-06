// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiError } from '../models/ApiError';
import { GroupPaginatedIntegrationView } from '../models/GroupPaginatedIntegrationView';
import { IntegrationViewForNdsGroup } from '../models/IntegrationViewForNdsGroup';

/**
 * no description
 */
export class ThirdPartyIntegrationsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Adds the settings for configuring one third-party service integration. These settings apply to all databases managed in the specified MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Configure One Third-Party Service Integration
     * @param integrationType Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param integrationViewForNdsGroup Third-party integration that you want to configure for your project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public async createThirdPartyIntegration(integrationType: 'PAGER_DUTY' | 'SLACK' | 'DATADOG' | 'NEW_RELIC' | 'OPS_GENIE' | 'VICTOR_OPS' | 'WEBHOOK' | 'PROMETHEUS' | 'MICROSOFT_TEAMS', groupId: string, integrationViewForNdsGroup: IntegrationViewForNdsGroup, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'integrationType' is not null or undefined
        if (integrationType === null || integrationType === undefined) {
            throw new RequiredError("ThirdPartyIntegrationsApi", "createThirdPartyIntegration", "integrationType");
        }


        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("ThirdPartyIntegrationsApi", "createThirdPartyIntegration", "groupId");
        }


        // verify required parameter 'integrationViewForNdsGroup' is not null or undefined
        if (integrationViewForNdsGroup === null || integrationViewForNdsGroup === undefined) {
            throw new RequiredError("ThirdPartyIntegrationsApi", "createThirdPartyIntegration", "integrationViewForNdsGroup");
        }







        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/integrations/{integrationType}'
            .replace('{' + 'integrationType' + '}', encodeURIComponent(String(integrationType)))
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }

        // Query Params
        if (includeCount !== undefined) {
            requestContext.setQueryParam("includeCount", ObjectSerializer.serialize(includeCount, "boolean", ""));
        }

        // Query Params
        if (itemsPerPage !== undefined) {
            requestContext.setQueryParam("itemsPerPage", ObjectSerializer.serialize(itemsPerPage, "number", ""));
        }

        // Query Params
        if (pageNum !== undefined) {
            requestContext.setQueryParam("pageNum", ObjectSerializer.serialize(pageNum, "number", ""));
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
            ObjectSerializer.serialize(integrationViewForNdsGroup, "IntegrationViewForNdsGroup", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Removes the settings that permit configuring one third-party service integration. These settings apply to all databases managed in one MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Remove One Third-Party Service Integration
     * @param integrationType Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public async deleteThirdPartyIntegration(integrationType: 'PAGER_DUTY' | 'SLACK' | 'DATADOG' | 'NEW_RELIC' | 'OPS_GENIE' | 'VICTOR_OPS' | 'WEBHOOK' | 'PROMETHEUS' | 'MICROSOFT_TEAMS', groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'integrationType' is not null or undefined
        if (integrationType === null || integrationType === undefined) {
            throw new RequiredError("ThirdPartyIntegrationsApi", "deleteThirdPartyIntegration", "integrationType");
        }


        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("ThirdPartyIntegrationsApi", "deleteThirdPartyIntegration", "groupId");
        }




        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/integrations/{integrationType}'
            .replace('{' + 'integrationType' + '}', encodeURIComponent(String(integrationType)))
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));

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


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the settings for configuring integration with one third-party service. These settings apply to all databases managed in one MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Return One Third-Party Service Integration
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param integrationType Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public async getThirdPartyIntegration(groupId: string, integrationType: 'PAGER_DUTY' | 'SLACK' | 'DATADOG' | 'NEW_RELIC' | 'OPS_GENIE' | 'VICTOR_OPS' | 'WEBHOOK' | 'PROMETHEUS' | 'MICROSOFT_TEAMS', envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("ThirdPartyIntegrationsApi", "getThirdPartyIntegration", "groupId");
        }


        // verify required parameter 'integrationType' is not null or undefined
        if (integrationType === null || integrationType === undefined) {
            throw new RequiredError("ThirdPartyIntegrationsApi", "getThirdPartyIntegration", "integrationType");
        }




        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/integrations/{integrationType}'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'integrationType' + '}', encodeURIComponent(String(integrationType)));

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


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the settings that permit integrations with all configured third-party services. These settings apply to all databases managed in one MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Return All Active Third-Party Service Integrations
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public async listThirdPartyIntegrations(groupId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("ThirdPartyIntegrationsApi", "listThirdPartyIntegrations", "groupId");
        }







        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/integrations'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }

        // Query Params
        if (includeCount !== undefined) {
            requestContext.setQueryParam("includeCount", ObjectSerializer.serialize(includeCount, "boolean", ""));
        }

        // Query Params
        if (itemsPerPage !== undefined) {
            requestContext.setQueryParam("itemsPerPage", ObjectSerializer.serialize(itemsPerPage, "number", ""));
        }

        // Query Params
        if (pageNum !== undefined) {
            requestContext.setQueryParam("pageNum", ObjectSerializer.serialize(pageNum, "number", ""));
        }

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates the settings for configuring integration with one third-party service. These settings apply to all databases managed in one MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Update One Third-Party Service Integration
     * @param integrationType Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param integrationViewForNdsGroup Third-party integration that you want to configure for your project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public async updateThirdPartyIntegration(integrationType: 'PAGER_DUTY' | 'SLACK' | 'DATADOG' | 'NEW_RELIC' | 'OPS_GENIE' | 'VICTOR_OPS' | 'WEBHOOK' | 'PROMETHEUS' | 'MICROSOFT_TEAMS', groupId: string, integrationViewForNdsGroup: IntegrationViewForNdsGroup, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'integrationType' is not null or undefined
        if (integrationType === null || integrationType === undefined) {
            throw new RequiredError("ThirdPartyIntegrationsApi", "updateThirdPartyIntegration", "integrationType");
        }


        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("ThirdPartyIntegrationsApi", "updateThirdPartyIntegration", "groupId");
        }


        // verify required parameter 'integrationViewForNdsGroup' is not null or undefined
        if (integrationViewForNdsGroup === null || integrationViewForNdsGroup === undefined) {
            throw new RequiredError("ThirdPartyIntegrationsApi", "updateThirdPartyIntegration", "integrationViewForNdsGroup");
        }







        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/integrations/{integrationType}'
            .replace('{' + 'integrationType' + '}', encodeURIComponent(String(integrationType)))
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }

        // Query Params
        if (includeCount !== undefined) {
            requestContext.setQueryParam("includeCount", ObjectSerializer.serialize(includeCount, "boolean", ""));
        }

        // Query Params
        if (itemsPerPage !== undefined) {
            requestContext.setQueryParam("itemsPerPage", ObjectSerializer.serialize(itemsPerPage, "number", ""));
        }

        // Query Params
        if (pageNum !== undefined) {
            requestContext.setQueryParam("pageNum", ObjectSerializer.serialize(pageNum, "number", ""));
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
            ObjectSerializer.serialize(integrationViewForNdsGroup, "IntegrationViewForNdsGroup", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ThirdPartyIntegrationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createThirdPartyIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createThirdPartyIntegration(response: ResponseContext): Promise<GroupPaginatedIntegrationView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GroupPaginatedIntegrationView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GroupPaginatedIntegrationView", ""
            ) as GroupPaginatedIntegrationView;
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
            const body: GroupPaginatedIntegrationView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GroupPaginatedIntegrationView", ""
            ) as GroupPaginatedIntegrationView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteThirdPartyIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteThirdPartyIntegration(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to getThirdPartyIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getThirdPartyIntegration(response: ResponseContext): Promise<IntegrationViewForNdsGroup > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IntegrationViewForNdsGroup = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IntegrationViewForNdsGroup", ""
            ) as IntegrationViewForNdsGroup;
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
            const body: IntegrationViewForNdsGroup = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IntegrationViewForNdsGroup", ""
            ) as IntegrationViewForNdsGroup;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listThirdPartyIntegrations
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listThirdPartyIntegrations(response: ResponseContext): Promise<GroupPaginatedIntegrationView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GroupPaginatedIntegrationView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GroupPaginatedIntegrationView", ""
            ) as GroupPaginatedIntegrationView;
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
            const body: GroupPaginatedIntegrationView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GroupPaginatedIntegrationView", ""
            ) as GroupPaginatedIntegrationView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateThirdPartyIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateThirdPartyIntegration(response: ResponseContext): Promise<GroupPaginatedIntegrationView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GroupPaginatedIntegrationView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GroupPaginatedIntegrationView", ""
            ) as GroupPaginatedIntegrationView;
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
            const body: GroupPaginatedIntegrationView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GroupPaginatedIntegrationView", ""
            ) as GroupPaginatedIntegrationView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
