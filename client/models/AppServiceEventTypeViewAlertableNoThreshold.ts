/**
 * MongoDB Atlas Administration API
 * The MongoDB Atlas Administration API allows developers to manage all components in MongoDB Atlas. To learn more, review the [Administration API overview](https://www.mongodb.com/docs/atlas/api/atlas-admin-api/). This OpenAPI specification covers all of the collections with the exception of Alerts, Alert Configurations, and Events. Refer to the [legacy documentation](https://www.mongodb.com/docs/atlas/reference/api-resources/) for the specifications of these resources.
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Event type that triggers an alert.
*/
export type AppServiceEventTypeViewAlertableNoThreshold = "URL_CONFIRMATION" | "SUCCESSFUL_DEPLOY" | "DEPLOYMENT_FAILURE" | "REQUEST_RATE_LIMIT" | "LOG_FORWARDER_FAILURE" | "SYNC_FAILURE" | "TRIGGER_FAILURE" | "TRIGGER_AUTO_RESUMED" | "DEPLOYMENT_MODEL_CHANGE_SUCCESS" | "DEPLOYMENT_MODEL_CHANGE_FAILURE" ;
