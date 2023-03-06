// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiError } from '../models/ApiError';
import { ApiMongoDBAccessLogsListView } from '../models/ApiMongoDBAccessLogsListView';

/**
 * no description
 */
export class AccessTrackingApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns the access logs of one cluster identified by the cluster's name. Access logs contain a list of authentication requests made against your cluster. You can't use this feature on tenant-tier clusters (M0, M2, M5). To use this resource, the requesting API Key must have the Project Monitoring Admin role.
     * Return Database Access History for One Cluster using Its Cluster Name
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param authResult Flag that indicates whether the response returns the successful authentication attempts only.
     * @param end Date and time when to stop retrieving database history. If you specify **end**, you must also specify **start**. This parameter uses the ISO 8601 timestamp format in UTC.
     * @param ipAddress One Internet Protocol address that attempted to authenticate with the database.
     * @param nLogs Maximum number of lines from the log to return.
     * @param start Date and time when MongoDB Cloud begins retrieving database history. If you specify **start**, you must also specify **end**. This parameter uses the ISO 8601 timestamp format in UTC.
     */
    public async listAccessLogsByClusterName(groupId: string, clusterName: string, envelope?: boolean, pretty?: boolean, authResult?: boolean, end?: string, ipAddress?: string, nLogs?: number, start?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("AccessTrackingApi", "listAccessLogsByClusterName", "groupId");
        }


        // verify required parameter 'clusterName' is not null or undefined
        if (clusterName === null || clusterName === undefined) {
            throw new RequiredError("AccessTrackingApi", "listAccessLogsByClusterName", "clusterName");
        }









        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/dbAccessHistory/clusters/{clusterName}'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'clusterName' + '}', encodeURIComponent(String(clusterName)));

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
        if (authResult !== undefined) {
            requestContext.setQueryParam("authResult", ObjectSerializer.serialize(authResult, "boolean", ""));
        }

        // Query Params
        if (end !== undefined) {
            requestContext.setQueryParam("end", ObjectSerializer.serialize(end, "string", ""));
        }

        // Query Params
        if (ipAddress !== undefined) {
            requestContext.setQueryParam("ipAddress", ObjectSerializer.serialize(ipAddress, "string", ""));
        }

        // Query Params
        if (nLogs !== undefined) {
            requestContext.setQueryParam("nLogs", ObjectSerializer.serialize(nLogs, "number", "int64"));
        }

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "Date", "date-time"));
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
     * Returns the access logs of one cluster identified by the cluster's hostname. Access logs contain a list of authentication requests made against your clusters. You can't use this feature on tenant-tier clusters (M0, M2, M5). To use this resource, the requesting API Key must have the Project Monitoring Admin role.
     * Return Database Access History for One Cluster using Its Hostname
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param hostname Fully qualified domain name or IP address of the MongoDB host that stores the log files that you want to download.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param authResult Flag that indicates whether the response returns the successful authentication attempts only.
     * @param end Date and time when to stop retrieving database history. If you specify **end**, you must also specify **start**. This parameter uses the ISO 8601 timestamp format in UTC.
     * @param ipAddress One Internet Protocol address that attempted to authenticate with the database.
     * @param nLogs Maximum number of lines from the log to return.
     * @param start Date and time when MongoDB Cloud begins retrieving database history. If you specify **start**, you must also specify **end**. This parameter uses the ISO 8601 timestamp format in UTC.
     */
    public async listAccessLogsByHostname(groupId: string, hostname: string, envelope?: boolean, pretty?: boolean, authResult?: boolean, end?: Date, ipAddress?: string, nLogs?: number, start?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("AccessTrackingApi", "listAccessLogsByHostname", "groupId");
        }


        // verify required parameter 'hostname' is not null or undefined
        if (hostname === null || hostname === undefined) {
            throw new RequiredError("AccessTrackingApi", "listAccessLogsByHostname", "hostname");
        }









        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/dbAccessHistory/processes/{hostname}'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'hostname' + '}', encodeURIComponent(String(hostname)));

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
        if (authResult !== undefined) {
            requestContext.setQueryParam("authResult", ObjectSerializer.serialize(authResult, "boolean", ""));
        }

        // Query Params
        if (end !== undefined) {
            requestContext.setQueryParam("end", ObjectSerializer.serialize(end, "Date", "date-time"));
        }

        // Query Params
        if (ipAddress !== undefined) {
            requestContext.setQueryParam("ipAddress", ObjectSerializer.serialize(ipAddress, "string", ""));
        }

        // Query Params
        if (nLogs !== undefined) {
            requestContext.setQueryParam("nLogs", ObjectSerializer.serialize(nLogs, "number", "int32"));
        }

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "Date", "date-time"));
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

export class AccessTrackingApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAccessLogsByClusterName
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listAccessLogsByClusterName(response: ResponseContext): Promise<ApiMongoDBAccessLogsListView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiMongoDBAccessLogsListView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiMongoDBAccessLogsListView", ""
            ) as ApiMongoDBAccessLogsListView;
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
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiMongoDBAccessLogsListView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiMongoDBAccessLogsListView", ""
            ) as ApiMongoDBAccessLogsListView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAccessLogsByHostname
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listAccessLogsByHostname(response: ResponseContext): Promise<ApiMongoDBAccessLogsListView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiMongoDBAccessLogsListView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiMongoDBAccessLogsListView", ""
            ) as ApiMongoDBAccessLogsListView;
            return body;
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
            const body: ApiMongoDBAccessLogsListView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiMongoDBAccessLogsListView", ""
            ) as ApiMongoDBAccessLogsListView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
