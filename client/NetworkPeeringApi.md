# .NetworkPeeringApi

All URIs are relative to *https://cloud.mongodb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPeeringConnection**](NetworkPeeringApi.md#createPeeringConnection) | **POST** /api/atlas/v2/groups/{groupId}/peers | Create One New Network Peering Connection
[**createPeeringContainer**](NetworkPeeringApi.md#createPeeringContainer) | **POST** /api/atlas/v2/groups/{groupId}/containers | Create One New Network Peering Container
[**deletePeeringConnection**](NetworkPeeringApi.md#deletePeeringConnection) | **DELETE** /api/atlas/v2/groups/{groupId}/peers/{peerId} | Remove One Existing Network Peering Connection
[**deletePeeringContainer**](NetworkPeeringApi.md#deletePeeringContainer) | **DELETE** /api/atlas/v2/groups/{groupId}/containers/{containerId} | Remove One Network Peering Container
[**disablePeering**](NetworkPeeringApi.md#disablePeering) | **PATCH** /api/atlas/v2/groups/{groupId}/privateIpMode | Disable Connect via Peering Only Mode for One Project
[**getPeeringConnection**](NetworkPeeringApi.md#getPeeringConnection) | **GET** /api/atlas/v2/groups/{groupId}/peers/{peerId} | Return One Network Peering Connection in One Project
[**getPeeringContainer**](NetworkPeeringApi.md#getPeeringContainer) | **GET** /api/atlas/v2/groups/{groupId}/containers/{containerId} | Return One Network Peering Container
[**listPeeringConnections**](NetworkPeeringApi.md#listPeeringConnections) | **GET** /api/atlas/v2/groups/{groupId}/peers | Return All Network Peering Connections in One Project
[**listPeeringContainerByCloudProvider**](NetworkPeeringApi.md#listPeeringContainerByCloudProvider) | **GET** /api/atlas/v2/groups/{groupId}/containers | Return All Network Peering Containers in One Project for One Cloud Provider
[**listPeeringContainers**](NetworkPeeringApi.md#listPeeringContainers) | **GET** /api/atlas/v2/groups/{groupId}/containers/all | Return All Network Peering Containers in One Project
[**updatePeeringConnection**](NetworkPeeringApi.md#updatePeeringConnection) | **PATCH** /api/atlas/v2/groups/{groupId}/peers/{peerId} | Update One New Network Peering Connection
[**updatePeeringContainer**](NetworkPeeringApi.md#updatePeeringContainer) | **PATCH** /api/atlas/v2/groups/{groupId}/containers/{containerId} | Update One Network Peering Container
[**verifyConnectViaPeeringOnlyModeForOneProject**](NetworkPeeringApi.md#verifyConnectViaPeeringOnlyModeForOneProject) | **GET** /api/atlas/v2/groups/{groupId}/privateIpMode | Verify Connect via Peering Only Mode for One Project


# **createPeeringConnection**
> CreatePeeringConnection200Response createPeeringConnection(apiAtlasContainerPeerViewRequest)

Creates one new network peering connection in the specified project. Network peering allows multiple cloud-hosted applications to securely connect to the same project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List. To learn more about considerations and prerequisites, see the Network Peering Documentation.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworkPeeringApi(configuration);

let body:.NetworkPeeringApiCreatePeeringConnectionRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // ApiAtlasContainerPeerViewRequest | Create one network peering connection.
  apiAtlasContainerPeerViewRequest: ,
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
};

apiInstance.createPeeringConnection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiAtlasContainerPeerViewRequest** | **ApiAtlasContainerPeerViewRequest**| Create one network peering connection. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**CreatePeeringConnection200Response**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.atlas.2023-01-01+json
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createPeeringContainer**
> CloudProviderContainer createPeeringContainer(cloudProviderContainer)

Creates one new network peering container in the specified project. MongoDB Cloud can deploy Network Peering connections in a network peering container. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworkPeeringApi(configuration);

let body:.NetworkPeeringApiCreatePeeringContainerRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // CloudProviderContainer | Creates one new network peering container in the specified project.
  cloudProviderContainer: {
    atlasCidrBlock: "::7:e0:0/21%2f096%2f50%2F0%2F06%2f933%2F39/65%2F51/10%2f12%2f3%2f9/86%2f82/65%2f272%2F04%2F77/929%2F2/48%2F166%2f287/52/1%2F6%2f8/8%2F87%2F5/68/15%2F7/42/2/6%2f09%2f976/15/3%2f2/89/13/57/639%2f3/2/35%2F0/50/057/279%2F060/2/6/62%2f41%2f4/979%2f986%2F954%2f61%2F94%2F62/819/84/173/796/220/825/77%2F730",
    region: "US_CENTRAL",
    providerName: "AWS",
  },
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
};

apiInstance.createPeeringContainer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudProviderContainer** | **CloudProviderContainer**| Creates one new network peering container in the specified project. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**CloudProviderContainer**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.atlas.2023-01-01+json
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deletePeeringConnection**
> void deletePeeringConnection()

Removes one network peering connection in the specified project. If you Removes the last network peering connection associated with a project, MongoDB Cloud also removes any AWS security groups from the project IP access list. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworkPeeringApi(configuration);

let body:.NetworkPeeringApiDeletePeeringConnectionRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Unique 24-hexadecimal digit string that identifies the network peering connection that you want to delete.
  peerId: "bf325375e030fccba0091731",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
};

apiInstance.deletePeeringConnection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **peerId** | [**string**] | Unique 24-hexadecimal digit string that identifies the network peering connection that you want to delete. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**void**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deletePeeringContainer**
> void deletePeeringContainer()

Removes one network peering container in the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworkPeeringApi(configuration);

let body:.NetworkPeeringApiDeletePeeringContainerRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Unique 24-hexadecimal digit string that identifies the MongoDB Cloud network container that you want to remove.
  containerId: "32b6e34b3d91647abb20e7b8",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
};

apiInstance.deletePeeringContainer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **containerId** | [**string**] | Unique 24-hexadecimal digit string that identifies the MongoDB Cloud network container that you want to remove. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**void**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | This endpoint does not return a response body. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **disablePeering**
> PrivateIPModeView disablePeering(privateIPModeView)

Disables Connect via Peering Only mode for the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworkPeeringApi(configuration);

let body:.NetworkPeeringApiDisablePeeringRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // PrivateIPModeView | Disables Connect via Peering Only mode for the specified project.
  privateIPModeView: {
    enabled: true,
  },
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
};

apiInstance.disablePeering(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **privateIPModeView** | **PrivateIPModeView**| Disables Connect via Peering Only mode for the specified project. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**PrivateIPModeView**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.atlas.2023-01-01+json
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPeeringConnection**
> GetPeeringConnection200Response getPeeringConnection()

Returns details about one specified network peering connection in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworkPeeringApi(configuration);

let body:.NetworkPeeringApiGetPeeringConnectionRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Unique 24-hexadecimal digit string that identifies the network peering connection that you want to retrieve.
  peerId: "bf325375e030fccba0091731",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
};

apiInstance.getPeeringConnection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **peerId** | [**string**] | Unique 24-hexadecimal digit string that identifies the network peering connection that you want to retrieve. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**GetPeeringConnection200Response**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPeeringContainer**
> CloudProviderContainer getPeeringContainer()

Returns details about one network peering container in one specified project. Network peering containers contain network peering connections. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworkPeeringApi(configuration);

let body:.NetworkPeeringApiGetPeeringContainerRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Unique 24-hexadecimal digit string that identifies the MongoDB Cloud network container that you want to remove.
  containerId: "32b6e34b3d91647abb20e7b8",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
};

apiInstance.getPeeringContainer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **containerId** | [**string**] | Unique 24-hexadecimal digit string that identifies the MongoDB Cloud network container that you want to remove. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**CloudProviderContainer**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPeeringConnections**
> ListPeeringConnections200Response listPeeringConnections()

Returns details about all network peering connections in the specified project. Network peering allows multiple cloud-hosted applications to securely connect to the same project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworkPeeringApi(configuration);

let body:.NetworkPeeringApiListPeeringConnectionsRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. (optional)
  includeCount: true,
  // number | Number of items that the response returns per page. (optional)
  itemsPerPage: 100,
  // number | Number of the page that displays the current set of the total objects that the response returns. (optional)
  pageNum: 1,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
  // 'AWS' | 'AZURE' | 'GCP' | Cloud service provider to use for this VPC peering connection. (optional)
  providerName: "AWS",
};

apiInstance.listPeeringConnections(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **includeCount** | [**boolean**] | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. | (optional) defaults to undefined
 **itemsPerPage** | [**number**] | Number of items that the response returns per page. | (optional) defaults to 100
 **pageNum** | [**number**] | Number of the page that displays the current set of the total objects that the response returns. | (optional) defaults to 1
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined
 **providerName** | [**&#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39;**]**Array<&#39;AWS&#39; &#124; &#39;AZURE&#39; &#124; &#39;GCP&#39;>** | Cloud service provider to use for this VPC peering connection. | (optional) defaults to 'AWS'


### Return type

**ListPeeringConnections200Response**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPeeringContainerByCloudProvider**
> PaginatedCloudProviderContainerView listPeeringContainerByCloudProvider()

Returns details about all network peering containers in the specified project for the specified cloud provider. If you do not specify the cloud provider, MongoDB Cloud returns details about all network peering containers in the project for Amazon Web Services (AWS). To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworkPeeringApi(configuration);

let body:.NetworkPeeringApiListPeeringContainerByCloudProviderRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // 'AWS' | 'AZURE' | 'GCP' | Cloud service provider that serves the desired network peering containers.
  providerName: "AWS",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. (optional)
  includeCount: true,
  // number | Number of items that the response returns per page. (optional)
  itemsPerPage: 100,
  // number | Number of the page that displays the current set of the total objects that the response returns. (optional)
  pageNum: 1,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
};

apiInstance.listPeeringContainerByCloudProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **providerName** | [**&#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39;**]**Array<&#39;AWS&#39; &#124; &#39;AZURE&#39; &#124; &#39;GCP&#39;>** | Cloud service provider that serves the desired network peering containers. | defaults to 'AWS'
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **includeCount** | [**boolean**] | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. | (optional) defaults to undefined
 **itemsPerPage** | [**number**] | Number of items that the response returns per page. | (optional) defaults to 100
 **pageNum** | [**number**] | Number of the page that displays the current set of the total objects that the response returns. | (optional) defaults to 1
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**PaginatedCloudProviderContainerView**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPeeringContainers**
> PaginatedCloudProviderContainerView listPeeringContainers()

Returns details about all network peering containers in the specified project. Network peering containers contain network peering connections. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworkPeeringApi(configuration);

let body:.NetworkPeeringApiListPeeringContainersRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. (optional)
  includeCount: true,
  // number | Number of items that the response returns per page. (optional)
  itemsPerPage: 100,
  // number | Number of the page that displays the current set of the total objects that the response returns. (optional)
  pageNum: 1,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
};

apiInstance.listPeeringContainers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **includeCount** | [**boolean**] | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. | (optional) defaults to undefined
 **itemsPerPage** | [**number**] | Number of items that the response returns per page. | (optional) defaults to 100
 **pageNum** | [**number**] | Number of the page that displays the current set of the total objects that the response returns. | (optional) defaults to 1
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**PaginatedCloudProviderContainerView**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePeeringConnection**
> GetPeeringConnection200Response updatePeeringConnection(apiAtlasContainerPeerViewRequest)

Updates one specified network peering connection in the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworkPeeringApi(configuration);

let body:.NetworkPeeringApiUpdatePeeringConnectionRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Unique 24-hexadecimal digit string that identifies the network peering connection that you want to update.
  peerId: "bf325375e030fccba0091731",
  // ApiAtlasContainerPeerViewRequest | Modify one network peering connection.
  apiAtlasContainerPeerViewRequest: ,
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
};

apiInstance.updatePeeringConnection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiAtlasContainerPeerViewRequest** | **ApiAtlasContainerPeerViewRequest**| Modify one network peering connection. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **peerId** | [**string**] | Unique 24-hexadecimal digit string that identifies the network peering connection that you want to update. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**GetPeeringConnection200Response**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.atlas.2023-01-01+json
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePeeringContainer**
> CloudProviderContainer updatePeeringContainer(cloudProviderContainer)

Updates the network details and labels of one specified network peering container in the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworkPeeringApi(configuration);

let body:.NetworkPeeringApiUpdatePeeringContainerRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Unique 24-hexadecimal digit string that identifies the MongoDB Cloud network container that you want to remove.
  containerId: "32b6e34b3d91647abb20e7b8",
  // CloudProviderContainer | Updates the network details and labels of one specified network peering container in the specified project.
  cloudProviderContainer: {
    atlasCidrBlock: "::7:e0:0/21%2f096%2f50%2F0%2F06%2f933%2F39/65%2F51/10%2f12%2f3%2f9/86%2f82/65%2f272%2F04%2F77/929%2F2/48%2F166%2f287/52/1%2F6%2f8/8%2F87%2F5/68/15%2F7/42/2/6%2f09%2f976/15/3%2f2/89/13/57/639%2f3/2/35%2F0/50/057/279%2F060/2/6/62%2f41%2f4/979%2f986%2F954%2f61%2F94%2F62/819/84/173/796/220/825/77%2F730",
    region: "US_CENTRAL",
    providerName: "AWS",
  },
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
};

apiInstance.updatePeeringContainer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudProviderContainer** | **CloudProviderContainer**| Updates the network details and labels of one specified network peering container in the specified project. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **containerId** | [**string**] | Unique 24-hexadecimal digit string that identifies the MongoDB Cloud network container that you want to remove. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**CloudProviderContainer**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.atlas.2023-01-01+json
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **verifyConnectViaPeeringOnlyModeForOneProject**
> PrivateIPModeView verifyConnectViaPeeringOnlyModeForOneProject()

Verifies if someone set the specified project to **Connect via Peering Only** mode. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworkPeeringApi(configuration);

let body:.NetworkPeeringApiVerifyConnectViaPeeringOnlyModeForOneProjectRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
};

apiInstance.verifyConnectViaPeeringOnlyModeForOneProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**PrivateIPModeView**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


