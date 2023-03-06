// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiError } from '../models/ApiError';
import { ApiNamespacesView } from '../models/ApiNamespacesView';
import { ApiPerformanceAdvisorResponseView } from '../models/ApiPerformanceAdvisorResponseView';
import { ApiPerformanceAdvisorSlowQueryListView } from '../models/ApiPerformanceAdvisorSlowQueryListView';

/**
 * no description
 */
export class PerformanceAdvisorApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Disables the slow operation threshold that MongoDB Cloud calculated for the specified project. The threshold determines which operations the Performance Advisor and Query Profiler considers slow. When disabled, MongoDB Cloud considers any operation that takes longer than 100 milliseconds to be slow. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Disable Managed Slow Operation Threshold
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public async disableSlowOperationThresholding(groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("PerformanceAdvisorApi", "disableSlowOperationThresholding", "groupId");
        }




        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/managedSlowMs/disable'
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
     * Enables MongoDB Cloud to use its slow operation threshold for the specified project. The threshold determines which operations the Performance Advisor and Query Profiler considers slow. When enabled, MongoDB Cloud uses the average execution time for operations on your cluster to determine slow-running queries. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Enable Managed Slow Operation Threshold
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public async enableSlowOperationThresholding(groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("PerformanceAdvisorApi", "enableSlowOperationThresholding", "groupId");
        }




        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/managedSlowMs/enable'
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
     * Returns log lines for slow queries that the Performance Advisor and Query Profiler identified. The Performance Advisor monitors queries that MongoDB considers slow and suggests new indexes to improve query performance. MongoDB Cloud bases the threshold for slow queries on the average time of operations on your cluster. This enables workload-relevant recommendations. To use this resource, the requesting API Key must have the Project Data Access Read Write role. This resource doesn't require the API Key to have an Access List.
     * Return Slow Queries
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param processId Combination of host and port that serves the MongoDB process. The host must be the hostname, FQDN, IPv4 address, or IPv6 address of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param duration Length of time expressed during which the query finds suggested indexes among the managed namespaces in the cluster. This parameter expresses its value in milliseconds.  - If you don&#39;t specify the **since** parameter, the endpoint returns data covering the duration before the current time. - If you specify neither the **duration** nor **since** parameters, the endpoint returns data from the previous 24 hours.
     * @param namespaces Namespaces from which to retrieve suggested indexes. A namespace consists of one database and one collection resource written as &#x60;.&#x60;: &#x60;&lt;database&gt;.&lt;collection&gt;&#x60;. To include multiple namespaces, pass the parameter multiple times delimited with an ampersand (&#x60;&amp;&#x60;) between each namespace. Omit this parameter to return results for all namespaces.
     * @param nLogs Maximum number of lines from the log to return.
     * @param since Date and time from which the query retrieves the suggested indexes. This parameter expresses its value in the number of seconds that have elapsed since the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time).  - If you don&#39;t specify the **duration** parameter, the endpoint returns data covering from the **since** value and the current time. - If you specify neither the **duration** nor the **since** parameters, the endpoint returns data from the previous 24 hours.
     */
    public async listSlowQueries(groupId: string, processId: string, envelope?: boolean, pretty?: boolean, duration?: number, namespaces?: Array<string>, nLogs?: number, since?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("PerformanceAdvisorApi", "listSlowQueries", "groupId");
        }


        // verify required parameter 'processId' is not null or undefined
        if (processId === null || processId === undefined) {
            throw new RequiredError("PerformanceAdvisorApi", "listSlowQueries", "processId");
        }








        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/processes/{processId}/performanceAdvisor/slowQueryLogs'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'processId' + '}', encodeURIComponent(String(processId)));

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

        // Query Params
        if (duration !== undefined) {
            requestContext.setQueryParam("duration", ObjectSerializer.serialize(duration, "number", "int64"));
        }

        // Query Params
        if (namespaces !== undefined) {
            requestContext.setQueryParam("namespaces", ObjectSerializer.serialize(namespaces, "Array<string>", ""));
        }

        // Query Params
        if (nLogs !== undefined) {
            requestContext.setQueryParam("nLogs", ObjectSerializer.serialize(nLogs, "number", "int64"));
        }

        // Query Params
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "number", "int64"));
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
     * Returns up to 20 namespaces for collections experiencing slow queries on the specified host. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Namespaces for One Host
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param processId Combination of host and port that serves the MongoDB process. The host must be the hostname, FQDN, IPv4 address, or IPv6 address of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param duration Length of time expressed during which the query finds suggested indexes among the managed namespaces in the cluster. This parameter expresses its value in milliseconds.  - If you don&#39;t specify the **since** parameter, the endpoint returns data covering the duration before the current time. - If you specify neither the **duration** nor **since** parameters, the endpoint returns data from the previous 24 hours.
     * @param since Date and time from which the query retrieves the suggested indexes. This parameter expresses its value in the number of seconds that have elapsed since the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time).  - If you don&#39;t specify the **duration** parameter, the endpoint returns data covering from the **since** value and the current time. - If you specify neither the **duration** nor the **since** parameters, the endpoint returns data from the previous 24 hours.
     */
    public async listSlowQueryNamespaces(groupId: string, processId: string, envelope?: boolean, pretty?: boolean, duration?: number, since?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("PerformanceAdvisorApi", "listSlowQueryNamespaces", "groupId");
        }


        // verify required parameter 'processId' is not null or undefined
        if (processId === null || processId === undefined) {
            throw new RequiredError("PerformanceAdvisorApi", "listSlowQueryNamespaces", "processId");
        }






        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/processes/{processId}/performanceAdvisor/namespaces'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'processId' + '}', encodeURIComponent(String(processId)));

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

        // Query Params
        if (duration !== undefined) {
            requestContext.setQueryParam("duration", ObjectSerializer.serialize(duration, "number", "int64"));
        }

        // Query Params
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "number", "int64"));
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
     * Returns the indexes that the Performance Advisor suggests. The Performance Advisor monitors queries that MongoDB considers slow and suggests new indexes to improve query performance. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Suggested Indexes
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param processId Combination of host and port that serves the MongoDB process. The host must be the hostname, FQDN, IPv4 address, or IPv6 address of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param duration Length of time expressed during which the query finds suggested indexes among the managed namespaces in the cluster. This parameter expresses its value in milliseconds.  - If you don&#39;t specify the **since** parameter, the endpoint returns data covering the duration before the current time. - If you specify neither the **duration** nor **since** parameters, the endpoint returns data from the previous 24 hours.
     * @param namespaces Namespaces from which to retrieve suggested indexes. A namespace consists of one database and one collection resource written as &#x60;.&#x60;: &#x60;&lt;database&gt;.&lt;collection&gt;&#x60;. To include multiple namespaces, pass the parameter multiple times delimited with an ampersand (&#x60;&amp;&#x60;) between each namespace. Omit this parameter to return results for all namespaces.
     * @param nExamples Maximum number of example queries that benefit from the suggested index.
     * @param nIndexes Number that indicates the maximum indexes to suggest.
     * @param since Date and time from which the query retrieves the suggested indexes. This parameter expresses its value in the number of seconds that have elapsed since the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time).  - If you don&#39;t specify the **duration** parameter, the endpoint returns data covering from the **since** value and the current time. - If you specify neither the **duration** nor the **since** parameters, the endpoint returns data from the previous 24 hours.
     */
    public async listSuggestedIndexes(groupId: string, processId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, duration?: number, namespaces?: Array<string>, nExamples?: number, nIndexes?: number, since?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("PerformanceAdvisorApi", "listSuggestedIndexes", "groupId");
        }


        // verify required parameter 'processId' is not null or undefined
        if (processId === null || processId === undefined) {
            throw new RequiredError("PerformanceAdvisorApi", "listSuggestedIndexes", "processId");
        }












        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/processes/{processId}/performanceAdvisor/suggestedIndexes'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'processId' + '}', encodeURIComponent(String(processId)));

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

        // Query Params
        if (duration !== undefined) {
            requestContext.setQueryParam("duration", ObjectSerializer.serialize(duration, "number", ""));
        }

        // Query Params
        if (namespaces !== undefined) {
            requestContext.setQueryParam("namespaces", ObjectSerializer.serialize(namespaces, "Array<string>", ""));
        }

        // Query Params
        if (nExamples !== undefined) {
            requestContext.setQueryParam("nExamples", ObjectSerializer.serialize(nExamples, "number", "int64"));
        }

        // Query Params
        if (nIndexes !== undefined) {
            requestContext.setQueryParam("nIndexes", ObjectSerializer.serialize(nIndexes, "number", "int64"));
        }

        // Query Params
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "number", ""));
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

}

export class PerformanceAdvisorApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to disableSlowOperationThresholding
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async disableSlowOperationThresholding(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Forbidden", body, response.headers);
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
     * @params response Response returned by the server for a request to enableSlowOperationThresholding
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async enableSlowOperationThresholding(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Forbidden", body, response.headers);
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
     * @params response Response returned by the server for a request to listSlowQueries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listSlowQueries(response: ResponseContext): Promise<ApiPerformanceAdvisorSlowQueryListView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiPerformanceAdvisorSlowQueryListView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiPerformanceAdvisorSlowQueryListView", ""
            ) as ApiPerformanceAdvisorSlowQueryListView;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
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
            const body: ApiPerformanceAdvisorSlowQueryListView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiPerformanceAdvisorSlowQueryListView", ""
            ) as ApiPerformanceAdvisorSlowQueryListView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSlowQueryNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listSlowQueryNamespaces(response: ResponseContext): Promise<ApiNamespacesView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiNamespacesView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiNamespacesView", ""
            ) as ApiNamespacesView;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
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
            const body: ApiNamespacesView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiNamespacesView", ""
            ) as ApiNamespacesView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSuggestedIndexes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listSuggestedIndexes(response: ResponseContext): Promise<ApiPerformanceAdvisorResponseView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiPerformanceAdvisorResponseView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiPerformanceAdvisorResponseView", ""
            ) as ApiPerformanceAdvisorResponseView;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
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
            const body: ApiPerformanceAdvisorResponseView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiPerformanceAdvisorResponseView", ""
            ) as ApiPerformanceAdvisorResponseView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
