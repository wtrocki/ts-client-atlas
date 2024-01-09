# .ThirdPartyIntegrationsApi

All URIs are relative to *https://cloud.mongodb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createThirdPartyIntegration**](ThirdPartyIntegrationsApi.md#createThirdPartyIntegration) | **POST** /api/atlas/v2/groups/{groupId}/integrations/{integrationType} | Configure One Third-Party Service Integration
[**deleteThirdPartyIntegration**](ThirdPartyIntegrationsApi.md#deleteThirdPartyIntegration) | **DELETE** /api/atlas/v2/groups/{groupId}/integrations/{integrationType} | Remove One Third-Party Service Integration
[**getThirdPartyIntegration**](ThirdPartyIntegrationsApi.md#getThirdPartyIntegration) | **GET** /api/atlas/v2/groups/{groupId}/integrations/{integrationType} | Return One Third-Party Service Integration
[**listThirdPartyIntegrations**](ThirdPartyIntegrationsApi.md#listThirdPartyIntegrations) | **GET** /api/atlas/v2/groups/{groupId}/integrations | Return All Active Third-Party Service Integrations
[**updateThirdPartyIntegration**](ThirdPartyIntegrationsApi.md#updateThirdPartyIntegration) | **PUT** /api/atlas/v2/groups/{groupId}/integrations/{integrationType} | Update One Third-Party Service Integration


# **createThirdPartyIntegration**
> PaginatedIntegration createThirdPartyIntegration(thridPartyIntegration)

Adds the settings for configuring one third-party service integration. These settings apply to all databases managed in the specified MongoDB Cloud project. Each project can have only one configuration per `{INTEGRATION-TYPE}`. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ThirdPartyIntegrationsApi(configuration);

let body:.ThirdPartyIntegrationsApiCreateThirdPartyIntegrationRequest = {
  // string | Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
  integrationType: "integrationType_example",
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // ThridPartyIntegration | Third-party integration that you want to configure for your project.
  thridPartyIntegration: {
    type: "type_example",
    apiKey: "********************************9abc",
    region: "region_example",
    microsoftTeamsWebhookUrl: "https://webhook.com/****",
    accountId: "bcc3c81b344a6030a3935c2527e2216535af7718",
    licenseKey: "bc3768f44193c282b2688ab39e00f8e4fc8d75ea",
    readToken: "193c96aee4a3ac640b98634562e2631f17ae0a69",
    writeToken: "a67b10e5cd7f8fb6a34b501136c409f373edc218",
    serviceKey: "****************************7890",
    enabled: true,
    listenAddress: ":9216",
    password: "password_example",
    rateLimitInterval: 1,
    scheme: "scheme_example",
    serviceDiscovery: "serviceDiscovery_example",
    tlsPemPath: "/path/to/file",
    username: "prom_user_618d48e05277a606ed2496fe",
    apiToken: "**********************************************************************abcd",
    channelName: "alerts",
    teamName: "MongoDB",
    routingKey: "test routing",
    secret: "******",
    url: "https://webhook.com/****",
  },
  // boolean | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. (optional)
  includeCount: true,
  // number | Number of items that the response returns per page. (optional)
  itemsPerPage: 100,
  // number | Number of the page that displays the current set of the total objects that the response returns. (optional)
  pageNum: 1,
};

apiInstance.createThirdPartyIntegration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thridPartyIntegration** | **ThridPartyIntegration**| Third-party integration that you want to configure for your project. |
 **integrationType** | [**string**] | Human-readable label that identifies the service which you want to integrate with MongoDB Cloud. | defaults to undefined
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **includeCount** | [**boolean**] | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. | (optional) defaults to undefined
 **itemsPerPage** | [**number**] | Number of items that the response returns per page. | (optional) defaults to 100
 **pageNum** | [**number**] | Number of the page that displays the current set of the total objects that the response returns. | (optional) defaults to 1


### Return type

**PaginatedIntegration**

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
**409** | Conflict. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteThirdPartyIntegration**
> any deleteThirdPartyIntegration()

Removes the settings that permit configuring one third-party service integration. These settings apply to all databases managed in one MongoDB Cloud project. If you delete an integration from a project, you remove that integration configuration only for that project. This action doesn't affect any other project or organization's configured `{INTEGRATION-TYPE}` integrations. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ThirdPartyIntegrationsApi(configuration);

let body:.ThirdPartyIntegrationsApiDeleteThirdPartyIntegrationRequest = {
  // string | Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
  integrationType: "integrationType_example",
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
};

apiInstance.deleteThirdPartyIntegration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationType** | [**string**] | Human-readable label that identifies the service which you want to integrate with MongoDB Cloud. | defaults to undefined
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined


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

# **getThirdPartyIntegration**
> ThridPartyIntegration getThirdPartyIntegration()

Returns the settings for configuring integration with one third-party service. These settings apply to all databases managed in one MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ThirdPartyIntegrationsApi(configuration);

let body:.ThirdPartyIntegrationsApiGetThirdPartyIntegrationRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
  integrationType: "integrationType_example",
};

apiInstance.getThirdPartyIntegration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **integrationType** | [**string**] | Human-readable label that identifies the service which you want to integrate with MongoDB Cloud. | defaults to undefined


### Return type

**ThridPartyIntegration**

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

# **listThirdPartyIntegrations**
> PaginatedIntegration listThirdPartyIntegrations()

Returns the settings that permit integrations with all configured third-party services. These settings apply to all databases managed in one MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ThirdPartyIntegrationsApi(configuration);

let body:.ThirdPartyIntegrationsApiListThirdPartyIntegrationsRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // boolean | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. (optional)
  includeCount: true,
  // number | Number of items that the response returns per page. (optional)
  itemsPerPage: 100,
  // number | Number of the page that displays the current set of the total objects that the response returns. (optional)
  pageNum: 1,
};

apiInstance.listThirdPartyIntegrations(body).then((data:any) => {
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

**PaginatedIntegration**

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

# **updateThirdPartyIntegration**
> PaginatedIntegration updateThirdPartyIntegration(thridPartyIntegration)

Updates the settings for configuring integration with one third-party service. These settings apply to all databases managed in one MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ThirdPartyIntegrationsApi(configuration);

let body:.ThirdPartyIntegrationsApiUpdateThirdPartyIntegrationRequest = {
  // string | Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
  integrationType: "integrationType_example",
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // ThridPartyIntegration | Third-party integration that you want to configure for your project.
  thridPartyIntegration: {
    type: "type_example",
    apiKey: "********************************9abc",
    region: "region_example",
    microsoftTeamsWebhookUrl: "https://webhook.com/****",
    accountId: "bcc3c81b344a6030a3935c2527e2216535af7718",
    licenseKey: "bc3768f44193c282b2688ab39e00f8e4fc8d75ea",
    readToken: "193c96aee4a3ac640b98634562e2631f17ae0a69",
    writeToken: "a67b10e5cd7f8fb6a34b501136c409f373edc218",
    serviceKey: "****************************7890",
    enabled: true,
    listenAddress: ":9216",
    password: "password_example",
    rateLimitInterval: 1,
    scheme: "scheme_example",
    serviceDiscovery: "serviceDiscovery_example",
    tlsPemPath: "/path/to/file",
    username: "prom_user_618d48e05277a606ed2496fe",
    apiToken: "**********************************************************************abcd",
    channelName: "alerts",
    teamName: "MongoDB",
    routingKey: "test routing",
    secret: "******",
    url: "https://webhook.com/****",
  },
  // boolean | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. (optional)
  includeCount: true,
  // number | Number of items that the response returns per page. (optional)
  itemsPerPage: 100,
  // number | Number of the page that displays the current set of the total objects that the response returns. (optional)
  pageNum: 1,
};

apiInstance.updateThirdPartyIntegration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thridPartyIntegration** | **ThridPartyIntegration**| Third-party integration that you want to configure for your project. |
 **integrationType** | [**string**] | Human-readable label that identifies the service which you want to integrate with MongoDB Cloud. | defaults to undefined
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **includeCount** | [**boolean**] | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. | (optional) defaults to undefined
 **itemsPerPage** | [**number**] | Number of items that the response returns per page. | (optional) defaults to 100
 **pageNum** | [**number**] | Number of the page that displays the current set of the total objects that the response returns. | (optional) defaults to 1


### Return type

**PaginatedIntegration**

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


