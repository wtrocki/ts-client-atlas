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
import { ObservableAWSClustersDNSApi } from './ObservableAPI';

import { AWSClustersDNSApiRequestFactory, AWSClustersDNSApiResponseProcessor} from "../apis/AWSClustersDNSApi";
export class PromiseAWSClustersDNSApi {
    private api: ObservableAWSClustersDNSApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AWSClustersDNSApiRequestFactory,
        responseProcessor?: AWSClustersDNSApiResponseProcessor
    ) {
        this.api = new ObservableAWSClustersDNSApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the custom DNS configuration for AWS clusters in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Custom DNS Configuration for Atlas Clusters on AWS
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getAWSCustomDNS(groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<AWSCustomDNSEnabledView> {
        const result = this.api.getAWSCustomDNS(groupId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Enables or disables the custom DNS configuration for AWS clusters in the specified project. Enable custom DNS if you use AWS VPC peering and use your own DNS servers. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Toggle State of One Custom DNS Configuration for Atlas Clusters on AWS
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param aWSCustomDNSEnabledView Enables or disables the custom DNS configuration for AWS clusters in the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public toggleAWSCustomDNS(groupId: string, aWSCustomDNSEnabledView: AWSCustomDNSEnabledView, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<AWSCustomDNSEnabledView> {
        const result = this.api.toggleAWSCustomDNS(groupId, aWSCustomDNSEnabledView, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableAccessTrackingApi } from './ObservableAPI';

import { AccessTrackingApiRequestFactory, AccessTrackingApiResponseProcessor} from "../apis/AccessTrackingApi";
export class PromiseAccessTrackingApi {
    private api: ObservableAccessTrackingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccessTrackingApiRequestFactory,
        responseProcessor?: AccessTrackingApiResponseProcessor
    ) {
        this.api = new ObservableAccessTrackingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the access logs of one cluster identified by the cluster's name. Access logs contain a list of authentication requests made against your cluster. You can't use this feature on tenant-tier clusters (M0, M2, M5). To use this resource, the requesting API Key must have the Project Monitoring Admin role.
     * Return Database Access History for One Cluster using Its Cluster Name
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param authResult Flag that indicates whether the response returns the successful authentication attempts only.
     * @param end Date and time when to stop retrieving database history. If you specify **end**, you must also specify **start**. This parameter uses the ISO 8601 timestamp format in UTC.
     * @param ipAddress One Internet Protocol address that attempted to authenticate with the database.
     * @param nLogs Maximum number of lines from the log to return.
     * @param start Date and time when MongoDB Cloud begins retrieving database history. If you specify **start**, you must also specify **end**. This parameter uses the ISO 8601 timestamp format in UTC.
     */
    public listAccessLogsByClusterName(groupId: string, clusterName: string, envelope?: boolean, pretty?: boolean, authResult?: boolean, end?: string, ipAddress?: string, nLogs?: number, start?: Date, _options?: Configuration): Promise<ApiMongoDBAccessLogsListView> {
        const result = this.api.listAccessLogsByClusterName(groupId, clusterName, envelope, pretty, authResult, end, ipAddress, nLogs, start, _options);
        return result.toPromise();
    }

    /**
     * Returns the access logs of one cluster identified by the cluster's hostname. Access logs contain a list of authentication requests made against your clusters. You can't use this feature on tenant-tier clusters (M0, M2, M5). To use this resource, the requesting API Key must have the Project Monitoring Admin role.
     * Return Database Access History for One Cluster using Its Hostname
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param hostname Fully qualified domain name or IP address of the MongoDB host that stores the log files that you want to download.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param authResult Flag that indicates whether the response returns the successful authentication attempts only.
     * @param end Date and time when to stop retrieving database history. If you specify **end**, you must also specify **start**. This parameter uses the ISO 8601 timestamp format in UTC.
     * @param ipAddress One Internet Protocol address that attempted to authenticate with the database.
     * @param nLogs Maximum number of lines from the log to return.
     * @param start Date and time when MongoDB Cloud begins retrieving database history. If you specify **start**, you must also specify **end**. This parameter uses the ISO 8601 timestamp format in UTC.
     */
    public listAccessLogsByHostname(groupId: string, hostname: string, envelope?: boolean, pretty?: boolean, authResult?: boolean, end?: Date, ipAddress?: string, nLogs?: number, start?: Date, _options?: Configuration): Promise<ApiMongoDBAccessLogsListView> {
        const result = this.api.listAccessLogsByHostname(groupId, hostname, envelope, pretty, authResult, end, ipAddress, nLogs, start, _options);
        return result.toPromise();
    }


}



import { ObservableAlertConfigurationsApi } from './ObservableAPI';

import { AlertConfigurationsApiRequestFactory, AlertConfigurationsApiResponseProcessor} from "../apis/AlertConfigurationsApi";
export class PromiseAlertConfigurationsApi {
    private api: ObservableAlertConfigurationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AlertConfigurationsApiRequestFactory,
        responseProcessor?: AlertConfigurationsApiResponseProcessor
    ) {
        this.api = new ObservableAlertConfigurationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one alert configuration for the specified project. Alert configurations define the triggers and notification methods for alerts. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/alert-configurations-create-config/).
     * Create One Alert Configuration in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param alertConfigViewForNdsGroup Creates one alert configuration for the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createAlertConfiguration(groupId: string, alertConfigViewForNdsGroup: AlertConfigViewForNdsGroup, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<AlertConfigViewForNdsGroup> {
        const result = this.api.createAlertConfiguration(groupId, alertConfigViewForNdsGroup, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Removes one alert configuration from the specified project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/alert-configurations-delete-config/).
     * Remove One Alert Configuration from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param alertConfigId Unique 24-hexadecimal digit string that identifies the alert configuration. Use the [/alertConfigs](#tag/Alert-Configurations/operation/listAlertConfigurations) endpoint to retrieve all alert configurations to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deleteAlertConfiguration(groupId: string, alertConfigId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteAlertConfiguration(groupId, alertConfigId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the specified alert configuration from the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/alert-configurations-get-config/).
     * Return One Alert Configuration from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param alertConfigId Unique 24-hexadecimal digit string that identifies the alert configuration. Use the [/alertConfigs](#tag/Alert-Configurations/operation/listAlertConfigurations) endpoint to retrieve all alert configurations to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getAlertConfiguration(groupId: string, alertConfigId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<AlertConfigViewForNdsGroup> {
        const result = this.api.getAlertConfiguration(groupId, alertConfigId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Get all field names that the matchers.fieldName parameter accepts when you [create](#tag/Alert-Configurations/operation/createAlertConfiguration) or [update](#tag/Alert-Configurations/operation/updateAlertConfiguration) an Alert Configuration.
     * Get All Alert Configuration Matchers Field Names
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listAlertConfigurationMatchersFieldNames(envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<Array<MatcherFieldView>> {
        const result = this.api.listAlertConfigurationMatchersFieldNames(envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all alert configurations for one project. These alert configurations apply to any component in the project. Alert configurations define the triggers and notification methods for alerts. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/alert-configurations-get-all-configs/).
     * Return All Alert Configurations for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listAlertConfigurations(groupId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<PaginatedAlertConfigView> {
        const result = this.api.listAlertConfigurations(groupId, envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all alert configurations set for the specified alert. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.   This resource remains under revision and may change.
     * Return All Alert Configurations Set for One Alert
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param alertId Unique 24-hexadecimal digit string that identifies the alert. Use the [/alerts](#tag/Alerts/operation/listAlerts) endpoint to retrieve all alerts to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listAlertConfigurationsByAlertId(groupId: string, alertId: string, envelope?: boolean, pretty?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedAlertConfigView> {
        const result = this.api.listAlertConfigurationsByAlertId(groupId, alertId, envelope, pretty, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Enables or disables the specified alert configuration in the specified project. The resource enables the specified alert configuration if currently enabled. The resource disables the specified alert configuration if currently disabled. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.  **NOTE**: This endpoint updates only the enabled/disabled state for the alert configuration. To update more than just this configuration, see [Update One Alert Configuration](#tag/Alert-Configurations/operation/updateAlertConfiguration).  This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/alert-configurations-enable-disable-config/).
     * Toggle One State of One Alert Configuration in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param alertConfigId Unique 24-hexadecimal digit string that identifies the alert configuration that triggered this alert. Use the [/alertConfigs](#tag/Alert-Configurations/operation/listAlertConfigurations) endpoint to retrieve all alert configurations to which the authenticated user has access.
     * @param toggleView Enables or disables the specified alert configuration in the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public toggleAlertConfiguration(groupId: string, alertConfigId: string, toggleView: ToggleView, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<AlertConfigViewForNdsGroup> {
        const result = this.api.toggleAlertConfiguration(groupId, alertConfigId, toggleView, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Updates one alert configuration in the specified project. Alert configurations define the triggers and notification methods for alerts. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.  **NOTE**: To enable or disable the alert configuration, see [Toggle One State of One Alert Configuration in One Project](#tag/Alert-Configurations/operation/toggleAlertConfiguration).   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/alert-configurations-update-config/).
     * Update One Alert Configuration for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param alertConfigId Unique 24-hexadecimal digit string that identifies the alert configuration. Use the [/alertConfigs](#tag/Alert-Configurations/operation/listAlertConfigurations) endpoint to retrieve all alert configurations to which the authenticated user has access.
     * @param alertConfigViewForNdsGroup Updates one alert configuration in the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public updateAlertConfiguration(groupId: string, alertConfigId: string, alertConfigViewForNdsGroup: AlertConfigViewForNdsGroup, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<AlertConfigViewForNdsGroup> {
        const result = this.api.updateAlertConfiguration(groupId, alertConfigId, alertConfigViewForNdsGroup, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableAlertsApi } from './ObservableAPI';

import { AlertsApiRequestFactory, AlertsApiResponseProcessor} from "../apis/AlertsApi";
export class PromiseAlertsApi {
    private api: ObservableAlertsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AlertsApiRequestFactory,
        responseProcessor?: AlertsApiResponseProcessor
    ) {
        this.api = new ObservableAlertsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Confirms receipt of one existing alert. This alert applies to any component in one project. Acknowledging an alert prevents successive notifications. You receive an alert when a monitored component meets or exceeds a value you set until you acknowledge the alert. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role. This resource doesn't require the API Key to have an Access List.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/alerts-acknowledge-alert/).
     * Acknowledge One Alert from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param alertId Unique 24-hexadecimal digit string that identifies the alert. Use the [/alerts](#tag/Alerts/operation/listAlerts) endpoint to retrieve all alerts to which the authenticated user has access.
     * @param alertViewForNdsGroup Confirm one alert.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public acknowledgeAlert(groupId: string, alertId: string, alertViewForNdsGroup: AlertViewForNdsGroup, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<AlertViewForNdsGroup> {
        const result = this.api.acknowledgeAlert(groupId, alertId, alertViewForNdsGroup, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns one alert. This alert applies to any component in one project. You receive an alert when a monitored component meets or exceeds a value you set. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/alerts-get-alert/).
     * Return One Alert from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param alertId Unique 24-hexadecimal digit string that identifies the alert. Use the [/alerts](#tag/Alerts/operation/listAlerts) endpoint to retrieve all alerts to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getAlert(groupId: string, alertId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<AlertViewForNdsGroup> {
        const result = this.api.getAlert(groupId, alertId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all alerts. These alerts apply to all components in one project. You receive an alert when a monitored component meets or exceeds a value you set. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/alerts-get-all-alerts/).
     * Return All Alerts from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param status Status of the alerts to return. Omit to return all alerts in all statuses.
     */
    public listAlerts(groupId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, status?: 'OPEN' | 'TRACKING' | 'CLOSED', _options?: Configuration): Promise<PaginatedAlertView> {
        const result = this.api.listAlerts(groupId, envelope, includeCount, itemsPerPage, pageNum, pretty, status, _options);
        return result.toPromise();
    }

    /**
     * Returns all open alerts that the specified alert configuration triggers. These alert configurations apply to the specified project only. Alert configurations define the triggers and notification methods for alerts. Open alerts have been triggered but remain unacknowledged. To use this resource, the requesting API Key must have the Project Read Only role.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/alert-configurations-get-open-alerts/).
     * Return All Open Alerts for Alert Configuration
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param alertConfigId Unique 24-hexadecimal digit string that identifies the alert configuration. Use the [/alertConfigs](#tag/Alert-Configurations/operation/listAlertConfigurations) endpoint to retrieve all alert configurations to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listAlertsByAlertConfigurationId(groupId: string, alertConfigId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<PaginatedAlertView> {
        const result = this.api.listAlertsByAlertConfigurationId(groupId, alertConfigId, envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableAtlasSearchApi } from './ObservableAPI';

import { AtlasSearchApiRequestFactory, AtlasSearchApiResponseProcessor} from "../apis/AtlasSearchApi";
export class PromiseAtlasSearchApi {
    private api: ObservableAtlasSearchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AtlasSearchApiRequestFactory,
        responseProcessor?: AtlasSearchApiResponseProcessor
    ) {
        this.api = new ObservableAtlasSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one Atlas Search index on the specified collection. Atlas Search indexes define the fields on which to create the index and the analyzers to use when creating the index. Only clusters running MongoDB v4.2 or later can use Atlas Search. To use this resource, the requesting API Key must have the Project Data Access Admin role. This resource doesn't require the API Key to have an Access List.
     * Create One Atlas Search Index
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Name of the cluster that contains the collection on which to create an Atlas Search index.
     * @param fTSIndex Creates one Atlas Search index on the specified collection.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createAtlasSearchIndex(groupId: string, clusterName: string, fTSIndex: FTSIndex, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<FTSIndex> {
        const result = this.api.createAtlasSearchIndex(groupId, clusterName, fTSIndex, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Removes one Atlas Search index that you identified with its unique ID. To use this resource, the requesting API Key must have the Project Data Access Admin role. This resource doesn't require the API Key to have an Access List.
     * Remove One Atlas Search Index
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Name of the cluster that contains the database and collection with one or more Application Search indexes.
     * @param indexId Unique 24-hexadecimal digit string that identifies the Atlas Search index. Use the [Get All Atlas Search Indexes for a Collection API](https://docs.atlas.mongodb.com/reference/api/fts-indexes-get-all/) endpoint to find the IDs of all Atlas Search indexes.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deleteAtlasSearchIndex(groupId: string, clusterName: string, indexId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteAtlasSearchIndex(groupId, clusterName, indexId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns one Atlas Search index in the specified project. You identify this index using its unique ID. Atlas Search index contains the indexed fields and the analyzers used to create the index. To use this resource, the requesting API Key must have the Project Data Access Read Write role. This resource doesn't require the API Key to have an Access List.
     * Return One Atlas Search Index
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Name of the cluster that contains the collection with one or more Atlas Search indexes.
     * @param indexId Unique 24-hexadecimal digit string that identifies the Application Search [index](https://docs.atlas.mongodb.com/reference/atlas-search/index-definitions/). Use the [Get All Application Search Indexes for a Collection API](https://docs.atlas.mongodb.com/reference/api/fts-indexes-get-all/) endpoint to find the IDs of all Application Search indexes.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getAtlasSearchIndex(groupId: string, clusterName: string, indexId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<FTSIndex> {
        const result = this.api.getAtlasSearchIndex(groupId, clusterName, indexId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all Atlas Search indexes on the specified collection. Atlas Search indexes contain the indexed fields and the analyzers used to create the indexes. To use this resource, the requesting API Key must have the Project Data Access Read Write role. This resource doesn't require the API Key to have an Access List.
     * Return All Atlas Search Indexes for One Collection
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Name of the cluster that contains the collection with one or more Atlas Search indexes.
     * @param collectionName Name of the collection that contains one or more Atlas Search indexes.
     * @param databaseName Human-readable label that identifies the database that contains the collection with one or more Atlas Search indexes.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listAtlasSearchIndexes(groupId: string, clusterName: string, collectionName: string, databaseName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<Array<FTSIndex>> {
        const result = this.api.listAtlasSearchIndexes(groupId, clusterName, collectionName, databaseName, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Updates one Atlas Search index that you identified with its unique ID. Atlas Search indexes define the fields on which to create the index and the analyzers to use when creating the index. To use this resource, the requesting API Key must have the Project Data Access Admin role. This resource doesn't require the API Key to have an Access List.
     * Update One Atlas Search Index
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Name of the cluster that contains the collection whose Atlas Search index to update.
     * @param indexId Unique 24-hexadecimal digit string that identifies the Atlas Search [index](https://docs.atlas.mongodb.com/reference/atlas-search/index-definitions/). Use the [Get All Atlas Search Indexes for a Collection API](https://docs.atlas.mongodb.com/reference/api/fts-indexes-get-all/) endpoint to find the IDs of all Atlas Search indexes.
     * @param fTSIndex Details to update on the Atlas Search index.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public updateAtlasSearchIndex(groupId: string, clusterName: string, indexId: string, fTSIndex: FTSIndex, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<FTSIndex> {
        const result = this.api.updateAtlasSearchIndex(groupId, clusterName, indexId, fTSIndex, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableAuditingApi } from './ObservableAPI';

import { AuditingApiRequestFactory, AuditingApiResponseProcessor} from "../apis/AuditingApi";
export class PromiseAuditingApi {
    private api: ObservableAuditingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuditingApiRequestFactory,
        responseProcessor?: AuditingApiResponseProcessor
    ) {
        this.api = new ObservableAuditingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the auditing configuration for the specified project. The auditing configuration defines the events that MongoDB Cloud records in the audit log. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Return the Auditing Configuration for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getAuditingConfiguration(groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<AuditLog> {
        const result = this.api.getAuditingConfiguration(groupId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Updates the auditing configuration for the specified project. The auditing configuration defines the events that MongoDB Cloud records in the audit log. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Update Auditing Configuration for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param auditLog Updated auditing configuration for the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public updateAuditingConfiguration(groupId: string, auditLog: AuditLog, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<AuditLog> {
        const result = this.api.updateAuditingConfiguration(groupId, auditLog, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableCloudBackupsApi } from './ObservableAPI';

import { CloudBackupsApiRequestFactory, CloudBackupsApiResponseProcessor} from "../apis/CloudBackupsApi";
export class PromiseCloudBackupsApi {
    private api: ObservableCloudBackupsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CloudBackupsApiRequestFactory,
        responseProcessor?: CloudBackupsApiResponseProcessor
    ) {
        this.api = new ObservableCloudBackupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Cancels one cloud backup restore job of one cluster from the specified project. To use this resource, the requesting API Key must have the Project Owner role and an entry for the project access list.
     * Cancel One Restore Job of One Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param restoreJobId Unique 24-hexadecimal digit string that identifies the restore job to remove.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public cancelBackupRestoreJob(groupId: string, clusterName: string, restoreJobId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.cancelBackupRestoreJob(groupId, clusterName, restoreJobId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Exports one backup snapshot for dedicated Atlas cluster using Cloud Backups to an AWS bucket. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Create One Cloud Backup Snapshot Export Job
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param diskBackupExportJobRequest Information about the Cloud Backup Snapshot Export Job to create.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public createBackupExportJob(groupId: string, clusterName: string, diskBackupExportJobRequest: DiskBackupExportJobRequest, envelope?: boolean, _options?: Configuration): Promise<DiskBackupExportJob> {
        const result = this.api.createBackupExportJob(groupId, clusterName, diskBackupExportJobRequest, envelope, _options);
        return result.toPromise();
    }

    /**
     * Restores one snapshot of one cluster from the specified project. To use this resource, the requesting API Key must have the Project Owner role and an entry for the project access list.
     * Restore One Snapshot of One Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param diskBackupRestoreJob Restores one snapshot of one cluster from the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createBackupRestoreJob(groupId: string, clusterName: string, diskBackupRestoreJob: DiskBackupRestoreJob, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<DiskBackupRestoreJob> {
        const result = this.api.createBackupRestoreJob(groupId, clusterName, diskBackupRestoreJob, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Grants MongoDB Cloud access to the specified AWS S3 bucket. This enables this bucket to receive Atlas Cloud Backup snapshots. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Grant Access to AWS S3 Bucket for Cloud Backup Snapshot Exports
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param diskBackupSnapshotAWSExportBucket Grants MongoDB Cloud access to the specified AWS S3 bucket.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createExportBucket(groupId: string, diskBackupSnapshotAWSExportBucket: DiskBackupSnapshotAWSExportBucket, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<DiskBackupSnapshotAWSExportBucket> {
        const result = this.api.createExportBucket(groupId, diskBackupSnapshotAWSExportBucket, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Restores one snapshot of one serverless instance from the specified project. To use this resource, the requesting API Key must have the Project Owner role and an entry for the project access list.
     * Restore One Snapshot of One Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the serverless instance whose snapshot you want to restore.
     * @param serverlessBackupRestoreJob Restores one snapshot of one serverless instance from the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createServerlessBackupRestoreJob(groupId: string, clusterName: string, serverlessBackupRestoreJob: ServerlessBackupRestoreJob, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ServerlessBackupRestoreJob> {
        const result = this.api.createServerlessBackupRestoreJob(groupId, clusterName, serverlessBackupRestoreJob, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Removes all cloud backup schedules for the specified cluster. This schedule defines when MongoDB Cloud takes scheduled snapshots and how long it stores those snapshots. To use this resource, the requesting API Key must have the Project Atlas Admin role and an entry for the project access list.
     * Remove All Cloud Backup Schedules
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public deleteAllBackupSchedules(groupId: string, clusterName: string, envelope?: boolean, _options?: Configuration): Promise<DiskBackupSnapshotSchedule> {
        const result = this.api.deleteAllBackupSchedules(groupId, clusterName, envelope, _options);
        return result.toPromise();
    }

    /**
     * Revoke MongoDB Cloud access to the specified AWS S3 bucket. This prevents this bucket to receive Atlas Cloud Backup snapshots. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Revoke Access to AWS S3 Bucket for Cloud Backup Snapshot Exports
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param exportBucketId Unique string that identifies the AWS S3 bucket to which you export your snapshots.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public deleteExportBucket(groupId: string, exportBucketId: string, envelope?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteExportBucket(groupId, exportBucketId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Removes the specified snapshot. To use this resource, the requesting API Key must have the Project Owner role and an entry for the project access list.
     * Remove One Replica Set Cloud Backup
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param snapshotId Unique 24-hexadecimal digit string that identifies the desired snapshot.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deleteReplicaSetBackup(groupId: string, clusterName: string, snapshotId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteReplicaSetBackup(groupId, clusterName, snapshotId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Removes one snapshot of one sharded cluster from the specified project. To use this resource, the requesting API Key must have the Project Owner role and an entry for the project access list.
     * Remove One Sharded Cluster Cloud Backup
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param snapshotId Unique 24-hexadecimal digit string that identifies the desired snapshot.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deleteShardedClusterBackup(groupId: string, clusterName: string, snapshotId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteShardedClusterBackup(groupId, clusterName, snapshotId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns one Cloud Backup snapshot export job associated with the specified Atlas cluster. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Return One Cloud Backup Snapshot Export Job
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param exportId Unique string that identifies the AWS S3 bucket to which you export your snapshots.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public getBackupExportJob(groupId: string, clusterName: string, exportId: string, envelope?: boolean, _options?: Configuration): Promise<DiskBackupExportJob> {
        const result = this.api.getBackupExportJob(groupId, clusterName, exportId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Returns one cloud backup restore job for one cluster from the specified project. To use this resource, the requesting API Key must have the Project Owner role and an entry for the project access list.
     * Return One Restore Job of One Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster with the restore jobs you want to return.
     * @param restoreJobId Unique 24-hexadecimal digit string that identifies the restore job to return.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getBackupRestoreJob(groupId: string, clusterName: string, restoreJobId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<DiskBackupRestoreJob> {
        const result = this.api.getBackupRestoreJob(groupId, clusterName, restoreJobId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the cloud backup schedule for the specified cluster within the specified project. This schedule defines when MongoDB Cloud takes scheduled snapshots and how long it stores those snapshots. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Cloud Backup Schedule
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getBackupSchedule(groupId: string, clusterName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<DiskBackupSnapshotSchedule> {
        const result = this.api.getBackupSchedule(groupId, clusterName, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the Data Protection Policy settings with the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return the Data Protection Policy settings
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getDataProtectionSettings(groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<DataProtectionSettings> {
        const result = this.api.getDataProtectionSettings(groupId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns one AWS S3 bucket associated with the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One AWS S3 Bucket Used for Cloud Backup Snapshot Exports
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param exportBucketId Unique string that identifies the AWS S3 bucket to which you export your snapshots.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public getExportBucket(groupId: string, exportBucketId: string, envelope?: boolean, _options?: Configuration): Promise<DiskBackupSnapshotAWSExportBucket> {
        const result = this.api.getExportBucket(groupId, exportBucketId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Returns one snapshot from the specified cluster. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Replica Set Cloud Backup
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param snapshotId Unique 24-hexadecimal digit string that identifies the desired snapshot.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getReplicaSetBackup(groupId: string, clusterName: string, snapshotId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<DiskBackupReplicaSet> {
        const result = this.api.getReplicaSetBackup(groupId, clusterName, snapshotId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns one snapshot of one serverless instance from the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Snapshot of One Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the serverless instance.
     * @param snapshotId Unique 24-hexadecimal digit string that identifies the desired snapshot.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public getServerlessBackup(groupId: string, clusterName: string, snapshotId: string, envelope?: boolean, _options?: Configuration): Promise<ServerlessBackupSnapshot> {
        const result = this.api.getServerlessBackup(groupId, clusterName, snapshotId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Returns one restore job for one serverless instance from the specified project. To use this resource, the requesting API Key must have the Project Owner role and an entry for the project access list.
     * Return One Restore Job for One Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the serverless instance.
     * @param restoreJobId Unique 24-hexadecimal digit string that identifies the restore job to return.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getServerlessBackupRestoreJob(groupId: string, clusterName: string, restoreJobId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ServerlessBackupRestoreJob> {
        const result = this.api.getServerlessBackupRestoreJob(groupId, clusterName, restoreJobId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns one snapshot of one sharded cluster from the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Sharded Cluster Cloud Backup
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param snapshotId Unique 24-hexadecimal digit string that identifies the desired snapshot.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getShardedClusterBackup(groupId: string, clusterName: string, snapshotId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<DiskBackupShardedClusterSnapshot> {
        const result = this.api.getShardedClusterBackup(groupId, clusterName, snapshotId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all Cloud Backup snapshot export jobs associated with the specified Atlas cluster. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Return All Cloud Backup Snapshot Export Jobs
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listBackupExportJobs(groupId: string, clusterName: string, envelope?: boolean, pretty?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedApiAtlasDiskBackupExportJobView> {
        const result = this.api.listBackupExportJobs(groupId, clusterName, envelope, pretty, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Returns all cloud backup restore jobs for one cluster from the specified project. To use this resource, the requesting API Key must have the Project Owner role and an entry for the project access list.
     * Return All Restore Jobs for One Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster with the restore jobs you want to return.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listBackupRestoreJobs(groupId: string, clusterName: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<PaginatedCloudBackupRestoreJobView> {
        const result = this.api.listBackupRestoreJobs(groupId, clusterName, envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all AWS S3 buckets associated with the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All AWS S3 Buckets Used for Cloud Backup Snapshot Exports
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listExportBuckets(groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<PaginatedBackupSnapshotExportBucketView> {
        const result = this.api.listExportBuckets(groupId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all snapshots of one cluster from the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Replica Set Cloud Backups
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listReplicaSetBackups(groupId: string, clusterName: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<PaginatedCloudBackupReplicaSetView> {
        const result = this.api.listReplicaSetBackups(groupId, clusterName, envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all restore jobs for one serverless instance from the specified project. To use this resource, the requesting API Key must have the Project Owner role and an entry for the project access list.
     * Return All Restore Jobs for One Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the serverless instance.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listServerlessBackupRestoreJobs(groupId: string, clusterName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<PaginatedApiAtlasServerlessBackupRestoreJobView> {
        const result = this.api.listServerlessBackupRestoreJobs(groupId, clusterName, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all snapshots of one serverless instance from the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Snapshots of One Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the serverless instance.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listServerlessBackups(groupId: string, clusterName: string, envelope?: boolean, pretty?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedApiAtlasServerlessBackupSnapshotView> {
        const result = this.api.listServerlessBackups(groupId, clusterName, envelope, pretty, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Returns all snapshots of one sharded cluster from the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Sharded Cluster Cloud Backups
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listShardedClusterBackups(groupId: string, clusterName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<PaginatedCloudBackupShardedClusterSnapshotView> {
        const result = this.api.listShardedClusterBackups(groupId, clusterName, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Takes one on-demand snapshot for the specified cluster. To use this resource, the requesting API Key must have the Project Owner role and an entry for the project access list.
     * Take One On-Demand Snapshot
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param diskBackupOnDemandSnapshotRequest Takes one on-demand snapshot.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public takeSnapshot(groupId: string, clusterName: string, diskBackupOnDemandSnapshotRequest: DiskBackupOnDemandSnapshotRequest, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<DiskBackupSnapshot> {
        const result = this.api.takeSnapshot(groupId, clusterName, diskBackupOnDemandSnapshotRequest, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Updates the cloud backup schedule for one cluster within the specified project. This schedule defines when MongoDB Cloud takes scheduled snapshots and how long it stores those snapshots. To use this resource, the requesting API Key must have the Project Owner role and an entry for the project access list.
     * Update Cloud Backup Schedule for One Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param diskBackupSnapshotSchedule Updates the cloud backup schedule for one cluster within the specified project.  **Note**: In the request body, provide only the fields that you want to update.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public updateBackupSchedule(groupId: string, clusterName: string, diskBackupSnapshotSchedule: DiskBackupSnapshotSchedule, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<DiskBackupSnapshotSchedule> {
        const result = this.api.updateBackupSchedule(groupId, clusterName, diskBackupSnapshotSchedule, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Updates the Data Protection Policy settings for the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Update or enable the Data Protection Policy settings
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param dataProtectionSettings The new Data Protection Policy settings.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public updateDataProtectionSettings(groupId: string, dataProtectionSettings: DataProtectionSettings, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<DataProtectionSettings> {
        const result = this.api.updateDataProtectionSettings(groupId, dataProtectionSettings, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Changes the expiration date for one cloud backup snapshot for one cluster in the specified project. This resource doesn't require the API Key to have an Access List.
     * Change Expiration Date for One Cloud Backup
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param snapshotId Unique 24-hexadecimal digit string that identifies the desired snapshot.
     * @param snapshotRetention Changes the expiration date for one cloud backup snapshot for one cluster in the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public updateSnapshotRetention(groupId: string, clusterName: string, snapshotId: string, snapshotRetention: SnapshotRetention, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<DiskBackupReplicaSet> {
        const result = this.api.updateSnapshotRetention(groupId, clusterName, snapshotId, snapshotRetention, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableCloudMigrationServiceApi } from './ObservableAPI';

import { CloudMigrationServiceApiRequestFactory, CloudMigrationServiceApiResponseProcessor} from "../apis/CloudMigrationServiceApi";
export class PromiseCloudMigrationServiceApi {
    private api: ObservableCloudMigrationServiceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CloudMigrationServiceApiRequestFactory,
        responseProcessor?: CloudMigrationServiceApiResponseProcessor
    ) {
        this.api = new ObservableCloudMigrationServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create one link-token that contains all the information required to complete the link.
     * Create One Link-Token
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param targetOrgRequestView IP address access list entries associated with the migration.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createLinkToken(orgId: string, targetOrgRequestView: TargetOrgRequestView, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<TargetOrgView> {
        const result = this.api.createLinkToken(orgId, targetOrgRequestView, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Migrate one cluster that Cloud or Ops Manager manages to MongoDB Atlas.   Please make sure to [validate](#tag/Cloud-Migration-Service/operation/validateMigration) your migration before initiating it.
     * Migrate One Local Managed Cluster to MongoDB Atlas
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param liveMigrationRequestView One migration to be created.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createPushMigration(groupId: string, liveMigrationRequestView: LiveMigrationRequestView, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<LiveMigrationResponseView> {
        const result = this.api.createPushMigration(groupId, liveMigrationRequestView, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Cut over the migrated cluster to MongoDB Cloud. Confirm when the cut over completes. When the cut over completes, MongoDB Cloud completes the live migration process and stops synchronizing with the source cluster.
     * Cut Over the Migrated Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param liveMigrationId Unique 24-hexadecimal digit string that identifies the migration.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public cutoverMigration(groupId: string, liveMigrationId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.cutoverMigration(groupId, liveMigrationId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Remove one organization link and its associated public API key.
     * Remove One Link-Token
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public deleteLinkToken(orgId: string, envelope?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteLinkToken(orgId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Return details of one cluster migration job.
     * Return One Migration Job
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param liveMigrationId Unique 24-hexadecimal digit string that identifies the migration.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getPushMigration(groupId: string, liveMigrationId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<LiveMigrationResponseView> {
        const result = this.api.getPushMigration(groupId, liveMigrationId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Return the status of one migration validation job.
     * Return One Migration Validation Job
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param validationId Unique 24-hexadecimal digit string that identifies the validation job.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public getValidationStatus(groupId: string, validationId: string, envelope?: boolean, _options?: Configuration): Promise<ValidationView> {
        const result = this.api.getValidationStatus(groupId, validationId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Return all projects that you can migrate to the specified organization.
     * Return All Projects Available for Migration
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listSourceProjects(orgId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<Array<AvailableProjectView>> {
        const result = this.api.listSourceProjects(orgId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Check whether the provided credentials, available disk space, MongoDB versions, and so on meet the requirements of the migration request. If the check passes, the migration can proceed.
     * Validate One Migration Request
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param liveMigrationRequestView One migration to be validated.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public validateMigration(groupId: string, liveMigrationRequestView: LiveMigrationRequestView, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ValidationView> {
        const result = this.api.validateMigration(groupId, liveMigrationRequestView, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableCloudProviderAccessApi } from './ObservableAPI';

import { CloudProviderAccessApiRequestFactory, CloudProviderAccessApiResponseProcessor} from "../apis/CloudProviderAccessApi";
export class PromiseCloudProviderAccessApi {
    private api: ObservableCloudProviderAccessApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CloudProviderAccessApiRequestFactory,
        responseProcessor?: CloudProviderAccessApiResponseProcessor
    ) {
        this.api = new ObservableCloudProviderAccessApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Grants access to the specified project for the specified Amazon Web Services (AWS) Identity and Access Management (IAM) role. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List. This API endpoint is one step in a procedure to create unified AWS access for MongoDB Cloud services.
     * Authorize One Cloud Provider Access Role
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param roleId Unique 24-hexadecimal digit string that identifies the role.
     * @param cloudProviderAccessRole Grants access to the specified project for the specified AWS IAM role.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public authorizeCloudProviderAccessRole(groupId: string, roleId: string, cloudProviderAccessRole: CloudProviderAccessRole, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<CloudProviderAccessRole> {
        const result = this.api.authorizeCloudProviderAccessRole(groupId, roleId, cloudProviderAccessRole, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Creates one Amazon Web Services (AWS) Identity and Access Management (IAM) role. Some MongoDB Cloud features use AWS IAM roles for authentication. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.  After a successful request to this API endpoint, you can add the **atlasAWSAccountArn** and **atlasAssumedRoleExternalId** values to the trust policy in your AWS console to create an IAM Assumed Amazon Resource Name (ARN).
     * Create One Cloud Provider Access Role
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudProviderAccessRole Creates one AWS IAM role.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createCloudProviderAccessRole(groupId: string, cloudProviderAccessRole: CloudProviderAccessRole, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<CloudProviderAccessRole> {
        const result = this.api.createCloudProviderAccessRole(groupId, cloudProviderAccessRole, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Revokes access to the specified project for the specified AWS IAM role. To use this resource,the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Deauthorize One Cloud Provider Access Role
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudProvider Human-readable label that identifies the cloud provider of the role to deauthorize.
     * @param roleId Unique 24-hexadecimal digit string that identifies the role.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deauthorizeCloudProviderAccessRole(groupId: string, cloudProvider: 'AWS', roleId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deauthorizeCloudProviderAccessRole(groupId, cloudProvider, roleId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the Amazon Web Services (AWS) Identity and Access Management (IAM) role with the specified id and with access to the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Return specified Cloud Provider Access Role
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param roleId Unique 24-hexadecimal digit string that identifies the role.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getCloudProviderAccessRole(groupId: string, roleId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<CloudProviderAccess> {
        const result = this.api.getCloudProviderAccessRole(groupId, roleId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all Amazon Web Services (AWS) Identity and Access Management (IAM) roles with access to the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Return All Cloud Provider Access Roles
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listCloudProviderAccessRoles(groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<CloudProviderAccess> {
        const result = this.api.listCloudProviderAccessRoles(groupId, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableClusterOutageSimulationApi } from './ObservableAPI';

import { ClusterOutageSimulationApiRequestFactory, ClusterOutageSimulationApiResponseProcessor} from "../apis/ClusterOutageSimulationApi";
export class PromiseClusterOutageSimulationApi {
    private api: ObservableClusterOutageSimulationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ClusterOutageSimulationApiRequestFactory,
        responseProcessor?: ClusterOutageSimulationApiResponseProcessor
    ) {
        this.api = new ObservableClusterOutageSimulationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Ends a cluster outage simulation.
     * End an Outage Simulation
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster that is undergoing outage simulation.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public endOutageSimulation(groupId: string, clusterName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ClusterOutageSimulation> {
        const result = this.api.endOutageSimulation(groupId, clusterName, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns one outage simulation for one cluster.
     * Return One Outage Simulation
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster that is undergoing outage simulation.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getOutageSimulation(groupId: string, clusterName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ClusterOutageSimulation> {
        const result = this.api.getOutageSimulation(groupId, clusterName, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Starts a cluster outage simulation.
     * Start an Outage Simulation
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster to undergo an outage simulation.
     * @param clusterOutageSimulation Describes the outage simulation.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public startOutageSimulation(groupId: string, clusterName: string, clusterOutageSimulation: ClusterOutageSimulation, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ClusterOutageSimulation> {
        const result = this.api.startOutageSimulation(groupId, clusterName, clusterOutageSimulation, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableClustersApi } from './ObservableAPI';

import { ClustersApiRequestFactory, ClustersApiResponseProcessor} from "../apis/ClustersApi";
export class PromiseClustersApi {
    private api: ObservableClustersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ClustersApiRequestFactory,
        responseProcessor?: ClustersApiResponseProcessor
    ) {
        this.api = new ObservableClustersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the advanced configuration details for one cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. Advanced configuration details include the read/write concern, index and oplog limits, and other database settings.  Shared-tier clusters can't use this resource.  To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Advanced Configuration Options for One Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getClusterAdvancedConfiguration(groupId: string, clusterName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ClusterDescriptionProcessArgs> {
        const result = this.api.getClusterAdvancedConfiguration(groupId, clusterName, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the status of all changes that you made to the specified cluster in the specified project. Use this resource to check the progress MongoDB Cloud has made in processing your changes. The response does not include the deployment of new dedicated clusters. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Status of All Cluster Operations
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getClusterStatus(groupId: string, clusterName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ClusterStatus> {
        const result = this.api.getClusterStatus(groupId, clusterName, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Checks the progress of loading the sample dataset into one cluster. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Check Status of Cluster Sample Dataset Request
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param sampleDatasetId Unique 24-hexadecimal digit string that identifies the loaded sample dataset.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public getSampleDatasetLoadStatus(groupId: string, sampleDatasetId: string, envelope?: boolean, _options?: Configuration): Promise<SampleDatasetStatus> {
        const result = this.api.getSampleDatasetLoadStatus(groupId, sampleDatasetId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Returns the list of regions available for the specified cloud provider at the specified tier. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Cloud Provider Regions
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param providers Cloud providers whose regions to retrieve. When you specify multiple providers, the response can return only tiers and regions that support multi-cloud clusters.
     * @param tier Cluster tier for which to retrieve the regions.
     */
    public listCloudProviderRegions(groupId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, providers?: Array<string>, tier?: string, _options?: Configuration): Promise<PaginatedApiAtlasProviderRegionsView> {
        const result = this.api.listCloudProviderRegions(groupId, envelope, includeCount, itemsPerPage, pageNum, pretty, providers, tier, _options);
        return result.toPromise();
    }

    /**
     * Returns the details for all clusters in all projects to which you have access. Clusters contain a group of hosts that maintain the same data set. The response does not include multi-cloud clusters. To use this resource, the requesting API Key can have any cluster-level role. This resource doesn't require the API Key to have an Access List.
     * Return All Authorized Clusters in All Projects
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listClustersForAllProjects(envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<PaginatedOrgGroupView> {
        const result = this.api.listClustersForAllProjects(envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }

    /**
     * Requests loading the MongoDB sample dataset into the specified cluster. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Load Sample Dataset Request into Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param name Human-readable label that identifies the cluster into which you load the sample dataset.
     * @param sampleDatasetStatus Cluster into which to load the sample dataset.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public loadSampleDataset(groupId: string, name: string, sampleDatasetStatus: SampleDatasetStatus, envelope?: boolean, _options?: Configuration): Promise<Array<SampleDatasetStatus>> {
        const result = this.api.loadSampleDataset(groupId, name, sampleDatasetStatus, envelope, _options);
        return result.toPromise();
    }

    /**
     * Updates the advanced configuration details for one cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. Advanced configuration details include the read/write concern, index and oplog limits, and other database settings. To use this resource, the requesting API Key must have the Project Cluster Manager role. This resource doesn't require the API Key to have an Access List.
     * Update Advanced Configuration Options for One Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param clusterDescriptionProcessArgs Advanced configuration details to add for one cluster in the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public updateClusterAdvancedConfiguration(groupId: string, clusterName: string, clusterDescriptionProcessArgs: ClusterDescriptionProcessArgs, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ClusterDescriptionProcessArgs> {
        const result = this.api.updateClusterAdvancedConfiguration(groupId, clusterName, clusterDescriptionProcessArgs, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Upgrade a shared-tier cluster in the specified project. To use this resource, the requesting API key must have the Project Cluster Manager role. This resource doesn't require the API key to have an Access List.
     * Upgrade One Shared-tier Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param legacyClusterDescription Details of the shared-tier cluster upgrade in the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public upgradeSharedCluster(groupId: string, legacyClusterDescription: LegacyClusterDescription, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<LegacyClusterDescription> {
        const result = this.api.upgradeSharedCluster(groupId, legacyClusterDescription, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Upgrades a shared-tier cluster to a serverless instance in the specified project. To use this resource, the requesting API key must have the Project Cluster Manager role. This resource doesn't require the API key to have an Access List.
     * Upgrades One Shared-Tier Cluster to the Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param serverlessInstanceDescription Details of the shared-tier cluster upgrade in the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public upgradeSharedClusterToServerless(groupId: string, serverlessInstanceDescription: ServerlessInstanceDescription, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ServerlessInstanceDescription> {
        const result = this.api.upgradeSharedClusterToServerless(groupId, serverlessInstanceDescription, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableCustomDatabaseRolesApi } from './ObservableAPI';

import { CustomDatabaseRolesApiRequestFactory, CustomDatabaseRolesApiResponseProcessor} from "../apis/CustomDatabaseRolesApi";
export class PromiseCustomDatabaseRolesApi {
    private api: ObservableCustomDatabaseRolesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomDatabaseRolesApiRequestFactory,
        responseProcessor?: CustomDatabaseRolesApiResponseProcessor
    ) {
        this.api = new ObservableCustomDatabaseRolesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one custom role in the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Create One Custom Role
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param customDBRole Creates one custom role in the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createCustomDatabaseRole(groupId: string, customDBRole: CustomDBRole, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<CustomDBRole> {
        const result = this.api.createCustomDatabaseRole(groupId, customDBRole, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Removes one custom role from the specified project. You can't remove a custom role that would leave one or more child roles with no parent roles or actions. You also can't remove a custom role that would leave one or more database users without roles. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Remove One Custom Role from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param roleName Human-readable label that identifies the role for the request. This name must be unique for this custom role in this project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deleteCustomDatabaseRole(groupId: string, roleName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCustomDatabaseRole(groupId, roleName, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns one custom role for the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Custom Role in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param roleName Human-readable label that identifies the role for the request. This name must be unique for this custom role in this project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getCustomDatabaseRole(groupId: string, roleName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<CustomDBRole> {
        const result = this.api.getCustomDatabaseRole(groupId, roleName, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all custom roles for the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Custom Roles in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listCustomDatabaseRoles(groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<Array<CustomDBRole>> {
        const result = this.api.listCustomDatabaseRoles(groupId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Updates one custom role in the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Update One Custom Role in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param roleName Human-readable label that identifies the role for the request. This name must beunique for this custom role in this project.
     * @param updateCustomDBRole Updates one custom role in the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public updateCustomDatabaseRole(groupId: string, roleName: string, updateCustomDBRole: UpdateCustomDBRole, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<CustomDBRole> {
        const result = this.api.updateCustomDatabaseRole(groupId, roleName, updateCustomDBRole, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableDataFederationApi } from './ObservableAPI';

import { DataFederationApiRequestFactory, DataFederationApiResponseProcessor} from "../apis/DataFederationApi";
export class PromiseDataFederationApi {
    private api: ObservableDataFederationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DataFederationApiRequestFactory,
        responseProcessor?: DataFederationApiResponseProcessor
    ) {
        this.api = new ObservableDataFederationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds one private endpoint for Federated Database Instances and Online Archives to the specified projects. To use this resource, the requesting API Key must have the Project Atlas Admin or Project Charts Admin roles. This resource doesn't require the API Key to have an Access List.
     * Create One Federated Database Instance and Online Archive Private Endpoint for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param privateNetworkEndpointIdEntry Private endpoint for Federated Database Instances and Online Archives to add to the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createDataFederationPrivateEndpoint(groupId: string, privateNetworkEndpointIdEntry: PrivateNetworkEndpointIdEntry, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<Array<PrivateNetworkEndpointIdEntry>> {
        const result = this.api.createDataFederationPrivateEndpoint(groupId, privateNetworkEndpointIdEntry, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Creates one federated database instance in the specified project. To use this resource, the requesting API Key must have the Project Owner or Project Charts Admin roles. This resource doesn't require the API Key to have an Access List.
     * Create One Federated Database Instance in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param dataLakeTenant Details to create one federated database instance in the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param skipRoleValidation Flag that indicates whether this request should check if the requesting IAM role can read from the S3 bucket. AWS checks if the role can list the objects in the bucket before writing to it. Some IAM roles only need write permissions. This flag allows you to skip that check.
     */
    public createFederatedDatabase(groupId: string, dataLakeTenant: DataLakeTenant, envelope?: boolean, pretty?: boolean, skipRoleValidation?: boolean, _options?: Configuration): Promise<DataLakeTenant> {
        const result = this.api.createFederatedDatabase(groupId, dataLakeTenant, envelope, pretty, skipRoleValidation, _options);
        return result.toPromise();
    }

    /**
     * Creates or updates one query limit for one federated database instance. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Configure One Query Limit for One Federated Database Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantName Human-readable label that identifies the federated database instance to which the query limit applies.
     * @param limitName Human-readable label that identifies this data federation instance limit.  | Limit Name | Description | Default | | --- | --- | --- | | bytesProcessed.query | Limit on the number of bytes processed during a single data federation query | N/A | | bytesProcessed.daily | Limit on the number of bytes processed for the data federation instance for the current day | N/A | | bytesProcessed.weekly | Limit on the number of bytes processed for the data federation instance for the current week | N/A | | bytesProcessed.monthly | Limit on the number of bytes processed for the data federation instance for the current month | N/A | 
     * @param dataFederationTenantQueryLimit Creates or updates one query limit for one federated database instance.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public createOneDataFederationQueryLimit(groupId: string, tenantName: string, limitName: 'bytesProcessed.query' | 'bytesProcessed.daily' | 'bytesProcessed.weekly' | 'bytesProcessed.monthly', dataFederationTenantQueryLimit: DataFederationTenantQueryLimit, envelope?: boolean, _options?: Configuration): Promise<Array<DataFederationTenantQueryLimit>> {
        const result = this.api.createOneDataFederationQueryLimit(groupId, tenantName, limitName, dataFederationTenantQueryLimit, envelope, _options);
        return result.toPromise();
    }

    /**
     * Removes one private endpoint for Federated Database Instances and Online Archives in the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Remove One Federated Database Instance and Online Archive Private Endpoint from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param endpointId Unique 22-character alphanumeric string that identifies the private endpoint to remove. Atlas Data Federation supports AWS private endpoints using the AWS PrivateLink feature.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deleteDataFederationPrivateEndpoint(groupId: string, endpointId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteDataFederationPrivateEndpoint(groupId, endpointId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Removes one federated database instance from the specified project. To use this resource, the requesting API Key must have the Project Owner or Project Charts Admin roles. This resource doesn't require the API Key to have an Access List.
     * Remove One Federated Database Instance from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantName Human-readable label that identifies the federated database instance to remove.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deleteFederatedDatabase(groupId: string, tenantName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteFederatedDatabase(groupId, tenantName, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Deletes one query limit for one federated database instance. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Delete One Query Limit For One Federated Database Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantName Human-readable label that identifies the federated database instance to which the query limit applies.
     * @param limitName Human-readable label that identifies this data federation instance limit.  | Limit Name | Description | Default | | --- | --- | --- | | bytesProcessed.query | Limit on the number of bytes processed during a single data federation query | N/A | | bytesProcessed.daily | Limit on the number of bytes processed for the data federation instance for the current day | N/A | | bytesProcessed.weekly | Limit on the number of bytes processed for the data federation instance for the current week | N/A | | bytesProcessed.monthly | Limit on the number of bytes processed for the data federation instance for the current month | N/A | 
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public deleteOneDataFederationInstanceQueryLimit(groupId: string, tenantName: string, limitName: 'bytesProcessed.query' | 'bytesProcessed.daily' | 'bytesProcessed.weekly' | 'bytesProcessed.monthly', envelope?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteOneDataFederationInstanceQueryLimit(groupId, tenantName, limitName, envelope, _options);
        return result.toPromise();
    }

    /**
     * Downloads the query logs for the specified federated database instance. To use this resource, the requesting API Key must have the Project Owner or Project Data Access Read Write roles. This resource doesn't require the API Key to have an Access List.
     * Download Query Logs for One Federated Database Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantName Human-readable label that identifies the federated database instance for which you want to download query logs.
     * @param endDate Timestamp that specifies the end point for the range of log messages to download.  MongoDB Cloud expresses this timestamp in the number of seconds that have elapsed since the UNIX epoch.
     * @param startDate Timestamp that specifies the starting point for the range of log messages to download. MongoDB Cloud expresses this timestamp in the number of seconds that have elapsed since the UNIX epoch.
     */
    public downloadFederatedDatabaseQueryLogs(groupId: string, tenantName: string, endDate?: number, startDate?: number, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.downloadFederatedDatabaseQueryLogs(groupId, tenantName, endDate, startDate, _options);
        return result.toPromise();
    }

    /**
     * Returns the specified private endpoint for Federated Database Instances or Online Archives in the specified project. To use this resource, the requesting API Key must have the Project Read Only or Project Charts Admin roles. This resource doesn't require the API Key to have an Access List.
     * Return One Federated Database Instance and Online Archive Private Endpoint in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param endpointId Unique 22-character alphanumeric string that identifies the private endpoint to return. Atlas Data Federation supports AWS private endpoints using the AWS PrivateLink feature.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getDataFederationPrivateEndpoint(groupId: string, endpointId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<PrivateNetworkEndpointIdEntry> {
        const result = this.api.getDataFederationPrivateEndpoint(groupId, endpointId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the details of one federated database instance within the specified project. To use this resource, the requesting API Key must have the Project Read Only or Project Charts Admin roles. This resource doesn't require the API Key to have an Access List.
     * Return One Federated Database Instance in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantName Human-readable label that identifies the Federated Database to return.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public getFederatedDatabase(groupId: string, tenantName: string, envelope?: boolean, _options?: Configuration): Promise<DataLakeTenant> {
        const result = this.api.getFederatedDatabase(groupId, tenantName, envelope, _options);
        return result.toPromise();
    }

    /**
     * Returns all private endpoints for Federated Database Instances and Online Archives in the specified project. To use this resource, the requesting API Key must have the Project Read Only or Project Charts Admin roles. This resource doesn't require the API Key to have an Access List.
     * Return All Federated Database Instance and Online Archive Private Endpoints in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listDataFederationPrivateEndpoints(groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<Array<PrivateNetworkEndpointIdEntry>> {
        const result = this.api.listDataFederationPrivateEndpoints(groupId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the details of all federated database instances in the specified project. To use this resource, the requesting API Key must have the Project Read Only or higher role. This resource doesn't require the API Key to have an Access List.
     * Return All Federated Database Instances in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param type Type of Federated Database Instances to return.
     */
    public listFederatedDatabases(groupId: string, envelope?: boolean, pretty?: boolean, type?: 'USER' | 'ONLINE_ARCHIVE', _options?: Configuration): Promise<Array<DataLakeTenant>> {
        const result = this.api.listFederatedDatabases(groupId, envelope, pretty, type, _options);
        return result.toPromise();
    }

    /**
     * Returns the details of one query limit for the specified federated database instance in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Federated Database Instance Query Limit for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantName Human-readable label that identifies the federated database instance to which the query limit applies.
     * @param limitName Human-readable label that identifies this data federation instance limit.  | Limit Name | Description | Default | | --- | --- | --- | | bytesProcessed.query | Limit on the number of bytes processed during a single data federation query | N/A | | bytesProcessed.daily | Limit on the number of bytes processed for the data federation instance for the current day | N/A | | bytesProcessed.weekly | Limit on the number of bytes processed for the data federation instance for the current week | N/A | | bytesProcessed.monthly | Limit on the number of bytes processed for the data federation instance for the current month | N/A | 
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public returnFederatedDatabaseQueryLimit(groupId: string, tenantName: string, limitName: 'bytesProcessed.query' | 'bytesProcessed.daily' | 'bytesProcessed.weekly' | 'bytesProcessed.monthly', envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<Array<DataFederationTenantQueryLimit>> {
        const result = this.api.returnFederatedDatabaseQueryLimit(groupId, tenantName, limitName, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns query limits for a federated databases instance in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Query Limits for One Federated Database Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantName Human-readable label that identifies the federated database instance for which you want to retrieve query limits.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public returnFederatedDatabaseQueryLimits(groupId: string, tenantName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<Array<DataFederationTenantQueryLimit>> {
        const result = this.api.returnFederatedDatabaseQueryLimits(groupId, tenantName, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Updates the details of one federated database instance in the specified project. To use this resource, the requesting API Key must have the Project Owner or higher role. This resource doesn't require the API Key to have an Access List.
     * Update One Federated Database Instance in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantName Human-readable label that identifies the federated database instance to update.
     * @param skipRoleValidation Flag that indicates whether this request should check if the requesting IAM role can read from the S3 bucket. AWS checks if the role can list the objects in the bucket before writing to it. Some IAM roles only need write permissions. This flag allows you to skip that check.
     * @param dataLakeTenant Details of one Federated Database to update in the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public updateFederatedDatabase(groupId: string, tenantName: string, skipRoleValidation: boolean, dataLakeTenant: DataLakeTenant, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<DataLakeTenant> {
        const result = this.api.updateFederatedDatabase(groupId, tenantName, skipRoleValidation, dataLakeTenant, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableDataLakePipelinesApi } from './ObservableAPI';

import { DataLakePipelinesApiRequestFactory, DataLakePipelinesApiResponseProcessor} from "../apis/DataLakePipelinesApi";
export class PromiseDataLakePipelinesApi {
    private api: ObservableDataLakePipelinesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DataLakePipelinesApiRequestFactory,
        responseProcessor?: DataLakePipelinesApiResponseProcessor
    ) {
        this.api = new ObservableDataLakePipelinesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one Data Lake Pipeline.
     * Create One Data Lake Pipeline
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param ingestionPipeline Creates one Data Lake Pipeline.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public createPipeline(groupId: string, ingestionPipeline: IngestionPipeline, envelope?: boolean, _options?: Configuration): Promise<IngestionPipeline> {
        const result = this.api.createPipeline(groupId, ingestionPipeline, envelope, _options);
        return result.toPromise();
    }

    /**
     * Removes one Data Lake Pipeline.
     * Remove One Data Lake Pipeline
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param pipelineName Human-readable label that identifies the Data Lake Pipeline.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public deletePipeline(groupId: string, pipelineName: string, envelope?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deletePipeline(groupId, pipelineName, envelope, _options);
        return result.toPromise();
    }

    /**
     * Deletes dataset that Atlas generated during the specified pipeline run.
     * Delete Pipeline Run Dataset
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param pipelineName Human-readable label that identifies the Data Lake Pipeline.
     * @param pipelineRunId Unique 24-hexadecimal character string that identifies a Data Lake Pipeline run.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deletePipelineRunDataset(groupId: string, pipelineName: string, pipelineRunId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deletePipelineRunDataset(groupId, pipelineName, pipelineRunId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the details of one Data Lake Pipeline within the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Data Lake Pipeline
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param pipelineName Human-readable label that identifies the Data Lake Pipeline.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getPipeline(groupId: string, pipelineName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<IngestionPipeline> {
        const result = this.api.getPipeline(groupId, pipelineName, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the details of one Data Lake Pipeline run within the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Data Lake Pipeline Run
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param pipelineName Human-readable label that identifies the Data Lake Pipeline.
     * @param pipelineRunId Unique 24-hexadecimal character string that identifies a Data Lake Pipeline run.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getPipelineRun(groupId: string, pipelineName: string, pipelineRunId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<IngestionPipelineRun> {
        const result = this.api.getPipelineRun(groupId, pipelineName, pipelineRunId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of past Data Lake Pipeline runs. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Data Lake Pipeline Runs from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param pipelineName Human-readable label that identifies the Data Lake Pipeline.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param createdBefore If specified, Atlas returns only Data Lake Pipeline runs initiated before this time and date.
     */
    public listPipelineRuns(groupId: string, pipelineName: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, createdBefore?: Date, _options?: Configuration): Promise<PaginatedPipelineRunView> {
        const result = this.api.listPipelineRuns(groupId, pipelineName, envelope, includeCount, itemsPerPage, pageNum, pretty, createdBefore, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of backup schedule policy items that you can use as a Data Lake Pipeline source. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Available Ingestion Schedules for One Data Lake Pipeline
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param pipelineName Human-readable label that identifies the Data Lake Pipeline.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listPipelineSchedules(groupId: string, pipelineName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<Array<ApiPolicyItemView>> {
        const result = this.api.listPipelineSchedules(groupId, pipelineName, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of backup snapshots that you can use to trigger an on demand pipeline run. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Available Backup Snapshots for One Data Lake Pipeline
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param pipelineName Human-readable label that identifies the Data Lake Pipeline.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param completedAfter Date and time after which MongoDB Cloud created the snapshot. If specified, MongoDB Cloud returns available backup snapshots created after this time and date only. This parameter expresses its value in the ISO 8601 timestamp format in UTC.
     */
    public listPipelineSnapshots(groupId: string, pipelineName: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, completedAfter?: Date, _options?: Configuration): Promise<PaginatedBackupSnapshotView> {
        const result = this.api.listPipelineSnapshots(groupId, pipelineName, envelope, includeCount, itemsPerPage, pageNum, pretty, completedAfter, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of Data Lake Pipelines. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Data Lake Pipelines from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public listPipelines(groupId: string, envelope?: boolean, _options?: Configuration): Promise<Array<IngestionPipeline>> {
        const result = this.api.listPipelines(groupId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Pauses ingestion for a Data Lake Pipeline within the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Pause One Data Lake Pipeline
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param pipelineName Human-readable label that identifies the Data Lake Pipeline.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public pausePipeline(groupId: string, pipelineName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<IngestionPipeline> {
        const result = this.api.pausePipeline(groupId, pipelineName, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Resumes ingestion for a Data Lake Pipeline within the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Resume One Data Lake Pipeline
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param pipelineName Human-readable label that identifies the Data Lake Pipeline.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public resumePipeline(groupId: string, pipelineName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<IngestionPipeline> {
        const result = this.api.resumePipeline(groupId, pipelineName, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Triggers a Data Lake Pipeline ingestion of a specified snapshot.
     * Trigger on demand snapshot ingestion
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param pipelineName Human-readable label that identifies the Data Lake Pipeline.
     * @param triggerIngestionRequest Triggers a single ingestion run of a snapshot.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public triggerSnapshotIngestion(groupId: string, pipelineName: string, triggerIngestionRequest: TriggerIngestionRequest, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<IngestionPipelineRun> {
        const result = this.api.triggerSnapshotIngestion(groupId, pipelineName, triggerIngestionRequest, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Updates one Data Lake Pipeline.
     * Update One Data Lake Pipeline
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param pipelineName Human-readable label that identifies the Data Lake Pipeline.
     * @param ingestionPipeline Updates one Data Lake Pipeline.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public updatePipeline(groupId: string, pipelineName: string, ingestionPipeline: IngestionPipeline, envelope?: boolean, _options?: Configuration): Promise<IngestionPipeline> {
        const result = this.api.updatePipeline(groupId, pipelineName, ingestionPipeline, envelope, _options);
        return result.toPromise();
    }


}



import { ObservableDatabaseUsersApi } from './ObservableAPI';

import { DatabaseUsersApiRequestFactory, DatabaseUsersApiResponseProcessor} from "../apis/DatabaseUsersApi";
export class PromiseDatabaseUsersApi {
    private api: ObservableDatabaseUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DatabaseUsersApiRequestFactory,
        responseProcessor?: DatabaseUsersApiResponseProcessor
    ) {
        this.api = new ObservableDatabaseUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one database user in the specified project. This MongoDB Cloud supports a maximum of 100 database users per project. If you require more than 100 database users on a project, contact [Support](https://cloud.mongodb.com/support). To use this resource, the requesting API Key must have the Project Owner or Project Charts Admin roles. This resource doesn't require the API Key to have an Access List.
     * Create One Database User in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param databaseUser Creates one database user in the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createDatabaseUser(groupId: string, databaseUser: DatabaseUser, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<DatabaseUser> {
        const result = this.api.createDatabaseUser(groupId, databaseUser, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Removes one database user from the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Remove One Database User from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param databaseName Human-readable label that identifies the database against which the database user authenticates. Database users must provide both a username and authentication database to log into MongoDB. If the user authenticates with AWS IAM, x.509, or LDAP, this value should be &#x60;$external&#x60;. If the user authenticates with SCRAM-SHA, this value should be &#x60;admin&#x60;.
     * @param username Human-readable label that represents the user that authenticates to MongoDB. The format of this label depends on the method of authentication:  | Authentication Method | Parameter Needed | Parameter Value | username Format | |---|---|---|---| | AWS IAM | awsType | ROLE | &lt;abbr title&#x3D;\&quot;Amazon Resource Name\&quot;&gt;ARN&lt;/abbr&gt; | | AWS IAM | awsType | USER | &lt;abbr title&#x3D;\&quot;Amazon Resource Name\&quot;&gt;ARN&lt;/abbr&gt; | | x.509 | x509Type | CUSTOMER | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | x.509 | x509Type | MANAGED | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | LDAP | ldapAuthType | USER | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | LDAP | ldapAuthType | GROUP | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | SCRAM-SHA | awsType, x509Type, ldapAuthType | NONE | Alphanumeric string | 
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deleteDatabaseUser(groupId: string, databaseName: string, username: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteDatabaseUser(groupId, databaseName, username, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns one database user that belong to the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Database User from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param databaseName Human-readable label that identifies the database against which the database user authenticates. Database users must provide both a username and authentication database to log into MongoDB. If the user authenticates with AWS IAM, x.509, or LDAP, this value should be &#x60;$external&#x60;. If the user authenticates with SCRAM-SHA, this value should be &#x60;admin&#x60;.
     * @param username Human-readable label that represents the user that authenticates to MongoDB. The format of this label depends on the method of authentication:  | Authentication Method | Parameter Needed | Parameter Value | username Format | |---|---|---|---| | AWS IAM | awsType | ROLE | &lt;abbr title&#x3D;\&quot;Amazon Resource Name\&quot;&gt;ARN&lt;/abbr&gt; | | AWS IAM | awsType | USER | &lt;abbr title&#x3D;\&quot;Amazon Resource Name\&quot;&gt;ARN&lt;/abbr&gt; | | x.509 | x509Type | CUSTOMER | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | x.509 | x509Type | MANAGED | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | LDAP | ldapAuthType | USER | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | LDAP | ldapAuthType | GROUP | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | SCRAM-SHA | awsType, x509Type, ldapAuthType | NONE | Alphanumeric string | 
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getDatabaseUser(groupId: string, databaseName: string, username: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<DatabaseUser> {
        const result = this.api.getDatabaseUser(groupId, databaseName, username, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all database users that belong to the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Database Users from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listDatabaseUsers(groupId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<PaginatedApiAtlasDatabaseUserView> {
        const result = this.api.listDatabaseUsers(groupId, envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }

    /**
     * Updates one database user that belongs to the specified project. To use this resource, the requesting API Key must have the Project Owner or Project Charts Admin roles. This resource doesn't require the API Key to have an Access List.
     * Update One Database User in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param databaseName Human-readable label that identifies the database against which the database user authenticates. Database users must provide both a username and authentication database to log into MongoDB. If the user authenticates with AWS IAM, x.509, or LDAP, this value should be &#x60;$external&#x60;. If the user authenticates with SCRAM-SHA, this value should be &#x60;admin&#x60;.
     * @param username Human-readable label that represents the user that authenticates to MongoDB. The format of this label depends on the method of authentication:  | Authentication Method | Parameter Needed | Parameter Value | username Format | |---|---|---|---| | AWS IAM | awsType | ROLE | &lt;abbr title&#x3D;\&quot;Amazon Resource Name\&quot;&gt;ARN&lt;/abbr&gt; | | AWS IAM | awsType | USER | &lt;abbr title&#x3D;\&quot;Amazon Resource Name\&quot;&gt;ARN&lt;/abbr&gt; | | x.509 | x509Type | CUSTOMER | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | x.509 | x509Type | MANAGED | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | LDAP | ldapAuthType | USER | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | LDAP | ldapAuthType | GROUP | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | SCRAM-SHA | awsType, x509Type, ldapAuthType | NONE | Alphanumeric string | 
     * @param databaseUser Updates one database user that belongs to the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public updateDatabaseUser(groupId: string, databaseName: string, username: string, databaseUser: DatabaseUser, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<DatabaseUser> {
        const result = this.api.updateDatabaseUser(groupId, databaseName, username, databaseUser, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableEncryptionAtRestUsingCustomerKeyManagementApi } from './ObservableAPI';

import { EncryptionAtRestUsingCustomerKeyManagementApiRequestFactory, EncryptionAtRestUsingCustomerKeyManagementApiResponseProcessor} from "../apis/EncryptionAtRestUsingCustomerKeyManagementApi";
export class PromiseEncryptionAtRestUsingCustomerKeyManagementApi {
    private api: ObservableEncryptionAtRestUsingCustomerKeyManagementApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EncryptionAtRestUsingCustomerKeyManagementApiRequestFactory,
        responseProcessor?: EncryptionAtRestUsingCustomerKeyManagementApiResponseProcessor
    ) {
        this.api = new ObservableEncryptionAtRestUsingCustomerKeyManagementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the configuration for encryption at rest using the keys you manage through your cloud provider. MongoDB Cloud encrypts all storage even if you don't use your own key management. This resource requires the requesting API Key to have the Project Owner role.  **LIMITED TO M10 OR GREATER:** MongoDB Cloud limits this feature to dedicated cluster tiers of M10 and greater.
     * Return One Configuration for Encryption at Rest using Customer-Managed Keys for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public returnOneConfigurationForEncryptionAtRestUsingCustomerManagedKeysForOneProject(groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<EncryptionAtRest> {
        const result = this.api.returnOneConfigurationForEncryptionAtRestUsingCustomerManagedKeysForOneProject(groupId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Updates the configuration for encryption at rest using the keys you manage through your cloud provider. MongoDB Cloud encrypts all storage even if you don't use your own key management. This resource requires the requesting API Key to have the Project Atlas Admin role.  **LIMITED TO M10 OR GREATER:** MongoDB Cloud limits this feature to dedicated cluster tiers of M10 and greater.
     * Update Configuration for Encryption at Rest using Customer-Managed Keys for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param encryptionAtRest Required parameters depend on whether someone has enabled Encryption at Rest using Customer Key Management:  If you have enabled Encryption at Rest using Customer Key Management (CMK), Atlas requires all of the parameters for the desired encryption provider.  - To use AWS Key Management Service (KMS), MongoDB Cloud requires all the fields in the **awsKms** object. - To use Azure Key Vault, MongoDB Cloud requires all the fields in the **azureKeyVault** object. - To use Google Cloud Key Management Service (KMS), MongoDB Cloud requires all the fields in the **googleCloudKms** object.  If you enabled Encryption at Rest using Customer Key  Management, administrators can pass only the changed fields for the **awsKms**, **azureKeyVault**, or **googleCloudKms** object to update the configuration to this endpoint.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public updateEncryptionAtRest(groupId: string, encryptionAtRest: EncryptionAtRest, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<EncryptionAtRest> {
        const result = this.api.updateEncryptionAtRest(groupId, encryptionAtRest, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableEventsApi } from './ObservableAPI';

import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";
export class PromiseEventsApi {
    private api: ObservableEventsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns one event for the specified organization. Events identify significant database, billing, or security activities or status changes. To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an Access List.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/events-orgs-get-one/).
     * Return One Event from One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param eventId Unique 24-hexadecimal digit string that identifies the event that you want to return. Use the [/events](#tag/Events/operation/listOrganizationEvents) endpoint to retrieve all events to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param includeRaw Flag that indicates whether to include the raw document in the output. The raw document contains additional meta information about the event.
     */
    public getOrganizationEvent(orgId: string, eventId: string, envelope?: boolean, pretty?: boolean, includeRaw?: boolean, _options?: Configuration): Promise<EventViewForOrg> {
        const result = this.api.getOrganizationEvent(orgId, eventId, envelope, pretty, includeRaw, _options);
        return result.toPromise();
    }

    /**
     * Returns one event for the specified project. Events identify significant database, billing, or security activities or status changes. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/events-projects-get-one/).
     * Return One Event from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param eventId Unique 24-hexadecimal digit string that identifies the event that you want to return. Use the [/events](#tag/Events/operation/listProjectEvents) endpoint to retrieve all events to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param includeRaw Flag that indicates whether to include the raw document in the output. The raw document contains additional meta information about the event.
     */
    public getProjectEvent(groupId: string, eventId: string, envelope?: boolean, pretty?: boolean, includeRaw?: boolean, _options?: Configuration): Promise<EventViewForNdsGroup> {
        const result = this.api.getProjectEvent(groupId, eventId, envelope, pretty, includeRaw, _options);
        return result.toPromise();
    }

    /**
     * Returns all events for the specified organization. Events identify significant database, billing, or security activities or status changes. To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an Access List.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/events-orgs-get-all/).
     * Return All Events from One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param eventType Category of incident recorded at this moment in time.  **IMPORTANT**: The complete list of event type values changes frequently.
     * @param includeRaw Flag that indicates whether to include the raw document in the output. The raw document contains additional meta information about the event.
     * @param maxDate Date and time from when MongoDB Cloud stops returning events. This parameter uses the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;ISO 8601&lt;/a&gt; timestamp format in UTC.
     * @param minDate Date and time from when MongoDB Cloud starts returning events. This parameter uses the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;ISO 8601&lt;/a&gt; timestamp format in UTC.
     */
    public listOrganizationEvents(orgId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, eventType?: EventTypeForOrg, includeRaw?: boolean, maxDate?: Date, minDate?: Date, _options?: Configuration): Promise<OrgPaginatedEventView> {
        const result = this.api.listOrganizationEvents(orgId, envelope, includeCount, itemsPerPage, pageNum, pretty, eventType, includeRaw, maxDate, minDate, _options);
        return result.toPromise();
    }

    /**
     * Returns one event for the specified project. Events identify significant database, billing, or security activities or status changes. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.   This resource remains under revision and may change. Refer to the [legacy documentation for this resource](https://www.mongodb.com/docs/atlas/reference/api/events-projects-get-all/).
     * Return All Events from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param clusterNames Human-readable label that identifies the cluster.
     * @param eventType Category of incident recorded at this moment in time.  **IMPORTANT**: The complete list of event type values changes frequently.
     * @param includeRaw Flag that indicates whether to include the raw document in the output. The raw document contains additional meta information about the event.
     * @param maxDate Date and time from when MongoDB Cloud stops returning events. This parameter uses the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;ISO 8601&lt;/a&gt; timestamp format in UTC.
     * @param minDate Date and time from when MongoDB Cloud starts returning events. This parameter uses the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;ISO 8601&lt;/a&gt; timestamp format in UTC.
     */
    public listProjectEvents(groupId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, clusterNames?: Array<string>, eventType?: EventTypeForNdsGroup, includeRaw?: boolean, maxDate?: Date, minDate?: Date, _options?: Configuration): Promise<GroupPaginatedEventView> {
        const result = this.api.listProjectEvents(groupId, envelope, includeCount, itemsPerPage, pageNum, pretty, clusterNames, eventType, includeRaw, maxDate, minDate, _options);
        return result.toPromise();
    }


}



import { ObservableFederatedAuthenticationApi } from './ObservableAPI';

import { FederatedAuthenticationApiRequestFactory, FederatedAuthenticationApiResponseProcessor} from "../apis/FederatedAuthenticationApi";
export class PromiseFederatedAuthenticationApi {
    private api: ObservableFederatedAuthenticationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FederatedAuthenticationApiRequestFactory,
        responseProcessor?: FederatedAuthenticationApiResponseProcessor
    ) {
        this.api = new ObservableFederatedAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds one role mapping to the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Add One Role Mapping to One Organization
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param roleMappingView The role mapping that you want to create.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public createRoleMapping(federationSettingsId: string, orgId: string, roleMappingView: RoleMappingView, envelope?: boolean, _options?: Configuration): Promise<RoleMappingView> {
        const result = this.api.createRoleMapping(federationSettingsId, orgId, roleMappingView, envelope, _options);
        return result.toPromise();
    }

    /**
     * Deletes the federation settings instance and all associated data, including identity providers and domains. To use this resource, the requesting API Key must have the Organization Owner role in the last remaining connected organization. This resource doesn't require the API Key to have an Access List. **Note**: requests to this resource will fail if there is more than one connected organization in the federation.
     * Delete the federation settings instance.
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     */
    public deleteFederationApp(federationSettingsId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteFederationApp(federationSettingsId, _options);
        return result.toPromise();
    }

    /**
     * Removes one role mapping in the specified organization from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Remove One Role Mapping from One Organization
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param id Unique 24-hexadecimal digit string that identifies the role mapping that you want to remove.
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public deleteRoleMapping(federationSettingsId: string, id: string, orgId: string, envelope?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteRoleMapping(federationSettingsId, id, orgId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Returns the specified connected org config from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in the connected org. This resource doesn't require the API Key to have an Access List.
     * Return One Org Config Connected to One Federation
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param orgId Unique 24-hexadecimal digit string that identifies the connected organization configuration to return.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public getConnectedOrgConfig(federationSettingsId: string, orgId: string, envelope?: boolean, _options?: Configuration): Promise<ConnectedOrgConfigView> {
        const result = this.api.getConnectedOrgConfig(federationSettingsId, orgId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Returns information about the federation settings for the specified organization. To use this resource, the requesting API Key must have the Organization Owner role in the connected org. This resource doesn't require the API Key to have an Access List.
     * Return Federation Settings for One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getFederationSettings(orgId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<OrgFederationSettingsView> {
        const result = this.api.getFederationSettings(orgId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns one identity provider from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations. This resource doesn't require the API Key to have an Access List.
     * Return one identity provider from the specified federation.
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param identityProviderId Unique 20-hexadecimal digit string that identifies the identity provider.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public getIdentityProvider(federationSettingsId: string, identityProviderId: string, envelope?: boolean, _options?: Configuration): Promise<IdentityProviderView> {
        const result = this.api.getIdentityProvider(federationSettingsId, identityProviderId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Returns the metadata of one identity provider in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations. This resource doesn't require the API Key to have an Access List.
     * Return the metadata of one identity provider in the specified federation.
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param identityProviderId Unique 20-hexadecimal digit string that identifies the identity provider.
     */
    public getIdentityProviderMetadata(federationSettingsId: string, identityProviderId: string, _options?: Configuration): Promise<string> {
        const result = this.api.getIdentityProviderMetadata(federationSettingsId, identityProviderId, _options);
        return result.toPromise();
    }

    /**
     * Returns one role mapping from the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Return One Role Mapping from One Organization
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param id Unique 24-hexadecimal digit string that identifies the role mapping that you want to return.
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public getRoleMapping(federationSettingsId: string, id: string, orgId: string, envelope?: boolean, _options?: Configuration): Promise<RoleMappingView> {
        const result = this.api.getRoleMapping(federationSettingsId, id, orgId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Returns all connected org configs in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected orgs. This resource doesn't require the API Key to have an Access List.
     * Return All Connected Org Configs from the Federation
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public listConnectedOrgConfigs(federationSettingsId: string, envelope?: boolean, _options?: Configuration): Promise<Array<ConnectedOrgConfigView>> {
        const result = this.api.listConnectedOrgConfigs(federationSettingsId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Returns all identity providers in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations. This resource doesn't require the API Key to have an Access List.
     * Return all identity providers from the specified federation.
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public listIdentityProviders(federationSettingsId: string, envelope?: boolean, _options?: Configuration): Promise<Array<IdentityProviderView>> {
        const result = this.api.listIdentityProviders(federationSettingsId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Returns all role mappings from the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Return All Role Mappings from One Organization
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public listRoleMappings(federationSettingsId: string, orgId: string, envelope?: boolean, _options?: Configuration): Promise<Array<RoleMappingView>> {
        const result = this.api.listRoleMappings(federationSettingsId, orgId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Removes one connected organization configuration from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List. Note: This request fails if only one connected organization exists in the federation.
     * Remove One Org Config Connected to One Federation
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param orgId Unique 24-hexadecimal digit string that identifies the connected organization configuration to remove.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public removeConnectedOrgConfig(federationSettingsId: string, orgId: string, envelope?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.removeConnectedOrgConfig(federationSettingsId, orgId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Updates one connected organization configuration from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.   **Note** If the organization configuration has no associated identity provider, you can't use this resource to update role mappings or post authorization role grants.    **Note**: The domainRestrictionEnabled field defaults to false if not provided in the request.   **Note**: If the identityProviderId field is not provided, you will disconnect the organization and the identity provider.
     * Update One Org Config Connected to One Federation
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param orgId Unique 24-hexadecimal digit string that identifies the connected organization configuration to update.
     * @param connectedOrgConfigView The connected organization configuration that you want to update.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public updateConnectedOrgConfig(federationSettingsId: string, orgId: string, connectedOrgConfigView: ConnectedOrgConfigView, envelope?: boolean, _options?: Configuration): Promise<ConnectedOrgConfigView> {
        const result = this.api.updateConnectedOrgConfig(federationSettingsId, orgId, connectedOrgConfigView, envelope, _options);
        return result.toPromise();
    }

    /**
     * Updates one identity provider in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations. This resource doesn't require the API Key to have an Access List.
     * Update the identity provider.
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param identityProviderId Unique 20-hexadecimal digit string that identifies the identity provider.
     * @param identityProviderUpdate The identity provider that you want to update.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public updateIdentityProvider(federationSettingsId: string, identityProviderId: string, identityProviderUpdate: IdentityProviderUpdate, envelope?: boolean, _options?: Configuration): Promise<IdentityProviderView> {
        const result = this.api.updateIdentityProvider(federationSettingsId, identityProviderId, identityProviderUpdate, envelope, _options);
        return result.toPromise();
    }

    /**
     * Updates one role mapping in the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Update One Role Mapping in One Organization
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param id Unique 24-hexadecimal digit string that identifies the role mapping that you want to update.
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param roleMappingView The role mapping that you want to update.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public updateRoleMapping(federationSettingsId: string, id: string, orgId: string, roleMappingView: RoleMappingView, envelope?: boolean, _options?: Configuration): Promise<RoleMappingView> {
        const result = this.api.updateRoleMapping(federationSettingsId, id, orgId, roleMappingView, envelope, _options);
        return result.toPromise();
    }


}



import { ObservableGlobalClustersApi } from './ObservableAPI';

import { GlobalClustersApiRequestFactory, GlobalClustersApiResponseProcessor} from "../apis/GlobalClustersApi";
export class PromiseGlobalClustersApi {
    private api: ObservableGlobalClustersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GlobalClustersApiRequestFactory,
        responseProcessor?: GlobalClustersApiResponseProcessor
    ) {
        this.api = new ObservableGlobalClustersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one custom zone mapping for the specified global cluster. A custom zone mapping matches one ISO 3166-2 location code to a zone in your global cluster. By default, MongoDB Cloud maps each location code to the closest geographical zone. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List. Deprecated versions: v2-{2023-01-01}
     * Add One Entry to One Custom Zone Mapping
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies this advanced cluster.
     * @param geoSharding Custom zone mapping to add to the specified global cluster.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public createCustomZoneMapping(groupId: string, clusterName: string, geoSharding: GeoSharding, envelope?: boolean, _options?: Configuration): Promise<GeoSharding> {
        const result = this.api.createCustomZoneMapping(groupId, clusterName, geoSharding, envelope, _options);
        return result.toPromise();
    }

    /**
     * Creates one managed namespace within the specified global cluster. A managed namespace identifies a collection using the database name, the dot separator, and the collection name. To use this resource, the requesting API Key must have the Project Data Access Admin role. This resource doesn't require the API Key to have an Access List. Deprecated versions: v2-{2023-01-01}
     * Create One Managed Namespace in One Global Multi-Cloud Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies this advanced cluster.
     * @param managedNamespaceView Managed namespace to create within the specified global cluster.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public createManagedNamespace(groupId: string, clusterName: string, managedNamespaceView: ManagedNamespaceView, envelope?: boolean, _options?: Configuration): Promise<GeoSharding> {
        const result = this.api.createManagedNamespace(groupId, clusterName, managedNamespaceView, envelope, _options);
        return result.toPromise();
    }

    /**
     * Removes all custom zone mappings for the specified global cluster. A custom zone mapping matches one ISO 3166-2 location code to a zone in your global cluster. Removing the custom zone mappings restores the default mapping. By default, MongoDB Cloud maps each location code to the closest geographical zone. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List. Deprecated versions: v2-{2023-01-01}
     * Remove All Custom Zone Mappings from One Global Multi-Cloud Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies this advanced cluster.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public deleteAllCustomZoneMappings(groupId: string, clusterName: string, envelope?: boolean, _options?: Configuration): Promise<GeoSharding> {
        const result = this.api.deleteAllCustomZoneMappings(groupId, clusterName, envelope, _options);
        return result.toPromise();
    }

    /**
     * Removes one managed namespace within the specified global cluster. A managed namespace identifies a collection using the database name, the dot separator, and the collection name. Deleting a managed namespace does not remove the associated collection or data. To use this resource, the requesting API Key must have the Project Data Access Admin role. This resource doesn't require the API Key to have an Access List. Deprecated versions: v2-{2023-01-01}
     * Remove One Managed Namespace from One Global Multi-Cloud Cluster
     * @param clusterName Human-readable label that identifies this advanced cluster.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param db Human-readable label that identifies the database that contains the collection.
     * @param collection Human-readable label that identifies the collection associated with the managed namespace.
     */
    public deleteManagedNamespace(clusterName: string, groupId: string, envelope?: boolean, pretty?: boolean, db?: string, collection?: string, _options?: Configuration): Promise<GeoSharding> {
        const result = this.api.deleteManagedNamespace(clusterName, groupId, envelope, pretty, db, collection, _options);
        return result.toPromise();
    }

    /**
     * Returns one managed namespace within the specified global cluster. A managed namespace identifies a collection using the database name, the dot separator, and the collection name. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List. Deprecated versions: v2-{2023-01-01}
     * Return One Managed Namespace in One Global Multi-Cloud Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies this advanced cluster.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public getManagedNamespace(groupId: string, clusterName: string, envelope?: boolean, _options?: Configuration): Promise<GeoSharding> {
        const result = this.api.getManagedNamespace(groupId, clusterName, envelope, _options);
        return result.toPromise();
    }


}



import { ObservableInvoicesApi } from './ObservableAPI';

import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor} from "../apis/InvoicesApi";
export class PromiseInvoicesApi {
    private api: ObservableInvoicesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InvoicesApiRequestFactory,
        responseProcessor?: InvoicesApiResponseProcessor
    ) {
        this.api = new ObservableInvoicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns one invoice that MongoDB issued to the specified organization in CSV format. A unique 24-hexadecimal digit string identifies the invoice. To use this resource, the requesting API Key must have the Organization Member role. If you have a cross-organization setup, you can query for a linked invoice if you have an Organization Billing Admin or Organization Owner Role. This resource doesn't require the API Key to have an Access List.
     * Return One Organization Invoice as CSV
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param invoiceId Unique 24-hexadecimal digit string that identifies the invoice submitted to the specified organization. Charges typically post the next day.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public downloadInvoiceCSV(orgId: string, invoiceId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.downloadInvoiceCSV(orgId, invoiceId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns one invoice that MongoDB issued to the specified organization. A unique 24-hexadecimal digit string identifies the invoice. You can choose to receive this invoice in JSON or CSV format. To use this resource, the requesting API Key must have the Organization Member role. If you have a cross-organization setup, you can query for a linked invoice if you have an Organization Billing Admin or Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Return One Organization Invoice
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param invoiceId Unique 24-hexadecimal digit string that identifies the invoice submitted to the specified organization. Charges typically post the next day.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getInvoice(orgId: string, invoiceId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiInvoiceView> {
        const result = this.api.getInvoice(orgId, invoiceId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all invoices that MongoDB issued to the specified organization. This list includes all invoices regardless of invoice status. To use this resource, the requesting API Key must have the Organization Member role. If you have a cross-organization setup, to view linked invoices, you must have an Organization Billing Admin or Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Return All Invoices for One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listInvoices(orgId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<PaginatedApiInvoiceView> {
        const result = this.api.listInvoices(orgId, envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all invoices accruing charges for the current billing cycle for the specified organization. To use this resource, the requesting API Key must have the Organization Member role.  If you have a cross-organization setup, to view linked invoices, you must have an Organization Billing Admin or Organization Owner Role. This resource doesn't require the API Key to have an Access List.
     * Return All Pending Invoices for One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listPendingInvoices(orgId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<PaginatedApiInvoiceView> {
        const result = this.api.listPendingInvoices(orgId, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableLDAPConfigurationApi } from './ObservableAPI';

import { LDAPConfigurationApiRequestFactory, LDAPConfigurationApiResponseProcessor} from "../apis/LDAPConfigurationApi";
export class PromiseLDAPConfigurationApi {
    private api: ObservableLDAPConfigurationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LDAPConfigurationApiRequestFactory,
        responseProcessor?: LDAPConfigurationApiResponseProcessor
    ) {
        this.api = new ObservableLDAPConfigurationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Removes the current LDAP Distinguished Name mapping captured in the ``userToDNMapping`` document from the LDAP configuration for the specified project. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Remove the Current LDAP User to DN Mapping
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deleteLDAPConfiguration(groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteLDAPConfiguration(groupId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the current LDAP configuration for the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Return the Current LDAP or X.509 Configuration
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getLDAPConfiguration(groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<UserSecurity> {
        const result = this.api.getLDAPConfiguration(groupId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the status of one request to verify one LDAP configuration for the specified project. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Return the Status of One Verify LDAP Configuration Request
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param requestId Unique string that identifies the request to verify an &lt;abbr title&#x3D;\&quot;Lightweight Directory Access Protocol\&quot;&gt;LDAP&lt;/abbr&gt; configuration.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getLDAPConfigurationStatus(groupId: string, requestId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<NDSLDAPVerifyConnectivityJobRequest> {
        const result = this.api.getLDAPConfigurationStatus(groupId, requestId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Edits the LDAP configuration for the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.  Updating this configuration triggers a rolling restart of the database.
     * Edit the LDAP or X.509 Configuration
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param userSecurity Updates the LDAP configuration for the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public saveLDAPConfiguration(groupId: string, userSecurity: UserSecurity, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<UserSecurity> {
        const result = this.api.saveLDAPConfiguration(groupId, userSecurity, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Verifies the LDAP configuration for the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Verify the LDAP Configuration in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param nDSLDAPVerifyConnectivityJobRequestParams The LDAP configuration for the specified project that you want to verify.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public verifyLDAPConfiguration(groupId: string, nDSLDAPVerifyConnectivityJobRequestParams: NDSLDAPVerifyConnectivityJobRequestParams, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<NDSLDAPVerifyConnectivityJobRequest> {
        const result = this.api.verifyLDAPConfiguration(groupId, nDSLDAPVerifyConnectivityJobRequestParams, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableLegacyBackupApi } from './ObservableAPI';

import { LegacyBackupApiRequestFactory, LegacyBackupApiResponseProcessor} from "../apis/LegacyBackupApi";
export class PromiseLegacyBackupApi {
    private api: ObservableLegacyBackupApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LegacyBackupApiRequestFactory,
        responseProcessor?: LegacyBackupApiResponseProcessor
    ) {
        this.api = new ObservableLegacyBackupApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Removes one legacy backup snapshot for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Owner role and an entry for the project access list.
     * Remove One Legacy Backup Snapshot
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param snapshotId Unique 24-hexadecimal digit string that identifies the desired snapshot.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deleteLegacySnapshot(groupId: string, clusterName: string, snapshotId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteLegacySnapshot(groupId, clusterName, snapshotId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns one legacy backup checkpoint for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Legacy Backup Checkpoint
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param checkpointId Unique 24-hexadecimal digit string that identifies the checkpoint.
     * @param clusterName Human-readable label that identifies the cluster that contains the checkpoints that you want to return.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getLegacyBackupCheckpoint(groupId: string, checkpointId: string, clusterName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<Checkpoint> {
        const result = this.api.getLegacyBackupCheckpoint(groupId, checkpointId, clusterName, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns one legacy backup restore job for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Legacy Backup Restore Job
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster with the snapshot you want to return.
     * @param jobId Unique 24-hexadecimal digit string that identifies the restore job.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getLegacyBackupRestoreJob(groupId: string, clusterName: string, jobId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiRestoreJobView> {
        const result = this.api.getLegacyBackupRestoreJob(groupId, clusterName, jobId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns one legacy backup snapshot for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Legacy Backup Snapshot
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param snapshotId Unique 24-hexadecimal digit string that identifies the desired snapshot.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getLegacySnapshot(groupId: string, clusterName: string, snapshotId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiSnapshotView> {
        const result = this.api.getLegacySnapshot(groupId, clusterName, snapshotId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the snapshot schedule for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Snapshot Schedule
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster with the snapshot you want to return.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getLegacySnapshotSchedule(groupId: string, clusterName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<SnapshotSchedule> {
        const result = this.api.getLegacySnapshotSchedule(groupId, clusterName, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all legacy backup checkpoints for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Legacy Backup Checkpoints
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster that contains the checkpoints that you want to return.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listLegacyBackupCheckpoints(groupId: string, clusterName: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<PaginatedApiAtlasCheckpointView> {
        const result = this.api.listLegacyBackupCheckpoints(groupId, clusterName, envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all legacy backup restore jobs for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Legacy Backup Restore Jobs
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster with the snapshot you want to return.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param batchId Unique 24-hexadecimal digit string that identifies the batch of restore jobs to return. Timestamp in ISO 8601 date and time format in UTC when creating a restore job for a sharded cluster, Application creates a separate job for each shard, plus another for the config host. Each of these jobs comprise one batch. A restore job for a replica set can&#39;t be part of a batch.
     */
    public listLegacyBackupRestoreJobs(groupId: string, clusterName: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, batchId?: string, _options?: Configuration): Promise<PaginatedRestoreJobView> {
        const result = this.api.listLegacyBackupRestoreJobs(groupId, clusterName, envelope, includeCount, itemsPerPage, pageNum, pretty, batchId, _options);
        return result.toPromise();
    }

    /**
     * Returns all legacy backup snapshots for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Legacy Backup Snapshots
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param completed Human-readable label that specifies whether to return only completed, incomplete, or all snapshots. By default, MongoDB Cloud only returns completed snapshots.
     */
    public listLegacySnapshots(groupId: string, clusterName: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, completed?: 'all' | 'true' | 'false', _options?: Configuration): Promise<PaginatedSnapshotView> {
        const result = this.api.listLegacySnapshots(groupId, clusterName, envelope, includeCount, itemsPerPage, pageNum, pretty, completed, _options);
        return result.toPromise();
    }

    /**
     * Changes the expiration date for one legacy backup snapshot for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Atlas Admin role and an entry for the project access list.
     * Change One Legacy Backup Snapshot Expiration
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param snapshotId Unique 24-hexadecimal digit string that identifies the desired snapshot.
     * @param apiSnapshotView Changes One Legacy Backup Snapshot Expiration.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public updateLegacySnapshotRetention(groupId: string, clusterName: string, snapshotId: string, apiSnapshotView: ApiSnapshotView, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiSnapshotView> {
        const result = this.api.updateLegacySnapshotRetention(groupId, clusterName, snapshotId, apiSnapshotView, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Update the snapshot schedule for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Atlas Admin role.
     * Update Snapshot Schedule for One Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster with the snapshot you want to return.
     * @param snapshotSchedule Update the snapshot schedule for one cluster in the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public updateLegacySnapshotSchedule(groupId: string, clusterName: string, snapshotSchedule: SnapshotSchedule, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<SnapshotSchedule> {
        const result = this.api.updateLegacySnapshotSchedule(groupId, clusterName, snapshotSchedule, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableLegacyBackupRestoreJobsApi } from './ObservableAPI';

import { LegacyBackupRestoreJobsApiRequestFactory, LegacyBackupRestoreJobsApiResponseProcessor} from "../apis/LegacyBackupRestoreJobsApi";
export class PromiseLegacyBackupRestoreJobsApi {
    private api: ObservableLegacyBackupRestoreJobsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LegacyBackupRestoreJobsApiRequestFactory,
        responseProcessor?: LegacyBackupRestoreJobsApiResponseProcessor
    ) {
        this.api = new ObservableLegacyBackupRestoreJobsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Restores one legacy backup for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Atlas Admin role and an entry for the project access list.
     * Create One Legacy Backup Restore Job
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster with the snapshot you want to return.
     * @param apiRestoreJobView Legacy backup to restore to one cluster in the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createLegacyBackupRestoreJob(groupId: string, clusterName: string, apiRestoreJobView: ApiRestoreJobView, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<PaginatedRestoreJobView> {
        const result = this.api.createLegacyBackupRestoreJob(groupId, clusterName, apiRestoreJobView, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableMaintenanceWindowsApi } from './ObservableAPI';

import { MaintenanceWindowsApiRequestFactory, MaintenanceWindowsApiResponseProcessor} from "../apis/MaintenanceWindowsApi";
export class PromiseMaintenanceWindowsApi {
    private api: ObservableMaintenanceWindowsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MaintenanceWindowsApiRequestFactory,
        responseProcessor?: MaintenanceWindowsApiResponseProcessor
    ) {
        this.api = new ObservableMaintenanceWindowsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Defers the maintenance window for the specified project. To use this resource, the requesting API Key must have the Project Atlas Admin role.This resource doesn't require the API Key to have an Access List.
     * Defer One Maintenance Window for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public deferMaintenanceWindow(groupId: string, envelope?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deferMaintenanceWindow(groupId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Returns the maintenance window for the specified project. To use this resource, the requesting API Key must have the Project Read Only role.This resource doesn't require the API Key to have an Access List.
     * Return One Maintenance Window for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getMaintenanceWindow(groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<GroupMaintenanceWindow> {
        const result = this.api.getMaintenanceWindow(groupId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Resets the maintenance window for the specified project. To use this resource, the requesting API Key must have the Project Atlas Admin role.This resource doesn't require the API Key to have an Access List.
     * Reset One Maintenance Window for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public resetMaintenanceWindow(groupId: string, envelope?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.resetMaintenanceWindow(groupId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Toggles automatic deferral of the maintenance window for the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Toggle Automatic Deferral of Maintenance for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public toggleMaintenanceAutoDefer(groupId: string, envelope?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.toggleMaintenanceAutoDefer(groupId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Updates the maintenance window for the specified project. To use this resource, the requesting API Key must have the Project Atlas Admin role.This resource doesn't require the API Key to have an Access List.
     * Update Maintenance Window for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param groupMaintenanceWindow Updates the maintenance window for the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public updateMaintenanceWindow(groupId: string, groupMaintenanceWindow: GroupMaintenanceWindow, envelope?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.updateMaintenanceWindow(groupId, groupMaintenanceWindow, envelope, _options);
        return result.toPromise();
    }


}



import { ObservableMongoDBCloudUsersApi } from './ObservableAPI';

import { MongoDBCloudUsersApiRequestFactory, MongoDBCloudUsersApiResponseProcessor} from "../apis/MongoDBCloudUsersApi";
export class PromiseMongoDBCloudUsersApi {
    private api: ObservableMongoDBCloudUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MongoDBCloudUsersApiRequestFactory,
        responseProcessor?: MongoDBCloudUsersApiResponseProcessor
    ) {
        this.api = new ObservableMongoDBCloudUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one MongoDB Cloud user account. A MongoDB Cloud user account only grants access to the MongoDB Cloud application. To grant database access, create a database user. To use this resource, the requesting API Key can have any role. This resource doesn't require the API Key to have an Access List.
     * Create One MongoDB Cloud User
     * @param apiAppUserView MongoDB Cloud user account to create.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createUser(apiAppUserView: ApiAppUserView, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiAppUserView> {
        const result = this.api.createUser(apiAppUserView, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the details for one MongoDB Cloud user account with the specified unique identifier for the user. To use this resource, the requesting API Key can have any role. This resource doesn't require the API Key to have an Access List.
     * Return One MongoDB Cloud User using Its ID
     * @param userId Unique 24-hexadecimal digit string that identifies this user.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getUser(userId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiAppUserView> {
        const result = this.api.getUser(userId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the details for one MongoDB Cloud user account with the specified username. To use this resource, the requesting API Key can have any role. This resource doesn't require the API Key to have an Access List.
     * Return One MongoDB Cloud User using Their Username
     * @param userName Email address that belongs to the MongoDB Cloud user account. You cannot modify this address after creating the user.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getUserByUsername(userName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiAppUserView> {
        const result = this.api.getUserByUsername(userName, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableMonitoringAndLogsApi } from './ObservableAPI';

import { MonitoringAndLogsApiRequestFactory, MonitoringAndLogsApiResponseProcessor} from "../apis/MonitoringAndLogsApi";
export class PromiseMonitoringAndLogsApi {
    private api: ObservableMonitoringAndLogsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MonitoringAndLogsApiRequestFactory,
        responseProcessor?: MonitoringAndLogsApiResponseProcessor
    ) {
        this.api = new ObservableMonitoringAndLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the processes for the specified host for the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One MongoDB Process by ID
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param processId Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getAtlasProcess(groupId: string, processId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiHostViewAtlas> {
        const result = this.api.getAtlasProcess(groupId, processId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns one database running on the specified host for the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Database for a MongoDB Process
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param databaseName Human-readable label that identifies the database that the specified MongoDB process serves.
     * @param processId Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getDatabase(groupId: string, databaseName: string, processId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiDatabaseView> {
        const result = this.api.getDatabase(groupId, databaseName, processId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the measurements of one database for the specified host for the specified project. Returns the database's on-disk storage space based on the MongoDB `dbStats` command output. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Measurements of One Database for One MongoDB Process
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param databaseName Human-readable label that identifies the database that the specified MongoDB process serves.
     * @param processId Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param m One or more types of measurement to request for this MongoDB process. If omitted, the resource returns all measurements. To specify multiple values for &#x60;m&#x60;, repeat the &#x60;m&#x60; parameter for each value. Specify measurements that apply to the specified host. MongoDB Cloud returns an error if you specified any invalid measurements.
     */
    public getDatabaseMeasurements(groupId: string, databaseName: string, processId: string, envelope?: boolean, pretty?: boolean, m?: Set<'DATABASE_AVERAGE_OBJECT_SIZE' | 'DATABASE_COLLECTION_COUNT' | 'DATABASE_DATA_SIZE' | 'DATABASE_STORAGE_SIZE' | 'DATABASE_INDEX_SIZE' | 'DATABASE_INDEX_COUNT' | 'DATABASE_EXTENT_COUNT' | 'DATABASE_OBJECT_COUNT' | 'DATABASE_VIEW_COUNT'>, _options?: Configuration): Promise<ApiMeasurementsGeneralViewAtlas> {
        const result = this.api.getDatabaseMeasurements(groupId, databaseName, processId, envelope, pretty, m, _options);
        return result.toPromise();
    }

    /**
     * Returns the measurements of one disk or partition for the specified host for the specified project. Returned value can be one of the following: - Throughput of I/O operations for the disk partition used for the MongoDB process - Percentage of time during which requests the partition issued and serviced - Latency per operation type of the disk partition used for the MongoDB process - Amount of free and used disk space on the disk partition used for the MongoDB process  To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Measurements of One Disk for One MongoDB Process
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param partitionName Human-readable label of the disk or partition to which the measurements apply.
     * @param processId Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param m One or more types of measurement to request for this MongoDB process. If omitted, the resource returns all measurements. To specify multiple values for &#x60;m&#x60;, repeat the &#x60;m&#x60; parameter for each value. Specify measurements that apply to the specified host. MongoDB Cloud returns an error if you specified any invalid measurements.
     */
    public getDiskMeasurements(groupId: string, partitionName: string, processId: string, envelope?: boolean, pretty?: boolean, m?: Set<'DISK_PARTITION_IOPS_READ' | 'MAX_DISK_PARTITION_IOPS_READ' | 'DISK_PARTITION_IOPS_WRITE' | 'MAX_DISK_PARTITION_IOPS_WRITE' | 'DISK_PARTITION_IOPS_TOTAL' | 'MAX_DISK_PARTITION_IOPS_TOTAL' | 'DISK_PARTITION_UTILIZATION' | 'MAX_DISK_PARTITION_UTILIZATION' | 'DISK_PARTITION_LATENCY_READ' | 'MAX_DISK_PARTITION_LATENCY_READ' | 'DISK_PARTITION_LATENCY_WRITE' | 'MAX_DISK_PARTITION_LATENCY_WRITE' | 'DISK_PARTITION_SPACE_FREE' | 'MAX_DISK_PARTITION_SPACE_FREE' | 'DISK_PARTITION_SPACE_USED' | 'MAX_DISK_PARTITION_SPACE_USED' | 'DISK_PARTITION_SPACE_PERCENT_FREE' | 'MAX_DISK_PARTITION_SPACE_PERCENT_FREE' | 'DISK_PARTITION_SPACE_PERCENT_USED' | 'MAX_DISK_PARTITION_SPACE_PERCENT_USED'>, _options?: Configuration): Promise<ApiMeasurementsGeneralViewAtlas> {
        const result = this.api.getDiskMeasurements(groupId, partitionName, processId, envelope, pretty, m, _options);
        return result.toPromise();
    }

    /**
     * Returns a compressed (.gz) log file that contains a range of log messages for the specified host for the specified project. To use this resource, the requesting API Key must have the Project Owner or Project Data Access Read Write roles. This resource doesn't require the API Key to have an Access List. Deprecated versions: v2-{2023-01-01}
     * Download Logs for One Multi-Cloud Cluster Host in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param hostName Fully qualified domain name or IP address of the MongoDB host that stores the log files that you want to download.
     * @param logName Human-readable label of the log file that you want to return. You can return audit logs only if you enable Database Auditing for the specified project.
     * @param endDate Date and time when the period specifies the inclusive ending point for the range of log messages to retrieve. This parameter expresses its value in the number of seconds that have elapsed since the UNIX epoch.
     * @param startDate Date and time when the period specifies the inclusive starting point for the range of log messages to retrieve. This parameter expresses its value in the number of seconds that have elapsed since the UNIX epoch.
     */
    public getHostLogs(groupId: string, hostName: string, logName: 'mongodb' | 'mongos' | 'mongodb-audit-log' | 'mongos-audit-log', endDate?: number, startDate?: number, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.getHostLogs(groupId, hostName, logName, endDate, startDate, _options);
        return result.toPromise();
    }

    /**
     * Returns measurements of the disk or partition per process for the specified host for the specified project. Returned value can be one of the following: - Throughput of I/O operations for the disk partition used for the MongoDB process - Percentage of time during which requests the partition issued and serviced - Latency per operation type of the disk partition used for the MongoDB process - Amount of free and used disk space on the disk partition used for the MongoDB process   To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Measurements for One MongoDB Process
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param processId Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param m One or more types of measurement to request for this MongoDB process. If omitted, the resource returns all measurements. To specify multiple values for &#x60;m&#x60;, repeat the &#x60;m&#x60; parameter for each value. Specify measurements that apply to the specified host. MongoDB Cloud returns an error if you specified any invalid measurements.
     * @param period Date and time that indicates how far in the past to query. You can&#39;t set this value with **start** and **end** in the same request. This parameter expresses its value in the ISO 8601 duration format in UTC
     */
    public getHostMeasurements(groupId: string, processId: string, envelope?: boolean, pretty?: boolean, m?: Set<'ASSERT_MSG' | 'ASSERT_REGULAR' | 'ASSERT_USER' | 'ASSERT_WARNING' | 'BACKGROUND_FLUSH_AVG' | 'CACHE_BYTES_READ_INTO' | 'CACHE_BYTES_WRITTEN_FROM' | 'CACHE_DIRTY_BYTES' | 'CACHE_USED_BYTES' | 'COMPUTED_MEMORY' | 'CONNECTIONS' | 'CURSORS_TOTAL_OPEN' | 'CURSORS_TOTAL_TIMED_OUT' | 'DB_DATA_SIZE_TOTAL' | 'DB_STORAGE_TOTAL' | 'DOCUMENT_METRICS_DELETED' | 'DOCUMENT_METRICS_INSERTED' | 'DOCUMENT_METRICS_RETURNED' | 'DOCUMENT_METRICS_UPDATED' | 'EXTRA_INFO_PAGE_FAULTS' | 'FTS_DISK_UTILIZATION' | 'FTS_MEMORY_MAPPED' | 'FTS_MEMORY_RESIDENT' | 'FTS_MEMORY_VIRTUAL' | 'FTS_PROCESS_CPU_KERNEL' | 'FTS_PROCESS_CPU_USER' | 'FTS_PROCESS_NORMALIZED_CPU_KERNEL' | 'FTS_PROCESS_NORMALIZED_CPU_USER' | 'GLOBAL_ACCESSES_NOT_IN_MEMORY' | 'GLOBAL_LOCK_CURRENT_QUEUE_READERS' | 'GLOBAL_LOCK_CURRENT_QUEUE_TOTAL' | 'GLOBAL_LOCK_CURRENT_QUEUE_WRITERS' | 'GLOBAL_PAGE_FAULT_EXCEPTIONS_THROWN' | 'INDEX_COUNTERS_BTREE_ACCESSES' | 'INDEX_COUNTERS_BTREE_HITS' | 'INDEX_COUNTERS_BTREE_MISS_RATIO' | 'INDEX_COUNTERS_BTREE_MISSES' | 'JOURNALING_COMMITS_IN_WRITE_LOCK' | 'JOURNALING_MB' | 'JOURNALING_WRITE_DATA_FILES_MB' | 'MAX_PROCESS_CPU_CHILDREN_KERNEL' | 'MAX_PROCESS_CPU_CHILDREN_USER' | 'MAX_PROCESS_CPU_KERNEL' | 'MAX_PROCESS_CPU_USER' | 'MAX_PROCESS_NORMALIZED_CPU_CHILDREN_KERNEL' | 'MAX_PROCESS_NORMALIZED_CPU_CHILDREN_USER' | 'MAX_PROCESS_NORMALIZED_CPU_KERNEL' | 'MAX_PROCESS_NORMALIZED_CPU_USER' | 'MAX_SWAP_USAGE_FREE' | 'MAX_SWAP_USAGE_USED ' | 'MAX_SYSTEM_CPU_GUEST' | 'MAX_SYSTEM_CPU_IOWAIT' | 'MAX_SYSTEM_CPU_IRQ' | 'MAX_SYSTEM_CPU_KERNEL' | 'MAX_SYSTEM_CPU_SOFTIRQ' | 'MAX_SYSTEM_CPU_STEAL' | 'MAX_SYSTEM_CPU_USER' | 'MAX_SYSTEM_MEMORY_AVAILABLE' | 'MAX_SYSTEM_MEMORY_FREE' | 'MAX_SYSTEM_MEMORY_USED' | 'MAX_SYSTEM_NETWORK_IN' | 'MAX_SYSTEM_NETWORK_OUT' | 'MAX_SYSTEM_NORMALIZED_CPU_GUEST' | 'MAX_SYSTEM_NORMALIZED_CPU_IOWAIT' | 'MAX_SYSTEM_NORMALIZED_CPU_IRQ' | 'MAX_SYSTEM_NORMALIZED_CPU_KERNEL' | 'MAX_SYSTEM_NORMALIZED_CPU_NICE' | 'MAX_SYSTEM_NORMALIZED_CPU_SOFTIRQ' | 'MAX_SYSTEM_NORMALIZED_CPU_STEAL' | 'MAX_SYSTEM_NORMALIZED_CPU_USER' | 'MEMORY_MAPPED' | 'MEMORY_RESIDENT' | 'MEMORY_VIRTUAL' | 'NETWORK_BYTES_IN' | 'NETWORK_BYTES_OUT' | 'NETWORK_NUM_REQUESTS' | 'OP_EXECUTION_TIME_COMMANDS' | 'OP_EXECUTION_TIME_READS' | 'OP_EXECUTION_TIME_WRITES' | 'OPCOUNTER_CMD' | 'OPCOUNTER_DELETE' | 'OPCOUNTER_GETMORE' | 'OPCOUNTER_INSERT' | 'OPCOUNTER_QUERY' | 'OPCOUNTER_REPL_CMD' | 'OPCOUNTER_REPL_DELETE' | 'OPCOUNTER_REPL_INSERT' | 'OPCOUNTER_REPL_UPDATE' | 'OPCOUNTER_UPDATE' | 'OPERATIONS_SCAN_AND_ORDER' | 'OPLOG_MASTER_LAG_TIME_DIFF' | 'OPLOG_MASTER_TIME' | 'OPLOG_RATE_GB_PER_HOUR' | 'OPLOG_SLAVE_LAG_MASTER_TIME' | 'OPLOG_REPLICATION_LAG' | 'PROCESS_CPU_CHILDREN_KERNEL' | 'PROCESS_CPU_CHILDREN_USER' | 'PROCESS_CPU_KERNEL' | 'PROCESS_CPU_USER' | 'PROCESS_NORMALIZED_CPU_CHILDREN_KERNEL' | 'PROCESS_NORMALIZED_CPU_CHILDREN_USER' | 'PROCESS_NORMALIZED_CPU_KERNEL' | 'PROCESS_NORMALIZED_CPU_USER' | 'QUERY_EXECUTOR_SCANNED' | 'QUERY_EXECUTOR_SCANNED_OBJECTS' | 'QUERY_TARGETING_SCANNED_OBJECTS_PER_RETURNED' | 'QUERY_TARGETING_SCANNED_PER_RETURNED' | 'RESTARTS_IN_LAST_HOUR' | 'SWAP_USAGE_FREE' | 'SWAP_USAGE_USED' | 'SYSTEM_CPU_GUEST' | 'SYSTEM_CPU_IOWAIT' | 'SYSTEM_CPU_IRQ' | 'SYSTEM_CPU_KERNEL' | 'SYSTEM_CPU_NICE' | 'SYSTEM_CPU_SOFTIRQ' | 'SYSTEM_CPU_STEAL' | 'SYSTEM_CPU_USER' | 'SYSTEM_MEMORY_AVAILABLE' | 'SYSTEM_MEMORY_FREE' | 'SYSTEM_MEMORY_USED' | 'SYSTEM_NETWORK_IN' | 'SYSTEM_NETWORK_OUT' | 'SYSTEM_NORMALIZED_CPU_GUEST' | 'SYSTEM_NORMALIZED_CPU_IOWAIT' | 'SYSTEM_NORMALIZED_CPU_IRQ' | 'SYSTEM_NORMALIZED_CPU_KERNEL' | 'SYSTEM_NORMALIZED_CPU_NICE' | 'SYSTEM_NORMALIZED_CPU_SOFTIRQ' | 'SYSTEM_NORMALIZED_CPU_STEAL' | 'SYSTEM_NORMALIZED_CPU_USER' | 'TICKETS_AVAILABLE_READS' | 'TICKETS_AVAILABLE_WRITE'>, period?: Date, _options?: Configuration): Promise<ApiMeasurementsGeneralViewAtlas> {
        const result = this.api.getHostMeasurements(groupId, processId, envelope, pretty, m, period, _options);
        return result.toPromise();
    }

    /**
     * Returns the Atlas Search metrics data series within the provided time range for one namespace and index name on the specified process.
     * Return Atlas Search Metrics for One Index in One Specified Namespace
     * @param processId Combination of hostname and IANA port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (mongod or mongos). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param indexName Human-readable label that identifies the index.
     * @param databaseName Human-readable label that identifies the database.
     * @param collectionName Human-readable label that identifies the collection.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param granularity Duration that specifies the interval at which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC.
     * @param metrics List that contains the measurements that MongoDB Atlas reports for the associated data series.
     * @param period Duration over which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC. Include this parameter when you do not set **start** and **end**.
     * @param start Date and time when MongoDB Cloud begins reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @param end Date and time when MongoDB Cloud stops reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public getIndexMetrics(processId: string, indexName: string, databaseName: string, collectionName: string, groupId: string, granularity: string, metrics: Set<'INDEX_SIZE_ON_DISK' | 'NUMBER_OF_DELETES' | 'NUMBER_OF_ERROR_QUERIES' | 'NUMBER_OF_GETMORE_COMMANDS' | 'NUMBER_OF_INDEX_FIELDS' | 'NUMBER_OF_INSERTS' | 'NUMBER_OF_SUCCESS_QUERIES' | 'NUMBER_OF_UPDATES' | 'REPLICATION_LAG' | 'TOTAL_NUMBER_OF_QUERIES'>, period?: string, start?: Date, end?: Date, envelope?: boolean, _options?: Configuration): Promise<ApiMeasurementsIndexesView> {
        const result = this.api.getIndexMetrics(processId, indexName, databaseName, collectionName, groupId, granularity, metrics, period, start, end, envelope, _options);
        return result.toPromise();
    }

    /**
     * Returns the Atlas Search hardware and status data series within the provided time range for one process in the specified project.
     * Return Atlas Search Hardware and Status Metrics
     * @param processId Combination of hostname and IANA port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (mongod or mongos). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param granularity Duration that specifies the interval at which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC.
     * @param metrics List that contains the metrics that you want MongoDB Atlas to report for the associated data series. If you don&#39;t set this parameter, this resource returns all hardware and status metrics for the associated data series.
     * @param period Duration over which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC. Include this parameter when you do not set **start** and **end**.
     * @param start Date and time when MongoDB Cloud begins reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @param end Date and time when MongoDB Cloud stops reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public getMeasurements(processId: string, groupId: string, granularity: string, metrics: Set<'FTS_DISK_USAGE' | 'FTS_PROCESS_CPU_KERNEL' | 'FTS_PROCESS_CPU_USER' | 'FTS_PROCESS_NORMALIZED_CPU_KERNEL' | 'FTS_PROCESS_NORMALIZED_CPU_USER' | 'FTS_PROCESS_RESIDENT_MEMORY' | 'FTS_PROCESS_SHARED_MEMORY' | 'FTS_PROCESS_VIRTUAL_MEMORY' | 'JVM_CURRENT_MEMORY' | 'JVM_MAX_MEMORY'>, period?: string, start?: Date, end?: Date, envelope?: boolean, _options?: Configuration): Promise<ApiMeasurementsNonIndexView> {
        const result = this.api.getMeasurements(processId, groupId, granularity, metrics, period, start, end, envelope, _options);
        return result.toPromise();
    }

    /**
     * Returns details of all processes for the specified project. A MongoDB process can be either a `mongod` or `mongos`. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All MongoDB Processes in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listAtlasProcesses(groupId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<PaginatedHostViewAtlas> {
        const result = this.api.listAtlasProcesses(groupId, envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the list of databases running on the specified host for the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Available Databases for One MongoDB Process
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param processId Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listDatabases(groupId: string, processId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<PaginatedDatabaseView> {
        const result = this.api.listDatabases(groupId, processId, envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the measurements of one disk or partition for the specified host for the specified project. Returned value can be one of the following: - Throughput of I/O operations for the disk partition used for the MongoDB process - Percentage of time during which requests the partition issued and serviced - Latency per operation type of the disk partition used for the MongoDB process - Amount of free and used disk space on the disk partition used for the MongoDB process   To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Measurements of One Disk
     * @param partitionName Human-readable label of the disk or partition to which the measurements apply.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param processId Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public listDiskMeasurements(partitionName: string, groupId: string, processId: string, envelope?: boolean, _options?: Configuration): Promise<ApiDiskPartitionView> {
        const result = this.api.listDiskMeasurements(partitionName, groupId, processId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Returns the list of disks or partitions for the specified host for the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Available Disks for One MongoDB Process
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param processId Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listDiskPartitions(groupId: string, processId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<PaginatedDiskPartitionView> {
        const result = this.api.listDiskPartitions(groupId, processId, envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the Atlas Search index metrics within the specified time range for one namespace in the specified process.
     * Return All Atlas Search Index Metrics for One Namespace
     * @param processId Combination of hostname and IANA port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (mongod or mongos). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param databaseName Human-readable label that identifies the database.
     * @param collectionName Human-readable label that identifies the collection.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param granularity Duration that specifies the interval at which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC.
     * @param metrics List that contains the measurements that MongoDB Atlas reports for the associated data series.
     * @param period Duration over which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC. Include this parameter when you do not set **start** and **end**.
     * @param start Date and time when MongoDB Cloud begins reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @param end Date and time when MongoDB Cloud stops reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public listIndexMetrics(processId: string, databaseName: string, collectionName: string, groupId: string, granularity: string, metrics: Set<'INDEX_SIZE_ON_DISK' | 'NUMBER_OF_DELETES' | 'NUMBER_OF_ERROR_QUERIES' | 'NUMBER_OF_GETMORE_COMMANDS' | 'NUMBER_OF_INDEX_FIELDS' | 'NUMBER_OF_INSERTS' | 'NUMBER_OF_SUCCESS_QUERIES' | 'NUMBER_OF_UPDATES' | 'REPLICATION_LAG' | 'TOTAL_NUMBER_OF_QUERIES'>, period?: string, start?: Date, end?: Date, envelope?: boolean, _options?: Configuration): Promise<ApiMeasurementsIndexesView> {
        const result = this.api.listIndexMetrics(processId, databaseName, collectionName, groupId, granularity, metrics, period, start, end, envelope, _options);
        return result.toPromise();
    }

    /**
     * Return all Atlas Search metric types available for one process in the specified project.
     * Return All Atlas Search Metric Types for One Process
     * @param processId Combination of hostname and IANA port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (mongod or mongos). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public listMetricTypes(processId: string, groupId: string, envelope?: boolean, _options?: Configuration): Promise<ApiFTSMetricsView> {
        const result = this.api.listMetricTypes(processId, groupId, envelope, _options);
        return result.toPromise();
    }


}



import { ObservableMultiCloudClustersApi } from './ObservableAPI';

import { MultiCloudClustersApiRequestFactory, MultiCloudClustersApiResponseProcessor} from "../apis/MultiCloudClustersApi";
export class PromiseMultiCloudClustersApi {
    private api: ObservableMultiCloudClustersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MultiCloudClustersApiRequestFactory,
        responseProcessor?: MultiCloudClustersApiResponseProcessor
    ) {
        this.api = new ObservableMultiCloudClustersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one cluster in the specific project. Clusters contain a group of hosts that maintain the same data set. This resource can create multi-cloud clusters. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List. Deprecated versions: v2-{2023-01-01}
     * Create One Multi-Cloud Cluster from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterDescriptionV15 Cluster to create in the specific project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createCluster(groupId: string, clusterDescriptionV15: ClusterDescriptionV15, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ClusterDescriptionV15> {
        const result = this.api.createCluster(groupId, clusterDescriptionV15, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Removes one cluster with advanced features from the specified project. The cluster must have termination protection disabled in order to be deleted. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Remove One Multi-Cloud Cluster from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param retainBackups Flag that indicates whether to retain backup snapshots for the deleted dedicated cluster.
     */
    public deleteCluster(groupId: string, clusterName: string, envelope?: boolean, retainBackups?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCluster(groupId, clusterName, envelope, retainBackups, _options);
        return result.toPromise();
    }

    /**
     * Returns the details for one cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. The response includes multi-cloud clusters. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List. Deprecated versions: v2-{2023-01-01}
     * Return One Multi-Cloud Cluster from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies this advanced cluster.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getCluster(groupId: string, clusterName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ClusterDescriptionV15> {
        const result = this.api.getCluster(groupId, clusterName, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the details for all clusters in the specific project to which you have access. Clusters contain a group of hosts that maintain the same data set. The response includes multi-cloud clusters. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List. Deprecated versions: v2-{2023-01-01}
     * Return All Multi-Cloud Clusters from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listClusters(groupId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<PaginatedClusterDescriptionV15View> {
        const result = this.api.listClusters(groupId, envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }

    /**
     * Starts a failover test for the specified cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. A failover test checks how MongoDB Cloud handles the failure of the cluster's primary node. During the test, MongoDB Cloud shuts down the primary node and elects a new primary. To use this resource, the requesting API Key must have the Project Cluster Manager role. This resource doesn't require the API Key to have an Access List. Deprecated versions: v2-{2023-01-01}
     * Test Failover for One Multi-Cloud Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public testFailover(groupId: string, clusterName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.testFailover(groupId, clusterName, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Updates the details for one cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. This resource can update multi-cloud clusters. To update a cluster's termination protection, the requesting API Key must have the Project Owner role. For all other updates, the requesting API Key must have the Project Cluster Manager role. This resource doesn't require the API Key to have an Access List. Deprecated versions: v2-{2023-01-01}
     * Modify One Multi-Cloud Cluster from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the advanced cluster to modify.
     * @param clusterDescriptionV15 Cluster to update in the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public updateCluster(groupId: string, clusterName: string, clusterDescriptionV15: ClusterDescriptionV15, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ClusterDescriptionV15> {
        const result = this.api.updateCluster(groupId, clusterName, clusterDescriptionV15, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableNetworkPeeringApi } from './ObservableAPI';

import { NetworkPeeringApiRequestFactory, NetworkPeeringApiResponseProcessor} from "../apis/NetworkPeeringApi";
export class PromiseNetworkPeeringApi {
    private api: ObservableNetworkPeeringApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NetworkPeeringApiRequestFactory,
        responseProcessor?: NetworkPeeringApiResponseProcessor
    ) {
        this.api = new ObservableNetworkPeeringApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one new network peering connection in the specified project. Network peering allows multiple cloud-hosted applications to securely connect to the same project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List. To learn more about considerations and prerequisites, see the Network Peering Documentation.
     * Create One New Network Peering Connection
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param apiAtlasContainerPeerViewRequest Create one network peering connection.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createPeeringConnection(groupId: string, apiAtlasContainerPeerViewRequest: ApiAtlasContainerPeerViewRequest, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<CreatePeeringConnection200Response> {
        const result = this.api.createPeeringConnection(groupId, apiAtlasContainerPeerViewRequest, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Creates one new network peering container in the specified project. MongoDB Cloud can deploy Network Peering connections in a network peering container. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Create One New Network Peering Container
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudProviderContainer Creates one new network peering container in the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createPeeringContainer(groupId: string, cloudProviderContainer: CloudProviderContainer, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<CloudProviderContainer> {
        const result = this.api.createPeeringContainer(groupId, cloudProviderContainer, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Removes one network peering connection in the specified project. If you Removes the last network peering connection associated with a project, MongoDB Cloud also removes any AWS security groups from the project IP access list. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Remove One Existing Network Peering Connection
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param peerId Unique 24-hexadecimal digit string that identifies the network peering connection that you want to delete.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deletePeeringConnection(groupId: string, peerId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deletePeeringConnection(groupId, peerId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Removes one network peering container in the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Remove One Network Peering Container
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param containerId Unique 24-hexadecimal digit string that identifies the MongoDB Cloud network container that you want to remove.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deletePeeringContainer(groupId: string, containerId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deletePeeringContainer(groupId, containerId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Disables Connect via Peering Only mode for the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Disable Connect via Peering Only Mode for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param privateIPModeView Disables Connect via Peering Only mode for the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public disablePeering(groupId: string, privateIPModeView: PrivateIPModeView, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<PrivateIPModeView> {
        const result = this.api.disablePeering(groupId, privateIPModeView, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns details about one specified network peering connection in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Network Peering Connection in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param peerId Unique 24-hexadecimal digit string that identifies the network peering connection that you want to retrieve.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getPeeringConnection(groupId: string, peerId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<GetPeeringConnection200Response> {
        const result = this.api.getPeeringConnection(groupId, peerId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns details about one network peering container in one specified project. Network peering containers contain network peering connections. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Network Peering Container
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param containerId Unique 24-hexadecimal digit string that identifies the MongoDB Cloud network container that you want to remove.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getPeeringContainer(groupId: string, containerId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<CloudProviderContainer> {
        const result = this.api.getPeeringContainer(groupId, containerId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns details about all network peering connections in the specified project. Network peering allows multiple cloud-hosted applications to securely connect to the same project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Network Peering Connections in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param providerName Cloud service provider to use for this VPC peering connection.
     */
    public listPeeringConnections(groupId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, providerName?: 'AWS' | 'AZURE' | 'GCP', _options?: Configuration): Promise<ListPeeringConnections200Response> {
        const result = this.api.listPeeringConnections(groupId, envelope, includeCount, itemsPerPage, pageNum, pretty, providerName, _options);
        return result.toPromise();
    }

    /**
     * Returns details about all network peering containers in the specified project for the specified cloud provider. If you do not specify the cloud provider, MongoDB Cloud returns details about all network peering containers in the project for Amazon Web Services (AWS). To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Network Peering Containers in One Project for One Cloud Provider
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param providerName Cloud service provider that serves the desired network peering containers.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listPeeringContainerByCloudProvider(groupId: string, providerName: 'AWS' | 'AZURE' | 'GCP', envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<PaginatedCloudProviderContainerView> {
        const result = this.api.listPeeringContainerByCloudProvider(groupId, providerName, envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns details about all network peering containers in the specified project. Network peering containers contain network peering connections. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Network Peering Containers in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listPeeringContainers(groupId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<PaginatedCloudProviderContainerView> {
        const result = this.api.listPeeringContainers(groupId, envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }

    /**
     * Updates one specified network peering connection in the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Update One New Network Peering Connection
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param peerId Unique 24-hexadecimal digit string that identifies the network peering connection that you want to update.
     * @param apiAtlasContainerPeerViewRequest Modify one network peering connection.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public updatePeeringConnection(groupId: string, peerId: string, apiAtlasContainerPeerViewRequest: ApiAtlasContainerPeerViewRequest, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<GetPeeringConnection200Response> {
        const result = this.api.updatePeeringConnection(groupId, peerId, apiAtlasContainerPeerViewRequest, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Updates the network details and labels of one specified network peering container in the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Update One Network Peering Container
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param containerId Unique 24-hexadecimal digit string that identifies the MongoDB Cloud network container that you want to remove.
     * @param cloudProviderContainer Updates the network details and labels of one specified network peering container in the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public updatePeeringContainer(groupId: string, containerId: string, cloudProviderContainer: CloudProviderContainer, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<CloudProviderContainer> {
        const result = this.api.updatePeeringContainer(groupId, containerId, cloudProviderContainer, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Verifies if someone set the specified project to **Connect via Peering Only** mode. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Verify Connect via Peering Only Mode for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public verifyConnectViaPeeringOnlyModeForOneProject(groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<PrivateIPModeView> {
        const result = this.api.verifyConnectViaPeeringOnlyModeForOneProject(groupId, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableOnlineArchiveApi } from './ObservableAPI';

import { OnlineArchiveApiRequestFactory, OnlineArchiveApiResponseProcessor} from "../apis/OnlineArchiveApi";
export class PromiseOnlineArchiveApi {
    private api: ObservableOnlineArchiveApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OnlineArchiveApiRequestFactory,
        responseProcessor?: OnlineArchiveApiResponseProcessor
    ) {
        this.api = new ObservableOnlineArchiveApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one online archive. This archive stores data from one cluster within one project. To use this resource, the requesting API Key must have the Project Data Access Admin role. This resource doesn't require the API Key to have an Access List.
     * Create One Online Archive
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster that contains the collection for which you want to create one online archive.
     * @param onlineArchive Creates one online archive.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createOnlineArchive(groupId: string, clusterName: string, onlineArchive: OnlineArchive, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<OnlineArchive> {
        const result = this.api.createOnlineArchive(groupId, clusterName, onlineArchive, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Removes one online archive. This archive stores data from one cluster within one project. To use this resource, the requesting API Key must have the Project Data Access Admin role. This resource doesn't require the API Key to have an Access List.
     * Remove One Online Archive
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param archiveId Unique 24-hexadecimal digit string that identifies the online archive to delete.
     * @param clusterName Human-readable label that identifies the cluster that contains the collection from which you want to remove an online archive.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deleteOnlineArchive(groupId: string, archiveId: string, clusterName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteOnlineArchive(groupId, archiveId, clusterName, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Downloads query logs for the specified online archive. To use this resource, the requesting API Key must have the Project Data Access Read Only or higher role. This resource doesn't require the API Key to have an Access List.
     * Download Online Archive Query Logs
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster that contains the collection for which you want to return the query logs from one online archive.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param startDate Date and time that specifies the starting point for the range of log messages to return. This resource expresses this value in the number of seconds that have elapsed since the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time).
     * @param endDate Date and time that specifies the end point for the range of log messages to return. This resource expresses this value in the number of seconds that have elapsed since the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time).
     * @param archiveOnly Flag that indicates whether to download logs for queries against your online archive only or both your online archive and cluster.
     */
    public downloadOnlineArchiveQueryLogs(groupId: string, clusterName: string, envelope?: boolean, startDate?: number, endDate?: number, archiveOnly?: boolean, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.downloadOnlineArchiveQueryLogs(groupId, clusterName, envelope, startDate, endDate, archiveOnly, _options);
        return result.toPromise();
    }

    /**
     * Returns one online archive for one cluster. This archive stores data from one cluster within one project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Online Archive
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param archiveId Unique 24-hexadecimal digit string that identifies the online archive to return.
     * @param clusterName Human-readable label that identifies the cluster that contains the specified collection from which Application created the online archive.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getOnlineArchive(groupId: string, archiveId: string, clusterName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<OnlineArchive> {
        const result = this.api.getOnlineArchive(groupId, archiveId, clusterName, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns details of all online archives. This archive stores data from one cluster within one project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Online Archives for One Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster that contains the collection for which you want to return the online archives.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listOnlineArchives(groupId: string, clusterName: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<PaginatedOnlineArchiveView> {
        const result = this.api.listOnlineArchives(groupId, clusterName, envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }

    /**
     * Updates, pauses, or resumes one online archive. This archive stores data from one cluster within one project. To use this resource, the requesting API Key must have the Project Data Access Admin role. This resource doesn't require the API Key to have an Access List.
     * Update One Online Archive
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param archiveId Unique 24-hexadecimal digit string that identifies the online archive to update.
     * @param clusterName Human-readable label that identifies the cluster that contains the specified collection from which Application created the online archive.
     * @param onlineArchive Updates, pauses, or resumes one online archive.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public updateOnlineArchive(groupId: string, archiveId: string, clusterName: string, onlineArchive: OnlineArchive, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<OnlineArchive> {
        const result = this.api.updateOnlineArchive(groupId, archiveId, clusterName, onlineArchive, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableOrganizationsApi } from './ObservableAPI';

import { OrganizationsApiRequestFactory, OrganizationsApiResponseProcessor} from "../apis/OrganizationsApi";
export class PromiseOrganizationsApi {
    private api: ObservableOrganizationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationsApiRequestFactory,
        responseProcessor?: OrganizationsApiResponseProcessor
    ) {
        this.api = new ObservableOrganizationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one organization in MongoDB Cloud and links it to the requesting API Key's organization. To use this resource, the requesting API Key must have the Organization Owner role. The requesting API Key's organization must be a paying organization. To learn more, see [Configure a Paying Organization](https://www.mongodb.com/docs/atlas/billing/#configure-a-paying-organization) in the MongoDB Atlas documentation. This resource doesn't require the API Key to have an API Access List.
     * Create One Organization
     * @param createOrganizationRequest Organization that you want to create.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createOrganization(createOrganizationRequest: CreateOrganizationRequest, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<CreateOrganizationResponse> {
        const result = this.api.createOrganization(createOrganizationRequest, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Invites one MongoDB Cloud user to join the specified organization. The user must accept the invitation to access information within the specified organization. To use this resource, the requesting API Key must have the Organization User Admin role. This resource doesn't require the API Key to have an Access List.
     * Invite One MongoDB Cloud User to Join One Atlas Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param apiOrganizationInvitationRequestView Invites one MongoDB Cloud user to join the specified organization.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createOrganizationInvitation(orgId: string, apiOrganizationInvitationRequestView: ApiOrganizationInvitationRequestView, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiOrganizationInvitationView> {
        const result = this.api.createOrganizationInvitation(orgId, apiOrganizationInvitationRequestView, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Removes one specified organization. MongoDB Cloud imposes the following limits on this resource:   - Organizations with active projects cannot be removed.  - All projects in the organization must be removed before you can remove the organization.  To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Remove One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public deleteOrganization(orgId: string, envelope?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteOrganization(orgId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Cancels one pending invitation sent to the specified MongoDB Cloud user to join an organization. You can't cancel an invitation that the user accepted. To use this resource, the requesting API Key must have the Organization User Admin role. This resource doesn't require the API Key to have an Access List.
     * Cancel One Organization Invitation
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param invitationId Unique 24-hexadecimal digit string that identifies the invitation.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deleteOrganizationInvitation(orgId: string, invitationId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteOrganizationInvitation(orgId, invitationId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns one organization to which the requesting API key has access. To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an Access List.
     * Return One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getOrganization(orgId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiOrganizationView> {
        const result = this.api.getOrganization(orgId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the details of one pending invitation to the specified organization. To use this resource, the requesting API Key must have the Organization User Admin role. This resource doesn't require the API Key to have an Access List.
     * Return One Organization Invitation
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param invitationId Unique 24-hexadecimal digit string that identifies the invitation.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public getOrganizationInvitation(orgId: string, invitationId: string, envelope?: boolean, _options?: Configuration): Promise<ApiOrganizationInvitationView> {
        const result = this.api.getOrganizationInvitation(orgId, invitationId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Returns details about the specified organization's settings. To use this resource, the requesting API Key must have the Organization Owner role. This resource does not require the API Key to have an API access list.
     * Return Settings for One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getOrganizationSettings(orgId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<OrganizationSettings> {
        const result = this.api.getOrganizationSettings(orgId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all pending invitations to the specified organization. To use this resource, the requesting API Key must have the Organization User Admin role. This resource doesn't require the API Key to have an Access List.
     * Return All Organization Invitations
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param username Email address of the user account invited to this organization. If you exclude this parameter, this resource returns all pending invitations.
     */
    public listOrganizationInvitations(orgId: string, envelope?: boolean, pretty?: boolean, username?: string, _options?: Configuration): Promise<Array<ApiOrganizationInvitationView>> {
        const result = this.api.listOrganizationInvitations(orgId, envelope, pretty, username, _options);
        return result.toPromise();
    }

    /**
     * Returns multiple projects in the specified organization. Each organization can have multiple projects. Use projects to:  - Isolate different environments, such as development, test, or production environments, from each other. - Associate different MongoDB Cloud users or teams with different environments, or give different permission to MongoDB Cloud users in different environments. - Maintain separate cluster security configurations. - Create different alert settings.  To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an Access List.
     * Return One or More Projects in One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param name Human-readable label of the project to use to filter the returned list. Performs a case-insensitive search for a project within the organization which is prefixed by the specified name.
     */
    public listOrganizationProjects(orgId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, name?: string, _options?: Configuration): Promise<PaginatedAtlasGroupView> {
        const result = this.api.listOrganizationProjects(orgId, envelope, includeCount, itemsPerPage, pageNum, pretty, name, _options);
        return result.toPromise();
    }

    /**
     * Returns details about the MongoDB Cloud users associated with the specified organization. Each MongoDB Cloud user returned must belong to the specified organization or to a project within the specified organization. To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an Access List.
     * Return All MongoDB Cloud Users in One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listOrganizationUsers(orgId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<PaginatedAppUserView> {
        const result = this.api.listOrganizationUsers(orgId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all organizations to which you belong. To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an Access List.
     * Return All Organizations
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param name Human-readable label of the organization to use to filter the returned list. Performs a case-insensitive search for an organization that starts with the specified name.
     */
    public listOrganizations(envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, name?: string, _options?: Configuration): Promise<PaginatedOrganizationView> {
        const result = this.api.listOrganizations(envelope, includeCount, itemsPerPage, pageNum, pretty, name, _options);
        return result.toPromise();
    }

    /**
     * Renames one organization. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Rename One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param apiOrganizationView Details to update on the specified organization.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public renameOrganization(orgId: string, apiOrganizationView: ApiOrganizationView, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiOrganizationView> {
        const result = this.api.renameOrganization(orgId, apiOrganizationView, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Updates the details of one pending invitation to the specified organization. To specify which invitation, provide the username of the invited user. To use this resource, the requesting API Key must have the Organization User Admin role. This resource doesn't require the API Key to have an Access List.
     * Update One Organization Invitation
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param apiOrganizationInvitationRequestView Updates the details of one pending invitation to the specified organization.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public updateOrganizationInvitation(orgId: string, apiOrganizationInvitationRequestView: ApiOrganizationInvitationRequestView, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiOrganizationInvitationView> {
        const result = this.api.updateOrganizationInvitation(orgId, apiOrganizationInvitationRequestView, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Updates the details of one pending invitation to the specified organization. To specify which invitation, provide the unique identification string for that invitation. Use the Return All Organization Invitations endpoint to retrieve IDs for all pending organization invitations. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Update One Organization Invitation by Invitation ID
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param invitationId Unique 24-hexadecimal digit string that identifies the invitation.
     * @param apiOrganizationInvitationUpdateRequestView Updates the details of one pending invitation to the specified organization.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public updateOrganizationInvitationById(orgId: string, invitationId: string, apiOrganizationInvitationUpdateRequestView: ApiOrganizationInvitationUpdateRequestView, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiOrganizationInvitationView> {
        const result = this.api.updateOrganizationInvitationById(orgId, invitationId, apiOrganizationInvitationUpdateRequestView, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Updates the organization's settings. To use this resource, the requesting API Key must have the Organization Owner role. This resource does not require the API Key to have an API access list.
     * Update Settings for One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param organizationSettings Details to update on the specified organization&#39;s settings.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public updateOrganizationSettings(orgId: string, organizationSettings: OrganizationSettings, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<OrganizationSettings> {
        const result = this.api.updateOrganizationSettings(orgId, organizationSettings, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservablePerformanceAdvisorApi } from './ObservableAPI';

import { PerformanceAdvisorApiRequestFactory, PerformanceAdvisorApiResponseProcessor} from "../apis/PerformanceAdvisorApi";
export class PromisePerformanceAdvisorApi {
    private api: ObservablePerformanceAdvisorApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PerformanceAdvisorApiRequestFactory,
        responseProcessor?: PerformanceAdvisorApiResponseProcessor
    ) {
        this.api = new ObservablePerformanceAdvisorApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Disables the slow operation threshold that MongoDB Cloud calculated for the specified project. The threshold determines which operations the Performance Advisor and Query Profiler considers slow. When disabled, MongoDB Cloud considers any operation that takes longer than 100 milliseconds to be slow. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Disable Managed Slow Operation Threshold
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public disableSlowOperationThresholding(groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.disableSlowOperationThresholding(groupId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Enables MongoDB Cloud to use its slow operation threshold for the specified project. The threshold determines which operations the Performance Advisor and Query Profiler considers slow. When enabled, MongoDB Cloud uses the average execution time for operations on your cluster to determine slow-running queries. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Enable Managed Slow Operation Threshold
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public enableSlowOperationThresholding(groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.enableSlowOperationThresholding(groupId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns log lines for slow queries that the Performance Advisor and Query Profiler identified. The Performance Advisor monitors queries that MongoDB considers slow and suggests new indexes to improve query performance. MongoDB Cloud bases the threshold for slow queries on the average time of operations on your cluster. This enables workload-relevant recommendations. To use this resource, the requesting API Key must have the Project Data Access Read Write role. This resource doesn't require the API Key to have an Access List.
     * Return Slow Queries
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param processId Combination of host and port that serves the MongoDB process. The host must be the hostname, FQDN, IPv4 address, or IPv6 address of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param duration Length of time expressed during which the query finds suggested indexes among the managed namespaces in the cluster. This parameter expresses its value in milliseconds.  - If you don&#39;t specify the **since** parameter, the endpoint returns data covering the duration before the current time. - If you specify neither the **duration** nor **since** parameters, the endpoint returns data from the previous 24 hours.
     * @param namespaces Namespaces from which to retrieve suggested indexes. A namespace consists of one database and one collection resource written as &#x60;.&#x60;: &#x60;&lt;database&gt;.&lt;collection&gt;&#x60;. To include multiple namespaces, pass the parameter multiple times delimited with an ampersand (&#x60;&amp;&#x60;) between each namespace. Omit this parameter to return results for all namespaces.
     * @param nLogs Maximum number of lines from the log to return.
     * @param since Date and time from which the query retrieves the suggested indexes. This parameter expresses its value in the number of seconds that have elapsed since the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time).  - If you don&#39;t specify the **duration** parameter, the endpoint returns data covering from the **since** value and the current time. - If you specify neither the **duration** nor the **since** parameters, the endpoint returns data from the previous 24 hours.
     */
    public listSlowQueries(groupId: string, processId: string, envelope?: boolean, pretty?: boolean, duration?: number, namespaces?: Array<string>, nLogs?: number, since?: number, _options?: Configuration): Promise<ApiPerformanceAdvisorSlowQueryListView> {
        const result = this.api.listSlowQueries(groupId, processId, envelope, pretty, duration, namespaces, nLogs, since, _options);
        return result.toPromise();
    }

    /**
     * Returns up to 20 namespaces for collections experiencing slow queries on the specified host. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Namespaces for One Host
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param processId Combination of host and port that serves the MongoDB process. The host must be the hostname, FQDN, IPv4 address, or IPv6 address of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param duration Length of time expressed during which the query finds suggested indexes among the managed namespaces in the cluster. This parameter expresses its value in milliseconds.  - If you don&#39;t specify the **since** parameter, the endpoint returns data covering the duration before the current time. - If you specify neither the **duration** nor **since** parameters, the endpoint returns data from the previous 24 hours.
     * @param since Date and time from which the query retrieves the suggested indexes. This parameter expresses its value in the number of seconds that have elapsed since the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time).  - If you don&#39;t specify the **duration** parameter, the endpoint returns data covering from the **since** value and the current time. - If you specify neither the **duration** nor the **since** parameters, the endpoint returns data from the previous 24 hours.
     */
    public listSlowQueryNamespaces(groupId: string, processId: string, envelope?: boolean, pretty?: boolean, duration?: number, since?: number, _options?: Configuration): Promise<ApiNamespacesView> {
        const result = this.api.listSlowQueryNamespaces(groupId, processId, envelope, pretty, duration, since, _options);
        return result.toPromise();
    }

    /**
     * Returns the indexes that the Performance Advisor suggests. The Performance Advisor monitors queries that MongoDB considers slow and suggests new indexes to improve query performance. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Suggested Indexes
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param processId Combination of host and port that serves the MongoDB process. The host must be the hostname, FQDN, IPv4 address, or IPv6 address of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param duration Length of time expressed during which the query finds suggested indexes among the managed namespaces in the cluster. This parameter expresses its value in milliseconds.  - If you don&#39;t specify the **since** parameter, the endpoint returns data covering the duration before the current time. - If you specify neither the **duration** nor **since** parameters, the endpoint returns data from the previous 24 hours.
     * @param namespaces Namespaces from which to retrieve suggested indexes. A namespace consists of one database and one collection resource written as &#x60;.&#x60;: &#x60;&lt;database&gt;.&lt;collection&gt;&#x60;. To include multiple namespaces, pass the parameter multiple times delimited with an ampersand (&#x60;&amp;&#x60;) between each namespace. Omit this parameter to return results for all namespaces.
     * @param nExamples Maximum number of example queries that benefit from the suggested index.
     * @param nIndexes Number that indicates the maximum indexes to suggest.
     * @param since Date and time from which the query retrieves the suggested indexes. This parameter expresses its value in the number of seconds that have elapsed since the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time).  - If you don&#39;t specify the **duration** parameter, the endpoint returns data covering from the **since** value and the current time. - If you specify neither the **duration** nor the **since** parameters, the endpoint returns data from the previous 24 hours.
     */
    public listSuggestedIndexes(groupId: string, processId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, duration?: number, namespaces?: Array<string>, nExamples?: number, nIndexes?: number, since?: number, _options?: Configuration): Promise<ApiPerformanceAdvisorResponseView> {
        const result = this.api.listSuggestedIndexes(groupId, processId, envelope, includeCount, itemsPerPage, pageNum, pretty, duration, namespaces, nExamples, nIndexes, since, _options);
        return result.toPromise();
    }


}



import { ObservablePrivateEndpointServicesApi } from './ObservableAPI';

import { PrivateEndpointServicesApiRequestFactory, PrivateEndpointServicesApiResponseProcessor} from "../apis/PrivateEndpointServicesApi";
export class PromisePrivateEndpointServicesApi {
    private api: ObservablePrivateEndpointServicesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PrivateEndpointServicesApiRequestFactory,
        responseProcessor?: PrivateEndpointServicesApiResponseProcessor
    ) {
        this.api = new ObservablePrivateEndpointServicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one private resource in the specified private resource service hosted from one cloud service provider. This cloud service provider manages the private resource service for the project. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Create One Private Endpoint for One Provider
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudProvider Cloud service provider that manages this private endpoint.
     * @param endpointServiceId Unique 24-hexadecimal digit string that identifies the private endpoint service for which you want to create a private endpoint.
     * @param createPrivateEndpointRequest Creates one private resource endpoint for the specified cloud service provider.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createPrivateEndpoint(groupId: string, cloudProvider: 'AWS' | 'AZURE' | 'GCP', endpointServiceId: string, createPrivateEndpointRequest: CreatePrivateEndpointRequest, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<Endpoint> {
        const result = this.api.createPrivateEndpoint(groupId, cloudProvider, endpointServiceId, createPrivateEndpointRequest, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Creates one private resource service for the specified cloud service provider. This cloud service provider manages the private resource service for the project. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Create One Private Endpoint Service for One Provider
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param createEndpointServiceRequest Creates one private resource service for the specified cloud service provider.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createPrivateEndpointService(groupId: string, createEndpointServiceRequest: CreateEndpointServiceRequest, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<EndpointService> {
        const result = this.api.createPrivateEndpointService(groupId, createEndpointServiceRequest, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Removes one private resource from the specified project. This cloud service provider manages the private resource service that manages the private resource that belongs to the project. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Remove One Private Endpoint for One Provider
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudProvider Cloud service provider that manages this private endpoint.
     * @param endpointId Unique string that identifies the private endpoint you want to delete. The format of the **endpointId** parameter differs for AWS and Azure. You must URL encode the **endpointId** for Azure private endpoints.
     * @param endpointServiceId Unique 24-hexadecimal digit string that identifies the private endpoint service from which you want to delete a private endpoint.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deletePrivateEndpoint(groupId: string, cloudProvider: 'AWS' | 'AZURE' | 'GCP', endpointId: string, endpointServiceId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deletePrivateEndpoint(groupId, cloudProvider, endpointId, endpointServiceId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Removes one private resource service from the specified project. This cloud service provider manages the private resource service that belongs to the project. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Remove One Private Endpoint Service for One Provider
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudProvider Cloud service provider that manages this private endpoint service.
     * @param endpointServiceId Unique 24-hexadecimal digit string that identifies the private endpoint service that you want to delete.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deletePrivateEndpointService(groupId: string, cloudProvider: 'AWS' | 'AZURE' | 'GCP', endpointServiceId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deletePrivateEndpointService(groupId, cloudProvider, endpointServiceId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the connection state of the specified private resource. The private resource service manages this private resource which belongs to one project hosted from one cloud service provider. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Private Endpoint for One Provider
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudProvider Cloud service provider that manages this private endpoint.
     * @param endpointId Unique string that identifies the private endpoint you want to return. The format of the **endpointId** parameter differs for AWS and Azure. You must URL encode the **endpointId** for Azure private endpoints.
     * @param endpointServiceId Unique 24-hexadecimal digit string that identifies the private endpoint service for which you want to return a private endpoint.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getPrivateEndpoint(groupId: string, cloudProvider: 'AWS' | 'AZURE' | 'GCP', endpointId: string, endpointServiceId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<Endpoint> {
        const result = this.api.getPrivateEndpoint(groupId, cloudProvider, endpointId, endpointServiceId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the name, interfaces, and state of the specified private resource service from one project. The cloud service provider hosted this private resource service that belongs to the project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Private Endpoint Service for One Provider
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudProvider Cloud service provider that manages this private endpoint service.
     * @param endpointServiceId Unique 24-hexadecimal digit string that identifies the private endpoint service that you want to return.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getPrivateEndpointService(groupId: string, cloudProvider: 'AWS' | 'AZURE' | 'GCP', endpointServiceId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<EndpointService> {
        const result = this.api.getPrivateEndpointService(groupId, cloudProvider, endpointServiceId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Checks whether each region in the specified cloud service provider can create multiple private resources per region. The cloud service provider manages the private resource for the project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Regionalized Private Endpoint Status
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getRegionalizedPrivateEndpointSetting(groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ProjectSettingItemView> {
        const result = this.api.getRegionalizedPrivateEndpointSetting(groupId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the name, interfaces, and state of all private resource services for the specified cloud service provider. This cloud service provider manages the private resource service for the project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Private Endpoint Services for One Provider
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudProvider Cloud service provider that manages this private endpoint service.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listPrivateEndpointServices(groupId: string, cloudProvider: 'AWS' | 'AZURE' | 'GCP', envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<PaginatedPrivateLinkConnectionView> {
        const result = this.api.listPrivateEndpointServices(groupId, cloudProvider, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Enables or disables the ability can create multiple private resources per region in all cloud service providers in one project. The cloud service provider manages the private resource for the project. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.
     * Toggle Regionalized Private Endpoint Status
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param projectSettingItemView Enables or disables the ability can create multiple private resources per region in all cloud service providers in one project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public toggleRegionalizedPrivateEndpointSetting(groupId: string, projectSettingItemView: ProjectSettingItemView, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ProjectSettingItemView> {
        const result = this.api.toggleRegionalizedPrivateEndpointSetting(groupId, projectSettingItemView, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableProgrammaticAPIKeysApi } from './ObservableAPI';

import { ProgrammaticAPIKeysApiRequestFactory, ProgrammaticAPIKeysApiResponseProcessor} from "../apis/ProgrammaticAPIKeysApi";
export class PromiseProgrammaticAPIKeysApi {
    private api: ObservableProgrammaticAPIKeysApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProgrammaticAPIKeysApiRequestFactory,
        responseProcessor?: ProgrammaticAPIKeysApiResponseProcessor
    ) {
        this.api = new ObservableProgrammaticAPIKeysApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Assigns the specified organization API key to the specified project. Users with the Project Owner role in the project associated with the API key can then use the organization API key to access the resources. To use this resource, the requesting API Key must have the Project User Admin role. This resource doesn't require the API Key to have an Access List.
     * Assign One Organization API Key to One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param apiUserId Unique 24-hexadecimal digit string that identifies this organization API key that you want to assign to one project.
     * @param apiUserRoleAssignment Organization API key to be assigned to the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public addProjectApiKey(groupId: string, apiUserId: string, apiUserRoleAssignment: Array<ApiUserRoleAssignment>, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiApiUserView> {
        const result = this.api.addProjectApiKey(groupId, apiUserId, apiUserRoleAssignment, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Creates one API key for the specified organization. An organization API key grants programmatic access to an organization. You can't use the API key to log into the console. To use this resource, the requesting API Key must have the Organization User Admin role. This resource doesn't require the API Key to have an Access List.
     * Create One Organization API Key
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param apiCreateApiKeyView Organization API Key to be created. This request requires a minimum of one of the two body parameters.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createApiKey(orgId: string, apiCreateApiKeyView: ApiCreateApiKeyView, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiApiUserView> {
        const result = this.api.createApiKey(orgId, apiCreateApiKeyView, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Creates the access list entries for the specified organization API key. Resources require all API requests originate from IP addresses on the API access list. To use this resource, the requesting API Key must have the Read Write role and an entry for the project access list.
     * Create Access List Entries for One Organization API Key
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param apiUserId Unique 24-hexadecimal digit string that identifies this organization API key for which you want to create a new access list entry.
     * @param apiUserAccessListView Access list entries to be created for the specified organization API key.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createApiKeyAccessList(orgId: string, apiUserId: string, apiUserAccessListView: Array<ApiUserAccessListView>, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<ApiUserAccessListView> {
        const result = this.api.createApiKeyAccessList(orgId, apiUserId, apiUserAccessListView, envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }

    /**
     * Creates and assigns the specified organization API key to the specified project. Users with the Project Owner role in the project associated with the API key can use the organization API key to access the resources. To use this resource, the requesting API Key must have the Project User Admin role. This resource doesn't require the API Key to have an Access List.
     * Create and Assign One Organization API Key to One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param apiCreateApiKeyView Organization API key to be created and assigned to the specified project. This request requires a minimum of one of the two body parameters.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createProjectApiKey(groupId: string, apiCreateApiKeyView: ApiCreateApiKeyView, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiApiUserView> {
        const result = this.api.createProjectApiKey(groupId, apiCreateApiKeyView, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Removes one organization API key from the specified organization. When you remove an API key from an organization, MongoDB Cloud also removes that key from any projects that use that key. To use this resource, the requesting API Key must have the Organization User Admin role. This resource doesn't require the API Key to have an Access List.
     * Remove One Organization API Key
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param apiUserId Unique 24-hexadecimal digit string that identifies this organization API key.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deleteApiKey(orgId: string, apiUserId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteApiKey(orgId, apiUserId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Removes the specified access list entry from the specified organization API key. Resources require all API requests originate from the IP addresses on the API access list. To use this resource, the requesting API Key must have the Read Write role and an entry for the project access list.
     * Remove One Access List Entry for One Organization API Key
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param apiUserId Unique 24-hexadecimal digit string that identifies this organization API key for which you want to remove access list entries.
     * @param ipAddress One IP address or multiple IP addresses represented as one CIDR block to limit requests to API resources in the specified organization. When adding a CIDR block with a subnet mask, such as 192.0.2.0/24, use the URL-encoded value %2F for the forward slash /.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deleteApiKeyAcessList(orgId: string, apiUserId: string, ipAddress: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteApiKeyAcessList(orgId, apiUserId, ipAddress, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns one organization API key. The organization API keys grant programmatic access to an organization. You can't use the API key to log into MongoDB Cloud through the user interface. To use this resource, the requesting API Key must have the  Organization Member role. This resource doesn't require the API Key to have an  Access List.
     * Return One Organization API Key
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param apiUserId Unique 24-hexadecimal digit string that identifies this organization API key that  you want to update.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getApiKey(orgId: string, apiUserId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiApiUserView> {
        const result = this.api.getApiKey(orgId, apiUserId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns one access list entry for the specified organization API key. Resources require  all API requests originate from IP addresses on the API access list. To use this resource,  the requesting API Key must have the Organization Member role. This resource  doesn't require the API Key to have an Access List.
     * Return One Access List Entry for One Organization API Key
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param ipAddress One IP address or multiple IP addresses represented as one CIDR block to limit  requests to API resources in the specified organization. When adding a CIDR block with a subnet mask, such as  192.0.2.0/24, use the URL-encoded value %2F for the forward slash /.
     * @param apiUserId Unique 24-hexadecimal digit string that identifies this organization API key for  which you want to return access list entries.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getApiKeyAccessList(orgId: string, ipAddress: string, apiUserId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiUserAccessListView> {
        const result = this.api.getApiKeyAccessList(orgId, ipAddress, apiUserId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all access list entries that you configured for the specified organization API key. To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an Access List.
     * Return All Access List Entries for One Organization API Key
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param apiUserId Unique 24-hexadecimal digit string that identifies this organization API key for which you want to return access list entries.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listApiKeyAccessListsEntries(orgId: string, apiUserId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<PaginatedApiUserAccessListView> {
        const result = this.api.listApiKeyAccessListsEntries(orgId, apiUserId, envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all organization API keys for the specified organization. The organization API keys grant programmatic access to an organization. You can't use the API key to log into MongoDB Cloud through the console. To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an Access List.
     * Return All Organization API Keys
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listApiKeys(orgId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<PaginatedApiApiUserView> {
        const result = this.api.listApiKeys(orgId, envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all organization API keys that you assigned to the specified project. Users with the Project Owner role in the project associated with the API key can use the organization API key to access the resources. To use this resource, the requesting API Key must have the Project User Admin role. This resource doesn't require the API Key to have an Access List.
     * Return All Organization API Keys Assigned to One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listProjectApiKeys(groupId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<PaginatedApiApiUserView> {
        const result = this.api.listProjectApiKeys(groupId, envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }

    /**
     * Removes one organization API key from the specified project. To use this resource, the requesting API Key must have the Project User Admin role. This resource doesn't require the API Key to have an Access List.
     * Unassign One Organization API Key from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param apiUserId Unique 24-hexadecimal digit string that identifies this organization API key that you want to unassign from one project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public removeProjectApiKey(groupId: string, apiUserId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.removeProjectApiKey(groupId, apiUserId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Updates one organization API key in the specified organization. The organization API keys  grant programmatic access to an organization. To use this resource, the requesting  API Key must have the Organization User Admin role. This resource doesn't require  the API Key to have an Access List.
     * Update One Organization API Key
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param apiUserId Unique 24-hexadecimal digit string that identifies this organization API key you  want to update.
     * @param apiApiUserView Organization API key to be updated. This request requires a minimum of one of the two body parameters.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public updateApiKey(orgId: string, apiUserId: string, apiApiUserView: ApiApiUserView, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiApiUserView> {
        const result = this.api.updateApiKey(orgId, apiUserId, apiApiUserView, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Updates the roles of the organization API key that you specify for the project that you specify. You must specify at least one valid role for the project. The application removes any roles that you do not include in this request if they were previously set in the organization API key that you specify for the project.
     * Update Roles of One Organization API Key to One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param apiUserId Unique 24-hexadecimal digit string that identifies this organization API key that you want to unassign from one project.
     * @param apiCreateApiKeyView Organization API Key to be updated. This request requires a minimum of one of the two body parameters.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public updateApiKeyRoles(groupId: string, apiUserId: string, apiCreateApiKeyView: ApiCreateApiKeyView, pageNum?: number, itemsPerPage?: number, includeCount?: boolean, pretty?: boolean, envelope?: boolean, _options?: Configuration): Promise<ApiApiUserView> {
        const result = this.api.updateApiKeyRoles(groupId, apiUserId, apiCreateApiKeyView, pageNum, itemsPerPage, includeCount, pretty, envelope, _options);
        return result.toPromise();
    }


}



import { ObservableProjectIPAccessListApi } from './ObservableAPI';

import { ProjectIPAccessListApiRequestFactory, ProjectIPAccessListApiResponseProcessor} from "../apis/ProjectIPAccessListApi";
export class PromiseProjectIPAccessListApi {
    private api: ObservableProjectIPAccessListApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProjectIPAccessListApiRequestFactory,
        responseProcessor?: ProjectIPAccessListApiResponseProcessor
    ) {
        this.api = new ObservableProjectIPAccessListApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds one or more access list entries to the specified project. MongoDB Cloud only allows client connections to the cluster from entries in the project's IP access list. Write each entry as either one IP address or one CIDR-notated block of IP addresses. To use this resource, the requesting API Key must have the Project Owner or Project Charts Admin roles. This resource doesn't require the API Key to have an Access List. This resource replaces the whitelist resource. MongoDB Cloud removed whitelists in July 2021. Update your applications to use this new resource. The `/groups/{GROUP-ID}/accessList` endpoint manages the database IP access list. This endpoint is distinct from the `orgs/{ORG-ID}/apiKeys/{API-KEY-ID}/accesslist` endpoint, which manages the access list for MongoDB Cloud organizations. This endpoint doesn't support concurrent `POST` requests. You must submit multiple `POST` requests synchronously.
     * Add Entries to Project IP Access List
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param networkPermissionEntry One or more access list entries to add to the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createProjectIpAccessList(groupId: string, networkPermissionEntry: Array<NetworkPermissionEntry>, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<PaginatedNetworkAccessView> {
        const result = this.api.createProjectIpAccessList(groupId, networkPermissionEntry, envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }

    /**
     * Removes one access list entry from the specified project's IP access list. Each entry in the project's IP access list contains one IP address, one CIDR-notated block of IP addresses, or one AWS Security Group ID. MongoDB Cloud only allows client connections to the cluster from entries in the project's IP access list. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List. This resource replaces the whitelist resource. MongoDB Cloud removed whitelists in July 2021. Update your applications to use this new resource. The `/groups/{GROUP-ID}/accessList` endpoint manages the database IP access list. This endpoint is distinct from the `orgs/{ORG-ID}/apiKeys/{API-KEY-ID}/accesslist` endpoint, which manages the access list for MongoDB Cloud organizations.
     * Remove One Entry from One Project IP Access List
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param entryValue Access list entry that you want to remove from the project&#39;s IP access list. This value can use one of the following: one AWS security group ID, one IP address, or one CIDR block of addresses. For CIDR blocks that use a subnet mask, replace the forward slash (&#x60;/&#x60;) with its URL-encoded value (&#x60;%2F&#x60;). When you remove an entry from the IP access list, existing connections from the removed address or addresses may remain open for a variable amount of time. The amount of time it takes MongoDB Cloud to close the connection depends upon several factors, including:  - how your application established the connection, - how MongoDB Cloud or the driver using the address behaves, and - which protocol (like TCP or UDP) the connection uses.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deleteProjectIpAccessList(groupId: string, entryValue: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteProjectIpAccessList(groupId, entryValue, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the status of one project IP access list entry. This resource checks if the provided project IP access list entry applies to all cloud providers serving clusters from the specified project.
     * Return Status of One Project IP Access List Entry
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param entryValue Network address or cloud provider security construct that identifies which project access list entry to be verified.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getProjectIpAccessListStatus(groupId: string, entryValue: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<NetworkPermissionEntryStatus> {
        const result = this.api.getProjectIpAccessListStatus(groupId, entryValue, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns one access list entry from the specified project's IP access list. Each entry in the project's IP access list contains either one IP address or one CIDR-notated block of IP addresses. MongoDB Cloud only allows client connections to the cluster from entries in the project's IP access list. To use this resource, the requesting API Key must have the Project Read Only or Project Charts Admin roles. This resource doesn't require the API Key to have an Access List. This resource replaces the whitelist resource. MongoDB Cloud removed whitelists in July 2021. Update your applications to use this new resource. This endpoint (`/groups/{GROUP-ID}/accessList`) manages the Project IP Access List. It doesn't manage the access list for MongoDB Cloud organizations. TheProgrammatic API Keys endpoint (`/orgs/{ORG-ID}/apiKeys/{API-KEY-ID}/accesslist`) manages those access lists.
     * Return One Project IP Access List Entry
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param entryValue Access list entry that you want to return from the project&#39;s IP access list. This value can use one of the following: one AWS security group ID, one IP address, or one CIDR block of addresses. For CIDR blocks that use a subnet mask, replace the forward slash (&#x60;/&#x60;) with its URL-encoded value (&#x60;%2F&#x60;).
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getProjectIpList(groupId: string, entryValue: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<NetworkPermissionEntry> {
        const result = this.api.getProjectIpList(groupId, entryValue, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all access list entries from the specified project's IP access list. Each entry in the project's IP access list contains either one IP address or one CIDR-notated block of IP addresses. MongoDB Cloud only allows client connections to the cluster from entries in the project's IP access list. To use this resource, the requesting API Key must have the Project Read Only or Project Charts Admin roles. This resource doesn't require the API Key to have an Access List. This resource replaces the whitelist resource. MongoDB Cloud removed whitelists in July 2021. Update your applications to use this new resource. The `/groups/{GROUP-ID}/accessList` endpoint manages the database IP access list. This endpoint is distinct from the `orgs/{ORG-ID}/apiKeys/{API-KEY-ID}/accesslist` endpoint, which manages the access list for MongoDB Cloud organizations.
     * Return Project IP Access List
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listProjectIpAccessLists(groupId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<PaginatedNetworkAccessView> {
        const result = this.api.listProjectIpAccessLists(groupId, envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableProjectsApi } from './ObservableAPI';

import { ProjectsApiRequestFactory, ProjectsApiResponseProcessor} from "../apis/ProjectsApi";
export class PromiseProjectsApi {
    private api: ObservableProjectsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProjectsApiRequestFactory,
        responseProcessor?: ProjectsApiResponseProcessor
    ) {
        this.api = new ObservableProjectsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one project. Projects group clusters into logical collections that support an application environment, workload, or both. Each project can have its own users, teams, security, and alert settings. To use this resource, the requesting API Key must have the Read Write role. This resource doesn't require the API Key to have an Access List.
     * Create One Project
     * @param group Creates one project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param projectOwnerId Unique 24-hexadecimal digit string that identifies the MongoDB Cloud user to whom to grant the Project Owner role on the specified project. If you set this parameter, it overrides the default value of the oldest Organization Owner. 
     */
    public createProject(group: Group, envelope?: boolean, pretty?: boolean, projectOwnerId?: string, _options?: Configuration): Promise<Group> {
        const result = this.api.createProject(group, envelope, pretty, projectOwnerId, _options);
        return result.toPromise();
    }

    /**
     * Invites one MongoDB Cloud user to join the specified project. The MongoDB Cloud user must accept the invitation to access information within the specified project. To use this resource, the requesting API Key must have the Project User Admin role. This resource doesn't require the API Key to have an Access List.
     * Invite One MongoDB Cloud User to Join One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param apiGroupInvitationRequestView Invites one MongoDB Cloud user to join the specified project.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public createProjectInvitation(groupId: string, apiGroupInvitationRequestView: ApiGroupInvitationRequestView, pretty?: boolean, envelope?: boolean, _options?: Configuration): Promise<ApiGroupInvitationView> {
        const result = this.api.createProjectInvitation(groupId, apiGroupInvitationRequestView, pretty, envelope, _options);
        return result.toPromise();
    }

    /**
     * Removes the specified project. Projects group clusters into logical collections that support an application environment, workload, or both. Each project can have its own users, teams, security, and alert settings. You can delete a project only if there are no Online Archives for the clusters in the project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Remove One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deleteProject(groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteProject(groupId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Cancels one pending invitation sent to the specified MongoDB Cloud user to join a project. You can't cancel an invitation that the user accepted. To use this resource, the requesting API Key must have the Project User Admin role. This resource doesn't require the API Key to have an Access List.
     * Cancel One Project Invitation
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param invitationId Unique 24-hexadecimal digit string that identifies the invitation.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public deleteProjectInvitation(groupId: string, invitationId: string, envelope?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteProjectInvitation(groupId, invitationId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Removes the specified project limit. Depending on the limit, Atlas either resets the limit to its default value or removes the limit entirely. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Remove One Project Limit
     * @param limitName Human-readable label that identifies this project limit.  | Limit Name | Description | Default | | --- | --- | --- | | atlas.project.deployment.clusters | Limit on the number of clusters in this project | 25 | | atlas.project.deployment.nodesPerPrivateLinkRegion | Limit on the number of nodes per Private Link region in this project | 50 | | atlas.project.security.databaseAccess.customRoles | Limit on the number of custom roles in this project | 100 | | atlas.project.security.databaseAccess.users | Limit on the number of database users in this project | 100 | | atlas.project.security.networkAccess.crossRegionEntries | Limit on the number of cross-region network access entries in this project | 40 | | atlas.project.security.networkAccess.entries | Limit on the number of network access entries in this project | 200 | | dataFederation.bytesProcessed.query | Limit on the number of bytes processed during a single Data Federation query | N/A | | dataFederation.bytesProcessed.daily | Limit on the number of bytes processed across all Data Federation tenants for the current day | N/A | | dataFederation.bytesProcessed.weekly | Limit on the number of bytes processed across all Data Federation tenants for the current week | N/A | | dataFederation.bytesProcessed.monthly | Limit on the number of bytes processed across all Data Federation tenants for the current month | N/A | 
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deleteProjectLimit(limitName: 'atlas.project.security.databaseAccess.users' | 'atlas.project.deployment.clusters' | 'atlas.project.security.databaseAccess.customRoles' | 'atlas.project.security.networkAccess.entries' | 'atlas.project.security.networkAccess.crossRegionEntries' | 'atlas.project.deployment.nodesPerPrivateLinkRegion' | 'dataFederation.bytesProcessed.query' | 'dataFederation.bytesProcessed.daily' | 'dataFederation.bytesProcessed.weekly' | 'dataFederation.bytesProcessed.monthly', groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteProjectLimit(limitName, groupId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns details about the specified project. Projects group clusters into logical collections that support an application environment, workload, or both. Each project can have its own users, teams, security, and alert settings. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getProject(groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<Group> {
        const result = this.api.getProject(groupId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns details about the specified project. Projects group clusters into logical collections that support an application environment, workload, or both. Each project can have its own users, teams, security, and alert settings. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Project using Its Name
     * @param groupName Human-readable label that identifies this project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getProjectByName(groupName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<Group> {
        const result = this.api.getProjectByName(groupName, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the details of one pending invitation to the specified project. To use this resource, the requesting API Key must have the Project User Admin role. This resource doesn't require the API Key to have an Access List.
     * Return One Project Invitation
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param invitationId Unique 24-hexadecimal digit string that identifies the invitation.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getProjectInvitation(groupId: string, invitationId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiGroupInvitationView> {
        const result = this.api.getProjectInvitation(groupId, invitationId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the specified limit for the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Limit for One Project
     * @param limitName Human-readable label that identifies this project limit.  | Limit Name | Description | Default | | --- | --- | --- | | atlas.project.deployment.clusters | Limit on the number of clusters in this project | 25 | | atlas.project.deployment.nodesPerPrivateLinkRegion | Limit on the number of nodes per Private Link region in this project | 50 | | atlas.project.security.databaseAccess.customRoles | Limit on the number of custom roles in this project | 100 | | atlas.project.security.databaseAccess.users | Limit on the number of database users in this project | 100 | | atlas.project.security.networkAccess.crossRegionEntries | Limit on the number of cross-region network access entries in this project | 40 | | atlas.project.security.networkAccess.entries | Limit on the number of network access entries in this project | 200 | | dataFederation.bytesProcessed.query | Limit on the number of bytes processed during a single Data Federation query | N/A | | dataFederation.bytesProcessed.daily | Limit on the number of bytes processed across all Data Federation tenants for the current day | N/A | | dataFederation.bytesProcessed.weekly | Limit on the number of bytes processed across all Data Federation tenants for the current week | N/A | | dataFederation.bytesProcessed.monthly | Limit on the number of bytes processed across all Data Federation tenants for the current month | N/A | 
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getProjectLimit(limitName: 'atlas.project.security.databaseAccess.users' | 'atlas.project.deployment.clusters' | 'atlas.project.security.databaseAccess.customRoles' | 'atlas.project.security.networkAccess.entries' | 'atlas.project.security.networkAccess.crossRegionEntries' | 'atlas.project.deployment.nodesPerPrivateLinkRegion' | 'dataFederation.bytesProcessed.query' | 'dataFederation.bytesProcessed.daily' | 'dataFederation.bytesProcessed.weekly' | 'dataFederation.bytesProcessed.monthly', groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiLimitView> {
        const result = this.api.getProjectLimit(limitName, groupId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns details about the specified project's settings. To use this resource, the requesting API Key must have the Project Read Only role. This resource does not require the API Key to have an Access List.
     * Return One Project Settings
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getProjectSettings(groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<GroupSettings> {
        const result = this.api.getProjectSettings(groupId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all pending invitations to the specified project. To use this resource, the requesting API Key must have the Project User Admin role. This resource doesn't require the API Key to have an Access List.
     * Return All Project Invitations
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param username Email address of the user account invited to this project.
     */
    public listProjectInvitations(groupId: string, envelope?: boolean, pretty?: boolean, username?: string, _options?: Configuration): Promise<Array<ApiGroupInvitationView>> {
        const result = this.api.listProjectInvitations(groupId, envelope, pretty, username, _options);
        return result.toPromise();
    }

    /**
     * Returns all the limits for the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Limits for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listProjectLimits(groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiLimitView> {
        const result = this.api.listProjectLimits(groupId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns details about all users in the specified project. Users belong to an organization. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Users in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param flattenTeams Flag that indicates whether the returned list should include users who belong to a team with a role in this project. You might not have assigned the individual users a role in this project. If &#x60;\&quot;flattenTeams\&quot; : false&#x60;, this resource returns only users with a role in the project.  If &#x60;\&quot;flattenTeams\&quot; : true&#x60;, this resource returns both users with roles in the project and users who belong to teams with roles in the project.
     * @param includeOrgUsers Flag that indicates whether the returned list should include users with implicit access to the project, the Organization Owner or Organization Read Only role. You might not have assigned the individual users a role in this project. If &#x60;\&quot;includeOrgUsers\&quot;: false&#x60;, this resource returns only users with a role in the project. If &#x60;\&quot;includeOrgUsers\&quot;: true&#x60;, this resource returns both users with roles in the project and users who have implicit access to the project through their organization role.
     */
    public listProjectUsers(groupId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, flattenTeams?: boolean, includeOrgUsers?: boolean, _options?: Configuration): Promise<PaginatedApiAppUserView> {
        const result = this.api.listProjectUsers(groupId, envelope, includeCount, itemsPerPage, pageNum, pretty, flattenTeams, includeOrgUsers, _options);
        return result.toPromise();
    }

    /**
     * Returns details about all projects. Projects group clusters into logical collections that support an application environment, workload, or both. Each project can have its own users, teams, security, and alert settings. To use this resource, the requesting API Key must have the Read Write role. This resource doesn't require the API Key to have an Access List.
     * Return All Projects
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listProjects(envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<PaginatedAtlasGroupView> {
        const result = this.api.listProjects(envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }

    /**
     * Removes the specified user from the specified project. To use this resource, the requesting API Key must have the Project User Admin role. This resource doesn't require the API Key to have an Access List.
     * Remove One User from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param userId Unique 24-hexadecimal string that identifies MongoDB Cloud user you want to remove from the specified project. To return a application user&#39;s ID using their application username, use the Get All application users in One Project endpoint.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public removeProjectUser(groupId: string, userId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.removeProjectUser(groupId, userId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Sets the specified project limit. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Set One Project Limit
     * @param limitName Human-readable label that identifies this project limit.  | Limit Name | Description | Default | | --- | --- | --- | | atlas.project.deployment.clusters | Limit on the number of clusters in this project | 25 | | atlas.project.deployment.nodesPerPrivateLinkRegion | Limit on the number of nodes per Private Link region in this project | 50 | | atlas.project.security.databaseAccess.customRoles | Limit on the number of custom roles in this project | 100 | | atlas.project.security.databaseAccess.users | Limit on the number of database users in this project | 100 | | atlas.project.security.networkAccess.crossRegionEntries | Limit on the number of cross-region network access entries in this project | 40 | | atlas.project.security.networkAccess.entries | Limit on the number of network access entries in this project | 200 | | dataFederation.bytesProcessed.query | Limit on the number of bytes processed during a single Data Federation query | N/A | | dataFederation.bytesProcessed.daily | Limit on the number of bytes processed across all Data Federation tenants for the current day | N/A | | dataFederation.bytesProcessed.weekly | Limit on the number of bytes processed across all Data Federation tenants for the current week | N/A | | dataFederation.bytesProcessed.monthly | Limit on the number of bytes processed across all Data Federation tenants for the current month | N/A | 
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param apiLimitView 
     */
    public setProjectLimit(limitName: 'atlas.project.security.databaseAccess.users' | 'atlas.project.deployment.clusters' | 'atlas.project.security.databaseAccess.customRoles' | 'atlas.project.security.networkAccess.entries' | 'atlas.project.security.networkAccess.crossRegionEntries' | 'atlas.project.deployment.nodesPerPrivateLinkRegion' | 'dataFederation.bytesProcessed.query' | 'dataFederation.bytesProcessed.daily' | 'dataFederation.bytesProcessed.weekly' | 'dataFederation.bytesProcessed.monthly', groupId: string, envelope?: boolean, pretty?: boolean, apiLimitView?: ApiLimitView, _options?: Configuration): Promise<ApiLimitView> {
        const result = this.api.setProjectLimit(limitName, groupId, envelope, pretty, apiLimitView, _options);
        return result.toPromise();
    }

    /**
     * Updates the human-readable label that identifies the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource does not require the API Key to have an Access List.
     * Update One Project Name
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param groupName 
     */
    public updateProject(groupId: string, envelope?: boolean, pretty?: boolean, groupName?: GroupName, _options?: Configuration): Promise<Group> {
        const result = this.api.updateProject(groupId, envelope, pretty, groupName, _options);
        return result.toPromise();
    }

    /**
     * Updates the details of one pending invitation to the specified project. To specify which invitation to update, provide the username of the invited user. To use this resource, the requesting API Key must have the Project User Admin role. This resource doesn't require the API Key to have an Access List.
     * Update One Project Invitation
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param apiGroupInvitationRequestView Updates the details of one pending invitation to the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public updateProjectInvitation(groupId: string, apiGroupInvitationRequestView: ApiGroupInvitationRequestView, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiGroupInvitationView> {
        const result = this.api.updateProjectInvitation(groupId, apiGroupInvitationRequestView, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Updates the details of one pending invitation to the specified project. To specify which invitation to update, provide the unique identification string for that invitation. Use the Return All Project Invitations endpoint to retrieve IDs for all pending project invitations. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Update One Project Invitation by Invitation ID
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param invitationId Unique 24-hexadecimal digit string that identifies the invitation.
     * @param apiGroupInvitationUpdateRequestView Updates the details of one pending invitation to the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public updateProjectInvitationById(groupId: string, invitationId: string, apiGroupInvitationUpdateRequestView: ApiGroupInvitationUpdateRequestView, envelope?: boolean, _options?: Configuration): Promise<ApiGroupInvitationView> {
        const result = this.api.updateProjectInvitationById(groupId, invitationId, apiGroupInvitationUpdateRequestView, envelope, _options);
        return result.toPromise();
    }

    /**
     * Updates the settings of the specified project. You can update any of the options available. MongoDB cloud only updates the options provided in the request. To use this resource, the requesting API Key must have the Project Owner role. This resource does not require the API Key to have an Access List.
     * Update One Project Settings
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param groupSettings 
     */
    public updateProjectSettings(groupId: string, envelope?: boolean, pretty?: boolean, groupSettings?: GroupSettings, _options?: Configuration): Promise<GroupSettings> {
        const result = this.api.updateProjectSettings(groupId, envelope, pretty, groupSettings, _options);
        return result.toPromise();
    }


}



import { ObservableRollingIndexApi } from './ObservableAPI';

import { RollingIndexApiRequestFactory, RollingIndexApiResponseProcessor} from "../apis/RollingIndexApi";
export class PromiseRollingIndexApi {
    private api: ObservableRollingIndexApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RollingIndexApiRequestFactory,
        responseProcessor?: RollingIndexApiResponseProcessor
    ) {
        this.api = new ObservableRollingIndexApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an index on the cluster identified by its name in a rolling manner. Creating the index in this way allows index builds on one replica set member as a standalone at a time, starting with the secondary members. Creating indexes in this way requires at least one replica set election. To use this resource, the requesting API Key must have the Project Data Access Admin role. This resource doesn't require the API Key to have an Access List.
     * Create One Rolling Index
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster on which MongoDB Cloud creates an index.
     * @param apiIndexRequestView Rolling index to create on the specified cluster.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createRollingIndex(groupId: string, clusterName: string, apiIndexRequestView: ApiIndexRequestView, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.createRollingIndex(groupId, clusterName, apiIndexRequestView, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableRootApi } from './ObservableAPI';

import { RootApiRequestFactory, RootApiResponseProcessor} from "../apis/RootApi";
export class PromiseRootApi {
    private api: ObservableRootApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RootApiRequestFactory,
        responseProcessor?: RootApiResponseProcessor
    ) {
        this.api = new ObservableRootApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This resource returns information about the MongoDB application along with API key meta data.
     * Return the status of this MongoDB application
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getSystemStatus(envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiSystemStatusView> {
        const result = this.api.getSystemStatus(envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableServerlessInstancesApi } from './ObservableAPI';

import { ServerlessInstancesApiRequestFactory, ServerlessInstancesApiResponseProcessor} from "../apis/ServerlessInstancesApi";
export class PromiseServerlessInstancesApi {
    private api: ObservableServerlessInstancesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ServerlessInstancesApiRequestFactory,
        responseProcessor?: ServerlessInstancesApiResponseProcessor
    ) {
        this.api = new ObservableServerlessInstancesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one serverless instance in the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Create One Serverless Instance in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param serverlessInstanceDescriptionCreate Create One Serverless Instance in One Project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createServerlessInstance(groupId: string, serverlessInstanceDescriptionCreate: ServerlessInstanceDescriptionCreate, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ServerlessInstanceDescription> {
        const result = this.api.createServerlessInstance(groupId, serverlessInstanceDescriptionCreate, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Removes one serverless instance from the specified project. The serverless instance must have termination protection disabled in order to be deleted. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Remove One Serverless Instance from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param name Human-readable label that identifies the serverless instance.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deleteServerlessInstance(groupId: string, name: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteServerlessInstance(groupId, name, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns details for one serverless instance in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Serverless Instance from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param name Human-readable label that identifies the serverless instance.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getServerlessInstance(groupId: string, name: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ServerlessInstanceDescription> {
        const result = this.api.getServerlessInstance(groupId, name, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns details for all serverless instances in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Serverless Instances from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listServerlessInstances(groupId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<PaginatedServerlessInstanceDescriptionView> {
        const result = this.api.listServerlessInstances(groupId, envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }

    /**
     * Updates one serverless instance in the specified project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Update One Serverless Instance in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param name Human-readable label that identifies the serverless instance.
     * @param serverlessInstanceDescriptionUpdate Update One Serverless Instance in One Project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public updateServerlessInstance(groupId: string, name: string, serverlessInstanceDescriptionUpdate: ServerlessInstanceDescriptionUpdate, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ServerlessInstanceDescription> {
        const result = this.api.updateServerlessInstance(groupId, name, serverlessInstanceDescriptionUpdate, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableServerlessPrivateEndpointsApi } from './ObservableAPI';

import { ServerlessPrivateEndpointsApiRequestFactory, ServerlessPrivateEndpointsApiResponseProcessor} from "../apis/ServerlessPrivateEndpointsApi";
export class PromiseServerlessPrivateEndpointsApi {
    private api: ObservableServerlessPrivateEndpointsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ServerlessPrivateEndpointsApiRequestFactory,
        responseProcessor?: ServerlessPrivateEndpointsApiResponseProcessor
    ) {
        this.api = new ObservableServerlessPrivateEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one private endpoint for one serverless instance. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.   A new endpoint won't be immediately available after creation.  Read the steps in the linked tutorial for detailed guidance.
     * Create One Private Endpoint for One Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param instanceName Human-readable label that identifies the serverless instance for which the tenant endpoint will be created.
     * @param serverlessTenantEndpointCreate Information about the Private Endpoint to create for the Serverless Instance.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public createServerlessPrivateEndpoint(groupId: string, instanceName: string, serverlessTenantEndpointCreate: ServerlessTenantEndpointCreate, envelope?: boolean, _options?: Configuration): Promise<ServerlessTenantEndpoint> {
        const result = this.api.createServerlessPrivateEndpoint(groupId, instanceName, serverlessTenantEndpointCreate, envelope, _options);
        return result.toPromise();
    }

    /**
     * Remove one private endpoint from one serverless instance. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Remove One Private Endpoint for One Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param instanceName Human-readable label that identifies the serverless instance from which the tenant endpoint will be removed.
     * @param endpointId Unique 24-hexadecimal digit string that identifies the tenant endpoint which will be removed.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public deleteServerlessPrivateEndpoint(groupId: string, instanceName: string, endpointId: string, envelope?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteServerlessPrivateEndpoint(groupId, instanceName, endpointId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Return one private endpoint for one serverless instance. Identify this endpoint using its unique ID. You must have at least the Project Read Only role for the project to successfully call this resource. This resource doesn't require the API Key to have an Access List.
     * Return One Private Endpoint for One Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param instanceName Human-readable label that identifies the serverless instance associated with the tenant endpoint.
     * @param endpointId Unique 24-hexadecimal digit string that identifies the tenant endpoint.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public getServerlessPrivateEndpoint(groupId: string, instanceName: string, endpointId: string, envelope?: boolean, _options?: Configuration): Promise<ServerlessTenantEndpoint> {
        const result = this.api.getServerlessPrivateEndpoint(groupId, instanceName, endpointId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Returns all private endpoints for one serverless instance. You must have at least the Project Read Only role for the project to successfully call this resource. This resource doesn't require the API Key to have an Access List.
     * Return All Private Endpoints for One Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param instanceName Human-readable label that identifies the serverless instance associated with the tenant endpoint.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public listServerlessPrivateEndpoints(groupId: string, instanceName: string, envelope?: boolean, _options?: Configuration): Promise<Array<ServerlessTenantEndpoint>> {
        const result = this.api.listServerlessPrivateEndpoints(groupId, instanceName, envelope, _options);
        return result.toPromise();
    }

    /**
     * Updates one private endpoint for one serverless instance. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Update One Private Endpoint for One Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param instanceName Human-readable label that identifies the serverless instance associated with the tenant endpoint that will be updated.
     * @param endpointId Unique 24-hexadecimal digit string that identifies the tenant endpoint which will be updated.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param serverlessTenantEndpointUpdate 
     */
    public updateServerlessPrivateEndpoint(groupId: string, instanceName: string, endpointId: string, envelope?: boolean, serverlessTenantEndpointUpdate?: ServerlessTenantEndpointUpdate, _options?: Configuration): Promise<ServerlessTenantEndpoint> {
        const result = this.api.updateServerlessPrivateEndpoint(groupId, instanceName, endpointId, envelope, serverlessTenantEndpointUpdate, _options);
        return result.toPromise();
    }


}



import { ObservableSharedTierRestoreJobsApi } from './ObservableAPI';

import { SharedTierRestoreJobsApiRequestFactory, SharedTierRestoreJobsApiResponseProcessor} from "../apis/SharedTierRestoreJobsApi";
export class PromiseSharedTierRestoreJobsApi {
    private api: ObservableSharedTierRestoreJobsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SharedTierRestoreJobsApiRequestFactory,
        responseProcessor?: SharedTierRestoreJobsApiResponseProcessor
    ) {
        this.api = new ObservableSharedTierRestoreJobsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Restores the specified cluster. MongoDB Cloud limits which clusters can be the target clusters of a restore. The target cluster can't use encryption at rest, run a major release MongoDB version different than the snapshot, or receive client requests during restores. MongoDB Cloud deletes all existing data on the target cluster prior to the restore operation. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Create One Restore Job from One M2 or M5 Cluster
     * @param clusterName Human-readable label that identifies the cluster.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantRestore The restore job details.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createSharedClusterBackupRestoreJob(clusterName: string, groupId: string, tenantRestore: TenantRestore, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<TenantRestore> {
        const result = this.api.createSharedClusterBackupRestoreJob(clusterName, groupId, tenantRestore, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the specified restore job. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Restore Job for One M2 or M5 Cluster
     * @param clusterName Human-readable label that identifies the cluster.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param restoreId Unique 24-hexadecimal digit string that identifies the restore job to return.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getSharedClusterBackupRestoreJob(clusterName: string, groupId: string, restoreId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<TenantRestore> {
        const result = this.api.getSharedClusterBackupRestoreJob(clusterName, groupId, restoreId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all restore jobs for the specified M2 or M5 cluster. Restore jobs restore a cluster using a snapshot. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Restore Jobs for One M2 or M5 Cluster
     * @param clusterName Human-readable label that identifies the cluster.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listSharedClusterBackupRestoreJobs(clusterName: string, groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<PaginatedTenantRestoreView> {
        const result = this.api.listSharedClusterBackupRestoreJobs(clusterName, groupId, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableSharedTierSnapshotsApi } from './ObservableAPI';

import { SharedTierSnapshotsApiRequestFactory, SharedTierSnapshotsApiResponseProcessor} from "../apis/SharedTierSnapshotsApi";
export class PromiseSharedTierSnapshotsApi {
    private api: ObservableSharedTierSnapshotsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SharedTierSnapshotsApiRequestFactory,
        responseProcessor?: SharedTierSnapshotsApiResponseProcessor
    ) {
        this.api = new ObservableSharedTierSnapshotsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Requests one snapshot for the specified shared cluster. This resource returns a `snapshotURL` that you can use to download the snapshot. This `snapshotURL` remains active for four hours after you make the request. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Download One M2 or M5 Cluster Snapshot
     * @param clusterName Human-readable label that identifies the cluster.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantRestore Snapshot to be downloaded.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public downloadSharedClusterBackup(clusterName: string, groupId: string, tenantRestore: TenantRestore, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<TenantRestore> {
        const result = this.api.downloadSharedClusterBackup(clusterName, groupId, tenantRestore, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns details for one snapshot for the specified shared cluster. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Snapshot for One M2 or M5 Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param snapshotId Unique 24-hexadecimal digit string that identifies the desired snapshot.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getSharedClusterBackup(groupId: string, clusterName: string, snapshotId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<TenantSnapshot> {
        const result = this.api.getSharedClusterBackup(groupId, clusterName, snapshotId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns details for all snapshots for the specified shared cluster. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Snapshots for One M2 or M5 Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listSharedClusterBackups(groupId: string, clusterName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<PaginatedTenantSnapshotView> {
        const result = this.api.listSharedClusterBackups(groupId, clusterName, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableTeamsApi } from './ObservableAPI';

import { TeamsApiRequestFactory, TeamsApiResponseProcessor} from "../apis/TeamsApi";
export class PromiseTeamsApi {
    private api: ObservableTeamsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TeamsApiRequestFactory,
        responseProcessor?: TeamsApiResponseProcessor
    ) {
        this.api = new ObservableTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds one team to the specified project. All members of the team share the same project access. MongoDB Cloud limits the number of users to a maximum of 100 teams per project and a maximum of 250 teams per organization. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Add One or More Teams to One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param apiTeamRoleView Team to add to the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public addAllTeamsToProject(groupId: string, apiTeamRoleView: Array<ApiTeamRoleView>, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<PaginatedTeamRoleView> {
        const result = this.api.addAllTeamsToProject(groupId, apiTeamRoleView, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Adds one or more MongoDB Cloud users from the specified organization to the specified team. Teams enable you to grant project access roles to MongoDB Cloud users. You can assign up to 250 MongoDB Cloud users from one organization to one team. To use this resource, the requesting API Key must have the Organization User Admin role. This resource doesn't require the API Key to have an Access List.
     * Assign MongoDB Cloud Users from One Organization to One Team
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param teamId Unique 24-hexadecimal character string that identifies the team to which you want to add MongoDB Cloud users.
     * @param apiAddUserToTeamView One or more MongoDB Cloud users that you want to add to the specified team.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public addTeamUser(orgId: string, teamId: string, apiAddUserToTeamView: Array<ApiAddUserToTeamView>, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<PaginatedApiAppUserView> {
        const result = this.api.addTeamUser(orgId, teamId, apiAddUserToTeamView, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Creates one team in the specified organization. Teams enable you to grant project access roles to MongoDB Cloud users. MongoDB Cloud limits the number of teams to a maximum of 250 teams per organization. To use this resource, the requesting API Key must have the Organization Owner role. This resource doesn't require the API Key to have an Access List.
     * Create One Team in One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param apiTeamView Team that you want to create in the specified organization.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createTeam(orgId: string, apiTeamView: ApiTeamView, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiTeamView> {
        const result = this.api.createTeam(orgId, apiTeamView, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Removes one team specified using its unique 24-hexadecimal digit identifier from the organization specified using its unique 24-hexadecimal digit identifier. To use this resource, the requesting API Key must have the Organization User Admin role. This resource doesn't require the API Key to have an Access List.
     * Remove One Team from One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param teamId Unique 24-hexadecimal digit string that identifies the team that you want to delete.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deleteTeam(orgId: string, teamId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteTeam(orgId, teamId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns one team that you identified using its unique 24-hexadecimal digit ID. This team belongs to one organization. Teams enable you to grant project access roles to MongoDB Cloud users. To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an  Access List.
     * Return One Team using its ID
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param teamId Unique 24-hexadecimal digit string that identifies the team whose information you want to return.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getTeamById(orgId: string, teamId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiTeamResponseView> {
        const result = this.api.getTeamById(orgId, teamId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns one team that you identified using its human-readable name. This team belongs to one organization. Teams enable you to grant project access roles to MongoDB Cloud users. To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an Access List.
     * Return One Team using its Name
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param teamName Name of the team whose information you want to return.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getTeamByName(orgId: string, teamName: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiTeamResponseView> {
        const result = this.api.getTeamByName(orgId, teamName, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all teams that belong to the specified organization. Teams enable you to grant project access roles to MongoDB Cloud users. MongoDB Cloud only returns teams for which you have access. To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an Access List.
     * Return All Teams in One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listOrganizationTeams(orgId: string, envelope?: boolean, itemsPerPage?: number, includeCount?: boolean, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<PaginatedTeamView> {
        const result = this.api.listOrganizationTeams(orgId, envelope, itemsPerPage, includeCount, pageNum, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns all teams to which the authenticated user has access in the project specified using its unique 24-hexadecimal digit identifier. All members of the team share the same project access. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All Teams in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listProjectTeams(groupId: string, envelope?: boolean, pretty?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedTeamRoleView> {
        const result = this.api.listProjectTeams(groupId, envelope, pretty, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Returns all MongoDB Cloud users assigned to the team specified using its unique 24-hexadecimal digit identifier. This team belongs to one organization. Teams enable you to grant project access roles to MongoDB Cloud users. To use this resource, the requesting API Key must have the Organization Member role. This resource doesn't require the API Key to have an Access List.
     * Return All MongoDB Cloud Users Assigned to One Team
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param teamId Unique 24-hexadecimal digit string that identifies the team whose application users you want to return.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listTeamUsers(orgId: string, teamId: string, envelope?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<PaginatedApiAppUserView> {
        const result = this.api.listTeamUsers(orgId, teamId, envelope, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }

    /**
     * Removes one team specified using its unique 24-hexadecimal digit identifier from the project specified using its unique 24-hexadecimal digit identifier. To use this resource, the requesting API Key must have the Project User Admin role.
     * Remove One Team from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param teamId Unique 24-hexadecimal digit string that identifies the team that you want to remove from the specified project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public removeProjectTeam(groupId: string, teamId: string, envelope?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.removeProjectTeam(groupId, teamId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Removes one MongoDB Cloud user from the specified team. This team belongs to one organization. Teams enable you to grant project access roles to MongoDB Cloud users. To use this resource, the requesting API Key must have the Organization User Admin role. This resource doesn't require the API Key to have an Access List.
     * Remove One MongoDB Cloud User from One Team
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param teamId Unique 24-hexadecimal digit string that identifies the team from which you want to remove one database application user.
     * @param userId Unique 24-hexadecimal digit string that identifies MongoDB Cloud user that you want to remove from the specified team.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public removeTeamUser(orgId: string, teamId: string, userId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.removeTeamUser(orgId, teamId, userId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Renames one team in the specified organization. Teams enable you to grant project access roles to MongoDB Cloud users. To use this resource, the requesting API Key must have the Organization User Admin role. This resource doesn't require the API Key to have an Access List.
     * Rename One Team
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param teamId Unique 24-hexadecimal digit string that identifies the team that you want to rename.
     * @param apiTeamView Details to update on the specified team.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public renameTeam(orgId: string, teamId: string, apiTeamView: ApiTeamView, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<ApiTeamResponseView> {
        const result = this.api.renameTeam(orgId, teamId, apiTeamView, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Updates the project roles assigned to the specified team. You can grant team roles for specific projects and grant project access roles to users in the team. All members of the team share the same project access. To use this resource, the requesting API Key must have the Project User Admin role.
     * Update Team Roles in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param teamId Unique 24-hexadecimal digit string that identifies the team for which you want to update roles.
     * @param apiTeamRoleView The project roles assigned to the specified team.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public updateTeamRoles(groupId: string, teamId: string, apiTeamRoleView: ApiTeamRoleView, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<PaginatedTeamRoleView> {
        const result = this.api.updateTeamRoles(groupId, teamId, apiTeamRoleView, envelope, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableTestApi } from './ObservableAPI';

import { TestApiRequestFactory, TestApiResponseProcessor} from "../apis/TestApi";
export class PromiseTestApi {
    private api: ObservableTestApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TestApiRequestFactory,
        responseProcessor?: TestApiResponseProcessor
    ) {
        this.api = new ObservableTestApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns some text dummy data for test purposes. Deprecated versions: v2-{2023-01-01}
     * Example resource info for versioning of the Atlas API
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param additionalInfo 
     */
    public versionedExample(envelope?: boolean, additionalInfo?: boolean, _options?: Configuration): Promise<ExampleResourceResponseView20230201> {
        const result = this.api.versionedExample(envelope, additionalInfo, _options);
        return result.toPromise();
    }


}



import { ObservableThirdPartyIntegrationsApi } from './ObservableAPI';

import { ThirdPartyIntegrationsApiRequestFactory, ThirdPartyIntegrationsApiResponseProcessor} from "../apis/ThirdPartyIntegrationsApi";
export class PromiseThirdPartyIntegrationsApi {
    private api: ObservableThirdPartyIntegrationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ThirdPartyIntegrationsApiRequestFactory,
        responseProcessor?: ThirdPartyIntegrationsApiResponseProcessor
    ) {
        this.api = new ObservableThirdPartyIntegrationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds the settings for configuring one third-party service integration. These settings apply to all databases managed in the specified MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Configure One Third-Party Service Integration
     * @param integrationType Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param integrationViewForNdsGroup Third-party integration that you want to configure for your project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createThirdPartyIntegration(integrationType: 'PAGER_DUTY' | 'SLACK' | 'DATADOG' | 'NEW_RELIC' | 'OPS_GENIE' | 'VICTOR_OPS' | 'WEBHOOK' | 'PROMETHEUS' | 'MICROSOFT_TEAMS', groupId: string, integrationViewForNdsGroup: IntegrationViewForNdsGroup, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<GroupPaginatedIntegrationView> {
        const result = this.api.createThirdPartyIntegration(integrationType, groupId, integrationViewForNdsGroup, envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }

    /**
     * Removes the settings that permit configuring one third-party service integration. These settings apply to all databases managed in one MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Remove One Third-Party Service Integration
     * @param integrationType Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public deleteThirdPartyIntegration(integrationType: 'PAGER_DUTY' | 'SLACK' | 'DATADOG' | 'NEW_RELIC' | 'OPS_GENIE' | 'VICTOR_OPS' | 'WEBHOOK' | 'PROMETHEUS' | 'MICROSOFT_TEAMS', groupId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteThirdPartyIntegration(integrationType, groupId, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the settings for configuring integration with one third-party service. These settings apply to all databases managed in one MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Return One Third-Party Service Integration
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param integrationType Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public getThirdPartyIntegration(groupId: string, integrationType: 'PAGER_DUTY' | 'SLACK' | 'DATADOG' | 'NEW_RELIC' | 'OPS_GENIE' | 'VICTOR_OPS' | 'WEBHOOK' | 'PROMETHEUS' | 'MICROSOFT_TEAMS', envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<IntegrationViewForNdsGroup> {
        const result = this.api.getThirdPartyIntegration(groupId, integrationType, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Returns the settings that permit integrations with all configured third-party services. These settings apply to all databases managed in one MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Return All Active Third-Party Service Integrations
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listThirdPartyIntegrations(groupId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<GroupPaginatedIntegrationView> {
        const result = this.api.listThirdPartyIntegrations(groupId, envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }

    /**
     * Updates the settings for configuring integration with one third-party service. These settings apply to all databases managed in one MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role. This resource doesn't require the API Key to have an Access List.
     * Update One Third-Party Service Integration
     * @param integrationType Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param integrationViewForNdsGroup Third-party integration that you want to configure for your project.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public updateThirdPartyIntegration(integrationType: 'PAGER_DUTY' | 'SLACK' | 'DATADOG' | 'NEW_RELIC' | 'OPS_GENIE' | 'VICTOR_OPS' | 'WEBHOOK' | 'PROMETHEUS' | 'MICROSOFT_TEAMS', groupId: string, integrationViewForNdsGroup: IntegrationViewForNdsGroup, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<GroupPaginatedIntegrationView> {
        const result = this.api.updateThirdPartyIntegration(integrationType, groupId, integrationViewForNdsGroup, envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }


}



import { ObservableX509AuthenticationApi } from './ObservableAPI';

import { X509AuthenticationApiRequestFactory, X509AuthenticationApiResponseProcessor} from "../apis/X509AuthenticationApi";
export class PromiseX509AuthenticationApi {
    private api: ObservableX509AuthenticationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: X509AuthenticationApiRequestFactory,
        responseProcessor?: X509AuthenticationApiResponseProcessor
    ) {
        this.api = new ObservableX509AuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generates one X.509 certificate for the specified MongoDB user. Atlas manages the certificate and MongoDB user that belong to one project. To use this resource, the requesting API Key must have the Project Owner role. This resource doesn't require the API Key to have an Access List.  To get MongoDB Cloud to generate a managed certificate for a database user, set `\"x509Type\" : \"MANAGED\"` on the desired MongoDB Database User.  If you are managing your own Certificate Authority (CA) in Self-Managed X.509 mode, you must generate certificates for database users using your own CA.
     * Create One X.509 Certificate for One MongoDB User
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param username Human-readable label that represents the MongoDB database user account for whom to create a certificate.
     * @param userCert Generates one X.509 certificate for the specified MongoDB user.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public createDatabaseUserCertificate(groupId: string, username: string, userCert: UserCert, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<UserCert> {
        const result = this.api.createDatabaseUserCertificate(groupId, username, userCert, envelope, pretty, _options);
        return result.toPromise();
    }

    /**
     * Clear customer-managed X.509 settings on a project, including the uploaded Certificate Authority, disabling Self-Managed X.509.  Updating this configuration triggers a rolling restart of the database.
     * Disable Customer-Managed X.509
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public disableCustomerManagedX509(groupId: string, envelope?: boolean, _options?: Configuration): Promise<UserSecurity> {
        const result = this.api.disableCustomerManagedX509(groupId, envelope, _options);
        return result.toPromise();
    }

    /**
     * Returns all unexpired X.509 certificates for the specified MongoDB user. This MongoDB user belongs to one project. Atlas manages these certificates and the MongoDB user. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All X.509 Certificates Assigned to One MongoDB User
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param username Human-readable label that represents the MongoDB database user account whose certificates you want to return.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public listDatabaseUserCertificates(groupId: string, username: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<PaginatedUserCertView> {
        const result = this.api.listDatabaseUserCertificates(groupId, username, envelope, includeCount, itemsPerPage, pageNum, pretty, _options);
        return result.toPromise();
    }


}



