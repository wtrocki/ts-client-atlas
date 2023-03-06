# .SharedTierSnapshotsApi

All URIs are relative to *https://cloud.mongodb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloadSharedClusterBackup**](SharedTierSnapshotsApi.md#downloadSharedClusterBackup) | **POST** /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/backup/tenant/download | Download One M2 or M5 Cluster Snapshot
[**getSharedClusterBackup**](SharedTierSnapshotsApi.md#getSharedClusterBackup) | **GET** /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/backup/tenant/snapshots/{snapshotId} | Return One Snapshot for One M2 or M5 Cluster
[**listSharedClusterBackups**](SharedTierSnapshotsApi.md#listSharedClusterBackups) | **GET** /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/backup/tenant/snapshots | Return All Snapshots for One M2 or M5 Cluster


# **downloadSharedClusterBackup**
> TenantRestore downloadSharedClusterBackup(tenantRestore)

Requests one snapshot for the specified shared cluster. This resource returns a `snapshotURL` that you can use to download the snapshot. This `snapshotURL` remains active for four hours after you make the request. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SharedTierSnapshotsApi(configuration);

let body:.SharedTierSnapshotsApiDownloadSharedClusterBackupRequest = {
  // string | Human-readable label that identifies the cluster.
  clusterName: "gqW,C",
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // TenantRestore | Snapshot to be downloaded.
  tenantRestore: {
    snapshotId: "32b6e34b3d91647abb20e7b8",
    targetDeploymentItemName: "})(,).,{&)&}__NL&&@'.)'._,.+..)'&&N}&)N,}_-'+:-",
    targetProjectId: "32b6e34b3d91647abb20e7b8",
  },
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
};

apiInstance.downloadSharedClusterBackup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantRestore** | **TenantRestore**| Snapshot to be downloaded. |
 **clusterName** | [**string**] | Human-readable label that identifies the cluster. | defaults to undefined
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**TenantRestore**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.atlas.2023-01-01+json
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


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

# **getSharedClusterBackup**
> TenantSnapshot getSharedClusterBackup()

Returns details for one snapshot for the specified shared cluster. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SharedTierSnapshotsApi(configuration);

let body:.SharedTierSnapshotsApiGetSharedClusterBackupRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the cluster.
  clusterName: "gqW,C",
  // string | Unique 24-hexadecimal digit string that identifies the desired snapshot.
  snapshotId: "bf325375e030fccba0091731",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
};

apiInstance.getSharedClusterBackup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **clusterName** | [**string**] | Human-readable label that identifies the cluster. | defaults to undefined
 **snapshotId** | [**string**] | Unique 24-hexadecimal digit string that identifies the desired snapshot. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**TenantSnapshot**

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

# **listSharedClusterBackups**
> PaginatedTenantSnapshotView listSharedClusterBackups()

Returns details for all snapshots for the specified shared cluster. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SharedTierSnapshotsApi(configuration);

let body:.SharedTierSnapshotsApiListSharedClusterBackupsRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the cluster.
  clusterName: "gqW,C",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
};

apiInstance.listSharedClusterBackups(body).then((data:any) => {
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


### Return type

**PaginatedTenantSnapshotView**

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


