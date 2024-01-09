# .CloudProviderAccessApi

All URIs are relative to *https://cloud.mongodb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorizeCloudProviderAccessRole**](CloudProviderAccessApi.md#authorizeCloudProviderAccessRole) | **PATCH** /api/atlas/v2/groups/{groupId}/cloudProviderAccess/{roleId} | Authorize One Cloud Provider Access Role
[**createCloudProviderAccessRole**](CloudProviderAccessApi.md#createCloudProviderAccessRole) | **POST** /api/atlas/v2/groups/{groupId}/cloudProviderAccess | Create One Cloud Provider Access Role
[**deauthorizeCloudProviderAccessRole**](CloudProviderAccessApi.md#deauthorizeCloudProviderAccessRole) | **DELETE** /api/atlas/v2/groups/{groupId}/cloudProviderAccess/{cloudProvider}/{roleId} | Deauthorize One Cloud Provider Access Role
[**getCloudProviderAccessRole**](CloudProviderAccessApi.md#getCloudProviderAccessRole) | **GET** /api/atlas/v2/groups/{groupId}/cloudProviderAccess/{roleId} | Return specified Cloud Provider Access Role
[**listCloudProviderAccessRoles**](CloudProviderAccessApi.md#listCloudProviderAccessRoles) | **GET** /api/atlas/v2/groups/{groupId}/cloudProviderAccess | Return All Cloud Provider Access Roles


# **authorizeCloudProviderAccessRole**
> CloudProviderAccessRole authorizeCloudProviderAccessRole(cloudProviderAccessRole)

Grants access to the specified project for the specified access role. To use this resource, the requesting API Key must have the Project Owner role. This API endpoint is one step in a procedure to create unified access for MongoDB Cloud services.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudProviderAccessApi(configuration);

let body:.CloudProviderAccessApiAuthorizeCloudProviderAccessRoleRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Unique 24-hexadecimal digit string that identifies the role.
  roleId: "bf325375e030fccba0091731",
  // CloudProviderAccessRole | Grants access to the specified project for the specified access role.
  cloudProviderAccessRole: {
    providerName: "providerName_example",
    iamAssumedRoleArn: "arn:aws:iam::123456789012:root",
    atlasAzureAppId: "62ECB020-8429-30cc-01FF-CCfeEe150AC3",
    servicePrincipalId: "62ECB020-8429-30cc-01FF-CCfeEe150AC3",
    tenantId: "62ECB020-8429-30cc-01FF-CCfeEe150AC3",
  },
};

apiInstance.authorizeCloudProviderAccessRole(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudProviderAccessRole** | **CloudProviderAccessRole**| Grants access to the specified project for the specified access role. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **roleId** | [**string**] | Unique 24-hexadecimal digit string that identifies the role. | defaults to undefined


### Return type

**CloudProviderAccessRole**

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
**409** | Conflict. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createCloudProviderAccessRole**
> CloudProviderAccessRole createCloudProviderAccessRole(cloudProviderAccessRole)

Creates one access role for the specified cloud provider. Some MongoDB Cloud features use these cloud provider access roles for authentication. To use this resource, the requesting API Key must have the Project Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudProviderAccessApi(configuration);

let body:.CloudProviderAccessApiCreateCloudProviderAccessRoleRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // CloudProviderAccessRole | Creates one role for the specified cloud provider.
  cloudProviderAccessRole: {
    providerName: "providerName_example",
    iamAssumedRoleArn: "arn:aws:iam::123456789012:root",
    atlasAzureAppId: "62ECB020-8429-30cc-01FF-CCfeEe150AC3",
    servicePrincipalId: "62ECB020-8429-30cc-01FF-CCfeEe150AC3",
    tenantId: "62ECB020-8429-30cc-01FF-CCfeEe150AC3",
  },
};

apiInstance.createCloudProviderAccessRole(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudProviderAccessRole** | **CloudProviderAccessRole**| Creates one role for the specified cloud provider. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined


### Return type

**CloudProviderAccessRole**

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
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deauthorizeCloudProviderAccessRole**
> void deauthorizeCloudProviderAccessRole()

Revokes access to the specified project for the specified access role. To use this resource, the requesting API Key must have the Project Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudProviderAccessApi(configuration);

let body:.CloudProviderAccessApiDeauthorizeCloudProviderAccessRoleRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the cloud provider of the role to deauthorize.
  cloudProvider: "cloudProvider_example",
  // string | Unique 24-hexadecimal digit string that identifies the role.
  roleId: "bf325375e030fccba0091731",
};

apiInstance.deauthorizeCloudProviderAccessRole(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **cloudProvider** | [**string**] | Human-readable label that identifies the cloud provider of the role to deauthorize. | defaults to undefined
 **roleId** | [**string**] | Unique 24-hexadecimal digit string that identifies the role. | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Bad Request. |  -  |
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCloudProviderAccessRole**
> CloudProviderAccessRole getCloudProviderAccessRole()

Returns the access role with the specified id and with access to the specified project. To use this resource, the requesting API Key must have the Project Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudProviderAccessApi(configuration);

let body:.CloudProviderAccessApiGetCloudProviderAccessRoleRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Unique 24-hexadecimal digit string that identifies the role.
  roleId: "bf325375e030fccba0091731",
};

apiInstance.getCloudProviderAccessRole(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **roleId** | [**string**] | Unique 24-hexadecimal digit string that identifies the role. | defaults to undefined


### Return type

**CloudProviderAccessRole**

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

# **listCloudProviderAccessRoles**
> CloudProviderAccessRoles listCloudProviderAccessRoles()

Returns all cloud provider access roles with access to the specified project. To use this resource, the requesting API Key must have the Project Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudProviderAccessApi(configuration);

let body:.CloudProviderAccessApiListCloudProviderAccessRolesRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
};

apiInstance.listCloudProviderAccessRoles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined


### Return type

**CloudProviderAccessRoles**

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


