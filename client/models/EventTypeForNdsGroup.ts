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

export type EventTypeForNdsGroup = "ALERT_ACKNOWLEDGED_AUDIT" | "ALERT_UNACKNOWLEDGED_AUDIT" | "ALERT_CONFIG_DISABLED_AUDIT" | "ALERT_CONFIG_ENABLED_AUDIT" | "ALERT_CONFIG_ADDED_AUDIT" | "ALERT_CONFIG_DELETED_AUDIT" | "ALERT_CONFIG_CHANGED_AUDIT" | "API_KEY_CREATED" | "API_KEY_DELETED" | "API_KEY_ACCESS_LIST_ENTRY_ADDED" | "API_KEY_ACCESS_LIST_ENTRY_DELETED" | "API_KEY_ROLES_CHANGED" | "API_KEY_DESCRIPTION_CHANGED" | "API_KEY_ADDED_TO_GROUP" | "API_KEY_REMOVED_FROM_GROUP" | "URL_CONFIRMATION" | "SUCCESSFUL_DEPLOY" | "DEPLOYMENT_FAILURE" | "DEPLOYMENT_MODEL_CHANGE_SUCCESS" | "DEPLOYMENT_MODEL_CHANGE_FAILURE" | "REQUEST_RATE_LIMIT" | "LOG_FORWARDER_FAILURE" | "INSIDE_REALM_METRIC_THRESHOLD" | "OUTSIDE_REALM_METRIC_THRESHOLD" | "SYNC_FAILURE" | "TRIGGER_FAILURE" | "TRIGGER_AUTO_RESUMED" | "AUTO_INDEXING_ENABLED" | "AUTO_INDEXING_DISABLED" | "AUTO_INDEXING_INDEX_BUILD_SUBMITTED" | "AUTO_INDEXING_SLOW_INDEX_BUILD" | "AUTO_INDEXING_STALLED_INDEX_BUILD" | "AUTO_INDEXING_FAILED_INDEX_BUILD" | "AUTO_INDEXING_COMPLETED_INDEX_BUILD" | "AUTOMATION_CONFIG_PUBLISHED_AUDIT" | "PEER_CREATED" | "PEER_DELETED" | "PEER_UPDATED" | "AZURE_PEER_CREATED" | "AZURE_PEER_UPDATED" | "AZURE_PEER_ACTIVE" | "AZURE_PEER_DELETED" | "CREDIT_CARD_CURRENT" | "CREDIT_CARD_ABOUT_TO_EXPIRE" | "PENDING_INVOICE_UNDER_THRESHOLD" | "PENDING_INVOICE_OVER_THRESHOLD" | "DAILY_BILL_UNDER_THRESHOLD" | "DAILY_BILL_OVER_THRESHOLD" | "CHARGE_SUCCEEDED" | "CHARGE_FAILED" | "CHARGE_PROCESSING" | "CHARGE_PENDING_REVERSAL" | "BRAINTREE_CHARGE_FAILED" | "INVOICE_CLOSED" | "CHECK_PAYMENT_RECEIVED" | "WIRE_TRANSFER_PAYMENT_RECEIVED" | "DISCOUNT_APPLIED" | "CREDIT_ISSUED" | "CREDIT_PULLED_FWD" | "CREDIT_START_DATE_MODIFIED" | "CREDIT_END_DATE_MODIFIED" | "CREDIT_ELASTIC_INVOICING_MODIFIED" | "CREDIT_TYPE_MODIFIED" | "CREDIT_AMOUNT_CENTS_MODIFIED" | "CREDIT_AMOUNT_REMAINING_CENTS_MODIFIED" | "CREDIT_TOTAL_BILLED_CENTS_MODIFIED" | "CREDIT_AWS_CUSTOMER_ID_MODIFIED" | "CREDIT_AWS_PRODUCT_CODE_MODIFIED" | "CREDIT_GCP_MARKETPLACE_ENTITLEMENT_ID_MODIFIED" | "CREDIT_AZURE_SUBSCRIPTION_ID_MODIFIED" | "PROMO_CODE_APPLIED" | "PAYMENT_FORGIVEN" | "REFUND_ISSUED" | "ACCOUNT_DOWNGRADED" | "ACCOUNT_UPGRADED" | "ACCOUNT_MODIFIED" | "SUPPORT_PLAN_ACTIVATED" | "SUPPORT_PLAN_CANCELLED" | "SUPPORT_PLAN_CANCELLATION_SCHEDULED" | "INITIATE_SALESFORCE_SERVICE_CLOUD_SYNC" | "INVOICE_ADDRESS_CHANGED" | "INVOICE_ADDRESS_ADDED" | "PREPAID_PLAN_ACTIVATED" | "ELASTIC_INVOICING_MODE_ACTIVATED" | "ELASTIC_INVOICING_MODE_DEACTIVATED" | "TERMINATE_PAID_SERVICES" | "BILLING_EMAIL_ADDRESS_ADDED" | "BILLING_EMAIL_ADDRESS_CHANGED" | "BILLING_EMAIL_ADDRESS_REMOVED" | "CLUSTER_CONNECTION_GET_DATABASES" | "CLUSTER_CONNECTION_GET_DATABASE_COLLECTIONS" | "CLUSTER_CONNECTION_GET_DATABASE_NAMESPACES" | "CLUSTER_CONNECTION_AGGREGATE" | "CLUSTER_CONNECTION_CREATE_COLLECTION" | "CLUSTER_CONNECTION_SAMPLE_COLLECTION_FIELD_NAMES" | "CLUSTER_MONGOS_IS_PRESENT" | "CLUSTER_MONGOS_IS_MISSING" | "CPS_SNAPSHOT_SUCCESSFUL" | "CPS_SNAPSHOT_FALLBACK_SUCCESSFUL" | "CPS_SNAPSHOT_BEHIND" | "CPS_SNAPSHOT_FALLBACK_FAILED" | "CPS_RESTORE_SUCCESSFUL" | "CPS_EXPORT_SUCCESSFUL" | "CPS_RESTORE_FAILED" | "CPS_EXPORT_FAILED" | "CPS_SNAPSHOT_DOWNLOAD_REQUEST_FAILED" | "DATA_EXPLORER" | "DATA_EXPLORER_CRUD_ATTEMPT" | "DATA_EXPLORER_CRUD_ERROR" | "DATA_EXPLORER_CRUD" | "CPS_DATA_PROTECTION_ENABLE_REQUESTED" | "CPS_DATA_PROTECTION_ENABLED" | "CPS_DATA_PROTECTION_UPDATE_REQUESTED" | "CPS_DATA_PROTECTION_UPDATED" | "CPS_DATA_PROTECTION_DISABLE_REQUESTED" | "CPS_DATA_PROTECTION_DISABLED" | "CPS_RESTORE_REQUESTED_AUDIT" | "CPS_SNAPSHOT_SCHEDULE_UPDATED_AUDIT" | "CPS_SNAPSHOT_DELETED_AUDIT" | "CPS_SNAPSHOT_RETENTION_MODIFIED_AUDIT" | "CPS_SNAPSHOT_IN_PROGRESS_AUDIT" | "CPS_SNAPSHOT_COMPLETED_AUDIT" | "CPS_ON_DEMAND_SNAPSHOT_REQUESTED" | "AWS_ENCRYPTION_KEY_ROTATED" | "AWS_ENCRYPTION_KEY_NEEDS_ROTATION" | "AZURE_ENCRYPTION_KEY_ROTATED" | "AZURE_ENCRYPTION_KEY_NEEDS_ROTATION" | "GCP_ENCRYPTION_KEY_ROTATED" | "GCP_ENCRYPTION_KEY_NEEDS_ROTATION" | "BUCKET_CREATED_AUDIT" | "BUCKET_DELETED_AUDIT" | "FTS_INDEX_DELETION_FAILED" | "FTS_INDEX_BUILD_COMPLETE" | "FTS_INDEX_BUILD_FAILED" | "FTS_INDEX_CREATED" | "FTS_INDEX_UPDATED" | "FTS_INDEX_DELETED" | "GCP_PEER_CREATED" | "GCP_PEER_DELETED" | "GCP_PEER_UPDATED" | "GCP_PEER_ACTIVE" | "GCP_PEER_INACTIVE" | "DATA_EXPLORER_ENABLED" | "DATA_EXPLORER_DISABLED" | "CREDIT_CARD_ADDED" | "CREDIT_CARD_UPDATED" | "GROUP_DELETED" | "GROUP_CREATED" | "GROUP_MOVED" | "GROUP_TEMPORARILY_ACTIVATED" | "TEMPORARILY_ACTIVATED" | "GROUP_ACTIVATED" | "ACTIVATED" | "GROUP_LOCKED" | "LOCKED" | "GROUP_SUSPENDED" | "SUSPENDED" | "GROUP_FLUSHED" | "FLUSHED" | "GROUP_NAME_CHANGED" | "GROUP_CHARTS_ACTIVATION_REQUESTED" | "CHARTS_ACTIVATION_REQUESTED" | "GROUP_CHARTS_ACTIVATED" | "CHARTS_ACTIVATED" | "GROUP_CHARTS_UPGRADED" | "CHARTS_UPGRADED" | "GROUP_CHARTS_RESET" | "CHARTS_RESET" | "PAID_IN_FULL" | "DELINQUENT" | "ALL_USERS_HAVE_MULTI_FACTOR_AUTH" | "ALL_USERS_HAVE_MULTIFACTOR_AUTH" | "USERS_WITHOUT_MULTI_FACTOR_AUTH" | "USERS_WITHOUT_MULTIFACTOR_AUTH" | "M0_CLUSTERS_PER_GROUP_WITHIN_LIMIT" | "MAX_M0_CLUSTERS_PER_GROUP_EXCEEDED" | "INTEGRATION_CONFIGURED" | "INTEGRATION_REMOVED" | "AUTO_CREATED_INDEX_AUDIT" | "ATTEMPT_KILLOP_AUDIT" | "ATTEMPT_KILLSESSION_AUDIT" | "HOST_UP" | "HOST_DOWN" | "HOST_HAS_INDEX_SUGGESTIONS" | "HOST_MONGOT_RECOVERED_OOM" | "HOST_MONGOT_CRASHING_OOM" | "HOST_DISK_SPACE_SUFFICIENT_FOR_SEARCH_INDEX_REBUILD" | "HOST_ENOUGH_DISK_SPACE" | "HOST_DISK_SPACE_INSUFFICIENT_FOR_SEARCH_INDEX_REBUILD" | "HOST_NOT_ENOUGH_DISK_SPACE" | "INSIDE_METRIC_THRESHOLD" | "OUTSIDE_METRIC_THRESHOLD" | "ROLLING_INDEX_FAILED_INDEX_BUILD" | "ROLLING_INDEX_SUCCESS_INDEX_BUILD" | "INDEX_FAILED_INDEX_BUILD" | "INDEX_SUCCESS_INDEX_BUILD" | "CLUSTER_CREATED" | "CLUSTER_READY" | "CLUSTER_UPDATE_SUBMITTED" | "CLUSTER_UPDATE_SUBMITTED_INTERNAL" | "CLUSTER_PROCESS_ARGS_UPDATE_SUBMITTED" | "CLUSTER_MONGOT_PROCESS_ARGS_UPDATE_SUBMITTED" | "CLUSTER_SERVER_PARAMETERS_UPDATE_SUBMITTED" | "CLUSTER_AUTOMATICALLY_PAUSED" | "CLUSTER_UPDATE_STARTED" | "CLUSTER_UPDATE_COMPLETED" | "CLUSTER_DELETE_SUBMITTED" | "CLUSTER_DELETE_SUBMITTED_INTERNAL" | "CLUSTER_DELETED" | "CLUSTER_IMPORT_STARTED" | "CLUSTER_IMPORT_CANCELLED" | "CLUSTER_IMPORT_EXPIRED" | "CLUSTER_IMPORT_CUTOVER" | "CLUSTER_IMPORT_RESTART_REQUESTED" | "PROJECT_LIVE_IMPORT_OVERRIDES_ADDED" | "PROJECT_LIVE_IMPORT_OVERRIDES_UPDATED" | "PROJECT_LIVE_IMPORT_OVERRIDES_DELETED" | "CLUSTER_OPLOG_RESIZED" | "CLUSTER_INSTANCE_RESTARTED" | "CLUSTER_INSTANCE_STOP_START" | "CLUSTER_INSTANCE_RESYNC_REQUESTED" | "CLUSTER_INSTANCE_RESYNC_CLEARED" | "CLUSTER_INSTANCE_UPDATE_REQUESTED" | "CLUSTER_INSTANCE_REPLACED" | "CLUSTER_INSTANCE_REPLACE_CLEARED" | "CLUSTER_INSTANCE_CONFIG_UPDATED" | "CLUSTER_INSTANCE_SSL_ROTATED" | "CLUSTER_INSTANCE_SSL_ROTATED_PER_CLUSTER" | "CLUSTER_INSTANCE_SSL_REVOKED" | "RELOAD_SSL_ON_PROCESSES" | "CLUSTER_INSTANCE_ADMIN_BACKUP_SNAPSHOT_REQUESTED" | "DATA_LAKE_QUERY_LOGS_DOWNLOADED" | "FEDERATED_DATABASE_QUERY_LOGS_DOWNLOADED" | "ONLINE_ARCHIVE_QUERY_LOGS_DOWNLOADED" | "MONGODB_LOGS_DOWNLOADED" | "MONGOSQLD_LOGS_DOWNLOADED" | "MONGODB_USER_ADDED" | "MONGODB_USER_DELETED" | "MONGODB_USER_X509_CERT_CREATED" | "MONGODB_USER_X509_CERT_REVOKED" | "MONGODB_USER_UPDATED" | "MONGODB_ROLE_ADDED" | "MONGODB_ROLE_DELETED" | "MONGODB_ROLE_UPDATED" | "NETWORK_PERMISSION_ENTRY_ADDED" | "NETWORK_PERMISSION_ENTRY_REMOVED" | "NETWORK_PERMISSION_ENTRY_UPDATED" | "PRIVATE_NETWORK_ENDPOINT_ENTRY_ADDED" | "PRIVATE_NETWORK_ENDPOINT_ENTRY_REMOVED" | "PRIVATE_NETWORK_ENDPOINT_ENTRY_UPDATED" | "PLAN_STARTED" | "PLAN_COMPLETED" | "PLAN_ABANDONED" | "PLAN_FAILURE_COUNT_RESET" | "PLAN_ASAP_REQUESTED" | "MOVE_SKIPPED" | "PROXY_RESTARTED" | "PROXY_PANICKED" | "MAINTENANCE_WINDOW_ADDED" | "ATLAS_MAINTENANCE_WINDOW_ADDED" | "MAINTENANCE_WINDOW_MODIFIED" | "ATLAS_MAINTENANCE_WINDOW_MODIFIED" | "MAINTENANCE_WINDOW_REMOVED" | "ATLAS_MAINTENANCE_WINDOW_REMOVED" | "MAINTENANCE_START_ASAP" | "ATLAS_MAINTENANCE_START_ASAP" | "MAINTENANCE_SCHEDULED_FOR_NEXT_WINDOW" | "ATLAS_MAINTENANCE_SCHEDULED_FOR_NEXT_WINDOW" | "MAINTENANCE_DEFERRED" | "ATLAS_MAINTENANCE_DEFERRED" | "MAINTENANCE_AUTO_DEFER_ENABLED" | "ATLAS_MAINTENANCE_AUTO_DEFER_ENABLED" | "MAINTENANCE_AUTO_DEFER_DISABLED" | "ATLAS_MAINTENANCE_AUTO_DEFER_DISABLED" | "SCHEDULED_MAINTENANCE" | "PROJECT_SCHEDULED_MAINTENANCE" | "PROJECT_LIMIT_UPDATED" | "PROJECT_OPERATIONAL_LIMIT_UPDATED" | "PROJECT_ENABLE_EXTENDED_STORAGE_SIZES_UPDATED" | "OS_MAINTENANCE" | "OS_MAINTENANCE_RESTART" | "OS_MAINTENANCE_CERTIFICATE_ROTATION_RESTART" | "OS_MAINTENANCE_REPLACEMENT" | "FREE_UPGRADE_STARTED" | "TEST_FAILOVER_REQUESTED" | "USER_SECURITY_SETTINGS_UPDATED" | "AUDIT_LOG_CONFIGURATION_UPDATED" | "ENCRYPTION_AT_REST_CONFIGURATION_UPDATED" | "ENCRYPTION_AT_REST_CONFIGURATION_VALIDATION_FAILED" | "SET_IMAGE_OVERRIDES" | "NDS_SET_IMAGE_OVERRIDES" | "SET_CHEF_TARBALL_URI" | "NDS_SET_CHEF_TARBALL_URI" | "RESTRICTED_EMPLOYEE_ACCESS_BYPASS" | "REVOKED_EMPLOYEE_ACCESS_BYPASS" | "DEVICE_SYNC_DEBUG_ACCESS_GRANTED" | "DEVICE_SYNC_DEBUG_ACCESS_REVOKED" | "DEVICE_SYNC_DEBUG_X509_CERT_CREATED" | "QUERY_ENGINE_TENANT_CREATED" | "QUERY_ENGINE_TENANT_UPDATED" | "QUERY_ENGINE_TENANT_REMOVED" | "FEDERATED_DATABASE_CREATED" | "FEDERATED_DATABASE_UPDATED" | "FEDERATED_DATABASE_REMOVED" | "TENANT_CLUSTER_UPGRADE_FROM_MTM" | "TENANT_SNAPSHOT_FAILED" | "TENANT_RESTORE_FAILED" | "SAMPLE_DATASET_LOAD_REQUESTED" | "CUSTOMER_X509_CRL_UPDATED" | "CONTAINER_SUBNETS_UPDATE_REQUESTED" | "CLEAR_UNPROVISIONED_TARGET_GROUPS_REQUESTED" | "ONLINE_ARCHIVE_CREATED" | "ONLINE_ARCHIVE_DELETED" | "ONLINE_ARCHIVE_UPDATED" | "ONLINE_ARCHIVE_PAUSE_REQUESTED" | "ONLINE_ARCHIVE_PAUSED" | "ONLINE_ARCHIVE_ACTIVE" | "ONLINE_ARCHIVE_ORPHANED" | "ONLINE_ARCHIVE_DATA_EXPIRATION_RULE_ENABLED" | "ONLINE_ARCHIVE_DATA_EXPIRATION_RULE_UPDATED" | "ONLINE_ARCHIVE_DATA_EXPIRATION_RULE_DISABLED" | "CLOUD_PROVIDER_ACCESS_AWS_IAM_ROLE_ADDED" | "CLOUD_PROVIDER_ACCESS_AWS_IAM_ROLE_DELETED" | "CLOUD_PROVIDER_ACCESS_AWS_IAM_ROLE_UPDATED" | "PENDING_INDEXES_DELETED" | "PENDING_INDEXES_CANCELED" | "PROCESS_RESTART_REQUESTED" | "AUTO_HEALING_ACTION" | "EXTRA_MAINTENANCE_DEFERRAL_GRANTED" | "ADMIN_NOTE_UPDATED" | "GROUP_AUTOMATION_CONFIG_PUBLISHED" | "CLUSTER_AUTOMATION_CONFIG_PUBLISHED" | "CLUSTER_LINKED_TO_VERCEL" | "CLUSTER_UNLINKED_FROM_VERCEL" | "INGESTION_PIPELINE_DELETED" | "INGESTION_PIPELINE_DESTROYED" | "INGESTION_PIPELINE_CREATED" | "INGESTION_PIPELINE_UPDATED" | "OS_TUNED_FILE_OVERRIDES" | "OS_TUNE_FILE_OVERRIDES" | "CLUSTER_PREFERRED_CPU_ARCHITECTURE_MODIFIED" | "CLUSTER_FORCE_PLANNED" | "DATA_PROCESSING_REGION_UPDATED" | "CLUSTER_REGIONAL_OUTAGE_SIMULATION_STARTED" | "CLUSTER_REGIONAL_OUTAGE_SIMULATION_FAILED_TO_START" | "CLUSTER_REGIONAL_OUTAGE_SIMULATION_END_REQUESTED" | "CLUSTER_REGIONAL_OUTAGE_SIMULATION_COMPLETED" | "CLUSTER_REGIONAL_OUTAGE_SIMULATION_CANCELLED_CLUSTER_PAUSE" | "UIS_PANICKED" | "TENANT_UPGRADE_TO_SERVERLESS_SUCCESSFUL" | "TENANT_UPGRADE_TO_SERVERLESS_FAILED" | "CLUSTER_FORCE_RECONFIG_REQUESTED" | "PROJECT_BYPASSED_MAINTENANCE" | "DATA_FEDERATION_QUERY_LIMIT_CONFIGURED" | "DATA_FEDERATION_QUERY_LIMIT_DELETED" | "DATA_API_SETUP_FOR_VERCEL" | "COMPUTE_AUTO_SCALE_INITIATED" | "DISK_AUTO_SCALE_INITIATED" | "COMPUTE_AUTO_SCALE_INITIATED_BASE" | "COMPUTE_AUTO_SCALE_INITIATED_ANALYTICS" | "MAINTENANCE_IN_ADVANCED" | "MAINTENANCE_AUTO_DEFERRED" | "MAINTENANCE_STARTED" | "MAINTENANCE_NO_LONGER_NEEDED" | "SERVERLESS_AUTO_SCALING_INITIATED" | "SERVERLESS_VERTICAL_SCALING_INITIATED" | "SERVERLESS_HORIZONTAL_SCALING_INITIATED" | "SERVERLESS_INSTANCE_CREATED" | "SERVERLESS_INSTANCE_READY" | "SERVERLESS_INSTANCE_UPDATE_SUBMITTED" | "SERVERLESS_INSTANCE_UPDATE_STARTED" | "SERVERLESS_INSTANCE_UPDATE_COMPLETED" | "SERVERLESS_INSTANCE_DELETE_SUBMITTED" | "SERVERLESS_INSTANCE_DELETED" | "TENANT_ENDPOINT_CREATED" | "TENANT_ENDPOINT_RESERVED" | "TENANT_ENDPOINT_RESERVATION_FAILED" | "TENANT_ENDPOINT_UPDATED" | "TENANT_ENDPOINT_INITIATING" | "TENANT_ENDPOINT_AVAILABLE" | "TENANT_ENDPOINT_FAILED" | "TENANT_ENDPOINT_DELETING" | "TENANT_ENDPOINT_DELETED" | "TENANT_ENDPOINT_EXPIRED" | "TENANT_ENDPOINT_SERVICE_DEPLOYMENT_CREATED" | "TENANT_ENDPOINT_SERVICE_CREATED" | "TENANT_ENDPOINT_SERVICE_AVAILABLE" | "TENANT_ENDPOINT_SERVICE_DEPLOYMENT_DELETE_REQUESTED" | "TENANT_ENDPOINT_SERVICE_DELETED" | "TENANT_ENDPOINT_SERVICE_DEPLOYMENT_DELETED" | "TENANT_ENDPOINT_SERVICE_DEPLOYMENT_NUM_DESIRED_ENDPOINT_SERVICES_INCREASED" | "NDS_X509_USER_AUTHENTICATION_CUSTOMER_CA_EXPIRATION_RESOLVED" | "NDS_X509_USER_AUTHENTICATION_CUSTOMER_CA_EXPIRATION_CHECK" | "NDS_X509_USER_AUTHENTICATION_CUSTOMER_CRL_EXPIRATION_RESOLVED" | "NDS_X509_USER_AUTHENTICATION_CUSTOMER_CRL_EXPIRATION_CHECK" | "NDS_X509_USER_AUTHENTICATION_MANAGED_USER_CERTS_EXPIRATION_RESOLVED" | "NDS_X509_USER_AUTHENTICATION_MANAGED_USER_CERTS_EXPIRATION_CHECK" | "ONLINE_ARCHIVE_INSUFFICIENT_INDEXES_CHECK" | "ONLINE_ARCHIVE_INSUFFICIENT_INDEXES_RESOLVED" | "ONLINE_ARCHIVE_UP_TO_DATE" | "ONLINE_ARCHIVE_DATA_EXPIRATION_RESOLVED" | "ONLINE_ARCHIVE_MAX_CONSECUTIVE_OFFLOAD_WINDOWS_CHECK" | "ENDPOINT_SERVICE_CREATED" | "ENDPOINT_SERVICE_DELETED" | "INTERFACE_ENDPOINT_CREATED" | "INTERFACE_ENDPOINT_DELETED" | "INTERFACE_ENDPOINT_PATCHED" | "PRIMARY_ELECTED" | "REPLICATION_OPLOG_WINDOW_HEALTHY" | "REPLICATION_OPLOG_WINDOW_RUNNING_OUT" | "ONE_PRIMARY" | "NO_PRIMARY" | "TOO_MANY_ELECTIONS" | "SERVERLESS_DEPLOYMENT_CREATED" | "SERVERLESS_DEPLOYMENT_DELETED" | "SERVERLESS_DEPLOYMENT_UPDATED" | "SERVERLESS_DEPLOYMENT_INSTANCE_REPLACED" | "SERVERLESS_DEPLOYMENT_INSTANCE_REBOOTED" | "SERVERLESS_DEPLOYMENT_ENDPOINT_SERVICE_LINKED" | "SERVERLESS_DEPLOYMENT_ENDPOINT_SERVICE_UNLINKED" | "INSIDE_SERVERLESS_METRIC_THRESHOLD" | "OUTSIDE_SERVERLESS_METRIC_THRESHOLD" | "SETUP_SERVERLESS_INITIATED" | "CASE_CREATED" | "SUPPORT_EMAILS_SENT_SUCCESSFULLY" | "SUPPORT_EMAILS_SENT_FAILURE" | "TEAM_ADDED_TO_GROUP" | "TEAM_REMOVED_FROM_GROUP" | "TEAM_ROLES_MODIFIED" | "TENANT_SNAPSHOT_STARTED_AUDIT" | "TENANT_SNAPSHOT_COMPLETED_AUDIT" | "TENANT_SNAPSHOT_DELETED_AUDIT" | "TENANT_RESTORE_REQUESTED_AUDIT" | "TENANT_RESTORE_COMPLETED_AUDIT" | "TENANT_SNAPSHOT_DOWNLOAD_REQUESTED_AUDIT" | "JOINED_GROUP" | "REMOVED_FROM_GROUP" | "INVITED_TO_GROUP" | "REQUESTED_TO_JOIN_GROUP" | "GROUP_INVITATION_DELETED" | "USER_ROLES_CHANGED_AUDIT" | "JOIN_GROUP_REQUEST_DENIED_AUDIT" | "JOIN_GROUP_REQUEST_APPROVED_AUDIT" | "CLUSTER_VERSION_FIXED" | "CLUSTER_VERSION_UNFIXED" | "CLUSTER_FCV_FIXED" | "CLUSTER_FCV_UNFIXED" | "AGENT_VERSION_FIXED" | "AGENT_VERSION_UNFIXED" ;
