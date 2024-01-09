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
> BaseNetworkPeeringConnectionSettings createPeeringConnection(baseNetworkPeeringConnectionSettings)

Creates one new network peering connection in the specified project. Network peering allows multiple cloud-hosted applications to securely connect to the same project. To use this resource, the requesting API Key must have the Project Owner role. To learn more about considerations and prerequisites, see the Network Peering Documentation.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworkPeeringApi(configuration);

let body:.NetworkPeeringApiCreatePeeringConnectionRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // BaseNetworkPeeringConnectionSettings | Create one network peering connection.
  baseNetworkPeeringConnectionSettings: {
    containerId: "32b6e34b3d91647abb20e7b8",
    providerName: "providerName_example",
    accepterRegionName: "accepterRegionName_example",
    awsAccountId: "048072888001",
    routeTableCidrBlock: "3253:5e:3:f:cba0:9:7:1",
    vpcId: "vpc-bf325375e030fccba",
    azureDirectoryId: "62ECB020-8429-30cc-01FF-CCfeEe150AC3",
    azureSubscriptionId: "62ECB020-8429-30cc-01FF-CCfeEe150AC3",
    resourceGroupName: "A",
    vnetName: "A",
    gcpProjectId: "ar1c2v7s60",
    networkName: "a1c2v7s6djuy1zmetozkhdomha1bae37b8ocvx8o53ow2eg7p6qw9q",
  },
};

apiInstance.createPeeringConnection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseNetworkPeeringConnectionSettings** | **BaseNetworkPeeringConnectionSettings**| Create one network peering connection. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined


### Return type

**BaseNetworkPeeringConnectionSettings**

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
**403** | Forbidden. |  -  |
**404** | Not Found. |  -  |
**409** | Conflict. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createPeeringContainer**
> CloudProviderContainer createPeeringContainer(cloudProviderContainer)

Creates one new network peering container in the specified project. MongoDB Cloud can deploy Network Peering connections in a network peering container. GCP can have one container per project. AWS and Azure can have one container per cloud provider region. To use this resource, the requesting API Key must have the Project Owner role.

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
    providerName: "providerName_example",
    atlasCidrBlock: "::5:7::%2f8/1%2f096%2f50%2F0%2F06%2f933%2F39/65%2F51/10%2f12%2f3%2f9/86%2f82/65%2f272%2F04%2F77/929%2F2/48%2F166%2f287/52/1%2F6%2f8/8%2F87%2F5/68/15%2F7/42/2/6%2f09%2f976/15",
    region: "region_example",
    regions: [
      "regions_example",
    ],
    regionName: "regionName_example",
  },
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


### Return type

**CloudProviderContainer**

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
**401** | Unauthorized. |  -  |
**403** | Forbidden. |  -  |
**404** | Not Found. |  -  |
**409** | Conflict. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deletePeeringConnection**
> any deletePeeringConnection()

Removes one network peering connection in the specified project. If you Removes the last network peering connection associated with a project, MongoDB Cloud also removes any AWS security groups from the project IP access list. To use this resource, the requesting API Key must have the Project Owner role.

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
**202** | Accepted |  -  |
**404** | Not Found. |  -  |
**409** | Conflict. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deletePeeringContainer**
> any deletePeeringContainer()

Removes one network peering container in the specified project. To use this resource, the requesting API Key must have the Project Owner role.

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
**401** | Unauthorized. |  -  |
**404** | Not Found. |  -  |
**409** | Conflict. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **disablePeering**
> PrivateIPMode disablePeering(privateIPMode)

Disables Connect via Peering Only mode for the specified project. To use this resource, the requesting API Key must have the Project Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworkPeeringApi(configuration);

let body:.NetworkPeeringApiDisablePeeringRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // PrivateIPMode | Disables Connect via Peering Only mode for the specified project.
  privateIPMode: {
    enabled: true,
  },
};

apiInstance.disablePeering(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **privateIPMode** | **PrivateIPMode**| Disables Connect via Peering Only mode for the specified project. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined


### Return type

**PrivateIPMode**

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

# **getPeeringConnection**
> BaseNetworkPeeringConnectionSettings getPeeringConnection()

Returns details about one specified network peering connection in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.

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


### Return type

**BaseNetworkPeeringConnectionSettings**

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

# **getPeeringContainer**
> CloudProviderContainer getPeeringContainer()

Returns details about one network peering container in one specified project. Network peering containers contain network peering connections. To use this resource, the requesting API Key must have the Project Read Only role.

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


### Return type

**CloudProviderContainer**

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
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPeeringConnections**
> PaginatedContainerPeer listPeeringConnections()

Returns details about all network peering connections in the specified project. Network peering allows multiple cloud-hosted applications to securely connect to the same project. To use this resource, the requesting API Key must have the Project Read Only role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworkPeeringApi(configuration);

let body:.NetworkPeeringApiListPeeringConnectionsRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // boolean | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. (optional)
  includeCount: true,
  // number | Number of items that the response returns per page. (optional)
  itemsPerPage: 100,
  // number | Number of the page that displays the current set of the total objects that the response returns. (optional)
  pageNum: 1,
  // string | Cloud service provider to use for this VPC peering connection. (optional)
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
 **includeCount** | [**boolean**] | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. | (optional) defaults to undefined
 **itemsPerPage** | [**number**] | Number of items that the response returns per page. | (optional) defaults to 100
 **pageNum** | [**number**] | Number of the page that displays the current set of the total objects that the response returns. | (optional) defaults to 1
 **providerName** | [**string**] | Cloud service provider to use for this VPC peering connection. | (optional) defaults to 'AWS'


### Return type

**PaginatedContainerPeer**

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

# **listPeeringContainerByCloudProvider**
> PaginatedCloudProviderContainer listPeeringContainerByCloudProvider()

Returns details about all network peering containers in the specified project for the specified cloud provider. If you do not specify the cloud provider, MongoDB Cloud returns details about all network peering containers in the project for Amazon Web Services (AWS). To use this resource, the requesting API Key must have the Project Read Only role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworkPeeringApi(configuration);

let body:.NetworkPeeringApiListPeeringContainerByCloudProviderRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Cloud service provider that serves the desired network peering containers.
  providerName: "AWS",
  // boolean | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. (optional)
  includeCount: true,
  // number | Number of items that the response returns per page. (optional)
  itemsPerPage: 100,
  // number | Number of the page that displays the current set of the total objects that the response returns. (optional)
  pageNum: 1,
};

apiInstance.listPeeringContainerByCloudProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **providerName** | [**string**] | Cloud service provider that serves the desired network peering containers. | defaults to 'AWS'
 **includeCount** | [**boolean**] | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. | (optional) defaults to undefined
 **itemsPerPage** | [**number**] | Number of items that the response returns per page. | (optional) defaults to 100
 **pageNum** | [**number**] | Number of the page that displays the current set of the total objects that the response returns. | (optional) defaults to 1


### Return type

**PaginatedCloudProviderContainer**

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

# **listPeeringContainers**
> PaginatedCloudProviderContainer listPeeringContainers()

Returns details about all network peering containers in the specified project. Network peering containers contain network peering connections. To use this resource, the requesting API Key must have the Project Read Only role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworkPeeringApi(configuration);

let body:.NetworkPeeringApiListPeeringContainersRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // boolean | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. (optional)
  includeCount: true,
  // number | Number of items that the response returns per page. (optional)
  itemsPerPage: 100,
  // number | Number of the page that displays the current set of the total objects that the response returns. (optional)
  pageNum: 1,
};

apiInstance.listPeeringContainers(body).then((data:any) => {
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


### Return type

**PaginatedCloudProviderContainer**

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
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePeeringConnection**
> BaseNetworkPeeringConnectionSettings updatePeeringConnection(baseNetworkPeeringConnectionSettings)

Updates one specified network peering connection in the specified project. To use this resource, the requesting API Key must have the Project Owner role.

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
  // BaseNetworkPeeringConnectionSettings | Modify one network peering connection.
  baseNetworkPeeringConnectionSettings: {
    containerId: "32b6e34b3d91647abb20e7b8",
    providerName: "providerName_example",
    accepterRegionName: "accepterRegionName_example",
    awsAccountId: "048072888001",
    routeTableCidrBlock: "3253:5e:3:f:cba0:9:7:1",
    vpcId: "vpc-bf325375e030fccba",
    azureDirectoryId: "62ECB020-8429-30cc-01FF-CCfeEe150AC3",
    azureSubscriptionId: "62ECB020-8429-30cc-01FF-CCfeEe150AC3",
    resourceGroupName: "A",
    vnetName: "A",
    gcpProjectId: "ar1c2v7s60",
    networkName: "a1c2v7s6djuy1zmetozkhdomha1bae37b8ocvx8o53ow2eg7p6qw9q",
  },
};

apiInstance.updatePeeringConnection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseNetworkPeeringConnectionSettings** | **BaseNetworkPeeringConnectionSettings**| Modify one network peering connection. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **peerId** | [**string**] | Unique 24-hexadecimal digit string that identifies the network peering connection that you want to update. | defaults to undefined


### Return type

**BaseNetworkPeeringConnectionSettings**

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
**403** | Forbidden. |  -  |
**404** | Not Found. |  -  |
**409** | Conflict. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePeeringContainer**
> CloudProviderContainer updatePeeringContainer(cloudProviderContainer)

Updates the network details and labels of one specified network peering container in the specified project. To use this resource, the requesting API Key must have the Project Owner role.

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
    providerName: "providerName_example",
    atlasCidrBlock: "::5:7::%2f8/1%2f096%2f50%2F0%2F06%2f933%2F39/65%2F51/10%2f12%2f3%2f9/86%2f82/65%2f272%2F04%2F77/929%2F2/48%2F166%2f287/52/1%2F6%2f8/8%2F87%2F5/68/15%2F7/42/2/6%2f09%2f976/15",
    region: "region_example",
    regions: [
      "regions_example",
    ],
    regionName: "regionName_example",
  },
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


### Return type

**CloudProviderContainer**

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
**401** | Unauthorized. |  -  |
**403** | Forbidden. |  -  |
**404** | Not Found. |  -  |
**409** | Conflict. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **verifyConnectViaPeeringOnlyModeForOneProject**
> PrivateIPMode verifyConnectViaPeeringOnlyModeForOneProject()

Verifies if someone set the specified project to **Connect via Peering Only** mode. To use this resource, the requesting API Key must have the Project Read Only role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworkPeeringApi(configuration);

let body:.NetworkPeeringApiVerifyConnectViaPeeringOnlyModeForOneProjectRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
};

apiInstance.verifyConnectViaPeeringOnlyModeForOneProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined


### Return type

**PrivateIPMode**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


