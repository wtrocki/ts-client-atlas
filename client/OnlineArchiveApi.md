# .OnlineArchiveApi

All URIs are relative to *https://cloud.mongodb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOnlineArchive**](OnlineArchiveApi.md#createOnlineArchive) | **POST** /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/onlineArchives | Create One Online Archive
[**deleteOnlineArchive**](OnlineArchiveApi.md#deleteOnlineArchive) | **DELETE** /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/onlineArchives/{archiveId} | Remove One Online Archive
[**downloadOnlineArchiveQueryLogs**](OnlineArchiveApi.md#downloadOnlineArchiveQueryLogs) | **GET** /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/onlineArchives/queryLogs.gz | Download Online Archive Query Logs
[**getOnlineArchive**](OnlineArchiveApi.md#getOnlineArchive) | **GET** /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/onlineArchives/{archiveId} | Return One Online Archive
[**listOnlineArchives**](OnlineArchiveApi.md#listOnlineArchives) | **GET** /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/onlineArchives | Return All Online Archives for One Cluster
[**updateOnlineArchive**](OnlineArchiveApi.md#updateOnlineArchive) | **PATCH** /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/onlineArchives/{archiveId} | Update One Online Archive


# **createOnlineArchive**
> BackupOnlineArchive createOnlineArchive(backupOnlineArchiveCreate)

Creates one online archive. This archive stores data from one cluster within one project. To use this resource, the requesting API Key must have the Project Data Access Admin role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OnlineArchiveApi(configuration);

let body:.OnlineArchiveApiCreateOnlineArchiveRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the cluster that contains the collection for which you want to create one online archive.
  clusterName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
  // BackupOnlineArchiveCreate | Creates one online archive.
  backupOnlineArchiveCreate: {
    collName: "collName_example",
    collectionType: "STANDARD",
    criteria: {
      type: "type_example",
      query: "query_example",
      dateField: "dateField_example",
      dateFormat: "ISODATE",
      expireAfterDays: 1,
    },
    dataExpirationRule: {
      expireAfterDays: 7,
    },
    dataProcessRegion: {
      cloudProvider: "cloudProvider_example",
      region: "region_example",
    },
    dbName: "dbName_example",
    partitionFields: [
      {
        fieldName: "fieldName_example",
        order: 0,
      },
    ],
    paused: true,
    schedule: {
      type: "type_example",
      endHour: 0,
      endMinute: 0,
      startHour: 0,
      startMinute: 0,
      dayOfWeek: 1,
      dayOfMonth: 1,
    },
  },
};

apiInstance.createOnlineArchive(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backupOnlineArchiveCreate** | **BackupOnlineArchiveCreate**| Creates one online archive. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **clusterName** | [**string**] | Human-readable label that identifies the cluster that contains the collection for which you want to create one online archive. | defaults to undefined


### Return type

**BackupOnlineArchive**

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

# **deleteOnlineArchive**
> any deleteOnlineArchive()

Removes one online archive. This archive stores data from one cluster within one project. To use this resource, the requesting API Key must have the Project Data Access Admin role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OnlineArchiveApi(configuration);

let body:.OnlineArchiveApiDeleteOnlineArchiveRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Unique 24-hexadecimal digit string that identifies the online archive to delete.
  archiveId: "bf325375e030fccba0091731",
  // string | Human-readable label that identifies the cluster that contains the collection from which you want to remove an online archive.
  clusterName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
};

apiInstance.deleteOnlineArchive(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **archiveId** | [**string**] | Unique 24-hexadecimal digit string that identifies the online archive to delete. | defaults to undefined
 **clusterName** | [**string**] | Human-readable label that identifies the cluster that contains the collection from which you want to remove an online archive. | defaults to undefined


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

# **downloadOnlineArchiveQueryLogs**
> HttpFile downloadOnlineArchiveQueryLogs()

Downloads query logs for the specified online archive. To use this resource, the requesting API Key must have the Project Data Access Read Only or higher role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OnlineArchiveApi(configuration);

let body:.OnlineArchiveApiDownloadOnlineArchiveQueryLogsRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the cluster that contains the collection for which you want to return the query logs from one online archive.
  clusterName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
  // number | Date and time that specifies the starting point for the range of log messages to return. This resource expresses this value in the number of seconds that have elapsed since the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time). (optional)
  startDate: 1636481348,
  // number | Date and time that specifies the end point for the range of log messages to return. This resource expresses this value in the number of seconds that have elapsed since the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time). (optional)
  endDate: 1636481348,
  // boolean | Flag that indicates whether to download logs for queries against your online archive only or both your online archive and cluster. (optional)
  archiveOnly: false,
};

apiInstance.downloadOnlineArchiveQueryLogs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **clusterName** | [**string**] | Human-readable label that identifies the cluster that contains the collection for which you want to return the query logs from one online archive. | defaults to undefined
 **startDate** | [**number**] | Date and time that specifies the starting point for the range of log messages to return. This resource expresses this value in the number of seconds that have elapsed since the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time). | (optional) defaults to undefined
 **endDate** | [**number**] | Date and time that specifies the end point for the range of log messages to return. This resource expresses this value in the number of seconds that have elapsed since the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time). | (optional) defaults to undefined
 **archiveOnly** | [**boolean**] | Flag that indicates whether to download logs for queries against your online archive only or both your online archive and cluster. | (optional) defaults to undefined


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
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOnlineArchive**
> BackupOnlineArchive getOnlineArchive()

Returns one online archive for one cluster. This archive stores data from one cluster within one project. To use this resource, the requesting API Key must have the Project Read Only role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OnlineArchiveApi(configuration);

let body:.OnlineArchiveApiGetOnlineArchiveRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Unique 24-hexadecimal digit string that identifies the online archive to return.
  archiveId: "bf325375e030fccba0091731",
  // string | Human-readable label that identifies the cluster that contains the specified collection from which Application created the online archive.
  clusterName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
};

apiInstance.getOnlineArchive(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **archiveId** | [**string**] | Unique 24-hexadecimal digit string that identifies the online archive to return. | defaults to undefined
 **clusterName** | [**string**] | Human-readable label that identifies the cluster that contains the specified collection from which Application created the online archive. | defaults to undefined


### Return type

**BackupOnlineArchive**

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

# **listOnlineArchives**
> PaginatedOnlineArchive listOnlineArchives()

Returns details of all online archives. This archive stores data from one cluster within one project. To use this resource, the requesting API Key must have the Project Read Only role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OnlineArchiveApi(configuration);

let body:.OnlineArchiveApiListOnlineArchivesRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the cluster that contains the collection for which you want to return the online archives.
  clusterName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
  // boolean | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. (optional)
  includeCount: true,
  // number | Number of items that the response returns per page. (optional)
  itemsPerPage: 100,
  // number | Number of the page that displays the current set of the total objects that the response returns. (optional)
  pageNum: 1,
};

apiInstance.listOnlineArchives(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **clusterName** | [**string**] | Human-readable label that identifies the cluster that contains the collection for which you want to return the online archives. | defaults to undefined
 **includeCount** | [**boolean**] | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. | (optional) defaults to undefined
 **itemsPerPage** | [**number**] | Number of items that the response returns per page. | (optional) defaults to 100
 **pageNum** | [**number**] | Number of the page that displays the current set of the total objects that the response returns. | (optional) defaults to 1


### Return type

**PaginatedOnlineArchive**

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

# **updateOnlineArchive**
> BackupOnlineArchive updateOnlineArchive(backupOnlineArchive)

Updates, pauses, or resumes one online archive. This archive stores data from one cluster within one project. To use this resource, the requesting API Key must have the Project Data Access Admin role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OnlineArchiveApi(configuration);

let body:.OnlineArchiveApiUpdateOnlineArchiveRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Unique 24-hexadecimal digit string that identifies the online archive to update.
  archiveId: "bf325375e030fccba0091731",
  // string | Human-readable label that identifies the cluster that contains the specified collection from which Application created the online archive.
  clusterName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
  // BackupOnlineArchive | Updates, pauses, or resumes one online archive.
  backupOnlineArchive: {
    collName: "collName_example",
    collectionType: "STANDARD",
    criteria: {
      type: "type_example",
      query: "query_example",
      dateField: "dateField_example",
      dateFormat: "ISODATE",
      expireAfterDays: 1,
    },
    dataExpirationRule: {
      expireAfterDays: 7,
    },
    dataProcessRegion: {
      cloudProvider: "cloudProvider_example",
      region: "region_example",
    },
    dbName: "dbName_example",
    partitionFields: [
      {
        fieldName: "fieldName_example",
        order: 0,
      },
    ],
    paused: true,
    schedule: {
      type: "type_example",
      endHour: 0,
      endMinute: 0,
      startHour: 0,
      startMinute: 0,
      dayOfWeek: 1,
      dayOfMonth: 1,
    },
  },
};

apiInstance.updateOnlineArchive(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backupOnlineArchive** | **BackupOnlineArchive**| Updates, pauses, or resumes one online archive. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **archiveId** | [**string**] | Unique 24-hexadecimal digit string that identifies the online archive to update. | defaults to undefined
 **clusterName** | [**string**] | Human-readable label that identifies the cluster that contains the specified collection from which Application created the online archive. | defaults to undefined


### Return type

**BackupOnlineArchive**

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


