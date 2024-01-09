# .PrivateEndpointServicesApi

All URIs are relative to *https://cloud.mongodb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPrivateEndpoint**](PrivateEndpointServicesApi.md#createPrivateEndpoint) | **POST** /api/atlas/v2/groups/{groupId}/privateEndpoint/{cloudProvider}/endpointService/{endpointServiceId}/endpoint | Create One Private Endpoint for One Provider
[**createPrivateEndpointService**](PrivateEndpointServicesApi.md#createPrivateEndpointService) | **POST** /api/atlas/v2/groups/{groupId}/privateEndpoint/endpointService | Create One Private Endpoint Service for One Provider
[**deletePrivateEndpoint**](PrivateEndpointServicesApi.md#deletePrivateEndpoint) | **DELETE** /api/atlas/v2/groups/{groupId}/privateEndpoint/{cloudProvider}/endpointService/{endpointServiceId}/endpoint/{endpointId} | Remove One Private Endpoint for One Provider
[**deletePrivateEndpointService**](PrivateEndpointServicesApi.md#deletePrivateEndpointService) | **DELETE** /api/atlas/v2/groups/{groupId}/privateEndpoint/{cloudProvider}/endpointService/{endpointServiceId} | Remove One Private Endpoint Service for One Provider
[**getPrivateEndpoint**](PrivateEndpointServicesApi.md#getPrivateEndpoint) | **GET** /api/atlas/v2/groups/{groupId}/privateEndpoint/{cloudProvider}/endpointService/{endpointServiceId}/endpoint/{endpointId} | Return One Private Endpoint for One Provider
[**getPrivateEndpointService**](PrivateEndpointServicesApi.md#getPrivateEndpointService) | **GET** /api/atlas/v2/groups/{groupId}/privateEndpoint/{cloudProvider}/endpointService/{endpointServiceId} | Return One Private Endpoint Service for One Provider
[**getRegionalizedPrivateEndpointSetting**](PrivateEndpointServicesApi.md#getRegionalizedPrivateEndpointSetting) | **GET** /api/atlas/v2/groups/{groupId}/privateEndpoint/regionalMode | Return Regionalized Private Endpoint Status
[**listPrivateEndpointServices**](PrivateEndpointServicesApi.md#listPrivateEndpointServices) | **GET** /api/atlas/v2/groups/{groupId}/privateEndpoint/{cloudProvider}/endpointService | Return All Private Endpoint Services for One Provider
[**toggleRegionalizedPrivateEndpointSetting**](PrivateEndpointServicesApi.md#toggleRegionalizedPrivateEndpointSetting) | **PATCH** /api/atlas/v2/groups/{groupId}/privateEndpoint/regionalMode | Toggle Regionalized Private Endpoint Status


# **createPrivateEndpoint**
> PrivateLinkEndpoint createPrivateEndpoint(createEndpointRequest)

Creates one private endpoint for the specified cloud service provider. This cloud service provider manages the private endpoint service, which in turn manages the private endpoints for the project. To use this resource, the requesting API Key must have the Project Owner role. To learn more about considerations, limitations, and prerequisites, see the MongoDB documentation for setting up a private endpoint.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PrivateEndpointServicesApi(configuration);

let body:.PrivateEndpointServicesApiCreatePrivateEndpointRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Cloud service provider that manages this private endpoint.
  cloudProvider: "AWS",
  // string | Unique 24-hexadecimal digit string that identifies the private endpoint service for which you want to create a private endpoint.
  endpointServiceId: "bf325375e030fccba0091731",
  // CreateEndpointRequest | Creates one private endpoint for the specified cloud service provider.
  createEndpointRequest: {
    id: "/subscriptions/cba6d9c6-1d3f-3c11-03cb-c705d895e636/resourcegroups/qrRTqi4TSN)7yB5YLRjVDveH3.yLzpNR7Br0D3-SGrU3j0.0/providers/Microsoft.Network/privateEndpoints/pVP(vb(XeckpxtXzP0NaOsDjeWDbOK)DX8A2j2E_vBYL2.GEYIdln",
    privateEndpointIPAddress: "3253:5e:3:f:cba0:9:7:1",
    endpointGroupName: "endpointGroupName_example",
    endpoints: [
      {
        endpointName: "endpointName_example",
        ipAddress: "3253:5e:3:f:cba0:9:7:1",
      },
    ],
    gcpProjectId: "p-fdeeb3e43b8e733e5ab627b1",
  },
};

apiInstance.createPrivateEndpoint(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEndpointRequest** | **CreateEndpointRequest**| Creates one private endpoint for the specified cloud service provider. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **cloudProvider** | [**string**] | Cloud service provider that manages this private endpoint. | defaults to 'AWS'
 **endpointServiceId** | [**string**] | Unique 24-hexadecimal digit string that identifies the private endpoint service for which you want to create a private endpoint. | defaults to undefined


### Return type

**PrivateLinkEndpoint**

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
**402** | Payment Required. |  -  |
**404** | Not Found. |  -  |
**409** | Conflict. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createPrivateEndpointService**
> EndpointService createPrivateEndpointService(cloudProviderEndpointServiceRequest)

Creates one private endpoint service for the specified cloud service provider. This cloud service provider manages the private endpoint service for the project. When you create a private endpoint service, MongoDB Cloud creates a network container in the project for the cloud provider for which you create the private endpoint service if one doesn't already exist. To use this resource, the requesting API Key must have the Project Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PrivateEndpointServicesApi(configuration);

let body:.PrivateEndpointServicesApiCreatePrivateEndpointServiceRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // CloudProviderEndpointServiceRequest | Creates one private endpoint for the specified cloud service provider.
  cloudProviderEndpointServiceRequest: {
    providerName: "providerName_example",
    region: "region_example",
  },
};

apiInstance.createPrivateEndpointService(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudProviderEndpointServiceRequest** | **CloudProviderEndpointServiceRequest**| Creates one private endpoint for the specified cloud service provider. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined


### Return type

**EndpointService**

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
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deletePrivateEndpoint**
> any deletePrivateEndpoint()

Removes one private endpoint from the specified project and private endpoint service, as managed by the specified cloud service provider. When the last private endpoint is removed from a given private endpoint service, that private endpoint service is also removed. To use this resource, the requesting API Key must have the Project Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PrivateEndpointServicesApi(configuration);

let body:.PrivateEndpointServicesApiDeletePrivateEndpointRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Cloud service provider that manages this private endpoint.
  cloudProvider: "AWS",
  // string | Unique string that identifies the private endpoint you want to delete. The format of the **endpointId** parameter differs for AWS and Azure. You must URL encode the **endpointId** for Azure private endpoints.
  endpointId: "%2fsubscriptions%2F25375e03-0fcc-ba00-9173-17c574773100%2fresourcegroups%2F8KoK01UH0)8)kQEFkLkvyHfCdEAAg8zj4gGu)(shjbE0Eva55tk-LlJwL3CTLxzWhej1zFvhjFRboDzLsp6gf0OAK%2fproviders%2fMicrosoft.Network%2fprivateEndpoints%2Fl(uFEEYdpfNsNsac1)SIo6lS-8RLNCj.v",
  // string | Unique 24-hexadecimal digit string that identifies the private endpoint service from which you want to delete a private endpoint.
  endpointServiceId: "bf325375e030fccba0091731",
};

apiInstance.deletePrivateEndpoint(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **cloudProvider** | [**string**] | Cloud service provider that manages this private endpoint. | defaults to 'AWS'
 **endpointId** | [**string**] | Unique string that identifies the private endpoint you want to delete. The format of the **endpointId** parameter differs for AWS and Azure. You must URL encode the **endpointId** for Azure private endpoints. | defaults to undefined
 **endpointServiceId** | [**string**] | Unique 24-hexadecimal digit string that identifies the private endpoint service from which you want to delete a private endpoint. | defaults to undefined


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
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deletePrivateEndpointService**
> any deletePrivateEndpointService()

Removes one private endpoint service from the specified project. This cloud service provider manages the private endpoint service that belongs to the project. To use this resource, the requesting API Key must have the Project Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PrivateEndpointServicesApi(configuration);

let body:.PrivateEndpointServicesApiDeletePrivateEndpointServiceRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Cloud service provider that manages this private endpoint service.
  cloudProvider: "AWS",
  // string | Unique 24-hexadecimal digit string that identifies the private endpoint service that you want to delete.
  endpointServiceId: "bf325375e030fccba0091731",
};

apiInstance.deletePrivateEndpointService(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **cloudProvider** | [**string**] | Cloud service provider that manages this private endpoint service. | defaults to 'AWS'
 **endpointServiceId** | [**string**] | Unique 24-hexadecimal digit string that identifies the private endpoint service that you want to delete. | defaults to undefined


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
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPrivateEndpoint**
> PrivateLinkEndpoint getPrivateEndpoint()

Returns the connection state of the specified private endpoint. The private endpoint service manages this private endpoint which belongs to one project hosted from one cloud service provider. To use this resource, the requesting API Key must have the Project Read Only role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PrivateEndpointServicesApi(configuration);

let body:.PrivateEndpointServicesApiGetPrivateEndpointRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Cloud service provider that manages this private endpoint.
  cloudProvider: "AWS",
  // string | Unique string that identifies the private endpoint you want to return. The format of the **endpointId** parameter differs for AWS and Azure. You must URL encode the **endpointId** for Azure private endpoints.
  endpointId: "%2fsubscriptions%2F25375e03-0fcc-ba00-9173-17c574773100%2fresourcegroups%2F8KoK01UH0)8)kQEFkLkvyHfCdEAAg8zj4gGu)(shjbE0Eva55tk-LlJwL3CTLxzWhej1zFvhjFRboDzLsp6gf0OAK%2fproviders%2fMicrosoft.Network%2fprivateEndpoints%2Fl(uFEEYdpfNsNsac1)SIo6lS-8RLNCj.v",
  // string | Unique 24-hexadecimal digit string that identifies the private endpoint service for which you want to return a private endpoint.
  endpointServiceId: "bf325375e030fccba0091731",
};

apiInstance.getPrivateEndpoint(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **cloudProvider** | [**string**] | Cloud service provider that manages this private endpoint. | defaults to 'AWS'
 **endpointId** | [**string**] | Unique string that identifies the private endpoint you want to return. The format of the **endpointId** parameter differs for AWS and Azure. You must URL encode the **endpointId** for Azure private endpoints. | defaults to undefined
 **endpointServiceId** | [**string**] | Unique 24-hexadecimal digit string that identifies the private endpoint service for which you want to return a private endpoint. | defaults to undefined


### Return type

**PrivateLinkEndpoint**

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

# **getPrivateEndpointService**
> EndpointService getPrivateEndpointService()

Returns the name, interfaces, and state of the specified private endpoint service from one project. The cloud service provider hosted this private endpoint service that belongs to the project. To use this resource, the requesting API Key must have the Project Read Only role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PrivateEndpointServicesApi(configuration);

let body:.PrivateEndpointServicesApiGetPrivateEndpointServiceRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Cloud service provider that manages this private endpoint service.
  cloudProvider: "AWS",
  // string | Unique 24-hexadecimal digit string that identifies the private endpoint service that you want to return.
  endpointServiceId: "bf325375e030fccba0091731",
};

apiInstance.getPrivateEndpointService(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **cloudProvider** | [**string**] | Cloud service provider that manages this private endpoint service. | defaults to 'AWS'
 **endpointServiceId** | [**string**] | Unique 24-hexadecimal digit string that identifies the private endpoint service that you want to return. | defaults to undefined


### Return type

**EndpointService**

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

# **getRegionalizedPrivateEndpointSetting**
> ProjectSettingItem getRegionalizedPrivateEndpointSetting()

Checks whether each region in the specified cloud service provider can create multiple private endpoints per region. The cloud service provider manages the private endpoint for the project. To use this resource, the requesting API Key must have the Project Read Only role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PrivateEndpointServicesApi(configuration);

let body:.PrivateEndpointServicesApiGetRegionalizedPrivateEndpointSettingRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
};

apiInstance.getRegionalizedPrivateEndpointSetting(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined


### Return type

**ProjectSettingItem**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden. |  -  |
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPrivateEndpointServices**
> Array<EndpointService> listPrivateEndpointServices()

Returns the name, interfaces, and state of all private endpoint services for the specified cloud service provider. This cloud service provider manages the private endpoint service for the project. To use this resource, the requesting API Key must have the Project Read Only role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PrivateEndpointServicesApi(configuration);

let body:.PrivateEndpointServicesApiListPrivateEndpointServicesRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Cloud service provider that manages this private endpoint service.
  cloudProvider: "AWS",
};

apiInstance.listPrivateEndpointServices(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **cloudProvider** | [**string**] | Cloud service provider that manages this private endpoint service. | defaults to 'AWS'


### Return type

**Array<EndpointService>**

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

# **toggleRegionalizedPrivateEndpointSetting**
> ProjectSettingItem toggleRegionalizedPrivateEndpointSetting(projectSettingItem)

Enables or disables the ability to create multiple private endpoints per region in all cloud service providers in one project. The cloud service provider manages the private endpoints for the project. Connection strings to existing multi-region and global sharded clusters change when you enable this setting. You must update your applications to use the new connection strings. This might cause downtime. To use this resource, the requesting API Key must have the Project Owner role and all clusters in the deployment must be sharded clusters. Once enabled, you cannot create replica sets.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PrivateEndpointServicesApi(configuration);

let body:.PrivateEndpointServicesApiToggleRegionalizedPrivateEndpointSettingRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // ProjectSettingItem | Enables or disables the ability to create multiple private endpoints per region in all cloud service providers in one project.
  projectSettingItem: {
    enabled: true,
  },
};

apiInstance.toggleRegionalizedPrivateEndpointSetting(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectSettingItem** | **ProjectSettingItem**| Enables or disables the ability to create multiple private endpoints per region in all cloud service providers in one project. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined


### Return type

**ProjectSettingItem**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.atlas.2023-01-01+json
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found. |  -  |
**409** | Conflict. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


