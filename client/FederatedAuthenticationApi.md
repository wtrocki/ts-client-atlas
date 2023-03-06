# .FederatedAuthenticationApi

All URIs are relative to *https://cloud.mongodb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRoleMapping**](FederatedAuthenticationApi.md#createRoleMapping) | **POST** /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings | Add One Role Mapping to One Organization
[**deleteFederationApp**](FederatedAuthenticationApi.md#deleteFederationApp) | **DELETE** /api/atlas/v2/federationSettings/{federationSettingsId} | Delete the federation settings instance.
[**deleteRoleMapping**](FederatedAuthenticationApi.md#deleteRoleMapping) | **DELETE** /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings/{id} | Remove One Role Mapping from One Organization
[**getConnectedOrgConfig**](FederatedAuthenticationApi.md#getConnectedOrgConfig) | **GET** /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId} | Return One Org Config Connected to One Federation
[**getFederationSettings**](FederatedAuthenticationApi.md#getFederationSettings) | **GET** /api/atlas/v2/orgs/{orgId}/federationSettings | Return Federation Settings for One Organization
[**getIdentityProvider**](FederatedAuthenticationApi.md#getIdentityProvider) | **GET** /api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders/{identityProviderId} | Return one identity provider from the specified federation.
[**getIdentityProviderMetadata**](FederatedAuthenticationApi.md#getIdentityProviderMetadata) | **GET** /api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders/{identityProviderId}/metadata.xml | Return the metadata of one identity provider in the specified federation.
[**getRoleMapping**](FederatedAuthenticationApi.md#getRoleMapping) | **GET** /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings/{id} | Return One Role Mapping from One Organization
[**listConnectedOrgConfigs**](FederatedAuthenticationApi.md#listConnectedOrgConfigs) | **GET** /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs | Return All Connected Org Configs from the Federation
[**listIdentityProviders**](FederatedAuthenticationApi.md#listIdentityProviders) | **GET** /api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders | Return all identity providers from the specified federation.
[**listRoleMappings**](FederatedAuthenticationApi.md#listRoleMappings) | **GET** /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings | Return All Role Mappings from One Organization
[**removeConnectedOrgConfig**](FederatedAuthenticationApi.md#removeConnectedOrgConfig) | **DELETE** /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId} | Remove One Org Config Connected to One Federation
[**updateConnectedOrgConfig**](FederatedAuthenticationApi.md#updateConnectedOrgConfig) | **PATCH** /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId} | Update One Org Config Connected to One Federation
[**updateIdentityProvider**](FederatedAuthenticationApi.md#updateIdentityProvider) | **PATCH** /api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders/{identityProviderId} | Update the identity provider.
[**updateRoleMapping**](FederatedAuthenticationApi.md#updateRoleMapping) | **PUT** /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings/{id} | Update One Role Mapping in One Organization


# **createRoleMapping**
> RoleMappingView createRoleMapping(roleMappingView)

Adds one role mapping to the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FederatedAuthenticationApi(configuration);

let body:.FederatedAuthenticationApiCreateRoleMappingRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your federation.
  federationSettingsId: "55fa922fb343282757d9554e",
  // string | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
  orgId: "4888442a3354817a7320eb61",
  // RoleMappingView | The role mapping that you want to create.
  roleMappingView: {
    externalGroupName: "externalGroupName_example",
    roleAssignments: [
      {
        groupId: "32b6e34b3d91647abb20e7b8",
        orgId: "32b6e34b3d91647abb20e7b8",
        role: "ORG_OWNER",
      },
    ],
  },
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
};

apiInstance.createRoleMapping(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleMappingView** | **RoleMappingView**| The role mapping that you want to create. |
 **federationSettingsId** | [**string**] | Unique 24-hexadecimal digit string that identifies your federation. | defaults to undefined
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined


### Return type

**RoleMappingView**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.atlas.2023-01-01+json
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteFederationApp**
> void deleteFederationApp()

Deletes the federation settings instance and all associated data, including identity providers and domains. To use this resource, the requesting API Key must have the Organization Owner role in the last remaining connected organization. This resource doesn't require the API Key to have an Access List. **Note**: requests to this resource will fail if there is more than one connected organization in the federation.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FederatedAuthenticationApi(configuration);

let body:.FederatedAuthenticationApiDeleteFederationAppRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your federation.
  federationSettingsId: "55fa922fb343282757d9554e",
};

apiInstance.deleteFederationApp(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **federationSettingsId** | [**string**] | Unique 24-hexadecimal digit string that identifies your federation. | defaults to undefined


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
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteRoleMapping**
> void deleteRoleMapping()

Removes one role mapping in the specified organization from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FederatedAuthenticationApi(configuration);

let body:.FederatedAuthenticationApiDeleteRoleMappingRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your federation.
  federationSettingsId: "55fa922fb343282757d9554e",
  // string | Unique 24-hexadecimal digit string that identifies the role mapping that you want to remove.
  id: "32b6e34b3d91647abb20e7b8",
  // string | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
  orgId: "4888442a3354817a7320eb61",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
};

apiInstance.deleteRoleMapping(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **federationSettingsId** | [**string**] | Unique 24-hexadecimal digit string that identifies your federation. | defaults to undefined
 **id** | [**string**] | Unique 24-hexadecimal digit string that identifies the role mapping that you want to remove. | defaults to undefined
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined


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
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getConnectedOrgConfig**
> ConnectedOrgConfigView getConnectedOrgConfig()

Returns the specified connected org config from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in the connected org. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FederatedAuthenticationApi(configuration);

let body:.FederatedAuthenticationApiGetConnectedOrgConfigRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your federation.
  federationSettingsId: "55fa922fb343282757d9554e",
  // string | Unique 24-hexadecimal digit string that identifies the connected organization configuration to return.
  orgId: "32b6e34b3d91647abb20e7b8",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
};

apiInstance.getConnectedOrgConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **federationSettingsId** | [**string**] | Unique 24-hexadecimal digit string that identifies your federation. | defaults to undefined
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the connected organization configuration to return. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined


### Return type

**ConnectedOrgConfigView**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getFederationSettings**
> OrgFederationSettingsView getFederationSettings()

Returns information about the federation settings for the specified organization. To use this resource, the requesting API Key must have the Organization Owner role in the connected org. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FederatedAuthenticationApi(configuration);

let body:.FederatedAuthenticationApiGetFederationSettingsRequest = {
  // string | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
  orgId: "4888442a3354817a7320eb61",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
};

apiInstance.getFederationSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**OrgFederationSettingsView**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getIdentityProvider**
> IdentityProviderView getIdentityProvider()

Returns one identity provider from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FederatedAuthenticationApi(configuration);

let body:.FederatedAuthenticationApiGetIdentityProviderRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your federation.
  federationSettingsId: "55fa922fb343282757d9554e",
  // string | Unique 20-hexadecimal digit string that identifies the identity provider.
  identityProviderId: "c2777a9eca931f29fc2f",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
};

apiInstance.getIdentityProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **federationSettingsId** | [**string**] | Unique 24-hexadecimal digit string that identifies your federation. | defaults to undefined
 **identityProviderId** | [**string**] | Unique 20-hexadecimal digit string that identifies the identity provider. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined


### Return type

**IdentityProviderView**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getIdentityProviderMetadata**
> string getIdentityProviderMetadata()

Returns the metadata of one identity provider in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FederatedAuthenticationApi(configuration);

let body:.FederatedAuthenticationApiGetIdentityProviderMetadataRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your federation.
  federationSettingsId: "55fa922fb343282757d9554e",
  // string | Unique 20-hexadecimal digit string that identifies the identity provider.
  identityProviderId: "c2777a9eca931f29fc2f",
};

apiInstance.getIdentityProviderMetadata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **federationSettingsId** | [**string**] | Unique 24-hexadecimal digit string that identifies your federation. | defaults to undefined
 **identityProviderId** | [**string**] | Unique 20-hexadecimal digit string that identifies the identity provider. | defaults to undefined


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getRoleMapping**
> RoleMappingView getRoleMapping()

Returns one role mapping from the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FederatedAuthenticationApi(configuration);

let body:.FederatedAuthenticationApiGetRoleMappingRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your federation.
  federationSettingsId: "55fa922fb343282757d9554e",
  // string | Unique 24-hexadecimal digit string that identifies the role mapping that you want to return.
  id: "32b6e34b3d91647abb20e7b8",
  // string | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
  orgId: "4888442a3354817a7320eb61",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
};

apiInstance.getRoleMapping(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **federationSettingsId** | [**string**] | Unique 24-hexadecimal digit string that identifies your federation. | defaults to undefined
 **id** | [**string**] | Unique 24-hexadecimal digit string that identifies the role mapping that you want to return. | defaults to undefined
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined


### Return type

**RoleMappingView**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listConnectedOrgConfigs**
> Array<ConnectedOrgConfigView> listConnectedOrgConfigs()

Returns all connected org configs in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected orgs. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FederatedAuthenticationApi(configuration);

let body:.FederatedAuthenticationApiListConnectedOrgConfigsRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your federation.
  federationSettingsId: "55fa922fb343282757d9554e",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
};

apiInstance.listConnectedOrgConfigs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **federationSettingsId** | [**string**] | Unique 24-hexadecimal digit string that identifies your federation. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined


### Return type

**Array<ConnectedOrgConfigView>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listIdentityProviders**
> Array<IdentityProviderView> listIdentityProviders()

Returns all identity providers in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FederatedAuthenticationApi(configuration);

let body:.FederatedAuthenticationApiListIdentityProvidersRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your federation.
  federationSettingsId: "55fa922fb343282757d9554e",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
};

apiInstance.listIdentityProviders(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **federationSettingsId** | [**string**] | Unique 24-hexadecimal digit string that identifies your federation. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined


### Return type

**Array<IdentityProviderView>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listRoleMappings**
> Array<RoleMappingView> listRoleMappings()

Returns all role mappings from the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FederatedAuthenticationApi(configuration);

let body:.FederatedAuthenticationApiListRoleMappingsRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your federation.
  federationSettingsId: "55fa922fb343282757d9554e",
  // string | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
  orgId: "4888442a3354817a7320eb61",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
};

apiInstance.listRoleMappings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **federationSettingsId** | [**string**] | Unique 24-hexadecimal digit string that identifies your federation. | defaults to undefined
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined


### Return type

**Array<RoleMappingView>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeConnectedOrgConfig**
> void removeConnectedOrgConfig()

Removes one connected organization configuration from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List. Note: This request fails if only one connected organization exists in the federation.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FederatedAuthenticationApi(configuration);

let body:.FederatedAuthenticationApiRemoveConnectedOrgConfigRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your federation.
  federationSettingsId: "55fa922fb343282757d9554e",
  // string | Unique 24-hexadecimal digit string that identifies the connected organization configuration to remove.
  orgId: "32b6e34b3d91647abb20e7b8",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
};

apiInstance.removeConnectedOrgConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **federationSettingsId** | [**string**] | Unique 24-hexadecimal digit string that identifies your federation. | defaults to undefined
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the connected organization configuration to remove. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateConnectedOrgConfig**
> ConnectedOrgConfigView updateConnectedOrgConfig(connectedOrgConfigView)

Updates one connected organization configuration from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.   **Note** If the organization configuration has no associated identity provider, you can't use this resource to update role mappings or post authorization role grants.    **Note**: The domainRestrictionEnabled field defaults to false if not provided in the request.   **Note**: If the identityProviderId field is not provided, you will disconnect the organization and the identity provider.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FederatedAuthenticationApi(configuration);

let body:.FederatedAuthenticationApiUpdateConnectedOrgConfigRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your federation.
  federationSettingsId: "55fa922fb343282757d9554e",
  // string | Unique 24-hexadecimal digit string that identifies the connected organization configuration to update.
  orgId: "32b6e34b3d91647abb20e7b8",
  // ConnectedOrgConfigView | The connected organization configuration that you want to update.
  connectedOrgConfigView: {
    domainAllowList: [
      "domainAllowList_example",
    ],
    domainRestrictionEnabled: true,
    identityProviderId: "bf325375e030fccba009",
    postAuthRoleGrants: [
      "GLOBAL_AUTOMATION_ADMIN",
    ],
    roleMappings: [
      {
        externalGroupName: "externalGroupName_example",
        roleAssignments: [
          {
            groupId: "32b6e34b3d91647abb20e7b8",
            orgId: "32b6e34b3d91647abb20e7b8",
            role: "ORG_OWNER",
          },
        ],
      },
    ],
    userConflicts: [
      {
        emailAddress: "emailAddress_example",
        federationSettingsId: "32b6e34b3d91647abb20e7b8",
        firstName: "firstName_example",
        lastName: "lastName_example",
      },
    ],
  },
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
};

apiInstance.updateConnectedOrgConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectedOrgConfigView** | **ConnectedOrgConfigView**| The connected organization configuration that you want to update. |
 **federationSettingsId** | [**string**] | Unique 24-hexadecimal digit string that identifies your federation. | defaults to undefined
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the connected organization configuration to update. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined


### Return type

**ConnectedOrgConfigView**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.atlas.2023-01-01+json
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateIdentityProvider**
> IdentityProviderView updateIdentityProvider(identityProviderUpdate)

Updates one identity provider in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FederatedAuthenticationApi(configuration);

let body:.FederatedAuthenticationApiUpdateIdentityProviderRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your federation.
  federationSettingsId: "55fa922fb343282757d9554e",
  // string | Unique 20-hexadecimal digit string that identifies the identity provider.
  identityProviderId: "c2777a9eca931f29fc2f",
  // IdentityProviderUpdate | The identity provider that you want to update.
  identityProviderUpdate: {
    associatedDomains: [
      "associatedDomains_example",
    ],
    displayName: "displayName_example",
    issuerUri: "urn:idp:default",
    pemFileInfo: {
      certificates: [
        {
          content: "content_example",
          notAfter: new Date('1970-01-01T00:00:00.00Z'),
          notBefore: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      fileName: "fileName_example",
    },
    requestBinding: "HTTP-POST",
    responseSignatureAlgorithm: "SHA-1",
    ssoDebugEnabled: true,
    ssoUrl: "https://example.com",
    status: "ACTIVE",
  },
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
};

apiInstance.updateIdentityProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityProviderUpdate** | **IdentityProviderUpdate**| The identity provider that you want to update. |
 **federationSettingsId** | [**string**] | Unique 24-hexadecimal digit string that identifies your federation. | defaults to undefined
 **identityProviderId** | [**string**] | Unique 20-hexadecimal digit string that identifies the identity provider. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined


### Return type

**IdentityProviderView**

### Authorization

No authorization required

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateRoleMapping**
> RoleMappingView updateRoleMapping(roleMappingView)

Updates one role mapping in the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FederatedAuthenticationApi(configuration);

let body:.FederatedAuthenticationApiUpdateRoleMappingRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your federation.
  federationSettingsId: "55fa922fb343282757d9554e",
  // string | Unique 24-hexadecimal digit string that identifies the role mapping that you want to update.
  id: "32b6e34b3d91647abb20e7b8",
  // string | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
  orgId: "4888442a3354817a7320eb61",
  // RoleMappingView | The role mapping that you want to update.
  roleMappingView: {
    externalGroupName: "externalGroupName_example",
    roleAssignments: [
      {
        groupId: "32b6e34b3d91647abb20e7b8",
        orgId: "32b6e34b3d91647abb20e7b8",
        role: "ORG_OWNER",
      },
    ],
  },
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
};

apiInstance.updateRoleMapping(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleMappingView** | **RoleMappingView**| The role mapping that you want to update. |
 **federationSettingsId** | [**string**] | Unique 24-hexadecimal digit string that identifies your federation. | defaults to undefined
 **id** | [**string**] | Unique 24-hexadecimal digit string that identifies the role mapping that you want to update. | defaults to undefined
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined


### Return type

**RoleMappingView**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.atlas.2023-01-01+json
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


