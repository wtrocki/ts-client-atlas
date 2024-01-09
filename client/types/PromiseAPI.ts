import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { AWSCustomDNSEnabled } from '../models/AWSCustomDNSEnabled';
import { AWSKMSConfiguration } from '../models/AWSKMSConfiguration';
import { AccessListItem } from '../models/AccessListItem';
import { AddUserToTeam } from '../models/AddUserToTeam';
import { AdvancedAutoScalingSettings } from '../models/AdvancedAutoScalingSettings';
import { AdvancedClusterDescription } from '../models/AdvancedClusterDescription';
import { AdvancedComputeAutoScaling } from '../models/AdvancedComputeAutoScaling';
import { AdvancedDiskBackupSnapshotSchedulePolicy } from '../models/AdvancedDiskBackupSnapshotSchedulePolicy';
import { AlertViewForNdsGroup } from '../models/AlertViewForNdsGroup';
import { AlertsNotificationRootForGroup } from '../models/AlertsNotificationRootForGroup';
import { AlertsToggle } from '../models/AlertsToggle';
import { ApiAtlasCheckpoint } from '../models/ApiAtlasCheckpoint';
import { ApiAtlasFTSAnalyzers } from '../models/ApiAtlasFTSAnalyzers';
import { ApiAtlasFTSAnalyzersTokenizer } from '../models/ApiAtlasFTSAnalyzersTokenizer';
import { ApiAtlasFTSMappings } from '../models/ApiAtlasFTSMappings';
import { ApiAtlasSnapshotSchedule } from '../models/ApiAtlasSnapshotSchedule';
import { ApiBSONTimestamp } from '../models/ApiBSONTimestamp';
import { ApiCheckpointPart } from '../models/ApiCheckpointPart';
import { ApiError } from '../models/ApiError';
import { ApiHostViewAtlas } from '../models/ApiHostViewAtlas';
import { ApiKey } from '../models/ApiKey';
import { ApiKeyUserDetails } from '../models/ApiKeyUserDetails';
import { ApiMeasurementsGeneralViewAtlas } from '../models/ApiMeasurementsGeneralViewAtlas';
import { ApiSearchDeploymentRequest } from '../models/ApiSearchDeploymentRequest';
import { ApiSearchDeploymentResponse } from '../models/ApiSearchDeploymentResponse';
import { ApiSearchDeploymentSpec } from '../models/ApiSearchDeploymentSpec';
import { AtlasClusterOutageSimulationOutageFilter } from '../models/AtlasClusterOutageSimulationOutageFilter';
import { AtlasOrganization } from '../models/AtlasOrganization';
import { AuditLog } from '../models/AuditLog';
import { AuthFederationRoleMapping } from '../models/AuthFederationRoleMapping';
import { AutoExportPolicy } from '../models/AutoExportPolicy';
import { AvailableCloudProviderRegion } from '../models/AvailableCloudProviderRegion';
import { AvailableClustersDeployment } from '../models/AvailableClustersDeployment';
import { AzureKeyVault } from '../models/AzureKeyVault';
import { BackupComplianceOnDemandPolicyItem } from '../models/BackupComplianceOnDemandPolicyItem';
import { BackupComplianceScheduledPolicyItem } from '../models/BackupComplianceScheduledPolicyItem';
import { BackupLabel } from '../models/BackupLabel';
import { BackupOnlineArchive } from '../models/BackupOnlineArchive';
import { BackupOnlineArchiveCreate } from '../models/BackupOnlineArchiveCreate';
import { BackupRestoreJob } from '../models/BackupRestoreJob';
import { BackupRestoreJobDelivery } from '../models/BackupRestoreJobDelivery';
import { BackupSnapshot } from '../models/BackupSnapshot';
import { BackupSnapshotPart } from '../models/BackupSnapshotPart';
import { BackupSnapshotRetention } from '../models/BackupSnapshotRetention';
import { BackupTenantSnapshot } from '../models/BackupTenantSnapshot';
import { BaseNetworkPeeringConnectionSettings } from '../models/BaseNetworkPeeringConnectionSettings';
import { BiConnector } from '../models/BiConnector';
import { BillingInvoice } from '../models/BillingInvoice';
import { BillingPayment } from '../models/BillingPayment';
import { BillingRefund } from '../models/BillingRefund';
import { CloudAccessRoleAssignment } from '../models/CloudAccessRoleAssignment';
import { CloudAppUser } from '../models/CloudAppUser';
import { CloudCluster } from '../models/CloudCluster';
import { CloudDatabaseUser } from '../models/CloudDatabaseUser';
import { CloudProviderAccessAWSIAMRole } from '../models/CloudProviderAccessAWSIAMRole';
import { CloudProviderAccessAWSIAMRoleAllOf } from '../models/CloudProviderAccessAWSIAMRoleAllOf';
import { CloudProviderAccessFeatureUsage } from '../models/CloudProviderAccessFeatureUsage';
import { CloudProviderAccessFeatureUsagePushBasedLogExportFeatureId } from '../models/CloudProviderAccessFeatureUsagePushBasedLogExportFeatureId';
import { CloudProviderAccessRole } from '../models/CloudProviderAccessRole';
import { CloudProviderAccessRoles } from '../models/CloudProviderAccessRoles';
import { CloudProviderContainer } from '../models/CloudProviderContainer';
import { CloudProviderEndpointServiceRequest } from '../models/CloudProviderEndpointServiceRequest';
import { CloudProviderRegions } from '../models/CloudProviderRegions';
import { CloudRegionConfig } from '../models/CloudRegionConfig';
import { CloudSearchMetrics } from '../models/CloudSearchMetrics';
import { ClusterAutoScalingSettings } from '../models/ClusterAutoScalingSettings';
import { ClusterCloudProviderInstanceSize } from '../models/ClusterCloudProviderInstanceSize';
import { ClusterComputeAutoScaling } from '../models/ClusterComputeAutoScaling';
import { ClusterConnectionStrings } from '../models/ClusterConnectionStrings';
import { ClusterDescriptionConnectionStringsPrivateEndpoint } from '../models/ClusterDescriptionConnectionStringsPrivateEndpoint';
import { ClusterDescriptionConnectionStringsPrivateEndpointEndpoint } from '../models/ClusterDescriptionConnectionStringsPrivateEndpointEndpoint';
import { ClusterDescriptionProcessArgs } from '../models/ClusterDescriptionProcessArgs';
import { ClusterFreeAutoScaling } from '../models/ClusterFreeAutoScaling';
import { ClusterIPAddresses } from '../models/ClusterIPAddresses';
import { ClusterOutageSimulation } from '../models/ClusterOutageSimulation';
import { ClusterProviderSettings } from '../models/ClusterProviderSettings';
import { ClusterSearchIndex } from '../models/ClusterSearchIndex';
import { ClusterServerlessBackupOptions } from '../models/ClusterServerlessBackupOptions';
import { ClusterStatus } from '../models/ClusterStatus';
import { Collation } from '../models/Collation';
import { ComponentLabel } from '../models/ComponentLabel';
import { ConnectedOrgConfig } from '../models/ConnectedOrgConfig';
import { CostExplorerFilterRequestBody } from '../models/CostExplorerFilterRequestBody';
import { CostExplorerFilterResponse } from '../models/CostExplorerFilterResponse';
import { CreateAtlasOrganizationApiKey } from '../models/CreateAtlasOrganizationApiKey';
import { CreateAtlasProjectApiKey } from '../models/CreateAtlasProjectApiKey';
import { CreateEndpointRequest } from '../models/CreateEndpointRequest';
import { CreateGCPForwardingRuleRequest } from '../models/CreateGCPForwardingRuleRequest';
import { CreateOrganizationRequest } from '../models/CreateOrganizationRequest';
import { CreateOrganizationResponse } from '../models/CreateOrganizationResponse';
import { Criteria } from '../models/Criteria';
import { CustomZoneMappings } from '../models/CustomZoneMappings';
import { DBUserTLSX509Settings } from '../models/DBUserTLSX509Settings';
import { DataExpirationRule } from '../models/DataExpirationRule';
import { DataFederationLimit } from '../models/DataFederationLimit';
import { DataFederationTenantQueryLimit } from '../models/DataFederationTenantQueryLimit';
import { DataLakeAWSCloudProviderConfig } from '../models/DataLakeAWSCloudProviderConfig';
import { DataLakeApiBase } from '../models/DataLakeApiBase';
import { DataLakeAtlasStoreReadConcern } from '../models/DataLakeAtlasStoreReadConcern';
import { DataLakeAtlasStoreReadPreference } from '../models/DataLakeAtlasStoreReadPreference';
import { DataLakeAtlasStoreReadPreferenceTag } from '../models/DataLakeAtlasStoreReadPreferenceTag';
import { DataLakeCloudProviderConfig } from '../models/DataLakeCloudProviderConfig';
import { DataLakeDataProcessRegion } from '../models/DataLakeDataProcessRegion';
import { DataLakeDatabaseCollection } from '../models/DataLakeDatabaseCollection';
import { DataLakeDatabaseDataSourceSettings } from '../models/DataLakeDatabaseDataSourceSettings';
import { DataLakeDatabaseInstance } from '../models/DataLakeDatabaseInstance';
import { DataLakeIngestionPipeline } from '../models/DataLakeIngestionPipeline';
import { DataLakePipelinesPartitionField } from '../models/DataLakePipelinesPartitionField';
import { DataLakeStorage } from '../models/DataLakeStorage';
import { DataLakeStoreSettings } from '../models/DataLakeStoreSettings';
import { DataLakeTenant } from '../models/DataLakeTenant';
import { DataProcessRegion } from '../models/DataProcessRegion';
import { DataProtectionSettings20231001 } from '../models/DataProtectionSettings20231001';
import { DatabaseInheritedRole } from '../models/DatabaseInheritedRole';
import { DatabasePermittedNamespaceResource } from '../models/DatabasePermittedNamespaceResource';
import { DatabasePrivilegeAction } from '../models/DatabasePrivilegeAction';
import { DatabaseRollingIndexRequest } from '../models/DatabaseRollingIndexRequest';
import { DatabaseUserRole } from '../models/DatabaseUserRole';
import { DatasetRetentionPolicy } from '../models/DatasetRetentionPolicy';
import { DedicatedHardwareSpec } from '../models/DedicatedHardwareSpec';
import { DeleteCopiedBackups } from '../models/DeleteCopiedBackups';
import { Destination } from '../models/Destination';
import { DiskBackupApiPolicyItem } from '../models/DiskBackupApiPolicyItem';
import { DiskBackupBaseRestoreMember } from '../models/DiskBackupBaseRestoreMember';
import { DiskBackupCopySetting } from '../models/DiskBackupCopySetting';
import { DiskBackupExportJob } from '../models/DiskBackupExportJob';
import { DiskBackupExportJobRequest } from '../models/DiskBackupExportJobRequest';
import { DiskBackupOnDemandSnapshotRequest } from '../models/DiskBackupOnDemandSnapshotRequest';
import { DiskBackupReplicaSet } from '../models/DiskBackupReplicaSet';
import { DiskBackupShardedClusterSnapshot } from '../models/DiskBackupShardedClusterSnapshot';
import { DiskBackupShardedClusterSnapshotMember } from '../models/DiskBackupShardedClusterSnapshotMember';
import { DiskBackupSnapshot } from '../models/DiskBackupSnapshot';
import { DiskBackupSnapshotAWSExportBucket } from '../models/DiskBackupSnapshotAWSExportBucket';
import { DiskBackupSnapshotRestoreJob } from '../models/DiskBackupSnapshotRestoreJob';
import { DiskBackupSnapshotSchedule } from '../models/DiskBackupSnapshotSchedule';
import { DiskGBAutoScaling } from '../models/DiskGBAutoScaling';
import { EncryptionAtRest } from '../models/EncryptionAtRest';
import { EndpointService } from '../models/EndpointService';
import { EventViewForNdsGroup } from '../models/EventViewForNdsGroup';
import { EventViewForOrg } from '../models/EventViewForOrg';
import { ExportStatus } from '../models/ExportStatus';
import { ExtraRetentionSetting } from '../models/ExtraRetentionSetting';
import { FTSMetric } from '../models/FTSMetric';
import { FederatedUser } from '../models/FederatedUser';
import { FederationIdentityProvider } from '../models/FederationIdentityProvider';
import { FieldTransformation } from '../models/FieldTransformation';
import { GCPConsumerForwardingRule } from '../models/GCPConsumerForwardingRule';
import { GeoSharding } from '../models/GeoSharding';
import { GoogleCloudKMS } from '../models/GoogleCloudKMS';
import { GreaterThanRawThreshold } from '../models/GreaterThanRawThreshold';
import { Group } from '../models/Group';
import { GroupAlertsConfig } from '../models/GroupAlertsConfig';
import { GroupIPAddresses } from '../models/GroupIPAddresses';
import { GroupInvitation } from '../models/GroupInvitation';
import { GroupInvitationRequest } from '../models/GroupInvitationRequest';
import { GroupInvitationUpdateRequest } from '../models/GroupInvitationUpdateRequest';
import { GroupMaintenanceWindow } from '../models/GroupMaintenanceWindow';
import { GroupName } from '../models/GroupName';
import { GroupPaginatedEvent } from '../models/GroupPaginatedEvent';
import { GroupRole } from '../models/GroupRole';
import { GroupService } from '../models/GroupService';
import { GroupSettings } from '../models/GroupSettings';
import { HardwareSpec } from '../models/HardwareSpec';
import { IdentityProviderUpdate } from '../models/IdentityProviderUpdate';
import { IndexOptions } from '../models/IndexOptions';
import { IngestionPipelineRun } from '../models/IngestionPipelineRun';
import { IngestionSink } from '../models/IngestionSink';
import { IngestionSource } from '../models/IngestionSource';
import { InvoiceLineItem } from '../models/InvoiceLineItem';
import { LDAPSecuritySettings } from '../models/LDAPSecuritySettings';
import { LDAPVerifyConnectivityJobRequest } from '../models/LDAPVerifyConnectivityJobRequest';
import { LDAPVerifyConnectivityJobRequestParams } from '../models/LDAPVerifyConnectivityJobRequestParams';
import { LDAPVerifyConnectivityJobRequestValidation } from '../models/LDAPVerifyConnectivityJobRequestValidation';
import { LegacyAtlasCluster } from '../models/LegacyAtlasCluster';
import { LegacyAtlasTenantClusterUpgradeRequest } from '../models/LegacyAtlasTenantClusterUpgradeRequest';
import { LegacyReplicationSpec } from '../models/LegacyReplicationSpec';
import { Link } from '../models/Link';
import { LinkAtlas } from '../models/LinkAtlas';
import { LiveImportAvailableProject } from '../models/LiveImportAvailableProject';
import { LiveImportValidation } from '../models/LiveImportValidation';
import { LiveMigrationRequest } from '../models/LiveMigrationRequest';
import { LiveMigrationResponse } from '../models/LiveMigrationResponse';
import { ManagedNamespace } from '../models/ManagedNamespace';
import { ManagedNamespaces } from '../models/ManagedNamespaces';
import { MeasurementDiskPartition } from '../models/MeasurementDiskPartition';
import { MeasurementsIndexes } from '../models/MeasurementsIndexes';
import { MeasurementsNonIndex } from '../models/MeasurementsNonIndex';
import { MesurementsDatabase } from '../models/MesurementsDatabase';
import { MetricDataPoint } from '../models/MetricDataPoint';
import { MetricDataPointAtlas } from '../models/MetricDataPointAtlas';
import { MetricsMeasurement } from '../models/MetricsMeasurement';
import { MetricsMeasurementAtlas } from '../models/MetricsMeasurementAtlas';
import { MongoDBAccessLogs } from '../models/MongoDBAccessLogs';
import { MongoDBAccessLogsList } from '../models/MongoDBAccessLogsList';
import { NamespaceObj } from '../models/NamespaceObj';
import { Namespaces } from '../models/Namespaces';
import { NetworkPermissionEntry } from '../models/NetworkPermissionEntry';
import { NetworkPermissionEntryStatus } from '../models/NetworkPermissionEntryStatus';
import { NumberMetricValue } from '../models/NumberMetricValue';
import { OnlineArchiveSchedule } from '../models/OnlineArchiveSchedule';
import { OrgFederationSettings } from '../models/OrgFederationSettings';
import { OrgGroup } from '../models/OrgGroup';
import { OrgPaginatedEvent } from '../models/OrgPaginatedEvent';
import { OrganizationInvitation } from '../models/OrganizationInvitation';
import { OrganizationInvitationGroupRoleAssignmentsRequest } from '../models/OrganizationInvitationGroupRoleAssignmentsRequest';
import { OrganizationInvitationRequest } from '../models/OrganizationInvitationRequest';
import { OrganizationInvitationUpdateRequest } from '../models/OrganizationInvitationUpdateRequest';
import { OrganizationSettings } from '../models/OrganizationSettings';
import { PaginatedAdvancedClusterDescription } from '../models/PaginatedAdvancedClusterDescription';
import { PaginatedAlert } from '../models/PaginatedAlert';
import { PaginatedAlertConfig } from '../models/PaginatedAlertConfig';
import { PaginatedApiApiUser } from '../models/PaginatedApiApiUser';
import { PaginatedApiAppUser } from '../models/PaginatedApiAppUser';
import { PaginatedApiAtlasCheckpoint } from '../models/PaginatedApiAtlasCheckpoint';
import { PaginatedApiAtlasDatabaseUser } from '../models/PaginatedApiAtlasDatabaseUser';
import { PaginatedApiAtlasDiskBackupExportJob } from '../models/PaginatedApiAtlasDiskBackupExportJob';
import { PaginatedApiAtlasProviderRegions } from '../models/PaginatedApiAtlasProviderRegions';
import { PaginatedApiAtlasServerlessBackupRestoreJob } from '../models/PaginatedApiAtlasServerlessBackupRestoreJob';
import { PaginatedApiAtlasServerlessBackupSnapshot } from '../models/PaginatedApiAtlasServerlessBackupSnapshot';
import { PaginatedApiInvoice } from '../models/PaginatedApiInvoice';
import { PaginatedApiStreamsConnection } from '../models/PaginatedApiStreamsConnection';
import { PaginatedApiStreamsTenant } from '../models/PaginatedApiStreamsTenant';
import { PaginatedApiUserAccessList } from '../models/PaginatedApiUserAccessList';
import { PaginatedAppUser } from '../models/PaginatedAppUser';
import { PaginatedAtlasGroup } from '../models/PaginatedAtlasGroup';
import { PaginatedBackupSnapshot } from '../models/PaginatedBackupSnapshot';
import { PaginatedBackupSnapshotExportBucket } from '../models/PaginatedBackupSnapshotExportBucket';
import { PaginatedCloudBackupReplicaSet } from '../models/PaginatedCloudBackupReplicaSet';
import { PaginatedCloudBackupRestoreJob } from '../models/PaginatedCloudBackupRestoreJob';
import { PaginatedCloudBackupShardedClusterSnapshot } from '../models/PaginatedCloudBackupShardedClusterSnapshot';
import { PaginatedCloudProviderContainer } from '../models/PaginatedCloudProviderContainer';
import { PaginatedContainerPeer } from '../models/PaginatedContainerPeer';
import { PaginatedDatabase } from '../models/PaginatedDatabase';
import { PaginatedDiskPartition } from '../models/PaginatedDiskPartition';
import { PaginatedHostViewAtlas } from '../models/PaginatedHostViewAtlas';
import { PaginatedIntegration } from '../models/PaginatedIntegration';
import { PaginatedNetworkAccess } from '../models/PaginatedNetworkAccess';
import { PaginatedOnlineArchive } from '../models/PaginatedOnlineArchive';
import { PaginatedOrgGroup } from '../models/PaginatedOrgGroup';
import { PaginatedOrganization } from '../models/PaginatedOrganization';
import { PaginatedPipelineRun } from '../models/PaginatedPipelineRun';
import { PaginatedPrivateNetworkEndpointIdEntry } from '../models/PaginatedPrivateNetworkEndpointIdEntry';
import { PaginatedRestoreJob } from '../models/PaginatedRestoreJob';
import { PaginatedRoleMapping } from '../models/PaginatedRoleMapping';
import { PaginatedServerlessInstanceDescription } from '../models/PaginatedServerlessInstanceDescription';
import { PaginatedSnapshot } from '../models/PaginatedSnapshot';
import { PaginatedTeam } from '../models/PaginatedTeam';
import { PaginatedTeamRole } from '../models/PaginatedTeamRole';
import { PaginatedTenantRestore } from '../models/PaginatedTenantRestore';
import { PaginatedTenantSnapshot } from '../models/PaginatedTenantSnapshot';
import { PaginatedUserCert } from '../models/PaginatedUserCert';
import { PartitionField } from '../models/PartitionField';
import { PemFileInfo } from '../models/PemFileInfo';
import { PerformanceAdvisorIndex } from '../models/PerformanceAdvisorIndex';
import { PerformanceAdvisorOpStats } from '../models/PerformanceAdvisorOpStats';
import { PerformanceAdvisorOperation } from '../models/PerformanceAdvisorOperation';
import { PerformanceAdvisorResponse } from '../models/PerformanceAdvisorResponse';
import { PerformanceAdvisorShape } from '../models/PerformanceAdvisorShape';
import { PerformanceAdvisorSlowQuery } from '../models/PerformanceAdvisorSlowQuery';
import { PerformanceAdvisorSlowQueryList } from '../models/PerformanceAdvisorSlowQueryList';
import { PipelineRunStats } from '../models/PipelineRunStats';
import { PrivateEndpointHostname } from '../models/PrivateEndpointHostname';
import { PrivateIPMode } from '../models/PrivateIPMode';
import { PrivateLinkEndpoint } from '../models/PrivateLinkEndpoint';
import { PrivateNetworkEndpointIdEntry } from '../models/PrivateNetworkEndpointIdEntry';
import { ProjectSettingItem } from '../models/ProjectSettingItem';
import { PushBasedLogExportProject } from '../models/PushBasedLogExportProject';
import { Raw } from '../models/Raw';
import { RegionSpec } from '../models/RegionSpec';
import { ReplicationSpec } from '../models/ReplicationSpec';
import { ResourceTag } from '../models/ResourceTag';
import { RestoreJobFileHash } from '../models/RestoreJobFileHash';
import { RoleAssignment } from '../models/RoleAssignment';
import { SampleDatasetStatus } from '../models/SampleDatasetStatus';
import { SearchSynonymMappingDefinition } from '../models/SearchSynonymMappingDefinition';
import { ServerlessBackupRestoreJob } from '../models/ServerlessBackupRestoreJob';
import { ServerlessBackupSnapshot } from '../models/ServerlessBackupSnapshot';
import { ServerlessConnectionStringsPrivateEndpointItem } from '../models/ServerlessConnectionStringsPrivateEndpointItem';
import { ServerlessConnectionStringsPrivateEndpointList } from '../models/ServerlessConnectionStringsPrivateEndpointList';
import { ServerlessInstanceDescription } from '../models/ServerlessInstanceDescription';
import { ServerlessInstanceDescriptionConnectionStrings } from '../models/ServerlessInstanceDescriptionConnectionStrings';
import { ServerlessInstanceDescriptionCreate } from '../models/ServerlessInstanceDescriptionCreate';
import { ServerlessInstanceDescriptionUpdate } from '../models/ServerlessInstanceDescriptionUpdate';
import { ServerlessMetricThreshold } from '../models/ServerlessMetricThreshold';
import { ServerlessProviderSettings } from '../models/ServerlessProviderSettings';
import { ServerlessTenantCreateRequest } from '../models/ServerlessTenantCreateRequest';
import { ServerlessTenantEndpoint } from '../models/ServerlessTenantEndpoint';
import { ServerlessTenantEndpointUpdate } from '../models/ServerlessTenantEndpointUpdate';
import { Source } from '../models/Source';
import { StreamsConnection } from '../models/StreamsConnection';
import { StreamsDataProcessRegion } from '../models/StreamsDataProcessRegion';
import { StreamsKafkaAuthentication } from '../models/StreamsKafkaAuthentication';
import { StreamsKafkaSecurity } from '../models/StreamsKafkaSecurity';
import { StreamsTenant } from '../models/StreamsTenant';
import { SynonymSource } from '../models/SynonymSource';
import { SystemStatus } from '../models/SystemStatus';
import { TargetOrg } from '../models/TargetOrg';
import { TargetOrgRequest } from '../models/TargetOrgRequest';
import { Team } from '../models/Team';
import { TeamResponse } from '../models/TeamResponse';
import { TeamRole } from '../models/TeamRole';
import { TenantRestore } from '../models/TenantRestore';
import { ThridPartyIntegration } from '../models/ThridPartyIntegration';
import { TriggerIngestionPipelineRequest } from '../models/TriggerIngestionPipelineRequest';
import { UpdateAtlasOrganizationApiKey } from '../models/UpdateAtlasOrganizationApiKey';
import { UpdateAtlasProjectApiKey } from '../models/UpdateAtlasProjectApiKey';
import { UpdateCustomDBRole } from '../models/UpdateCustomDBRole';
import { UpdateGroupRolesForUser } from '../models/UpdateGroupRolesForUser';
import { UpdateOrgRolesForUser } from '../models/UpdateOrgRolesForUser';
import { UserAccessList } from '../models/UserAccessList';
import { UserAccessRoleAssignment } from '../models/UserAccessRoleAssignment';
import { UserCert } from '../models/UserCert';
import { UserCustomDBRole } from '../models/UserCustomDBRole';
import { UserScope } from '../models/UserScope';
import { UserSecurity } from '../models/UserSecurity';
import { UserToDNMapping } from '../models/UserToDNMapping';
import { X509Certificate } from '../models/X509Certificate';
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
     * Returns the custom DNS configuration for AWS clusters in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Custom DNS Configuration for Atlas Clusters on AWS
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public getAWSCustomDNS(groupId: string, _options?: Configuration): Promise<AWSCustomDNSEnabled> {
        const result = this.api.getAWSCustomDNS(groupId, _options);
        return result.toPromise();
    }

    /**
     * Enables or disables the custom DNS configuration for AWS clusters in the specified project. Enable custom DNS if you use AWS VPC peering and use your own DNS servers. To use this resource, the requesting API Key must have the Project Atlas Admin role.
     * Toggle State of One Custom DNS Configuration for Atlas Clusters on AWS
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param aWSCustomDNSEnabled Enables or disables the custom DNS configuration for AWS clusters in the specified project.
     */
    public toggleAWSCustomDNS(groupId: string, aWSCustomDNSEnabled: AWSCustomDNSEnabled, _options?: Configuration): Promise<AWSCustomDNSEnabled> {
        const result = this.api.toggleAWSCustomDNS(groupId, aWSCustomDNSEnabled, _options);
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
     * @param authResult Flag that indicates whether the response returns the successful authentication attempts only.
     * @param end Date and time when to stop retrieving database history. If you specify **end**, you must also specify **start**. This parameter uses UNIX epoch time in milliseconds.
     * @param ipAddress One Internet Protocol address that attempted to authenticate with the database.
     * @param nLogs Maximum number of lines from the log to return.
     * @param start Date and time when MongoDB Cloud begins retrieving database history. If you specify **start**, you must also specify **end**. This parameter uses UNIX epoch time in milliseconds.
     */
    public listAccessLogsByClusterName(groupId: string, clusterName: string, authResult?: boolean, end?: number, ipAddress?: string, nLogs?: number, start?: number, _options?: Configuration): Promise<MongoDBAccessLogsList> {
        const result = this.api.listAccessLogsByClusterName(groupId, clusterName, authResult, end, ipAddress, nLogs, start, _options);
        return result.toPromise();
    }

    /**
     * Returns the access logs of one cluster identified by the cluster's hostname. Access logs contain a list of authentication requests made against your clusters. You can't use this feature on tenant-tier clusters (M0, M2, M5). To use this resource, the requesting API Key must have the Project Monitoring Admin role.
     * Return Database Access History for One Cluster using Its Hostname
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param hostname Fully qualified domain name or IP address of the MongoDB host that stores the log files that you want to download.
     * @param authResult Flag that indicates whether the response returns the successful authentication attempts only.
     * @param end Date and time when to stop retrieving database history. If you specify **end**, you must also specify **start**. This parameter uses UNIX epoch time in milliseconds.
     * @param ipAddress One Internet Protocol address that attempted to authenticate with the database.
     * @param nLogs Maximum number of lines from the log to return.
     * @param start Date and time when MongoDB Cloud begins retrieving database history. If you specify **start**, you must also specify **end**. This parameter uses UNIX epoch time in milliseconds.
     */
    public listAccessLogsByHostname(groupId: string, hostname: string, authResult?: boolean, end?: number, ipAddress?: string, nLogs?: number, start?: number, _options?: Configuration): Promise<MongoDBAccessLogsList> {
        const result = this.api.listAccessLogsByHostname(groupId, hostname, authResult, end, ipAddress, nLogs, start, _options);
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
     * Creates one alert configuration for the specified project. Alert configurations define the triggers and notification methods for alerts. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.  This resource remains under revision and may change.
     * Create One Alert Configuration in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param groupAlertsConfig Creates one alert configuration for the specified project.
     */
    public createAlertConfiguration(groupId: string, groupAlertsConfig: GroupAlertsConfig, _options?: Configuration): Promise<GroupAlertsConfig> {
        const result = this.api.createAlertConfiguration(groupId, groupAlertsConfig, _options);
        return result.toPromise();
    }

    /**
     * Removes one alert configuration from the specified project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.  This resource remains under revision and may change.
     * Remove One Alert Configuration from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param alertConfigId Unique 24-hexadecimal digit string that identifies the alert configuration. Use the [/alertConfigs](#tag/Alert-Configurations/operation/listAlertConfigurations) endpoint to retrieve all alert configurations to which the authenticated user has access.
     */
    public deleteAlertConfiguration(groupId: string, alertConfigId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteAlertConfiguration(groupId, alertConfigId, _options);
        return result.toPromise();
    }

    /**
     * Returns the specified alert configuration from the specified project. To use this resource, the requesting API Key must have the Project Read Only role.  This resource remains under revision and may change.
     * Return One Alert Configuration from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param alertConfigId Unique 24-hexadecimal digit string that identifies the alert configuration. Use the [/alertConfigs](#tag/Alert-Configurations/operation/listAlertConfigurations) endpoint to retrieve all alert configurations to which the authenticated user has access.
     */
    public getAlertConfiguration(groupId: string, alertConfigId: string, _options?: Configuration): Promise<GroupAlertsConfig> {
        const result = this.api.getAlertConfiguration(groupId, alertConfigId, _options);
        return result.toPromise();
    }

    /**
     * Get all field names that the `matchers.fieldName` parameter accepts when you create or update an Alert Configuration. You can successfully call this endpoint with any assigned role.
     * Get All Alert Configuration Matchers Field Names
     */
    public listAlertConfigurationMatchersFieldNames(_options?: Configuration): Promise<Array<string>> {
        const result = this.api.listAlertConfigurationMatchersFieldNames(_options);
        return result.toPromise();
    }

    /**
     * Returns all alert configurations for one project. These alert configurations apply to any component in the project. Alert configurations define the triggers and notification methods for alerts. To use this resource, the requesting API Key must have the Project Read Only role.  This resource remains under revision and may change.
     * Return All Alert Configurations for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listAlertConfigurations(groupId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedAlertConfig> {
        const result = this.api.listAlertConfigurations(groupId, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Returns all alert configurations set for the specified alert. To use this resource, the requesting API Key must have the Project Read Only role.  This resource remains under revision and may change.
     * Return All Alert Configurations Set for One Alert
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param alertId Unique 24-hexadecimal digit string that identifies the alert. Use the [/alerts](#tag/Alerts/operation/listAlerts) endpoint to retrieve all alerts to which the authenticated user has access.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listAlertConfigurationsByAlertId(groupId: string, alertId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedAlertConfig> {
        const result = this.api.listAlertConfigurationsByAlertId(groupId, alertId, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Enables or disables the specified alert configuration in the specified project. The resource enables the specified alert configuration if currently enabled. The resource disables the specified alert configuration if currently disabled. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.  **NOTE**: This endpoint updates only the enabled/disabled state for the alert configuration. To update more than just this configuration, see [Update One Alert Configuration](#tag/Alert-Configurations/operation/updateAlertConfiguration).  This resource remains under revision and may change.
     * Toggle One State of One Alert Configuration in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param alertConfigId Unique 24-hexadecimal digit string that identifies the alert configuration that triggered this alert. Use the [/alertConfigs](#tag/Alert-Configurations/operation/listAlertConfigurations) endpoint to retrieve all alert configurations to which the authenticated user has access.
     * @param alertsToggle Enables or disables the specified alert configuration in the specified project.
     */
    public toggleAlertConfiguration(groupId: string, alertConfigId: string, alertsToggle: AlertsToggle, _options?: Configuration): Promise<GroupAlertsConfig> {
        const result = this.api.toggleAlertConfiguration(groupId, alertConfigId, alertsToggle, _options);
        return result.toPromise();
    }

    /**
     * Updates one alert configuration in the specified project. Alert configurations define the triggers and notification methods for alerts. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.  **NOTE**: To enable or disable the alert configuration, see [Toggle One State of One Alert Configuration in One Project](#tag/Alert-Configurations/operation/toggleAlertConfiguration).  This resource remains under revision and may change.
     * Update One Alert Configuration for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param alertConfigId Unique 24-hexadecimal digit string that identifies the alert configuration. Use the [/alertConfigs](#tag/Alert-Configurations/operation/listAlertConfigurations) endpoint to retrieve all alert configurations to which the authenticated user has access.
     * @param groupAlertsConfig Updates one alert configuration in the specified project.
     */
    public updateAlertConfiguration(groupId: string, alertConfigId: string, groupAlertsConfig: GroupAlertsConfig, _options?: Configuration): Promise<GroupAlertsConfig> {
        const result = this.api.updateAlertConfiguration(groupId, alertConfigId, groupAlertsConfig, _options);
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
     * Confirms receipt of one existing alert. This alert applies to any component in one project. Acknowledging an alert prevents successive notifications. You receive an alert when a monitored component meets or exceeds a value you set until you acknowledge the alert. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.  This resource remains under revision and may change.
     * Acknowledge One Alert from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param alertId Unique 24-hexadecimal digit string that identifies the alert. Use the [/alerts](#tag/Alerts/operation/listAlerts) endpoint to retrieve all alerts to which the authenticated user has access.
     * @param alertViewForNdsGroup Confirm one alert.
     */
    public acknowledgeAlert(groupId: string, alertId: string, alertViewForNdsGroup: AlertViewForNdsGroup, _options?: Configuration): Promise<AlertViewForNdsGroup> {
        const result = this.api.acknowledgeAlert(groupId, alertId, alertViewForNdsGroup, _options);
        return result.toPromise();
    }

    /**
     * Returns one alert. This alert applies to any component in one project. You receive an alert when a monitored component meets or exceeds a value you set. To use this resource, the requesting API Key must have the Project Read Only role.  This resource remains under revision and may change.
     * Return One Alert from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param alertId Unique 24-hexadecimal digit string that identifies the alert. Use the [/alerts](#tag/Alerts/operation/listAlerts) endpoint to retrieve all alerts to which the authenticated user has access.
     */
    public getAlert(groupId: string, alertId: string, _options?: Configuration): Promise<AlertViewForNdsGroup> {
        const result = this.api.getAlert(groupId, alertId, _options);
        return result.toPromise();
    }

    /**
     * Returns all alerts. These alerts apply to all components in one project. You receive an alert when a monitored component meets or exceeds a value you set. To use this resource, the requesting API Key must have the Project Read Only role.  This resource remains under revision and may change.
     * Return All Alerts from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param status Status of the alerts to return. Omit to return all alerts in all statuses.
     */
    public listAlerts(groupId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, status?: string, _options?: Configuration): Promise<PaginatedAlert> {
        const result = this.api.listAlerts(groupId, includeCount, itemsPerPage, pageNum, status, _options);
        return result.toPromise();
    }

    /**
     * Returns all open alerts that the specified alert configuration triggers. These alert configurations apply to the specified project only. Alert configurations define the triggers and notification methods for alerts. Open alerts have been triggered but remain unacknowledged. To use this resource, the requesting API Key must have the Project Read Only role.  This resource remains under revision and may change.
     * Return All Open Alerts for Alert Configuration
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param alertConfigId Unique 24-hexadecimal digit string that identifies the alert configuration. Use the [/alertConfigs](#tag/Alert-Configurations/operation/listAlertConfigurations) endpoint to retrieve all alert configurations to which the authenticated user has access.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listAlertsByAlertConfigurationId(groupId: string, alertConfigId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedAlert> {
        const result = this.api.listAlertsByAlertConfigurationId(groupId, alertConfigId, includeCount, itemsPerPage, pageNum, _options);
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
     * Creates search nodes for the specified cluster.
     * Create Search Nodes
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Label that identifies the cluster to create search nodes for.
     * @param apiSearchDeploymentRequest Creates search nodes for the specified cluster.
     */
    public createAtlasSearchDeployment(groupId: string, clusterName: string, apiSearchDeploymentRequest: ApiSearchDeploymentRequest, _options?: Configuration): Promise<ApiSearchDeploymentResponse> {
        const result = this.api.createAtlasSearchDeployment(groupId, clusterName, apiSearchDeploymentRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates one Atlas Search index on the specified collection. Atlas Search indexes define the fields on which to create the index and the analyzers to use when creating the index. Only clusters running MongoDB v4.2 or later can use Atlas Search. To use this resource, the requesting API Key must have the Project Data Access Admin role.
     * Create One Atlas Search Index
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Name of the cluster that contains the collection on which to create an Atlas Search index.
     * @param clusterSearchIndex Creates one Atlas Search index on the specified collection.
     */
    public createAtlasSearchIndex(groupId: string, clusterName: string, clusterSearchIndex: ClusterSearchIndex, _options?: Configuration): Promise<ClusterSearchIndex> {
        const result = this.api.createAtlasSearchIndex(groupId, clusterName, clusterSearchIndex, _options);
        return result.toPromise();
    }

    /**
     * Deletes the search nodes for the specified cluster.
     * Delete Search Nodes
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Label that identifies the cluster to delete.
     */
    public deleteAtlasSearchDeployment(groupId: string, clusterName: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteAtlasSearchDeployment(groupId, clusterName, _options);
        return result.toPromise();
    }

    /**
     * Removes one Atlas Search index that you identified with its unique ID. To use this resource, the requesting API Key must have the Project Data Access Admin role.
     * Remove One Atlas Search Index
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Name of the cluster that contains the database and collection with one or more Application Search indexes.
     * @param indexId Unique 24-hexadecimal digit string that identifies the Atlas Search index. Use the [Get All Atlas Search Indexes for a Collection API](https://docs.atlas.mongodb.com/reference/api/fts-indexes-get-all/) endpoint to find the IDs of all Atlas Search indexes.
     */
    public deleteAtlasSearchIndex(groupId: string, clusterName: string, indexId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteAtlasSearchIndex(groupId, clusterName, indexId, _options);
        return result.toPromise();
    }

    /**
     * Return the search nodes for the specified cluster.
     * Return Search Nodes
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Label that identifies the cluster to return the search nodes for.
     */
    public getAtlasSearchDeployment(groupId: string, clusterName: string, _options?: Configuration): Promise<ApiSearchDeploymentResponse> {
        const result = this.api.getAtlasSearchDeployment(groupId, clusterName, _options);
        return result.toPromise();
    }

    /**
     * Returns one Atlas Search index in the specified project. You identify this index using its unique ID. Atlas Search index contains the indexed fields and the analyzers used to create the index. To use this resource, the requesting API Key must have the Project Data Access Read Write role.
     * Return One Atlas Search Index
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Name of the cluster that contains the collection with one or more Atlas Search indexes.
     * @param indexId Unique 24-hexadecimal digit string that identifies the Application Search [index](https://docs.atlas.mongodb.com/reference/atlas-search/index-definitions/). Use the [Get All Application Search Indexes for a Collection API](https://docs.atlas.mongodb.com/reference/api/fts-indexes-get-all/) endpoint to find the IDs of all Application Search indexes.
     */
    public getAtlasSearchIndex(groupId: string, clusterName: string, indexId: string, _options?: Configuration): Promise<ClusterSearchIndex> {
        const result = this.api.getAtlasSearchIndex(groupId, clusterName, indexId, _options);
        return result.toPromise();
    }

    /**
     * Returns all Atlas Search indexes on the specified collection. Atlas Search indexes contain the indexed fields and the analyzers used to create the indexes. To use this resource, the requesting API Key must have the Project Data Access Read Write role.
     * Return All Atlas Search Indexes for One Collection
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Name of the cluster that contains the collection with one or more Atlas Search indexes.
     * @param collectionName Name of the collection that contains one or more Atlas Search indexes.
     * @param databaseName Human-readable label that identifies the database that contains the collection with one or more Atlas Search indexes.
     */
    public listAtlasSearchIndexes(groupId: string, clusterName: string, collectionName: string, databaseName: string, _options?: Configuration): Promise<Array<ClusterSearchIndex>> {
        const result = this.api.listAtlasSearchIndexes(groupId, clusterName, collectionName, databaseName, _options);
        return result.toPromise();
    }

    /**
     * Updates the search nodes for the specified cluster.
     * Update Search Nodes
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Label that identifies the cluster to update the search nodes for.
     * @param apiSearchDeploymentRequest Updates the search nodes for the specified cluster.
     */
    public updateAtlasSearchDeployment(groupId: string, clusterName: string, apiSearchDeploymentRequest: ApiSearchDeploymentRequest, _options?: Configuration): Promise<ApiSearchDeploymentResponse> {
        const result = this.api.updateAtlasSearchDeployment(groupId, clusterName, apiSearchDeploymentRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates one Atlas Search index that you identified with its unique ID. Atlas Search indexes define the fields on which to create the index and the analyzers to use when creating the index. To use this resource, the requesting API Key must have the Project Data Access Admin role.
     * Update One Atlas Search Index
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Name of the cluster that contains the collection whose Atlas Search index to update.
     * @param indexId Unique 24-hexadecimal digit string that identifies the Atlas Search [index](https://docs.atlas.mongodb.com/reference/atlas-search/index-definitions/). Use the [Get All Atlas Search Indexes for a Collection API](https://docs.atlas.mongodb.com/reference/api/fts-indexes-get-all/) endpoint to find the IDs of all Atlas Search indexes.
     * @param clusterSearchIndex Details to update on the Atlas Search index.
     */
    public updateAtlasSearchIndex(groupId: string, clusterName: string, indexId: string, clusterSearchIndex: ClusterSearchIndex, _options?: Configuration): Promise<ClusterSearchIndex> {
        const result = this.api.updateAtlasSearchIndex(groupId, clusterName, indexId, clusterSearchIndex, _options);
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
     * Returns the auditing configuration for the specified project. The auditing configuration defines the events that MongoDB Cloud records in the audit log. To use this resource, the requesting API Key must have the Project Owner role. This feature isn't available for `M0`, `M2`, `M5`, or serverless clusters.
     * Return the Auditing Configuration for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public getAuditingConfiguration(groupId: string, _options?: Configuration): Promise<AuditLog> {
        const result = this.api.getAuditingConfiguration(groupId, _options);
        return result.toPromise();
    }

    /**
     * Updates the auditing configuration for the specified project. The auditing configuration defines the events that MongoDB Cloud records in the audit log. To use this resource, the requesting API Key must have the Project Owner role. This feature isn't available for `M0`, `M2`, `M5`, or serverless clusters.
     * Update Auditing Configuration for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param auditLog Updated auditing configuration for the specified project.
     */
    public updateAuditingConfiguration(groupId: string, auditLog: AuditLog, _options?: Configuration): Promise<AuditLog> {
        const result = this.api.updateAuditingConfiguration(groupId, auditLog, _options);
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
     * Cancels one cloud backup restore job of one cluster from the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Cancel One Restore Job of One Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param restoreJobId Unique 24-hexadecimal digit string that identifies the restore job to remove.
     */
    public cancelBackupRestoreJob(groupId: string, clusterName: string, restoreJobId: string, _options?: Configuration): Promise<any> {
        const result = this.api.cancelBackupRestoreJob(groupId, clusterName, restoreJobId, _options);
        return result.toPromise();
    }

    /**
     * Exports one backup snapshot for dedicated Atlas cluster using Cloud Backups to an AWS bucket. To use this resource, the requesting API Key must have the Project Atlas Admin role.
     * Create One Cloud Backup Snapshot Export Job
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param diskBackupExportJobRequest Information about the Cloud Backup Snapshot Export Job to create.
     */
    public createBackupExportJob(groupId: string, clusterName: string, diskBackupExportJobRequest: DiskBackupExportJobRequest, _options?: Configuration): Promise<DiskBackupExportJob> {
        const result = this.api.createBackupExportJob(groupId, clusterName, diskBackupExportJobRequest, _options);
        return result.toPromise();
    }

    /**
     * Restores one snapshot of one cluster from the specified project. Atlas takes on-demand snapshots immediately and scheduled snapshots at regular intervals. If an on-demand snapshot with a status of **queued** or **inProgress** exists, before taking another snapshot, wait until Atlas completes completes processing the previously taken on-demand snapshot.   To use this resource, the requesting API Key must have the Project Owner role.
     * Restore One Snapshot of One Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param diskBackupSnapshotRestoreJob Restores one snapshot of one cluster from the specified project.
     */
    public createBackupRestoreJob(groupId: string, clusterName: string, diskBackupSnapshotRestoreJob: DiskBackupSnapshotRestoreJob, _options?: Configuration): Promise<DiskBackupSnapshotRestoreJob> {
        const result = this.api.createBackupRestoreJob(groupId, clusterName, diskBackupSnapshotRestoreJob, _options);
        return result.toPromise();
    }

    /**
     * Grants MongoDB Cloud access to the specified AWS S3 bucket. This enables this bucket to receive Atlas Cloud Backup snapshots. To use this resource, the requesting API Key must have the Project Owner role.
     * Grant Access to AWS S3 Bucket for Cloud Backup Snapshot Exports
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param diskBackupSnapshotAWSExportBucket Grants MongoDB Cloud access to the specified AWS S3 bucket.
     */
    public createExportBucket(groupId: string, diskBackupSnapshotAWSExportBucket: DiskBackupSnapshotAWSExportBucket, _options?: Configuration): Promise<DiskBackupSnapshotAWSExportBucket> {
        const result = this.api.createExportBucket(groupId, diskBackupSnapshotAWSExportBucket, _options);
        return result.toPromise();
    }

    /**
     * Restores one snapshot of one serverless instance from the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Restore One Snapshot of One Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the serverless instance whose snapshot you want to restore.
     * @param serverlessBackupRestoreJob Restores one snapshot of one serverless instance from the specified project.
     */
    public createServerlessBackupRestoreJob(groupId: string, clusterName: string, serverlessBackupRestoreJob: ServerlessBackupRestoreJob, _options?: Configuration): Promise<ServerlessBackupRestoreJob> {
        const result = this.api.createServerlessBackupRestoreJob(groupId, clusterName, serverlessBackupRestoreJob, _options);
        return result.toPromise();
    }

    /**
     * Removes all cloud backup schedules for the specified cluster. This schedule defines when MongoDB Cloud takes scheduled snapshots and how long it stores those snapshots. To use this resource, the requesting API Key must have the Project Atlas Admin role.
     * Remove All Cloud Backup Schedules
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     */
    public deleteAllBackupSchedules(groupId: string, clusterName: string, _options?: Configuration): Promise<DiskBackupSnapshotSchedule> {
        const result = this.api.deleteAllBackupSchedules(groupId, clusterName, _options);
        return result.toPromise();
    }

    /**
     * Revoke MongoDB Cloud access to the specified AWS S3 bucket. This prevents this bucket to receive Atlas Cloud Backup snapshots. Auto export must be disabled on all clusters in this project exporting to this bucket before revoking access. To use this resource, the requesting API Key must have the Project Owner role.
     * Revoke Access to AWS S3 Bucket for Cloud Backup Snapshot Exports
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param exportBucketId Unique string that identifies the AWS S3 bucket to which you export your snapshots.
     */
    public deleteExportBucket(groupId: string, exportBucketId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteExportBucket(groupId, exportBucketId, _options);
        return result.toPromise();
    }

    /**
     * Removes the specified snapshot. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Replica Set Cloud Backup
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param snapshotId Unique 24-hexadecimal digit string that identifies the desired snapshot.
     */
    public deleteReplicaSetBackup(groupId: string, clusterName: string, snapshotId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteReplicaSetBackup(groupId, clusterName, snapshotId, _options);
        return result.toPromise();
    }

    /**
     * Removes one snapshot of one sharded cluster from the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Sharded Cluster Cloud Backup
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param snapshotId Unique 24-hexadecimal digit string that identifies the desired snapshot.
     */
    public deleteShardedClusterBackup(groupId: string, clusterName: string, snapshotId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteShardedClusterBackup(groupId, clusterName, snapshotId, _options);
        return result.toPromise();
    }

    /**
     * Returns one Cloud Backup snapshot export job associated with the specified Atlas cluster. To use this resource, the requesting API Key must have the Project Atlas Admin role.
     * Return One Cloud Backup Snapshot Export Job
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param exportId Unique string that identifies the AWS S3 bucket to which you export your snapshots.
     */
    public getBackupExportJob(groupId: string, clusterName: string, exportId: string, _options?: Configuration): Promise<DiskBackupExportJob> {
        const result = this.api.getBackupExportJob(groupId, clusterName, exportId, _options);
        return result.toPromise();
    }

    /**
     * Returns one cloud backup restore job for one cluster from the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Return One Restore Job of One Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster with the restore jobs you want to return.
     * @param restoreJobId Unique 24-hexadecimal digit string that identifies the restore job to return.
     */
    public getBackupRestoreJob(groupId: string, clusterName: string, restoreJobId: string, _options?: Configuration): Promise<DiskBackupSnapshotRestoreJob> {
        const result = this.api.getBackupRestoreJob(groupId, clusterName, restoreJobId, _options);
        return result.toPromise();
    }

    /**
     * Returns the cloud backup schedule for the specified cluster within the specified project. This schedule defines when MongoDB Cloud takes scheduled snapshots and how long it stores those snapshots. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Cloud Backup Schedule
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     */
    public getBackupSchedule(groupId: string, clusterName: string, _options?: Configuration): Promise<DiskBackupSnapshotSchedule> {
        const result = this.api.getBackupSchedule(groupId, clusterName, _options);
        return result.toPromise();
    }

    /**
     * Returns the Backup Compliance Policy settings with the specified project. To use this resource, the requesting API Key must have the Project Owner role. Deprecated versions: v2-{2023-01-01}
     * Return the Backup Compliance Policy settings
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public getDataProtectionSettings(groupId: string, _options?: Configuration): Promise<DataProtectionSettings20231001> {
        const result = this.api.getDataProtectionSettings(groupId, _options);
        return result.toPromise();
    }

    /**
     * Returns one AWS S3 bucket associated with the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One AWS S3 Bucket Used for Cloud Backup Snapshot Exports
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param exportBucketId Unique string that identifies the AWS S3 bucket to which you export your snapshots.
     */
    public getExportBucket(groupId: string, exportBucketId: string, _options?: Configuration): Promise<DiskBackupSnapshotAWSExportBucket> {
        const result = this.api.getExportBucket(groupId, exportBucketId, _options);
        return result.toPromise();
    }

    /**
     * Returns one snapshot from the specified cluster. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Replica Set Cloud Backup
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param snapshotId Unique 24-hexadecimal digit string that identifies the desired snapshot.
     */
    public getReplicaSetBackup(groupId: string, clusterName: string, snapshotId: string, _options?: Configuration): Promise<DiskBackupReplicaSet> {
        const result = this.api.getReplicaSetBackup(groupId, clusterName, snapshotId, _options);
        return result.toPromise();
    }

    /**
     * Returns one snapshot of one serverless instance from the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Snapshot of One Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the serverless instance.
     * @param snapshotId Unique 24-hexadecimal digit string that identifies the desired snapshot.
     */
    public getServerlessBackup(groupId: string, clusterName: string, snapshotId: string, _options?: Configuration): Promise<ServerlessBackupSnapshot> {
        const result = this.api.getServerlessBackup(groupId, clusterName, snapshotId, _options);
        return result.toPromise();
    }

    /**
     * Returns one restore job for one serverless instance from the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Return One Restore Job for One Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the serverless instance.
     * @param restoreJobId Unique 24-hexadecimal digit string that identifies the restore job to return.
     */
    public getServerlessBackupRestoreJob(groupId: string, clusterName: string, restoreJobId: string, _options?: Configuration): Promise<ServerlessBackupRestoreJob> {
        const result = this.api.getServerlessBackupRestoreJob(groupId, clusterName, restoreJobId, _options);
        return result.toPromise();
    }

    /**
     * Returns one snapshot of one sharded cluster from the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Sharded Cluster Cloud Backup
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param snapshotId Unique 24-hexadecimal digit string that identifies the desired snapshot.
     */
    public getShardedClusterBackup(groupId: string, clusterName: string, snapshotId: string, _options?: Configuration): Promise<DiskBackupShardedClusterSnapshot> {
        const result = this.api.getShardedClusterBackup(groupId, clusterName, snapshotId, _options);
        return result.toPromise();
    }

    /**
     * Returns all Cloud Backup snapshot export jobs associated with the specified Atlas cluster. To use this resource, the requesting API Key must have the Project Atlas Admin role.
     * Return All Cloud Backup Snapshot Export Jobs
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listBackupExportJobs(groupId: string, clusterName: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedApiAtlasDiskBackupExportJob> {
        const result = this.api.listBackupExportJobs(groupId, clusterName, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Returns all cloud backup restore jobs for one cluster from the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Return All Restore Jobs for One Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster with the restore jobs you want to return.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listBackupRestoreJobs(groupId: string, clusterName: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedCloudBackupRestoreJob> {
        const result = this.api.listBackupRestoreJobs(groupId, clusterName, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Returns all AWS S3 buckets associated with the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All AWS S3 Buckets Used for Cloud Backup Snapshot Exports
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listExportBuckets(groupId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedBackupSnapshotExportBucket> {
        const result = this.api.listExportBuckets(groupId, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Returns all snapshots of one cluster from the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Replica Set Cloud Backups
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listReplicaSetBackups(groupId: string, clusterName: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedCloudBackupReplicaSet> {
        const result = this.api.listReplicaSetBackups(groupId, clusterName, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Returns all restore jobs for one serverless instance from the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Return All Restore Jobs for One Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the serverless instance.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listServerlessBackupRestoreJobs(groupId: string, clusterName: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedApiAtlasServerlessBackupRestoreJob> {
        const result = this.api.listServerlessBackupRestoreJobs(groupId, clusterName, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Returns all snapshots of one serverless instance from the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Snapshots of One Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the serverless instance.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listServerlessBackups(groupId: string, clusterName: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedApiAtlasServerlessBackupSnapshot> {
        const result = this.api.listServerlessBackups(groupId, clusterName, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Returns all snapshots of one sharded cluster from the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Sharded Cluster Cloud Backups
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     */
    public listShardedClusterBackups(groupId: string, clusterName: string, _options?: Configuration): Promise<PaginatedCloudBackupShardedClusterSnapshot> {
        const result = this.api.listShardedClusterBackups(groupId, clusterName, _options);
        return result.toPromise();
    }

    /**
     * Takes one on-demand snapshot for the specified cluster. Atlas takes on-demand snapshots immediately and scheduled snapshots at regular intervals. If an on-demand snapshot with a status of **queued** or **inProgress** exists, before taking another snapshot, wait until Atlas completes completes processing the previously taken on-demand snapshot.   To use this resource, the requesting API Key must have the Project Owner role.
     * Take One On-Demand Snapshot
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param diskBackupOnDemandSnapshotRequest Takes one on-demand snapshot.
     */
    public takeSnapshot(groupId: string, clusterName: string, diskBackupOnDemandSnapshotRequest: DiskBackupOnDemandSnapshotRequest, _options?: Configuration): Promise<DiskBackupSnapshot> {
        const result = this.api.takeSnapshot(groupId, clusterName, diskBackupOnDemandSnapshotRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates the cloud backup schedule for one cluster within the specified project. This schedule defines when MongoDB Cloud takes scheduled snapshots and how long it stores those snapshots. To use this resource, the requesting API Key must have the Project Owner role.
     * Update Cloud Backup Schedule for One Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param diskBackupSnapshotSchedule Updates the cloud backup schedule for one cluster within the specified project.  **Note**: In the request body, provide only the fields that you want to update.
     */
    public updateBackupSchedule(groupId: string, clusterName: string, diskBackupSnapshotSchedule: DiskBackupSnapshotSchedule, _options?: Configuration): Promise<DiskBackupSnapshotSchedule> {
        const result = this.api.updateBackupSchedule(groupId, clusterName, diskBackupSnapshotSchedule, _options);
        return result.toPromise();
    }

    /**
     * Updates the Backup Compliance Policy settings for the specified project. To use this resource, the requesting API Key must have the Project Owner role. Deprecated versions: v2-{2023-01-01}
     * Update or enable the Backup Compliance Policy settings
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param dataProtectionSettings20231001 The new Backup Compliance Policy settings.
     */
    public updateDataProtectionSettings(groupId: string, dataProtectionSettings20231001: DataProtectionSettings20231001, _options?: Configuration): Promise<DataProtectionSettings20231001> {
        const result = this.api.updateDataProtectionSettings(groupId, dataProtectionSettings20231001, _options);
        return result.toPromise();
    }

    /**
     * Changes the expiration date for one cloud backup snapshot for one cluster in the specified project.
     * Change Expiration Date for One Cloud Backup
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param snapshotId Unique 24-hexadecimal digit string that identifies the desired snapshot.
     * @param backupSnapshotRetention Changes the expiration date for one cloud backup snapshot for one cluster in the specified project.
     */
    public updateSnapshotRetention(groupId: string, clusterName: string, snapshotId: string, backupSnapshotRetention: BackupSnapshotRetention, _options?: Configuration): Promise<DiskBackupReplicaSet> {
        const result = this.api.updateSnapshotRetention(groupId, clusterName, snapshotId, backupSnapshotRetention, _options);
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
     * Create one link-token that contains all the information required to complete the link. MongoDB Atlas uses the link-token for push live migrations only. Live migration (push) allows you to securely push data from Cloud Manager or Ops Manager into MongoDB Atlas. Your API Key must have the Organization Owner role to successfully call this resource.
     * Create One Link-Token
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param targetOrgRequest IP address access list entries associated with the migration.
     */
    public createLinkToken(orgId: string, targetOrgRequest: TargetOrgRequest, _options?: Configuration): Promise<TargetOrg> {
        const result = this.api.createLinkToken(orgId, targetOrgRequest, _options);
        return result.toPromise();
    }

    /**
     * Migrate one cluster that Cloud or Ops Manager manages to MongoDB Atlas.   Please make sure to [validate](#tag/Cloud-Migration-Service/operation/validateOneMigration) your migration before initiating it.   You can use this API endpoint for push live migrations only. Your API Key must have the Organization Owner role to successfully call this resource.   **NOTE**: Migrating time-series collections is not yet supported on MongoDB v6.0 or higher. Migrations on MongoDB v6.0 or higher will skip any time-series collections on the source cluster.
     * Migrate One Local Managed Cluster to MongoDB Atlas
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param liveMigrationRequest One migration to be created.
     */
    public createPushMigration(groupId: string, liveMigrationRequest: LiveMigrationRequest, _options?: Configuration): Promise<LiveMigrationResponse> {
        const result = this.api.createPushMigration(groupId, liveMigrationRequest, _options);
        return result.toPromise();
    }

    /**
     * Cut over the migrated cluster to MongoDB Atlas. Confirm when the cut over completes. When the cut over completes, MongoDB Atlas completes the live migration process and stops synchronizing with the source cluster. Your API Key must have the Organization Owner role to successfully call this resource.
     * Cut Over the Migrated Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param liveMigrationId Unique 24-hexadecimal digit string that identifies the migration.
     */
    public cutoverMigration(groupId: string, liveMigrationId: string, _options?: Configuration): Promise<void> {
        const result = this.api.cutoverMigration(groupId, liveMigrationId, _options);
        return result.toPromise();
    }

    /**
     * Remove one organization link and its associated public API key. MongoDB Atlas uses the link-token for push live migrations only. Live migrations (push) let you securely push data from Cloud Manager or Ops Manager into MongoDB Atlas. Your API Key must have the Organization Owner role to successfully call this resource.
     * Remove One Link-Token
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     */
    public deleteLinkToken(orgId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteLinkToken(orgId, _options);
        return result.toPromise();
    }

    /**
     * Return details of one cluster migration job. Each push live migration job uses one migration host. Your API Key must have the Organization Member role to successfully call this resource.
     * Return One Migration Job
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param liveMigrationId Unique 24-hexadecimal digit string that identifies the migration.
     */
    public getPushMigration(groupId: string, liveMigrationId: string, _options?: Configuration): Promise<LiveMigrationResponse> {
        const result = this.api.getPushMigration(groupId, liveMigrationId, _options);
        return result.toPromise();
    }

    /**
     * Return the status of one migration validation job. Your API Key must have the Organization Owner role to successfully call this resource.
     * Return One Migration Validation Job
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param validationId Unique 24-hexadecimal digit string that identifies the validation job.
     */
    public getValidationStatus(groupId: string, validationId: string, _options?: Configuration): Promise<LiveImportValidation> {
        const result = this.api.getValidationStatus(groupId, validationId, _options);
        return result.toPromise();
    }

    /**
     * Return all projects that you can migrate to the specified organization.
     * Return All Projects Available for Migration
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     */
    public listSourceProjects(orgId: string, _options?: Configuration): Promise<Array<LiveImportAvailableProject>> {
        const result = this.api.listSourceProjects(orgId, _options);
        return result.toPromise();
    }

    /**
     * Verifies whether the provided credentials, available disk space, MongoDB versions, and so on meet the requirements of the migration request. If the check passes, the migration can proceed. Your API Key must have the Organization Owner role to successfully call this resource.
     * Validate One Migration Request
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param liveMigrationRequest One migration to be validated.
     */
    public validateMigration(groupId: string, liveMigrationRequest: LiveMigrationRequest, _options?: Configuration): Promise<LiveImportValidation> {
        const result = this.api.validateMigration(groupId, liveMigrationRequest, _options);
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
     * Grants access to the specified project for the specified access role. To use this resource, the requesting API Key must have the Project Owner role. This API endpoint is one step in a procedure to create unified access for MongoDB Cloud services.
     * Authorize One Cloud Provider Access Role
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param roleId Unique 24-hexadecimal digit string that identifies the role.
     * @param cloudProviderAccessRole Grants access to the specified project for the specified access role.
     */
    public authorizeCloudProviderAccessRole(groupId: string, roleId: string, cloudProviderAccessRole: CloudProviderAccessRole, _options?: Configuration): Promise<CloudProviderAccessRole> {
        const result = this.api.authorizeCloudProviderAccessRole(groupId, roleId, cloudProviderAccessRole, _options);
        return result.toPromise();
    }

    /**
     * Creates one access role for the specified cloud provider. Some MongoDB Cloud features use these cloud provider access roles for authentication. To use this resource, the requesting API Key must have the Project Owner role.
     * Create One Cloud Provider Access Role
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudProviderAccessRole Creates one role for the specified cloud provider.
     */
    public createCloudProviderAccessRole(groupId: string, cloudProviderAccessRole: CloudProviderAccessRole, _options?: Configuration): Promise<CloudProviderAccessRole> {
        const result = this.api.createCloudProviderAccessRole(groupId, cloudProviderAccessRole, _options);
        return result.toPromise();
    }

    /**
     * Revokes access to the specified project for the specified access role. To use this resource, the requesting API Key must have the Project Owner role.
     * Deauthorize One Cloud Provider Access Role
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudProvider Human-readable label that identifies the cloud provider of the role to deauthorize.
     * @param roleId Unique 24-hexadecimal digit string that identifies the role.
     */
    public deauthorizeCloudProviderAccessRole(groupId: string, cloudProvider: string, roleId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deauthorizeCloudProviderAccessRole(groupId, cloudProvider, roleId, _options);
        return result.toPromise();
    }

    /**
     * Returns the access role with the specified id and with access to the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Return specified Cloud Provider Access Role
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param roleId Unique 24-hexadecimal digit string that identifies the role.
     */
    public getCloudProviderAccessRole(groupId: string, roleId: string, _options?: Configuration): Promise<CloudProviderAccessRole> {
        const result = this.api.getCloudProviderAccessRole(groupId, roleId, _options);
        return result.toPromise();
    }

    /**
     * Returns all cloud provider access roles with access to the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Return All Cloud Provider Access Roles
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public listCloudProviderAccessRoles(groupId: string, _options?: Configuration): Promise<CloudProviderAccessRoles> {
        const result = this.api.listCloudProviderAccessRoles(groupId, _options);
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
     */
    public endOutageSimulation(groupId: string, clusterName: string, _options?: Configuration): Promise<ClusterOutageSimulation> {
        const result = this.api.endOutageSimulation(groupId, clusterName, _options);
        return result.toPromise();
    }

    /**
     * Returns one outage simulation for one cluster.
     * Return One Outage Simulation
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster that is undergoing outage simulation.
     */
    public getOutageSimulation(groupId: string, clusterName: string, _options?: Configuration): Promise<ClusterOutageSimulation> {
        const result = this.api.getOutageSimulation(groupId, clusterName, _options);
        return result.toPromise();
    }

    /**
     * Starts a cluster outage simulation.
     * Start an Outage Simulation
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster to undergo an outage simulation.
     * @param clusterOutageSimulation Describes the outage simulation.
     */
    public startOutageSimulation(groupId: string, clusterName: string, clusterOutageSimulation: ClusterOutageSimulation, _options?: Configuration): Promise<ClusterOutageSimulation> {
        const result = this.api.startOutageSimulation(groupId, clusterName, clusterOutageSimulation, _options);
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
     * Creates one cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. This resource can create multi-cloud clusters. Each project supports up to 25 database deployments. To use this resource, the requesting API Key must have the Project Owner role. This feature is not available for serverless clusters. Deprecated versions: v2-{2023-01-01}
     * Create One Multi-Cloud Cluster from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param advancedClusterDescription Cluster to create in the specific project.
     */
    public createCluster(groupId: string, advancedClusterDescription: AdvancedClusterDescription, _options?: Configuration): Promise<AdvancedClusterDescription> {
        const result = this.api.createCluster(groupId, advancedClusterDescription, _options);
        return result.toPromise();
    }

    /**
     * Removes one cluster with advanced features from the specified project. The cluster must have termination protection disabled in order to be deleted. To use this resource, the requesting API Key must have the Project Owner role. This feature is not available for serverless clusters. Deprecated versions: v2-{2023-01-01}
     * Remove One Multi-Cloud Cluster from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param retainBackups Flag that indicates whether to retain backup snapshots for the deleted dedicated cluster.
     */
    public deleteCluster(groupId: string, clusterName: string, retainBackups?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCluster(groupId, clusterName, retainBackups, _options);
        return result.toPromise();
    }

    /**
     * Returns the details for one cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. The response includes multi-cloud clusters. To use this resource, the requesting API Key must have the Project Read Only role. This feature is not available for serverless clusters. Deprecated versions: v2-{2023-01-01}
     * Return One Multi-Cloud Cluster from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies this advanced cluster.
     */
    public getCluster(groupId: string, clusterName: string, _options?: Configuration): Promise<AdvancedClusterDescription> {
        const result = this.api.getCluster(groupId, clusterName, _options);
        return result.toPromise();
    }

    /**
     * Returns the advanced configuration details for one cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. Advanced configuration details include the read/write concern, index and oplog limits, and other database settings. This feature isn't available for `M0` free clusters, `M2` and `M5` shared-tier clusters, or serverless clusters. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Advanced Configuration Options for One Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     */
    public getClusterAdvancedConfiguration(groupId: string, clusterName: string, _options?: Configuration): Promise<ClusterDescriptionProcessArgs> {
        const result = this.api.getClusterAdvancedConfiguration(groupId, clusterName, _options);
        return result.toPromise();
    }

    /**
     * Returns the status of all changes that you made to the specified cluster in the specified project. Use this resource to check the progress MongoDB Cloud has made in processing your changes. The response does not include the deployment of new dedicated clusters. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Status of All Cluster Operations
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     */
    public getClusterStatus(groupId: string, clusterName: string, _options?: Configuration): Promise<ClusterStatus> {
        const result = this.api.getClusterStatus(groupId, clusterName, _options);
        return result.toPromise();
    }

    /**
     * Checks the progress of loading the sample dataset into one cluster. To use this resource, the requesting API Key must have the Project Owner role.
     * Check Status of Cluster Sample Dataset Request
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param sampleDatasetId Unique 24-hexadecimal digit string that identifies the loaded sample dataset.
     */
    public getSampleDatasetLoadStatus(groupId: string, sampleDatasetId: string, _options?: Configuration): Promise<SampleDatasetStatus> {
        const result = this.api.getSampleDatasetLoadStatus(groupId, sampleDatasetId, _options);
        return result.toPromise();
    }

    /**
     * Returns the list of regions available for the specified cloud provider at the specified tier. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Cloud Provider Regions
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param providers Cloud providers whose regions to retrieve. When you specify multiple providers, the response can return only tiers and regions that support multi-cloud clusters.
     * @param tier Cluster tier for which to retrieve the regions.
     */
    public listCloudProviderRegions(groupId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, providers?: Array<string>, tier?: string, _options?: Configuration): Promise<PaginatedApiAtlasProviderRegions> {
        const result = this.api.listCloudProviderRegions(groupId, includeCount, itemsPerPage, pageNum, providers, tier, _options);
        return result.toPromise();
    }

    /**
     * Returns the details for all clusters in the specific project to which you have access. Clusters contain a group of hosts that maintain the same data set. The response includes multi-cloud clusters. To use this resource, the requesting API Key must have the Project Read Only role. This feature is not available for serverless clusters. Deprecated versions: v2-{2023-01-01}
     * Return All Clusters in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param includeDeletedWithRetainedBackups Flag that indicates whether to return Clusters with retain backups.
     */
    public listClusters(groupId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, includeDeletedWithRetainedBackups?: boolean, _options?: Configuration): Promise<PaginatedAdvancedClusterDescription> {
        const result = this.api.listClusters(groupId, includeCount, itemsPerPage, pageNum, includeDeletedWithRetainedBackups, _options);
        return result.toPromise();
    }

    /**
     * Returns the details for all clusters in all projects to which you have access. Clusters contain a group of hosts that maintain the same data set. The response does not include multi-cloud clusters. To use this resource, the requesting API Key can have any cluster-level role.
     * Return All Authorized Clusters in All Projects
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listClustersForAllProjects(includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedOrgGroup> {
        const result = this.api.listClustersForAllProjects(includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Requests loading the MongoDB sample dataset into the specified cluster. To use this resource, the requesting API Key must have the Project Owner role.
     * Load Sample Dataset Request into Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param name Human-readable label that identifies the cluster into which you load the sample dataset.
     */
    public loadSampleDataset(groupId: string, name: string, _options?: Configuration): Promise<SampleDatasetStatus> {
        const result = this.api.loadSampleDataset(groupId, name, _options);
        return result.toPromise();
    }

    /**
     * Starts a failover test for the specified cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. A failover test checks how MongoDB Cloud handles the failure of the cluster's primary node. During the test, MongoDB Cloud shuts down the primary node and elects a new primary. To use this resource, the requesting API Key must have the Project Cluster Manager role. Deprecated versions: v2-{2023-01-01}
     * Test Failover for One Multi-Cloud Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     */
    public testFailover(groupId: string, clusterName: string, _options?: Configuration): Promise<void> {
        const result = this.api.testFailover(groupId, clusterName, _options);
        return result.toPromise();
    }

    /**
     * Updates the details for one cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. This resource can update multi-cloud clusters. To update a cluster's termination protection, the requesting API Key must have the Project Owner role. For all other updates, the requesting API Key must have the Project Cluster Manager role. You can't modify a paused cluster (`paused : true`). You must call this endpoint to set `paused : false`. After this endpoint responds with `paused : false`, you can call it again with the changes you want to make to the cluster. This feature is not available for serverless clusters. Deprecated versions: v2-{2023-01-01}
     * Modify One Multi-Cloud Cluster from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param advancedClusterDescription Cluster to update in the specified project.
     */
    public updateCluster(groupId: string, clusterName: string, advancedClusterDescription: AdvancedClusterDescription, _options?: Configuration): Promise<AdvancedClusterDescription> {
        const result = this.api.updateCluster(groupId, clusterName, advancedClusterDescription, _options);
        return result.toPromise();
    }

    /**
     * Updates the advanced configuration details for one cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. Advanced configuration details include the read/write concern, index and oplog limits, and other database settings. To use this resource, the requesting API Key must have the Project Cluster Manager role. This feature isn't available for `M0` free clusters, `M2` and `M5` shared-tier clusters, or serverless clusters.
     * Update Advanced Configuration Options for One Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param clusterDescriptionProcessArgs Advanced configuration details to add for one cluster in the specified project.
     */
    public updateClusterAdvancedConfiguration(groupId: string, clusterName: string, clusterDescriptionProcessArgs: ClusterDescriptionProcessArgs, _options?: Configuration): Promise<ClusterDescriptionProcessArgs> {
        const result = this.api.updateClusterAdvancedConfiguration(groupId, clusterName, clusterDescriptionProcessArgs, _options);
        return result.toPromise();
    }

    /**
     * Upgrades a shared-tier cluster in the specified project. To use this resource, the requesting API key must have the Project Cluster Manager role. Each project supports up to 25 clusters.
     * Upgrade One Shared-tier Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param legacyAtlasTenantClusterUpgradeRequest Details of the shared-tier cluster upgrade in the specified project.
     */
    public upgradeSharedCluster(groupId: string, legacyAtlasTenantClusterUpgradeRequest: LegacyAtlasTenantClusterUpgradeRequest, _options?: Configuration): Promise<LegacyAtlasCluster> {
        const result = this.api.upgradeSharedCluster(groupId, legacyAtlasTenantClusterUpgradeRequest, _options);
        return result.toPromise();
    }

    /**
     * Upgrades a shared-tier cluster to a serverless instance in the specified project. To use this resource, the requesting API key must have the Project Cluster Manager role.
     * Upgrades One Shared-Tier Cluster to the Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param serverlessInstanceDescription Details of the shared-tier cluster upgrade in the specified project.
     */
    public upgradeSharedClusterToServerless(groupId: string, serverlessInstanceDescription: ServerlessInstanceDescription, _options?: Configuration): Promise<ServerlessInstanceDescription> {
        const result = this.api.upgradeSharedClusterToServerless(groupId, serverlessInstanceDescription, _options);
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
     * Creates one custom role in the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Create One Custom Role
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param userCustomDBRole Creates one custom role in the specified project.
     */
    public createCustomDatabaseRole(groupId: string, userCustomDBRole: UserCustomDBRole, _options?: Configuration): Promise<UserCustomDBRole> {
        const result = this.api.createCustomDatabaseRole(groupId, userCustomDBRole, _options);
        return result.toPromise();
    }

    /**
     * Removes one custom role from the specified project. You can't remove a custom role that would leave one or more child roles with no parent roles or actions. You also can't remove a custom role that would leave one or more database users without roles. To use this resource, the requesting API Key must have the Project Atlas Admin role.
     * Remove One Custom Role from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param roleName Human-readable label that identifies the role for the request. This name must be unique for this custom role in this project.
     */
    public deleteCustomDatabaseRole(groupId: string, roleName: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCustomDatabaseRole(groupId, roleName, _options);
        return result.toPromise();
    }

    /**
     * Returns one custom role for the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Custom Role in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param roleName Human-readable label that identifies the role for the request. This name must be unique for this custom role in this project.
     */
    public getCustomDatabaseRole(groupId: string, roleName: string, _options?: Configuration): Promise<UserCustomDBRole> {
        const result = this.api.getCustomDatabaseRole(groupId, roleName, _options);
        return result.toPromise();
    }

    /**
     * Returns all custom roles for the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Custom Roles in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public listCustomDatabaseRoles(groupId: string, _options?: Configuration): Promise<Array<UserCustomDBRole>> {
        const result = this.api.listCustomDatabaseRoles(groupId, _options);
        return result.toPromise();
    }

    /**
     * Updates one custom role in the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Update One Custom Role in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param roleName Human-readable label that identifies the role for the request. This name must beunique for this custom role in this project.
     * @param updateCustomDBRole Updates one custom role in the specified project.
     */
    public updateCustomDatabaseRole(groupId: string, roleName: string, updateCustomDBRole: UpdateCustomDBRole, _options?: Configuration): Promise<UserCustomDBRole> {
        const result = this.api.updateCustomDatabaseRole(groupId, roleName, updateCustomDBRole, _options);
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
     * Adds one private endpoint for Federated Database Instances and Online Archives to the specified projects. If the endpoint ID already exists and the associated comment is unchanged, Atlas Data Federation makes no change to the endpoint ID list. If the endpoint ID already exists and the associated comment is changed, Atlas Data Federation updates the comment value only in the endpoint ID list. If the endpoint ID doesn't exist, Atlas Data Federation appends the new endpoint to the list of endpoints in the endpoint ID list. Each region has an associated service name for the various endpoints in each region.   `us-east-1` is `com.amazonaws.vpce.us-east-1.vpce-svc-00e311695874992b4`.   `us-west-1` is `com.amazonaws.vpce.us-west-2.vpce-svc-09d86b19e59d1b4bb`.   `eu-west-1` is `com.amazonaws.vpce.eu-west-1.vpce-svc-0824460b72e1a420e`.   `eu-west-2` is `com.amazonaws.vpce.eu-west-2.vpce-svc-052f1840aa0c4f1f9`.   `eu-central-1` is `com.amazonaws.vpce.eu-central-1.vpce-svc-0ac8ce91871138c0d`.   `sa-east-1` is `com.amazonaws.vpce.sa-east-1.vpce-svc-0b56e75e8cdf50044`.   `ap-southeast-2` is `com.amazonaws.vpce.ap-southeast-2.vpce-svc-036f1de74d761706e`.   `ap-south-1` is `com.amazonaws.vpce.ap-south-1.vpce-svc-03eb8a541f96d356d`.   To use this resource, the requesting API Key must have the Project Owner or Project Charts Admin roles.
     * Create One Federated Database Instance and Online Archive Private Endpoint for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param privateNetworkEndpointIdEntry Private endpoint for Federated Database Instances and Online Archives to add to the specified project.
     */
    public createDataFederationPrivateEndpoint(groupId: string, privateNetworkEndpointIdEntry: PrivateNetworkEndpointIdEntry, _options?: Configuration): Promise<PaginatedPrivateNetworkEndpointIdEntry> {
        const result = this.api.createDataFederationPrivateEndpoint(groupId, privateNetworkEndpointIdEntry, _options);
        return result.toPromise();
    }

    /**
     * Creates one federated database instance in the specified project. To use this resource, the requesting API Key must have the Project Owner or Project Charts Admin roles.
     * Create One Federated Database Instance in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param dataLakeTenant Details to create one federated database instance in the specified project.
     * @param skipRoleValidation Flag that indicates whether this request should check if the requesting IAM role can read from the S3 bucket. AWS checks if the role can list the objects in the bucket before writing to it. Some IAM roles only need write permissions. This flag allows you to skip that check.
     */
    public createFederatedDatabase(groupId: string, dataLakeTenant: DataLakeTenant, skipRoleValidation?: boolean, _options?: Configuration): Promise<DataLakeTenant> {
        const result = this.api.createFederatedDatabase(groupId, dataLakeTenant, skipRoleValidation, _options);
        return result.toPromise();
    }

    /**
     * Creates or updates one query limit for one federated database instance. To use this resource, the requesting API Key must have the Project Owner role.
     * Configure One Query Limit for One Federated Database Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantName Human-readable label that identifies the federated database instance to which the query limit applies.
     * @param limitName Human-readable label that identifies this data federation instance limit.  | Limit Name | Description | Default | | --- | --- | --- | | bytesProcessed.query | Limit on the number of bytes processed during a single data federation query | N/A | | bytesProcessed.daily | Limit on the number of bytes processed for the data federation instance for the current day | N/A | | bytesProcessed.weekly | Limit on the number of bytes processed for the data federation instance for the current week | N/A | | bytesProcessed.monthly | Limit on the number of bytes processed for the data federation instance for the current month | N/A | 
     * @param dataFederationTenantQueryLimit Creates or updates one query limit for one federated database instance.
     */
    public createOneDataFederationQueryLimit(groupId: string, tenantName: string, limitName: string, dataFederationTenantQueryLimit: DataFederationTenantQueryLimit, _options?: Configuration): Promise<DataFederationTenantQueryLimit> {
        const result = this.api.createOneDataFederationQueryLimit(groupId, tenantName, limitName, dataFederationTenantQueryLimit, _options);
        return result.toPromise();
    }

    /**
     * Removes one private endpoint for Federated Database Instances and Online Archives in the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Federated Database Instance and Online Archive Private Endpoint from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param endpointId Unique 22-character alphanumeric string that identifies the private endpoint to remove. Atlas Data Federation supports AWS private endpoints using the AWS PrivateLink feature.
     */
    public deleteDataFederationPrivateEndpoint(groupId: string, endpointId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteDataFederationPrivateEndpoint(groupId, endpointId, _options);
        return result.toPromise();
    }

    /**
     * Removes one federated database instance from the specified project. To use this resource, the requesting API Key must have the Project Owner or Project Charts Admin roles.
     * Remove One Federated Database Instance from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantName Human-readable label that identifies the federated database instance to remove.
     */
    public deleteFederatedDatabase(groupId: string, tenantName: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteFederatedDatabase(groupId, tenantName, _options);
        return result.toPromise();
    }

    /**
     * Deletes one query limit for one federated database instance. To use this resource, the requesting API Key must have the Project Owner role.
     * Delete One Query Limit For One Federated Database Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantName Human-readable label that identifies the federated database instance to which the query limit applies.
     * @param limitName Human-readable label that identifies this data federation instance limit.  | Limit Name | Description | Default | | --- | --- | --- | | bytesProcessed.query | Limit on the number of bytes processed during a single data federation query | N/A | | bytesProcessed.daily | Limit on the number of bytes processed for the data federation instance for the current day | N/A | | bytesProcessed.weekly | Limit on the number of bytes processed for the data federation instance for the current week | N/A | | bytesProcessed.monthly | Limit on the number of bytes processed for the data federation instance for the current month | N/A | 
     */
    public deleteOneDataFederationInstanceQueryLimit(groupId: string, tenantName: string, limitName: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteOneDataFederationInstanceQueryLimit(groupId, tenantName, limitName, _options);
        return result.toPromise();
    }

    /**
     * Downloads the query logs for the specified federated database instance. To use this resource, the requesting API Key must have the Project Owner or Project Data Access Read Write roles.
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
     * Returns the specified private endpoint for Federated Database Instances or Online Archives in the specified project. To use this resource, the requesting API Key must have the Project Read Only or Project Charts Admin roles.
     * Return One Federated Database Instance and Online Archive Private Endpoint in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param endpointId Unique 22-character alphanumeric string that identifies the private endpoint to return. Atlas Data Federation supports AWS private endpoints using the AWS PrivateLink feature.
     */
    public getDataFederationPrivateEndpoint(groupId: string, endpointId: string, _options?: Configuration): Promise<PrivateNetworkEndpointIdEntry> {
        const result = this.api.getDataFederationPrivateEndpoint(groupId, endpointId, _options);
        return result.toPromise();
    }

    /**
     * Returns the details of one federated database instance within the specified project. To use this resource, the requesting API Key must have the Project Read Only or Project Charts Admin roles.
     * Return One Federated Database Instance in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantName Human-readable label that identifies the Federated Database to return.
     */
    public getFederatedDatabase(groupId: string, tenantName: string, _options?: Configuration): Promise<DataLakeTenant> {
        const result = this.api.getFederatedDatabase(groupId, tenantName, _options);
        return result.toPromise();
    }

    /**
     * Returns all private endpoints for Federated Database Instances and Online Archives in the specified project. To use this resource, the requesting API Key must have the Project Read Only or Project Charts Admin roles.
     * Return All Federated Database Instance and Online Archive Private Endpoints in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listDataFederationPrivateEndpoints(groupId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedPrivateNetworkEndpointIdEntry> {
        const result = this.api.listDataFederationPrivateEndpoints(groupId, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Returns the details of all federated database instances in the specified project. To use this resource, the requesting API Key must have the Project Read Only or higher role.
     * Return All Federated Database Instances in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param type Type of Federated Database Instances to return.
     */
    public listFederatedDatabases(groupId: string, type?: string, _options?: Configuration): Promise<Array<DataLakeTenant>> {
        const result = this.api.listFederatedDatabases(groupId, type, _options);
        return result.toPromise();
    }

    /**
     * Returns the details of one query limit for the specified federated database instance in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Federated Database Instance Query Limit for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantName Human-readable label that identifies the federated database instance to which the query limit applies.
     * @param limitName Human-readable label that identifies this data federation instance limit.  | Limit Name | Description | Default | | --- | --- | --- | | bytesProcessed.query | Limit on the number of bytes processed during a single data federation query | N/A | | bytesProcessed.daily | Limit on the number of bytes processed for the data federation instance for the current day | N/A | | bytesProcessed.weekly | Limit on the number of bytes processed for the data federation instance for the current week | N/A | | bytesProcessed.monthly | Limit on the number of bytes processed for the data federation instance for the current month | N/A | 
     */
    public returnFederatedDatabaseQueryLimit(groupId: string, tenantName: string, limitName: string, _options?: Configuration): Promise<DataFederationTenantQueryLimit> {
        const result = this.api.returnFederatedDatabaseQueryLimit(groupId, tenantName, limitName, _options);
        return result.toPromise();
    }

    /**
     * Returns query limits for a federated databases instance in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Query Limits for One Federated Database Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantName Human-readable label that identifies the federated database instance for which you want to retrieve query limits.
     */
    public returnFederatedDatabaseQueryLimits(groupId: string, tenantName: string, _options?: Configuration): Promise<Array<DataFederationTenantQueryLimit>> {
        const result = this.api.returnFederatedDatabaseQueryLimits(groupId, tenantName, _options);
        return result.toPromise();
    }

    /**
     * Updates the details of one federated database instance in the specified project. To use this resource, the requesting API Key must have the Project Owner or higher role.
     * Update One Federated Database Instance in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantName Human-readable label that identifies the federated database instance to update.
     * @param skipRoleValidation Flag that indicates whether this request should check if the requesting IAM role can read from the S3 bucket. AWS checks if the role can list the objects in the bucket before writing to it. Some IAM roles only need write permissions. This flag allows you to skip that check.
     * @param dataLakeTenant Details of one Federated Database to update in the specified project.
     */
    public updateFederatedDatabase(groupId: string, tenantName: string, skipRoleValidation: boolean, dataLakeTenant: DataLakeTenant, _options?: Configuration): Promise<DataLakeTenant> {
        const result = this.api.updateFederatedDatabase(groupId, tenantName, skipRoleValidation, dataLakeTenant, _options);
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
     * @param dataLakeIngestionPipeline Creates one Data Lake Pipeline.
     */
    public createPipeline(groupId: string, dataLakeIngestionPipeline: DataLakeIngestionPipeline, _options?: Configuration): Promise<DataLakeIngestionPipeline> {
        const result = this.api.createPipeline(groupId, dataLakeIngestionPipeline, _options);
        return result.toPromise();
    }

    /**
     * Removes one Data Lake Pipeline.
     * Remove One Data Lake Pipeline
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param pipelineName Human-readable label that identifies the Data Lake Pipeline.
     */
    public deletePipeline(groupId: string, pipelineName: string, _options?: Configuration): Promise<any> {
        const result = this.api.deletePipeline(groupId, pipelineName, _options);
        return result.toPromise();
    }

    /**
     * Deletes dataset that Atlas generated during the specified pipeline run.
     * Delete Pipeline Run Dataset
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param pipelineName Human-readable label that identifies the Data Lake Pipeline.
     * @param pipelineRunId Unique 24-hexadecimal character string that identifies a Data Lake Pipeline run.
     */
    public deletePipelineRunDataset(groupId: string, pipelineName: string, pipelineRunId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deletePipelineRunDataset(groupId, pipelineName, pipelineRunId, _options);
        return result.toPromise();
    }

    /**
     * Returns the details of one Data Lake Pipeline within the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Data Lake Pipeline
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param pipelineName Human-readable label that identifies the Data Lake Pipeline.
     */
    public getPipeline(groupId: string, pipelineName: string, _options?: Configuration): Promise<DataLakeIngestionPipeline> {
        const result = this.api.getPipeline(groupId, pipelineName, _options);
        return result.toPromise();
    }

    /**
     * Returns the details of one Data Lake Pipeline run within the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Data Lake Pipeline Run
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param pipelineName Human-readable label that identifies the Data Lake Pipeline.
     * @param pipelineRunId Unique 24-hexadecimal character string that identifies a Data Lake Pipeline run.
     */
    public getPipelineRun(groupId: string, pipelineName: string, pipelineRunId: string, _options?: Configuration): Promise<IngestionPipelineRun> {
        const result = this.api.getPipelineRun(groupId, pipelineName, pipelineRunId, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of past Data Lake Pipeline runs. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Data Lake Pipeline Runs from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param pipelineName Human-readable label that identifies the Data Lake Pipeline.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param createdBefore If specified, Atlas returns only Data Lake Pipeline runs initiated before this time and date.
     */
    public listPipelineRuns(groupId: string, pipelineName: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, createdBefore?: Date, _options?: Configuration): Promise<PaginatedPipelineRun> {
        const result = this.api.listPipelineRuns(groupId, pipelineName, includeCount, itemsPerPage, pageNum, createdBefore, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of backup schedule policy items that you can use as a Data Lake Pipeline source. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Available Ingestion Schedules for One Data Lake Pipeline
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param pipelineName Human-readable label that identifies the Data Lake Pipeline.
     */
    public listPipelineSchedules(groupId: string, pipelineName: string, _options?: Configuration): Promise<Array<DiskBackupApiPolicyItem>> {
        const result = this.api.listPipelineSchedules(groupId, pipelineName, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of backup snapshots that you can use to trigger an on demand pipeline run. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Available Backup Snapshots for One Data Lake Pipeline
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param pipelineName Human-readable label that identifies the Data Lake Pipeline.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param completedAfter Date and time after which MongoDB Cloud created the snapshot. If specified, MongoDB Cloud returns available backup snapshots created after this time and date only. This parameter expresses its value in the ISO 8601 timestamp format in UTC.
     */
    public listPipelineSnapshots(groupId: string, pipelineName: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, completedAfter?: Date, _options?: Configuration): Promise<PaginatedBackupSnapshot> {
        const result = this.api.listPipelineSnapshots(groupId, pipelineName, includeCount, itemsPerPage, pageNum, completedAfter, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of Data Lake Pipelines. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Data Lake Pipelines from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public listPipelines(groupId: string, _options?: Configuration): Promise<Array<DataLakeIngestionPipeline>> {
        const result = this.api.listPipelines(groupId, _options);
        return result.toPromise();
    }

    /**
     * Pauses ingestion for a Data Lake Pipeline within the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Pause One Data Lake Pipeline
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param pipelineName Human-readable label that identifies the Data Lake Pipeline.
     */
    public pausePipeline(groupId: string, pipelineName: string, _options?: Configuration): Promise<DataLakeIngestionPipeline> {
        const result = this.api.pausePipeline(groupId, pipelineName, _options);
        return result.toPromise();
    }

    /**
     * Resumes ingestion for a Data Lake Pipeline within the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Resume One Data Lake Pipeline
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param pipelineName Human-readable label that identifies the Data Lake Pipeline.
     */
    public resumePipeline(groupId: string, pipelineName: string, _options?: Configuration): Promise<DataLakeIngestionPipeline> {
        const result = this.api.resumePipeline(groupId, pipelineName, _options);
        return result.toPromise();
    }

    /**
     * Triggers a Data Lake Pipeline ingestion of a specified snapshot.
     * Trigger on demand snapshot ingestion
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param pipelineName Human-readable label that identifies the Data Lake Pipeline.
     * @param triggerIngestionPipelineRequest Triggers a single ingestion run of a snapshot.
     */
    public triggerSnapshotIngestion(groupId: string, pipelineName: string, triggerIngestionPipelineRequest: TriggerIngestionPipelineRequest, _options?: Configuration): Promise<IngestionPipelineRun> {
        const result = this.api.triggerSnapshotIngestion(groupId, pipelineName, triggerIngestionPipelineRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates one Data Lake Pipeline.
     * Update One Data Lake Pipeline
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param pipelineName Human-readable label that identifies the Data Lake Pipeline.
     * @param dataLakeIngestionPipeline Updates one Data Lake Pipeline.
     */
    public updatePipeline(groupId: string, pipelineName: string, dataLakeIngestionPipeline: DataLakeIngestionPipeline, _options?: Configuration): Promise<DataLakeIngestionPipeline> {
        const result = this.api.updatePipeline(groupId, pipelineName, dataLakeIngestionPipeline, _options);
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
     * Creates one database user in the specified project. This MongoDB Cloud supports a maximum of 100 database users per project. If you require more than 100 database users on a project, contact [Support](https://cloud.mongodb.com/support). To use this resource, the requesting API Key must have the Project Owner or Project Charts Admin roles.
     * Create One Database User in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudDatabaseUser Creates one database user in the specified project.
     */
    public createDatabaseUser(groupId: string, cloudDatabaseUser: CloudDatabaseUser, _options?: Configuration): Promise<CloudDatabaseUser> {
        const result = this.api.createDatabaseUser(groupId, cloudDatabaseUser, _options);
        return result.toPromise();
    }

    /**
     * Removes one database user from the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Database User from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param databaseName Human-readable label that identifies the database against which the database user authenticates. Database users must provide both a username and authentication database to log into MongoDB. If the user authenticates with AWS IAM, x.509, or LDAP, this value should be &#x60;$external&#x60;. If the user authenticates with SCRAM-SHA or OIDC, this value should be &#x60;admin&#x60;.
     * @param username Human-readable label that represents the user that authenticates to MongoDB. The format of this label depends on the method of authentication:  | Authentication Method | Parameter Needed | Parameter Value | username Format | |---|---|---|---| | AWS IAM | awsType | ROLE | &lt;abbr title&#x3D;\&quot;Amazon Resource Name\&quot;&gt;ARN&lt;/abbr&gt; | | AWS IAM | awsType | USER | &lt;abbr title&#x3D;\&quot;Amazon Resource Name\&quot;&gt;ARN&lt;/abbr&gt; | | x.509 | x509Type | CUSTOMER | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | x.509 | x509Type | MANAGED | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | LDAP | ldapAuthType | USER | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | LDAP | ldapAuthType | GROUP | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | OIDC | oidcAuthType | IDP_GROUP | Atlas OIDC IdP ID (found in federation settings), followed by a &#39;/&#39;, followed by the IdP group name | | SCRAM-SHA | awsType, x509Type, ldapAuthType, oidcAuthType | NONE | Alphanumeric string | 
     */
    public deleteDatabaseUser(groupId: string, databaseName: string, username: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteDatabaseUser(groupId, databaseName, username, _options);
        return result.toPromise();
    }

    /**
     * Returns one database user that belong to the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Database User from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param databaseName Human-readable label that identifies the database against which the database user authenticates. Database users must provide both a username and authentication database to log into MongoDB. If the user authenticates with AWS IAM, x.509, or LDAP, this value should be &#x60;$external&#x60;. If the user authenticates with SCRAM-SHA or OIDC, this value should be &#x60;admin&#x60;.
     * @param username Human-readable label that represents the user that authenticates to MongoDB. The format of this label depends on the method of authentication:  | Authentication Method | Parameter Needed | Parameter Value | username Format | |---|---|---|---| | AWS IAM | awsType | ROLE | &lt;abbr title&#x3D;\&quot;Amazon Resource Name\&quot;&gt;ARN&lt;/abbr&gt; | | AWS IAM | awsType | USER | &lt;abbr title&#x3D;\&quot;Amazon Resource Name\&quot;&gt;ARN&lt;/abbr&gt; | | x.509 | x509Type | CUSTOMER | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | x.509 | x509Type | MANAGED | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | LDAP | ldapAuthType | USER | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | LDAP | ldapAuthType | GROUP | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | OIDC | oidcAuthType | IDP_GROUP | Atlas OIDC IdP ID (found in federation settings), followed by a &#39;/&#39;, followed by the IdP group name | | SCRAM-SHA | awsType, x509Type, ldapAuthType, oidcAuthType | NONE | Alphanumeric string | 
     */
    public getDatabaseUser(groupId: string, databaseName: string, username: string, _options?: Configuration): Promise<CloudDatabaseUser> {
        const result = this.api.getDatabaseUser(groupId, databaseName, username, _options);
        return result.toPromise();
    }

    /**
     * Returns all database users that belong to the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Database Users from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listDatabaseUsers(groupId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedApiAtlasDatabaseUser> {
        const result = this.api.listDatabaseUsers(groupId, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Updates one database user that belongs to the specified project. To use this resource, the requesting API Key must have the Project Owner or Project Charts Admin roles.
     * Update One Database User in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param databaseName Human-readable label that identifies the database against which the database user authenticates. Database users must provide both a username and authentication database to log into MongoDB. If the user authenticates with AWS IAM, x.509, or LDAP, this value should be &#x60;$external&#x60;. If the user authenticates with SCRAM-SHA or OIDC, this value should be &#x60;admin&#x60;.
     * @param username Human-readable label that represents the user that authenticates to MongoDB. The format of this label depends on the method of authentication:  | Authentication Method | Parameter Needed | Parameter Value | username Format | |---|---|---|---| | AWS IAM | awsType | ROLE | &lt;abbr title&#x3D;\&quot;Amazon Resource Name\&quot;&gt;ARN&lt;/abbr&gt; | | AWS IAM | awsType | USER | &lt;abbr title&#x3D;\&quot;Amazon Resource Name\&quot;&gt;ARN&lt;/abbr&gt; | | x.509 | x509Type | CUSTOMER | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | x.509 | x509Type | MANAGED | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | LDAP | ldapAuthType | USER | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | LDAP | ldapAuthType | GROUP | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | OIDC | oidcAuthType | IDP_GROUP | Atlas OIDC IdP ID (found in federation settings), followed by a &#39;/&#39;, followed by the IdP group name | | SCRAM-SHA | awsType, x509Type, ldapAuthType, oidcAuthType | NONE | Alphanumeric string | 
     * @param cloudDatabaseUser Updates one database user that belongs to the specified project.
     */
    public updateDatabaseUser(groupId: string, databaseName: string, username: string, cloudDatabaseUser: CloudDatabaseUser, _options?: Configuration): Promise<CloudDatabaseUser> {
        const result = this.api.updateDatabaseUser(groupId, databaseName, username, cloudDatabaseUser, _options);
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
     */
    public getEncryptionAtRest(groupId: string, _options?: Configuration): Promise<EncryptionAtRest> {
        const result = this.api.getEncryptionAtRest(groupId, _options);
        return result.toPromise();
    }

    /**
     * Updates the configuration for encryption at rest using the keys you manage through your cloud provider. MongoDB Cloud encrypts all storage even if you don't use your own key management. This resource requires the requesting API Key to have the Project Owner role. This feature isn't available for `M0` free clusters, `M2`, `M5`, or serverless clusters.   After you configure at least one Encryption at Rest using a Customer Key Management provider for the MongoDB Cloud project, Project Owners can enable Encryption at Rest using Customer Key Management for each MongoDB Cloud cluster for which they require encryption. The Encryption at Rest using Customer Key Management provider doesn't have to match the cluster cloud service provider. MongoDB Cloud doesn't automatically rotate user-managed encryption keys. Defer to your preferred Encryption at Rest using Customer Key Management provider's documentation and guidance for best practices on key rotation. MongoDB Cloud automatically creates a 90-day key rotation alert when you configure Encryption at Rest using Customer Key Management using your Key Management in an MongoDB Cloud project. MongoDB Cloud encrypts all storage whether or not you use your own key management.
     * Update Configuration for Encryption at Rest using Customer-Managed Keys for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param encryptionAtRest Required parameters depend on whether someone has enabled Encryption at Rest using Customer Key Management:  If you have enabled Encryption at Rest using Customer Key Management (CMK), Atlas requires all of the parameters for the desired encryption provider.  - To use AWS Key Management Service (KMS), MongoDB Cloud requires all the fields in the **awsKms** object. - To use Azure Key Vault, MongoDB Cloud requires all the fields in the **azureKeyVault** object. - To use Google Cloud Key Management Service (KMS), MongoDB Cloud requires all the fields in the **googleCloudKms** object.  If you enabled Encryption at Rest using Customer Key  Management, administrators can pass only the changed fields for the **awsKms**, **azureKeyVault**, or **googleCloudKms** object to update the configuration to this endpoint.
     */
    public updateEncryptionAtRest(groupId: string, encryptionAtRest: EncryptionAtRest, _options?: Configuration): Promise<EncryptionAtRest> {
        const result = this.api.updateEncryptionAtRest(groupId, encryptionAtRest, _options);
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
     * Returns one event for the specified organization. Events identify significant database, billing, or security activities or status changes. To use this resource, the requesting API Key must have the Organization Member role.  This resource remains under revision and may change.
     * Return One Event from One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param eventId Unique 24-hexadecimal digit string that identifies the event that you want to return. Use the [/events](#tag/Events/operation/listOrganizationEvents) endpoint to retrieve all events to which the authenticated user has access.
     * @param includeRaw Flag that indicates whether to include the raw document in the output. The raw document contains additional meta information about the event.
     */
    public getOrganizationEvent(orgId: string, eventId: string, includeRaw?: boolean, _options?: Configuration): Promise<EventViewForOrg> {
        const result = this.api.getOrganizationEvent(orgId, eventId, includeRaw, _options);
        return result.toPromise();
    }

    /**
     * Returns one event for the specified project. Events identify significant database, billing, or security activities or status changes. To use this resource, the requesting API Key must have the Project Read Only role.  This resource remains under revision and may change.
     * Return One Event from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param eventId Unique 24-hexadecimal digit string that identifies the event that you want to return. Use the [/events](#tag/Events/operation/listProjectEvents) endpoint to retrieve all events to which the authenticated user has access.
     * @param includeRaw Flag that indicates whether to include the raw document in the output. The raw document contains additional meta information about the event.
     */
    public getProjectEvent(groupId: string, eventId: string, includeRaw?: boolean, _options?: Configuration): Promise<EventViewForNdsGroup> {
        const result = this.api.getProjectEvent(groupId, eventId, includeRaw, _options);
        return result.toPromise();
    }

    /**
     * Returns all events for the specified organization. Events identify significant database, billing, or security activities or status changes. To use this resource, the requesting API Key must have the Organization Member role.  This resource remains under revision and may change.
     * Return All Events from One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param eventType Category of incident recorded at this moment in time.  **IMPORTANT**: The complete list of event type values changes frequently.
     * @param includeRaw Flag that indicates whether to include the raw document in the output. The raw document contains additional meta information about the event.
     * @param maxDate Date and time from when MongoDB Cloud stops returning events. This parameter uses the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;ISO 8601&lt;/a&gt; timestamp format in UTC.
     * @param minDate Date and time from when MongoDB Cloud starts returning events. This parameter uses the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;ISO 8601&lt;/a&gt; timestamp format in UTC.
     */
    public listOrganizationEvents(orgId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, eventType?: Array<string>, includeRaw?: boolean, maxDate?: Date, minDate?: Date, _options?: Configuration): Promise<OrgPaginatedEvent> {
        const result = this.api.listOrganizationEvents(orgId, includeCount, itemsPerPage, pageNum, eventType, includeRaw, maxDate, minDate, _options);
        return result.toPromise();
    }

    /**
     * Returns one event for the specified project. Events identify significant database, billing, or security activities or status changes. To use this resource, the requesting API Key must have the Project Read Only role.  This resource remains under revision and may change.
     * Return All Events from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param clusterNames Human-readable label that identifies the cluster.
     * @param eventType Category of incident recorded at this moment in time.  **IMPORTANT**: The complete list of event type values changes frequently.
     * @param excludedEventType Category of event that you would like to exclude from query results, such as CLUSTER_CREATED  **IMPORTANT**: Event type names change frequently. Verify that you specify the event type correctly by checking the complete list of event types.
     * @param includeRaw Flag that indicates whether to include the raw document in the output. The raw document contains additional meta information about the event.
     * @param maxDate Date and time from when MongoDB Cloud stops returning events. This parameter uses the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;ISO 8601&lt;/a&gt; timestamp format in UTC.
     * @param minDate Date and time from when MongoDB Cloud starts returning events. This parameter uses the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;ISO 8601&lt;/a&gt; timestamp format in UTC.
     */
    public listProjectEvents(groupId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, clusterNames?: Array<string>, eventType?: Array<string>, excludedEventType?: Array<string>, includeRaw?: boolean, maxDate?: Date, minDate?: Date, _options?: Configuration): Promise<GroupPaginatedEvent> {
        const result = this.api.listProjectEvents(groupId, includeCount, itemsPerPage, pageNum, clusterNames, eventType, excludedEventType, includeRaw, maxDate, minDate, _options);
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
     * Adds one role mapping to the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role.
     * Add One Role Mapping to One Organization
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param authFederationRoleMapping The role mapping that you want to create.
     */
    public createRoleMapping(federationSettingsId: string, orgId: string, authFederationRoleMapping: AuthFederationRoleMapping, _options?: Configuration): Promise<AuthFederationRoleMapping> {
        const result = this.api.createRoleMapping(federationSettingsId, orgId, authFederationRoleMapping, _options);
        return result.toPromise();
    }

    /**
     * Deletes the federation settings instance and all associated data, including identity providers and domains. To use this resource, the requesting API Key must have the Organization Owner role in the last remaining connected organization. **Note**: requests to this resource will fail if there is more than one connected organization in the federation.
     * Delete the federation settings instance.
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     */
    public deleteFederationApp(federationSettingsId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteFederationApp(federationSettingsId, _options);
        return result.toPromise();
    }

    /**
     * Removes one role mapping in the specified organization from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role.
     * Remove One Role Mapping from One Organization
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param id Unique 24-hexadecimal digit string that identifies the role mapping that you want to remove.
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     */
    public deleteRoleMapping(federationSettingsId: string, id: string, orgId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteRoleMapping(federationSettingsId, id, orgId, _options);
        return result.toPromise();
    }

    /**
     * Returns the specified connected org config from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in the connected org.
     * Return One Org Config Connected to One Federation
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param orgId Unique 24-hexadecimal digit string that identifies the connected organization configuration to return.
     */
    public getConnectedOrgConfig(federationSettingsId: string, orgId: string, _options?: Configuration): Promise<ConnectedOrgConfig> {
        const result = this.api.getConnectedOrgConfig(federationSettingsId, orgId, _options);
        return result.toPromise();
    }

    /**
     * Returns information about the federation settings for the specified organization. To use this resource, the requesting API Key must have the Organization Owner role in the connected org.
     * Return Federation Settings for One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     */
    public getFederationSettings(orgId: string, _options?: Configuration): Promise<OrgFederationSettings> {
        const result = this.api.getFederationSettings(orgId, _options);
        return result.toPromise();
    }

    /**
     * Returns one identity provider in the specified federation by the identity provider's id. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations. Deprecated versions: v2-{2023-01-01}
     * Return one identity provider from the specified federation by id.
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param identityProviderId Unique 20-hexadecimal digit string that identifies the identity provider.
     */
    public getIdentityProvider(federationSettingsId: string, identityProviderId: string, _options?: Configuration): Promise<FederationIdentityProvider> {
        const result = this.api.getIdentityProvider(federationSettingsId, identityProviderId, _options);
        return result.toPromise();
    }

    /**
     * Returns the metadata of one identity provider in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations.
     * Return the metadata of one identity provider in the specified federation.
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param identityProviderId Unique 20-hexadecimal digit string that identifies the identity provider.
     */
    public getIdentityProviderMetadata(federationSettingsId: string, identityProviderId: string, _options?: Configuration): Promise<string> {
        const result = this.api.getIdentityProviderMetadata(federationSettingsId, identityProviderId, _options);
        return result.toPromise();
    }

    /**
     * Returns one role mapping from the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role.
     * Return One Role Mapping from One Organization
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param id Unique 24-hexadecimal digit string that identifies the role mapping that you want to return.
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     */
    public getRoleMapping(federationSettingsId: string, id: string, orgId: string, _options?: Configuration): Promise<AuthFederationRoleMapping> {
        const result = this.api.getRoleMapping(federationSettingsId, id, orgId, _options);
        return result.toPromise();
    }

    /**
     * Returns all connected org configs in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected orgs.
     * Return All Connected Org Configs from the Federation
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     */
    public listConnectedOrgConfigs(federationSettingsId: string, _options?: Configuration): Promise<Array<ConnectedOrgConfig>> {
        const result = this.api.listConnectedOrgConfigs(federationSettingsId, _options);
        return result.toPromise();
    }

    /**
     * Returns all identity providers with the provided protocol in the specified federation. If no protocol is specified, only SAML identity providers will be returned. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations.
     * Return all identity providers from the specified federation.
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param protocol The protocols of the target identity providers.
     */
    public listIdentityProviders(federationSettingsId: string, protocol?: string, _options?: Configuration): Promise<Array<FederationIdentityProvider>> {
        const result = this.api.listIdentityProviders(federationSettingsId, protocol, _options);
        return result.toPromise();
    }

    /**
     * Returns all role mappings from the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role.
     * Return All Role Mappings from One Organization
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     */
    public listRoleMappings(federationSettingsId: string, orgId: string, _options?: Configuration): Promise<PaginatedRoleMapping> {
        const result = this.api.listRoleMappings(federationSettingsId, orgId, _options);
        return result.toPromise();
    }

    /**
     * Removes one connected organization configuration from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. Note: This request fails if only one connected organization exists in the federation.
     * Remove One Org Config Connected to One Federation
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param orgId Unique 24-hexadecimal digit string that identifies the connected organization configuration to remove.
     */
    public removeConnectedOrgConfig(federationSettingsId: string, orgId: string, _options?: Configuration): Promise<any> {
        const result = this.api.removeConnectedOrgConfig(federationSettingsId, orgId, _options);
        return result.toPromise();
    }

    /**
     * Updates one connected organization configuration from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role.   **Note** If the organization configuration has no associated identity provider, you can't use this resource to update role mappings or post authorization role grants.    **Note**: The domainRestrictionEnabled field defaults to false if not provided in the request.   **Note**: If the identityProviderId field is not provided, you will disconnect the organization and the identity provider.
     * Update One Org Config Connected to One Federation
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param orgId Unique 24-hexadecimal digit string that identifies the connected organization configuration to update.
     * @param connectedOrgConfig The connected organization configuration that you want to update.
     */
    public updateConnectedOrgConfig(federationSettingsId: string, orgId: string, connectedOrgConfig: ConnectedOrgConfig, _options?: Configuration): Promise<ConnectedOrgConfig> {
        const result = this.api.updateConnectedOrgConfig(federationSettingsId, orgId, connectedOrgConfig, _options);
        return result.toPromise();
    }

    /**
     * Updates one identity provider in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations. Deprecated versions: v2-{2023-01-01}
     * Update the identity provider.
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param identityProviderId Unique 20-hexadecimal digit string that identifies the identity provider.
     * @param identityProviderUpdate The identity provider that you want to update.
     */
    public updateIdentityProvider(federationSettingsId: string, identityProviderId: string, identityProviderUpdate: IdentityProviderUpdate, _options?: Configuration): Promise<FederationIdentityProvider> {
        const result = this.api.updateIdentityProvider(federationSettingsId, identityProviderId, identityProviderUpdate, _options);
        return result.toPromise();
    }

    /**
     * Updates one role mapping in the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role.
     * Update One Role Mapping in One Organization
     * @param federationSettingsId Unique 24-hexadecimal digit string that identifies your federation.
     * @param id Unique 24-hexadecimal digit string that identifies the role mapping that you want to update.
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param authFederationRoleMapping The role mapping that you want to update.
     */
    public updateRoleMapping(federationSettingsId: string, id: string, orgId: string, authFederationRoleMapping: AuthFederationRoleMapping, _options?: Configuration): Promise<AuthFederationRoleMapping> {
        const result = this.api.updateRoleMapping(federationSettingsId, id, orgId, authFederationRoleMapping, _options);
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
     * Creates one custom zone mapping for the specified global cluster. A custom zone mapping matches one ISO 3166-2 location code to a zone in your global cluster. By default, MongoDB Cloud maps each location code to the closest geographical zone. To use this resource, the requesting API Key must have the Project Owner role. Deprecated versions: v2-{2023-01-01}
     * Add One Entry to One Custom Zone Mapping
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies this advanced cluster.
     * @param customZoneMappings Custom zone mapping to add to the specified global cluster.
     */
    public createCustomZoneMapping(groupId: string, clusterName: string, customZoneMappings: CustomZoneMappings, _options?: Configuration): Promise<GeoSharding> {
        const result = this.api.createCustomZoneMapping(groupId, clusterName, customZoneMappings, _options);
        return result.toPromise();
    }

    /**
     * Creates one managed namespace within the specified global cluster. A managed namespace identifies a collection using the database name, the dot separator, and the collection name. To use this resource, the requesting API Key must have the Project Data Access Admin role. Deprecated versions: v2-{2023-01-01}
     * Create One Managed Namespace in One Global Multi-Cloud Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies this advanced cluster.
     * @param managedNamespace Managed namespace to create within the specified global cluster.
     */
    public createManagedNamespace(groupId: string, clusterName: string, managedNamespace: ManagedNamespace, _options?: Configuration): Promise<GeoSharding> {
        const result = this.api.createManagedNamespace(groupId, clusterName, managedNamespace, _options);
        return result.toPromise();
    }

    /**
     * Removes all custom zone mappings for the specified global cluster. A custom zone mapping matches one ISO 3166-2 location code to a zone in your global cluster. Removing the custom zone mappings restores the default mapping. By default, MongoDB Cloud maps each location code to the closest geographical zone. To use this resource, the requesting API Key must have the Project Owner role. Deprecated versions: v2-{2023-01-01}
     * Remove All Custom Zone Mappings from One Global Multi-Cloud Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies this advanced cluster.
     */
    public deleteAllCustomZoneMappings(groupId: string, clusterName: string, _options?: Configuration): Promise<GeoSharding> {
        const result = this.api.deleteAllCustomZoneMappings(groupId, clusterName, _options);
        return result.toPromise();
    }

    /**
     * Removes one managed namespace within the specified global cluster. A managed namespace identifies a collection using the database name, the dot separator, and the collection name. Deleting a managed namespace does not remove the associated collection or data. To use this resource, the requesting API Key must have the Project Data Access Admin role. Deprecated versions: v2-{2023-01-01}
     * Remove One Managed Namespace from One Global Multi-Cloud Cluster
     * @param clusterName Human-readable label that identifies this advanced cluster.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param db Human-readable label that identifies the database that contains the collection.
     * @param collection Human-readable label that identifies the collection associated with the managed namespace.
     */
    public deleteManagedNamespace(clusterName: string, groupId: string, db?: string, collection?: string, _options?: Configuration): Promise<GeoSharding> {
        const result = this.api.deleteManagedNamespace(clusterName, groupId, db, collection, _options);
        return result.toPromise();
    }

    /**
     * Returns one managed namespace within the specified global cluster. A managed namespace identifies a collection using the database name, the dot separator, and the collection name. To use this resource, the requesting API Key must have the Project Read Only role. Deprecated versions: v2-{2023-01-01}
     * Return One Managed Namespace in One Global Multi-Cloud Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies this advanced cluster.
     */
    public getManagedNamespace(groupId: string, clusterName: string, _options?: Configuration): Promise<GeoSharding> {
        const result = this.api.getManagedNamespace(groupId, clusterName, _options);
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
     * Creates a query process within the Cost Explorer for the given parameters. A token is returned that can be used to poll the status of the query and eventually retrievethe results.
     * Create Cost Explorer query process
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param costExplorerFilterRequestBody Filter parameters for the Cost Explorer query.
     */
    public createCostExplorerQueryProcess(orgId: string, costExplorerFilterRequestBody: CostExplorerFilterRequestBody, _options?: Configuration): Promise<CostExplorerFilterResponse> {
        const result = this.api.createCostExplorerQueryProcess(orgId, costExplorerFilterRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Returns the usage details for a Cost Explorer query, if the query is finished and the data is ready to be viewed. If the data is not ready, a 'processing' response willindicate that another request should be sent later to view the data.
     * Return results from a given Cost Explorer query, or notify that the results are not ready yet.
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param token Unique 64 digit string that identifies the Cost Explorer query.
     */
    public createCostExplorerQueryProcess1(orgId: string, token: string, _options?: Configuration): Promise<string> {
        const result = this.api.createCostExplorerQueryProcess1(orgId, token, _options);
        return result.toPromise();
    }

    /**
     * Returns one invoice that MongoDB issued to the specified organization in CSV format. A unique 24-hexadecimal digit string identifies the invoice. To use this resource, the requesting API Key have at least the Organization Billing Viewer, Organization Billing Admin, or Organization Owner role. If you have a cross-organization setup, you can query for a linked invoice if you have the Organization Billing Admin or Organization Owner Role.
     * Return One Organization Invoice as CSV
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param invoiceId Unique 24-hexadecimal digit string that identifies the invoice submitted to the specified organization. Charges typically post the next day.
     */
    public downloadInvoiceCSV(orgId: string, invoiceId: string, _options?: Configuration): Promise<string> {
        const result = this.api.downloadInvoiceCSV(orgId, invoiceId, _options);
        return result.toPromise();
    }

    /**
     * Returns one invoice that MongoDB issued to the specified organization. A unique 24-hexadecimal digit string identifies the invoice. You can choose to receive this invoice in JSON or CSV format. To use this resource, the requesting API Key must have the Organization Billing Viewer, Organization Billing Admin, or Organization Owner role. If you have a cross-organization setup, you can query for a linked invoice if you have the Organization Billing Admin or Organization Owner role.
     * Return One Organization Invoice
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param invoiceId Unique 24-hexadecimal digit string that identifies the invoice submitted to the specified organization. Charges typically post the next day.
     */
    public getInvoice(orgId: string, invoiceId: string, _options?: Configuration): Promise<string> {
        const result = this.api.getInvoice(orgId, invoiceId, _options);
        return result.toPromise();
    }

    /**
     * Returns all invoices that MongoDB issued to the specified organization. This list includes all invoices regardless of invoice status. To use this resource, the requesting API Key must have the Organization Billing Viewer, Organization Billing Admin, or Organization Owner role. If you have a cross-organization setup, you can view linked invoices if you have the Organization Billing Admin or Organization Owner role.
     * Return All Invoices for One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listInvoices(orgId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedApiInvoice> {
        const result = this.api.listInvoices(orgId, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Returns all invoices accruing charges for the current billing cycle for the specified organization. To use this resource, the requesting API Key must have the Organization Billing Viewer, Organization Billing Admin, or Organization Owner role. If you have a cross-organization setup, you can view linked invoices if you have the Organization Billing Admin or Organization Owner Role.
     * Return All Pending Invoices for One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     */
    public listPendingInvoices(orgId: string, _options?: Configuration): Promise<PaginatedApiInvoice> {
        const result = this.api.listPendingInvoices(orgId, _options);
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
     * Removes the current LDAP Distinguished Name mapping captured in the ``userToDNMapping`` document from the LDAP configuration for the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove the Current LDAP User to DN Mapping
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public deleteLDAPConfiguration(groupId: string, _options?: Configuration): Promise<UserSecurity> {
        const result = this.api.deleteLDAPConfiguration(groupId, _options);
        return result.toPromise();
    }

    /**
     * Returns the current LDAP configuration for the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Return the Current LDAP or X.509 Configuration
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public getLDAPConfiguration(groupId: string, _options?: Configuration): Promise<UserSecurity> {
        const result = this.api.getLDAPConfiguration(groupId, _options);
        return result.toPromise();
    }

    /**
     * Returns the status of one request to verify one LDAP configuration for the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Return the Status of One Verify LDAP Configuration Request
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param requestId Unique string that identifies the request to verify an &lt;abbr title&#x3D;\&quot;Lightweight Directory Access Protocol\&quot;&gt;LDAP&lt;/abbr&gt; configuration.
     */
    public getLDAPConfigurationStatus(groupId: string, requestId: string, _options?: Configuration): Promise<LDAPVerifyConnectivityJobRequest> {
        const result = this.api.getLDAPConfigurationStatus(groupId, requestId, _options);
        return result.toPromise();
    }

    /**
     * Edits the LDAP configuration for the specified project. To use this resource, the requesting API Key must have the Project Owner role.  Updating this configuration triggers a rolling restart of the database.
     * Edit the LDAP or X.509 Configuration
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param userSecurity Updates the LDAP configuration for the specified project.
     */
    public saveLDAPConfiguration(groupId: string, userSecurity: UserSecurity, _options?: Configuration): Promise<UserSecurity> {
        const result = this.api.saveLDAPConfiguration(groupId, userSecurity, _options);
        return result.toPromise();
    }

    /**
     * Verifies the LDAP configuration for the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Verify the LDAP Configuration in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param lDAPVerifyConnectivityJobRequestParams The LDAP configuration for the specified project that you want to verify.
     */
    public verifyLDAPConfiguration(groupId: string, lDAPVerifyConnectivityJobRequestParams: LDAPVerifyConnectivityJobRequestParams, _options?: Configuration): Promise<LDAPVerifyConnectivityJobRequest> {
        const result = this.api.verifyLDAPConfiguration(groupId, lDAPVerifyConnectivityJobRequestParams, _options);
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
     * Removes one legacy backup snapshot for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Owner role. Effective 23 March 2020, all new clusters can use only Cloud Backups. When you upgrade to 4.2, your backup system upgrades to cloud backup if it is currently set to legacy backup. After this upgrade, all your existing legacy backup snapshots remain available. They expire over time in accordance with your retention policy. Your backup policy resets to the default schedule. If you had a custom backup policy in place with legacy backups, you must re-create it with the procedure outlined in the [Cloud Backup documentation](https://www.mongodb.com/docs/atlas/backup/cloud-backup/scheduling/#std-label-cloud-provider-backup-schedule).
     * Remove One Legacy Backup Snapshot
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param snapshotId Unique 24-hexadecimal digit string that identifies the desired snapshot.
     */
    public deleteLegacySnapshot(groupId: string, clusterName: string, snapshotId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteLegacySnapshot(groupId, clusterName, snapshotId, _options);
        return result.toPromise();
    }

    /**
     * Returns one legacy backup checkpoint for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Legacy Backup Checkpoint
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param checkpointId Unique 24-hexadecimal digit string that identifies the checkpoint.
     * @param clusterName Human-readable label that identifies the cluster that contains the checkpoints that you want to return.
     */
    public getLegacyBackupCheckpoint(groupId: string, checkpointId: string, clusterName: string, _options?: Configuration): Promise<ApiAtlasCheckpoint> {
        const result = this.api.getLegacyBackupCheckpoint(groupId, checkpointId, clusterName, _options);
        return result.toPromise();
    }

    /**
     * Returns one legacy backup restore job for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.   Effective 23 March 2020, all new clusters can use only Cloud Backups. When you upgrade to 4.2, your backup system upgrades to cloud backup if it is currently set to legacy backup. After this upgrade, all your existing legacy backup snapshots remain available. They expire over time in accordance with your retention policy. Your backup policy resets to the default schedule. If you had a custom backup policy in place with legacy backups, you must re-create it with the procedure outlined in the [Cloud Backup documentation](https://www.mongodb.com/docs/atlas/backup/cloud-backup/scheduling/#std-label-cloud-provider-backup-schedule).
     * Return One Legacy Backup Restore Job
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster with the snapshot you want to return.
     * @param jobId Unique 24-hexadecimal digit string that identifies the restore job.
     */
    public getLegacyBackupRestoreJob(groupId: string, clusterName: string, jobId: string, _options?: Configuration): Promise<BackupRestoreJob> {
        const result = this.api.getLegacyBackupRestoreJob(groupId, clusterName, jobId, _options);
        return result.toPromise();
    }

    /**
     * Returns one legacy backup snapshot for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. Effective 23 March 2020, all new clusters can use only Cloud Backups. When you upgrade to 4.2, your backup system upgrades to cloud backup if it is currently set to legacy backup. After this upgrade, all your existing legacy backup snapshots remain available. They expire over time in accordance with your retention policy. Your backup policy resets to the default schedule. If you had a custom backup policy in place with legacy backups, you must re-create it with the procedure outlined in the [Cloud Backup documentation](https://www.mongodb.com/docs/atlas/backup/cloud-backup/scheduling/#std-label-cloud-provider-backup-schedule).
     * Return One Legacy Backup Snapshot
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param snapshotId Unique 24-hexadecimal digit string that identifies the desired snapshot.
     */
    public getLegacySnapshot(groupId: string, clusterName: string, snapshotId: string, _options?: Configuration): Promise<BackupSnapshot> {
        const result = this.api.getLegacySnapshot(groupId, clusterName, snapshotId, _options);
        return result.toPromise();
    }

    /**
     * Returns the snapshot schedule for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.   Effective 23 March 2020, all new clusters can use only Cloud Backups. When you upgrade to 4.2, your backup system upgrades to cloud backup if it is currently set to legacy backup. After this upgrade, all your existing legacy backup snapshots remain available. They expire over time in accordance with your retention policy. Your backup policy resets to the default schedule. If you had a custom backup policy in place with legacy backups, you must re-create it with the procedure outlined in the [Cloud Backup documentation](https://www.mongodb.com/docs/atlas/backup/cloud-backup/scheduling/#std-label-cloud-provider-backup-schedule).
     * Return One Snapshot Schedule
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster with the snapshot you want to return.
     */
    public getLegacySnapshotSchedule(groupId: string, clusterName: string, _options?: Configuration): Promise<ApiAtlasSnapshotSchedule> {
        const result = this.api.getLegacySnapshotSchedule(groupId, clusterName, _options);
        return result.toPromise();
    }

    /**
     * Returns all legacy backup checkpoints for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Legacy Backup Checkpoints
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster that contains the checkpoints that you want to return.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listLegacyBackupCheckpoints(groupId: string, clusterName: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedApiAtlasCheckpoint> {
        const result = this.api.listLegacyBackupCheckpoints(groupId, clusterName, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Returns all legacy backup restore jobs for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.   Effective 23 March 2020, all new clusters can use only Cloud Backups. When you upgrade to 4.2, your backup system upgrades to cloud backup if it is currently set to legacy backup. After this upgrade, all your existing legacy backup snapshots remain available. They expire over time in accordance with your retention policy. Your backup policy resets to the default schedule. If you had a custom backup policy in place with legacy backups, you must re-create it with the procedure outlined in the [Cloud Backup documentation](https://www.mongodb.com/docs/atlas/backup/cloud-backup/scheduling/#std-label-cloud-provider-backup-schedule). If you use the `BATCH-ID` query parameter, you can retrieve all restore jobs in the specified batch. When creating a restore job for a sharded cluster, MongoDB Cloud creates a separate job for each shard, plus another for the config server. Each of those jobs are part of a batch. However, a batch can't include a restore job for a replica set.
     * Return All Legacy Backup Restore Jobs
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster with the snapshot you want to return.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param batchId Unique 24-hexadecimal digit string that identifies the batch of restore jobs to return. Timestamp in ISO 8601 date and time format in UTC when creating a restore job for a sharded cluster, Application creates a separate job for each shard, plus another for the config host. Each of these jobs comprise one batch. A restore job for a replica set can&#39;t be part of a batch.
     */
    public listLegacyBackupRestoreJobs(groupId: string, clusterName: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, batchId?: string, _options?: Configuration): Promise<PaginatedRestoreJob> {
        const result = this.api.listLegacyBackupRestoreJobs(groupId, clusterName, includeCount, itemsPerPage, pageNum, batchId, _options);
        return result.toPromise();
    }

    /**
     * Returns all legacy backup snapshots for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. Effective 23 March 2020, all new clusters can use only Cloud Backups. When you upgrade to 4.2, your backup system upgrades to cloud backup if it is currently set to legacy backup. After this upgrade, all your existing legacy backup snapshots remain available. They expire over time in accordance with your retention policy. Your backup policy resets to the default schedule. If you had a custom backup policy in place with legacy backups, you must re-create it with the procedure outlined in the [Cloud Backup documentation](https://www.mongodb.com/docs/atlas/backup/cloud-backup/scheduling/#std-label-cloud-provider-backup-schedule).
     * Return All Legacy Backup Snapshots
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param completed Human-readable label that specifies whether to return only completed, incomplete, or all snapshots. By default, MongoDB Cloud only returns completed snapshots.
     */
    public listLegacySnapshots(groupId: string, clusterName: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, completed?: string, _options?: Configuration): Promise<PaginatedSnapshot> {
        const result = this.api.listLegacySnapshots(groupId, clusterName, includeCount, itemsPerPage, pageNum, completed, _options);
        return result.toPromise();
    }

    /**
     * Changes the expiration date for one legacy backup snapshot for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Owner role. Effective 23 March 2020, all new clusters can use only Cloud Backups. When you upgrade to 4.2, your backup system upgrades to cloud backup if it is currently set to legacy backup. After this upgrade, all your existing legacy backup snapshots remain available. They expire over time in accordance with your retention policy. Your backup policy resets to the default schedule. If you had a custom backup policy in place with legacy backups, you must re-create it with the procedure outlined in the [Cloud Backup documentation](https://www.mongodb.com/docs/atlas/backup/cloud-backup/scheduling/#std-label-cloud-provider-backup-schedule).
     * Change One Legacy Backup Snapshot Expiration
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param snapshotId Unique 24-hexadecimal digit string that identifies the desired snapshot.
     * @param backupSnapshot Changes One Legacy Backup Snapshot Expiration.
     */
    public updateLegacySnapshotRetention(groupId: string, clusterName: string, snapshotId: string, backupSnapshot: BackupSnapshot, _options?: Configuration): Promise<BackupSnapshot> {
        const result = this.api.updateLegacySnapshotRetention(groupId, clusterName, snapshotId, backupSnapshot, _options);
        return result.toPromise();
    }

    /**
     * Updates the snapshot schedule for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Owner role.   Effective 23 March 2020, all new clusters can use only Cloud Backups. When you upgrade to 4.2, your backup system upgrades to cloud backup if it is currently set to legacy backup. After this upgrade, all your existing legacy backup snapshots remain available. They expire over time in accordance with your retention policy. Your backup policy resets to the default schedule. If you had a custom backup policy in place with legacy backups, you must re-create it with the procedure outlined in the [Cloud Backup documentation](https://www.mongodb.com/docs/atlas/backup/cloud-backup/scheduling/#std-label-cloud-provider-backup-schedule).
     * Update Snapshot Schedule for One Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster with the snapshot you want to return.
     * @param apiAtlasSnapshotSchedule Update the snapshot schedule for one cluster in the specified project.
     */
    public updateLegacySnapshotSchedule(groupId: string, clusterName: string, apiAtlasSnapshotSchedule: ApiAtlasSnapshotSchedule, _options?: Configuration): Promise<ApiAtlasSnapshotSchedule> {
        const result = this.api.updateLegacySnapshotSchedule(groupId, clusterName, apiAtlasSnapshotSchedule, _options);
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
     * Restores one legacy backup for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Owner role. Effective 23 March 2020, all new clusters can use only Cloud Backups. When you upgrade to 4.2, your backup system upgrades to cloud backup if it is currently set to legacy backup. After this upgrade, all your existing legacy backup snapshots remain available. They expire over time in accordance with your retention policy. Your backup policy resets to the default schedule. If you had a custom backup policy in place with legacy backups, you must re-create it with the procedure outlined in the [Cloud Backup documentation](https://www.mongodb.com/docs/atlas/backup/cloud-backup/scheduling/#std-label-cloud-provider-backup-schedule). This endpoint doesn't support creating checkpoint restore jobs for sharded clusters, or creating restore jobs for queryable backup snapshots. If you create an automated restore job by specifying `delivery.methodName` of `AUTOMATED_RESTORE` in your request body, MongoDB Cloud removes all existing data on the target cluster prior to the restore.
     * Create One Legacy Backup Restore Job
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster with the snapshot you want to return.
     * @param backupRestoreJob Legacy backup to restore to one cluster in the specified project.
     */
    public createLegacyBackupRestoreJob(groupId: string, clusterName: string, backupRestoreJob: BackupRestoreJob, _options?: Configuration): Promise<PaginatedRestoreJob> {
        const result = this.api.createLegacyBackupRestoreJob(groupId, clusterName, backupRestoreJob, _options);
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
     * Defers the maintenance window for the specified project. Urgent maintenance activities such as security patches can't wait for your chosen window. MongoDB Cloud starts those maintenance activities when needed. After you schedule maintenance for your cluster, you can't change your maintenance window until the current maintenance efforts complete. The maintenance procedure that MongoDB Cloud performs requires at least one replica set election during the maintenance window per replica set. Maintenance always begins as close to the scheduled hour as possible, but in-progress cluster updates or unexpected system issues could delay the start time. To use this resource, the requesting API Key must have the Project Owner role.
     * Defer One Maintenance Window for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public deferMaintenanceWindow(groupId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deferMaintenanceWindow(groupId, _options);
        return result.toPromise();
    }

    /**
     * Returns the maintenance window for the specified project. MongoDB Cloud starts those maintenance activities when needed. You can't change your maintenance window until the current maintenance efforts complete. The maintenance procedure that MongoDB Cloud performs requires at least one replica set election during the maintenance window per replica set. Maintenance always begins as close to the scheduled hour as possible, but in-progress cluster updates or unexpected system issues could delay the start time. To use this resource, the requesting API Key must have the Project Owner role.
     * Return One Maintenance Window for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public getMaintenanceWindow(groupId: string, _options?: Configuration): Promise<GroupMaintenanceWindow> {
        const result = this.api.getMaintenanceWindow(groupId, _options);
        return result.toPromise();
    }

    /**
     * Resets the maintenance window for the specified project. To use this resource, the requesting API Key must have the Project Owner role. Urgent maintenance activities such as security patches can't wait for your chosen window. MongoDB Cloud starts those maintenance activities when needed. After you schedule maintenance for your cluster, you can't change your maintenance window until the current maintenance efforts complete. The maintenance procedure that MongoDB Cloud performs requires at least one replica set election during the maintenance window per replica set. Maintenance always begins as close to the scheduled hour as possible, but in-progress cluster updates or unexpected system issues could delay the start time. To use this resource, the requesting API Key must have the Project Owner role.
     * Reset One Maintenance Window for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public resetMaintenanceWindow(groupId: string, _options?: Configuration): Promise<void> {
        const result = this.api.resetMaintenanceWindow(groupId, _options);
        return result.toPromise();
    }

    /**
     * Toggles automatic deferral of the maintenance window for the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Toggle Automatic Deferral of Maintenance for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public toggleMaintenanceAutoDefer(groupId: string, _options?: Configuration): Promise<void> {
        const result = this.api.toggleMaintenanceAutoDefer(groupId, _options);
        return result.toPromise();
    }

    /**
     * Updates the maintenance window for the specified project. Urgent maintenance activities such as security patches can't wait for your chosen window. MongoDB Cloud starts those maintenance activities when needed. After you schedule maintenance for your cluster, you can't change your maintenance window until the current maintenance efforts complete. The maintenance procedure that MongoDB Cloud performs requires at least one replica set election during the maintenance window per replica set. Maintenance always begins as close to the scheduled hour as possible, but in-progress cluster updates or unexpected system issues could delay the start time. To use this resource, the requesting API Key must have the Project Owner role.
     * Update Maintenance Window for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param groupMaintenanceWindow Updates the maintenance window for the specified project.
     */
    public updateMaintenanceWindow(groupId: string, groupMaintenanceWindow: GroupMaintenanceWindow, _options?: Configuration): Promise<any> {
        const result = this.api.updateMaintenanceWindow(groupId, groupMaintenanceWindow, _options);
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
     * Creates one MongoDB Cloud user account. A MongoDB Cloud user account grants access to only the MongoDB Cloud application. To grant database access, create a database user. MongoDB Cloud sends an email to the users you specify, inviting them to join the project. Invited users don't have access to the project until they accept the invitation. Invitations expire after 30 days.   MongoDB Cloud limits MongoDB Cloud user membership to a maximum of 250 MongoDB Cloud users per team. MongoDB Cloud limits MongoDB Cloud user membership to 500 MongoDB Cloud users per project and 500 MongoDB Cloud users per organization, which includes the combined membership of all projects in the organization. MongoDB Cloud raises an error if an operation exceeds these limits. For example, if you have an organization with five projects, and each project has 100 MongoDB Cloud users, and each MongoDB Cloud user belongs to only one project, you can't add any MongoDB Cloud users to this organization without first removing existing MongoDB Cloud users from the organization.   To use this resource, the requesting API Key can have any role.
     * Create One MongoDB Cloud User
     * @param cloudAppUser MongoDB Cloud user account to create.
     */
    public createUser(cloudAppUser: CloudAppUser, _options?: Configuration): Promise<CloudAppUser> {
        const result = this.api.createUser(cloudAppUser, _options);
        return result.toPromise();
    }

    /**
     * Returns the details for one MongoDB Cloud user account with the specified unique identifier for the user. You can't use this endpoint to return information on an API Key. To return information about an API Key, use the [Return One Organization](#tag/Organizations/operation/getOrganization) API Key endpoint. You can always retrieve your own user account. If you are the owner of a MongoDB Cloud organization or project, you can also retrieve the user profile for any user with membership in that organization or project. To use this resource, the requesting API Key can have any role.
     * Return One MongoDB Cloud User using Its ID
     * @param userId Unique 24-hexadecimal digit string that identifies this user.
     */
    public getUser(userId: string, _options?: Configuration): Promise<CloudAppUser> {
        const result = this.api.getUser(userId, _options);
        return result.toPromise();
    }

    /**
     * Returns the details for one MongoDB Cloud user account with the specified username. You can't use this endpoint to return information about an API Key. To return information about an API Key, use the [Return One Organization](#tag/Organizations/operation/getOrganization) API Key endpoint. To use this resource, the requesting API Key can have any role.
     * Return One MongoDB Cloud User using Their Username
     * @param userName Email address that belongs to the MongoDB Cloud user account. You cannot modify this address after creating the user.
     */
    public getUserByUsername(userName: string, _options?: Configuration): Promise<CloudAppUser> {
        const result = this.api.getUserByUsername(userName, _options);
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
     * Returns the processes for the specified host for the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One MongoDB Process by ID
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param processId Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     */
    public getAtlasProcess(groupId: string, processId: string, _options?: Configuration): Promise<ApiHostViewAtlas> {
        const result = this.api.getAtlasProcess(groupId, processId, _options);
        return result.toPromise();
    }

    /**
     * Returns one database running on the specified host for the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Database for a MongoDB Process
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param databaseName Human-readable label that identifies the database that the specified MongoDB process serves.
     * @param processId Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     */
    public getDatabase(groupId: string, databaseName: string, processId: string, _options?: Configuration): Promise<MesurementsDatabase> {
        const result = this.api.getDatabase(groupId, databaseName, processId, _options);
        return result.toPromise();
    }

    /**
     * Returns the measurements of one database for the specified host for the specified project. Returns the database's on-disk storage space based on the MongoDB `dbStats` command output. To calculate some metric series, Atlas takes the rate between every two adjacent points. For these metric series, the first data point has a null value because Atlas can't calculate a rate for the first data point given the query time range. Atlas retrieves database metrics every 20 minutes but reduces frequency when necessary to optimize database performance. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Measurements of One Database for One MongoDB Process
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param databaseName Human-readable label that identifies the database that the specified MongoDB process serves.
     * @param processId Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param granularity Duration that specifies the interval at which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC.
     * @param m One or more types of measurement to request for this MongoDB process. If omitted, the resource returns all measurements. To specify multiple values for &#x60;m&#x60;, repeat the &#x60;m&#x60; parameter for each value. Specify measurements that apply to the specified host. MongoDB Cloud returns an error if you specified any invalid measurements.
     * @param period Duration over which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC. Include this parameter when you do not set **start** and **end**.
     * @param start Date and time when MongoDB Cloud begins reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @param end Date and time when MongoDB Cloud stops reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     */
    public getDatabaseMeasurements(groupId: string, databaseName: string, processId: string, granularity: string, m?: Set<string>, period?: string, start?: Date, end?: Date, _options?: Configuration): Promise<ApiMeasurementsGeneralViewAtlas> {
        const result = this.api.getDatabaseMeasurements(groupId, databaseName, processId, granularity, m, period, start, end, _options);
        return result.toPromise();
    }

    /**
     * Returns the measurements of one disk or partition for the specified host for the specified project. Returned value can be one of the following: - Throughput of I/O operations for the disk partition used for the MongoDB process - Percentage of time during which requests the partition issued and serviced - Latency per operation type of the disk partition used for the MongoDB process - Amount of free and used disk space on the disk partition used for the MongoDB process  To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Measurements of One Disk for One MongoDB Process
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param partitionName Human-readable label of the disk or partition to which the measurements apply.
     * @param processId Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param granularity Duration that specifies the interval at which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC.
     * @param m One or more types of measurement to request for this MongoDB process. If omitted, the resource returns all measurements. To specify multiple values for &#x60;m&#x60;, repeat the &#x60;m&#x60; parameter for each value. Specify measurements that apply to the specified host. MongoDB Cloud returns an error if you specified any invalid measurements.
     * @param period Duration over which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC. Include this parameter when you do not set **start** and **end**.
     * @param start Date and time when MongoDB Cloud begins reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @param end Date and time when MongoDB Cloud stops reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     */
    public getDiskMeasurements(groupId: string, partitionName: string, processId: string, granularity: string, m?: Set<string>, period?: string, start?: Date, end?: Date, _options?: Configuration): Promise<ApiMeasurementsGeneralViewAtlas> {
        const result = this.api.getDiskMeasurements(groupId, partitionName, processId, granularity, m, period, start, end, _options);
        return result.toPromise();
    }

    /**
     * Returns a compressed (.gz) log file that contains a range of log messages for the specified host for the specified project. MongoDB updates process and audit logs from the cluster backend infrastructure every five minutes and contain log data from the previous five minutes. If you poll the API for log files, we recommend polling every five minutes. For example, if the logs are updated at 4:00 UTC and then you poll the API, the API returns log data from the interval between 3:55 UTC and 4:00 UTC. This feature isn't available for `M0` free clusters, `M2`, `M5`, or serverless clusters. To use this resource, the requesting API Key must have the Project Data Access Read Only or higher role. Deprecated versions: v2-{2023-01-01}
     * Download Logs for One Cluster Host in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param hostName Human-readable label that identifies the host that stores the log files that you want to download.
     * @param logName Human-readable label that identifies the log file that you want to return. To return audit logs, enable *Database Auditing* for the specified project.
     * @param endDate Date and time when the period specifies the inclusive ending point for the range of log messages to retrieve. This parameter expresses its value in the number of seconds that have elapsed since the UNIX epoch.
     * @param startDate Date and time when the period specifies the inclusive starting point for the range of log messages to retrieve. This parameter expresses its value in the number of seconds that have elapsed since the UNIX epoch.
     */
    public getHostLogs(groupId: string, hostName: string, logName: string, endDate?: number, startDate?: number, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.getHostLogs(groupId, hostName, logName, endDate, startDate, _options);
        return result.toPromise();
    }

    /**
     * Returns disk, partition, or host measurements per process for the specified host for the specified project. Returned value can be one of the following: - Throughput of I/O operations for the disk partition used for the MongoDB process - Percentage of time during which requests the partition issued and serviced - Latency per operation type of the disk partition used for the MongoDB process - Amount of free and used disk space on the disk partition used for the MongoDB process - Measurements for the host, such as CPU usage or number of I/O operations  To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Measurements for One MongoDB Process
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param processId Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param granularity Duration that specifies the interval at which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC.
     * @param m One or more types of measurement to request for this MongoDB process. If omitted, the resource returns all measurements. To specify multiple values for &#x60;m&#x60;, repeat the &#x60;m&#x60; parameter for each value. Specify measurements that apply to the specified host. MongoDB Cloud returns an error if you specified any invalid measurements.
     * @param period Duration over which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC. Include this parameter when you do not set **start** and **end**.
     * @param start Date and time when MongoDB Cloud begins reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @param end Date and time when MongoDB Cloud stops reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     */
    public getHostMeasurements(groupId: string, processId: string, granularity: string, m?: Set<string>, period?: string, start?: Date, end?: Date, _options?: Configuration): Promise<ApiMeasurementsGeneralViewAtlas> {
        const result = this.api.getHostMeasurements(groupId, processId, granularity, m, period, start, end, _options);
        return result.toPromise();
    }

    /**
     * Returns the Atlas Search metrics data series within the provided time range for one namespace and index name on the specified process. You must have the Project Read Only or higher role to view the Atlas Search metric types.
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
     */
    public getIndexMetrics(processId: string, indexName: string, databaseName: string, collectionName: string, groupId: string, granularity: string, metrics: Set<string>, period?: string, start?: Date, end?: Date, _options?: Configuration): Promise<MeasurementsIndexes> {
        const result = this.api.getIndexMetrics(processId, indexName, databaseName, collectionName, groupId, granularity, metrics, period, start, end, _options);
        return result.toPromise();
    }

    /**
     * Returns the Atlas Search hardware and status data series within the provided time range for one process in the specified project. You must have the Project Read Only or higher role to view the Atlas Search metric types.
     * Return Atlas Search Hardware and Status Metrics
     * @param processId Combination of hostname and IANA port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (mongod or mongos). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param granularity Duration that specifies the interval at which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC.
     * @param metrics List that contains the metrics that you want MongoDB Atlas to report for the associated data series. If you don&#39;t set this parameter, this resource returns all hardware and status metrics for the associated data series.
     * @param period Duration over which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC. Include this parameter when you do not set **start** and **end**.
     * @param start Date and time when MongoDB Cloud begins reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @param end Date and time when MongoDB Cloud stops reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     */
    public getMeasurements(processId: string, groupId: string, granularity: string, metrics: Set<string>, period?: string, start?: Date, end?: Date, _options?: Configuration): Promise<MeasurementsNonIndex> {
        const result = this.api.getMeasurements(processId, groupId, granularity, metrics, period, start, end, _options);
        return result.toPromise();
    }

    /**
     * Returns details of all processes for the specified project. A MongoDB process can be either a `mongod` or `mongos`. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All MongoDB Processes in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listAtlasProcesses(groupId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedHostViewAtlas> {
        const result = this.api.listAtlasProcesses(groupId, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Returns the list of databases running on the specified host for the specified project. `M0` free clusters, `M2`, `M5`, and serverless clusters have some [operational limits](https://www.mongodb.com/docs/atlas/reference/free-shared-limitations/#operational-limitations). The MongoDB Cloud process must be a `mongod`. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Available Databases for One MongoDB Process
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param processId Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listDatabases(groupId: string, processId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedDatabase> {
        const result = this.api.listDatabases(groupId, processId, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Returns measurement details for one disk or partition for the specified host for the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Measurements of One Disk
     * @param partitionName Human-readable label of the disk or partition to which the measurements apply.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param processId Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     */
    public listDiskMeasurements(partitionName: string, groupId: string, processId: string, _options?: Configuration): Promise<MeasurementDiskPartition> {
        const result = this.api.listDiskMeasurements(partitionName, groupId, processId, _options);
        return result.toPromise();
    }

    /**
     * Returns the list of disks or partitions for the specified host for the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Available Disks for One MongoDB Process
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param processId Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listDiskPartitions(groupId: string, processId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedDiskPartition> {
        const result = this.api.listDiskPartitions(groupId, processId, includeCount, itemsPerPage, pageNum, _options);
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
     */
    public listIndexMetrics(processId: string, databaseName: string, collectionName: string, groupId: string, granularity: string, metrics: Set<string>, period?: string, start?: Date, end?: Date, _options?: Configuration): Promise<MeasurementsIndexes> {
        const result = this.api.listIndexMetrics(processId, databaseName, collectionName, groupId, granularity, metrics, period, start, end, _options);
        return result.toPromise();
    }

    /**
     * Returns all Atlas Search metric types available for one process in the specified project. You must have the Project Read Only or higher role to view the Atlas Search metric types.
     * Return All Atlas Search Metric Types for One Process
     * @param processId Combination of hostname and IANA port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (mongod or mongos). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public listMetricTypes(processId: string, groupId: string, _options?: Configuration): Promise<CloudSearchMetrics> {
        const result = this.api.listMetricTypes(processId, groupId, _options);
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
     * Creates one new network peering connection in the specified project. Network peering allows multiple cloud-hosted applications to securely connect to the same project. To use this resource, the requesting API Key must have the Project Owner role. To learn more about considerations and prerequisites, see the Network Peering Documentation.
     * Create One New Network Peering Connection
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param baseNetworkPeeringConnectionSettings Create one network peering connection.
     */
    public createPeeringConnection(groupId: string, baseNetworkPeeringConnectionSettings: BaseNetworkPeeringConnectionSettings, _options?: Configuration): Promise<BaseNetworkPeeringConnectionSettings> {
        const result = this.api.createPeeringConnection(groupId, baseNetworkPeeringConnectionSettings, _options);
        return result.toPromise();
    }

    /**
     * Creates one new network peering container in the specified project. MongoDB Cloud can deploy Network Peering connections in a network peering container. GCP can have one container per project. AWS and Azure can have one container per cloud provider region. To use this resource, the requesting API Key must have the Project Owner role.
     * Create One New Network Peering Container
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudProviderContainer Creates one new network peering container in the specified project.
     */
    public createPeeringContainer(groupId: string, cloudProviderContainer: CloudProviderContainer, _options?: Configuration): Promise<CloudProviderContainer> {
        const result = this.api.createPeeringContainer(groupId, cloudProviderContainer, _options);
        return result.toPromise();
    }

    /**
     * Removes one network peering connection in the specified project. If you Removes the last network peering connection associated with a project, MongoDB Cloud also removes any AWS security groups from the project IP access list. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Existing Network Peering Connection
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param peerId Unique 24-hexadecimal digit string that identifies the network peering connection that you want to delete.
     */
    public deletePeeringConnection(groupId: string, peerId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deletePeeringConnection(groupId, peerId, _options);
        return result.toPromise();
    }

    /**
     * Removes one network peering container in the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Network Peering Container
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param containerId Unique 24-hexadecimal digit string that identifies the MongoDB Cloud network container that you want to remove.
     */
    public deletePeeringContainer(groupId: string, containerId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deletePeeringContainer(groupId, containerId, _options);
        return result.toPromise();
    }

    /**
     * Disables Connect via Peering Only mode for the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Disable Connect via Peering Only Mode for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param privateIPMode Disables Connect via Peering Only mode for the specified project.
     */
    public disablePeering(groupId: string, privateIPMode: PrivateIPMode, _options?: Configuration): Promise<PrivateIPMode> {
        const result = this.api.disablePeering(groupId, privateIPMode, _options);
        return result.toPromise();
    }

    /**
     * Returns details about one specified network peering connection in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Network Peering Connection in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param peerId Unique 24-hexadecimal digit string that identifies the network peering connection that you want to retrieve.
     */
    public getPeeringConnection(groupId: string, peerId: string, _options?: Configuration): Promise<BaseNetworkPeeringConnectionSettings> {
        const result = this.api.getPeeringConnection(groupId, peerId, _options);
        return result.toPromise();
    }

    /**
     * Returns details about one network peering container in one specified project. Network peering containers contain network peering connections. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Network Peering Container
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param containerId Unique 24-hexadecimal digit string that identifies the MongoDB Cloud network container that you want to remove.
     */
    public getPeeringContainer(groupId: string, containerId: string, _options?: Configuration): Promise<CloudProviderContainer> {
        const result = this.api.getPeeringContainer(groupId, containerId, _options);
        return result.toPromise();
    }

    /**
     * Returns details about all network peering connections in the specified project. Network peering allows multiple cloud-hosted applications to securely connect to the same project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Network Peering Connections in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param providerName Cloud service provider to use for this VPC peering connection.
     */
    public listPeeringConnections(groupId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, providerName?: string, _options?: Configuration): Promise<PaginatedContainerPeer> {
        const result = this.api.listPeeringConnections(groupId, includeCount, itemsPerPage, pageNum, providerName, _options);
        return result.toPromise();
    }

    /**
     * Returns details about all network peering containers in the specified project for the specified cloud provider. If you do not specify the cloud provider, MongoDB Cloud returns details about all network peering containers in the project for Amazon Web Services (AWS). To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Network Peering Containers in One Project for One Cloud Provider
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param providerName Cloud service provider that serves the desired network peering containers.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listPeeringContainerByCloudProvider(groupId: string, providerName: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedCloudProviderContainer> {
        const result = this.api.listPeeringContainerByCloudProvider(groupId, providerName, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Returns details about all network peering containers in the specified project. Network peering containers contain network peering connections. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Network Peering Containers in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listPeeringContainers(groupId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedCloudProviderContainer> {
        const result = this.api.listPeeringContainers(groupId, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Updates one specified network peering connection in the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Update One New Network Peering Connection
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param peerId Unique 24-hexadecimal digit string that identifies the network peering connection that you want to update.
     * @param baseNetworkPeeringConnectionSettings Modify one network peering connection.
     */
    public updatePeeringConnection(groupId: string, peerId: string, baseNetworkPeeringConnectionSettings: BaseNetworkPeeringConnectionSettings, _options?: Configuration): Promise<BaseNetworkPeeringConnectionSettings> {
        const result = this.api.updatePeeringConnection(groupId, peerId, baseNetworkPeeringConnectionSettings, _options);
        return result.toPromise();
    }

    /**
     * Updates the network details and labels of one specified network peering container in the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Update One Network Peering Container
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param containerId Unique 24-hexadecimal digit string that identifies the MongoDB Cloud network container that you want to remove.
     * @param cloudProviderContainer Updates the network details and labels of one specified network peering container in the specified project.
     */
    public updatePeeringContainer(groupId: string, containerId: string, cloudProviderContainer: CloudProviderContainer, _options?: Configuration): Promise<CloudProviderContainer> {
        const result = this.api.updatePeeringContainer(groupId, containerId, cloudProviderContainer, _options);
        return result.toPromise();
    }

    /**
     * Verifies if someone set the specified project to **Connect via Peering Only** mode. To use this resource, the requesting API Key must have the Project Read Only role.
     * Verify Connect via Peering Only Mode for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public verifyConnectViaPeeringOnlyModeForOneProject(groupId: string, _options?: Configuration): Promise<PrivateIPMode> {
        const result = this.api.verifyConnectViaPeeringOnlyModeForOneProject(groupId, _options);
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
     * Creates one online archive. This archive stores data from one cluster within one project. To use this resource, the requesting API Key must have the Project Data Access Admin role.
     * Create One Online Archive
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster that contains the collection for which you want to create one online archive.
     * @param backupOnlineArchiveCreate Creates one online archive.
     */
    public createOnlineArchive(groupId: string, clusterName: string, backupOnlineArchiveCreate: BackupOnlineArchiveCreate, _options?: Configuration): Promise<BackupOnlineArchive> {
        const result = this.api.createOnlineArchive(groupId, clusterName, backupOnlineArchiveCreate, _options);
        return result.toPromise();
    }

    /**
     * Removes one online archive. This archive stores data from one cluster within one project. To use this resource, the requesting API Key must have the Project Data Access Admin role.
     * Remove One Online Archive
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param archiveId Unique 24-hexadecimal digit string that identifies the online archive to delete.
     * @param clusterName Human-readable label that identifies the cluster that contains the collection from which you want to remove an online archive.
     */
    public deleteOnlineArchive(groupId: string, archiveId: string, clusterName: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteOnlineArchive(groupId, archiveId, clusterName, _options);
        return result.toPromise();
    }

    /**
     * Downloads query logs for the specified online archive. To use this resource, the requesting API Key must have the Project Data Access Read Only or higher role.
     * Download Online Archive Query Logs
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster that contains the collection for which you want to return the query logs from one online archive.
     * @param startDate Date and time that specifies the starting point for the range of log messages to return. This resource expresses this value in the number of seconds that have elapsed since the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time).
     * @param endDate Date and time that specifies the end point for the range of log messages to return. This resource expresses this value in the number of seconds that have elapsed since the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time).
     * @param archiveOnly Flag that indicates whether to download logs for queries against your online archive only or both your online archive and cluster.
     */
    public downloadOnlineArchiveQueryLogs(groupId: string, clusterName: string, startDate?: number, endDate?: number, archiveOnly?: boolean, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.downloadOnlineArchiveQueryLogs(groupId, clusterName, startDate, endDate, archiveOnly, _options);
        return result.toPromise();
    }

    /**
     * Returns one online archive for one cluster. This archive stores data from one cluster within one project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Online Archive
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param archiveId Unique 24-hexadecimal digit string that identifies the online archive to return.
     * @param clusterName Human-readable label that identifies the cluster that contains the specified collection from which Application created the online archive.
     */
    public getOnlineArchive(groupId: string, archiveId: string, clusterName: string, _options?: Configuration): Promise<BackupOnlineArchive> {
        const result = this.api.getOnlineArchive(groupId, archiveId, clusterName, _options);
        return result.toPromise();
    }

    /**
     * Returns details of all online archives. This archive stores data from one cluster within one project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Online Archives for One Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster that contains the collection for which you want to return the online archives.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listOnlineArchives(groupId: string, clusterName: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedOnlineArchive> {
        const result = this.api.listOnlineArchives(groupId, clusterName, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Updates, pauses, or resumes one online archive. This archive stores data from one cluster within one project. To use this resource, the requesting API Key must have the Project Data Access Admin role.
     * Update One Online Archive
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param archiveId Unique 24-hexadecimal digit string that identifies the online archive to update.
     * @param clusterName Human-readable label that identifies the cluster that contains the specified collection from which Application created the online archive.
     * @param backupOnlineArchive Updates, pauses, or resumes one online archive.
     */
    public updateOnlineArchive(groupId: string, archiveId: string, clusterName: string, backupOnlineArchive: BackupOnlineArchive, _options?: Configuration): Promise<BackupOnlineArchive> {
        const result = this.api.updateOnlineArchive(groupId, archiveId, clusterName, backupOnlineArchive, _options);
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
     * Creates one organization in MongoDB Cloud and links it to the requesting API Key's organization. To use this resource, the requesting API Key must have the Organization Owner role. The requesting API Key's organization must be a paying organization. To learn more, see [Configure a Paying Organization](https://www.mongodb.com/docs/atlas/billing/#configure-a-paying-organization) in the MongoDB Atlas documentation.
     * Create One Organization
     * @param createOrganizationRequest Organization that you want to create.
     */
    public createOrganization(createOrganizationRequest: CreateOrganizationRequest, _options?: Configuration): Promise<CreateOrganizationResponse> {
        const result = this.api.createOrganization(createOrganizationRequest, _options);
        return result.toPromise();
    }

    /**
     * Invites one MongoDB Cloud user to join the specified organization. The user must accept the invitation to access information within the specified organization. To use this resource, the requesting API Key must have the Organization Owner role.
     * Invite One MongoDB Cloud User to Join One Atlas Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param organizationInvitationRequest Invites one MongoDB Cloud user to join the specified organization.
     */
    public createOrganizationInvitation(orgId: string, organizationInvitationRequest: OrganizationInvitationRequest, _options?: Configuration): Promise<OrganizationInvitation> {
        const result = this.api.createOrganizationInvitation(orgId, organizationInvitationRequest, _options);
        return result.toPromise();
    }

    /**
     * Removes one specified organization. MongoDB Cloud imposes the following limits on this resource:   - Organizations with active projects cannot be removed.  - All projects in the organization must be removed before you can remove the organization.  To use this resource, the requesting API Key must have the Organization Owner role.
     * Remove One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     */
    public deleteOrganization(orgId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteOrganization(orgId, _options);
        return result.toPromise();
    }

    /**
     * Cancels one pending invitation sent to the specified MongoDB Cloud user to join an organization. You can't cancel an invitation that the user accepted. To use this resource, the requesting API Key must have the Organization Owner role.
     * Cancel One Organization Invitation
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param invitationId Unique 24-hexadecimal digit string that identifies the invitation.
     */
    public deleteOrganizationInvitation(orgId: string, invitationId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteOrganizationInvitation(orgId, invitationId, _options);
        return result.toPromise();
    }

    /**
     * Returns one organization to which the requesting API key has access. To use this resource, the requesting API Key must have the Organization Member role.
     * Return One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     */
    public getOrganization(orgId: string, _options?: Configuration): Promise<AtlasOrganization> {
        const result = this.api.getOrganization(orgId, _options);
        return result.toPromise();
    }

    /**
     * Returns the details of one pending invitation to the specified organization. To use this resource, the requesting API Key must have the Organization Owner role.
     * Return One Organization Invitation
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param invitationId Unique 24-hexadecimal digit string that identifies the invitation.
     */
    public getOrganizationInvitation(orgId: string, invitationId: string, _options?: Configuration): Promise<OrganizationInvitation> {
        const result = this.api.getOrganizationInvitation(orgId, invitationId, _options);
        return result.toPromise();
    }

    /**
     * Returns details about the specified organization's settings. To use this resource, the requesting API Key must have the Organization Owner role.
     * Return Settings for One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     */
    public getOrganizationSettings(orgId: string, _options?: Configuration): Promise<OrganizationSettings> {
        const result = this.api.getOrganizationSettings(orgId, _options);
        return result.toPromise();
    }

    /**
     * Returns all pending invitations to the specified organization. To use this resource, the requesting API Key must have the Organization Owner role.
     * Return All Organization Invitations
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param username Email address of the user account invited to this organization. If you exclude this parameter, this resource returns all pending invitations.
     */
    public listOrganizationInvitations(orgId: string, username?: string, _options?: Configuration): Promise<Array<OrganizationInvitation>> {
        const result = this.api.listOrganizationInvitations(orgId, username, _options);
        return result.toPromise();
    }

    /**
     * Returns multiple projects in the specified organization. Each organization can have multiple projects. Use projects to:  - Isolate different environments, such as development, test, or production environments, from each other. - Associate different MongoDB Cloud users or teams with different environments, or give different permission to MongoDB Cloud users in different environments. - Maintain separate cluster security configurations. - Create different alert settings.  To use this resource, the requesting API Key must have the Organization Member role.
     * Return One or More Projects in One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param name Human-readable label of the project to use to filter the returned list. Performs a case-insensitive search for a project within the organization which is prefixed by the specified name.
     */
    public listOrganizationProjects(orgId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, name?: string, _options?: Configuration): Promise<PaginatedAtlasGroup> {
        const result = this.api.listOrganizationProjects(orgId, includeCount, itemsPerPage, pageNum, name, _options);
        return result.toPromise();
    }

    /**
     * Returns details about the MongoDB Cloud users associated with the specified organization. Each MongoDB Cloud user returned must belong to the specified organization or to a project within the specified organization. To use this resource, the requesting API Key must have the Organization Member role.
     * Return All MongoDB Cloud Users in One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listOrganizationUsers(orgId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedAppUser> {
        const result = this.api.listOrganizationUsers(orgId, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Returns all organizations to which the requesting API Key has access. To use this resource, the requesting API Key must have the Organization Member role.
     * Return All Organizations
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param name Human-readable label of the organization to use to filter the returned list. Performs a case-insensitive search for an organization that starts with the specified name.
     */
    public listOrganizations(includeCount?: boolean, itemsPerPage?: number, pageNum?: number, name?: string, _options?: Configuration): Promise<PaginatedOrganization> {
        const result = this.api.listOrganizations(includeCount, itemsPerPage, pageNum, name, _options);
        return result.toPromise();
    }

    /**
     * Removes one MongoDB Cloud user from the specified organization. To use this resource, the requesting API Key must have the Organization User Admin role.
     * Remove One MongoDB Cloud User from One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param userId Unique 24-hexadecimal digit string that identifies the user to be deleted.
     */
    public removeOrganizationUser(orgId: string, userId: string, _options?: Configuration): Promise<any> {
        const result = this.api.removeOrganizationUser(orgId, userId, _options);
        return result.toPromise();
    }

    /**
     * Renames one organization. To use this resource, the requesting API Key must have the Organization Owner role.
     * Rename One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param atlasOrganization Details to update on the specified organization.
     */
    public renameOrganization(orgId: string, atlasOrganization: AtlasOrganization, _options?: Configuration): Promise<AtlasOrganization> {
        const result = this.api.renameOrganization(orgId, atlasOrganization, _options);
        return result.toPromise();
    }

    /**
     * Updates the details of one pending invitation to the specified organization. To specify which invitation, provide the username of the invited user. To use this resource, the requesting API Key must have the Organization Owner role.
     * Update One Organization Invitation
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param organizationInvitationRequest Updates the details of one pending invitation to the specified organization.
     */
    public updateOrganizationInvitation(orgId: string, organizationInvitationRequest: OrganizationInvitationRequest, _options?: Configuration): Promise<OrganizationInvitation> {
        const result = this.api.updateOrganizationInvitation(orgId, organizationInvitationRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates the details of one pending invitation to the specified organization. To specify which invitation, provide the unique identification string for that invitation. Use the Return All Organization Invitations endpoint to retrieve IDs for all pending organization invitations. To use this resource, the requesting API Key must have the Organization Owner role.
     * Update One Organization Invitation by Invitation ID
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param invitationId Unique 24-hexadecimal digit string that identifies the invitation.
     * @param organizationInvitationUpdateRequest Updates the details of one pending invitation to the specified organization.
     */
    public updateOrganizationInvitationById(orgId: string, invitationId: string, organizationInvitationUpdateRequest: OrganizationInvitationUpdateRequest, _options?: Configuration): Promise<OrganizationInvitation> {
        const result = this.api.updateOrganizationInvitationById(orgId, invitationId, organizationInvitationUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates the roles of the specified user in the specified organization. To specify the user to update, provide the unique 24-hexadecimal digit string that identifies the user in the specified organization. To use this resource, the requesting API Key must have the Organization User Admin role.
     * Update Organization Roles for One MongoDB Cloud User
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param userId Unique 24-hexadecimal digit string that identifies the user to modify.
     * @param updateOrgRolesForUser Roles to update for the specified user.
     */
    public updateOrganizationRoles(orgId: string, userId: string, updateOrgRolesForUser: UpdateOrgRolesForUser, _options?: Configuration): Promise<UpdateOrgRolesForUser> {
        const result = this.api.updateOrganizationRoles(orgId, userId, updateOrgRolesForUser, _options);
        return result.toPromise();
    }

    /**
     * Updates the organization's settings. To use this resource, the requesting API Key must have the Organization Owner role.
     * Update Settings for One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param organizationSettings Details to update on the specified organization&#39;s settings.
     */
    public updateOrganizationSettings(orgId: string, organizationSettings: OrganizationSettings, _options?: Configuration): Promise<OrganizationSettings> {
        const result = this.api.updateOrganizationSettings(orgId, organizationSettings, _options);
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
     * Disables the slow operation threshold that MongoDB Cloud calculated for the specified project. The threshold determines which operations the Performance Advisor and Query Profiler considers slow. When enabled, MongoDB Cloud uses the average execution time for operations on your cluster to determine slow-running queries. As a result, the threshold is more pertinent to your cluster workload. The slow operation threshold is enabled by default for dedicated clusters (M10+). When disabled, MongoDB Cloud considers any operation that takes longer than 100 milliseconds to be slow. To use this resource, the requesting API Key must have the Project Owner role.
     * Disable Managed Slow Operation Threshold
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public disableSlowOperationThresholding(groupId: string, _options?: Configuration): Promise<void> {
        const result = this.api.disableSlowOperationThresholding(groupId, _options);
        return result.toPromise();
    }

    /**
     * Enables MongoDB Cloud to use its slow operation threshold for the specified project. The threshold determines which operations the Performance Advisor and Query Profiler considers slow. When enabled, MongoDB Cloud uses the average execution time for operations on your cluster to determine slow-running queries. As a result, the threshold is more pertinent to your cluster workload. The slow operation threshold is enabled by default for dedicated clusters (M10+). When disabled, MongoDB Cloud considers any operation that takes longer than 100 milliseconds to be slow. To use this resource, the requesting API Key must have the Project Owner role.
     * Enable Managed Slow Operation Threshold
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public enableSlowOperationThresholding(groupId: string, _options?: Configuration): Promise<void> {
        const result = this.api.enableSlowOperationThresholding(groupId, _options);
        return result.toPromise();
    }

    /**
     * Returns log lines for slow queries that the Performance Advisor and Query Profiler identified. The Performance Advisor monitors queries that MongoDB considers slow and suggests new indexes to improve query performance. MongoDB Cloud bases the threshold for slow queries on the average time of operations on your cluster. This enables workload-relevant recommendations. To use this resource, the requesting API Key must have the Project Data Access Read Write role.
     * Return Slow Queries
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param processId Combination of host and port that serves the MongoDB process. The host must be the hostname, FQDN, IPv4 address, or IPv6 address of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param duration Length of time expressed during which the query finds slow queries among the managed namespaces in the cluster. This parameter expresses its value in milliseconds.  - If you don&#39;t specify the **since** parameter, the endpoint returns data covering the duration before the current time. - If you specify neither the **duration** nor **since** parameters, the endpoint returns data from the previous 24 hours.
     * @param namespaces Namespaces from which to retrieve slow queries. A namespace consists of one database and one collection resource written as &#x60;.&#x60;: &#x60;&lt;database&gt;.&lt;collection&gt;&#x60;. To include multiple namespaces, pass the parameter multiple times delimited with an ampersand (&#x60;&amp;&#x60;) between each namespace. Omit this parameter to return results for all namespaces.
     * @param nLogs Maximum number of lines from the log to return.
     * @param since Date and time from which the query retrieves the slow queries. This parameter expresses its value in the number of seconds that have elapsed since the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time).  - If you don&#39;t specify the **duration** parameter, the endpoint returns data covering from the **since** value and the current time. - If you specify neither the **duration** nor the **since** parameters, the endpoint returns data from the previous 24 hours.
     */
    public listSlowQueries(groupId: string, processId: string, duration?: number, namespaces?: Array<string>, nLogs?: number, since?: number, _options?: Configuration): Promise<PerformanceAdvisorSlowQueryList> {
        const result = this.api.listSlowQueries(groupId, processId, duration, namespaces, nLogs, since, _options);
        return result.toPromise();
    }

    /**
     * Returns up to 20 namespaces for collections experiencing slow queries on the specified host. If you specify a secondary member of a replica set that hasn't received any database read operations, the endpoint doesn't return any namespaces. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Namespaces for One Host
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param processId Combination of host and port that serves the MongoDB process. The host must be the hostname, FQDN, IPv4 address, or IPv6 address of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param duration Length of time expressed during which the query finds suggested indexes among the managed namespaces in the cluster. This parameter expresses its value in milliseconds.  - If you don&#39;t specify the **since** parameter, the endpoint returns data covering the duration before the current time. - If you specify neither the **duration** nor **since** parameters, the endpoint returns data from the previous 24 hours.
     * @param since Date and time from which the query retrieves the suggested indexes. This parameter expresses its value in the number of seconds that have elapsed since the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time).  - If you don&#39;t specify the **duration** parameter, the endpoint returns data covering from the **since** value and the current time. - If you specify neither the **duration** nor the **since** parameters, the endpoint returns data from the previous 24 hours.
     */
    public listSlowQueryNamespaces(groupId: string, processId: string, duration?: number, since?: number, _options?: Configuration): Promise<Namespaces> {
        const result = this.api.listSlowQueryNamespaces(groupId, processId, duration, since, _options);
        return result.toPromise();
    }

    /**
     * Returns the indexes that the Performance Advisor suggests. The Performance Advisor monitors queries that MongoDB considers slow and suggests new indexes to improve query performance. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Suggested Indexes
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param processId Combination of host and port that serves the MongoDB process. The host must be the hostname, FQDN, IPv4 address, or IPv6 address of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param duration Length of time expressed during which the query finds suggested indexes among the managed namespaces in the cluster. This parameter expresses its value in milliseconds.  - If you don&#39;t specify the **since** parameter, the endpoint returns data covering the duration before the current time. - If you specify neither the **duration** nor **since** parameters, the endpoint returns data from the previous 24 hours.
     * @param namespaces Namespaces from which to retrieve suggested indexes. A namespace consists of one database and one collection resource written as &#x60;.&#x60;: &#x60;&lt;database&gt;.&lt;collection&gt;&#x60;. To include multiple namespaces, pass the parameter multiple times delimited with an ampersand (&#x60;&amp;&#x60;) between each namespace. Omit this parameter to return results for all namespaces.
     * @param nExamples Maximum number of example queries that benefit from the suggested index.
     * @param nIndexes Number that indicates the maximum indexes to suggest.
     * @param since Date and time from which the query retrieves the suggested indexes. This parameter expresses its value in the number of seconds that have elapsed since the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time).  - If you don&#39;t specify the **duration** parameter, the endpoint returns data covering from the **since** value and the current time. - If you specify neither the **duration** nor the **since** parameters, the endpoint returns data from the previous 24 hours.
     */
    public listSuggestedIndexes(groupId: string, processId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, duration?: number, namespaces?: Array<string>, nExamples?: number, nIndexes?: number, since?: number, _options?: Configuration): Promise<PerformanceAdvisorResponse> {
        const result = this.api.listSuggestedIndexes(groupId, processId, includeCount, itemsPerPage, pageNum, duration, namespaces, nExamples, nIndexes, since, _options);
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
     * Creates one private endpoint for the specified cloud service provider. This cloud service provider manages the private endpoint service, which in turn manages the private endpoints for the project. To use this resource, the requesting API Key must have the Project Owner role. To learn more about considerations, limitations, and prerequisites, see the MongoDB documentation for setting up a private endpoint.
     * Create One Private Endpoint for One Provider
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudProvider Cloud service provider that manages this private endpoint.
     * @param endpointServiceId Unique 24-hexadecimal digit string that identifies the private endpoint service for which you want to create a private endpoint.
     * @param createEndpointRequest Creates one private endpoint for the specified cloud service provider.
     */
    public createPrivateEndpoint(groupId: string, cloudProvider: string, endpointServiceId: string, createEndpointRequest: CreateEndpointRequest, _options?: Configuration): Promise<PrivateLinkEndpoint> {
        const result = this.api.createPrivateEndpoint(groupId, cloudProvider, endpointServiceId, createEndpointRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates one private endpoint service for the specified cloud service provider. This cloud service provider manages the private endpoint service for the project. When you create a private endpoint service, MongoDB Cloud creates a network container in the project for the cloud provider for which you create the private endpoint service if one doesn't already exist. To use this resource, the requesting API Key must have the Project Owner role.
     * Create One Private Endpoint Service for One Provider
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudProviderEndpointServiceRequest Creates one private endpoint for the specified cloud service provider.
     */
    public createPrivateEndpointService(groupId: string, cloudProviderEndpointServiceRequest: CloudProviderEndpointServiceRequest, _options?: Configuration): Promise<EndpointService> {
        const result = this.api.createPrivateEndpointService(groupId, cloudProviderEndpointServiceRequest, _options);
        return result.toPromise();
    }

    /**
     * Removes one private endpoint from the specified project and private endpoint service, as managed by the specified cloud service provider. When the last private endpoint is removed from a given private endpoint service, that private endpoint service is also removed. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Private Endpoint for One Provider
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudProvider Cloud service provider that manages this private endpoint.
     * @param endpointId Unique string that identifies the private endpoint you want to delete. The format of the **endpointId** parameter differs for AWS and Azure. You must URL encode the **endpointId** for Azure private endpoints.
     * @param endpointServiceId Unique 24-hexadecimal digit string that identifies the private endpoint service from which you want to delete a private endpoint.
     */
    public deletePrivateEndpoint(groupId: string, cloudProvider: string, endpointId: string, endpointServiceId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deletePrivateEndpoint(groupId, cloudProvider, endpointId, endpointServiceId, _options);
        return result.toPromise();
    }

    /**
     * Removes one private endpoint service from the specified project. This cloud service provider manages the private endpoint service that belongs to the project. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Private Endpoint Service for One Provider
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudProvider Cloud service provider that manages this private endpoint service.
     * @param endpointServiceId Unique 24-hexadecimal digit string that identifies the private endpoint service that you want to delete.
     */
    public deletePrivateEndpointService(groupId: string, cloudProvider: string, endpointServiceId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deletePrivateEndpointService(groupId, cloudProvider, endpointServiceId, _options);
        return result.toPromise();
    }

    /**
     * Returns the connection state of the specified private endpoint. The private endpoint service manages this private endpoint which belongs to one project hosted from one cloud service provider. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Private Endpoint for One Provider
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudProvider Cloud service provider that manages this private endpoint.
     * @param endpointId Unique string that identifies the private endpoint you want to return. The format of the **endpointId** parameter differs for AWS and Azure. You must URL encode the **endpointId** for Azure private endpoints.
     * @param endpointServiceId Unique 24-hexadecimal digit string that identifies the private endpoint service for which you want to return a private endpoint.
     */
    public getPrivateEndpoint(groupId: string, cloudProvider: string, endpointId: string, endpointServiceId: string, _options?: Configuration): Promise<PrivateLinkEndpoint> {
        const result = this.api.getPrivateEndpoint(groupId, cloudProvider, endpointId, endpointServiceId, _options);
        return result.toPromise();
    }

    /**
     * Returns the name, interfaces, and state of the specified private endpoint service from one project. The cloud service provider hosted this private endpoint service that belongs to the project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Private Endpoint Service for One Provider
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudProvider Cloud service provider that manages this private endpoint service.
     * @param endpointServiceId Unique 24-hexadecimal digit string that identifies the private endpoint service that you want to return.
     */
    public getPrivateEndpointService(groupId: string, cloudProvider: string, endpointServiceId: string, _options?: Configuration): Promise<EndpointService> {
        const result = this.api.getPrivateEndpointService(groupId, cloudProvider, endpointServiceId, _options);
        return result.toPromise();
    }

    /**
     * Checks whether each region in the specified cloud service provider can create multiple private endpoints per region. The cloud service provider manages the private endpoint for the project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Regionalized Private Endpoint Status
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public getRegionalizedPrivateEndpointSetting(groupId: string, _options?: Configuration): Promise<ProjectSettingItem> {
        const result = this.api.getRegionalizedPrivateEndpointSetting(groupId, _options);
        return result.toPromise();
    }

    /**
     * Returns the name, interfaces, and state of all private endpoint services for the specified cloud service provider. This cloud service provider manages the private endpoint service for the project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Private Endpoint Services for One Provider
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param cloudProvider Cloud service provider that manages this private endpoint service.
     */
    public listPrivateEndpointServices(groupId: string, cloudProvider: string, _options?: Configuration): Promise<Array<EndpointService>> {
        const result = this.api.listPrivateEndpointServices(groupId, cloudProvider, _options);
        return result.toPromise();
    }

    /**
     * Enables or disables the ability to create multiple private endpoints per region in all cloud service providers in one project. The cloud service provider manages the private endpoints for the project. Connection strings to existing multi-region and global sharded clusters change when you enable this setting. You must update your applications to use the new connection strings. This might cause downtime. To use this resource, the requesting API Key must have the Project Owner role and all clusters in the deployment must be sharded clusters. Once enabled, you cannot create replica sets.
     * Toggle Regionalized Private Endpoint Status
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param projectSettingItem Enables or disables the ability to create multiple private endpoints per region in all cloud service providers in one project.
     */
    public toggleRegionalizedPrivateEndpointSetting(groupId: string, projectSettingItem: ProjectSettingItem, _options?: Configuration): Promise<ProjectSettingItem> {
        const result = this.api.toggleRegionalizedPrivateEndpointSetting(groupId, projectSettingItem, _options);
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
     * Assigns the specified organization API key to the specified project. Users with the Project Owner role in the project associated with the API key can then use the organization API key to access the resources. To use this resource, the requesting API Key must have the Project User Admin role.
     * Assign One Organization API Key to One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param apiUserId Unique 24-hexadecimal digit string that identifies this organization API key that you want to assign to one project.
     * @param userAccessRoleAssignment Organization API key to be assigned to the specified project.
     */
    public addProjectApiKey(groupId: string, apiUserId: string, userAccessRoleAssignment: Array<UserAccessRoleAssignment>, _options?: Configuration): Promise<ApiKeyUserDetails> {
        const result = this.api.addProjectApiKey(groupId, apiUserId, userAccessRoleAssignment, _options);
        return result.toPromise();
    }

    /**
     * Creates one API key for the specified organization. An organization API key grants programmatic access to an organization. You can't use the API key to log into the console. To use this resource, the requesting API Key must have the Organization Owner role.
     * Create One Organization API Key
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param createAtlasOrganizationApiKey Organization API Key to be created.
     */
    public createApiKey(orgId: string, createAtlasOrganizationApiKey: CreateAtlasOrganizationApiKey, _options?: Configuration): Promise<ApiKeyUserDetails> {
        const result = this.api.createApiKey(orgId, createAtlasOrganizationApiKey, _options);
        return result.toPromise();
    }

    /**
     * Creates the access list entries for the specified organization API key. Resources require all API requests originate from IP addresses on the API access list. To use this resource, the requesting API Key must have the Read Write role.
     * Create Access List Entries for One Organization API Key
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param apiUserId Unique 24-hexadecimal digit string that identifies this organization API key for which you want to create a new access list entry.
     * @param userAccessList Access list entries to be created for the specified organization API key.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public createApiKeyAccessList(orgId: string, apiUserId: string, userAccessList: Array<UserAccessList>, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedApiUserAccessList> {
        const result = this.api.createApiKeyAccessList(orgId, apiUserId, userAccessList, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Creates and assigns the specified organization API key to the specified project. Users with the Project Owner role in the project associated with the API key can use the organization API key to access the resources. To use this resource, the requesting API Key must have the Project User Admin role.
     * Create and Assign One Organization API Key to One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param createAtlasProjectApiKey Organization API key to be created and assigned to the specified project.
     */
    public createProjectApiKey(groupId: string, createAtlasProjectApiKey: CreateAtlasProjectApiKey, _options?: Configuration): Promise<ApiKeyUserDetails> {
        const result = this.api.createProjectApiKey(groupId, createAtlasProjectApiKey, _options);
        return result.toPromise();
    }

    /**
     * Removes one organization API key from the specified organization. When you remove an API key from an organization, MongoDB Cloud also removes that key from any projects that use that key. To use this resource, the requesting API Key must have the Organization Owner role.
     * Remove One Organization API Key
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param apiUserId Unique 24-hexadecimal digit string that identifies this organization API key.
     */
    public deleteApiKey(orgId: string, apiUserId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteApiKey(orgId, apiUserId, _options);
        return result.toPromise();
    }

    /**
     * Removes the specified access list entry from the specified organization API key. Resources require all API requests originate from the IP addresses on the API access list. To use this resource, the requesting API Key must have the Read Write role. In addition, you cannot remove the requesting IP address from the requesting organization API key.
     * Remove One Access List Entry for One Organization API Key
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param apiUserId Unique 24-hexadecimal digit string that identifies this organization API key for which you want to remove access list entries.
     * @param ipAddress One IP address or multiple IP addresses represented as one CIDR block to limit requests to API resources in the specified organization. When adding a CIDR block with a subnet mask, such as 192.0.2.0/24, use the URL-encoded value %2F for the forward slash /.
     */
    public deleteApiKeyAccessListEntry(orgId: string, apiUserId: string, ipAddress: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteApiKeyAccessListEntry(orgId, apiUserId, ipAddress, _options);
        return result.toPromise();
    }

    /**
     * Returns one organization API key. The organization API keys grant programmatic access to an organization. You can't use the API key to log into MongoDB Cloud through the user interface. To use this resource, the requesting API Key must have the  Organization Member role.
     * Return One Organization API Key
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param apiUserId Unique 24-hexadecimal digit string that identifies this organization API key that  you want to update.
     */
    public getApiKey(orgId: string, apiUserId: string, _options?: Configuration): Promise<ApiKeyUserDetails> {
        const result = this.api.getApiKey(orgId, apiUserId, _options);
        return result.toPromise();
    }

    /**
     * Returns one access list entry for the specified organization API key. Resources require  all API requests originate from IP addresses on the API access list. To use this resource, the requesting API Key must have the Organization Member role.
     * Return One Access List Entry for One Organization API Key
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param ipAddress One IP address or multiple IP addresses represented as one CIDR block to limit  requests to API resources in the specified organization. When adding a CIDR block with a subnet mask, such as  192.0.2.0/24, use the URL-encoded value %2F for the forward slash /.
     * @param apiUserId Unique 24-hexadecimal digit string that identifies this organization API key for  which you want to return access list entries.
     */
    public getApiKeyAccessList(orgId: string, ipAddress: string, apiUserId: string, _options?: Configuration): Promise<UserAccessList> {
        const result = this.api.getApiKeyAccessList(orgId, ipAddress, apiUserId, _options);
        return result.toPromise();
    }

    /**
     * Returns all access list entries that you configured for the specified organization API key. To use this resource, the requesting API Key must have the Organization Member role.
     * Return All Access List Entries for One Organization API Key
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param apiUserId Unique 24-hexadecimal digit string that identifies this organization API key for which you want to return access list entries.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listApiKeyAccessListsEntries(orgId: string, apiUserId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedApiUserAccessList> {
        const result = this.api.listApiKeyAccessListsEntries(orgId, apiUserId, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Returns all organization API keys for the specified organization. The organization API keys grant programmatic access to an organization. You can't use the API key to log into MongoDB Cloud through the console. To use this resource, the requesting API Key must have the Organization Member role.
     * Return All Organization API Keys
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listApiKeys(orgId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedApiApiUser> {
        const result = this.api.listApiKeys(orgId, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Returns all organization API keys that you assigned to the specified project. Users with the Project Owner role in the project associated with the API key can use the organization API key to access the resources. To use this resource, the requesting API Key must have the Project User Admin role.
     * Return All Organization API Keys Assigned to One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listProjectApiKeys(groupId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedApiApiUser> {
        const result = this.api.listProjectApiKeys(groupId, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Removes one organization API key from the specified project. To use this resource, the requesting API Key must have the Project User Admin role.
     * Unassign One Organization API Key from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param apiUserId Unique 24-hexadecimal digit string that identifies this organization API key that you want to unassign from one project.
     */
    public removeProjectApiKey(groupId: string, apiUserId: string, _options?: Configuration): Promise<any> {
        const result = this.api.removeProjectApiKey(groupId, apiUserId, _options);
        return result.toPromise();
    }

    /**
     * Updates one organization API key in the specified organization. The organization API keys  grant programmatic access to an organization. To use this resource, the requesting  API Key must have the Organization Owner role.
     * Update One Organization API Key
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param apiUserId Unique 24-hexadecimal digit string that identifies this organization API key you  want to update.
     * @param updateAtlasOrganizationApiKey Organization API key to be updated. This request requires a minimum of one of the two body parameters.
     */
    public updateApiKey(orgId: string, apiUserId: string, updateAtlasOrganizationApiKey: UpdateAtlasOrganizationApiKey, _options?: Configuration): Promise<ApiKeyUserDetails> {
        const result = this.api.updateApiKey(orgId, apiUserId, updateAtlasOrganizationApiKey, _options);
        return result.toPromise();
    }

    /**
     * Updates the roles of the organization API key that you specify for the project that you specify. You must specify at least one valid role for the project. The application removes any roles that you do not include in this request if they were previously set in the organization API key that you specify for the project.
     * Update Roles of One Organization API Key to One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param apiUserId Unique 24-hexadecimal digit string that identifies this organization API key that you want to unassign from one project.
     * @param updateAtlasProjectApiKey Organization API Key to be updated. This request requires a minimum of one of the two body parameters.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     */
    public updateApiKeyRoles(groupId: string, apiUserId: string, updateAtlasProjectApiKey: UpdateAtlasProjectApiKey, pageNum?: number, itemsPerPage?: number, includeCount?: boolean, _options?: Configuration): Promise<ApiKeyUserDetails> {
        const result = this.api.updateApiKeyRoles(groupId, apiUserId, updateAtlasProjectApiKey, pageNum, itemsPerPage, includeCount, _options);
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
     * Adds one or more access list entries to the specified project. MongoDB Cloud only allows client connections to the cluster from entries in the project's IP access list. Write each entry as either one IP address or one CIDR-notated block of IP addresses. To use this resource, the requesting API Key must have the Project Owner or Project Charts Admin roles. This resource replaces the whitelist resource. MongoDB Cloud removed whitelists in July 2021. Update your applications to use this new resource. The `/groups/{GROUP-ID}/accessList` endpoint manages the database IP access list. This endpoint is distinct from the `orgs/{ORG-ID}/apiKeys/{API-KEY-ID}/accesslist` endpoint, which manages the access list for MongoDB Cloud organizations. This endpoint doesn't support concurrent `POST` requests. You must submit multiple `POST` requests synchronously.
     * Add Entries to Project IP Access List
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param networkPermissionEntry One or more access list entries to add to the specified project.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public createProjectIpAccessList(groupId: string, networkPermissionEntry: Array<NetworkPermissionEntry>, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedNetworkAccess> {
        const result = this.api.createProjectIpAccessList(groupId, networkPermissionEntry, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Removes one access list entry from the specified project's IP access list. Each entry in the project's IP access list contains one IP address, one CIDR-notated block of IP addresses, or one AWS Security Group ID. MongoDB Cloud only allows client connections to the cluster from entries in the project's IP access list. To use this resource, the requesting API Key must have the Project Owner role. This resource replaces the whitelist resource. MongoDB Cloud removed whitelists in July 2021. Update your applications to use this new resource. The `/groups/{GROUP-ID}/accessList` endpoint manages the database IP access list. This endpoint is distinct from the `orgs/{ORG-ID}/apiKeys/{API-KEY-ID}/accesslist` endpoint, which manages the access list for MongoDB Cloud organizations.
     * Remove One Entry from One Project IP Access List
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param entryValue Access list entry that you want to remove from the project&#39;s IP access list. This value can use one of the following: one AWS security group ID, one IP address, or one CIDR block of addresses. For CIDR blocks that use a subnet mask, replace the forward slash (&#x60;/&#x60;) with its URL-encoded value (&#x60;%2F&#x60;). When you remove an entry from the IP access list, existing connections from the removed address or addresses may remain open for a variable amount of time. The amount of time it takes MongoDB Cloud to close the connection depends upon several factors, including:  - how your application established the connection, - how MongoDB Cloud or the driver using the address behaves, and - which protocol (like TCP or UDP) the connection uses.
     */
    public deleteProjectIpAccessList(groupId: string, entryValue: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteProjectIpAccessList(groupId, entryValue, _options);
        return result.toPromise();
    }

    /**
     * Returns the status of one project IP access list entry. This resource checks if the provided project IP access list entry applies to all cloud providers serving clusters from the specified project.
     * Return Status of One Project IP Access List Entry
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param entryValue Network address or cloud provider security construct that identifies which project access list entry to be verified.
     */
    public getProjectIpAccessListStatus(groupId: string, entryValue: string, _options?: Configuration): Promise<NetworkPermissionEntryStatus> {
        const result = this.api.getProjectIpAccessListStatus(groupId, entryValue, _options);
        return result.toPromise();
    }

    /**
     * Returns one access list entry from the specified project's IP access list. Each entry in the project's IP access list contains either one IP address or one CIDR-notated block of IP addresses. MongoDB Cloud only allows client connections to the cluster from entries in the project's IP access list. To use this resource, the requesting API Key must have the Project Read Only or Project Charts Admin roles. This resource replaces the whitelist resource. MongoDB Cloud removed whitelists in July 2021. Update your applications to use this new resource. This endpoint (`/groups/{GROUP-ID}/accessList`) manages the Project IP Access List. It doesn't manage the access list for MongoDB Cloud organizations. TheProgrammatic API Keys endpoint (`/orgs/{ORG-ID}/apiKeys/{API-KEY-ID}/accesslist`) manages those access lists.
     * Return One Project IP Access List Entry
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param entryValue Access list entry that you want to return from the project&#39;s IP access list. This value can use one of the following: one AWS security group ID, one IP address, or one CIDR block of addresses. For CIDR blocks that use a subnet mask, replace the forward slash (&#x60;/&#x60;) with its URL-encoded value (&#x60;%2F&#x60;).
     */
    public getProjectIpList(groupId: string, entryValue: string, _options?: Configuration): Promise<NetworkPermissionEntry> {
        const result = this.api.getProjectIpList(groupId, entryValue, _options);
        return result.toPromise();
    }

    /**
     * Returns all access list entries from the specified project's IP access list. Each entry in the project's IP access list contains either one IP address or one CIDR-notated block of IP addresses. MongoDB Cloud only allows client connections to the cluster from entries in the project's IP access list. To use this resource, the requesting API Key must have the Project Read Only or Project Charts Admin roles. This resource replaces the whitelist resource. MongoDB Cloud removed whitelists in July 2021. Update your applications to use this new resource. The `/groups/{GROUP-ID}/accessList` endpoint manages the database IP access list. This endpoint is distinct from the `orgs/{ORG-ID}/apiKeys/{API-KEY-ID}/accesslist` endpoint, which manages the access list for MongoDB Cloud organizations.
     * Return Project IP Access List
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listProjectIpAccessLists(groupId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedNetworkAccess> {
        const result = this.api.listProjectIpAccessLists(groupId, includeCount, itemsPerPage, pageNum, _options);
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
     * Adds one MongoDB Cloud user to the specified project. If the MongoDB Cloud user is not a member of the project's organization, then the user must accept their invitation to the organization to access information within the specified project. To use this resource, the requesting API Key must have the Group User Admin role.
     * Add One MongoDB Cloud User to One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param groupInvitationRequest Adds one MongoDB Cloud user to the specified project.
     */
    public addUserToProject(groupId: string, groupInvitationRequest: GroupInvitationRequest, _options?: Configuration): Promise<OrganizationInvitation> {
        const result = this.api.addUserToProject(groupId, groupInvitationRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates one project. Projects group clusters into logical collections that support an application environment, workload, or both. Each project can have its own users, teams, security, and alert settings. To use this resource, the requesting API Key must have the Read Write role.
     * Create One Project
     * @param group Creates one project.
     * @param projectOwnerId Unique 24-hexadecimal digit string that identifies the MongoDB Cloud user to whom to grant the Project Owner role on the specified project. If you set this parameter, it overrides the default value of the oldest Organization Owner.
     */
    public createProject(group: Group, projectOwnerId?: string, _options?: Configuration): Promise<Group> {
        const result = this.api.createProject(group, projectOwnerId, _options);
        return result.toPromise();
    }

    /**
     * Invites one MongoDB Cloud user to join the specified project. The MongoDB Cloud user must accept the invitation to access information within the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Invite One MongoDB Cloud User to Join One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param groupInvitationRequest Invites one MongoDB Cloud user to join the specified project.
     */
    public createProjectInvitation(groupId: string, groupInvitationRequest: GroupInvitationRequest, _options?: Configuration): Promise<GroupInvitation> {
        const result = this.api.createProjectInvitation(groupId, groupInvitationRequest, _options);
        return result.toPromise();
    }

    /**
     * Removes the specified project. Projects group clusters into logical collections that support an application environment, workload, or both. Each project can have its own users, teams, security, and alert settings. You can delete a project only if there are no Online Archives for the clusters in the project. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public deleteProject(groupId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteProject(groupId, _options);
        return result.toPromise();
    }

    /**
     * Cancels one pending invitation sent to the specified MongoDB Cloud user to join a project. You can't cancel an invitation that the user accepted. To use this resource, the requesting API Key must have the Project Owner role.
     * Cancel One Project Invitation
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param invitationId Unique 24-hexadecimal digit string that identifies the invitation.
     */
    public deleteProjectInvitation(groupId: string, invitationId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteProjectInvitation(groupId, invitationId, _options);
        return result.toPromise();
    }

    /**
     * Removes the specified project limit. Depending on the limit, Atlas either resets the limit to its default value or removes the limit entirely. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Project Limit
     * @param limitName Human-readable label that identifies this project limit.  | Limit Name | Description | Default | API Override Limit | | --- | --- | --- | --- | | atlas.project.deployment.clusters | Limit on the number of clusters in this project | 25 | 90 | | atlas.project.deployment.nodesPerPrivateLinkRegion | Limit on the number of nodes per Private Link region in this project | 50 | 90 | | atlas.project.security.databaseAccess.customRoles | Limit on the number of custom roles in this project | 100 | 1400 | | atlas.project.security.databaseAccess.users | Limit on the number of database users in this project | 100 | 900 | | atlas.project.security.networkAccess.crossRegionEntries | Limit on the number of cross-region network access entries in this project | 40 | 220 | | atlas.project.security.networkAccess.entries | Limit on the number of network access entries in this project | 200 | 20 | | dataFederation.bytesProcessed.query | Limit on the number of bytes processed during a single Data Federation query | N/A | N/A | | dataFederation.bytesProcessed.daily | Limit on the number of bytes processed across all Data Federation tenants for the current day | N/A | N/A | | dataFederation.bytesProcessed.weekly | Limit on the number of bytes processed across all Data Federation tenants for the current week | N/A | N/A | | dataFederation.bytesProcessed.monthly | Limit on the number of bytes processed across all Data Federation tenants for the current month | N/A | N/A | | atlas.project.deployment.privateServiceConnectionsPerRegionGroup | Number of Private Serivce Connections per Region Group | 50 | 100| | atlas.project.deployment.privateServiceConnectionsSubnetMask | Subnet mask for GCP PSC Networks. Has lower limit of 20. | 27 | 27| 
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public deleteProjectLimit(limitName: string, groupId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteProjectLimit(limitName, groupId, _options);
        return result.toPromise();
    }

    /**
     * Returns details about the specified project. Projects group clusters into logical collections that support an application environment, workload, or both. Each project can have its own users, teams, security, and alert settings. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public getProject(groupId: string, _options?: Configuration): Promise<Group> {
        const result = this.api.getProject(groupId, _options);
        return result.toPromise();
    }

    /**
     * Returns details about the specified project. Projects group clusters into logical collections that support an application environment, workload, or both. Each project can have its own users, teams, security, and alert settings. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Project using Its Name
     * @param groupName Human-readable label that identifies this project.
     */
    public getProjectByName(groupName: string, _options?: Configuration): Promise<Group> {
        const result = this.api.getProjectByName(groupName, _options);
        return result.toPromise();
    }

    /**
     * Returns the details of one pending invitation to the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Return One Project Invitation
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param invitationId Unique 24-hexadecimal digit string that identifies the invitation.
     */
    public getProjectInvitation(groupId: string, invitationId: string, _options?: Configuration): Promise<GroupInvitation> {
        const result = this.api.getProjectInvitation(groupId, invitationId, _options);
        return result.toPromise();
    }

    /**
     * Returns the specified limit for the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Limit for One Project
     * @param limitName Human-readable label that identifies this project limit.  | Limit Name | Description | Default | API Override Limit | | --- | --- | --- | --- | | atlas.project.deployment.clusters | Limit on the number of clusters in this project | 25 | 90 | | atlas.project.deployment.nodesPerPrivateLinkRegion | Limit on the number of nodes per Private Link region in this project | 50 | 90 | | atlas.project.security.databaseAccess.customRoles | Limit on the number of custom roles in this project | 100 | 1400 | | atlas.project.security.databaseAccess.users | Limit on the number of database users in this project | 100 | 900 | | atlas.project.security.networkAccess.crossRegionEntries | Limit on the number of cross-region network access entries in this project | 40 | 220 | | atlas.project.security.networkAccess.entries | Limit on the number of network access entries in this project | 200 | 20 | | dataFederation.bytesProcessed.query | Limit on the number of bytes processed during a single Data Federation query | N/A | N/A | | dataFederation.bytesProcessed.daily | Limit on the number of bytes processed across all Data Federation tenants for the current day | N/A | N/A | | dataFederation.bytesProcessed.weekly | Limit on the number of bytes processed across all Data Federation tenants for the current week | N/A | N/A | | dataFederation.bytesProcessed.monthly | Limit on the number of bytes processed across all Data Federation tenants for the current month | N/A | N/A | | atlas.project.deployment.privateServiceConnectionsPerRegionGroup | Number of Private Serivce Connections per Region Group | 50 | 100| | atlas.project.deployment.privateServiceConnectionsSubnetMask | Subnet mask for GCP PSC Networks. Has lower limit of 20. | 27 | 27| 
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public getProjectLimit(limitName: string, groupId: string, _options?: Configuration): Promise<DataFederationLimit> {
        const result = this.api.getProjectLimit(limitName, groupId, _options);
        return result.toPromise();
    }

    /**
     * Returns details about the specified project's settings. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Project Settings
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public getProjectSettings(groupId: string, _options?: Configuration): Promise<GroupSettings> {
        const result = this.api.getProjectSettings(groupId, _options);
        return result.toPromise();
    }

    /**
     * Returns all pending invitations to the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Return All Project Invitations
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param username Email address of the user account invited to this project.
     */
    public listProjectInvitations(groupId: string, username?: string, _options?: Configuration): Promise<Array<GroupInvitation>> {
        const result = this.api.listProjectInvitations(groupId, username, _options);
        return result.toPromise();
    }

    /**
     * Returns all the limits for the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Limits for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public listProjectLimits(groupId: string, _options?: Configuration): Promise<Array<DataFederationLimit>> {
        const result = this.api.listProjectLimits(groupId, _options);
        return result.toPromise();
    }

    /**
     * Returns details about all users in the specified project. Users belong to an organization. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Users in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param flattenTeams Flag that indicates whether the returned list should include users who belong to a team with a role in this project. You might not have assigned the individual users a role in this project. If &#x60;\&quot;flattenTeams\&quot; : false&#x60;, this resource returns only users with a role in the project.  If &#x60;\&quot;flattenTeams\&quot; : true&#x60;, this resource returns both users with roles in the project and users who belong to teams with roles in the project.
     * @param includeOrgUsers Flag that indicates whether the returned list should include users with implicit access to the project, the Organization Owner or Organization Read Only role. You might not have assigned the individual users a role in this project. If &#x60;\&quot;includeOrgUsers\&quot;: false&#x60;, this resource returns only users with a role in the project. If &#x60;\&quot;includeOrgUsers\&quot;: true&#x60;, this resource returns both users with roles in the project and users who have implicit access to the project through their organization role.
     */
    public listProjectUsers(groupId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, flattenTeams?: boolean, includeOrgUsers?: boolean, _options?: Configuration): Promise<PaginatedAppUser> {
        const result = this.api.listProjectUsers(groupId, includeCount, itemsPerPage, pageNum, flattenTeams, includeOrgUsers, _options);
        return result.toPromise();
    }

    /**
     * Returns details about all projects. Projects group clusters into logical collections that support an application environment, workload, or both. Each project can have its own users, teams, security, and alert settings. To use this resource, the requesting API Key must have the Read Write role.
     * Return All Projects
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listProjects(includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedAtlasGroup> {
        const result = this.api.listProjects(includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Removes the specified user from the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One User from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param userId Unique 24-hexadecimal string that identifies MongoDB Cloud user you want to remove from the specified project. To return a application user&#39;s ID using their application username, use the Get All application users in One Project endpoint.
     */
    public removeProjectUser(groupId: string, userId: string, _options?: Configuration): Promise<void> {
        const result = this.api.removeProjectUser(groupId, userId, _options);
        return result.toPromise();
    }

    /**
     * Returns all IP addresses for this project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All IP Addresses for One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public returnAllIPAddresses(groupId: string, _options?: Configuration): Promise<Array<GroupIPAddresses>> {
        const result = this.api.returnAllIPAddresses(groupId, _options);
        return result.toPromise();
    }

    /**
     * Sets the specified project limit. To use this resource, the requesting API Key must have the Project Owner role.  **NOTE**: Increasing the following configuration limits might lead to slower response times in the MongoDB Cloud UI or increased user management overhead leading to authentication or authorization re-architecture. If possible, we recommend that you create additional projects to gain access to more of these resources for a more sustainable growth pattern.
     * Set One Project Limit
     * @param limitName Human-readable label that identifies this project limit.  | Limit Name | Description | Default | API Override Limit | | --- | --- | --- | --- | | atlas.project.deployment.clusters | Limit on the number of clusters in this project | 25 | 90 | | atlas.project.deployment.nodesPerPrivateLinkRegion | Limit on the number of nodes per Private Link region in this project | 50 | 90 | | atlas.project.security.databaseAccess.customRoles | Limit on the number of custom roles in this project | 100 | 1400 | | atlas.project.security.databaseAccess.users | Limit on the number of database users in this project | 100 | 900 | | atlas.project.security.networkAccess.crossRegionEntries | Limit on the number of cross-region network access entries in this project | 40 | 220 | | atlas.project.security.networkAccess.entries | Limit on the number of network access entries in this project | 200 | 20 | | dataFederation.bytesProcessed.query | Limit on the number of bytes processed during a single Data Federation query | N/A | N/A | | dataFederation.bytesProcessed.daily | Limit on the number of bytes processed across all Data Federation tenants for the current day | N/A | N/A | | dataFederation.bytesProcessed.weekly | Limit on the number of bytes processed across all Data Federation tenants for the current week | N/A | N/A | | dataFederation.bytesProcessed.monthly | Limit on the number of bytes processed across all Data Federation tenants for the current month | N/A | N/A | | atlas.project.deployment.privateServiceConnectionsPerRegionGroup | Number of Private Serivce Connections per Region Group | 50 | 100| | atlas.project.deployment.privateServiceConnectionsSubnetMask | Subnet mask for GCP PSC Networks. Has lower limit of 20. | 27 | 27| 
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param dataFederationLimit Limit to update.
     */
    public setProjectLimit(limitName: string, groupId: string, dataFederationLimit: DataFederationLimit, _options?: Configuration): Promise<DataFederationLimit> {
        const result = this.api.setProjectLimit(limitName, groupId, dataFederationLimit, _options);
        return result.toPromise();
    }

    /**
     * Updates the human-readable label that identifies the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Update One Project Name
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param groupName Project to update.
     */
    public updateProject(groupId: string, groupName: GroupName, _options?: Configuration): Promise<Group> {
        const result = this.api.updateProject(groupId, groupName, _options);
        return result.toPromise();
    }

    /**
     * Updates the details of one pending invitation to the specified project. To specify which invitation to update, provide the username of the invited user. To use this resource, the requesting API Key must have the Project Owner role.
     * Update One Project Invitation
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param groupInvitationRequest Updates the details of one pending invitation to the specified project.
     */
    public updateProjectInvitation(groupId: string, groupInvitationRequest: GroupInvitationRequest, _options?: Configuration): Promise<GroupInvitation> {
        const result = this.api.updateProjectInvitation(groupId, groupInvitationRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates the details of one pending invitation to the specified project. To specify which invitation to update, provide the unique identification string for that invitation. Use the Return All Project Invitations endpoint to retrieve IDs for all pending project invitations. To use this resource, the requesting API Key must have the Project Owner role.
     * Update One Project Invitation by Invitation ID
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param invitationId Unique 24-hexadecimal digit string that identifies the invitation.
     * @param groupInvitationUpdateRequest Updates the details of one pending invitation to the specified project.
     */
    public updateProjectInvitationById(groupId: string, invitationId: string, groupInvitationUpdateRequest: GroupInvitationUpdateRequest, _options?: Configuration): Promise<GroupInvitation> {
        const result = this.api.updateProjectInvitationById(groupId, invitationId, groupInvitationUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates the roles of the specified user in the specified project. To specify the user to update, provide the unique 24-hexadecimal digit string that identifies the user in the specified project. To use this resource, the requesting API Key must have the Group User Admin role.
     * Update Project Roles for One MongoDB Cloud User
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param userId Unique 24-hexadecimal digit string that identifies the user to modify.
     * @param updateGroupRolesForUser Roles to update for the specified user.
     */
    public updateProjectRoles(groupId: string, userId: string, updateGroupRolesForUser: UpdateGroupRolesForUser, _options?: Configuration): Promise<UpdateGroupRolesForUser> {
        const result = this.api.updateProjectRoles(groupId, userId, updateGroupRolesForUser, _options);
        return result.toPromise();
    }

    /**
     * Updates the settings of the specified project. You can update any of the options available. MongoDB cloud only updates the options provided in the request. To use this resource, the requesting API Key must have the Project Owner role.
     * Update One Project Settings
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param groupSettings Settings to update.
     */
    public updateProjectSettings(groupId: string, groupSettings: GroupSettings, _options?: Configuration): Promise<GroupSettings> {
        const result = this.api.updateProjectSettings(groupId, groupSettings, _options);
        return result.toPromise();
    }


}



import { ObservablePushBasedLogExportApi } from './ObservableAPI';

import { PushBasedLogExportApiRequestFactory, PushBasedLogExportApiResponseProcessor} from "../apis/PushBasedLogExportApi";
export class PromisePushBasedLogExportApi {
    private api: ObservablePushBasedLogExportApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PushBasedLogExportApiRequestFactory,
        responseProcessor?: PushBasedLogExportApiResponseProcessor
    ) {
        this.api = new ObservablePushBasedLogExportApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Configures the project level settings for the push-based log export feature.
     * Enable the push-based log export feature for a project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param pushBasedLogExportProject The project configuration details. The S3 bucket name, IAM role ID, and prefix path fields are required.
     */
    public createPushBasedLogConfiguration(groupId: string, pushBasedLogExportProject: PushBasedLogExportProject, _options?: Configuration): Promise<void> {
        const result = this.api.createPushBasedLogConfiguration(groupId, pushBasedLogExportProject, _options);
        return result.toPromise();
    }

    /**
     * Disables the push-based log export feature by resetting the project level settings to its default configuration.
     * Disable the push-based log export feature for a project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public deletePushBasedLogConfiguration(groupId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deletePushBasedLogConfiguration(groupId, _options);
        return result.toPromise();
    }

    /**
     * Fetches the current project level settings for the push-based log export feature.
     * Get the push-based log export configuration for a project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public getPushBasedLogConfiguration(groupId: string, _options?: Configuration): Promise<PushBasedLogExportProject> {
        const result = this.api.getPushBasedLogConfiguration(groupId, _options);
        return result.toPromise();
    }

    /**
     * Updates the project level settings for the push-based log export feature.
     * Update the push-based log export feature for a project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param pushBasedLogExportProject The project configuration details. The S3 bucket name, IAM role ID, and prefix path fields are the only fields that may be specified. Fields left unspecified will not be modified.
     */
    public updatePushBasedLogConfiguration(groupId: string, pushBasedLogExportProject: PushBasedLogExportProject, _options?: Configuration): Promise<void> {
        const result = this.api.updatePushBasedLogConfiguration(groupId, pushBasedLogExportProject, _options);
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
     * Creates an index on the cluster identified by its name in a rolling manner. Creating the index in this way allows index builds on one replica set member as a standalone at a time, starting with the secondary members. Creating indexes in this way requires at least one replica set election. To use this resource, the requesting API Key must have the Project Data Access Admin role.
     * Create One Rolling Index
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster on which MongoDB Cloud creates an index.
     * @param databaseRollingIndexRequest Rolling index to create on the specified cluster.
     */
    public createRollingIndex(groupId: string, clusterName: string, databaseRollingIndexRequest: DatabaseRollingIndexRequest, _options?: Configuration): Promise<void> {
        const result = this.api.createRollingIndex(groupId, clusterName, databaseRollingIndexRequest, _options);
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
     */
    public getSystemStatus(_options?: Configuration): Promise<SystemStatus> {
        const result = this.api.getSystemStatus(_options);
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
     * Creates one serverless instance in the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Create One Serverless Instance in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param serverlessInstanceDescriptionCreate Create One Serverless Instance in One Project.
     */
    public createServerlessInstance(groupId: string, serverlessInstanceDescriptionCreate: ServerlessInstanceDescriptionCreate, _options?: Configuration): Promise<ServerlessInstanceDescription> {
        const result = this.api.createServerlessInstance(groupId, serverlessInstanceDescriptionCreate, _options);
        return result.toPromise();
    }

    /**
     * Removes one serverless instance from the specified project. The serverless instance must have termination protection disabled in order to be deleted. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Serverless Instance from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param name Human-readable label that identifies the serverless instance.
     */
    public deleteServerlessInstance(groupId: string, name: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteServerlessInstance(groupId, name, _options);
        return result.toPromise();
    }

    /**
     * Returns details for one serverless instance in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Serverless Instance from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param name Human-readable label that identifies the serverless instance.
     */
    public getServerlessInstance(groupId: string, name: string, _options?: Configuration): Promise<ServerlessInstanceDescription> {
        const result = this.api.getServerlessInstance(groupId, name, _options);
        return result.toPromise();
    }

    /**
     * Returns details for all serverless instances in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Serverless Instances from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listServerlessInstances(groupId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedServerlessInstanceDescription> {
        const result = this.api.listServerlessInstances(groupId, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Updates one serverless instance in the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Update One Serverless Instance in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param name Human-readable label that identifies the serverless instance.
     * @param serverlessInstanceDescriptionUpdate Update One Serverless Instance in One Project.
     */
    public updateServerlessInstance(groupId: string, name: string, serverlessInstanceDescriptionUpdate: ServerlessInstanceDescriptionUpdate, _options?: Configuration): Promise<ServerlessInstanceDescription> {
        const result = this.api.updateServerlessInstance(groupId, name, serverlessInstanceDescriptionUpdate, _options);
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
     * Creates one private endpoint for one serverless instance. To use this resource, the requesting API Key must have the Project Owner role.   A new endpoint won't be immediately available after creation.  Read the steps in the linked tutorial for detailed guidance.
     * Create One Private Endpoint for One Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param instanceName Human-readable label that identifies the serverless instance for which the tenant endpoint will be created.
     * @param serverlessTenantCreateRequest Information about the Private Endpoint to create for the Serverless Instance.
     */
    public createServerlessPrivateEndpoint(groupId: string, instanceName: string, serverlessTenantCreateRequest: ServerlessTenantCreateRequest, _options?: Configuration): Promise<ServerlessTenantEndpoint> {
        const result = this.api.createServerlessPrivateEndpoint(groupId, instanceName, serverlessTenantCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * Remove one private endpoint from one serverless instance. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Private Endpoint for One Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param instanceName Human-readable label that identifies the serverless instance from which the tenant endpoint will be removed.
     * @param endpointId Unique 24-hexadecimal digit string that identifies the tenant endpoint which will be removed.
     */
    public deleteServerlessPrivateEndpoint(groupId: string, instanceName: string, endpointId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteServerlessPrivateEndpoint(groupId, instanceName, endpointId, _options);
        return result.toPromise();
    }

    /**
     * Return one private endpoint for one serverless instance. Identify this endpoint using its unique ID. You must have at least the Project Read Only role for the project to successfully call this resource.
     * Return One Private Endpoint for One Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param instanceName Human-readable label that identifies the serverless instance associated with the tenant endpoint.
     * @param endpointId Unique 24-hexadecimal digit string that identifies the tenant endpoint.
     */
    public getServerlessPrivateEndpoint(groupId: string, instanceName: string, endpointId: string, _options?: Configuration): Promise<ServerlessTenantEndpoint> {
        const result = this.api.getServerlessPrivateEndpoint(groupId, instanceName, endpointId, _options);
        return result.toPromise();
    }

    /**
     * Returns all private endpoints for one serverless instance. You must have at least the Project Read Only role for the project to successfully call this resource.
     * Return All Private Endpoints for One Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param instanceName Human-readable label that identifies the serverless instance associated with the tenant endpoint.
     */
    public listServerlessPrivateEndpoints(groupId: string, instanceName: string, _options?: Configuration): Promise<Array<ServerlessTenantEndpoint>> {
        const result = this.api.listServerlessPrivateEndpoints(groupId, instanceName, _options);
        return result.toPromise();
    }

    /**
     * Updates one private endpoint for one serverless instance. To use this resource, the requesting API Key must have the Project Owner role.
     * Update One Private Endpoint for One Serverless Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param instanceName Human-readable label that identifies the serverless instance associated with the tenant endpoint that will be updated.
     * @param endpointId Unique 24-hexadecimal digit string that identifies the tenant endpoint which will be updated.
     * @param serverlessTenantEndpointUpdate Object used for update.
     */
    public updateServerlessPrivateEndpoint(groupId: string, instanceName: string, endpointId: string, serverlessTenantEndpointUpdate: ServerlessTenantEndpointUpdate, _options?: Configuration): Promise<ServerlessTenantEndpoint> {
        const result = this.api.updateServerlessPrivateEndpoint(groupId, instanceName, endpointId, serverlessTenantEndpointUpdate, _options);
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
     * Restores the specified cluster. MongoDB Cloud limits which clusters can be the target clusters of a restore. The target cluster can't use encryption at rest, run a major release MongoDB version different than the snapshot, or receive client requests during restores. MongoDB Cloud deletes all existing data on the target cluster prior to the restore operation. To use this resource, the requesting API Key must have the Project Owner role.
     * Create One Restore Job from One M2 or M5 Cluster
     * @param clusterName Human-readable label that identifies the cluster.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantRestore The restore job details.
     */
    public createSharedClusterBackupRestoreJob(clusterName: string, groupId: string, tenantRestore: TenantRestore, _options?: Configuration): Promise<TenantRestore> {
        const result = this.api.createSharedClusterBackupRestoreJob(clusterName, groupId, tenantRestore, _options);
        return result.toPromise();
    }

    /**
     * Returns the specified restore job. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Restore Job for One M2 or M5 Cluster
     * @param clusterName Human-readable label that identifies the cluster.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param restoreId Unique 24-hexadecimal digit string that identifies the restore job to return.
     */
    public getSharedClusterBackupRestoreJob(clusterName: string, groupId: string, restoreId: string, _options?: Configuration): Promise<TenantRestore> {
        const result = this.api.getSharedClusterBackupRestoreJob(clusterName, groupId, restoreId, _options);
        return result.toPromise();
    }

    /**
     * Returns all restore jobs for the specified M2 or M5 cluster. Restore jobs restore a cluster using a snapshot. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Restore Jobs for One M2 or M5 Cluster
     * @param clusterName Human-readable label that identifies the cluster.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public listSharedClusterBackupRestoreJobs(clusterName: string, groupId: string, _options?: Configuration): Promise<PaginatedTenantRestore> {
        const result = this.api.listSharedClusterBackupRestoreJobs(clusterName, groupId, _options);
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
     * Requests one snapshot for the specified shared cluster. This resource returns a `snapshotURL` that you can use to download the snapshot. This `snapshotURL` remains active for four hours after you make the request. To use this resource, the requesting API Key must have the Project Owner role.
     * Download One M2 or M5 Cluster Snapshot
     * @param clusterName Human-readable label that identifies the cluster.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantRestore Snapshot to be downloaded.
     */
    public downloadSharedClusterBackup(clusterName: string, groupId: string, tenantRestore: TenantRestore, _options?: Configuration): Promise<TenantRestore> {
        const result = this.api.downloadSharedClusterBackup(clusterName, groupId, tenantRestore, _options);
        return result.toPromise();
    }

    /**
     * Returns details for one snapshot for the specified shared cluster. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Snapshot for One M2 or M5 Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     * @param snapshotId Unique 24-hexadecimal digit string that identifies the desired snapshot.
     */
    public getSharedClusterBackup(groupId: string, clusterName: string, snapshotId: string, _options?: Configuration): Promise<BackupTenantSnapshot> {
        const result = this.api.getSharedClusterBackup(groupId, clusterName, snapshotId, _options);
        return result.toPromise();
    }

    /**
     * Returns details for all snapshots for the specified shared cluster. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Snapshots for One M2 or M5 Cluster
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster.
     */
    public listSharedClusterBackups(groupId: string, clusterName: string, _options?: Configuration): Promise<PaginatedTenantSnapshot> {
        const result = this.api.listSharedClusterBackups(groupId, clusterName, _options);
        return result.toPromise();
    }


}



import { ObservableStreamsApi } from './ObservableAPI';

import { StreamsApiRequestFactory, StreamsApiResponseProcessor} from "../apis/StreamsApi";
export class PromiseStreamsApi {
    private api: ObservableStreamsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StreamsApiRequestFactory,
        responseProcessor?: StreamsApiResponseProcessor
    ) {
        this.api = new ObservableStreamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one connection for a stream instance in the specified project. To use this resource, the requesting API Key must have the Project Owner roles.
     * Create One Connection
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantName Human-readable label that identifies the stream instance.
     * @param streamsConnection Details to create one connection for a streams instance in the specified project.
     */
    public createStreamConnection(groupId: string, tenantName: string, streamsConnection: StreamsConnection, _options?: Configuration): Promise<StreamsConnection> {
        const result = this.api.createStreamConnection(groupId, tenantName, streamsConnection, _options);
        return result.toPromise();
    }

    /**
     * Creates one stream instance in the specified project. To use this resource, the requesting API Key must have the Project Owner roles.
     * Create One Stream Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param streamsTenant Details to create one streams instance in the specified project.
     */
    public createStreamInstance(groupId: string, streamsTenant: StreamsTenant, _options?: Configuration): Promise<StreamsTenant> {
        const result = this.api.createStreamInstance(groupId, streamsTenant, _options);
        return result.toPromise();
    }

    /**
     * Delete one connection of the specified stream instance. To use this resource, the requesting API Key must have the Project Owner roles.
     * Delete One Stream Connection
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantName Human-readable label that identifies the stream instance.
     * @param connectionName Human-readable label that identifies the stream connection.
     */
    public deleteStreamConnection(groupId: string, tenantName: string, connectionName: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteStreamConnection(groupId, tenantName, connectionName, _options);
        return result.toPromise();
    }

    /**
     * Delete one stream instance in the specified project. To use this resource, the requesting API Key must have the Project Owner roles.
     * Delete One Stream Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantName Human-readable label that identifies the stream instance to delete.
     */
    public deleteStreamInstance(groupId: string, tenantName: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteStreamInstance(groupId, tenantName, _options);
        return result.toPromise();
    }

    /**
     * Returns the details of one stream connection within the specified stream instance. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Stream Connection
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantName Human-readable label that identifies the stream instance to return.
     * @param connectionName Human-readable label that identifies the stream connection to return.
     */
    public getStreamConnection(groupId: string, tenantName: string, connectionName: string, _options?: Configuration): Promise<StreamsConnection> {
        const result = this.api.getStreamConnection(groupId, tenantName, connectionName, _options);
        return result.toPromise();
    }

    /**
     * Returns the details of one stream instance within the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Stream Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantName Human-readable label that identifies the stream instance to return.
     * @param includeConnections Flag to indicate whether connections information should be included in the stream instance.
     */
    public getStreamInstance(groupId: string, tenantName: string, includeConnections?: boolean, _options?: Configuration): Promise<StreamsTenant> {
        const result = this.api.getStreamInstance(groupId, tenantName, includeConnections, _options);
        return result.toPromise();
    }

    /**
     * Returns all connections of the stream instance for the specified project.
     * Return All Connections Of The Stream Instances
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantName Human-readable label that identifies the stream instance.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listStreamConnections(groupId: string, tenantName: string, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedApiStreamsConnection> {
        const result = this.api.listStreamConnections(groupId, tenantName, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Returns all stream instances for the specified project.
     * Return All Project Stream Instances
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listStreamInstances(groupId: string, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedApiStreamsTenant> {
        const result = this.api.listStreamInstances(groupId, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Update one connection for the specified stream instance in the specified project. To use this resource, the requesting API Key must have the Project Owner roles.
     * Update One Stream Connection
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantName Human-readable label that identifies the stream instance.
     * @param connectionName Human-readable label that identifies the stream connection.
     * @param streamsConnection Details to update one connection for a streams instance in the specified project.
     */
    public updateStreamConnection(groupId: string, tenantName: string, connectionName: string, streamsConnection: StreamsConnection, _options?: Configuration): Promise<StreamsConnection> {
        const result = this.api.updateStreamConnection(groupId, tenantName, connectionName, streamsConnection, _options);
        return result.toPromise();
    }

    /**
     * Update one stream instance in the specified project. To use this resource, the requesting API Key must have the Project Owner roles.
     * Update One Stream Instance
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param tenantName Human-readable label that identifies the stream instance to update.
     * @param streamsDataProcessRegion Details of the new data process region to update in the streams instance.
     */
    public updateStreamInstance(groupId: string, tenantName: string, streamsDataProcessRegion: StreamsDataProcessRegion, _options?: Configuration): Promise<StreamsTenant> {
        const result = this.api.updateStreamInstance(groupId, tenantName, streamsDataProcessRegion, _options);
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
     * Adds one team to the specified project. All members of the team share the same project access. MongoDB Cloud limits the number of users to a maximum of 100 teams per project and a maximum of 250 teams per organization. To use this resource, the requesting API Key must have the Project Owner role.
     * Add One or More Teams to One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param teamRole Team to add to the specified project.
     */
    public addAllTeamsToProject(groupId: string, teamRole: Array<TeamRole>, _options?: Configuration): Promise<PaginatedTeamRole> {
        const result = this.api.addAllTeamsToProject(groupId, teamRole, _options);
        return result.toPromise();
    }

    /**
     * Adds one or more MongoDB Cloud users from the specified organization to the specified team. Teams enable you to grant project access roles to MongoDB Cloud users. You can assign up to 250 MongoDB Cloud users from one organization to one team. To use this resource, the requesting API Key must have the Organization Owner role.
     * Assign MongoDB Cloud Users from One Organization to One Team
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param teamId Unique 24-hexadecimal character string that identifies the team to which you want to add MongoDB Cloud users.
     * @param addUserToTeam One or more MongoDB Cloud users that you want to add to the specified team.
     */
    public addTeamUser(orgId: string, teamId: string, addUserToTeam: Array<AddUserToTeam>, _options?: Configuration): Promise<PaginatedApiAppUser> {
        const result = this.api.addTeamUser(orgId, teamId, addUserToTeam, _options);
        return result.toPromise();
    }

    /**
     * Creates one team in the specified organization. Teams enable you to grant project access roles to MongoDB Cloud users. MongoDB Cloud limits the number of teams to a maximum of 250 teams per organization. To use this resource, the requesting API Key must have the Organization Owner role.
     * Create One Team in One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param team Team that you want to create in the specified organization.
     */
    public createTeam(orgId: string, team: Team, _options?: Configuration): Promise<Team> {
        const result = this.api.createTeam(orgId, team, _options);
        return result.toPromise();
    }

    /**
     * Removes one team specified using its unique 24-hexadecimal digit identifier from the organization specified using its unique 24-hexadecimal digit identifier. To use this resource, the requesting API Key must have the Organization Owner role.
     * Remove One Team from One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param teamId Unique 24-hexadecimal digit string that identifies the team that you want to delete.
     */
    public deleteTeam(orgId: string, teamId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteTeam(orgId, teamId, _options);
        return result.toPromise();
    }

    /**
     * Returns one team that you identified using its unique 24-hexadecimal digit ID. This team belongs to one organization. Teams enable you to grant project access roles to MongoDB Cloud users. To use this resource, the requesting API Key must have the Organization Member role.
     * Return One Team using its ID
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param teamId Unique 24-hexadecimal digit string that identifies the team whose information you want to return.
     */
    public getTeamById(orgId: string, teamId: string, _options?: Configuration): Promise<TeamResponse> {
        const result = this.api.getTeamById(orgId, teamId, _options);
        return result.toPromise();
    }

    /**
     * Returns one team that you identified using its human-readable name. This team belongs to one organization. Teams enable you to grant project access roles to MongoDB Cloud users. To use this resource, the requesting API Key must have the Organization Member role.
     * Return One Team using its Name
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param teamName Name of the team whose information you want to return.
     */
    public getTeamByName(orgId: string, teamName: string, _options?: Configuration): Promise<TeamResponse> {
        const result = this.api.getTeamByName(orgId, teamName, _options);
        return result.toPromise();
    }

    /**
     * Returns all teams that belong to the specified organization. Teams enable you to grant project access roles to MongoDB Cloud users. MongoDB Cloud only returns teams for which you have access. To use this resource, the requesting API Key must have the Organization Member role.
     * Return All Teams in One Organization
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listOrganizationTeams(orgId: string, itemsPerPage?: number, includeCount?: boolean, pageNum?: number, _options?: Configuration): Promise<PaginatedTeam> {
        const result = this.api.listOrganizationTeams(orgId, itemsPerPage, includeCount, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Returns all teams to which the authenticated user has access in the project specified using its unique 24-hexadecimal digit identifier. All members of the team share the same project access. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Teams in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listProjectTeams(groupId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedTeamRole> {
        const result = this.api.listProjectTeams(groupId, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Returns all MongoDB Cloud users assigned to the team specified using its unique 24-hexadecimal digit identifier. This team belongs to one organization. Teams enable you to grant project access roles to MongoDB Cloud users. To use this resource, the requesting API Key must have the Organization Member role.
     * Return All MongoDB Cloud Users Assigned to One Team
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param teamId Unique 24-hexadecimal digit string that identifies the team whose application users you want to return.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listTeamUsers(orgId: string, teamId: string, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedApiAppUser> {
        const result = this.api.listTeamUsers(orgId, teamId, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Removes one team specified using its unique 24-hexadecimal digit identifier from the project specified using its unique 24-hexadecimal digit identifier. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Team from One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param teamId Unique 24-hexadecimal digit string that identifies the team that you want to remove from the specified project.
     */
    public removeProjectTeam(groupId: string, teamId: string, _options?: Configuration): Promise<void> {
        const result = this.api.removeProjectTeam(groupId, teamId, _options);
        return result.toPromise();
    }

    /**
     * Removes one MongoDB Cloud user from the specified team. This team belongs to one organization. Teams enable you to grant project access roles to MongoDB Cloud users. To use this resource, the requesting API Key must have the Organization Owner role.
     * Remove One MongoDB Cloud User from One Team
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param teamId Unique 24-hexadecimal digit string that identifies the team from which you want to remove one database application user.
     * @param userId Unique 24-hexadecimal digit string that identifies MongoDB Cloud user that you want to remove from the specified team.
     */
    public removeTeamUser(orgId: string, teamId: string, userId: string, _options?: Configuration): Promise<void> {
        const result = this.api.removeTeamUser(orgId, teamId, userId, _options);
        return result.toPromise();
    }

    /**
     * Renames one team in the specified organization. Teams enable you to grant project access roles to MongoDB Cloud users. To use this resource, the requesting API Key must have the Organization Owner role.
     * Rename One Team
     * @param orgId Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @param teamId Unique 24-hexadecimal digit string that identifies the team that you want to rename.
     * @param team Details to update on the specified team.
     */
    public renameTeam(orgId: string, teamId: string, team: Team, _options?: Configuration): Promise<TeamResponse> {
        const result = this.api.renameTeam(orgId, teamId, team, _options);
        return result.toPromise();
    }

    /**
     * Updates the project roles assigned to the specified team. You can grant team roles for specific projects and grant project access roles to users in the team. All members of the team share the same project access. To use this resource, the requesting API Key must have the Project Owner role.
     * Update Team Roles in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param teamId Unique 24-hexadecimal digit string that identifies the team for which you want to update roles.
     * @param teamRole The project roles assigned to the specified team.
     */
    public updateTeamRoles(groupId: string, teamId: string, teamRole: TeamRole, _options?: Configuration): Promise<PaginatedTeamRole> {
        const result = this.api.updateTeamRoles(groupId, teamId, teamRole, _options);
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
     * Adds the settings for configuring one third-party service integration. These settings apply to all databases managed in the specified MongoDB Cloud project. Each project can have only one configuration per `{INTEGRATION-TYPE}`. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.
     * Configure One Third-Party Service Integration
     * @param integrationType Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param thridPartyIntegration Third-party integration that you want to configure for your project.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public createThirdPartyIntegration(integrationType: string, groupId: string, thridPartyIntegration: ThridPartyIntegration, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedIntegration> {
        const result = this.api.createThirdPartyIntegration(integrationType, groupId, thridPartyIntegration, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Removes the settings that permit configuring one third-party service integration. These settings apply to all databases managed in one MongoDB Cloud project. If you delete an integration from a project, you remove that integration configuration only for that project. This action doesn't affect any other project or organization's configured `{INTEGRATION-TYPE}` integrations. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.
     * Remove One Third-Party Service Integration
     * @param integrationType Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public deleteThirdPartyIntegration(integrationType: string, groupId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteThirdPartyIntegration(integrationType, groupId, _options);
        return result.toPromise();
    }

    /**
     * Returns the settings for configuring integration with one third-party service. These settings apply to all databases managed in one MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.
     * Return One Third-Party Service Integration
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param integrationType Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
     */
    public getThirdPartyIntegration(groupId: string, integrationType: string, _options?: Configuration): Promise<ThridPartyIntegration> {
        const result = this.api.getThirdPartyIntegration(groupId, integrationType, _options);
        return result.toPromise();
    }

    /**
     * Returns the settings that permit integrations with all configured third-party services. These settings apply to all databases managed in one MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.
     * Return All Active Third-Party Service Integrations
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listThirdPartyIntegrations(groupId: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedIntegration> {
        const result = this.api.listThirdPartyIntegrations(groupId, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }

    /**
     * Updates the settings for configuring integration with one third-party service. These settings apply to all databases managed in one MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.
     * Update One Third-Party Service Integration
     * @param integrationType Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param thridPartyIntegration Third-party integration that you want to configure for your project.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public updateThirdPartyIntegration(integrationType: string, groupId: string, thridPartyIntegration: ThridPartyIntegration, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedIntegration> {
        const result = this.api.updateThirdPartyIntegration(integrationType, groupId, thridPartyIntegration, includeCount, itemsPerPage, pageNum, _options);
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
     * Generates one X.509 certificate for the specified MongoDB user. Atlas manages the certificate and MongoDB user that belong to one project. To use this resource, the requesting API Key must have the Project Owner role.  To get MongoDB Cloud to generate a managed certificate for a database user, set `\"x509Type\" : \"MANAGED\"` on the desired MongoDB Database User.  If you are managing your own Certificate Authority (CA) in Self-Managed X.509 mode, you must generate certificates for database users using your own CA.
     * Create One X.509 Certificate for One MongoDB User
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param username Human-readable label that represents the MongoDB database user account for whom to create a certificate.
     * @param userCert Generates one X.509 certificate for the specified MongoDB user.
     */
    public createDatabaseUserCertificate(groupId: string, username: string, userCert: UserCert, _options?: Configuration): Promise<string> {
        const result = this.api.createDatabaseUserCertificate(groupId, username, userCert, _options);
        return result.toPromise();
    }

    /**
     * Clears the customer-managed X.509 settings on a project, including the uploaded Certificate Authority, which disables self-managed X.509.   Updating this configuration triggers a rolling restart of the database. You must have the Project Owner role to use this endpoint.
     * Disable Customer-Managed X.509
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     */
    public disableCustomerManagedX509(groupId: string, _options?: Configuration): Promise<UserSecurity> {
        const result = this.api.disableCustomerManagedX509(groupId, _options);
        return result.toPromise();
    }

    /**
     * Returns all unexpired X.509 certificates for the specified MongoDB user. This MongoDB user belongs to one project. Atlas manages these certificates and the MongoDB user. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All X.509 Certificates Assigned to One MongoDB User
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param username Human-readable label that represents the MongoDB database user account whose certificates you want to return.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     */
    public listDatabaseUserCertificates(groupId: string, username: string, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, _options?: Configuration): Promise<PaginatedUserCert> {
        const result = this.api.listDatabaseUserCertificates(groupId, username, includeCount, itemsPerPage, pageNum, _options);
        return result.toPromise();
    }


}



