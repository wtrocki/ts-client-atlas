# .DataFederationApi

All URIs are relative to *https://cloud.mongodb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDataFederationPrivateEndpoint**](DataFederationApi.md#createDataFederationPrivateEndpoint) | **POST** /api/atlas/v2/groups/{groupId}/privateNetworkSettings/endpointIds | Create One Federated Database Instance and Online Archive Private Endpoint for One Project
[**createFederatedDatabase**](DataFederationApi.md#createFederatedDatabase) | **POST** /api/atlas/v2/groups/{groupId}/dataFederation | Create One Federated Database Instance in One Project
[**createOneDataFederationQueryLimit**](DataFederationApi.md#createOneDataFederationQueryLimit) | **PATCH** /api/atlas/v2/groups/{groupId}/dataFederation/{tenantName}/limits/{limitName} | Configure One Query Limit for One Federated Database Instance
[**deleteDataFederationPrivateEndpoint**](DataFederationApi.md#deleteDataFederationPrivateEndpoint) | **DELETE** /api/atlas/v2/groups/{groupId}/privateNetworkSettings/endpointIds/{endpointId} | Remove One Federated Database Instance and Online Archive Private Endpoint from One Project
[**deleteFederatedDatabase**](DataFederationApi.md#deleteFederatedDatabase) | **DELETE** /api/atlas/v2/groups/{groupId}/dataFederation/{tenantName} | Remove One Federated Database Instance from One Project
[**deleteOneDataFederationInstanceQueryLimit**](DataFederationApi.md#deleteOneDataFederationInstanceQueryLimit) | **DELETE** /api/atlas/v2/groups/{groupId}/dataFederation/{tenantName}/limits/{limitName} | Delete One Query Limit For One Federated Database Instance
[**downloadFederatedDatabaseQueryLogs**](DataFederationApi.md#downloadFederatedDatabaseQueryLogs) | **GET** /api/atlas/v2/groups/{groupId}/dataFederation/{tenantName}/queryLogs.gz | Download Query Logs for One Federated Database Instance
[**getDataFederationPrivateEndpoint**](DataFederationApi.md#getDataFederationPrivateEndpoint) | **GET** /api/atlas/v2/groups/{groupId}/privateNetworkSettings/endpointIds/{endpointId} | Return One Federated Database Instance and Online Archive Private Endpoint in One Project
[**getFederatedDatabase**](DataFederationApi.md#getFederatedDatabase) | **GET** /api/atlas/v2/groups/{groupId}/dataFederation/{tenantName} | Return One Federated Database Instance in One Project
[**listDataFederationPrivateEndpoints**](DataFederationApi.md#listDataFederationPrivateEndpoints) | **GET** /api/atlas/v2/groups/{groupId}/privateNetworkSettings/endpointIds | Return All Federated Database Instance and Online Archive Private Endpoints in One Project
[**listFederatedDatabases**](DataFederationApi.md#listFederatedDatabases) | **GET** /api/atlas/v2/groups/{groupId}/dataFederation | Return All Federated Database Instances in One Project
[**returnFederatedDatabaseQueryLimit**](DataFederationApi.md#returnFederatedDatabaseQueryLimit) | **GET** /api/atlas/v2/groups/{groupId}/dataFederation/{tenantName}/limits/{limitName} | Return One Federated Database Instance Query Limit for One Project
[**returnFederatedDatabaseQueryLimits**](DataFederationApi.md#returnFederatedDatabaseQueryLimits) | **GET** /api/atlas/v2/groups/{groupId}/dataFederation/{tenantName}/limits | Return All Query Limits for One Federated Database Instance
[**updateFederatedDatabase**](DataFederationApi.md#updateFederatedDatabase) | **PATCH** /api/atlas/v2/groups/{groupId}/dataFederation/{tenantName} | Update One Federated Database Instance in One Project


# **createDataFederationPrivateEndpoint**
> PaginatedPrivateNetworkEndpointIdEntry createDataFederationPrivateEndpoint(privateNetworkEndpointIdEntry)

Adds one private endpoint for Federated Database Instances and Online Archives to the specified projects. If the endpoint ID already exists and the associated comment is unchanged, Atlas Data Federation makes no change to the endpoint ID list. If the endpoint ID already exists and the associated comment is changed, Atlas Data Federation updates the comment value only in the endpoint ID list. If the endpoint ID doesn't exist, Atlas Data Federation appends the new endpoint to the list of endpoints in the endpoint ID list. Each region has an associated service name for the various endpoints in each region.   `us-east-1` is `com.amazonaws.vpce.us-east-1.vpce-svc-00e311695874992b4`.   `us-west-1` is `com.amazonaws.vpce.us-west-2.vpce-svc-09d86b19e59d1b4bb`.   `eu-west-1` is `com.amazonaws.vpce.eu-west-1.vpce-svc-0824460b72e1a420e`.   `eu-west-2` is `com.amazonaws.vpce.eu-west-2.vpce-svc-052f1840aa0c4f1f9`.   `eu-central-1` is `com.amazonaws.vpce.eu-central-1.vpce-svc-0ac8ce91871138c0d`.   `sa-east-1` is `com.amazonaws.vpce.sa-east-1.vpce-svc-0b56e75e8cdf50044`.   `ap-southeast-2` is `com.amazonaws.vpce.ap-southeast-2.vpce-svc-036f1de74d761706e`.   `ap-south-1` is `com.amazonaws.vpce.ap-south-1.vpce-svc-03eb8a541f96d356d`.   To use this resource, the requesting API Key must have the Project Owner or Project Charts Admin roles.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataFederationApi(configuration);

let body:.DataFederationApiCreateDataFederationPrivateEndpointRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // PrivateNetworkEndpointIdEntry | Private endpoint for Federated Database Instances and Online Archives to add to the specified project.
  privateNetworkEndpointIdEntry: {
    comment: "comment_example",
    customerEndpointDNSName: "customerEndpointDNSName_example",
    endpointId: "vpce-3bf78b0ddee411ba1",
    provider: "AWS",
    region: "region_example",
    type: "DATA_LAKE",
  },
};

apiInstance.createDataFederationPrivateEndpoint(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **privateNetworkEndpointIdEntry** | **PrivateNetworkEndpointIdEntry**| Private endpoint for Federated Database Instances and Online Archives to add to the specified project. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined


### Return type

**PaginatedPrivateNetworkEndpointIdEntry**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.atlas.2023-01-01+json
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**400** | Bad Request. |  -  |
**401** | Unauthorized. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createFederatedDatabase**
> DataLakeTenant createFederatedDatabase(dataLakeTenant)

Creates one federated database instance in the specified project. To use this resource, the requesting API Key must have the Project Owner or Project Charts Admin roles.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataFederationApi(configuration);

let body:.DataFederationApiCreateFederatedDatabaseRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // DataLakeTenant | Details to create one federated database instance in the specified project.
  dataLakeTenant: {
    cloudProviderConfig: {
      aws: {
        roleId: "roleId_example",
        testS3Bucket: "testS3Bucket_example",
      },
    },
    dataProcessRegion: {
      cloudProvider: "cloudProvider_example",
      region: "region_example",
    },
    name: "name_example",
    storage: {
      databases: [
        {
          collections: [
            {
              dataSources: [
                {
                  allowInsecure: false,
                  collection: "collection_example",
                  collectionRegex: "collectionRegex_example",
                  database: "database_example",
                  databaseRegex: "databaseRegex_example",
                  datasetName: "v1$atlas$snapshot$Cluster0$myDatabase$myCollection$19700101T000000Z",
                  datasetPrefix: "datasetPrefix_example",
                  defaultFormat: "defaultFormat_example",
                  path: "path_example",
                  provenanceFieldName: "provenanceFieldName_example",
                  storeName: "storeName_example",
                  trimLevel: 1,
                  urls: [
                    "urls_example",
                  ],
                },
              ],
              name: "name_example",
            },
          ],
          maxWildcardCollections: 100,
          name: "name_example",
          views: [
            {
              name: "name_example",
              pipeline: "pipeline_example",
              source: "source_example",
            },
          ],
        },
      ],
      stores: [
        {
          name: "name_example",
          provider: "provider_example",
          additionalStorageClasses: [
            "additionalStorageClasses_example",
          ],
          bucket: "bucket_example",
          delimiter: "delimiter_example",
          includeTags: false,
          prefix: "prefix_example",
          _public: false,
          region: "region_example",
          clusterName: "clusterName_example",
          readConcern: {
            level: "level_example",
          },
          readPreference: {
            maxStalenessSeconds: 1,
            mode: "mode_example",
            tagSets: [
              [
                {
                  name: "name_example",
                  value: "value_example",
                },
              ],
            ],
          },
          allowInsecure: false,
          defaultFormat: "defaultFormat_example",
          urls: [
            "urls_example",
          ],
        },
      ],
    },
  },
  // boolean | Flag that indicates whether this request should check if the requesting IAM role can read from the S3 bucket. AWS checks if the role can list the objects in the bucket before writing to it. Some IAM roles only need write permissions. This flag allows you to skip that check. (optional)
  skipRoleValidation: false,
};

apiInstance.createFederatedDatabase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataLakeTenant** | **DataLakeTenant**| Details to create one federated database instance in the specified project. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **skipRoleValidation** | [**boolean**] | Flag that indicates whether this request should check if the requesting IAM role can read from the S3 bucket. AWS checks if the role can list the objects in the bucket before writing to it. Some IAM roles only need write permissions. This flag allows you to skip that check. | (optional) defaults to undefined


### Return type

**DataLakeTenant**

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

# **createOneDataFederationQueryLimit**
> DataFederationTenantQueryLimit createOneDataFederationQueryLimit(dataFederationTenantQueryLimit)

Creates or updates one query limit for one federated database instance. To use this resource, the requesting API Key must have the Project Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataFederationApi(configuration);

let body:.DataFederationApiCreateOneDataFederationQueryLimitRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the federated database instance to which the query limit applies.
  tenantName: "tenantName_example",
  // string | Human-readable label that identifies this data federation instance limit.  | Limit Name | Description | Default | | --- | --- | --- | | bytesProcessed.query | Limit on the number of bytes processed during a single data federation query | N/A | | bytesProcessed.daily | Limit on the number of bytes processed for the data federation instance for the current day | N/A | | bytesProcessed.weekly | Limit on the number of bytes processed for the data federation instance for the current week | N/A | | bytesProcessed.monthly | Limit on the number of bytes processed for the data federation instance for the current month | N/A | 
  limitName: "limitName_example",
  // DataFederationTenantQueryLimit | Creates or updates one query limit for one federated database instance.
  dataFederationTenantQueryLimit: {
    overrunPolicy: "overrunPolicy_example",
    value: 1,
  },
};

apiInstance.createOneDataFederationQueryLimit(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataFederationTenantQueryLimit** | **DataFederationTenantQueryLimit**| Creates or updates one query limit for one federated database instance. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **tenantName** | [**string**] | Human-readable label that identifies the federated database instance to which the query limit applies. | defaults to undefined
 **limitName** | [**string**] | Human-readable label that identifies this data federation instance limit.  | Limit Name | Description | Default | | --- | --- | --- | | bytesProcessed.query | Limit on the number of bytes processed during a single data federation query | N/A | | bytesProcessed.daily | Limit on the number of bytes processed for the data federation instance for the current day | N/A | | bytesProcessed.weekly | Limit on the number of bytes processed for the data federation instance for the current week | N/A | | bytesProcessed.monthly | Limit on the number of bytes processed for the data federation instance for the current month | N/A |  | defaults to undefined


### Return type

**DataFederationTenantQueryLimit**

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

# **deleteDataFederationPrivateEndpoint**
> any deleteDataFederationPrivateEndpoint()

Removes one private endpoint for Federated Database Instances and Online Archives in the specified project. To use this resource, the requesting API Key must have the Project Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataFederationApi(configuration);

let body:.DataFederationApiDeleteDataFederationPrivateEndpointRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Unique 22-character alphanumeric string that identifies the private endpoint to remove. Atlas Data Federation supports AWS private endpoints using the AWS PrivateLink feature.
  endpointId: "vpce-bf325375e030fccba",
};

apiInstance.deleteDataFederationPrivateEndpoint(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **endpointId** | [**string**] | Unique 22-character alphanumeric string that identifies the private endpoint to remove. Atlas Data Federation supports AWS private endpoints using the AWS PrivateLink feature. | defaults to undefined


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
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteFederatedDatabase**
> any deleteFederatedDatabase()

Removes one federated database instance from the specified project. To use this resource, the requesting API Key must have the Project Owner or Project Charts Admin roles.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataFederationApi(configuration);

let body:.DataFederationApiDeleteFederatedDatabaseRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the federated database instance to remove.
  tenantName: "tenantName_example",
};

apiInstance.deleteFederatedDatabase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **tenantName** | [**string**] | Human-readable label that identifies the federated database instance to remove. | defaults to undefined


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
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteOneDataFederationInstanceQueryLimit**
> any deleteOneDataFederationInstanceQueryLimit()

Deletes one query limit for one federated database instance. To use this resource, the requesting API Key must have the Project Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataFederationApi(configuration);

let body:.DataFederationApiDeleteOneDataFederationInstanceQueryLimitRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the federated database instance to which the query limit applies.
  tenantName: "tenantName_example",
  // string | Human-readable label that identifies this data federation instance limit.  | Limit Name | Description | Default | | --- | --- | --- | | bytesProcessed.query | Limit on the number of bytes processed during a single data federation query | N/A | | bytesProcessed.daily | Limit on the number of bytes processed for the data federation instance for the current day | N/A | | bytesProcessed.weekly | Limit on the number of bytes processed for the data federation instance for the current week | N/A | | bytesProcessed.monthly | Limit on the number of bytes processed for the data federation instance for the current month | N/A | 
  limitName: "limitName_example",
};

apiInstance.deleteOneDataFederationInstanceQueryLimit(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **tenantName** | [**string**] | Human-readable label that identifies the federated database instance to which the query limit applies. | defaults to undefined
 **limitName** | [**string**] | Human-readable label that identifies this data federation instance limit.  | Limit Name | Description | Default | | --- | --- | --- | | bytesProcessed.query | Limit on the number of bytes processed during a single data federation query | N/A | | bytesProcessed.daily | Limit on the number of bytes processed for the data federation instance for the current day | N/A | | bytesProcessed.weekly | Limit on the number of bytes processed for the data federation instance for the current week | N/A | | bytesProcessed.monthly | Limit on the number of bytes processed for the data federation instance for the current month | N/A |  | defaults to undefined


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

# **downloadFederatedDatabaseQueryLogs**
> HttpFile downloadFederatedDatabaseQueryLogs()

Downloads the query logs for the specified federated database instance. To use this resource, the requesting API Key must have the Project Owner or Project Data Access Read Write roles.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataFederationApi(configuration);

let body:.DataFederationApiDownloadFederatedDatabaseQueryLogsRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the federated database instance for which you want to download query logs.
  tenantName: "tenantName_example",
  // number | Timestamp that specifies the end point for the range of log messages to download.  MongoDB Cloud expresses this timestamp in the number of seconds that have elapsed since the UNIX epoch. (optional)
  endDate: 1636481348,
  // number | Timestamp that specifies the starting point for the range of log messages to download. MongoDB Cloud expresses this timestamp in the number of seconds that have elapsed since the UNIX epoch. (optional)
  startDate: 1636466948,
};

apiInstance.downloadFederatedDatabaseQueryLogs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **tenantName** | [**string**] | Human-readable label that identifies the federated database instance for which you want to download query logs. | defaults to undefined
 **endDate** | [**number**] | Timestamp that specifies the end point for the range of log messages to download.  MongoDB Cloud expresses this timestamp in the number of seconds that have elapsed since the UNIX epoch. | (optional) defaults to undefined
 **startDate** | [**number**] | Timestamp that specifies the starting point for the range of log messages to download. MongoDB Cloud expresses this timestamp in the number of seconds that have elapsed since the UNIX epoch. | (optional) defaults to undefined


### Return type

**HttpFile**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+gzip, application/json


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

# **getDataFederationPrivateEndpoint**
> PrivateNetworkEndpointIdEntry getDataFederationPrivateEndpoint()

Returns the specified private endpoint for Federated Database Instances or Online Archives in the specified project. To use this resource, the requesting API Key must have the Project Read Only or Project Charts Admin roles.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataFederationApi(configuration);

let body:.DataFederationApiGetDataFederationPrivateEndpointRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Unique 22-character alphanumeric string that identifies the private endpoint to return. Atlas Data Federation supports AWS private endpoints using the AWS PrivateLink feature.
  endpointId: "vpce-bf325375e030fccba",
};

apiInstance.getDataFederationPrivateEndpoint(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **endpointId** | [**string**] | Unique 22-character alphanumeric string that identifies the private endpoint to return. Atlas Data Federation supports AWS private endpoints using the AWS PrivateLink feature. | defaults to undefined


### Return type

**PrivateNetworkEndpointIdEntry**

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

# **getFederatedDatabase**
> DataLakeTenant getFederatedDatabase()

Returns the details of one federated database instance within the specified project. To use this resource, the requesting API Key must have the Project Read Only or Project Charts Admin roles.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataFederationApi(configuration);

let body:.DataFederationApiGetFederatedDatabaseRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the Federated Database to return.
  tenantName: "tenantName_example",
};

apiInstance.getFederatedDatabase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **tenantName** | [**string**] | Human-readable label that identifies the Federated Database to return. | defaults to undefined


### Return type

**DataLakeTenant**

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

# **listDataFederationPrivateEndpoints**
> PaginatedPrivateNetworkEndpointIdEntry listDataFederationPrivateEndpoints()

Returns all private endpoints for Federated Database Instances and Online Archives in the specified project. To use this resource, the requesting API Key must have the Project Read Only or Project Charts Admin roles.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataFederationApi(configuration);

let body:.DataFederationApiListDataFederationPrivateEndpointsRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // boolean | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. (optional)
  includeCount: true,
  // number | Number of items that the response returns per page. (optional)
  itemsPerPage: 100,
  // number | Number of the page that displays the current set of the total objects that the response returns. (optional)
  pageNum: 1,
};

apiInstance.listDataFederationPrivateEndpoints(body).then((data:any) => {
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

**PaginatedPrivateNetworkEndpointIdEntry**

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

# **listFederatedDatabases**
> Array<DataLakeTenant> listFederatedDatabases()

Returns the details of all federated database instances in the specified project. To use this resource, the requesting API Key must have the Project Read Only or higher role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataFederationApi(configuration);

let body:.DataFederationApiListFederatedDatabasesRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Type of Federated Database Instances to return. (optional)
  type: "USER",
};

apiInstance.listFederatedDatabases(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **type** | [**string**] | Type of Federated Database Instances to return. | (optional) defaults to 'USER'


### Return type

**Array<DataLakeTenant>**

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

# **returnFederatedDatabaseQueryLimit**
> DataFederationTenantQueryLimit returnFederatedDatabaseQueryLimit()

Returns the details of one query limit for the specified federated database instance in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataFederationApi(configuration);

let body:.DataFederationApiReturnFederatedDatabaseQueryLimitRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the federated database instance to which the query limit applies.
  tenantName: "tenantName_example",
  // string | Human-readable label that identifies this data federation instance limit.  | Limit Name | Description | Default | | --- | --- | --- | | bytesProcessed.query | Limit on the number of bytes processed during a single data federation query | N/A | | bytesProcessed.daily | Limit on the number of bytes processed for the data federation instance for the current day | N/A | | bytesProcessed.weekly | Limit on the number of bytes processed for the data federation instance for the current week | N/A | | bytesProcessed.monthly | Limit on the number of bytes processed for the data federation instance for the current month | N/A | 
  limitName: "limitName_example",
};

apiInstance.returnFederatedDatabaseQueryLimit(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **tenantName** | [**string**] | Human-readable label that identifies the federated database instance to which the query limit applies. | defaults to undefined
 **limitName** | [**string**] | Human-readable label that identifies this data federation instance limit.  | Limit Name | Description | Default | | --- | --- | --- | | bytesProcessed.query | Limit on the number of bytes processed during a single data federation query | N/A | | bytesProcessed.daily | Limit on the number of bytes processed for the data federation instance for the current day | N/A | | bytesProcessed.weekly | Limit on the number of bytes processed for the data federation instance for the current week | N/A | | bytesProcessed.monthly | Limit on the number of bytes processed for the data federation instance for the current month | N/A |  | defaults to undefined


### Return type

**DataFederationTenantQueryLimit**

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

# **returnFederatedDatabaseQueryLimits**
> Array<DataFederationTenantQueryLimit> returnFederatedDatabaseQueryLimits()

Returns query limits for a federated databases instance in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataFederationApi(configuration);

let body:.DataFederationApiReturnFederatedDatabaseQueryLimitsRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the federated database instance for which you want to retrieve query limits.
  tenantName: "tenantName_example",
};

apiInstance.returnFederatedDatabaseQueryLimits(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **tenantName** | [**string**] | Human-readable label that identifies the federated database instance for which you want to retrieve query limits. | defaults to undefined


### Return type

**Array<DataFederationTenantQueryLimit>**

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

# **updateFederatedDatabase**
> DataLakeTenant updateFederatedDatabase(dataLakeTenant)

Updates the details of one federated database instance in the specified project. To use this resource, the requesting API Key must have the Project Owner or higher role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataFederationApi(configuration);

let body:.DataFederationApiUpdateFederatedDatabaseRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the federated database instance to update.
  tenantName: "tenantName_example",
  // boolean | Flag that indicates whether this request should check if the requesting IAM role can read from the S3 bucket. AWS checks if the role can list the objects in the bucket before writing to it. Some IAM roles only need write permissions. This flag allows you to skip that check.
  skipRoleValidation: true,
  // DataLakeTenant | Details of one Federated Database to update in the specified project.
  dataLakeTenant: {
    cloudProviderConfig: {
      aws: {
        roleId: "roleId_example",
        testS3Bucket: "testS3Bucket_example",
      },
    },
    dataProcessRegion: {
      cloudProvider: "cloudProvider_example",
      region: "region_example",
    },
    name: "name_example",
    storage: {
      databases: [
        {
          collections: [
            {
              dataSources: [
                {
                  allowInsecure: false,
                  collection: "collection_example",
                  collectionRegex: "collectionRegex_example",
                  database: "database_example",
                  databaseRegex: "databaseRegex_example",
                  datasetName: "v1$atlas$snapshot$Cluster0$myDatabase$myCollection$19700101T000000Z",
                  datasetPrefix: "datasetPrefix_example",
                  defaultFormat: "defaultFormat_example",
                  path: "path_example",
                  provenanceFieldName: "provenanceFieldName_example",
                  storeName: "storeName_example",
                  trimLevel: 1,
                  urls: [
                    "urls_example",
                  ],
                },
              ],
              name: "name_example",
            },
          ],
          maxWildcardCollections: 100,
          name: "name_example",
          views: [
            {
              name: "name_example",
              pipeline: "pipeline_example",
              source: "source_example",
            },
          ],
        },
      ],
      stores: [
        {
          name: "name_example",
          provider: "provider_example",
          additionalStorageClasses: [
            "additionalStorageClasses_example",
          ],
          bucket: "bucket_example",
          delimiter: "delimiter_example",
          includeTags: false,
          prefix: "prefix_example",
          _public: false,
          region: "region_example",
          clusterName: "clusterName_example",
          readConcern: {
            level: "level_example",
          },
          readPreference: {
            maxStalenessSeconds: 1,
            mode: "mode_example",
            tagSets: [
              [
                {
                  name: "name_example",
                  value: "value_example",
                },
              ],
            ],
          },
          allowInsecure: false,
          defaultFormat: "defaultFormat_example",
          urls: [
            "urls_example",
          ],
        },
      ],
    },
  },
};

apiInstance.updateFederatedDatabase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataLakeTenant** | **DataLakeTenant**| Details of one Federated Database to update in the specified project. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **tenantName** | [**string**] | Human-readable label that identifies the federated database instance to update. | defaults to undefined
 **skipRoleValidation** | [**boolean**] | Flag that indicates whether this request should check if the requesting IAM role can read from the S3 bucket. AWS checks if the role can list the objects in the bucket before writing to it. Some IAM roles only need write permissions. This flag allows you to skip that check. | defaults to undefined


### Return type

**DataLakeTenant**

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


