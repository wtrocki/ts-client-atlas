import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { AWSAutoScaling } from '../models/AWSAutoScaling';
import { AWSCloudProviderContainer } from '../models/AWSCloudProviderContainer';
import { AWSComputeAutoScaling } from '../models/AWSComputeAutoScaling';
import { AWSCustomDNSEnabledView } from '../models/AWSCustomDNSEnabledView';
import { AWSHardwareSpec } from '../models/AWSHardwareSpec';
import { AWSInterfaceEndpoint } from '../models/AWSInterfaceEndpoint';
import { AWSKMS } from '../models/AWSKMS';
import { AWSPeerVpc } from '../models/AWSPeerVpc';
import { AWSPeerVpcRequest } from '../models/AWSPeerVpcRequest';
import { AWSPrivateLinkConnection } from '../models/AWSPrivateLinkConnection';
import { AWSProviderSettings } from '../models/AWSProviderSettings';
import { AWSRegionConfig } from '../models/AWSRegionConfig';
import { AccessListItemView } from '../models/AccessListItemView';
import { AlertAuditTypeView } from '../models/AlertAuditTypeView';
import { AlertAuditView } from '../models/AlertAuditView';
import { AlertConfigAuditTypeView } from '../models/AlertConfigAuditTypeView';
import { AlertConfigAuditView } from '../models/AlertConfigAuditView';
import { AlertConfigView } from '../models/AlertConfigView';
import { AlertConfigViewForNdsGroup } from '../models/AlertConfigViewForNdsGroup';
import { AlertView } from '../models/AlertView';
import { AlertViewForNdsGroup } from '../models/AlertViewForNdsGroup';
import { ApiAddUserToTeamView } from '../models/ApiAddUserToTeamView';
import { ApiApiUserView } from '../models/ApiApiUserView';
import { ApiAppUserView } from '../models/ApiAppUserView';
import { ApiAtlasContainerPeerViewRequest } from '../models/ApiAtlasContainerPeerViewRequest';
import { ApiAtlasFTSAnalyzersViewManual } from '../models/ApiAtlasFTSAnalyzersViewManual';
import { ApiAtlasFTSAnalyzersViewManualCharFiltersInner } from '../models/ApiAtlasFTSAnalyzersViewManualCharFiltersInner';
import { ApiAtlasFTSAnalyzersViewManualTokenFiltersInner } from '../models/ApiAtlasFTSAnalyzersViewManualTokenFiltersInner';
import { ApiAtlasFTSAnalyzersViewManualTokenizer } from '../models/ApiAtlasFTSAnalyzersViewManualTokenizer';
import { ApiAtlasFTSMappingsViewManual } from '../models/ApiAtlasFTSMappingsViewManual';
import { ApiAtlasNetPeerRequestBase } from '../models/ApiAtlasNetPeerRequestBase';
import { ApiAvailableRegionView } from '../models/ApiAvailableRegionView';
import { ApiBSONTimestampView } from '../models/ApiBSONTimestampView';
import { ApiCheckpointPartView } from '../models/ApiCheckpointPartView';
import { ApiCreateApiKeyView } from '../models/ApiCreateApiKeyView';
import { ApiDatabaseView } from '../models/ApiDatabaseView';
import { ApiDatadogView } from '../models/ApiDatadogView';
import { ApiDeleteCopiedBackupsView } from '../models/ApiDeleteCopiedBackupsView';
import { ApiDiskPartitionView } from '../models/ApiDiskPartitionView';
import { ApiError } from '../models/ApiError';
import { ApiExportStatusView } from '../models/ApiExportStatusView';
import { ApiFTSMetricView } from '../models/ApiFTSMetricView';
import { ApiFTSMetricsView } from '../models/ApiFTSMetricsView';
import { ApiGroupInvitationRequestView } from '../models/ApiGroupInvitationRequestView';
import { ApiGroupInvitationUpdateRequestView } from '../models/ApiGroupInvitationUpdateRequestView';
import { ApiGroupInvitationView } from '../models/ApiGroupInvitationView';
import { ApiHostViewAtlas } from '../models/ApiHostViewAtlas';
import { ApiIndexRequestView } from '../models/ApiIndexRequestView';
import { ApiInstanceSizeView } from '../models/ApiInstanceSizeView';
import { ApiIntegrationView } from '../models/ApiIntegrationView';
import { ApiInvoiceView } from '../models/ApiInvoiceView';
import { ApiKeyView } from '../models/ApiKeyView';
import { ApiLimitView } from '../models/ApiLimitView';
import { ApiLineItemView } from '../models/ApiLineItemView';
import { ApiMeasurementView } from '../models/ApiMeasurementView';
import { ApiMeasurementViewAtlas } from '../models/ApiMeasurementViewAtlas';
import { ApiMeasurementsGeneralViewAtlas } from '../models/ApiMeasurementsGeneralViewAtlas';
import { ApiMeasurementsIndexesView } from '../models/ApiMeasurementsIndexesView';
import { ApiMeasurementsNonIndexView } from '../models/ApiMeasurementsNonIndexView';
import { ApiMetricDataPointView } from '../models/ApiMetricDataPointView';
import { ApiMetricDataPointViewAtlas } from '../models/ApiMetricDataPointViewAtlas';
import { ApiMicrosoftTeamsView } from '../models/ApiMicrosoftTeamsView';
import { ApiMongoDBAccessLogsListView } from '../models/ApiMongoDBAccessLogsListView';
import { ApiMongoDBAccessLogsView } from '../models/ApiMongoDBAccessLogsView';
import { ApiNamespaceObjView } from '../models/ApiNamespaceObjView';
import { ApiNamespacesView } from '../models/ApiNamespacesView';
import { ApiNewRelicView } from '../models/ApiNewRelicView';
import { ApiOpsGenieView } from '../models/ApiOpsGenieView';
import { ApiOrganizationInvitationRequestView } from '../models/ApiOrganizationInvitationRequestView';
import { ApiOrganizationInvitationUpdateRequestView } from '../models/ApiOrganizationInvitationUpdateRequestView';
import { ApiOrganizationInvitationView } from '../models/ApiOrganizationInvitationView';
import { ApiOrganizationView } from '../models/ApiOrganizationView';
import { ApiPagerDutyView } from '../models/ApiPagerDutyView';
import { ApiPaymentView } from '../models/ApiPaymentView';
import { ApiPerformanceAdvisorIndexView } from '../models/ApiPerformanceAdvisorIndexView';
import { ApiPerformanceAdvisorResponseView } from '../models/ApiPerformanceAdvisorResponseView';
import { ApiPerformanceAdvisorShapeView } from '../models/ApiPerformanceAdvisorShapeView';
import { ApiPerformanceAdvisorSlowQueryListView } from '../models/ApiPerformanceAdvisorSlowQueryListView';
import { ApiPerformanceAdvisorSlowQueryView } from '../models/ApiPerformanceAdvisorSlowQueryView';
import { ApiPolicyItemView } from '../models/ApiPolicyItemView';
import { ApiPolicyView } from '../models/ApiPolicyView';
import { ApiPrometheusView } from '../models/ApiPrometheusView';
import { ApiRefundView } from '../models/ApiRefundView';
import { ApiRestoreJobDeliveryView } from '../models/ApiRestoreJobDeliveryView';
import { ApiRestoreJobFileHashView } from '../models/ApiRestoreJobFileHashView';
import { ApiRestoreJobView } from '../models/ApiRestoreJobView';
import { ApiRoleAssignmentView } from '../models/ApiRoleAssignmentView';
import { ApiSlackView } from '../models/ApiSlackView';
import { ApiSnapshotPartView } from '../models/ApiSnapshotPartView';
import { ApiSnapshotView } from '../models/ApiSnapshotView';
import { ApiSystemStatusView } from '../models/ApiSystemStatusView';
import { ApiTeamResponseView } from '../models/ApiTeamResponseView';
import { ApiTeamRoleView } from '../models/ApiTeamRoleView';
import { ApiTeamView } from '../models/ApiTeamView';
import { ApiUserAccessListView } from '../models/ApiUserAccessListView';
import { ApiUserEventTypeViewForNdsGroup } from '../models/ApiUserEventTypeViewForNdsGroup';
import { ApiUserEventTypeViewForOrg } from '../models/ApiUserEventTypeViewForOrg';
import { ApiUserEventViewForNdsGroup } from '../models/ApiUserEventViewForNdsGroup';
import { ApiUserEventViewForOrg } from '../models/ApiUserEventViewForOrg';
import { ApiUserRoleAssignment } from '../models/ApiUserRoleAssignment';
import { ApiVictorOpsView } from '../models/ApiVictorOpsView';
import { ApiWebhookView } from '../models/ApiWebhookView';
import { AppServiceAlertConfigViewForNdsGroup } from '../models/AppServiceAlertConfigViewForNdsGroup';
import { AppServiceAlertView } from '../models/AppServiceAlertView';
import { AppServiceEventTypeView } from '../models/AppServiceEventTypeView';
import { AppServiceEventTypeViewAlertable } from '../models/AppServiceEventTypeViewAlertable';
import { AppServiceEventTypeViewAlertableNoThreshold } from '../models/AppServiceEventTypeViewAlertableNoThreshold';
import { AppServiceEventTypeViewAlertableWithThreshold } from '../models/AppServiceEventTypeViewAlertableWithThreshold';
import { AppServiceEventView } from '../models/AppServiceEventView';
import { AppServiceMetricAlertConfigViewForNdsGroup } from '../models/AppServiceMetricAlertConfigViewForNdsGroup';
import { AppServiceMetricMatcherField } from '../models/AppServiceMetricMatcherField';
import { AppServiceMetricMatcherView } from '../models/AppServiceMetricMatcherView';
import { AppServiceMetricThresholdView } from '../models/AppServiceMetricThresholdView';
import { AuditLog } from '../models/AuditLog';
import { AutoExportPolicyView } from '../models/AutoExportPolicyView';
import { AutoScaling } from '../models/AutoScaling';
import { AutoScalingV15 } from '../models/AutoScalingV15';
import { AutomationConfigEventTypeView } from '../models/AutomationConfigEventTypeView';
import { AutomationConfigEventView } from '../models/AutomationConfigEventView';
import { AvailableDeploymentView } from '../models/AvailableDeploymentView';
import { AvailableProjectView } from '../models/AvailableProjectView';
import { AzureAutoScaling } from '../models/AzureAutoScaling';
import { AzureCloudProviderContainer } from '../models/AzureCloudProviderContainer';
import { AzureComputeAutoScaling } from '../models/AzureComputeAutoScaling';
import { AzureHardwareSpec } from '../models/AzureHardwareSpec';
import { AzureKeyVault } from '../models/AzureKeyVault';
import { AzurePeerNetwork } from '../models/AzurePeerNetwork';
import { AzurePeerNetworkRequest } from '../models/AzurePeerNetworkRequest';
import { AzurePrivateEndpoint } from '../models/AzurePrivateEndpoint';
import { AzurePrivateLinkConnection } from '../models/AzurePrivateLinkConnection';
import { AzureProviderSettings } from '../models/AzureProviderSettings';
import { AzureRegionConfig } from '../models/AzureRegionConfig';
import { BiConnector } from '../models/BiConnector';
import { BillingEventTypeViewAlertableWithThreshold } from '../models/BillingEventTypeViewAlertableWithThreshold';
import { BillingEventTypeViewForNdsGroup } from '../models/BillingEventTypeViewForNdsGroup';
import { BillingEventTypeViewForOrg } from '../models/BillingEventTypeViewForOrg';
import { BillingEventViewForNdsGroup } from '../models/BillingEventViewForNdsGroup';
import { BillingEventViewForOrg } from '../models/BillingEventViewForOrg';
import { BillingThresholdAlertConfigViewForNdsGroup } from '../models/BillingThresholdAlertConfigViewForNdsGroup';
import { CharFilterhtmlStrip } from '../models/CharFilterhtmlStrip';
import { CharFiltericuNormalize } from '../models/CharFiltericuNormalize';
import { CharFiltermapping } from '../models/CharFiltermapping';
import { CharFiltermappingMappings } from '../models/CharFiltermappingMappings';
import { CharFilterpersian } from '../models/CharFilterpersian';
import { Checkpoint } from '../models/Checkpoint';
import { CloudProviderAccess } from '../models/CloudProviderAccess';
import { CloudProviderAccessAWSIAMRole } from '../models/CloudProviderAccessAWSIAMRole';
import { CloudProviderAccessDataLakeFeatureUsage } from '../models/CloudProviderAccessDataLakeFeatureUsage';
import { CloudProviderAccessEncryptionAtRestFeatureUsage } from '../models/CloudProviderAccessEncryptionAtRestFeatureUsage';
import { CloudProviderAccessExportSnapshotFeatureUsage } from '../models/CloudProviderAccessExportSnapshotFeatureUsage';
import { CloudProviderAccessFeatureUsage } from '../models/CloudProviderAccessFeatureUsage';
import { CloudProviderAccessFeatureUsageDataLakeFeatureId } from '../models/CloudProviderAccessFeatureUsageDataLakeFeatureId';
import { CloudProviderAccessFeatureUsageExportSnapshotFeatureId } from '../models/CloudProviderAccessFeatureUsageExportSnapshotFeatureId';
import { CloudProviderAccessRole } from '../models/CloudProviderAccessRole';
import { CloudProviderContainer } from '../models/CloudProviderContainer';
import { ClusterAlertConfigViewForNdsGroup } from '../models/ClusterAlertConfigViewForNdsGroup';
import { ClusterAlertView } from '../models/ClusterAlertView';
import { ClusterDescriptionConnectionStrings } from '../models/ClusterDescriptionConnectionStrings';
import { ClusterDescriptionConnectionStringsPrivateEndpoint } from '../models/ClusterDescriptionConnectionStringsPrivateEndpoint';
import { ClusterDescriptionConnectionStringsPrivateEndpointEndpoint } from '../models/ClusterDescriptionConnectionStringsPrivateEndpointEndpoint';
import { ClusterDescriptionProcessArgs } from '../models/ClusterDescriptionProcessArgs';
import { ClusterDescriptionV15 } from '../models/ClusterDescriptionV15';
import { ClusterEventTypeViewAlertable } from '../models/ClusterEventTypeViewAlertable';
import { ClusterEventTypeViewForNdsGroup } from '../models/ClusterEventTypeViewForNdsGroup';
import { ClusterEventViewForNdsGroup } from '../models/ClusterEventViewForNdsGroup';
import { ClusterMatcherField } from '../models/ClusterMatcherField';
import { ClusterMatcherView } from '../models/ClusterMatcherView';
import { ClusterOutageSimulation } from '../models/ClusterOutageSimulation';
import { ClusterOutageSimulationOutageFilter } from '../models/ClusterOutageSimulationOutageFilter';
import { ClusterProviderSettings } from '../models/ClusterProviderSettings';
import { ClusterStatus } from '../models/ClusterStatus';
import { ClusterView } from '../models/ClusterView';
import { Collation } from '../models/Collation';
import { ComputeAutoScaling } from '../models/ComputeAutoScaling';
import { ComputeAutoScalingV15 } from '../models/ComputeAutoScalingV15';
import { ConnectedOrgConfigView } from '../models/ConnectedOrgConfigView';
import { ContainerPeer } from '../models/ContainerPeer';
import { CpsBackupEventTypeViewForNdsGroupAlertableWithThreshold } from '../models/CpsBackupEventTypeViewForNdsGroupAlertableWithThreshold';
import { CpsBackupThresholdAlertConfigViewForNdsGroup } from '../models/CpsBackupThresholdAlertConfigViewForNdsGroup';
import { CreateAWSEndpointRequest } from '../models/CreateAWSEndpointRequest';
import { CreateAWSEndpointRequestAllOf } from '../models/CreateAWSEndpointRequestAllOf';
import { CreateAzureEndpointRequest } from '../models/CreateAzureEndpointRequest';
import { CreateAzureEndpointRequestAllOf } from '../models/CreateAzureEndpointRequestAllOf';
import { CreateEndpointServiceRequest } from '../models/CreateEndpointServiceRequest';
import { CreateGCPEndpointGroupRequest } from '../models/CreateGCPEndpointGroupRequest';
import { CreateGCPEndpointGroupRequestAllOf } from '../models/CreateGCPEndpointGroupRequestAllOf';
import { CreateGCPForwardingRuleRequest } from '../models/CreateGCPForwardingRuleRequest';
import { CreateOrganizationRequest } from '../models/CreateOrganizationRequest';
import { CreateOrganizationResponse } from '../models/CreateOrganizationResponse';
import { CreatePeeringConnection200Response } from '../models/CreatePeeringConnection200Response';
import { CreatePrivateEndpointRequest } from '../models/CreatePrivateEndpointRequest';
import { CriteriaView } from '../models/CriteriaView';
import { CustomCriteriaView } from '../models/CustomCriteriaView';
import { CustomDBRole } from '../models/CustomDBRole';
import { CustomZoneMappings } from '../models/CustomZoneMappings';
import { CustomerX509 } from '../models/CustomerX509';
import { DBAction } from '../models/DBAction';
import { DBResource } from '../models/DBResource';
import { DLSIngestionSink } from '../models/DLSIngestionSink';
import { DailyScheduleView } from '../models/DailyScheduleView';
import { DataExplorerAccessedEventTypeView } from '../models/DataExplorerAccessedEventTypeView';
import { DataExplorerAccessedEventView } from '../models/DataExplorerAccessedEventView';
import { DataFederationQueryLimit } from '../models/DataFederationQueryLimit';
import { DataFederationTenantQueryLimit } from '../models/DataFederationTenantQueryLimit';
import { DataLakeAWSCloudProviderConfig } from '../models/DataLakeAWSCloudProviderConfig';
import { DataLakeAtlasStore } from '../models/DataLakeAtlasStore';
import { DataLakeAtlasStoreReadPreference } from '../models/DataLakeAtlasStoreReadPreference';
import { DataLakeAtlasStoreReadPreferenceTag } from '../models/DataLakeAtlasStoreReadPreferenceTag';
import { DataLakeCloudProviderConfig } from '../models/DataLakeCloudProviderConfig';
import { DataLakeDataProcessRegion } from '../models/DataLakeDataProcessRegion';
import { DataLakeDatabase } from '../models/DataLakeDatabase';
import { DataLakeDatabaseCollection } from '../models/DataLakeDatabaseCollection';
import { DataLakeDatabaseDataSource } from '../models/DataLakeDatabaseDataSource';
import { DataLakeHTTPStore } from '../models/DataLakeHTTPStore';
import { DataLakeOnlineArchiveStore } from '../models/DataLakeOnlineArchiveStore';
import { DataLakeRegion } from '../models/DataLakeRegion';
import { DataLakeS3Store } from '../models/DataLakeS3Store';
import { DataLakeStorage } from '../models/DataLakeStorage';
import { DataLakeStore } from '../models/DataLakeStore';
import { DataLakeTenant } from '../models/DataLakeTenant';
import { DataLakeView } from '../models/DataLakeView';
import { DataMetricAlertView } from '../models/DataMetricAlertView';
import { DataMetricEventView } from '../models/DataMetricEventView';
import { DataMetricThresholdView } from '../models/DataMetricThresholdView';
import { DataMetricUnits } from '../models/DataMetricUnits';
import { DataMetricValueView } from '../models/DataMetricValueView';
import { DataProtectionSettings } from '../models/DataProtectionSettings';
import { DatabaseUser } from '../models/DatabaseUser';
import { DatadogNotificationView } from '../models/DatadogNotificationView';
import { DateCriteriaView } from '../models/DateCriteriaView';
import { DedicatedHardwareSpec } from '../models/DedicatedHardwareSpec';
import { DefaultAlertConfigViewForNdsGroup } from '../models/DefaultAlertConfigViewForNdsGroup';
import { DefaultAlertViewForNdsGroup } from '../models/DefaultAlertViewForNdsGroup';
import { DefaultEventViewForNdsGroup } from '../models/DefaultEventViewForNdsGroup';
import { DefaultEventViewForOrg } from '../models/DefaultEventViewForOrg';
import { DefaultScheduleView } from '../models/DefaultScheduleView';
import { Destination } from '../models/Destination';
import { DiskBackupBaseRestoreMember } from '../models/DiskBackupBaseRestoreMember';
import { DiskBackupCopySetting } from '../models/DiskBackupCopySetting';
import { DiskBackupExportJob } from '../models/DiskBackupExportJob';
import { DiskBackupExportJobRequest } from '../models/DiskBackupExportJobRequest';
import { DiskBackupOnDemandSnapshotRequest } from '../models/DiskBackupOnDemandSnapshotRequest';
import { DiskBackupReplicaSet } from '../models/DiskBackupReplicaSet';
import { DiskBackupRestoreJob } from '../models/DiskBackupRestoreJob';
import { DiskBackupShardedClusterSnapshot } from '../models/DiskBackupShardedClusterSnapshot';
import { DiskBackupShardedClusterSnapshotMember } from '../models/DiskBackupShardedClusterSnapshotMember';
import { DiskBackupSnapshot } from '../models/DiskBackupSnapshot';
import { DiskBackupSnapshotAWSExportBucket } from '../models/DiskBackupSnapshotAWSExportBucket';
import { DiskBackupSnapshotSchedule } from '../models/DiskBackupSnapshotSchedule';
import { DiskGBAutoScaling } from '../models/DiskGBAutoScaling';
import { EmailNotificationView } from '../models/EmailNotificationView';
import { EncryptionAtRest } from '../models/EncryptionAtRest';
import { EncryptionKeyAlertConfigViewForNdsGroup } from '../models/EncryptionKeyAlertConfigViewForNdsGroup';
import { EncryptionKeyEventTypeViewAlertable } from '../models/EncryptionKeyEventTypeViewAlertable';
import { Endpoint } from '../models/Endpoint';
import { EndpointService } from '../models/EndpointService';
import { EventTypeForNdsGroup } from '../models/EventTypeForNdsGroup';
import { EventTypeForOrg } from '../models/EventTypeForOrg';
import { EventViewForNdsGroup } from '../models/EventViewForNdsGroup';
import { EventViewForOrg } from '../models/EventViewForOrg';
import { ExampleResourceResponseView20230101 } from '../models/ExampleResourceResponseView20230101';
import { ExampleResourceResponseView20230201 } from '../models/ExampleResourceResponseView20230201';
import { FTSIndex } from '../models/FTSIndex';
import { FTSIndexAuditTypeView } from '../models/FTSIndexAuditTypeView';
import { FTSIndexAuditView } from '../models/FTSIndexAuditView';
import { FTSSynonymMappingDefinition } from '../models/FTSSynonymMappingDefinition';
import { FederatedUserView } from '../models/FederatedUserView';
import { FieldTransformation } from '../models/FieldTransformation';
import { ForNdsGroup } from '../models/ForNdsGroup';
import { FreeAutoScaling } from '../models/FreeAutoScaling';
import { FreeProviderSettings } from '../models/FreeProviderSettings';
import { GCPAutoScaling } from '../models/GCPAutoScaling';
import { GCPCloudProviderContainer } from '../models/GCPCloudProviderContainer';
import { GCPComputeAutoScaling } from '../models/GCPComputeAutoScaling';
import { GCPConsumerForwardingRule } from '../models/GCPConsumerForwardingRule';
import { GCPEndpointGroup } from '../models/GCPEndpointGroup';
import { GCPEndpointService } from '../models/GCPEndpointService';
import { GCPHardwareSpec } from '../models/GCPHardwareSpec';
import { GCPPeerVpc } from '../models/GCPPeerVpc';
import { GCPPeerVpcRequest } from '../models/GCPPeerVpcRequest';
import { GCPProviderSettings } from '../models/GCPProviderSettings';
import { GCPRegionConfig } from '../models/GCPRegionConfig';
import { GeoSharding } from '../models/GeoSharding';
import { GetPeeringConnection200Response } from '../models/GetPeeringConnection200Response';
import { GoogleCloudKMS } from '../models/GoogleCloudKMS';
import { GreaterThanDaysThresholdView } from '../models/GreaterThanDaysThresholdView';
import { GreaterThanRawThresholdAlertConfigViewForNdsGroup } from '../models/GreaterThanRawThresholdAlertConfigViewForNdsGroup';
import { GreaterThanRawThresholdView } from '../models/GreaterThanRawThresholdView';
import { GreaterThanTimeThresholdView } from '../models/GreaterThanTimeThresholdView';
import { Group } from '../models/Group';
import { GroupMaintenanceWindow } from '../models/GroupMaintenanceWindow';
import { GroupName } from '../models/GroupName';
import { GroupNotificationView } from '../models/GroupNotificationView';
import { GroupPaginatedEventView } from '../models/GroupPaginatedEventView';
import { GroupPaginatedIntegrationView } from '../models/GroupPaginatedIntegrationView';
import { GroupSettings } from '../models/GroupSettings';
import { HardwareSpec } from '../models/HardwareSpec';
import { HipChatNotificationView } from '../models/HipChatNotificationView';
import { HostAlertConfigViewForNdsGroup } from '../models/HostAlertConfigViewForNdsGroup';
import { HostAlertViewForNdsGroup } from '../models/HostAlertViewForNdsGroup';
import { HostEventTypeViewForNdsGroup } from '../models/HostEventTypeViewForNdsGroup';
import { HostEventTypeViewForNdsGroupAlertable } from '../models/HostEventTypeViewForNdsGroupAlertable';
import { HostEventViewForNdsGroup } from '../models/HostEventViewForNdsGroup';
import { HostMatcherField } from '../models/HostMatcherField';
import { HostMatcherView } from '../models/HostMatcherView';
import { HostMetricAlertConfigViewForNdsGroup } from '../models/HostMetricAlertConfigViewForNdsGroup';
import { HostMetricAlertView } from '../models/HostMetricAlertView';
import { HostMetricEventTypeView } from '../models/HostMetricEventTypeView';
import { HostMetricEventTypeViewAlertable } from '../models/HostMetricEventTypeViewAlertable';
import { HostMetricEventView } from '../models/HostMetricEventView';
import { HostMetricThresholdView } from '../models/HostMetricThresholdView';
import { HostMetricValueView } from '../models/HostMetricValueView';
import { IdentityProviderUpdate } from '../models/IdentityProviderUpdate';
import { IdentityProviderView } from '../models/IdentityProviderView';
import { IndexOptions } from '../models/IndexOptions';
import { IngestionPipeline } from '../models/IngestionPipeline';
import { IngestionPipelineRun } from '../models/IngestionPipelineRun';
import { IngestionSink } from '../models/IngestionSink';
import { IngestionSource } from '../models/IngestionSource';
import { InheritedRole } from '../models/InheritedRole';
import { InstanceSize } from '../models/InstanceSize';
import { IntegrationViewForNdsGroup } from '../models/IntegrationViewForNdsGroup';
import { Label } from '../models/Label';
import { LegacyClusterDescription } from '../models/LegacyClusterDescription';
import { LegacyReplicationSpec } from '../models/LegacyReplicationSpec';
import { LessThanDaysThresholdView } from '../models/LessThanDaysThresholdView';
import { LessThanTimeThresholdAlertConfigViewForNdsGroup } from '../models/LessThanTimeThresholdAlertConfigViewForNdsGroup';
import { LessThanTimeThresholdView } from '../models/LessThanTimeThresholdView';
import { Link } from '../models/Link';
import { LinkAtlas } from '../models/LinkAtlas';
import { ListPeeringConnections200Response } from '../models/ListPeeringConnections200Response';
import { LiveMigrationRequestView } from '../models/LiveMigrationRequestView';
import { LiveMigrationResponseView } from '../models/LiveMigrationResponseView';
import { ManagedNamespaceView } from '../models/ManagedNamespaceView';
import { ManagedNamespaces } from '../models/ManagedNamespaces';
import { MatcherFieldView } from '../models/MatcherFieldView';
import { MatcherHostType } from '../models/MatcherHostType';
import { MatcherView } from '../models/MatcherView';
import { MicrosoftTeamsNotificationView } from '../models/MicrosoftTeamsNotificationView';
import { MonthlyScheduleView } from '../models/MonthlyScheduleView';
import { NDSAuditTypeViewForNdsGroup } from '../models/NDSAuditTypeViewForNdsGroup';
import { NDSAuditTypeViewForOrg } from '../models/NDSAuditTypeViewForOrg';
import { NDSAuditViewForNdsGroup } from '../models/NDSAuditViewForNdsGroup';
import { NDSAuditViewForOrg } from '../models/NDSAuditViewForOrg';
import { NDSAutoScalingAuditTypeViewForNdsGroup } from '../models/NDSAutoScalingAuditTypeViewForNdsGroup';
import { NDSAutoScalingAuditViewForNdsGroup } from '../models/NDSAutoScalingAuditViewForNdsGroup';
import { NDSLDAP } from '../models/NDSLDAP';
import { NDSLDAPVerifyConnectivityJobRequest } from '../models/NDSLDAPVerifyConnectivityJobRequest';
import { NDSLDAPVerifyConnectivityJobRequestParams } from '../models/NDSLDAPVerifyConnectivityJobRequestParams';
import { NDSLDAPVerifyConnectivityJobRequestValidation } from '../models/NDSLDAPVerifyConnectivityJobRequestValidation';
import { NDSLabel } from '../models/NDSLabel';
import { NDSNotificationView } from '../models/NDSNotificationView';
import { NDSServerlessInstanceAuditTypeView } from '../models/NDSServerlessInstanceAuditTypeView';
import { NDSServerlessInstanceAuditView } from '../models/NDSServerlessInstanceAuditView';
import { NDSTenantEndpointAuditTypeView } from '../models/NDSTenantEndpointAuditTypeView';
import { NDSTenantEndpointAuditView } from '../models/NDSTenantEndpointAuditView';
import { NDSUserToDNMapping } from '../models/NDSUserToDNMapping';
import { NDSX509UserAuthenticationAlertConfigViewForNdsGroup } from '../models/NDSX509UserAuthenticationAlertConfigViewForNdsGroup';
import { NDSX509UserAuthenticationEventTypeViewAlertable } from '../models/NDSX509UserAuthenticationEventTypeViewAlertable';
import { NetworkPermissionEntry } from '../models/NetworkPermissionEntry';
import { NetworkPermissionEntryStatus } from '../models/NetworkPermissionEntryStatus';
import { NotificationView } from '../models/NotificationView';
import { NotificationViewForNdsGroup } from '../models/NotificationViewForNdsGroup';
import { NumberMetricAlertView } from '../models/NumberMetricAlertView';
import { NumberMetricEventView } from '../models/NumberMetricEventView';
import { NumberMetricThresholdView } from '../models/NumberMetricThresholdView';
import { NumberMetricUnits } from '../models/NumberMetricUnits';
import { NumberMetricValueView } from '../models/NumberMetricValueView';
import { OnDemandCpsSnapshotSource } from '../models/OnDemandCpsSnapshotSource';
import { OnlineArchive } from '../models/OnlineArchive';
import { OnlineArchiveSchedule } from '../models/OnlineArchiveSchedule';
import { Operator } from '../models/Operator';
import { OpsGenieNotificationView } from '../models/OpsGenieNotificationView';
import { OrgEventTypeViewForOrg } from '../models/OrgEventTypeViewForOrg';
import { OrgEventViewForOrg } from '../models/OrgEventViewForOrg';
import { OrgFederationSettingsView } from '../models/OrgFederationSettingsView';
import { OrgGroupView } from '../models/OrgGroupView';
import { OrgNotificationView } from '../models/OrgNotificationView';
import { OrgPaginatedEventView } from '../models/OrgPaginatedEventView';
import { OrganizationSettings } from '../models/OrganizationSettings';
import { PagerDutyNotificationView } from '../models/PagerDutyNotificationView';
import { PaginatedAWSPeerVpcView } from '../models/PaginatedAWSPeerVpcView';
import { PaginatedAlertConfigView } from '../models/PaginatedAlertConfigView';
import { PaginatedAlertView } from '../models/PaginatedAlertView';
import { PaginatedApiApiUserView } from '../models/PaginatedApiApiUserView';
import { PaginatedApiAppUserView } from '../models/PaginatedApiAppUserView';
import { PaginatedApiAtlasCheckpointView } from '../models/PaginatedApiAtlasCheckpointView';
import { PaginatedApiAtlasDatabaseUserView } from '../models/PaginatedApiAtlasDatabaseUserView';
import { PaginatedApiAtlasDiskBackupExportJobView } from '../models/PaginatedApiAtlasDiskBackupExportJobView';
import { PaginatedApiAtlasProviderRegionsView } from '../models/PaginatedApiAtlasProviderRegionsView';
import { PaginatedApiAtlasServerlessBackupRestoreJobView } from '../models/PaginatedApiAtlasServerlessBackupRestoreJobView';
import { PaginatedApiAtlasServerlessBackupSnapshotView } from '../models/PaginatedApiAtlasServerlessBackupSnapshotView';
import { PaginatedApiInvoiceView } from '../models/PaginatedApiInvoiceView';
import { PaginatedApiUserAccessListView } from '../models/PaginatedApiUserAccessListView';
import { PaginatedAppUserView } from '../models/PaginatedAppUserView';
import { PaginatedAtlasGroupView } from '../models/PaginatedAtlasGroupView';
import { PaginatedAzurePeerNetworkView } from '../models/PaginatedAzurePeerNetworkView';
import { PaginatedBackupSnapshotExportBucketView } from '../models/PaginatedBackupSnapshotExportBucketView';
import { PaginatedBackupSnapshotView } from '../models/PaginatedBackupSnapshotView';
import { PaginatedCloudBackupReplicaSetView } from '../models/PaginatedCloudBackupReplicaSetView';
import { PaginatedCloudBackupRestoreJobView } from '../models/PaginatedCloudBackupRestoreJobView';
import { PaginatedCloudBackupShardedClusterSnapshotView } from '../models/PaginatedCloudBackupShardedClusterSnapshotView';
import { PaginatedCloudProviderContainerView } from '../models/PaginatedCloudProviderContainerView';
import { PaginatedClusterDescriptionV15View } from '../models/PaginatedClusterDescriptionV15View';
import { PaginatedDatabaseView } from '../models/PaginatedDatabaseView';
import { PaginatedDiskPartitionView } from '../models/PaginatedDiskPartitionView';
import { PaginatedGCPPeerVpcView } from '../models/PaginatedGCPPeerVpcView';
import { PaginatedHostViewAtlas } from '../models/PaginatedHostViewAtlas';
import { PaginatedLegacyClusterView } from '../models/PaginatedLegacyClusterView';
import { PaginatedNetworkAccessView } from '../models/PaginatedNetworkAccessView';
import { PaginatedOnlineArchiveView } from '../models/PaginatedOnlineArchiveView';
import { PaginatedOrgGroupView } from '../models/PaginatedOrgGroupView';
import { PaginatedOrganizationView } from '../models/PaginatedOrganizationView';
import { PaginatedPipelineRunView } from '../models/PaginatedPipelineRunView';
import { PaginatedPrivateLinkConnectionView } from '../models/PaginatedPrivateLinkConnectionView';
import { PaginatedRestoreJobView } from '../models/PaginatedRestoreJobView';
import { PaginatedServerlessInstanceDescriptionView } from '../models/PaginatedServerlessInstanceDescriptionView';
import { PaginatedSnapshotView } from '../models/PaginatedSnapshotView';
import { PaginatedTeamRoleView } from '../models/PaginatedTeamRoleView';
import { PaginatedTeamView } from '../models/PaginatedTeamView';
import { PaginatedTenantRestoreView } from '../models/PaginatedTenantRestoreView';
import { PaginatedTenantSnapshotView } from '../models/PaginatedTenantSnapshotView';
import { PaginatedUserCertView } from '../models/PaginatedUserCertView';
import { PartitionField } from '../models/PartitionField';
import { PartitionFieldView } from '../models/PartitionFieldView';
import { PemFileInfo } from '../models/PemFileInfo';
import { PemFileInfoView } from '../models/PemFileInfoView';
import { PerformanceAdvisorOpStatsView } from '../models/PerformanceAdvisorOpStatsView';
import { PerformanceAdvisorOperationView } from '../models/PerformanceAdvisorOperationView';
import { PeriodicCpsSnapshotSource } from '../models/PeriodicCpsSnapshotSource';
import { PipelineRunStats } from '../models/PipelineRunStats';
import { PrivateIPModeView } from '../models/PrivateIPModeView';
import { PrivateNetworkEndpointIdEntry } from '../models/PrivateNetworkEndpointIdEntry';
import { ProjectSettingItemView } from '../models/ProjectSettingItemView';
import { ProviderRegions } from '../models/ProviderRegions';
import { RPUMetricThresholdView } from '../models/RPUMetricThresholdView';
import { Raw } from '../models/Raw';
import { RawMetricAlertView } from '../models/RawMetricAlertView';
import { RawMetricEventView } from '../models/RawMetricEventView';
import { RawMetricThresholdView } from '../models/RawMetricThresholdView';
import { RawMetricUnits } from '../models/RawMetricUnits';
import { RawMetricValueView } from '../models/RawMetricValueView';
import { RegionConfig } from '../models/RegionConfig';
import { RegionSpec } from '../models/RegionSpec';
import { ReplicaSetAlertConfigViewForNdsGroup } from '../models/ReplicaSetAlertConfigViewForNdsGroup';
import { ReplicaSetAlertViewForNdsGroup } from '../models/ReplicaSetAlertViewForNdsGroup';
import { ReplicaSetEventTypeViewForNdsGroup } from '../models/ReplicaSetEventTypeViewForNdsGroup';
import { ReplicaSetEventTypeViewForNdsGroupAlertable } from '../models/ReplicaSetEventTypeViewForNdsGroupAlertable';
import { ReplicaSetEventTypeViewForNdsGroupAlertableNoThreshold } from '../models/ReplicaSetEventTypeViewForNdsGroupAlertableNoThreshold';
import { ReplicaSetEventTypeViewForNdsGroupAlertableWithThreshold } from '../models/ReplicaSetEventTypeViewForNdsGroupAlertableWithThreshold';
import { ReplicaSetMatcherField } from '../models/ReplicaSetMatcherField';
import { ReplicaSetMatcherView } from '../models/ReplicaSetMatcherView';
import { ReplicaSetThresholdAlertConfigViewForNdsGroup } from '../models/ReplicaSetThresholdAlertConfigViewForNdsGroup';
import { ReplicationSpec } from '../models/ReplicationSpec';
import { Role } from '../models/Role';
import { RoleAssignment } from '../models/RoleAssignment';
import { RoleMappingView } from '../models/RoleMappingView';
import { SMSNotificationView } from '../models/SMSNotificationView';
import { SampleDatasetStatus } from '../models/SampleDatasetStatus';
import { ServerlessAWSTenantEndpoint } from '../models/ServerlessAWSTenantEndpoint';
import { ServerlessAWSTenantEndpointUpdate } from '../models/ServerlessAWSTenantEndpointUpdate';
import { ServerlessAzureTenantEndpoint } from '../models/ServerlessAzureTenantEndpoint';
import { ServerlessAzureTenantEndpointUpdate } from '../models/ServerlessAzureTenantEndpointUpdate';
import { ServerlessBackupOptions } from '../models/ServerlessBackupOptions';
import { ServerlessBackupRestoreJob } from '../models/ServerlessBackupRestoreJob';
import { ServerlessBackupSnapshot } from '../models/ServerlessBackupSnapshot';
import { ServerlessEventTypeViewAlertable } from '../models/ServerlessEventTypeViewAlertable';
import { ServerlessInstanceDescription } from '../models/ServerlessInstanceDescription';
import { ServerlessInstanceDescriptionConnectionStrings } from '../models/ServerlessInstanceDescriptionConnectionStrings';
import { ServerlessInstanceDescriptionConnectionStringsPrivateEndpoint } from '../models/ServerlessInstanceDescriptionConnectionStringsPrivateEndpoint';
import { ServerlessInstanceDescriptionConnectionStringsPrivateEndpointEndpoint } from '../models/ServerlessInstanceDescriptionConnectionStringsPrivateEndpointEndpoint';
import { ServerlessInstanceDescriptionCreate } from '../models/ServerlessInstanceDescriptionCreate';
import { ServerlessInstanceDescriptionUpdate } from '../models/ServerlessInstanceDescriptionUpdate';
import { ServerlessMetricAlertConfigViewForNdsGroup } from '../models/ServerlessMetricAlertConfigViewForNdsGroup';
import { ServerlessMetricThresholdView } from '../models/ServerlessMetricThresholdView';
import { ServerlessMetricUnits } from '../models/ServerlessMetricUnits';
import { ServerlessProviderSettings } from '../models/ServerlessProviderSettings';
import { ServerlessTenantEndpoint } from '../models/ServerlessTenantEndpoint';
import { ServerlessTenantEndpointCreate } from '../models/ServerlessTenantEndpointCreate';
import { ServerlessTenantEndpointUpdate } from '../models/ServerlessTenantEndpointUpdate';
import { SlackNotificationView } from '../models/SlackNotificationView';
import { SnapshotRetention } from '../models/SnapshotRetention';
import { SnapshotSchedule } from '../models/SnapshotSchedule';
import { Source } from '../models/Source';
import { SummaryNotificationView } from '../models/SummaryNotificationView';
import { SynonymSource } from '../models/SynonymSource';
import { TargetOrgRequestView } from '../models/TargetOrgRequestView';
import { TargetOrgView } from '../models/TargetOrgView';
import { TeamEventTypeView } from '../models/TeamEventTypeView';
import { TeamEventTypeViewForNdsGroup } from '../models/TeamEventTypeViewForNdsGroup';
import { TeamEventView } from '../models/TeamEventView';
import { TeamEventViewForNdsGroup } from '../models/TeamEventViewForNdsGroup';
import { TeamNotificationView } from '../models/TeamNotificationView';
import { TenantHardwareSpec } from '../models/TenantHardwareSpec';
import { TenantRegionConfig } from '../models/TenantRegionConfig';
import { TenantRestore } from '../models/TenantRestore';
import { TenantSnapshot } from '../models/TenantSnapshot';
import { ThresholdViewInteger } from '../models/ThresholdViewInteger';
import { TimeMetricAlertView } from '../models/TimeMetricAlertView';
import { TimeMetricEventView } from '../models/TimeMetricEventView';
import { TimeMetricThresholdView } from '../models/TimeMetricThresholdView';
import { TimeMetricUnits } from '../models/TimeMetricUnits';
import { TimeMetricValueView } from '../models/TimeMetricValueView';
import { ToggleView } from '../models/ToggleView';
import { TokenFilterasciiFolding } from '../models/TokenFilterasciiFolding';
import { TokenFilterdaitchMokotoffSoundex } from '../models/TokenFilterdaitchMokotoffSoundex';
import { TokenFilteredgeGram } from '../models/TokenFilteredgeGram';
import { TokenFiltericuFolding } from '../models/TokenFiltericuFolding';
import { TokenFiltericuNormalizer } from '../models/TokenFiltericuNormalizer';
import { TokenFilterlength } from '../models/TokenFilterlength';
import { TokenFilterlowercase } from '../models/TokenFilterlowercase';
import { TokenFilternGram } from '../models/TokenFilternGram';
import { TokenFilterregex } from '../models/TokenFilterregex';
import { TokenFilterreverse } from '../models/TokenFilterreverse';
import { TokenFiltershingle } from '../models/TokenFiltershingle';
import { TokenFiltersnowballStemming } from '../models/TokenFiltersnowballStemming';
import { TokenFilterstopword } from '../models/TokenFilterstopword';
import { TokenFiltertrim } from '../models/TokenFiltertrim';
import { TokenizeredgeGram } from '../models/TokenizeredgeGram';
import { Tokenizerkeyword } from '../models/Tokenizerkeyword';
import { TokenizernGram } from '../models/TokenizernGram';
import { TokenizerregexCaptureGroup } from '../models/TokenizerregexCaptureGroup';
import { TokenizerregexSplit } from '../models/TokenizerregexSplit';
import { Tokenizerstandard } from '../models/Tokenizerstandard';
import { TokenizeruaxUrlEmail } from '../models/TokenizeruaxUrlEmail';
import { Tokenizerwhitespace } from '../models/Tokenizerwhitespace';
import { TriggerIngestionRequest } from '../models/TriggerIngestionRequest';
import { UpdateCustomDBRole } from '../models/UpdateCustomDBRole';
import { UserCert } from '../models/UserCert';
import { UserEventTypeViewForNdsGroup } from '../models/UserEventTypeViewForNdsGroup';
import { UserEventTypeViewForOrg } from '../models/UserEventTypeViewForOrg';
import { UserEventViewForNdsGroup } from '../models/UserEventViewForNdsGroup';
import { UserEventViewForOrg } from '../models/UserEventViewForOrg';
import { UserNotificationView } from '../models/UserNotificationView';
import { UserScope } from '../models/UserScope';
import { UserSecurity } from '../models/UserSecurity';
import { ValidationView } from '../models/ValidationView';
import { VictorOpsNotificationView } from '../models/VictorOpsNotificationView';
import { WebhookNotificationView } from '../models/WebhookNotificationView';
import { WeeklyScheduleView } from '../models/WeeklyScheduleView';
import { X509Certificate } from '../models/X509Certificate';
import { X509CertificateView } from '../models/X509CertificateView';
import { ZoneMapping } from '../models/ZoneMapping';

import { ObservableAWSClustersDNSApi } from "./ObservableAPI";
import { AWSClustersDNSApiRequestFactory, AWSClustersDNSApiResponseProcessor} from "../apis/AWSClustersDNSApi";

export interface AWSClustersDNSApiGetAWSCustomDNSRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AWSClustersDNSApigetAWSCustomDNS
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof AWSClustersDNSApigetAWSCustomDNS
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof AWSClustersDNSApigetAWSCustomDNS
     */
    pretty?: boolean
}

export interface AWSClustersDNSApiToggleAWSCustomDNSRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AWSClustersDNSApitoggleAWSCustomDNS
     */
    groupId: string
    /**
     * Enables or disables the custom DNS configuration for AWS clusters in the specified project.
     * @type AWSCustomDNSEnabledView
     * @memberof AWSClustersDNSApitoggleAWSCustomDNS
     */
    aWSCustomDNSEnabledView: AWSCustomDNSEnabledView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof AWSClustersDNSApitoggleAWSCustomDNS
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof AWSClustersDNSApitoggleAWSCustomDNS
     */
    pretty?: boolean
}

export class ObjectAWSClustersDNSApi {
    private api: ObservableAWSClustersDNSApi

    public constructor(configuration: Configuration, requestFactory?: AWSClustersDNSApiRequestFactory, responseProcessor?: AWSClustersDNSApiResponseProcessor) {
        this.api = new ObservableAWSClustersDNSApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the custom DNS configuration for AWS clusters in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Custom DNS Configuration for Atlas Clusters on AWS
     * @param param the request object
     */
    public getAWSCustomDNS(param: AWSClustersDNSApiGetAWSCustomDNSRequest, options?: Configuration): Promise<AWSCustomDNSEnabledView> {
        return this.api.getAWSCustomDNS(param.groupId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Enables or disables the custom DNS configuration for AWS clusters in the specified project. Enable custom DNS if you use AWS VPC peering and use your own DNS servers. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Toggle State of One Custom DNS Configuration for Atlas Clusters on AWS
     * @param param the request object
     */
    public toggleAWSCustomDNS(param: AWSClustersDNSApiToggleAWSCustomDNSRequest, options?: Configuration): Promise<AWSCustomDNSEnabledView> {
        return this.api.toggleAWSCustomDNS(param.groupId, param.aWSCustomDNSEnabledView, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableAccessTrackingApi } from "./ObservableAPI";
import { AccessTrackingApiRequestFactory, AccessTrackingApiResponseProcessor} from "../apis/AccessTrackingApi";

export interface AccessTrackingApiListAccessLogsByClusterNameRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AccessTrackingApilistAccessLogsByClusterName
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof AccessTrackingApilistAccessLogsByClusterName
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof AccessTrackingApilistAccessLogsByClusterName
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof AccessTrackingApilistAccessLogsByClusterName
     */
    pretty?: boolean
    /**
     * Flag that indicates whether the response returns the successful authentication attempts only.
     * @type boolean
     * @memberof AccessTrackingApilistAccessLogsByClusterName
     */
    authResult?: boolean
    /**
     * Date and time when to stop retrieving database history. If you specify **end**, you must also specify **start**. This parameter uses the ISO 8601 timestamp format in UTC.
     * @type string
     * @memberof AccessTrackingApilistAccessLogsByClusterName
     */
    end?: string
    /**
     * One Internet Protocol address that attempted to authenticate with the database.
     * @type string
     * @memberof AccessTrackingApilistAccessLogsByClusterName
     */
    ipAddress?: string
    /**
     * Maximum number of lines from the log to return.
     * @type number
     * @memberof AccessTrackingApilistAccessLogsByClusterName
     */
    nLogs?: number
    /**
     * Date and time when MongoDB Cloud begins retrieving database history. If you specify **start**, you must also specify **end**. This parameter uses the ISO 8601 timestamp format in UTC.
     * @type Date
     * @memberof AccessTrackingApilistAccessLogsByClusterName
     */
    start?: Date
}

export interface AccessTrackingApiListAccessLogsByHostnameRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AccessTrackingApilistAccessLogsByHostname
     */
    groupId: string
    /**
     * Fully qualified domain name or IP address of the MongoDB host that stores the log files that you want to download.
     * @type string
     * @memberof AccessTrackingApilistAccessLogsByHostname
     */
    hostname: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof AccessTrackingApilistAccessLogsByHostname
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof AccessTrackingApilistAccessLogsByHostname
     */
    pretty?: boolean
    /**
     * Flag that indicates whether the response returns the successful authentication attempts only.
     * @type boolean
     * @memberof AccessTrackingApilistAccessLogsByHostname
     */
    authResult?: boolean
    /**
     * Date and time when to stop retrieving database history. If you specify **end**, you must also specify **start**. This parameter uses the ISO 8601 timestamp format in UTC.
     * @type Date
     * @memberof AccessTrackingApilistAccessLogsByHostname
     */
    end?: Date
    /**
     * One Internet Protocol address that attempted to authenticate with the database.
     * @type string
     * @memberof AccessTrackingApilistAccessLogsByHostname
     */
    ipAddress?: string
    /**
     * Maximum number of lines from the log to return.
     * @type number
     * @memberof AccessTrackingApilistAccessLogsByHostname
     */
    nLogs?: number
    /**
     * Date and time when MongoDB Cloud begins retrieving database history. If you specify **start**, you must also specify **end**. This parameter uses the ISO 8601 timestamp format in UTC.
     * @type Date
     * @memberof AccessTrackingApilistAccessLogsByHostname
     */
    start?: Date
}

export class ObjectAccessTrackingApi {
    private api: ObservableAccessTrackingApi

    public constructor(configuration: Configuration, requestFactory?: AccessTrackingApiRequestFactory, responseProcessor?: AccessTrackingApiResponseProcessor) {
        this.api = new ObservableAccessTrackingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the access logs of one cluster identified by the cluster's name. Access logs contain a list of authentication requests made against your cluster. You can't use this feature on tenant-tier clusters (M0, M2, M5). To use this resource, the requesting API Key must have the Project Monitoring Admin role.
     * Return Database Access History for One Cluster using Its Cluster Name
     * @param param the request object
     */
    public listAccessLogsByClusterName(param: AccessTrackingApiListAccessLogsByClusterNameRequest, options?: Configuration): Promise<ApiMongoDBAccessLogsListView> {
        return this.api.listAccessLogsByClusterName(param.groupId, param.clusterName, param.envelope, param.pretty, param.authResult, param.end, param.ipAddress, param.nLogs, param.start,  options).toPromise();
    }

    /**
     * Returns the access logs of one cluster identified by the cluster's hostname. Access logs contain a list of authentication requests made against your clusters. You can't use this feature on tenant-tier clusters (M0, M2, M5). To use this resource, the requesting API Key must have the Project Monitoring Admin role.
     * Return Database Access History for One Cluster using Its Hostname
     * @param param the request object
     */
    public listAccessLogsByHostname(param: AccessTrackingApiListAccessLogsByHostnameRequest, options?: Configuration): Promise<ApiMongoDBAccessLogsListView> {
        return this.api.listAccessLogsByHostname(param.groupId, param.hostname, param.envelope, param.pretty, param.authResult, param.end, param.ipAddress, param.nLogs, param.start,  options).toPromise();
    }

}

import { ObservableAlertConfigurationsApi } from "./ObservableAPI";
import { AlertConfigurationsApiRequestFactory, AlertConfigurationsApiResponseProcessor} from "../apis/AlertConfigurationsApi";

export interface AlertConfigurationsApiCreateAlertConfigurationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AlertConfigurationsApicreateAlertConfiguration
     */
    groupId: string
    /**
     * Creates one alert configuration for the specified project.
     * @type AlertConfigViewForNdsGroup
     * @memberof AlertConfigurationsApicreateAlertConfiguration
     */
    alertConfigViewForNdsGroup: AlertConfigViewForNdsGroup
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof AlertConfigurationsApicreateAlertConfiguration
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof AlertConfigurationsApicreateAlertConfiguration
     */
    pretty?: boolean
}

export interface AlertConfigurationsApiDeleteAlertConfigurationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AlertConfigurationsApideleteAlertConfiguration
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the alert configuration. Use the [/alertConfigs](#tag/Alert-Configurations/operation/listAlertConfigurations) endpoint to retrieve all alert configurations to which the authenticated user has access.
     * @type string
     * @memberof AlertConfigurationsApideleteAlertConfiguration
     */
    alertConfigId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof AlertConfigurationsApideleteAlertConfiguration
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof AlertConfigurationsApideleteAlertConfiguration
     */
    pretty?: boolean
}

export interface AlertConfigurationsApiGetAlertConfigurationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AlertConfigurationsApigetAlertConfiguration
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the alert configuration. Use the [/alertConfigs](#tag/Alert-Configurations/operation/listAlertConfigurations) endpoint to retrieve all alert configurations to which the authenticated user has access.
     * @type string
     * @memberof AlertConfigurationsApigetAlertConfiguration
     */
    alertConfigId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof AlertConfigurationsApigetAlertConfiguration
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof AlertConfigurationsApigetAlertConfiguration
     */
    pretty?: boolean
}

export interface AlertConfigurationsApiListAlertConfigurationMatchersFieldNamesRequest {
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof AlertConfigurationsApilistAlertConfigurationMatchersFieldNames
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof AlertConfigurationsApilistAlertConfigurationMatchersFieldNames
     */
    pretty?: boolean
}

export interface AlertConfigurationsApiListAlertConfigurationsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AlertConfigurationsApilistAlertConfigurations
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof AlertConfigurationsApilistAlertConfigurations
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof AlertConfigurationsApilistAlertConfigurations
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof AlertConfigurationsApilistAlertConfigurations
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof AlertConfigurationsApilistAlertConfigurations
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof AlertConfigurationsApilistAlertConfigurations
     */
    pretty?: boolean
}

export interface AlertConfigurationsApiListAlertConfigurationsByAlertIdRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AlertConfigurationsApilistAlertConfigurationsByAlertId
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the alert. Use the [/alerts](#tag/Alerts/operation/listAlerts) endpoint to retrieve all alerts to which the authenticated user has access.
     * @type string
     * @memberof AlertConfigurationsApilistAlertConfigurationsByAlertId
     */
    alertId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof AlertConfigurationsApilistAlertConfigurationsByAlertId
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof AlertConfigurationsApilistAlertConfigurationsByAlertId
     */
    pretty?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof AlertConfigurationsApilistAlertConfigurationsByAlertId
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof AlertConfigurationsApilistAlertConfigurationsByAlertId
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof AlertConfigurationsApilistAlertConfigurationsByAlertId
     */
    pageNum?: number
}

export interface AlertConfigurationsApiToggleAlertConfigurationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AlertConfigurationsApitoggleAlertConfiguration
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the alert configuration that triggered this alert. Use the [/alertConfigs](#tag/Alert-Configurations/operation/listAlertConfigurations) endpoint to retrieve all alert configurations to which the authenticated user has access.
     * @type string
     * @memberof AlertConfigurationsApitoggleAlertConfiguration
     */
    alertConfigId: string
    /**
     * Enables or disables the specified alert configuration in the specified project.
     * @type ToggleView
     * @memberof AlertConfigurationsApitoggleAlertConfiguration
     */
    toggleView: ToggleView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof AlertConfigurationsApitoggleAlertConfiguration
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof AlertConfigurationsApitoggleAlertConfiguration
     */
    pretty?: boolean
}

export interface AlertConfigurationsApiUpdateAlertConfigurationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AlertConfigurationsApiupdateAlertConfiguration
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the alert configuration. Use the [/alertConfigs](#tag/Alert-Configurations/operation/listAlertConfigurations) endpoint to retrieve all alert configurations to which the authenticated user has access.
     * @type string
     * @memberof AlertConfigurationsApiupdateAlertConfiguration
     */
    alertConfigId: string
    /**
     * Updates one alert configuration in the specified project.
     * @type AlertConfigViewForNdsGroup
     * @memberof AlertConfigurationsApiupdateAlertConfiguration
     */
    alertConfigViewForNdsGroup: AlertConfigViewForNdsGroup
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof AlertConfigurationsApiupdateAlertConfiguration
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof AlertConfigurationsApiupdateAlertConfiguration
     */
    pretty?: boolean
}

export class ObjectAlertConfigurationsApi {
    private api: ObservableAlertConfigurationsApi

    public constructor(configuration: Configuration, requestFactory?: AlertConfigurationsApiRequestFactory, responseProcessor?: AlertConfigurationsApiResponseProcessor) {
        this.api = new ObservableAlertConfigurationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one alert configuration for the specified project. Alert configurations define the triggers and notification methods for alerts. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/alert-configurations-create-config/).
     * Create One Alert Configuration in One Project
     * @param param the request object
     */
    public createAlertConfiguration(param: AlertConfigurationsApiCreateAlertConfigurationRequest, options?: Configuration): Promise<AlertConfigViewForNdsGroup> {
        return this.api.createAlertConfiguration(param.groupId, param.alertConfigViewForNdsGroup, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Removes one alert configuration from the specified project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/alert-configurations-delete-config/).
     * Remove One Alert Configuration from One Project
     * @param param the request object
     */
    public deleteAlertConfiguration(param: AlertConfigurationsApiDeleteAlertConfigurationRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAlertConfiguration(param.groupId, param.alertConfigId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the specified alert configuration from the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/alert-configurations-get-config/).
     * Return One Alert Configuration from One Project
     * @param param the request object
     */
    public getAlertConfiguration(param: AlertConfigurationsApiGetAlertConfigurationRequest, options?: Configuration): Promise<AlertConfigViewForNdsGroup> {
        return this.api.getAlertConfiguration(param.groupId, param.alertConfigId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Get all field names that the matchers.fieldName parameter accepts when you [create](#tag/Alert-Configurations/operation/createAlertConfiguration) or [update](#tag/Alert-Configurations/operation/updateAlertConfiguration) an Alert Configuration.
     * Get All Alert Configuration Matchers Field Names
     * @param param the request object
     */
    public listAlertConfigurationMatchersFieldNames(param: AlertConfigurationsApiListAlertConfigurationMatchersFieldNamesRequest = {}, options?: Configuration): Promise<Array<MatcherFieldView>> {
        return this.api.listAlertConfigurationMatchersFieldNames(param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns all alert configurations for one project. These alert configurations apply to any component in the project. Alert configurations define the triggers and notification methods for alerts. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/alert-configurations-get-all-configs/).
     * Return All Alert Configurations for One Project
     * @param param the request object
     */
    public listAlertConfigurations(param: AlertConfigurationsApiListAlertConfigurationsRequest, options?: Configuration): Promise<PaginatedAlertConfigView> {
        return this.api.listAlertConfigurations(param.groupId, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

    /**
     * Returns all alert configurations set for the specified alert. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.   This resource remains under revision and may change.
     * Return All Alert Configurations Set for One Alert
     * @param param the request object
     */
    public listAlertConfigurationsByAlertId(param: AlertConfigurationsApiListAlertConfigurationsByAlertIdRequest, options?: Configuration): Promise<PaginatedAlertConfigView> {
        return this.api.listAlertConfigurationsByAlertId(param.groupId, param.alertId, param.envelope, param.pretty, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Enables or disables the specified alert configuration in the specified project. The resource enables the specified alert configuration if currently enabled. The resource disables the specified alert configuration if currently disabled. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.  **NOTE**: This endpoint updates only the enabled/disabled state for the alert configuration. To update more than just this configuration, see [Update One Alert Configuration](#tag/Alert-Configurations/operation/updateAlertConfiguration).  This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/alert-configurations-enable-disable-config/).
     * Toggle One State of One Alert Configuration in One Project
     * @param param the request object
     */
    public toggleAlertConfiguration(param: AlertConfigurationsApiToggleAlertConfigurationRequest, options?: Configuration): Promise<AlertConfigViewForNdsGroup> {
        return this.api.toggleAlertConfiguration(param.groupId, param.alertConfigId, param.toggleView, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Updates one alert configuration in the specified project. Alert configurations define the triggers and notification methods for alerts. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.  **NOTE**: To enable or disable the alert configuration, see [Toggle One State of One Alert Configuration in One Project](#tag/Alert-Configurations/operation/toggleAlertConfiguration).   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/alert-configurations-update-config/).
     * Update One Alert Configuration for One Project
     * @param param the request object
     */
    public updateAlertConfiguration(param: AlertConfigurationsApiUpdateAlertConfigurationRequest, options?: Configuration): Promise<AlertConfigViewForNdsGroup> {
        return this.api.updateAlertConfiguration(param.groupId, param.alertConfigId, param.alertConfigViewForNdsGroup, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableAlertsApi } from "./ObservableAPI";
import { AlertsApiRequestFactory, AlertsApiResponseProcessor} from "../apis/AlertsApi";

export interface AlertsApiAcknowledgeAlertRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AlertsApiacknowledgeAlert
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the alert. Use the [/alerts](#tag/Alerts/operation/listAlerts) endpoint to retrieve all alerts to which the authenticated user has access.
     * @type string
     * @memberof AlertsApiacknowledgeAlert
     */
    alertId: string
    /**
     * Confirm one alert.
     * @type AlertViewForNdsGroup
     * @memberof AlertsApiacknowledgeAlert
     */
    alertViewForNdsGroup: AlertViewForNdsGroup
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof AlertsApiacknowledgeAlert
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof AlertsApiacknowledgeAlert
     */
    pretty?: boolean
}

export interface AlertsApiGetAlertRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AlertsApigetAlert
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the alert. Use the [/alerts](#tag/Alerts/operation/listAlerts) endpoint to retrieve all alerts to which the authenticated user has access.
     * @type string
     * @memberof AlertsApigetAlert
     */
    alertId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof AlertsApigetAlert
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof AlertsApigetAlert
     */
    pretty?: boolean
}

export interface AlertsApiListAlertsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AlertsApilistAlerts
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof AlertsApilistAlerts
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof AlertsApilistAlerts
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof AlertsApilistAlerts
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof AlertsApilistAlerts
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof AlertsApilistAlerts
     */
    pretty?: boolean
    /**
     * Status of the alerts to return. Omit to return all alerts in all statuses.
     * @type &#39;OPEN&#39; | &#39;TRACKING&#39; | &#39;CLOSED&#39;
     * @memberof AlertsApilistAlerts
     */
    status?: 'OPEN' | 'TRACKING' | 'CLOSED'
}

export interface AlertsApiListAlertsByAlertConfigurationIdRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AlertsApilistAlertsByAlertConfigurationId
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the alert configuration. Use the [/alertConfigs](#tag/Alert-Configurations/operation/listAlertConfigurations) endpoint to retrieve all alert configurations to which the authenticated user has access.
     * @type string
     * @memberof AlertsApilistAlertsByAlertConfigurationId
     */
    alertConfigId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof AlertsApilistAlertsByAlertConfigurationId
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof AlertsApilistAlertsByAlertConfigurationId
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof AlertsApilistAlertsByAlertConfigurationId
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof AlertsApilistAlertsByAlertConfigurationId
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof AlertsApilistAlertsByAlertConfigurationId
     */
    pretty?: boolean
}

export class ObjectAlertsApi {
    private api: ObservableAlertsApi

    public constructor(configuration: Configuration, requestFactory?: AlertsApiRequestFactory, responseProcessor?: AlertsApiResponseProcessor) {
        this.api = new ObservableAlertsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Confirms receipt of one existing alert. This alert applies to any component in one project. Acknowledging an alert prevents successive notifications. You receive an alert when a monitored component meets or exceeds a value you set until you acknowledge the alert. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role. This resource doesn't require the API Key to have an Access List.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/alerts-acknowledge-alert/).
     * Acknowledge One Alert from One Project
     * @param param the request object
     */
    public acknowledgeAlert(param: AlertsApiAcknowledgeAlertRequest, options?: Configuration): Promise<AlertViewForNdsGroup> {
        return this.api.acknowledgeAlert(param.groupId, param.alertId, param.alertViewForNdsGroup, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns one alert. This alert applies to any component in one project. You receive an alert when a monitored component meets or exceeds a value you set. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/alerts-get-alert/).
     * Return One Alert from One Project
     * @param param the request object
     */
    public getAlert(param: AlertsApiGetAlertRequest, options?: Configuration): Promise<AlertViewForNdsGroup> {
        return this.api.getAlert(param.groupId, param.alertId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns all alerts. These alerts apply to all components in one project. You receive an alert when a monitored component meets or exceeds a value you set. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/alerts-get-all-alerts/).
     * Return All Alerts from One Project
     * @param param the request object
     */
    public listAlerts(param: AlertsApiListAlertsRequest, options?: Configuration): Promise<PaginatedAlertView> {
        return this.api.listAlerts(param.groupId, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty, param.status,  options).toPromise();
    }

    /**
     * Returns all open alerts that the specified alert configuration triggers. These alert configurations apply to the specified project only. Alert configurations define the triggers and notification methods for alerts. Open alerts have been triggered but remain unacknowledged. To use this resource, the requesting API Key must have the Project Read Only role.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/alert-configurations-get-open-alerts/).
     * Return All Open Alerts for Alert Configuration
     * @param param the request object
     */
    public listAlertsByAlertConfigurationId(param: AlertsApiListAlertsByAlertConfigurationIdRequest, options?: Configuration): Promise<PaginatedAlertView> {
        return this.api.listAlertsByAlertConfigurationId(param.groupId, param.alertConfigId, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

}

import { ObservableAtlasSearchApi } from "./ObservableAPI";
import { AtlasSearchApiRequestFactory, AtlasSearchApiResponseProcessor} from "../apis/AtlasSearchApi";

export interface AtlasSearchApiCreateAtlasSearchIndexRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AtlasSearchApicreateAtlasSearchIndex
     */
    groupId: string
    /**
     * Name of the cluster that contains the collection on which to create an Atlas Search index.
     * @type string
     * @memberof AtlasSearchApicreateAtlasSearchIndex
     */
    clusterName: string
    /**
     * Creates one Atlas Search index on the specified collection.
     * @type FTSIndex
     * @memberof AtlasSearchApicreateAtlasSearchIndex
     */
    fTSIndex: FTSIndex
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof AtlasSearchApicreateAtlasSearchIndex
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof AtlasSearchApicreateAtlasSearchIndex
     */
    pretty?: boolean
}

export interface AtlasSearchApiDeleteAtlasSearchIndexRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AtlasSearchApideleteAtlasSearchIndex
     */
    groupId: string
    /**
     * Name of the cluster that contains the database and collection with one or more Application Search indexes.
     * @type string
     * @memberof AtlasSearchApideleteAtlasSearchIndex
     */
    clusterName: string
    /**
     * Unique 24-hexadecimal digit string that identifies the Atlas Search index. Use the [Get All Atlas Search Indexes for a Collection API](https://docs.atlas.mongodb.com/reference/api/fts-indexes-get-all/) endpoint to find the IDs of all Atlas Search indexes.
     * @type string
     * @memberof AtlasSearchApideleteAtlasSearchIndex
     */
    indexId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof AtlasSearchApideleteAtlasSearchIndex
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof AtlasSearchApideleteAtlasSearchIndex
     */
    pretty?: boolean
}

export interface AtlasSearchApiGetAtlasSearchIndexRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AtlasSearchApigetAtlasSearchIndex
     */
    groupId: string
    /**
     * Name of the cluster that contains the collection with one or more Atlas Search indexes.
     * @type string
     * @memberof AtlasSearchApigetAtlasSearchIndex
     */
    clusterName: string
    /**
     * Unique 24-hexadecimal digit string that identifies the Application Search [index](https://docs.atlas.mongodb.com/reference/atlas-search/index-definitions/). Use the [Get All Application Search Indexes for a Collection API](https://docs.atlas.mongodb.com/reference/api/fts-indexes-get-all/) endpoint to find the IDs of all Application Search indexes.
     * @type string
     * @memberof AtlasSearchApigetAtlasSearchIndex
     */
    indexId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof AtlasSearchApigetAtlasSearchIndex
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof AtlasSearchApigetAtlasSearchIndex
     */
    pretty?: boolean
}

export interface AtlasSearchApiListAtlasSearchIndexesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AtlasSearchApilistAtlasSearchIndexes
     */
    groupId: string
    /**
     * Name of the cluster that contains the collection with one or more Atlas Search indexes.
     * @type string
     * @memberof AtlasSearchApilistAtlasSearchIndexes
     */
    clusterName: string
    /**
     * Name of the collection that contains one or more Atlas Search indexes.
     * @type string
     * @memberof AtlasSearchApilistAtlasSearchIndexes
     */
    collectionName: string
    /**
     * Human-readable label that identifies the database that contains the collection with one or more Atlas Search indexes.
     * @type string
     * @memberof AtlasSearchApilistAtlasSearchIndexes
     */
    databaseName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof AtlasSearchApilistAtlasSearchIndexes
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof AtlasSearchApilistAtlasSearchIndexes
     */
    pretty?: boolean
}

export interface AtlasSearchApiUpdateAtlasSearchIndexRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AtlasSearchApiupdateAtlasSearchIndex
     */
    groupId: string
    /**
     * Name of the cluster that contains the collection whose Atlas Search index to update.
     * @type string
     * @memberof AtlasSearchApiupdateAtlasSearchIndex
     */
    clusterName: string
    /**
     * Unique 24-hexadecimal digit string that identifies the Atlas Search [index](https://docs.atlas.mongodb.com/reference/atlas-search/index-definitions/). Use the [Get All Atlas Search Indexes for a Collection API](https://docs.atlas.mongodb.com/reference/api/fts-indexes-get-all/) endpoint to find the IDs of all Atlas Search indexes.
     * @type string
     * @memberof AtlasSearchApiupdateAtlasSearchIndex
     */
    indexId: string
    /**
     * Details to update on the Atlas Search index.
     * @type FTSIndex
     * @memberof AtlasSearchApiupdateAtlasSearchIndex
     */
    fTSIndex: FTSIndex
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof AtlasSearchApiupdateAtlasSearchIndex
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof AtlasSearchApiupdateAtlasSearchIndex
     */
    pretty?: boolean
}

export class ObjectAtlasSearchApi {
    private api: ObservableAtlasSearchApi

    public constructor(configuration: Configuration, requestFactory?: AtlasSearchApiRequestFactory, responseProcessor?: AtlasSearchApiResponseProcessor) {
        this.api = new ObservableAtlasSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one Atlas Search index on the specified collection. Atlas Search indexes define the fields on which to create the index and the analyzers to use when creating the index. Only clusters running MongoDB v4.2 or later can use Atlas Search. To use this resource, the requesting API Key must have the Project Data Access Admin role. This resource doesn't require the API Key to have an Access List.
     * Create One Atlas Search Index
     * @param param the request object
     */
    public createAtlasSearchIndex(param: AtlasSearchApiCreateAtlasSearchIndexRequest, options?: Configuration): Promise<FTSIndex> {
        return this.api.createAtlasSearchIndex(param.groupId, param.clusterName, param.fTSIndex, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Removes one Atlas Search index that you identified with its unique ID. To use this resource, the requesting API Key must have the Project Data Access Admin role. This resource doesn't require the API Key to have an Access List.
     * Remove One Atlas Search Index
     * @param param the request object
     */
    public deleteAtlasSearchIndex(param: AtlasSearchApiDeleteAtlasSearchIndexRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAtlasSearchIndex(param.groupId, param.clusterName, param.indexId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns one Atlas Search index in the specified project. You identify this index using its unique ID. Atlas Search index contains the indexed fields and the analyzers used to create the index. To use this resource, the requesting API Key must have the Project Data Access Read Write role. This resource doesn't require the API Key to have an Access List.
     * Return One Atlas Search Index
     * @param param the request object
     */
    public getAtlasSearchIndex(param: AtlasSearchApiGetAtlasSearchIndexRequest, options?: Configuration): Promise<FTSIndex> {
        return this.api.getAtlasSearchIndex(param.groupId, param.clusterName, param.indexId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns all Atlas Search indexes on the specified collection. Atlas Search indexes contain the indexed fields and the analyzers used to create the indexes. To use this resource, the requesting API Key must have the Project Data Access Read Write role. This resource doesn't require the API Key to have an Access List.
     * Return All Atlas Search Indexes for One Collection
     * @param param the request object
     */
    public listAtlasSearchIndexes(param: AtlasSearchApiListAtlasSearchIndexesRequest, options?: Configuration): Promise<Array<FTSIndex>> {
        return this.api.listAtlasSearchIndexes(param.groupId, param.clusterName, param.collectionName, param.databaseName, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Updates one Atlas Search index that you identified with its unique ID. Atlas Search indexes define the fields on which to create the index and the analyzers to use when creating the index. To use this resource, the requesting API Key must have the Project Data Access Admin role. This resource doesn't require the API Key to have an Access List.
     * Update One Atlas Search Index
     * @param param the request object
     */
    public updateAtlasSearchIndex(param: AtlasSearchApiUpdateAtlasSearchIndexRequest, options?: Configuration): Promise<FTSIndex> {
        return this.api.updateAtlasSearchIndex(param.groupId, param.clusterName, param.indexId, param.fTSIndex, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableAuditingApi } from "./ObservableAPI";
import { AuditingApiRequestFactory, AuditingApiResponseProcessor} from "../apis/AuditingApi";

export interface AuditingApiGetAuditingConfigurationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AuditingApigetAuditingConfiguration
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof AuditingApigetAuditingConfiguration
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof AuditingApigetAuditingConfiguration
     */
    pretty?: boolean
}

export interface AuditingApiUpdateAuditingConfigurationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AuditingApiupdateAuditingConfiguration
     */
    groupId: string
    /**
     * Updated auditing configuration for the specified project.
     * @type AuditLog
     * @memberof AuditingApiupdateAuditingConfiguration
     */
    auditLog: AuditLog
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof AuditingApiupdateAuditingConfiguration
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof AuditingApiupdateAuditingConfiguration
     */
    pretty?: boolean
}

export class ObjectAuditingApi {
    private api: ObservableAuditingApi

    public constructor(configuration: Configuration, requestFactory?: AuditingApiRequestFactory, responseProcessor?: AuditingApiResponseProcessor) {
        this.api = new ObservableAuditingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the auditing configuration for the specified project. The auditing configuration defines the events that MongoDB Cloud records in the audit log. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Return the Auditing Configuration for One Project
     * @param param the request object
     */
    public getAuditingConfiguration(param: AuditingApiGetAuditingConfigurationRequest, options?: Configuration): Promise<AuditLog> {
        return this.api.getAuditingConfiguration(param.groupId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Updates the auditing configuration for the specified project. The auditing configuration defines the events that MongoDB Cloud records in the audit log. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Update Auditing Configuration for One Project
     * @param param the request object
     */
    public updateAuditingConfiguration(param: AuditingApiUpdateAuditingConfigurationRequest, options?: Configuration): Promise<AuditLog> {
        return this.api.updateAuditingConfiguration(param.groupId, param.auditLog, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableCloudBackupsApi } from "./ObservableAPI";
import { CloudBackupsApiRequestFactory, CloudBackupsApiResponseProcessor} from "../apis/CloudBackupsApi";

export interface CloudBackupsApiCancelBackupRestoreJobRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApicancelBackupRestoreJob
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof CloudBackupsApicancelBackupRestoreJob
     */
    clusterName: string
    /**
     * Unique 24-hexadecimal digit string that identifies the restore job to remove.
     * @type string
     * @memberof CloudBackupsApicancelBackupRestoreJob
     */
    restoreJobId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApicancelBackupRestoreJob
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudBackupsApicancelBackupRestoreJob
     */
    pretty?: boolean
}

export interface CloudBackupsApiCreateBackupExportJobRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApicreateBackupExportJob
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof CloudBackupsApicreateBackupExportJob
     */
    clusterName: string
    /**
     * Information about the Cloud Backup Snapshot Export Job to create.
     * @type DiskBackupExportJobRequest
     * @memberof CloudBackupsApicreateBackupExportJob
     */
    diskBackupExportJobRequest: DiskBackupExportJobRequest
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApicreateBackupExportJob
     */
    envelope?: boolean
}

export interface CloudBackupsApiCreateBackupRestoreJobRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApicreateBackupRestoreJob
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof CloudBackupsApicreateBackupRestoreJob
     */
    clusterName: string
    /**
     * Restores one snapshot of one cluster from the specified project.
     * @type DiskBackupRestoreJob
     * @memberof CloudBackupsApicreateBackupRestoreJob
     */
    diskBackupRestoreJob: DiskBackupRestoreJob
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApicreateBackupRestoreJob
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudBackupsApicreateBackupRestoreJob
     */
    pretty?: boolean
}

export interface CloudBackupsApiCreateExportBucketRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApicreateExportBucket
     */
    groupId: string
    /**
     * Grants MongoDB Cloud access to the specified AWS S3 bucket.
     * @type DiskBackupSnapshotAWSExportBucket
     * @memberof CloudBackupsApicreateExportBucket
     */
    diskBackupSnapshotAWSExportBucket: DiskBackupSnapshotAWSExportBucket
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApicreateExportBucket
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudBackupsApicreateExportBucket
     */
    pretty?: boolean
}

export interface CloudBackupsApiCreateServerlessBackupRestoreJobRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApicreateServerlessBackupRestoreJob
     */
    groupId: string
    /**
     * Human-readable label that identifies the serverless instance whose snapshot you want to restore.
     * @type string
     * @memberof CloudBackupsApicreateServerlessBackupRestoreJob
     */
    clusterName: string
    /**
     * Restores one snapshot of one serverless instance from the specified project.
     * @type ServerlessBackupRestoreJob
     * @memberof CloudBackupsApicreateServerlessBackupRestoreJob
     */
    serverlessBackupRestoreJob: ServerlessBackupRestoreJob
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApicreateServerlessBackupRestoreJob
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudBackupsApicreateServerlessBackupRestoreJob
     */
    pretty?: boolean
}

export interface CloudBackupsApiDeleteAllBackupSchedulesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApideleteAllBackupSchedules
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof CloudBackupsApideleteAllBackupSchedules
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApideleteAllBackupSchedules
     */
    envelope?: boolean
}

export interface CloudBackupsApiDeleteExportBucketRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApideleteExportBucket
     */
    groupId: string
    /**
     * Unique string that identifies the AWS S3 bucket to which you export your snapshots.
     * @type string
     * @memberof CloudBackupsApideleteExportBucket
     */
    exportBucketId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApideleteExportBucket
     */
    envelope?: boolean
}

export interface CloudBackupsApiDeleteReplicaSetBackupRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApideleteReplicaSetBackup
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof CloudBackupsApideleteReplicaSetBackup
     */
    clusterName: string
    /**
     * Unique 24-hexadecimal digit string that identifies the desired snapshot.
     * @type string
     * @memberof CloudBackupsApideleteReplicaSetBackup
     */
    snapshotId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApideleteReplicaSetBackup
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudBackupsApideleteReplicaSetBackup
     */
    pretty?: boolean
}

export interface CloudBackupsApiDeleteShardedClusterBackupRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApideleteShardedClusterBackup
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof CloudBackupsApideleteShardedClusterBackup
     */
    clusterName: string
    /**
     * Unique 24-hexadecimal digit string that identifies the desired snapshot.
     * @type string
     * @memberof CloudBackupsApideleteShardedClusterBackup
     */
    snapshotId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApideleteShardedClusterBackup
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudBackupsApideleteShardedClusterBackup
     */
    pretty?: boolean
}

export interface CloudBackupsApiGetBackupExportJobRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApigetBackupExportJob
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof CloudBackupsApigetBackupExportJob
     */
    clusterName: string
    /**
     * Unique string that identifies the AWS S3 bucket to which you export your snapshots.
     * @type string
     * @memberof CloudBackupsApigetBackupExportJob
     */
    exportId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApigetBackupExportJob
     */
    envelope?: boolean
}

export interface CloudBackupsApiGetBackupRestoreJobRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApigetBackupRestoreJob
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster with the restore jobs you want to return.
     * @type string
     * @memberof CloudBackupsApigetBackupRestoreJob
     */
    clusterName: string
    /**
     * Unique 24-hexadecimal digit string that identifies the restore job to return.
     * @type string
     * @memberof CloudBackupsApigetBackupRestoreJob
     */
    restoreJobId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApigetBackupRestoreJob
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudBackupsApigetBackupRestoreJob
     */
    pretty?: boolean
}

export interface CloudBackupsApiGetBackupScheduleRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApigetBackupSchedule
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof CloudBackupsApigetBackupSchedule
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApigetBackupSchedule
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudBackupsApigetBackupSchedule
     */
    pretty?: boolean
}

export interface CloudBackupsApiGetDataProtectionSettingsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApigetDataProtectionSettings
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApigetDataProtectionSettings
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudBackupsApigetDataProtectionSettings
     */
    pretty?: boolean
}

export interface CloudBackupsApiGetExportBucketRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApigetExportBucket
     */
    groupId: string
    /**
     * Unique string that identifies the AWS S3 bucket to which you export your snapshots.
     * @type string
     * @memberof CloudBackupsApigetExportBucket
     */
    exportBucketId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApigetExportBucket
     */
    envelope?: boolean
}

export interface CloudBackupsApiGetReplicaSetBackupRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApigetReplicaSetBackup
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof CloudBackupsApigetReplicaSetBackup
     */
    clusterName: string
    /**
     * Unique 24-hexadecimal digit string that identifies the desired snapshot.
     * @type string
     * @memberof CloudBackupsApigetReplicaSetBackup
     */
    snapshotId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApigetReplicaSetBackup
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudBackupsApigetReplicaSetBackup
     */
    pretty?: boolean
}

export interface CloudBackupsApiGetServerlessBackupRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApigetServerlessBackup
     */
    groupId: string
    /**
     * Human-readable label that identifies the serverless instance.
     * @type string
     * @memberof CloudBackupsApigetServerlessBackup
     */
    clusterName: string
    /**
     * Unique 24-hexadecimal digit string that identifies the desired snapshot.
     * @type string
     * @memberof CloudBackupsApigetServerlessBackup
     */
    snapshotId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApigetServerlessBackup
     */
    envelope?: boolean
}

export interface CloudBackupsApiGetServerlessBackupRestoreJobRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApigetServerlessBackupRestoreJob
     */
    groupId: string
    /**
     * Human-readable label that identifies the serverless instance.
     * @type string
     * @memberof CloudBackupsApigetServerlessBackupRestoreJob
     */
    clusterName: string
    /**
     * Unique 24-hexadecimal digit string that identifies the restore job to return.
     * @type string
     * @memberof CloudBackupsApigetServerlessBackupRestoreJob
     */
    restoreJobId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApigetServerlessBackupRestoreJob
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudBackupsApigetServerlessBackupRestoreJob
     */
    pretty?: boolean
}

export interface CloudBackupsApiGetShardedClusterBackupRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApigetShardedClusterBackup
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof CloudBackupsApigetShardedClusterBackup
     */
    clusterName: string
    /**
     * Unique 24-hexadecimal digit string that identifies the desired snapshot.
     * @type string
     * @memberof CloudBackupsApigetShardedClusterBackup
     */
    snapshotId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApigetShardedClusterBackup
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudBackupsApigetShardedClusterBackup
     */
    pretty?: boolean
}

export interface CloudBackupsApiListBackupExportJobsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApilistBackupExportJobs
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof CloudBackupsApilistBackupExportJobs
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApilistBackupExportJobs
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudBackupsApilistBackupExportJobs
     */
    pretty?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof CloudBackupsApilistBackupExportJobs
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof CloudBackupsApilistBackupExportJobs
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof CloudBackupsApilistBackupExportJobs
     */
    pageNum?: number
}

export interface CloudBackupsApiListBackupRestoreJobsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApilistBackupRestoreJobs
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster with the restore jobs you want to return.
     * @type string
     * @memberof CloudBackupsApilistBackupRestoreJobs
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApilistBackupRestoreJobs
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof CloudBackupsApilistBackupRestoreJobs
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof CloudBackupsApilistBackupRestoreJobs
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof CloudBackupsApilistBackupRestoreJobs
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudBackupsApilistBackupRestoreJobs
     */
    pretty?: boolean
}

export interface CloudBackupsApiListExportBucketsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApilistExportBuckets
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApilistExportBuckets
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudBackupsApilistExportBuckets
     */
    pretty?: boolean
}

export interface CloudBackupsApiListReplicaSetBackupsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApilistReplicaSetBackups
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof CloudBackupsApilistReplicaSetBackups
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApilistReplicaSetBackups
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof CloudBackupsApilistReplicaSetBackups
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof CloudBackupsApilistReplicaSetBackups
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof CloudBackupsApilistReplicaSetBackups
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudBackupsApilistReplicaSetBackups
     */
    pretty?: boolean
}

export interface CloudBackupsApiListServerlessBackupRestoreJobsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApilistServerlessBackupRestoreJobs
     */
    groupId: string
    /**
     * Human-readable label that identifies the serverless instance.
     * @type string
     * @memberof CloudBackupsApilistServerlessBackupRestoreJobs
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApilistServerlessBackupRestoreJobs
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudBackupsApilistServerlessBackupRestoreJobs
     */
    pretty?: boolean
}

export interface CloudBackupsApiListServerlessBackupsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApilistServerlessBackups
     */
    groupId: string
    /**
     * Human-readable label that identifies the serverless instance.
     * @type string
     * @memberof CloudBackupsApilistServerlessBackups
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApilistServerlessBackups
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudBackupsApilistServerlessBackups
     */
    pretty?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof CloudBackupsApilistServerlessBackups
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof CloudBackupsApilistServerlessBackups
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof CloudBackupsApilistServerlessBackups
     */
    pageNum?: number
}

export interface CloudBackupsApiListShardedClusterBackupsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApilistShardedClusterBackups
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof CloudBackupsApilistShardedClusterBackups
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApilistShardedClusterBackups
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudBackupsApilistShardedClusterBackups
     */
    pretty?: boolean
}

export interface CloudBackupsApiTakeSnapshotRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApitakeSnapshot
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof CloudBackupsApitakeSnapshot
     */
    clusterName: string
    /**
     * Takes one on-demand snapshot.
     * @type DiskBackupOnDemandSnapshotRequest
     * @memberof CloudBackupsApitakeSnapshot
     */
    diskBackupOnDemandSnapshotRequest: DiskBackupOnDemandSnapshotRequest
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApitakeSnapshot
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudBackupsApitakeSnapshot
     */
    pretty?: boolean
}

export interface CloudBackupsApiUpdateBackupScheduleRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApiupdateBackupSchedule
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof CloudBackupsApiupdateBackupSchedule
     */
    clusterName: string
    /**
     * Updates the cloud backup schedule for one cluster within the specified project.  **Note**: In the request body, provide only the fields that you want to update.
     * @type DiskBackupSnapshotSchedule
     * @memberof CloudBackupsApiupdateBackupSchedule
     */
    diskBackupSnapshotSchedule: DiskBackupSnapshotSchedule
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApiupdateBackupSchedule
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudBackupsApiupdateBackupSchedule
     */
    pretty?: boolean
}

export interface CloudBackupsApiUpdateDataProtectionSettingsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApiupdateDataProtectionSettings
     */
    groupId: string
    /**
     * The new Data Protection Policy settings.
     * @type DataProtectionSettings
     * @memberof CloudBackupsApiupdateDataProtectionSettings
     */
    dataProtectionSettings: DataProtectionSettings
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApiupdateDataProtectionSettings
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudBackupsApiupdateDataProtectionSettings
     */
    pretty?: boolean
}

export interface CloudBackupsApiUpdateSnapshotRetentionRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApiupdateSnapshotRetention
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof CloudBackupsApiupdateSnapshotRetention
     */
    clusterName: string
    /**
     * Unique 24-hexadecimal digit string that identifies the desired snapshot.
     * @type string
     * @memberof CloudBackupsApiupdateSnapshotRetention
     */
    snapshotId: string
    /**
     * Changes the expiration date for one cloud backup snapshot for one cluster in the specified project.
     * @type SnapshotRetention
     * @memberof CloudBackupsApiupdateSnapshotRetention
     */
    snapshotRetention: SnapshotRetention
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudBackupsApiupdateSnapshotRetention
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudBackupsApiupdateSnapshotRetention
     */
    pretty?: boolean
}

export class ObjectCloudBackupsApi {
    private api: ObservableCloudBackupsApi

    public constructor(configuration: Configuration, requestFactory?: CloudBackupsApiRequestFactory, responseProcessor?: CloudBackupsApiResponseProcessor) {
        this.api = new ObservableCloudBackupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Cancels one cloud backup restore job of one cluster from the specified project. To use this resource, the requesting API Key must have the Project Owner role and an entry for the project access list.
     * Cancel One Restore Job of One Cluster
     * @param param the request object
     */
    public cancelBackupRestoreJob(param: CloudBackupsApiCancelBackupRestoreJobRequest, options?: Configuration): Promise<void> {
        return this.api.cancelBackupRestoreJob(param.groupId, param.clusterName, param.restoreJobId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Exports one backup snapshot for dedicated Atlas cluster using Cloud Backups to an AWS bucket. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Create One Cloud Backup Snapshot Export Job
     * @param param the request object
     */
    public createBackupExportJob(param: CloudBackupsApiCreateBackupExportJobRequest, options?: Configuration): Promise<DiskBackupExportJob> {
        return this.api.createBackupExportJob(param.groupId, param.clusterName, param.diskBackupExportJobRequest, param.envelope,  options).toPromise();
    }

    /**
     * Restores one snapshot of one cluster from the specified project. To use this resource, the requesting API Key must have the Project Owner role and an entry for the project access list.
     * Restore One Snapshot of One Cluster
     * @param param the request object
     */
    public createBackupRestoreJob(param: CloudBackupsApiCreateBackupRestoreJobRequest, options?: Configuration): Promise<DiskBackupRestoreJob> {
        return this.api.createBackupRestoreJob(param.groupId, param.clusterName, param.diskBackupRestoreJob, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Grants MongoDB Cloud access to the specified AWS S3 bucket. This enables this bucket to receive Atlas Cloud Backup snapshots. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Grant Access to AWS S3 Bucket for Cloud Backup Snapshot Exports
     * @param param the request object
     */
    public createExportBucket(param: CloudBackupsApiCreateExportBucketRequest, options?: Configuration): Promise<DiskBackupSnapshotAWSExportBucket> {
        return this.api.createExportBucket(param.groupId, param.diskBackupSnapshotAWSExportBucket, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Restores one snapshot of one serverless instance from the specified project. To use this resource, the requesting API Key must have the Project Owner role and an entry for the project access list.
     * Restore One Snapshot of One Serverless Instance
     * @param param the request object
     */
    public createServerlessBackupRestoreJob(param: CloudBackupsApiCreateServerlessBackupRestoreJobRequest, options?: Configuration): Promise<ServerlessBackupRestoreJob> {
        return this.api.createServerlessBackupRestoreJob(param.groupId, param.clusterName, param.serverlessBackupRestoreJob, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Removes all cloud backup schedules for the specified cluster. This schedule defines when MongoDB Cloud takes scheduled snapshots and how long it stores those snapshots. To use this resource, the requesting API Key must have the Project Atlas Admin role and an entry for the project access list.
     * Remove All Cloud Backup Schedules
     * @param param the request object
     */
    public deleteAllBackupSchedules(param: CloudBackupsApiDeleteAllBackupSchedulesRequest, options?: Configuration): Promise<DiskBackupSnapshotSchedule> {
        return this.api.deleteAllBackupSchedules(param.groupId, param.clusterName, param.envelope,  options).toPromise();
    }

    /**
     * Revoke MongoDB Cloud access to the specified AWS S3 bucket. This prevents this bucket to receive Atlas Cloud Backup snapshots. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Revoke Access to AWS S3 Bucket for Cloud Backup Snapshot Exports
     * @param param the request object
     */
    public deleteExportBucket(param: CloudBackupsApiDeleteExportBucketRequest, options?: Configuration): Promise<void> {
        return this.api.deleteExportBucket(param.groupId, param.exportBucketId, param.envelope,  options).toPromise();
    }

    /**
     * Removes the specified snapshot. To use this resource, the requesting API Key must have the Project Owner role and an entry for the project access list.
     * Remove One Replica Set Cloud Backup
     * @param param the request object
     */
    public deleteReplicaSetBackup(param: CloudBackupsApiDeleteReplicaSetBackupRequest, options?: Configuration): Promise<void> {
        return this.api.deleteReplicaSetBackup(param.groupId, param.clusterName, param.snapshotId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Removes one snapshot of one sharded cluster from the specified project. To use this resource, the requesting API Key must have the Project Owner role and an entry for the project access list.
     * Remove One Sharded Cluster Cloud Backup
     * @param param the request object
     */
    public deleteShardedClusterBackup(param: CloudBackupsApiDeleteShardedClusterBackupRequest, options?: Configuration): Promise<void> {
        return this.api.deleteShardedClusterBackup(param.groupId, param.clusterName, param.snapshotId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns one Cloud Backup snapshot export job associated with the specified Atlas cluster. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Return One Cloud Backup Snapshot Export Job
     * @param param the request object
     */
    public getBackupExportJob(param: CloudBackupsApiGetBackupExportJobRequest, options?: Configuration): Promise<DiskBackupExportJob> {
        return this.api.getBackupExportJob(param.groupId, param.clusterName, param.exportId, param.envelope,  options).toPromise();
    }

    /**
     * Returns one cloud backup restore job for one cluster from the specified project. To use this resource, the requesting API Key must have the Project Owner role and an entry for the project access list.
     * Return One Restore Job of One Cluster
     * @param param the request object
     */
    public getBackupRestoreJob(param: CloudBackupsApiGetBackupRestoreJobRequest, options?: Configuration): Promise<DiskBackupRestoreJob> {
        return this.api.getBackupRestoreJob(param.groupId, param.clusterName, param.restoreJobId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the cloud backup schedule for the specified cluster within the specified project. This schedule defines when MongoDB Cloud takes scheduled snapshots and how long it stores those snapshots. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Cloud Backup Schedule
     * @param param the request object
     */
    public getBackupSchedule(param: CloudBackupsApiGetBackupScheduleRequest, options?: Configuration): Promise<DiskBackupSnapshotSchedule> {
        return this.api.getBackupSchedule(param.groupId, param.clusterName, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the Data Protection Policy settings with the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return the Data Protection Policy settings
     * @param param the request object
     */
    public getDataProtectionSettings(param: CloudBackupsApiGetDataProtectionSettingsRequest, options?: Configuration): Promise<DataProtectionSettings> {
        return this.api.getDataProtectionSettings(param.groupId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns one AWS S3 bucket associated with the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One AWS S3 Bucket Used for Cloud Backup Snapshot Exports
     * @param param the request object
     */
    public getExportBucket(param: CloudBackupsApiGetExportBucketRequest, options?: Configuration): Promise<DiskBackupSnapshotAWSExportBucket> {
        return this.api.getExportBucket(param.groupId, param.exportBucketId, param.envelope,  options).toPromise();
    }

    /**
     * Returns one snapshot from the specified cluster. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Replica Set Cloud Backup
     * @param param the request object
     */
    public getReplicaSetBackup(param: CloudBackupsApiGetReplicaSetBackupRequest, options?: Configuration): Promise<DiskBackupReplicaSet> {
        return this.api.getReplicaSetBackup(param.groupId, param.clusterName, param.snapshotId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns one snapshot of one serverless instance from the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Snapshot of One Serverless Instance
     * @param param the request object
     */
    public getServerlessBackup(param: CloudBackupsApiGetServerlessBackupRequest, options?: Configuration): Promise<ServerlessBackupSnapshot> {
        return this.api.getServerlessBackup(param.groupId, param.clusterName, param.snapshotId, param.envelope,  options).toPromise();
    }

    /**
     * Returns one restore job for one serverless instance from the specified project. To use this resource, the requesting API Key must have the Project Owner role and an entry for the project access list.
     * Return One Restore Job for One Serverless Instance
     * @param param the request object
     */
    public getServerlessBackupRestoreJob(param: CloudBackupsApiGetServerlessBackupRestoreJobRequest, options?: Configuration): Promise<ServerlessBackupRestoreJob> {
        return this.api.getServerlessBackupRestoreJob(param.groupId, param.clusterName, param.restoreJobId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns one snapshot of one sharded cluster from the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Sharded Cluster Cloud Backup
     * @param param the request object
     */
    public getShardedClusterBackup(param: CloudBackupsApiGetShardedClusterBackupRequest, options?: Configuration): Promise<DiskBackupShardedClusterSnapshot> {
        return this.api.getShardedClusterBackup(param.groupId, param.clusterName, param.snapshotId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns all Cloud Backup snapshot export jobs associated with the specified Atlas cluster. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Return All Cloud Backup Snapshot Export Jobs
     * @param param the request object
     */
    public listBackupExportJobs(param: CloudBackupsApiListBackupExportJobsRequest, options?: Configuration): Promise<PaginatedApiAtlasDiskBackupExportJobView> {
        return this.api.listBackupExportJobs(param.groupId, param.clusterName, param.envelope, param.pretty, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Returns all cloud backup restore jobs for one cluster from the specified project. To use this resource, the requesting API Key must have the Project Owner role and an entry for the project access list.
     * Return All Restore Jobs for One Cluster
     * @param param the request object
     */
    public listBackupRestoreJobs(param: CloudBackupsApiListBackupRestoreJobsRequest, options?: Configuration): Promise<PaginatedCloudBackupRestoreJobView> {
        return this.api.listBackupRestoreJobs(param.groupId, param.clusterName, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

    /**
     * Returns all AWS S3 buckets associated with the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All AWS S3 Buckets Used for Cloud Backup Snapshot Exports
     * @param param the request object
     */
    public listExportBuckets(param: CloudBackupsApiListExportBucketsRequest, options?: Configuration): Promise<PaginatedBackupSnapshotExportBucketView> {
        return this.api.listExportBuckets(param.groupId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns all snapshots of one cluster from the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Replica Set Cloud Backups
     * @param param the request object
     */
    public listReplicaSetBackups(param: CloudBackupsApiListReplicaSetBackupsRequest, options?: Configuration): Promise<PaginatedCloudBackupReplicaSetView> {
        return this.api.listReplicaSetBackups(param.groupId, param.clusterName, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

    /**
     * Returns all restore jobs for one serverless instance from the specified project. To use this resource, the requesting API Key must have the Project Owner role and an entry for the project access list.
     * Return All Restore Jobs for One Serverless Instance
     * @param param the request object
     */
    public listServerlessBackupRestoreJobs(param: CloudBackupsApiListServerlessBackupRestoreJobsRequest, options?: Configuration): Promise<PaginatedApiAtlasServerlessBackupRestoreJobView> {
        return this.api.listServerlessBackupRestoreJobs(param.groupId, param.clusterName, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns all snapshots of one serverless instance from the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Snapshots of One Serverless Instance
     * @param param the request object
     */
    public listServerlessBackups(param: CloudBackupsApiListServerlessBackupsRequest, options?: Configuration): Promise<PaginatedApiAtlasServerlessBackupSnapshotView> {
        return this.api.listServerlessBackups(param.groupId, param.clusterName, param.envelope, param.pretty, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Returns all snapshots of one sharded cluster from the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Sharded Cluster Cloud Backups
     * @param param the request object
     */
    public listShardedClusterBackups(param: CloudBackupsApiListShardedClusterBackupsRequest, options?: Configuration): Promise<PaginatedCloudBackupShardedClusterSnapshotView> {
        return this.api.listShardedClusterBackups(param.groupId, param.clusterName, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Takes one on-demand snapshot for the specified cluster. To use this resource, the requesting API Key must have the Project Owner role and an entry for the project access list.
     * Take One On-Demand Snapshot
     * @param param the request object
     */
    public takeSnapshot(param: CloudBackupsApiTakeSnapshotRequest, options?: Configuration): Promise<DiskBackupSnapshot> {
        return this.api.takeSnapshot(param.groupId, param.clusterName, param.diskBackupOnDemandSnapshotRequest, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Updates the cloud backup schedule for one cluster within the specified project. This schedule defines when MongoDB Cloud takes scheduled snapshots and how long it stores those snapshots. To use this resource, the requesting API Key must have the Project Owner role and an entry for the project access list.
     * Update Cloud Backup Schedule for One Cluster
     * @param param the request object
     */
    public updateBackupSchedule(param: CloudBackupsApiUpdateBackupScheduleRequest, options?: Configuration): Promise<DiskBackupSnapshotSchedule> {
        return this.api.updateBackupSchedule(param.groupId, param.clusterName, param.diskBackupSnapshotSchedule, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Updates the Data Protection Policy settings for the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Update or enable the Data Protection Policy settings
     * @param param the request object
     */
    public updateDataProtectionSettings(param: CloudBackupsApiUpdateDataProtectionSettingsRequest, options?: Configuration): Promise<DataProtectionSettings> {
        return this.api.updateDataProtectionSettings(param.groupId, param.dataProtectionSettings, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Changes the expiration date for one cloud backup snapshot for one cluster in the specified project. This resource doesn't require the API Key to have an Access List.
     * Change Expiration Date for One Cloud Backup
     * @param param the request object
     */
    public updateSnapshotRetention(param: CloudBackupsApiUpdateSnapshotRetentionRequest, options?: Configuration): Promise<DiskBackupReplicaSet> {
        return this.api.updateSnapshotRetention(param.groupId, param.clusterName, param.snapshotId, param.snapshotRetention, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableCloudMigrationServiceApi } from "./ObservableAPI";
import { CloudMigrationServiceApiRequestFactory, CloudMigrationServiceApiResponseProcessor} from "../apis/CloudMigrationServiceApi";

export interface CloudMigrationServiceApiCreateLinkTokenRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof CloudMigrationServiceApicreateLinkToken
     */
    orgId: string
    /**
     * IP address access list entries associated with the migration.
     * @type TargetOrgRequestView
     * @memberof CloudMigrationServiceApicreateLinkToken
     */
    targetOrgRequestView: TargetOrgRequestView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudMigrationServiceApicreateLinkToken
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudMigrationServiceApicreateLinkToken
     */
    pretty?: boolean
}

export interface CloudMigrationServiceApiCreatePushMigrationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudMigrationServiceApicreatePushMigration
     */
    groupId: string
    /**
     * One migration to be created.
     * @type LiveMigrationRequestView
     * @memberof CloudMigrationServiceApicreatePushMigration
     */
    liveMigrationRequestView: LiveMigrationRequestView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudMigrationServiceApicreatePushMigration
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudMigrationServiceApicreatePushMigration
     */
    pretty?: boolean
}

export interface CloudMigrationServiceApiCutoverMigrationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudMigrationServiceApicutoverMigration
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the migration.
     * @type string
     * @memberof CloudMigrationServiceApicutoverMigration
     */
    liveMigrationId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudMigrationServiceApicutoverMigration
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudMigrationServiceApicutoverMigration
     */
    pretty?: boolean
}

export interface CloudMigrationServiceApiDeleteLinkTokenRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof CloudMigrationServiceApideleteLinkToken
     */
    orgId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudMigrationServiceApideleteLinkToken
     */
    envelope?: boolean
}

export interface CloudMigrationServiceApiGetPushMigrationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudMigrationServiceApigetPushMigration
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the migration.
     * @type string
     * @memberof CloudMigrationServiceApigetPushMigration
     */
    liveMigrationId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudMigrationServiceApigetPushMigration
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudMigrationServiceApigetPushMigration
     */
    pretty?: boolean
}

export interface CloudMigrationServiceApiGetValidationStatusRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudMigrationServiceApigetValidationStatus
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the validation job.
     * @type string
     * @memberof CloudMigrationServiceApigetValidationStatus
     */
    validationId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudMigrationServiceApigetValidationStatus
     */
    envelope?: boolean
}

export interface CloudMigrationServiceApiListSourceProjectsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof CloudMigrationServiceApilistSourceProjects
     */
    orgId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudMigrationServiceApilistSourceProjects
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudMigrationServiceApilistSourceProjects
     */
    pretty?: boolean
}

export interface CloudMigrationServiceApiValidateMigrationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudMigrationServiceApivalidateMigration
     */
    groupId: string
    /**
     * One migration to be validated.
     * @type LiveMigrationRequestView
     * @memberof CloudMigrationServiceApivalidateMigration
     */
    liveMigrationRequestView: LiveMigrationRequestView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudMigrationServiceApivalidateMigration
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudMigrationServiceApivalidateMigration
     */
    pretty?: boolean
}

export class ObjectCloudMigrationServiceApi {
    private api: ObservableCloudMigrationServiceApi

    public constructor(configuration: Configuration, requestFactory?: CloudMigrationServiceApiRequestFactory, responseProcessor?: CloudMigrationServiceApiResponseProcessor) {
        this.api = new ObservableCloudMigrationServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create one link-token that contains all the information required to complete the link.
     * Create One Link-Token
     * @param param the request object
     */
    public createLinkToken(param: CloudMigrationServiceApiCreateLinkTokenRequest, options?: Configuration): Promise<TargetOrgView> {
        return this.api.createLinkToken(param.orgId, param.targetOrgRequestView, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Migrate one cluster that Cloud or Ops Manager manages to MongoDB Atlas.   Please make sure to [validate](#tag/Cloud-Migration-Service/operation/validateMigration) your migration before initiating it.
     * Migrate One Local Managed Cluster to MongoDB Atlas
     * @param param the request object
     */
    public createPushMigration(param: CloudMigrationServiceApiCreatePushMigrationRequest, options?: Configuration): Promise<LiveMigrationResponseView> {
        return this.api.createPushMigration(param.groupId, param.liveMigrationRequestView, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Cut over the migrated cluster to MongoDB Cloud. Confirm when the cut over completes. When the cut over completes, MongoDB Cloud completes the live migration process and stops synchronizing with the source cluster.
     * Cut Over the Migrated Cluster
     * @param param the request object
     */
    public cutoverMigration(param: CloudMigrationServiceApiCutoverMigrationRequest, options?: Configuration): Promise<void> {
        return this.api.cutoverMigration(param.groupId, param.liveMigrationId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Remove one organization link and its associated public API key.
     * Remove One Link-Token
     * @param param the request object
     */
    public deleteLinkToken(param: CloudMigrationServiceApiDeleteLinkTokenRequest, options?: Configuration): Promise<void> {
        return this.api.deleteLinkToken(param.orgId, param.envelope,  options).toPromise();
    }

    /**
     * Return details of one cluster migration job.
     * Return One Migration Job
     * @param param the request object
     */
    public getPushMigration(param: CloudMigrationServiceApiGetPushMigrationRequest, options?: Configuration): Promise<LiveMigrationResponseView> {
        return this.api.getPushMigration(param.groupId, param.liveMigrationId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Return the status of one migration validation job.
     * Return One Migration Validation Job
     * @param param the request object
     */
    public getValidationStatus(param: CloudMigrationServiceApiGetValidationStatusRequest, options?: Configuration): Promise<ValidationView> {
        return this.api.getValidationStatus(param.groupId, param.validationId, param.envelope,  options).toPromise();
    }

    /**
     * Return all projects that you can migrate to the specified organization.
     * Return All Projects Available for Migration
     * @param param the request object
     */
    public listSourceProjects(param: CloudMigrationServiceApiListSourceProjectsRequest, options?: Configuration): Promise<Array<AvailableProjectView>> {
        return this.api.listSourceProjects(param.orgId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Check whether the provided credentials, available disk space, MongoDB versions, and so on meet the requirements of the migration request. If the check passes, the migration can proceed.
     * Validate One Migration Request
     * @param param the request object
     */
    public validateMigration(param: CloudMigrationServiceApiValidateMigrationRequest, options?: Configuration): Promise<ValidationView> {
        return this.api.validateMigration(param.groupId, param.liveMigrationRequestView, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableCloudProviderAccessApi } from "./ObservableAPI";
import { CloudProviderAccessApiRequestFactory, CloudProviderAccessApiResponseProcessor} from "../apis/CloudProviderAccessApi";

export interface CloudProviderAccessApiAuthorizeCloudProviderAccessRoleRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudProviderAccessApiauthorizeCloudProviderAccessRole
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the role.
     * @type string
     * @memberof CloudProviderAccessApiauthorizeCloudProviderAccessRole
     */
    roleId: string
    /**
     * Grants access to the specified project for the specified AWS IAM role.
     * @type CloudProviderAccessRole
     * @memberof CloudProviderAccessApiauthorizeCloudProviderAccessRole
     */
    cloudProviderAccessRole: CloudProviderAccessRole
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudProviderAccessApiauthorizeCloudProviderAccessRole
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudProviderAccessApiauthorizeCloudProviderAccessRole
     */
    pretty?: boolean
}

export interface CloudProviderAccessApiCreateCloudProviderAccessRoleRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudProviderAccessApicreateCloudProviderAccessRole
     */
    groupId: string
    /**
     * Creates one AWS IAM role.
     * @type CloudProviderAccessRole
     * @memberof CloudProviderAccessApicreateCloudProviderAccessRole
     */
    cloudProviderAccessRole: CloudProviderAccessRole
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudProviderAccessApicreateCloudProviderAccessRole
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudProviderAccessApicreateCloudProviderAccessRole
     */
    pretty?: boolean
}

export interface CloudProviderAccessApiDeauthorizeCloudProviderAccessRoleRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudProviderAccessApideauthorizeCloudProviderAccessRole
     */
    groupId: string
    /**
     * Human-readable label that identifies the cloud provider of the role to deauthorize.
     * @type &#39;AWS&#39;
     * @memberof CloudProviderAccessApideauthorizeCloudProviderAccessRole
     */
    cloudProvider: 'AWS'
    /**
     * Unique 24-hexadecimal digit string that identifies the role.
     * @type string
     * @memberof CloudProviderAccessApideauthorizeCloudProviderAccessRole
     */
    roleId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudProviderAccessApideauthorizeCloudProviderAccessRole
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudProviderAccessApideauthorizeCloudProviderAccessRole
     */
    pretty?: boolean
}

export interface CloudProviderAccessApiGetCloudProviderAccessRoleRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudProviderAccessApigetCloudProviderAccessRole
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the role.
     * @type string
     * @memberof CloudProviderAccessApigetCloudProviderAccessRole
     */
    roleId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudProviderAccessApigetCloudProviderAccessRole
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudProviderAccessApigetCloudProviderAccessRole
     */
    pretty?: boolean
}

export interface CloudProviderAccessApiListCloudProviderAccessRolesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudProviderAccessApilistCloudProviderAccessRoles
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CloudProviderAccessApilistCloudProviderAccessRoles
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CloudProviderAccessApilistCloudProviderAccessRoles
     */
    pretty?: boolean
}

export class ObjectCloudProviderAccessApi {
    private api: ObservableCloudProviderAccessApi

    public constructor(configuration: Configuration, requestFactory?: CloudProviderAccessApiRequestFactory, responseProcessor?: CloudProviderAccessApiResponseProcessor) {
        this.api = new ObservableCloudProviderAccessApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Grants access to the specified project for the specified Amazon Web Services (AWS) Identity and Access Management (IAM) role. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List. This API endpoint is one step in a procedure to create unified AWS access for MongoDB Cloud services.
     * Authorize One Cloud Provider Access Role
     * @param param the request object
     */
    public authorizeCloudProviderAccessRole(param: CloudProviderAccessApiAuthorizeCloudProviderAccessRoleRequest, options?: Configuration): Promise<CloudProviderAccessRole> {
        return this.api.authorizeCloudProviderAccessRole(param.groupId, param.roleId, param.cloudProviderAccessRole, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Creates one Amazon Web Services (AWS) Identity and Access Management (IAM) role. Some MongoDB Cloud features use AWS IAM roles for authentication. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.  After a successful request to this API endpoint, you can add the **atlasAWSAccountArn** and **atlasAssumedRoleExternalId** values to the trust policy in your AWS console to create an IAM Assumed Amazon Resource Name (ARN).
     * Create One Cloud Provider Access Role
     * @param param the request object
     */
    public createCloudProviderAccessRole(param: CloudProviderAccessApiCreateCloudProviderAccessRoleRequest, options?: Configuration): Promise<CloudProviderAccessRole> {
        return this.api.createCloudProviderAccessRole(param.groupId, param.cloudProviderAccessRole, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Revokes access to the specified project for the specified AWS IAM role. To use this resource,the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Deauthorize One Cloud Provider Access Role
     * @param param the request object
     */
    public deauthorizeCloudProviderAccessRole(param: CloudProviderAccessApiDeauthorizeCloudProviderAccessRoleRequest, options?: Configuration): Promise<void> {
        return this.api.deauthorizeCloudProviderAccessRole(param.groupId, param.cloudProvider, param.roleId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the Amazon Web Services (AWS) Identity and Access Management (IAM) role with the specified id and with access to the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Return specified Cloud Provider Access Role
     * @param param the request object
     */
    public getCloudProviderAccessRole(param: CloudProviderAccessApiGetCloudProviderAccessRoleRequest, options?: Configuration): Promise<CloudProviderAccess> {
        return this.api.getCloudProviderAccessRole(param.groupId, param.roleId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns all Amazon Web Services (AWS) Identity and Access Management (IAM) roles with access to the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Return All Cloud Provider Access Roles
     * @param param the request object
     */
    public listCloudProviderAccessRoles(param: CloudProviderAccessApiListCloudProviderAccessRolesRequest, options?: Configuration): Promise<CloudProviderAccess> {
        return this.api.listCloudProviderAccessRoles(param.groupId, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableClusterOutageSimulationApi } from "./ObservableAPI";
import { ClusterOutageSimulationApiRequestFactory, ClusterOutageSimulationApiResponseProcessor} from "../apis/ClusterOutageSimulationApi";

export interface ClusterOutageSimulationApiEndOutageSimulationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ClusterOutageSimulationApiendOutageSimulation
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster that is undergoing outage simulation.
     * @type string
     * @memberof ClusterOutageSimulationApiendOutageSimulation
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ClusterOutageSimulationApiendOutageSimulation
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ClusterOutageSimulationApiendOutageSimulation
     */
    pretty?: boolean
}

export interface ClusterOutageSimulationApiGetOutageSimulationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ClusterOutageSimulationApigetOutageSimulation
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster that is undergoing outage simulation.
     * @type string
     * @memberof ClusterOutageSimulationApigetOutageSimulation
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ClusterOutageSimulationApigetOutageSimulation
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ClusterOutageSimulationApigetOutageSimulation
     */
    pretty?: boolean
}

export interface ClusterOutageSimulationApiStartOutageSimulationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ClusterOutageSimulationApistartOutageSimulation
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster to undergo an outage simulation.
     * @type string
     * @memberof ClusterOutageSimulationApistartOutageSimulation
     */
    clusterName: string
    /**
     * Describes the outage simulation.
     * @type ClusterOutageSimulation
     * @memberof ClusterOutageSimulationApistartOutageSimulation
     */
    clusterOutageSimulation: ClusterOutageSimulation
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ClusterOutageSimulationApistartOutageSimulation
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ClusterOutageSimulationApistartOutageSimulation
     */
    pretty?: boolean
}

export class ObjectClusterOutageSimulationApi {
    private api: ObservableClusterOutageSimulationApi

    public constructor(configuration: Configuration, requestFactory?: ClusterOutageSimulationApiRequestFactory, responseProcessor?: ClusterOutageSimulationApiResponseProcessor) {
        this.api = new ObservableClusterOutageSimulationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Ends a cluster outage simulation.
     * End an Outage Simulation
     * @param param the request object
     */
    public endOutageSimulation(param: ClusterOutageSimulationApiEndOutageSimulationRequest, options?: Configuration): Promise<ClusterOutageSimulation> {
        return this.api.endOutageSimulation(param.groupId, param.clusterName, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns one outage simulation for one cluster.
     * Return One Outage Simulation
     * @param param the request object
     */
    public getOutageSimulation(param: ClusterOutageSimulationApiGetOutageSimulationRequest, options?: Configuration): Promise<ClusterOutageSimulation> {
        return this.api.getOutageSimulation(param.groupId, param.clusterName, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Starts a cluster outage simulation.
     * Start an Outage Simulation
     * @param param the request object
     */
    public startOutageSimulation(param: ClusterOutageSimulationApiStartOutageSimulationRequest, options?: Configuration): Promise<ClusterOutageSimulation> {
        return this.api.startOutageSimulation(param.groupId, param.clusterName, param.clusterOutageSimulation, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableClustersApi } from "./ObservableAPI";
import { ClustersApiRequestFactory, ClustersApiResponseProcessor} from "../apis/ClustersApi";

export interface ClustersApiGetClusterAdvancedConfigurationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ClustersApigetClusterAdvancedConfiguration
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof ClustersApigetClusterAdvancedConfiguration
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ClustersApigetClusterAdvancedConfiguration
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ClustersApigetClusterAdvancedConfiguration
     */
    pretty?: boolean
}

export interface ClustersApiGetClusterStatusRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ClustersApigetClusterStatus
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof ClustersApigetClusterStatus
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ClustersApigetClusterStatus
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ClustersApigetClusterStatus
     */
    pretty?: boolean
}

export interface ClustersApiGetSampleDatasetLoadStatusRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ClustersApigetSampleDatasetLoadStatus
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the loaded sample dataset.
     * @type string
     * @memberof ClustersApigetSampleDatasetLoadStatus
     */
    sampleDatasetId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ClustersApigetSampleDatasetLoadStatus
     */
    envelope?: boolean
}

export interface ClustersApiListCloudProviderRegionsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ClustersApilistCloudProviderRegions
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ClustersApilistCloudProviderRegions
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof ClustersApilistCloudProviderRegions
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof ClustersApilistCloudProviderRegions
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof ClustersApilistCloudProviderRegions
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ClustersApilistCloudProviderRegions
     */
    pretty?: boolean
    /**
     * Cloud providers whose regions to retrieve. When you specify multiple providers, the response can return only tiers and regions that support multi-cloud clusters.
     * @type Array&lt;string&gt;
     * @memberof ClustersApilistCloudProviderRegions
     */
    providers?: Array<string>
    /**
     * Cluster tier for which to retrieve the regions.
     * @type string
     * @memberof ClustersApilistCloudProviderRegions
     */
    tier?: string
}

export interface ClustersApiListClustersForAllProjectsRequest {
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ClustersApilistClustersForAllProjects
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof ClustersApilistClustersForAllProjects
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof ClustersApilistClustersForAllProjects
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof ClustersApilistClustersForAllProjects
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ClustersApilistClustersForAllProjects
     */
    pretty?: boolean
}

export interface ClustersApiLoadSampleDatasetRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ClustersApiloadSampleDataset
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster into which you load the sample dataset.
     * @type string
     * @memberof ClustersApiloadSampleDataset
     */
    name: string
    /**
     * Cluster into which to load the sample dataset.
     * @type SampleDatasetStatus
     * @memberof ClustersApiloadSampleDataset
     */
    sampleDatasetStatus: SampleDatasetStatus
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ClustersApiloadSampleDataset
     */
    envelope?: boolean
}

export interface ClustersApiUpdateClusterAdvancedConfigurationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ClustersApiupdateClusterAdvancedConfiguration
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof ClustersApiupdateClusterAdvancedConfiguration
     */
    clusterName: string
    /**
     * Advanced configuration details to add for one cluster in the specified project.
     * @type ClusterDescriptionProcessArgs
     * @memberof ClustersApiupdateClusterAdvancedConfiguration
     */
    clusterDescriptionProcessArgs: ClusterDescriptionProcessArgs
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ClustersApiupdateClusterAdvancedConfiguration
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ClustersApiupdateClusterAdvancedConfiguration
     */
    pretty?: boolean
}

export interface ClustersApiUpgradeSharedClusterRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ClustersApiupgradeSharedCluster
     */
    groupId: string
    /**
     * Details of the shared-tier cluster upgrade in the specified project.
     * @type LegacyClusterDescription
     * @memberof ClustersApiupgradeSharedCluster
     */
    legacyClusterDescription: LegacyClusterDescription
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ClustersApiupgradeSharedCluster
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ClustersApiupgradeSharedCluster
     */
    pretty?: boolean
}

export interface ClustersApiUpgradeSharedClusterToServerlessRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ClustersApiupgradeSharedClusterToServerless
     */
    groupId: string
    /**
     * Details of the shared-tier cluster upgrade in the specified project.
     * @type ServerlessInstanceDescription
     * @memberof ClustersApiupgradeSharedClusterToServerless
     */
    serverlessInstanceDescription: ServerlessInstanceDescription
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ClustersApiupgradeSharedClusterToServerless
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ClustersApiupgradeSharedClusterToServerless
     */
    pretty?: boolean
}

export class ObjectClustersApi {
    private api: ObservableClustersApi

    public constructor(configuration: Configuration, requestFactory?: ClustersApiRequestFactory, responseProcessor?: ClustersApiResponseProcessor) {
        this.api = new ObservableClustersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the advanced configuration details for one cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. Advanced configuration details include the read/write concern, index and oplog limits, and other database settings.  Shared-tier clusters can't use this resource.  To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Advanced Configuration Options for One Cluster
     * @param param the request object
     */
    public getClusterAdvancedConfiguration(param: ClustersApiGetClusterAdvancedConfigurationRequest, options?: Configuration): Promise<ClusterDescriptionProcessArgs> {
        return this.api.getClusterAdvancedConfiguration(param.groupId, param.clusterName, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the status of all changes that you made to the specified cluster in the specified project. Use this resource to check the progress MongoDB Cloud has made in processing your changes. The response does not include the deployment of new dedicated clusters. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Status of All Cluster Operations
     * @param param the request object
     */
    public getClusterStatus(param: ClustersApiGetClusterStatusRequest, options?: Configuration): Promise<ClusterStatus> {
        return this.api.getClusterStatus(param.groupId, param.clusterName, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Checks the progress of loading the sample dataset into one cluster. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Check Status of Cluster Sample Dataset Request
     * @param param the request object
     */
    public getSampleDatasetLoadStatus(param: ClustersApiGetSampleDatasetLoadStatusRequest, options?: Configuration): Promise<SampleDatasetStatus> {
        return this.api.getSampleDatasetLoadStatus(param.groupId, param.sampleDatasetId, param.envelope,  options).toPromise();
    }

    /**
     * Returns the list of regions available for the specified cloud provider at the specified tier. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Cloud Provider Regions
     * @param param the request object
     */
    public listCloudProviderRegions(param: ClustersApiListCloudProviderRegionsRequest, options?: Configuration): Promise<PaginatedApiAtlasProviderRegionsView> {
        return this.api.listCloudProviderRegions(param.groupId, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty, param.providers, param.tier,  options).toPromise();
    }

    /**
     * Returns the details for all clusters in all projects to which you have access. Clusters contain a group of hosts that maintain the same data set. The response does not include multi-cloud clusters. To use this resource, the requesting API Key can have any cluster-level role. This resource doesn't require the API Key to have an Access List.
     * Return All Authorized Clusters in All Projects
     * @param param the request object
     */
    public listClustersForAllProjects(param: ClustersApiListClustersForAllProjectsRequest = {}, options?: Configuration): Promise<PaginatedOrgGroupView> {
        return this.api.listClustersForAllProjects(param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

    /**
     * Requests loading the MongoDB sample dataset into the specified cluster. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Load Sample Dataset Request into Cluster
     * @param param the request object
     */
    public loadSampleDataset(param: ClustersApiLoadSampleDatasetRequest, options?: Configuration): Promise<Array<SampleDatasetStatus>> {
        return this.api.loadSampleDataset(param.groupId, param.name, param.sampleDatasetStatus, param.envelope,  options).toPromise();
    }

    /**
     * Updates the advanced configuration details for one cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. Advanced configuration details include the read/write concern, index and oplog limits, and other database settings. To use this resource, the requesting API Key must have the Project Cluster Manager role. This resource doesn't require the API Key to have an Access List.
     * Update Advanced Configuration Options for One Cluster
     * @param param the request object
     */
    public updateClusterAdvancedConfiguration(param: ClustersApiUpdateClusterAdvancedConfigurationRequest, options?: Configuration): Promise<ClusterDescriptionProcessArgs> {
        return this.api.updateClusterAdvancedConfiguration(param.groupId, param.clusterName, param.clusterDescriptionProcessArgs, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Upgrade a shared-tier cluster in the specified project. To use this resource, the requesting API key must have the Project Cluster Manager role. This resource doesn't require the API key to have an Access List.
     * Upgrade One Shared-tier Cluster
     * @param param the request object
     */
    public upgradeSharedCluster(param: ClustersApiUpgradeSharedClusterRequest, options?: Configuration): Promise<LegacyClusterDescription> {
        return this.api.upgradeSharedCluster(param.groupId, param.legacyClusterDescription, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Upgrades a shared-tier cluster to a serverless instance in the specified project. To use this resource, the requesting API key must have the Project Cluster Manager role. This resource doesn't require the API key to have an Access List.
     * Upgrades One Shared-Tier Cluster to the Serverless Instance
     * @param param the request object
     */
    public upgradeSharedClusterToServerless(param: ClustersApiUpgradeSharedClusterToServerlessRequest, options?: Configuration): Promise<ServerlessInstanceDescription> {
        return this.api.upgradeSharedClusterToServerless(param.groupId, param.serverlessInstanceDescription, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableCustomDatabaseRolesApi } from "./ObservableAPI";
import { CustomDatabaseRolesApiRequestFactory, CustomDatabaseRolesApiResponseProcessor} from "../apis/CustomDatabaseRolesApi";

export interface CustomDatabaseRolesApiCreateCustomDatabaseRoleRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CustomDatabaseRolesApicreateCustomDatabaseRole
     */
    groupId: string
    /**
     * Creates one custom role in the specified project.
     * @type CustomDBRole
     * @memberof CustomDatabaseRolesApicreateCustomDatabaseRole
     */
    customDBRole: CustomDBRole
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CustomDatabaseRolesApicreateCustomDatabaseRole
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CustomDatabaseRolesApicreateCustomDatabaseRole
     */
    pretty?: boolean
}

export interface CustomDatabaseRolesApiDeleteCustomDatabaseRoleRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CustomDatabaseRolesApideleteCustomDatabaseRole
     */
    groupId: string
    /**
     * Human-readable label that identifies the role for the request. This name must be unique for this custom role in this project.
     * @type string
     * @memberof CustomDatabaseRolesApideleteCustomDatabaseRole
     */
    roleName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CustomDatabaseRolesApideleteCustomDatabaseRole
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CustomDatabaseRolesApideleteCustomDatabaseRole
     */
    pretty?: boolean
}

export interface CustomDatabaseRolesApiGetCustomDatabaseRoleRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CustomDatabaseRolesApigetCustomDatabaseRole
     */
    groupId: string
    /**
     * Human-readable label that identifies the role for the request. This name must be unique for this custom role in this project.
     * @type string
     * @memberof CustomDatabaseRolesApigetCustomDatabaseRole
     */
    roleName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CustomDatabaseRolesApigetCustomDatabaseRole
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CustomDatabaseRolesApigetCustomDatabaseRole
     */
    pretty?: boolean
}

export interface CustomDatabaseRolesApiListCustomDatabaseRolesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CustomDatabaseRolesApilistCustomDatabaseRoles
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CustomDatabaseRolesApilistCustomDatabaseRoles
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CustomDatabaseRolesApilistCustomDatabaseRoles
     */
    pretty?: boolean
}

export interface CustomDatabaseRolesApiUpdateCustomDatabaseRoleRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CustomDatabaseRolesApiupdateCustomDatabaseRole
     */
    groupId: string
    /**
     * Human-readable label that identifies the role for the request. This name must beunique for this custom role in this project.
     * @type string
     * @memberof CustomDatabaseRolesApiupdateCustomDatabaseRole
     */
    roleName: string
    /**
     * Updates one custom role in the specified project.
     * @type UpdateCustomDBRole
     * @memberof CustomDatabaseRolesApiupdateCustomDatabaseRole
     */
    updateCustomDBRole: UpdateCustomDBRole
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof CustomDatabaseRolesApiupdateCustomDatabaseRole
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof CustomDatabaseRolesApiupdateCustomDatabaseRole
     */
    pretty?: boolean
}

export class ObjectCustomDatabaseRolesApi {
    private api: ObservableCustomDatabaseRolesApi

    public constructor(configuration: Configuration, requestFactory?: CustomDatabaseRolesApiRequestFactory, responseProcessor?: CustomDatabaseRolesApiResponseProcessor) {
        this.api = new ObservableCustomDatabaseRolesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one custom role in the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Create One Custom Role
     * @param param the request object
     */
    public createCustomDatabaseRole(param: CustomDatabaseRolesApiCreateCustomDatabaseRoleRequest, options?: Configuration): Promise<CustomDBRole> {
        return this.api.createCustomDatabaseRole(param.groupId, param.customDBRole, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Removes one custom role from the specified project. You can't remove a custom role that would leave one or more child roles with no parent roles or actions. You also can't remove a custom role that would leave one or more database users without roles. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Remove One Custom Role from One Project
     * @param param the request object
     */
    public deleteCustomDatabaseRole(param: CustomDatabaseRolesApiDeleteCustomDatabaseRoleRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCustomDatabaseRole(param.groupId, param.roleName, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns one custom role for the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Custom Role in One Project
     * @param param the request object
     */
    public getCustomDatabaseRole(param: CustomDatabaseRolesApiGetCustomDatabaseRoleRequest, options?: Configuration): Promise<CustomDBRole> {
        return this.api.getCustomDatabaseRole(param.groupId, param.roleName, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns all custom roles for the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Custom Roles in One Project
     * @param param the request object
     */
    public listCustomDatabaseRoles(param: CustomDatabaseRolesApiListCustomDatabaseRolesRequest, options?: Configuration): Promise<Array<CustomDBRole>> {
        return this.api.listCustomDatabaseRoles(param.groupId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Updates one custom role in the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Update One Custom Role in One Project
     * @param param the request object
     */
    public updateCustomDatabaseRole(param: CustomDatabaseRolesApiUpdateCustomDatabaseRoleRequest, options?: Configuration): Promise<CustomDBRole> {
        return this.api.updateCustomDatabaseRole(param.groupId, param.roleName, param.updateCustomDBRole, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableDataFederationApi } from "./ObservableAPI";
import { DataFederationApiRequestFactory, DataFederationApiResponseProcessor} from "../apis/DataFederationApi";

export interface DataFederationApiCreateDataFederationPrivateEndpointRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataFederationApicreateDataFederationPrivateEndpoint
     */
    groupId: string
    /**
     * Private endpoint for Federated Database Instances and Online Archives to add to the specified project.
     * @type PrivateNetworkEndpointIdEntry
     * @memberof DataFederationApicreateDataFederationPrivateEndpoint
     */
    privateNetworkEndpointIdEntry: PrivateNetworkEndpointIdEntry
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataFederationApicreateDataFederationPrivateEndpoint
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof DataFederationApicreateDataFederationPrivateEndpoint
     */
    pretty?: boolean
}

export interface DataFederationApiCreateFederatedDatabaseRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataFederationApicreateFederatedDatabase
     */
    groupId: string
    /**
     * Details to create one federated database instance in the specified project.
     * @type DataLakeTenant
     * @memberof DataFederationApicreateFederatedDatabase
     */
    dataLakeTenant: DataLakeTenant
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataFederationApicreateFederatedDatabase
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof DataFederationApicreateFederatedDatabase
     */
    pretty?: boolean
    /**
     * Flag that indicates whether this request should check if the requesting IAM role can read from the S3 bucket. AWS checks if the role can list the objects in the bucket before writing to it. Some IAM roles only need write permissions. This flag allows you to skip that check.
     * @type boolean
     * @memberof DataFederationApicreateFederatedDatabase
     */
    skipRoleValidation?: boolean
}

export interface DataFederationApiCreateOneDataFederationQueryLimitRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataFederationApicreateOneDataFederationQueryLimit
     */
    groupId: string
    /**
     * Human-readable label that identifies the federated database instance to which the query limit applies.
     * @type string
     * @memberof DataFederationApicreateOneDataFederationQueryLimit
     */
    tenantName: string
    /**
     * Human-readable label that identifies this data federation instance limit.  | Limit Name | Description | Default | | --- | --- | --- | | bytesProcessed.query | Limit on the number of bytes processed during a single data federation query | N/A | | bytesProcessed.daily | Limit on the number of bytes processed for the data federation instance for the current day | N/A | | bytesProcessed.weekly | Limit on the number of bytes processed for the data federation instance for the current week | N/A | | bytesProcessed.monthly | Limit on the number of bytes processed for the data federation instance for the current month | N/A | 
     * @type &#39;bytesProcessed.query&#39; | &#39;bytesProcessed.daily&#39; | &#39;bytesProcessed.weekly&#39; | &#39;bytesProcessed.monthly&#39;
     * @memberof DataFederationApicreateOneDataFederationQueryLimit
     */
    limitName: 'bytesProcessed.query' | 'bytesProcessed.daily' | 'bytesProcessed.weekly' | 'bytesProcessed.monthly'
    /**
     * Creates or updates one query limit for one federated database instance.
     * @type DataFederationTenantQueryLimit
     * @memberof DataFederationApicreateOneDataFederationQueryLimit
     */
    dataFederationTenantQueryLimit: DataFederationTenantQueryLimit
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataFederationApicreateOneDataFederationQueryLimit
     */
    envelope?: boolean
}

export interface DataFederationApiDeleteDataFederationPrivateEndpointRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataFederationApideleteDataFederationPrivateEndpoint
     */
    groupId: string
    /**
     * Unique 22-character alphanumeric string that identifies the private endpoint to remove. Atlas Data Federation supports AWS private endpoints using the AWS PrivateLink feature.
     * @type string
     * @memberof DataFederationApideleteDataFederationPrivateEndpoint
     */
    endpointId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataFederationApideleteDataFederationPrivateEndpoint
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof DataFederationApideleteDataFederationPrivateEndpoint
     */
    pretty?: boolean
}

export interface DataFederationApiDeleteFederatedDatabaseRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataFederationApideleteFederatedDatabase
     */
    groupId: string
    /**
     * Human-readable label that identifies the federated database instance to remove.
     * @type string
     * @memberof DataFederationApideleteFederatedDatabase
     */
    tenantName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataFederationApideleteFederatedDatabase
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof DataFederationApideleteFederatedDatabase
     */
    pretty?: boolean
}

export interface DataFederationApiDeleteOneDataFederationInstanceQueryLimitRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataFederationApideleteOneDataFederationInstanceQueryLimit
     */
    groupId: string
    /**
     * Human-readable label that identifies the federated database instance to which the query limit applies.
     * @type string
     * @memberof DataFederationApideleteOneDataFederationInstanceQueryLimit
     */
    tenantName: string
    /**
     * Human-readable label that identifies this data federation instance limit.  | Limit Name | Description | Default | | --- | --- | --- | | bytesProcessed.query | Limit on the number of bytes processed during a single data federation query | N/A | | bytesProcessed.daily | Limit on the number of bytes processed for the data federation instance for the current day | N/A | | bytesProcessed.weekly | Limit on the number of bytes processed for the data federation instance for the current week | N/A | | bytesProcessed.monthly | Limit on the number of bytes processed for the data federation instance for the current month | N/A | 
     * @type &#39;bytesProcessed.query&#39; | &#39;bytesProcessed.daily&#39; | &#39;bytesProcessed.weekly&#39; | &#39;bytesProcessed.monthly&#39;
     * @memberof DataFederationApideleteOneDataFederationInstanceQueryLimit
     */
    limitName: 'bytesProcessed.query' | 'bytesProcessed.daily' | 'bytesProcessed.weekly' | 'bytesProcessed.monthly'
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataFederationApideleteOneDataFederationInstanceQueryLimit
     */
    envelope?: boolean
}

export interface DataFederationApiDownloadFederatedDatabaseQueryLogsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataFederationApidownloadFederatedDatabaseQueryLogs
     */
    groupId: string
    /**
     * Human-readable label that identifies the federated database instance for which you want to download query logs.
     * @type string
     * @memberof DataFederationApidownloadFederatedDatabaseQueryLogs
     */
    tenantName: string
    /**
     * Timestamp that specifies the end point for the range of log messages to download.  MongoDB Cloud expresses this timestamp in the number of seconds that have elapsed since the UNIX epoch.
     * @type number
     * @memberof DataFederationApidownloadFederatedDatabaseQueryLogs
     */
    endDate?: number
    /**
     * Timestamp that specifies the starting point for the range of log messages to download. MongoDB Cloud expresses this timestamp in the number of seconds that have elapsed since the UNIX epoch.
     * @type number
     * @memberof DataFederationApidownloadFederatedDatabaseQueryLogs
     */
    startDate?: number
}

export interface DataFederationApiGetDataFederationPrivateEndpointRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataFederationApigetDataFederationPrivateEndpoint
     */
    groupId: string
    /**
     * Unique 22-character alphanumeric string that identifies the private endpoint to return. Atlas Data Federation supports AWS private endpoints using the AWS PrivateLink feature.
     * @type string
     * @memberof DataFederationApigetDataFederationPrivateEndpoint
     */
    endpointId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataFederationApigetDataFederationPrivateEndpoint
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof DataFederationApigetDataFederationPrivateEndpoint
     */
    pretty?: boolean
}

export interface DataFederationApiGetFederatedDatabaseRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataFederationApigetFederatedDatabase
     */
    groupId: string
    /**
     * Human-readable label that identifies the Federated Database to return.
     * @type string
     * @memberof DataFederationApigetFederatedDatabase
     */
    tenantName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataFederationApigetFederatedDatabase
     */
    envelope?: boolean
}

export interface DataFederationApiListDataFederationPrivateEndpointsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataFederationApilistDataFederationPrivateEndpoints
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataFederationApilistDataFederationPrivateEndpoints
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof DataFederationApilistDataFederationPrivateEndpoints
     */
    pretty?: boolean
}

export interface DataFederationApiListFederatedDatabasesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataFederationApilistFederatedDatabases
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataFederationApilistFederatedDatabases
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof DataFederationApilistFederatedDatabases
     */
    pretty?: boolean
    /**
     * Type of Federated Database Instances to return.
     * @type &#39;USER&#39; | &#39;ONLINE_ARCHIVE&#39;
     * @memberof DataFederationApilistFederatedDatabases
     */
    type?: 'USER' | 'ONLINE_ARCHIVE'
}

export interface DataFederationApiReturnFederatedDatabaseQueryLimitRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataFederationApireturnFederatedDatabaseQueryLimit
     */
    groupId: string
    /**
     * Human-readable label that identifies the federated database instance to which the query limit applies.
     * @type string
     * @memberof DataFederationApireturnFederatedDatabaseQueryLimit
     */
    tenantName: string
    /**
     * Human-readable label that identifies this data federation instance limit.  | Limit Name | Description | Default | | --- | --- | --- | | bytesProcessed.query | Limit on the number of bytes processed during a single data federation query | N/A | | bytesProcessed.daily | Limit on the number of bytes processed for the data federation instance for the current day | N/A | | bytesProcessed.weekly | Limit on the number of bytes processed for the data federation instance for the current week | N/A | | bytesProcessed.monthly | Limit on the number of bytes processed for the data federation instance for the current month | N/A | 
     * @type &#39;bytesProcessed.query&#39; | &#39;bytesProcessed.daily&#39; | &#39;bytesProcessed.weekly&#39; | &#39;bytesProcessed.monthly&#39;
     * @memberof DataFederationApireturnFederatedDatabaseQueryLimit
     */
    limitName: 'bytesProcessed.query' | 'bytesProcessed.daily' | 'bytesProcessed.weekly' | 'bytesProcessed.monthly'
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataFederationApireturnFederatedDatabaseQueryLimit
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof DataFederationApireturnFederatedDatabaseQueryLimit
     */
    pretty?: boolean
}

export interface DataFederationApiReturnFederatedDatabaseQueryLimitsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataFederationApireturnFederatedDatabaseQueryLimits
     */
    groupId: string
    /**
     * Human-readable label that identifies the federated database instance for which you want to retrieve query limits.
     * @type string
     * @memberof DataFederationApireturnFederatedDatabaseQueryLimits
     */
    tenantName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataFederationApireturnFederatedDatabaseQueryLimits
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof DataFederationApireturnFederatedDatabaseQueryLimits
     */
    pretty?: boolean
}

export interface DataFederationApiUpdateFederatedDatabaseRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataFederationApiupdateFederatedDatabase
     */
    groupId: string
    /**
     * Human-readable label that identifies the federated database instance to update.
     * @type string
     * @memberof DataFederationApiupdateFederatedDatabase
     */
    tenantName: string
    /**
     * Flag that indicates whether this request should check if the requesting IAM role can read from the S3 bucket. AWS checks if the role can list the objects in the bucket before writing to it. Some IAM roles only need write permissions. This flag allows you to skip that check.
     * @type boolean
     * @memberof DataFederationApiupdateFederatedDatabase
     */
    skipRoleValidation: boolean
    /**
     * Details of one Federated Database to update in the specified project.
     * @type DataLakeTenant
     * @memberof DataFederationApiupdateFederatedDatabase
     */
    dataLakeTenant: DataLakeTenant
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataFederationApiupdateFederatedDatabase
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof DataFederationApiupdateFederatedDatabase
     */
    pretty?: boolean
}

export class ObjectDataFederationApi {
    private api: ObservableDataFederationApi

    public constructor(configuration: Configuration, requestFactory?: DataFederationApiRequestFactory, responseProcessor?: DataFederationApiResponseProcessor) {
        this.api = new ObservableDataFederationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds one private endpoint for Federated Database Instances and Online Archives to the specified projects. To use this resource, the requesting API Key must have the Project Atlas Admin or Project Charts Admin roles. This resource doesn't require the API Key to have an Access List.
     * Create One Federated Database Instance and Online Archive Private Endpoint for One Project
     * @param param the request object
     */
    public createDataFederationPrivateEndpoint(param: DataFederationApiCreateDataFederationPrivateEndpointRequest, options?: Configuration): Promise<Array<PrivateNetworkEndpointIdEntry>> {
        return this.api.createDataFederationPrivateEndpoint(param.groupId, param.privateNetworkEndpointIdEntry, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Creates one federated database instance in the specified project. To use this resource, the requesting API Key must have the Project Owner or Project Charts Admin roles. This resource doesn't require the API Key to have an Access List.
     * Create One Federated Database Instance in One Project
     * @param param the request object
     */
    public createFederatedDatabase(param: DataFederationApiCreateFederatedDatabaseRequest, options?: Configuration): Promise<DataLakeTenant> {
        return this.api.createFederatedDatabase(param.groupId, param.dataLakeTenant, param.envelope, param.pretty, param.skipRoleValidation,  options).toPromise();
    }

    /**
     * Creates or updates one query limit for one federated database instance. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Configure One Query Limit for One Federated Database Instance
     * @param param the request object
     */
    public createOneDataFederationQueryLimit(param: DataFederationApiCreateOneDataFederationQueryLimitRequest, options?: Configuration): Promise<Array<DataFederationTenantQueryLimit>> {
        return this.api.createOneDataFederationQueryLimit(param.groupId, param.tenantName, param.limitName, param.dataFederationTenantQueryLimit, param.envelope,  options).toPromise();
    }

    /**
     * Removes one private endpoint for Federated Database Instances and Online Archives in the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Remove One Federated Database Instance and Online Archive Private Endpoint from One Project
     * @param param the request object
     */
    public deleteDataFederationPrivateEndpoint(param: DataFederationApiDeleteDataFederationPrivateEndpointRequest, options?: Configuration): Promise<void> {
        return this.api.deleteDataFederationPrivateEndpoint(param.groupId, param.endpointId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Removes one federated database instance from the specified project. To use this resource, the requesting API Key must have the Project Owner or Project Charts Admin roles. This resource doesn't require the API Key to have an Access List.
     * Remove One Federated Database Instance from One Project
     * @param param the request object
     */
    public deleteFederatedDatabase(param: DataFederationApiDeleteFederatedDatabaseRequest, options?: Configuration): Promise<void> {
        return this.api.deleteFederatedDatabase(param.groupId, param.tenantName, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Deletes one query limit for one federated database instance. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Delete One Query Limit For One Federated Database Instance
     * @param param the request object
     */
    public deleteOneDataFederationInstanceQueryLimit(param: DataFederationApiDeleteOneDataFederationInstanceQueryLimitRequest, options?: Configuration): Promise<void> {
        return this.api.deleteOneDataFederationInstanceQueryLimit(param.groupId, param.tenantName, param.limitName, param.envelope,  options).toPromise();
    }

    /**
     * Downloads the query logs for the specified federated database instance. To use this resource, the requesting API Key must have the Project Owner or Project Data Access Read Write roles. This resource doesn't require the API Key to have an Access List.
     * Download Query Logs for One Federated Database Instance
     * @param param the request object
     */
    public downloadFederatedDatabaseQueryLogs(param: DataFederationApiDownloadFederatedDatabaseQueryLogsRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.downloadFederatedDatabaseQueryLogs(param.groupId, param.tenantName, param.endDate, param.startDate,  options).toPromise();
    }

    /**
     * Returns the specified private endpoint for Federated Database Instances or Online Archives in the specified project. To use this resource, the requesting API Key must have the Project Read Only or Project Charts Admin roles. This resource doesn't require the API Key to have an Access List.
     * Return One Federated Database Instance and Online Archive Private Endpoint in One Project
     * @param param the request object
     */
    public getDataFederationPrivateEndpoint(param: DataFederationApiGetDataFederationPrivateEndpointRequest, options?: Configuration): Promise<PrivateNetworkEndpointIdEntry> {
        return this.api.getDataFederationPrivateEndpoint(param.groupId, param.endpointId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the details of one federated database instance within the specified project. To use this resource, the requesting API Key must have the Project Read Only or Project Charts Admin roles. This resource doesn't require the API Key to have an Access List.
     * Return One Federated Database Instance in One Project
     * @param param the request object
     */
    public getFederatedDatabase(param: DataFederationApiGetFederatedDatabaseRequest, options?: Configuration): Promise<DataLakeTenant> {
        return this.api.getFederatedDatabase(param.groupId, param.tenantName, param.envelope,  options).toPromise();
    }

    /**
     * Returns all private endpoints for Federated Database Instances and Online Archives in the specified project. To use this resource, the requesting API Key must have the Project Read Only or Project Charts Admin roles. This resource doesn't require the API Key to have an Access List.
     * Return All Federated Database Instance and Online Archive Private Endpoints in One Project
     * @param param the request object
     */
    public listDataFederationPrivateEndpoints(param: DataFederationApiListDataFederationPrivateEndpointsRequest, options?: Configuration): Promise<Array<PrivateNetworkEndpointIdEntry>> {
        return this.api.listDataFederationPrivateEndpoints(param.groupId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the details of all federated database instances in the specified project. To use this resource, the requesting API Key must have the Project Read Only or higher role. This resource doesn't require the API Key to have an Access List.
     * Return All Federated Database Instances in One Project
     * @param param the request object
     */
    public listFederatedDatabases(param: DataFederationApiListFederatedDatabasesRequest, options?: Configuration): Promise<Array<DataLakeTenant>> {
        return this.api.listFederatedDatabases(param.groupId, param.envelope, param.pretty, param.type,  options).toPromise();
    }

    /**
     * Returns the details of one query limit for the specified federated database instance in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Federated Database Instance Query Limit for One Project
     * @param param the request object
     */
    public returnFederatedDatabaseQueryLimit(param: DataFederationApiReturnFederatedDatabaseQueryLimitRequest, options?: Configuration): Promise<Array<DataFederationTenantQueryLimit>> {
        return this.api.returnFederatedDatabaseQueryLimit(param.groupId, param.tenantName, param.limitName, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns query limits for a federated databases instance in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Query Limits for One Federated Database Instance
     * @param param the request object
     */
    public returnFederatedDatabaseQueryLimits(param: DataFederationApiReturnFederatedDatabaseQueryLimitsRequest, options?: Configuration): Promise<Array<DataFederationTenantQueryLimit>> {
        return this.api.returnFederatedDatabaseQueryLimits(param.groupId, param.tenantName, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Updates the details of one federated database instance in the specified project. To use this resource, the requesting API Key must have the Project Owner or higher role. This resource doesn't require the API Key to have an Access List.
     * Update One Federated Database Instance in One Project
     * @param param the request object
     */
    public updateFederatedDatabase(param: DataFederationApiUpdateFederatedDatabaseRequest, options?: Configuration): Promise<DataLakeTenant> {
        return this.api.updateFederatedDatabase(param.groupId, param.tenantName, param.skipRoleValidation, param.dataLakeTenant, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableDataLakePipelinesApi } from "./ObservableAPI";
import { DataLakePipelinesApiRequestFactory, DataLakePipelinesApiResponseProcessor} from "../apis/DataLakePipelinesApi";

export interface DataLakePipelinesApiCreatePipelineRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataLakePipelinesApicreatePipeline
     */
    groupId: string
    /**
     * Creates one Data Lake Pipeline.
     * @type IngestionPipeline
     * @memberof DataLakePipelinesApicreatePipeline
     */
    ingestionPipeline: IngestionPipeline
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataLakePipelinesApicreatePipeline
     */
    envelope?: boolean
}

export interface DataLakePipelinesApiDeletePipelineRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataLakePipelinesApideletePipeline
     */
    groupId: string
    /**
     * Human-readable label that identifies the Data Lake Pipeline.
     * @type string
     * @memberof DataLakePipelinesApideletePipeline
     */
    pipelineName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataLakePipelinesApideletePipeline
     */
    envelope?: boolean
}

export interface DataLakePipelinesApiDeletePipelineRunDatasetRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataLakePipelinesApideletePipelineRunDataset
     */
    groupId: string
    /**
     * Human-readable label that identifies the Data Lake Pipeline.
     * @type string
     * @memberof DataLakePipelinesApideletePipelineRunDataset
     */
    pipelineName: string
    /**
     * Unique 24-hexadecimal character string that identifies a Data Lake Pipeline run.
     * @type string
     * @memberof DataLakePipelinesApideletePipelineRunDataset
     */
    pipelineRunId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataLakePipelinesApideletePipelineRunDataset
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof DataLakePipelinesApideletePipelineRunDataset
     */
    pretty?: boolean
}

export interface DataLakePipelinesApiGetPipelineRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataLakePipelinesApigetPipeline
     */
    groupId: string
    /**
     * Human-readable label that identifies the Data Lake Pipeline.
     * @type string
     * @memberof DataLakePipelinesApigetPipeline
     */
    pipelineName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataLakePipelinesApigetPipeline
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof DataLakePipelinesApigetPipeline
     */
    pretty?: boolean
}

export interface DataLakePipelinesApiGetPipelineRunRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataLakePipelinesApigetPipelineRun
     */
    groupId: string
    /**
     * Human-readable label that identifies the Data Lake Pipeline.
     * @type string
     * @memberof DataLakePipelinesApigetPipelineRun
     */
    pipelineName: string
    /**
     * Unique 24-hexadecimal character string that identifies a Data Lake Pipeline run.
     * @type string
     * @memberof DataLakePipelinesApigetPipelineRun
     */
    pipelineRunId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataLakePipelinesApigetPipelineRun
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof DataLakePipelinesApigetPipelineRun
     */
    pretty?: boolean
}

export interface DataLakePipelinesApiListPipelineRunsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataLakePipelinesApilistPipelineRuns
     */
    groupId: string
    /**
     * Human-readable label that identifies the Data Lake Pipeline.
     * @type string
     * @memberof DataLakePipelinesApilistPipelineRuns
     */
    pipelineName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataLakePipelinesApilistPipelineRuns
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof DataLakePipelinesApilistPipelineRuns
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof DataLakePipelinesApilistPipelineRuns
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof DataLakePipelinesApilistPipelineRuns
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof DataLakePipelinesApilistPipelineRuns
     */
    pretty?: boolean
    /**
     * If specified, Atlas returns only Data Lake Pipeline runs initiated before this time and date.
     * @type Date
     * @memberof DataLakePipelinesApilistPipelineRuns
     */
    createdBefore?: Date
}

export interface DataLakePipelinesApiListPipelineSchedulesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataLakePipelinesApilistPipelineSchedules
     */
    groupId: string
    /**
     * Human-readable label that identifies the Data Lake Pipeline.
     * @type string
     * @memberof DataLakePipelinesApilistPipelineSchedules
     */
    pipelineName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataLakePipelinesApilistPipelineSchedules
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof DataLakePipelinesApilistPipelineSchedules
     */
    pretty?: boolean
}

export interface DataLakePipelinesApiListPipelineSnapshotsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataLakePipelinesApilistPipelineSnapshots
     */
    groupId: string
    /**
     * Human-readable label that identifies the Data Lake Pipeline.
     * @type string
     * @memberof DataLakePipelinesApilistPipelineSnapshots
     */
    pipelineName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataLakePipelinesApilistPipelineSnapshots
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof DataLakePipelinesApilistPipelineSnapshots
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof DataLakePipelinesApilistPipelineSnapshots
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof DataLakePipelinesApilistPipelineSnapshots
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof DataLakePipelinesApilistPipelineSnapshots
     */
    pretty?: boolean
    /**
     * Date and time after which MongoDB Cloud created the snapshot. If specified, MongoDB Cloud returns available backup snapshots created after this time and date only. This parameter expresses its value in the ISO 8601 timestamp format in UTC.
     * @type Date
     * @memberof DataLakePipelinesApilistPipelineSnapshots
     */
    completedAfter?: Date
}

export interface DataLakePipelinesApiListPipelinesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataLakePipelinesApilistPipelines
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataLakePipelinesApilistPipelines
     */
    envelope?: boolean
}

export interface DataLakePipelinesApiPausePipelineRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataLakePipelinesApipausePipeline
     */
    groupId: string
    /**
     * Human-readable label that identifies the Data Lake Pipeline.
     * @type string
     * @memberof DataLakePipelinesApipausePipeline
     */
    pipelineName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataLakePipelinesApipausePipeline
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof DataLakePipelinesApipausePipeline
     */
    pretty?: boolean
}

export interface DataLakePipelinesApiResumePipelineRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataLakePipelinesApiresumePipeline
     */
    groupId: string
    /**
     * Human-readable label that identifies the Data Lake Pipeline.
     * @type string
     * @memberof DataLakePipelinesApiresumePipeline
     */
    pipelineName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataLakePipelinesApiresumePipeline
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof DataLakePipelinesApiresumePipeline
     */
    pretty?: boolean
}

export interface DataLakePipelinesApiTriggerSnapshotIngestionRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataLakePipelinesApitriggerSnapshotIngestion
     */
    groupId: string
    /**
     * Human-readable label that identifies the Data Lake Pipeline.
     * @type string
     * @memberof DataLakePipelinesApitriggerSnapshotIngestion
     */
    pipelineName: string
    /**
     * Triggers a single ingestion run of a snapshot.
     * @type TriggerIngestionRequest
     * @memberof DataLakePipelinesApitriggerSnapshotIngestion
     */
    triggerIngestionRequest: TriggerIngestionRequest
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataLakePipelinesApitriggerSnapshotIngestion
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof DataLakePipelinesApitriggerSnapshotIngestion
     */
    pretty?: boolean
}

export interface DataLakePipelinesApiUpdatePipelineRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataLakePipelinesApiupdatePipeline
     */
    groupId: string
    /**
     * Human-readable label that identifies the Data Lake Pipeline.
     * @type string
     * @memberof DataLakePipelinesApiupdatePipeline
     */
    pipelineName: string
    /**
     * Updates one Data Lake Pipeline.
     * @type IngestionPipeline
     * @memberof DataLakePipelinesApiupdatePipeline
     */
    ingestionPipeline: IngestionPipeline
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DataLakePipelinesApiupdatePipeline
     */
    envelope?: boolean
}

export class ObjectDataLakePipelinesApi {
    private api: ObservableDataLakePipelinesApi

    public constructor(configuration: Configuration, requestFactory?: DataLakePipelinesApiRequestFactory, responseProcessor?: DataLakePipelinesApiResponseProcessor) {
        this.api = new ObservableDataLakePipelinesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one Data Lake Pipeline.
     * Create One Data Lake Pipeline
     * @param param the request object
     */
    public createPipeline(param: DataLakePipelinesApiCreatePipelineRequest, options?: Configuration): Promise<IngestionPipeline> {
        return this.api.createPipeline(param.groupId, param.ingestionPipeline, param.envelope,  options).toPromise();
    }

    /**
     * Removes one Data Lake Pipeline.
     * Remove One Data Lake Pipeline
     * @param param the request object
     */
    public deletePipeline(param: DataLakePipelinesApiDeletePipelineRequest, options?: Configuration): Promise<void> {
        return this.api.deletePipeline(param.groupId, param.pipelineName, param.envelope,  options).toPromise();
    }

    /**
     * Deletes dataset that Atlas generated during the specified pipeline run.
     * Delete Pipeline Run Dataset
     * @param param the request object
     */
    public deletePipelineRunDataset(param: DataLakePipelinesApiDeletePipelineRunDatasetRequest, options?: Configuration): Promise<void> {
        return this.api.deletePipelineRunDataset(param.groupId, param.pipelineName, param.pipelineRunId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the details of one Data Lake Pipeline within the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Data Lake Pipeline
     * @param param the request object
     */
    public getPipeline(param: DataLakePipelinesApiGetPipelineRequest, options?: Configuration): Promise<IngestionPipeline> {
        return this.api.getPipeline(param.groupId, param.pipelineName, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the details of one Data Lake Pipeline run within the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Data Lake Pipeline Run
     * @param param the request object
     */
    public getPipelineRun(param: DataLakePipelinesApiGetPipelineRunRequest, options?: Configuration): Promise<IngestionPipelineRun> {
        return this.api.getPipelineRun(param.groupId, param.pipelineName, param.pipelineRunId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns a list of past Data Lake Pipeline runs. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Data Lake Pipeline Runs from One Project
     * @param param the request object
     */
    public listPipelineRuns(param: DataLakePipelinesApiListPipelineRunsRequest, options?: Configuration): Promise<PaginatedPipelineRunView> {
        return this.api.listPipelineRuns(param.groupId, param.pipelineName, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty, param.createdBefore,  options).toPromise();
    }

    /**
     * Returns a list of backup schedule policy items that you can use as a Data Lake Pipeline source. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Available Ingestion Schedules for One Data Lake Pipeline
     * @param param the request object
     */
    public listPipelineSchedules(param: DataLakePipelinesApiListPipelineSchedulesRequest, options?: Configuration): Promise<Array<ApiPolicyItemView>> {
        return this.api.listPipelineSchedules(param.groupId, param.pipelineName, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns a list of backup snapshots that you can use to trigger an on demand pipeline run. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Available Backup Snapshots for One Data Lake Pipeline
     * @param param the request object
     */
    public listPipelineSnapshots(param: DataLakePipelinesApiListPipelineSnapshotsRequest, options?: Configuration): Promise<PaginatedBackupSnapshotView> {
        return this.api.listPipelineSnapshots(param.groupId, param.pipelineName, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty, param.completedAfter,  options).toPromise();
    }

    /**
     * Returns a list of Data Lake Pipelines. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Data Lake Pipelines from One Project
     * @param param the request object
     */
    public listPipelines(param: DataLakePipelinesApiListPipelinesRequest, options?: Configuration): Promise<Array<IngestionPipeline>> {
        return this.api.listPipelines(param.groupId, param.envelope,  options).toPromise();
    }

    /**
     * Pauses ingestion for a Data Lake Pipeline within the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Pause One Data Lake Pipeline
     * @param param the request object
     */
    public pausePipeline(param: DataLakePipelinesApiPausePipelineRequest, options?: Configuration): Promise<IngestionPipeline> {
        return this.api.pausePipeline(param.groupId, param.pipelineName, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Resumes ingestion for a Data Lake Pipeline within the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Resume One Data Lake Pipeline
     * @param param the request object
     */
    public resumePipeline(param: DataLakePipelinesApiResumePipelineRequest, options?: Configuration): Promise<IngestionPipeline> {
        return this.api.resumePipeline(param.groupId, param.pipelineName, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Triggers a Data Lake Pipeline ingestion of a specified snapshot.
     * Trigger on demand snapshot ingestion
     * @param param the request object
     */
    public triggerSnapshotIngestion(param: DataLakePipelinesApiTriggerSnapshotIngestionRequest, options?: Configuration): Promise<IngestionPipelineRun> {
        return this.api.triggerSnapshotIngestion(param.groupId, param.pipelineName, param.triggerIngestionRequest, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Updates one Data Lake Pipeline.
     * Update One Data Lake Pipeline
     * @param param the request object
     */
    public updatePipeline(param: DataLakePipelinesApiUpdatePipelineRequest, options?: Configuration): Promise<IngestionPipeline> {
        return this.api.updatePipeline(param.groupId, param.pipelineName, param.ingestionPipeline, param.envelope,  options).toPromise();
    }

}

import { ObservableDatabaseUsersApi } from "./ObservableAPI";
import { DatabaseUsersApiRequestFactory, DatabaseUsersApiResponseProcessor} from "../apis/DatabaseUsersApi";

export interface DatabaseUsersApiCreateDatabaseUserRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DatabaseUsersApicreateDatabaseUser
     */
    groupId: string
    /**
     * Creates one database user in the specified project.
     * @type DatabaseUser
     * @memberof DatabaseUsersApicreateDatabaseUser
     */
    databaseUser: DatabaseUser
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DatabaseUsersApicreateDatabaseUser
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof DatabaseUsersApicreateDatabaseUser
     */
    pretty?: boolean
}

export interface DatabaseUsersApiDeleteDatabaseUserRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DatabaseUsersApideleteDatabaseUser
     */
    groupId: string
    /**
     * Human-readable label that identifies the database against which the database user authenticates. Database users must provide both a username and authentication database to log into MongoDB. If the user authenticates with AWS IAM, x.509, or LDAP, this value should be &#x60;$external&#x60;. If the user authenticates with SCRAM-SHA, this value should be &#x60;admin&#x60;.
     * @type string
     * @memberof DatabaseUsersApideleteDatabaseUser
     */
    databaseName: string
    /**
     * Human-readable label that represents the user that authenticates to MongoDB. The format of this label depends on the method of authentication:  | Authentication Method | Parameter Needed | Parameter Value | username Format | |---|---|---|---| | AWS IAM | awsType | ROLE | &lt;abbr title&#x3D;\&quot;Amazon Resource Name\&quot;&gt;ARN&lt;/abbr&gt; | | AWS IAM | awsType | USER | &lt;abbr title&#x3D;\&quot;Amazon Resource Name\&quot;&gt;ARN&lt;/abbr&gt; | | x.509 | x509Type | CUSTOMER | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | x.509 | x509Type | MANAGED | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | LDAP | ldapAuthType | USER | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | LDAP | ldapAuthType | GROUP | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | SCRAM-SHA | awsType, x509Type, ldapAuthType | NONE | Alphanumeric string | 
     * @type string
     * @memberof DatabaseUsersApideleteDatabaseUser
     */
    username: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DatabaseUsersApideleteDatabaseUser
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof DatabaseUsersApideleteDatabaseUser
     */
    pretty?: boolean
}

export interface DatabaseUsersApiGetDatabaseUserRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DatabaseUsersApigetDatabaseUser
     */
    groupId: string
    /**
     * Human-readable label that identifies the database against which the database user authenticates. Database users must provide both a username and authentication database to log into MongoDB. If the user authenticates with AWS IAM, x.509, or LDAP, this value should be &#x60;$external&#x60;. If the user authenticates with SCRAM-SHA, this value should be &#x60;admin&#x60;.
     * @type string
     * @memberof DatabaseUsersApigetDatabaseUser
     */
    databaseName: string
    /**
     * Human-readable label that represents the user that authenticates to MongoDB. The format of this label depends on the method of authentication:  | Authentication Method | Parameter Needed | Parameter Value | username Format | |---|---|---|---| | AWS IAM | awsType | ROLE | &lt;abbr title&#x3D;\&quot;Amazon Resource Name\&quot;&gt;ARN&lt;/abbr&gt; | | AWS IAM | awsType | USER | &lt;abbr title&#x3D;\&quot;Amazon Resource Name\&quot;&gt;ARN&lt;/abbr&gt; | | x.509 | x509Type | CUSTOMER | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | x.509 | x509Type | MANAGED | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | LDAP | ldapAuthType | USER | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | LDAP | ldapAuthType | GROUP | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | SCRAM-SHA | awsType, x509Type, ldapAuthType | NONE | Alphanumeric string | 
     * @type string
     * @memberof DatabaseUsersApigetDatabaseUser
     */
    username: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DatabaseUsersApigetDatabaseUser
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof DatabaseUsersApigetDatabaseUser
     */
    pretty?: boolean
}

export interface DatabaseUsersApiListDatabaseUsersRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DatabaseUsersApilistDatabaseUsers
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DatabaseUsersApilistDatabaseUsers
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof DatabaseUsersApilistDatabaseUsers
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof DatabaseUsersApilistDatabaseUsers
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof DatabaseUsersApilistDatabaseUsers
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof DatabaseUsersApilistDatabaseUsers
     */
    pretty?: boolean
}

export interface DatabaseUsersApiUpdateDatabaseUserRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DatabaseUsersApiupdateDatabaseUser
     */
    groupId: string
    /**
     * Human-readable label that identifies the database against which the database user authenticates. Database users must provide both a username and authentication database to log into MongoDB. If the user authenticates with AWS IAM, x.509, or LDAP, this value should be &#x60;$external&#x60;. If the user authenticates with SCRAM-SHA, this value should be &#x60;admin&#x60;.
     * @type string
     * @memberof DatabaseUsersApiupdateDatabaseUser
     */
    databaseName: string
    /**
     * Human-readable label that represents the user that authenticates to MongoDB. The format of this label depends on the method of authentication:  | Authentication Method | Parameter Needed | Parameter Value | username Format | |---|---|---|---| | AWS IAM | awsType | ROLE | &lt;abbr title&#x3D;\&quot;Amazon Resource Name\&quot;&gt;ARN&lt;/abbr&gt; | | AWS IAM | awsType | USER | &lt;abbr title&#x3D;\&quot;Amazon Resource Name\&quot;&gt;ARN&lt;/abbr&gt; | | x.509 | x509Type | CUSTOMER | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | x.509 | x509Type | MANAGED | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | LDAP | ldapAuthType | USER | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | LDAP | ldapAuthType | GROUP | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | SCRAM-SHA | awsType, x509Type, ldapAuthType | NONE | Alphanumeric string | 
     * @type string
     * @memberof DatabaseUsersApiupdateDatabaseUser
     */
    username: string
    /**
     * Updates one database user that belongs to the specified project.
     * @type DatabaseUser
     * @memberof DatabaseUsersApiupdateDatabaseUser
     */
    databaseUser: DatabaseUser
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof DatabaseUsersApiupdateDatabaseUser
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof DatabaseUsersApiupdateDatabaseUser
     */
    pretty?: boolean
}

export class ObjectDatabaseUsersApi {
    private api: ObservableDatabaseUsersApi

    public constructor(configuration: Configuration, requestFactory?: DatabaseUsersApiRequestFactory, responseProcessor?: DatabaseUsersApiResponseProcessor) {
        this.api = new ObservableDatabaseUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one database user in the specified project. This MongoDB Cloud supports a maximum of 100 database users per project. If you require more than 100 database users on a project, contact [Support](https://cloud.mongodb.com/support). To use this resource, the requesting API Key must have the Project Owner or Project Charts Admin roles. This resource doesn't require the API Key to have an Access List.
     * Create One Database User in One Project
     * @param param the request object
     */
    public createDatabaseUser(param: DatabaseUsersApiCreateDatabaseUserRequest, options?: Configuration): Promise<DatabaseUser> {
        return this.api.createDatabaseUser(param.groupId, param.databaseUser, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Removes one database user from the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Remove One Database User from One Project
     * @param param the request object
     */
    public deleteDatabaseUser(param: DatabaseUsersApiDeleteDatabaseUserRequest, options?: Configuration): Promise<void> {
        return this.api.deleteDatabaseUser(param.groupId, param.databaseName, param.username, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns one database user that belong to the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Database User from One Project
     * @param param the request object
     */
    public getDatabaseUser(param: DatabaseUsersApiGetDatabaseUserRequest, options?: Configuration): Promise<DatabaseUser> {
        return this.api.getDatabaseUser(param.groupId, param.databaseName, param.username, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns all database users that belong to the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Database Users from One Project
     * @param param the request object
     */
    public listDatabaseUsers(param: DatabaseUsersApiListDatabaseUsersRequest, options?: Configuration): Promise<PaginatedApiAtlasDatabaseUserView> {
        return this.api.listDatabaseUsers(param.groupId, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

    /**
     * Updates one database user that belongs to the specified project. To use this resource, the requesting API Key must have the Project Owner or Project Charts Admin roles. This resource doesn't require the API Key to have an Access List.
     * Update One Database User in One Project
     * @param param the request object
     */
    public updateDatabaseUser(param: DatabaseUsersApiUpdateDatabaseUserRequest, options?: Configuration): Promise<DatabaseUser> {
        return this.api.updateDatabaseUser(param.groupId, param.databaseName, param.username, param.databaseUser, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableEncryptionAtRestUsingCustomerKeyManagementApi } from "./ObservableAPI";
import { EncryptionAtRestUsingCustomerKeyManagementApiRequestFactory, EncryptionAtRestUsingCustomerKeyManagementApiResponseProcessor} from "../apis/EncryptionAtRestUsingCustomerKeyManagementApi";

export interface EncryptionAtRestUsingCustomerKeyManagementApiReturnOneConfigurationForEncryptionAtRestUsingCustomerManagedKeysForOneProjectRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof EncryptionAtRestUsingCustomerKeyManagementApireturnOneConfigurationForEncryptionAtRestUsingCustomerManagedKeysForOneProject
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof EncryptionAtRestUsingCustomerKeyManagementApireturnOneConfigurationForEncryptionAtRestUsingCustomerManagedKeysForOneProject
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof EncryptionAtRestUsingCustomerKeyManagementApireturnOneConfigurationForEncryptionAtRestUsingCustomerManagedKeysForOneProject
     */
    pretty?: boolean
}

export interface EncryptionAtRestUsingCustomerKeyManagementApiUpdateEncryptionAtRestRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof EncryptionAtRestUsingCustomerKeyManagementApiupdateEncryptionAtRest
     */
    groupId: string
    /**
     * Required parameters depend on whether someone has enabled Encryption at Rest using Customer Key Management:  If you have enabled Encryption at Rest using Customer Key Management (CMK), Atlas requires all of the parameters for the desired encryption provider.  - To use AWS Key Management Service (KMS), MongoDB Cloud requires all the fields in the **awsKms** object. - To use Azure Key Vault, MongoDB Cloud requires all the fields in the **azureKeyVault** object. - To use Google Cloud Key Management Service (KMS), MongoDB Cloud requires all the fields in the **googleCloudKms** object.  If you enabled Encryption at Rest using Customer Key  Management, administrators can pass only the changed fields for the **awsKms**, **azureKeyVault**, or **googleCloudKms** object to update the configuration to this endpoint.
     * @type EncryptionAtRest
     * @memberof EncryptionAtRestUsingCustomerKeyManagementApiupdateEncryptionAtRest
     */
    encryptionAtRest: EncryptionAtRest
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof EncryptionAtRestUsingCustomerKeyManagementApiupdateEncryptionAtRest
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof EncryptionAtRestUsingCustomerKeyManagementApiupdateEncryptionAtRest
     */
    pretty?: boolean
}

export class ObjectEncryptionAtRestUsingCustomerKeyManagementApi {
    private api: ObservableEncryptionAtRestUsingCustomerKeyManagementApi

    public constructor(configuration: Configuration, requestFactory?: EncryptionAtRestUsingCustomerKeyManagementApiRequestFactory, responseProcessor?: EncryptionAtRestUsingCustomerKeyManagementApiResponseProcessor) {
        this.api = new ObservableEncryptionAtRestUsingCustomerKeyManagementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the configuration for encryption at rest using the keys you manage through your cloud provider. MongoDB Cloud encrypts all storage even if you don't use your own key management. This resource requires the requesting API Key to have the Project Owner role.  **LIMITED TO M10 OR GREATER:** MongoDB Cloud limits this feature to dedicated cluster tiers of M10 and greater.
     * Return One Configuration for Encryption at Rest using Customer-Managed Keys for One Project
     * @param param the request object
     */
    public returnOneConfigurationForEncryptionAtRestUsingCustomerManagedKeysForOneProject(param: EncryptionAtRestUsingCustomerKeyManagementApiReturnOneConfigurationForEncryptionAtRestUsingCustomerManagedKeysForOneProjectRequest, options?: Configuration): Promise<EncryptionAtRest> {
        return this.api.returnOneConfigurationForEncryptionAtRestUsingCustomerManagedKeysForOneProject(param.groupId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Updates the configuration for encryption at rest using the keys you manage through your cloud provider. MongoDB Cloud encrypts all storage even if you don't use your own key management. This resource requires the requesting API Key to have the Project Atlas Admin role.  **LIMITED TO M10 OR GREATER:** MongoDB Cloud limits this feature to dedicated cluster tiers of M10 and greater.
     * Update Configuration for Encryption at Rest using Customer-Managed Keys for One Project
     * @param param the request object
     */
    public updateEncryptionAtRest(param: EncryptionAtRestUsingCustomerKeyManagementApiUpdateEncryptionAtRestRequest, options?: Configuration): Promise<EncryptionAtRest> {
        return this.api.updateEncryptionAtRest(param.groupId, param.encryptionAtRest, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableEventsApi } from "./ObservableAPI";
import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";

export interface EventsApiGetOrganizationEventRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof EventsApigetOrganizationEvent
     */
    orgId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the event that you want to return. Use the [/events](#tag/Events/operation/listOrganizationEvents) endpoint to retrieve all events to which the authenticated user has access.
     * @type string
     * @memberof EventsApigetOrganizationEvent
     */
    eventId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof EventsApigetOrganizationEvent
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof EventsApigetOrganizationEvent
     */
    pretty?: boolean
    /**
     * Flag that indicates whether to include the raw document in the output. The raw document contains additional meta information about the event.
     * @type boolean
     * @memberof EventsApigetOrganizationEvent
     */
    includeRaw?: boolean
}

export interface EventsApiGetProjectEventRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof EventsApigetProjectEvent
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the event that you want to return. Use the [/events](#tag/Events/operation/listProjectEvents) endpoint to retrieve all events to which the authenticated user has access.
     * @type string
     * @memberof EventsApigetProjectEvent
     */
    eventId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof EventsApigetProjectEvent
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof EventsApigetProjectEvent
     */
    pretty?: boolean
    /**
     * Flag that indicates whether to include the raw document in the output. The raw document contains additional meta information about the event.
     * @type boolean
     * @memberof EventsApigetProjectEvent
     */
    includeRaw?: boolean
}

export interface EventsApiListOrganizationEventsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof EventsApilistOrganizationEvents
     */
    orgId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof EventsApilistOrganizationEvents
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof EventsApilistOrganizationEvents
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof EventsApilistOrganizationEvents
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof EventsApilistOrganizationEvents
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof EventsApilistOrganizationEvents
     */
    pretty?: boolean
    /**
     * Category of incident recorded at this moment in time.  **IMPORTANT**: The complete list of event type values changes frequently.
     * @type EventTypeForOrg
     * @memberof EventsApilistOrganizationEvents
     */
    eventType?: EventTypeForOrg
    /**
     * Flag that indicates whether to include the raw document in the output. The raw document contains additional meta information about the event.
     * @type boolean
     * @memberof EventsApilistOrganizationEvents
     */
    includeRaw?: boolean
    /**
     * Date and time from when MongoDB Cloud stops returning events. This parameter uses the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;ISO 8601&lt;/a&gt; timestamp format in UTC.
     * @type Date
     * @memberof EventsApilistOrganizationEvents
     */
    maxDate?: Date
    /**
     * Date and time from when MongoDB Cloud starts returning events. This parameter uses the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;ISO 8601&lt;/a&gt; timestamp format in UTC.
     * @type Date
     * @memberof EventsApilistOrganizationEvents
     */
    minDate?: Date
}

export interface EventsApiListProjectEventsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof EventsApilistProjectEvents
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof EventsApilistProjectEvents
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof EventsApilistProjectEvents
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof EventsApilistProjectEvents
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof EventsApilistProjectEvents
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof EventsApilistProjectEvents
     */
    pretty?: boolean
    /**
     * Human-readable label that identifies the cluster.
     * @type Array&lt;string&gt;
     * @memberof EventsApilistProjectEvents
     */
    clusterNames?: Array<string>
    /**
     * Category of incident recorded at this moment in time.  **IMPORTANT**: The complete list of event type values changes frequently.
     * @type EventTypeForNdsGroup
     * @memberof EventsApilistProjectEvents
     */
    eventType?: EventTypeForNdsGroup
    /**
     * Flag that indicates whether to include the raw document in the output. The raw document contains additional meta information about the event.
     * @type boolean
     * @memberof EventsApilistProjectEvents
     */
    includeRaw?: boolean
    /**
     * Date and time from when MongoDB Cloud stops returning events. This parameter uses the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;ISO 8601&lt;/a&gt; timestamp format in UTC.
     * @type Date
     * @memberof EventsApilistProjectEvents
     */
    maxDate?: Date
    /**
     * Date and time from when MongoDB Cloud starts returning events. This parameter uses the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;ISO 8601&lt;/a&gt; timestamp format in UTC.
     * @type Date
     * @memberof EventsApilistProjectEvents
     */
    minDate?: Date
}

export class ObjectEventsApi {
    private api: ObservableEventsApi

    public constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns one event for the specified organization. Events identify significant database, billing, or security activities or status changes. To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an Access List.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/events-orgs-get-one/).
     * Return One Event from One Organization
     * @param param the request object
     */
    public getOrganizationEvent(param: EventsApiGetOrganizationEventRequest, options?: Configuration): Promise<EventViewForOrg> {
        return this.api.getOrganizationEvent(param.orgId, param.eventId, param.envelope, param.pretty, param.includeRaw,  options).toPromise();
    }

    /**
     * Returns one event for the specified project. Events identify significant database, billing, or security activities or status changes. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/events-projects-get-one/).
     * Return One Event from One Project
     * @param param the request object
     */
    public getProjectEvent(param: EventsApiGetProjectEventRequest, options?: Configuration): Promise<EventViewForNdsGroup> {
        return this.api.getProjectEvent(param.groupId, param.eventId, param.envelope, param.pretty, param.includeRaw,  options).toPromise();
    }

    /**
     * Returns all events for the specified organization. Events identify significant database, billing, or security activities or status changes. To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an Access List.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/events-orgs-get-all/).
     * Return All Events from One Organization
     * @param param the request object
     */
    public listOrganizationEvents(param: EventsApiListOrganizationEventsRequest, options?: Configuration): Promise<OrgPaginatedEventView> {
        return this.api.listOrganizationEvents(param.orgId, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty, param.eventType, param.includeRaw, param.maxDate, param.minDate,  options).toPromise();
    }

    /**
     * Returns one event for the specified project. Events identify significant database, billing, or security activities or status changes. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/events-projects-get-all/).
     * Return All Events from One Project
     * @param param the request object
     */
    public listProjectEvents(param: EventsApiListProjectEventsRequest, options?: Configuration): Promise<GroupPaginatedEventView> {
        return this.api.listProjectEvents(param.groupId, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty, param.clusterNames, param.eventType, param.includeRaw, param.maxDate, param.minDate,  options).toPromise();
    }

}

import { ObservableFederatedAuthenticationApi } from "./ObservableAPI";
import { FederatedAuthenticationApiRequestFactory, FederatedAuthenticationApiResponseProcessor} from "../apis/FederatedAuthenticationApi";

export interface FederatedAuthenticationApiCreateRoleMappingRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your federation.
     * @type string
     * @memberof FederatedAuthenticationApicreateRoleMapping
     */
    federationSettingsId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof FederatedAuthenticationApicreateRoleMapping
     */
    orgId: string
    /**
     * The role mapping that you want to create.
     * @type RoleMappingView
     * @memberof FederatedAuthenticationApicreateRoleMapping
     */
    roleMappingView: RoleMappingView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof FederatedAuthenticationApicreateRoleMapping
     */
    envelope?: boolean
}

export interface FederatedAuthenticationApiDeleteFederationAppRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your federation.
     * @type string
     * @memberof FederatedAuthenticationApideleteFederationApp
     */
    federationSettingsId: string
}

export interface FederatedAuthenticationApiDeleteRoleMappingRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your federation.
     * @type string
     * @memberof FederatedAuthenticationApideleteRoleMapping
     */
    federationSettingsId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the role mapping that you want to remove.
     * @type string
     * @memberof FederatedAuthenticationApideleteRoleMapping
     */
    id: string
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof FederatedAuthenticationApideleteRoleMapping
     */
    orgId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof FederatedAuthenticationApideleteRoleMapping
     */
    envelope?: boolean
}

export interface FederatedAuthenticationApiGetConnectedOrgConfigRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your federation.
     * @type string
     * @memberof FederatedAuthenticationApigetConnectedOrgConfig
     */
    federationSettingsId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the connected organization configuration to return.
     * @type string
     * @memberof FederatedAuthenticationApigetConnectedOrgConfig
     */
    orgId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof FederatedAuthenticationApigetConnectedOrgConfig
     */
    envelope?: boolean
}

export interface FederatedAuthenticationApiGetFederationSettingsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof FederatedAuthenticationApigetFederationSettings
     */
    orgId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof FederatedAuthenticationApigetFederationSettings
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof FederatedAuthenticationApigetFederationSettings
     */
    pretty?: boolean
}

export interface FederatedAuthenticationApiGetIdentityProviderRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your federation.
     * @type string
     * @memberof FederatedAuthenticationApigetIdentityProvider
     */
    federationSettingsId: string
    /**
     * Unique 20-hexadecimal digit string that identifies the identity provider.
     * @type string
     * @memberof FederatedAuthenticationApigetIdentityProvider
     */
    identityProviderId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof FederatedAuthenticationApigetIdentityProvider
     */
    envelope?: boolean
}

export interface FederatedAuthenticationApiGetIdentityProviderMetadataRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your federation.
     * @type string
     * @memberof FederatedAuthenticationApigetIdentityProviderMetadata
     */
    federationSettingsId: string
    /**
     * Unique 20-hexadecimal digit string that identifies the identity provider.
     * @type string
     * @memberof FederatedAuthenticationApigetIdentityProviderMetadata
     */
    identityProviderId: string
}

export interface FederatedAuthenticationApiGetRoleMappingRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your federation.
     * @type string
     * @memberof FederatedAuthenticationApigetRoleMapping
     */
    federationSettingsId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the role mapping that you want to return.
     * @type string
     * @memberof FederatedAuthenticationApigetRoleMapping
     */
    id: string
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof FederatedAuthenticationApigetRoleMapping
     */
    orgId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof FederatedAuthenticationApigetRoleMapping
     */
    envelope?: boolean
}

export interface FederatedAuthenticationApiListConnectedOrgConfigsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your federation.
     * @type string
     * @memberof FederatedAuthenticationApilistConnectedOrgConfigs
     */
    federationSettingsId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof FederatedAuthenticationApilistConnectedOrgConfigs
     */
    envelope?: boolean
}

export interface FederatedAuthenticationApiListIdentityProvidersRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your federation.
     * @type string
     * @memberof FederatedAuthenticationApilistIdentityProviders
     */
    federationSettingsId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof FederatedAuthenticationApilistIdentityProviders
     */
    envelope?: boolean
}

export interface FederatedAuthenticationApiListRoleMappingsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your federation.
     * @type string
     * @memberof FederatedAuthenticationApilistRoleMappings
     */
    federationSettingsId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof FederatedAuthenticationApilistRoleMappings
     */
    orgId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof FederatedAuthenticationApilistRoleMappings
     */
    envelope?: boolean
}

export interface FederatedAuthenticationApiRemoveConnectedOrgConfigRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your federation.
     * @type string
     * @memberof FederatedAuthenticationApiremoveConnectedOrgConfig
     */
    federationSettingsId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the connected organization configuration to remove.
     * @type string
     * @memberof FederatedAuthenticationApiremoveConnectedOrgConfig
     */
    orgId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof FederatedAuthenticationApiremoveConnectedOrgConfig
     */
    envelope?: boolean
}

export interface FederatedAuthenticationApiUpdateConnectedOrgConfigRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your federation.
     * @type string
     * @memberof FederatedAuthenticationApiupdateConnectedOrgConfig
     */
    federationSettingsId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the connected organization configuration to update.
     * @type string
     * @memberof FederatedAuthenticationApiupdateConnectedOrgConfig
     */
    orgId: string
    /**
     * The connected organization configuration that you want to update.
     * @type ConnectedOrgConfigView
     * @memberof FederatedAuthenticationApiupdateConnectedOrgConfig
     */
    connectedOrgConfigView: ConnectedOrgConfigView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof FederatedAuthenticationApiupdateConnectedOrgConfig
     */
    envelope?: boolean
}

export interface FederatedAuthenticationApiUpdateIdentityProviderRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your federation.
     * @type string
     * @memberof FederatedAuthenticationApiupdateIdentityProvider
     */
    federationSettingsId: string
    /**
     * Unique 20-hexadecimal digit string that identifies the identity provider.
     * @type string
     * @memberof FederatedAuthenticationApiupdateIdentityProvider
     */
    identityProviderId: string
    /**
     * The identity provider that you want to update.
     * @type IdentityProviderUpdate
     * @memberof FederatedAuthenticationApiupdateIdentityProvider
     */
    identityProviderUpdate: IdentityProviderUpdate
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof FederatedAuthenticationApiupdateIdentityProvider
     */
    envelope?: boolean
}

export interface FederatedAuthenticationApiUpdateRoleMappingRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your federation.
     * @type string
     * @memberof FederatedAuthenticationApiupdateRoleMapping
     */
    federationSettingsId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the role mapping that you want to update.
     * @type string
     * @memberof FederatedAuthenticationApiupdateRoleMapping
     */
    id: string
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof FederatedAuthenticationApiupdateRoleMapping
     */
    orgId: string
    /**
     * The role mapping that you want to update.
     * @type RoleMappingView
     * @memberof FederatedAuthenticationApiupdateRoleMapping
     */
    roleMappingView: RoleMappingView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof FederatedAuthenticationApiupdateRoleMapping
     */
    envelope?: boolean
}

export class ObjectFederatedAuthenticationApi {
    private api: ObservableFederatedAuthenticationApi

    public constructor(configuration: Configuration, requestFactory?: FederatedAuthenticationApiRequestFactory, responseProcessor?: FederatedAuthenticationApiResponseProcessor) {
        this.api = new ObservableFederatedAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds one role mapping to the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Add One Role Mapping to One Organization
     * @param param the request object
     */
    public createRoleMapping(param: FederatedAuthenticationApiCreateRoleMappingRequest, options?: Configuration): Promise<RoleMappingView> {
        return this.api.createRoleMapping(param.federationSettingsId, param.orgId, param.roleMappingView, param.envelope,  options).toPromise();
    }

    /**
     * Deletes the federation settings instance and all associated data, including identity providers and domains. To use this resource, the requesting API Key must have the Organization Owner role in the last remaining connected organization. This resource doesn't require the API Key to have an Access List. **Note**: requests to this resource will fail if there is more than one connected organization in the federation.
     * Delete the federation settings instance.
     * @param param the request object
     */
    public deleteFederationApp(param: FederatedAuthenticationApiDeleteFederationAppRequest, options?: Configuration): Promise<void> {
        return this.api.deleteFederationApp(param.federationSettingsId,  options).toPromise();
    }

    /**
     * Removes one role mapping in the specified organization from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Remove One Role Mapping from One Organization
     * @param param the request object
     */
    public deleteRoleMapping(param: FederatedAuthenticationApiDeleteRoleMappingRequest, options?: Configuration): Promise<void> {
        return this.api.deleteRoleMapping(param.federationSettingsId, param.id, param.orgId, param.envelope,  options).toPromise();
    }

    /**
     * Returns the specified connected org config from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in the connected org. This resource doesn't require the API Key to have an Access List.
     * Return One Org Config Connected to One Federation
     * @param param the request object
     */
    public getConnectedOrgConfig(param: FederatedAuthenticationApiGetConnectedOrgConfigRequest, options?: Configuration): Promise<ConnectedOrgConfigView> {
        return this.api.getConnectedOrgConfig(param.federationSettingsId, param.orgId, param.envelope,  options).toPromise();
    }

    /**
     * Returns information about the federation settings for the specified organization. To use this resource, the requesting API Key must have the Organization Owner role in the connected org. This resource doesn't require the API Key to have an Access List.
     * Return Federation Settings for One Organization
     * @param param the request object
     */
    public getFederationSettings(param: FederatedAuthenticationApiGetFederationSettingsRequest, options?: Configuration): Promise<OrgFederationSettingsView> {
        return this.api.getFederationSettings(param.orgId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns one identity provider from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations. This resource doesn't require the API Key to have an Access List.
     * Return one identity provider from the specified federation.
     * @param param the request object
     */
    public getIdentityProvider(param: FederatedAuthenticationApiGetIdentityProviderRequest, options?: Configuration): Promise<IdentityProviderView> {
        return this.api.getIdentityProvider(param.federationSettingsId, param.identityProviderId, param.envelope,  options).toPromise();
    }

    /**
     * Returns the metadata of one identity provider in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations. This resource doesn't require the API Key to have an Access List.
     * Return the metadata of one identity provider in the specified federation.
     * @param param the request object
     */
    public getIdentityProviderMetadata(param: FederatedAuthenticationApiGetIdentityProviderMetadataRequest, options?: Configuration): Promise<string> {
        return this.api.getIdentityProviderMetadata(param.federationSettingsId, param.identityProviderId,  options).toPromise();
    }

    /**
     * Returns one role mapping from the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Return One Role Mapping from One Organization
     * @param param the request object
     */
    public getRoleMapping(param: FederatedAuthenticationApiGetRoleMappingRequest, options?: Configuration): Promise<RoleMappingView> {
        return this.api.getRoleMapping(param.federationSettingsId, param.id, param.orgId, param.envelope,  options).toPromise();
    }

    /**
     * Returns all connected org configs in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected orgs. This resource doesn't require the API Key to have an Access List.
     * Return All Connected Org Configs from the Federation
     * @param param the request object
     */
    public listConnectedOrgConfigs(param: FederatedAuthenticationApiListConnectedOrgConfigsRequest, options?: Configuration): Promise<Array<ConnectedOrgConfigView>> {
        return this.api.listConnectedOrgConfigs(param.federationSettingsId, param.envelope,  options).toPromise();
    }

    /**
     * Returns all identity providers in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations. This resource doesn't require the API Key to have an Access List.
     * Return all identity providers from the specified federation.
     * @param param the request object
     */
    public listIdentityProviders(param: FederatedAuthenticationApiListIdentityProvidersRequest, options?: Configuration): Promise<Array<IdentityProviderView>> {
        return this.api.listIdentityProviders(param.federationSettingsId, param.envelope,  options).toPromise();
    }

    /**
     * Returns all role mappings from the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Return All Role Mappings from One Organization
     * @param param the request object
     */
    public listRoleMappings(param: FederatedAuthenticationApiListRoleMappingsRequest, options?: Configuration): Promise<Array<RoleMappingView>> {
        return this.api.listRoleMappings(param.federationSettingsId, param.orgId, param.envelope,  options).toPromise();
    }

    /**
     * Removes one connected organization configuration from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List. Note: This request fails if only one connected organization exists in the federation.
     * Remove One Org Config Connected to One Federation
     * @param param the request object
     */
    public removeConnectedOrgConfig(param: FederatedAuthenticationApiRemoveConnectedOrgConfigRequest, options?: Configuration): Promise<void> {
        return this.api.removeConnectedOrgConfig(param.federationSettingsId, param.orgId, param.envelope,  options).toPromise();
    }

    /**
     * Updates one connected organization configuration from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.   **Note** If the organization configuration has no associated identity provider, you can't use this resource to update role mappings or post authorization role grants.    **Note**: The domainRestrictionEnabled field defaults to false if not provided in the request.   **Note**: If the identityProviderId field is not provided, you will disconnect the organization and the identity provider.
     * Update One Org Config Connected to One Federation
     * @param param the request object
     */
    public updateConnectedOrgConfig(param: FederatedAuthenticationApiUpdateConnectedOrgConfigRequest, options?: Configuration): Promise<ConnectedOrgConfigView> {
        return this.api.updateConnectedOrgConfig(param.federationSettingsId, param.orgId, param.connectedOrgConfigView, param.envelope,  options).toPromise();
    }

    /**
     * Updates one identity provider in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations. This resource doesn't require the API Key to have an Access List.
     * Update the identity provider.
     * @param param the request object
     */
    public updateIdentityProvider(param: FederatedAuthenticationApiUpdateIdentityProviderRequest, options?: Configuration): Promise<IdentityProviderView> {
        return this.api.updateIdentityProvider(param.federationSettingsId, param.identityProviderId, param.identityProviderUpdate, param.envelope,  options).toPromise();
    }

    /**
     * Updates one role mapping in the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Update One Role Mapping in One Organization
     * @param param the request object
     */
    public updateRoleMapping(param: FederatedAuthenticationApiUpdateRoleMappingRequest, options?: Configuration): Promise<RoleMappingView> {
        return this.api.updateRoleMapping(param.federationSettingsId, param.id, param.orgId, param.roleMappingView, param.envelope,  options).toPromise();
    }

}

import { ObservableGlobalClustersApi } from "./ObservableAPI";
import { GlobalClustersApiRequestFactory, GlobalClustersApiResponseProcessor} from "../apis/GlobalClustersApi";

export interface GlobalClustersApiCreateCustomZoneMappingRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof GlobalClustersApicreateCustomZoneMapping
     */
    groupId: string
    /**
     * Human-readable label that identifies this advanced cluster.
     * @type string
     * @memberof GlobalClustersApicreateCustomZoneMapping
     */
    clusterName: string
    /**
     * Custom zone mapping to add to the specified global cluster.
     * @type GeoSharding
     * @memberof GlobalClustersApicreateCustomZoneMapping
     */
    geoSharding: GeoSharding
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof GlobalClustersApicreateCustomZoneMapping
     */
    envelope?: boolean
}

export interface GlobalClustersApiCreateManagedNamespaceRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof GlobalClustersApicreateManagedNamespace
     */
    groupId: string
    /**
     * Human-readable label that identifies this advanced cluster.
     * @type string
     * @memberof GlobalClustersApicreateManagedNamespace
     */
    clusterName: string
    /**
     * Managed namespace to create within the specified global cluster.
     * @type ManagedNamespaceView
     * @memberof GlobalClustersApicreateManagedNamespace
     */
    managedNamespaceView: ManagedNamespaceView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof GlobalClustersApicreateManagedNamespace
     */
    envelope?: boolean
}

export interface GlobalClustersApiDeleteAllCustomZoneMappingsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof GlobalClustersApideleteAllCustomZoneMappings
     */
    groupId: string
    /**
     * Human-readable label that identifies this advanced cluster.
     * @type string
     * @memberof GlobalClustersApideleteAllCustomZoneMappings
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof GlobalClustersApideleteAllCustomZoneMappings
     */
    envelope?: boolean
}

export interface GlobalClustersApiDeleteManagedNamespaceRequest {
    /**
     * Human-readable label that identifies this advanced cluster.
     * @type string
     * @memberof GlobalClustersApideleteManagedNamespace
     */
    clusterName: string
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof GlobalClustersApideleteManagedNamespace
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof GlobalClustersApideleteManagedNamespace
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof GlobalClustersApideleteManagedNamespace
     */
    pretty?: boolean
    /**
     * Human-readable label that identifies the database that contains the collection.
     * @type string
     * @memberof GlobalClustersApideleteManagedNamespace
     */
    db?: string
    /**
     * Human-readable label that identifies the collection associated with the managed namespace.
     * @type string
     * @memberof GlobalClustersApideleteManagedNamespace
     */
    collection?: string
}

export interface GlobalClustersApiGetManagedNamespaceRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof GlobalClustersApigetManagedNamespace
     */
    groupId: string
    /**
     * Human-readable label that identifies this advanced cluster.
     * @type string
     * @memberof GlobalClustersApigetManagedNamespace
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof GlobalClustersApigetManagedNamespace
     */
    envelope?: boolean
}

export class ObjectGlobalClustersApi {
    private api: ObservableGlobalClustersApi

    public constructor(configuration: Configuration, requestFactory?: GlobalClustersApiRequestFactory, responseProcessor?: GlobalClustersApiResponseProcessor) {
        this.api = new ObservableGlobalClustersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one custom zone mapping for the specified global cluster. A custom zone mapping matches one ISO 3166-2 location code to a zone in your global cluster. By default, MongoDB Cloud maps each location code to the closest geographical zone. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List. Deprecated versions: v2-{2023-01-01}
     * Add One Entry to One Custom Zone Mapping
     * @param param the request object
     */
    public createCustomZoneMapping(param: GlobalClustersApiCreateCustomZoneMappingRequest, options?: Configuration): Promise<GeoSharding> {
        return this.api.createCustomZoneMapping(param.groupId, param.clusterName, param.geoSharding, param.envelope,  options).toPromise();
    }

    /**
     * Creates one managed namespace within the specified global cluster. A managed namespace identifies a collection using the database name, the dot separator, and the collection name. To use this resource, the requesting API Key must have the Project Data Access Admin role. This resource doesn't require the API Key to have an Access List. Deprecated versions: v2-{2023-01-01}
     * Create One Managed Namespace in One Global Multi-Cloud Cluster
     * @param param the request object
     */
    public createManagedNamespace(param: GlobalClustersApiCreateManagedNamespaceRequest, options?: Configuration): Promise<GeoSharding> {
        return this.api.createManagedNamespace(param.groupId, param.clusterName, param.managedNamespaceView, param.envelope,  options).toPromise();
    }

    /**
     * Removes all custom zone mappings for the specified global cluster. A custom zone mapping matches one ISO 3166-2 location code to a zone in your global cluster. Removing the custom zone mappings restores the default mapping. By default, MongoDB Cloud maps each location code to the closest geographical zone. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List. Deprecated versions: v2-{2023-01-01}
     * Remove All Custom Zone Mappings from One Global Multi-Cloud Cluster
     * @param param the request object
     */
    public deleteAllCustomZoneMappings(param: GlobalClustersApiDeleteAllCustomZoneMappingsRequest, options?: Configuration): Promise<GeoSharding> {
        return this.api.deleteAllCustomZoneMappings(param.groupId, param.clusterName, param.envelope,  options).toPromise();
    }

    /**
     * Removes one managed namespace within the specified global cluster. A managed namespace identifies a collection using the database name, the dot separator, and the collection name. Deleting a managed namespace does not remove the associated collection or data. To use this resource, the requesting API Key must have the Project Data Access Admin role. This resource doesn't require the API Key to have an Access List. Deprecated versions: v2-{2023-01-01}
     * Remove One Managed Namespace from One Global Multi-Cloud Cluster
     * @param param the request object
     */
    public deleteManagedNamespace(param: GlobalClustersApiDeleteManagedNamespaceRequest, options?: Configuration): Promise<GeoSharding> {
        return this.api.deleteManagedNamespace(param.clusterName, param.groupId, param.envelope, param.pretty, param.db, param.collection,  options).toPromise();
    }

    /**
     * Returns one managed namespace within the specified global cluster. A managed namespace identifies a collection using the database name, the dot separator, and the collection name. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List. Deprecated versions: v2-{2023-01-01}
     * Return One Managed Namespace in One Global Multi-Cloud Cluster
     * @param param the request object
     */
    public getManagedNamespace(param: GlobalClustersApiGetManagedNamespaceRequest, options?: Configuration): Promise<GeoSharding> {
        return this.api.getManagedNamespace(param.groupId, param.clusterName, param.envelope,  options).toPromise();
    }

}

import { ObservableInvoicesApi } from "./ObservableAPI";
import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor} from "../apis/InvoicesApi";

export interface InvoicesApiDownloadInvoiceCSVRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof InvoicesApidownloadInvoiceCSV
     */
    orgId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the invoice submitted to the specified organization. Charges typically post the next day.
     * @type string
     * @memberof InvoicesApidownloadInvoiceCSV
     */
    invoiceId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof InvoicesApidownloadInvoiceCSV
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof InvoicesApidownloadInvoiceCSV
     */
    pretty?: boolean
}

export interface InvoicesApiGetInvoiceRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof InvoicesApigetInvoice
     */
    orgId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the invoice submitted to the specified organization. Charges typically post the next day.
     * @type string
     * @memberof InvoicesApigetInvoice
     */
    invoiceId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof InvoicesApigetInvoice
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof InvoicesApigetInvoice
     */
    pretty?: boolean
}

export interface InvoicesApiListInvoicesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof InvoicesApilistInvoices
     */
    orgId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof InvoicesApilistInvoices
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof InvoicesApilistInvoices
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof InvoicesApilistInvoices
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof InvoicesApilistInvoices
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof InvoicesApilistInvoices
     */
    pretty?: boolean
}

export interface InvoicesApiListPendingInvoicesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof InvoicesApilistPendingInvoices
     */
    orgId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof InvoicesApilistPendingInvoices
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof InvoicesApilistPendingInvoices
     */
    pretty?: boolean
}

export class ObjectInvoicesApi {
    private api: ObservableInvoicesApi

    public constructor(configuration: Configuration, requestFactory?: InvoicesApiRequestFactory, responseProcessor?: InvoicesApiResponseProcessor) {
        this.api = new ObservableInvoicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns one invoice that MongoDB issued to the specified organization in CSV format. A unique 24-hexadecimal digit string identifies the invoice. To use this resource, the requesting API Key must have the Organization Member role. If you have a cross-organization setup, you can query for a linked invoice if you have an Organization Billing Admin or Organization Owner Role. This resource doesn't require the API Key to have an Access List.
     * Return One Organization Invoice as CSV
     * @param param the request object
     */
    public downloadInvoiceCSV(param: InvoicesApiDownloadInvoiceCSVRequest, options?: Configuration): Promise<void> {
        return this.api.downloadInvoiceCSV(param.orgId, param.invoiceId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns one invoice that MongoDB issued to the specified organization. A unique 24-hexadecimal digit string identifies the invoice. You can choose to receive this invoice in JSON or CSV format. To use this resource, the requesting API Key must have the Organization Member role. If you have a cross-organization setup, you can query for a linked invoice if you have an Organization Billing Admin or Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Return One Organization Invoice
     * @param param the request object
     */
    public getInvoice(param: InvoicesApiGetInvoiceRequest, options?: Configuration): Promise<ApiInvoiceView> {
        return this.api.getInvoice(param.orgId, param.invoiceId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns all invoices that MongoDB issued to the specified organization. This list includes all invoices regardless of invoice status. To use this resource, the requesting API Key must have the Organization Member role. If you have a cross-organization setup, to view linked invoices, you must have an Organization Billing Admin or Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Return All Invoices for One Organization
     * @param param the request object
     */
    public listInvoices(param: InvoicesApiListInvoicesRequest, options?: Configuration): Promise<PaginatedApiInvoiceView> {
        return this.api.listInvoices(param.orgId, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

    /**
     * Returns all invoices accruing charges for the current billing cycle for the specified organization. To use this resource, the requesting API Key must have the Organization Member role.  If you have a cross-organization setup, to view linked invoices, you must have an Organization Billing Admin or Organization Owner Role. This resource doesn't require the API Key to have an Access List.
     * Return All Pending Invoices for One Organization
     * @param param the request object
     */
    public listPendingInvoices(param: InvoicesApiListPendingInvoicesRequest, options?: Configuration): Promise<PaginatedApiInvoiceView> {
        return this.api.listPendingInvoices(param.orgId, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableLDAPConfigurationApi } from "./ObservableAPI";
import { LDAPConfigurationApiRequestFactory, LDAPConfigurationApiResponseProcessor} from "../apis/LDAPConfigurationApi";

export interface LDAPConfigurationApiDeleteLDAPConfigurationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof LDAPConfigurationApideleteLDAPConfiguration
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof LDAPConfigurationApideleteLDAPConfiguration
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof LDAPConfigurationApideleteLDAPConfiguration
     */
    pretty?: boolean
}

export interface LDAPConfigurationApiGetLDAPConfigurationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof LDAPConfigurationApigetLDAPConfiguration
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof LDAPConfigurationApigetLDAPConfiguration
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof LDAPConfigurationApigetLDAPConfiguration
     */
    pretty?: boolean
}

export interface LDAPConfigurationApiGetLDAPConfigurationStatusRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof LDAPConfigurationApigetLDAPConfigurationStatus
     */
    groupId: string
    /**
     * Unique string that identifies the request to verify an &lt;abbr title&#x3D;\&quot;Lightweight Directory Access Protocol\&quot;&gt;LDAP&lt;/abbr&gt; configuration.
     * @type string
     * @memberof LDAPConfigurationApigetLDAPConfigurationStatus
     */
    requestId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof LDAPConfigurationApigetLDAPConfigurationStatus
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof LDAPConfigurationApigetLDAPConfigurationStatus
     */
    pretty?: boolean
}

export interface LDAPConfigurationApiSaveLDAPConfigurationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof LDAPConfigurationApisaveLDAPConfiguration
     */
    groupId: string
    /**
     * Updates the LDAP configuration for the specified project.
     * @type UserSecurity
     * @memberof LDAPConfigurationApisaveLDAPConfiguration
     */
    userSecurity: UserSecurity
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof LDAPConfigurationApisaveLDAPConfiguration
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof LDAPConfigurationApisaveLDAPConfiguration
     */
    pretty?: boolean
}

export interface LDAPConfigurationApiVerifyLDAPConfigurationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof LDAPConfigurationApiverifyLDAPConfiguration
     */
    groupId: string
    /**
     * The LDAP configuration for the specified project that you want to verify.
     * @type NDSLDAPVerifyConnectivityJobRequestParams
     * @memberof LDAPConfigurationApiverifyLDAPConfiguration
     */
    nDSLDAPVerifyConnectivityJobRequestParams: NDSLDAPVerifyConnectivityJobRequestParams
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof LDAPConfigurationApiverifyLDAPConfiguration
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof LDAPConfigurationApiverifyLDAPConfiguration
     */
    pretty?: boolean
}

export class ObjectLDAPConfigurationApi {
    private api: ObservableLDAPConfigurationApi

    public constructor(configuration: Configuration, requestFactory?: LDAPConfigurationApiRequestFactory, responseProcessor?: LDAPConfigurationApiResponseProcessor) {
        this.api = new ObservableLDAPConfigurationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Removes the current LDAP Distinguished Name mapping captured in the ``userToDNMapping`` document from the LDAP configuration for the specified project. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Remove the Current LDAP User to DN Mapping
     * @param param the request object
     */
    public deleteLDAPConfiguration(param: LDAPConfigurationApiDeleteLDAPConfigurationRequest, options?: Configuration): Promise<void> {
        return this.api.deleteLDAPConfiguration(param.groupId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the current LDAP configuration for the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Return the Current LDAP or X.509 Configuration
     * @param param the request object
     */
    public getLDAPConfiguration(param: LDAPConfigurationApiGetLDAPConfigurationRequest, options?: Configuration): Promise<UserSecurity> {
        return this.api.getLDAPConfiguration(param.groupId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the status of one request to verify one LDAP configuration for the specified project. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Return the Status of One Verify LDAP Configuration Request
     * @param param the request object
     */
    public getLDAPConfigurationStatus(param: LDAPConfigurationApiGetLDAPConfigurationStatusRequest, options?: Configuration): Promise<NDSLDAPVerifyConnectivityJobRequest> {
        return this.api.getLDAPConfigurationStatus(param.groupId, param.requestId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Edits the LDAP configuration for the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.  Updating this configuration triggers a rolling restart of the database.
     * Edit the LDAP or X.509 Configuration
     * @param param the request object
     */
    public saveLDAPConfiguration(param: LDAPConfigurationApiSaveLDAPConfigurationRequest, options?: Configuration): Promise<UserSecurity> {
        return this.api.saveLDAPConfiguration(param.groupId, param.userSecurity, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Verifies the LDAP configuration for the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Verify the LDAP Configuration in One Project
     * @param param the request object
     */
    public verifyLDAPConfiguration(param: LDAPConfigurationApiVerifyLDAPConfigurationRequest, options?: Configuration): Promise<NDSLDAPVerifyConnectivityJobRequest> {
        return this.api.verifyLDAPConfiguration(param.groupId, param.nDSLDAPVerifyConnectivityJobRequestParams, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableLegacyBackupApi } from "./ObservableAPI";
import { LegacyBackupApiRequestFactory, LegacyBackupApiResponseProcessor} from "../apis/LegacyBackupApi";

export interface LegacyBackupApiDeleteLegacySnapshotRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof LegacyBackupApideleteLegacySnapshot
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof LegacyBackupApideleteLegacySnapshot
     */
    clusterName: string
    /**
     * Unique 24-hexadecimal digit string that identifies the desired snapshot.
     * @type string
     * @memberof LegacyBackupApideleteLegacySnapshot
     */
    snapshotId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof LegacyBackupApideleteLegacySnapshot
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof LegacyBackupApideleteLegacySnapshot
     */
    pretty?: boolean
}

export interface LegacyBackupApiGetLegacyBackupCheckpointRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof LegacyBackupApigetLegacyBackupCheckpoint
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the checkpoint.
     * @type string
     * @memberof LegacyBackupApigetLegacyBackupCheckpoint
     */
    checkpointId: string
    /**
     * Human-readable label that identifies the cluster that contains the checkpoints that you want to return.
     * @type string
     * @memberof LegacyBackupApigetLegacyBackupCheckpoint
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof LegacyBackupApigetLegacyBackupCheckpoint
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof LegacyBackupApigetLegacyBackupCheckpoint
     */
    pretty?: boolean
}

export interface LegacyBackupApiGetLegacyBackupRestoreJobRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof LegacyBackupApigetLegacyBackupRestoreJob
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster with the snapshot you want to return.
     * @type string
     * @memberof LegacyBackupApigetLegacyBackupRestoreJob
     */
    clusterName: string
    /**
     * Unique 24-hexadecimal digit string that identifies the restore job.
     * @type string
     * @memberof LegacyBackupApigetLegacyBackupRestoreJob
     */
    jobId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof LegacyBackupApigetLegacyBackupRestoreJob
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof LegacyBackupApigetLegacyBackupRestoreJob
     */
    pretty?: boolean
}

export interface LegacyBackupApiGetLegacySnapshotRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof LegacyBackupApigetLegacySnapshot
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof LegacyBackupApigetLegacySnapshot
     */
    clusterName: string
    /**
     * Unique 24-hexadecimal digit string that identifies the desired snapshot.
     * @type string
     * @memberof LegacyBackupApigetLegacySnapshot
     */
    snapshotId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof LegacyBackupApigetLegacySnapshot
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof LegacyBackupApigetLegacySnapshot
     */
    pretty?: boolean
}

export interface LegacyBackupApiGetLegacySnapshotScheduleRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof LegacyBackupApigetLegacySnapshotSchedule
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster with the snapshot you want to return.
     * @type string
     * @memberof LegacyBackupApigetLegacySnapshotSchedule
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof LegacyBackupApigetLegacySnapshotSchedule
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof LegacyBackupApigetLegacySnapshotSchedule
     */
    pretty?: boolean
}

export interface LegacyBackupApiListLegacyBackupCheckpointsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof LegacyBackupApilistLegacyBackupCheckpoints
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster that contains the checkpoints that you want to return.
     * @type string
     * @memberof LegacyBackupApilistLegacyBackupCheckpoints
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof LegacyBackupApilistLegacyBackupCheckpoints
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof LegacyBackupApilistLegacyBackupCheckpoints
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof LegacyBackupApilistLegacyBackupCheckpoints
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof LegacyBackupApilistLegacyBackupCheckpoints
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof LegacyBackupApilistLegacyBackupCheckpoints
     */
    pretty?: boolean
}

export interface LegacyBackupApiListLegacyBackupRestoreJobsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof LegacyBackupApilistLegacyBackupRestoreJobs
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster with the snapshot you want to return.
     * @type string
     * @memberof LegacyBackupApilistLegacyBackupRestoreJobs
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof LegacyBackupApilistLegacyBackupRestoreJobs
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof LegacyBackupApilistLegacyBackupRestoreJobs
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof LegacyBackupApilistLegacyBackupRestoreJobs
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof LegacyBackupApilistLegacyBackupRestoreJobs
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof LegacyBackupApilistLegacyBackupRestoreJobs
     */
    pretty?: boolean
    /**
     * Unique 24-hexadecimal digit string that identifies the batch of restore jobs to return. Timestamp in ISO 8601 date and time format in UTC when creating a restore job for a sharded cluster, Application creates a separate job for each shard, plus another for the config host. Each of these jobs comprise one batch. A restore job for a replica set can&#39;t be part of a batch.
     * @type string
     * @memberof LegacyBackupApilistLegacyBackupRestoreJobs
     */
    batchId?: string
}

export interface LegacyBackupApiListLegacySnapshotsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof LegacyBackupApilistLegacySnapshots
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof LegacyBackupApilistLegacySnapshots
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof LegacyBackupApilistLegacySnapshots
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof LegacyBackupApilistLegacySnapshots
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof LegacyBackupApilistLegacySnapshots
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof LegacyBackupApilistLegacySnapshots
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof LegacyBackupApilistLegacySnapshots
     */
    pretty?: boolean
    /**
     * Human-readable label that specifies whether to return only completed, incomplete, or all snapshots. By default, MongoDB Cloud only returns completed snapshots.
     * @type &#39;all&#39; | &#39;true&#39; | &#39;false&#39;
     * @memberof LegacyBackupApilistLegacySnapshots
     */
    completed?: 'all' | 'true' | 'false'
}

export interface LegacyBackupApiUpdateLegacySnapshotRetentionRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof LegacyBackupApiupdateLegacySnapshotRetention
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof LegacyBackupApiupdateLegacySnapshotRetention
     */
    clusterName: string
    /**
     * Unique 24-hexadecimal digit string that identifies the desired snapshot.
     * @type string
     * @memberof LegacyBackupApiupdateLegacySnapshotRetention
     */
    snapshotId: string
    /**
     * Changes One Legacy Backup Snapshot Expiration.
     * @type ApiSnapshotView
     * @memberof LegacyBackupApiupdateLegacySnapshotRetention
     */
    apiSnapshotView: ApiSnapshotView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof LegacyBackupApiupdateLegacySnapshotRetention
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof LegacyBackupApiupdateLegacySnapshotRetention
     */
    pretty?: boolean
}

export interface LegacyBackupApiUpdateLegacySnapshotScheduleRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof LegacyBackupApiupdateLegacySnapshotSchedule
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster with the snapshot you want to return.
     * @type string
     * @memberof LegacyBackupApiupdateLegacySnapshotSchedule
     */
    clusterName: string
    /**
     * Update the snapshot schedule for one cluster in the specified project.
     * @type SnapshotSchedule
     * @memberof LegacyBackupApiupdateLegacySnapshotSchedule
     */
    snapshotSchedule: SnapshotSchedule
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof LegacyBackupApiupdateLegacySnapshotSchedule
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof LegacyBackupApiupdateLegacySnapshotSchedule
     */
    pretty?: boolean
}

export class ObjectLegacyBackupApi {
    private api: ObservableLegacyBackupApi

    public constructor(configuration: Configuration, requestFactory?: LegacyBackupApiRequestFactory, responseProcessor?: LegacyBackupApiResponseProcessor) {
        this.api = new ObservableLegacyBackupApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Removes one legacy backup snapshot for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Owner role and an entry for the project access list.
     * Remove One Legacy Backup Snapshot
     * @param param the request object
     */
    public deleteLegacySnapshot(param: LegacyBackupApiDeleteLegacySnapshotRequest, options?: Configuration): Promise<void> {
        return this.api.deleteLegacySnapshot(param.groupId, param.clusterName, param.snapshotId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns one legacy backup checkpoint for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Legacy Backup Checkpoint
     * @param param the request object
     */
    public getLegacyBackupCheckpoint(param: LegacyBackupApiGetLegacyBackupCheckpointRequest, options?: Configuration): Promise<Checkpoint> {
        return this.api.getLegacyBackupCheckpoint(param.groupId, param.checkpointId, param.clusterName, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns one legacy backup restore job for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Legacy Backup Restore Job
     * @param param the request object
     */
    public getLegacyBackupRestoreJob(param: LegacyBackupApiGetLegacyBackupRestoreJobRequest, options?: Configuration): Promise<ApiRestoreJobView> {
        return this.api.getLegacyBackupRestoreJob(param.groupId, param.clusterName, param.jobId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns one legacy backup snapshot for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Legacy Backup Snapshot
     * @param param the request object
     */
    public getLegacySnapshot(param: LegacyBackupApiGetLegacySnapshotRequest, options?: Configuration): Promise<ApiSnapshotView> {
        return this.api.getLegacySnapshot(param.groupId, param.clusterName, param.snapshotId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the snapshot schedule for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Snapshot Schedule
     * @param param the request object
     */
    public getLegacySnapshotSchedule(param: LegacyBackupApiGetLegacySnapshotScheduleRequest, options?: Configuration): Promise<SnapshotSchedule> {
        return this.api.getLegacySnapshotSchedule(param.groupId, param.clusterName, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns all legacy backup checkpoints for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Legacy Backup Checkpoints
     * @param param the request object
     */
    public listLegacyBackupCheckpoints(param: LegacyBackupApiListLegacyBackupCheckpointsRequest, options?: Configuration): Promise<PaginatedApiAtlasCheckpointView> {
        return this.api.listLegacyBackupCheckpoints(param.groupId, param.clusterName, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

    /**
     * Returns all legacy backup restore jobs for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Legacy Backup Restore Jobs
     * @param param the request object
     */
    public listLegacyBackupRestoreJobs(param: LegacyBackupApiListLegacyBackupRestoreJobsRequest, options?: Configuration): Promise<PaginatedRestoreJobView> {
        return this.api.listLegacyBackupRestoreJobs(param.groupId, param.clusterName, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty, param.batchId,  options).toPromise();
    }

    /**
     * Returns all legacy backup snapshots for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Legacy Backup Snapshots
     * @param param the request object
     */
    public listLegacySnapshots(param: LegacyBackupApiListLegacySnapshotsRequest, options?: Configuration): Promise<PaginatedSnapshotView> {
        return this.api.listLegacySnapshots(param.groupId, param.clusterName, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty, param.completed,  options).toPromise();
    }

    /**
     * Changes the expiration date for one legacy backup snapshot for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Atlas Admin role and an entry for the project access list.
     * Change One Legacy Backup Snapshot Expiration
     * @param param the request object
     */
    public updateLegacySnapshotRetention(param: LegacyBackupApiUpdateLegacySnapshotRetentionRequest, options?: Configuration): Promise<ApiSnapshotView> {
        return this.api.updateLegacySnapshotRetention(param.groupId, param.clusterName, param.snapshotId, param.apiSnapshotView, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Update the snapshot schedule for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Atlas Admin role.
     * Update Snapshot Schedule for One Cluster
     * @param param the request object
     */
    public updateLegacySnapshotSchedule(param: LegacyBackupApiUpdateLegacySnapshotScheduleRequest, options?: Configuration): Promise<SnapshotSchedule> {
        return this.api.updateLegacySnapshotSchedule(param.groupId, param.clusterName, param.snapshotSchedule, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableLegacyBackupRestoreJobsApi } from "./ObservableAPI";
import { LegacyBackupRestoreJobsApiRequestFactory, LegacyBackupRestoreJobsApiResponseProcessor} from "../apis/LegacyBackupRestoreJobsApi";

export interface LegacyBackupRestoreJobsApiCreateLegacyBackupRestoreJobRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof LegacyBackupRestoreJobsApicreateLegacyBackupRestoreJob
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster with the snapshot you want to return.
     * @type string
     * @memberof LegacyBackupRestoreJobsApicreateLegacyBackupRestoreJob
     */
    clusterName: string
    /**
     * Legacy backup to restore to one cluster in the specified project.
     * @type ApiRestoreJobView
     * @memberof LegacyBackupRestoreJobsApicreateLegacyBackupRestoreJob
     */
    apiRestoreJobView: ApiRestoreJobView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof LegacyBackupRestoreJobsApicreateLegacyBackupRestoreJob
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof LegacyBackupRestoreJobsApicreateLegacyBackupRestoreJob
     */
    pretty?: boolean
}

export class ObjectLegacyBackupRestoreJobsApi {
    private api: ObservableLegacyBackupRestoreJobsApi

    public constructor(configuration: Configuration, requestFactory?: LegacyBackupRestoreJobsApiRequestFactory, responseProcessor?: LegacyBackupRestoreJobsApiResponseProcessor) {
        this.api = new ObservableLegacyBackupRestoreJobsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Restores one legacy backup for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Atlas Admin role and an entry for the project access list.
     * Create One Legacy Backup Restore Job
     * @param param the request object
     */
    public createLegacyBackupRestoreJob(param: LegacyBackupRestoreJobsApiCreateLegacyBackupRestoreJobRequest, options?: Configuration): Promise<PaginatedRestoreJobView> {
        return this.api.createLegacyBackupRestoreJob(param.groupId, param.clusterName, param.apiRestoreJobView, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableMaintenanceWindowsApi } from "./ObservableAPI";
import { MaintenanceWindowsApiRequestFactory, MaintenanceWindowsApiResponseProcessor} from "../apis/MaintenanceWindowsApi";

export interface MaintenanceWindowsApiDeferMaintenanceWindowRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MaintenanceWindowsApideferMaintenanceWindow
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MaintenanceWindowsApideferMaintenanceWindow
     */
    envelope?: boolean
}

export interface MaintenanceWindowsApiGetMaintenanceWindowRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MaintenanceWindowsApigetMaintenanceWindow
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MaintenanceWindowsApigetMaintenanceWindow
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof MaintenanceWindowsApigetMaintenanceWindow
     */
    pretty?: boolean
}

export interface MaintenanceWindowsApiResetMaintenanceWindowRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MaintenanceWindowsApiresetMaintenanceWindow
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MaintenanceWindowsApiresetMaintenanceWindow
     */
    envelope?: boolean
}

export interface MaintenanceWindowsApiToggleMaintenanceAutoDeferRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MaintenanceWindowsApitoggleMaintenanceAutoDefer
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MaintenanceWindowsApitoggleMaintenanceAutoDefer
     */
    envelope?: boolean
}

export interface MaintenanceWindowsApiUpdateMaintenanceWindowRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MaintenanceWindowsApiupdateMaintenanceWindow
     */
    groupId: string
    /**
     * Updates the maintenance window for the specified project.
     * @type GroupMaintenanceWindow
     * @memberof MaintenanceWindowsApiupdateMaintenanceWindow
     */
    groupMaintenanceWindow: GroupMaintenanceWindow
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MaintenanceWindowsApiupdateMaintenanceWindow
     */
    envelope?: boolean
}

export class ObjectMaintenanceWindowsApi {
    private api: ObservableMaintenanceWindowsApi

    public constructor(configuration: Configuration, requestFactory?: MaintenanceWindowsApiRequestFactory, responseProcessor?: MaintenanceWindowsApiResponseProcessor) {
        this.api = new ObservableMaintenanceWindowsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Defers the maintenance window for the specified project. To use this resource, the requesting API Key must have the Project Atlas Admin role.This resource doesn't require the API Key to have an Access List.
     * Defer One Maintenance Window for One Project
     * @param param the request object
     */
    public deferMaintenanceWindow(param: MaintenanceWindowsApiDeferMaintenanceWindowRequest, options?: Configuration): Promise<void> {
        return this.api.deferMaintenanceWindow(param.groupId, param.envelope,  options).toPromise();
    }

    /**
     * Returns the maintenance window for the specified project. To use this resource, the requesting API Key must have the Project Read Only role.This resource doesn't require the API Key to have an Access List.
     * Return One Maintenance Window for One Project
     * @param param the request object
     */
    public getMaintenanceWindow(param: MaintenanceWindowsApiGetMaintenanceWindowRequest, options?: Configuration): Promise<GroupMaintenanceWindow> {
        return this.api.getMaintenanceWindow(param.groupId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Resets the maintenance window for the specified project. To use this resource, the requesting API Key must have the Project Atlas Admin role.This resource doesn't require the API Key to have an Access List.
     * Reset One Maintenance Window for One Project
     * @param param the request object
     */
    public resetMaintenanceWindow(param: MaintenanceWindowsApiResetMaintenanceWindowRequest, options?: Configuration): Promise<void> {
        return this.api.resetMaintenanceWindow(param.groupId, param.envelope,  options).toPromise();
    }

    /**
     * Toggles automatic deferral of the maintenance window for the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Toggle Automatic Deferral of Maintenance for One Project
     * @param param the request object
     */
    public toggleMaintenanceAutoDefer(param: MaintenanceWindowsApiToggleMaintenanceAutoDeferRequest, options?: Configuration): Promise<void> {
        return this.api.toggleMaintenanceAutoDefer(param.groupId, param.envelope,  options).toPromise();
    }

    /**
     * Updates the maintenance window for the specified project. To use this resource, the requesting API Key must have the Project Atlas Admin role.This resource doesn't require the API Key to have an Access List.
     * Update Maintenance Window for One Project
     * @param param the request object
     */
    public updateMaintenanceWindow(param: MaintenanceWindowsApiUpdateMaintenanceWindowRequest, options?: Configuration): Promise<void> {
        return this.api.updateMaintenanceWindow(param.groupId, param.groupMaintenanceWindow, param.envelope,  options).toPromise();
    }

}

import { ObservableMongoDBCloudUsersApi } from "./ObservableAPI";
import { MongoDBCloudUsersApiRequestFactory, MongoDBCloudUsersApiResponseProcessor} from "../apis/MongoDBCloudUsersApi";

export interface MongoDBCloudUsersApiCreateUserRequest {
    /**
     * MongoDB Cloud user account to create.
     * @type ApiAppUserView
     * @memberof MongoDBCloudUsersApicreateUser
     */
    apiAppUserView: ApiAppUserView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MongoDBCloudUsersApicreateUser
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof MongoDBCloudUsersApicreateUser
     */
    pretty?: boolean
}

export interface MongoDBCloudUsersApiGetUserRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies this user.
     * @type string
     * @memberof MongoDBCloudUsersApigetUser
     */
    userId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MongoDBCloudUsersApigetUser
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof MongoDBCloudUsersApigetUser
     */
    pretty?: boolean
}

export interface MongoDBCloudUsersApiGetUserByUsernameRequest {
    /**
     * Email address that belongs to the MongoDB Cloud user account. You cannot modify this address after creating the user.
     * @type string
     * @memberof MongoDBCloudUsersApigetUserByUsername
     */
    userName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MongoDBCloudUsersApigetUserByUsername
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof MongoDBCloudUsersApigetUserByUsername
     */
    pretty?: boolean
}

export class ObjectMongoDBCloudUsersApi {
    private api: ObservableMongoDBCloudUsersApi

    public constructor(configuration: Configuration, requestFactory?: MongoDBCloudUsersApiRequestFactory, responseProcessor?: MongoDBCloudUsersApiResponseProcessor) {
        this.api = new ObservableMongoDBCloudUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one MongoDB Cloud user account. A MongoDB Cloud user account only grants access to the MongoDB Cloud application. To grant database access, create a database user. To use this resource, the requesting API Key can have any role. This resource doesn't require the API Key to have an Access List.
     * Create One MongoDB Cloud User
     * @param param the request object
     */
    public createUser(param: MongoDBCloudUsersApiCreateUserRequest, options?: Configuration): Promise<ApiAppUserView> {
        return this.api.createUser(param.apiAppUserView, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the details for one MongoDB Cloud user account with the specified unique identifier for the user. To use this resource, the requesting API Key can have any role. This resource doesn't require the API Key to have an Access List.
     * Return One MongoDB Cloud User using Its ID
     * @param param the request object
     */
    public getUser(param: MongoDBCloudUsersApiGetUserRequest, options?: Configuration): Promise<ApiAppUserView> {
        return this.api.getUser(param.userId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the details for one MongoDB Cloud user account with the specified username. To use this resource, the requesting API Key can have any role. This resource doesn't require the API Key to have an Access List.
     * Return One MongoDB Cloud User using Their Username
     * @param param the request object
     */
    public getUserByUsername(param: MongoDBCloudUsersApiGetUserByUsernameRequest, options?: Configuration): Promise<ApiAppUserView> {
        return this.api.getUserByUsername(param.userName, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableMonitoringAndLogsApi } from "./ObservableAPI";
import { MonitoringAndLogsApiRequestFactory, MonitoringAndLogsApiResponseProcessor} from "../apis/MonitoringAndLogsApi";

export interface MonitoringAndLogsApiGetAtlasProcessRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MonitoringAndLogsApigetAtlasProcess
     */
    groupId: string
    /**
     * Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @type string
     * @memberof MonitoringAndLogsApigetAtlasProcess
     */
    processId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MonitoringAndLogsApigetAtlasProcess
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof MonitoringAndLogsApigetAtlasProcess
     */
    pretty?: boolean
}

export interface MonitoringAndLogsApiGetDatabaseRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MonitoringAndLogsApigetDatabase
     */
    groupId: string
    /**
     * Human-readable label that identifies the database that the specified MongoDB process serves.
     * @type string
     * @memberof MonitoringAndLogsApigetDatabase
     */
    databaseName: string
    /**
     * Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @type string
     * @memberof MonitoringAndLogsApigetDatabase
     */
    processId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MonitoringAndLogsApigetDatabase
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof MonitoringAndLogsApigetDatabase
     */
    pretty?: boolean
}

export interface MonitoringAndLogsApiGetDatabaseMeasurementsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MonitoringAndLogsApigetDatabaseMeasurements
     */
    groupId: string
    /**
     * Human-readable label that identifies the database that the specified MongoDB process serves.
     * @type string
     * @memberof MonitoringAndLogsApigetDatabaseMeasurements
     */
    databaseName: string
    /**
     * Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @type string
     * @memberof MonitoringAndLogsApigetDatabaseMeasurements
     */
    processId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MonitoringAndLogsApigetDatabaseMeasurements
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof MonitoringAndLogsApigetDatabaseMeasurements
     */
    pretty?: boolean
    /**
     * One or more types of measurement to request for this MongoDB process. If omitted, the resource returns all measurements. To specify multiple values for &#x60;m&#x60;, repeat the &#x60;m&#x60; parameter for each value. Specify measurements that apply to the specified host. MongoDB Cloud returns an error if you specified any invalid measurements.
     * @type Set&lt;&#39;DATABASE_AVERAGE_OBJECT_SIZE&#39; | &#39;DATABASE_COLLECTION_COUNT&#39; | &#39;DATABASE_DATA_SIZE&#39; | &#39;DATABASE_STORAGE_SIZE&#39; | &#39;DATABASE_INDEX_SIZE&#39; | &#39;DATABASE_INDEX_COUNT&#39; | &#39;DATABASE_EXTENT_COUNT&#39; | &#39;DATABASE_OBJECT_COUNT&#39; | &#39;DATABASE_VIEW_COUNT&#39;&gt;
     * @memberof MonitoringAndLogsApigetDatabaseMeasurements
     */
    m?: Set<'DATABASE_AVERAGE_OBJECT_SIZE' | 'DATABASE_COLLECTION_COUNT' | 'DATABASE_DATA_SIZE' | 'DATABASE_STORAGE_SIZE' | 'DATABASE_INDEX_SIZE' | 'DATABASE_INDEX_COUNT' | 'DATABASE_EXTENT_COUNT' | 'DATABASE_OBJECT_COUNT' | 'DATABASE_VIEW_COUNT'>
}

export interface MonitoringAndLogsApiGetDiskMeasurementsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MonitoringAndLogsApigetDiskMeasurements
     */
    groupId: string
    /**
     * Human-readable label of the disk or partition to which the measurements apply.
     * @type string
     * @memberof MonitoringAndLogsApigetDiskMeasurements
     */
    partitionName: string
    /**
     * Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @type string
     * @memberof MonitoringAndLogsApigetDiskMeasurements
     */
    processId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MonitoringAndLogsApigetDiskMeasurements
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof MonitoringAndLogsApigetDiskMeasurements
     */
    pretty?: boolean
    /**
     * One or more types of measurement to request for this MongoDB process. If omitted, the resource returns all measurements. To specify multiple values for &#x60;m&#x60;, repeat the &#x60;m&#x60; parameter for each value. Specify measurements that apply to the specified host. MongoDB Cloud returns an error if you specified any invalid measurements.
     * @type Set&lt;&#39;DISK_PARTITION_IOPS_READ&#39; | &#39;MAX_DISK_PARTITION_IOPS_READ&#39; | &#39;DISK_PARTITION_IOPS_WRITE&#39; | &#39;MAX_DISK_PARTITION_IOPS_WRITE&#39; | &#39;DISK_PARTITION_IOPS_TOTAL&#39; | &#39;MAX_DISK_PARTITION_IOPS_TOTAL&#39; | &#39;DISK_PARTITION_UTILIZATION&#39; | &#39;MAX_DISK_PARTITION_UTILIZATION&#39; | &#39;DISK_PARTITION_LATENCY_READ&#39; | &#39;MAX_DISK_PARTITION_LATENCY_READ&#39; | &#39;DISK_PARTITION_LATENCY_WRITE&#39; | &#39;MAX_DISK_PARTITION_LATENCY_WRITE&#39; | &#39;DISK_PARTITION_SPACE_FREE&#39; | &#39;MAX_DISK_PARTITION_SPACE_FREE&#39; | &#39;DISK_PARTITION_SPACE_USED&#39; | &#39;MAX_DISK_PARTITION_SPACE_USED&#39; | &#39;DISK_PARTITION_SPACE_PERCENT_FREE&#39; | &#39;MAX_DISK_PARTITION_SPACE_PERCENT_FREE&#39; | &#39;DISK_PARTITION_SPACE_PERCENT_USED&#39; | &#39;MAX_DISK_PARTITION_SPACE_PERCENT_USED&#39;&gt;
     * @memberof MonitoringAndLogsApigetDiskMeasurements
     */
    m?: Set<'DISK_PARTITION_IOPS_READ' | 'MAX_DISK_PARTITION_IOPS_READ' | 'DISK_PARTITION_IOPS_WRITE' | 'MAX_DISK_PARTITION_IOPS_WRITE' | 'DISK_PARTITION_IOPS_TOTAL' | 'MAX_DISK_PARTITION_IOPS_TOTAL' | 'DISK_PARTITION_UTILIZATION' | 'MAX_DISK_PARTITION_UTILIZATION' | 'DISK_PARTITION_LATENCY_READ' | 'MAX_DISK_PARTITION_LATENCY_READ' | 'DISK_PARTITION_LATENCY_WRITE' | 'MAX_DISK_PARTITION_LATENCY_WRITE' | 'DISK_PARTITION_SPACE_FREE' | 'MAX_DISK_PARTITION_SPACE_FREE' | 'DISK_PARTITION_SPACE_USED' | 'MAX_DISK_PARTITION_SPACE_USED' | 'DISK_PARTITION_SPACE_PERCENT_FREE' | 'MAX_DISK_PARTITION_SPACE_PERCENT_FREE' | 'DISK_PARTITION_SPACE_PERCENT_USED' | 'MAX_DISK_PARTITION_SPACE_PERCENT_USED'>
}

export interface MonitoringAndLogsApiGetHostLogsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MonitoringAndLogsApigetHostLogs
     */
    groupId: string
    /**
     * Fully qualified domain name or IP address of the MongoDB host that stores the log files that you want to download.
     * @type string
     * @memberof MonitoringAndLogsApigetHostLogs
     */
    hostName: string
    /**
     * Human-readable label of the log file that you want to return. You can return audit logs only if you enable Database Auditing for the specified project.
     * @type &#39;mongodb&#39; | &#39;mongos&#39; | &#39;mongodb-audit-log&#39; | &#39;mongos-audit-log&#39;
     * @memberof MonitoringAndLogsApigetHostLogs
     */
    logName: 'mongodb' | 'mongos' | 'mongodb-audit-log' | 'mongos-audit-log'
    /**
     * Date and time when the period specifies the inclusive ending point for the range of log messages to retrieve. This parameter expresses its value in the number of seconds that have elapsed since the UNIX epoch.
     * @type number
     * @memberof MonitoringAndLogsApigetHostLogs
     */
    endDate?: number
    /**
     * Date and time when the period specifies the inclusive starting point for the range of log messages to retrieve. This parameter expresses its value in the number of seconds that have elapsed since the UNIX epoch.
     * @type number
     * @memberof MonitoringAndLogsApigetHostLogs
     */
    startDate?: number
}

export interface MonitoringAndLogsApiGetHostMeasurementsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MonitoringAndLogsApigetHostMeasurements
     */
    groupId: string
    /**
     * Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @type string
     * @memberof MonitoringAndLogsApigetHostMeasurements
     */
    processId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MonitoringAndLogsApigetHostMeasurements
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof MonitoringAndLogsApigetHostMeasurements
     */
    pretty?: boolean
    /**
     * One or more types of measurement to request for this MongoDB process. If omitted, the resource returns all measurements. To specify multiple values for &#x60;m&#x60;, repeat the &#x60;m&#x60; parameter for each value. Specify measurements that apply to the specified host. MongoDB Cloud returns an error if you specified any invalid measurements.
     * @type Set&lt;&#39;ASSERT_MSG&#39; | &#39;ASSERT_REGULAR&#39; | &#39;ASSERT_USER&#39; | &#39;ASSERT_WARNING&#39; | &#39;BACKGROUND_FLUSH_AVG&#39; | &#39;CACHE_BYTES_READ_INTO&#39; | &#39;CACHE_BYTES_WRITTEN_FROM&#39; | &#39;CACHE_DIRTY_BYTES&#39; | &#39;CACHE_USED_BYTES&#39; | &#39;COMPUTED_MEMORY&#39; | &#39;CONNECTIONS&#39; | &#39;CURSORS_TOTAL_OPEN&#39; | &#39;CURSORS_TOTAL_TIMED_OUT&#39; | &#39;DB_DATA_SIZE_TOTAL&#39; | &#39;DB_STORAGE_TOTAL&#39; | &#39;DOCUMENT_METRICS_DELETED&#39; | &#39;DOCUMENT_METRICS_INSERTED&#39; | &#39;DOCUMENT_METRICS_RETURNED&#39; | &#39;DOCUMENT_METRICS_UPDATED&#39; | &#39;EXTRA_INFO_PAGE_FAULTS&#39; | &#39;FTS_DISK_UTILIZATION&#39; | &#39;FTS_MEMORY_MAPPED&#39; | &#39;FTS_MEMORY_RESIDENT&#39; | &#39;FTS_MEMORY_VIRTUAL&#39; | &#39;FTS_PROCESS_CPU_KERNEL&#39; | &#39;FTS_PROCESS_CPU_USER&#39; | &#39;FTS_PROCESS_NORMALIZED_CPU_KERNEL&#39; | &#39;FTS_PROCESS_NORMALIZED_CPU_USER&#39; | &#39;GLOBAL_ACCESSES_NOT_IN_MEMORY&#39; | &#39;GLOBAL_LOCK_CURRENT_QUEUE_READERS&#39; | &#39;GLOBAL_LOCK_CURRENT_QUEUE_TOTAL&#39; | &#39;GLOBAL_LOCK_CURRENT_QUEUE_WRITERS&#39; | &#39;GLOBAL_PAGE_FAULT_EXCEPTIONS_THROWN&#39; | &#39;INDEX_COUNTERS_BTREE_ACCESSES&#39; | &#39;INDEX_COUNTERS_BTREE_HITS&#39; | &#39;INDEX_COUNTERS_BTREE_MISS_RATIO&#39; | &#39;INDEX_COUNTERS_BTREE_MISSES&#39; | &#39;JOURNALING_COMMITS_IN_WRITE_LOCK&#39; | &#39;JOURNALING_MB&#39; | &#39;JOURNALING_WRITE_DATA_FILES_MB&#39; | &#39;MAX_PROCESS_CPU_CHILDREN_KERNEL&#39; | &#39;MAX_PROCESS_CPU_CHILDREN_USER&#39; | &#39;MAX_PROCESS_CPU_KERNEL&#39; | &#39;MAX_PROCESS_CPU_USER&#39; | &#39;MAX_PROCESS_NORMALIZED_CPU_CHILDREN_KERNEL&#39; | &#39;MAX_PROCESS_NORMALIZED_CPU_CHILDREN_USER&#39; | &#39;MAX_PROCESS_NORMALIZED_CPU_KERNEL&#39; | &#39;MAX_PROCESS_NORMALIZED_CPU_USER&#39; | &#39;MAX_SWAP_USAGE_FREE&#39; | &#39;MAX_SWAP_USAGE_USED &#39; | &#39;MAX_SYSTEM_CPU_GUEST&#39; | &#39;MAX_SYSTEM_CPU_IOWAIT&#39; | &#39;MAX_SYSTEM_CPU_IRQ&#39; | &#39;MAX_SYSTEM_CPU_KERNEL&#39; | &#39;MAX_SYSTEM_CPU_SOFTIRQ&#39; | &#39;MAX_SYSTEM_CPU_STEAL&#39; | &#39;MAX_SYSTEM_CPU_USER&#39; | &#39;MAX_SYSTEM_MEMORY_AVAILABLE&#39; | &#39;MAX_SYSTEM_MEMORY_FREE&#39; | &#39;MAX_SYSTEM_MEMORY_USED&#39; | &#39;MAX_SYSTEM_NETWORK_IN&#39; | &#39;MAX_SYSTEM_NETWORK_OUT&#39; | &#39;MAX_SYSTEM_NORMALIZED_CPU_GUEST&#39; | &#39;MAX_SYSTEM_NORMALIZED_CPU_IOWAIT&#39; | &#39;MAX_SYSTEM_NORMALIZED_CPU_IRQ&#39; | &#39;MAX_SYSTEM_NORMALIZED_CPU_KERNEL&#39; | &#39;MAX_SYSTEM_NORMALIZED_CPU_NICE&#39; | &#39;MAX_SYSTEM_NORMALIZED_CPU_SOFTIRQ&#39; | &#39;MAX_SYSTEM_NORMALIZED_CPU_STEAL&#39; | &#39;MAX_SYSTEM_NORMALIZED_CPU_USER&#39; | &#39;MEMORY_MAPPED&#39; | &#39;MEMORY_RESIDENT&#39; | &#39;MEMORY_VIRTUAL&#39; | &#39;NETWORK_BYTES_IN&#39; | &#39;NETWORK_BYTES_OUT&#39; | &#39;NETWORK_NUM_REQUESTS&#39; | &#39;OP_EXECUTION_TIME_COMMANDS&#39; | &#39;OP_EXECUTION_TIME_READS&#39; | &#39;OP_EXECUTION_TIME_WRITES&#39; | &#39;OPCOUNTER_CMD&#39; | &#39;OPCOUNTER_DELETE&#39; | &#39;OPCOUNTER_GETMORE&#39; | &#39;OPCOUNTER_INSERT&#39; | &#39;OPCOUNTER_QUERY&#39; | &#39;OPCOUNTER_REPL_CMD&#39; | &#39;OPCOUNTER_REPL_DELETE&#39; | &#39;OPCOUNTER_REPL_INSERT&#39; | &#39;OPCOUNTER_REPL_UPDATE&#39; | &#39;OPCOUNTER_UPDATE&#39; | &#39;OPERATIONS_SCAN_AND_ORDER&#39; | &#39;OPLOG_MASTER_LAG_TIME_DIFF&#39; | &#39;OPLOG_MASTER_TIME&#39; | &#39;OPLOG_RATE_GB_PER_HOUR&#39; | &#39;OPLOG_SLAVE_LAG_MASTER_TIME&#39; | &#39;OPLOG_REPLICATION_LAG&#39; | &#39;PROCESS_CPU_CHILDREN_KERNEL&#39; | &#39;PROCESS_CPU_CHILDREN_USER&#39; | &#39;PROCESS_CPU_KERNEL&#39; | &#39;PROCESS_CPU_USER&#39; | &#39;PROCESS_NORMALIZED_CPU_CHILDREN_KERNEL&#39; | &#39;PROCESS_NORMALIZED_CPU_CHILDREN_USER&#39; | &#39;PROCESS_NORMALIZED_CPU_KERNEL&#39; | &#39;PROCESS_NORMALIZED_CPU_USER&#39; | &#39;QUERY_EXECUTOR_SCANNED&#39; | &#39;QUERY_EXECUTOR_SCANNED_OBJECTS&#39; | &#39;QUERY_TARGETING_SCANNED_OBJECTS_PER_RETURNED&#39; | &#39;QUERY_TARGETING_SCANNED_PER_RETURNED&#39; | &#39;RESTARTS_IN_LAST_HOUR&#39; | &#39;SWAP_USAGE_FREE&#39; | &#39;SWAP_USAGE_USED&#39; | &#39;SYSTEM_CPU_GUEST&#39; | &#39;SYSTEM_CPU_IOWAIT&#39; | &#39;SYSTEM_CPU_IRQ&#39; | &#39;SYSTEM_CPU_KERNEL&#39; | &#39;SYSTEM_CPU_NICE&#39; | &#39;SYSTEM_CPU_SOFTIRQ&#39; | &#39;SYSTEM_CPU_STEAL&#39; | &#39;SYSTEM_CPU_USER&#39; | &#39;SYSTEM_MEMORY_AVAILABLE&#39; | &#39;SYSTEM_MEMORY_FREE&#39; | &#39;SYSTEM_MEMORY_USED&#39; | &#39;SYSTEM_NETWORK_IN&#39; | &#39;SYSTEM_NETWORK_OUT&#39; | &#39;SYSTEM_NORMALIZED_CPU_GUEST&#39; | &#39;SYSTEM_NORMALIZED_CPU_IOWAIT&#39; | &#39;SYSTEM_NORMALIZED_CPU_IRQ&#39; | &#39;SYSTEM_NORMALIZED_CPU_KERNEL&#39; | &#39;SYSTEM_NORMALIZED_CPU_NICE&#39; | &#39;SYSTEM_NORMALIZED_CPU_SOFTIRQ&#39; | &#39;SYSTEM_NORMALIZED_CPU_STEAL&#39; | &#39;SYSTEM_NORMALIZED_CPU_USER&#39; | &#39;TICKETS_AVAILABLE_READS&#39; | &#39;TICKETS_AVAILABLE_WRITE&#39;&gt;
     * @memberof MonitoringAndLogsApigetHostMeasurements
     */
    m?: Set<'ASSERT_MSG' | 'ASSERT_REGULAR' | 'ASSERT_USER' | 'ASSERT_WARNING' | 'BACKGROUND_FLUSH_AVG' | 'CACHE_BYTES_READ_INTO' | 'CACHE_BYTES_WRITTEN_FROM' | 'CACHE_DIRTY_BYTES' | 'CACHE_USED_BYTES' | 'COMPUTED_MEMORY' | 'CONNECTIONS' | 'CURSORS_TOTAL_OPEN' | 'CURSORS_TOTAL_TIMED_OUT' | 'DB_DATA_SIZE_TOTAL' | 'DB_STORAGE_TOTAL' | 'DOCUMENT_METRICS_DELETED' | 'DOCUMENT_METRICS_INSERTED' | 'DOCUMENT_METRICS_RETURNED' | 'DOCUMENT_METRICS_UPDATED' | 'EXTRA_INFO_PAGE_FAULTS' | 'FTS_DISK_UTILIZATION' | 'FTS_MEMORY_MAPPED' | 'FTS_MEMORY_RESIDENT' | 'FTS_MEMORY_VIRTUAL' | 'FTS_PROCESS_CPU_KERNEL' | 'FTS_PROCESS_CPU_USER' | 'FTS_PROCESS_NORMALIZED_CPU_KERNEL' | 'FTS_PROCESS_NORMALIZED_CPU_USER' | 'GLOBAL_ACCESSES_NOT_IN_MEMORY' | 'GLOBAL_LOCK_CURRENT_QUEUE_READERS' | 'GLOBAL_LOCK_CURRENT_QUEUE_TOTAL' | 'GLOBAL_LOCK_CURRENT_QUEUE_WRITERS' | 'GLOBAL_PAGE_FAULT_EXCEPTIONS_THROWN' | 'INDEX_COUNTERS_BTREE_ACCESSES' | 'INDEX_COUNTERS_BTREE_HITS' | 'INDEX_COUNTERS_BTREE_MISS_RATIO' | 'INDEX_COUNTERS_BTREE_MISSES' | 'JOURNALING_COMMITS_IN_WRITE_LOCK' | 'JOURNALING_MB' | 'JOURNALING_WRITE_DATA_FILES_MB' | 'MAX_PROCESS_CPU_CHILDREN_KERNEL' | 'MAX_PROCESS_CPU_CHILDREN_USER' | 'MAX_PROCESS_CPU_KERNEL' | 'MAX_PROCESS_CPU_USER' | 'MAX_PROCESS_NORMALIZED_CPU_CHILDREN_KERNEL' | 'MAX_PROCESS_NORMALIZED_CPU_CHILDREN_USER' | 'MAX_PROCESS_NORMALIZED_CPU_KERNEL' | 'MAX_PROCESS_NORMALIZED_CPU_USER' | 'MAX_SWAP_USAGE_FREE' | 'MAX_SWAP_USAGE_USED ' | 'MAX_SYSTEM_CPU_GUEST' | 'MAX_SYSTEM_CPU_IOWAIT' | 'MAX_SYSTEM_CPU_IRQ' | 'MAX_SYSTEM_CPU_KERNEL' | 'MAX_SYSTEM_CPU_SOFTIRQ' | 'MAX_SYSTEM_CPU_STEAL' | 'MAX_SYSTEM_CPU_USER' | 'MAX_SYSTEM_MEMORY_AVAILABLE' | 'MAX_SYSTEM_MEMORY_FREE' | 'MAX_SYSTEM_MEMORY_USED' | 'MAX_SYSTEM_NETWORK_IN' | 'MAX_SYSTEM_NETWORK_OUT' | 'MAX_SYSTEM_NORMALIZED_CPU_GUEST' | 'MAX_SYSTEM_NORMALIZED_CPU_IOWAIT' | 'MAX_SYSTEM_NORMALIZED_CPU_IRQ' | 'MAX_SYSTEM_NORMALIZED_CPU_KERNEL' | 'MAX_SYSTEM_NORMALIZED_CPU_NICE' | 'MAX_SYSTEM_NORMALIZED_CPU_SOFTIRQ' | 'MAX_SYSTEM_NORMALIZED_CPU_STEAL' | 'MAX_SYSTEM_NORMALIZED_CPU_USER' | 'MEMORY_MAPPED' | 'MEMORY_RESIDENT' | 'MEMORY_VIRTUAL' | 'NETWORK_BYTES_IN' | 'NETWORK_BYTES_OUT' | 'NETWORK_NUM_REQUESTS' | 'OP_EXECUTION_TIME_COMMANDS' | 'OP_EXECUTION_TIME_READS' | 'OP_EXECUTION_TIME_WRITES' | 'OPCOUNTER_CMD' | 'OPCOUNTER_DELETE' | 'OPCOUNTER_GETMORE' | 'OPCOUNTER_INSERT' | 'OPCOUNTER_QUERY' | 'OPCOUNTER_REPL_CMD' | 'OPCOUNTER_REPL_DELETE' | 'OPCOUNTER_REPL_INSERT' | 'OPCOUNTER_REPL_UPDATE' | 'OPCOUNTER_UPDATE' | 'OPERATIONS_SCAN_AND_ORDER' | 'OPLOG_MASTER_LAG_TIME_DIFF' | 'OPLOG_MASTER_TIME' | 'OPLOG_RATE_GB_PER_HOUR' | 'OPLOG_SLAVE_LAG_MASTER_TIME' | 'OPLOG_REPLICATION_LAG' | 'PROCESS_CPU_CHILDREN_KERNEL' | 'PROCESS_CPU_CHILDREN_USER' | 'PROCESS_CPU_KERNEL' | 'PROCESS_CPU_USER' | 'PROCESS_NORMALIZED_CPU_CHILDREN_KERNEL' | 'PROCESS_NORMALIZED_CPU_CHILDREN_USER' | 'PROCESS_NORMALIZED_CPU_KERNEL' | 'PROCESS_NORMALIZED_CPU_USER' | 'QUERY_EXECUTOR_SCANNED' | 'QUERY_EXECUTOR_SCANNED_OBJECTS' | 'QUERY_TARGETING_SCANNED_OBJECTS_PER_RETURNED' | 'QUERY_TARGETING_SCANNED_PER_RETURNED' | 'RESTARTS_IN_LAST_HOUR' | 'SWAP_USAGE_FREE' | 'SWAP_USAGE_USED' | 'SYSTEM_CPU_GUEST' | 'SYSTEM_CPU_IOWAIT' | 'SYSTEM_CPU_IRQ' | 'SYSTEM_CPU_KERNEL' | 'SYSTEM_CPU_NICE' | 'SYSTEM_CPU_SOFTIRQ' | 'SYSTEM_CPU_STEAL' | 'SYSTEM_CPU_USER' | 'SYSTEM_MEMORY_AVAILABLE' | 'SYSTEM_MEMORY_FREE' | 'SYSTEM_MEMORY_USED' | 'SYSTEM_NETWORK_IN' | 'SYSTEM_NETWORK_OUT' | 'SYSTEM_NORMALIZED_CPU_GUEST' | 'SYSTEM_NORMALIZED_CPU_IOWAIT' | 'SYSTEM_NORMALIZED_CPU_IRQ' | 'SYSTEM_NORMALIZED_CPU_KERNEL' | 'SYSTEM_NORMALIZED_CPU_NICE' | 'SYSTEM_NORMALIZED_CPU_SOFTIRQ' | 'SYSTEM_NORMALIZED_CPU_STEAL' | 'SYSTEM_NORMALIZED_CPU_USER' | 'TICKETS_AVAILABLE_READS' | 'TICKETS_AVAILABLE_WRITE'>
    /**
     * Date and time that indicates how far in the past to query. You can&#39;t set this value with **start** and **end** in the same request. This parameter expresses its value in the ISO 8601 duration format in UTC
     * @type Date
     * @memberof MonitoringAndLogsApigetHostMeasurements
     */
    period?: Date
}

export interface MonitoringAndLogsApiGetIndexMetricsRequest {
    /**
     * Combination of hostname and IANA port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (mongod or mongos). The port must be the IANA port on which the MongoDB process listens for requests.
     * @type string
     * @memberof MonitoringAndLogsApigetIndexMetrics
     */
    processId: string
    /**
     * Human-readable label that identifies the index.
     * @type string
     * @memberof MonitoringAndLogsApigetIndexMetrics
     */
    indexName: string
    /**
     * Human-readable label that identifies the database.
     * @type string
     * @memberof MonitoringAndLogsApigetIndexMetrics
     */
    databaseName: string
    /**
     * Human-readable label that identifies the collection.
     * @type string
     * @memberof MonitoringAndLogsApigetIndexMetrics
     */
    collectionName: string
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MonitoringAndLogsApigetIndexMetrics
     */
    groupId: string
    /**
     * Duration that specifies the interval at which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC.
     * @type string
     * @memberof MonitoringAndLogsApigetIndexMetrics
     */
    granularity: string
    /**
     * List that contains the measurements that MongoDB Atlas reports for the associated data series.
     * @type Set&lt;&#39;INDEX_SIZE_ON_DISK&#39; | &#39;NUMBER_OF_DELETES&#39; | &#39;NUMBER_OF_ERROR_QUERIES&#39; | &#39;NUMBER_OF_GETMORE_COMMANDS&#39; | &#39;NUMBER_OF_INDEX_FIELDS&#39; | &#39;NUMBER_OF_INSERTS&#39; | &#39;NUMBER_OF_SUCCESS_QUERIES&#39; | &#39;NUMBER_OF_UPDATES&#39; | &#39;REPLICATION_LAG&#39; | &#39;TOTAL_NUMBER_OF_QUERIES&#39;&gt;
     * @memberof MonitoringAndLogsApigetIndexMetrics
     */
    metrics: Set<'INDEX_SIZE_ON_DISK' | 'NUMBER_OF_DELETES' | 'NUMBER_OF_ERROR_QUERIES' | 'NUMBER_OF_GETMORE_COMMANDS' | 'NUMBER_OF_INDEX_FIELDS' | 'NUMBER_OF_INSERTS' | 'NUMBER_OF_SUCCESS_QUERIES' | 'NUMBER_OF_UPDATES' | 'REPLICATION_LAG' | 'TOTAL_NUMBER_OF_QUERIES'>
    /**
     * Duration over which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC. Include this parameter when you do not set **start** and **end**.
     * @type string
     * @memberof MonitoringAndLogsApigetIndexMetrics
     */
    period?: string
    /**
     * Date and time when MongoDB Cloud begins reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @type Date
     * @memberof MonitoringAndLogsApigetIndexMetrics
     */
    start?: Date
    /**
     * Date and time when MongoDB Cloud stops reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @type Date
     * @memberof MonitoringAndLogsApigetIndexMetrics
     */
    end?: Date
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MonitoringAndLogsApigetIndexMetrics
     */
    envelope?: boolean
}

export interface MonitoringAndLogsApiGetMeasurementsRequest {
    /**
     * Combination of hostname and IANA port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (mongod or mongos). The port must be the IANA port on which the MongoDB process listens for requests.
     * @type string
     * @memberof MonitoringAndLogsApigetMeasurements
     */
    processId: string
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MonitoringAndLogsApigetMeasurements
     */
    groupId: string
    /**
     * Duration that specifies the interval at which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC.
     * @type string
     * @memberof MonitoringAndLogsApigetMeasurements
     */
    granularity: string
    /**
     * List that contains the metrics that you want MongoDB Atlas to report for the associated data series. If you don&#39;t set this parameter, this resource returns all hardware and status metrics for the associated data series.
     * @type Set&lt;&#39;FTS_DISK_USAGE&#39; | &#39;FTS_PROCESS_CPU_KERNEL&#39; | &#39;FTS_PROCESS_CPU_USER&#39; | &#39;FTS_PROCESS_NORMALIZED_CPU_KERNEL&#39; | &#39;FTS_PROCESS_NORMALIZED_CPU_USER&#39; | &#39;FTS_PROCESS_RESIDENT_MEMORY&#39; | &#39;FTS_PROCESS_SHARED_MEMORY&#39; | &#39;FTS_PROCESS_VIRTUAL_MEMORY&#39; | &#39;JVM_CURRENT_MEMORY&#39; | &#39;JVM_MAX_MEMORY&#39;&gt;
     * @memberof MonitoringAndLogsApigetMeasurements
     */
    metrics: Set<'FTS_DISK_USAGE' | 'FTS_PROCESS_CPU_KERNEL' | 'FTS_PROCESS_CPU_USER' | 'FTS_PROCESS_NORMALIZED_CPU_KERNEL' | 'FTS_PROCESS_NORMALIZED_CPU_USER' | 'FTS_PROCESS_RESIDENT_MEMORY' | 'FTS_PROCESS_SHARED_MEMORY' | 'FTS_PROCESS_VIRTUAL_MEMORY' | 'JVM_CURRENT_MEMORY' | 'JVM_MAX_MEMORY'>
    /**
     * Duration over which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC. Include this parameter when you do not set **start** and **end**.
     * @type string
     * @memberof MonitoringAndLogsApigetMeasurements
     */
    period?: string
    /**
     * Date and time when MongoDB Cloud begins reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @type Date
     * @memberof MonitoringAndLogsApigetMeasurements
     */
    start?: Date
    /**
     * Date and time when MongoDB Cloud stops reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @type Date
     * @memberof MonitoringAndLogsApigetMeasurements
     */
    end?: Date
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MonitoringAndLogsApigetMeasurements
     */
    envelope?: boolean
}

export interface MonitoringAndLogsApiListAtlasProcessesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MonitoringAndLogsApilistAtlasProcesses
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MonitoringAndLogsApilistAtlasProcesses
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof MonitoringAndLogsApilistAtlasProcesses
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof MonitoringAndLogsApilistAtlasProcesses
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof MonitoringAndLogsApilistAtlasProcesses
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof MonitoringAndLogsApilistAtlasProcesses
     */
    pretty?: boolean
}

export interface MonitoringAndLogsApiListDatabasesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MonitoringAndLogsApilistDatabases
     */
    groupId: string
    /**
     * Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @type string
     * @memberof MonitoringAndLogsApilistDatabases
     */
    processId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MonitoringAndLogsApilistDatabases
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof MonitoringAndLogsApilistDatabases
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof MonitoringAndLogsApilistDatabases
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof MonitoringAndLogsApilistDatabases
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof MonitoringAndLogsApilistDatabases
     */
    pretty?: boolean
}

export interface MonitoringAndLogsApiListDiskMeasurementsRequest {
    /**
     * Human-readable label of the disk or partition to which the measurements apply.
     * @type string
     * @memberof MonitoringAndLogsApilistDiskMeasurements
     */
    partitionName: string
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MonitoringAndLogsApilistDiskMeasurements
     */
    groupId: string
    /**
     * Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @type string
     * @memberof MonitoringAndLogsApilistDiskMeasurements
     */
    processId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MonitoringAndLogsApilistDiskMeasurements
     */
    envelope?: boolean
}

export interface MonitoringAndLogsApiListDiskPartitionsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MonitoringAndLogsApilistDiskPartitions
     */
    groupId: string
    /**
     * Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @type string
     * @memberof MonitoringAndLogsApilistDiskPartitions
     */
    processId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MonitoringAndLogsApilistDiskPartitions
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof MonitoringAndLogsApilistDiskPartitions
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof MonitoringAndLogsApilistDiskPartitions
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof MonitoringAndLogsApilistDiskPartitions
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof MonitoringAndLogsApilistDiskPartitions
     */
    pretty?: boolean
}

export interface MonitoringAndLogsApiListIndexMetricsRequest {
    /**
     * Combination of hostname and IANA port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (mongod or mongos). The port must be the IANA port on which the MongoDB process listens for requests.
     * @type string
     * @memberof MonitoringAndLogsApilistIndexMetrics
     */
    processId: string
    /**
     * Human-readable label that identifies the database.
     * @type string
     * @memberof MonitoringAndLogsApilistIndexMetrics
     */
    databaseName: string
    /**
     * Human-readable label that identifies the collection.
     * @type string
     * @memberof MonitoringAndLogsApilistIndexMetrics
     */
    collectionName: string
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MonitoringAndLogsApilistIndexMetrics
     */
    groupId: string
    /**
     * Duration that specifies the interval at which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC.
     * @type string
     * @memberof MonitoringAndLogsApilistIndexMetrics
     */
    granularity: string
    /**
     * List that contains the measurements that MongoDB Atlas reports for the associated data series.
     * @type Set&lt;&#39;INDEX_SIZE_ON_DISK&#39; | &#39;NUMBER_OF_DELETES&#39; | &#39;NUMBER_OF_ERROR_QUERIES&#39; | &#39;NUMBER_OF_GETMORE_COMMANDS&#39; | &#39;NUMBER_OF_INDEX_FIELDS&#39; | &#39;NUMBER_OF_INSERTS&#39; | &#39;NUMBER_OF_SUCCESS_QUERIES&#39; | &#39;NUMBER_OF_UPDATES&#39; | &#39;REPLICATION_LAG&#39; | &#39;TOTAL_NUMBER_OF_QUERIES&#39;&gt;
     * @memberof MonitoringAndLogsApilistIndexMetrics
     */
    metrics: Set<'INDEX_SIZE_ON_DISK' | 'NUMBER_OF_DELETES' | 'NUMBER_OF_ERROR_QUERIES' | 'NUMBER_OF_GETMORE_COMMANDS' | 'NUMBER_OF_INDEX_FIELDS' | 'NUMBER_OF_INSERTS' | 'NUMBER_OF_SUCCESS_QUERIES' | 'NUMBER_OF_UPDATES' | 'REPLICATION_LAG' | 'TOTAL_NUMBER_OF_QUERIES'>
    /**
     * Duration over which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC. Include this parameter when you do not set **start** and **end**.
     * @type string
     * @memberof MonitoringAndLogsApilistIndexMetrics
     */
    period?: string
    /**
     * Date and time when MongoDB Cloud begins reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @type Date
     * @memberof MonitoringAndLogsApilistIndexMetrics
     */
    start?: Date
    /**
     * Date and time when MongoDB Cloud stops reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @type Date
     * @memberof MonitoringAndLogsApilistIndexMetrics
     */
    end?: Date
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MonitoringAndLogsApilistIndexMetrics
     */
    envelope?: boolean
}

export interface MonitoringAndLogsApiListMetricTypesRequest {
    /**
     * Combination of hostname and IANA port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (mongod or mongos). The port must be the IANA port on which the MongoDB process listens for requests.
     * @type string
     * @memberof MonitoringAndLogsApilistMetricTypes
     */
    processId: string
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MonitoringAndLogsApilistMetricTypes
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MonitoringAndLogsApilistMetricTypes
     */
    envelope?: boolean
}

export class ObjectMonitoringAndLogsApi {
    private api: ObservableMonitoringAndLogsApi

    public constructor(configuration: Configuration, requestFactory?: MonitoringAndLogsApiRequestFactory, responseProcessor?: MonitoringAndLogsApiResponseProcessor) {
        this.api = new ObservableMonitoringAndLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the processes for the specified host for the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One MongoDB Process by ID
     * @param param the request object
     */
    public getAtlasProcess(param: MonitoringAndLogsApiGetAtlasProcessRequest, options?: Configuration): Promise<ApiHostViewAtlas> {
        return this.api.getAtlasProcess(param.groupId, param.processId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns one database running on the specified host for the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Database for a MongoDB Process
     * @param param the request object
     */
    public getDatabase(param: MonitoringAndLogsApiGetDatabaseRequest, options?: Configuration): Promise<ApiDatabaseView> {
        return this.api.getDatabase(param.groupId, param.databaseName, param.processId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the measurements of one database for the specified host for the specified project. Returns the database's on-disk storage space based on the MongoDB `dbStats` command output. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Measurements of One Database for One MongoDB Process
     * @param param the request object
     */
    public getDatabaseMeasurements(param: MonitoringAndLogsApiGetDatabaseMeasurementsRequest, options?: Configuration): Promise<ApiMeasurementsGeneralViewAtlas> {
        return this.api.getDatabaseMeasurements(param.groupId, param.databaseName, param.processId, param.envelope, param.pretty, param.m,  options).toPromise();
    }

    /**
     * Returns the measurements of one disk or partition for the specified host for the specified project. Returned value can be one of the following: - Throughput of I/O operations for the disk partition used for the MongoDB process - Percentage of time during which requests the partition issued and serviced - Latency per operation type of the disk partition used for the MongoDB process - Amount of free and used disk space on the disk partition used for the MongoDB process  To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Measurements of One Disk for One MongoDB Process
     * @param param the request object
     */
    public getDiskMeasurements(param: MonitoringAndLogsApiGetDiskMeasurementsRequest, options?: Configuration): Promise<ApiMeasurementsGeneralViewAtlas> {
        return this.api.getDiskMeasurements(param.groupId, param.partitionName, param.processId, param.envelope, param.pretty, param.m,  options).toPromise();
    }

    /**
     * Returns a compressed (.gz) log file that contains a range of log messages for the specified host for the specified project. To use this resource, the requesting API Key must have the Project Owner or Project Data Access Read Write roles. This resource doesn't require the API Key to have an Access List. Deprecated versions: v2-{2023-01-01}
     * Download Logs for One Multi-Cloud Cluster Host in One Project
     * @param param the request object
     */
    public getHostLogs(param: MonitoringAndLogsApiGetHostLogsRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.getHostLogs(param.groupId, param.hostName, param.logName, param.endDate, param.startDate,  options).toPromise();
    }

    /**
     * Returns measurements of the disk or partition per process for the specified host for the specified project. Returned value can be one of the following: - Throughput of I/O operations for the disk partition used for the MongoDB process - Percentage of time during which requests the partition issued and serviced - Latency per operation type of the disk partition used for the MongoDB process - Amount of free and used disk space on the disk partition used for the MongoDB process   To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Measurements for One MongoDB Process
     * @param param the request object
     */
    public getHostMeasurements(param: MonitoringAndLogsApiGetHostMeasurementsRequest, options?: Configuration): Promise<ApiMeasurementsGeneralViewAtlas> {
        return this.api.getHostMeasurements(param.groupId, param.processId, param.envelope, param.pretty, param.m, param.period,  options).toPromise();
    }

    /**
     * Returns the Atlas Search metrics data series within the provided time range for one namespace and index name on the specified process.
     * Return Atlas Search Metrics for One Index in One Specified Namespace
     * @param param the request object
     */
    public getIndexMetrics(param: MonitoringAndLogsApiGetIndexMetricsRequest, options?: Configuration): Promise<ApiMeasurementsIndexesView> {
        return this.api.getIndexMetrics(param.processId, param.indexName, param.databaseName, param.collectionName, param.groupId, param.granularity, param.metrics, param.period, param.start, param.end, param.envelope,  options).toPromise();
    }

    /**
     * Returns the Atlas Search hardware and status data series within the provided time range for one process in the specified project.
     * Return Atlas Search Hardware and Status Metrics
     * @param param the request object
     */
    public getMeasurements(param: MonitoringAndLogsApiGetMeasurementsRequest, options?: Configuration): Promise<ApiMeasurementsNonIndexView> {
        return this.api.getMeasurements(param.processId, param.groupId, param.granularity, param.metrics, param.period, param.start, param.end, param.envelope,  options).toPromise();
    }

    /**
     * Returns details of all processes for the specified project. A MongoDB process can be either a `mongod` or `mongos`. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All MongoDB Processes in One Project
     * @param param the request object
     */
    public listAtlasProcesses(param: MonitoringAndLogsApiListAtlasProcessesRequest, options?: Configuration): Promise<PaginatedHostViewAtlas> {
        return this.api.listAtlasProcesses(param.groupId, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

    /**
     * Returns the list of databases running on the specified host for the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Available Databases for One MongoDB Process
     * @param param the request object
     */
    public listDatabases(param: MonitoringAndLogsApiListDatabasesRequest, options?: Configuration): Promise<PaginatedDatabaseView> {
        return this.api.listDatabases(param.groupId, param.processId, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

    /**
     * Returns the measurements of one disk or partition for the specified host for the specified project. Returned value can be one of the following: - Throughput of I/O operations for the disk partition used for the MongoDB process - Percentage of time during which requests the partition issued and serviced - Latency per operation type of the disk partition used for the MongoDB process - Amount of free and used disk space on the disk partition used for the MongoDB process   To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Measurements of One Disk
     * @param param the request object
     */
    public listDiskMeasurements(param: MonitoringAndLogsApiListDiskMeasurementsRequest, options?: Configuration): Promise<ApiDiskPartitionView> {
        return this.api.listDiskMeasurements(param.partitionName, param.groupId, param.processId, param.envelope,  options).toPromise();
    }

    /**
     * Returns the list of disks or partitions for the specified host for the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Available Disks for One MongoDB Process
     * @param param the request object
     */
    public listDiskPartitions(param: MonitoringAndLogsApiListDiskPartitionsRequest, options?: Configuration): Promise<PaginatedDiskPartitionView> {
        return this.api.listDiskPartitions(param.groupId, param.processId, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

    /**
     * Returns the Atlas Search index metrics within the specified time range for one namespace in the specified process.
     * Return All Atlas Search Index Metrics for One Namespace
     * @param param the request object
     */
    public listIndexMetrics(param: MonitoringAndLogsApiListIndexMetricsRequest, options?: Configuration): Promise<ApiMeasurementsIndexesView> {
        return this.api.listIndexMetrics(param.processId, param.databaseName, param.collectionName, param.groupId, param.granularity, param.metrics, param.period, param.start, param.end, param.envelope,  options).toPromise();
    }

    /**
     * Return all Atlas Search metric types available for one process in the specified project.
     * Return All Atlas Search Metric Types for One Process
     * @param param the request object
     */
    public listMetricTypes(param: MonitoringAndLogsApiListMetricTypesRequest, options?: Configuration): Promise<ApiFTSMetricsView> {
        return this.api.listMetricTypes(param.processId, param.groupId, param.envelope,  options).toPromise();
    }

}

import { ObservableMultiCloudClustersApi } from "./ObservableAPI";
import { MultiCloudClustersApiRequestFactory, MultiCloudClustersApiResponseProcessor} from "../apis/MultiCloudClustersApi";

export interface MultiCloudClustersApiCreateClusterRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MultiCloudClustersApicreateCluster
     */
    groupId: string
    /**
     * Cluster to create in the specific project.
     * @type ClusterDescriptionV15
     * @memberof MultiCloudClustersApicreateCluster
     */
    clusterDescriptionV15: ClusterDescriptionV15
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MultiCloudClustersApicreateCluster
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof MultiCloudClustersApicreateCluster
     */
    pretty?: boolean
}

export interface MultiCloudClustersApiDeleteClusterRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MultiCloudClustersApideleteCluster
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof MultiCloudClustersApideleteCluster
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MultiCloudClustersApideleteCluster
     */
    envelope?: boolean
    /**
     * Flag that indicates whether to retain backup snapshots for the deleted dedicated cluster.
     * @type boolean
     * @memberof MultiCloudClustersApideleteCluster
     */
    retainBackups?: boolean
}

export interface MultiCloudClustersApiGetClusterRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MultiCloudClustersApigetCluster
     */
    groupId: string
    /**
     * Human-readable label that identifies this advanced cluster.
     * @type string
     * @memberof MultiCloudClustersApigetCluster
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MultiCloudClustersApigetCluster
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof MultiCloudClustersApigetCluster
     */
    pretty?: boolean
}

export interface MultiCloudClustersApiListClustersRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MultiCloudClustersApilistClusters
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MultiCloudClustersApilistClusters
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof MultiCloudClustersApilistClusters
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof MultiCloudClustersApilistClusters
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof MultiCloudClustersApilistClusters
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof MultiCloudClustersApilistClusters
     */
    pretty?: boolean
}

export interface MultiCloudClustersApiTestFailoverRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MultiCloudClustersApitestFailover
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof MultiCloudClustersApitestFailover
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MultiCloudClustersApitestFailover
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof MultiCloudClustersApitestFailover
     */
    pretty?: boolean
}

export interface MultiCloudClustersApiUpdateClusterRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MultiCloudClustersApiupdateCluster
     */
    groupId: string
    /**
     * Human-readable label that identifies the advanced cluster to modify.
     * @type string
     * @memberof MultiCloudClustersApiupdateCluster
     */
    clusterName: string
    /**
     * Cluster to update in the specified project.
     * @type ClusterDescriptionV15
     * @memberof MultiCloudClustersApiupdateCluster
     */
    clusterDescriptionV15: ClusterDescriptionV15
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof MultiCloudClustersApiupdateCluster
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof MultiCloudClustersApiupdateCluster
     */
    pretty?: boolean
}

export class ObjectMultiCloudClustersApi {
    private api: ObservableMultiCloudClustersApi

    public constructor(configuration: Configuration, requestFactory?: MultiCloudClustersApiRequestFactory, responseProcessor?: MultiCloudClustersApiResponseProcessor) {
        this.api = new ObservableMultiCloudClustersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one cluster in the specific project. Clusters contain a group of hosts that maintain the same data set. This resource can create multi-cloud clusters. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List. Deprecated versions: v2-{2023-01-01}
     * Create One Multi-Cloud Cluster from One Project
     * @param param the request object
     */
    public createCluster(param: MultiCloudClustersApiCreateClusterRequest, options?: Configuration): Promise<ClusterDescriptionV15> {
        return this.api.createCluster(param.groupId, param.clusterDescriptionV15, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Removes one cluster with advanced features from the specified project. The cluster must have termination protection disabled in order to be deleted. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Remove One Multi-Cloud Cluster from One Project
     * @param param the request object
     */
    public deleteCluster(param: MultiCloudClustersApiDeleteClusterRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCluster(param.groupId, param.clusterName, param.envelope, param.retainBackups,  options).toPromise();
    }

    /**
     * Returns the details for one cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. The response includes multi-cloud clusters. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List. Deprecated versions: v2-{2023-01-01}
     * Return One Multi-Cloud Cluster from One Project
     * @param param the request object
     */
    public getCluster(param: MultiCloudClustersApiGetClusterRequest, options?: Configuration): Promise<ClusterDescriptionV15> {
        return this.api.getCluster(param.groupId, param.clusterName, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the details for all clusters in the specific project to which you have access. Clusters contain a group of hosts that maintain the same data set. The response includes multi-cloud clusters. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List. Deprecated versions: v2-{2023-01-01}
     * Return All Multi-Cloud Clusters from One Project
     * @param param the request object
     */
    public listClusters(param: MultiCloudClustersApiListClustersRequest, options?: Configuration): Promise<PaginatedClusterDescriptionV15View> {
        return this.api.listClusters(param.groupId, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

    /**
     * Starts a failover test for the specified cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. A failover test checks how MongoDB Cloud handles the failure of the cluster's primary node. During the test, MongoDB Cloud shuts down the primary node and elects a new primary. To use this resource, the requesting API Key must have the Project Cluster Manager role. This resource doesn't require the API Key to have an Access List. Deprecated versions: v2-{2023-01-01}
     * Test Failover for One Multi-Cloud Cluster
     * @param param the request object
     */
    public testFailover(param: MultiCloudClustersApiTestFailoverRequest, options?: Configuration): Promise<void> {
        return this.api.testFailover(param.groupId, param.clusterName, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Updates the details for one cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. This resource can update multi-cloud clusters. To update a cluster's termination protection, the requesting API Key must have the Project Owner role. For all other updates, the requesting API Key must have the Project Cluster Manager role. This resource doesn't require the API Key to have an Access List. Deprecated versions: v2-{2023-01-01}
     * Modify One Multi-Cloud Cluster from One Project
     * @param param the request object
     */
    public updateCluster(param: MultiCloudClustersApiUpdateClusterRequest, options?: Configuration): Promise<ClusterDescriptionV15> {
        return this.api.updateCluster(param.groupId, param.clusterName, param.clusterDescriptionV15, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableNetworkPeeringApi } from "./ObservableAPI";
import { NetworkPeeringApiRequestFactory, NetworkPeeringApiResponseProcessor} from "../apis/NetworkPeeringApi";

export interface NetworkPeeringApiCreatePeeringConnectionRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof NetworkPeeringApicreatePeeringConnection
     */
    groupId: string
    /**
     * Create one network peering connection.
     * @type ApiAtlasContainerPeerViewRequest
     * @memberof NetworkPeeringApicreatePeeringConnection
     */
    apiAtlasContainerPeerViewRequest: ApiAtlasContainerPeerViewRequest
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof NetworkPeeringApicreatePeeringConnection
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof NetworkPeeringApicreatePeeringConnection
     */
    pretty?: boolean
}

export interface NetworkPeeringApiCreatePeeringContainerRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof NetworkPeeringApicreatePeeringContainer
     */
    groupId: string
    /**
     * Creates one new network peering container in the specified project.
     * @type CloudProviderContainer
     * @memberof NetworkPeeringApicreatePeeringContainer
     */
    cloudProviderContainer: CloudProviderContainer
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof NetworkPeeringApicreatePeeringContainer
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof NetworkPeeringApicreatePeeringContainer
     */
    pretty?: boolean
}

export interface NetworkPeeringApiDeletePeeringConnectionRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof NetworkPeeringApideletePeeringConnection
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the network peering connection that you want to delete.
     * @type string
     * @memberof NetworkPeeringApideletePeeringConnection
     */
    peerId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof NetworkPeeringApideletePeeringConnection
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof NetworkPeeringApideletePeeringConnection
     */
    pretty?: boolean
}

export interface NetworkPeeringApiDeletePeeringContainerRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof NetworkPeeringApideletePeeringContainer
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the MongoDB Cloud network container that you want to remove.
     * @type string
     * @memberof NetworkPeeringApideletePeeringContainer
     */
    containerId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof NetworkPeeringApideletePeeringContainer
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof NetworkPeeringApideletePeeringContainer
     */
    pretty?: boolean
}

export interface NetworkPeeringApiDisablePeeringRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof NetworkPeeringApidisablePeering
     */
    groupId: string
    /**
     * Disables Connect via Peering Only mode for the specified project.
     * @type PrivateIPModeView
     * @memberof NetworkPeeringApidisablePeering
     */
    privateIPModeView: PrivateIPModeView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof NetworkPeeringApidisablePeering
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof NetworkPeeringApidisablePeering
     */
    pretty?: boolean
}

export interface NetworkPeeringApiGetPeeringConnectionRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof NetworkPeeringApigetPeeringConnection
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the network peering connection that you want to retrieve.
     * @type string
     * @memberof NetworkPeeringApigetPeeringConnection
     */
    peerId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof NetworkPeeringApigetPeeringConnection
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof NetworkPeeringApigetPeeringConnection
     */
    pretty?: boolean
}

export interface NetworkPeeringApiGetPeeringContainerRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof NetworkPeeringApigetPeeringContainer
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the MongoDB Cloud network container that you want to remove.
     * @type string
     * @memberof NetworkPeeringApigetPeeringContainer
     */
    containerId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof NetworkPeeringApigetPeeringContainer
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof NetworkPeeringApigetPeeringContainer
     */
    pretty?: boolean
}

export interface NetworkPeeringApiListPeeringConnectionsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof NetworkPeeringApilistPeeringConnections
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof NetworkPeeringApilistPeeringConnections
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof NetworkPeeringApilistPeeringConnections
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof NetworkPeeringApilistPeeringConnections
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof NetworkPeeringApilistPeeringConnections
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof NetworkPeeringApilistPeeringConnections
     */
    pretty?: boolean
    /**
     * Cloud service provider to use for this VPC peering connection.
     * @type &#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39;
     * @memberof NetworkPeeringApilistPeeringConnections
     */
    providerName?: 'AWS' | 'AZURE' | 'GCP'
}

export interface NetworkPeeringApiListPeeringContainerByCloudProviderRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof NetworkPeeringApilistPeeringContainerByCloudProvider
     */
    groupId: string
    /**
     * Cloud service provider that serves the desired network peering containers.
     * @type &#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39;
     * @memberof NetworkPeeringApilistPeeringContainerByCloudProvider
     */
    providerName: 'AWS' | 'AZURE' | 'GCP'
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof NetworkPeeringApilistPeeringContainerByCloudProvider
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof NetworkPeeringApilistPeeringContainerByCloudProvider
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof NetworkPeeringApilistPeeringContainerByCloudProvider
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof NetworkPeeringApilistPeeringContainerByCloudProvider
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof NetworkPeeringApilistPeeringContainerByCloudProvider
     */
    pretty?: boolean
}

export interface NetworkPeeringApiListPeeringContainersRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof NetworkPeeringApilistPeeringContainers
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof NetworkPeeringApilistPeeringContainers
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof NetworkPeeringApilistPeeringContainers
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof NetworkPeeringApilistPeeringContainers
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof NetworkPeeringApilistPeeringContainers
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof NetworkPeeringApilistPeeringContainers
     */
    pretty?: boolean
}

export interface NetworkPeeringApiUpdatePeeringConnectionRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof NetworkPeeringApiupdatePeeringConnection
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the network peering connection that you want to update.
     * @type string
     * @memberof NetworkPeeringApiupdatePeeringConnection
     */
    peerId: string
    /**
     * Modify one network peering connection.
     * @type ApiAtlasContainerPeerViewRequest
     * @memberof NetworkPeeringApiupdatePeeringConnection
     */
    apiAtlasContainerPeerViewRequest: ApiAtlasContainerPeerViewRequest
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof NetworkPeeringApiupdatePeeringConnection
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof NetworkPeeringApiupdatePeeringConnection
     */
    pretty?: boolean
}

export interface NetworkPeeringApiUpdatePeeringContainerRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof NetworkPeeringApiupdatePeeringContainer
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the MongoDB Cloud network container that you want to remove.
     * @type string
     * @memberof NetworkPeeringApiupdatePeeringContainer
     */
    containerId: string
    /**
     * Updates the network details and labels of one specified network peering container in the specified project.
     * @type CloudProviderContainer
     * @memberof NetworkPeeringApiupdatePeeringContainer
     */
    cloudProviderContainer: CloudProviderContainer
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof NetworkPeeringApiupdatePeeringContainer
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof NetworkPeeringApiupdatePeeringContainer
     */
    pretty?: boolean
}

export interface NetworkPeeringApiVerifyConnectViaPeeringOnlyModeForOneProjectRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof NetworkPeeringApiverifyConnectViaPeeringOnlyModeForOneProject
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof NetworkPeeringApiverifyConnectViaPeeringOnlyModeForOneProject
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof NetworkPeeringApiverifyConnectViaPeeringOnlyModeForOneProject
     */
    pretty?: boolean
}

export class ObjectNetworkPeeringApi {
    private api: ObservableNetworkPeeringApi

    public constructor(configuration: Configuration, requestFactory?: NetworkPeeringApiRequestFactory, responseProcessor?: NetworkPeeringApiResponseProcessor) {
        this.api = new ObservableNetworkPeeringApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one new network peering connection in the specified project. Network peering allows multiple cloud-hosted applications to securely connect to the same project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List. To learn more about considerations and prerequisites, see the Network Peering Documentation.
     * Create One New Network Peering Connection
     * @param param the request object
     */
    public createPeeringConnection(param: NetworkPeeringApiCreatePeeringConnectionRequest, options?: Configuration): Promise<CreatePeeringConnection200Response> {
        return this.api.createPeeringConnection(param.groupId, param.apiAtlasContainerPeerViewRequest, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Creates one new network peering container in the specified project. MongoDB Cloud can deploy Network Peering connections in a network peering container. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Create One New Network Peering Container
     * @param param the request object
     */
    public createPeeringContainer(param: NetworkPeeringApiCreatePeeringContainerRequest, options?: Configuration): Promise<CloudProviderContainer> {
        return this.api.createPeeringContainer(param.groupId, param.cloudProviderContainer, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Removes one network peering connection in the specified project. If you Removes the last network peering connection associated with a project, MongoDB Cloud also removes any AWS security groups from the project IP access list. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Remove One Existing Network Peering Connection
     * @param param the request object
     */
    public deletePeeringConnection(param: NetworkPeeringApiDeletePeeringConnectionRequest, options?: Configuration): Promise<void> {
        return this.api.deletePeeringConnection(param.groupId, param.peerId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Removes one network peering container in the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Remove One Network Peering Container
     * @param param the request object
     */
    public deletePeeringContainer(param: NetworkPeeringApiDeletePeeringContainerRequest, options?: Configuration): Promise<void> {
        return this.api.deletePeeringContainer(param.groupId, param.containerId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Disables Connect via Peering Only mode for the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Disable Connect via Peering Only Mode for One Project
     * @param param the request object
     */
    public disablePeering(param: NetworkPeeringApiDisablePeeringRequest, options?: Configuration): Promise<PrivateIPModeView> {
        return this.api.disablePeering(param.groupId, param.privateIPModeView, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns details about one specified network peering connection in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Network Peering Connection in One Project
     * @param param the request object
     */
    public getPeeringConnection(param: NetworkPeeringApiGetPeeringConnectionRequest, options?: Configuration): Promise<GetPeeringConnection200Response> {
        return this.api.getPeeringConnection(param.groupId, param.peerId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns details about one network peering container in one specified project. Network peering containers contain network peering connections. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Network Peering Container
     * @param param the request object
     */
    public getPeeringContainer(param: NetworkPeeringApiGetPeeringContainerRequest, options?: Configuration): Promise<CloudProviderContainer> {
        return this.api.getPeeringContainer(param.groupId, param.containerId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns details about all network peering connections in the specified project. Network peering allows multiple cloud-hosted applications to securely connect to the same project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Network Peering Connections in One Project
     * @param param the request object
     */
    public listPeeringConnections(param: NetworkPeeringApiListPeeringConnectionsRequest, options?: Configuration): Promise<ListPeeringConnections200Response> {
        return this.api.listPeeringConnections(param.groupId, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty, param.providerName,  options).toPromise();
    }

    /**
     * Returns details about all network peering containers in the specified project for the specified cloud provider. If you do not specify the cloud provider, MongoDB Cloud returns details about all network peering containers in the project for Amazon Web Services (AWS). To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Network Peering Containers in One Project for One Cloud Provider
     * @param param the request object
     */
    public listPeeringContainerByCloudProvider(param: NetworkPeeringApiListPeeringContainerByCloudProviderRequest, options?: Configuration): Promise<PaginatedCloudProviderContainerView> {
        return this.api.listPeeringContainerByCloudProvider(param.groupId, param.providerName, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

    /**
     * Returns details about all network peering containers in the specified project. Network peering containers contain network peering connections. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Network Peering Containers in One Project
     * @param param the request object
     */
    public listPeeringContainers(param: NetworkPeeringApiListPeeringContainersRequest, options?: Configuration): Promise<PaginatedCloudProviderContainerView> {
        return this.api.listPeeringContainers(param.groupId, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

    /**
     * Updates one specified network peering connection in the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Update One New Network Peering Connection
     * @param param the request object
     */
    public updatePeeringConnection(param: NetworkPeeringApiUpdatePeeringConnectionRequest, options?: Configuration): Promise<GetPeeringConnection200Response> {
        return this.api.updatePeeringConnection(param.groupId, param.peerId, param.apiAtlasContainerPeerViewRequest, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Updates the network details and labels of one specified network peering container in the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Update One Network Peering Container
     * @param param the request object
     */
    public updatePeeringContainer(param: NetworkPeeringApiUpdatePeeringContainerRequest, options?: Configuration): Promise<CloudProviderContainer> {
        return this.api.updatePeeringContainer(param.groupId, param.containerId, param.cloudProviderContainer, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Verifies if someone set the specified project to **Connect via Peering Only** mode. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Verify Connect via Peering Only Mode for One Project
     * @param param the request object
     */
    public verifyConnectViaPeeringOnlyModeForOneProject(param: NetworkPeeringApiVerifyConnectViaPeeringOnlyModeForOneProjectRequest, options?: Configuration): Promise<PrivateIPModeView> {
        return this.api.verifyConnectViaPeeringOnlyModeForOneProject(param.groupId, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableOnlineArchiveApi } from "./ObservableAPI";
import { OnlineArchiveApiRequestFactory, OnlineArchiveApiResponseProcessor} from "../apis/OnlineArchiveApi";

export interface OnlineArchiveApiCreateOnlineArchiveRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof OnlineArchiveApicreateOnlineArchive
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster that contains the collection for which you want to create one online archive.
     * @type string
     * @memberof OnlineArchiveApicreateOnlineArchive
     */
    clusterName: string
    /**
     * Creates one online archive.
     * @type OnlineArchive
     * @memberof OnlineArchiveApicreateOnlineArchive
     */
    onlineArchive: OnlineArchive
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof OnlineArchiveApicreateOnlineArchive
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof OnlineArchiveApicreateOnlineArchive
     */
    pretty?: boolean
}

export interface OnlineArchiveApiDeleteOnlineArchiveRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof OnlineArchiveApideleteOnlineArchive
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the online archive to delete.
     * @type string
     * @memberof OnlineArchiveApideleteOnlineArchive
     */
    archiveId: string
    /**
     * Human-readable label that identifies the cluster that contains the collection from which you want to remove an online archive.
     * @type string
     * @memberof OnlineArchiveApideleteOnlineArchive
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof OnlineArchiveApideleteOnlineArchive
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof OnlineArchiveApideleteOnlineArchive
     */
    pretty?: boolean
}

export interface OnlineArchiveApiDownloadOnlineArchiveQueryLogsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof OnlineArchiveApidownloadOnlineArchiveQueryLogs
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster that contains the collection for which you want to return the query logs from one online archive.
     * @type string
     * @memberof OnlineArchiveApidownloadOnlineArchiveQueryLogs
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof OnlineArchiveApidownloadOnlineArchiveQueryLogs
     */
    envelope?: boolean
    /**
     * Date and time that specifies the starting point for the range of log messages to return. This resource expresses this value in the number of seconds that have elapsed since the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time).
     * @type number
     * @memberof OnlineArchiveApidownloadOnlineArchiveQueryLogs
     */
    startDate?: number
    /**
     * Date and time that specifies the end point for the range of log messages to return. This resource expresses this value in the number of seconds that have elapsed since the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time).
     * @type number
     * @memberof OnlineArchiveApidownloadOnlineArchiveQueryLogs
     */
    endDate?: number
    /**
     * Flag that indicates whether to download logs for queries against your online archive only or both your online archive and cluster.
     * @type boolean
     * @memberof OnlineArchiveApidownloadOnlineArchiveQueryLogs
     */
    archiveOnly?: boolean
}

export interface OnlineArchiveApiGetOnlineArchiveRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof OnlineArchiveApigetOnlineArchive
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the online archive to return.
     * @type string
     * @memberof OnlineArchiveApigetOnlineArchive
     */
    archiveId: string
    /**
     * Human-readable label that identifies the cluster that contains the specified collection from which Application created the online archive.
     * @type string
     * @memberof OnlineArchiveApigetOnlineArchive
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof OnlineArchiveApigetOnlineArchive
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof OnlineArchiveApigetOnlineArchive
     */
    pretty?: boolean
}

export interface OnlineArchiveApiListOnlineArchivesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof OnlineArchiveApilistOnlineArchives
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster that contains the collection for which you want to return the online archives.
     * @type string
     * @memberof OnlineArchiveApilistOnlineArchives
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof OnlineArchiveApilistOnlineArchives
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof OnlineArchiveApilistOnlineArchives
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof OnlineArchiveApilistOnlineArchives
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof OnlineArchiveApilistOnlineArchives
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof OnlineArchiveApilistOnlineArchives
     */
    pretty?: boolean
}

export interface OnlineArchiveApiUpdateOnlineArchiveRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof OnlineArchiveApiupdateOnlineArchive
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the online archive to update.
     * @type string
     * @memberof OnlineArchiveApiupdateOnlineArchive
     */
    archiveId: string
    /**
     * Human-readable label that identifies the cluster that contains the specified collection from which Application created the online archive.
     * @type string
     * @memberof OnlineArchiveApiupdateOnlineArchive
     */
    clusterName: string
    /**
     * Updates, pauses, or resumes one online archive.
     * @type OnlineArchive
     * @memberof OnlineArchiveApiupdateOnlineArchive
     */
    onlineArchive: OnlineArchive
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof OnlineArchiveApiupdateOnlineArchive
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof OnlineArchiveApiupdateOnlineArchive
     */
    pretty?: boolean
}

export class ObjectOnlineArchiveApi {
    private api: ObservableOnlineArchiveApi

    public constructor(configuration: Configuration, requestFactory?: OnlineArchiveApiRequestFactory, responseProcessor?: OnlineArchiveApiResponseProcessor) {
        this.api = new ObservableOnlineArchiveApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one online archive. This archive stores data from one cluster within one project. To use this resource, the requesting API Key must have the Project Data Access Admin role. This resource doesn't require the API Key to have an Access List.
     * Create One Online Archive
     * @param param the request object
     */
    public createOnlineArchive(param: OnlineArchiveApiCreateOnlineArchiveRequest, options?: Configuration): Promise<OnlineArchive> {
        return this.api.createOnlineArchive(param.groupId, param.clusterName, param.onlineArchive, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Removes one online archive. This archive stores data from one cluster within one project. To use this resource, the requesting API Key must have the Project Data Access Admin role. This resource doesn't require the API Key to have an Access List.
     * Remove One Online Archive
     * @param param the request object
     */
    public deleteOnlineArchive(param: OnlineArchiveApiDeleteOnlineArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.deleteOnlineArchive(param.groupId, param.archiveId, param.clusterName, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Downloads query logs for the specified online archive. To use this resource, the requesting API Key must have the Project Data Access Read Only or higher role. This resource doesn't require the API Key to have an Access List.
     * Download Online Archive Query Logs
     * @param param the request object
     */
    public downloadOnlineArchiveQueryLogs(param: OnlineArchiveApiDownloadOnlineArchiveQueryLogsRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.downloadOnlineArchiveQueryLogs(param.groupId, param.clusterName, param.envelope, param.startDate, param.endDate, param.archiveOnly,  options).toPromise();
    }

    /**
     * Returns one online archive for one cluster. This archive stores data from one cluster within one project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Online Archive
     * @param param the request object
     */
    public getOnlineArchive(param: OnlineArchiveApiGetOnlineArchiveRequest, options?: Configuration): Promise<OnlineArchive> {
        return this.api.getOnlineArchive(param.groupId, param.archiveId, param.clusterName, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns details of all online archives. This archive stores data from one cluster within one project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Online Archives for One Cluster
     * @param param the request object
     */
    public listOnlineArchives(param: OnlineArchiveApiListOnlineArchivesRequest, options?: Configuration): Promise<PaginatedOnlineArchiveView> {
        return this.api.listOnlineArchives(param.groupId, param.clusterName, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

    /**
     * Updates, pauses, or resumes one online archive. This archive stores data from one cluster within one project. To use this resource, the requesting API Key must have the Project Data Access Admin role. This resource doesn't require the API Key to have an Access List.
     * Update One Online Archive
     * @param param the request object
     */
    public updateOnlineArchive(param: OnlineArchiveApiUpdateOnlineArchiveRequest, options?: Configuration): Promise<OnlineArchive> {
        return this.api.updateOnlineArchive(param.groupId, param.archiveId, param.clusterName, param.onlineArchive, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableOrganizationsApi } from "./ObservableAPI";
import { OrganizationsApiRequestFactory, OrganizationsApiResponseProcessor} from "../apis/OrganizationsApi";

export interface OrganizationsApiCreateOrganizationRequest {
    /**
     * Organization that you want to create.
     * @type CreateOrganizationRequest
     * @memberof OrganizationsApicreateOrganization
     */
    createOrganizationRequest: CreateOrganizationRequest
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof OrganizationsApicreateOrganization
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof OrganizationsApicreateOrganization
     */
    pretty?: boolean
}

export interface OrganizationsApiCreateOrganizationInvitationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof OrganizationsApicreateOrganizationInvitation
     */
    orgId: string
    /**
     * Invites one MongoDB Cloud user to join the specified organization.
     * @type ApiOrganizationInvitationRequestView
     * @memberof OrganizationsApicreateOrganizationInvitation
     */
    apiOrganizationInvitationRequestView: ApiOrganizationInvitationRequestView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof OrganizationsApicreateOrganizationInvitation
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof OrganizationsApicreateOrganizationInvitation
     */
    pretty?: boolean
}

export interface OrganizationsApiDeleteOrganizationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof OrganizationsApideleteOrganization
     */
    orgId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof OrganizationsApideleteOrganization
     */
    envelope?: boolean
}

export interface OrganizationsApiDeleteOrganizationInvitationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof OrganizationsApideleteOrganizationInvitation
     */
    orgId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the invitation.
     * @type string
     * @memberof OrganizationsApideleteOrganizationInvitation
     */
    invitationId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof OrganizationsApideleteOrganizationInvitation
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof OrganizationsApideleteOrganizationInvitation
     */
    pretty?: boolean
}

export interface OrganizationsApiGetOrganizationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof OrganizationsApigetOrganization
     */
    orgId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof OrganizationsApigetOrganization
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof OrganizationsApigetOrganization
     */
    pretty?: boolean
}

export interface OrganizationsApiGetOrganizationInvitationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof OrganizationsApigetOrganizationInvitation
     */
    orgId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the invitation.
     * @type string
     * @memberof OrganizationsApigetOrganizationInvitation
     */
    invitationId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof OrganizationsApigetOrganizationInvitation
     */
    envelope?: boolean
}

export interface OrganizationsApiGetOrganizationSettingsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof OrganizationsApigetOrganizationSettings
     */
    orgId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof OrganizationsApigetOrganizationSettings
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof OrganizationsApigetOrganizationSettings
     */
    pretty?: boolean
}

export interface OrganizationsApiListOrganizationInvitationsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof OrganizationsApilistOrganizationInvitations
     */
    orgId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof OrganizationsApilistOrganizationInvitations
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof OrganizationsApilistOrganizationInvitations
     */
    pretty?: boolean
    /**
     * Email address of the user account invited to this organization. If you exclude this parameter, this resource returns all pending invitations.
     * @type string
     * @memberof OrganizationsApilistOrganizationInvitations
     */
    username?: string
}

export interface OrganizationsApiListOrganizationProjectsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof OrganizationsApilistOrganizationProjects
     */
    orgId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof OrganizationsApilistOrganizationProjects
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof OrganizationsApilistOrganizationProjects
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof OrganizationsApilistOrganizationProjects
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof OrganizationsApilistOrganizationProjects
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof OrganizationsApilistOrganizationProjects
     */
    pretty?: boolean
    /**
     * Human-readable label of the project to use to filter the returned list. Performs a case-insensitive search for a project within the organization which is prefixed by the specified name.
     * @type string
     * @memberof OrganizationsApilistOrganizationProjects
     */
    name?: string
}

export interface OrganizationsApiListOrganizationUsersRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof OrganizationsApilistOrganizationUsers
     */
    orgId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof OrganizationsApilistOrganizationUsers
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof OrganizationsApilistOrganizationUsers
     */
    pretty?: boolean
}

export interface OrganizationsApiListOrganizationsRequest {
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof OrganizationsApilistOrganizations
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof OrganizationsApilistOrganizations
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof OrganizationsApilistOrganizations
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof OrganizationsApilistOrganizations
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof OrganizationsApilistOrganizations
     */
    pretty?: boolean
    /**
     * Human-readable label of the organization to use to filter the returned list. Performs a case-insensitive search for an organization that starts with the specified name.
     * @type string
     * @memberof OrganizationsApilistOrganizations
     */
    name?: string
}

export interface OrganizationsApiRenameOrganizationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof OrganizationsApirenameOrganization
     */
    orgId: string
    /**
     * Details to update on the specified organization.
     * @type ApiOrganizationView
     * @memberof OrganizationsApirenameOrganization
     */
    apiOrganizationView: ApiOrganizationView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof OrganizationsApirenameOrganization
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof OrganizationsApirenameOrganization
     */
    pretty?: boolean
}

export interface OrganizationsApiUpdateOrganizationInvitationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof OrganizationsApiupdateOrganizationInvitation
     */
    orgId: string
    /**
     * Updates the details of one pending invitation to the specified organization.
     * @type ApiOrganizationInvitationRequestView
     * @memberof OrganizationsApiupdateOrganizationInvitation
     */
    apiOrganizationInvitationRequestView: ApiOrganizationInvitationRequestView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof OrganizationsApiupdateOrganizationInvitation
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof OrganizationsApiupdateOrganizationInvitation
     */
    pretty?: boolean
}

export interface OrganizationsApiUpdateOrganizationInvitationByIdRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof OrganizationsApiupdateOrganizationInvitationById
     */
    orgId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the invitation.
     * @type string
     * @memberof OrganizationsApiupdateOrganizationInvitationById
     */
    invitationId: string
    /**
     * Updates the details of one pending invitation to the specified organization.
     * @type ApiOrganizationInvitationUpdateRequestView
     * @memberof OrganizationsApiupdateOrganizationInvitationById
     */
    apiOrganizationInvitationUpdateRequestView: ApiOrganizationInvitationUpdateRequestView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof OrganizationsApiupdateOrganizationInvitationById
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof OrganizationsApiupdateOrganizationInvitationById
     */
    pretty?: boolean
}

export interface OrganizationsApiUpdateOrganizationSettingsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof OrganizationsApiupdateOrganizationSettings
     */
    orgId: string
    /**
     * Details to update on the specified organization&#39;s settings.
     * @type OrganizationSettings
     * @memberof OrganizationsApiupdateOrganizationSettings
     */
    organizationSettings: OrganizationSettings
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof OrganizationsApiupdateOrganizationSettings
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof OrganizationsApiupdateOrganizationSettings
     */
    pretty?: boolean
}

export class ObjectOrganizationsApi {
    private api: ObservableOrganizationsApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationsApiRequestFactory, responseProcessor?: OrganizationsApiResponseProcessor) {
        this.api = new ObservableOrganizationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one organization in MongoDB Cloud and links it to the requesting API Key's organization. To use this resource, the requesting API Key must have the Organization Owner role. The requesting API Key's organization must be a paying organization. To learn more, see [Configure a Paying Organization](https://www.mongodb.com/docs/atlas/billing/#configure-a-paying-organization) in the MongoDB Atlas documentation. This resource doesn't require the API Key to have an API Access List.
     * Create One Organization
     * @param param the request object
     */
    public createOrganization(param: OrganizationsApiCreateOrganizationRequest, options?: Configuration): Promise<CreateOrganizationResponse> {
        return this.api.createOrganization(param.createOrganizationRequest, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Invites one MongoDB Cloud user to join the specified organization. The user must accept the invitation to access information within the specified organization. To use this resource, the requesting API Key must have the Organization User Admin role. This resource doesn't require the API Key to have an Access List.
     * Invite One MongoDB Cloud User to Join One Atlas Organization
     * @param param the request object
     */
    public createOrganizationInvitation(param: OrganizationsApiCreateOrganizationInvitationRequest, options?: Configuration): Promise<ApiOrganizationInvitationView> {
        return this.api.createOrganizationInvitation(param.orgId, param.apiOrganizationInvitationRequestView, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Removes one specified organization. MongoDB Cloud imposes the following limits on this resource:   - Organizations with active projects cannot be removed.  - All projects in the organization must be removed before you can remove the organization.  To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Remove One Organization
     * @param param the request object
     */
    public deleteOrganization(param: OrganizationsApiDeleteOrganizationRequest, options?: Configuration): Promise<void> {
        return this.api.deleteOrganization(param.orgId, param.envelope,  options).toPromise();
    }

    /**
     * Cancels one pending invitation sent to the specified MongoDB Cloud user to join an organization. You can't cancel an invitation that the user accepted. To use this resource, the requesting API Key must have the Organization User Admin role. This resource doesn't require the API Key to have an Access List.
     * Cancel One Organization Invitation
     * @param param the request object
     */
    public deleteOrganizationInvitation(param: OrganizationsApiDeleteOrganizationInvitationRequest, options?: Configuration): Promise<void> {
        return this.api.deleteOrganizationInvitation(param.orgId, param.invitationId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns one organization to which the requesting API key has access. To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an Access List.
     * Return One Organization
     * @param param the request object
     */
    public getOrganization(param: OrganizationsApiGetOrganizationRequest, options?: Configuration): Promise<ApiOrganizationView> {
        return this.api.getOrganization(param.orgId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the details of one pending invitation to the specified organization. To use this resource, the requesting API Key must have the Organization User Admin role. This resource doesn't require the API Key to have an Access List.
     * Return One Organization Invitation
     * @param param the request object
     */
    public getOrganizationInvitation(param: OrganizationsApiGetOrganizationInvitationRequest, options?: Configuration): Promise<ApiOrganizationInvitationView> {
        return this.api.getOrganizationInvitation(param.orgId, param.invitationId, param.envelope,  options).toPromise();
    }

    /**
     * Returns details about the specified organization's settings. To use this resource, the requesting API Key must have the Organization Owner role. This resource does not require the API Key to have an API access list.
     * Return Settings for One Organization
     * @param param the request object
     */
    public getOrganizationSettings(param: OrganizationsApiGetOrganizationSettingsRequest, options?: Configuration): Promise<OrganizationSettings> {
        return this.api.getOrganizationSettings(param.orgId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns all pending invitations to the specified organization. To use this resource, the requesting API Key must have the Organization User Admin role. This resource doesn't require the API Key to have an Access List.
     * Return All Organization Invitations
     * @param param the request object
     */
    public listOrganizationInvitations(param: OrganizationsApiListOrganizationInvitationsRequest, options?: Configuration): Promise<Array<ApiOrganizationInvitationView>> {
        return this.api.listOrganizationInvitations(param.orgId, param.envelope, param.pretty, param.username,  options).toPromise();
    }

    /**
     * Returns multiple projects in the specified organization. Each organization can have multiple projects. Use projects to:  - Isolate different environments, such as development, test, or production environments, from each other. - Associate different MongoDB Cloud users or teams with different environments, or give different permission to MongoDB Cloud users in different environments. - Maintain separate cluster security configurations. - Create different alert settings.  To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an Access List.
     * Return One or More Projects in One Organization
     * @param param the request object
     */
    public listOrganizationProjects(param: OrganizationsApiListOrganizationProjectsRequest, options?: Configuration): Promise<PaginatedAtlasGroupView> {
        return this.api.listOrganizationProjects(param.orgId, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty, param.name,  options).toPromise();
    }

    /**
     * Returns details about the MongoDB Cloud users associated with the specified organization. Each MongoDB Cloud user returned must belong to the specified organization or to a project within the specified organization. To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an Access List.
     * Return All MongoDB Cloud Users in One Organization
     * @param param the request object
     */
    public listOrganizationUsers(param: OrganizationsApiListOrganizationUsersRequest, options?: Configuration): Promise<PaginatedAppUserView> {
        return this.api.listOrganizationUsers(param.orgId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns all organizations to which you belong. To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an Access List.
     * Return All Organizations
     * @param param the request object
     */
    public listOrganizations(param: OrganizationsApiListOrganizationsRequest = {}, options?: Configuration): Promise<PaginatedOrganizationView> {
        return this.api.listOrganizations(param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty, param.name,  options).toPromise();
    }

    /**
     * Renames one organization. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Rename One Organization
     * @param param the request object
     */
    public renameOrganization(param: OrganizationsApiRenameOrganizationRequest, options?: Configuration): Promise<ApiOrganizationView> {
        return this.api.renameOrganization(param.orgId, param.apiOrganizationView, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Updates the details of one pending invitation to the specified organization. To specify which invitation, provide the username of the invited user. To use this resource, the requesting API Key must have the Organization User Admin role. This resource doesn't require the API Key to have an Access List.
     * Update One Organization Invitation
     * @param param the request object
     */
    public updateOrganizationInvitation(param: OrganizationsApiUpdateOrganizationInvitationRequest, options?: Configuration): Promise<ApiOrganizationInvitationView> {
        return this.api.updateOrganizationInvitation(param.orgId, param.apiOrganizationInvitationRequestView, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Updates the details of one pending invitation to the specified organization. To specify which invitation, provide the unique identification string for that invitation. Use the Return All Organization Invitations endpoint to retrieve IDs for all pending organization invitations. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Update One Organization Invitation by Invitation ID
     * @param param the request object
     */
    public updateOrganizationInvitationById(param: OrganizationsApiUpdateOrganizationInvitationByIdRequest, options?: Configuration): Promise<ApiOrganizationInvitationView> {
        return this.api.updateOrganizationInvitationById(param.orgId, param.invitationId, param.apiOrganizationInvitationUpdateRequestView, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Updates the organization's settings. To use this resource, the requesting API Key must have the Organization Owner role. This resource does not require the API Key to have an API access list.
     * Update Settings for One Organization
     * @param param the request object
     */
    public updateOrganizationSettings(param: OrganizationsApiUpdateOrganizationSettingsRequest, options?: Configuration): Promise<OrganizationSettings> {
        return this.api.updateOrganizationSettings(param.orgId, param.organizationSettings, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservablePerformanceAdvisorApi } from "./ObservableAPI";
import { PerformanceAdvisorApiRequestFactory, PerformanceAdvisorApiResponseProcessor} from "../apis/PerformanceAdvisorApi";

export interface PerformanceAdvisorApiDisableSlowOperationThresholdingRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof PerformanceAdvisorApidisableSlowOperationThresholding
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof PerformanceAdvisorApidisableSlowOperationThresholding
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof PerformanceAdvisorApidisableSlowOperationThresholding
     */
    pretty?: boolean
}

export interface PerformanceAdvisorApiEnableSlowOperationThresholdingRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof PerformanceAdvisorApienableSlowOperationThresholding
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof PerformanceAdvisorApienableSlowOperationThresholding
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof PerformanceAdvisorApienableSlowOperationThresholding
     */
    pretty?: boolean
}

export interface PerformanceAdvisorApiListSlowQueriesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof PerformanceAdvisorApilistSlowQueries
     */
    groupId: string
    /**
     * Combination of host and port that serves the MongoDB process. The host must be the hostname, FQDN, IPv4 address, or IPv6 address of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @type string
     * @memberof PerformanceAdvisorApilistSlowQueries
     */
    processId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof PerformanceAdvisorApilistSlowQueries
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof PerformanceAdvisorApilistSlowQueries
     */
    pretty?: boolean
    /**
     * Length of time expressed during which the query finds suggested indexes among the managed namespaces in the cluster. This parameter expresses its value in milliseconds.  - If you don&#39;t specify the **since** parameter, the endpoint returns data covering the duration before the current time. - If you specify neither the **duration** nor **since** parameters, the endpoint returns data from the previous 24 hours.
     * @type number
     * @memberof PerformanceAdvisorApilistSlowQueries
     */
    duration?: number
    /**
     * Namespaces from which to retrieve suggested indexes. A namespace consists of one database and one collection resource written as &#x60;.&#x60;: &#x60;&lt;database&gt;.&lt;collection&gt;&#x60;. To include multiple namespaces, pass the parameter multiple times delimited with an ampersand (&#x60;&amp;&#x60;) between each namespace. Omit this parameter to return results for all namespaces.
     * @type Array&lt;string&gt;
     * @memberof PerformanceAdvisorApilistSlowQueries
     */
    namespaces?: Array<string>
    /**
     * Maximum number of lines from the log to return.
     * @type number
     * @memberof PerformanceAdvisorApilistSlowQueries
     */
    nLogs?: number
    /**
     * Date and time from which the query retrieves the suggested indexes. This parameter expresses its value in the number of seconds that have elapsed since the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time).  - If you don&#39;t specify the **duration** parameter, the endpoint returns data covering from the **since** value and the current time. - If you specify neither the **duration** nor the **since** parameters, the endpoint returns data from the previous 24 hours.
     * @type number
     * @memberof PerformanceAdvisorApilistSlowQueries
     */
    since?: number
}

export interface PerformanceAdvisorApiListSlowQueryNamespacesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof PerformanceAdvisorApilistSlowQueryNamespaces
     */
    groupId: string
    /**
     * Combination of host and port that serves the MongoDB process. The host must be the hostname, FQDN, IPv4 address, or IPv6 address of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @type string
     * @memberof PerformanceAdvisorApilistSlowQueryNamespaces
     */
    processId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof PerformanceAdvisorApilistSlowQueryNamespaces
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof PerformanceAdvisorApilistSlowQueryNamespaces
     */
    pretty?: boolean
    /**
     * Length of time expressed during which the query finds suggested indexes among the managed namespaces in the cluster. This parameter expresses its value in milliseconds.  - If you don&#39;t specify the **since** parameter, the endpoint returns data covering the duration before the current time. - If you specify neither the **duration** nor **since** parameters, the endpoint returns data from the previous 24 hours.
     * @type number
     * @memberof PerformanceAdvisorApilistSlowQueryNamespaces
     */
    duration?: number
    /**
     * Date and time from which the query retrieves the suggested indexes. This parameter expresses its value in the number of seconds that have elapsed since the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time).  - If you don&#39;t specify the **duration** parameter, the endpoint returns data covering from the **since** value and the current time. - If you specify neither the **duration** nor the **since** parameters, the endpoint returns data from the previous 24 hours.
     * @type number
     * @memberof PerformanceAdvisorApilistSlowQueryNamespaces
     */
    since?: number
}

export interface PerformanceAdvisorApiListSuggestedIndexesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof PerformanceAdvisorApilistSuggestedIndexes
     */
    groupId: string
    /**
     * Combination of host and port that serves the MongoDB process. The host must be the hostname, FQDN, IPv4 address, or IPv6 address of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @type string
     * @memberof PerformanceAdvisorApilistSuggestedIndexes
     */
    processId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof PerformanceAdvisorApilistSuggestedIndexes
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof PerformanceAdvisorApilistSuggestedIndexes
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof PerformanceAdvisorApilistSuggestedIndexes
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof PerformanceAdvisorApilistSuggestedIndexes
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof PerformanceAdvisorApilistSuggestedIndexes
     */
    pretty?: boolean
    /**
     * Length of time expressed during which the query finds suggested indexes among the managed namespaces in the cluster. This parameter expresses its value in milliseconds.  - If you don&#39;t specify the **since** parameter, the endpoint returns data covering the duration before the current time. - If you specify neither the **duration** nor **since** parameters, the endpoint returns data from the previous 24 hours.
     * @type number
     * @memberof PerformanceAdvisorApilistSuggestedIndexes
     */
    duration?: number
    /**
     * Namespaces from which to retrieve suggested indexes. A namespace consists of one database and one collection resource written as &#x60;.&#x60;: &#x60;&lt;database&gt;.&lt;collection&gt;&#x60;. To include multiple namespaces, pass the parameter multiple times delimited with an ampersand (&#x60;&amp;&#x60;) between each namespace. Omit this parameter to return results for all namespaces.
     * @type Array&lt;string&gt;
     * @memberof PerformanceAdvisorApilistSuggestedIndexes
     */
    namespaces?: Array<string>
    /**
     * Maximum number of example queries that benefit from the suggested index.
     * @type number
     * @memberof PerformanceAdvisorApilistSuggestedIndexes
     */
    nExamples?: number
    /**
     * Number that indicates the maximum indexes to suggest.
     * @type number
     * @memberof PerformanceAdvisorApilistSuggestedIndexes
     */
    nIndexes?: number
    /**
     * Date and time from which the query retrieves the suggested indexes. This parameter expresses its value in the number of seconds that have elapsed since the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time).  - If you don&#39;t specify the **duration** parameter, the endpoint returns data covering from the **since** value and the current time. - If you specify neither the **duration** nor the **since** parameters, the endpoint returns data from the previous 24 hours.
     * @type number
     * @memberof PerformanceAdvisorApilistSuggestedIndexes
     */
    since?: number
}

export class ObjectPerformanceAdvisorApi {
    private api: ObservablePerformanceAdvisorApi

    public constructor(configuration: Configuration, requestFactory?: PerformanceAdvisorApiRequestFactory, responseProcessor?: PerformanceAdvisorApiResponseProcessor) {
        this.api = new ObservablePerformanceAdvisorApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Disables the slow operation threshold that MongoDB Cloud calculated for the specified project. The threshold determines which operations the Performance Advisor and Query Profiler considers slow. When disabled, MongoDB Cloud considers any operation that takes longer than 100 milliseconds to be slow. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Disable Managed Slow Operation Threshold
     * @param param the request object
     */
    public disableSlowOperationThresholding(param: PerformanceAdvisorApiDisableSlowOperationThresholdingRequest, options?: Configuration): Promise<void> {
        return this.api.disableSlowOperationThresholding(param.groupId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Enables MongoDB Cloud to use its slow operation threshold for the specified project. The threshold determines which operations the Performance Advisor and Query Profiler considers slow. When enabled, MongoDB Cloud uses the average execution time for operations on your cluster to determine slow-running queries. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Enable Managed Slow Operation Threshold
     * @param param the request object
     */
    public enableSlowOperationThresholding(param: PerformanceAdvisorApiEnableSlowOperationThresholdingRequest, options?: Configuration): Promise<void> {
        return this.api.enableSlowOperationThresholding(param.groupId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns log lines for slow queries that the Performance Advisor and Query Profiler identified. The Performance Advisor monitors queries that MongoDB considers slow and suggests new indexes to improve query performance. MongoDB Cloud bases the threshold for slow queries on the average time of operations on your cluster. This enables workload-relevant recommendations. To use this resource, the requesting API Key must have the Project Data Access Read Write role. This resource doesn't require the API Key to have an Access List.
     * Return Slow Queries
     * @param param the request object
     */
    public listSlowQueries(param: PerformanceAdvisorApiListSlowQueriesRequest, options?: Configuration): Promise<ApiPerformanceAdvisorSlowQueryListView> {
        return this.api.listSlowQueries(param.groupId, param.processId, param.envelope, param.pretty, param.duration, param.namespaces, param.nLogs, param.since,  options).toPromise();
    }

    /**
     * Returns up to 20 namespaces for collections experiencing slow queries on the specified host. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Namespaces for One Host
     * @param param the request object
     */
    public listSlowQueryNamespaces(param: PerformanceAdvisorApiListSlowQueryNamespacesRequest, options?: Configuration): Promise<ApiNamespacesView> {
        return this.api.listSlowQueryNamespaces(param.groupId, param.processId, param.envelope, param.pretty, param.duration, param.since,  options).toPromise();
    }

    /**
     * Returns the indexes that the Performance Advisor suggests. The Performance Advisor monitors queries that MongoDB considers slow and suggests new indexes to improve query performance. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Suggested Indexes
     * @param param the request object
     */
    public listSuggestedIndexes(param: PerformanceAdvisorApiListSuggestedIndexesRequest, options?: Configuration): Promise<ApiPerformanceAdvisorResponseView> {
        return this.api.listSuggestedIndexes(param.groupId, param.processId, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty, param.duration, param.namespaces, param.nExamples, param.nIndexes, param.since,  options).toPromise();
    }

}

import { ObservablePrivateEndpointServicesApi } from "./ObservableAPI";
import { PrivateEndpointServicesApiRequestFactory, PrivateEndpointServicesApiResponseProcessor} from "../apis/PrivateEndpointServicesApi";

export interface PrivateEndpointServicesApiCreatePrivateEndpointRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof PrivateEndpointServicesApicreatePrivateEndpoint
     */
    groupId: string
    /**
     * Cloud service provider that manages this private endpoint.
     * @type &#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39;
     * @memberof PrivateEndpointServicesApicreatePrivateEndpoint
     */
    cloudProvider: 'AWS' | 'AZURE' | 'GCP'
    /**
     * Unique 24-hexadecimal digit string that identifies the private endpoint service for which you want to create a private endpoint.
     * @type string
     * @memberof PrivateEndpointServicesApicreatePrivateEndpoint
     */
    endpointServiceId: string
    /**
     * Creates one private resource endpoint for the specified cloud service provider.
     * @type CreatePrivateEndpointRequest
     * @memberof PrivateEndpointServicesApicreatePrivateEndpoint
     */
    createPrivateEndpointRequest: CreatePrivateEndpointRequest
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof PrivateEndpointServicesApicreatePrivateEndpoint
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof PrivateEndpointServicesApicreatePrivateEndpoint
     */
    pretty?: boolean
}

export interface PrivateEndpointServicesApiCreatePrivateEndpointServiceRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof PrivateEndpointServicesApicreatePrivateEndpointService
     */
    groupId: string
    /**
     * Creates one private resource service for the specified cloud service provider.
     * @type CreateEndpointServiceRequest
     * @memberof PrivateEndpointServicesApicreatePrivateEndpointService
     */
    createEndpointServiceRequest: CreateEndpointServiceRequest
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof PrivateEndpointServicesApicreatePrivateEndpointService
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof PrivateEndpointServicesApicreatePrivateEndpointService
     */
    pretty?: boolean
}

export interface PrivateEndpointServicesApiDeletePrivateEndpointRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof PrivateEndpointServicesApideletePrivateEndpoint
     */
    groupId: string
    /**
     * Cloud service provider that manages this private endpoint.
     * @type &#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39;
     * @memberof PrivateEndpointServicesApideletePrivateEndpoint
     */
    cloudProvider: 'AWS' | 'AZURE' | 'GCP'
    /**
     * Unique string that identifies the private endpoint you want to delete. The format of the **endpointId** parameter differs for AWS and Azure. You must URL encode the **endpointId** for Azure private endpoints.
     * @type string
     * @memberof PrivateEndpointServicesApideletePrivateEndpoint
     */
    endpointId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the private endpoint service from which you want to delete a private endpoint.
     * @type string
     * @memberof PrivateEndpointServicesApideletePrivateEndpoint
     */
    endpointServiceId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof PrivateEndpointServicesApideletePrivateEndpoint
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof PrivateEndpointServicesApideletePrivateEndpoint
     */
    pretty?: boolean
}

export interface PrivateEndpointServicesApiDeletePrivateEndpointServiceRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof PrivateEndpointServicesApideletePrivateEndpointService
     */
    groupId: string
    /**
     * Cloud service provider that manages this private endpoint service.
     * @type &#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39;
     * @memberof PrivateEndpointServicesApideletePrivateEndpointService
     */
    cloudProvider: 'AWS' | 'AZURE' | 'GCP'
    /**
     * Unique 24-hexadecimal digit string that identifies the private endpoint service that you want to delete.
     * @type string
     * @memberof PrivateEndpointServicesApideletePrivateEndpointService
     */
    endpointServiceId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof PrivateEndpointServicesApideletePrivateEndpointService
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof PrivateEndpointServicesApideletePrivateEndpointService
     */
    pretty?: boolean
}

export interface PrivateEndpointServicesApiGetPrivateEndpointRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof PrivateEndpointServicesApigetPrivateEndpoint
     */
    groupId: string
    /**
     * Cloud service provider that manages this private endpoint.
     * @type &#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39;
     * @memberof PrivateEndpointServicesApigetPrivateEndpoint
     */
    cloudProvider: 'AWS' | 'AZURE' | 'GCP'
    /**
     * Unique string that identifies the private endpoint you want to return. The format of the **endpointId** parameter differs for AWS and Azure. You must URL encode the **endpointId** for Azure private endpoints.
     * @type string
     * @memberof PrivateEndpointServicesApigetPrivateEndpoint
     */
    endpointId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the private endpoint service for which you want to return a private endpoint.
     * @type string
     * @memberof PrivateEndpointServicesApigetPrivateEndpoint
     */
    endpointServiceId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof PrivateEndpointServicesApigetPrivateEndpoint
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof PrivateEndpointServicesApigetPrivateEndpoint
     */
    pretty?: boolean
}

export interface PrivateEndpointServicesApiGetPrivateEndpointServiceRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof PrivateEndpointServicesApigetPrivateEndpointService
     */
    groupId: string
    /**
     * Cloud service provider that manages this private endpoint service.
     * @type &#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39;
     * @memberof PrivateEndpointServicesApigetPrivateEndpointService
     */
    cloudProvider: 'AWS' | 'AZURE' | 'GCP'
    /**
     * Unique 24-hexadecimal digit string that identifies the private endpoint service that you want to return.
     * @type string
     * @memberof PrivateEndpointServicesApigetPrivateEndpointService
     */
    endpointServiceId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof PrivateEndpointServicesApigetPrivateEndpointService
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof PrivateEndpointServicesApigetPrivateEndpointService
     */
    pretty?: boolean
}

export interface PrivateEndpointServicesApiGetRegionalizedPrivateEndpointSettingRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof PrivateEndpointServicesApigetRegionalizedPrivateEndpointSetting
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof PrivateEndpointServicesApigetRegionalizedPrivateEndpointSetting
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof PrivateEndpointServicesApigetRegionalizedPrivateEndpointSetting
     */
    pretty?: boolean
}

export interface PrivateEndpointServicesApiListPrivateEndpointServicesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof PrivateEndpointServicesApilistPrivateEndpointServices
     */
    groupId: string
    /**
     * Cloud service provider that manages this private endpoint service.
     * @type &#39;AWS&#39; | &#39;AZURE&#39; | &#39;GCP&#39;
     * @memberof PrivateEndpointServicesApilistPrivateEndpointServices
     */
    cloudProvider: 'AWS' | 'AZURE' | 'GCP'
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof PrivateEndpointServicesApilistPrivateEndpointServices
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof PrivateEndpointServicesApilistPrivateEndpointServices
     */
    pretty?: boolean
}

export interface PrivateEndpointServicesApiToggleRegionalizedPrivateEndpointSettingRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof PrivateEndpointServicesApitoggleRegionalizedPrivateEndpointSetting
     */
    groupId: string
    /**
     * Enables or disables the ability can create multiple private resources per region in all cloud service providers in one project.
     * @type ProjectSettingItemView
     * @memberof PrivateEndpointServicesApitoggleRegionalizedPrivateEndpointSetting
     */
    projectSettingItemView: ProjectSettingItemView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof PrivateEndpointServicesApitoggleRegionalizedPrivateEndpointSetting
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof PrivateEndpointServicesApitoggleRegionalizedPrivateEndpointSetting
     */
    pretty?: boolean
}

export class ObjectPrivateEndpointServicesApi {
    private api: ObservablePrivateEndpointServicesApi

    public constructor(configuration: Configuration, requestFactory?: PrivateEndpointServicesApiRequestFactory, responseProcessor?: PrivateEndpointServicesApiResponseProcessor) {
        this.api = new ObservablePrivateEndpointServicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one private resource in the specified private resource service hosted from one cloud service provider. This cloud service provider manages the private resource service for the project. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Create One Private Endpoint for One Provider
     * @param param the request object
     */
    public createPrivateEndpoint(param: PrivateEndpointServicesApiCreatePrivateEndpointRequest, options?: Configuration): Promise<Endpoint> {
        return this.api.createPrivateEndpoint(param.groupId, param.cloudProvider, param.endpointServiceId, param.createPrivateEndpointRequest, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Creates one private resource service for the specified cloud service provider. This cloud service provider manages the private resource service for the project. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Create One Private Endpoint Service for One Provider
     * @param param the request object
     */
    public createPrivateEndpointService(param: PrivateEndpointServicesApiCreatePrivateEndpointServiceRequest, options?: Configuration): Promise<EndpointService> {
        return this.api.createPrivateEndpointService(param.groupId, param.createEndpointServiceRequest, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Removes one private resource from the specified project. This cloud service provider manages the private resource service that manages the private resource that belongs to the project. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Remove One Private Endpoint for One Provider
     * @param param the request object
     */
    public deletePrivateEndpoint(param: PrivateEndpointServicesApiDeletePrivateEndpointRequest, options?: Configuration): Promise<void> {
        return this.api.deletePrivateEndpoint(param.groupId, param.cloudProvider, param.endpointId, param.endpointServiceId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Removes one private resource service from the specified project. This cloud service provider manages the private resource service that belongs to the project. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Remove One Private Endpoint Service for One Provider
     * @param param the request object
     */
    public deletePrivateEndpointService(param: PrivateEndpointServicesApiDeletePrivateEndpointServiceRequest, options?: Configuration): Promise<void> {
        return this.api.deletePrivateEndpointService(param.groupId, param.cloudProvider, param.endpointServiceId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the connection state of the specified private resource. The private resource service manages this private resource which belongs to one project hosted from one cloud service provider. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Private Endpoint for One Provider
     * @param param the request object
     */
    public getPrivateEndpoint(param: PrivateEndpointServicesApiGetPrivateEndpointRequest, options?: Configuration): Promise<Endpoint> {
        return this.api.getPrivateEndpoint(param.groupId, param.cloudProvider, param.endpointId, param.endpointServiceId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the name, interfaces, and state of the specified private resource service from one project. The cloud service provider hosted this private resource service that belongs to the project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Private Endpoint Service for One Provider
     * @param param the request object
     */
    public getPrivateEndpointService(param: PrivateEndpointServicesApiGetPrivateEndpointServiceRequest, options?: Configuration): Promise<EndpointService> {
        return this.api.getPrivateEndpointService(param.groupId, param.cloudProvider, param.endpointServiceId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Checks whether each region in the specified cloud service provider can create multiple private resources per region. The cloud service provider manages the private resource for the project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Regionalized Private Endpoint Status
     * @param param the request object
     */
    public getRegionalizedPrivateEndpointSetting(param: PrivateEndpointServicesApiGetRegionalizedPrivateEndpointSettingRequest, options?: Configuration): Promise<ProjectSettingItemView> {
        return this.api.getRegionalizedPrivateEndpointSetting(param.groupId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the name, interfaces, and state of all private resource services for the specified cloud service provider. This cloud service provider manages the private resource service for the project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Private Endpoint Services for One Provider
     * @param param the request object
     */
    public listPrivateEndpointServices(param: PrivateEndpointServicesApiListPrivateEndpointServicesRequest, options?: Configuration): Promise<PaginatedPrivateLinkConnectionView> {
        return this.api.listPrivateEndpointServices(param.groupId, param.cloudProvider, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Enables or disables the ability can create multiple private resources per region in all cloud service providers in one project. The cloud service provider manages the private resource for the project. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Toggle Regionalized Private Endpoint Status
     * @param param the request object
     */
    public toggleRegionalizedPrivateEndpointSetting(param: PrivateEndpointServicesApiToggleRegionalizedPrivateEndpointSettingRequest, options?: Configuration): Promise<ProjectSettingItemView> {
        return this.api.toggleRegionalizedPrivateEndpointSetting(param.groupId, param.projectSettingItemView, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableProgrammaticAPIKeysApi } from "./ObservableAPI";
import { ProgrammaticAPIKeysApiRequestFactory, ProgrammaticAPIKeysApiResponseProcessor} from "../apis/ProgrammaticAPIKeysApi";

export interface ProgrammaticAPIKeysApiAddProjectApiKeyRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProgrammaticAPIKeysApiaddProjectApiKey
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies this organization API key that you want to assign to one project.
     * @type string
     * @memberof ProgrammaticAPIKeysApiaddProjectApiKey
     */
    apiUserId: string
    /**
     * Organization API key to be assigned to the specified project.
     * @type Array&lt;ApiUserRoleAssignment&gt;
     * @memberof ProgrammaticAPIKeysApiaddProjectApiKey
     */
    apiUserRoleAssignment: Array<ApiUserRoleAssignment>
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApiaddProjectApiKey
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApiaddProjectApiKey
     */
    pretty?: boolean
}

export interface ProgrammaticAPIKeysApiCreateApiKeyRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof ProgrammaticAPIKeysApicreateApiKey
     */
    orgId: string
    /**
     * Organization API Key to be created. This request requires a minimum of one of the two body parameters.
     * @type ApiCreateApiKeyView
     * @memberof ProgrammaticAPIKeysApicreateApiKey
     */
    apiCreateApiKeyView: ApiCreateApiKeyView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApicreateApiKey
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApicreateApiKey
     */
    pretty?: boolean
}

export interface ProgrammaticAPIKeysApiCreateApiKeyAccessListRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof ProgrammaticAPIKeysApicreateApiKeyAccessList
     */
    orgId: string
    /**
     * Unique 24-hexadecimal digit string that identifies this organization API key for which you want to create a new access list entry.
     * @type string
     * @memberof ProgrammaticAPIKeysApicreateApiKeyAccessList
     */
    apiUserId: string
    /**
     * Access list entries to be created for the specified organization API key.
     * @type Array&lt;ApiUserAccessListView&gt;
     * @memberof ProgrammaticAPIKeysApicreateApiKeyAccessList
     */
    apiUserAccessListView: Array<ApiUserAccessListView>
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApicreateApiKeyAccessList
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApicreateApiKeyAccessList
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof ProgrammaticAPIKeysApicreateApiKeyAccessList
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof ProgrammaticAPIKeysApicreateApiKeyAccessList
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApicreateApiKeyAccessList
     */
    pretty?: boolean
}

export interface ProgrammaticAPIKeysApiCreateProjectApiKeyRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProgrammaticAPIKeysApicreateProjectApiKey
     */
    groupId: string
    /**
     * Organization API key to be created and assigned to the specified project. This request requires a minimum of one of the two body parameters.
     * @type ApiCreateApiKeyView
     * @memberof ProgrammaticAPIKeysApicreateProjectApiKey
     */
    apiCreateApiKeyView: ApiCreateApiKeyView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApicreateProjectApiKey
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApicreateProjectApiKey
     */
    pretty?: boolean
}

export interface ProgrammaticAPIKeysApiDeleteApiKeyRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof ProgrammaticAPIKeysApideleteApiKey
     */
    orgId: string
    /**
     * Unique 24-hexadecimal digit string that identifies this organization API key.
     * @type string
     * @memberof ProgrammaticAPIKeysApideleteApiKey
     */
    apiUserId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApideleteApiKey
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApideleteApiKey
     */
    pretty?: boolean
}

export interface ProgrammaticAPIKeysApiDeleteApiKeyAcessListRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof ProgrammaticAPIKeysApideleteApiKeyAcessList
     */
    orgId: string
    /**
     * Unique 24-hexadecimal digit string that identifies this organization API key for which you want to remove access list entries.
     * @type string
     * @memberof ProgrammaticAPIKeysApideleteApiKeyAcessList
     */
    apiUserId: string
    /**
     * One IP address or multiple IP addresses represented as one CIDR block to limit requests to API resources in the specified organization. When adding a CIDR block with a subnet mask, such as 192.0.2.0/24, use the URL-encoded value %2F for the forward slash /.
     * @type string
     * @memberof ProgrammaticAPIKeysApideleteApiKeyAcessList
     */
    ipAddress: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApideleteApiKeyAcessList
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApideleteApiKeyAcessList
     */
    pretty?: boolean
}

export interface ProgrammaticAPIKeysApiGetApiKeyRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof ProgrammaticAPIKeysApigetApiKey
     */
    orgId: string
    /**
     * Unique 24-hexadecimal digit string that identifies this organization API key that  you want to update.
     * @type string
     * @memberof ProgrammaticAPIKeysApigetApiKey
     */
    apiUserId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApigetApiKey
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApigetApiKey
     */
    pretty?: boolean
}

export interface ProgrammaticAPIKeysApiGetApiKeyAccessListRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof ProgrammaticAPIKeysApigetApiKeyAccessList
     */
    orgId: string
    /**
     * One IP address or multiple IP addresses represented as one CIDR block to limit  requests to API resources in the specified organization. When adding a CIDR block with a subnet mask, such as  192.0.2.0/24, use the URL-encoded value %2F for the forward slash /.
     * @type string
     * @memberof ProgrammaticAPIKeysApigetApiKeyAccessList
     */
    ipAddress: string
    /**
     * Unique 24-hexadecimal digit string that identifies this organization API key for  which you want to return access list entries.
     * @type string
     * @memberof ProgrammaticAPIKeysApigetApiKeyAccessList
     */
    apiUserId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApigetApiKeyAccessList
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApigetApiKeyAccessList
     */
    pretty?: boolean
}

export interface ProgrammaticAPIKeysApiListApiKeyAccessListsEntriesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof ProgrammaticAPIKeysApilistApiKeyAccessListsEntries
     */
    orgId: string
    /**
     * Unique 24-hexadecimal digit string that identifies this organization API key for which you want to return access list entries.
     * @type string
     * @memberof ProgrammaticAPIKeysApilistApiKeyAccessListsEntries
     */
    apiUserId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApilistApiKeyAccessListsEntries
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApilistApiKeyAccessListsEntries
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof ProgrammaticAPIKeysApilistApiKeyAccessListsEntries
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof ProgrammaticAPIKeysApilistApiKeyAccessListsEntries
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApilistApiKeyAccessListsEntries
     */
    pretty?: boolean
}

export interface ProgrammaticAPIKeysApiListApiKeysRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof ProgrammaticAPIKeysApilistApiKeys
     */
    orgId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApilistApiKeys
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApilistApiKeys
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof ProgrammaticAPIKeysApilistApiKeys
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof ProgrammaticAPIKeysApilistApiKeys
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApilistApiKeys
     */
    pretty?: boolean
}

export interface ProgrammaticAPIKeysApiListProjectApiKeysRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProgrammaticAPIKeysApilistProjectApiKeys
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApilistProjectApiKeys
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApilistProjectApiKeys
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof ProgrammaticAPIKeysApilistProjectApiKeys
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof ProgrammaticAPIKeysApilistProjectApiKeys
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApilistProjectApiKeys
     */
    pretty?: boolean
}

export interface ProgrammaticAPIKeysApiRemoveProjectApiKeyRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProgrammaticAPIKeysApiremoveProjectApiKey
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies this organization API key that you want to unassign from one project.
     * @type string
     * @memberof ProgrammaticAPIKeysApiremoveProjectApiKey
     */
    apiUserId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApiremoveProjectApiKey
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApiremoveProjectApiKey
     */
    pretty?: boolean
}

export interface ProgrammaticAPIKeysApiUpdateApiKeyRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof ProgrammaticAPIKeysApiupdateApiKey
     */
    orgId: string
    /**
     * Unique 24-hexadecimal digit string that identifies this organization API key you  want to update.
     * @type string
     * @memberof ProgrammaticAPIKeysApiupdateApiKey
     */
    apiUserId: string
    /**
     * Organization API key to be updated. This request requires a minimum of one of the two body parameters.
     * @type ApiApiUserView
     * @memberof ProgrammaticAPIKeysApiupdateApiKey
     */
    apiApiUserView: ApiApiUserView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApiupdateApiKey
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApiupdateApiKey
     */
    pretty?: boolean
}

export interface ProgrammaticAPIKeysApiUpdateApiKeyRolesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProgrammaticAPIKeysApiupdateApiKeyRoles
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies this organization API key that you want to unassign from one project.
     * @type string
     * @memberof ProgrammaticAPIKeysApiupdateApiKeyRoles
     */
    apiUserId: string
    /**
     * Organization API Key to be updated. This request requires a minimum of one of the two body parameters.
     * @type ApiCreateApiKeyView
     * @memberof ProgrammaticAPIKeysApiupdateApiKeyRoles
     */
    apiCreateApiKeyView: ApiCreateApiKeyView
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof ProgrammaticAPIKeysApiupdateApiKeyRoles
     */
    pageNum?: number
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof ProgrammaticAPIKeysApiupdateApiKeyRoles
     */
    itemsPerPage?: number
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApiupdateApiKeyRoles
     */
    includeCount?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApiupdateApiKeyRoles
     */
    pretty?: boolean
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProgrammaticAPIKeysApiupdateApiKeyRoles
     */
    envelope?: boolean
}

export class ObjectProgrammaticAPIKeysApi {
    private api: ObservableProgrammaticAPIKeysApi

    public constructor(configuration: Configuration, requestFactory?: ProgrammaticAPIKeysApiRequestFactory, responseProcessor?: ProgrammaticAPIKeysApiResponseProcessor) {
        this.api = new ObservableProgrammaticAPIKeysApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Assigns the specified organization API key to the specified project. Users with the Project Owner role in the project associated with the API key can then use the organization API key to access the resources. To use this resource, the requesting API Key must have the Project User Admin role. This resource doesn't require the API Key to have an Access List.
     * Assign One Organization API Key to One Project
     * @param param the request object
     */
    public addProjectApiKey(param: ProgrammaticAPIKeysApiAddProjectApiKeyRequest, options?: Configuration): Promise<ApiApiUserView> {
        return this.api.addProjectApiKey(param.groupId, param.apiUserId, param.apiUserRoleAssignment, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Creates one API key for the specified organization. An organization API key grants programmatic access to an organization. You can't use the API key to log into the console. To use this resource, the requesting API Key must have the Organization User Admin role. This resource doesn't require the API Key to have an Access List.
     * Create One Organization API Key
     * @param param the request object
     */
    public createApiKey(param: ProgrammaticAPIKeysApiCreateApiKeyRequest, options?: Configuration): Promise<ApiApiUserView> {
        return this.api.createApiKey(param.orgId, param.apiCreateApiKeyView, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Creates the access list entries for the specified organization API key. Resources require all API requests originate from IP addresses on the API access list. To use this resource, the requesting API Key must have the Read Write role and an entry for the project access list.
     * Create Access List Entries for One Organization API Key
     * @param param the request object
     */
    public createApiKeyAccessList(param: ProgrammaticAPIKeysApiCreateApiKeyAccessListRequest, options?: Configuration): Promise<ApiUserAccessListView> {
        return this.api.createApiKeyAccessList(param.orgId, param.apiUserId, param.apiUserAccessListView, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

    /**
     * Creates and assigns the specified organization API key to the specified project. Users with the Project Owner role in the project associated with the API key can use the organization API key to access the resources. To use this resource, the requesting API Key must have the Project User Admin role. This resource doesn't require the API Key to have an Access List.
     * Create and Assign One Organization API Key to One Project
     * @param param the request object
     */
    public createProjectApiKey(param: ProgrammaticAPIKeysApiCreateProjectApiKeyRequest, options?: Configuration): Promise<ApiApiUserView> {
        return this.api.createProjectApiKey(param.groupId, param.apiCreateApiKeyView, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Removes one organization API key from the specified organization. When you remove an API key from an organization, MongoDB Cloud also removes that key from any projects that use that key. To use this resource, the requesting API Key must have the Organization User Admin role. This resource doesn't require the API Key to have an Access List.
     * Remove One Organization API Key
     * @param param the request object
     */
    public deleteApiKey(param: ProgrammaticAPIKeysApiDeleteApiKeyRequest, options?: Configuration): Promise<void> {
        return this.api.deleteApiKey(param.orgId, param.apiUserId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Removes the specified access list entry from the specified organization API key. Resources require all API requests originate from the IP addresses on the API access list. To use this resource, the requesting API Key must have the Read Write role and an entry for the project access list.
     * Remove One Access List Entry for One Organization API Key
     * @param param the request object
     */
    public deleteApiKeyAcessList(param: ProgrammaticAPIKeysApiDeleteApiKeyAcessListRequest, options?: Configuration): Promise<void> {
        return this.api.deleteApiKeyAcessList(param.orgId, param.apiUserId, param.ipAddress, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns one organization API key. The organization API keys grant programmatic access to an organization. You can't use the API key to log into MongoDB Cloud through the user interface. To use this resource, the requesting API Key must have the  Organization Member role. This resource doesn't require the API Key to have an  Access List.
     * Return One Organization API Key
     * @param param the request object
     */
    public getApiKey(param: ProgrammaticAPIKeysApiGetApiKeyRequest, options?: Configuration): Promise<ApiApiUserView> {
        return this.api.getApiKey(param.orgId, param.apiUserId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns one access list entry for the specified organization API key. Resources require  all API requests originate from IP addresses on the API access list. To use this resource,  the requesting API Key must have the Organization Member role. This resource  doesn't require the API Key to have an Access List.
     * Return One Access List Entry for One Organization API Key
     * @param param the request object
     */
    public getApiKeyAccessList(param: ProgrammaticAPIKeysApiGetApiKeyAccessListRequest, options?: Configuration): Promise<ApiUserAccessListView> {
        return this.api.getApiKeyAccessList(param.orgId, param.ipAddress, param.apiUserId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns all access list entries that you configured for the specified organization API key. To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an Access List.
     * Return All Access List Entries for One Organization API Key
     * @param param the request object
     */
    public listApiKeyAccessListsEntries(param: ProgrammaticAPIKeysApiListApiKeyAccessListsEntriesRequest, options?: Configuration): Promise<PaginatedApiUserAccessListView> {
        return this.api.listApiKeyAccessListsEntries(param.orgId, param.apiUserId, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

    /**
     * Returns all organization API keys for the specified organization. The organization API keys grant programmatic access to an organization. You can't use the API key to log into MongoDB Cloud through the console. To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an Access List.
     * Return All Organization API Keys
     * @param param the request object
     */
    public listApiKeys(param: ProgrammaticAPIKeysApiListApiKeysRequest, options?: Configuration): Promise<PaginatedApiApiUserView> {
        return this.api.listApiKeys(param.orgId, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

    /**
     * Returns all organization API keys that you assigned to the specified project. Users with the Project Owner role in the project associated with the API key can use the organization API key to access the resources. To use this resource, the requesting API Key must have the Project User Admin role. This resource doesn't require the API Key to have an Access List.
     * Return All Organization API Keys Assigned to One Project
     * @param param the request object
     */
    public listProjectApiKeys(param: ProgrammaticAPIKeysApiListProjectApiKeysRequest, options?: Configuration): Promise<PaginatedApiApiUserView> {
        return this.api.listProjectApiKeys(param.groupId, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

    /**
     * Removes one organization API key from the specified project. To use this resource, the requesting API Key must have the Project User Admin role. This resource doesn't require the API Key to have an Access List.
     * Unassign One Organization API Key from One Project
     * @param param the request object
     */
    public removeProjectApiKey(param: ProgrammaticAPIKeysApiRemoveProjectApiKeyRequest, options?: Configuration): Promise<void> {
        return this.api.removeProjectApiKey(param.groupId, param.apiUserId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Updates one organization API key in the specified organization. The organization API keys  grant programmatic access to an organization. To use this resource, the requesting  API Key must have the Organization User Admin role. This resource doesn't require  the API Key to have an Access List.
     * Update One Organization API Key
     * @param param the request object
     */
    public updateApiKey(param: ProgrammaticAPIKeysApiUpdateApiKeyRequest, options?: Configuration): Promise<ApiApiUserView> {
        return this.api.updateApiKey(param.orgId, param.apiUserId, param.apiApiUserView, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Updates the roles of the organization API key that you specify for the project that you specify. You must specify at least one valid role for the project. The application removes any roles that you do not include in this request if they were previously set in the organization API key that you specify for the project.
     * Update Roles of One Organization API Key to One Project
     * @param param the request object
     */
    public updateApiKeyRoles(param: ProgrammaticAPIKeysApiUpdateApiKeyRolesRequest, options?: Configuration): Promise<ApiApiUserView> {
        return this.api.updateApiKeyRoles(param.groupId, param.apiUserId, param.apiCreateApiKeyView, param.pageNum, param.itemsPerPage, param.includeCount, param.pretty, param.envelope,  options).toPromise();
    }

}

import { ObservableProjectIPAccessListApi } from "./ObservableAPI";
import { ProjectIPAccessListApiRequestFactory, ProjectIPAccessListApiResponseProcessor} from "../apis/ProjectIPAccessListApi";

export interface ProjectIPAccessListApiCreateProjectIpAccessListRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectIPAccessListApicreateProjectIpAccessList
     */
    groupId: string
    /**
     * One or more access list entries to add to the specified project.
     * @type Array&lt;NetworkPermissionEntry&gt;
     * @memberof ProjectIPAccessListApicreateProjectIpAccessList
     */
    networkPermissionEntry: Array<NetworkPermissionEntry>
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProjectIPAccessListApicreateProjectIpAccessList
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof ProjectIPAccessListApicreateProjectIpAccessList
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof ProjectIPAccessListApicreateProjectIpAccessList
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof ProjectIPAccessListApicreateProjectIpAccessList
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProjectIPAccessListApicreateProjectIpAccessList
     */
    pretty?: boolean
}

export interface ProjectIPAccessListApiDeleteProjectIpAccessListRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectIPAccessListApideleteProjectIpAccessList
     */
    groupId: string
    /**
     * Access list entry that you want to remove from the project&#39;s IP access list. This value can use one of the following: one AWS security group ID, one IP address, or one CIDR block of addresses. For CIDR blocks that use a subnet mask, replace the forward slash (&#x60;/&#x60;) with its URL-encoded value (&#x60;%2F&#x60;). When you remove an entry from the IP access list, existing connections from the removed address or addresses may remain open for a variable amount of time. The amount of time it takes MongoDB Cloud to close the connection depends upon several factors, including:  - how your application established the connection, - how MongoDB Cloud or the driver using the address behaves, and - which protocol (like TCP or UDP) the connection uses.
     * @type string
     * @memberof ProjectIPAccessListApideleteProjectIpAccessList
     */
    entryValue: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProjectIPAccessListApideleteProjectIpAccessList
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProjectIPAccessListApideleteProjectIpAccessList
     */
    pretty?: boolean
}

export interface ProjectIPAccessListApiGetProjectIpAccessListStatusRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectIPAccessListApigetProjectIpAccessListStatus
     */
    groupId: string
    /**
     * Network address or cloud provider security construct that identifies which project access list entry to be verified.
     * @type string
     * @memberof ProjectIPAccessListApigetProjectIpAccessListStatus
     */
    entryValue: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProjectIPAccessListApigetProjectIpAccessListStatus
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProjectIPAccessListApigetProjectIpAccessListStatus
     */
    pretty?: boolean
}

export interface ProjectIPAccessListApiGetProjectIpListRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectIPAccessListApigetProjectIpList
     */
    groupId: string
    /**
     * Access list entry that you want to return from the project&#39;s IP access list. This value can use one of the following: one AWS security group ID, one IP address, or one CIDR block of addresses. For CIDR blocks that use a subnet mask, replace the forward slash (&#x60;/&#x60;) with its URL-encoded value (&#x60;%2F&#x60;).
     * @type string
     * @memberof ProjectIPAccessListApigetProjectIpList
     */
    entryValue: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProjectIPAccessListApigetProjectIpList
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProjectIPAccessListApigetProjectIpList
     */
    pretty?: boolean
}

export interface ProjectIPAccessListApiListProjectIpAccessListsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectIPAccessListApilistProjectIpAccessLists
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProjectIPAccessListApilistProjectIpAccessLists
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof ProjectIPAccessListApilistProjectIpAccessLists
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof ProjectIPAccessListApilistProjectIpAccessLists
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof ProjectIPAccessListApilistProjectIpAccessLists
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProjectIPAccessListApilistProjectIpAccessLists
     */
    pretty?: boolean
}

export class ObjectProjectIPAccessListApi {
    private api: ObservableProjectIPAccessListApi

    public constructor(configuration: Configuration, requestFactory?: ProjectIPAccessListApiRequestFactory, responseProcessor?: ProjectIPAccessListApiResponseProcessor) {
        this.api = new ObservableProjectIPAccessListApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds one or more access list entries to the specified project. MongoDB Cloud only allows client connections to the cluster from entries in the project's IP access list. Write each entry as either one IP address or one CIDR-notated block of IP addresses. To use this resource, the requesting API Key must have the Project Owner or Project Charts Admin roles. This resource doesn't require the API Key to have an Access List. This resource replaces the whitelist resource. MongoDB Cloud removed whitelists in July 2021. Update your applications to use this new resource. The `/groups/{GROUP-ID}/accessList` endpoint manages the database IP access list. This endpoint is distinct from the `orgs/{ORG-ID}/apiKeys/{API-KEY-ID}/accesslist` endpoint, which manages the access list for MongoDB Cloud organizations. This endpoint doesn't support concurrent `POST` requests. You must submit multiple `POST` requests synchronously.
     * Add Entries to Project IP Access List
     * @param param the request object
     */
    public createProjectIpAccessList(param: ProjectIPAccessListApiCreateProjectIpAccessListRequest, options?: Configuration): Promise<PaginatedNetworkAccessView> {
        return this.api.createProjectIpAccessList(param.groupId, param.networkPermissionEntry, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

    /**
     * Removes one access list entry from the specified project's IP access list. Each entry in the project's IP access list contains one IP address, one CIDR-notated block of IP addresses, or one AWS Security Group ID. MongoDB Cloud only allows client connections to the cluster from entries in the project's IP access list. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List. This resource replaces the whitelist resource. MongoDB Cloud removed whitelists in July 2021. Update your applications to use this new resource. The `/groups/{GROUP-ID}/accessList` endpoint manages the database IP access list. This endpoint is distinct from the `orgs/{ORG-ID}/apiKeys/{API-KEY-ID}/accesslist` endpoint, which manages the access list for MongoDB Cloud organizations.
     * Remove One Entry from One Project IP Access List
     * @param param the request object
     */
    public deleteProjectIpAccessList(param: ProjectIPAccessListApiDeleteProjectIpAccessListRequest, options?: Configuration): Promise<void> {
        return this.api.deleteProjectIpAccessList(param.groupId, param.entryValue, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the status of one project IP access list entry. This resource checks if the provided project IP access list entry applies to all cloud providers serving clusters from the specified project.
     * Return Status of One Project IP Access List Entry
     * @param param the request object
     */
    public getProjectIpAccessListStatus(param: ProjectIPAccessListApiGetProjectIpAccessListStatusRequest, options?: Configuration): Promise<NetworkPermissionEntryStatus> {
        return this.api.getProjectIpAccessListStatus(param.groupId, param.entryValue, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns one access list entry from the specified project's IP access list. Each entry in the project's IP access list contains either one IP address or one CIDR-notated block of IP addresses. MongoDB Cloud only allows client connections to the cluster from entries in the project's IP access list. To use this resource, the requesting API Key must have the Project Read Only or Project Charts Admin roles. This resource doesn't require the API Key to have an Access List. This resource replaces the whitelist resource. MongoDB Cloud removed whitelists in July 2021. Update your applications to use this new resource. This endpoint (`/groups/{GROUP-ID}/accessList`) manages the Project IP Access List. It doesn't manage the access list for MongoDB Cloud organizations. TheProgrammatic API Keys endpoint (`/orgs/{ORG-ID}/apiKeys/{API-KEY-ID}/accesslist`) manages those access lists.
     * Return One Project IP Access List Entry
     * @param param the request object
     */
    public getProjectIpList(param: ProjectIPAccessListApiGetProjectIpListRequest, options?: Configuration): Promise<NetworkPermissionEntry> {
        return this.api.getProjectIpList(param.groupId, param.entryValue, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns all access list entries from the specified project's IP access list. Each entry in the project's IP access list contains either one IP address or one CIDR-notated block of IP addresses. MongoDB Cloud only allows client connections to the cluster from entries in the project's IP access list. To use this resource, the requesting API Key must have the Project Read Only or Project Charts Admin roles. This resource doesn't require the API Key to have an Access List. This resource replaces the whitelist resource. MongoDB Cloud removed whitelists in July 2021. Update your applications to use this new resource. The `/groups/{GROUP-ID}/accessList` endpoint manages the database IP access list. This endpoint is distinct from the `orgs/{ORG-ID}/apiKeys/{API-KEY-ID}/accesslist` endpoint, which manages the access list for MongoDB Cloud organizations.
     * Return Project IP Access List
     * @param param the request object
     */
    public listProjectIpAccessLists(param: ProjectIPAccessListApiListProjectIpAccessListsRequest, options?: Configuration): Promise<PaginatedNetworkAccessView> {
        return this.api.listProjectIpAccessLists(param.groupId, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

}

import { ObservableProjectsApi } from "./ObservableAPI";
import { ProjectsApiRequestFactory, ProjectsApiResponseProcessor} from "../apis/ProjectsApi";

export interface ProjectsApiCreateProjectRequest {
    /**
     * Creates one project.
     * @type Group
     * @memberof ProjectsApicreateProject
     */
    group: Group
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProjectsApicreateProject
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProjectsApicreateProject
     */
    pretty?: boolean
    /**
     * Unique 24-hexadecimal digit string that identifies the MongoDB Cloud user to whom to grant the Project Owner role on the specified project. If you set this parameter, it overrides the default value of the oldest Organization Owner. 
     * @type string
     * @memberof ProjectsApicreateProject
     */
    projectOwnerId?: string
}

export interface ProjectsApiCreateProjectInvitationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApicreateProjectInvitation
     */
    groupId: string
    /**
     * Invites one MongoDB Cloud user to join the specified project.
     * @type ApiGroupInvitationRequestView
     * @memberof ProjectsApicreateProjectInvitation
     */
    apiGroupInvitationRequestView: ApiGroupInvitationRequestView
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProjectsApicreateProjectInvitation
     */
    pretty?: boolean
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProjectsApicreateProjectInvitation
     */
    envelope?: boolean
}

export interface ProjectsApiDeleteProjectRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApideleteProject
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProjectsApideleteProject
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProjectsApideleteProject
     */
    pretty?: boolean
}

export interface ProjectsApiDeleteProjectInvitationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApideleteProjectInvitation
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the invitation.
     * @type string
     * @memberof ProjectsApideleteProjectInvitation
     */
    invitationId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProjectsApideleteProjectInvitation
     */
    envelope?: boolean
}

export interface ProjectsApiDeleteProjectLimitRequest {
    /**
     * Human-readable label that identifies this project limit.  | Limit Name | Description | Default | | --- | --- | --- | | atlas.project.deployment.clusters | Limit on the number of clusters in this project | 25 | | atlas.project.deployment.nodesPerPrivateLinkRegion | Limit on the number of nodes per Private Link region in this project | 50 | | atlas.project.security.databaseAccess.customRoles | Limit on the number of custom roles in this project | 100 | | atlas.project.security.databaseAccess.users | Limit on the number of database users in this project | 100 | | atlas.project.security.networkAccess.crossRegionEntries | Limit on the number of cross-region network access entries in this project | 40 | | atlas.project.security.networkAccess.entries | Limit on the number of network access entries in this project | 200 | | dataFederation.bytesProcessed.query | Limit on the number of bytes processed during a single Data Federation query | N/A | | dataFederation.bytesProcessed.daily | Limit on the number of bytes processed across all Data Federation tenants for the current day | N/A | | dataFederation.bytesProcessed.weekly | Limit on the number of bytes processed across all Data Federation tenants for the current week | N/A | | dataFederation.bytesProcessed.monthly | Limit on the number of bytes processed across all Data Federation tenants for the current month | N/A | 
     * @type &#39;atlas.project.security.databaseAccess.users&#39; | &#39;atlas.project.deployment.clusters&#39; | &#39;atlas.project.security.databaseAccess.customRoles&#39; | &#39;atlas.project.security.networkAccess.entries&#39; | &#39;atlas.project.security.networkAccess.crossRegionEntries&#39; | &#39;atlas.project.deployment.nodesPerPrivateLinkRegion&#39; | &#39;dataFederation.bytesProcessed.query&#39; | &#39;dataFederation.bytesProcessed.daily&#39; | &#39;dataFederation.bytesProcessed.weekly&#39; | &#39;dataFederation.bytesProcessed.monthly&#39;
     * @memberof ProjectsApideleteProjectLimit
     */
    limitName: 'atlas.project.security.databaseAccess.users' | 'atlas.project.deployment.clusters' | 'atlas.project.security.databaseAccess.customRoles' | 'atlas.project.security.networkAccess.entries' | 'atlas.project.security.networkAccess.crossRegionEntries' | 'atlas.project.deployment.nodesPerPrivateLinkRegion' | 'dataFederation.bytesProcessed.query' | 'dataFederation.bytesProcessed.daily' | 'dataFederation.bytesProcessed.weekly' | 'dataFederation.bytesProcessed.monthly'
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApideleteProjectLimit
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProjectsApideleteProjectLimit
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProjectsApideleteProjectLimit
     */
    pretty?: boolean
}

export interface ProjectsApiGetProjectRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApigetProject
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProjectsApigetProject
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProjectsApigetProject
     */
    pretty?: boolean
}

export interface ProjectsApiGetProjectByNameRequest {
    /**
     * Human-readable label that identifies this project.
     * @type string
     * @memberof ProjectsApigetProjectByName
     */
    groupName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProjectsApigetProjectByName
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProjectsApigetProjectByName
     */
    pretty?: boolean
}

export interface ProjectsApiGetProjectInvitationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApigetProjectInvitation
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the invitation.
     * @type string
     * @memberof ProjectsApigetProjectInvitation
     */
    invitationId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProjectsApigetProjectInvitation
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProjectsApigetProjectInvitation
     */
    pretty?: boolean
}

export interface ProjectsApiGetProjectLimitRequest {
    /**
     * Human-readable label that identifies this project limit.  | Limit Name | Description | Default | | --- | --- | --- | | atlas.project.deployment.clusters | Limit on the number of clusters in this project | 25 | | atlas.project.deployment.nodesPerPrivateLinkRegion | Limit on the number of nodes per Private Link region in this project | 50 | | atlas.project.security.databaseAccess.customRoles | Limit on the number of custom roles in this project | 100 | | atlas.project.security.databaseAccess.users | Limit on the number of database users in this project | 100 | | atlas.project.security.networkAccess.crossRegionEntries | Limit on the number of cross-region network access entries in this project | 40 | | atlas.project.security.networkAccess.entries | Limit on the number of network access entries in this project | 200 | | dataFederation.bytesProcessed.query | Limit on the number of bytes processed during a single Data Federation query | N/A | | dataFederation.bytesProcessed.daily | Limit on the number of bytes processed across all Data Federation tenants for the current day | N/A | | dataFederation.bytesProcessed.weekly | Limit on the number of bytes processed across all Data Federation tenants for the current week | N/A | | dataFederation.bytesProcessed.monthly | Limit on the number of bytes processed across all Data Federation tenants for the current month | N/A | 
     * @type &#39;atlas.project.security.databaseAccess.users&#39; | &#39;atlas.project.deployment.clusters&#39; | &#39;atlas.project.security.databaseAccess.customRoles&#39; | &#39;atlas.project.security.networkAccess.entries&#39; | &#39;atlas.project.security.networkAccess.crossRegionEntries&#39; | &#39;atlas.project.deployment.nodesPerPrivateLinkRegion&#39; | &#39;dataFederation.bytesProcessed.query&#39; | &#39;dataFederation.bytesProcessed.daily&#39; | &#39;dataFederation.bytesProcessed.weekly&#39; | &#39;dataFederation.bytesProcessed.monthly&#39;
     * @memberof ProjectsApigetProjectLimit
     */
    limitName: 'atlas.project.security.databaseAccess.users' | 'atlas.project.deployment.clusters' | 'atlas.project.security.databaseAccess.customRoles' | 'atlas.project.security.networkAccess.entries' | 'atlas.project.security.networkAccess.crossRegionEntries' | 'atlas.project.deployment.nodesPerPrivateLinkRegion' | 'dataFederation.bytesProcessed.query' | 'dataFederation.bytesProcessed.daily' | 'dataFederation.bytesProcessed.weekly' | 'dataFederation.bytesProcessed.monthly'
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApigetProjectLimit
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProjectsApigetProjectLimit
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProjectsApigetProjectLimit
     */
    pretty?: boolean
}

export interface ProjectsApiGetProjectSettingsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApigetProjectSettings
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProjectsApigetProjectSettings
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProjectsApigetProjectSettings
     */
    pretty?: boolean
}

export interface ProjectsApiListProjectInvitationsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApilistProjectInvitations
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProjectsApilistProjectInvitations
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProjectsApilistProjectInvitations
     */
    pretty?: boolean
    /**
     * Email address of the user account invited to this project.
     * @type string
     * @memberof ProjectsApilistProjectInvitations
     */
    username?: string
}

export interface ProjectsApiListProjectLimitsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApilistProjectLimits
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProjectsApilistProjectLimits
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProjectsApilistProjectLimits
     */
    pretty?: boolean
}

export interface ProjectsApiListProjectUsersRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApilistProjectUsers
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProjectsApilistProjectUsers
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof ProjectsApilistProjectUsers
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof ProjectsApilistProjectUsers
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof ProjectsApilistProjectUsers
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProjectsApilistProjectUsers
     */
    pretty?: boolean
    /**
     * Flag that indicates whether the returned list should include users who belong to a team with a role in this project. You might not have assigned the individual users a role in this project. If &#x60;\&quot;flattenTeams\&quot; : false&#x60;, this resource returns only users with a role in the project.  If &#x60;\&quot;flattenTeams\&quot; : true&#x60;, this resource returns both users with roles in the project and users who belong to teams with roles in the project.
     * @type boolean
     * @memberof ProjectsApilistProjectUsers
     */
    flattenTeams?: boolean
    /**
     * Flag that indicates whether the returned list should include users with implicit access to the project, the Organization Owner or Organization Read Only role. You might not have assigned the individual users a role in this project. If &#x60;\&quot;includeOrgUsers\&quot;: false&#x60;, this resource returns only users with a role in the project. If &#x60;\&quot;includeOrgUsers\&quot;: true&#x60;, this resource returns both users with roles in the project and users who have implicit access to the project through their organization role.
     * @type boolean
     * @memberof ProjectsApilistProjectUsers
     */
    includeOrgUsers?: boolean
}

export interface ProjectsApiListProjectsRequest {
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProjectsApilistProjects
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof ProjectsApilistProjects
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof ProjectsApilistProjects
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof ProjectsApilistProjects
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProjectsApilistProjects
     */
    pretty?: boolean
}

export interface ProjectsApiRemoveProjectUserRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApiremoveProjectUser
     */
    groupId: string
    /**
     * Unique 24-hexadecimal string that identifies MongoDB Cloud user you want to remove from the specified project. To return a application user&#39;s ID using their application username, use the Get All application users in One Project endpoint.
     * @type string
     * @memberof ProjectsApiremoveProjectUser
     */
    userId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProjectsApiremoveProjectUser
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProjectsApiremoveProjectUser
     */
    pretty?: boolean
}

export interface ProjectsApiSetProjectLimitRequest {
    /**
     * Human-readable label that identifies this project limit.  | Limit Name | Description | Default | | --- | --- | --- | | atlas.project.deployment.clusters | Limit on the number of clusters in this project | 25 | | atlas.project.deployment.nodesPerPrivateLinkRegion | Limit on the number of nodes per Private Link region in this project | 50 | | atlas.project.security.databaseAccess.customRoles | Limit on the number of custom roles in this project | 100 | | atlas.project.security.databaseAccess.users | Limit on the number of database users in this project | 100 | | atlas.project.security.networkAccess.crossRegionEntries | Limit on the number of cross-region network access entries in this project | 40 | | atlas.project.security.networkAccess.entries | Limit on the number of network access entries in this project | 200 | | dataFederation.bytesProcessed.query | Limit on the number of bytes processed during a single Data Federation query | N/A | | dataFederation.bytesProcessed.daily | Limit on the number of bytes processed across all Data Federation tenants for the current day | N/A | | dataFederation.bytesProcessed.weekly | Limit on the number of bytes processed across all Data Federation tenants for the current week | N/A | | dataFederation.bytesProcessed.monthly | Limit on the number of bytes processed across all Data Federation tenants for the current month | N/A | 
     * @type &#39;atlas.project.security.databaseAccess.users&#39; | &#39;atlas.project.deployment.clusters&#39; | &#39;atlas.project.security.databaseAccess.customRoles&#39; | &#39;atlas.project.security.networkAccess.entries&#39; | &#39;atlas.project.security.networkAccess.crossRegionEntries&#39; | &#39;atlas.project.deployment.nodesPerPrivateLinkRegion&#39; | &#39;dataFederation.bytesProcessed.query&#39; | &#39;dataFederation.bytesProcessed.daily&#39; | &#39;dataFederation.bytesProcessed.weekly&#39; | &#39;dataFederation.bytesProcessed.monthly&#39;
     * @memberof ProjectsApisetProjectLimit
     */
    limitName: 'atlas.project.security.databaseAccess.users' | 'atlas.project.deployment.clusters' | 'atlas.project.security.databaseAccess.customRoles' | 'atlas.project.security.networkAccess.entries' | 'atlas.project.security.networkAccess.crossRegionEntries' | 'atlas.project.deployment.nodesPerPrivateLinkRegion' | 'dataFederation.bytesProcessed.query' | 'dataFederation.bytesProcessed.daily' | 'dataFederation.bytesProcessed.weekly' | 'dataFederation.bytesProcessed.monthly'
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApisetProjectLimit
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProjectsApisetProjectLimit
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProjectsApisetProjectLimit
     */
    pretty?: boolean
    /**
     * 
     * @type ApiLimitView
     * @memberof ProjectsApisetProjectLimit
     */
    apiLimitView?: ApiLimitView
}

export interface ProjectsApiUpdateProjectRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApiupdateProject
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProjectsApiupdateProject
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProjectsApiupdateProject
     */
    pretty?: boolean
    /**
     * 
     * @type GroupName
     * @memberof ProjectsApiupdateProject
     */
    groupName?: GroupName
}

export interface ProjectsApiUpdateProjectInvitationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApiupdateProjectInvitation
     */
    groupId: string
    /**
     * Updates the details of one pending invitation to the specified project.
     * @type ApiGroupInvitationRequestView
     * @memberof ProjectsApiupdateProjectInvitation
     */
    apiGroupInvitationRequestView: ApiGroupInvitationRequestView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProjectsApiupdateProjectInvitation
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProjectsApiupdateProjectInvitation
     */
    pretty?: boolean
}

export interface ProjectsApiUpdateProjectInvitationByIdRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApiupdateProjectInvitationById
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the invitation.
     * @type string
     * @memberof ProjectsApiupdateProjectInvitationById
     */
    invitationId: string
    /**
     * Updates the details of one pending invitation to the specified project.
     * @type ApiGroupInvitationUpdateRequestView
     * @memberof ProjectsApiupdateProjectInvitationById
     */
    apiGroupInvitationUpdateRequestView: ApiGroupInvitationUpdateRequestView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProjectsApiupdateProjectInvitationById
     */
    envelope?: boolean
}

export interface ProjectsApiUpdateProjectSettingsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApiupdateProjectSettings
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ProjectsApiupdateProjectSettings
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ProjectsApiupdateProjectSettings
     */
    pretty?: boolean
    /**
     * 
     * @type GroupSettings
     * @memberof ProjectsApiupdateProjectSettings
     */
    groupSettings?: GroupSettings
}

export class ObjectProjectsApi {
    private api: ObservableProjectsApi

    public constructor(configuration: Configuration, requestFactory?: ProjectsApiRequestFactory, responseProcessor?: ProjectsApiResponseProcessor) {
        this.api = new ObservableProjectsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one project. Projects group clusters into logical collections that support an application environment, workload, or both. Each project can have its own users, teams, security, and alert settings. To use this resource, the requesting API Key must have the Read Write role. This resource doesn't require the API Key to have an Access List.
     * Create One Project
     * @param param the request object
     */
    public createProject(param: ProjectsApiCreateProjectRequest, options?: Configuration): Promise<Group> {
        return this.api.createProject(param.group, param.envelope, param.pretty, param.projectOwnerId,  options).toPromise();
    }

    /**
     * Invites one MongoDB Cloud user to join the specified project. The MongoDB Cloud user must accept the invitation to access information within the specified project. To use this resource, the requesting API Key must have the Project User Admin role. This resource doesn't require the API Key to have an Access List.
     * Invite One MongoDB Cloud User to Join One Project
     * @param param the request object
     */
    public createProjectInvitation(param: ProjectsApiCreateProjectInvitationRequest, options?: Configuration): Promise<ApiGroupInvitationView> {
        return this.api.createProjectInvitation(param.groupId, param.apiGroupInvitationRequestView, param.pretty, param.envelope,  options).toPromise();
    }

    /**
     * Removes the specified project. Projects group clusters into logical collections that support an application environment, workload, or both. Each project can have its own users, teams, security, and alert settings. You can delete a project only if there are no Online Archives for the clusters in the project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Remove One Project
     * @param param the request object
     */
    public deleteProject(param: ProjectsApiDeleteProjectRequest, options?: Configuration): Promise<void> {
        return this.api.deleteProject(param.groupId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Cancels one pending invitation sent to the specified MongoDB Cloud user to join a project. You can't cancel an invitation that the user accepted. To use this resource, the requesting API Key must have the Project User Admin role. This resource doesn't require the API Key to have an Access List.
     * Cancel One Project Invitation
     * @param param the request object
     */
    public deleteProjectInvitation(param: ProjectsApiDeleteProjectInvitationRequest, options?: Configuration): Promise<void> {
        return this.api.deleteProjectInvitation(param.groupId, param.invitationId, param.envelope,  options).toPromise();
    }

    /**
     * Removes the specified project limit. Depending on the limit, Atlas either resets the limit to its default value or removes the limit entirely. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Remove One Project Limit
     * @param param the request object
     */
    public deleteProjectLimit(param: ProjectsApiDeleteProjectLimitRequest, options?: Configuration): Promise<void> {
        return this.api.deleteProjectLimit(param.limitName, param.groupId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns details about the specified project. Projects group clusters into logical collections that support an application environment, workload, or both. Each project can have its own users, teams, security, and alert settings. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Project
     * @param param the request object
     */
    public getProject(param: ProjectsApiGetProjectRequest, options?: Configuration): Promise<Group> {
        return this.api.getProject(param.groupId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns details about the specified project. Projects group clusters into logical collections that support an application environment, workload, or both. Each project can have its own users, teams, security, and alert settings. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Project using Its Name
     * @param param the request object
     */
    public getProjectByName(param: ProjectsApiGetProjectByNameRequest, options?: Configuration): Promise<Group> {
        return this.api.getProjectByName(param.groupName, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the details of one pending invitation to the specified project. To use this resource, the requesting API Key must have the Project User Admin role. This resource doesn't require the API Key to have an Access List.
     * Return One Project Invitation
     * @param param the request object
     */
    public getProjectInvitation(param: ProjectsApiGetProjectInvitationRequest, options?: Configuration): Promise<ApiGroupInvitationView> {
        return this.api.getProjectInvitation(param.groupId, param.invitationId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the specified limit for the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Limit for One Project
     * @param param the request object
     */
    public getProjectLimit(param: ProjectsApiGetProjectLimitRequest, options?: Configuration): Promise<ApiLimitView> {
        return this.api.getProjectLimit(param.limitName, param.groupId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns details about the specified project's settings. To use this resource, the requesting API Key must have the Project Read Only role. This resource does not require the API Key to have an Access List.
     * Return One Project Settings
     * @param param the request object
     */
    public getProjectSettings(param: ProjectsApiGetProjectSettingsRequest, options?: Configuration): Promise<GroupSettings> {
        return this.api.getProjectSettings(param.groupId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns all pending invitations to the specified project. To use this resource, the requesting API Key must have the Project User Admin role. This resource doesn't require the API Key to have an Access List.
     * Return All Project Invitations
     * @param param the request object
     */
    public listProjectInvitations(param: ProjectsApiListProjectInvitationsRequest, options?: Configuration): Promise<Array<ApiGroupInvitationView>> {
        return this.api.listProjectInvitations(param.groupId, param.envelope, param.pretty, param.username,  options).toPromise();
    }

    /**
     * Returns all the limits for the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Limits for One Project
     * @param param the request object
     */
    public listProjectLimits(param: ProjectsApiListProjectLimitsRequest, options?: Configuration): Promise<ApiLimitView> {
        return this.api.listProjectLimits(param.groupId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns details about all users in the specified project. Users belong to an organization. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Users in One Project
     * @param param the request object
     */
    public listProjectUsers(param: ProjectsApiListProjectUsersRequest, options?: Configuration): Promise<PaginatedApiAppUserView> {
        return this.api.listProjectUsers(param.groupId, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty, param.flattenTeams, param.includeOrgUsers,  options).toPromise();
    }

    /**
     * Returns details about all projects. Projects group clusters into logical collections that support an application environment, workload, or both. Each project can have its own users, teams, security, and alert settings. To use this resource, the requesting API Key must have the Read Write role. This resource doesn't require the API Key to have an Access List.
     * Return All Projects
     * @param param the request object
     */
    public listProjects(param: ProjectsApiListProjectsRequest = {}, options?: Configuration): Promise<PaginatedAtlasGroupView> {
        return this.api.listProjects(param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

    /**
     * Removes the specified user from the specified project. To use this resource, the requesting API Key must have the Project User Admin role. This resource doesn't require the API Key to have an Access List.
     * Remove One User from One Project
     * @param param the request object
     */
    public removeProjectUser(param: ProjectsApiRemoveProjectUserRequest, options?: Configuration): Promise<void> {
        return this.api.removeProjectUser(param.groupId, param.userId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Sets the specified project limit. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Set One Project Limit
     * @param param the request object
     */
    public setProjectLimit(param: ProjectsApiSetProjectLimitRequest, options?: Configuration): Promise<ApiLimitView> {
        return this.api.setProjectLimit(param.limitName, param.groupId, param.envelope, param.pretty, param.apiLimitView,  options).toPromise();
    }

    /**
     * Updates the human-readable label that identifies the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource does not require the API Key to have an Access List.
     * Update One Project Name
     * @param param the request object
     */
    public updateProject(param: ProjectsApiUpdateProjectRequest, options?: Configuration): Promise<Group> {
        return this.api.updateProject(param.groupId, param.envelope, param.pretty, param.groupName,  options).toPromise();
    }

    /**
     * Updates the details of one pending invitation to the specified project. To specify which invitation to update, provide the username of the invited user. To use this resource, the requesting API Key must have the Project User Admin role. This resource doesn't require the API Key to have an Access List.
     * Update One Project Invitation
     * @param param the request object
     */
    public updateProjectInvitation(param: ProjectsApiUpdateProjectInvitationRequest, options?: Configuration): Promise<ApiGroupInvitationView> {
        return this.api.updateProjectInvitation(param.groupId, param.apiGroupInvitationRequestView, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Updates the details of one pending invitation to the specified project. To specify which invitation to update, provide the unique identification string for that invitation. Use the Return All Project Invitations endpoint to retrieve IDs for all pending project invitations. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Update One Project Invitation by Invitation ID
     * @param param the request object
     */
    public updateProjectInvitationById(param: ProjectsApiUpdateProjectInvitationByIdRequest, options?: Configuration): Promise<ApiGroupInvitationView> {
        return this.api.updateProjectInvitationById(param.groupId, param.invitationId, param.apiGroupInvitationUpdateRequestView, param.envelope,  options).toPromise();
    }

    /**
     * Updates the settings of the specified project. You can update any of the options available. MongoDB cloud only updates the options provided in the request. To use this resource, the requesting API Key must have the Project Owner role. This resource does not require the API Key to have an Access List.
     * Update One Project Settings
     * @param param the request object
     */
    public updateProjectSettings(param: ProjectsApiUpdateProjectSettingsRequest, options?: Configuration): Promise<GroupSettings> {
        return this.api.updateProjectSettings(param.groupId, param.envelope, param.pretty, param.groupSettings,  options).toPromise();
    }

}

import { ObservableRollingIndexApi } from "./ObservableAPI";
import { RollingIndexApiRequestFactory, RollingIndexApiResponseProcessor} from "../apis/RollingIndexApi";

export interface RollingIndexApiCreateRollingIndexRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof RollingIndexApicreateRollingIndex
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster on which MongoDB Cloud creates an index.
     * @type string
     * @memberof RollingIndexApicreateRollingIndex
     */
    clusterName: string
    /**
     * Rolling index to create on the specified cluster.
     * @type ApiIndexRequestView
     * @memberof RollingIndexApicreateRollingIndex
     */
    apiIndexRequestView: ApiIndexRequestView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof RollingIndexApicreateRollingIndex
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof RollingIndexApicreateRollingIndex
     */
    pretty?: boolean
}

export class ObjectRollingIndexApi {
    private api: ObservableRollingIndexApi

    public constructor(configuration: Configuration, requestFactory?: RollingIndexApiRequestFactory, responseProcessor?: RollingIndexApiResponseProcessor) {
        this.api = new ObservableRollingIndexApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an index on the cluster identified by its name in a rolling manner. Creating the index in this way allows index builds on one replica set member as a standalone at a time, starting with the secondary members. Creating indexes in this way requires at least one replica set election. To use this resource, the requesting API Key must have the Project Data Access Admin role. This resource doesn't require the API Key to have an Access List.
     * Create One Rolling Index
     * @param param the request object
     */
    public createRollingIndex(param: RollingIndexApiCreateRollingIndexRequest, options?: Configuration): Promise<void> {
        return this.api.createRollingIndex(param.groupId, param.clusterName, param.apiIndexRequestView, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableRootApi } from "./ObservableAPI";
import { RootApiRequestFactory, RootApiResponseProcessor} from "../apis/RootApi";

export interface RootApiGetSystemStatusRequest {
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof RootApigetSystemStatus
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof RootApigetSystemStatus
     */
    pretty?: boolean
}

export class ObjectRootApi {
    private api: ObservableRootApi

    public constructor(configuration: Configuration, requestFactory?: RootApiRequestFactory, responseProcessor?: RootApiResponseProcessor) {
        this.api = new ObservableRootApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This resource returns information about the MongoDB application along with API key meta data.
     * Return the status of this MongoDB application
     * @param param the request object
     */
    public getSystemStatus(param: RootApiGetSystemStatusRequest = {}, options?: Configuration): Promise<ApiSystemStatusView> {
        return this.api.getSystemStatus(param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableServerlessInstancesApi } from "./ObservableAPI";
import { ServerlessInstancesApiRequestFactory, ServerlessInstancesApiResponseProcessor} from "../apis/ServerlessInstancesApi";

export interface ServerlessInstancesApiCreateServerlessInstanceRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ServerlessInstancesApicreateServerlessInstance
     */
    groupId: string
    /**
     * Create One Serverless Instance in One Project.
     * @type ServerlessInstanceDescriptionCreate
     * @memberof ServerlessInstancesApicreateServerlessInstance
     */
    serverlessInstanceDescriptionCreate: ServerlessInstanceDescriptionCreate
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ServerlessInstancesApicreateServerlessInstance
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ServerlessInstancesApicreateServerlessInstance
     */
    pretty?: boolean
}

export interface ServerlessInstancesApiDeleteServerlessInstanceRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ServerlessInstancesApideleteServerlessInstance
     */
    groupId: string
    /**
     * Human-readable label that identifies the serverless instance.
     * @type string
     * @memberof ServerlessInstancesApideleteServerlessInstance
     */
    name: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ServerlessInstancesApideleteServerlessInstance
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ServerlessInstancesApideleteServerlessInstance
     */
    pretty?: boolean
}

export interface ServerlessInstancesApiGetServerlessInstanceRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ServerlessInstancesApigetServerlessInstance
     */
    groupId: string
    /**
     * Human-readable label that identifies the serverless instance.
     * @type string
     * @memberof ServerlessInstancesApigetServerlessInstance
     */
    name: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ServerlessInstancesApigetServerlessInstance
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ServerlessInstancesApigetServerlessInstance
     */
    pretty?: boolean
}

export interface ServerlessInstancesApiListServerlessInstancesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ServerlessInstancesApilistServerlessInstances
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ServerlessInstancesApilistServerlessInstances
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof ServerlessInstancesApilistServerlessInstances
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof ServerlessInstancesApilistServerlessInstances
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof ServerlessInstancesApilistServerlessInstances
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ServerlessInstancesApilistServerlessInstances
     */
    pretty?: boolean
}

export interface ServerlessInstancesApiUpdateServerlessInstanceRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ServerlessInstancesApiupdateServerlessInstance
     */
    groupId: string
    /**
     * Human-readable label that identifies the serverless instance.
     * @type string
     * @memberof ServerlessInstancesApiupdateServerlessInstance
     */
    name: string
    /**
     * Update One Serverless Instance in One Project.
     * @type ServerlessInstanceDescriptionUpdate
     * @memberof ServerlessInstancesApiupdateServerlessInstance
     */
    serverlessInstanceDescriptionUpdate: ServerlessInstanceDescriptionUpdate
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ServerlessInstancesApiupdateServerlessInstance
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ServerlessInstancesApiupdateServerlessInstance
     */
    pretty?: boolean
}

export class ObjectServerlessInstancesApi {
    private api: ObservableServerlessInstancesApi

    public constructor(configuration: Configuration, requestFactory?: ServerlessInstancesApiRequestFactory, responseProcessor?: ServerlessInstancesApiResponseProcessor) {
        this.api = new ObservableServerlessInstancesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one serverless instance in the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Create One Serverless Instance in One Project
     * @param param the request object
     */
    public createServerlessInstance(param: ServerlessInstancesApiCreateServerlessInstanceRequest, options?: Configuration): Promise<ServerlessInstanceDescription> {
        return this.api.createServerlessInstance(param.groupId, param.serverlessInstanceDescriptionCreate, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Removes one serverless instance from the specified project. The serverless instance must have termination protection disabled in order to be deleted. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Remove One Serverless Instance from One Project
     * @param param the request object
     */
    public deleteServerlessInstance(param: ServerlessInstancesApiDeleteServerlessInstanceRequest, options?: Configuration): Promise<void> {
        return this.api.deleteServerlessInstance(param.groupId, param.name, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns details for one serverless instance in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Serverless Instance from One Project
     * @param param the request object
     */
    public getServerlessInstance(param: ServerlessInstancesApiGetServerlessInstanceRequest, options?: Configuration): Promise<ServerlessInstanceDescription> {
        return this.api.getServerlessInstance(param.groupId, param.name, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns details for all serverless instances in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Serverless Instances from One Project
     * @param param the request object
     */
    public listServerlessInstances(param: ServerlessInstancesApiListServerlessInstancesRequest, options?: Configuration): Promise<PaginatedServerlessInstanceDescriptionView> {
        return this.api.listServerlessInstances(param.groupId, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

    /**
     * Updates one serverless instance in the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Update One Serverless Instance in One Project
     * @param param the request object
     */
    public updateServerlessInstance(param: ServerlessInstancesApiUpdateServerlessInstanceRequest, options?: Configuration): Promise<ServerlessInstanceDescription> {
        return this.api.updateServerlessInstance(param.groupId, param.name, param.serverlessInstanceDescriptionUpdate, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableServerlessPrivateEndpointsApi } from "./ObservableAPI";
import { ServerlessPrivateEndpointsApiRequestFactory, ServerlessPrivateEndpointsApiResponseProcessor} from "../apis/ServerlessPrivateEndpointsApi";

export interface ServerlessPrivateEndpointsApiCreateServerlessPrivateEndpointRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ServerlessPrivateEndpointsApicreateServerlessPrivateEndpoint
     */
    groupId: string
    /**
     * Human-readable label that identifies the serverless instance for which the tenant endpoint will be created.
     * @type string
     * @memberof ServerlessPrivateEndpointsApicreateServerlessPrivateEndpoint
     */
    instanceName: string
    /**
     * Information about the Private Endpoint to create for the Serverless Instance.
     * @type ServerlessTenantEndpointCreate
     * @memberof ServerlessPrivateEndpointsApicreateServerlessPrivateEndpoint
     */
    serverlessTenantEndpointCreate: ServerlessTenantEndpointCreate
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ServerlessPrivateEndpointsApicreateServerlessPrivateEndpoint
     */
    envelope?: boolean
}

export interface ServerlessPrivateEndpointsApiDeleteServerlessPrivateEndpointRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ServerlessPrivateEndpointsApideleteServerlessPrivateEndpoint
     */
    groupId: string
    /**
     * Human-readable label that identifies the serverless instance from which the tenant endpoint will be removed.
     * @type string
     * @memberof ServerlessPrivateEndpointsApideleteServerlessPrivateEndpoint
     */
    instanceName: string
    /**
     * Unique 24-hexadecimal digit string that identifies the tenant endpoint which will be removed.
     * @type string
     * @memberof ServerlessPrivateEndpointsApideleteServerlessPrivateEndpoint
     */
    endpointId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ServerlessPrivateEndpointsApideleteServerlessPrivateEndpoint
     */
    envelope?: boolean
}

export interface ServerlessPrivateEndpointsApiGetServerlessPrivateEndpointRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ServerlessPrivateEndpointsApigetServerlessPrivateEndpoint
     */
    groupId: string
    /**
     * Human-readable label that identifies the serverless instance associated with the tenant endpoint.
     * @type string
     * @memberof ServerlessPrivateEndpointsApigetServerlessPrivateEndpoint
     */
    instanceName: string
    /**
     * Unique 24-hexadecimal digit string that identifies the tenant endpoint.
     * @type string
     * @memberof ServerlessPrivateEndpointsApigetServerlessPrivateEndpoint
     */
    endpointId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ServerlessPrivateEndpointsApigetServerlessPrivateEndpoint
     */
    envelope?: boolean
}

export interface ServerlessPrivateEndpointsApiListServerlessPrivateEndpointsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ServerlessPrivateEndpointsApilistServerlessPrivateEndpoints
     */
    groupId: string
    /**
     * Human-readable label that identifies the serverless instance associated with the tenant endpoint.
     * @type string
     * @memberof ServerlessPrivateEndpointsApilistServerlessPrivateEndpoints
     */
    instanceName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ServerlessPrivateEndpointsApilistServerlessPrivateEndpoints
     */
    envelope?: boolean
}

export interface ServerlessPrivateEndpointsApiUpdateServerlessPrivateEndpointRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ServerlessPrivateEndpointsApiupdateServerlessPrivateEndpoint
     */
    groupId: string
    /**
     * Human-readable label that identifies the serverless instance associated with the tenant endpoint that will be updated.
     * @type string
     * @memberof ServerlessPrivateEndpointsApiupdateServerlessPrivateEndpoint
     */
    instanceName: string
    /**
     * Unique 24-hexadecimal digit string that identifies the tenant endpoint which will be updated.
     * @type string
     * @memberof ServerlessPrivateEndpointsApiupdateServerlessPrivateEndpoint
     */
    endpointId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ServerlessPrivateEndpointsApiupdateServerlessPrivateEndpoint
     */
    envelope?: boolean
    /**
     * 
     * @type ServerlessTenantEndpointUpdate
     * @memberof ServerlessPrivateEndpointsApiupdateServerlessPrivateEndpoint
     */
    serverlessTenantEndpointUpdate?: ServerlessTenantEndpointUpdate
}

export class ObjectServerlessPrivateEndpointsApi {
    private api: ObservableServerlessPrivateEndpointsApi

    public constructor(configuration: Configuration, requestFactory?: ServerlessPrivateEndpointsApiRequestFactory, responseProcessor?: ServerlessPrivateEndpointsApiResponseProcessor) {
        this.api = new ObservableServerlessPrivateEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one private endpoint for one serverless instance. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.   A new endpoint won't be immediately available after creation.  Read the steps in the linked tutorial for detailed guidance.
     * Create One Private Endpoint for One Serverless Instance
     * @param param the request object
     */
    public createServerlessPrivateEndpoint(param: ServerlessPrivateEndpointsApiCreateServerlessPrivateEndpointRequest, options?: Configuration): Promise<ServerlessTenantEndpoint> {
        return this.api.createServerlessPrivateEndpoint(param.groupId, param.instanceName, param.serverlessTenantEndpointCreate, param.envelope,  options).toPromise();
    }

    /**
     * Remove one private endpoint from one serverless instance. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Remove One Private Endpoint for One Serverless Instance
     * @param param the request object
     */
    public deleteServerlessPrivateEndpoint(param: ServerlessPrivateEndpointsApiDeleteServerlessPrivateEndpointRequest, options?: Configuration): Promise<void> {
        return this.api.deleteServerlessPrivateEndpoint(param.groupId, param.instanceName, param.endpointId, param.envelope,  options).toPromise();
    }

    /**
     * Return one private endpoint for one serverless instance. Identify this endpoint using its unique ID. You must have at least the Project Read Only role for the project to successfully call this resource. This resource doesn't require the API Key to have an Access List.
     * Return One Private Endpoint for One Serverless Instance
     * @param param the request object
     */
    public getServerlessPrivateEndpoint(param: ServerlessPrivateEndpointsApiGetServerlessPrivateEndpointRequest, options?: Configuration): Promise<ServerlessTenantEndpoint> {
        return this.api.getServerlessPrivateEndpoint(param.groupId, param.instanceName, param.endpointId, param.envelope,  options).toPromise();
    }

    /**
     * Returns all private endpoints for one serverless instance. You must have at least the Project Read Only role for the project to successfully call this resource. This resource doesn't require the API Key to have an Access List.
     * Return All Private Endpoints for One Serverless Instance
     * @param param the request object
     */
    public listServerlessPrivateEndpoints(param: ServerlessPrivateEndpointsApiListServerlessPrivateEndpointsRequest, options?: Configuration): Promise<Array<ServerlessTenantEndpoint>> {
        return this.api.listServerlessPrivateEndpoints(param.groupId, param.instanceName, param.envelope,  options).toPromise();
    }

    /**
     * Updates one private endpoint for one serverless instance. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Update One Private Endpoint for One Serverless Instance
     * @param param the request object
     */
    public updateServerlessPrivateEndpoint(param: ServerlessPrivateEndpointsApiUpdateServerlessPrivateEndpointRequest, options?: Configuration): Promise<ServerlessTenantEndpoint> {
        return this.api.updateServerlessPrivateEndpoint(param.groupId, param.instanceName, param.endpointId, param.envelope, param.serverlessTenantEndpointUpdate,  options).toPromise();
    }

}

import { ObservableSharedTierRestoreJobsApi } from "./ObservableAPI";
import { SharedTierRestoreJobsApiRequestFactory, SharedTierRestoreJobsApiResponseProcessor} from "../apis/SharedTierRestoreJobsApi";

export interface SharedTierRestoreJobsApiCreateSharedClusterBackupRestoreJobRequest {
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof SharedTierRestoreJobsApicreateSharedClusterBackupRestoreJob
     */
    clusterName: string
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof SharedTierRestoreJobsApicreateSharedClusterBackupRestoreJob
     */
    groupId: string
    /**
     * The restore job details.
     * @type TenantRestore
     * @memberof SharedTierRestoreJobsApicreateSharedClusterBackupRestoreJob
     */
    tenantRestore: TenantRestore
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof SharedTierRestoreJobsApicreateSharedClusterBackupRestoreJob
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof SharedTierRestoreJobsApicreateSharedClusterBackupRestoreJob
     */
    pretty?: boolean
}

export interface SharedTierRestoreJobsApiGetSharedClusterBackupRestoreJobRequest {
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof SharedTierRestoreJobsApigetSharedClusterBackupRestoreJob
     */
    clusterName: string
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof SharedTierRestoreJobsApigetSharedClusterBackupRestoreJob
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the restore job to return.
     * @type string
     * @memberof SharedTierRestoreJobsApigetSharedClusterBackupRestoreJob
     */
    restoreId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof SharedTierRestoreJobsApigetSharedClusterBackupRestoreJob
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof SharedTierRestoreJobsApigetSharedClusterBackupRestoreJob
     */
    pretty?: boolean
}

export interface SharedTierRestoreJobsApiListSharedClusterBackupRestoreJobsRequest {
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof SharedTierRestoreJobsApilistSharedClusterBackupRestoreJobs
     */
    clusterName: string
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof SharedTierRestoreJobsApilistSharedClusterBackupRestoreJobs
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof SharedTierRestoreJobsApilistSharedClusterBackupRestoreJobs
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof SharedTierRestoreJobsApilistSharedClusterBackupRestoreJobs
     */
    pretty?: boolean
}

export class ObjectSharedTierRestoreJobsApi {
    private api: ObservableSharedTierRestoreJobsApi

    public constructor(configuration: Configuration, requestFactory?: SharedTierRestoreJobsApiRequestFactory, responseProcessor?: SharedTierRestoreJobsApiResponseProcessor) {
        this.api = new ObservableSharedTierRestoreJobsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Restores the specified cluster. MongoDB Cloud limits which clusters can be the target clusters of a restore. The target cluster can't use encryption at rest, run a major release MongoDB version different than the snapshot, or receive client requests during restores. MongoDB Cloud deletes all existing data on the target cluster prior to the restore operation. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Create One Restore Job from One M2 or M5 Cluster
     * @param param the request object
     */
    public createSharedClusterBackupRestoreJob(param: SharedTierRestoreJobsApiCreateSharedClusterBackupRestoreJobRequest, options?: Configuration): Promise<TenantRestore> {
        return this.api.createSharedClusterBackupRestoreJob(param.clusterName, param.groupId, param.tenantRestore, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the specified restore job. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Restore Job for One M2 or M5 Cluster
     * @param param the request object
     */
    public getSharedClusterBackupRestoreJob(param: SharedTierRestoreJobsApiGetSharedClusterBackupRestoreJobRequest, options?: Configuration): Promise<TenantRestore> {
        return this.api.getSharedClusterBackupRestoreJob(param.clusterName, param.groupId, param.restoreId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns all restore jobs for the specified M2 or M5 cluster. Restore jobs restore a cluster using a snapshot. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Restore Jobs for One M2 or M5 Cluster
     * @param param the request object
     */
    public listSharedClusterBackupRestoreJobs(param: SharedTierRestoreJobsApiListSharedClusterBackupRestoreJobsRequest, options?: Configuration): Promise<PaginatedTenantRestoreView> {
        return this.api.listSharedClusterBackupRestoreJobs(param.clusterName, param.groupId, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableSharedTierSnapshotsApi } from "./ObservableAPI";
import { SharedTierSnapshotsApiRequestFactory, SharedTierSnapshotsApiResponseProcessor} from "../apis/SharedTierSnapshotsApi";

export interface SharedTierSnapshotsApiDownloadSharedClusterBackupRequest {
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof SharedTierSnapshotsApidownloadSharedClusterBackup
     */
    clusterName: string
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof SharedTierSnapshotsApidownloadSharedClusterBackup
     */
    groupId: string
    /**
     * Snapshot to be downloaded.
     * @type TenantRestore
     * @memberof SharedTierSnapshotsApidownloadSharedClusterBackup
     */
    tenantRestore: TenantRestore
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof SharedTierSnapshotsApidownloadSharedClusterBackup
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof SharedTierSnapshotsApidownloadSharedClusterBackup
     */
    pretty?: boolean
}

export interface SharedTierSnapshotsApiGetSharedClusterBackupRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof SharedTierSnapshotsApigetSharedClusterBackup
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof SharedTierSnapshotsApigetSharedClusterBackup
     */
    clusterName: string
    /**
     * Unique 24-hexadecimal digit string that identifies the desired snapshot.
     * @type string
     * @memberof SharedTierSnapshotsApigetSharedClusterBackup
     */
    snapshotId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof SharedTierSnapshotsApigetSharedClusterBackup
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof SharedTierSnapshotsApigetSharedClusterBackup
     */
    pretty?: boolean
}

export interface SharedTierSnapshotsApiListSharedClusterBackupsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof SharedTierSnapshotsApilistSharedClusterBackups
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof SharedTierSnapshotsApilistSharedClusterBackups
     */
    clusterName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof SharedTierSnapshotsApilistSharedClusterBackups
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof SharedTierSnapshotsApilistSharedClusterBackups
     */
    pretty?: boolean
}

export class ObjectSharedTierSnapshotsApi {
    private api: ObservableSharedTierSnapshotsApi

    public constructor(configuration: Configuration, requestFactory?: SharedTierSnapshotsApiRequestFactory, responseProcessor?: SharedTierSnapshotsApiResponseProcessor) {
        this.api = new ObservableSharedTierSnapshotsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Requests one snapshot for the specified shared cluster. This resource returns a `snapshotURL` that you can use to download the snapshot. This `snapshotURL` remains active for four hours after you make the request. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Download One M2 or M5 Cluster Snapshot
     * @param param the request object
     */
    public downloadSharedClusterBackup(param: SharedTierSnapshotsApiDownloadSharedClusterBackupRequest, options?: Configuration): Promise<TenantRestore> {
        return this.api.downloadSharedClusterBackup(param.clusterName, param.groupId, param.tenantRestore, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns details for one snapshot for the specified shared cluster. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Snapshot for One M2 or M5 Cluster
     * @param param the request object
     */
    public getSharedClusterBackup(param: SharedTierSnapshotsApiGetSharedClusterBackupRequest, options?: Configuration): Promise<TenantSnapshot> {
        return this.api.getSharedClusterBackup(param.groupId, param.clusterName, param.snapshotId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns details for all snapshots for the specified shared cluster. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Snapshots for One M2 or M5 Cluster
     * @param param the request object
     */
    public listSharedClusterBackups(param: SharedTierSnapshotsApiListSharedClusterBackupsRequest, options?: Configuration): Promise<PaginatedTenantSnapshotView> {
        return this.api.listSharedClusterBackups(param.groupId, param.clusterName, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableTeamsApi } from "./ObservableAPI";
import { TeamsApiRequestFactory, TeamsApiResponseProcessor} from "../apis/TeamsApi";

export interface TeamsApiAddAllTeamsToProjectRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof TeamsApiaddAllTeamsToProject
     */
    groupId: string
    /**
     * Team to add to the specified project.
     * @type Array&lt;ApiTeamRoleView&gt;
     * @memberof TeamsApiaddAllTeamsToProject
     */
    apiTeamRoleView: Array<ApiTeamRoleView>
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof TeamsApiaddAllTeamsToProject
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof TeamsApiaddAllTeamsToProject
     */
    pretty?: boolean
}

export interface TeamsApiAddTeamUserRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof TeamsApiaddTeamUser
     */
    orgId: string
    /**
     * Unique 24-hexadecimal character string that identifies the team to which you want to add MongoDB Cloud users.
     * @type string
     * @memberof TeamsApiaddTeamUser
     */
    teamId: string
    /**
     * One or more MongoDB Cloud users that you want to add to the specified team.
     * @type Array&lt;ApiAddUserToTeamView&gt;
     * @memberof TeamsApiaddTeamUser
     */
    apiAddUserToTeamView: Array<ApiAddUserToTeamView>
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof TeamsApiaddTeamUser
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof TeamsApiaddTeamUser
     */
    pretty?: boolean
}

export interface TeamsApiCreateTeamRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof TeamsApicreateTeam
     */
    orgId: string
    /**
     * Team that you want to create in the specified organization.
     * @type ApiTeamView
     * @memberof TeamsApicreateTeam
     */
    apiTeamView: ApiTeamView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof TeamsApicreateTeam
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof TeamsApicreateTeam
     */
    pretty?: boolean
}

export interface TeamsApiDeleteTeamRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof TeamsApideleteTeam
     */
    orgId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the team that you want to delete.
     * @type string
     * @memberof TeamsApideleteTeam
     */
    teamId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof TeamsApideleteTeam
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof TeamsApideleteTeam
     */
    pretty?: boolean
}

export interface TeamsApiGetTeamByIdRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof TeamsApigetTeamById
     */
    orgId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the team whose information you want to return.
     * @type string
     * @memberof TeamsApigetTeamById
     */
    teamId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof TeamsApigetTeamById
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof TeamsApigetTeamById
     */
    pretty?: boolean
}

export interface TeamsApiGetTeamByNameRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof TeamsApigetTeamByName
     */
    orgId: string
    /**
     * Name of the team whose information you want to return.
     * @type string
     * @memberof TeamsApigetTeamByName
     */
    teamName: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof TeamsApigetTeamByName
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof TeamsApigetTeamByName
     */
    pretty?: boolean
}

export interface TeamsApiListOrganizationTeamsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof TeamsApilistOrganizationTeams
     */
    orgId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof TeamsApilistOrganizationTeams
     */
    envelope?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof TeamsApilistOrganizationTeams
     */
    itemsPerPage?: number
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof TeamsApilistOrganizationTeams
     */
    includeCount?: boolean
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof TeamsApilistOrganizationTeams
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof TeamsApilistOrganizationTeams
     */
    pretty?: boolean
}

export interface TeamsApiListProjectTeamsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof TeamsApilistProjectTeams
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof TeamsApilistProjectTeams
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof TeamsApilistProjectTeams
     */
    pretty?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof TeamsApilistProjectTeams
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof TeamsApilistProjectTeams
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof TeamsApilistProjectTeams
     */
    pageNum?: number
}

export interface TeamsApiListTeamUsersRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof TeamsApilistTeamUsers
     */
    orgId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the team whose application users you want to return.
     * @type string
     * @memberof TeamsApilistTeamUsers
     */
    teamId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof TeamsApilistTeamUsers
     */
    envelope?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof TeamsApilistTeamUsers
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof TeamsApilistTeamUsers
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof TeamsApilistTeamUsers
     */
    pretty?: boolean
}

export interface TeamsApiRemoveProjectTeamRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof TeamsApiremoveProjectTeam
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the team that you want to remove from the specified project.
     * @type string
     * @memberof TeamsApiremoveProjectTeam
     */
    teamId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof TeamsApiremoveProjectTeam
     */
    envelope?: boolean
}

export interface TeamsApiRemoveTeamUserRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof TeamsApiremoveTeamUser
     */
    orgId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the team from which you want to remove one database application user.
     * @type string
     * @memberof TeamsApiremoveTeamUser
     */
    teamId: string
    /**
     * Unique 24-hexadecimal digit string that identifies MongoDB Cloud user that you want to remove from the specified team.
     * @type string
     * @memberof TeamsApiremoveTeamUser
     */
    userId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof TeamsApiremoveTeamUser
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof TeamsApiremoveTeamUser
     */
    pretty?: boolean
}

export interface TeamsApiRenameTeamRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof TeamsApirenameTeam
     */
    orgId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the team that you want to rename.
     * @type string
     * @memberof TeamsApirenameTeam
     */
    teamId: string
    /**
     * Details to update on the specified team.
     * @type ApiTeamView
     * @memberof TeamsApirenameTeam
     */
    apiTeamView: ApiTeamView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof TeamsApirenameTeam
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof TeamsApirenameTeam
     */
    pretty?: boolean
}

export interface TeamsApiUpdateTeamRolesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof TeamsApiupdateTeamRoles
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the team for which you want to update roles.
     * @type string
     * @memberof TeamsApiupdateTeamRoles
     */
    teamId: string
    /**
     * The project roles assigned to the specified team.
     * @type ApiTeamRoleView
     * @memberof TeamsApiupdateTeamRoles
     */
    apiTeamRoleView: ApiTeamRoleView
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof TeamsApiupdateTeamRoles
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof TeamsApiupdateTeamRoles
     */
    pretty?: boolean
}

export class ObjectTeamsApi {
    private api: ObservableTeamsApi

    public constructor(configuration: Configuration, requestFactory?: TeamsApiRequestFactory, responseProcessor?: TeamsApiResponseProcessor) {
        this.api = new ObservableTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds one team to the specified project. All members of the team share the same project access. MongoDB Cloud limits the number of users to a maximum of 100 teams per project and a maximum of 250 teams per organization. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Add One or More Teams to One Project
     * @param param the request object
     */
    public addAllTeamsToProject(param: TeamsApiAddAllTeamsToProjectRequest, options?: Configuration): Promise<PaginatedTeamRoleView> {
        return this.api.addAllTeamsToProject(param.groupId, param.apiTeamRoleView, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Adds one or more MongoDB Cloud users from the specified organization to the specified team. Teams enable you to grant project access roles to MongoDB Cloud users. You can assign up to 250 MongoDB Cloud users from one organization to one team. To use this resource, the requesting API Key must have the Organization User Admin role. This resource doesn't require the API Key to have an Access List.
     * Assign MongoDB Cloud Users from One Organization to One Team
     * @param param the request object
     */
    public addTeamUser(param: TeamsApiAddTeamUserRequest, options?: Configuration): Promise<PaginatedApiAppUserView> {
        return this.api.addTeamUser(param.orgId, param.teamId, param.apiAddUserToTeamView, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Creates one team in the specified organization. Teams enable you to grant project access roles to MongoDB Cloud users. MongoDB Cloud limits the number of teams to a maximum of 250 teams per organization. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Create One Team in One Organization
     * @param param the request object
     */
    public createTeam(param: TeamsApiCreateTeamRequest, options?: Configuration): Promise<ApiTeamView> {
        return this.api.createTeam(param.orgId, param.apiTeamView, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Removes one team specified using its unique 24-hexadecimal digit identifier from the organization specified using its unique 24-hexadecimal digit identifier. To use this resource, the requesting API Key must have the Organization User Admin role. This resource doesn't require the API Key to have an Access List.
     * Remove One Team from One Organization
     * @param param the request object
     */
    public deleteTeam(param: TeamsApiDeleteTeamRequest, options?: Configuration): Promise<void> {
        return this.api.deleteTeam(param.orgId, param.teamId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns one team that you identified using its unique 24-hexadecimal digit ID. This team belongs to one organization. Teams enable you to grant project access roles to MongoDB Cloud users. To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an  Access List.
     * Return One Team using its ID
     * @param param the request object
     */
    public getTeamById(param: TeamsApiGetTeamByIdRequest, options?: Configuration): Promise<ApiTeamResponseView> {
        return this.api.getTeamById(param.orgId, param.teamId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns one team that you identified using its human-readable name. This team belongs to one organization. Teams enable you to grant project access roles to MongoDB Cloud users. To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an Access List.
     * Return One Team using its Name
     * @param param the request object
     */
    public getTeamByName(param: TeamsApiGetTeamByNameRequest, options?: Configuration): Promise<ApiTeamResponseView> {
        return this.api.getTeamByName(param.orgId, param.teamName, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns all teams that belong to the specified organization. Teams enable you to grant project access roles to MongoDB Cloud users. MongoDB Cloud only returns teams for which you have access. To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an Access List.
     * Return All Teams in One Organization
     * @param param the request object
     */
    public listOrganizationTeams(param: TeamsApiListOrganizationTeamsRequest, options?: Configuration): Promise<PaginatedTeamView> {
        return this.api.listOrganizationTeams(param.orgId, param.envelope, param.itemsPerPage, param.includeCount, param.pageNum, param.pretty,  options).toPromise();
    }

    /**
     * Returns all teams to which the authenticated user has access in the project specified using its unique 24-hexadecimal digit identifier. All members of the team share the same project access. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Teams in One Project
     * @param param the request object
     */
    public listProjectTeams(param: TeamsApiListProjectTeamsRequest, options?: Configuration): Promise<PaginatedTeamRoleView> {
        return this.api.listProjectTeams(param.groupId, param.envelope, param.pretty, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Returns all MongoDB Cloud users assigned to the team specified using its unique 24-hexadecimal digit identifier. This team belongs to one organization. Teams enable you to grant project access roles to MongoDB Cloud users. To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an Access List.
     * Return All MongoDB Cloud Users Assigned to One Team
     * @param param the request object
     */
    public listTeamUsers(param: TeamsApiListTeamUsersRequest, options?: Configuration): Promise<PaginatedApiAppUserView> {
        return this.api.listTeamUsers(param.orgId, param.teamId, param.envelope, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

    /**
     * Removes one team specified using its unique 24-hexadecimal digit identifier from the project specified using its unique 24-hexadecimal digit identifier. To use this resource, the requesting API Key must have the Project User Admin role.
     * Remove One Team from One Project
     * @param param the request object
     */
    public removeProjectTeam(param: TeamsApiRemoveProjectTeamRequest, options?: Configuration): Promise<void> {
        return this.api.removeProjectTeam(param.groupId, param.teamId, param.envelope,  options).toPromise();
    }

    /**
     * Removes one MongoDB Cloud user from the specified team. This team belongs to one organization. Teams enable you to grant project access roles to MongoDB Cloud users. To use this resource, the requesting API Key must have the Organization User Admin role. This resource doesn't require the API Key to have an Access List.
     * Remove One MongoDB Cloud User from One Team
     * @param param the request object
     */
    public removeTeamUser(param: TeamsApiRemoveTeamUserRequest, options?: Configuration): Promise<void> {
        return this.api.removeTeamUser(param.orgId, param.teamId, param.userId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Renames one team in the specified organization. Teams enable you to grant project access roles to MongoDB Cloud users. To use this resource, the requesting API Key must have the Organization User Admin role. This resource doesn't require the API Key to have an Access List.
     * Rename One Team
     * @param param the request object
     */
    public renameTeam(param: TeamsApiRenameTeamRequest, options?: Configuration): Promise<ApiTeamResponseView> {
        return this.api.renameTeam(param.orgId, param.teamId, param.apiTeamView, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Updates the project roles assigned to the specified team. You can grant team roles for specific projects and grant project access roles to users in the team. All members of the team share the same project access. To use this resource, the requesting API Key must have the Project User Admin role.
     * Update Team Roles in One Project
     * @param param the request object
     */
    public updateTeamRoles(param: TeamsApiUpdateTeamRolesRequest, options?: Configuration): Promise<PaginatedTeamRoleView> {
        return this.api.updateTeamRoles(param.groupId, param.teamId, param.apiTeamRoleView, param.envelope, param.pretty,  options).toPromise();
    }

}

import { ObservableTestApi } from "./ObservableAPI";
import { TestApiRequestFactory, TestApiResponseProcessor} from "../apis/TestApi";

export interface TestApiVersionedExampleRequest {
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof TestApiversionedExample
     */
    envelope?: boolean
    /**
     * 
     * @type boolean
     * @memberof TestApiversionedExample
     */
    additionalInfo?: boolean
}

export class ObjectTestApi {
    private api: ObservableTestApi

    public constructor(configuration: Configuration, requestFactory?: TestApiRequestFactory, responseProcessor?: TestApiResponseProcessor) {
        this.api = new ObservableTestApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns some text dummy data for test purposes. Deprecated versions: v2-{2023-01-01}
     * Example resource info for versioning of the Atlas API
     * @param param the request object
     */
    public versionedExample(param: TestApiVersionedExampleRequest = {}, options?: Configuration): Promise<ExampleResourceResponseView20230201> {
        return this.api.versionedExample(param.envelope, param.additionalInfo,  options).toPromise();
    }

}

import { ObservableThirdPartyIntegrationsApi } from "./ObservableAPI";
import { ThirdPartyIntegrationsApiRequestFactory, ThirdPartyIntegrationsApiResponseProcessor} from "../apis/ThirdPartyIntegrationsApi";

export interface ThirdPartyIntegrationsApiCreateThirdPartyIntegrationRequest {
    /**
     * Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
     * @type &#39;PAGER_DUTY&#39; | &#39;SLACK&#39; | &#39;DATADOG&#39; | &#39;NEW_RELIC&#39; | &#39;OPS_GENIE&#39; | &#39;VICTOR_OPS&#39; | &#39;WEBHOOK&#39; | &#39;PROMETHEUS&#39; | &#39;MICROSOFT_TEAMS&#39;
     * @memberof ThirdPartyIntegrationsApicreateThirdPartyIntegration
     */
    integrationType: 'PAGER_DUTY' | 'SLACK' | 'DATADOG' | 'NEW_RELIC' | 'OPS_GENIE' | 'VICTOR_OPS' | 'WEBHOOK' | 'PROMETHEUS' | 'MICROSOFT_TEAMS'
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ThirdPartyIntegrationsApicreateThirdPartyIntegration
     */
    groupId: string
    /**
     * Third-party integration that you want to configure for your project.
     * @type IntegrationViewForNdsGroup
     * @memberof ThirdPartyIntegrationsApicreateThirdPartyIntegration
     */
    integrationViewForNdsGroup: IntegrationViewForNdsGroup
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ThirdPartyIntegrationsApicreateThirdPartyIntegration
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof ThirdPartyIntegrationsApicreateThirdPartyIntegration
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof ThirdPartyIntegrationsApicreateThirdPartyIntegration
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof ThirdPartyIntegrationsApicreateThirdPartyIntegration
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ThirdPartyIntegrationsApicreateThirdPartyIntegration
     */
    pretty?: boolean
}

export interface ThirdPartyIntegrationsApiDeleteThirdPartyIntegrationRequest {
    /**
     * Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
     * @type &#39;PAGER_DUTY&#39; | &#39;SLACK&#39; | &#39;DATADOG&#39; | &#39;NEW_RELIC&#39; | &#39;OPS_GENIE&#39; | &#39;VICTOR_OPS&#39; | &#39;WEBHOOK&#39; | &#39;PROMETHEUS&#39; | &#39;MICROSOFT_TEAMS&#39;
     * @memberof ThirdPartyIntegrationsApideleteThirdPartyIntegration
     */
    integrationType: 'PAGER_DUTY' | 'SLACK' | 'DATADOG' | 'NEW_RELIC' | 'OPS_GENIE' | 'VICTOR_OPS' | 'WEBHOOK' | 'PROMETHEUS' | 'MICROSOFT_TEAMS'
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ThirdPartyIntegrationsApideleteThirdPartyIntegration
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ThirdPartyIntegrationsApideleteThirdPartyIntegration
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ThirdPartyIntegrationsApideleteThirdPartyIntegration
     */
    pretty?: boolean
}

export interface ThirdPartyIntegrationsApiGetThirdPartyIntegrationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ThirdPartyIntegrationsApigetThirdPartyIntegration
     */
    groupId: string
    /**
     * Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
     * @type &#39;PAGER_DUTY&#39; | &#39;SLACK&#39; | &#39;DATADOG&#39; | &#39;NEW_RELIC&#39; | &#39;OPS_GENIE&#39; | &#39;VICTOR_OPS&#39; | &#39;WEBHOOK&#39; | &#39;PROMETHEUS&#39; | &#39;MICROSOFT_TEAMS&#39;
     * @memberof ThirdPartyIntegrationsApigetThirdPartyIntegration
     */
    integrationType: 'PAGER_DUTY' | 'SLACK' | 'DATADOG' | 'NEW_RELIC' | 'OPS_GENIE' | 'VICTOR_OPS' | 'WEBHOOK' | 'PROMETHEUS' | 'MICROSOFT_TEAMS'
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ThirdPartyIntegrationsApigetThirdPartyIntegration
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ThirdPartyIntegrationsApigetThirdPartyIntegration
     */
    pretty?: boolean
}

export interface ThirdPartyIntegrationsApiListThirdPartyIntegrationsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ThirdPartyIntegrationsApilistThirdPartyIntegrations
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ThirdPartyIntegrationsApilistThirdPartyIntegrations
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof ThirdPartyIntegrationsApilistThirdPartyIntegrations
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof ThirdPartyIntegrationsApilistThirdPartyIntegrations
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof ThirdPartyIntegrationsApilistThirdPartyIntegrations
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ThirdPartyIntegrationsApilistThirdPartyIntegrations
     */
    pretty?: boolean
}

export interface ThirdPartyIntegrationsApiUpdateThirdPartyIntegrationRequest {
    /**
     * Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
     * @type &#39;PAGER_DUTY&#39; | &#39;SLACK&#39; | &#39;DATADOG&#39; | &#39;NEW_RELIC&#39; | &#39;OPS_GENIE&#39; | &#39;VICTOR_OPS&#39; | &#39;WEBHOOK&#39; | &#39;PROMETHEUS&#39; | &#39;MICROSOFT_TEAMS&#39;
     * @memberof ThirdPartyIntegrationsApiupdateThirdPartyIntegration
     */
    integrationType: 'PAGER_DUTY' | 'SLACK' | 'DATADOG' | 'NEW_RELIC' | 'OPS_GENIE' | 'VICTOR_OPS' | 'WEBHOOK' | 'PROMETHEUS' | 'MICROSOFT_TEAMS'
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ThirdPartyIntegrationsApiupdateThirdPartyIntegration
     */
    groupId: string
    /**
     * Third-party integration that you want to configure for your project.
     * @type IntegrationViewForNdsGroup
     * @memberof ThirdPartyIntegrationsApiupdateThirdPartyIntegration
     */
    integrationViewForNdsGroup: IntegrationViewForNdsGroup
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof ThirdPartyIntegrationsApiupdateThirdPartyIntegration
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof ThirdPartyIntegrationsApiupdateThirdPartyIntegration
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof ThirdPartyIntegrationsApiupdateThirdPartyIntegration
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof ThirdPartyIntegrationsApiupdateThirdPartyIntegration
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof ThirdPartyIntegrationsApiupdateThirdPartyIntegration
     */
    pretty?: boolean
}

export class ObjectThirdPartyIntegrationsApi {
    private api: ObservableThirdPartyIntegrationsApi

    public constructor(configuration: Configuration, requestFactory?: ThirdPartyIntegrationsApiRequestFactory, responseProcessor?: ThirdPartyIntegrationsApiResponseProcessor) {
        this.api = new ObservableThirdPartyIntegrationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds the settings for configuring one third-party service integration. These settings apply to all databases managed in the specified MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Configure One Third-Party Service Integration
     * @param param the request object
     */
    public createThirdPartyIntegration(param: ThirdPartyIntegrationsApiCreateThirdPartyIntegrationRequest, options?: Configuration): Promise<GroupPaginatedIntegrationView> {
        return this.api.createThirdPartyIntegration(param.integrationType, param.groupId, param.integrationViewForNdsGroup, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

    /**
     * Removes the settings that permit configuring one third-party service integration. These settings apply to all databases managed in one MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Remove One Third-Party Service Integration
     * @param param the request object
     */
    public deleteThirdPartyIntegration(param: ThirdPartyIntegrationsApiDeleteThirdPartyIntegrationRequest, options?: Configuration): Promise<void> {
        return this.api.deleteThirdPartyIntegration(param.integrationType, param.groupId, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the settings for configuring integration with one third-party service. These settings apply to all databases managed in one MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Return One Third-Party Service Integration
     * @param param the request object
     */
    public getThirdPartyIntegration(param: ThirdPartyIntegrationsApiGetThirdPartyIntegrationRequest, options?: Configuration): Promise<IntegrationViewForNdsGroup> {
        return this.api.getThirdPartyIntegration(param.groupId, param.integrationType, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Returns the settings that permit integrations with all configured third-party services. These settings apply to all databases managed in one MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Return All Active Third-Party Service Integrations
     * @param param the request object
     */
    public listThirdPartyIntegrations(param: ThirdPartyIntegrationsApiListThirdPartyIntegrationsRequest, options?: Configuration): Promise<GroupPaginatedIntegrationView> {
        return this.api.listThirdPartyIntegrations(param.groupId, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

    /**
     * Updates the settings for configuring integration with one third-party service. These settings apply to all databases managed in one MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Update One Third-Party Service Integration
     * @param param the request object
     */
    public updateThirdPartyIntegration(param: ThirdPartyIntegrationsApiUpdateThirdPartyIntegrationRequest, options?: Configuration): Promise<GroupPaginatedIntegrationView> {
        return this.api.updateThirdPartyIntegration(param.integrationType, param.groupId, param.integrationViewForNdsGroup, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

}

import { ObservableX509AuthenticationApi } from "./ObservableAPI";
import { X509AuthenticationApiRequestFactory, X509AuthenticationApiResponseProcessor} from "../apis/X509AuthenticationApi";

export interface X509AuthenticationApiCreateDatabaseUserCertificateRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof X509AuthenticationApicreateDatabaseUserCertificate
     */
    groupId: string
    /**
     * Human-readable label that represents the MongoDB database user account for whom to create a certificate.
     * @type string
     * @memberof X509AuthenticationApicreateDatabaseUserCertificate
     */
    username: string
    /**
     * Generates one X.509 certificate for the specified MongoDB user.
     * @type UserCert
     * @memberof X509AuthenticationApicreateDatabaseUserCertificate
     */
    userCert: UserCert
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof X509AuthenticationApicreateDatabaseUserCertificate
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof X509AuthenticationApicreateDatabaseUserCertificate
     */
    pretty?: boolean
}

export interface X509AuthenticationApiDisableCustomerManagedX509Request {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof X509AuthenticationApidisableCustomerManagedX509
     */
    groupId: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof X509AuthenticationApidisableCustomerManagedX509
     */
    envelope?: boolean
}

export interface X509AuthenticationApiListDatabaseUserCertificatesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof X509AuthenticationApilistDatabaseUserCertificates
     */
    groupId: string
    /**
     * Human-readable label that represents the MongoDB database user account whose certificates you want to return.
     * @type string
     * @memberof X509AuthenticationApilistDatabaseUserCertificates
     */
    username: string
    /**
     * Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @type boolean
     * @memberof X509AuthenticationApilistDatabaseUserCertificates
     */
    envelope?: boolean
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof X509AuthenticationApilistDatabaseUserCertificates
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof X509AuthenticationApilistDatabaseUserCertificates
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof X509AuthenticationApilistDatabaseUserCertificates
     */
    pageNum?: number
    /**
     * Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @type boolean
     * @memberof X509AuthenticationApilistDatabaseUserCertificates
     */
    pretty?: boolean
}

export class ObjectX509AuthenticationApi {
    private api: ObservableX509AuthenticationApi

    public constructor(configuration: Configuration, requestFactory?: X509AuthenticationApiRequestFactory, responseProcessor?: X509AuthenticationApiResponseProcessor) {
        this.api = new ObservableX509AuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generates one X.509 certificate for the specified MongoDB user. Atlas manages the certificate and MongoDB user that belong to one project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.  To get MongoDB Cloud to generate a managed certificate for a database user, set `\"x509Type\" : \"MANAGED\"` on the desired MongoDB Database User.  If you are managing your own Certificate Authority (CA) in Self-Managed X.509 mode, you must generate certificates for database users using your own CA.
     * Create One X.509 Certificate for One MongoDB User
     * @param param the request object
     */
    public createDatabaseUserCertificate(param: X509AuthenticationApiCreateDatabaseUserCertificateRequest, options?: Configuration): Promise<UserCert> {
        return this.api.createDatabaseUserCertificate(param.groupId, param.username, param.userCert, param.envelope, param.pretty,  options).toPromise();
    }

    /**
     * Clear customer-managed X.509 settings on a project, including the uploaded Certificate Authority, disabling Self-Managed X.509.  Updating this configuration triggers a rolling restart of the database.
     * Disable Customer-Managed X.509
     * @param param the request object
     */
    public disableCustomerManagedX509(param: X509AuthenticationApiDisableCustomerManagedX509Request, options?: Configuration): Promise<UserSecurity> {
        return this.api.disableCustomerManagedX509(param.groupId, param.envelope,  options).toPromise();
    }

    /**
     * Returns all unexpired X.509 certificates for the specified MongoDB user. This MongoDB user belongs to one project. Atlas manages these certificates and the MongoDB user. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All X.509 Certificates Assigned to One MongoDB User
     * @param param the request object
     */
    public listDatabaseUserCertificates(param: X509AuthenticationApiListDatabaseUserCertificatesRequest, options?: Configuration): Promise<PaginatedUserCertView> {
        return this.api.listDatabaseUserCertificates(param.groupId, param.username, param.envelope, param.includeCount, param.itemsPerPage, param.pageNum, param.pretty,  options).toPromise();
    }

}
