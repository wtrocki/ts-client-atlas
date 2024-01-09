# .DataLakePipelinesApi

All URIs are relative to *https://cloud.mongodb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPipeline**](DataLakePipelinesApi.md#createPipeline) | **POST** /api/atlas/v2/groups/{groupId}/pipelines | Create One Data Lake Pipeline
[**deletePipeline**](DataLakePipelinesApi.md#deletePipeline) | **DELETE** /api/atlas/v2/groups/{groupId}/pipelines/{pipelineName} | Remove One Data Lake Pipeline
[**deletePipelineRunDataset**](DataLakePipelinesApi.md#deletePipelineRunDataset) | **DELETE** /api/atlas/v2/groups/{groupId}/pipelines/{pipelineName}/runs/{pipelineRunId} | Delete Pipeline Run Dataset
[**getPipeline**](DataLakePipelinesApi.md#getPipeline) | **GET** /api/atlas/v2/groups/{groupId}/pipelines/{pipelineName} | Return One Data Lake Pipeline
[**getPipelineRun**](DataLakePipelinesApi.md#getPipelineRun) | **GET** /api/atlas/v2/groups/{groupId}/pipelines/{pipelineName}/runs/{pipelineRunId} | Return One Data Lake Pipeline Run
[**listPipelineRuns**](DataLakePipelinesApi.md#listPipelineRuns) | **GET** /api/atlas/v2/groups/{groupId}/pipelines/{pipelineName}/runs | Return All Data Lake Pipeline Runs from One Project
[**listPipelineSchedules**](DataLakePipelinesApi.md#listPipelineSchedules) | **GET** /api/atlas/v2/groups/{groupId}/pipelines/{pipelineName}/availableSchedules | Return Available Ingestion Schedules for One Data Lake Pipeline
[**listPipelineSnapshots**](DataLakePipelinesApi.md#listPipelineSnapshots) | **GET** /api/atlas/v2/groups/{groupId}/pipelines/{pipelineName}/availableSnapshots | Return Available Backup Snapshots for One Data Lake Pipeline
[**listPipelines**](DataLakePipelinesApi.md#listPipelines) | **GET** /api/atlas/v2/groups/{groupId}/pipelines | Return All Data Lake Pipelines from One Project
[**pausePipeline**](DataLakePipelinesApi.md#pausePipeline) | **POST** /api/atlas/v2/groups/{groupId}/pipelines/{pipelineName}/pause | Pause One Data Lake Pipeline
[**resumePipeline**](DataLakePipelinesApi.md#resumePipeline) | **POST** /api/atlas/v2/groups/{groupId}/pipelines/{pipelineName}/resume | Resume One Data Lake Pipeline
[**triggerSnapshotIngestion**](DataLakePipelinesApi.md#triggerSnapshotIngestion) | **POST** /api/atlas/v2/groups/{groupId}/pipelines/{pipelineName}/trigger | Trigger on demand snapshot ingestion
[**updatePipeline**](DataLakePipelinesApi.md#updatePipeline) | **PATCH** /api/atlas/v2/groups/{groupId}/pipelines/{pipelineName} | Update One Data Lake Pipeline


# **createPipeline**
> DataLakeIngestionPipeline createPipeline(dataLakeIngestionPipeline)

Creates one Data Lake Pipeline.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataLakePipelinesApi(configuration);

let body:.DataLakePipelinesApiCreatePipelineRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // DataLakeIngestionPipeline | Creates one Data Lake Pipeline.
  dataLakeIngestionPipeline: {
    datasetRetentionPolicy: {
      units: "units_example",
      value: 1,
    },
    name: "name_example",
    sink: {
      metadataProvider: "metadataProvider_example",
      metadataRegion: "metadataRegion_example",
      partitionFields: [
        {
          fieldName: "fieldName_example",
          order: 0,
        },
      ],
    },
    source: {
      type: "type_example",
      clusterName: "clusterName_example",
      collectionName: "collectionName_example",
      databaseName: "databaseName_example",
      policyItemId: "32b6e34b3d91647abb20e7b8",
    },
    transformations: [
      {
        field: "field_example",
        type: "type_example",
      },
    ],
  },
};

apiInstance.createPipeline(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataLakeIngestionPipeline** | **DataLakeIngestionPipeline**| Creates one Data Lake Pipeline. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined


### Return type

**DataLakeIngestionPipeline**

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

# **deletePipeline**
> any deletePipeline()

Removes one Data Lake Pipeline.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataLakePipelinesApi(configuration);

let body:.DataLakePipelinesApiDeletePipelineRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the Data Lake Pipeline.
  pipelineName: "P+a5XTJiB!9pN_kmb|~J!7gXm=(B-6pL*4:B4+HcKO&KdnO",
};

apiInstance.deletePipeline(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **pipelineName** | [**string**] | Human-readable label that identifies the Data Lake Pipeline. | defaults to undefined


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

# **deletePipelineRunDataset**
> any deletePipelineRunDataset()

Deletes dataset that Atlas generated during the specified pipeline run.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataLakePipelinesApi(configuration);

let body:.DataLakePipelinesApiDeletePipelineRunDatasetRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the Data Lake Pipeline.
  pipelineName: "P+a5XTJiB!9pN_kmb|~J!7gXm=(B-6pL*4:B4+HcKO&KdnO",
  // string | Unique 24-hexadecimal character string that identifies a Data Lake Pipeline run.
  pipelineRunId: "32b6e34b3d91647abb20e7b8",
};

apiInstance.deletePipelineRunDataset(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **pipelineName** | [**string**] | Human-readable label that identifies the Data Lake Pipeline. | defaults to undefined
 **pipelineRunId** | [**string**] | Unique 24-hexadecimal character string that identifies a Data Lake Pipeline run. | defaults to undefined


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
**400** | Bad Request. |  -  |
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPipeline**
> DataLakeIngestionPipeline getPipeline()

Returns the details of one Data Lake Pipeline within the specified project. To use this resource, the requesting API Key must have the Project Read Only role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataLakePipelinesApi(configuration);

let body:.DataLakePipelinesApiGetPipelineRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the Data Lake Pipeline.
  pipelineName: "P+a5XTJiB!9pN_kmb|~J!7gXm=(B-6pL*4:B4+HcKO&KdnO",
};

apiInstance.getPipeline(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **pipelineName** | [**string**] | Human-readable label that identifies the Data Lake Pipeline. | defaults to undefined


### Return type

**DataLakeIngestionPipeline**

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

# **getPipelineRun**
> IngestionPipelineRun getPipelineRun()

Returns the details of one Data Lake Pipeline run within the specified project. To use this resource, the requesting API Key must have the Project Read Only role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataLakePipelinesApi(configuration);

let body:.DataLakePipelinesApiGetPipelineRunRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the Data Lake Pipeline.
  pipelineName: "P+a5XTJiB!9pN_kmb|~J!7gXm=(B-6pL*4:B4+HcKO&KdnO",
  // string | Unique 24-hexadecimal character string that identifies a Data Lake Pipeline run.
  pipelineRunId: "32b6e34b3d91647abb20e7b8",
};

apiInstance.getPipelineRun(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **pipelineName** | [**string**] | Human-readable label that identifies the Data Lake Pipeline. | defaults to undefined
 **pipelineRunId** | [**string**] | Unique 24-hexadecimal character string that identifies a Data Lake Pipeline run. | defaults to undefined


### Return type

**IngestionPipelineRun**

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

# **listPipelineRuns**
> PaginatedPipelineRun listPipelineRuns()

Returns a list of past Data Lake Pipeline runs. To use this resource, the requesting API Key must have the Project Read Only role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataLakePipelinesApi(configuration);

let body:.DataLakePipelinesApiListPipelineRunsRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the Data Lake Pipeline.
  pipelineName: "P+a5XTJiB!9pN_kmb|~J!7gXm=(B-6pL*4:B4+HcKO&KdnO",
  // boolean | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. (optional)
  includeCount: true,
  // number | Number of items that the response returns per page. (optional)
  itemsPerPage: 100,
  // number | Number of the page that displays the current set of the total objects that the response returns. (optional)
  pageNum: 1,
  // Date | If specified, Atlas returns only Data Lake Pipeline runs initiated before this time and date. (optional)
  createdBefore: new Date('2022-01-01T00:00:00Z'),
};

apiInstance.listPipelineRuns(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **pipelineName** | [**string**] | Human-readable label that identifies the Data Lake Pipeline. | defaults to undefined
 **includeCount** | [**boolean**] | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. | (optional) defaults to undefined
 **itemsPerPage** | [**number**] | Number of items that the response returns per page. | (optional) defaults to 100
 **pageNum** | [**number**] | Number of the page that displays the current set of the total objects that the response returns. | (optional) defaults to 1
 **createdBefore** | [**Date**] | If specified, Atlas returns only Data Lake Pipeline runs initiated before this time and date. | (optional) defaults to undefined


### Return type

**PaginatedPipelineRun**

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

# **listPipelineSchedules**
> Array<DiskBackupApiPolicyItem> listPipelineSchedules()

Returns a list of backup schedule policy items that you can use as a Data Lake Pipeline source. To use this resource, the requesting API Key must have the Project Read Only role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataLakePipelinesApi(configuration);

let body:.DataLakePipelinesApiListPipelineSchedulesRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the Data Lake Pipeline.
  pipelineName: "P+a5XTJiB!9pN_kmb|~J!7gXm=(B-6pL*4:B4+HcKO&KdnO",
};

apiInstance.listPipelineSchedules(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **pipelineName** | [**string**] | Human-readable label that identifies the Data Lake Pipeline. | defaults to undefined


### Return type

**Array<DiskBackupApiPolicyItem>**

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

# **listPipelineSnapshots**
> PaginatedBackupSnapshot listPipelineSnapshots()

Returns a list of backup snapshots that you can use to trigger an on demand pipeline run. To use this resource, the requesting API Key must have the Project Read Only role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataLakePipelinesApi(configuration);

let body:.DataLakePipelinesApiListPipelineSnapshotsRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the Data Lake Pipeline.
  pipelineName: "P+a5XTJiB!9pN_kmb|~J!7gXm=(B-6pL*4:B4+HcKO&KdnO",
  // boolean | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. (optional)
  includeCount: true,
  // number | Number of items that the response returns per page. (optional)
  itemsPerPage: 100,
  // number | Number of the page that displays the current set of the total objects that the response returns. (optional)
  pageNum: 1,
  // Date | Date and time after which MongoDB Cloud created the snapshot. If specified, MongoDB Cloud returns available backup snapshots created after this time and date only. This parameter expresses its value in the ISO 8601 timestamp format in UTC. (optional)
  completedAfter: new Date('2022-01-01T00:00:00Z'),
};

apiInstance.listPipelineSnapshots(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **pipelineName** | [**string**] | Human-readable label that identifies the Data Lake Pipeline. | defaults to undefined
 **includeCount** | [**boolean**] | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. | (optional) defaults to undefined
 **itemsPerPage** | [**number**] | Number of items that the response returns per page. | (optional) defaults to 100
 **pageNum** | [**number**] | Number of the page that displays the current set of the total objects that the response returns. | (optional) defaults to 1
 **completedAfter** | [**Date**] | Date and time after which MongoDB Cloud created the snapshot. If specified, MongoDB Cloud returns available backup snapshots created after this time and date only. This parameter expresses its value in the ISO 8601 timestamp format in UTC. | (optional) defaults to undefined


### Return type

**PaginatedBackupSnapshot**

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

# **listPipelines**
> Array<DataLakeIngestionPipeline> listPipelines()

Returns a list of Data Lake Pipelines. To use this resource, the requesting API Key must have the Project Read Only role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataLakePipelinesApi(configuration);

let body:.DataLakePipelinesApiListPipelinesRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
};

apiInstance.listPipelines(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined


### Return type

**Array<DataLakeIngestionPipeline>**

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

# **pausePipeline**
> DataLakeIngestionPipeline pausePipeline()

Pauses ingestion for a Data Lake Pipeline within the specified project. To use this resource, the requesting API Key must have the Project Read Only role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataLakePipelinesApi(configuration);

let body:.DataLakePipelinesApiPausePipelineRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the Data Lake Pipeline.
  pipelineName: "P+a5XTJiB!9pN_kmb|~J!7gXm=(B-6pL*4:B4+HcKO&KdnO",
};

apiInstance.pausePipeline(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **pipelineName** | [**string**] | Human-readable label that identifies the Data Lake Pipeline. | defaults to undefined


### Return type

**DataLakeIngestionPipeline**

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

# **resumePipeline**
> DataLakeIngestionPipeline resumePipeline()

Resumes ingestion for a Data Lake Pipeline within the specified project. To use this resource, the requesting API Key must have the Project Read Only role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataLakePipelinesApi(configuration);

let body:.DataLakePipelinesApiResumePipelineRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the Data Lake Pipeline.
  pipelineName: "P+a5XTJiB!9pN_kmb|~J!7gXm=(B-6pL*4:B4+HcKO&KdnO",
};

apiInstance.resumePipeline(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **pipelineName** | [**string**] | Human-readable label that identifies the Data Lake Pipeline. | defaults to undefined


### Return type

**DataLakeIngestionPipeline**

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

# **triggerSnapshotIngestion**
> IngestionPipelineRun triggerSnapshotIngestion(triggerIngestionPipelineRequest)

Triggers a Data Lake Pipeline ingestion of a specified snapshot.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataLakePipelinesApi(configuration);

let body:.DataLakePipelinesApiTriggerSnapshotIngestionRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the Data Lake Pipeline.
  pipelineName: "P+a5XTJiB!9pN_kmb|~J!7gXm=(B-6pL*4:B4+HcKO&KdnO",
  // TriggerIngestionPipelineRequest | Triggers a single ingestion run of a snapshot.
  triggerIngestionPipelineRequest: {
    datasetRetentionPolicy: {
      units: "units_example",
      value: 1,
    },
    snapshotId: "32b6e34b3d91647abb20e7b8",
  },
};

apiInstance.triggerSnapshotIngestion(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **triggerIngestionPipelineRequest** | **TriggerIngestionPipelineRequest**| Triggers a single ingestion run of a snapshot. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **pipelineName** | [**string**] | Human-readable label that identifies the Data Lake Pipeline. | defaults to undefined


### Return type

**IngestionPipelineRun**

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

# **updatePipeline**
> DataLakeIngestionPipeline updatePipeline(dataLakeIngestionPipeline)

Updates one Data Lake Pipeline.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataLakePipelinesApi(configuration);

let body:.DataLakePipelinesApiUpdatePipelineRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the Data Lake Pipeline.
  pipelineName: "P+a5XTJiB!9pN_kmb|~J!7gXm=(B-6pL*4:B4+HcKO&KdnO",
  // DataLakeIngestionPipeline | Updates one Data Lake Pipeline.
  dataLakeIngestionPipeline: {
    datasetRetentionPolicy: {
      units: "units_example",
      value: 1,
    },
    name: "name_example",
    sink: {
      metadataProvider: "metadataProvider_example",
      metadataRegion: "metadataRegion_example",
      partitionFields: [
        {
          fieldName: "fieldName_example",
          order: 0,
        },
      ],
    },
    source: {
      type: "type_example",
      clusterName: "clusterName_example",
      collectionName: "collectionName_example",
      databaseName: "databaseName_example",
      policyItemId: "32b6e34b3d91647abb20e7b8",
    },
    transformations: [
      {
        field: "field_example",
        type: "type_example",
      },
    ],
  },
};

apiInstance.updatePipeline(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataLakeIngestionPipeline** | **DataLakeIngestionPipeline**| Updates one Data Lake Pipeline. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **pipelineName** | [**string**] | Human-readable label that identifies the Data Lake Pipeline. | defaults to undefined


### Return type

**DataLakeIngestionPipeline**

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


