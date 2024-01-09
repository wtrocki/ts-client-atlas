# .ClustersApi

All URIs are relative to *https://cloud.mongodb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCluster**](ClustersApi.md#createCluster) | **POST** /api/atlas/v2/groups/{groupId}/clusters | Create One Multi-Cloud Cluster from One Project
[**deleteCluster**](ClustersApi.md#deleteCluster) | **DELETE** /api/atlas/v2/groups/{groupId}/clusters/{clusterName} | Remove One Multi-Cloud Cluster from One Project
[**getCluster**](ClustersApi.md#getCluster) | **GET** /api/atlas/v2/groups/{groupId}/clusters/{clusterName} | Return One Multi-Cloud Cluster from One Project
[**getClusterAdvancedConfiguration**](ClustersApi.md#getClusterAdvancedConfiguration) | **GET** /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/processArgs | Return One Advanced Configuration Options for One Cluster
[**getClusterStatus**](ClustersApi.md#getClusterStatus) | **GET** /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/status | Return Status of All Cluster Operations
[**getSampleDatasetLoadStatus**](ClustersApi.md#getSampleDatasetLoadStatus) | **GET** /api/atlas/v2/groups/{groupId}/sampleDatasetLoad/{sampleDatasetId} | Check Status of Cluster Sample Dataset Request
[**listCloudProviderRegions**](ClustersApi.md#listCloudProviderRegions) | **GET** /api/atlas/v2/groups/{groupId}/clusters/provider/regions | Return All Cloud Provider Regions
[**listClusters**](ClustersApi.md#listClusters) | **GET** /api/atlas/v2/groups/{groupId}/clusters | Return All Clusters in One Project
[**listClustersForAllProjects**](ClustersApi.md#listClustersForAllProjects) | **GET** /api/atlas/v2/clusters | Return All Authorized Clusters in All Projects
[**loadSampleDataset**](ClustersApi.md#loadSampleDataset) | **POST** /api/atlas/v2/groups/{groupId}/sampleDatasetLoad/{name} | Load Sample Dataset Request into Cluster
[**testFailover**](ClustersApi.md#testFailover) | **POST** /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/restartPrimaries | Test Failover for One Multi-Cloud Cluster
[**updateCluster**](ClustersApi.md#updateCluster) | **PATCH** /api/atlas/v2/groups/{groupId}/clusters/{clusterName} | Modify One Multi-Cloud Cluster from One Project
[**updateClusterAdvancedConfiguration**](ClustersApi.md#updateClusterAdvancedConfiguration) | **PATCH** /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/processArgs | Update Advanced Configuration Options for One Cluster
[**upgradeSharedCluster**](ClustersApi.md#upgradeSharedCluster) | **POST** /api/atlas/v2/groups/{groupId}/clusters/tenantUpgrade | Upgrade One Shared-tier Cluster
[**upgradeSharedClusterToServerless**](ClustersApi.md#upgradeSharedClusterToServerless) | **POST** /api/atlas/v2/groups/{groupId}/clusters/tenantUpgradeToServerless | Upgrades One Shared-Tier Cluster to the Serverless Instance


# **createCluster**
> AdvancedClusterDescription createCluster(advancedClusterDescription)

Creates one cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. This resource can create multi-cloud clusters. Each project supports up to 25 database deployments. To use this resource, the requesting API Key must have the Project Owner role. This feature is not available for serverless clusters. Deprecated versions: v2-{2023-01-01}

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiCreateClusterRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // AdvancedClusterDescription | Cluster to create in the specific project.
  advancedClusterDescription: {
    acceptDataRisksAndForceReplicaSetReconfig: new Date('1970-01-01T00:00:00.00Z'),
    backupEnabled: false,
    biConnector: {
      enabled: true,
      readPreference: "readPreference_example",
    },
    clusterType: "clusterType_example",
    diskSizeGB: 10,
    encryptionAtRestProvider: "encryptionAtRestProvider_example",
    labels: [
      {
        key: "key_example",
        value: "value_example",
      },
    ],
    mongoDBMajorVersion: "6.0",
    name: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
    paused: true,
    pitEnabled: true,
    replicationSpecs: [
      {
        numShards: 1,
        regionConfigs: [
          {
            electableSpecs: {
              diskIOPS: 1,
              ebsVolumeType: "STANDARD",
              instanceSize: "instanceSize_example",
              nodeCount: 1,
            },
            priority: 0,
            providerName: "providerName_example",
            regionName: "regionName_example",
            analyticsAutoScaling: {
              compute: {
                enabled: true,
                maxInstanceSize: "maxInstanceSize_example",
                minInstanceSize: "minInstanceSize_example",
                scaleDownEnabled: true,
              },
              diskGB: {
                enabled: true,
              },
            },
            analyticsSpecs: {
              nodeCount: 1,
              diskIOPS: 1,
              ebsVolumeType: "STANDARD",
              instanceSize: "instanceSize_example",
            },
            autoScaling: {
              compute: {
                enabled: true,
                maxInstanceSize: "maxInstanceSize_example",
                minInstanceSize: "minInstanceSize_example",
                scaleDownEnabled: true,
              },
              diskGB: {
                enabled: true,
              },
            },
            readOnlySpecs: {
              nodeCount: 1,
              diskIOPS: 1,
              ebsVolumeType: "STANDARD",
              instanceSize: "instanceSize_example",
            },
            backingProviderName: "backingProviderName_example",
          },
        ],
        zoneName: "zoneName_example",
      },
    ],
    rootCertType: "ISRGROOTX1",
    tags: [
      {
        key: "key_example",
        value: "value_example",
      },
    ],
    terminationProtectionEnabled: false,
    versionReleaseSystem: "LTS",
  },
};

apiInstance.createCluster(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advancedClusterDescription** | **AdvancedClusterDescription**| Cluster to create in the specific project. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined


### Return type

**AdvancedClusterDescription**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.atlas.2023-02-01+json
 - **Accept**: application/vnd.atlas.2023-02-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request. |  -  |
**401** | Unauthorized. |  -  |
**402** | Payment Required. |  -  |
**403** | Forbidden. |  -  |
**409** | Conflict. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCluster**
> void deleteCluster()

Removes one cluster with advanced features from the specified project. The cluster must have termination protection disabled in order to be deleted. To use this resource, the requesting API Key must have the Project Owner role. This feature is not available for serverless clusters. Deprecated versions: v2-{2023-01-01}

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiDeleteClusterRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the cluster.
  clusterName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
  // boolean | Flag that indicates whether to retain backup snapshots for the deleted dedicated cluster. (optional)
  retainBackups: true,
};

apiInstance.deleteCluster(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **clusterName** | [**string**] | Human-readable label that identifies the cluster. | defaults to undefined
 **retainBackups** | [**boolean**] | Flag that indicates whether to retain backup snapshots for the deleted dedicated cluster. | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-02-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**400** | Bad Request. |  -  |
**401** | Unauthorized. |  -  |
**404** | Not Found. |  -  |
**409** | Conflict. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCluster**
> AdvancedClusterDescription getCluster()

Returns the details for one cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. The response includes multi-cloud clusters. To use this resource, the requesting API Key must have the Project Read Only role. This feature is not available for serverless clusters. Deprecated versions: v2-{2023-01-01}

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiGetClusterRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies this advanced cluster.
  clusterName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
};

apiInstance.getCluster(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **clusterName** | [**string**] | Human-readable label that identifies this advanced cluster. | defaults to undefined


### Return type

**AdvancedClusterDescription**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-02-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized. |  -  |
**404** | Not Found. |  -  |
**409** | Conflict. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getClusterAdvancedConfiguration**
> ClusterDescriptionProcessArgs getClusterAdvancedConfiguration()

Returns the advanced configuration details for one cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. Advanced configuration details include the read/write concern, index and oplog limits, and other database settings. This feature isn't available for `M0` free clusters, `M2` and `M5` shared-tier clusters, or serverless clusters. To use this resource, the requesting API Key must have the Project Read Only role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiGetClusterAdvancedConfigurationRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the cluster.
  clusterName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
};

apiInstance.getClusterAdvancedConfiguration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **clusterName** | [**string**] | Human-readable label that identifies the cluster. | defaults to undefined


### Return type

**ClusterDescriptionProcessArgs**

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
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getClusterStatus**
> ClusterStatus getClusterStatus()

Returns the status of all changes that you made to the specified cluster in the specified project. Use this resource to check the progress MongoDB Cloud has made in processing your changes. The response does not include the deployment of new dedicated clusters. To use this resource, the requesting API Key must have the Project Read Only role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiGetClusterStatusRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the cluster.
  clusterName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
};

apiInstance.getClusterStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **clusterName** | [**string**] | Human-readable label that identifies the cluster. | defaults to undefined


### Return type

**ClusterStatus**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSampleDatasetLoadStatus**
> SampleDatasetStatus getSampleDatasetLoadStatus()

Checks the progress of loading the sample dataset into one cluster. To use this resource, the requesting API Key must have the Project Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiGetSampleDatasetLoadStatusRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Unique 24-hexadecimal digit string that identifies the loaded sample dataset.
  sampleDatasetId: "bf325375e030fccba0091731",
};

apiInstance.getSampleDatasetLoadStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **sampleDatasetId** | [**string**] | Unique 24-hexadecimal digit string that identifies the loaded sample dataset. | defaults to undefined


### Return type

**SampleDatasetStatus**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCloudProviderRegions**
> PaginatedApiAtlasProviderRegions listCloudProviderRegions()

Returns the list of regions available for the specified cloud provider at the specified tier. To use this resource, the requesting API Key must have the Project Read Only role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiListCloudProviderRegionsRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // boolean | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. (optional)
  includeCount: true,
  // number | Number of items that the response returns per page. (optional)
  itemsPerPage: 100,
  // number | Number of the page that displays the current set of the total objects that the response returns. (optional)
  pageNum: 1,
  // Array<string> | Cloud providers whose regions to retrieve. When you specify multiple providers, the response can return only tiers and regions that support multi-cloud clusters. (optional)
  providers: [
    "providers_example",
  ],
  // string | Cluster tier for which to retrieve the regions. (optional)
  tier: "tier_example",
};

apiInstance.listCloudProviderRegions(body).then((data:any) => {
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
 **providers** | **Array&lt;string&gt;** | Cloud providers whose regions to retrieve. When you specify multiple providers, the response can return only tiers and regions that support multi-cloud clusters. | (optional) defaults to undefined
 **tier** | [**string**] | Cluster tier for which to retrieve the regions. | (optional) defaults to undefined


### Return type

**PaginatedApiAtlasProviderRegions**

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

# **listClusters**
> PaginatedAdvancedClusterDescription listClusters()

Returns the details for all clusters in the specific project to which you have access. Clusters contain a group of hosts that maintain the same data set. The response includes multi-cloud clusters. To use this resource, the requesting API Key must have the Project Read Only role. This feature is not available for serverless clusters. Deprecated versions: v2-{2023-01-01}

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiListClustersRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // boolean | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. (optional)
  includeCount: true,
  // number | Number of items that the response returns per page. (optional)
  itemsPerPage: 100,
  // number | Number of the page that displays the current set of the total objects that the response returns. (optional)
  pageNum: 1,
  // boolean | Flag that indicates whether to return Clusters with retain backups. (optional)
  includeDeletedWithRetainedBackups: false,
};

apiInstance.listClusters(body).then((data:any) => {
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
 **includeDeletedWithRetainedBackups** | [**boolean**] | Flag that indicates whether to return Clusters with retain backups. | (optional) defaults to undefined


### Return type

**PaginatedAdvancedClusterDescription**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-02-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listClustersForAllProjects**
> PaginatedOrgGroup listClustersForAllProjects()

Returns the details for all clusters in all projects to which you have access. Clusters contain a group of hosts that maintain the same data set. The response does not include multi-cloud clusters. To use this resource, the requesting API Key can have any cluster-level role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiListClustersForAllProjectsRequest = {
  // boolean | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. (optional)
  includeCount: true,
  // number | Number of items that the response returns per page. (optional)
  itemsPerPage: 100,
  // number | Number of the page that displays the current set of the total objects that the response returns. (optional)
  pageNum: 1,
};

apiInstance.listClustersForAllProjects(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeCount** | [**boolean**] | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. | (optional) defaults to undefined
 **itemsPerPage** | [**number**] | Number of items that the response returns per page. | (optional) defaults to 100
 **pageNum** | [**number**] | Number of the page that displays the current set of the total objects that the response returns. | (optional) defaults to 1


### Return type

**PaginatedOrgGroup**

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

# **loadSampleDataset**
> SampleDatasetStatus loadSampleDataset()

Requests loading the MongoDB sample dataset into the specified cluster. To use this resource, the requesting API Key must have the Project Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiLoadSampleDatasetRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the cluster into which you load the sample dataset.
  name: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
};

apiInstance.loadSampleDataset(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **name** | [**string**] | Human-readable label that identifies the cluster into which you load the sample dataset. | defaults to undefined


### Return type

**SampleDatasetStatus**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request. |  -  |
**404** | Not Found. |  -  |
**409** | Conflict. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testFailover**
> void testFailover()

Starts a failover test for the specified cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. A failover test checks how MongoDB Cloud handles the failure of the cluster's primary node. During the test, MongoDB Cloud shuts down the primary node and elects a new primary. To use this resource, the requesting API Key must have the Project Cluster Manager role. Deprecated versions: v2-{2023-01-01}

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiTestFailoverRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the cluster.
  clusterName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
};

apiInstance.testFailover(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **clusterName** | [**string**] | Human-readable label that identifies the cluster. | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-02-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCluster**
> AdvancedClusterDescription updateCluster(advancedClusterDescription)

Updates the details for one cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. This resource can update multi-cloud clusters. To update a cluster's termination protection, the requesting API Key must have the Project Owner role. For all other updates, the requesting API Key must have the Project Cluster Manager role. You can't modify a paused cluster (`paused : true`). You must call this endpoint to set `paused : false`. After this endpoint responds with `paused : false`, you can call it again with the changes you want to make to the cluster. This feature is not available for serverless clusters. Deprecated versions: v2-{2023-01-01}

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiUpdateClusterRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the cluster.
  clusterName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
  // AdvancedClusterDescription | Cluster to update in the specified project.
  advancedClusterDescription: {
    acceptDataRisksAndForceReplicaSetReconfig: new Date('1970-01-01T00:00:00.00Z'),
    backupEnabled: false,
    biConnector: {
      enabled: true,
      readPreference: "readPreference_example",
    },
    clusterType: "clusterType_example",
    diskSizeGB: 10,
    encryptionAtRestProvider: "encryptionAtRestProvider_example",
    labels: [
      {
        key: "key_example",
        value: "value_example",
      },
    ],
    mongoDBMajorVersion: "6.0",
    name: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
    paused: true,
    pitEnabled: true,
    replicationSpecs: [
      {
        numShards: 1,
        regionConfigs: [
          {
            electableSpecs: {
              diskIOPS: 1,
              ebsVolumeType: "STANDARD",
              instanceSize: "instanceSize_example",
              nodeCount: 1,
            },
            priority: 0,
            providerName: "providerName_example",
            regionName: "regionName_example",
            analyticsAutoScaling: {
              compute: {
                enabled: true,
                maxInstanceSize: "maxInstanceSize_example",
                minInstanceSize: "minInstanceSize_example",
                scaleDownEnabled: true,
              },
              diskGB: {
                enabled: true,
              },
            },
            analyticsSpecs: {
              nodeCount: 1,
              diskIOPS: 1,
              ebsVolumeType: "STANDARD",
              instanceSize: "instanceSize_example",
            },
            autoScaling: {
              compute: {
                enabled: true,
                maxInstanceSize: "maxInstanceSize_example",
                minInstanceSize: "minInstanceSize_example",
                scaleDownEnabled: true,
              },
              diskGB: {
                enabled: true,
              },
            },
            readOnlySpecs: {
              nodeCount: 1,
              diskIOPS: 1,
              ebsVolumeType: "STANDARD",
              instanceSize: "instanceSize_example",
            },
            backingProviderName: "backingProviderName_example",
          },
        ],
        zoneName: "zoneName_example",
      },
    ],
    rootCertType: "ISRGROOTX1",
    tags: [
      {
        key: "key_example",
        value: "value_example",
      },
    ],
    terminationProtectionEnabled: false,
    versionReleaseSystem: "LTS",
  },
};

apiInstance.updateCluster(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advancedClusterDescription** | **AdvancedClusterDescription**| Cluster to update in the specified project. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **clusterName** | [**string**] | Human-readable label that identifies the cluster. | defaults to undefined


### Return type

**AdvancedClusterDescription**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.atlas.2023-02-01+json
 - **Accept**: application/vnd.atlas.2023-02-01+json, application/json


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

# **updateClusterAdvancedConfiguration**
> ClusterDescriptionProcessArgs updateClusterAdvancedConfiguration(clusterDescriptionProcessArgs)

Updates the advanced configuration details for one cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. Advanced configuration details include the read/write concern, index and oplog limits, and other database settings. To use this resource, the requesting API Key must have the Project Cluster Manager role. This feature isn't available for `M0` free clusters, `M2` and `M5` shared-tier clusters, or serverless clusters.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiUpdateClusterAdvancedConfigurationRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the cluster.
  clusterName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
  // ClusterDescriptionProcessArgs | Advanced configuration details to add for one cluster in the specified project.
  clusterDescriptionProcessArgs: {
    chunkMigrationConcurrency: 1,
    defaultReadConcern: "available",
    defaultWriteConcern: "1",
    failIndexKeyTooLong: true,
    javascriptEnabled: true,
    minimumEnabledTlsProtocol: "minimumEnabledTlsProtocol_example",
    noTableScan: false,
    oplogMinRetentionHours: 3.14,
    oplogSizeMB: 1,
    queryStatsLogVerbosity: 1,
    sampleRefreshIntervalBIConnector: 0,
    sampleSizeBIConnector: 1000,
    transactionLifetimeLimitSeconds: 60,
  },
};

apiInstance.updateClusterAdvancedConfiguration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterDescriptionProcessArgs** | **ClusterDescriptionProcessArgs**| Advanced configuration details to add for one cluster in the specified project. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **clusterName** | [**string**] | Human-readable label that identifies the cluster. | defaults to undefined


### Return type

**ClusterDescriptionProcessArgs**

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

# **upgradeSharedCluster**
> LegacyAtlasCluster upgradeSharedCluster(legacyAtlasTenantClusterUpgradeRequest)

Upgrades a shared-tier cluster in the specified project. To use this resource, the requesting API key must have the Project Cluster Manager role. Each project supports up to 25 clusters.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiUpgradeSharedClusterRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // LegacyAtlasTenantClusterUpgradeRequest | Details of the shared-tier cluster upgrade in the specified project.
  legacyAtlasTenantClusterUpgradeRequest: {
    acceptDataRisksAndForceReplicaSetReconfig: new Date('1970-01-01T00:00:00.00Z'),
    autoScaling: {
      compute: {
        enabled: true,
        scaleDownEnabled: true,
      },
      diskGBEnabled: true,
    },
    backupEnabled: true,
    biConnector: {
      enabled: true,
      readPreference: "readPreference_example",
    },
    clusterType: "clusterType_example",
    diskSizeGB: 10,
    encryptionAtRestProvider: "encryptionAtRestProvider_example",
    labels: [
      {
        key: "key_example",
        value: "value_example",
      },
    ],
    mongoDBMajorVersion: "6.0",
    mongoDBVersion: "4.072888001528021798096225500850762068629.39333975650685139102691291732729478601482026",
    name: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
    numShards: 1,
    paused: true,
    pitEnabled: true,
    providerBackupEnabled: true,
    providerSettings: {
      providerName: "providerName_example",
      autoScaling: {
        compute: "compute_example",
      },
      diskIOPS: 1,
      encryptEBSVolume: true,
      instanceSizeName: "instanceSizeName_example",
      regionName: "regionName_example",
      volumeType: "volumeType_example",
      diskTypeName: "diskTypeName_example",
      backingProviderName: "backingProviderName_example",
    },
    replicationFactor: 3,
    replicationSpec: {
      "key": {
        analyticsNodes: 1,
        electableNodes: 1,
        priority: 0,
        readOnlyNodes: 1,
      },
    },
    replicationSpecs: [
      {
        id: "32b6e34b3d91647abb20e7b8",
        numShards: 1,
        regionsConfig: {
          "key": {
            analyticsNodes: 1,
            electableNodes: 1,
            priority: 0,
            readOnlyNodes: 1,
          },
        },
        zoneName: "zoneName_example",
      },
    ],
    rootCertType: "ISRGROOTX1",
    tags: [
      {
        key: "key_example",
        value: "value_example",
      },
    ],
    terminationProtectionEnabled: false,
    versionReleaseSystem: "LTS",
  },
};

apiInstance.upgradeSharedCluster(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legacyAtlasTenantClusterUpgradeRequest** | **LegacyAtlasTenantClusterUpgradeRequest**| Details of the shared-tier cluster upgrade in the specified project. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined


### Return type

**LegacyAtlasCluster**

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
**402** | Payment Required. |  -  |
**403** | Forbidden. |  -  |
**409** | Conflict. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **upgradeSharedClusterToServerless**
> ServerlessInstanceDescription upgradeSharedClusterToServerless(serverlessInstanceDescription)

Upgrades a shared-tier cluster to a serverless instance in the specified project. To use this resource, the requesting API key must have the Project Cluster Manager role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClustersApi(configuration);

let body:.ClustersApiUpgradeSharedClusterToServerlessRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // ServerlessInstanceDescription | Details of the shared-tier cluster upgrade in the specified project.
  serverlessInstanceDescription: {
    providerSettings: {
      backingProviderName: "backingProviderName_example",
      providerName: "SERVERLESS",
      regionName: "regionName_example",
    },
    serverlessBackupOptions: {
      serverlessContinuousBackupEnabled: true,
    },
    tags: [
      {
        key: "key_example",
        value: "value_example",
      },
    ],
    terminationProtectionEnabled: false,
  },
};

apiInstance.upgradeSharedClusterToServerless(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverlessInstanceDescription** | **ServerlessInstanceDescription**| Details of the shared-tier cluster upgrade in the specified project. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined


### Return type

**ServerlessInstanceDescription**

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
**402** | Payment Required. |  -  |
**403** | Forbidden. |  -  |
**409** | Conflict. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


