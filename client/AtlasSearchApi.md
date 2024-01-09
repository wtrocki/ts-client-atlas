# .AtlasSearchApi

All URIs are relative to *https://cloud.mongodb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAtlasSearchDeployment**](AtlasSearchApi.md#createAtlasSearchDeployment) | **POST** /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/search/deployment | Create Search Nodes
[**createAtlasSearchIndex**](AtlasSearchApi.md#createAtlasSearchIndex) | **POST** /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/fts/indexes | Create One Atlas Search Index
[**deleteAtlasSearchDeployment**](AtlasSearchApi.md#deleteAtlasSearchDeployment) | **DELETE** /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/search/deployment | Delete Search Nodes
[**deleteAtlasSearchIndex**](AtlasSearchApi.md#deleteAtlasSearchIndex) | **DELETE** /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/fts/indexes/{indexId} | Remove One Atlas Search Index
[**getAtlasSearchDeployment**](AtlasSearchApi.md#getAtlasSearchDeployment) | **GET** /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/search/deployment | Return Search Nodes
[**getAtlasSearchIndex**](AtlasSearchApi.md#getAtlasSearchIndex) | **GET** /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/fts/indexes/{indexId} | Return One Atlas Search Index
[**listAtlasSearchIndexes**](AtlasSearchApi.md#listAtlasSearchIndexes) | **GET** /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/fts/indexes/{databaseName}/{collectionName} | Return All Atlas Search Indexes for One Collection
[**updateAtlasSearchDeployment**](AtlasSearchApi.md#updateAtlasSearchDeployment) | **PATCH** /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/search/deployment | Update Search Nodes
[**updateAtlasSearchIndex**](AtlasSearchApi.md#updateAtlasSearchIndex) | **PATCH** /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/fts/indexes/{indexId} | Update One Atlas Search Index


# **createAtlasSearchDeployment**
> ApiSearchDeploymentResponse createAtlasSearchDeployment(apiSearchDeploymentRequest)

Creates search nodes for the specified cluster.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AtlasSearchApi(configuration);

let body:.AtlasSearchApiCreateAtlasSearchDeploymentRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Label that identifies the cluster to create search nodes for.
  clusterName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
  // ApiSearchDeploymentRequest | Creates search nodes for the specified cluster.
  apiSearchDeploymentRequest: {
    specs: [
      {
        instanceSize: "instanceSize_example",
        nodeCount: 2,
      },
    ],
  },
};

apiInstance.createAtlasSearchDeployment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiSearchDeploymentRequest** | **ApiSearchDeploymentRequest**| Creates search nodes for the specified cluster. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **clusterName** | [**string**] | Label that identifies the cluster to create search nodes for. | defaults to undefined


### Return type

**ApiSearchDeploymentResponse**

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

# **createAtlasSearchIndex**
> ClusterSearchIndex createAtlasSearchIndex(clusterSearchIndex)

Creates one Atlas Search index on the specified collection. Atlas Search indexes define the fields on which to create the index and the analyzers to use when creating the index. Only clusters running MongoDB v4.2 or later can use Atlas Search. To use this resource, the requesting API Key must have the Project Data Access Admin role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AtlasSearchApi(configuration);

let body:.AtlasSearchApiCreateAtlasSearchIndexRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Name of the cluster that contains the collection on which to create an Atlas Search index.
  clusterName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
  // ClusterSearchIndex | Creates one Atlas Search index on the specified collection.
  clusterSearchIndex: {
    collectionName: "collectionName_example",
    database: "database_example",
    name: "name_example",
    type: "type_example",
    analyzer: "lucene.standard",
    analyzers: [
      {
        charFilters: [
          null,
        ],
        name: "name_example",
        tokenFilters: [
          null,
        ],
        tokenizer: {
          maxGram: 1,
          minGram: 1,
          type: "type_example",
          group: 1,
          pattern: "pattern_example",
          maxTokenLength: 255,
        },
      },
    ],
    mappings: {
      dynamic: false,
      fields: {
        "key": null,
      },
    },
    searchAnalyzer: "lucene.standard",
    synonyms: [
      {
        analyzer: "lucene.standard",
        name: "name_example",
        source: {
          collection: "collection_example",
        },
      },
    ],
    fields: [
      {
        "key": null,
      },
    ],
  },
};

apiInstance.createAtlasSearchIndex(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterSearchIndex** | **ClusterSearchIndex**| Creates one Atlas Search index on the specified collection. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **clusterName** | [**string**] | Name of the cluster that contains the collection on which to create an Atlas Search index. | defaults to undefined


### Return type

**ClusterSearchIndex**

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

# **deleteAtlasSearchDeployment**
> void deleteAtlasSearchDeployment()

Deletes the search nodes for the specified cluster.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AtlasSearchApi(configuration);

let body:.AtlasSearchApiDeleteAtlasSearchDeploymentRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Label that identifies the cluster to delete.
  clusterName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
};

apiInstance.deleteAtlasSearchDeployment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **clusterName** | [**string**] | Label that identifies the cluster to delete. | defaults to undefined


### Return type

**void**

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

# **deleteAtlasSearchIndex**
> any deleteAtlasSearchIndex()

Removes one Atlas Search index that you identified with its unique ID. To use this resource, the requesting API Key must have the Project Data Access Admin role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AtlasSearchApi(configuration);

let body:.AtlasSearchApiDeleteAtlasSearchIndexRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Name of the cluster that contains the database and collection with one or more Application Search indexes.
  clusterName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
  // string | Unique 24-hexadecimal digit string that identifies the Atlas Search index. Use the [Get All Atlas Search Indexes for a Collection API](https://docs.atlas.mongodb.com/reference/api/fts-indexes-get-all/) endpoint to find the IDs of all Atlas Search indexes.
  indexId: "bf325375e030fccba0091731",
};

apiInstance.deleteAtlasSearchIndex(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **clusterName** | [**string**] | Name of the cluster that contains the database and collection with one or more Application Search indexes. | defaults to undefined
 **indexId** | [**string**] | Unique 24-hexadecimal digit string that identifies the Atlas Search index. Use the [Get All Atlas Search Indexes for a Collection API](https://docs.atlas.mongodb.com/reference/api/fts-indexes-get-all/) endpoint to find the IDs of all Atlas Search indexes. | defaults to undefined


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
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAtlasSearchDeployment**
> ApiSearchDeploymentResponse getAtlasSearchDeployment()

Return the search nodes for the specified cluster.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AtlasSearchApi(configuration);

let body:.AtlasSearchApiGetAtlasSearchDeploymentRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Label that identifies the cluster to return the search nodes for.
  clusterName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
};

apiInstance.getAtlasSearchDeployment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **clusterName** | [**string**] | Label that identifies the cluster to return the search nodes for. | defaults to undefined


### Return type

**ApiSearchDeploymentResponse**

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

# **getAtlasSearchIndex**
> ClusterSearchIndex getAtlasSearchIndex()

Returns one Atlas Search index in the specified project. You identify this index using its unique ID. Atlas Search index contains the indexed fields and the analyzers used to create the index. To use this resource, the requesting API Key must have the Project Data Access Read Write role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AtlasSearchApi(configuration);

let body:.AtlasSearchApiGetAtlasSearchIndexRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Name of the cluster that contains the collection with one or more Atlas Search indexes.
  clusterName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
  // string | Unique 24-hexadecimal digit string that identifies the Application Search [index](https://docs.atlas.mongodb.com/reference/atlas-search/index-definitions/). Use the [Get All Application Search Indexes for a Collection API](https://docs.atlas.mongodb.com/reference/api/fts-indexes-get-all/) endpoint to find the IDs of all Application Search indexes.
  indexId: "bf325375e030fccba0091731",
};

apiInstance.getAtlasSearchIndex(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **clusterName** | [**string**] | Name of the cluster that contains the collection with one or more Atlas Search indexes. | defaults to undefined
 **indexId** | [**string**] | Unique 24-hexadecimal digit string that identifies the Application Search [index](https://docs.atlas.mongodb.com/reference/atlas-search/index-definitions/). Use the [Get All Application Search Indexes for a Collection API](https://docs.atlas.mongodb.com/reference/api/fts-indexes-get-all/) endpoint to find the IDs of all Application Search indexes. | defaults to undefined


### Return type

**ClusterSearchIndex**

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

# **listAtlasSearchIndexes**
> Array<ClusterSearchIndex> listAtlasSearchIndexes()

Returns all Atlas Search indexes on the specified collection. Atlas Search indexes contain the indexed fields and the analyzers used to create the indexes. To use this resource, the requesting API Key must have the Project Data Access Read Write role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AtlasSearchApi(configuration);

let body:.AtlasSearchApiListAtlasSearchIndexesRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Name of the cluster that contains the collection with one or more Atlas Search indexes.
  clusterName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
  // string | Name of the collection that contains one or more Atlas Search indexes.
  collectionName: "collectionName_example",
  // string | Human-readable label that identifies the database that contains the collection with one or more Atlas Search indexes.
  databaseName: "databaseName_example",
};

apiInstance.listAtlasSearchIndexes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **clusterName** | [**string**] | Name of the cluster that contains the collection with one or more Atlas Search indexes. | defaults to undefined
 **collectionName** | [**string**] | Name of the collection that contains one or more Atlas Search indexes. | defaults to undefined
 **databaseName** | [**string**] | Human-readable label that identifies the database that contains the collection with one or more Atlas Search indexes. | defaults to undefined


### Return type

**Array<ClusterSearchIndex>**

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

# **updateAtlasSearchDeployment**
> ApiSearchDeploymentResponse updateAtlasSearchDeployment(apiSearchDeploymentRequest)

Updates the search nodes for the specified cluster.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AtlasSearchApi(configuration);

let body:.AtlasSearchApiUpdateAtlasSearchDeploymentRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Label that identifies the cluster to update the search nodes for.
  clusterName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
  // ApiSearchDeploymentRequest | Updates the search nodes for the specified cluster.
  apiSearchDeploymentRequest: {
    specs: [
      {
        instanceSize: "instanceSize_example",
        nodeCount: 2,
      },
    ],
  },
};

apiInstance.updateAtlasSearchDeployment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiSearchDeploymentRequest** | **ApiSearchDeploymentRequest**| Updates the search nodes for the specified cluster. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **clusterName** | [**string**] | Label that identifies the cluster to update the search nodes for. | defaults to undefined


### Return type

**ApiSearchDeploymentResponse**

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

# **updateAtlasSearchIndex**
> ClusterSearchIndex updateAtlasSearchIndex(clusterSearchIndex)

Updates one Atlas Search index that you identified with its unique ID. Atlas Search indexes define the fields on which to create the index and the analyzers to use when creating the index. To use this resource, the requesting API Key must have the Project Data Access Admin role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AtlasSearchApi(configuration);

let body:.AtlasSearchApiUpdateAtlasSearchIndexRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Name of the cluster that contains the collection whose Atlas Search index to update.
  clusterName: "gqWzyBAw2ZuufUOHOEhA8IcFQXnua",
  // string | Unique 24-hexadecimal digit string that identifies the Atlas Search [index](https://docs.atlas.mongodb.com/reference/atlas-search/index-definitions/). Use the [Get All Atlas Search Indexes for a Collection API](https://docs.atlas.mongodb.com/reference/api/fts-indexes-get-all/) endpoint to find the IDs of all Atlas Search indexes.
  indexId: "bf325375e030fccba0091731",
  // ClusterSearchIndex | Details to update on the Atlas Search index.
  clusterSearchIndex: {
    collectionName: "collectionName_example",
    database: "database_example",
    name: "name_example",
    type: "type_example",
    analyzer: "lucene.standard",
    analyzers: [
      {
        charFilters: [
          null,
        ],
        name: "name_example",
        tokenFilters: [
          null,
        ],
        tokenizer: {
          maxGram: 1,
          minGram: 1,
          type: "type_example",
          group: 1,
          pattern: "pattern_example",
          maxTokenLength: 255,
        },
      },
    ],
    mappings: {
      dynamic: false,
      fields: {
        "key": null,
      },
    },
    searchAnalyzer: "lucene.standard",
    synonyms: [
      {
        analyzer: "lucene.standard",
        name: "name_example",
        source: {
          collection: "collection_example",
        },
      },
    ],
    fields: [
      {
        "key": null,
      },
    ],
  },
};

apiInstance.updateAtlasSearchIndex(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clusterSearchIndex** | **ClusterSearchIndex**| Details to update on the Atlas Search index. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **clusterName** | [**string**] | Name of the cluster that contains the collection whose Atlas Search index to update. | defaults to undefined
 **indexId** | [**string**] | Unique 24-hexadecimal digit string that identifies the Atlas Search [index](https://docs.atlas.mongodb.com/reference/atlas-search/index-definitions/). Use the [Get All Atlas Search Indexes for a Collection API](https://docs.atlas.mongodb.com/reference/api/fts-indexes-get-all/) endpoint to find the IDs of all Atlas Search indexes. | defaults to undefined


### Return type

**ClusterSearchIndex**

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


