# .AccessTrackingApi

All URIs are relative to *https://cloud.mongodb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAccessLogsByClusterName**](AccessTrackingApi.md#listAccessLogsByClusterName) | **GET** /api/atlas/v2/groups/{groupId}/dbAccessHistory/clusters/{clusterName} | Return Database Access History for One Cluster using Its Cluster Name
[**listAccessLogsByHostname**](AccessTrackingApi.md#listAccessLogsByHostname) | **GET** /api/atlas/v2/groups/{groupId}/dbAccessHistory/processes/{hostname} | Return Database Access History for One Cluster using Its Hostname


# **listAccessLogsByClusterName**
> ApiMongoDBAccessLogsListView listAccessLogsByClusterName()

Returns the access logs of one cluster identified by the cluster's name. Access logs contain a list of authentication requests made against your cluster. You can't use this feature on tenant-tier clusters (M0, M2, M5). To use this resource, the requesting API Key must have the Project Monitoring Admin role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccessTrackingApi(configuration);

let body:.AccessTrackingApiListAccessLogsByClusterNameRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the cluster.
  clusterName: "gqW,C",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
  // boolean | Flag that indicates whether the response returns the successful authentication attempts only. (optional)
  authResult: true,
  // string | Date and time when to stop retrieving database history. If you specify **end**, you must also specify **start**. This parameter uses the ISO 8601 timestamp format in UTC. (optional)
  end: "end_example",
  // string | One Internet Protocol address that attempted to authenticate with the database. (optional)
  ipAddress: "3253:5e:3:f:cba0:9:7:1",
  // number | Maximum number of lines from the log to return. (optional)
  nLogs: 20000,
  // Date | Date and time when MongoDB Cloud begins retrieving database history. If you specify **start**, you must also specify **end**. This parameter uses the ISO 8601 timestamp format in UTC. (optional)
  start: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.listAccessLogsByClusterName(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **clusterName** | [**string**] | Human-readable label that identifies the cluster. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined
 **authResult** | [**boolean**] | Flag that indicates whether the response returns the successful authentication attempts only. | (optional) defaults to undefined
 **end** | [**string**] | Date and time when to stop retrieving database history. If you specify **end**, you must also specify **start**. This parameter uses the ISO 8601 timestamp format in UTC. | (optional) defaults to undefined
 **ipAddress** | [**string**] | One Internet Protocol address that attempted to authenticate with the database. | (optional) defaults to undefined
 **nLogs** | [**number**] | Maximum number of lines from the log to return. | (optional) defaults to 20000
 **start** | [**Date**] | Date and time when MongoDB Cloud begins retrieving database history. If you specify **start**, you must also specify **end**. This parameter uses the ISO 8601 timestamp format in UTC. | (optional) defaults to undefined


### Return type

**ApiMongoDBAccessLogsListView**

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAccessLogsByHostname**
> ApiMongoDBAccessLogsListView listAccessLogsByHostname()

Returns the access logs of one cluster identified by the cluster's hostname. Access logs contain a list of authentication requests made against your clusters. You can't use this feature on tenant-tier clusters (M0, M2, M5). To use this resource, the requesting API Key must have the Project Monitoring Admin role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccessTrackingApi(configuration);

let body:.AccessTrackingApiListAccessLogsByHostnameRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Fully qualified domain name or IP address of the MongoDB host that stores the log files that you want to download.
  hostname: "hostname_example",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
  // boolean | Flag that indicates whether the response returns the successful authentication attempts only. (optional)
  authResult: true,
  // Date | Date and time when to stop retrieving database history. If you specify **end**, you must also specify **start**. This parameter uses the ISO 8601 timestamp format in UTC. (optional)
  end: new Date('1970-01-01T00:00:00.00Z'),
  // string | One Internet Protocol address that attempted to authenticate with the database. (optional)
  ipAddress: "3253:5e:3:f:cba0:9:7:1",
  // number | Maximum number of lines from the log to return. (optional)
  nLogs: 20000,
  // Date | Date and time when MongoDB Cloud begins retrieving database history. If you specify **start**, you must also specify **end**. This parameter uses the ISO 8601 timestamp format in UTC. (optional)
  start: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.listAccessLogsByHostname(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **hostname** | [**string**] | Fully qualified domain name or IP address of the MongoDB host that stores the log files that you want to download. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined
 **authResult** | [**boolean**] | Flag that indicates whether the response returns the successful authentication attempts only. | (optional) defaults to undefined
 **end** | [**Date**] | Date and time when to stop retrieving database history. If you specify **end**, you must also specify **start**. This parameter uses the ISO 8601 timestamp format in UTC. | (optional) defaults to undefined
 **ipAddress** | [**string**] | One Internet Protocol address that attempted to authenticate with the database. | (optional) defaults to undefined
 **nLogs** | [**number**] | Maximum number of lines from the log to return. | (optional) defaults to 20000
 **start** | [**Date**] | Date and time when MongoDB Cloud begins retrieving database history. If you specify **start**, you must also specify **end**. This parameter uses the ISO 8601 timestamp format in UTC. | (optional) defaults to undefined


### Return type

**ApiMongoDBAccessLogsListView**

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
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


