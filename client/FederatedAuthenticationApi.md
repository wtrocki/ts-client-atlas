# .FederatedAuthenticationApi

All URIs are relative to *https://cloud.mongodb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRoleMapping**](FederatedAuthenticationApi.md#createRoleMapping) | **POST** /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings | Add One Role Mapping to One Organization
[**deleteFederationApp**](FederatedAuthenticationApi.md#deleteFederationApp) | **DELETE** /api/atlas/v2/federationSettings/{federationSettingsId} | Delete the federation settings instance.
[**deleteRoleMapping**](FederatedAuthenticationApi.md#deleteRoleMapping) | **DELETE** /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId}/roleMappings/{id} | Remove One Role Mapping from One Organization
[**getConnectedOrgConfig**](FederatedAuthenticationApi.md#getConnectedOrgConfig) | **GET** /api/atlas/v2/federationSettings/{federationSettingsId}/connectedOrgConfigs/{orgId} | Return One Org Config Connected to One Federation
[**getFederationSettings**](FederatedAuthenticationApi.md#getFederationSettings) | **GET** /api/atlas/v2/orgs/{orgId}/federationSettings | Return Federation Settings for One Organization
[**getIdentityProvider**](FederatedAuthenticationApi.md#getIdentityProvider) | **GET** /api/atlas/v2/federationSettings/{federationSettingsId}/identityProviders/{identityProviderId} | Return one identity provider from the specified federation by id.
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
> AuthFederationRoleMapping createRoleMapping(authFederationRoleMapping)

Adds one role mapping to the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role.

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
  // AuthFederationRoleMapping | The role mapping that you want to create.
  authFederationRoleMapping: {
    externalGroupName: "externalGroupName_example",
    roleAssignments: [
      {
        groupId: "32b6e34b3d91647abb20e7b8",
        orgId: "32b6e34b3d91647abb20e7b8",
        role: "role_example",
      },
    ],
  },
};

apiInstance.createRoleMapping(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authFederationRoleMapping** | **AuthFederationRoleMapping**| The role mapping that you want to create. |
 **federationSettingsId** | [**string**] | Unique 24-hexadecimal digit string that identifies your federation. | defaults to undefined
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access. | defaults to undefined


### Return type

**AuthFederationRoleMapping**

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
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteFederationApp**
> void deleteFederationApp()

Deletes the federation settings instance and all associated data, including identity providers and domains. To use this resource, the requesting API Key must have the Organization Owner role in the last remaining connected organization. **Note**: requests to this resource will fail if there is more than one connected organization in the federation.

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
**400** | Bad Request. |  -  |
**401** | Unauthorized. |  -  |
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteRoleMapping**
> void deleteRoleMapping()

Removes one role mapping in the specified organization from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role.

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
**401** | Unauthorized. |  -  |
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getConnectedOrgConfig**
> ConnectedOrgConfig getConnectedOrgConfig()

Returns the specified connected org config from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in the connected org.

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


### Return type

**ConnectedOrgConfig**

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
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getFederationSettings**
> OrgFederationSettings getFederationSettings()

Returns information about the federation settings for the specified organization. To use this resource, the requesting API Key must have the Organization Owner role in the connected org.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FederatedAuthenticationApi(configuration);

let body:.FederatedAuthenticationApiGetFederationSettingsRequest = {
  // string | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
  orgId: "4888442a3354817a7320eb61",
};

apiInstance.getFederationSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access. | defaults to undefined


### Return type

**OrgFederationSettings**

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
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getIdentityProvider**
> FederationIdentityProvider getIdentityProvider()

Returns one identity provider in the specified federation by the identity provider's id. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations. Deprecated versions: v2-{2023-01-01}

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


### Return type

**FederationIdentityProvider**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-11-15+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request. |  -  |
**401** | Unauthorized. |  -  |
**403** | Forbidden. |  -  |
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getIdentityProviderMetadata**
> string getIdentityProviderMetadata()

Returns the metadata of one identity provider in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations.

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
**400** | Bad Request. |  -  |
**401** | Unauthorized. |  -  |
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getRoleMapping**
> AuthFederationRoleMapping getRoleMapping()

Returns one role mapping from the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role.

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


### Return type

**AuthFederationRoleMapping**

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
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listConnectedOrgConfigs**
> Array<ConnectedOrgConfig> listConnectedOrgConfigs()

Returns all connected org configs in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected orgs.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FederatedAuthenticationApi(configuration);

let body:.FederatedAuthenticationApiListConnectedOrgConfigsRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your federation.
  federationSettingsId: "55fa922fb343282757d9554e",
};

apiInstance.listConnectedOrgConfigs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **federationSettingsId** | [**string**] | Unique 24-hexadecimal digit string that identifies your federation. | defaults to undefined


### Return type

**Array<ConnectedOrgConfig>**

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
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listIdentityProviders**
> Array<FederationIdentityProvider> listIdentityProviders()

Returns all identity providers with the provided protocol in the specified federation. If no protocol is specified, only SAML identity providers will be returned. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FederatedAuthenticationApi(configuration);

let body:.FederatedAuthenticationApiListIdentityProvidersRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your federation.
  federationSettingsId: "55fa922fb343282757d9554e",
  // string | The protocols of the target identity providers. (optional)
  protocol: "protocol_example",
};

apiInstance.listIdentityProviders(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **federationSettingsId** | [**string**] | Unique 24-hexadecimal digit string that identifies your federation. | defaults to undefined
 **protocol** | [**string**] | The protocols of the target identity providers. | (optional) defaults to undefined


### Return type

**Array<FederationIdentityProvider>**

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
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listRoleMappings**
> PaginatedRoleMapping listRoleMappings()

Returns all role mappings from the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role.

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


### Return type

**PaginatedRoleMapping**

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
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeConnectedOrgConfig**
> any removeConnectedOrgConfig()

Removes one connected organization configuration from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. Note: This request fails if only one connected organization exists in the federation.

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

# **updateConnectedOrgConfig**
> ConnectedOrgConfig updateConnectedOrgConfig(connectedOrgConfig)

Updates one connected organization configuration from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role.   **Note** If the organization configuration has no associated identity provider, you can't use this resource to update role mappings or post authorization role grants.    **Note**: The domainRestrictionEnabled field defaults to false if not provided in the request.   **Note**: If the identityProviderId field is not provided, you will disconnect the organization and the identity provider.

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
  // ConnectedOrgConfig | The connected organization configuration that you want to update.
  connectedOrgConfig: {
    dataAccessIdentityProviderIds: [
      "32b6e34b3d91647abb20e7b8",
    ],
    domainAllowList: [
      "domainAllowList_example",
    ],
    domainRestrictionEnabled: true,
    identityProviderId: "bf325375e030fccba009",
    postAuthRoleGrants: [
      "postAuthRoleGrants_example",
    ],
    roleMappings: [
      {
        externalGroupName: "externalGroupName_example",
        roleAssignments: [
          {
            groupId: "32b6e34b3d91647abb20e7b8",
            orgId: "32b6e34b3d91647abb20e7b8",
            role: "role_example",
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
};

apiInstance.updateConnectedOrgConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectedOrgConfig** | **ConnectedOrgConfig**| The connected organization configuration that you want to update. |
 **federationSettingsId** | [**string**] | Unique 24-hexadecimal digit string that identifies your federation. | defaults to undefined
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the connected organization configuration to update. | defaults to undefined


### Return type

**ConnectedOrgConfig**

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
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateIdentityProvider**
> FederationIdentityProvider updateIdentityProvider(identityProviderUpdate)

Updates one identity provider in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations. Deprecated versions: v2-{2023-01-01}

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
    description: "description_example",
    displayName: "displayName_example",
    issuerUri: "urn:idp:default",
    protocol: "protocol_example",
    audienceClaim: [
      "audienceClaim_example",
    ],
    clientId: "clientId_example",
    groupsClaim: "groupsClaim_example",
    requestedScopes: [
      "requestedScopes_example",
    ],
    userClaim: "userClaim_example",
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
    requestBinding: "requestBinding_example",
    responseSignatureAlgorithm: "responseSignatureAlgorithm_example",
    slug: "slug_example",
    ssoDebugEnabled: true,
    ssoUrl: "https://example.com",
    status: "status_example",
  },
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


### Return type

**FederationIdentityProvider**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.atlas.2023-11-15+json
 - **Accept**: application/vnd.atlas.2023-11-15+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request. |  -  |
**403** | Forbidden. |  -  |
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateRoleMapping**
> AuthFederationRoleMapping updateRoleMapping(authFederationRoleMapping)

Updates one role mapping in the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role.

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
  // AuthFederationRoleMapping | The role mapping that you want to update.
  authFederationRoleMapping: {
    externalGroupName: "externalGroupName_example",
    roleAssignments: [
      {
        groupId: "32b6e34b3d91647abb20e7b8",
        orgId: "32b6e34b3d91647abb20e7b8",
        role: "role_example",
      },
    ],
  },
};

apiInstance.updateRoleMapping(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authFederationRoleMapping** | **AuthFederationRoleMapping**| The role mapping that you want to update. |
 **federationSettingsId** | [**string**] | Unique 24-hexadecimal digit string that identifies your federation. | defaults to undefined
 **id** | [**string**] | Unique 24-hexadecimal digit string that identifies the role mapping that you want to update. | defaults to undefined
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access. | defaults to undefined


### Return type

**AuthFederationRoleMapping**

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
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


