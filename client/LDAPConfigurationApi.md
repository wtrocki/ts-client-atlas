# .LDAPConfigurationApi

All URIs are relative to *https://cloud.mongodb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteLDAPConfiguration**](LDAPConfigurationApi.md#deleteLDAPConfiguration) | **DELETE** /api/atlas/v2/groups/{groupId}/userSecurity/ldap/userToDNMapping | Remove the Current LDAP User to DN Mapping
[**getLDAPConfiguration**](LDAPConfigurationApi.md#getLDAPConfiguration) | **GET** /api/atlas/v2/groups/{groupId}/userSecurity | Return the Current LDAP or X.509 Configuration
[**getLDAPConfigurationStatus**](LDAPConfigurationApi.md#getLDAPConfigurationStatus) | **GET** /api/atlas/v2/groups/{groupId}/userSecurity/ldap/verify/{requestId} | Return the Status of One Verify LDAP Configuration Request
[**saveLDAPConfiguration**](LDAPConfigurationApi.md#saveLDAPConfiguration) | **PATCH** /api/atlas/v2/groups/{groupId}/userSecurity | Edit the LDAP or X.509 Configuration
[**verifyLDAPConfiguration**](LDAPConfigurationApi.md#verifyLDAPConfiguration) | **POST** /api/atlas/v2/groups/{groupId}/userSecurity/ldap/verify | Verify the LDAP Configuration in One Project


# **deleteLDAPConfiguration**
> UserSecurity deleteLDAPConfiguration()

Removes the current LDAP Distinguished Name mapping captured in the ``userToDNMapping`` document from the LDAP configuration for the specified project. To use this resource, the requesting API Key must have the Project Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LDAPConfigurationApi(configuration);

let body:.LDAPConfigurationApiDeleteLDAPConfigurationRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
};

apiInstance.deleteLDAPConfiguration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined


### Return type

**UserSecurity**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getLDAPConfiguration**
> UserSecurity getLDAPConfiguration()

Returns the current LDAP configuration for the specified project. To use this resource, the requesting API Key must have the Project Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LDAPConfigurationApi(configuration);

let body:.LDAPConfigurationApiGetLDAPConfigurationRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
};

apiInstance.getLDAPConfiguration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined


### Return type

**UserSecurity**

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

# **getLDAPConfigurationStatus**
> LDAPVerifyConnectivityJobRequest getLDAPConfigurationStatus()

Returns the status of one request to verify one LDAP configuration for the specified project. To use this resource, the requesting API Key must have the Project Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LDAPConfigurationApi(configuration);

let body:.LDAPConfigurationApiGetLDAPConfigurationStatusRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // string | Unique string that identifies the request to verify an <abbr title=\"Lightweight Directory Access Protocol\">LDAP</abbr> configuration.
  requestId: "bf325375e030fccba0091731",
};

apiInstance.getLDAPConfigurationStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined
 **requestId** | [**string**] | Unique string that identifies the request to verify an &lt;abbr title&#x3D;\&quot;Lightweight Directory Access Protocol\&quot;&gt;LDAP&lt;/abbr&gt; configuration. | defaults to undefined


### Return type

**LDAPVerifyConnectivityJobRequest**

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

# **saveLDAPConfiguration**
> UserSecurity saveLDAPConfiguration(userSecurity)

Edits the LDAP configuration for the specified project. To use this resource, the requesting API Key must have the Project Owner role.  Updating this configuration triggers a rolling restart of the database.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LDAPConfigurationApi(configuration);

let body:.LDAPConfigurationApiSaveLDAPConfigurationRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // UserSecurity | Updates the LDAP configuration for the specified project.
  userSecurity: {
    customerX509: {
      cas: "cas_example",
    },
    ldap: {
      authenticationEnabled: true,
      authorizationEnabled: true,
      authzQueryTemplate: "{USER}?memberOf?base",
      bindPassword: "bindPassword_example",
      bindUsername: "CN=BindUser,CN=Users,DC=myldapserver,DC=mycompany,DC=com",
      caCertificate: "caCertificate_example",
      hostname: "zgckec0l3o4gi7xhk0jcy075ua034pgmug8iq37llr1plnjktgos9hdvpwi4jdixdxxml6j.j4swhsa064e9ybn07an7dc0zj1z3o53ghg9.6qsiyk0h9c8fvw06p7a54pxfjl9qsi30bx456v41d30994wetshbws0p64c4bfiki6y.4mr9nwr1as4j3pfv8kcss4s7m7nnl4lz25sh3v1r9goy8pxfv2ryzgt6aeydd7zuvbrt5wycaueook.ju6otpoj5ifautvjjct5108mvhj5wimaijj5ar4ihaucunk5lbvuwh2p5benpr8sw.qa9woex6dzpdz.prol4oxf1vlovr8vywu4jqkr6ra0y0uv60djw9.0jt9hauo5bs93ajxhzwa2z47zs3p378bgcyme5828j7l.igyo1l0q6ct94n9yu4ivrxn214gibpahdtf93e57lhwd589nqiyhhil1f8etzy5.szasferyixqnrpbfvwlblzdbnyyeuf",
      port: 636,
      userToDNMapping: [
        {
          ldapQuery: "ldapQuery_example",
          match: "(.*)",
          substitution: "CN={0},CN=Users,DC=my-atlas-ldap-server,DC=example,DC=com",
        },
      ],
    },
  },
};

apiInstance.saveLDAPConfiguration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userSecurity** | **UserSecurity**| Updates the LDAP configuration for the specified project. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined


### Return type

**UserSecurity**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.atlas.2023-01-01+json
 - **Accept**: application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**400** | Bad Request. |  -  |
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **verifyLDAPConfiguration**
> LDAPVerifyConnectivityJobRequest verifyLDAPConfiguration(lDAPVerifyConnectivityJobRequestParams)

Verifies the LDAP configuration for the specified project. To use this resource, the requesting API Key must have the Project Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LDAPConfigurationApi(configuration);

let body:.LDAPConfigurationApiVerifyLDAPConfigurationRequest = {
  // string | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  groupId: "32b6e34b3d91647abb20e7b8",
  // LDAPVerifyConnectivityJobRequestParams | The LDAP configuration for the specified project that you want to verify.
  lDAPVerifyConnectivityJobRequestParams: {
    authzQueryTemplate: "{USER}?memberOf?base",
    bindPassword: "bindPassword_example",
    bindUsername: "CN=BindUser,CN=Users,DC=myldapserver,DC=mycompany,DC=com",
    caCertificate: "caCertificate_example",
    hostname: "zgckec0l3o4gi7xhk0jcy075ua034pgmug8iq37llr1plnjktgos9hdvpwi4jdixdxxml6j.j4swhsa064e9ybn07an7dc0zj1z3o53ghg9.6qsiyk0h9c8fvw06p7a54pxfjl9qsi30bx456v41d30994wetshbws0p64c4bfiki6y.4mr9nwr1as4j3pfv8kcss4s7m7nnl4lz25sh3v1r9goy8pxfv2ryzgt6aeydd7zuvbrt5wycaueook.ju6otpoj5ifautvjjct5108mvhj5wimaijj5ar4ihaucunk5lbvuwh2p5benpr8sw.qa9woex6dzpdz.prol4oxf1vlovr8vywu4jqkr6ra0y0uv60djw9.0jt9hauo5bs93ajxhzwa2z47zs3p378bgcyme5828j7l.igyo1l0q6ct94n9yu4ivrxn214gibpahdtf93e57lhwd589nqiyhhil1f8etzy5.szasferyixqnrpbfvwlblzdbnyyeuf",
    port: 636,
  },
};

apiInstance.verifyLDAPConfiguration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lDAPVerifyConnectivityJobRequestParams** | **LDAPVerifyConnectivityJobRequestParams**| The LDAP configuration for the specified project that you want to verify. |
 **groupId** | [**string**] | Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups. | defaults to undefined


### Return type

**LDAPVerifyConnectivityJobRequest**

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


