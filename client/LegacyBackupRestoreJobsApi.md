# .LegacyBackupRestoreJobsApi

All URIs are relative to *https://cloud.mongodb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLegacyBackupRestoreJob**](LegacyBackupRestoreJobsApi.md#createLegacyBackupRestoreJob) | **POST** /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/restoreJobs | Create One Legacy Backup Restore Job


# **createLegacyBackupRestoreJob**
> PaginatedRestoreJob createLegacyBackupRestoreJob(backupRestoreJob)

Restores one legacy backup for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Owner role. Effective 23 March 2020, all new clusters can use only Cloud Backups. When you upgrade to 4.2, your backup system upgrades to cloud backup if it is currently set to legacy backup. After this upgrade, all your existing legacy backup snapshots remain available. They expire over time in accordance with your retention policy. Your backup policy resets to the default schedule. If you had a custom backup policy in place with legacy backups, you must re-create it with the procedure outlined in the [Cloud Backup documentation](https://www.mongodb.com/docs/atlas/backup/cloud-backup/scheduling/#std-label-cloud-provider-backup-schedule). This endpoint doesn't support creating checkpoint restore jobs for sharded clusters, or creating restore jobs for queryable backup snapshots. If you create an automated restore job by specifying `delivery.methodName` of `AUTOMATED_RESTORE` in your request body, MongoDB Cloud removes all existing data on the target cluster prior to the restore.

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
  clusterName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
  // BackupRestoreJob | Legacy backup to restore to one cluster in the specified project.
  backupRestoreJob: {
    checkpointId: "32b6e34b3d91647abb20e7b8",
    delivery: {
      expirationHours: 1,
      maxDownloads: 1,
      methodName: "methodName_example",
      targetClusterId: "32b6e34b3d91647abb20e7b8",
      targetClusterName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
      targetGroupId: "32b6e34b3d91647abb20e7b8",
    },
    oplogInc: 1,
    oplogTs: "2800-02-29T0\d:2\d:2\dZ",
    pointInTimeUTCMillis: 1199145600000,
    snapshotId: "32b6e34b3d91647abb20e7b8",
  },
};

apiInstance.createLegacyBackupRestoreJob(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backupRestoreJob** | **BackupRestoreJob**| Legacy backup to restore to one cluster in the specified project. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **clusterName** | [**string**] | Human-readable label that identifies the cluster with the snapshot you want to return. | defaults to undefined


### Return type

**PaginatedRestoreJob**

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


