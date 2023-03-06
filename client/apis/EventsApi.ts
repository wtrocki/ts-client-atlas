// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiError } from '../models/ApiError';
import { EventTypeForNdsGroup } from '../models/EventTypeForNdsGroup';
import { EventTypeForOrg } from '../models/EventTypeForOrg';
import { EventViewForNdsGroup } from '../models/EventViewForNdsGroup';
import { EventViewForOrg } from '../models/EventViewForOrg';
import { GroupPaginatedEventView } from '../models/GroupPaginatedEventView';
import { OrgPaginatedEventView } from '../models/OrgPaginatedEventView';

/**
 * no description
 */
export class EventsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns one event for the specified organization. Events identify significant database, billing, or security activities or status changes. To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an Access List.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/events-orgs-get-one/).
     * Return One Event from One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param eventId Unique 24-hexadecimal digit string that identifies the event that you want to return. Use the [/events](#tag/Events/operation/listOrganizationEvents) endpoint to retrieve all events to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param includeRaw Flag that indicates whether to include the raw document in the output. The raw document contains additional meta information about the event.
     */
    public async getOrganizationEvent(orgId: string, eventId: string, envelope?: boolean, pretty?: boolean, includeRaw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("EventsApi", "getOrganizationEvent", "orgId");
        }


        // verify required parameter 'eventId' is not null or undefined
        if (eventId === null || eventId === undefined) {
            throw new RequiredError("EventsApi", "getOrganizationEvent", "eventId");
        }





        // Path Params
        const localVarPath = '/api/atlas/v2/orgs/{orgId}/events/{eventId}'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'eventId' + '}', encodeURIComponent(String(eventId)));

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
        if (includeRaw !== undefined) {
            requestContext.setQueryParam("includeRaw", ObjectSerializer.serialize(includeRaw, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns one event for the specified project. Events identify significant database, billing, or security activities or status changes. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/events-projects-get-one/).
     * Return One Event from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param eventId Unique 24-hexadecimal digit string that identifies the event that you want to return. Use the [/events](#tag/Events/operation/listProjectEvents) endpoint to retrieve all events to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param includeRaw Flag that indicates whether to include the raw document in the output. The raw document contains additional meta information about the event.
     */
    public async getProjectEvent(groupId: string, eventId: string, envelope?: boolean, pretty?: boolean, includeRaw?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("EventsApi", "getProjectEvent", "groupId");
        }


        // verify required parameter 'eventId' is not null or undefined
        if (eventId === null || eventId === undefined) {
            throw new RequiredError("EventsApi", "getProjectEvent", "eventId");
        }





        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/events/{eventId}'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'eventId' + '}', encodeURIComponent(String(eventId)));

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
        if (includeRaw !== undefined) {
            requestContext.setQueryParam("includeRaw", ObjectSerializer.serialize(includeRaw, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns all events for the specified organization. Events identify significant database, billing, or security activities or status changes. To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an Access List.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/events-orgs-get-all/).
     * Return All Events from One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param eventType Category of incident recorded at this moment in time.  **IMPORTANT**: The complete list of event type values changes frequently.
     * @param includeRaw Flag that indicates whether to include the raw document in the output. The raw document contains additional meta information about the event.
     * @param maxDate Date and time from when MongoDB Cloud stops returning events. This parameter uses the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;ISO 8601&lt;/a&gt; timestamp format in UTC.
     * @param minDate Date and time from when MongoDB Cloud starts returning events. This parameter uses the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;ISO 8601&lt;/a&gt; timestamp format in UTC.
     */
    public async listOrganizationEvents(orgId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, eventType?: EventTypeForOrg, includeRaw?: boolean, maxDate?: Date, minDate?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new RequiredError("EventsApi", "listOrganizationEvents", "orgId");
        }











        // Path Params
        const localVarPath = '/api/atlas/v2/orgs/{orgId}/events'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)));

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
        if (eventType !== undefined) {
            requestContext.setQueryParam("eventType", ObjectSerializer.serialize(eventType, "EventTypeForOrg", ""));
        }

        // Query Params
        if (includeRaw !== undefined) {
            requestContext.setQueryParam("includeRaw", ObjectSerializer.serialize(includeRaw, "boolean", ""));
        }

        // Query Params
        if (maxDate !== undefined) {
            requestContext.setQueryParam("maxDate", ObjectSerializer.serialize(maxDate, "Date", "date-time"));
        }

        // Query Params
        if (minDate !== undefined) {
            requestContext.setQueryParam("minDate", ObjectSerializer.serialize(minDate, "Date", "date-time"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns one event for the specified project. Events identify significant database, billing, or security activities or status changes. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/events-projects-get-all/).
     * Return All Events from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param clusterNames Human-readable label that identifies the cluster.
     * @param eventType Category of incident recorded at this moment in time.  **IMPORTANT**: The complete list of event type values changes frequently.
     * @param includeRaw Flag that indicates whether to include the raw document in the output. The raw document contains additional meta information about the event.
     * @param maxDate Date and time from when MongoDB Cloud stops returning events. This parameter uses the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;ISO 8601&lt;/a&gt; timestamp format in UTC.
     * @param minDate Date and time from when MongoDB Cloud starts returning events. This parameter uses the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;ISO 8601&lt;/a&gt; timestamp format in UTC.
     */
    public async listProjectEvents(groupId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, clusterNames?: Array<string>, eventType?: EventTypeForNdsGroup, includeRaw?: boolean, maxDate?: Date, minDate?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("EventsApi", "listProjectEvents", "groupId");
        }












        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/events'
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

        // Query Params
        if (clusterNames !== undefined) {
            requestContext.setQueryParam("clusterNames", ObjectSerializer.serialize(clusterNames, "Array<string>", ""));
        }

        // Query Params
        if (eventType !== undefined) {
            requestContext.setQueryParam("eventType", ObjectSerializer.serialize(eventType, "EventTypeForNdsGroup", ""));
        }

        // Query Params
        if (includeRaw !== undefined) {
            requestContext.setQueryParam("includeRaw", ObjectSerializer.serialize(includeRaw, "boolean", ""));
        }

        // Query Params
        if (maxDate !== undefined) {
            requestContext.setQueryParam("maxDate", ObjectSerializer.serialize(maxDate, "Date", "date-time"));
        }

        // Query Params
        if (minDate !== undefined) {
            requestContext.setQueryParam("minDate", ObjectSerializer.serialize(minDate, "Date", "date-time"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class EventsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOrganizationEvent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getOrganizationEvent(response: ResponseContext): Promise<EventViewForOrg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EventViewForOrg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EventViewForOrg", ""
            ) as EventViewForOrg;
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
            const body: EventViewForOrg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EventViewForOrg", ""
            ) as EventViewForOrg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getProjectEvent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getProjectEvent(response: ResponseContext): Promise<EventViewForNdsGroup > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EventViewForNdsGroup = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EventViewForNdsGroup", ""
            ) as EventViewForNdsGroup;
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
            const body: EventViewForNdsGroup = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EventViewForNdsGroup", ""
            ) as EventViewForNdsGroup;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOrganizationEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listOrganizationEvents(response: ResponseContext): Promise<OrgPaginatedEventView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrgPaginatedEventView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrgPaginatedEventView", ""
            ) as OrgPaginatedEventView;
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
            const body: OrgPaginatedEventView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrgPaginatedEventView", ""
            ) as OrgPaginatedEventView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listProjectEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listProjectEvents(response: ResponseContext): Promise<GroupPaginatedEventView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GroupPaginatedEventView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GroupPaginatedEventView", ""
            ) as GroupPaginatedEventView;
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
            const body: GroupPaginatedEventView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GroupPaginatedEventView", ""
            ) as GroupPaginatedEventView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
