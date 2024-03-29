# .ProgrammaticAPIKeysApi

All URIs are relative to *https://cloud.mongodb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProjectApiKey**](ProgrammaticAPIKeysApi.md#addProjectApiKey) | **POST** /api/atlas/v2/groups/{groupId}/apiKeys/{apiUserId} | Assign One Organization API Key to One Project
[**createApiKey**](ProgrammaticAPIKeysApi.md#createApiKey) | **POST** /api/atlas/v2/orgs/{orgId}/apiKeys | Create One Organization API Key
[**createApiKeyAccessList**](ProgrammaticAPIKeysApi.md#createApiKeyAccessList) | **POST** /api/atlas/v2/orgs/{orgId}/apiKeys/{apiUserId}/accessList | Create Access List Entries for One Organization API Key
[**createProjectApiKey**](ProgrammaticAPIKeysApi.md#createProjectApiKey) | **POST** /api/atlas/v2/groups/{groupId}/apiKeys | Create and Assign One Organization API Key to One Project
[**deleteApiKey**](ProgrammaticAPIKeysApi.md#deleteApiKey) | **DELETE** /api/atlas/v2/orgs/{orgId}/apiKeys/{apiUserId} | Remove One Organization API Key
[**deleteApiKeyAccessListEntry**](ProgrammaticAPIKeysApi.md#deleteApiKeyAccessListEntry) | **DELETE** /api/atlas/v2/orgs/{orgId}/apiKeys/{apiUserId}/accessList/{ipAddress} | Remove One Access List Entry for One Organization API Key
[**getApiKey**](ProgrammaticAPIKeysApi.md#getApiKey) | **GET** /api/atlas/v2/orgs/{orgId}/apiKeys/{apiUserId} | Return One Organization API Key
[**getApiKeyAccessList**](ProgrammaticAPIKeysApi.md#getApiKeyAccessList) | **GET** /api/atlas/v2/orgs/{orgId}/apiKeys/{apiUserId}/accessList/{ipAddress} | Return One Access List Entry for One Organization API Key
[**listApiKeyAccessListsEntries**](ProgrammaticAPIKeysApi.md#listApiKeyAccessListsEntries) | **GET** /api/atlas/v2/orgs/{orgId}/apiKeys/{apiUserId}/accessList | Return All Access List Entries for One Organization API Key
[**listApiKeys**](ProgrammaticAPIKeysApi.md#listApiKeys) | **GET** /api/atlas/v2/orgs/{orgId}/apiKeys | Return All Organization API Keys
[**listProjectApiKeys**](ProgrammaticAPIKeysApi.md#listProjectApiKeys) | **GET** /api/atlas/v2/groups/{groupId}/apiKeys | Return All Organization API Keys Assigned to One Project
[**removeProjectApiKey**](ProgrammaticAPIKeysApi.md#removeProjectApiKey) | **DELETE** /api/atlas/v2/groups/{groupId}/apiKeys/{apiUserId} | Unassign One Organization API Key from One Project
[**updateApiKey**](ProgrammaticAPIKeysApi.md#updateApiKey) | **PATCH** /api/atlas/v2/orgs/{orgId}/apiKeys/{apiUserId} | Update One Organization API Key
[**updateApiKeyRoles**](ProgrammaticAPIKeysApi.md#updateApiKeyRoles) | **PATCH** /api/atlas/v2/groups/{groupId}/apiKeys/{apiUserId} | Update Roles of One Organization API Key to One Project


# **addProjectApiKey**
> ApiKeyUserDetails addProjectApiKey(userAccessRoleAssignment)

Assigns the specified organization API key to the specified project. Users with the Project Owner role in the project associated with the API key can then use the organization API key to access the resources. To use this resource, the requesting API Key must have the Project User Admin role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProgrammaticAPIKeysApi(configuration);

let body:.ProgrammaticAPIKeysApiAddProjectApiKeyRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Unique 24-hexadecimal digit string that identifies this organization API key that you want to assign to one project.
  apiUserId: "bf325375e030fccba0091731",
  // Array<UserAccessRoleAssignment> | Organization API key to be assigned to the specified project.
  userAccessRoleAssignment: [
    {
      roles: [
        "roles_example",
      ],
    },
  ],
};

apiInstance.addProjectApiKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAccessRoleAssignment** | **Array<UserAccessRoleAssignment>**| Organization API key to be assigned to the specified project. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **apiUserId** | [**string**] | Unique 24-hexadecimal digit string that identifies this organization API key that you want to assign to one project. | defaults to undefined


### Return type

**ApiKeyUserDetails**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.atlas.2023-01-01+json
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createApiKey**
> ApiKeyUserDetails createApiKey(createAtlasOrganizationApiKey)

Creates one API key for the specified organization. An organization API key grants programmatic access to an organization. You can't use the API key to log into the console. To use this resource, the requesting API Key must have the Organization Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProgrammaticAPIKeysApi(configuration);

let body:.ProgrammaticAPIKeysApiCreateApiKeyRequest = {
  // string | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
  orgId: "4888442a3354817a7320eb61",
  // CreateAtlasOrganizationApiKey | Organization API Key to be created.
  createAtlasOrganizationApiKey: {
    desc: "desc_example",
    roles: [
      "roles_example",
    ],
  },
};

apiInstance.createApiKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAtlasOrganizationApiKey** | **CreateAtlasOrganizationApiKey**| Organization API Key to be created. |
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access. | defaults to undefined


### Return type

**ApiKeyUserDetails**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.atlas.2023-01-01+json
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createApiKeyAccessList**
> PaginatedApiUserAccessList createApiKeyAccessList(userAccessList)

Creates the access list entries for the specified organization API key. Resources require all API requests originate from IP addresses on the API access list. To use this resource, the requesting API Key must have the Read Write role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProgrammaticAPIKeysApi(configuration);

let body:.ProgrammaticAPIKeysApiCreateApiKeyAccessListRequest = {
  // string | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
  orgId: "4888442a3354817a7320eb61",
  // string | Unique 24-hexadecimal digit string that identifies this organization API key for which you want to create a new access list entry.
  apiUserId: "bf325375e030fccba0091731",
  // Array<UserAccessList> | Access list entries to be created for the specified organization API key.
  userAccessList: [
    {
      cidrBlock: "203.0.113.0/24",
      ipAddress: "203.0.113.10",
    },
  ],
  // boolean | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. (optional)
  includeCount: true,
  // number | Number of items that the response returns per page. (optional)
  itemsPerPage: 100,
  // number | Number of the page that displays the current set of the total objects that the response returns. (optional)
  pageNum: 1,
};

apiInstance.createApiKeyAccessList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAccessList** | **Array<UserAccessList>**| Access list entries to be created for the specified organization API key. |
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access. | defaults to undefined
 **apiUserId** | [**string**] | Unique 24-hexadecimal digit string that identifies this organization API key for which you want to create a new access list entry. | defaults to undefined
 **includeCount** | [**boolean**] | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. | (optional) defaults to undefined
 **itemsPerPage** | [**number**] | Number of items that the response returns per page. | (optional) defaults to 100
 **pageNum** | [**number**] | Number of the page that displays the current set of the total objects that the response returns. | (optional) defaults to 1


### Return type

**PaginatedApiUserAccessList**

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
**409** | Conflict. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createProjectApiKey**
> ApiKeyUserDetails createProjectApiKey(createAtlasProjectApiKey)

Creates and assigns the specified organization API key to the specified project. Users with the Project Owner role in the project associated with the API key can use the organization API key to access the resources. To use this resource, the requesting API Key must have the Project User Admin role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProgrammaticAPIKeysApi(configuration);

let body:.ProgrammaticAPIKeysApiCreateProjectApiKeyRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // CreateAtlasProjectApiKey | Organization API key to be created and assigned to the specified project.
  createAtlasProjectApiKey: {
    desc: "desc_example",
    roles: [
      "roles_example",
    ],
  },
};

apiInstance.createProjectApiKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAtlasProjectApiKey** | **CreateAtlasProjectApiKey**| Organization API key to be created and assigned to the specified project. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined


### Return type

**ApiKeyUserDetails**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.atlas.2023-01-01+json
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteApiKey**
> any deleteApiKey()

Removes one organization API key from the specified organization. When you remove an API key from an organization, MongoDB Cloud also removes that key from any projects that use that key. To use this resource, the requesting API Key must have the Organization Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProgrammaticAPIKeysApi(configuration);

let body:.ProgrammaticAPIKeysApiDeleteApiKeyRequest = {
  // string | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
  orgId: "4888442a3354817a7320eb61",
  // string | Unique 24-hexadecimal digit string that identifies this organization API key.
  apiUserId: "bf325375e030fccba0091731",
};

apiInstance.deleteApiKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access. | defaults to undefined
 **apiUserId** | [**string**] | Unique 24-hexadecimal digit string that identifies this organization API key. | defaults to undefined


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
**401** | Unauthorized. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteApiKeyAccessListEntry**
> any deleteApiKeyAccessListEntry()

Removes the specified access list entry from the specified organization API key. Resources require all API requests originate from the IP addresses on the API access list. To use this resource, the requesting API Key must have the Read Write role. In addition, you cannot remove the requesting IP address from the requesting organization API key.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProgrammaticAPIKeysApi(configuration);

let body:.ProgrammaticAPIKeysApiDeleteApiKeyAccessListEntryRequest = {
  // string | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
  orgId: "4888442a3354817a7320eb61",
  // string | Unique 24-hexadecimal digit string that identifies this organization API key for which you want to remove access list entries.
  apiUserId: "bf325375e030fccba0091731",
  // string | One IP address or multiple IP addresses represented as one CIDR block to limit requests to API resources in the specified organization. When adding a CIDR block with a subnet mask, such as 192.0.2.0/24, use the URL-encoded value %2F for the forward slash /.
  ipAddress: "192.0.2.0%2F24",
};

apiInstance.deleteApiKeyAccessListEntry(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access. | defaults to undefined
 **apiUserId** | [**string**] | Unique 24-hexadecimal digit string that identifies this organization API key for which you want to remove access list entries. | defaults to undefined
 **ipAddress** | [**string**] | One IP address or multiple IP addresses represented as one CIDR block to limit requests to API resources in the specified organization. When adding a CIDR block with a subnet mask, such as 192.0.2.0/24, use the URL-encoded value %2F for the forward slash /. | defaults to undefined


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
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApiKey**
> ApiKeyUserDetails getApiKey()

Returns one organization API key. The organization API keys grant programmatic access to an organization. You can't use the API key to log into MongoDB Cloud through the user interface. To use this resource, the requesting API Key must have the  Organization Member role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProgrammaticAPIKeysApi(configuration);

let body:.ProgrammaticAPIKeysApiGetApiKeyRequest = {
  // string | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
  orgId: "4888442a3354817a7320eb61",
  // string | Unique 24-hexadecimal digit string that identifies this organization API key that  you want to update.
  apiUserId: "bf325375e030fccba0091731",
};

apiInstance.getApiKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access. | defaults to undefined
 **apiUserId** | [**string**] | Unique 24-hexadecimal digit string that identifies this organization API key that  you want to update. | defaults to undefined


### Return type

**ApiKeyUserDetails**

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

# **getApiKeyAccessList**
> UserAccessList getApiKeyAccessList()

Returns one access list entry for the specified organization API key. Resources require  all API requests originate from IP addresses on the API access list. To use this resource, the requesting API Key must have the Organization Member role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProgrammaticAPIKeysApi(configuration);

let body:.ProgrammaticAPIKeysApiGetApiKeyAccessListRequest = {
  // string | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
  orgId: "4888442a3354817a7320eb61",
  // string | One IP address or multiple IP addresses represented as one CIDR block to limit  requests to API resources in the specified organization. When adding a CIDR block with a subnet mask, such as  192.0.2.0/24, use the URL-encoded value %2F for the forward slash /.
  ipAddress: "192.0.2.0%2F24",
  // string | Unique 24-hexadecimal digit string that identifies this organization API key for  which you want to return access list entries.
  apiUserId: "bf325375e030fccba0091731",
};

apiInstance.getApiKeyAccessList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access. | defaults to undefined
 **ipAddress** | [**string**] | One IP address or multiple IP addresses represented as one CIDR block to limit  requests to API resources in the specified organization. When adding a CIDR block with a subnet mask, such as  192.0.2.0/24, use the URL-encoded value %2F for the forward slash /. | defaults to undefined
 **apiUserId** | [**string**] | Unique 24-hexadecimal digit string that identifies this organization API key for  which you want to return access list entries. | defaults to undefined


### Return type

**UserAccessList**

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

# **listApiKeyAccessListsEntries**
> PaginatedApiUserAccessList listApiKeyAccessListsEntries()

Returns all access list entries that you configured for the specified organization API key. To use this resource, the requesting API Key must have the Organization Member role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProgrammaticAPIKeysApi(configuration);

let body:.ProgrammaticAPIKeysApiListApiKeyAccessListsEntriesRequest = {
  // string | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
  orgId: "4888442a3354817a7320eb61",
  // string | Unique 24-hexadecimal digit string that identifies this organization API key for which you want to return access list entries.
  apiUserId: "bf325375e030fccba0091731",
  // boolean | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. (optional)
  includeCount: true,
  // number | Number of items that the response returns per page. (optional)
  itemsPerPage: 100,
  // number | Number of the page that displays the current set of the total objects that the response returns. (optional)
  pageNum: 1,
};

apiInstance.listApiKeyAccessListsEntries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access. | defaults to undefined
 **apiUserId** | [**string**] | Unique 24-hexadecimal digit string that identifies this organization API key for which you want to return access list entries. | defaults to undefined
 **includeCount** | [**boolean**] | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. | (optional) defaults to undefined
 **itemsPerPage** | [**number**] | Number of items that the response returns per page. | (optional) defaults to 100
 **pageNum** | [**number**] | Number of the page that displays the current set of the total objects that the response returns. | (optional) defaults to 1


### Return type

**PaginatedApiUserAccessList**

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

# **listApiKeys**
> PaginatedApiApiUser listApiKeys()

Returns all organization API keys for the specified organization. The organization API keys grant programmatic access to an organization. You can't use the API key to log into MongoDB Cloud through the console. To use this resource, the requesting API Key must have the Organization Member role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProgrammaticAPIKeysApi(configuration);

let body:.ProgrammaticAPIKeysApiListApiKeysRequest = {
  // string | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
  orgId: "4888442a3354817a7320eb61",
  // boolean | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. (optional)
  includeCount: true,
  // number | Number of items that the response returns per page. (optional)
  itemsPerPage: 100,
  // number | Number of the page that displays the current set of the total objects that the response returns. (optional)
  pageNum: 1,
};

apiInstance.listApiKeys(body).then((data:any) => {
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


### Return type

**PaginatedApiApiUser**

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

# **listProjectApiKeys**
> PaginatedApiApiUser listProjectApiKeys()

Returns all organization API keys that you assigned to the specified project. Users with the Project Owner role in the project associated with the API key can use the organization API key to access the resources. To use this resource, the requesting API Key must have the Project User Admin role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProgrammaticAPIKeysApi(configuration);

let body:.ProgrammaticAPIKeysApiListProjectApiKeysRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // boolean | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. (optional)
  includeCount: true,
  // number | Number of items that the response returns per page. (optional)
  itemsPerPage: 100,
  // number | Number of the page that displays the current set of the total objects that the response returns. (optional)
  pageNum: 1,
};

apiInstance.listProjectApiKeys(body).then((data:any) => {
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

**PaginatedApiApiUser**

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

# **removeProjectApiKey**
> any removeProjectApiKey()

Removes one organization API key from the specified project. To use this resource, the requesting API Key must have the Project User Admin role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProgrammaticAPIKeysApi(configuration);

let body:.ProgrammaticAPIKeysApiRemoveProjectApiKeyRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Unique 24-hexadecimal digit string that identifies this organization API key that you want to unassign from one project.
  apiUserId: "bf325375e030fccba0091731",
};

apiInstance.removeProjectApiKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **apiUserId** | [**string**] | Unique 24-hexadecimal digit string that identifies this organization API key that you want to unassign from one project. | defaults to undefined


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
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateApiKey**
> ApiKeyUserDetails updateApiKey(updateAtlasOrganizationApiKey)

Updates one organization API key in the specified organization. The organization API keys  grant programmatic access to an organization. To use this resource, the requesting  API Key must have the Organization Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProgrammaticAPIKeysApi(configuration);

let body:.ProgrammaticAPIKeysApiUpdateApiKeyRequest = {
  // string | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
  orgId: "4888442a3354817a7320eb61",
  // string | Unique 24-hexadecimal digit string that identifies this organization API key you  want to update.
  apiUserId: "bf325375e030fccba0091731",
  // UpdateAtlasOrganizationApiKey | Organization API key to be updated. This request requires a minimum of one of the two body parameters.
  updateAtlasOrganizationApiKey: {
    desc: "desc_example",
    roles: [
      "roles_example",
    ],
  },
};

apiInstance.updateApiKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateAtlasOrganizationApiKey** | **UpdateAtlasOrganizationApiKey**| Organization API key to be updated. This request requires a minimum of one of the two body parameters. |
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access. | defaults to undefined
 **apiUserId** | [**string**] | Unique 24-hexadecimal digit string that identifies this organization API key you  want to update. | defaults to undefined


### Return type

**ApiKeyUserDetails**

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
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateApiKeyRoles**
> ApiKeyUserDetails updateApiKeyRoles(updateAtlasProjectApiKey)

Updates the roles of the organization API key that you specify for the project that you specify. You must specify at least one valid role for the project. The application removes any roles that you do not include in this request if they were previously set in the organization API key that you specify for the project.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProgrammaticAPIKeysApi(configuration);

let body:.ProgrammaticAPIKeysApiUpdateApiKeyRolesRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Unique 24-hexadecimal digit string that identifies this organization API key that you want to unassign from one project.
  apiUserId: "bf325375e030fccba0091731",
  // UpdateAtlasProjectApiKey | Organization API Key to be updated. This request requires a minimum of one of the two body parameters.
  updateAtlasProjectApiKey: {
    desc: "desc_example",
    roles: [
      "roles_example",
    ],
  },
  // number | Number of the page that displays the current set of the total objects that the response returns. (optional)
  pageNum: 1,
  // number | Number of items that the response returns per page. (optional)
  itemsPerPage: 100,
  // boolean | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. (optional)
  includeCount: true,
};

apiInstance.updateApiKeyRoles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateAtlasProjectApiKey** | **UpdateAtlasProjectApiKey**| Organization API Key to be updated. This request requires a minimum of one of the two body parameters. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **apiUserId** | [**string**] | Unique 24-hexadecimal digit string that identifies this organization API key that you want to unassign from one project. | defaults to undefined
 **pageNum** | [**number**] | Number of the page that displays the current set of the total objects that the response returns. | (optional) defaults to 1
 **itemsPerPage** | [**number**] | Number of items that the response returns per page. | (optional) defaults to 100
 **includeCount** | [**boolean**] | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. | (optional) defaults to undefined


### Return type

**ApiKeyUserDetails**

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
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


