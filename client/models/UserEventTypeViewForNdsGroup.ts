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
* Unique identifier of event type.
*/
export type UserEventTypeViewForNdsGroup = "JOINED_GROUP" | "REMOVED_FROM_GROUP" | "INVITED_TO_GROUP" | "REQUESTED_TO_JOIN_GROUP" | "GROUP_INVITATION_DELETED" | "USER_ROLES_CHANGED_AUDIT" | "JOIN_GROUP_REQUEST_DENIED_AUDIT" | "JOIN_GROUP_REQUEST_APPROVED_AUDIT" ;
