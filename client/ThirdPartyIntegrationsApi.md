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
> GroupPaginatedIntegrationView createThirdPartyIntegration(integrationViewForNdsGroup)

Adds the settings for configuring one third-party service integration. These settings apply to all databases managed in the specified MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ThirdPartyIntegrationsApi(configuration);

let body:.ThirdPartyIntegrationsApiCreateThirdPartyIntegrationRequest = {
  // 'PAGER_DUTY' | 'SLACK' | 'DATADOG' | 'NEW_RELIC' | 'OPS_GENIE' | 'VICTOR_OPS' | 'WEBHOOK' | 'PROMETHEUS' | 'MICROSOFT_TEAMS' | Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
  integrationType: "PAGER_DUTY",
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // IntegrationViewForNdsGroup | Third-party integration that you want to configure for your project.
  integrationViewForNdsGroup: {
    apiKey: "****************************a23c",
    region: "US",
    type: "DATADOG",
  },
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

apiInstance.createThirdPartyIntegration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationViewForNdsGroup** | **IntegrationViewForNdsGroup**| Third-party integration that you want to configure for your project. |
 **integrationType** | [**&#39;PAGER_DUTY&#39; | &#39;SLACK&#39; | &#39;DATADOG&#39; | &#39;NEW_RELIC&#39; | &#39;OPS_GENIE&#39; | &#39;VICTOR_OPS&#39; | &#39;WEBHOOK&#39; | &#39;PROMETHEUS&#39; | &#39;MICROSOFT_TEAMS&#39;**]**Array<&#39;PAGER_DUTY&#39; &#124; &#39;SLACK&#39; &#124; &#39;DATADOG&#39; &#124; &#39;NEW_RELIC&#39; &#124; &#39;OPS_GENIE&#39; &#124; &#39;VICTOR_OPS&#39; &#124; &#39;WEBHOOK&#39; &#124; &#39;PROMETHEUS&#39; &#124; &#39;MICROSOFT_TEAMS&#39; &#124; &#39;11184809&#39;>** | Human-readable label that identifies the service which you want to integrate with MongoDB Cloud. | defaults to undefined
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **includeCount** | [**boolean**] | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. | (optional) defaults to undefined
 **itemsPerPage** | [**number**] | Number of items that the response returns per page. | (optional) defaults to 100
 **pageNum** | [**number**] | Number of the page that displays the current set of the total objects that the response returns. | (optional) defaults to 1
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**GroupPaginatedIntegrationView**

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
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteThirdPartyIntegration**
> void deleteThirdPartyIntegration()

Removes the settings that permit configuring one third-party service integration. These settings apply to all databases managed in one MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ThirdPartyIntegrationsApi(configuration);

let body:.ThirdPartyIntegrationsApiDeleteThirdPartyIntegrationRequest = {
  // 'PAGER_DUTY' | 'SLACK' | 'DATADOG' | 'NEW_RELIC' | 'OPS_GENIE' | 'VICTOR_OPS' | 'WEBHOOK' | 'PROMETHEUS' | 'MICROSOFT_TEAMS' | Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
  integrationType: "PAGER_DUTY",
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
};

apiInstance.deleteThirdPartyIntegration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationType** | [**&#39;PAGER_DUTY&#39; | &#39;SLACK&#39; | &#39;DATADOG&#39; | &#39;NEW_RELIC&#39; | &#39;OPS_GENIE&#39; | &#39;VICTOR_OPS&#39; | &#39;WEBHOOK&#39; | &#39;PROMETHEUS&#39; | &#39;MICROSOFT_TEAMS&#39;**]**Array<&#39;PAGER_DUTY&#39; &#124; &#39;SLACK&#39; &#124; &#39;DATADOG&#39; &#124; &#39;NEW_RELIC&#39; &#124; &#39;OPS_GENIE&#39; &#124; &#39;VICTOR_OPS&#39; &#124; &#39;WEBHOOK&#39; &#124; &#39;PROMETHEUS&#39; &#124; &#39;MICROSOFT_TEAMS&#39; &#124; &#39;11184809&#39;>** | Human-readable label that identifies the service which you want to integrate with MongoDB Cloud. | defaults to undefined
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


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

# **getThirdPartyIntegration**
> IntegrationViewForNdsGroup getThirdPartyIntegration()

Returns the settings for configuring integration with one third-party service. These settings apply to all databases managed in one MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ThirdPartyIntegrationsApi(configuration);

let body:.ThirdPartyIntegrationsApiGetThirdPartyIntegrationRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // 'PAGER_DUTY' | 'SLACK' | 'DATADOG' | 'NEW_RELIC' | 'OPS_GENIE' | 'VICTOR_OPS' | 'WEBHOOK' | 'PROMETHEUS' | 'MICROSOFT_TEAMS' | Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
  integrationType: "PAGER_DUTY",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
};

apiInstance.getThirdPartyIntegration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **integrationType** | [**&#39;PAGER_DUTY&#39; | &#39;SLACK&#39; | &#39;DATADOG&#39; | &#39;NEW_RELIC&#39; | &#39;OPS_GENIE&#39; | &#39;VICTOR_OPS&#39; | &#39;WEBHOOK&#39; | &#39;PROMETHEUS&#39; | &#39;MICROSOFT_TEAMS&#39;**]**Array<&#39;PAGER_DUTY&#39; &#124; &#39;SLACK&#39; &#124; &#39;DATADOG&#39; &#124; &#39;NEW_RELIC&#39; &#124; &#39;OPS_GENIE&#39; &#124; &#39;VICTOR_OPS&#39; &#124; &#39;WEBHOOK&#39; &#124; &#39;PROMETHEUS&#39; &#124; &#39;MICROSOFT_TEAMS&#39; &#124; &#39;11184809&#39;>** | Human-readable label that identifies the service which you want to integrate with MongoDB Cloud. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**IntegrationViewForNdsGroup**

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

# **listThirdPartyIntegrations**
> GroupPaginatedIntegrationView listThirdPartyIntegrations()

Returns the settings that permit integrations with all configured third-party services. These settings apply to all databases managed in one MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ThirdPartyIntegrationsApi(configuration);

let body:.ThirdPartyIntegrationsApiListThirdPartyIntegrationsRequest = {
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

apiInstance.listThirdPartyIntegrations(body).then((data:any) => {
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

**GroupPaginatedIntegrationView**

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

# **updateThirdPartyIntegration**
> GroupPaginatedIntegrationView updateThirdPartyIntegration(integrationViewForNdsGroup)

Updates the settings for configuring integration with one third-party service. These settings apply to all databases managed in one MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ThirdPartyIntegrationsApi(configuration);

let body:.ThirdPartyIntegrationsApiUpdateThirdPartyIntegrationRequest = {
  // 'PAGER_DUTY' | 'SLACK' | 'DATADOG' | 'NEW_RELIC' | 'OPS_GENIE' | 'VICTOR_OPS' | 'WEBHOOK' | 'PROMETHEUS' | 'MICROSOFT_TEAMS' | Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
  integrationType: "PAGER_DUTY",
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // IntegrationViewForNdsGroup | Third-party integration that you want to configure for your project.
  integrationViewForNdsGroup: {
    apiKey: "****************************a23c",
    region: "US",
    type: "DATADOG",
  },
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

apiInstance.updateThirdPartyIntegration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationViewForNdsGroup** | **IntegrationViewForNdsGroup**| Third-party integration that you want to configure for your project. |
 **integrationType** | [**&#39;PAGER_DUTY&#39; | &#39;SLACK&#39; | &#39;DATADOG&#39; | &#39;NEW_RELIC&#39; | &#39;OPS_GENIE&#39; | &#39;VICTOR_OPS&#39; | &#39;WEBHOOK&#39; | &#39;PROMETHEUS&#39; | &#39;MICROSOFT_TEAMS&#39;**]**Array<&#39;PAGER_DUTY&#39; &#124; &#39;SLACK&#39; &#124; &#39;DATADOG&#39; &#124; &#39;NEW_RELIC&#39; &#124; &#39;OPS_GENIE&#39; &#124; &#39;VICTOR_OPS&#39; &#124; &#39;WEBHOOK&#39; &#124; &#39;PROMETHEUS&#39; &#124; &#39;MICROSOFT_TEAMS&#39; &#124; &#39;11184809&#39;>** | Human-readable label that identifies the service which you want to integrate with MongoDB Cloud. | defaults to undefined
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **includeCount** | [**boolean**] | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. | (optional) defaults to undefined
 **itemsPerPage** | [**number**] | Number of items that the response returns per page. | (optional) defaults to 100
 **pageNum** | [**number**] | Number of the page that displays the current set of the total objects that the response returns. | (optional) defaults to 1
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**GroupPaginatedIntegrationView**

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


