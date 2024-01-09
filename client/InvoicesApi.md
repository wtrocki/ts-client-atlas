# .InvoicesApi

All URIs are relative to *https://cloud.mongodb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCostExplorerQueryProcess**](InvoicesApi.md#createCostExplorerQueryProcess) | **POST** /api/atlas/v2/orgs/{orgId}/billing/costExplorer/usage | Create Cost Explorer query process
[**createCostExplorerQueryProcess1**](InvoicesApi.md#createCostExplorerQueryProcess1) | **GET** /api/atlas/v2/orgs/{orgId}/billing/costExplorer/usage/{token} | Return results from a given Cost Explorer query, or notify that the results are not ready yet.
[**downloadInvoiceCSV**](InvoicesApi.md#downloadInvoiceCSV) | **GET** /api/atlas/v2/orgs/{orgId}/invoices/{invoiceId}/csv | Return One Organization Invoice as CSV
[**getInvoice**](InvoicesApi.md#getInvoice) | **GET** /api/atlas/v2/orgs/{orgId}/invoices/{invoiceId} | Return One Organization Invoice
[**listInvoices**](InvoicesApi.md#listInvoices) | **GET** /api/atlas/v2/orgs/{orgId}/invoices | Return All Invoices for One Organization
[**listPendingInvoices**](InvoicesApi.md#listPendingInvoices) | **GET** /api/atlas/v2/orgs/{orgId}/invoices/pending | Return All Pending Invoices for One Organization


# **createCostExplorerQueryProcess**
> CostExplorerFilterResponse createCostExplorerQueryProcess(costExplorerFilterRequestBody)

Creates a query process within the Cost Explorer for the given parameters. A token is returned that can be used to poll the status of the query and eventually retrievethe results.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiCreateCostExplorerQueryProcessRequest = {
  // string | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
  orgId: "4888442a3354817a7320eb61",
  // CostExplorerFilterRequestBody | Filter parameters for the Cost Explorer query.
  costExplorerFilterRequestBody: {
    clusters: ["5feeac500000000000000000","61cfdfd00000000000000000"],
    endDate: new Date('Tue Feb 01 01:00:00 CET 2022').toISOString().split('T')[0];,
    groupBy: "groupBy_example",
    includePartialMatches: true,
    organizations: ["5feeac500000000000000000","61cfdfd00000000000000000"],
    projects: ["5feeac500000000000000000","61cfdfd00000000000000000"],
    services: ["Data Transfer","Atlas Data Federation"],
    startDate: new Date('Tue Feb 01 01:00:00 CET 2022').toISOString().split('T')[0];,
  },
};

apiInstance.createCostExplorerQueryProcess(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **costExplorerFilterRequestBody** | **CostExplorerFilterRequestBody**| Filter parameters for the Cost Explorer query. |
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access. | defaults to undefined


### Return type

**CostExplorerFilterResponse**

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
**401** | Unauthorized. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createCostExplorerQueryProcess1**
> string createCostExplorerQueryProcess1()

Returns the usage details for a Cost Explorer query, if the query is finished and the data is ready to be viewed. If the data is not ready, a 'processing' response willindicate that another request should be sent later to view the data.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiCreateCostExplorerQueryProcess1Request = {
  // string | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
  orgId: "4888442a3354817a7320eb61",
  // string | Unique 64 digit string that identifies the Cost Explorer query.
  token: "4ABBE973862346D40F3AE859D4BE96E0F895764EB14EAB039E7B82F9D638C05C",
};

apiInstance.createCostExplorerQueryProcess1(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access. | defaults to undefined
 **token** | [**string**] | Unique 64 digit string that identifies the Cost Explorer query. | defaults to undefined


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+csv, application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**102** | Processing |  -  |
**200** | OK |  -  |
**400** | Bad Request. |  -  |
**401** | Unauthorized. |  -  |
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **downloadInvoiceCSV**
> string downloadInvoiceCSV()

Returns one invoice that MongoDB issued to the specified organization in CSV format. A unique 24-hexadecimal digit string identifies the invoice. To use this resource, the requesting API Key have at least the Organization Billing Viewer, Organization Billing Admin, or Organization Owner role. If you have a cross-organization setup, you can query for a linked invoice if you have the Organization Billing Admin or Organization Owner Role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiDownloadInvoiceCSVRequest = {
  // string | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
  orgId: "4888442a3354817a7320eb61",
  // string | Unique 24-hexadecimal digit string that identifies the invoice submitted to the specified organization. Charges typically post the next day.
  invoiceId: "f",
};

apiInstance.downloadInvoiceCSV(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access. | defaults to undefined
 **invoiceId** | [**string**] | Unique 24-hexadecimal digit string that identifies the invoice submitted to the specified organization. Charges typically post the next day. | defaults to undefined


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+csv, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getInvoice**
> string getInvoice()

Returns one invoice that MongoDB issued to the specified organization. A unique 24-hexadecimal digit string identifies the invoice. You can choose to receive this invoice in JSON or CSV format. To use this resource, the requesting API Key must have the Organization Billing Viewer, Organization Billing Admin, or Organization Owner role. If you have a cross-organization setup, you can query for a linked invoice if you have the Organization Billing Admin or Organization Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiGetInvoiceRequest = {
  // string | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
  orgId: "4888442a3354817a7320eb61",
  // string | Unique 24-hexadecimal digit string that identifies the invoice submitted to the specified organization. Charges typically post the next day.
  invoiceId: "bf325375e030fccba0091731",
};

apiInstance.getInvoice(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access. | defaults to undefined
 **invoiceId** | [**string**] | Unique 24-hexadecimal digit string that identifies the invoice submitted to the specified organization. Charges typically post the next day. | defaults to undefined


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.atlas.2023-01-01+csv, application/vnd.atlas.2023-01-01+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized. |  -  |
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listInvoices**
> PaginatedApiInvoice listInvoices()

Returns all invoices that MongoDB issued to the specified organization. This list includes all invoices regardless of invoice status. To use this resource, the requesting API Key must have the Organization Billing Viewer, Organization Billing Admin, or Organization Owner role. If you have a cross-organization setup, you can view linked invoices if you have the Organization Billing Admin or Organization Owner role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiListInvoicesRequest = {
  // string | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
  orgId: "4888442a3354817a7320eb61",
  // boolean | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. (optional)
  includeCount: true,
  // number | Number of items that the response returns per page. (optional)
  itemsPerPage: 100,
  // number | Number of the page that displays the current set of the total objects that the response returns. (optional)
  pageNum: 1,
};

apiInstance.listInvoices(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access. | defaults to undefined
 **includeCount** | [**boolean**] | Flag that indicates whether the response returns the total number of items (**totalCount**) in the response. | (optional) defaults to undefined
 **itemsPerPage** | [**number**] | Number of items that the response returns per page. | (optional) defaults to 100
 **pageNum** | [**number**] | Number of the page that displays the current set of the total objects that the response returns. | (optional) defaults to 1


### Return type

**PaginatedApiInvoice**

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
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPendingInvoices**
> PaginatedApiInvoice listPendingInvoices()

Returns all invoices accruing charges for the current billing cycle for the specified organization. To use this resource, the requesting API Key must have the Organization Billing Viewer, Organization Billing Admin, or Organization Owner role. If you have a cross-organization setup, you can view linked invoices if you have the Organization Billing Admin or Organization Owner Role.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiListPendingInvoicesRequest = {
  // string | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
  orgId: "4888442a3354817a7320eb61",
};

apiInstance.listPendingInvoices(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access. | defaults to undefined


### Return type

**PaginatedApiInvoice**

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
**404** | Not Found. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


