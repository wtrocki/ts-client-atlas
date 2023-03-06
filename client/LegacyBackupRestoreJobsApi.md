# .LegacyBackupRestoreJobsApi

All URIs are relative to *https://cloud.mongodb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLegacyBackupRestoreJob**](LegacyBackupRestoreJobsApi.md#createLegacyBackupRestoreJob) | **POST** /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/restoreJobs | Create One Legacy Backup Restore Job


# **createLegacyBackupRestoreJob**
> PaginatedRestoreJobView createLegacyBackupRestoreJob(apiRestoreJobView)

Restores one legacy backup for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Atlas Admin role and an entry for the project access list.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LegacyBackupRestoreJobsApi(configuration);

let body:.LegacyBackupRestoreJobsApiCreateLegacyBackupRestoreJobRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the cluster with the snapshot you want to return.
  clusterName: "gqW,C",
  // ApiRestoreJobView | Legacy backup to restore to one cluster in the specified project.
  apiRestoreJobView: {
    checkpointId: "32b6e34b3d91647abb20e7b8",
    delivery: {
      expirationHours: 1,
      maxDownloads: 1,
      methodName: "CLIENT_PIT_HTTP",
      targetClusterId: "32b6e34b3d91647abb20e7b8",
      targetClusterName: "gqW,C",
      targetGroupId: "32b6e34b3d91647abb20e7b8",
    },
    oplogInc: 1,
    oplogTs: "2800-02-29T0\d:2\d:2\dZ",
    pointInTimeUTCMillis: 1199145600000,
    snapshotId: "32b6e34b3d91647abb20e7b8",
  },
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
};

apiInstance.createLegacyBackupRestoreJob(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiRestoreJobView** | **ApiRestoreJobView**| Legacy backup to restore to one cluster in the specified project. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **clusterName** | [**string**] | Human-readable label that identifies the cluster with the snapshot you want to return. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**PaginatedRestoreJobView**

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
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


