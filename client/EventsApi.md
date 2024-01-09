# .EventsApi

All URIs are relative to *https://cloud.mongodb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrganizationEvent**](EventsApi.md#getOrganizationEvent) | **GET** /api/atlas/v2/orgs/{orgId}/events/{eventId} | Return One Event from One Organization
[**getProjectEvent**](EventsApi.md#getProjectEvent) | **GET** /api/atlas/v2/groups/{groupId}/events/{eventId} | Return One Event from One Project
[**listOrganizationEvents**](EventsApi.md#listOrganizationEvents) | **GET** /api/atlas/v2/orgs/{orgId}/events | Return All Events from One Organization
[**listProjectEvents**](EventsApi.md#listProjectEvents) | **GET** /api/atlas/v2/groups/{groupId}/events | Return All Events from One Project


# **getOrganizationEvent**
> EventViewForOrg getOrganizationEvent()

Returns one event for the specified organization. Events identify significant database, billing, or security activities or status changes. To use this resource, the requesting API Key must have the Organization Member role.  This resource remains under revision and may change.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiGetOrganizationEventRequest = {
  // string | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
  orgId: "4888442a3354817a7320eb61",
  // string | Unique 24-hexadecimal digit string that identifies the event that you want to return. Use the [/events](#tag/Events/operation/listOrganizationEvents) endpoint to retrieve all events to which the authenticated user has access.
  eventId: "bf325375e030fccba0091731",
  // boolean | Flag that indicates whether to include the raw document in the output. The raw document contains additional meta information about the event. (optional)
  includeRaw: false,
};

apiInstance.getOrganizationEvent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access. | defaults to undefined
 **eventId** | [**string**] | Unique 24-hexadecimal digit string that identifies the event that you want to return. Use the [/events](#tag/Events/operation/listOrganizationEvents) endpoint to retrieve all events to which the authenticated user has access. | defaults to undefined
 **includeRaw** | [**boolean**] | Flag that indicates whether to include the raw document in the output. The raw document contains additional meta information about the event. | (optional) defaults to undefined


### Return type

**EventViewForOrg**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized. |  -  |
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProjectEvent**
> EventViewForNdsGroup getProjectEvent()

Returns one event for the specified project. Events identify significant database, billing, or security activities or status changes. To use this resource, the requesting API Key must have the Project Read Only role.  This resource remains under revision and may change.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiGetProjectEventRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Unique 24-hexadecimal digit string that identifies the event that you want to return. Use the [/events](#tag/Events/operation/listProjectEvents) endpoint to retrieve all events to which the authenticated user has access.
  eventId: "bf325375e030fccba0091731",
  // boolean | Flag that indicates whether to include the raw document in the output. The raw document contains additional meta information about the event. (optional)
  includeRaw: false,
};

apiInstance.getProjectEvent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **eventId** | [**string**] | Unique 24-hexadecimal digit string that identifies the event that you want to return. Use the [/events](#tag/Events/operation/listProjectEvents) endpoint to retrieve all events to which the authenticated user has access. | defaults to undefined
 **includeRaw** | [**boolean**] | Flag that indicates whether to include the raw document in the output. The raw document contains additional meta information about the event. | (optional) defaults to undefined


### Return type

**EventViewForNdsGroup**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized. |  -  |
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOrganizationEvents**
> OrgPaginatedEvent listOrganizationEvents()

Returns all events for the specified organization. Events identify significant database, billing, or security activities or status changes. To use this resource, the requesting API Key must have the Organization Member role.  This resource remains under revision and may change.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiListOrganizationEventsRequest = {
  // string | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
  orgId: "4888442a3354817a7320eb61",
  // boolean | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. (optional)
  includeCount: true,
  // number | Number of items that the response returns per page. (optional)
  itemsPerPage: 100,
  // number | Number of the page that displays the current set of the total objects that the response returns. (optional)
  pageNum: 1,
  // Array<string> | Category of incident recorded at this moment in time.  **IMPORTANT**: The complete list of event type values changes frequently. (optional)
  eventType: [
    "eventType_example",
  ],
  // boolean | Flag that indicates whether to include the raw document in the output. The raw document contains additional meta information about the event. (optional)
  includeRaw: false,
  // Date | Date and time from when MongoDB Cloud stops returning events. This parameter uses the <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener noreferrer\">ISO 8601</a> timestamp format in UTC. (optional)
  maxDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Date and time from when MongoDB Cloud starts returning events. This parameter uses the <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener noreferrer\">ISO 8601</a> timestamp format in UTC. (optional)
  minDate: new Date('2021-11-17T23:15:00.06Z'),
};

apiInstance.listOrganizationEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access. | defaults to undefined
 **includeCount** | [**boolean**] | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. | (optional) defaults to undefined
 **itemsPerPage** | [**number**] | Number of items that the response returns per page. | (optional) defaults to 100
 **pageNum** | [**number**] | Number of the page that displays the current set of the total objects that the response returns. | (optional) defaults to 1
 **eventType** | **Array&lt;string&gt;** | Category of incident recorded at this moment in time.  **IMPORTANT**: The complete list of event type values changes frequently. | (optional) defaults to undefined
 **includeRaw** | [**boolean**] | Flag that indicates whether to include the raw document in the output. The raw document contains additional meta information about the event. | (optional) defaults to undefined
 **maxDate** | [**Date**] | Date and time from when MongoDB Cloud stops returning events. This parameter uses the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;ISO 8601&lt;/a&gt; timestamp format in UTC. | (optional) defaults to undefined
 **minDate** | [**Date**] | Date and time from when MongoDB Cloud starts returning events. This parameter uses the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;ISO 8601&lt;/a&gt; timestamp format in UTC. | (optional) defaults to undefined


### Return type

**OrgPaginatedEvent**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProjectEvents**
> GroupPaginatedEvent listProjectEvents()

Returns one event for the specified project. Events identify significant database, billing, or security activities or status changes. To use this resource, the requesting API Key must have the Project Read Only role.  This resource remains under revision and may change.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiListProjectEventsRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // boolean | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. (optional)
  includeCount: true,
  // number | Number of items that the response returns per page. (optional)
  itemsPerPage: 100,
  // number | Number of the page that displays the current set of the total objects that the response returns. (optional)
  pageNum: 1,
  // Array<string> | Human-readable label that identifies the cluster. (optional)
  clusterNames: [
    "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
  ],
  // Array<string> | Category of incident recorded at this moment in time.  **IMPORTANT**: The complete list of event type values changes frequently. (optional)
  eventType: [
    "eventType_example",
  ],
  // Array<string> | Category of event that you would like to exclude from query results, such as CLUSTER_CREATED  **IMPORTANT**: Event type names change frequently. Verify that you specify the event type correctly by checking the complete list of event types. (optional)
  excludedEventType: [
    "excludedEventType_example",
  ],
  // boolean | Flag that indicates whether to include the raw document in the output. The raw document contains additional meta information about the event. (optional)
  includeRaw: false,
  // Date | Date and time from when MongoDB Cloud stops returning events. This parameter uses the <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener noreferrer\">ISO 8601</a> timestamp format in UTC. (optional)
  maxDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Date and time from when MongoDB Cloud starts returning events. This parameter uses the <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener noreferrer\">ISO 8601</a> timestamp format in UTC. (optional)
  minDate: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.listProjectEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **includeCount** | [**boolean**] | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. | (optional) defaults to undefined
 **itemsPerPage** | [**number**] | Number of items that the response returns per page. | (optional) defaults to 100
 **pageNum** | [**number**] | Number of the page that displays the current set of the total objects that the response returns. | (optional) defaults to 1
 **clusterNames** | **Array&lt;string&gt;** | Human-readable label that identifies the cluster. | (optional) defaults to undefined
 **eventType** | **Array&lt;string&gt;** | Category of incident recorded at this moment in time.  **IMPORTANT**: The complete list of event type values changes frequently. | (optional) defaults to undefined
 **excludedEventType** | **Array&lt;string&gt;** | Category of event that you would like to exclude from query results, such as CLUSTER_CREATED  **IMPORTANT**: Event type names change frequently. Verify that you specify the event type correctly by checking the complete list of event types. | (optional) defaults to undefined
 **includeRaw** | [**boolean**] | Flag that indicates whether to include the raw document in the output. The raw document contains additional meta information about the event. | (optional) defaults to undefined
 **maxDate** | [**Date**] | Date and time from when MongoDB Cloud stops returning events. This parameter uses the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;ISO 8601&lt;/a&gt; timestamp format in UTC. | (optional) defaults to undefined
 **minDate** | [**Date**] | Date and time from when MongoDB Cloud starts returning events. This parameter uses the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;ISO 8601&lt;/a&gt; timestamp format in UTC. | (optional) defaults to undefined


### Return type

**GroupPaginatedEvent**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request. |  -  |
**401** | Unauthorized. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


