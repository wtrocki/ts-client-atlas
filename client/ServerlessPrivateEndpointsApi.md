# .ServerlessPrivateEndpointsApi

All URIs are relative to *https://cloud.mongodb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createServerlessPrivateEndpoint**](ServerlessPrivateEndpointsApi.md#createServerlessPrivateEndpoint) | **POST** /api/atlas/v2/groups/{groupId}/privateEndpoint/serverless/instance/{instanceName}/endpoint | Create One Private Endpoint for One Serverless Instance
[**deleteServerlessPrivateEndpoint**](ServerlessPrivateEndpointsApi.md#deleteServerlessPrivateEndpoint) | **DELETE** /api/atlas/v2/groups/{groupId}/privateEndpoint/serverless/instance/{instanceName}/endpoint/{endpointId} | Remove One Private Endpoint for One Serverless Instance
[**getServerlessPrivateEndpoint**](ServerlessPrivateEndpointsApi.md#getServerlessPrivateEndpoint) | **GET** /api/atlas/v2/groups/{groupId}/privateEndpoint/serverless/instance/{instanceName}/endpoint/{endpointId} | Return One Private Endpoint for One Serverless Instance
[**listServerlessPrivateEndpoints**](ServerlessPrivateEndpointsApi.md#listServerlessPrivateEndpoints) | **GET** /api/atlas/v2/groups/{groupId}/privateEndpoint/serverless/instance/{instanceName}/endpoint | Return All Private Endpoints for One Serverless Instance
[**updateServerlessPrivateEndpoint**](ServerlessPrivateEndpointsApi.md#updateServerlessPrivateEndpoint) | **PATCH** /api/atlas/v2/groups/{groupId}/privateEndpoint/serverless/instance/{instanceName}/endpoint/{endpointId} | Update One Private Endpoint for One Serverless Instance


# **createServerlessPrivateEndpoint**
> ServerlessTenantEndpoint createServerlessPrivateEndpoint(serverlessTenantCreateRequest)

Creates one private endpoint for one serverless instance. To use this resource, the requesting API Key must have the Project Owner role.   A new endpoint won't be immediately available after creation.  Read the steps in the linked tutorial for detailed guidance.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ServerlessPrivateEndpointsApi(configuration);

let body:.ServerlessPrivateEndpointsApiCreateServerlessPrivateEndpointRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the serverless instance for which the tenant endpoint will be created.
  instanceName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
  // ServerlessTenantCreateRequest | Information about the Private Endpoint to create for the Serverless Instance.
  serverlessTenantCreateRequest: {
    comment: "comment_example",
  },
};

apiInstance.createServerlessPrivateEndpoint(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverlessTenantCreateRequest** | **ServerlessTenantCreateRequest**| Information about the Private Endpoint to create for the Serverless Instance. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **instanceName** | [**string**] | Human-readable label that identifies the serverless instance for which the tenant endpoint will be created. | defaults to undefined


### Return type

**ServerlessTenantEndpoint**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.atlas.2023-01-01+json
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request. |  -  |
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteServerlessPrivateEndpoint**
> any deleteServerlessPrivateEndpoint()

Remove one private endpoint from one serverless instance. To use this resource, the requesting API Key must have the Project Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ServerlessPrivateEndpointsApi(configuration);

let body:.ServerlessPrivateEndpointsApiDeleteServerlessPrivateEndpointRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the serverless instance from which the tenant endpoint will be removed.
  instanceName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
  // string | Unique 24-hexadecimal digit string that identifies the tenant endpoint which will be removed.
  endpointId: "bf325375e030fccba0091731",
};

apiInstance.deleteServerlessPrivateEndpoint(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **instanceName** | [**string**] | Human-readable label that identifies the serverless instance from which the tenant endpoint will be removed. | defaults to undefined
 **endpointId** | [**string**] | Unique 24-hexadecimal digit string that identifies the tenant endpoint which will be removed. | defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | This endpoint does not return a response body. |  -  |
**400** | Bad Request. |  -  |
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getServerlessPrivateEndpoint**
> ServerlessTenantEndpoint getServerlessPrivateEndpoint()

Return one private endpoint for one serverless instance. Identify this endpoint using its unique ID. You must have at least the Project Read Only role for the project to successfully call this resource.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ServerlessPrivateEndpointsApi(configuration);

let body:.ServerlessPrivateEndpointsApiGetServerlessPrivateEndpointRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the serverless instance associated with the tenant endpoint.
  instanceName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
  // string | Unique 24-hexadecimal digit string that identifies the tenant endpoint.
  endpointId: "bf325375e030fccba0091731",
};

apiInstance.getServerlessPrivateEndpoint(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **instanceName** | [**string**] | Human-readable label that identifies the serverless instance associated with the tenant endpoint. | defaults to undefined
 **endpointId** | [**string**] | Unique 24-hexadecimal digit string that identifies the tenant endpoint. | defaults to undefined


### Return type

**ServerlessTenantEndpoint**

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
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listServerlessPrivateEndpoints**
> Array<ServerlessTenantEndpoint> listServerlessPrivateEndpoints()

Returns all private endpoints for one serverless instance. You must have at least the Project Read Only role for the project to successfully call this resource.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ServerlessPrivateEndpointsApi(configuration);

let body:.ServerlessPrivateEndpointsApiListServerlessPrivateEndpointsRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the serverless instance associated with the tenant endpoint.
  instanceName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
};

apiInstance.listServerlessPrivateEndpoints(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **instanceName** | [**string**] | Human-readable label that identifies the serverless instance associated with the tenant endpoint. | defaults to undefined


### Return type

**Array<ServerlessTenantEndpoint>**

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
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateServerlessPrivateEndpoint**
> ServerlessTenantEndpoint updateServerlessPrivateEndpoint(serverlessTenantEndpointUpdate)

Updates one private endpoint for one serverless instance. To use this resource, the requesting API Key must have the Project Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ServerlessPrivateEndpointsApi(configuration);

let body:.ServerlessPrivateEndpointsApiUpdateServerlessPrivateEndpointRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the serverless instance associated with the tenant endpoint that will be updated.
  instanceName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
  // string | Unique 24-hexadecimal digit string that identifies the tenant endpoint which will be updated.
  endpointId: "bf325375e030fccba0091731",
  // ServerlessTenantEndpointUpdate | Object used for update.
  serverlessTenantEndpointUpdate: {
    comment: "comment_example",
    providerName: "providerName_example",
    cloudProviderEndpointId: "/subscriptions/bf325375-e030-fccb-a009-17317c574773/resourceGroups/privateLink/providers/Microsoft.Network/privateEndpoints/8cfa8KoK01UH0)8)kQEFkLkvyHfCdEAAg8zj4gGu)(shjbE0Eva55tk-L",
    privateEndpointIpAddress: "3253:5e:3:f:cba0:9:7:1",
  },
};

apiInstance.updateServerlessPrivateEndpoint(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverlessTenantEndpointUpdate** | **ServerlessTenantEndpointUpdate**| Object used for update. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **instanceName** | [**string**] | Human-readable label that identifies the serverless instance associated with the tenant endpoint that will be updated. | defaults to undefined
 **endpointId** | [**string**] | Unique 24-hexadecimal digit string that identifies the tenant endpoint which will be updated. | defaults to undefined


### Return type

**ServerlessTenantEndpoint**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.atlas.2023-01-01+json
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request. |  -  |
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


