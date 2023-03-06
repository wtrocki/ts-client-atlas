# .EncryptionAtRestUsingCustomerKeyManagementApi

All URIs are relative to *https://cloud.mongodb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**returnOneConfigurationForEncryptionAtRestUsingCustomerManagedKeysForOneProject**](EncryptionAtRestUsingCustomerKeyManagementApi.md#returnOneConfigurationForEncryptionAtRestUsingCustomerManagedKeysForOneProject) | **GET** /api/atlas/v2/groups/{groupId}/encryptionAtRest | Return One Configuration for Encryption at Rest using Customer-Managed Keys for One Project
[**updateEncryptionAtRest**](EncryptionAtRestUsingCustomerKeyManagementApi.md#updateEncryptionAtRest) | **PATCH** /api/atlas/v2/groups/{groupId}/encryptionAtRest | Update Configuration for Encryption at Rest using Customer-Managed Keys for One Project


# **returnOneConfigurationForEncryptionAtRestUsingCustomerManagedKeysForOneProject**
> EncryptionAtRest returnOneConfigurationForEncryptionAtRestUsingCustomerManagedKeysForOneProject()

Returns the configuration for encryption at rest using the keys you manage through your cloud provider. MongoDB Cloud encrypts all storage even if you don't use your own key management. This resource requires the requesting API Key to have the Project Owner role.  **LIMITED TO M10 OR GREATER:** MongoDB Cloud limits this feature to dedicated cluster tiers of M10 and greater.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EncryptionAtRestUsingCustomerKeyManagementApi(configuration);

let body:.EncryptionAtRestUsingCustomerKeyManagementApiReturnOneConfigurationForEncryptionAtRestUsingCustomerManagedKeysForOneProjectRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
};

apiInstance.returnOneConfigurationForEncryptionAtRestUsingCustomerManagedKeysForOneProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**EncryptionAtRest**

### Authorization

[DigestAuth](README.md#DigestAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateEncryptionAtRest**
> EncryptionAtRest updateEncryptionAtRest(encryptionAtRest)

Updates the configuration for encryption at rest using the keys you manage through your cloud provider. MongoDB Cloud encrypts all storage even if you don't use your own key management. This resource requires the requesting API Key to have the Project Atlas Admin role.  **LIMITED TO M10 OR GREATER:** MongoDB Cloud limits this feature to dedicated cluster tiers of M10 and greater.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EncryptionAtRestUsingCustomerKeyManagementApi(configuration);

let body:.EncryptionAtRestUsingCustomerKeyManagementApiUpdateEncryptionAtRestRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // EncryptionAtRest | Required parameters depend on whether someone has enabled Encryption at Rest using Customer Key Management:  If you have enabled Encryption at Rest using Customer Key Management (CMK), Atlas requires all of the parameters for the desired encryption provider.  - To use AWS Key Management Service (KMS), MongoDB Cloud requires all the fields in the **awsKms** object. - To use Azure Key Vault, MongoDB Cloud requires all the fields in the **azureKeyVault** object. - To use Google Cloud Key Management Service (KMS), MongoDB Cloud requires all the fields in the **googleCloudKms** object.  If you enabled Encryption at Rest using Customer Key  Management, administrators can pass only the changed fields for the **awsKms**, **azureKeyVault**, or **googleCloudKms** object to update the configuration to this endpoint.
  encryptionAtRest: {
    awsKms: {
      accessKeyID: "019dd98d94b4bb778e7552e4",
      customerMasterKeyID: "customerMasterKeyID_example",
      enabled: true,
      region: "US_GOV_WEST_1",
      roleId: "32b6e34b3d91647abb20e7b8",
      secretAccessKey: "secretAccessKey_example",
    },
    azureKeyVault: {
      azureEnvironment: "AZURE",
      clientID: "clientID_example",
      enabled: true,
      keyIdentifier: "https://EXAMPLEKeyVault.vault.azure.net/keys/EXAMPLEKey/d891821e3d364e9eb88fbd3d11807b86",
      keyVaultName: "keyVaultName_example",
      resourceGroupName: "resourceGroupName_example",
      secret: "secret_example",
      subscriptionID: "subscriptionID_example",
      tenantID: "tenantID_example",
    },
    googleCloudKms: {
      enabled: true,
      keyVersionResourceID: "projects/my-project-common-0/locations/us-east4/keyRings/my-key-ring-0/cryptoKeys/my-key-0/cryptoKeyVersions/1",
      serviceAccountKey: "serviceAccountKey_example",
    },
  },
  // boolean | Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. (optional)
  envelope: false,
  // boolean | Flag that indicates whether the response body should be in the <a href=\"https://en.wikipedia.org/wiki/Prettyprint\" target=\"_blank\" rel=\"noopener noreferrer\">prettyprint</a> format. (optional)
  pretty: false,
};

apiInstance.updateEncryptionAtRest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **encryptionAtRest** | **EncryptionAtRest**| Required parameters depend on whether someone has enabled Encryption at Rest using Customer Key Management:  If you have enabled Encryption at Rest using Customer Key Management (CMK), Atlas requires all of the parameters for the desired encryption provider.  - To use AWS Key Management Service (KMS), MongoDB Cloud requires all the fields in the **awsKms** object. - To use Azure Key Vault, MongoDB Cloud requires all the fields in the **azureKeyVault** object. - To use Google Cloud Key Management Service (KMS), MongoDB Cloud requires all the fields in the **googleCloudKms** object.  If you enabled Encryption at Rest using Customer Key  Management, administrators can pass only the changed fields for the **awsKms**, **azureKeyVault**, or **googleCloudKms** object to update the configuration to this endpoint. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **envelope** | [**boolean**] | Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body. | (optional) defaults to undefined
 **pretty** | [**boolean**] | Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format. | (optional) defaults to undefined


### Return type

**EncryptionAtRest**

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
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


