# .MonitoringAndLogsApi

All URIs are relative to *https://cloud.mongodb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAtlasProcess**](MonitoringAndLogsApi.md#getAtlasProcess) | **GET** /api/atlas/v2/groups/{groupId}/processes/{processId} | Return One MongoDB Process by ID
[**getDatabase**](MonitoringAndLogsApi.md#getDatabase) | **GET** /api/atlas/v2/groups/{groupId}/processes/{processId}/databases/{databaseName} | Return One Database for a MongoDB Process
[**getDatabaseMeasurements**](MonitoringAndLogsApi.md#getDatabaseMeasurements) | **GET** /api/atlas/v2/groups/{groupId}/processes/{processId}/databases/{databaseName}/measurements | Return Measurements of One Database for One MongoDB Process
[**getDiskMeasurements**](MonitoringAndLogsApi.md#getDiskMeasurements) | **GET** /api/atlas/v2/groups/{groupId}/processes/{processId}/disks/{partitionName}/measurements | Return Measurements of One Disk for One MongoDB Process
[**getHostLogs**](MonitoringAndLogsApi.md#getHostLogs) | **GET** /api/atlas/v2/groups/{groupId}/clusters/{hostName}/logs/{logName}.gz | Download Logs for One Multi-Cloud Cluster Host in One Project
[**getHostMeasurements**](MonitoringAndLogsApi.md#getHostMeasurements) | **GET** /api/atlas/v2/groups/{groupId}/processes/{processId}/measurements | Return Measurements for One MongoDB Process
[**getIndexMetrics**](MonitoringAndLogsApi.md#getIndexMetrics) | **GET** /api/atlas/v2/groups/{groupId}/hosts/{processId}/fts/metrics/indexes/{databaseName}/{collectionName}/{indexName}/measurements | Return Atlas Search Metrics for One Index in One Specified Namespace
[**getMeasurements**](MonitoringAndLogsApi.md#getMeasurements) | **GET** /api/atlas/v2/groups/{groupId}/hosts/{processId}/fts/metrics/measurements | Return Atlas Search Hardware and Status Metrics
[**listAtlasProcesses**](MonitoringAndLogsApi.md#listAtlasProcesses) | **GET** /api/atlas/v2/groups/{groupId}/processes | Return All MongoDB Processes in One Project
[**listDatabases**](MonitoringAndLogsApi.md#listDatabases) | **GET** /api/atlas/v2/groups/{groupId}/processes/{processId}/databases | Return Available Databases for One MongoDB Process
[**listDiskMeasurements**](MonitoringAndLogsApi.md#listDiskMeasurements) | **GET** /api/atlas/v2/groups/{groupId}/processes/{processId}/disks/{partitionName} | Return Measurements of One Disk
[**listDiskPartitions**](MonitoringAndLogsApi.md#listDiskPartitions) | **GET** /api/atlas/v2/groups/{groupId}/processes/{processId}/disks | Return Available Disks for One MongoDB Process
[**listIndexMetrics**](MonitoringAndLogsApi.md#listIndexMetrics) | **GET** /api/atlas/v2/groups/{groupId}/hosts/{processId}/fts/metrics/indexes/{databaseName}/{collectionName}/measurements | Return All Atlas Search Index Metrics for One Namespace
[**listMetricTypes**](MonitoringAndLogsApi.md#listMetricTypes) | **GET** /api/atlas/v2/groups/{groupId}/hosts/{processId}/fts/metrics | Return All Atlas Search Metric Types for One Process


# **getAtlasProcess**
> ApiHostViewAtlas getAtlasProcess()

Returns the processes for the specified host for the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitoringAndLogsApi(configuration);

let body:.MonitoringAndLogsApiGetAtlasProcessRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (`mongod` or `mongos`). The port must be the IANA port on which the MongoDB process listens for requests.
  processId: "mongodb.example.com:27017",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
};

apiInstance.getAtlasProcess(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **processId** | [**string**] | Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**ApiHostViewAtlas**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDatabase**
> ApiDatabaseView getDatabase()

Returns one database running on the specified host for the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitoringAndLogsApi(configuration);

let body:.MonitoringAndLogsApiGetDatabaseRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the database that the specified MongoDB process serves.
  databaseName: "databaseName_example",
  // string | Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (`mongod` or `mongos`). The port must be the IANA port on which the MongoDB process listens for requests.
  processId: "mongodb.example.com:27017",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
};

apiInstance.getDatabase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **databaseName** | [**string**] | Human-readable label that identifies the database that the specified MongoDB process serves. | defaults to undefined
 **processId** | [**string**] | Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**ApiDatabaseView**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDatabaseMeasurements**
> ApiMeasurementsGeneralViewAtlas getDatabaseMeasurements()

Returns the measurements of one database for the specified host for the specified project. Returns the database's on-disk storage space based on the MongoDB `dbStats` command output. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitoringAndLogsApi(configuration);

let body:.MonitoringAndLogsApiGetDatabaseMeasurementsRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the database that the specified MongoDB process serves.
  databaseName: "databaseName_example",
  // string | Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (`mongod` or `mongos`). The port must be the IANA port on which the MongoDB process listens for requests.
  processId: "mongodb.example.com:27017",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
  // Set<'DATABASE_AVERAGE_OBJECT_SIZE' | 'DATABASE_COLLECTION_COUNT' | 'DATABASE_DATA_SIZE' | 'DATABASE_STORAGE_SIZE' | 'DATABASE_INDEX_SIZE' | 'DATABASE_INDEX_COUNT' | 'DATABASE_EXTENT_COUNT' | 'DATABASE_OBJECT_COUNT' | 'DATABASE_VIEW_COUNT'> | One or more types of measurement to request for this MongoDB process. If omitted, the resource returns all measurements. To specify multiple values for `m`, repeat the `m` parameter for each value. Specify measurements that apply to the specified host. MongoDB Cloud returns an error if you specified any invalid measurements. (optional)
  m: [
    "DATABASE_AVERAGE_OBJECT_SIZE",
  ],
};

apiInstance.getDatabaseMeasurements(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **databaseName** | [**string**] | Human-readable label that identifies the database that the specified MongoDB process serves. | defaults to undefined
 **processId** | [**string**] | Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined
 **m** | **Array<&#39;DATABASE_AVERAGE_OBJECT_SIZE&#39; &#124; &#39;DATABASE_COLLECTION_COUNT&#39; &#124; &#39;DATABASE_DATA_SIZE&#39; &#124; &#39;DATABASE_STORAGE_SIZE&#39; &#124; &#39;DATABASE_INDEX_SIZE&#39; &#124; &#39;DATABASE_INDEX_COUNT&#39; &#124; &#39;DATABASE_EXTENT_COUNT&#39; &#124; &#39;DATABASE_OBJECT_COUNT&#39; &#124; &#39;DATABASE_VIEW_COUNT&#39;>** | One or more types of measurement to request for this MongoDB process. If omitted, the resource returns all measurements. To specify multiple values for &#x60;m&#x60;, repeat the &#x60;m&#x60; parameter for each value. Specify measurements that apply to the specified host. MongoDB Cloud returns an error if you specified any invalid measurements. | (optional) defaults to undefined


### Return type

**ApiMeasurementsGeneralViewAtlas**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDiskMeasurements**
> ApiMeasurementsGeneralViewAtlas getDiskMeasurements()

Returns the measurements of one disk or partition for the specified host for the specified project. Returned value can be one of the following: - Throughput of I/O operations for the disk partition used for the MongoDB process - Percentage of time during which requests the partition issued and serviced - Latency per operation type of the disk partition used for the MongoDB process - Amount of free and used disk space on the disk partition used for the MongoDB process  To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitoringAndLogsApi(configuration);

let body:.MonitoringAndLogsApiGetDiskMeasurementsRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label of the disk or partition to which the measurements apply.
  partitionName: "partitionName_example",
  // string | Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (`mongod` or `mongos`). The port must be the IANA port on which the MongoDB process listens for requests.
  processId: "mongodb.example.com:27017",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
  // Set<'DISK_PARTITION_IOPS_READ' | 'MAX_DISK_PARTITION_IOPS_READ' | 'DISK_PARTITION_IOPS_WRITE' | 'MAX_DISK_PARTITION_IOPS_WRITE' | 'DISK_PARTITION_IOPS_TOTAL' | 'MAX_DISK_PARTITION_IOPS_TOTAL' | 'DISK_PARTITION_UTILIZATION' | 'MAX_DISK_PARTITION_UTILIZATION' | 'DISK_PARTITION_LATENCY_READ' | 'MAX_DISK_PARTITION_LATENCY_READ' | 'DISK_PARTITION_LATENCY_WRITE' | 'MAX_DISK_PARTITION_LATENCY_WRITE' | 'DISK_PARTITION_SPACE_FREE' | 'MAX_DISK_PARTITION_SPACE_FREE' | 'DISK_PARTITION_SPACE_USED' | 'MAX_DISK_PARTITION_SPACE_USED' | 'DISK_PARTITION_SPACE_PERCENT_FREE' | 'MAX_DISK_PARTITION_SPACE_PERCENT_FREE' | 'DISK_PARTITION_SPACE_PERCENT_USED' | 'MAX_DISK_PARTITION_SPACE_PERCENT_USED'> | One or more types of measurement to request for this MongoDB process. If omitted, the resource returns all measurements. To specify multiple values for `m`, repeat the `m` parameter for each value. Specify measurements that apply to the specified host. MongoDB Cloud returns an error if you specified any invalid measurements. (optional)
  m: [
    "DISK_PARTITION_IOPS_READ",
  ],
};

apiInstance.getDiskMeasurements(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **partitionName** | [**string**] | Human-readable label of the disk or partition to which the measurements apply. | defaults to undefined
 **processId** | [**string**] | Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined
 **m** | **Array<&#39;DISK_PARTITION_IOPS_READ&#39; &#124; &#39;MAX_DISK_PARTITION_IOPS_READ&#39; &#124; &#39;DISK_PARTITION_IOPS_WRITE&#39; &#124; &#39;MAX_DISK_PARTITION_IOPS_WRITE&#39; &#124; &#39;DISK_PARTITION_IOPS_TOTAL&#39; &#124; &#39;MAX_DISK_PARTITION_IOPS_TOTAL&#39; &#124; &#39;DISK_PARTITION_UTILIZATION&#39; &#124; &#39;MAX_DISK_PARTITION_UTILIZATION&#39; &#124; &#39;DISK_PARTITION_LATENCY_READ&#39; &#124; &#39;MAX_DISK_PARTITION_LATENCY_READ&#39; &#124; &#39;DISK_PARTITION_LATENCY_WRITE&#39; &#124; &#39;MAX_DISK_PARTITION_LATENCY_WRITE&#39; &#124; &#39;DISK_PARTITION_SPACE_FREE&#39; &#124; &#39;MAX_DISK_PARTITION_SPACE_FREE&#39; &#124; &#39;DISK_PARTITION_SPACE_USED&#39; &#124; &#39;MAX_DISK_PARTITION_SPACE_USED&#39; &#124; &#39;DISK_PARTITION_SPACE_PERCENT_FREE&#39; &#124; &#39;MAX_DISK_PARTITION_SPACE_PERCENT_FREE&#39; &#124; &#39;DISK_PARTITION_SPACE_PERCENT_USED&#39; &#124; &#39;MAX_DISK_PARTITION_SPACE_PERCENT_USED&#39;>** | One or more types of measurement to request for this MongoDB process. If omitted, the resource returns all measurements. To specify multiple values for &#x60;m&#x60;, repeat the &#x60;m&#x60; parameter for each value. Specify measurements that apply to the specified host. MongoDB Cloud returns an error if you specified any invalid measurements. | (optional) defaults to undefined


### Return type

**ApiMeasurementsGeneralViewAtlas**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getHostLogs**
> HttpFile getHostLogs()

Returns a compressed (.gz) log file that contains a range of log messages for the specified host for the specified project. To use this resource, the requesting API Key must have the Project Owner or Project Data Access Read Write roles. This resource doesn't require the API Key to have an Access List. Deprecated versions: v2-{2023-01-01}

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitoringAndLogsApi(configuration);

let body:.MonitoringAndLogsApiGetHostLogsRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Fully qualified domain name or IP address of the MongoDB host that stores the log files that you want to download.
  hostName: "hostName_example",
  // 'mongodb' | 'mongos' | 'mongodb-audit-log' | 'mongos-audit-log' | Human-readable label of the log file that you want to return. You can return audit logs only if you enable Database Auditing for the specified project.
  logName: "mongodb",
  // number | Date and time when the period specifies the inclusive ending point for the range of log messages to retrieve. This parameter expresses its value in the number of seconds that have elapsed since the UNIX epoch. (optional)
  endDate: 1199145600,
  // number | Date and time when the period specifies the inclusive starting point for the range of log messages to retrieve. This parameter expresses its value in the number of seconds that have elapsed since the UNIX epoch. (optional)
  startDate: 1199145600,
};

apiInstance.getHostLogs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **hostName** | [**string**] | Fully qualified domain name or IP address of the MongoDB host that stores the log files that you want to download. | defaults to undefined
 **logName** | [**&#39;mongodb&#39; | &#39;mongos&#39; | &#39;mongodb-audit-log&#39; | &#39;mongos-audit-log&#39;**]**Array<&#39;mongodb&#39; &#124; &#39;mongos&#39; &#124; &#39;mongodb-audit-log&#39; &#124; &#39;mongos-audit-log&#39;>** | Human-readable label of the log file that you want to return. You can return audit logs only if you enable Database Auditing for the specified project. | defaults to undefined
 **endDate** | [**number**] | Date and time when the period specifies the inclusive ending point for the range of log messages to retrieve. This parameter expresses its value in the number of seconds that have elapsed since the UNIX epoch. | (optional) defaults to undefined
 **startDate** | [**number**] | Date and time when the period specifies the inclusive starting point for the range of log messages to retrieve. This parameter expresses its value in the number of seconds that have elapsed since the UNIX epoch. | (optional) defaults to undefined


### Return type

**HttpFile**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-02-01+gzip, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getHostMeasurements**
> ApiMeasurementsGeneralViewAtlas getHostMeasurements()

Returns measurements of the disk or partition per process for the specified host for the specified project. Returned value can be one of the following: - Throughput of I/O operations for the disk partition used for the MongoDB process - Percentage of time during which requests the partition issued and serviced - Latency per operation type of the disk partition used for the MongoDB process - Amount of free and used disk space on the disk partition used for the MongoDB process   To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitoringAndLogsApi(configuration);

let body:.MonitoringAndLogsApiGetHostMeasurementsRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (`mongod` or `mongos`). The port must be the IANA port on which the MongoDB process listens for requests.
  processId: "mongodb.example.com:27017",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
  // Set<'ASSERT_MSG' | 'ASSERT_REGULAR' | 'ASSERT_USER' | 'ASSERT_WARNING' | 'BACKGROUND_FLUSH_AVG' | 'CACHE_BYTES_READ_INTO' | 'CACHE_BYTES_WRITTEN_FROM' | 'CACHE_DIRTY_BYTES' | 'CACHE_USED_BYTES' | 'COMPUTED_MEMORY' | 'CONNECTIONS' | 'CURSORS_TOTAL_OPEN' | 'CURSORS_TOTAL_TIMED_OUT' | 'DB_DATA_SIZE_TOTAL' | 'DB_STORAGE_TOTAL' | 'DOCUMENT_METRICS_DELETED' | 'DOCUMENT_METRICS_INSERTED' | 'DOCUMENT_METRICS_RETURNED' | 'DOCUMENT_METRICS_UPDATED' | 'EXTRA_INFO_PAGE_FAULTS' | 'FTS_DISK_UTILIZATION' | 'FTS_MEMORY_MAPPED' | 'FTS_MEMORY_RESIDENT' | 'FTS_MEMORY_VIRTUAL' | 'FTS_PROCESS_CPU_KERNEL' | 'FTS_PROCESS_CPU_USER' | 'FTS_PROCESS_NORMALIZED_CPU_KERNEL' | 'FTS_PROCESS_NORMALIZED_CPU_USER' | 'GLOBAL_ACCESSES_NOT_IN_MEMORY' | 'GLOBAL_LOCK_CURRENT_QUEUE_READERS' | 'GLOBAL_LOCK_CURRENT_QUEUE_TOTAL' | 'GLOBAL_LOCK_CURRENT_QUEUE_WRITERS' | 'GLOBAL_PAGE_FAULT_EXCEPTIONS_THROWN' | 'INDEX_COUNTERS_BTREE_ACCESSES' | 'INDEX_COUNTERS_BTREE_HITS' | 'INDEX_COUNTERS_BTREE_MISS_RATIO' | 'INDEX_COUNTERS_BTREE_MISSES' | 'JOURNALING_COMMITS_IN_WRITE_LOCK' | 'JOURNALING_MB' | 'JOURNALING_WRITE_DATA_FILES_MB' | 'MAX_PROCESS_CPU_CHILDREN_KERNEL' | 'MAX_PROCESS_CPU_CHILDREN_USER' | 'MAX_PROCESS_CPU_KERNEL' | 'MAX_PROCESS_CPU_USER' | 'MAX_PROCESS_NORMALIZED_CPU_CHILDREN_KERNEL' | 'MAX_PROCESS_NORMALIZED_CPU_CHILDREN_USER' | 'MAX_PROCESS_NORMALIZED_CPU_KERNEL' | 'MAX_PROCESS_NORMALIZED_CPU_USER' | 'MAX_SWAP_USAGE_FREE' | 'MAX_SWAP_USAGE_USED ' | 'MAX_SYSTEM_CPU_GUEST' | 'MAX_SYSTEM_CPU_IOWAIT' | 'MAX_SYSTEM_CPU_IRQ' | 'MAX_SYSTEM_CPU_KERNEL' | 'MAX_SYSTEM_CPU_SOFTIRQ' | 'MAX_SYSTEM_CPU_STEAL' | 'MAX_SYSTEM_CPU_USER' | 'MAX_SYSTEM_MEMORY_AVAILABLE' | 'MAX_SYSTEM_MEMORY_FREE' | 'MAX_SYSTEM_MEMORY_USED' | 'MAX_SYSTEM_NETWORK_IN' | 'MAX_SYSTEM_NETWORK_OUT' | 'MAX_SYSTEM_NORMALIZED_CPU_GUEST' | 'MAX_SYSTEM_NORMALIZED_CPU_IOWAIT' | 'MAX_SYSTEM_NORMALIZED_CPU_IRQ' | 'MAX_SYSTEM_NORMALIZED_CPU_KERNEL' | 'MAX_SYSTEM_NORMALIZED_CPU_NICE' | 'MAX_SYSTEM_NORMALIZED_CPU_SOFTIRQ' | 'MAX_SYSTEM_NORMALIZED_CPU_STEAL' | 'MAX_SYSTEM_NORMALIZED_CPU_USER' | 'MEMORY_MAPPED' | 'MEMORY_RESIDENT' | 'MEMORY_VIRTUAL' | 'NETWORK_BYTES_IN' | 'NETWORK_BYTES_OUT' | 'NETWORK_NUM_REQUESTS' | 'OP_EXECUTION_TIME_COMMANDS' | 'OP_EXECUTION_TIME_READS' | 'OP_EXECUTION_TIME_WRITES' | 'OPCOUNTER_CMD' | 'OPCOUNTER_DELETE' | 'OPCOUNTER_GETMORE' | 'OPCOUNTER_INSERT' | 'OPCOUNTER_QUERY' | 'OPCOUNTER_REPL_CMD' | 'OPCOUNTER_REPL_DELETE' | 'OPCOUNTER_REPL_INSERT' | 'OPCOUNTER_REPL_UPDATE' | 'OPCOUNTER_UPDATE' | 'OPERATIONS_SCAN_AND_ORDER' | 'OPLOG_MASTER_LAG_TIME_DIFF' | 'OPLOG_MASTER_TIME' | 'OPLOG_RATE_GB_PER_HOUR' | 'OPLOG_SLAVE_LAG_MASTER_TIME' | 'OPLOG_REPLICATION_LAG' | 'PROCESS_CPU_CHILDREN_KERNEL' | 'PROCESS_CPU_CHILDREN_USER' | 'PROCESS_CPU_KERNEL' | 'PROCESS_CPU_USER' | 'PROCESS_NORMALIZED_CPU_CHILDREN_KERNEL' | 'PROCESS_NORMALIZED_CPU_CHILDREN_USER' | 'PROCESS_NORMALIZED_CPU_KERNEL' | 'PROCESS_NORMALIZED_CPU_USER' | 'QUERY_EXECUTOR_SCANNED' | 'QUERY_EXECUTOR_SCANNED_OBJECTS' | 'QUERY_TARGETING_SCANNED_OBJECTS_PER_RETURNED' | 'QUERY_TARGETING_SCANNED_PER_RETURNED' | 'RESTARTS_IN_LAST_HOUR' | 'SWAP_USAGE_FREE' | 'SWAP_USAGE_USED' | 'SYSTEM_CPU_GUEST' | 'SYSTEM_CPU_IOWAIT' | 'SYSTEM_CPU_IRQ' | 'SYSTEM_CPU_KERNEL' | 'SYSTEM_CPU_NICE' | 'SYSTEM_CPU_SOFTIRQ' | 'SYSTEM_CPU_STEAL' | 'SYSTEM_CPU_USER' | 'SYSTEM_MEMORY_AVAILABLE' | 'SYSTEM_MEMORY_FREE' | 'SYSTEM_MEMORY_USED' | 'SYSTEM_NETWORK_IN' | 'SYSTEM_NETWORK_OUT' | 'SYSTEM_NORMALIZED_CPU_GUEST' | 'SYSTEM_NORMALIZED_CPU_IOWAIT' | 'SYSTEM_NORMALIZED_CPU_IRQ' | 'SYSTEM_NORMALIZED_CPU_KERNEL' | 'SYSTEM_NORMALIZED_CPU_NICE' | 'SYSTEM_NORMALIZED_CPU_SOFTIRQ' | 'SYSTEM_NORMALIZED_CPU_STEAL' | 'SYSTEM_NORMALIZED_CPU_USER' | 'TICKETS_AVAILABLE_READS' | 'TICKETS_AVAILABLE_WRITE'> | One or more types of measurement to request for this MongoDB process. If omitted, the resource returns all measurements. To specify multiple values for `m`, repeat the `m` parameter for each value. Specify measurements that apply to the specified host. MongoDB Cloud returns an error if you specified any invalid measurements. (optional)
  m: [
    "ASSERT_MSG",
  ],
  // Date | Date and time that indicates how far in the past to query. You can't set this value with **start** and **end** in the same request. This parameter expresses its value in the ISO 8601 duration format in UTC (optional)
  period: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getHostMeasurements(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **processId** | [**string**] | Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined
 **m** | **Array<&#39;ASSERT_MSG&#39; &#124; &#39;ASSERT_REGULAR&#39; &#124; &#39;ASSERT_USER&#39; &#124; &#39;ASSERT_WARNING&#39; &#124; &#39;BACKGROUND_FLUSH_AVG&#39; &#124; &#39;CACHE_BYTES_READ_INTO&#39; &#124; &#39;CACHE_BYTES_WRITTEN_FROM&#39; &#124; &#39;CACHE_DIRTY_BYTES&#39; &#124; &#39;CACHE_USED_BYTES&#39; &#124; &#39;COMPUTED_MEMORY&#39; &#124; &#39;CONNECTIONS&#39; &#124; &#39;CURSORS_TOTAL_OPEN&#39; &#124; &#39;CURSORS_TOTAL_TIMED_OUT&#39; &#124; &#39;DB_DATA_SIZE_TOTAL&#39; &#124; &#39;DB_STORAGE_TOTAL&#39; &#124; &#39;DOCUMENT_METRICS_DELETED&#39; &#124; &#39;DOCUMENT_METRICS_INSERTED&#39; &#124; &#39;DOCUMENT_METRICS_RETURNED&#39; &#124; &#39;DOCUMENT_METRICS_UPDATED&#39; &#124; &#39;EXTRA_INFO_PAGE_FAULTS&#39; &#124; &#39;FTS_DISK_UTILIZATION&#39; &#124; &#39;FTS_MEMORY_MAPPED&#39; &#124; &#39;FTS_MEMORY_RESIDENT&#39; &#124; &#39;FTS_MEMORY_VIRTUAL&#39; &#124; &#39;FTS_PROCESS_CPU_KERNEL&#39; &#124; &#39;FTS_PROCESS_CPU_USER&#39; &#124; &#39;FTS_PROCESS_NORMALIZED_CPU_KERNEL&#39; &#124; &#39;FTS_PROCESS_NORMALIZED_CPU_USER&#39; &#124; &#39;GLOBAL_ACCESSES_NOT_IN_MEMORY&#39; &#124; &#39;GLOBAL_LOCK_CURRENT_QUEUE_READERS&#39; &#124; &#39;GLOBAL_LOCK_CURRENT_QUEUE_TOTAL&#39; &#124; &#39;GLOBAL_LOCK_CURRENT_QUEUE_WRITERS&#39; &#124; &#39;GLOBAL_PAGE_FAULT_EXCEPTIONS_THROWN&#39; &#124; &#39;INDEX_COUNTERS_BTREE_ACCESSES&#39; &#124; &#39;INDEX_COUNTERS_BTREE_HITS&#39; &#124; &#39;INDEX_COUNTERS_BTREE_MISS_RATIO&#39; &#124; &#39;INDEX_COUNTERS_BTREE_MISSES&#39; &#124; &#39;JOURNALING_COMMITS_IN_WRITE_LOCK&#39; &#124; &#39;JOURNALING_MB&#39; &#124; &#39;JOURNALING_WRITE_DATA_FILES_MB&#39; &#124; &#39;MAX_PROCESS_CPU_CHILDREN_KERNEL&#39; &#124; &#39;MAX_PROCESS_CPU_CHILDREN_USER&#39; &#124; &#39;MAX_PROCESS_CPU_KERNEL&#39; &#124; &#39;MAX_PROCESS_CPU_USER&#39; &#124; &#39;MAX_PROCESS_NORMALIZED_CPU_CHILDREN_KERNEL&#39; &#124; &#39;MAX_PROCESS_NORMALIZED_CPU_CHILDREN_USER&#39; &#124; &#39;MAX_PROCESS_NORMALIZED_CPU_KERNEL&#39; &#124; &#39;MAX_PROCESS_NORMALIZED_CPU_USER&#39; &#124; &#39;MAX_SWAP_USAGE_FREE&#39; &#124; &#39;MAX_SWAP_USAGE_USED &#39; &#124; &#39;MAX_SYSTEM_CPU_GUEST&#39; &#124; &#39;MAX_SYSTEM_CPU_IOWAIT&#39; &#124; &#39;MAX_SYSTEM_CPU_IRQ&#39; &#124; &#39;MAX_SYSTEM_CPU_KERNEL&#39; &#124; &#39;MAX_SYSTEM_CPU_SOFTIRQ&#39; &#124; &#39;MAX_SYSTEM_CPU_STEAL&#39; &#124; &#39;MAX_SYSTEM_CPU_USER&#39; &#124; &#39;MAX_SYSTEM_MEMORY_AVAILABLE&#39; &#124; &#39;MAX_SYSTEM_MEMORY_FREE&#39; &#124; &#39;MAX_SYSTEM_MEMORY_USED&#39; &#124; &#39;MAX_SYSTEM_NETWORK_IN&#39; &#124; &#39;MAX_SYSTEM_NETWORK_OUT&#39; &#124; &#39;MAX_SYSTEM_NORMALIZED_CPU_GUEST&#39; &#124; &#39;MAX_SYSTEM_NORMALIZED_CPU_IOWAIT&#39; &#124; &#39;MAX_SYSTEM_NORMALIZED_CPU_IRQ&#39; &#124; &#39;MAX_SYSTEM_NORMALIZED_CPU_KERNEL&#39; &#124; &#39;MAX_SYSTEM_NORMALIZED_CPU_NICE&#39; &#124; &#39;MAX_SYSTEM_NORMALIZED_CPU_SOFTIRQ&#39; &#124; &#39;MAX_SYSTEM_NORMALIZED_CPU_STEAL&#39; &#124; &#39;MAX_SYSTEM_NORMALIZED_CPU_USER&#39; &#124; &#39;MEMORY_MAPPED&#39; &#124; &#39;MEMORY_RESIDENT&#39; &#124; &#39;MEMORY_VIRTUAL&#39; &#124; &#39;NETWORK_BYTES_IN&#39; &#124; &#39;NETWORK_BYTES_OUT&#39; &#124; &#39;NETWORK_NUM_REQUESTS&#39; &#124; &#39;OP_EXECUTION_TIME_COMMANDS&#39; &#124; &#39;OP_EXECUTION_TIME_READS&#39; &#124; &#39;OP_EXECUTION_TIME_WRITES&#39; &#124; &#39;OPCOUNTER_CMD&#39; &#124; &#39;OPCOUNTER_DELETE&#39; &#124; &#39;OPCOUNTER_GETMORE&#39; &#124; &#39;OPCOUNTER_INSERT&#39; &#124; &#39;OPCOUNTER_QUERY&#39; &#124; &#39;OPCOUNTER_REPL_CMD&#39; &#124; &#39;OPCOUNTER_REPL_DELETE&#39; &#124; &#39;OPCOUNTER_REPL_INSERT&#39; &#124; &#39;OPCOUNTER_REPL_UPDATE&#39; &#124; &#39;OPCOUNTER_UPDATE&#39; &#124; &#39;OPERATIONS_SCAN_AND_ORDER&#39; &#124; &#39;OPLOG_MASTER_LAG_TIME_DIFF&#39; &#124; &#39;OPLOG_MASTER_TIME&#39; &#124; &#39;OPLOG_RATE_GB_PER_HOUR&#39; &#124; &#39;OPLOG_SLAVE_LAG_MASTER_TIME&#39; &#124; &#39;OPLOG_REPLICATION_LAG&#39; &#124; &#39;PROCESS_CPU_CHILDREN_KERNEL&#39; &#124; &#39;PROCESS_CPU_CHILDREN_USER&#39; &#124; &#39;PROCESS_CPU_KERNEL&#39; &#124; &#39;PROCESS_CPU_USER&#39; &#124; &#39;PROCESS_NORMALIZED_CPU_CHILDREN_KERNEL&#39; &#124; &#39;PROCESS_NORMALIZED_CPU_CHILDREN_USER&#39; &#124; &#39;PROCESS_NORMALIZED_CPU_KERNEL&#39; &#124; &#39;PROCESS_NORMALIZED_CPU_USER&#39; &#124; &#39;QUERY_EXECUTOR_SCANNED&#39; &#124; &#39;QUERY_EXECUTOR_SCANNED_OBJECTS&#39; &#124; &#39;QUERY_TARGETING_SCANNED_OBJECTS_PER_RETURNED&#39; &#124; &#39;QUERY_TARGETING_SCANNED_PER_RETURNED&#39; &#124; &#39;RESTARTS_IN_LAST_HOUR&#39; &#124; &#39;SWAP_USAGE_FREE&#39; &#124; &#39;SWAP_USAGE_USED&#39; &#124; &#39;SYSTEM_CPU_GUEST&#39; &#124; &#39;SYSTEM_CPU_IOWAIT&#39; &#124; &#39;SYSTEM_CPU_IRQ&#39; &#124; &#39;SYSTEM_CPU_KERNEL&#39; &#124; &#39;SYSTEM_CPU_NICE&#39; &#124; &#39;SYSTEM_CPU_SOFTIRQ&#39; &#124; &#39;SYSTEM_CPU_STEAL&#39; &#124; &#39;SYSTEM_CPU_USER&#39; &#124; &#39;SYSTEM_MEMORY_AVAILABLE&#39; &#124; &#39;SYSTEM_MEMORY_FREE&#39; &#124; &#39;SYSTEM_MEMORY_USED&#39; &#124; &#39;SYSTEM_NETWORK_IN&#39; &#124; &#39;SYSTEM_NETWORK_OUT&#39; &#124; &#39;SYSTEM_NORMALIZED_CPU_GUEST&#39; &#124; &#39;SYSTEM_NORMALIZED_CPU_IOWAIT&#39; &#124; &#39;SYSTEM_NORMALIZED_CPU_IRQ&#39; &#124; &#39;SYSTEM_NORMALIZED_CPU_KERNEL&#39; &#124; &#39;SYSTEM_NORMALIZED_CPU_NICE&#39; &#124; &#39;SYSTEM_NORMALIZED_CPU_SOFTIRQ&#39; &#124; &#39;SYSTEM_NORMALIZED_CPU_STEAL&#39; &#124; &#39;SYSTEM_NORMALIZED_CPU_USER&#39; &#124; &#39;TICKETS_AVAILABLE_READS&#39; &#124; &#39;TICKETS_AVAILABLE_WRITE&#39;>** | One or more types of measurement to request for this MongoDB process. If omitted, the resource returns all measurements. To specify multiple values for &#x60;m&#x60;, repeat the &#x60;m&#x60; parameter for each value. Specify measurements that apply to the specified host. MongoDB Cloud returns an error if you specified any invalid measurements. | (optional) defaults to undefined
 **period** | [**Date**] | Date and time that indicates how far in the past to query. You can&#39;t set this value with **start** and **end** in the same request. This parameter expresses its value in the ISO 8601 duration format in UTC | (optional) defaults to undefined


### Return type

**ApiMeasurementsGeneralViewAtlas**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getIndexMetrics**
> ApiMeasurementsIndexesView getIndexMetrics()

Returns the Atlas Search metrics data series within the provided time range for one namespace and index name on the specified process.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitoringAndLogsApi(configuration);

let body:.MonitoringAndLogsApiGetIndexMetricsRequest = {
  // string | Combination of hostname and IANA port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (mongod or mongos). The port must be the IANA port on which the MongoDB process listens for requests.
  processId: "my.host.name.com:27017",
  // string | Human-readable label that identifies the index.
  indexName: "myindex",
  // string | Human-readable label that identifies the database.
  databaseName: "mydb",
  // string | Human-readable label that identifies the collection.
  collectionName: "mycoll",
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Duration that specifies the interval at which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC.
  granularity: "PT1M",
  // Set<'INDEX_SIZE_ON_DISK' | 'NUMBER_OF_DELETES' | 'NUMBER_OF_ERROR_QUERIES' | 'NUMBER_OF_GETMORE_COMMANDS' | 'NUMBER_OF_INDEX_FIELDS' | 'NUMBER_OF_INSERTS' | 'NUMBER_OF_SUCCESS_QUERIES' | 'NUMBER_OF_UPDATES' | 'REPLICATION_LAG' | 'TOTAL_NUMBER_OF_QUERIES'> | List that contains the measurements that MongoDB Atlas reports for the associated data series.
  metrics: [
    "INDEX_SIZE_ON_DISK",
  ],
  // string | Duration over which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC. Include this parameter when you do not set **start** and **end**. (optional)
  period: "PT10H",
  // Date | Date and time when MongoDB Cloud begins reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**. (optional)
  start: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Date and time when MongoDB Cloud stops reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**. (optional)
  end: new Date('1970-01-01T00:00:00.00Z'),
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
};

apiInstance.getIndexMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | [**string**] | Combination of hostname and IANA port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (mongod or mongos). The port must be the IANA port on which the MongoDB process listens for requests. | defaults to undefined
 **indexName** | [**string**] | Human-readable label that identifies the index. | defaults to undefined
 **databaseName** | [**string**] | Human-readable label that identifies the database. | defaults to undefined
 **collectionName** | [**string**] | Human-readable label that identifies the collection. | defaults to undefined
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **granularity** | [**string**] | Duration that specifies the interval at which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC. | defaults to undefined
 **metrics** | **Array<&#39;INDEX_SIZE_ON_DISK&#39; &#124; &#39;NUMBER_OF_DELETES&#39; &#124; &#39;NUMBER_OF_ERROR_QUERIES&#39; &#124; &#39;NUMBER_OF_GETMORE_COMMANDS&#39; &#124; &#39;NUMBER_OF_INDEX_FIELDS&#39; &#124; &#39;NUMBER_OF_INSERTS&#39; &#124; &#39;NUMBER_OF_SUCCESS_QUERIES&#39; &#124; &#39;NUMBER_OF_UPDATES&#39; &#124; &#39;REPLICATION_LAG&#39; &#124; &#39;TOTAL_NUMBER_OF_QUERIES&#39;>** | List that contains the measurements that MongoDB Atlas reports for the associated data series. | defaults to undefined
 **period** | [**string**] | Duration over which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC. Include this parameter when you do not set **start** and **end**. | (optional) defaults to undefined
 **start** | [**Date**] | Date and time when MongoDB Cloud begins reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**. | (optional) defaults to undefined
 **end** | [**Date**] | Date and time when MongoDB Cloud stops reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**. | (optional) defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined


### Return type

**ApiMeasurementsIndexesView**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMeasurements**
> ApiMeasurementsNonIndexView getMeasurements()

Returns the Atlas Search hardware and status data series within the provided time range for one process in the specified project.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitoringAndLogsApi(configuration);

let body:.MonitoringAndLogsApiGetMeasurementsRequest = {
  // string | Combination of hostname and IANA port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (mongod or mongos). The port must be the IANA port on which the MongoDB process listens for requests.
  processId: "my.host.name.com:27017",
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Duration that specifies the interval at which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC.
  granularity: "PT1M",
  // Set<'FTS_DISK_USAGE' | 'FTS_PROCESS_CPU_KERNEL' | 'FTS_PROCESS_CPU_USER' | 'FTS_PROCESS_NORMALIZED_CPU_KERNEL' | 'FTS_PROCESS_NORMALIZED_CPU_USER' | 'FTS_PROCESS_RESIDENT_MEMORY' | 'FTS_PROCESS_SHARED_MEMORY' | 'FTS_PROCESS_VIRTUAL_MEMORY' | 'JVM_CURRENT_MEMORY' | 'JVM_MAX_MEMORY'> | List that contains the metrics that you want MongoDB Atlas to report for the associated data series. If you don't set this parameter, this resource returns all hardware and status metrics for the associated data series.
  metrics: [
    "FTS_DISK_USAGE",
  ],
  // string | Duration over which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC. Include this parameter when you do not set **start** and **end**. (optional)
  period: "PT10H",
  // Date | Date and time when MongoDB Cloud begins reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**. (optional)
  start: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Date and time when MongoDB Cloud stops reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**. (optional)
  end: new Date('1970-01-01T00:00:00.00Z'),
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
};

apiInstance.getMeasurements(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | [**string**] | Combination of hostname and IANA port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (mongod or mongos). The port must be the IANA port on which the MongoDB process listens for requests. | defaults to undefined
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **granularity** | [**string**] | Duration that specifies the interval at which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC. | defaults to undefined
 **metrics** | **Array<&#39;FTS_DISK_USAGE&#39; &#124; &#39;FTS_PROCESS_CPU_KERNEL&#39; &#124; &#39;FTS_PROCESS_CPU_USER&#39; &#124; &#39;FTS_PROCESS_NORMALIZED_CPU_KERNEL&#39; &#124; &#39;FTS_PROCESS_NORMALIZED_CPU_USER&#39; &#124; &#39;FTS_PROCESS_RESIDENT_MEMORY&#39; &#124; &#39;FTS_PROCESS_SHARED_MEMORY&#39; &#124; &#39;FTS_PROCESS_VIRTUAL_MEMORY&#39; &#124; &#39;JVM_CURRENT_MEMORY&#39; &#124; &#39;JVM_MAX_MEMORY&#39;>** | List that contains the metrics that you want MongoDB Atlas to report for the associated data series. If you don&#39;t set this parameter, this resource returns all hardware and status metrics for the associated data series. | defaults to undefined
 **period** | [**string**] | Duration over which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC. Include this parameter when you do not set **start** and **end**. | (optional) defaults to undefined
 **start** | [**Date**] | Date and time when MongoDB Cloud begins reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**. | (optional) defaults to undefined
 **end** | [**Date**] | Date and time when MongoDB Cloud stops reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**. | (optional) defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined


### Return type

**ApiMeasurementsNonIndexView**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAtlasProcesses**
> PaginatedHostViewAtlas listAtlasProcesses()

Returns details of all processes for the specified project. A MongoDB process can be either a `mongod` or `mongos`. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitoringAndLogsApi(configuration);

let body:.MonitoringAndLogsApiListAtlasProcessesRequest = {
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

apiInstance.listAtlasProcesses(body).then((data:any) => {
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

**PaginatedHostViewAtlas**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listDatabases**
> PaginatedDatabaseView listDatabases()

Returns the list of databases running on the specified host for the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitoringAndLogsApi(configuration);

let body:.MonitoringAndLogsApiListDatabasesRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (`mongod` or `mongos`). The port must be the IANA port on which the MongoDB process listens for requests.
  processId: "mongodb.example.com:27017",
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

apiInstance.listDatabases(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **processId** | [**string**] | Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **includeCount** | [**boolean**] | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. | (optional) defaults to undefined
 **itemsPerPage** | [**number**] | Number of items that the response returns per page. | (optional) defaults to 100
 **pageNum** | [**number**] | Number of the page that displays the current set of the total objects that the response returns. | (optional) defaults to 1
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**PaginatedDatabaseView**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listDiskMeasurements**
> ApiDiskPartitionView listDiskMeasurements()

Returns the measurements of one disk or partition for the specified host for the specified project. Returned value can be one of the following: - Throughput of I/O operations for the disk partition used for the MongoDB process - Percentage of time during which requests the partition issued and serviced - Latency per operation type of the disk partition used for the MongoDB process - Amount of free and used disk space on the disk partition used for the MongoDB process   To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitoringAndLogsApi(configuration);

let body:.MonitoringAndLogsApiListDiskMeasurementsRequest = {
  // string | Human-readable label of the disk or partition to which the measurements apply.
  partitionName: "partitionName_example",
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (`mongod` or `mongos`). The port must be the IANA port on which the MongoDB process listens for requests.
  processId: "mongodb.example.com:27017",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
};

apiInstance.listDiskMeasurements(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partitionName** | [**string**] | Human-readable label of the disk or partition to which the measurements apply. | defaults to undefined
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **processId** | [**string**] | Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined


### Return type

**ApiDiskPartitionView**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listDiskPartitions**
> PaginatedDiskPartitionView listDiskPartitions()

Returns the list of disks or partitions for the specified host for the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitoringAndLogsApi(configuration);

let body:.MonitoringAndLogsApiListDiskPartitionsRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (`mongod` or `mongos`). The port must be the IANA port on which the MongoDB process listens for requests.
  processId: "mongodb.example.com:27017",
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

apiInstance.listDiskPartitions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **processId** | [**string**] | Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **includeCount** | [**boolean**] | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. | (optional) defaults to undefined
 **itemsPerPage** | [**number**] | Number of items that the response returns per page. | (optional) defaults to 100
 **pageNum** | [**number**] | Number of the page that displays the current set of the total objects that the response returns. | (optional) defaults to 1
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**PaginatedDiskPartitionView**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listIndexMetrics**
> ApiMeasurementsIndexesView listIndexMetrics()

Returns the Atlas Search index metrics within the specified time range for one namespace in the specified process.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitoringAndLogsApi(configuration);

let body:.MonitoringAndLogsApiListIndexMetricsRequest = {
  // string | Combination of hostname and IANA port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (mongod or mongos). The port must be the IANA port on which the MongoDB process listens for requests.
  processId: "my.host.name.com:27017",
  // string | Human-readable label that identifies the database.
  databaseName: "mydb",
  // string | Human-readable label that identifies the collection.
  collectionName: "mycoll",
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Duration that specifies the interval at which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC.
  granularity: "PT1M",
  // Set<'INDEX_SIZE_ON_DISK' | 'NUMBER_OF_DELETES' | 'NUMBER_OF_ERROR_QUERIES' | 'NUMBER_OF_GETMORE_COMMANDS' | 'NUMBER_OF_INDEX_FIELDS' | 'NUMBER_OF_INSERTS' | 'NUMBER_OF_SUCCESS_QUERIES' | 'NUMBER_OF_UPDATES' | 'REPLICATION_LAG' | 'TOTAL_NUMBER_OF_QUERIES'> | List that contains the measurements that MongoDB Atlas reports for the associated data series.
  metrics: [
    "INDEX_SIZE_ON_DISK",
  ],
  // string | Duration over which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC. Include this parameter when you do not set **start** and **end**. (optional)
  period: "PT10H",
  // Date | Date and time when MongoDB Cloud begins reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**. (optional)
  start: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Date and time when MongoDB Cloud stops reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**. (optional)
  end: new Date('1970-01-01T00:00:00.00Z'),
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
};

apiInstance.listIndexMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | [**string**] | Combination of hostname and IANA port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (mongod or mongos). The port must be the IANA port on which the MongoDB process listens for requests. | defaults to undefined
 **databaseName** | [**string**] | Human-readable label that identifies the database. | defaults to undefined
 **collectionName** | [**string**] | Human-readable label that identifies the collection. | defaults to undefined
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **granularity** | [**string**] | Duration that specifies the interval at which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC. | defaults to undefined
 **metrics** | **Array<&#39;INDEX_SIZE_ON_DISK&#39; &#124; &#39;NUMBER_OF_DELETES&#39; &#124; &#39;NUMBER_OF_ERROR_QUERIES&#39; &#124; &#39;NUMBER_OF_GETMORE_COMMANDS&#39; &#124; &#39;NUMBER_OF_INDEX_FIELDS&#39; &#124; &#39;NUMBER_OF_INSERTS&#39; &#124; &#39;NUMBER_OF_SUCCESS_QUERIES&#39; &#124; &#39;NUMBER_OF_UPDATES&#39; &#124; &#39;REPLICATION_LAG&#39; &#124; &#39;TOTAL_NUMBER_OF_QUERIES&#39;>** | List that contains the measurements that MongoDB Atlas reports for the associated data series. | defaults to undefined
 **period** | [**string**] | Duration over which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC. Include this parameter when you do not set **start** and **end**. | (optional) defaults to undefined
 **start** | [**Date**] | Date and time when MongoDB Cloud begins reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**. | (optional) defaults to undefined
 **end** | [**Date**] | Date and time when MongoDB Cloud stops reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**. | (optional) defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined


### Return type

**ApiMeasurementsIndexesView**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listMetricTypes**
> ApiFTSMetricsView listMetricTypes()

Return all Atlas Search metric types available for one process in the specified project.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MonitoringAndLogsApi(configuration);

let body:.MonitoringAndLogsApiListMetricTypesRequest = {
  // string | Combination of hostname and IANA port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (mongod or mongos). The port must be the IANA port on which the MongoDB process listens for requests.
  processId: "my.host.name.com:27017",
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
};

apiInstance.listMetricTypes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | [**string**] | Combination of hostname and IANA port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (mongod or mongos). The port must be the IANA port on which the MongoDB process listens for requests. | defaults to undefined
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined


### Return type

**ApiFTSMetricsView**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


