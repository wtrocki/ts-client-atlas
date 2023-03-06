# .RollingIndexApi

All URIs are relative to *https://cloud.mongodb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRollingIndex**](RollingIndexApi.md#createRollingIndex) | **POST** /api/atlas/v2/groups/{groupId}/clusters/{clusterName}/index | Create One Rolling Index


# **createRollingIndex**
> void createRollingIndex(apiIndexRequestView)

Creates an index on the cluster identified by its name in a rolling manner. Creating the index in this way allows index builds on one replica set member as a standalone at a time, starting with the secondary members. Creating indexes in this way requires at least one replica set election. To use this resource, the requesting API Key must have the Project Data Access Admin role. This resource doesn't require the API Key to have an Access List.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RollingIndexApi(configuration);

let body:.RollingIndexApiCreateRollingIndexRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Human-readable label that identifies the cluster on which MongoDB Cloud creates an index.
  clusterName: "gqW,C",
  // ApiIndexRequestView | Rolling index to create on the specified cluster.
  apiIndexRequestView: {
    collation: {
      alternate: "non-ignorable",
      backwards: false,
      caseFirst: "false",
      caseLevel: false,
      locale: "af",
      maxVariable: "punct",
      normalization: false,
      numericOrdering: false,
      strength: 3,
    },
    collection: "collection_example",
    db: "db_example",
    keys: [
      {
        "key": "key_example",
      },
    ],
    options: {
      _2dsphereIndexVersion: 3,
      background: false,
      bits: 26,
      bucketSize: 1,
      defaultLanguage: "english",
      expireAfterSeconds: 1,
      hidden: false,
      languageOverride: "language",
      max: 180,
      min: -180,
      name: "name_example",
      partialFilterExpression: {
        "key": {},
      },
      sparse: false,
      storageEngine: {
        "key": {},
      },
      textIndexVersion: 3,
      unique: false,
      weights: {
        "key": {},
      },
    },
  },
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
};

apiInstance.createRollingIndex(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiIndexRequestView** | **ApiIndexRequestView**| Rolling index to create on the specified cluster. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **clusterName** | [**string**] | Human-readable label that identifies the cluster on which MongoDB Cloud creates an index. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**void**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.atlas.2023-01-01+json
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | This endpoint does not return a response body. |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


