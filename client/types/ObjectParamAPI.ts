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

import { ObservableAWSClustersDNSApi } from "./ObservableAPI";
import { AWSClustersDNSApiRequestFactory, AWSClustersDNSApiResponseProcessor} from "../apis/AWSClustersDNSApi";

export interface AWSClustersDNSApiGetAWSCustomDNSRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AWSClustersDNSApigetAWSCustomDNS
     */
    groupId: string
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
     * @type AWSCustomDNSEnabled
     * @memberof AWSClustersDNSApitoggleAWSCustomDNS
     */
    aWSCustomDNSEnabled: AWSCustomDNSEnabled
}

export class ObjectAWSClustersDNSApi {
    private api: ObservableAWSClustersDNSApi

    public constructor(configuration: Configuration, requestFactory?: AWSClustersDNSApiRequestFactory, responseProcessor?: AWSClustersDNSApiResponseProcessor) {
        this.api = new ObservableAWSClustersDNSApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the custom DNS configuration for AWS clusters in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Custom DNS Configuration for Atlas Clusters on AWS
     * @param param the request object
     */
    public getAWSCustomDNS(param: AWSClustersDNSApiGetAWSCustomDNSRequest, options?: Configuration): Promise<AWSCustomDNSEnabled> {
        return this.api.getAWSCustomDNS(param.groupId,  options).toPromise();
    }

    /**
     * Enables or disables the custom DNS configuration for AWS clusters in the specified project. Enable custom DNS if you use AWS VPC peering and use your own DNS servers. To use this resource, the requesting API Key must have the Project Atlas Admin role.
     * Toggle State of One Custom DNS Configuration for Atlas Clusters on AWS
     * @param param the request object
     */
    public toggleAWSCustomDNS(param: AWSClustersDNSApiToggleAWSCustomDNSRequest, options?: Configuration): Promise<AWSCustomDNSEnabled> {
        return this.api.toggleAWSCustomDNS(param.groupId, param.aWSCustomDNSEnabled,  options).toPromise();
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
     * Flag that indicates whether the response returns the successful authentication attempts only.
     * @type boolean
     * @memberof AccessTrackingApilistAccessLogsByClusterName
     */
    authResult?: boolean
    /**
     * Date and time when to stop retrieving database history. If you specify **end**, you must also specify **start**. This parameter uses UNIX epoch time in milliseconds.
     * @type number
     * @memberof AccessTrackingApilistAccessLogsByClusterName
     */
    end?: number
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
     * Date and time when MongoDB Cloud begins retrieving database history. If you specify **start**, you must also specify **end**. This parameter uses UNIX epoch time in milliseconds.
     * @type number
     * @memberof AccessTrackingApilistAccessLogsByClusterName
     */
    start?: number
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
     * Flag that indicates whether the response returns the successful authentication attempts only.
     * @type boolean
     * @memberof AccessTrackingApilistAccessLogsByHostname
     */
    authResult?: boolean
    /**
     * Date and time when to stop retrieving database history. If you specify **end**, you must also specify **start**. This parameter uses UNIX epoch time in milliseconds.
     * @type number
     * @memberof AccessTrackingApilistAccessLogsByHostname
     */
    end?: number
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
     * Date and time when MongoDB Cloud begins retrieving database history. If you specify **start**, you must also specify **end**. This parameter uses UNIX epoch time in milliseconds.
     * @type number
     * @memberof AccessTrackingApilistAccessLogsByHostname
     */
    start?: number
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
    public listAccessLogsByClusterName(param: AccessTrackingApiListAccessLogsByClusterNameRequest, options?: Configuration): Promise<MongoDBAccessLogsList> {
        return this.api.listAccessLogsByClusterName(param.groupId, param.clusterName, param.authResult, param.end, param.ipAddress, param.nLogs, param.start,  options).toPromise();
    }

    /**
     * Returns the access logs of one cluster identified by the cluster's hostname. Access logs contain a list of authentication requests made against your clusters. You can't use this feature on tenant-tier clusters (M0, M2, M5). To use this resource, the requesting API Key must have the Project Monitoring Admin role.
     * Return Database Access History for One Cluster using Its Hostname
     * @param param the request object
     */
    public listAccessLogsByHostname(param: AccessTrackingApiListAccessLogsByHostnameRequest, options?: Configuration): Promise<MongoDBAccessLogsList> {
        return this.api.listAccessLogsByHostname(param.groupId, param.hostname, param.authResult, param.end, param.ipAddress, param.nLogs, param.start,  options).toPromise();
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
     * @type GroupAlertsConfig
     * @memberof AlertConfigurationsApicreateAlertConfiguration
     */
    groupAlertsConfig: GroupAlertsConfig
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
}

export interface AlertConfigurationsApiListAlertConfigurationMatchersFieldNamesRequest {
}

export interface AlertConfigurationsApiListAlertConfigurationsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AlertConfigurationsApilistAlertConfigurations
     */
    groupId: string
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
     * @type AlertsToggle
     * @memberof AlertConfigurationsApitoggleAlertConfiguration
     */
    alertsToggle: AlertsToggle
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
     * @type GroupAlertsConfig
     * @memberof AlertConfigurationsApiupdateAlertConfiguration
     */
    groupAlertsConfig: GroupAlertsConfig
}

export class ObjectAlertConfigurationsApi {
    private api: ObservableAlertConfigurationsApi

    public constructor(configuration: Configuration, requestFactory?: AlertConfigurationsApiRequestFactory, responseProcessor?: AlertConfigurationsApiResponseProcessor) {
        this.api = new ObservableAlertConfigurationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one alert configuration for the specified project. Alert configurations define the triggers and notification methods for alerts. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.  This resource remains under revision and may change.
     * Create One Alert Configuration in One Project
     * @param param the request object
     */
    public createAlertConfiguration(param: AlertConfigurationsApiCreateAlertConfigurationRequest, options?: Configuration): Promise<GroupAlertsConfig> {
        return this.api.createAlertConfiguration(param.groupId, param.groupAlertsConfig,  options).toPromise();
    }

    /**
     * Removes one alert configuration from the specified project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.  This resource remains under revision and may change.
     * Remove One Alert Configuration from One Project
     * @param param the request object
     */
    public deleteAlertConfiguration(param: AlertConfigurationsApiDeleteAlertConfigurationRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAlertConfiguration(param.groupId, param.alertConfigId,  options).toPromise();
    }

    /**
     * Returns the specified alert configuration from the specified project. To use this resource, the requesting API Key must have the Project Read Only role.  This resource remains under revision and may change.
     * Return One Alert Configuration from One Project
     * @param param the request object
     */
    public getAlertConfiguration(param: AlertConfigurationsApiGetAlertConfigurationRequest, options?: Configuration): Promise<GroupAlertsConfig> {
        return this.api.getAlertConfiguration(param.groupId, param.alertConfigId,  options).toPromise();
    }

    /**
     * Get all field names that the `matchers.fieldName` parameter accepts when you create or update an Alert Configuration. You can successfully call this endpoint with any assigned role.
     * Get All Alert Configuration Matchers Field Names
     * @param param the request object
     */
    public listAlertConfigurationMatchersFieldNames(param: AlertConfigurationsApiListAlertConfigurationMatchersFieldNamesRequest = {}, options?: Configuration): Promise<Array<string>> {
        return this.api.listAlertConfigurationMatchersFieldNames( options).toPromise();
    }

    /**
     * Returns all alert configurations for one project. These alert configurations apply to any component in the project. Alert configurations define the triggers and notification methods for alerts. To use this resource, the requesting API Key must have the Project Read Only role.  This resource remains under revision and may change.
     * Return All Alert Configurations for One Project
     * @param param the request object
     */
    public listAlertConfigurations(param: AlertConfigurationsApiListAlertConfigurationsRequest, options?: Configuration): Promise<PaginatedAlertConfig> {
        return this.api.listAlertConfigurations(param.groupId, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Returns all alert configurations set for the specified alert. To use this resource, the requesting API Key must have the Project Read Only role.  This resource remains under revision and may change.
     * Return All Alert Configurations Set for One Alert
     * @param param the request object
     */
    public listAlertConfigurationsByAlertId(param: AlertConfigurationsApiListAlertConfigurationsByAlertIdRequest, options?: Configuration): Promise<PaginatedAlertConfig> {
        return this.api.listAlertConfigurationsByAlertId(param.groupId, param.alertId, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Enables or disables the specified alert configuration in the specified project. The resource enables the specified alert configuration if currently enabled. The resource disables the specified alert configuration if currently disabled. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.  **NOTE**: This endpoint updates only the enabled/disabled state for the alert configuration. To update more than just this configuration, see [Update One Alert Configuration](#tag/Alert-Configurations/operation/updateAlertConfiguration).  This resource remains under revision and may change.
     * Toggle One State of One Alert Configuration in One Project
     * @param param the request object
     */
    public toggleAlertConfiguration(param: AlertConfigurationsApiToggleAlertConfigurationRequest, options?: Configuration): Promise<GroupAlertsConfig> {
        return this.api.toggleAlertConfiguration(param.groupId, param.alertConfigId, param.alertsToggle,  options).toPromise();
    }

    /**
     * Updates one alert configuration in the specified project. Alert configurations define the triggers and notification methods for alerts. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.  **NOTE**: To enable or disable the alert configuration, see [Toggle One State of One Alert Configuration in One Project](#tag/Alert-Configurations/operation/toggleAlertConfiguration).  This resource remains under revision and may change.
     * Update One Alert Configuration for One Project
     * @param param the request object
     */
    public updateAlertConfiguration(param: AlertConfigurationsApiUpdateAlertConfigurationRequest, options?: Configuration): Promise<GroupAlertsConfig> {
        return this.api.updateAlertConfiguration(param.groupId, param.alertConfigId, param.groupAlertsConfig,  options).toPromise();
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
}

export interface AlertsApiListAlertsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AlertsApilistAlerts
     */
    groupId: string
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
     * Status of the alerts to return. Omit to return all alerts in all statuses.
     * @type string
     * @memberof AlertsApilistAlerts
     */
    status?: string
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
}

export class ObjectAlertsApi {
    private api: ObservableAlertsApi

    public constructor(configuration: Configuration, requestFactory?: AlertsApiRequestFactory, responseProcessor?: AlertsApiResponseProcessor) {
        this.api = new ObservableAlertsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Confirms receipt of one existing alert. This alert applies to any component in one project. Acknowledging an alert prevents successive notifications. You receive an alert when a monitored component meets or exceeds a value you set until you acknowledge the alert. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.  This resource remains under revision and may change.
     * Acknowledge One Alert from One Project
     * @param param the request object
     */
    public acknowledgeAlert(param: AlertsApiAcknowledgeAlertRequest, options?: Configuration): Promise<AlertViewForNdsGroup> {
        return this.api.acknowledgeAlert(param.groupId, param.alertId, param.alertViewForNdsGroup,  options).toPromise();
    }

    /**
     * Returns one alert. This alert applies to any component in one project. You receive an alert when a monitored component meets or exceeds a value you set. To use this resource, the requesting API Key must have the Project Read Only role.  This resource remains under revision and may change.
     * Return One Alert from One Project
     * @param param the request object
     */
    public getAlert(param: AlertsApiGetAlertRequest, options?: Configuration): Promise<AlertViewForNdsGroup> {
        return this.api.getAlert(param.groupId, param.alertId,  options).toPromise();
    }

    /**
     * Returns all alerts. These alerts apply to all components in one project. You receive an alert when a monitored component meets or exceeds a value you set. To use this resource, the requesting API Key must have the Project Read Only role.  This resource remains under revision and may change.
     * Return All Alerts from One Project
     * @param param the request object
     */
    public listAlerts(param: AlertsApiListAlertsRequest, options?: Configuration): Promise<PaginatedAlert> {
        return this.api.listAlerts(param.groupId, param.includeCount, param.itemsPerPage, param.pageNum, param.status,  options).toPromise();
    }

    /**
     * Returns all open alerts that the specified alert configuration triggers. These alert configurations apply to the specified project only. Alert configurations define the triggers and notification methods for alerts. Open alerts have been triggered but remain unacknowledged. To use this resource, the requesting API Key must have the Project Read Only role.  This resource remains under revision and may change.
     * Return All Open Alerts for Alert Configuration
     * @param param the request object
     */
    public listAlertsByAlertConfigurationId(param: AlertsApiListAlertsByAlertConfigurationIdRequest, options?: Configuration): Promise<PaginatedAlert> {
        return this.api.listAlertsByAlertConfigurationId(param.groupId, param.alertConfigId, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

}

import { ObservableAtlasSearchApi } from "./ObservableAPI";
import { AtlasSearchApiRequestFactory, AtlasSearchApiResponseProcessor} from "../apis/AtlasSearchApi";

export interface AtlasSearchApiCreateAtlasSearchDeploymentRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AtlasSearchApicreateAtlasSearchDeployment
     */
    groupId: string
    /**
     * Label that identifies the cluster to create search nodes for.
     * @type string
     * @memberof AtlasSearchApicreateAtlasSearchDeployment
     */
    clusterName: string
    /**
     * Creates search nodes for the specified cluster.
     * @type ApiSearchDeploymentRequest
     * @memberof AtlasSearchApicreateAtlasSearchDeployment
     */
    apiSearchDeploymentRequest: ApiSearchDeploymentRequest
}

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
     * @type ClusterSearchIndex
     * @memberof AtlasSearchApicreateAtlasSearchIndex
     */
    clusterSearchIndex: ClusterSearchIndex
}

export interface AtlasSearchApiDeleteAtlasSearchDeploymentRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AtlasSearchApideleteAtlasSearchDeployment
     */
    groupId: string
    /**
     * Label that identifies the cluster to delete.
     * @type string
     * @memberof AtlasSearchApideleteAtlasSearchDeployment
     */
    clusterName: string
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
}

export interface AtlasSearchApiGetAtlasSearchDeploymentRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AtlasSearchApigetAtlasSearchDeployment
     */
    groupId: string
    /**
     * Label that identifies the cluster to return the search nodes for.
     * @type string
     * @memberof AtlasSearchApigetAtlasSearchDeployment
     */
    clusterName: string
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
}

export interface AtlasSearchApiUpdateAtlasSearchDeploymentRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof AtlasSearchApiupdateAtlasSearchDeployment
     */
    groupId: string
    /**
     * Label that identifies the cluster to update the search nodes for.
     * @type string
     * @memberof AtlasSearchApiupdateAtlasSearchDeployment
     */
    clusterName: string
    /**
     * Updates the search nodes for the specified cluster.
     * @type ApiSearchDeploymentRequest
     * @memberof AtlasSearchApiupdateAtlasSearchDeployment
     */
    apiSearchDeploymentRequest: ApiSearchDeploymentRequest
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
     * @type ClusterSearchIndex
     * @memberof AtlasSearchApiupdateAtlasSearchIndex
     */
    clusterSearchIndex: ClusterSearchIndex
}

export class ObjectAtlasSearchApi {
    private api: ObservableAtlasSearchApi

    public constructor(configuration: Configuration, requestFactory?: AtlasSearchApiRequestFactory, responseProcessor?: AtlasSearchApiResponseProcessor) {
        this.api = new ObservableAtlasSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates search nodes for the specified cluster.
     * Create Search Nodes
     * @param param the request object
     */
    public createAtlasSearchDeployment(param: AtlasSearchApiCreateAtlasSearchDeploymentRequest, options?: Configuration): Promise<ApiSearchDeploymentResponse> {
        return this.api.createAtlasSearchDeployment(param.groupId, param.clusterName, param.apiSearchDeploymentRequest,  options).toPromise();
    }

    /**
     * Creates one Atlas Search index on the specified collection. Atlas Search indexes define the fields on which to create the index and the analyzers to use when creating the index. Only clusters running MongoDB v4.2 or later can use Atlas Search. To use this resource, the requesting API Key must have the Project Data Access Admin role.
     * Create One Atlas Search Index
     * @param param the request object
     */
    public createAtlasSearchIndex(param: AtlasSearchApiCreateAtlasSearchIndexRequest, options?: Configuration): Promise<ClusterSearchIndex> {
        return this.api.createAtlasSearchIndex(param.groupId, param.clusterName, param.clusterSearchIndex,  options).toPromise();
    }

    /**
     * Deletes the search nodes for the specified cluster.
     * Delete Search Nodes
     * @param param the request object
     */
    public deleteAtlasSearchDeployment(param: AtlasSearchApiDeleteAtlasSearchDeploymentRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAtlasSearchDeployment(param.groupId, param.clusterName,  options).toPromise();
    }

    /**
     * Removes one Atlas Search index that you identified with its unique ID. To use this resource, the requesting API Key must have the Project Data Access Admin role.
     * Remove One Atlas Search Index
     * @param param the request object
     */
    public deleteAtlasSearchIndex(param: AtlasSearchApiDeleteAtlasSearchIndexRequest, options?: Configuration): Promise<any> {
        return this.api.deleteAtlasSearchIndex(param.groupId, param.clusterName, param.indexId,  options).toPromise();
    }

    /**
     * Return the search nodes for the specified cluster.
     * Return Search Nodes
     * @param param the request object
     */
    public getAtlasSearchDeployment(param: AtlasSearchApiGetAtlasSearchDeploymentRequest, options?: Configuration): Promise<ApiSearchDeploymentResponse> {
        return this.api.getAtlasSearchDeployment(param.groupId, param.clusterName,  options).toPromise();
    }

    /**
     * Returns one Atlas Search index in the specified project. You identify this index using its unique ID. Atlas Search index contains the indexed fields and the analyzers used to create the index. To use this resource, the requesting API Key must have the Project Data Access Read Write role.
     * Return One Atlas Search Index
     * @param param the request object
     */
    public getAtlasSearchIndex(param: AtlasSearchApiGetAtlasSearchIndexRequest, options?: Configuration): Promise<ClusterSearchIndex> {
        return this.api.getAtlasSearchIndex(param.groupId, param.clusterName, param.indexId,  options).toPromise();
    }

    /**
     * Returns all Atlas Search indexes on the specified collection. Atlas Search indexes contain the indexed fields and the analyzers used to create the indexes. To use this resource, the requesting API Key must have the Project Data Access Read Write role.
     * Return All Atlas Search Indexes for One Collection
     * @param param the request object
     */
    public listAtlasSearchIndexes(param: AtlasSearchApiListAtlasSearchIndexesRequest, options?: Configuration): Promise<Array<ClusterSearchIndex>> {
        return this.api.listAtlasSearchIndexes(param.groupId, param.clusterName, param.collectionName, param.databaseName,  options).toPromise();
    }

    /**
     * Updates the search nodes for the specified cluster.
     * Update Search Nodes
     * @param param the request object
     */
    public updateAtlasSearchDeployment(param: AtlasSearchApiUpdateAtlasSearchDeploymentRequest, options?: Configuration): Promise<ApiSearchDeploymentResponse> {
        return this.api.updateAtlasSearchDeployment(param.groupId, param.clusterName, param.apiSearchDeploymentRequest,  options).toPromise();
    }

    /**
     * Updates one Atlas Search index that you identified with its unique ID. Atlas Search indexes define the fields on which to create the index and the analyzers to use when creating the index. To use this resource, the requesting API Key must have the Project Data Access Admin role.
     * Update One Atlas Search Index
     * @param param the request object
     */
    public updateAtlasSearchIndex(param: AtlasSearchApiUpdateAtlasSearchIndexRequest, options?: Configuration): Promise<ClusterSearchIndex> {
        return this.api.updateAtlasSearchIndex(param.groupId, param.clusterName, param.indexId, param.clusterSearchIndex,  options).toPromise();
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
}

export class ObjectAuditingApi {
    private api: ObservableAuditingApi

    public constructor(configuration: Configuration, requestFactory?: AuditingApiRequestFactory, responseProcessor?: AuditingApiResponseProcessor) {
        this.api = new ObservableAuditingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the auditing configuration for the specified project. The auditing configuration defines the events that MongoDB Cloud records in the audit log. To use this resource, the requesting API Key must have the Project Owner role. This feature isn't available for `M0`, `M2`, `M5`, or serverless clusters.
     * Return the Auditing Configuration for One Project
     * @param param the request object
     */
    public getAuditingConfiguration(param: AuditingApiGetAuditingConfigurationRequest, options?: Configuration): Promise<AuditLog> {
        return this.api.getAuditingConfiguration(param.groupId,  options).toPromise();
    }

    /**
     * Updates the auditing configuration for the specified project. The auditing configuration defines the events that MongoDB Cloud records in the audit log. To use this resource, the requesting API Key must have the Project Owner role. This feature isn't available for `M0`, `M2`, `M5`, or serverless clusters.
     * Update Auditing Configuration for One Project
     * @param param the request object
     */
    public updateAuditingConfiguration(param: AuditingApiUpdateAuditingConfigurationRequest, options?: Configuration): Promise<AuditLog> {
        return this.api.updateAuditingConfiguration(param.groupId, param.auditLog,  options).toPromise();
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
     * @type DiskBackupSnapshotRestoreJob
     * @memberof CloudBackupsApicreateBackupRestoreJob
     */
    diskBackupSnapshotRestoreJob: DiskBackupSnapshotRestoreJob
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
}

export interface CloudBackupsApiGetDataProtectionSettingsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApigetDataProtectionSettings
     */
    groupId: string
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
}

export interface CloudBackupsApiListExportBucketsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApilistExportBuckets
     */
    groupId: string
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof CloudBackupsApilistExportBuckets
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof CloudBackupsApilistExportBuckets
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof CloudBackupsApilistExportBuckets
     */
    pageNum?: number
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
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof CloudBackupsApilistServerlessBackupRestoreJobs
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof CloudBackupsApilistServerlessBackupRestoreJobs
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof CloudBackupsApilistServerlessBackupRestoreJobs
     */
    pageNum?: number
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
}

export interface CloudBackupsApiUpdateDataProtectionSettingsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudBackupsApiupdateDataProtectionSettings
     */
    groupId: string
    /**
     * The new Backup Compliance Policy settings.
     * @type DataProtectionSettings20231001
     * @memberof CloudBackupsApiupdateDataProtectionSettings
     */
    dataProtectionSettings20231001: DataProtectionSettings20231001
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
     * @type BackupSnapshotRetention
     * @memberof CloudBackupsApiupdateSnapshotRetention
     */
    backupSnapshotRetention: BackupSnapshotRetention
}

export class ObjectCloudBackupsApi {
    private api: ObservableCloudBackupsApi

    public constructor(configuration: Configuration, requestFactory?: CloudBackupsApiRequestFactory, responseProcessor?: CloudBackupsApiResponseProcessor) {
        this.api = new ObservableCloudBackupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Cancels one cloud backup restore job of one cluster from the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Cancel One Restore Job of One Cluster
     * @param param the request object
     */
    public cancelBackupRestoreJob(param: CloudBackupsApiCancelBackupRestoreJobRequest, options?: Configuration): Promise<any> {
        return this.api.cancelBackupRestoreJob(param.groupId, param.clusterName, param.restoreJobId,  options).toPromise();
    }

    /**
     * Exports one backup snapshot for dedicated Atlas cluster using Cloud Backups to an AWS bucket. To use this resource, the requesting API Key must have the Project Atlas Admin role.
     * Create One Cloud Backup Snapshot Export Job
     * @param param the request object
     */
    public createBackupExportJob(param: CloudBackupsApiCreateBackupExportJobRequest, options?: Configuration): Promise<DiskBackupExportJob> {
        return this.api.createBackupExportJob(param.groupId, param.clusterName, param.diskBackupExportJobRequest,  options).toPromise();
    }

    /**
     * Restores one snapshot of one cluster from the specified project. Atlas takes on-demand snapshots immediately and scheduled snapshots at regular intervals. If an on-demand snapshot with a status of **queued** or **inProgress** exists, before taking another snapshot, wait until Atlas completes completes processing the previously taken on-demand snapshot.   To use this resource, the requesting API Key must have the Project Owner role.
     * Restore One Snapshot of One Cluster
     * @param param the request object
     */
    public createBackupRestoreJob(param: CloudBackupsApiCreateBackupRestoreJobRequest, options?: Configuration): Promise<DiskBackupSnapshotRestoreJob> {
        return this.api.createBackupRestoreJob(param.groupId, param.clusterName, param.diskBackupSnapshotRestoreJob,  options).toPromise();
    }

    /**
     * Grants MongoDB Cloud access to the specified AWS S3 bucket. This enables this bucket to receive Atlas Cloud Backup snapshots. To use this resource, the requesting API Key must have the Project Owner role.
     * Grant Access to AWS S3 Bucket for Cloud Backup Snapshot Exports
     * @param param the request object
     */
    public createExportBucket(param: CloudBackupsApiCreateExportBucketRequest, options?: Configuration): Promise<DiskBackupSnapshotAWSExportBucket> {
        return this.api.createExportBucket(param.groupId, param.diskBackupSnapshotAWSExportBucket,  options).toPromise();
    }

    /**
     * Restores one snapshot of one serverless instance from the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Restore One Snapshot of One Serverless Instance
     * @param param the request object
     */
    public createServerlessBackupRestoreJob(param: CloudBackupsApiCreateServerlessBackupRestoreJobRequest, options?: Configuration): Promise<ServerlessBackupRestoreJob> {
        return this.api.createServerlessBackupRestoreJob(param.groupId, param.clusterName, param.serverlessBackupRestoreJob,  options).toPromise();
    }

    /**
     * Removes all cloud backup schedules for the specified cluster. This schedule defines when MongoDB Cloud takes scheduled snapshots and how long it stores those snapshots. To use this resource, the requesting API Key must have the Project Atlas Admin role.
     * Remove All Cloud Backup Schedules
     * @param param the request object
     */
    public deleteAllBackupSchedules(param: CloudBackupsApiDeleteAllBackupSchedulesRequest, options?: Configuration): Promise<DiskBackupSnapshotSchedule> {
        return this.api.deleteAllBackupSchedules(param.groupId, param.clusterName,  options).toPromise();
    }

    /**
     * Revoke MongoDB Cloud access to the specified AWS S3 bucket. This prevents this bucket to receive Atlas Cloud Backup snapshots. Auto export must be disabled on all clusters in this project exporting to this bucket before revoking access. To use this resource, the requesting API Key must have the Project Owner role.
     * Revoke Access to AWS S3 Bucket for Cloud Backup Snapshot Exports
     * @param param the request object
     */
    public deleteExportBucket(param: CloudBackupsApiDeleteExportBucketRequest, options?: Configuration): Promise<any> {
        return this.api.deleteExportBucket(param.groupId, param.exportBucketId,  options).toPromise();
    }

    /**
     * Removes the specified snapshot. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Replica Set Cloud Backup
     * @param param the request object
     */
    public deleteReplicaSetBackup(param: CloudBackupsApiDeleteReplicaSetBackupRequest, options?: Configuration): Promise<any> {
        return this.api.deleteReplicaSetBackup(param.groupId, param.clusterName, param.snapshotId,  options).toPromise();
    }

    /**
     * Removes one snapshot of one sharded cluster from the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Sharded Cluster Cloud Backup
     * @param param the request object
     */
    public deleteShardedClusterBackup(param: CloudBackupsApiDeleteShardedClusterBackupRequest, options?: Configuration): Promise<any> {
        return this.api.deleteShardedClusterBackup(param.groupId, param.clusterName, param.snapshotId,  options).toPromise();
    }

    /**
     * Returns one Cloud Backup snapshot export job associated with the specified Atlas cluster. To use this resource, the requesting API Key must have the Project Atlas Admin role.
     * Return One Cloud Backup Snapshot Export Job
     * @param param the request object
     */
    public getBackupExportJob(param: CloudBackupsApiGetBackupExportJobRequest, options?: Configuration): Promise<DiskBackupExportJob> {
        return this.api.getBackupExportJob(param.groupId, param.clusterName, param.exportId,  options).toPromise();
    }

    /**
     * Returns one cloud backup restore job for one cluster from the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Return One Restore Job of One Cluster
     * @param param the request object
     */
    public getBackupRestoreJob(param: CloudBackupsApiGetBackupRestoreJobRequest, options?: Configuration): Promise<DiskBackupSnapshotRestoreJob> {
        return this.api.getBackupRestoreJob(param.groupId, param.clusterName, param.restoreJobId,  options).toPromise();
    }

    /**
     * Returns the cloud backup schedule for the specified cluster within the specified project. This schedule defines when MongoDB Cloud takes scheduled snapshots and how long it stores those snapshots. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Cloud Backup Schedule
     * @param param the request object
     */
    public getBackupSchedule(param: CloudBackupsApiGetBackupScheduleRequest, options?: Configuration): Promise<DiskBackupSnapshotSchedule> {
        return this.api.getBackupSchedule(param.groupId, param.clusterName,  options).toPromise();
    }

    /**
     * Returns the Backup Compliance Policy settings with the specified project. To use this resource, the requesting API Key must have the Project Owner role. Deprecated versions: v2-{2023-01-01}
     * Return the Backup Compliance Policy settings
     * @param param the request object
     */
    public getDataProtectionSettings(param: CloudBackupsApiGetDataProtectionSettingsRequest, options?: Configuration): Promise<DataProtectionSettings20231001> {
        return this.api.getDataProtectionSettings(param.groupId,  options).toPromise();
    }

    /**
     * Returns one AWS S3 bucket associated with the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One AWS S3 Bucket Used for Cloud Backup Snapshot Exports
     * @param param the request object
     */
    public getExportBucket(param: CloudBackupsApiGetExportBucketRequest, options?: Configuration): Promise<DiskBackupSnapshotAWSExportBucket> {
        return this.api.getExportBucket(param.groupId, param.exportBucketId,  options).toPromise();
    }

    /**
     * Returns one snapshot from the specified cluster. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Replica Set Cloud Backup
     * @param param the request object
     */
    public getReplicaSetBackup(param: CloudBackupsApiGetReplicaSetBackupRequest, options?: Configuration): Promise<DiskBackupReplicaSet> {
        return this.api.getReplicaSetBackup(param.groupId, param.clusterName, param.snapshotId,  options).toPromise();
    }

    /**
     * Returns one snapshot of one serverless instance from the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Snapshot of One Serverless Instance
     * @param param the request object
     */
    public getServerlessBackup(param: CloudBackupsApiGetServerlessBackupRequest, options?: Configuration): Promise<ServerlessBackupSnapshot> {
        return this.api.getServerlessBackup(param.groupId, param.clusterName, param.snapshotId,  options).toPromise();
    }

    /**
     * Returns one restore job for one serverless instance from the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Return One Restore Job for One Serverless Instance
     * @param param the request object
     */
    public getServerlessBackupRestoreJob(param: CloudBackupsApiGetServerlessBackupRestoreJobRequest, options?: Configuration): Promise<ServerlessBackupRestoreJob> {
        return this.api.getServerlessBackupRestoreJob(param.groupId, param.clusterName, param.restoreJobId,  options).toPromise();
    }

    /**
     * Returns one snapshot of one sharded cluster from the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Sharded Cluster Cloud Backup
     * @param param the request object
     */
    public getShardedClusterBackup(param: CloudBackupsApiGetShardedClusterBackupRequest, options?: Configuration): Promise<DiskBackupShardedClusterSnapshot> {
        return this.api.getShardedClusterBackup(param.groupId, param.clusterName, param.snapshotId,  options).toPromise();
    }

    /**
     * Returns all Cloud Backup snapshot export jobs associated with the specified Atlas cluster. To use this resource, the requesting API Key must have the Project Atlas Admin role.
     * Return All Cloud Backup Snapshot Export Jobs
     * @param param the request object
     */
    public listBackupExportJobs(param: CloudBackupsApiListBackupExportJobsRequest, options?: Configuration): Promise<PaginatedApiAtlasDiskBackupExportJob> {
        return this.api.listBackupExportJobs(param.groupId, param.clusterName, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Returns all cloud backup restore jobs for one cluster from the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Return All Restore Jobs for One Cluster
     * @param param the request object
     */
    public listBackupRestoreJobs(param: CloudBackupsApiListBackupRestoreJobsRequest, options?: Configuration): Promise<PaginatedCloudBackupRestoreJob> {
        return this.api.listBackupRestoreJobs(param.groupId, param.clusterName, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Returns all AWS S3 buckets associated with the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All AWS S3 Buckets Used for Cloud Backup Snapshot Exports
     * @param param the request object
     */
    public listExportBuckets(param: CloudBackupsApiListExportBucketsRequest, options?: Configuration): Promise<PaginatedBackupSnapshotExportBucket> {
        return this.api.listExportBuckets(param.groupId, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Returns all snapshots of one cluster from the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Replica Set Cloud Backups
     * @param param the request object
     */
    public listReplicaSetBackups(param: CloudBackupsApiListReplicaSetBackupsRequest, options?: Configuration): Promise<PaginatedCloudBackupReplicaSet> {
        return this.api.listReplicaSetBackups(param.groupId, param.clusterName, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Returns all restore jobs for one serverless instance from the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Return All Restore Jobs for One Serverless Instance
     * @param param the request object
     */
    public listServerlessBackupRestoreJobs(param: CloudBackupsApiListServerlessBackupRestoreJobsRequest, options?: Configuration): Promise<PaginatedApiAtlasServerlessBackupRestoreJob> {
        return this.api.listServerlessBackupRestoreJobs(param.groupId, param.clusterName, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Returns all snapshots of one serverless instance from the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Snapshots of One Serverless Instance
     * @param param the request object
     */
    public listServerlessBackups(param: CloudBackupsApiListServerlessBackupsRequest, options?: Configuration): Promise<PaginatedApiAtlasServerlessBackupSnapshot> {
        return this.api.listServerlessBackups(param.groupId, param.clusterName, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Returns all snapshots of one sharded cluster from the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Sharded Cluster Cloud Backups
     * @param param the request object
     */
    public listShardedClusterBackups(param: CloudBackupsApiListShardedClusterBackupsRequest, options?: Configuration): Promise<PaginatedCloudBackupShardedClusterSnapshot> {
        return this.api.listShardedClusterBackups(param.groupId, param.clusterName,  options).toPromise();
    }

    /**
     * Takes one on-demand snapshot for the specified cluster. Atlas takes on-demand snapshots immediately and scheduled snapshots at regular intervals. If an on-demand snapshot with a status of **queued** or **inProgress** exists, before taking another snapshot, wait until Atlas completes completes processing the previously taken on-demand snapshot.   To use this resource, the requesting API Key must have the Project Owner role.
     * Take One On-Demand Snapshot
     * @param param the request object
     */
    public takeSnapshot(param: CloudBackupsApiTakeSnapshotRequest, options?: Configuration): Promise<DiskBackupSnapshot> {
        return this.api.takeSnapshot(param.groupId, param.clusterName, param.diskBackupOnDemandSnapshotRequest,  options).toPromise();
    }

    /**
     * Updates the cloud backup schedule for one cluster within the specified project. This schedule defines when MongoDB Cloud takes scheduled snapshots and how long it stores those snapshots. To use this resource, the requesting API Key must have the Project Owner role.
     * Update Cloud Backup Schedule for One Cluster
     * @param param the request object
     */
    public updateBackupSchedule(param: CloudBackupsApiUpdateBackupScheduleRequest, options?: Configuration): Promise<DiskBackupSnapshotSchedule> {
        return this.api.updateBackupSchedule(param.groupId, param.clusterName, param.diskBackupSnapshotSchedule,  options).toPromise();
    }

    /**
     * Updates the Backup Compliance Policy settings for the specified project. To use this resource, the requesting API Key must have the Project Owner role. Deprecated versions: v2-{2023-01-01}
     * Update or enable the Backup Compliance Policy settings
     * @param param the request object
     */
    public updateDataProtectionSettings(param: CloudBackupsApiUpdateDataProtectionSettingsRequest, options?: Configuration): Promise<DataProtectionSettings20231001> {
        return this.api.updateDataProtectionSettings(param.groupId, param.dataProtectionSettings20231001,  options).toPromise();
    }

    /**
     * Changes the expiration date for one cloud backup snapshot for one cluster in the specified project.
     * Change Expiration Date for One Cloud Backup
     * @param param the request object
     */
    public updateSnapshotRetention(param: CloudBackupsApiUpdateSnapshotRetentionRequest, options?: Configuration): Promise<DiskBackupReplicaSet> {
        return this.api.updateSnapshotRetention(param.groupId, param.clusterName, param.snapshotId, param.backupSnapshotRetention,  options).toPromise();
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
     * @type TargetOrgRequest
     * @memberof CloudMigrationServiceApicreateLinkToken
     */
    targetOrgRequest: TargetOrgRequest
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
     * @type LiveMigrationRequest
     * @memberof CloudMigrationServiceApicreatePushMigration
     */
    liveMigrationRequest: LiveMigrationRequest
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
}

export interface CloudMigrationServiceApiDeleteLinkTokenRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof CloudMigrationServiceApideleteLinkToken
     */
    orgId: string
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
}

export interface CloudMigrationServiceApiListSourceProjectsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof CloudMigrationServiceApilistSourceProjects
     */
    orgId: string
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
     * @type LiveMigrationRequest
     * @memberof CloudMigrationServiceApivalidateMigration
     */
    liveMigrationRequest: LiveMigrationRequest
}

export class ObjectCloudMigrationServiceApi {
    private api: ObservableCloudMigrationServiceApi

    public constructor(configuration: Configuration, requestFactory?: CloudMigrationServiceApiRequestFactory, responseProcessor?: CloudMigrationServiceApiResponseProcessor) {
        this.api = new ObservableCloudMigrationServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create one link-token that contains all the information required to complete the link. MongoDB Atlas uses the link-token for push live migrations only. Live migration (push) allows you to securely push data from Cloud Manager or Ops Manager into MongoDB Atlas. Your API Key must have the Organization Owner role to successfully call this resource.
     * Create One Link-Token
     * @param param the request object
     */
    public createLinkToken(param: CloudMigrationServiceApiCreateLinkTokenRequest, options?: Configuration): Promise<TargetOrg> {
        return this.api.createLinkToken(param.orgId, param.targetOrgRequest,  options).toPromise();
    }

    /**
     * Migrate one cluster that Cloud or Ops Manager manages to MongoDB Atlas.   Please make sure to [validate](#tag/Cloud-Migration-Service/operation/validateOneMigration) your migration before initiating it.   You can use this API endpoint for push live migrations only. Your API Key must have the Organization Owner role to successfully call this resource.   **NOTE**: Migrating time-series collections is not yet supported on MongoDB v6.0 or higher. Migrations on MongoDB v6.0 or higher will skip any time-series collections on the source cluster.
     * Migrate One Local Managed Cluster to MongoDB Atlas
     * @param param the request object
     */
    public createPushMigration(param: CloudMigrationServiceApiCreatePushMigrationRequest, options?: Configuration): Promise<LiveMigrationResponse> {
        return this.api.createPushMigration(param.groupId, param.liveMigrationRequest,  options).toPromise();
    }

    /**
     * Cut over the migrated cluster to MongoDB Atlas. Confirm when the cut over completes. When the cut over completes, MongoDB Atlas completes the live migration process and stops synchronizing with the source cluster. Your API Key must have the Organization Owner role to successfully call this resource.
     * Cut Over the Migrated Cluster
     * @param param the request object
     */
    public cutoverMigration(param: CloudMigrationServiceApiCutoverMigrationRequest, options?: Configuration): Promise<void> {
        return this.api.cutoverMigration(param.groupId, param.liveMigrationId,  options).toPromise();
    }

    /**
     * Remove one organization link and its associated public API key. MongoDB Atlas uses the link-token for push live migrations only. Live migrations (push) let you securely push data from Cloud Manager or Ops Manager into MongoDB Atlas. Your API Key must have the Organization Owner role to successfully call this resource.
     * Remove One Link-Token
     * @param param the request object
     */
    public deleteLinkToken(param: CloudMigrationServiceApiDeleteLinkTokenRequest, options?: Configuration): Promise<any> {
        return this.api.deleteLinkToken(param.orgId,  options).toPromise();
    }

    /**
     * Return details of one cluster migration job. Each push live migration job uses one migration host. Your API Key must have the Organization Member role to successfully call this resource.
     * Return One Migration Job
     * @param param the request object
     */
    public getPushMigration(param: CloudMigrationServiceApiGetPushMigrationRequest, options?: Configuration): Promise<LiveMigrationResponse> {
        return this.api.getPushMigration(param.groupId, param.liveMigrationId,  options).toPromise();
    }

    /**
     * Return the status of one migration validation job. Your API Key must have the Organization Owner role to successfully call this resource.
     * Return One Migration Validation Job
     * @param param the request object
     */
    public getValidationStatus(param: CloudMigrationServiceApiGetValidationStatusRequest, options?: Configuration): Promise<LiveImportValidation> {
        return this.api.getValidationStatus(param.groupId, param.validationId,  options).toPromise();
    }

    /**
     * Return all projects that you can migrate to the specified organization.
     * Return All Projects Available for Migration
     * @param param the request object
     */
    public listSourceProjects(param: CloudMigrationServiceApiListSourceProjectsRequest, options?: Configuration): Promise<Array<LiveImportAvailableProject>> {
        return this.api.listSourceProjects(param.orgId,  options).toPromise();
    }

    /**
     * Verifies whether the provided credentials, available disk space, MongoDB versions, and so on meet the requirements of the migration request. If the check passes, the migration can proceed. Your API Key must have the Organization Owner role to successfully call this resource.
     * Validate One Migration Request
     * @param param the request object
     */
    public validateMigration(param: CloudMigrationServiceApiValidateMigrationRequest, options?: Configuration): Promise<LiveImportValidation> {
        return this.api.validateMigration(param.groupId, param.liveMigrationRequest,  options).toPromise();
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
     * Grants access to the specified project for the specified access role.
     * @type CloudProviderAccessRole
     * @memberof CloudProviderAccessApiauthorizeCloudProviderAccessRole
     */
    cloudProviderAccessRole: CloudProviderAccessRole
}

export interface CloudProviderAccessApiCreateCloudProviderAccessRoleRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudProviderAccessApicreateCloudProviderAccessRole
     */
    groupId: string
    /**
     * Creates one role for the specified cloud provider.
     * @type CloudProviderAccessRole
     * @memberof CloudProviderAccessApicreateCloudProviderAccessRole
     */
    cloudProviderAccessRole: CloudProviderAccessRole
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
     * @type string
     * @memberof CloudProviderAccessApideauthorizeCloudProviderAccessRole
     */
    cloudProvider: string
    /**
     * Unique 24-hexadecimal digit string that identifies the role.
     * @type string
     * @memberof CloudProviderAccessApideauthorizeCloudProviderAccessRole
     */
    roleId: string
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
}

export interface CloudProviderAccessApiListCloudProviderAccessRolesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CloudProviderAccessApilistCloudProviderAccessRoles
     */
    groupId: string
}

export class ObjectCloudProviderAccessApi {
    private api: ObservableCloudProviderAccessApi

    public constructor(configuration: Configuration, requestFactory?: CloudProviderAccessApiRequestFactory, responseProcessor?: CloudProviderAccessApiResponseProcessor) {
        this.api = new ObservableCloudProviderAccessApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Grants access to the specified project for the specified access role. To use this resource, the requesting API Key must have the Project Owner role. This API endpoint is one step in a procedure to create unified access for MongoDB Cloud services.
     * Authorize One Cloud Provider Access Role
     * @param param the request object
     */
    public authorizeCloudProviderAccessRole(param: CloudProviderAccessApiAuthorizeCloudProviderAccessRoleRequest, options?: Configuration): Promise<CloudProviderAccessRole> {
        return this.api.authorizeCloudProviderAccessRole(param.groupId, param.roleId, param.cloudProviderAccessRole,  options).toPromise();
    }

    /**
     * Creates one access role for the specified cloud provider. Some MongoDB Cloud features use these cloud provider access roles for authentication. To use this resource, the requesting API Key must have the Project Owner role.
     * Create One Cloud Provider Access Role
     * @param param the request object
     */
    public createCloudProviderAccessRole(param: CloudProviderAccessApiCreateCloudProviderAccessRoleRequest, options?: Configuration): Promise<CloudProviderAccessRole> {
        return this.api.createCloudProviderAccessRole(param.groupId, param.cloudProviderAccessRole,  options).toPromise();
    }

    /**
     * Revokes access to the specified project for the specified access role. To use this resource, the requesting API Key must have the Project Owner role.
     * Deauthorize One Cloud Provider Access Role
     * @param param the request object
     */
    public deauthorizeCloudProviderAccessRole(param: CloudProviderAccessApiDeauthorizeCloudProviderAccessRoleRequest, options?: Configuration): Promise<void> {
        return this.api.deauthorizeCloudProviderAccessRole(param.groupId, param.cloudProvider, param.roleId,  options).toPromise();
    }

    /**
     * Returns the access role with the specified id and with access to the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Return specified Cloud Provider Access Role
     * @param param the request object
     */
    public getCloudProviderAccessRole(param: CloudProviderAccessApiGetCloudProviderAccessRoleRequest, options?: Configuration): Promise<CloudProviderAccessRole> {
        return this.api.getCloudProviderAccessRole(param.groupId, param.roleId,  options).toPromise();
    }

    /**
     * Returns all cloud provider access roles with access to the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Return All Cloud Provider Access Roles
     * @param param the request object
     */
    public listCloudProviderAccessRoles(param: CloudProviderAccessApiListCloudProviderAccessRolesRequest, options?: Configuration): Promise<CloudProviderAccessRoles> {
        return this.api.listCloudProviderAccessRoles(param.groupId,  options).toPromise();
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
        return this.api.endOutageSimulation(param.groupId, param.clusterName,  options).toPromise();
    }

    /**
     * Returns one outage simulation for one cluster.
     * Return One Outage Simulation
     * @param param the request object
     */
    public getOutageSimulation(param: ClusterOutageSimulationApiGetOutageSimulationRequest, options?: Configuration): Promise<ClusterOutageSimulation> {
        return this.api.getOutageSimulation(param.groupId, param.clusterName,  options).toPromise();
    }

    /**
     * Starts a cluster outage simulation.
     * Start an Outage Simulation
     * @param param the request object
     */
    public startOutageSimulation(param: ClusterOutageSimulationApiStartOutageSimulationRequest, options?: Configuration): Promise<ClusterOutageSimulation> {
        return this.api.startOutageSimulation(param.groupId, param.clusterName, param.clusterOutageSimulation,  options).toPromise();
    }

}

import { ObservableClustersApi } from "./ObservableAPI";
import { ClustersApiRequestFactory, ClustersApiResponseProcessor} from "../apis/ClustersApi";

export interface ClustersApiCreateClusterRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ClustersApicreateCluster
     */
    groupId: string
    /**
     * Cluster to create in the specific project.
     * @type AdvancedClusterDescription
     * @memberof ClustersApicreateCluster
     */
    advancedClusterDescription: AdvancedClusterDescription
}

export interface ClustersApiDeleteClusterRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ClustersApideleteCluster
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof ClustersApideleteCluster
     */
    clusterName: string
    /**
     * Flag that indicates whether to retain backup snapshots for the deleted dedicated cluster.
     * @type boolean
     * @memberof ClustersApideleteCluster
     */
    retainBackups?: boolean
}

export interface ClustersApiGetClusterRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ClustersApigetCluster
     */
    groupId: string
    /**
     * Human-readable label that identifies this advanced cluster.
     * @type string
     * @memberof ClustersApigetCluster
     */
    clusterName: string
}

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
}

export interface ClustersApiListCloudProviderRegionsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ClustersApilistCloudProviderRegions
     */
    groupId: string
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

export interface ClustersApiListClustersRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ClustersApilistClusters
     */
    groupId: string
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof ClustersApilistClusters
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof ClustersApilistClusters
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof ClustersApilistClusters
     */
    pageNum?: number
    /**
     * Flag that indicates whether to return Clusters with retain backups.
     * @type boolean
     * @memberof ClustersApilistClusters
     */
    includeDeletedWithRetainedBackups?: boolean
}

export interface ClustersApiListClustersForAllProjectsRequest {
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
}

export interface ClustersApiTestFailoverRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ClustersApitestFailover
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof ClustersApitestFailover
     */
    clusterName: string
}

export interface ClustersApiUpdateClusterRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ClustersApiupdateCluster
     */
    groupId: string
    /**
     * Human-readable label that identifies the cluster.
     * @type string
     * @memberof ClustersApiupdateCluster
     */
    clusterName: string
    /**
     * Cluster to update in the specified project.
     * @type AdvancedClusterDescription
     * @memberof ClustersApiupdateCluster
     */
    advancedClusterDescription: AdvancedClusterDescription
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
     * @type LegacyAtlasTenantClusterUpgradeRequest
     * @memberof ClustersApiupgradeSharedCluster
     */
    legacyAtlasTenantClusterUpgradeRequest: LegacyAtlasTenantClusterUpgradeRequest
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
}

export class ObjectClustersApi {
    private api: ObservableClustersApi

    public constructor(configuration: Configuration, requestFactory?: ClustersApiRequestFactory, responseProcessor?: ClustersApiResponseProcessor) {
        this.api = new ObservableClustersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. This resource can create multi-cloud clusters. Each project supports up to 25 database deployments. To use this resource, the requesting API Key must have the Project Owner role. This feature is not available for serverless clusters. Deprecated versions: v2-{2023-01-01}
     * Create One Multi-Cloud Cluster from One Project
     * @param param the request object
     */
    public createCluster(param: ClustersApiCreateClusterRequest, options?: Configuration): Promise<AdvancedClusterDescription> {
        return this.api.createCluster(param.groupId, param.advancedClusterDescription,  options).toPromise();
    }

    /**
     * Removes one cluster with advanced features from the specified project. The cluster must have termination protection disabled in order to be deleted. To use this resource, the requesting API Key must have the Project Owner role. This feature is not available for serverless clusters. Deprecated versions: v2-{2023-01-01}
     * Remove One Multi-Cloud Cluster from One Project
     * @param param the request object
     */
    public deleteCluster(param: ClustersApiDeleteClusterRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCluster(param.groupId, param.clusterName, param.retainBackups,  options).toPromise();
    }

    /**
     * Returns the details for one cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. The response includes multi-cloud clusters. To use this resource, the requesting API Key must have the Project Read Only role. This feature is not available for serverless clusters. Deprecated versions: v2-{2023-01-01}
     * Return One Multi-Cloud Cluster from One Project
     * @param param the request object
     */
    public getCluster(param: ClustersApiGetClusterRequest, options?: Configuration): Promise<AdvancedClusterDescription> {
        return this.api.getCluster(param.groupId, param.clusterName,  options).toPromise();
    }

    /**
     * Returns the advanced configuration details for one cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. Advanced configuration details include the read/write concern, index and oplog limits, and other database settings. This feature isn't available for `M0` free clusters, `M2` and `M5` shared-tier clusters, or serverless clusters. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Advanced Configuration Options for One Cluster
     * @param param the request object
     */
    public getClusterAdvancedConfiguration(param: ClustersApiGetClusterAdvancedConfigurationRequest, options?: Configuration): Promise<ClusterDescriptionProcessArgs> {
        return this.api.getClusterAdvancedConfiguration(param.groupId, param.clusterName,  options).toPromise();
    }

    /**
     * Returns the status of all changes that you made to the specified cluster in the specified project. Use this resource to check the progress MongoDB Cloud has made in processing your changes. The response does not include the deployment of new dedicated clusters. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Status of All Cluster Operations
     * @param param the request object
     */
    public getClusterStatus(param: ClustersApiGetClusterStatusRequest, options?: Configuration): Promise<ClusterStatus> {
        return this.api.getClusterStatus(param.groupId, param.clusterName,  options).toPromise();
    }

    /**
     * Checks the progress of loading the sample dataset into one cluster. To use this resource, the requesting API Key must have the Project Owner role.
     * Check Status of Cluster Sample Dataset Request
     * @param param the request object
     */
    public getSampleDatasetLoadStatus(param: ClustersApiGetSampleDatasetLoadStatusRequest, options?: Configuration): Promise<SampleDatasetStatus> {
        return this.api.getSampleDatasetLoadStatus(param.groupId, param.sampleDatasetId,  options).toPromise();
    }

    /**
     * Returns the list of regions available for the specified cloud provider at the specified tier. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Cloud Provider Regions
     * @param param the request object
     */
    public listCloudProviderRegions(param: ClustersApiListCloudProviderRegionsRequest, options?: Configuration): Promise<PaginatedApiAtlasProviderRegions> {
        return this.api.listCloudProviderRegions(param.groupId, param.includeCount, param.itemsPerPage, param.pageNum, param.providers, param.tier,  options).toPromise();
    }

    /**
     * Returns the details for all clusters in the specific project to which you have access. Clusters contain a group of hosts that maintain the same data set. The response includes multi-cloud clusters. To use this resource, the requesting API Key must have the Project Read Only role. This feature is not available for serverless clusters. Deprecated versions: v2-{2023-01-01}
     * Return All Clusters in One Project
     * @param param the request object
     */
    public listClusters(param: ClustersApiListClustersRequest, options?: Configuration): Promise<PaginatedAdvancedClusterDescription> {
        return this.api.listClusters(param.groupId, param.includeCount, param.itemsPerPage, param.pageNum, param.includeDeletedWithRetainedBackups,  options).toPromise();
    }

    /**
     * Returns the details for all clusters in all projects to which you have access. Clusters contain a group of hosts that maintain the same data set. The response does not include multi-cloud clusters. To use this resource, the requesting API Key can have any cluster-level role.
     * Return All Authorized Clusters in All Projects
     * @param param the request object
     */
    public listClustersForAllProjects(param: ClustersApiListClustersForAllProjectsRequest = {}, options?: Configuration): Promise<PaginatedOrgGroup> {
        return this.api.listClustersForAllProjects(param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Requests loading the MongoDB sample dataset into the specified cluster. To use this resource, the requesting API Key must have the Project Owner role.
     * Load Sample Dataset Request into Cluster
     * @param param the request object
     */
    public loadSampleDataset(param: ClustersApiLoadSampleDatasetRequest, options?: Configuration): Promise<SampleDatasetStatus> {
        return this.api.loadSampleDataset(param.groupId, param.name,  options).toPromise();
    }

    /**
     * Starts a failover test for the specified cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. A failover test checks how MongoDB Cloud handles the failure of the cluster's primary node. During the test, MongoDB Cloud shuts down the primary node and elects a new primary. To use this resource, the requesting API Key must have the Project Cluster Manager role. Deprecated versions: v2-{2023-01-01}
     * Test Failover for One Multi-Cloud Cluster
     * @param param the request object
     */
    public testFailover(param: ClustersApiTestFailoverRequest, options?: Configuration): Promise<void> {
        return this.api.testFailover(param.groupId, param.clusterName,  options).toPromise();
    }

    /**
     * Updates the details for one cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. This resource can update multi-cloud clusters. To update a cluster's termination protection, the requesting API Key must have the Project Owner role. For all other updates, the requesting API Key must have the Project Cluster Manager role. You can't modify a paused cluster (`paused : true`). You must call this endpoint to set `paused : false`. After this endpoint responds with `paused : false`, you can call it again with the changes you want to make to the cluster. This feature is not available for serverless clusters. Deprecated versions: v2-{2023-01-01}
     * Modify One Multi-Cloud Cluster from One Project
     * @param param the request object
     */
    public updateCluster(param: ClustersApiUpdateClusterRequest, options?: Configuration): Promise<AdvancedClusterDescription> {
        return this.api.updateCluster(param.groupId, param.clusterName, param.advancedClusterDescription,  options).toPromise();
    }

    /**
     * Updates the advanced configuration details for one cluster in the specified project. Clusters contain a group of hosts that maintain the same data set. Advanced configuration details include the read/write concern, index and oplog limits, and other database settings. To use this resource, the requesting API Key must have the Project Cluster Manager role. This feature isn't available for `M0` free clusters, `M2` and `M5` shared-tier clusters, or serverless clusters.
     * Update Advanced Configuration Options for One Cluster
     * @param param the request object
     */
    public updateClusterAdvancedConfiguration(param: ClustersApiUpdateClusterAdvancedConfigurationRequest, options?: Configuration): Promise<ClusterDescriptionProcessArgs> {
        return this.api.updateClusterAdvancedConfiguration(param.groupId, param.clusterName, param.clusterDescriptionProcessArgs,  options).toPromise();
    }

    /**
     * Upgrades a shared-tier cluster in the specified project. To use this resource, the requesting API key must have the Project Cluster Manager role. Each project supports up to 25 clusters.
     * Upgrade One Shared-tier Cluster
     * @param param the request object
     */
    public upgradeSharedCluster(param: ClustersApiUpgradeSharedClusterRequest, options?: Configuration): Promise<LegacyAtlasCluster> {
        return this.api.upgradeSharedCluster(param.groupId, param.legacyAtlasTenantClusterUpgradeRequest,  options).toPromise();
    }

    /**
     * Upgrades a shared-tier cluster to a serverless instance in the specified project. To use this resource, the requesting API key must have the Project Cluster Manager role.
     * Upgrades One Shared-Tier Cluster to the Serverless Instance
     * @param param the request object
     */
    public upgradeSharedClusterToServerless(param: ClustersApiUpgradeSharedClusterToServerlessRequest, options?: Configuration): Promise<ServerlessInstanceDescription> {
        return this.api.upgradeSharedClusterToServerless(param.groupId, param.serverlessInstanceDescription,  options).toPromise();
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
     * @type UserCustomDBRole
     * @memberof CustomDatabaseRolesApicreateCustomDatabaseRole
     */
    userCustomDBRole: UserCustomDBRole
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
}

export interface CustomDatabaseRolesApiListCustomDatabaseRolesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof CustomDatabaseRolesApilistCustomDatabaseRoles
     */
    groupId: string
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
}

export class ObjectCustomDatabaseRolesApi {
    private api: ObservableCustomDatabaseRolesApi

    public constructor(configuration: Configuration, requestFactory?: CustomDatabaseRolesApiRequestFactory, responseProcessor?: CustomDatabaseRolesApiResponseProcessor) {
        this.api = new ObservableCustomDatabaseRolesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one custom role in the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Create One Custom Role
     * @param param the request object
     */
    public createCustomDatabaseRole(param: CustomDatabaseRolesApiCreateCustomDatabaseRoleRequest, options?: Configuration): Promise<UserCustomDBRole> {
        return this.api.createCustomDatabaseRole(param.groupId, param.userCustomDBRole,  options).toPromise();
    }

    /**
     * Removes one custom role from the specified project. You can't remove a custom role that would leave one or more child roles with no parent roles or actions. You also can't remove a custom role that would leave one or more database users without roles. To use this resource, the requesting API Key must have the Project Atlas Admin role.
     * Remove One Custom Role from One Project
     * @param param the request object
     */
    public deleteCustomDatabaseRole(param: CustomDatabaseRolesApiDeleteCustomDatabaseRoleRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCustomDatabaseRole(param.groupId, param.roleName,  options).toPromise();
    }

    /**
     * Returns one custom role for the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Custom Role in One Project
     * @param param the request object
     */
    public getCustomDatabaseRole(param: CustomDatabaseRolesApiGetCustomDatabaseRoleRequest, options?: Configuration): Promise<UserCustomDBRole> {
        return this.api.getCustomDatabaseRole(param.groupId, param.roleName,  options).toPromise();
    }

    /**
     * Returns all custom roles for the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Custom Roles in One Project
     * @param param the request object
     */
    public listCustomDatabaseRoles(param: CustomDatabaseRolesApiListCustomDatabaseRolesRequest, options?: Configuration): Promise<Array<UserCustomDBRole>> {
        return this.api.listCustomDatabaseRoles(param.groupId,  options).toPromise();
    }

    /**
     * Updates one custom role in the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Update One Custom Role in One Project
     * @param param the request object
     */
    public updateCustomDatabaseRole(param: CustomDatabaseRolesApiUpdateCustomDatabaseRoleRequest, options?: Configuration): Promise<UserCustomDBRole> {
        return this.api.updateCustomDatabaseRole(param.groupId, param.roleName, param.updateCustomDBRole,  options).toPromise();
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
     * @type string
     * @memberof DataFederationApicreateOneDataFederationQueryLimit
     */
    limitName: string
    /**
     * Creates or updates one query limit for one federated database instance.
     * @type DataFederationTenantQueryLimit
     * @memberof DataFederationApicreateOneDataFederationQueryLimit
     */
    dataFederationTenantQueryLimit: DataFederationTenantQueryLimit
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
     * @type string
     * @memberof DataFederationApideleteOneDataFederationInstanceQueryLimit
     */
    limitName: string
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
}

export interface DataFederationApiListDataFederationPrivateEndpointsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataFederationApilistDataFederationPrivateEndpoints
     */
    groupId: string
    /**
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof DataFederationApilistDataFederationPrivateEndpoints
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof DataFederationApilistDataFederationPrivateEndpoints
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof DataFederationApilistDataFederationPrivateEndpoints
     */
    pageNum?: number
}

export interface DataFederationApiListFederatedDatabasesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DataFederationApilistFederatedDatabases
     */
    groupId: string
    /**
     * Type of Federated Database Instances to return.
     * @type string
     * @memberof DataFederationApilistFederatedDatabases
     */
    type?: string
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
     * @type string
     * @memberof DataFederationApireturnFederatedDatabaseQueryLimit
     */
    limitName: string
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
}

export class ObjectDataFederationApi {
    private api: ObservableDataFederationApi

    public constructor(configuration: Configuration, requestFactory?: DataFederationApiRequestFactory, responseProcessor?: DataFederationApiResponseProcessor) {
        this.api = new ObservableDataFederationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds one private endpoint for Federated Database Instances and Online Archives to the specified projects. If the endpoint ID already exists and the associated comment is unchanged, Atlas Data Federation makes no change to the endpoint ID list. If the endpoint ID already exists and the associated comment is changed, Atlas Data Federation updates the comment value only in the endpoint ID list. If the endpoint ID doesn't exist, Atlas Data Federation appends the new endpoint to the list of endpoints in the endpoint ID list. Each region has an associated service name for the various endpoints in each region.   `us-east-1` is `com.amazonaws.vpce.us-east-1.vpce-svc-00e311695874992b4`.   `us-west-1` is `com.amazonaws.vpce.us-west-2.vpce-svc-09d86b19e59d1b4bb`.   `eu-west-1` is `com.amazonaws.vpce.eu-west-1.vpce-svc-0824460b72e1a420e`.   `eu-west-2` is `com.amazonaws.vpce.eu-west-2.vpce-svc-052f1840aa0c4f1f9`.   `eu-central-1` is `com.amazonaws.vpce.eu-central-1.vpce-svc-0ac8ce91871138c0d`.   `sa-east-1` is `com.amazonaws.vpce.sa-east-1.vpce-svc-0b56e75e8cdf50044`.   `ap-southeast-2` is `com.amazonaws.vpce.ap-southeast-2.vpce-svc-036f1de74d761706e`.   `ap-south-1` is `com.amazonaws.vpce.ap-south-1.vpce-svc-03eb8a541f96d356d`.   To use this resource, the requesting API Key must have the Project Owner or Project Charts Admin roles.
     * Create One Federated Database Instance and Online Archive Private Endpoint for One Project
     * @param param the request object
     */
    public createDataFederationPrivateEndpoint(param: DataFederationApiCreateDataFederationPrivateEndpointRequest, options?: Configuration): Promise<PaginatedPrivateNetworkEndpointIdEntry> {
        return this.api.createDataFederationPrivateEndpoint(param.groupId, param.privateNetworkEndpointIdEntry,  options).toPromise();
    }

    /**
     * Creates one federated database instance in the specified project. To use this resource, the requesting API Key must have the Project Owner or Project Charts Admin roles.
     * Create One Federated Database Instance in One Project
     * @param param the request object
     */
    public createFederatedDatabase(param: DataFederationApiCreateFederatedDatabaseRequest, options?: Configuration): Promise<DataLakeTenant> {
        return this.api.createFederatedDatabase(param.groupId, param.dataLakeTenant, param.skipRoleValidation,  options).toPromise();
    }

    /**
     * Creates or updates one query limit for one federated database instance. To use this resource, the requesting API Key must have the Project Owner role.
     * Configure One Query Limit for One Federated Database Instance
     * @param param the request object
     */
    public createOneDataFederationQueryLimit(param: DataFederationApiCreateOneDataFederationQueryLimitRequest, options?: Configuration): Promise<DataFederationTenantQueryLimit> {
        return this.api.createOneDataFederationQueryLimit(param.groupId, param.tenantName, param.limitName, param.dataFederationTenantQueryLimit,  options).toPromise();
    }

    /**
     * Removes one private endpoint for Federated Database Instances and Online Archives in the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Federated Database Instance and Online Archive Private Endpoint from One Project
     * @param param the request object
     */
    public deleteDataFederationPrivateEndpoint(param: DataFederationApiDeleteDataFederationPrivateEndpointRequest, options?: Configuration): Promise<any> {
        return this.api.deleteDataFederationPrivateEndpoint(param.groupId, param.endpointId,  options).toPromise();
    }

    /**
     * Removes one federated database instance from the specified project. To use this resource, the requesting API Key must have the Project Owner or Project Charts Admin roles.
     * Remove One Federated Database Instance from One Project
     * @param param the request object
     */
    public deleteFederatedDatabase(param: DataFederationApiDeleteFederatedDatabaseRequest, options?: Configuration): Promise<any> {
        return this.api.deleteFederatedDatabase(param.groupId, param.tenantName,  options).toPromise();
    }

    /**
     * Deletes one query limit for one federated database instance. To use this resource, the requesting API Key must have the Project Owner role.
     * Delete One Query Limit For One Federated Database Instance
     * @param param the request object
     */
    public deleteOneDataFederationInstanceQueryLimit(param: DataFederationApiDeleteOneDataFederationInstanceQueryLimitRequest, options?: Configuration): Promise<any> {
        return this.api.deleteOneDataFederationInstanceQueryLimit(param.groupId, param.tenantName, param.limitName,  options).toPromise();
    }

    /**
     * Downloads the query logs for the specified federated database instance. To use this resource, the requesting API Key must have the Project Owner or Project Data Access Read Write roles.
     * Download Query Logs for One Federated Database Instance
     * @param param the request object
     */
    public downloadFederatedDatabaseQueryLogs(param: DataFederationApiDownloadFederatedDatabaseQueryLogsRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.downloadFederatedDatabaseQueryLogs(param.groupId, param.tenantName, param.endDate, param.startDate,  options).toPromise();
    }

    /**
     * Returns the specified private endpoint for Federated Database Instances or Online Archives in the specified project. To use this resource, the requesting API Key must have the Project Read Only or Project Charts Admin roles.
     * Return One Federated Database Instance and Online Archive Private Endpoint in One Project
     * @param param the request object
     */
    public getDataFederationPrivateEndpoint(param: DataFederationApiGetDataFederationPrivateEndpointRequest, options?: Configuration): Promise<PrivateNetworkEndpointIdEntry> {
        return this.api.getDataFederationPrivateEndpoint(param.groupId, param.endpointId,  options).toPromise();
    }

    /**
     * Returns the details of one federated database instance within the specified project. To use this resource, the requesting API Key must have the Project Read Only or Project Charts Admin roles.
     * Return One Federated Database Instance in One Project
     * @param param the request object
     */
    public getFederatedDatabase(param: DataFederationApiGetFederatedDatabaseRequest, options?: Configuration): Promise<DataLakeTenant> {
        return this.api.getFederatedDatabase(param.groupId, param.tenantName,  options).toPromise();
    }

    /**
     * Returns all private endpoints for Federated Database Instances and Online Archives in the specified project. To use this resource, the requesting API Key must have the Project Read Only or Project Charts Admin roles.
     * Return All Federated Database Instance and Online Archive Private Endpoints in One Project
     * @param param the request object
     */
    public listDataFederationPrivateEndpoints(param: DataFederationApiListDataFederationPrivateEndpointsRequest, options?: Configuration): Promise<PaginatedPrivateNetworkEndpointIdEntry> {
        return this.api.listDataFederationPrivateEndpoints(param.groupId, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Returns the details of all federated database instances in the specified project. To use this resource, the requesting API Key must have the Project Read Only or higher role.
     * Return All Federated Database Instances in One Project
     * @param param the request object
     */
    public listFederatedDatabases(param: DataFederationApiListFederatedDatabasesRequest, options?: Configuration): Promise<Array<DataLakeTenant>> {
        return this.api.listFederatedDatabases(param.groupId, param.type,  options).toPromise();
    }

    /**
     * Returns the details of one query limit for the specified federated database instance in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Federated Database Instance Query Limit for One Project
     * @param param the request object
     */
    public returnFederatedDatabaseQueryLimit(param: DataFederationApiReturnFederatedDatabaseQueryLimitRequest, options?: Configuration): Promise<DataFederationTenantQueryLimit> {
        return this.api.returnFederatedDatabaseQueryLimit(param.groupId, param.tenantName, param.limitName,  options).toPromise();
    }

    /**
     * Returns query limits for a federated databases instance in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Query Limits for One Federated Database Instance
     * @param param the request object
     */
    public returnFederatedDatabaseQueryLimits(param: DataFederationApiReturnFederatedDatabaseQueryLimitsRequest, options?: Configuration): Promise<Array<DataFederationTenantQueryLimit>> {
        return this.api.returnFederatedDatabaseQueryLimits(param.groupId, param.tenantName,  options).toPromise();
    }

    /**
     * Updates the details of one federated database instance in the specified project. To use this resource, the requesting API Key must have the Project Owner or higher role.
     * Update One Federated Database Instance in One Project
     * @param param the request object
     */
    public updateFederatedDatabase(param: DataFederationApiUpdateFederatedDatabaseRequest, options?: Configuration): Promise<DataLakeTenant> {
        return this.api.updateFederatedDatabase(param.groupId, param.tenantName, param.skipRoleValidation, param.dataLakeTenant,  options).toPromise();
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
     * @type DataLakeIngestionPipeline
     * @memberof DataLakePipelinesApicreatePipeline
     */
    dataLakeIngestionPipeline: DataLakeIngestionPipeline
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
     * @type TriggerIngestionPipelineRequest
     * @memberof DataLakePipelinesApitriggerSnapshotIngestion
     */
    triggerIngestionPipelineRequest: TriggerIngestionPipelineRequest
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
     * @type DataLakeIngestionPipeline
     * @memberof DataLakePipelinesApiupdatePipeline
     */
    dataLakeIngestionPipeline: DataLakeIngestionPipeline
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
    public createPipeline(param: DataLakePipelinesApiCreatePipelineRequest, options?: Configuration): Promise<DataLakeIngestionPipeline> {
        return this.api.createPipeline(param.groupId, param.dataLakeIngestionPipeline,  options).toPromise();
    }

    /**
     * Removes one Data Lake Pipeline.
     * Remove One Data Lake Pipeline
     * @param param the request object
     */
    public deletePipeline(param: DataLakePipelinesApiDeletePipelineRequest, options?: Configuration): Promise<any> {
        return this.api.deletePipeline(param.groupId, param.pipelineName,  options).toPromise();
    }

    /**
     * Deletes dataset that Atlas generated during the specified pipeline run.
     * Delete Pipeline Run Dataset
     * @param param the request object
     */
    public deletePipelineRunDataset(param: DataLakePipelinesApiDeletePipelineRunDatasetRequest, options?: Configuration): Promise<any> {
        return this.api.deletePipelineRunDataset(param.groupId, param.pipelineName, param.pipelineRunId,  options).toPromise();
    }

    /**
     * Returns the details of one Data Lake Pipeline within the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Data Lake Pipeline
     * @param param the request object
     */
    public getPipeline(param: DataLakePipelinesApiGetPipelineRequest, options?: Configuration): Promise<DataLakeIngestionPipeline> {
        return this.api.getPipeline(param.groupId, param.pipelineName,  options).toPromise();
    }

    /**
     * Returns the details of one Data Lake Pipeline run within the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Data Lake Pipeline Run
     * @param param the request object
     */
    public getPipelineRun(param: DataLakePipelinesApiGetPipelineRunRequest, options?: Configuration): Promise<IngestionPipelineRun> {
        return this.api.getPipelineRun(param.groupId, param.pipelineName, param.pipelineRunId,  options).toPromise();
    }

    /**
     * Returns a list of past Data Lake Pipeline runs. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Data Lake Pipeline Runs from One Project
     * @param param the request object
     */
    public listPipelineRuns(param: DataLakePipelinesApiListPipelineRunsRequest, options?: Configuration): Promise<PaginatedPipelineRun> {
        return this.api.listPipelineRuns(param.groupId, param.pipelineName, param.includeCount, param.itemsPerPage, param.pageNum, param.createdBefore,  options).toPromise();
    }

    /**
     * Returns a list of backup schedule policy items that you can use as a Data Lake Pipeline source. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Available Ingestion Schedules for One Data Lake Pipeline
     * @param param the request object
     */
    public listPipelineSchedules(param: DataLakePipelinesApiListPipelineSchedulesRequest, options?: Configuration): Promise<Array<DiskBackupApiPolicyItem>> {
        return this.api.listPipelineSchedules(param.groupId, param.pipelineName,  options).toPromise();
    }

    /**
     * Returns a list of backup snapshots that you can use to trigger an on demand pipeline run. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Available Backup Snapshots for One Data Lake Pipeline
     * @param param the request object
     */
    public listPipelineSnapshots(param: DataLakePipelinesApiListPipelineSnapshotsRequest, options?: Configuration): Promise<PaginatedBackupSnapshot> {
        return this.api.listPipelineSnapshots(param.groupId, param.pipelineName, param.includeCount, param.itemsPerPage, param.pageNum, param.completedAfter,  options).toPromise();
    }

    /**
     * Returns a list of Data Lake Pipelines. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Data Lake Pipelines from One Project
     * @param param the request object
     */
    public listPipelines(param: DataLakePipelinesApiListPipelinesRequest, options?: Configuration): Promise<Array<DataLakeIngestionPipeline>> {
        return this.api.listPipelines(param.groupId,  options).toPromise();
    }

    /**
     * Pauses ingestion for a Data Lake Pipeline within the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Pause One Data Lake Pipeline
     * @param param the request object
     */
    public pausePipeline(param: DataLakePipelinesApiPausePipelineRequest, options?: Configuration): Promise<DataLakeIngestionPipeline> {
        return this.api.pausePipeline(param.groupId, param.pipelineName,  options).toPromise();
    }

    /**
     * Resumes ingestion for a Data Lake Pipeline within the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Resume One Data Lake Pipeline
     * @param param the request object
     */
    public resumePipeline(param: DataLakePipelinesApiResumePipelineRequest, options?: Configuration): Promise<DataLakeIngestionPipeline> {
        return this.api.resumePipeline(param.groupId, param.pipelineName,  options).toPromise();
    }

    /**
     * Triggers a Data Lake Pipeline ingestion of a specified snapshot.
     * Trigger on demand snapshot ingestion
     * @param param the request object
     */
    public triggerSnapshotIngestion(param: DataLakePipelinesApiTriggerSnapshotIngestionRequest, options?: Configuration): Promise<IngestionPipelineRun> {
        return this.api.triggerSnapshotIngestion(param.groupId, param.pipelineName, param.triggerIngestionPipelineRequest,  options).toPromise();
    }

    /**
     * Updates one Data Lake Pipeline.
     * Update One Data Lake Pipeline
     * @param param the request object
     */
    public updatePipeline(param: DataLakePipelinesApiUpdatePipelineRequest, options?: Configuration): Promise<DataLakeIngestionPipeline> {
        return this.api.updatePipeline(param.groupId, param.pipelineName, param.dataLakeIngestionPipeline,  options).toPromise();
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
     * @type CloudDatabaseUser
     * @memberof DatabaseUsersApicreateDatabaseUser
     */
    cloudDatabaseUser: CloudDatabaseUser
}

export interface DatabaseUsersApiDeleteDatabaseUserRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DatabaseUsersApideleteDatabaseUser
     */
    groupId: string
    /**
     * Human-readable label that identifies the database against which the database user authenticates. Database users must provide both a username and authentication database to log into MongoDB. If the user authenticates with AWS IAM, x.509, or LDAP, this value should be &#x60;$external&#x60;. If the user authenticates with SCRAM-SHA or OIDC, this value should be &#x60;admin&#x60;.
     * @type string
     * @memberof DatabaseUsersApideleteDatabaseUser
     */
    databaseName: string
    /**
     * Human-readable label that represents the user that authenticates to MongoDB. The format of this label depends on the method of authentication:  | Authentication Method | Parameter Needed | Parameter Value | username Format | |---|---|---|---| | AWS IAM | awsType | ROLE | &lt;abbr title&#x3D;\&quot;Amazon Resource Name\&quot;&gt;ARN&lt;/abbr&gt; | | AWS IAM | awsType | USER | &lt;abbr title&#x3D;\&quot;Amazon Resource Name\&quot;&gt;ARN&lt;/abbr&gt; | | x.509 | x509Type | CUSTOMER | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | x.509 | x509Type | MANAGED | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | LDAP | ldapAuthType | USER | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | LDAP | ldapAuthType | GROUP | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | OIDC | oidcAuthType | IDP_GROUP | Atlas OIDC IdP ID (found in federation settings), followed by a &#39;/&#39;, followed by the IdP group name | | SCRAM-SHA | awsType, x509Type, ldapAuthType, oidcAuthType | NONE | Alphanumeric string | 
     * @type string
     * @memberof DatabaseUsersApideleteDatabaseUser
     */
    username: string
}

export interface DatabaseUsersApiGetDatabaseUserRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DatabaseUsersApigetDatabaseUser
     */
    groupId: string
    /**
     * Human-readable label that identifies the database against which the database user authenticates. Database users must provide both a username and authentication database to log into MongoDB. If the user authenticates with AWS IAM, x.509, or LDAP, this value should be &#x60;$external&#x60;. If the user authenticates with SCRAM-SHA or OIDC, this value should be &#x60;admin&#x60;.
     * @type string
     * @memberof DatabaseUsersApigetDatabaseUser
     */
    databaseName: string
    /**
     * Human-readable label that represents the user that authenticates to MongoDB. The format of this label depends on the method of authentication:  | Authentication Method | Parameter Needed | Parameter Value | username Format | |---|---|---|---| | AWS IAM | awsType | ROLE | &lt;abbr title&#x3D;\&quot;Amazon Resource Name\&quot;&gt;ARN&lt;/abbr&gt; | | AWS IAM | awsType | USER | &lt;abbr title&#x3D;\&quot;Amazon Resource Name\&quot;&gt;ARN&lt;/abbr&gt; | | x.509 | x509Type | CUSTOMER | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | x.509 | x509Type | MANAGED | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | LDAP | ldapAuthType | USER | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | LDAP | ldapAuthType | GROUP | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | OIDC | oidcAuthType | IDP_GROUP | Atlas OIDC IdP ID (found in federation settings), followed by a &#39;/&#39;, followed by the IdP group name | | SCRAM-SHA | awsType, x509Type, ldapAuthType, oidcAuthType | NONE | Alphanumeric string | 
     * @type string
     * @memberof DatabaseUsersApigetDatabaseUser
     */
    username: string
}

export interface DatabaseUsersApiListDatabaseUsersRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DatabaseUsersApilistDatabaseUsers
     */
    groupId: string
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
}

export interface DatabaseUsersApiUpdateDatabaseUserRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof DatabaseUsersApiupdateDatabaseUser
     */
    groupId: string
    /**
     * Human-readable label that identifies the database against which the database user authenticates. Database users must provide both a username and authentication database to log into MongoDB. If the user authenticates with AWS IAM, x.509, or LDAP, this value should be &#x60;$external&#x60;. If the user authenticates with SCRAM-SHA or OIDC, this value should be &#x60;admin&#x60;.
     * @type string
     * @memberof DatabaseUsersApiupdateDatabaseUser
     */
    databaseName: string
    /**
     * Human-readable label that represents the user that authenticates to MongoDB. The format of this label depends on the method of authentication:  | Authentication Method | Parameter Needed | Parameter Value | username Format | |---|---|---|---| | AWS IAM | awsType | ROLE | &lt;abbr title&#x3D;\&quot;Amazon Resource Name\&quot;&gt;ARN&lt;/abbr&gt; | | AWS IAM | awsType | USER | &lt;abbr title&#x3D;\&quot;Amazon Resource Name\&quot;&gt;ARN&lt;/abbr&gt; | | x.509 | x509Type | CUSTOMER | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | x.509 | x509Type | MANAGED | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | LDAP | ldapAuthType | USER | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | LDAP | ldapAuthType | GROUP | [RFC 2253](https://tools.ietf.org/html/2253) Distinguished Name | | OIDC | oidcAuthType | IDP_GROUP | Atlas OIDC IdP ID (found in federation settings), followed by a &#39;/&#39;, followed by the IdP group name | | SCRAM-SHA | awsType, x509Type, ldapAuthType, oidcAuthType | NONE | Alphanumeric string | 
     * @type string
     * @memberof DatabaseUsersApiupdateDatabaseUser
     */
    username: string
    /**
     * Updates one database user that belongs to the specified project.
     * @type CloudDatabaseUser
     * @memberof DatabaseUsersApiupdateDatabaseUser
     */
    cloudDatabaseUser: CloudDatabaseUser
}

export class ObjectDatabaseUsersApi {
    private api: ObservableDatabaseUsersApi

    public constructor(configuration: Configuration, requestFactory?: DatabaseUsersApiRequestFactory, responseProcessor?: DatabaseUsersApiResponseProcessor) {
        this.api = new ObservableDatabaseUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one database user in the specified project. This MongoDB Cloud supports a maximum of 100 database users per project. If you require more than 100 database users on a project, contact [Support](https://cloud.mongodb.com/support). To use this resource, the requesting API Key must have the Project Owner or Project Charts Admin roles.
     * Create One Database User in One Project
     * @param param the request object
     */
    public createDatabaseUser(param: DatabaseUsersApiCreateDatabaseUserRequest, options?: Configuration): Promise<CloudDatabaseUser> {
        return this.api.createDatabaseUser(param.groupId, param.cloudDatabaseUser,  options).toPromise();
    }

    /**
     * Removes one database user from the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Database User from One Project
     * @param param the request object
     */
    public deleteDatabaseUser(param: DatabaseUsersApiDeleteDatabaseUserRequest, options?: Configuration): Promise<any> {
        return this.api.deleteDatabaseUser(param.groupId, param.databaseName, param.username,  options).toPromise();
    }

    /**
     * Returns one database user that belong to the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Database User from One Project
     * @param param the request object
     */
    public getDatabaseUser(param: DatabaseUsersApiGetDatabaseUserRequest, options?: Configuration): Promise<CloudDatabaseUser> {
        return this.api.getDatabaseUser(param.groupId, param.databaseName, param.username,  options).toPromise();
    }

    /**
     * Returns all database users that belong to the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Database Users from One Project
     * @param param the request object
     */
    public listDatabaseUsers(param: DatabaseUsersApiListDatabaseUsersRequest, options?: Configuration): Promise<PaginatedApiAtlasDatabaseUser> {
        return this.api.listDatabaseUsers(param.groupId, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Updates one database user that belongs to the specified project. To use this resource, the requesting API Key must have the Project Owner or Project Charts Admin roles.
     * Update One Database User in One Project
     * @param param the request object
     */
    public updateDatabaseUser(param: DatabaseUsersApiUpdateDatabaseUserRequest, options?: Configuration): Promise<CloudDatabaseUser> {
        return this.api.updateDatabaseUser(param.groupId, param.databaseName, param.username, param.cloudDatabaseUser,  options).toPromise();
    }

}

import { ObservableEncryptionAtRestUsingCustomerKeyManagementApi } from "./ObservableAPI";
import { EncryptionAtRestUsingCustomerKeyManagementApiRequestFactory, EncryptionAtRestUsingCustomerKeyManagementApiResponseProcessor} from "../apis/EncryptionAtRestUsingCustomerKeyManagementApi";

export interface EncryptionAtRestUsingCustomerKeyManagementApiGetEncryptionAtRestRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof EncryptionAtRestUsingCustomerKeyManagementApigetEncryptionAtRest
     */
    groupId: string
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
    public getEncryptionAtRest(param: EncryptionAtRestUsingCustomerKeyManagementApiGetEncryptionAtRestRequest, options?: Configuration): Promise<EncryptionAtRest> {
        return this.api.getEncryptionAtRest(param.groupId,  options).toPromise();
    }

    /**
     * Updates the configuration for encryption at rest using the keys you manage through your cloud provider. MongoDB Cloud encrypts all storage even if you don't use your own key management. This resource requires the requesting API Key to have the Project Owner role. This feature isn't available for `M0` free clusters, `M2`, `M5`, or serverless clusters.   After you configure at least one Encryption at Rest using a Customer Key Management provider for the MongoDB Cloud project, Project Owners can enable Encryption at Rest using Customer Key Management for each MongoDB Cloud cluster for which they require encryption. The Encryption at Rest using Customer Key Management provider doesn't have to match the cluster cloud service provider. MongoDB Cloud doesn't automatically rotate user-managed encryption keys. Defer to your preferred Encryption at Rest using Customer Key Management provider's documentation and guidance for best practices on key rotation. MongoDB Cloud automatically creates a 90-day key rotation alert when you configure Encryption at Rest using Customer Key Management using your Key Management in an MongoDB Cloud project. MongoDB Cloud encrypts all storage whether or not you use your own key management.
     * Update Configuration for Encryption at Rest using Customer-Managed Keys for One Project
     * @param param the request object
     */
    public updateEncryptionAtRest(param: EncryptionAtRestUsingCustomerKeyManagementApiUpdateEncryptionAtRestRequest, options?: Configuration): Promise<EncryptionAtRest> {
        return this.api.updateEncryptionAtRest(param.groupId, param.encryptionAtRest,  options).toPromise();
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
     * Category of incident recorded at this moment in time.  **IMPORTANT**: The complete list of event type values changes frequently.
     * @type Array&lt;string&gt;
     * @memberof EventsApilistOrganizationEvents
     */
    eventType?: Array<string>
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
     * Human-readable label that identifies the cluster.
     * @type Array&lt;string&gt;
     * @memberof EventsApilistProjectEvents
     */
    clusterNames?: Array<string>
    /**
     * Category of incident recorded at this moment in time.  **IMPORTANT**: The complete list of event type values changes frequently.
     * @type Array&lt;string&gt;
     * @memberof EventsApilistProjectEvents
     */
    eventType?: Array<string>
    /**
     * Category of event that you would like to exclude from query results, such as CLUSTER_CREATED  **IMPORTANT**: Event type names change frequently. Verify that you specify the event type correctly by checking the complete list of event types.
     * @type Array&lt;string&gt;
     * @memberof EventsApilistProjectEvents
     */
    excludedEventType?: Array<string>
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
     * Returns one event for the specified organization. Events identify significant database, billing, or security activities or status changes. To use this resource, the requesting API Key must have the Organization Member role.  This resource remains under revision and may change.
     * Return One Event from One Organization
     * @param param the request object
     */
    public getOrganizationEvent(param: EventsApiGetOrganizationEventRequest, options?: Configuration): Promise<EventViewForOrg> {
        return this.api.getOrganizationEvent(param.orgId, param.eventId, param.includeRaw,  options).toPromise();
    }

    /**
     * Returns one event for the specified project. Events identify significant database, billing, or security activities or status changes. To use this resource, the requesting API Key must have the Project Read Only role.  This resource remains under revision and may change.
     * Return One Event from One Project
     * @param param the request object
     */
    public getProjectEvent(param: EventsApiGetProjectEventRequest, options?: Configuration): Promise<EventViewForNdsGroup> {
        return this.api.getProjectEvent(param.groupId, param.eventId, param.includeRaw,  options).toPromise();
    }

    /**
     * Returns all events for the specified organization. Events identify significant database, billing, or security activities or status changes. To use this resource, the requesting API Key must have the Organization Member role.  This resource remains under revision and may change.
     * Return All Events from One Organization
     * @param param the request object
     */
    public listOrganizationEvents(param: EventsApiListOrganizationEventsRequest, options?: Configuration): Promise<OrgPaginatedEvent> {
        return this.api.listOrganizationEvents(param.orgId, param.includeCount, param.itemsPerPage, param.pageNum, param.eventType, param.includeRaw, param.maxDate, param.minDate,  options).toPromise();
    }

    /**
     * Returns one event for the specified project. Events identify significant database, billing, or security activities or status changes. To use this resource, the requesting API Key must have the Project Read Only role.  This resource remains under revision and may change.
     * Return All Events from One Project
     * @param param the request object
     */
    public listProjectEvents(param: EventsApiListProjectEventsRequest, options?: Configuration): Promise<GroupPaginatedEvent> {
        return this.api.listProjectEvents(param.groupId, param.includeCount, param.itemsPerPage, param.pageNum, param.clusterNames, param.eventType, param.excludedEventType, param.includeRaw, param.maxDate, param.minDate,  options).toPromise();
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
     * @type AuthFederationRoleMapping
     * @memberof FederatedAuthenticationApicreateRoleMapping
     */
    authFederationRoleMapping: AuthFederationRoleMapping
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
}

export interface FederatedAuthenticationApiGetFederationSettingsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof FederatedAuthenticationApigetFederationSettings
     */
    orgId: string
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
}

export interface FederatedAuthenticationApiListConnectedOrgConfigsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your federation.
     * @type string
     * @memberof FederatedAuthenticationApilistConnectedOrgConfigs
     */
    federationSettingsId: string
}

export interface FederatedAuthenticationApiListIdentityProvidersRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your federation.
     * @type string
     * @memberof FederatedAuthenticationApilistIdentityProviders
     */
    federationSettingsId: string
    /**
     * The protocols of the target identity providers.
     * @type string
     * @memberof FederatedAuthenticationApilistIdentityProviders
     */
    protocol?: string
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
     * @type ConnectedOrgConfig
     * @memberof FederatedAuthenticationApiupdateConnectedOrgConfig
     */
    connectedOrgConfig: ConnectedOrgConfig
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
     * @type AuthFederationRoleMapping
     * @memberof FederatedAuthenticationApiupdateRoleMapping
     */
    authFederationRoleMapping: AuthFederationRoleMapping
}

export class ObjectFederatedAuthenticationApi {
    private api: ObservableFederatedAuthenticationApi

    public constructor(configuration: Configuration, requestFactory?: FederatedAuthenticationApiRequestFactory, responseProcessor?: FederatedAuthenticationApiResponseProcessor) {
        this.api = new ObservableFederatedAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds one role mapping to the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role.
     * Add One Role Mapping to One Organization
     * @param param the request object
     */
    public createRoleMapping(param: FederatedAuthenticationApiCreateRoleMappingRequest, options?: Configuration): Promise<AuthFederationRoleMapping> {
        return this.api.createRoleMapping(param.federationSettingsId, param.orgId, param.authFederationRoleMapping,  options).toPromise();
    }

    /**
     * Deletes the federation settings instance and all associated data, including identity providers and domains. To use this resource, the requesting API Key must have the Organization Owner role in the last remaining connected organization. **Note**: requests to this resource will fail if there is more than one connected organization in the federation.
     * Delete the federation settings instance.
     * @param param the request object
     */
    public deleteFederationApp(param: FederatedAuthenticationApiDeleteFederationAppRequest, options?: Configuration): Promise<void> {
        return this.api.deleteFederationApp(param.federationSettingsId,  options).toPromise();
    }

    /**
     * Removes one role mapping in the specified organization from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role.
     * Remove One Role Mapping from One Organization
     * @param param the request object
     */
    public deleteRoleMapping(param: FederatedAuthenticationApiDeleteRoleMappingRequest, options?: Configuration): Promise<void> {
        return this.api.deleteRoleMapping(param.federationSettingsId, param.id, param.orgId,  options).toPromise();
    }

    /**
     * Returns the specified connected org config from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in the connected org.
     * Return One Org Config Connected to One Federation
     * @param param the request object
     */
    public getConnectedOrgConfig(param: FederatedAuthenticationApiGetConnectedOrgConfigRequest, options?: Configuration): Promise<ConnectedOrgConfig> {
        return this.api.getConnectedOrgConfig(param.federationSettingsId, param.orgId,  options).toPromise();
    }

    /**
     * Returns information about the federation settings for the specified organization. To use this resource, the requesting API Key must have the Organization Owner role in the connected org.
     * Return Federation Settings for One Organization
     * @param param the request object
     */
    public getFederationSettings(param: FederatedAuthenticationApiGetFederationSettingsRequest, options?: Configuration): Promise<OrgFederationSettings> {
        return this.api.getFederationSettings(param.orgId,  options).toPromise();
    }

    /**
     * Returns one identity provider in the specified federation by the identity provider's id. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations. Deprecated versions: v2-{2023-01-01}
     * Return one identity provider from the specified federation by id.
     * @param param the request object
     */
    public getIdentityProvider(param: FederatedAuthenticationApiGetIdentityProviderRequest, options?: Configuration): Promise<FederationIdentityProvider> {
        return this.api.getIdentityProvider(param.federationSettingsId, param.identityProviderId,  options).toPromise();
    }

    /**
     * Returns the metadata of one identity provider in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations.
     * Return the metadata of one identity provider in the specified federation.
     * @param param the request object
     */
    public getIdentityProviderMetadata(param: FederatedAuthenticationApiGetIdentityProviderMetadataRequest, options?: Configuration): Promise<string> {
        return this.api.getIdentityProviderMetadata(param.federationSettingsId, param.identityProviderId,  options).toPromise();
    }

    /**
     * Returns one role mapping from the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role.
     * Return One Role Mapping from One Organization
     * @param param the request object
     */
    public getRoleMapping(param: FederatedAuthenticationApiGetRoleMappingRequest, options?: Configuration): Promise<AuthFederationRoleMapping> {
        return this.api.getRoleMapping(param.federationSettingsId, param.id, param.orgId,  options).toPromise();
    }

    /**
     * Returns all connected org configs in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected orgs.
     * Return All Connected Org Configs from the Federation
     * @param param the request object
     */
    public listConnectedOrgConfigs(param: FederatedAuthenticationApiListConnectedOrgConfigsRequest, options?: Configuration): Promise<Array<ConnectedOrgConfig>> {
        return this.api.listConnectedOrgConfigs(param.federationSettingsId,  options).toPromise();
    }

    /**
     * Returns all identity providers with the provided protocol in the specified federation. If no protocol is specified, only SAML identity providers will be returned. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations.
     * Return all identity providers from the specified federation.
     * @param param the request object
     */
    public listIdentityProviders(param: FederatedAuthenticationApiListIdentityProvidersRequest, options?: Configuration): Promise<Array<FederationIdentityProvider>> {
        return this.api.listIdentityProviders(param.federationSettingsId, param.protocol,  options).toPromise();
    }

    /**
     * Returns all role mappings from the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role.
     * Return All Role Mappings from One Organization
     * @param param the request object
     */
    public listRoleMappings(param: FederatedAuthenticationApiListRoleMappingsRequest, options?: Configuration): Promise<PaginatedRoleMapping> {
        return this.api.listRoleMappings(param.federationSettingsId, param.orgId,  options).toPromise();
    }

    /**
     * Removes one connected organization configuration from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role. Note: This request fails if only one connected organization exists in the federation.
     * Remove One Org Config Connected to One Federation
     * @param param the request object
     */
    public removeConnectedOrgConfig(param: FederatedAuthenticationApiRemoveConnectedOrgConfigRequest, options?: Configuration): Promise<any> {
        return this.api.removeConnectedOrgConfig(param.federationSettingsId, param.orgId,  options).toPromise();
    }

    /**
     * Updates one connected organization configuration from the specified federation. To use this resource, the requesting API Key must have the Organization Owner role.   **Note** If the organization configuration has no associated identity provider, you can't use this resource to update role mappings or post authorization role grants.    **Note**: The domainRestrictionEnabled field defaults to false if not provided in the request.   **Note**: If the identityProviderId field is not provided, you will disconnect the organization and the identity provider.
     * Update One Org Config Connected to One Federation
     * @param param the request object
     */
    public updateConnectedOrgConfig(param: FederatedAuthenticationApiUpdateConnectedOrgConfigRequest, options?: Configuration): Promise<ConnectedOrgConfig> {
        return this.api.updateConnectedOrgConfig(param.federationSettingsId, param.orgId, param.connectedOrgConfig,  options).toPromise();
    }

    /**
     * Updates one identity provider in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role in one of the connected organizations. Deprecated versions: v2-{2023-01-01}
     * Update the identity provider.
     * @param param the request object
     */
    public updateIdentityProvider(param: FederatedAuthenticationApiUpdateIdentityProviderRequest, options?: Configuration): Promise<FederationIdentityProvider> {
        return this.api.updateIdentityProvider(param.federationSettingsId, param.identityProviderId, param.identityProviderUpdate,  options).toPromise();
    }

    /**
     * Updates one role mapping in the specified organization in the specified federation. To use this resource, the requesting API Key must have the Organization Owner role.
     * Update One Role Mapping in One Organization
     * @param param the request object
     */
    public updateRoleMapping(param: FederatedAuthenticationApiUpdateRoleMappingRequest, options?: Configuration): Promise<AuthFederationRoleMapping> {
        return this.api.updateRoleMapping(param.federationSettingsId, param.id, param.orgId, param.authFederationRoleMapping,  options).toPromise();
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
     * @type CustomZoneMappings
     * @memberof GlobalClustersApicreateCustomZoneMapping
     */
    customZoneMappings: CustomZoneMappings
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
     * @type ManagedNamespace
     * @memberof GlobalClustersApicreateManagedNamespace
     */
    managedNamespace: ManagedNamespace
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
}

export class ObjectGlobalClustersApi {
    private api: ObservableGlobalClustersApi

    public constructor(configuration: Configuration, requestFactory?: GlobalClustersApiRequestFactory, responseProcessor?: GlobalClustersApiResponseProcessor) {
        this.api = new ObservableGlobalClustersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one custom zone mapping for the specified global cluster. A custom zone mapping matches one ISO 3166-2 location code to a zone in your global cluster. By default, MongoDB Cloud maps each location code to the closest geographical zone. To use this resource, the requesting API Key must have the Project Owner role. Deprecated versions: v2-{2023-01-01}
     * Add One Entry to One Custom Zone Mapping
     * @param param the request object
     */
    public createCustomZoneMapping(param: GlobalClustersApiCreateCustomZoneMappingRequest, options?: Configuration): Promise<GeoSharding> {
        return this.api.createCustomZoneMapping(param.groupId, param.clusterName, param.customZoneMappings,  options).toPromise();
    }

    /**
     * Creates one managed namespace within the specified global cluster. A managed namespace identifies a collection using the database name, the dot separator, and the collection name. To use this resource, the requesting API Key must have the Project Data Access Admin role. Deprecated versions: v2-{2023-01-01}
     * Create One Managed Namespace in One Global Multi-Cloud Cluster
     * @param param the request object
     */
    public createManagedNamespace(param: GlobalClustersApiCreateManagedNamespaceRequest, options?: Configuration): Promise<GeoSharding> {
        return this.api.createManagedNamespace(param.groupId, param.clusterName, param.managedNamespace,  options).toPromise();
    }

    /**
     * Removes all custom zone mappings for the specified global cluster. A custom zone mapping matches one ISO 3166-2 location code to a zone in your global cluster. Removing the custom zone mappings restores the default mapping. By default, MongoDB Cloud maps each location code to the closest geographical zone. To use this resource, the requesting API Key must have the Project Owner role. Deprecated versions: v2-{2023-01-01}
     * Remove All Custom Zone Mappings from One Global Multi-Cloud Cluster
     * @param param the request object
     */
    public deleteAllCustomZoneMappings(param: GlobalClustersApiDeleteAllCustomZoneMappingsRequest, options?: Configuration): Promise<GeoSharding> {
        return this.api.deleteAllCustomZoneMappings(param.groupId, param.clusterName,  options).toPromise();
    }

    /**
     * Removes one managed namespace within the specified global cluster. A managed namespace identifies a collection using the database name, the dot separator, and the collection name. Deleting a managed namespace does not remove the associated collection or data. To use this resource, the requesting API Key must have the Project Data Access Admin role. Deprecated versions: v2-{2023-01-01}
     * Remove One Managed Namespace from One Global Multi-Cloud Cluster
     * @param param the request object
     */
    public deleteManagedNamespace(param: GlobalClustersApiDeleteManagedNamespaceRequest, options?: Configuration): Promise<GeoSharding> {
        return this.api.deleteManagedNamespace(param.clusterName, param.groupId, param.db, param.collection,  options).toPromise();
    }

    /**
     * Returns one managed namespace within the specified global cluster. A managed namespace identifies a collection using the database name, the dot separator, and the collection name. To use this resource, the requesting API Key must have the Project Read Only role. Deprecated versions: v2-{2023-01-01}
     * Return One Managed Namespace in One Global Multi-Cloud Cluster
     * @param param the request object
     */
    public getManagedNamespace(param: GlobalClustersApiGetManagedNamespaceRequest, options?: Configuration): Promise<GeoSharding> {
        return this.api.getManagedNamespace(param.groupId, param.clusterName,  options).toPromise();
    }

}

import { ObservableInvoicesApi } from "./ObservableAPI";
import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor} from "../apis/InvoicesApi";

export interface InvoicesApiCreateCostExplorerQueryProcessRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof InvoicesApicreateCostExplorerQueryProcess
     */
    orgId: string
    /**
     * Filter parameters for the Cost Explorer query.
     * @type CostExplorerFilterRequestBody
     * @memberof InvoicesApicreateCostExplorerQueryProcess
     */
    costExplorerFilterRequestBody: CostExplorerFilterRequestBody
}

export interface InvoicesApiCreateCostExplorerQueryProcess1Request {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof InvoicesApicreateCostExplorerQueryProcess1
     */
    orgId: string
    /**
     * Unique 64 digit string that identifies the Cost Explorer query.
     * @type string
     * @memberof InvoicesApicreateCostExplorerQueryProcess1
     */
    token: string
}

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
}

export interface InvoicesApiListInvoicesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof InvoicesApilistInvoices
     */
    orgId: string
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
}

export interface InvoicesApiListPendingInvoicesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof InvoicesApilistPendingInvoices
     */
    orgId: string
}

export class ObjectInvoicesApi {
    private api: ObservableInvoicesApi

    public constructor(configuration: Configuration, requestFactory?: InvoicesApiRequestFactory, responseProcessor?: InvoicesApiResponseProcessor) {
        this.api = new ObservableInvoicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a query process within the Cost Explorer for the given parameters. A token is returned that can be used to poll the status of the query and eventually retrievethe results.
     * Create Cost Explorer query process
     * @param param the request object
     */
    public createCostExplorerQueryProcess(param: InvoicesApiCreateCostExplorerQueryProcessRequest, options?: Configuration): Promise<CostExplorerFilterResponse> {
        return this.api.createCostExplorerQueryProcess(param.orgId, param.costExplorerFilterRequestBody,  options).toPromise();
    }

    /**
     * Returns the usage details for a Cost Explorer query, if the query is finished and the data is ready to be viewed. If the data is not ready, a 'processing' response willindicate that another request should be sent later to view the data.
     * Return results from a given Cost Explorer query, or notify that the results are not ready yet.
     * @param param the request object
     */
    public createCostExplorerQueryProcess1(param: InvoicesApiCreateCostExplorerQueryProcess1Request, options?: Configuration): Promise<string> {
        return this.api.createCostExplorerQueryProcess1(param.orgId, param.token,  options).toPromise();
    }

    /**
     * Returns one invoice that MongoDB issued to the specified organization in CSV format. A unique 24-hexadecimal digit string identifies the invoice. To use this resource, the requesting API Key have at least the Organization Billing Viewer, Organization Billing Admin, or Organization Owner role. If you have a cross-organization setup, you can query for a linked invoice if you have the Organization Billing Admin or Organization Owner Role.
     * Return One Organization Invoice as CSV
     * @param param the request object
     */
    public downloadInvoiceCSV(param: InvoicesApiDownloadInvoiceCSVRequest, options?: Configuration): Promise<string> {
        return this.api.downloadInvoiceCSV(param.orgId, param.invoiceId,  options).toPromise();
    }

    /**
     * Returns one invoice that MongoDB issued to the specified organization. A unique 24-hexadecimal digit string identifies the invoice. You can choose to receive this invoice in JSON or CSV format. To use this resource, the requesting API Key must have the Organization Billing Viewer, Organization Billing Admin, or Organization Owner role. If you have a cross-organization setup, you can query for a linked invoice if you have the Organization Billing Admin or Organization Owner role.
     * Return One Organization Invoice
     * @param param the request object
     */
    public getInvoice(param: InvoicesApiGetInvoiceRequest, options?: Configuration): Promise<string> {
        return this.api.getInvoice(param.orgId, param.invoiceId,  options).toPromise();
    }

    /**
     * Returns all invoices that MongoDB issued to the specified organization. This list includes all invoices regardless of invoice status. To use this resource, the requesting API Key must have the Organization Billing Viewer, Organization Billing Admin, or Organization Owner role. If you have a cross-organization setup, you can view linked invoices if you have the Organization Billing Admin or Organization Owner role.
     * Return All Invoices for One Organization
     * @param param the request object
     */
    public listInvoices(param: InvoicesApiListInvoicesRequest, options?: Configuration): Promise<PaginatedApiInvoice> {
        return this.api.listInvoices(param.orgId, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Returns all invoices accruing charges for the current billing cycle for the specified organization. To use this resource, the requesting API Key must have the Organization Billing Viewer, Organization Billing Admin, or Organization Owner role. If you have a cross-organization setup, you can view linked invoices if you have the Organization Billing Admin or Organization Owner Role.
     * Return All Pending Invoices for One Organization
     * @param param the request object
     */
    public listPendingInvoices(param: InvoicesApiListPendingInvoicesRequest, options?: Configuration): Promise<PaginatedApiInvoice> {
        return this.api.listPendingInvoices(param.orgId,  options).toPromise();
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
}

export interface LDAPConfigurationApiGetLDAPConfigurationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof LDAPConfigurationApigetLDAPConfiguration
     */
    groupId: string
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
     * @type LDAPVerifyConnectivityJobRequestParams
     * @memberof LDAPConfigurationApiverifyLDAPConfiguration
     */
    lDAPVerifyConnectivityJobRequestParams: LDAPVerifyConnectivityJobRequestParams
}

export class ObjectLDAPConfigurationApi {
    private api: ObservableLDAPConfigurationApi

    public constructor(configuration: Configuration, requestFactory?: LDAPConfigurationApiRequestFactory, responseProcessor?: LDAPConfigurationApiResponseProcessor) {
        this.api = new ObservableLDAPConfigurationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Removes the current LDAP Distinguished Name mapping captured in the ``userToDNMapping`` document from the LDAP configuration for the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove the Current LDAP User to DN Mapping
     * @param param the request object
     */
    public deleteLDAPConfiguration(param: LDAPConfigurationApiDeleteLDAPConfigurationRequest, options?: Configuration): Promise<UserSecurity> {
        return this.api.deleteLDAPConfiguration(param.groupId,  options).toPromise();
    }

    /**
     * Returns the current LDAP configuration for the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Return the Current LDAP or X.509 Configuration
     * @param param the request object
     */
    public getLDAPConfiguration(param: LDAPConfigurationApiGetLDAPConfigurationRequest, options?: Configuration): Promise<UserSecurity> {
        return this.api.getLDAPConfiguration(param.groupId,  options).toPromise();
    }

    /**
     * Returns the status of one request to verify one LDAP configuration for the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Return the Status of One Verify LDAP Configuration Request
     * @param param the request object
     */
    public getLDAPConfigurationStatus(param: LDAPConfigurationApiGetLDAPConfigurationStatusRequest, options?: Configuration): Promise<LDAPVerifyConnectivityJobRequest> {
        return this.api.getLDAPConfigurationStatus(param.groupId, param.requestId,  options).toPromise();
    }

    /**
     * Edits the LDAP configuration for the specified project. To use this resource, the requesting API Key must have the Project Owner role.  Updating this configuration triggers a rolling restart of the database.
     * Edit the LDAP or X.509 Configuration
     * @param param the request object
     */
    public saveLDAPConfiguration(param: LDAPConfigurationApiSaveLDAPConfigurationRequest, options?: Configuration): Promise<UserSecurity> {
        return this.api.saveLDAPConfiguration(param.groupId, param.userSecurity,  options).toPromise();
    }

    /**
     * Verifies the LDAP configuration for the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Verify the LDAP Configuration in One Project
     * @param param the request object
     */
    public verifyLDAPConfiguration(param: LDAPConfigurationApiVerifyLDAPConfigurationRequest, options?: Configuration): Promise<LDAPVerifyConnectivityJobRequest> {
        return this.api.verifyLDAPConfiguration(param.groupId, param.lDAPVerifyConnectivityJobRequestParams,  options).toPromise();
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
     * Human-readable label that specifies whether to return only completed, incomplete, or all snapshots. By default, MongoDB Cloud only returns completed snapshots.
     * @type string
     * @memberof LegacyBackupApilistLegacySnapshots
     */
    completed?: string
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
     * @type BackupSnapshot
     * @memberof LegacyBackupApiupdateLegacySnapshotRetention
     */
    backupSnapshot: BackupSnapshot
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
     * @type ApiAtlasSnapshotSchedule
     * @memberof LegacyBackupApiupdateLegacySnapshotSchedule
     */
    apiAtlasSnapshotSchedule: ApiAtlasSnapshotSchedule
}

export class ObjectLegacyBackupApi {
    private api: ObservableLegacyBackupApi

    public constructor(configuration: Configuration, requestFactory?: LegacyBackupApiRequestFactory, responseProcessor?: LegacyBackupApiResponseProcessor) {
        this.api = new ObservableLegacyBackupApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Removes one legacy backup snapshot for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Owner role. Effective 23 March 2020, all new clusters can use only Cloud Backups. When you upgrade to 4.2, your backup system upgrades to cloud backup if it is currently set to legacy backup. After this upgrade, all your existing legacy backup snapshots remain available. They expire over time in accordance with your retention policy. Your backup policy resets to the default schedule. If you had a custom backup policy in place with legacy backups, you must re-create it with the procedure outlined in the [Cloud Backup documentation](https://www.mongodb.com/docs/atlas/backup/cloud-backup/scheduling/#std-label-cloud-provider-backup-schedule).
     * Remove One Legacy Backup Snapshot
     * @param param the request object
     */
    public deleteLegacySnapshot(param: LegacyBackupApiDeleteLegacySnapshotRequest, options?: Configuration): Promise<any> {
        return this.api.deleteLegacySnapshot(param.groupId, param.clusterName, param.snapshotId,  options).toPromise();
    }

    /**
     * Returns one legacy backup checkpoint for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Legacy Backup Checkpoint
     * @param param the request object
     */
    public getLegacyBackupCheckpoint(param: LegacyBackupApiGetLegacyBackupCheckpointRequest, options?: Configuration): Promise<ApiAtlasCheckpoint> {
        return this.api.getLegacyBackupCheckpoint(param.groupId, param.checkpointId, param.clusterName,  options).toPromise();
    }

    /**
     * Returns one legacy backup restore job for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.   Effective 23 March 2020, all new clusters can use only Cloud Backups. When you upgrade to 4.2, your backup system upgrades to cloud backup if it is currently set to legacy backup. After this upgrade, all your existing legacy backup snapshots remain available. They expire over time in accordance with your retention policy. Your backup policy resets to the default schedule. If you had a custom backup policy in place with legacy backups, you must re-create it with the procedure outlined in the [Cloud Backup documentation](https://www.mongodb.com/docs/atlas/backup/cloud-backup/scheduling/#std-label-cloud-provider-backup-schedule).
     * Return One Legacy Backup Restore Job
     * @param param the request object
     */
    public getLegacyBackupRestoreJob(param: LegacyBackupApiGetLegacyBackupRestoreJobRequest, options?: Configuration): Promise<BackupRestoreJob> {
        return this.api.getLegacyBackupRestoreJob(param.groupId, param.clusterName, param.jobId,  options).toPromise();
    }

    /**
     * Returns one legacy backup snapshot for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. Effective 23 March 2020, all new clusters can use only Cloud Backups. When you upgrade to 4.2, your backup system upgrades to cloud backup if it is currently set to legacy backup. After this upgrade, all your existing legacy backup snapshots remain available. They expire over time in accordance with your retention policy. Your backup policy resets to the default schedule. If you had a custom backup policy in place with legacy backups, you must re-create it with the procedure outlined in the [Cloud Backup documentation](https://www.mongodb.com/docs/atlas/backup/cloud-backup/scheduling/#std-label-cloud-provider-backup-schedule).
     * Return One Legacy Backup Snapshot
     * @param param the request object
     */
    public getLegacySnapshot(param: LegacyBackupApiGetLegacySnapshotRequest, options?: Configuration): Promise<BackupSnapshot> {
        return this.api.getLegacySnapshot(param.groupId, param.clusterName, param.snapshotId,  options).toPromise();
    }

    /**
     * Returns the snapshot schedule for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.   Effective 23 March 2020, all new clusters can use only Cloud Backups. When you upgrade to 4.2, your backup system upgrades to cloud backup if it is currently set to legacy backup. After this upgrade, all your existing legacy backup snapshots remain available. They expire over time in accordance with your retention policy. Your backup policy resets to the default schedule. If you had a custom backup policy in place with legacy backups, you must re-create it with the procedure outlined in the [Cloud Backup documentation](https://www.mongodb.com/docs/atlas/backup/cloud-backup/scheduling/#std-label-cloud-provider-backup-schedule).
     * Return One Snapshot Schedule
     * @param param the request object
     */
    public getLegacySnapshotSchedule(param: LegacyBackupApiGetLegacySnapshotScheduleRequest, options?: Configuration): Promise<ApiAtlasSnapshotSchedule> {
        return this.api.getLegacySnapshotSchedule(param.groupId, param.clusterName,  options).toPromise();
    }

    /**
     * Returns all legacy backup checkpoints for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Legacy Backup Checkpoints
     * @param param the request object
     */
    public listLegacyBackupCheckpoints(param: LegacyBackupApiListLegacyBackupCheckpointsRequest, options?: Configuration): Promise<PaginatedApiAtlasCheckpoint> {
        return this.api.listLegacyBackupCheckpoints(param.groupId, param.clusterName, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Returns all legacy backup restore jobs for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.   Effective 23 March 2020, all new clusters can use only Cloud Backups. When you upgrade to 4.2, your backup system upgrades to cloud backup if it is currently set to legacy backup. After this upgrade, all your existing legacy backup snapshots remain available. They expire over time in accordance with your retention policy. Your backup policy resets to the default schedule. If you had a custom backup policy in place with legacy backups, you must re-create it with the procedure outlined in the [Cloud Backup documentation](https://www.mongodb.com/docs/atlas/backup/cloud-backup/scheduling/#std-label-cloud-provider-backup-schedule). If you use the `BATCH-ID` query parameter, you can retrieve all restore jobs in the specified batch. When creating a restore job for a sharded cluster, MongoDB Cloud creates a separate job for each shard, plus another for the config server. Each of those jobs are part of a batch. However, a batch can't include a restore job for a replica set.
     * Return All Legacy Backup Restore Jobs
     * @param param the request object
     */
    public listLegacyBackupRestoreJobs(param: LegacyBackupApiListLegacyBackupRestoreJobsRequest, options?: Configuration): Promise<PaginatedRestoreJob> {
        return this.api.listLegacyBackupRestoreJobs(param.groupId, param.clusterName, param.includeCount, param.itemsPerPage, param.pageNum, param.batchId,  options).toPromise();
    }

    /**
     * Returns all legacy backup snapshots for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Read Only role. Effective 23 March 2020, all new clusters can use only Cloud Backups. When you upgrade to 4.2, your backup system upgrades to cloud backup if it is currently set to legacy backup. After this upgrade, all your existing legacy backup snapshots remain available. They expire over time in accordance with your retention policy. Your backup policy resets to the default schedule. If you had a custom backup policy in place with legacy backups, you must re-create it with the procedure outlined in the [Cloud Backup documentation](https://www.mongodb.com/docs/atlas/backup/cloud-backup/scheduling/#std-label-cloud-provider-backup-schedule).
     * Return All Legacy Backup Snapshots
     * @param param the request object
     */
    public listLegacySnapshots(param: LegacyBackupApiListLegacySnapshotsRequest, options?: Configuration): Promise<PaginatedSnapshot> {
        return this.api.listLegacySnapshots(param.groupId, param.clusterName, param.includeCount, param.itemsPerPage, param.pageNum, param.completed,  options).toPromise();
    }

    /**
     * Changes the expiration date for one legacy backup snapshot for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Owner role. Effective 23 March 2020, all new clusters can use only Cloud Backups. When you upgrade to 4.2, your backup system upgrades to cloud backup if it is currently set to legacy backup. After this upgrade, all your existing legacy backup snapshots remain available. They expire over time in accordance with your retention policy. Your backup policy resets to the default schedule. If you had a custom backup policy in place with legacy backups, you must re-create it with the procedure outlined in the [Cloud Backup documentation](https://www.mongodb.com/docs/atlas/backup/cloud-backup/scheduling/#std-label-cloud-provider-backup-schedule).
     * Change One Legacy Backup Snapshot Expiration
     * @param param the request object
     */
    public updateLegacySnapshotRetention(param: LegacyBackupApiUpdateLegacySnapshotRetentionRequest, options?: Configuration): Promise<BackupSnapshot> {
        return this.api.updateLegacySnapshotRetention(param.groupId, param.clusterName, param.snapshotId, param.backupSnapshot,  options).toPromise();
    }

    /**
     * Updates the snapshot schedule for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Owner role.   Effective 23 March 2020, all new clusters can use only Cloud Backups. When you upgrade to 4.2, your backup system upgrades to cloud backup if it is currently set to legacy backup. After this upgrade, all your existing legacy backup snapshots remain available. They expire over time in accordance with your retention policy. Your backup policy resets to the default schedule. If you had a custom backup policy in place with legacy backups, you must re-create it with the procedure outlined in the [Cloud Backup documentation](https://www.mongodb.com/docs/atlas/backup/cloud-backup/scheduling/#std-label-cloud-provider-backup-schedule).
     * Update Snapshot Schedule for One Cluster
     * @param param the request object
     */
    public updateLegacySnapshotSchedule(param: LegacyBackupApiUpdateLegacySnapshotScheduleRequest, options?: Configuration): Promise<ApiAtlasSnapshotSchedule> {
        return this.api.updateLegacySnapshotSchedule(param.groupId, param.clusterName, param.apiAtlasSnapshotSchedule,  options).toPromise();
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
     * @type BackupRestoreJob
     * @memberof LegacyBackupRestoreJobsApicreateLegacyBackupRestoreJob
     */
    backupRestoreJob: BackupRestoreJob
}

export class ObjectLegacyBackupRestoreJobsApi {
    private api: ObservableLegacyBackupRestoreJobsApi

    public constructor(configuration: Configuration, requestFactory?: LegacyBackupRestoreJobsApiRequestFactory, responseProcessor?: LegacyBackupRestoreJobsApiResponseProcessor) {
        this.api = new ObservableLegacyBackupRestoreJobsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Restores one legacy backup for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Owner role. Effective 23 March 2020, all new clusters can use only Cloud Backups. When you upgrade to 4.2, your backup system upgrades to cloud backup if it is currently set to legacy backup. After this upgrade, all your existing legacy backup snapshots remain available. They expire over time in accordance with your retention policy. Your backup policy resets to the default schedule. If you had a custom backup policy in place with legacy backups, you must re-create it with the procedure outlined in the [Cloud Backup documentation](https://www.mongodb.com/docs/atlas/backup/cloud-backup/scheduling/#std-label-cloud-provider-backup-schedule). This endpoint doesn't support creating checkpoint restore jobs for sharded clusters, or creating restore jobs for queryable backup snapshots. If you create an automated restore job by specifying `delivery.methodName` of `AUTOMATED_RESTORE` in your request body, MongoDB Cloud removes all existing data on the target cluster prior to the restore.
     * Create One Legacy Backup Restore Job
     * @param param the request object
     */
    public createLegacyBackupRestoreJob(param: LegacyBackupRestoreJobsApiCreateLegacyBackupRestoreJobRequest, options?: Configuration): Promise<PaginatedRestoreJob> {
        return this.api.createLegacyBackupRestoreJob(param.groupId, param.clusterName, param.backupRestoreJob,  options).toPromise();
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
}

export interface MaintenanceWindowsApiGetMaintenanceWindowRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MaintenanceWindowsApigetMaintenanceWindow
     */
    groupId: string
}

export interface MaintenanceWindowsApiResetMaintenanceWindowRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MaintenanceWindowsApiresetMaintenanceWindow
     */
    groupId: string
}

export interface MaintenanceWindowsApiToggleMaintenanceAutoDeferRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MaintenanceWindowsApitoggleMaintenanceAutoDefer
     */
    groupId: string
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
}

export class ObjectMaintenanceWindowsApi {
    private api: ObservableMaintenanceWindowsApi

    public constructor(configuration: Configuration, requestFactory?: MaintenanceWindowsApiRequestFactory, responseProcessor?: MaintenanceWindowsApiResponseProcessor) {
        this.api = new ObservableMaintenanceWindowsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Defers the maintenance window for the specified project. Urgent maintenance activities such as security patches can't wait for your chosen window. MongoDB Cloud starts those maintenance activities when needed. After you schedule maintenance for your cluster, you can't change your maintenance window until the current maintenance efforts complete. The maintenance procedure that MongoDB Cloud performs requires at least one replica set election during the maintenance window per replica set. Maintenance always begins as close to the scheduled hour as possible, but in-progress cluster updates or unexpected system issues could delay the start time. To use this resource, the requesting API Key must have the Project Owner role.
     * Defer One Maintenance Window for One Project
     * @param param the request object
     */
    public deferMaintenanceWindow(param: MaintenanceWindowsApiDeferMaintenanceWindowRequest, options?: Configuration): Promise<void> {
        return this.api.deferMaintenanceWindow(param.groupId,  options).toPromise();
    }

    /**
     * Returns the maintenance window for the specified project. MongoDB Cloud starts those maintenance activities when needed. You can't change your maintenance window until the current maintenance efforts complete. The maintenance procedure that MongoDB Cloud performs requires at least one replica set election during the maintenance window per replica set. Maintenance always begins as close to the scheduled hour as possible, but in-progress cluster updates or unexpected system issues could delay the start time. To use this resource, the requesting API Key must have the Project Owner role.
     * Return One Maintenance Window for One Project
     * @param param the request object
     */
    public getMaintenanceWindow(param: MaintenanceWindowsApiGetMaintenanceWindowRequest, options?: Configuration): Promise<GroupMaintenanceWindow> {
        return this.api.getMaintenanceWindow(param.groupId,  options).toPromise();
    }

    /**
     * Resets the maintenance window for the specified project. To use this resource, the requesting API Key must have the Project Owner role. Urgent maintenance activities such as security patches can't wait for your chosen window. MongoDB Cloud starts those maintenance activities when needed. After you schedule maintenance for your cluster, you can't change your maintenance window until the current maintenance efforts complete. The maintenance procedure that MongoDB Cloud performs requires at least one replica set election during the maintenance window per replica set. Maintenance always begins as close to the scheduled hour as possible, but in-progress cluster updates or unexpected system issues could delay the start time. To use this resource, the requesting API Key must have the Project Owner role.
     * Reset One Maintenance Window for One Project
     * @param param the request object
     */
    public resetMaintenanceWindow(param: MaintenanceWindowsApiResetMaintenanceWindowRequest, options?: Configuration): Promise<void> {
        return this.api.resetMaintenanceWindow(param.groupId,  options).toPromise();
    }

    /**
     * Toggles automatic deferral of the maintenance window for the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Toggle Automatic Deferral of Maintenance for One Project
     * @param param the request object
     */
    public toggleMaintenanceAutoDefer(param: MaintenanceWindowsApiToggleMaintenanceAutoDeferRequest, options?: Configuration): Promise<void> {
        return this.api.toggleMaintenanceAutoDefer(param.groupId,  options).toPromise();
    }

    /**
     * Updates the maintenance window for the specified project. Urgent maintenance activities such as security patches can't wait for your chosen window. MongoDB Cloud starts those maintenance activities when needed. After you schedule maintenance for your cluster, you can't change your maintenance window until the current maintenance efforts complete. The maintenance procedure that MongoDB Cloud performs requires at least one replica set election during the maintenance window per replica set. Maintenance always begins as close to the scheduled hour as possible, but in-progress cluster updates or unexpected system issues could delay the start time. To use this resource, the requesting API Key must have the Project Owner role.
     * Update Maintenance Window for One Project
     * @param param the request object
     */
    public updateMaintenanceWindow(param: MaintenanceWindowsApiUpdateMaintenanceWindowRequest, options?: Configuration): Promise<any> {
        return this.api.updateMaintenanceWindow(param.groupId, param.groupMaintenanceWindow,  options).toPromise();
    }

}

import { ObservableMongoDBCloudUsersApi } from "./ObservableAPI";
import { MongoDBCloudUsersApiRequestFactory, MongoDBCloudUsersApiResponseProcessor} from "../apis/MongoDBCloudUsersApi";

export interface MongoDBCloudUsersApiCreateUserRequest {
    /**
     * MongoDB Cloud user account to create.
     * @type CloudAppUser
     * @memberof MongoDBCloudUsersApicreateUser
     */
    cloudAppUser: CloudAppUser
}

export interface MongoDBCloudUsersApiGetUserRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies this user.
     * @type string
     * @memberof MongoDBCloudUsersApigetUser
     */
    userId: string
}

export interface MongoDBCloudUsersApiGetUserByUsernameRequest {
    /**
     * Email address that belongs to the MongoDB Cloud user account. You cannot modify this address after creating the user.
     * @type string
     * @memberof MongoDBCloudUsersApigetUserByUsername
     */
    userName: string
}

export class ObjectMongoDBCloudUsersApi {
    private api: ObservableMongoDBCloudUsersApi

    public constructor(configuration: Configuration, requestFactory?: MongoDBCloudUsersApiRequestFactory, responseProcessor?: MongoDBCloudUsersApiResponseProcessor) {
        this.api = new ObservableMongoDBCloudUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one MongoDB Cloud user account. A MongoDB Cloud user account grants access to only the MongoDB Cloud application. To grant database access, create a database user. MongoDB Cloud sends an email to the users you specify, inviting them to join the project. Invited users don't have access to the project until they accept the invitation. Invitations expire after 30 days.   MongoDB Cloud limits MongoDB Cloud user membership to a maximum of 250 MongoDB Cloud users per team. MongoDB Cloud limits MongoDB Cloud user membership to 500 MongoDB Cloud users per project and 500 MongoDB Cloud users per organization, which includes the combined membership of all projects in the organization. MongoDB Cloud raises an error if an operation exceeds these limits. For example, if you have an organization with five projects, and each project has 100 MongoDB Cloud users, and each MongoDB Cloud user belongs to only one project, you can't add any MongoDB Cloud users to this organization without first removing existing MongoDB Cloud users from the organization.   To use this resource, the requesting API Key can have any role.
     * Create One MongoDB Cloud User
     * @param param the request object
     */
    public createUser(param: MongoDBCloudUsersApiCreateUserRequest, options?: Configuration): Promise<CloudAppUser> {
        return this.api.createUser(param.cloudAppUser,  options).toPromise();
    }

    /**
     * Returns the details for one MongoDB Cloud user account with the specified unique identifier for the user. You can't use this endpoint to return information on an API Key. To return information about an API Key, use the [Return One Organization](#tag/Organizations/operation/getOrganization) API Key endpoint. You can always retrieve your own user account. If you are the owner of a MongoDB Cloud organization or project, you can also retrieve the user profile for any user with membership in that organization or project. To use this resource, the requesting API Key can have any role.
     * Return One MongoDB Cloud User using Its ID
     * @param param the request object
     */
    public getUser(param: MongoDBCloudUsersApiGetUserRequest, options?: Configuration): Promise<CloudAppUser> {
        return this.api.getUser(param.userId,  options).toPromise();
    }

    /**
     * Returns the details for one MongoDB Cloud user account with the specified username. You can't use this endpoint to return information about an API Key. To return information about an API Key, use the [Return One Organization](#tag/Organizations/operation/getOrganization) API Key endpoint. To use this resource, the requesting API Key can have any role.
     * Return One MongoDB Cloud User using Their Username
     * @param param the request object
     */
    public getUserByUsername(param: MongoDBCloudUsersApiGetUserByUsernameRequest, options?: Configuration): Promise<CloudAppUser> {
        return this.api.getUserByUsername(param.userName,  options).toPromise();
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
     * Duration that specifies the interval at which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC.
     * @type string
     * @memberof MonitoringAndLogsApigetDatabaseMeasurements
     */
    granularity: string
    /**
     * One or more types of measurement to request for this MongoDB process. If omitted, the resource returns all measurements. To specify multiple values for &#x60;m&#x60;, repeat the &#x60;m&#x60; parameter for each value. Specify measurements that apply to the specified host. MongoDB Cloud returns an error if you specified any invalid measurements.
     * @type Set&lt;string&gt;
     * @memberof MonitoringAndLogsApigetDatabaseMeasurements
     */
    m?: Set<string>
    /**
     * Duration over which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC. Include this parameter when you do not set **start** and **end**.
     * @type string
     * @memberof MonitoringAndLogsApigetDatabaseMeasurements
     */
    period?: string
    /**
     * Date and time when MongoDB Cloud begins reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @type Date
     * @memberof MonitoringAndLogsApigetDatabaseMeasurements
     */
    start?: Date
    /**
     * Date and time when MongoDB Cloud stops reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @type Date
     * @memberof MonitoringAndLogsApigetDatabaseMeasurements
     */
    end?: Date
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
     * Duration that specifies the interval at which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC.
     * @type string
     * @memberof MonitoringAndLogsApigetDiskMeasurements
     */
    granularity: string
    /**
     * One or more types of measurement to request for this MongoDB process. If omitted, the resource returns all measurements. To specify multiple values for &#x60;m&#x60;, repeat the &#x60;m&#x60; parameter for each value. Specify measurements that apply to the specified host. MongoDB Cloud returns an error if you specified any invalid measurements.
     * @type Set&lt;string&gt;
     * @memberof MonitoringAndLogsApigetDiskMeasurements
     */
    m?: Set<string>
    /**
     * Duration over which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC. Include this parameter when you do not set **start** and **end**.
     * @type string
     * @memberof MonitoringAndLogsApigetDiskMeasurements
     */
    period?: string
    /**
     * Date and time when MongoDB Cloud begins reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @type Date
     * @memberof MonitoringAndLogsApigetDiskMeasurements
     */
    start?: Date
    /**
     * Date and time when MongoDB Cloud stops reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @type Date
     * @memberof MonitoringAndLogsApigetDiskMeasurements
     */
    end?: Date
}

export interface MonitoringAndLogsApiGetHostLogsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MonitoringAndLogsApigetHostLogs
     */
    groupId: string
    /**
     * Human-readable label that identifies the host that stores the log files that you want to download.
     * @type string
     * @memberof MonitoringAndLogsApigetHostLogs
     */
    hostName: string
    /**
     * Human-readable label that identifies the log file that you want to return. To return audit logs, enable *Database Auditing* for the specified project.
     * @type string
     * @memberof MonitoringAndLogsApigetHostLogs
     */
    logName: string
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
     * Duration that specifies the interval at which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC.
     * @type string
     * @memberof MonitoringAndLogsApigetHostMeasurements
     */
    granularity: string
    /**
     * One or more types of measurement to request for this MongoDB process. If omitted, the resource returns all measurements. To specify multiple values for &#x60;m&#x60;, repeat the &#x60;m&#x60; parameter for each value. Specify measurements that apply to the specified host. MongoDB Cloud returns an error if you specified any invalid measurements.
     * @type Set&lt;string&gt;
     * @memberof MonitoringAndLogsApigetHostMeasurements
     */
    m?: Set<string>
    /**
     * Duration over which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC. Include this parameter when you do not set **start** and **end**.
     * @type string
     * @memberof MonitoringAndLogsApigetHostMeasurements
     */
    period?: string
    /**
     * Date and time when MongoDB Cloud begins reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @type Date
     * @memberof MonitoringAndLogsApigetHostMeasurements
     */
    start?: Date
    /**
     * Date and time when MongoDB Cloud stops reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @type Date
     * @memberof MonitoringAndLogsApigetHostMeasurements
     */
    end?: Date
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
     * @type Set&lt;string&gt;
     * @memberof MonitoringAndLogsApigetIndexMetrics
     */
    metrics: Set<string>
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
     * @type Set&lt;string&gt;
     * @memberof MonitoringAndLogsApigetMeasurements
     */
    metrics: Set<string>
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
}

export interface MonitoringAndLogsApiListAtlasProcessesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MonitoringAndLogsApilistAtlasProcesses
     */
    groupId: string
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
}

export interface MonitoringAndLogsApiListDatabasesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof MonitoringAndLogsApilistDatabases
     */
    groupId: string
    /**
     * Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @type string
     * @memberof MonitoringAndLogsApilistDatabases
     */
    processId: string
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
     * @type Set&lt;string&gt;
     * @memberof MonitoringAndLogsApilistIndexMetrics
     */
    metrics: Set<string>
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
}

export class ObjectMonitoringAndLogsApi {
    private api: ObservableMonitoringAndLogsApi

    public constructor(configuration: Configuration, requestFactory?: MonitoringAndLogsApiRequestFactory, responseProcessor?: MonitoringAndLogsApiResponseProcessor) {
        this.api = new ObservableMonitoringAndLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the processes for the specified host for the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One MongoDB Process by ID
     * @param param the request object
     */
    public getAtlasProcess(param: MonitoringAndLogsApiGetAtlasProcessRequest, options?: Configuration): Promise<ApiHostViewAtlas> {
        return this.api.getAtlasProcess(param.groupId, param.processId,  options).toPromise();
    }

    /**
     * Returns one database running on the specified host for the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Database for a MongoDB Process
     * @param param the request object
     */
    public getDatabase(param: MonitoringAndLogsApiGetDatabaseRequest, options?: Configuration): Promise<MesurementsDatabase> {
        return this.api.getDatabase(param.groupId, param.databaseName, param.processId,  options).toPromise();
    }

    /**
     * Returns the measurements of one database for the specified host for the specified project. Returns the database's on-disk storage space based on the MongoDB `dbStats` command output. To calculate some metric series, Atlas takes the rate between every two adjacent points. For these metric series, the first data point has a null value because Atlas can't calculate a rate for the first data point given the query time range. Atlas retrieves database metrics every 20 minutes but reduces frequency when necessary to optimize database performance. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Measurements of One Database for One MongoDB Process
     * @param param the request object
     */
    public getDatabaseMeasurements(param: MonitoringAndLogsApiGetDatabaseMeasurementsRequest, options?: Configuration): Promise<ApiMeasurementsGeneralViewAtlas> {
        return this.api.getDatabaseMeasurements(param.groupId, param.databaseName, param.processId, param.granularity, param.m, param.period, param.start, param.end,  options).toPromise();
    }

    /**
     * Returns the measurements of one disk or partition for the specified host for the specified project. Returned value can be one of the following: - Throughput of I/O operations for the disk partition used for the MongoDB process - Percentage of time during which requests the partition issued and serviced - Latency per operation type of the disk partition used for the MongoDB process - Amount of free and used disk space on the disk partition used for the MongoDB process  To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Measurements of One Disk for One MongoDB Process
     * @param param the request object
     */
    public getDiskMeasurements(param: MonitoringAndLogsApiGetDiskMeasurementsRequest, options?: Configuration): Promise<ApiMeasurementsGeneralViewAtlas> {
        return this.api.getDiskMeasurements(param.groupId, param.partitionName, param.processId, param.granularity, param.m, param.period, param.start, param.end,  options).toPromise();
    }

    /**
     * Returns a compressed (.gz) log file that contains a range of log messages for the specified host for the specified project. MongoDB updates process and audit logs from the cluster backend infrastructure every five minutes and contain log data from the previous five minutes. If you poll the API for log files, we recommend polling every five minutes. For example, if the logs are updated at 4:00 UTC and then you poll the API, the API returns log data from the interval between 3:55 UTC and 4:00 UTC. This feature isn't available for `M0` free clusters, `M2`, `M5`, or serverless clusters. To use this resource, the requesting API Key must have the Project Data Access Read Only or higher role. Deprecated versions: v2-{2023-01-01}
     * Download Logs for One Cluster Host in One Project
     * @param param the request object
     */
    public getHostLogs(param: MonitoringAndLogsApiGetHostLogsRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.getHostLogs(param.groupId, param.hostName, param.logName, param.endDate, param.startDate,  options).toPromise();
    }

    /**
     * Returns disk, partition, or host measurements per process for the specified host for the specified project. Returned value can be one of the following: - Throughput of I/O operations for the disk partition used for the MongoDB process - Percentage of time during which requests the partition issued and serviced - Latency per operation type of the disk partition used for the MongoDB process - Amount of free and used disk space on the disk partition used for the MongoDB process - Measurements for the host, such as CPU usage or number of I/O operations  To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Measurements for One MongoDB Process
     * @param param the request object
     */
    public getHostMeasurements(param: MonitoringAndLogsApiGetHostMeasurementsRequest, options?: Configuration): Promise<ApiMeasurementsGeneralViewAtlas> {
        return this.api.getHostMeasurements(param.groupId, param.processId, param.granularity, param.m, param.period, param.start, param.end,  options).toPromise();
    }

    /**
     * Returns the Atlas Search metrics data series within the provided time range for one namespace and index name on the specified process. You must have the Project Read Only or higher role to view the Atlas Search metric types.
     * Return Atlas Search Metrics for One Index in One Specified Namespace
     * @param param the request object
     */
    public getIndexMetrics(param: MonitoringAndLogsApiGetIndexMetricsRequest, options?: Configuration): Promise<MeasurementsIndexes> {
        return this.api.getIndexMetrics(param.processId, param.indexName, param.databaseName, param.collectionName, param.groupId, param.granularity, param.metrics, param.period, param.start, param.end,  options).toPromise();
    }

    /**
     * Returns the Atlas Search hardware and status data series within the provided time range for one process in the specified project. You must have the Project Read Only or higher role to view the Atlas Search metric types.
     * Return Atlas Search Hardware and Status Metrics
     * @param param the request object
     */
    public getMeasurements(param: MonitoringAndLogsApiGetMeasurementsRequest, options?: Configuration): Promise<MeasurementsNonIndex> {
        return this.api.getMeasurements(param.processId, param.groupId, param.granularity, param.metrics, param.period, param.start, param.end,  options).toPromise();
    }

    /**
     * Returns details of all processes for the specified project. A MongoDB process can be either a `mongod` or `mongos`. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All MongoDB Processes in One Project
     * @param param the request object
     */
    public listAtlasProcesses(param: MonitoringAndLogsApiListAtlasProcessesRequest, options?: Configuration): Promise<PaginatedHostViewAtlas> {
        return this.api.listAtlasProcesses(param.groupId, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Returns the list of databases running on the specified host for the specified project. `M0` free clusters, `M2`, `M5`, and serverless clusters have some [operational limits](https://www.mongodb.com/docs/atlas/reference/free-shared-limitations/#operational-limitations). The MongoDB Cloud process must be a `mongod`. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Available Databases for One MongoDB Process
     * @param param the request object
     */
    public listDatabases(param: MonitoringAndLogsApiListDatabasesRequest, options?: Configuration): Promise<PaginatedDatabase> {
        return this.api.listDatabases(param.groupId, param.processId, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Returns measurement details for one disk or partition for the specified host for the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Measurements of One Disk
     * @param param the request object
     */
    public listDiskMeasurements(param: MonitoringAndLogsApiListDiskMeasurementsRequest, options?: Configuration): Promise<MeasurementDiskPartition> {
        return this.api.listDiskMeasurements(param.partitionName, param.groupId, param.processId,  options).toPromise();
    }

    /**
     * Returns the list of disks or partitions for the specified host for the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Available Disks for One MongoDB Process
     * @param param the request object
     */
    public listDiskPartitions(param: MonitoringAndLogsApiListDiskPartitionsRequest, options?: Configuration): Promise<PaginatedDiskPartition> {
        return this.api.listDiskPartitions(param.groupId, param.processId, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Returns the Atlas Search index metrics within the specified time range for one namespace in the specified process.
     * Return All Atlas Search Index Metrics for One Namespace
     * @param param the request object
     */
    public listIndexMetrics(param: MonitoringAndLogsApiListIndexMetricsRequest, options?: Configuration): Promise<MeasurementsIndexes> {
        return this.api.listIndexMetrics(param.processId, param.databaseName, param.collectionName, param.groupId, param.granularity, param.metrics, param.period, param.start, param.end,  options).toPromise();
    }

    /**
     * Returns all Atlas Search metric types available for one process in the specified project. You must have the Project Read Only or higher role to view the Atlas Search metric types.
     * Return All Atlas Search Metric Types for One Process
     * @param param the request object
     */
    public listMetricTypes(param: MonitoringAndLogsApiListMetricTypesRequest, options?: Configuration): Promise<CloudSearchMetrics> {
        return this.api.listMetricTypes(param.processId, param.groupId,  options).toPromise();
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
     * @type BaseNetworkPeeringConnectionSettings
     * @memberof NetworkPeeringApicreatePeeringConnection
     */
    baseNetworkPeeringConnectionSettings: BaseNetworkPeeringConnectionSettings
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
     * @type PrivateIPMode
     * @memberof NetworkPeeringApidisablePeering
     */
    privateIPMode: PrivateIPMode
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
}

export interface NetworkPeeringApiListPeeringConnectionsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof NetworkPeeringApilistPeeringConnections
     */
    groupId: string
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
     * Cloud service provider to use for this VPC peering connection.
     * @type string
     * @memberof NetworkPeeringApilistPeeringConnections
     */
    providerName?: string
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
     * @type string
     * @memberof NetworkPeeringApilistPeeringContainerByCloudProvider
     */
    providerName: string
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
}

export interface NetworkPeeringApiListPeeringContainersRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof NetworkPeeringApilistPeeringContainers
     */
    groupId: string
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
     * @type BaseNetworkPeeringConnectionSettings
     * @memberof NetworkPeeringApiupdatePeeringConnection
     */
    baseNetworkPeeringConnectionSettings: BaseNetworkPeeringConnectionSettings
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
}

export interface NetworkPeeringApiVerifyConnectViaPeeringOnlyModeForOneProjectRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof NetworkPeeringApiverifyConnectViaPeeringOnlyModeForOneProject
     */
    groupId: string
}

export class ObjectNetworkPeeringApi {
    private api: ObservableNetworkPeeringApi

    public constructor(configuration: Configuration, requestFactory?: NetworkPeeringApiRequestFactory, responseProcessor?: NetworkPeeringApiResponseProcessor) {
        this.api = new ObservableNetworkPeeringApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one new network peering connection in the specified project. Network peering allows multiple cloud-hosted applications to securely connect to the same project. To use this resource, the requesting API Key must have the Project Owner role. To learn more about considerations and prerequisites, see the Network Peering Documentation.
     * Create One New Network Peering Connection
     * @param param the request object
     */
    public createPeeringConnection(param: NetworkPeeringApiCreatePeeringConnectionRequest, options?: Configuration): Promise<BaseNetworkPeeringConnectionSettings> {
        return this.api.createPeeringConnection(param.groupId, param.baseNetworkPeeringConnectionSettings,  options).toPromise();
    }

    /**
     * Creates one new network peering container in the specified project. MongoDB Cloud can deploy Network Peering connections in a network peering container. GCP can have one container per project. AWS and Azure can have one container per cloud provider region. To use this resource, the requesting API Key must have the Project Owner role.
     * Create One New Network Peering Container
     * @param param the request object
     */
    public createPeeringContainer(param: NetworkPeeringApiCreatePeeringContainerRequest, options?: Configuration): Promise<CloudProviderContainer> {
        return this.api.createPeeringContainer(param.groupId, param.cloudProviderContainer,  options).toPromise();
    }

    /**
     * Removes one network peering connection in the specified project. If you Removes the last network peering connection associated with a project, MongoDB Cloud also removes any AWS security groups from the project IP access list. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Existing Network Peering Connection
     * @param param the request object
     */
    public deletePeeringConnection(param: NetworkPeeringApiDeletePeeringConnectionRequest, options?: Configuration): Promise<any> {
        return this.api.deletePeeringConnection(param.groupId, param.peerId,  options).toPromise();
    }

    /**
     * Removes one network peering container in the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Network Peering Container
     * @param param the request object
     */
    public deletePeeringContainer(param: NetworkPeeringApiDeletePeeringContainerRequest, options?: Configuration): Promise<any> {
        return this.api.deletePeeringContainer(param.groupId, param.containerId,  options).toPromise();
    }

    /**
     * Disables Connect via Peering Only mode for the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Disable Connect via Peering Only Mode for One Project
     * @param param the request object
     */
    public disablePeering(param: NetworkPeeringApiDisablePeeringRequest, options?: Configuration): Promise<PrivateIPMode> {
        return this.api.disablePeering(param.groupId, param.privateIPMode,  options).toPromise();
    }

    /**
     * Returns details about one specified network peering connection in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Network Peering Connection in One Project
     * @param param the request object
     */
    public getPeeringConnection(param: NetworkPeeringApiGetPeeringConnectionRequest, options?: Configuration): Promise<BaseNetworkPeeringConnectionSettings> {
        return this.api.getPeeringConnection(param.groupId, param.peerId,  options).toPromise();
    }

    /**
     * Returns details about one network peering container in one specified project. Network peering containers contain network peering connections. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Network Peering Container
     * @param param the request object
     */
    public getPeeringContainer(param: NetworkPeeringApiGetPeeringContainerRequest, options?: Configuration): Promise<CloudProviderContainer> {
        return this.api.getPeeringContainer(param.groupId, param.containerId,  options).toPromise();
    }

    /**
     * Returns details about all network peering connections in the specified project. Network peering allows multiple cloud-hosted applications to securely connect to the same project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Network Peering Connections in One Project
     * @param param the request object
     */
    public listPeeringConnections(param: NetworkPeeringApiListPeeringConnectionsRequest, options?: Configuration): Promise<PaginatedContainerPeer> {
        return this.api.listPeeringConnections(param.groupId, param.includeCount, param.itemsPerPage, param.pageNum, param.providerName,  options).toPromise();
    }

    /**
     * Returns details about all network peering containers in the specified project for the specified cloud provider. If you do not specify the cloud provider, MongoDB Cloud returns details about all network peering containers in the project for Amazon Web Services (AWS). To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Network Peering Containers in One Project for One Cloud Provider
     * @param param the request object
     */
    public listPeeringContainerByCloudProvider(param: NetworkPeeringApiListPeeringContainerByCloudProviderRequest, options?: Configuration): Promise<PaginatedCloudProviderContainer> {
        return this.api.listPeeringContainerByCloudProvider(param.groupId, param.providerName, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Returns details about all network peering containers in the specified project. Network peering containers contain network peering connections. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Network Peering Containers in One Project
     * @param param the request object
     */
    public listPeeringContainers(param: NetworkPeeringApiListPeeringContainersRequest, options?: Configuration): Promise<PaginatedCloudProviderContainer> {
        return this.api.listPeeringContainers(param.groupId, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Updates one specified network peering connection in the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Update One New Network Peering Connection
     * @param param the request object
     */
    public updatePeeringConnection(param: NetworkPeeringApiUpdatePeeringConnectionRequest, options?: Configuration): Promise<BaseNetworkPeeringConnectionSettings> {
        return this.api.updatePeeringConnection(param.groupId, param.peerId, param.baseNetworkPeeringConnectionSettings,  options).toPromise();
    }

    /**
     * Updates the network details and labels of one specified network peering container in the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Update One Network Peering Container
     * @param param the request object
     */
    public updatePeeringContainer(param: NetworkPeeringApiUpdatePeeringContainerRequest, options?: Configuration): Promise<CloudProviderContainer> {
        return this.api.updatePeeringContainer(param.groupId, param.containerId, param.cloudProviderContainer,  options).toPromise();
    }

    /**
     * Verifies if someone set the specified project to **Connect via Peering Only** mode. To use this resource, the requesting API Key must have the Project Read Only role.
     * Verify Connect via Peering Only Mode for One Project
     * @param param the request object
     */
    public verifyConnectViaPeeringOnlyModeForOneProject(param: NetworkPeeringApiVerifyConnectViaPeeringOnlyModeForOneProjectRequest, options?: Configuration): Promise<PrivateIPMode> {
        return this.api.verifyConnectViaPeeringOnlyModeForOneProject(param.groupId,  options).toPromise();
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
     * @type BackupOnlineArchiveCreate
     * @memberof OnlineArchiveApicreateOnlineArchive
     */
    backupOnlineArchiveCreate: BackupOnlineArchiveCreate
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
     * @type BackupOnlineArchive
     * @memberof OnlineArchiveApiupdateOnlineArchive
     */
    backupOnlineArchive: BackupOnlineArchive
}

export class ObjectOnlineArchiveApi {
    private api: ObservableOnlineArchiveApi

    public constructor(configuration: Configuration, requestFactory?: OnlineArchiveApiRequestFactory, responseProcessor?: OnlineArchiveApiResponseProcessor) {
        this.api = new ObservableOnlineArchiveApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one online archive. This archive stores data from one cluster within one project. To use this resource, the requesting API Key must have the Project Data Access Admin role.
     * Create One Online Archive
     * @param param the request object
     */
    public createOnlineArchive(param: OnlineArchiveApiCreateOnlineArchiveRequest, options?: Configuration): Promise<BackupOnlineArchive> {
        return this.api.createOnlineArchive(param.groupId, param.clusterName, param.backupOnlineArchiveCreate,  options).toPromise();
    }

    /**
     * Removes one online archive. This archive stores data from one cluster within one project. To use this resource, the requesting API Key must have the Project Data Access Admin role.
     * Remove One Online Archive
     * @param param the request object
     */
    public deleteOnlineArchive(param: OnlineArchiveApiDeleteOnlineArchiveRequest, options?: Configuration): Promise<any> {
        return this.api.deleteOnlineArchive(param.groupId, param.archiveId, param.clusterName,  options).toPromise();
    }

    /**
     * Downloads query logs for the specified online archive. To use this resource, the requesting API Key must have the Project Data Access Read Only or higher role.
     * Download Online Archive Query Logs
     * @param param the request object
     */
    public downloadOnlineArchiveQueryLogs(param: OnlineArchiveApiDownloadOnlineArchiveQueryLogsRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.downloadOnlineArchiveQueryLogs(param.groupId, param.clusterName, param.startDate, param.endDate, param.archiveOnly,  options).toPromise();
    }

    /**
     * Returns one online archive for one cluster. This archive stores data from one cluster within one project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Online Archive
     * @param param the request object
     */
    public getOnlineArchive(param: OnlineArchiveApiGetOnlineArchiveRequest, options?: Configuration): Promise<BackupOnlineArchive> {
        return this.api.getOnlineArchive(param.groupId, param.archiveId, param.clusterName,  options).toPromise();
    }

    /**
     * Returns details of all online archives. This archive stores data from one cluster within one project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Online Archives for One Cluster
     * @param param the request object
     */
    public listOnlineArchives(param: OnlineArchiveApiListOnlineArchivesRequest, options?: Configuration): Promise<PaginatedOnlineArchive> {
        return this.api.listOnlineArchives(param.groupId, param.clusterName, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Updates, pauses, or resumes one online archive. This archive stores data from one cluster within one project. To use this resource, the requesting API Key must have the Project Data Access Admin role.
     * Update One Online Archive
     * @param param the request object
     */
    public updateOnlineArchive(param: OnlineArchiveApiUpdateOnlineArchiveRequest, options?: Configuration): Promise<BackupOnlineArchive> {
        return this.api.updateOnlineArchive(param.groupId, param.archiveId, param.clusterName, param.backupOnlineArchive,  options).toPromise();
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
     * @type OrganizationInvitationRequest
     * @memberof OrganizationsApicreateOrganizationInvitation
     */
    organizationInvitationRequest: OrganizationInvitationRequest
}

export interface OrganizationsApiDeleteOrganizationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof OrganizationsApideleteOrganization
     */
    orgId: string
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
}

export interface OrganizationsApiGetOrganizationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof OrganizationsApigetOrganization
     */
    orgId: string
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
}

export interface OrganizationsApiGetOrganizationSettingsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof OrganizationsApigetOrganizationSettings
     */
    orgId: string
}

export interface OrganizationsApiListOrganizationInvitationsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof OrganizationsApilistOrganizationInvitations
     */
    orgId: string
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
     * Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @type boolean
     * @memberof OrganizationsApilistOrganizationUsers
     */
    includeCount?: boolean
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof OrganizationsApilistOrganizationUsers
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof OrganizationsApilistOrganizationUsers
     */
    pageNum?: number
}

export interface OrganizationsApiListOrganizationsRequest {
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
     * Human-readable label of the organization to use to filter the returned list. Performs a case-insensitive search for an organization that starts with the specified name.
     * @type string
     * @memberof OrganizationsApilistOrganizations
     */
    name?: string
}

export interface OrganizationsApiRemoveOrganizationUserRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof OrganizationsApiremoveOrganizationUser
     */
    orgId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the user to be deleted.
     * @type string
     * @memberof OrganizationsApiremoveOrganizationUser
     */
    userId: string
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
     * @type AtlasOrganization
     * @memberof OrganizationsApirenameOrganization
     */
    atlasOrganization: AtlasOrganization
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
     * @type OrganizationInvitationRequest
     * @memberof OrganizationsApiupdateOrganizationInvitation
     */
    organizationInvitationRequest: OrganizationInvitationRequest
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
     * @type OrganizationInvitationUpdateRequest
     * @memberof OrganizationsApiupdateOrganizationInvitationById
     */
    organizationInvitationUpdateRequest: OrganizationInvitationUpdateRequest
}

export interface OrganizationsApiUpdateOrganizationRolesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof OrganizationsApiupdateOrganizationRoles
     */
    orgId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the user to modify.
     * @type string
     * @memberof OrganizationsApiupdateOrganizationRoles
     */
    userId: string
    /**
     * Roles to update for the specified user.
     * @type UpdateOrgRolesForUser
     * @memberof OrganizationsApiupdateOrganizationRoles
     */
    updateOrgRolesForUser: UpdateOrgRolesForUser
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
}

export class ObjectOrganizationsApi {
    private api: ObservableOrganizationsApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationsApiRequestFactory, responseProcessor?: OrganizationsApiResponseProcessor) {
        this.api = new ObservableOrganizationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one organization in MongoDB Cloud and links it to the requesting API Key's organization. To use this resource, the requesting API Key must have the Organization Owner role. The requesting API Key's organization must be a paying organization. To learn more, see [Configure a Paying Organization](https://www.mongodb.com/docs/atlas/billing/#configure-a-paying-organization) in the MongoDB Atlas documentation.
     * Create One Organization
     * @param param the request object
     */
    public createOrganization(param: OrganizationsApiCreateOrganizationRequest, options?: Configuration): Promise<CreateOrganizationResponse> {
        return this.api.createOrganization(param.createOrganizationRequest,  options).toPromise();
    }

    /**
     * Invites one MongoDB Cloud user to join the specified organization. The user must accept the invitation to access information within the specified organization. To use this resource, the requesting API Key must have the Organization Owner role.
     * Invite One MongoDB Cloud User to Join One Atlas Organization
     * @param param the request object
     */
    public createOrganizationInvitation(param: OrganizationsApiCreateOrganizationInvitationRequest, options?: Configuration): Promise<OrganizationInvitation> {
        return this.api.createOrganizationInvitation(param.orgId, param.organizationInvitationRequest,  options).toPromise();
    }

    /**
     * Removes one specified organization. MongoDB Cloud imposes the following limits on this resource:   - Organizations with active projects cannot be removed.  - All projects in the organization must be removed before you can remove the organization.  To use this resource, the requesting API Key must have the Organization Owner role.
     * Remove One Organization
     * @param param the request object
     */
    public deleteOrganization(param: OrganizationsApiDeleteOrganizationRequest, options?: Configuration): Promise<any> {
        return this.api.deleteOrganization(param.orgId,  options).toPromise();
    }

    /**
     * Cancels one pending invitation sent to the specified MongoDB Cloud user to join an organization. You can't cancel an invitation that the user accepted. To use this resource, the requesting API Key must have the Organization Owner role.
     * Cancel One Organization Invitation
     * @param param the request object
     */
    public deleteOrganizationInvitation(param: OrganizationsApiDeleteOrganizationInvitationRequest, options?: Configuration): Promise<any> {
        return this.api.deleteOrganizationInvitation(param.orgId, param.invitationId,  options).toPromise();
    }

    /**
     * Returns one organization to which the requesting API key has access. To use this resource, the requesting API Key must have the Organization Member role.
     * Return One Organization
     * @param param the request object
     */
    public getOrganization(param: OrganizationsApiGetOrganizationRequest, options?: Configuration): Promise<AtlasOrganization> {
        return this.api.getOrganization(param.orgId,  options).toPromise();
    }

    /**
     * Returns the details of one pending invitation to the specified organization. To use this resource, the requesting API Key must have the Organization Owner role.
     * Return One Organization Invitation
     * @param param the request object
     */
    public getOrganizationInvitation(param: OrganizationsApiGetOrganizationInvitationRequest, options?: Configuration): Promise<OrganizationInvitation> {
        return this.api.getOrganizationInvitation(param.orgId, param.invitationId,  options).toPromise();
    }

    /**
     * Returns details about the specified organization's settings. To use this resource, the requesting API Key must have the Organization Owner role.
     * Return Settings for One Organization
     * @param param the request object
     */
    public getOrganizationSettings(param: OrganizationsApiGetOrganizationSettingsRequest, options?: Configuration): Promise<OrganizationSettings> {
        return this.api.getOrganizationSettings(param.orgId,  options).toPromise();
    }

    /**
     * Returns all pending invitations to the specified organization. To use this resource, the requesting API Key must have the Organization Owner role.
     * Return All Organization Invitations
     * @param param the request object
     */
    public listOrganizationInvitations(param: OrganizationsApiListOrganizationInvitationsRequest, options?: Configuration): Promise<Array<OrganizationInvitation>> {
        return this.api.listOrganizationInvitations(param.orgId, param.username,  options).toPromise();
    }

    /**
     * Returns multiple projects in the specified organization. Each organization can have multiple projects. Use projects to:  - Isolate different environments, such as development, test, or production environments, from each other. - Associate different MongoDB Cloud users or teams with different environments, or give different permission to MongoDB Cloud users in different environments. - Maintain separate cluster security configurations. - Create different alert settings.  To use this resource, the requesting API Key must have the Organization Member role.
     * Return One or More Projects in One Organization
     * @param param the request object
     */
    public listOrganizationProjects(param: OrganizationsApiListOrganizationProjectsRequest, options?: Configuration): Promise<PaginatedAtlasGroup> {
        return this.api.listOrganizationProjects(param.orgId, param.includeCount, param.itemsPerPage, param.pageNum, param.name,  options).toPromise();
    }

    /**
     * Returns details about the MongoDB Cloud users associated with the specified organization. Each MongoDB Cloud user returned must belong to the specified organization or to a project within the specified organization. To use this resource, the requesting API Key must have the Organization Member role.
     * Return All MongoDB Cloud Users in One Organization
     * @param param the request object
     */
    public listOrganizationUsers(param: OrganizationsApiListOrganizationUsersRequest, options?: Configuration): Promise<PaginatedAppUser> {
        return this.api.listOrganizationUsers(param.orgId, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Returns all organizations to which the requesting API Key has access. To use this resource, the requesting API Key must have the Organization Member role.
     * Return All Organizations
     * @param param the request object
     */
    public listOrganizations(param: OrganizationsApiListOrganizationsRequest = {}, options?: Configuration): Promise<PaginatedOrganization> {
        return this.api.listOrganizations(param.includeCount, param.itemsPerPage, param.pageNum, param.name,  options).toPromise();
    }

    /**
     * Removes one MongoDB Cloud user from the specified organization. To use this resource, the requesting API Key must have the Organization User Admin role.
     * Remove One MongoDB Cloud User from One Organization
     * @param param the request object
     */
    public removeOrganizationUser(param: OrganizationsApiRemoveOrganizationUserRequest, options?: Configuration): Promise<any> {
        return this.api.removeOrganizationUser(param.orgId, param.userId,  options).toPromise();
    }

    /**
     * Renames one organization. To use this resource, the requesting API Key must have the Organization Owner role.
     * Rename One Organization
     * @param param the request object
     */
    public renameOrganization(param: OrganizationsApiRenameOrganizationRequest, options?: Configuration): Promise<AtlasOrganization> {
        return this.api.renameOrganization(param.orgId, param.atlasOrganization,  options).toPromise();
    }

    /**
     * Updates the details of one pending invitation to the specified organization. To specify which invitation, provide the username of the invited user. To use this resource, the requesting API Key must have the Organization Owner role.
     * Update One Organization Invitation
     * @param param the request object
     */
    public updateOrganizationInvitation(param: OrganizationsApiUpdateOrganizationInvitationRequest, options?: Configuration): Promise<OrganizationInvitation> {
        return this.api.updateOrganizationInvitation(param.orgId, param.organizationInvitationRequest,  options).toPromise();
    }

    /**
     * Updates the details of one pending invitation to the specified organization. To specify which invitation, provide the unique identification string for that invitation. Use the Return All Organization Invitations endpoint to retrieve IDs for all pending organization invitations. To use this resource, the requesting API Key must have the Organization Owner role.
     * Update One Organization Invitation by Invitation ID
     * @param param the request object
     */
    public updateOrganizationInvitationById(param: OrganizationsApiUpdateOrganizationInvitationByIdRequest, options?: Configuration): Promise<OrganizationInvitation> {
        return this.api.updateOrganizationInvitationById(param.orgId, param.invitationId, param.organizationInvitationUpdateRequest,  options).toPromise();
    }

    /**
     * Updates the roles of the specified user in the specified organization. To specify the user to update, provide the unique 24-hexadecimal digit string that identifies the user in the specified organization. To use this resource, the requesting API Key must have the Organization User Admin role.
     * Update Organization Roles for One MongoDB Cloud User
     * @param param the request object
     */
    public updateOrganizationRoles(param: OrganizationsApiUpdateOrganizationRolesRequest, options?: Configuration): Promise<UpdateOrgRolesForUser> {
        return this.api.updateOrganizationRoles(param.orgId, param.userId, param.updateOrgRolesForUser,  options).toPromise();
    }

    /**
     * Updates the organization's settings. To use this resource, the requesting API Key must have the Organization Owner role.
     * Update Settings for One Organization
     * @param param the request object
     */
    public updateOrganizationSettings(param: OrganizationsApiUpdateOrganizationSettingsRequest, options?: Configuration): Promise<OrganizationSettings> {
        return this.api.updateOrganizationSettings(param.orgId, param.organizationSettings,  options).toPromise();
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
}

export interface PerformanceAdvisorApiEnableSlowOperationThresholdingRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof PerformanceAdvisorApienableSlowOperationThresholding
     */
    groupId: string
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
     * Length of time expressed during which the query finds slow queries among the managed namespaces in the cluster. This parameter expresses its value in milliseconds.  - If you don&#39;t specify the **since** parameter, the endpoint returns data covering the duration before the current time. - If you specify neither the **duration** nor **since** parameters, the endpoint returns data from the previous 24 hours.
     * @type number
     * @memberof PerformanceAdvisorApilistSlowQueries
     */
    duration?: number
    /**
     * Namespaces from which to retrieve slow queries. A namespace consists of one database and one collection resource written as &#x60;.&#x60;: &#x60;&lt;database&gt;.&lt;collection&gt;&#x60;. To include multiple namespaces, pass the parameter multiple times delimited with an ampersand (&#x60;&amp;&#x60;) between each namespace. Omit this parameter to return results for all namespaces.
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
     * Date and time from which the query retrieves the slow queries. This parameter expresses its value in the number of seconds that have elapsed since the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time).  - If you don&#39;t specify the **duration** parameter, the endpoint returns data covering from the **since** value and the current time. - If you specify neither the **duration** nor the **since** parameters, the endpoint returns data from the previous 24 hours.
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
     * Disables the slow operation threshold that MongoDB Cloud calculated for the specified project. The threshold determines which operations the Performance Advisor and Query Profiler considers slow. When enabled, MongoDB Cloud uses the average execution time for operations on your cluster to determine slow-running queries. As a result, the threshold is more pertinent to your cluster workload. The slow operation threshold is enabled by default for dedicated clusters (M10+). When disabled, MongoDB Cloud considers any operation that takes longer than 100 milliseconds to be slow. To use this resource, the requesting API Key must have the Project Owner role.
     * Disable Managed Slow Operation Threshold
     * @param param the request object
     */
    public disableSlowOperationThresholding(param: PerformanceAdvisorApiDisableSlowOperationThresholdingRequest, options?: Configuration): Promise<void> {
        return this.api.disableSlowOperationThresholding(param.groupId,  options).toPromise();
    }

    /**
     * Enables MongoDB Cloud to use its slow operation threshold for the specified project. The threshold determines which operations the Performance Advisor and Query Profiler considers slow. When enabled, MongoDB Cloud uses the average execution time for operations on your cluster to determine slow-running queries. As a result, the threshold is more pertinent to your cluster workload. The slow operation threshold is enabled by default for dedicated clusters (M10+). When disabled, MongoDB Cloud considers any operation that takes longer than 100 milliseconds to be slow. To use this resource, the requesting API Key must have the Project Owner role.
     * Enable Managed Slow Operation Threshold
     * @param param the request object
     */
    public enableSlowOperationThresholding(param: PerformanceAdvisorApiEnableSlowOperationThresholdingRequest, options?: Configuration): Promise<void> {
        return this.api.enableSlowOperationThresholding(param.groupId,  options).toPromise();
    }

    /**
     * Returns log lines for slow queries that the Performance Advisor and Query Profiler identified. The Performance Advisor monitors queries that MongoDB considers slow and suggests new indexes to improve query performance. MongoDB Cloud bases the threshold for slow queries on the average time of operations on your cluster. This enables workload-relevant recommendations. To use this resource, the requesting API Key must have the Project Data Access Read Write role.
     * Return Slow Queries
     * @param param the request object
     */
    public listSlowQueries(param: PerformanceAdvisorApiListSlowQueriesRequest, options?: Configuration): Promise<PerformanceAdvisorSlowQueryList> {
        return this.api.listSlowQueries(param.groupId, param.processId, param.duration, param.namespaces, param.nLogs, param.since,  options).toPromise();
    }

    /**
     * Returns up to 20 namespaces for collections experiencing slow queries on the specified host. If you specify a secondary member of a replica set that hasn't received any database read operations, the endpoint doesn't return any namespaces. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Namespaces for One Host
     * @param param the request object
     */
    public listSlowQueryNamespaces(param: PerformanceAdvisorApiListSlowQueryNamespacesRequest, options?: Configuration): Promise<Namespaces> {
        return this.api.listSlowQueryNamespaces(param.groupId, param.processId, param.duration, param.since,  options).toPromise();
    }

    /**
     * Returns the indexes that the Performance Advisor suggests. The Performance Advisor monitors queries that MongoDB considers slow and suggests new indexes to improve query performance. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Suggested Indexes
     * @param param the request object
     */
    public listSuggestedIndexes(param: PerformanceAdvisorApiListSuggestedIndexesRequest, options?: Configuration): Promise<PerformanceAdvisorResponse> {
        return this.api.listSuggestedIndexes(param.groupId, param.processId, param.includeCount, param.itemsPerPage, param.pageNum, param.duration, param.namespaces, param.nExamples, param.nIndexes, param.since,  options).toPromise();
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
     * @type string
     * @memberof PrivateEndpointServicesApicreatePrivateEndpoint
     */
    cloudProvider: string
    /**
     * Unique 24-hexadecimal digit string that identifies the private endpoint service for which you want to create a private endpoint.
     * @type string
     * @memberof PrivateEndpointServicesApicreatePrivateEndpoint
     */
    endpointServiceId: string
    /**
     * Creates one private endpoint for the specified cloud service provider.
     * @type CreateEndpointRequest
     * @memberof PrivateEndpointServicesApicreatePrivateEndpoint
     */
    createEndpointRequest: CreateEndpointRequest
}

export interface PrivateEndpointServicesApiCreatePrivateEndpointServiceRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof PrivateEndpointServicesApicreatePrivateEndpointService
     */
    groupId: string
    /**
     * Creates one private endpoint for the specified cloud service provider.
     * @type CloudProviderEndpointServiceRequest
     * @memberof PrivateEndpointServicesApicreatePrivateEndpointService
     */
    cloudProviderEndpointServiceRequest: CloudProviderEndpointServiceRequest
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
     * @type string
     * @memberof PrivateEndpointServicesApideletePrivateEndpoint
     */
    cloudProvider: string
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
     * @type string
     * @memberof PrivateEndpointServicesApideletePrivateEndpointService
     */
    cloudProvider: string
    /**
     * Unique 24-hexadecimal digit string that identifies the private endpoint service that you want to delete.
     * @type string
     * @memberof PrivateEndpointServicesApideletePrivateEndpointService
     */
    endpointServiceId: string
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
     * @type string
     * @memberof PrivateEndpointServicesApigetPrivateEndpoint
     */
    cloudProvider: string
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
     * @type string
     * @memberof PrivateEndpointServicesApigetPrivateEndpointService
     */
    cloudProvider: string
    /**
     * Unique 24-hexadecimal digit string that identifies the private endpoint service that you want to return.
     * @type string
     * @memberof PrivateEndpointServicesApigetPrivateEndpointService
     */
    endpointServiceId: string
}

export interface PrivateEndpointServicesApiGetRegionalizedPrivateEndpointSettingRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof PrivateEndpointServicesApigetRegionalizedPrivateEndpointSetting
     */
    groupId: string
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
     * @type string
     * @memberof PrivateEndpointServicesApilistPrivateEndpointServices
     */
    cloudProvider: string
}

export interface PrivateEndpointServicesApiToggleRegionalizedPrivateEndpointSettingRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof PrivateEndpointServicesApitoggleRegionalizedPrivateEndpointSetting
     */
    groupId: string
    /**
     * Enables or disables the ability to create multiple private endpoints per region in all cloud service providers in one project.
     * @type ProjectSettingItem
     * @memberof PrivateEndpointServicesApitoggleRegionalizedPrivateEndpointSetting
     */
    projectSettingItem: ProjectSettingItem
}

export class ObjectPrivateEndpointServicesApi {
    private api: ObservablePrivateEndpointServicesApi

    public constructor(configuration: Configuration, requestFactory?: PrivateEndpointServicesApiRequestFactory, responseProcessor?: PrivateEndpointServicesApiResponseProcessor) {
        this.api = new ObservablePrivateEndpointServicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one private endpoint for the specified cloud service provider. This cloud service provider manages the private endpoint service, which in turn manages the private endpoints for the project. To use this resource, the requesting API Key must have the Project Owner role. To learn more about considerations, limitations, and prerequisites, see the MongoDB documentation for setting up a private endpoint.
     * Create One Private Endpoint for One Provider
     * @param param the request object
     */
    public createPrivateEndpoint(param: PrivateEndpointServicesApiCreatePrivateEndpointRequest, options?: Configuration): Promise<PrivateLinkEndpoint> {
        return this.api.createPrivateEndpoint(param.groupId, param.cloudProvider, param.endpointServiceId, param.createEndpointRequest,  options).toPromise();
    }

    /**
     * Creates one private endpoint service for the specified cloud service provider. This cloud service provider manages the private endpoint service for the project. When you create a private endpoint service, MongoDB Cloud creates a network container in the project for the cloud provider for which you create the private endpoint service if one doesn't already exist. To use this resource, the requesting API Key must have the Project Owner role.
     * Create One Private Endpoint Service for One Provider
     * @param param the request object
     */
    public createPrivateEndpointService(param: PrivateEndpointServicesApiCreatePrivateEndpointServiceRequest, options?: Configuration): Promise<EndpointService> {
        return this.api.createPrivateEndpointService(param.groupId, param.cloudProviderEndpointServiceRequest,  options).toPromise();
    }

    /**
     * Removes one private endpoint from the specified project and private endpoint service, as managed by the specified cloud service provider. When the last private endpoint is removed from a given private endpoint service, that private endpoint service is also removed. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Private Endpoint for One Provider
     * @param param the request object
     */
    public deletePrivateEndpoint(param: PrivateEndpointServicesApiDeletePrivateEndpointRequest, options?: Configuration): Promise<any> {
        return this.api.deletePrivateEndpoint(param.groupId, param.cloudProvider, param.endpointId, param.endpointServiceId,  options).toPromise();
    }

    /**
     * Removes one private endpoint service from the specified project. This cloud service provider manages the private endpoint service that belongs to the project. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Private Endpoint Service for One Provider
     * @param param the request object
     */
    public deletePrivateEndpointService(param: PrivateEndpointServicesApiDeletePrivateEndpointServiceRequest, options?: Configuration): Promise<any> {
        return this.api.deletePrivateEndpointService(param.groupId, param.cloudProvider, param.endpointServiceId,  options).toPromise();
    }

    /**
     * Returns the connection state of the specified private endpoint. The private endpoint service manages this private endpoint which belongs to one project hosted from one cloud service provider. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Private Endpoint for One Provider
     * @param param the request object
     */
    public getPrivateEndpoint(param: PrivateEndpointServicesApiGetPrivateEndpointRequest, options?: Configuration): Promise<PrivateLinkEndpoint> {
        return this.api.getPrivateEndpoint(param.groupId, param.cloudProvider, param.endpointId, param.endpointServiceId,  options).toPromise();
    }

    /**
     * Returns the name, interfaces, and state of the specified private endpoint service from one project. The cloud service provider hosted this private endpoint service that belongs to the project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Private Endpoint Service for One Provider
     * @param param the request object
     */
    public getPrivateEndpointService(param: PrivateEndpointServicesApiGetPrivateEndpointServiceRequest, options?: Configuration): Promise<EndpointService> {
        return this.api.getPrivateEndpointService(param.groupId, param.cloudProvider, param.endpointServiceId,  options).toPromise();
    }

    /**
     * Checks whether each region in the specified cloud service provider can create multiple private endpoints per region. The cloud service provider manages the private endpoint for the project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return Regionalized Private Endpoint Status
     * @param param the request object
     */
    public getRegionalizedPrivateEndpointSetting(param: PrivateEndpointServicesApiGetRegionalizedPrivateEndpointSettingRequest, options?: Configuration): Promise<ProjectSettingItem> {
        return this.api.getRegionalizedPrivateEndpointSetting(param.groupId,  options).toPromise();
    }

    /**
     * Returns the name, interfaces, and state of all private endpoint services for the specified cloud service provider. This cloud service provider manages the private endpoint service for the project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Private Endpoint Services for One Provider
     * @param param the request object
     */
    public listPrivateEndpointServices(param: PrivateEndpointServicesApiListPrivateEndpointServicesRequest, options?: Configuration): Promise<Array<EndpointService>> {
        return this.api.listPrivateEndpointServices(param.groupId, param.cloudProvider,  options).toPromise();
    }

    /**
     * Enables or disables the ability to create multiple private endpoints per region in all cloud service providers in one project. The cloud service provider manages the private endpoints for the project. Connection strings to existing multi-region and global sharded clusters change when you enable this setting. You must update your applications to use the new connection strings. This might cause downtime. To use this resource, the requesting API Key must have the Project Owner role and all clusters in the deployment must be sharded clusters. Once enabled, you cannot create replica sets.
     * Toggle Regionalized Private Endpoint Status
     * @param param the request object
     */
    public toggleRegionalizedPrivateEndpointSetting(param: PrivateEndpointServicesApiToggleRegionalizedPrivateEndpointSettingRequest, options?: Configuration): Promise<ProjectSettingItem> {
        return this.api.toggleRegionalizedPrivateEndpointSetting(param.groupId, param.projectSettingItem,  options).toPromise();
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
     * @type Array&lt;UserAccessRoleAssignment&gt;
     * @memberof ProgrammaticAPIKeysApiaddProjectApiKey
     */
    userAccessRoleAssignment: Array<UserAccessRoleAssignment>
}

export interface ProgrammaticAPIKeysApiCreateApiKeyRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof ProgrammaticAPIKeysApicreateApiKey
     */
    orgId: string
    /**
     * Organization API Key to be created.
     * @type CreateAtlasOrganizationApiKey
     * @memberof ProgrammaticAPIKeysApicreateApiKey
     */
    createAtlasOrganizationApiKey: CreateAtlasOrganizationApiKey
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
     * @type Array&lt;UserAccessList&gt;
     * @memberof ProgrammaticAPIKeysApicreateApiKeyAccessList
     */
    userAccessList: Array<UserAccessList>
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
}

export interface ProgrammaticAPIKeysApiCreateProjectApiKeyRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProgrammaticAPIKeysApicreateProjectApiKey
     */
    groupId: string
    /**
     * Organization API key to be created and assigned to the specified project.
     * @type CreateAtlasProjectApiKey
     * @memberof ProgrammaticAPIKeysApicreateProjectApiKey
     */
    createAtlasProjectApiKey: CreateAtlasProjectApiKey
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
}

export interface ProgrammaticAPIKeysApiDeleteApiKeyAccessListEntryRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof ProgrammaticAPIKeysApideleteApiKeyAccessListEntry
     */
    orgId: string
    /**
     * Unique 24-hexadecimal digit string that identifies this organization API key for which you want to remove access list entries.
     * @type string
     * @memberof ProgrammaticAPIKeysApideleteApiKeyAccessListEntry
     */
    apiUserId: string
    /**
     * One IP address or multiple IP addresses represented as one CIDR block to limit requests to API resources in the specified organization. When adding a CIDR block with a subnet mask, such as 192.0.2.0/24, use the URL-encoded value %2F for the forward slash /.
     * @type string
     * @memberof ProgrammaticAPIKeysApideleteApiKeyAccessListEntry
     */
    ipAddress: string
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
}

export interface ProgrammaticAPIKeysApiListApiKeysRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof ProgrammaticAPIKeysApilistApiKeys
     */
    orgId: string
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
}

export interface ProgrammaticAPIKeysApiListProjectApiKeysRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProgrammaticAPIKeysApilistProjectApiKeys
     */
    groupId: string
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
     * @type UpdateAtlasOrganizationApiKey
     * @memberof ProgrammaticAPIKeysApiupdateApiKey
     */
    updateAtlasOrganizationApiKey: UpdateAtlasOrganizationApiKey
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
     * @type UpdateAtlasProjectApiKey
     * @memberof ProgrammaticAPIKeysApiupdateApiKeyRoles
     */
    updateAtlasProjectApiKey: UpdateAtlasProjectApiKey
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
}

export class ObjectProgrammaticAPIKeysApi {
    private api: ObservableProgrammaticAPIKeysApi

    public constructor(configuration: Configuration, requestFactory?: ProgrammaticAPIKeysApiRequestFactory, responseProcessor?: ProgrammaticAPIKeysApiResponseProcessor) {
        this.api = new ObservableProgrammaticAPIKeysApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Assigns the specified organization API key to the specified project. Users with the Project Owner role in the project associated with the API key can then use the organization API key to access the resources. To use this resource, the requesting API Key must have the Project User Admin role.
     * Assign One Organization API Key to One Project
     * @param param the request object
     */
    public addProjectApiKey(param: ProgrammaticAPIKeysApiAddProjectApiKeyRequest, options?: Configuration): Promise<ApiKeyUserDetails> {
        return this.api.addProjectApiKey(param.groupId, param.apiUserId, param.userAccessRoleAssignment,  options).toPromise();
    }

    /**
     * Creates one API key for the specified organization. An organization API key grants programmatic access to an organization. You can't use the API key to log into the console. To use this resource, the requesting API Key must have the Organization Owner role.
     * Create One Organization API Key
     * @param param the request object
     */
    public createApiKey(param: ProgrammaticAPIKeysApiCreateApiKeyRequest, options?: Configuration): Promise<ApiKeyUserDetails> {
        return this.api.createApiKey(param.orgId, param.createAtlasOrganizationApiKey,  options).toPromise();
    }

    /**
     * Creates the access list entries for the specified organization API key. Resources require all API requests originate from IP addresses on the API access list. To use this resource, the requesting API Key must have the Read Write role.
     * Create Access List Entries for One Organization API Key
     * @param param the request object
     */
    public createApiKeyAccessList(param: ProgrammaticAPIKeysApiCreateApiKeyAccessListRequest, options?: Configuration): Promise<PaginatedApiUserAccessList> {
        return this.api.createApiKeyAccessList(param.orgId, param.apiUserId, param.userAccessList, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Creates and assigns the specified organization API key to the specified project. Users with the Project Owner role in the project associated with the API key can use the organization API key to access the resources. To use this resource, the requesting API Key must have the Project User Admin role.
     * Create and Assign One Organization API Key to One Project
     * @param param the request object
     */
    public createProjectApiKey(param: ProgrammaticAPIKeysApiCreateProjectApiKeyRequest, options?: Configuration): Promise<ApiKeyUserDetails> {
        return this.api.createProjectApiKey(param.groupId, param.createAtlasProjectApiKey,  options).toPromise();
    }

    /**
     * Removes one organization API key from the specified organization. When you remove an API key from an organization, MongoDB Cloud also removes that key from any projects that use that key. To use this resource, the requesting API Key must have the Organization Owner role.
     * Remove One Organization API Key
     * @param param the request object
     */
    public deleteApiKey(param: ProgrammaticAPIKeysApiDeleteApiKeyRequest, options?: Configuration): Promise<any> {
        return this.api.deleteApiKey(param.orgId, param.apiUserId,  options).toPromise();
    }

    /**
     * Removes the specified access list entry from the specified organization API key. Resources require all API requests originate from the IP addresses on the API access list. To use this resource, the requesting API Key must have the Read Write role. In addition, you cannot remove the requesting IP address from the requesting organization API key.
     * Remove One Access List Entry for One Organization API Key
     * @param param the request object
     */
    public deleteApiKeyAccessListEntry(param: ProgrammaticAPIKeysApiDeleteApiKeyAccessListEntryRequest, options?: Configuration): Promise<any> {
        return this.api.deleteApiKeyAccessListEntry(param.orgId, param.apiUserId, param.ipAddress,  options).toPromise();
    }

    /**
     * Returns one organization API key. The organization API keys grant programmatic access to an organization. You can't use the API key to log into MongoDB Cloud through the user interface. To use this resource, the requesting API Key must have the  Organization Member role.
     * Return One Organization API Key
     * @param param the request object
     */
    public getApiKey(param: ProgrammaticAPIKeysApiGetApiKeyRequest, options?: Configuration): Promise<ApiKeyUserDetails> {
        return this.api.getApiKey(param.orgId, param.apiUserId,  options).toPromise();
    }

    /**
     * Returns one access list entry for the specified organization API key. Resources require  all API requests originate from IP addresses on the API access list. To use this resource, the requesting API Key must have the Organization Member role.
     * Return One Access List Entry for One Organization API Key
     * @param param the request object
     */
    public getApiKeyAccessList(param: ProgrammaticAPIKeysApiGetApiKeyAccessListRequest, options?: Configuration): Promise<UserAccessList> {
        return this.api.getApiKeyAccessList(param.orgId, param.ipAddress, param.apiUserId,  options).toPromise();
    }

    /**
     * Returns all access list entries that you configured for the specified organization API key. To use this resource, the requesting API Key must have the Organization Member role.
     * Return All Access List Entries for One Organization API Key
     * @param param the request object
     */
    public listApiKeyAccessListsEntries(param: ProgrammaticAPIKeysApiListApiKeyAccessListsEntriesRequest, options?: Configuration): Promise<PaginatedApiUserAccessList> {
        return this.api.listApiKeyAccessListsEntries(param.orgId, param.apiUserId, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Returns all organization API keys for the specified organization. The organization API keys grant programmatic access to an organization. You can't use the API key to log into MongoDB Cloud through the console. To use this resource, the requesting API Key must have the Organization Member role.
     * Return All Organization API Keys
     * @param param the request object
     */
    public listApiKeys(param: ProgrammaticAPIKeysApiListApiKeysRequest, options?: Configuration): Promise<PaginatedApiApiUser> {
        return this.api.listApiKeys(param.orgId, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Returns all organization API keys that you assigned to the specified project. Users with the Project Owner role in the project associated with the API key can use the organization API key to access the resources. To use this resource, the requesting API Key must have the Project User Admin role.
     * Return All Organization API Keys Assigned to One Project
     * @param param the request object
     */
    public listProjectApiKeys(param: ProgrammaticAPIKeysApiListProjectApiKeysRequest, options?: Configuration): Promise<PaginatedApiApiUser> {
        return this.api.listProjectApiKeys(param.groupId, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Removes one organization API key from the specified project. To use this resource, the requesting API Key must have the Project User Admin role.
     * Unassign One Organization API Key from One Project
     * @param param the request object
     */
    public removeProjectApiKey(param: ProgrammaticAPIKeysApiRemoveProjectApiKeyRequest, options?: Configuration): Promise<any> {
        return this.api.removeProjectApiKey(param.groupId, param.apiUserId,  options).toPromise();
    }

    /**
     * Updates one organization API key in the specified organization. The organization API keys  grant programmatic access to an organization. To use this resource, the requesting  API Key must have the Organization Owner role.
     * Update One Organization API Key
     * @param param the request object
     */
    public updateApiKey(param: ProgrammaticAPIKeysApiUpdateApiKeyRequest, options?: Configuration): Promise<ApiKeyUserDetails> {
        return this.api.updateApiKey(param.orgId, param.apiUserId, param.updateAtlasOrganizationApiKey,  options).toPromise();
    }

    /**
     * Updates the roles of the organization API key that you specify for the project that you specify. You must specify at least one valid role for the project. The application removes any roles that you do not include in this request if they were previously set in the organization API key that you specify for the project.
     * Update Roles of One Organization API Key to One Project
     * @param param the request object
     */
    public updateApiKeyRoles(param: ProgrammaticAPIKeysApiUpdateApiKeyRolesRequest, options?: Configuration): Promise<ApiKeyUserDetails> {
        return this.api.updateApiKeyRoles(param.groupId, param.apiUserId, param.updateAtlasProjectApiKey, param.pageNum, param.itemsPerPage, param.includeCount,  options).toPromise();
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
}

export interface ProjectIPAccessListApiListProjectIpAccessListsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectIPAccessListApilistProjectIpAccessLists
     */
    groupId: string
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
}

export class ObjectProjectIPAccessListApi {
    private api: ObservableProjectIPAccessListApi

    public constructor(configuration: Configuration, requestFactory?: ProjectIPAccessListApiRequestFactory, responseProcessor?: ProjectIPAccessListApiResponseProcessor) {
        this.api = new ObservableProjectIPAccessListApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds one or more access list entries to the specified project. MongoDB Cloud only allows client connections to the cluster from entries in the project's IP access list. Write each entry as either one IP address or one CIDR-notated block of IP addresses. To use this resource, the requesting API Key must have the Project Owner or Project Charts Admin roles. This resource replaces the whitelist resource. MongoDB Cloud removed whitelists in July 2021. Update your applications to use this new resource. The `/groups/{GROUP-ID}/accessList` endpoint manages the database IP access list. This endpoint is distinct from the `orgs/{ORG-ID}/apiKeys/{API-KEY-ID}/accesslist` endpoint, which manages the access list for MongoDB Cloud organizations. This endpoint doesn't support concurrent `POST` requests. You must submit multiple `POST` requests synchronously.
     * Add Entries to Project IP Access List
     * @param param the request object
     */
    public createProjectIpAccessList(param: ProjectIPAccessListApiCreateProjectIpAccessListRequest, options?: Configuration): Promise<PaginatedNetworkAccess> {
        return this.api.createProjectIpAccessList(param.groupId, param.networkPermissionEntry, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Removes one access list entry from the specified project's IP access list. Each entry in the project's IP access list contains one IP address, one CIDR-notated block of IP addresses, or one AWS Security Group ID. MongoDB Cloud only allows client connections to the cluster from entries in the project's IP access list. To use this resource, the requesting API Key must have the Project Owner role. This resource replaces the whitelist resource. MongoDB Cloud removed whitelists in July 2021. Update your applications to use this new resource. The `/groups/{GROUP-ID}/accessList` endpoint manages the database IP access list. This endpoint is distinct from the `orgs/{ORG-ID}/apiKeys/{API-KEY-ID}/accesslist` endpoint, which manages the access list for MongoDB Cloud organizations.
     * Remove One Entry from One Project IP Access List
     * @param param the request object
     */
    public deleteProjectIpAccessList(param: ProjectIPAccessListApiDeleteProjectIpAccessListRequest, options?: Configuration): Promise<any> {
        return this.api.deleteProjectIpAccessList(param.groupId, param.entryValue,  options).toPromise();
    }

    /**
     * Returns the status of one project IP access list entry. This resource checks if the provided project IP access list entry applies to all cloud providers serving clusters from the specified project.
     * Return Status of One Project IP Access List Entry
     * @param param the request object
     */
    public getProjectIpAccessListStatus(param: ProjectIPAccessListApiGetProjectIpAccessListStatusRequest, options?: Configuration): Promise<NetworkPermissionEntryStatus> {
        return this.api.getProjectIpAccessListStatus(param.groupId, param.entryValue,  options).toPromise();
    }

    /**
     * Returns one access list entry from the specified project's IP access list. Each entry in the project's IP access list contains either one IP address or one CIDR-notated block of IP addresses. MongoDB Cloud only allows client connections to the cluster from entries in the project's IP access list. To use this resource, the requesting API Key must have the Project Read Only or Project Charts Admin roles. This resource replaces the whitelist resource. MongoDB Cloud removed whitelists in July 2021. Update your applications to use this new resource. This endpoint (`/groups/{GROUP-ID}/accessList`) manages the Project IP Access List. It doesn't manage the access list for MongoDB Cloud organizations. TheProgrammatic API Keys endpoint (`/orgs/{ORG-ID}/apiKeys/{API-KEY-ID}/accesslist`) manages those access lists.
     * Return One Project IP Access List Entry
     * @param param the request object
     */
    public getProjectIpList(param: ProjectIPAccessListApiGetProjectIpListRequest, options?: Configuration): Promise<NetworkPermissionEntry> {
        return this.api.getProjectIpList(param.groupId, param.entryValue,  options).toPromise();
    }

    /**
     * Returns all access list entries from the specified project's IP access list. Each entry in the project's IP access list contains either one IP address or one CIDR-notated block of IP addresses. MongoDB Cloud only allows client connections to the cluster from entries in the project's IP access list. To use this resource, the requesting API Key must have the Project Read Only or Project Charts Admin roles. This resource replaces the whitelist resource. MongoDB Cloud removed whitelists in July 2021. Update your applications to use this new resource. The `/groups/{GROUP-ID}/accessList` endpoint manages the database IP access list. This endpoint is distinct from the `orgs/{ORG-ID}/apiKeys/{API-KEY-ID}/accesslist` endpoint, which manages the access list for MongoDB Cloud organizations.
     * Return Project IP Access List
     * @param param the request object
     */
    public listProjectIpAccessLists(param: ProjectIPAccessListApiListProjectIpAccessListsRequest, options?: Configuration): Promise<PaginatedNetworkAccess> {
        return this.api.listProjectIpAccessLists(param.groupId, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

}

import { ObservableProjectsApi } from "./ObservableAPI";
import { ProjectsApiRequestFactory, ProjectsApiResponseProcessor} from "../apis/ProjectsApi";

export interface ProjectsApiAddUserToProjectRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApiaddUserToProject
     */
    groupId: string
    /**
     * Adds one MongoDB Cloud user to the specified project.
     * @type GroupInvitationRequest
     * @memberof ProjectsApiaddUserToProject
     */
    groupInvitationRequest: GroupInvitationRequest
}

export interface ProjectsApiCreateProjectRequest {
    /**
     * Creates one project.
     * @type Group
     * @memberof ProjectsApicreateProject
     */
    group: Group
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
     * @type GroupInvitationRequest
     * @memberof ProjectsApicreateProjectInvitation
     */
    groupInvitationRequest: GroupInvitationRequest
}

export interface ProjectsApiDeleteProjectRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApideleteProject
     */
    groupId: string
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
}

export interface ProjectsApiDeleteProjectLimitRequest {
    /**
     * Human-readable label that identifies this project limit.  | Limit Name | Description | Default | API Override Limit | | --- | --- | --- | --- | | atlas.project.deployment.clusters | Limit on the number of clusters in this project | 25 | 90 | | atlas.project.deployment.nodesPerPrivateLinkRegion | Limit on the number of nodes per Private Link region in this project | 50 | 90 | | atlas.project.security.databaseAccess.customRoles | Limit on the number of custom roles in this project | 100 | 1400 | | atlas.project.security.databaseAccess.users | Limit on the number of database users in this project | 100 | 900 | | atlas.project.security.networkAccess.crossRegionEntries | Limit on the number of cross-region network access entries in this project | 40 | 220 | | atlas.project.security.networkAccess.entries | Limit on the number of network access entries in this project | 200 | 20 | | dataFederation.bytesProcessed.query | Limit on the number of bytes processed during a single Data Federation query | N/A | N/A | | dataFederation.bytesProcessed.daily | Limit on the number of bytes processed across all Data Federation tenants for the current day | N/A | N/A | | dataFederation.bytesProcessed.weekly | Limit on the number of bytes processed across all Data Federation tenants for the current week | N/A | N/A | | dataFederation.bytesProcessed.monthly | Limit on the number of bytes processed across all Data Federation tenants for the current month | N/A | N/A | | atlas.project.deployment.privateServiceConnectionsPerRegionGroup | Number of Private Serivce Connections per Region Group | 50 | 100| | atlas.project.deployment.privateServiceConnectionsSubnetMask | Subnet mask for GCP PSC Networks. Has lower limit of 20. | 27 | 27| 
     * @type string
     * @memberof ProjectsApideleteProjectLimit
     */
    limitName: string
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApideleteProjectLimit
     */
    groupId: string
}

export interface ProjectsApiGetProjectRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApigetProject
     */
    groupId: string
}

export interface ProjectsApiGetProjectByNameRequest {
    /**
     * Human-readable label that identifies this project.
     * @type string
     * @memberof ProjectsApigetProjectByName
     */
    groupName: string
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
}

export interface ProjectsApiGetProjectLimitRequest {
    /**
     * Human-readable label that identifies this project limit.  | Limit Name | Description | Default | API Override Limit | | --- | --- | --- | --- | | atlas.project.deployment.clusters | Limit on the number of clusters in this project | 25 | 90 | | atlas.project.deployment.nodesPerPrivateLinkRegion | Limit on the number of nodes per Private Link region in this project | 50 | 90 | | atlas.project.security.databaseAccess.customRoles | Limit on the number of custom roles in this project | 100 | 1400 | | atlas.project.security.databaseAccess.users | Limit on the number of database users in this project | 100 | 900 | | atlas.project.security.networkAccess.crossRegionEntries | Limit on the number of cross-region network access entries in this project | 40 | 220 | | atlas.project.security.networkAccess.entries | Limit on the number of network access entries in this project | 200 | 20 | | dataFederation.bytesProcessed.query | Limit on the number of bytes processed during a single Data Federation query | N/A | N/A | | dataFederation.bytesProcessed.daily | Limit on the number of bytes processed across all Data Federation tenants for the current day | N/A | N/A | | dataFederation.bytesProcessed.weekly | Limit on the number of bytes processed across all Data Federation tenants for the current week | N/A | N/A | | dataFederation.bytesProcessed.monthly | Limit on the number of bytes processed across all Data Federation tenants for the current month | N/A | N/A | | atlas.project.deployment.privateServiceConnectionsPerRegionGroup | Number of Private Serivce Connections per Region Group | 50 | 100| | atlas.project.deployment.privateServiceConnectionsSubnetMask | Subnet mask for GCP PSC Networks. Has lower limit of 20. | 27 | 27| 
     * @type string
     * @memberof ProjectsApigetProjectLimit
     */
    limitName: string
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApigetProjectLimit
     */
    groupId: string
}

export interface ProjectsApiGetProjectSettingsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApigetProjectSettings
     */
    groupId: string
}

export interface ProjectsApiListProjectInvitationsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApilistProjectInvitations
     */
    groupId: string
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
}

export interface ProjectsApiListProjectUsersRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApilistProjectUsers
     */
    groupId: string
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
}

export interface ProjectsApiReturnAllIPAddressesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApireturnAllIPAddresses
     */
    groupId: string
}

export interface ProjectsApiSetProjectLimitRequest {
    /**
     * Human-readable label that identifies this project limit.  | Limit Name | Description | Default | API Override Limit | | --- | --- | --- | --- | | atlas.project.deployment.clusters | Limit on the number of clusters in this project | 25 | 90 | | atlas.project.deployment.nodesPerPrivateLinkRegion | Limit on the number of nodes per Private Link region in this project | 50 | 90 | | atlas.project.security.databaseAccess.customRoles | Limit on the number of custom roles in this project | 100 | 1400 | | atlas.project.security.databaseAccess.users | Limit on the number of database users in this project | 100 | 900 | | atlas.project.security.networkAccess.crossRegionEntries | Limit on the number of cross-region network access entries in this project | 40 | 220 | | atlas.project.security.networkAccess.entries | Limit on the number of network access entries in this project | 200 | 20 | | dataFederation.bytesProcessed.query | Limit on the number of bytes processed during a single Data Federation query | N/A | N/A | | dataFederation.bytesProcessed.daily | Limit on the number of bytes processed across all Data Federation tenants for the current day | N/A | N/A | | dataFederation.bytesProcessed.weekly | Limit on the number of bytes processed across all Data Federation tenants for the current week | N/A | N/A | | dataFederation.bytesProcessed.monthly | Limit on the number of bytes processed across all Data Federation tenants for the current month | N/A | N/A | | atlas.project.deployment.privateServiceConnectionsPerRegionGroup | Number of Private Serivce Connections per Region Group | 50 | 100| | atlas.project.deployment.privateServiceConnectionsSubnetMask | Subnet mask for GCP PSC Networks. Has lower limit of 20. | 27 | 27| 
     * @type string
     * @memberof ProjectsApisetProjectLimit
     */
    limitName: string
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApisetProjectLimit
     */
    groupId: string
    /**
     * Limit to update.
     * @type DataFederationLimit
     * @memberof ProjectsApisetProjectLimit
     */
    dataFederationLimit: DataFederationLimit
}

export interface ProjectsApiUpdateProjectRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApiupdateProject
     */
    groupId: string
    /**
     * Project to update.
     * @type GroupName
     * @memberof ProjectsApiupdateProject
     */
    groupName: GroupName
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
     * @type GroupInvitationRequest
     * @memberof ProjectsApiupdateProjectInvitation
     */
    groupInvitationRequest: GroupInvitationRequest
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
     * @type GroupInvitationUpdateRequest
     * @memberof ProjectsApiupdateProjectInvitationById
     */
    groupInvitationUpdateRequest: GroupInvitationUpdateRequest
}

export interface ProjectsApiUpdateProjectRolesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApiupdateProjectRoles
     */
    groupId: string
    /**
     * Unique 24-hexadecimal digit string that identifies the user to modify.
     * @type string
     * @memberof ProjectsApiupdateProjectRoles
     */
    userId: string
    /**
     * Roles to update for the specified user.
     * @type UpdateGroupRolesForUser
     * @memberof ProjectsApiupdateProjectRoles
     */
    updateGroupRolesForUser: UpdateGroupRolesForUser
}

export interface ProjectsApiUpdateProjectSettingsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ProjectsApiupdateProjectSettings
     */
    groupId: string
    /**
     * Settings to update.
     * @type GroupSettings
     * @memberof ProjectsApiupdateProjectSettings
     */
    groupSettings: GroupSettings
}

export class ObjectProjectsApi {
    private api: ObservableProjectsApi

    public constructor(configuration: Configuration, requestFactory?: ProjectsApiRequestFactory, responseProcessor?: ProjectsApiResponseProcessor) {
        this.api = new ObservableProjectsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds one MongoDB Cloud user to the specified project. If the MongoDB Cloud user is not a member of the project's organization, then the user must accept their invitation to the organization to access information within the specified project. To use this resource, the requesting API Key must have the Group User Admin role.
     * Add One MongoDB Cloud User to One Project
     * @param param the request object
     */
    public addUserToProject(param: ProjectsApiAddUserToProjectRequest, options?: Configuration): Promise<OrganizationInvitation> {
        return this.api.addUserToProject(param.groupId, param.groupInvitationRequest,  options).toPromise();
    }

    /**
     * Creates one project. Projects group clusters into logical collections that support an application environment, workload, or both. Each project can have its own users, teams, security, and alert settings. To use this resource, the requesting API Key must have the Read Write role.
     * Create One Project
     * @param param the request object
     */
    public createProject(param: ProjectsApiCreateProjectRequest, options?: Configuration): Promise<Group> {
        return this.api.createProject(param.group, param.projectOwnerId,  options).toPromise();
    }

    /**
     * Invites one MongoDB Cloud user to join the specified project. The MongoDB Cloud user must accept the invitation to access information within the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Invite One MongoDB Cloud User to Join One Project
     * @param param the request object
     */
    public createProjectInvitation(param: ProjectsApiCreateProjectInvitationRequest, options?: Configuration): Promise<GroupInvitation> {
        return this.api.createProjectInvitation(param.groupId, param.groupInvitationRequest,  options).toPromise();
    }

    /**
     * Removes the specified project. Projects group clusters into logical collections that support an application environment, workload, or both. Each project can have its own users, teams, security, and alert settings. You can delete a project only if there are no Online Archives for the clusters in the project. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Project
     * @param param the request object
     */
    public deleteProject(param: ProjectsApiDeleteProjectRequest, options?: Configuration): Promise<any> {
        return this.api.deleteProject(param.groupId,  options).toPromise();
    }

    /**
     * Cancels one pending invitation sent to the specified MongoDB Cloud user to join a project. You can't cancel an invitation that the user accepted. To use this resource, the requesting API Key must have the Project Owner role.
     * Cancel One Project Invitation
     * @param param the request object
     */
    public deleteProjectInvitation(param: ProjectsApiDeleteProjectInvitationRequest, options?: Configuration): Promise<any> {
        return this.api.deleteProjectInvitation(param.groupId, param.invitationId,  options).toPromise();
    }

    /**
     * Removes the specified project limit. Depending on the limit, Atlas either resets the limit to its default value or removes the limit entirely. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Project Limit
     * @param param the request object
     */
    public deleteProjectLimit(param: ProjectsApiDeleteProjectLimitRequest, options?: Configuration): Promise<any> {
        return this.api.deleteProjectLimit(param.limitName, param.groupId,  options).toPromise();
    }

    /**
     * Returns details about the specified project. Projects group clusters into logical collections that support an application environment, workload, or both. Each project can have its own users, teams, security, and alert settings. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Project
     * @param param the request object
     */
    public getProject(param: ProjectsApiGetProjectRequest, options?: Configuration): Promise<Group> {
        return this.api.getProject(param.groupId,  options).toPromise();
    }

    /**
     * Returns details about the specified project. Projects group clusters into logical collections that support an application environment, workload, or both. Each project can have its own users, teams, security, and alert settings. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Project using Its Name
     * @param param the request object
     */
    public getProjectByName(param: ProjectsApiGetProjectByNameRequest, options?: Configuration): Promise<Group> {
        return this.api.getProjectByName(param.groupName,  options).toPromise();
    }

    /**
     * Returns the details of one pending invitation to the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Return One Project Invitation
     * @param param the request object
     */
    public getProjectInvitation(param: ProjectsApiGetProjectInvitationRequest, options?: Configuration): Promise<GroupInvitation> {
        return this.api.getProjectInvitation(param.groupId, param.invitationId,  options).toPromise();
    }

    /**
     * Returns the specified limit for the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Limit for One Project
     * @param param the request object
     */
    public getProjectLimit(param: ProjectsApiGetProjectLimitRequest, options?: Configuration): Promise<DataFederationLimit> {
        return this.api.getProjectLimit(param.limitName, param.groupId,  options).toPromise();
    }

    /**
     * Returns details about the specified project's settings. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Project Settings
     * @param param the request object
     */
    public getProjectSettings(param: ProjectsApiGetProjectSettingsRequest, options?: Configuration): Promise<GroupSettings> {
        return this.api.getProjectSettings(param.groupId,  options).toPromise();
    }

    /**
     * Returns all pending invitations to the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Return All Project Invitations
     * @param param the request object
     */
    public listProjectInvitations(param: ProjectsApiListProjectInvitationsRequest, options?: Configuration): Promise<Array<GroupInvitation>> {
        return this.api.listProjectInvitations(param.groupId, param.username,  options).toPromise();
    }

    /**
     * Returns all the limits for the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Limits for One Project
     * @param param the request object
     */
    public listProjectLimits(param: ProjectsApiListProjectLimitsRequest, options?: Configuration): Promise<Array<DataFederationLimit>> {
        return this.api.listProjectLimits(param.groupId,  options).toPromise();
    }

    /**
     * Returns details about all users in the specified project. Users belong to an organization. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Users in One Project
     * @param param the request object
     */
    public listProjectUsers(param: ProjectsApiListProjectUsersRequest, options?: Configuration): Promise<PaginatedAppUser> {
        return this.api.listProjectUsers(param.groupId, param.includeCount, param.itemsPerPage, param.pageNum, param.flattenTeams, param.includeOrgUsers,  options).toPromise();
    }

    /**
     * Returns details about all projects. Projects group clusters into logical collections that support an application environment, workload, or both. Each project can have its own users, teams, security, and alert settings. To use this resource, the requesting API Key must have the Read Write role.
     * Return All Projects
     * @param param the request object
     */
    public listProjects(param: ProjectsApiListProjectsRequest = {}, options?: Configuration): Promise<PaginatedAtlasGroup> {
        return this.api.listProjects(param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Removes the specified user from the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One User from One Project
     * @param param the request object
     */
    public removeProjectUser(param: ProjectsApiRemoveProjectUserRequest, options?: Configuration): Promise<void> {
        return this.api.removeProjectUser(param.groupId, param.userId,  options).toPromise();
    }

    /**
     * Returns all IP addresses for this project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All IP Addresses for One Project
     * @param param the request object
     */
    public returnAllIPAddresses(param: ProjectsApiReturnAllIPAddressesRequest, options?: Configuration): Promise<Array<GroupIPAddresses>> {
        return this.api.returnAllIPAddresses(param.groupId,  options).toPromise();
    }

    /**
     * Sets the specified project limit. To use this resource, the requesting API Key must have the Project Owner role.  **NOTE**: Increasing the following configuration limits might lead to slower response times in the MongoDB Cloud UI or increased user management overhead leading to authentication or authorization re-architecture. If possible, we recommend that you create additional projects to gain access to more of these resources for a more sustainable growth pattern.
     * Set One Project Limit
     * @param param the request object
     */
    public setProjectLimit(param: ProjectsApiSetProjectLimitRequest, options?: Configuration): Promise<DataFederationLimit> {
        return this.api.setProjectLimit(param.limitName, param.groupId, param.dataFederationLimit,  options).toPromise();
    }

    /**
     * Updates the human-readable label that identifies the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Update One Project Name
     * @param param the request object
     */
    public updateProject(param: ProjectsApiUpdateProjectRequest, options?: Configuration): Promise<Group> {
        return this.api.updateProject(param.groupId, param.groupName,  options).toPromise();
    }

    /**
     * Updates the details of one pending invitation to the specified project. To specify which invitation to update, provide the username of the invited user. To use this resource, the requesting API Key must have the Project Owner role.
     * Update One Project Invitation
     * @param param the request object
     */
    public updateProjectInvitation(param: ProjectsApiUpdateProjectInvitationRequest, options?: Configuration): Promise<GroupInvitation> {
        return this.api.updateProjectInvitation(param.groupId, param.groupInvitationRequest,  options).toPromise();
    }

    /**
     * Updates the details of one pending invitation to the specified project. To specify which invitation to update, provide the unique identification string for that invitation. Use the Return All Project Invitations endpoint to retrieve IDs for all pending project invitations. To use this resource, the requesting API Key must have the Project Owner role.
     * Update One Project Invitation by Invitation ID
     * @param param the request object
     */
    public updateProjectInvitationById(param: ProjectsApiUpdateProjectInvitationByIdRequest, options?: Configuration): Promise<GroupInvitation> {
        return this.api.updateProjectInvitationById(param.groupId, param.invitationId, param.groupInvitationUpdateRequest,  options).toPromise();
    }

    /**
     * Updates the roles of the specified user in the specified project. To specify the user to update, provide the unique 24-hexadecimal digit string that identifies the user in the specified project. To use this resource, the requesting API Key must have the Group User Admin role.
     * Update Project Roles for One MongoDB Cloud User
     * @param param the request object
     */
    public updateProjectRoles(param: ProjectsApiUpdateProjectRolesRequest, options?: Configuration): Promise<UpdateGroupRolesForUser> {
        return this.api.updateProjectRoles(param.groupId, param.userId, param.updateGroupRolesForUser,  options).toPromise();
    }

    /**
     * Updates the settings of the specified project. You can update any of the options available. MongoDB cloud only updates the options provided in the request. To use this resource, the requesting API Key must have the Project Owner role.
     * Update One Project Settings
     * @param param the request object
     */
    public updateProjectSettings(param: ProjectsApiUpdateProjectSettingsRequest, options?: Configuration): Promise<GroupSettings> {
        return this.api.updateProjectSettings(param.groupId, param.groupSettings,  options).toPromise();
    }

}

import { ObservablePushBasedLogExportApi } from "./ObservableAPI";
import { PushBasedLogExportApiRequestFactory, PushBasedLogExportApiResponseProcessor} from "../apis/PushBasedLogExportApi";

export interface PushBasedLogExportApiCreatePushBasedLogConfigurationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof PushBasedLogExportApicreatePushBasedLogConfiguration
     */
    groupId: string
    /**
     * The project configuration details. The S3 bucket name, IAM role ID, and prefix path fields are required.
     * @type PushBasedLogExportProject
     * @memberof PushBasedLogExportApicreatePushBasedLogConfiguration
     */
    pushBasedLogExportProject: PushBasedLogExportProject
}

export interface PushBasedLogExportApiDeletePushBasedLogConfigurationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof PushBasedLogExportApideletePushBasedLogConfiguration
     */
    groupId: string
}

export interface PushBasedLogExportApiGetPushBasedLogConfigurationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof PushBasedLogExportApigetPushBasedLogConfiguration
     */
    groupId: string
}

export interface PushBasedLogExportApiUpdatePushBasedLogConfigurationRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof PushBasedLogExportApiupdatePushBasedLogConfiguration
     */
    groupId: string
    /**
     * The project configuration details. The S3 bucket name, IAM role ID, and prefix path fields are the only fields that may be specified. Fields left unspecified will not be modified.
     * @type PushBasedLogExportProject
     * @memberof PushBasedLogExportApiupdatePushBasedLogConfiguration
     */
    pushBasedLogExportProject: PushBasedLogExportProject
}

export class ObjectPushBasedLogExportApi {
    private api: ObservablePushBasedLogExportApi

    public constructor(configuration: Configuration, requestFactory?: PushBasedLogExportApiRequestFactory, responseProcessor?: PushBasedLogExportApiResponseProcessor) {
        this.api = new ObservablePushBasedLogExportApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Configures the project level settings for the push-based log export feature.
     * Enable the push-based log export feature for a project
     * @param param the request object
     */
    public createPushBasedLogConfiguration(param: PushBasedLogExportApiCreatePushBasedLogConfigurationRequest, options?: Configuration): Promise<void> {
        return this.api.createPushBasedLogConfiguration(param.groupId, param.pushBasedLogExportProject,  options).toPromise();
    }

    /**
     * Disables the push-based log export feature by resetting the project level settings to its default configuration.
     * Disable the push-based log export feature for a project
     * @param param the request object
     */
    public deletePushBasedLogConfiguration(param: PushBasedLogExportApiDeletePushBasedLogConfigurationRequest, options?: Configuration): Promise<void> {
        return this.api.deletePushBasedLogConfiguration(param.groupId,  options).toPromise();
    }

    /**
     * Fetches the current project level settings for the push-based log export feature.
     * Get the push-based log export configuration for a project
     * @param param the request object
     */
    public getPushBasedLogConfiguration(param: PushBasedLogExportApiGetPushBasedLogConfigurationRequest, options?: Configuration): Promise<PushBasedLogExportProject> {
        return this.api.getPushBasedLogConfiguration(param.groupId,  options).toPromise();
    }

    /**
     * Updates the project level settings for the push-based log export feature.
     * Update the push-based log export feature for a project
     * @param param the request object
     */
    public updatePushBasedLogConfiguration(param: PushBasedLogExportApiUpdatePushBasedLogConfigurationRequest, options?: Configuration): Promise<void> {
        return this.api.updatePushBasedLogConfiguration(param.groupId, param.pushBasedLogExportProject,  options).toPromise();
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
     * @type DatabaseRollingIndexRequest
     * @memberof RollingIndexApicreateRollingIndex
     */
    databaseRollingIndexRequest: DatabaseRollingIndexRequest
}

export class ObjectRollingIndexApi {
    private api: ObservableRollingIndexApi

    public constructor(configuration: Configuration, requestFactory?: RollingIndexApiRequestFactory, responseProcessor?: RollingIndexApiResponseProcessor) {
        this.api = new ObservableRollingIndexApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an index on the cluster identified by its name in a rolling manner. Creating the index in this way allows index builds on one replica set member as a standalone at a time, starting with the secondary members. Creating indexes in this way requires at least one replica set election. To use this resource, the requesting API Key must have the Project Data Access Admin role.
     * Create One Rolling Index
     * @param param the request object
     */
    public createRollingIndex(param: RollingIndexApiCreateRollingIndexRequest, options?: Configuration): Promise<void> {
        return this.api.createRollingIndex(param.groupId, param.clusterName, param.databaseRollingIndexRequest,  options).toPromise();
    }

}

import { ObservableRootApi } from "./ObservableAPI";
import { RootApiRequestFactory, RootApiResponseProcessor} from "../apis/RootApi";

export interface RootApiGetSystemStatusRequest {
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
    public getSystemStatus(param: RootApiGetSystemStatusRequest = {}, options?: Configuration): Promise<SystemStatus> {
        return this.api.getSystemStatus( options).toPromise();
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
}

export interface ServerlessInstancesApiListServerlessInstancesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ServerlessInstancesApilistServerlessInstances
     */
    groupId: string
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
}

export class ObjectServerlessInstancesApi {
    private api: ObservableServerlessInstancesApi

    public constructor(configuration: Configuration, requestFactory?: ServerlessInstancesApiRequestFactory, responseProcessor?: ServerlessInstancesApiResponseProcessor) {
        this.api = new ObservableServerlessInstancesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one serverless instance in the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Create One Serverless Instance in One Project
     * @param param the request object
     */
    public createServerlessInstance(param: ServerlessInstancesApiCreateServerlessInstanceRequest, options?: Configuration): Promise<ServerlessInstanceDescription> {
        return this.api.createServerlessInstance(param.groupId, param.serverlessInstanceDescriptionCreate,  options).toPromise();
    }

    /**
     * Removes one serverless instance from the specified project. The serverless instance must have termination protection disabled in order to be deleted. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Serverless Instance from One Project
     * @param param the request object
     */
    public deleteServerlessInstance(param: ServerlessInstancesApiDeleteServerlessInstanceRequest, options?: Configuration): Promise<any> {
        return this.api.deleteServerlessInstance(param.groupId, param.name,  options).toPromise();
    }

    /**
     * Returns details for one serverless instance in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Serverless Instance from One Project
     * @param param the request object
     */
    public getServerlessInstance(param: ServerlessInstancesApiGetServerlessInstanceRequest, options?: Configuration): Promise<ServerlessInstanceDescription> {
        return this.api.getServerlessInstance(param.groupId, param.name,  options).toPromise();
    }

    /**
     * Returns details for all serverless instances in the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Serverless Instances from One Project
     * @param param the request object
     */
    public listServerlessInstances(param: ServerlessInstancesApiListServerlessInstancesRequest, options?: Configuration): Promise<PaginatedServerlessInstanceDescription> {
        return this.api.listServerlessInstances(param.groupId, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Updates one serverless instance in the specified project. To use this resource, the requesting API Key must have the Project Owner role.
     * Update One Serverless Instance in One Project
     * @param param the request object
     */
    public updateServerlessInstance(param: ServerlessInstancesApiUpdateServerlessInstanceRequest, options?: Configuration): Promise<ServerlessInstanceDescription> {
        return this.api.updateServerlessInstance(param.groupId, param.name, param.serverlessInstanceDescriptionUpdate,  options).toPromise();
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
     * @type ServerlessTenantCreateRequest
     * @memberof ServerlessPrivateEndpointsApicreateServerlessPrivateEndpoint
     */
    serverlessTenantCreateRequest: ServerlessTenantCreateRequest
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
     * Object used for update.
     * @type ServerlessTenantEndpointUpdate
     * @memberof ServerlessPrivateEndpointsApiupdateServerlessPrivateEndpoint
     */
    serverlessTenantEndpointUpdate: ServerlessTenantEndpointUpdate
}

export class ObjectServerlessPrivateEndpointsApi {
    private api: ObservableServerlessPrivateEndpointsApi

    public constructor(configuration: Configuration, requestFactory?: ServerlessPrivateEndpointsApiRequestFactory, responseProcessor?: ServerlessPrivateEndpointsApiResponseProcessor) {
        this.api = new ObservableServerlessPrivateEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one private endpoint for one serverless instance. To use this resource, the requesting API Key must have the Project Owner role.   A new endpoint won't be immediately available after creation.  Read the steps in the linked tutorial for detailed guidance.
     * Create One Private Endpoint for One Serverless Instance
     * @param param the request object
     */
    public createServerlessPrivateEndpoint(param: ServerlessPrivateEndpointsApiCreateServerlessPrivateEndpointRequest, options?: Configuration): Promise<ServerlessTenantEndpoint> {
        return this.api.createServerlessPrivateEndpoint(param.groupId, param.instanceName, param.serverlessTenantCreateRequest,  options).toPromise();
    }

    /**
     * Remove one private endpoint from one serverless instance. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Private Endpoint for One Serverless Instance
     * @param param the request object
     */
    public deleteServerlessPrivateEndpoint(param: ServerlessPrivateEndpointsApiDeleteServerlessPrivateEndpointRequest, options?: Configuration): Promise<any> {
        return this.api.deleteServerlessPrivateEndpoint(param.groupId, param.instanceName, param.endpointId,  options).toPromise();
    }

    /**
     * Return one private endpoint for one serverless instance. Identify this endpoint using its unique ID. You must have at least the Project Read Only role for the project to successfully call this resource.
     * Return One Private Endpoint for One Serverless Instance
     * @param param the request object
     */
    public getServerlessPrivateEndpoint(param: ServerlessPrivateEndpointsApiGetServerlessPrivateEndpointRequest, options?: Configuration): Promise<ServerlessTenantEndpoint> {
        return this.api.getServerlessPrivateEndpoint(param.groupId, param.instanceName, param.endpointId,  options).toPromise();
    }

    /**
     * Returns all private endpoints for one serverless instance. You must have at least the Project Read Only role for the project to successfully call this resource.
     * Return All Private Endpoints for One Serverless Instance
     * @param param the request object
     */
    public listServerlessPrivateEndpoints(param: ServerlessPrivateEndpointsApiListServerlessPrivateEndpointsRequest, options?: Configuration): Promise<Array<ServerlessTenantEndpoint>> {
        return this.api.listServerlessPrivateEndpoints(param.groupId, param.instanceName,  options).toPromise();
    }

    /**
     * Updates one private endpoint for one serverless instance. To use this resource, the requesting API Key must have the Project Owner role.
     * Update One Private Endpoint for One Serverless Instance
     * @param param the request object
     */
    public updateServerlessPrivateEndpoint(param: ServerlessPrivateEndpointsApiUpdateServerlessPrivateEndpointRequest, options?: Configuration): Promise<ServerlessTenantEndpoint> {
        return this.api.updateServerlessPrivateEndpoint(param.groupId, param.instanceName, param.endpointId, param.serverlessTenantEndpointUpdate,  options).toPromise();
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
}

export class ObjectSharedTierRestoreJobsApi {
    private api: ObservableSharedTierRestoreJobsApi

    public constructor(configuration: Configuration, requestFactory?: SharedTierRestoreJobsApiRequestFactory, responseProcessor?: SharedTierRestoreJobsApiResponseProcessor) {
        this.api = new ObservableSharedTierRestoreJobsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Restores the specified cluster. MongoDB Cloud limits which clusters can be the target clusters of a restore. The target cluster can't use encryption at rest, run a major release MongoDB version different than the snapshot, or receive client requests during restores. MongoDB Cloud deletes all existing data on the target cluster prior to the restore operation. To use this resource, the requesting API Key must have the Project Owner role.
     * Create One Restore Job from One M2 or M5 Cluster
     * @param param the request object
     */
    public createSharedClusterBackupRestoreJob(param: SharedTierRestoreJobsApiCreateSharedClusterBackupRestoreJobRequest, options?: Configuration): Promise<TenantRestore> {
        return this.api.createSharedClusterBackupRestoreJob(param.clusterName, param.groupId, param.tenantRestore,  options).toPromise();
    }

    /**
     * Returns the specified restore job. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Restore Job for One M2 or M5 Cluster
     * @param param the request object
     */
    public getSharedClusterBackupRestoreJob(param: SharedTierRestoreJobsApiGetSharedClusterBackupRestoreJobRequest, options?: Configuration): Promise<TenantRestore> {
        return this.api.getSharedClusterBackupRestoreJob(param.clusterName, param.groupId, param.restoreId,  options).toPromise();
    }

    /**
     * Returns all restore jobs for the specified M2 or M5 cluster. Restore jobs restore a cluster using a snapshot. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Restore Jobs for One M2 or M5 Cluster
     * @param param the request object
     */
    public listSharedClusterBackupRestoreJobs(param: SharedTierRestoreJobsApiListSharedClusterBackupRestoreJobsRequest, options?: Configuration): Promise<PaginatedTenantRestore> {
        return this.api.listSharedClusterBackupRestoreJobs(param.clusterName, param.groupId,  options).toPromise();
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
}

export class ObjectSharedTierSnapshotsApi {
    private api: ObservableSharedTierSnapshotsApi

    public constructor(configuration: Configuration, requestFactory?: SharedTierSnapshotsApiRequestFactory, responseProcessor?: SharedTierSnapshotsApiResponseProcessor) {
        this.api = new ObservableSharedTierSnapshotsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Requests one snapshot for the specified shared cluster. This resource returns a `snapshotURL` that you can use to download the snapshot. This `snapshotURL` remains active for four hours after you make the request. To use this resource, the requesting API Key must have the Project Owner role.
     * Download One M2 or M5 Cluster Snapshot
     * @param param the request object
     */
    public downloadSharedClusterBackup(param: SharedTierSnapshotsApiDownloadSharedClusterBackupRequest, options?: Configuration): Promise<TenantRestore> {
        return this.api.downloadSharedClusterBackup(param.clusterName, param.groupId, param.tenantRestore,  options).toPromise();
    }

    /**
     * Returns details for one snapshot for the specified shared cluster. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Snapshot for One M2 or M5 Cluster
     * @param param the request object
     */
    public getSharedClusterBackup(param: SharedTierSnapshotsApiGetSharedClusterBackupRequest, options?: Configuration): Promise<BackupTenantSnapshot> {
        return this.api.getSharedClusterBackup(param.groupId, param.clusterName, param.snapshotId,  options).toPromise();
    }

    /**
     * Returns details for all snapshots for the specified shared cluster. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Snapshots for One M2 or M5 Cluster
     * @param param the request object
     */
    public listSharedClusterBackups(param: SharedTierSnapshotsApiListSharedClusterBackupsRequest, options?: Configuration): Promise<PaginatedTenantSnapshot> {
        return this.api.listSharedClusterBackups(param.groupId, param.clusterName,  options).toPromise();
    }

}

import { ObservableStreamsApi } from "./ObservableAPI";
import { StreamsApiRequestFactory, StreamsApiResponseProcessor} from "../apis/StreamsApi";

export interface StreamsApiCreateStreamConnectionRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof StreamsApicreateStreamConnection
     */
    groupId: string
    /**
     * Human-readable label that identifies the stream instance.
     * @type string
     * @memberof StreamsApicreateStreamConnection
     */
    tenantName: string
    /**
     * Details to create one connection for a streams instance in the specified project.
     * @type StreamsConnection
     * @memberof StreamsApicreateStreamConnection
     */
    streamsConnection: StreamsConnection
}

export interface StreamsApiCreateStreamInstanceRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof StreamsApicreateStreamInstance
     */
    groupId: string
    /**
     * Details to create one streams instance in the specified project.
     * @type StreamsTenant
     * @memberof StreamsApicreateStreamInstance
     */
    streamsTenant: StreamsTenant
}

export interface StreamsApiDeleteStreamConnectionRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof StreamsApideleteStreamConnection
     */
    groupId: string
    /**
     * Human-readable label that identifies the stream instance.
     * @type string
     * @memberof StreamsApideleteStreamConnection
     */
    tenantName: string
    /**
     * Human-readable label that identifies the stream connection.
     * @type string
     * @memberof StreamsApideleteStreamConnection
     */
    connectionName: string
}

export interface StreamsApiDeleteStreamInstanceRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof StreamsApideleteStreamInstance
     */
    groupId: string
    /**
     * Human-readable label that identifies the stream instance to delete.
     * @type string
     * @memberof StreamsApideleteStreamInstance
     */
    tenantName: string
}

export interface StreamsApiGetStreamConnectionRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof StreamsApigetStreamConnection
     */
    groupId: string
    /**
     * Human-readable label that identifies the stream instance to return.
     * @type string
     * @memberof StreamsApigetStreamConnection
     */
    tenantName: string
    /**
     * Human-readable label that identifies the stream connection to return.
     * @type string
     * @memberof StreamsApigetStreamConnection
     */
    connectionName: string
}

export interface StreamsApiGetStreamInstanceRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof StreamsApigetStreamInstance
     */
    groupId: string
    /**
     * Human-readable label that identifies the stream instance to return.
     * @type string
     * @memberof StreamsApigetStreamInstance
     */
    tenantName: string
    /**
     * Flag to indicate whether connections information should be included in the stream instance.
     * @type boolean
     * @memberof StreamsApigetStreamInstance
     */
    includeConnections?: boolean
}

export interface StreamsApiListStreamConnectionsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof StreamsApilistStreamConnections
     */
    groupId: string
    /**
     * Human-readable label that identifies the stream instance.
     * @type string
     * @memberof StreamsApilistStreamConnections
     */
    tenantName: string
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof StreamsApilistStreamConnections
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof StreamsApilistStreamConnections
     */
    pageNum?: number
}

export interface StreamsApiListStreamInstancesRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof StreamsApilistStreamInstances
     */
    groupId: string
    /**
     * Number of items that the response returns per page.
     * @type number
     * @memberof StreamsApilistStreamInstances
     */
    itemsPerPage?: number
    /**
     * Number of the page that displays the current set of the total objects that the response returns.
     * @type number
     * @memberof StreamsApilistStreamInstances
     */
    pageNum?: number
}

export interface StreamsApiUpdateStreamConnectionRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof StreamsApiupdateStreamConnection
     */
    groupId: string
    /**
     * Human-readable label that identifies the stream instance.
     * @type string
     * @memberof StreamsApiupdateStreamConnection
     */
    tenantName: string
    /**
     * Human-readable label that identifies the stream connection.
     * @type string
     * @memberof StreamsApiupdateStreamConnection
     */
    connectionName: string
    /**
     * Details to update one connection for a streams instance in the specified project.
     * @type StreamsConnection
     * @memberof StreamsApiupdateStreamConnection
     */
    streamsConnection: StreamsConnection
}

export interface StreamsApiUpdateStreamInstanceRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof StreamsApiupdateStreamInstance
     */
    groupId: string
    /**
     * Human-readable label that identifies the stream instance to update.
     * @type string
     * @memberof StreamsApiupdateStreamInstance
     */
    tenantName: string
    /**
     * Details of the new data process region to update in the streams instance.
     * @type StreamsDataProcessRegion
     * @memberof StreamsApiupdateStreamInstance
     */
    streamsDataProcessRegion: StreamsDataProcessRegion
}

export class ObjectStreamsApi {
    private api: ObservableStreamsApi

    public constructor(configuration: Configuration, requestFactory?: StreamsApiRequestFactory, responseProcessor?: StreamsApiResponseProcessor) {
        this.api = new ObservableStreamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates one connection for a stream instance in the specified project. To use this resource, the requesting API Key must have the Project Owner roles.
     * Create One Connection
     * @param param the request object
     */
    public createStreamConnection(param: StreamsApiCreateStreamConnectionRequest, options?: Configuration): Promise<StreamsConnection> {
        return this.api.createStreamConnection(param.groupId, param.tenantName, param.streamsConnection,  options).toPromise();
    }

    /**
     * Creates one stream instance in the specified project. To use this resource, the requesting API Key must have the Project Owner roles.
     * Create One Stream Instance
     * @param param the request object
     */
    public createStreamInstance(param: StreamsApiCreateStreamInstanceRequest, options?: Configuration): Promise<StreamsTenant> {
        return this.api.createStreamInstance(param.groupId, param.streamsTenant,  options).toPromise();
    }

    /**
     * Delete one connection of the specified stream instance. To use this resource, the requesting API Key must have the Project Owner roles.
     * Delete One Stream Connection
     * @param param the request object
     */
    public deleteStreamConnection(param: StreamsApiDeleteStreamConnectionRequest, options?: Configuration): Promise<any> {
        return this.api.deleteStreamConnection(param.groupId, param.tenantName, param.connectionName,  options).toPromise();
    }

    /**
     * Delete one stream instance in the specified project. To use this resource, the requesting API Key must have the Project Owner roles.
     * Delete One Stream Instance
     * @param param the request object
     */
    public deleteStreamInstance(param: StreamsApiDeleteStreamInstanceRequest, options?: Configuration): Promise<any> {
        return this.api.deleteStreamInstance(param.groupId, param.tenantName,  options).toPromise();
    }

    /**
     * Returns the details of one stream connection within the specified stream instance. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Stream Connection
     * @param param the request object
     */
    public getStreamConnection(param: StreamsApiGetStreamConnectionRequest, options?: Configuration): Promise<StreamsConnection> {
        return this.api.getStreamConnection(param.groupId, param.tenantName, param.connectionName,  options).toPromise();
    }

    /**
     * Returns the details of one stream instance within the specified project. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return One Stream Instance
     * @param param the request object
     */
    public getStreamInstance(param: StreamsApiGetStreamInstanceRequest, options?: Configuration): Promise<StreamsTenant> {
        return this.api.getStreamInstance(param.groupId, param.tenantName, param.includeConnections,  options).toPromise();
    }

    /**
     * Returns all connections of the stream instance for the specified project.
     * Return All Connections Of The Stream Instances
     * @param param the request object
     */
    public listStreamConnections(param: StreamsApiListStreamConnectionsRequest, options?: Configuration): Promise<PaginatedApiStreamsConnection> {
        return this.api.listStreamConnections(param.groupId, param.tenantName, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Returns all stream instances for the specified project.
     * Return All Project Stream Instances
     * @param param the request object
     */
    public listStreamInstances(param: StreamsApiListStreamInstancesRequest, options?: Configuration): Promise<PaginatedApiStreamsTenant> {
        return this.api.listStreamInstances(param.groupId, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Update one connection for the specified stream instance in the specified project. To use this resource, the requesting API Key must have the Project Owner roles.
     * Update One Stream Connection
     * @param param the request object
     */
    public updateStreamConnection(param: StreamsApiUpdateStreamConnectionRequest, options?: Configuration): Promise<StreamsConnection> {
        return this.api.updateStreamConnection(param.groupId, param.tenantName, param.connectionName, param.streamsConnection,  options).toPromise();
    }

    /**
     * Update one stream instance in the specified project. To use this resource, the requesting API Key must have the Project Owner roles.
     * Update One Stream Instance
     * @param param the request object
     */
    public updateStreamInstance(param: StreamsApiUpdateStreamInstanceRequest, options?: Configuration): Promise<StreamsTenant> {
        return this.api.updateStreamInstance(param.groupId, param.tenantName, param.streamsDataProcessRegion,  options).toPromise();
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
     * @type Array&lt;TeamRole&gt;
     * @memberof TeamsApiaddAllTeamsToProject
     */
    teamRole: Array<TeamRole>
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
     * @type Array&lt;AddUserToTeam&gt;
     * @memberof TeamsApiaddTeamUser
     */
    addUserToTeam: Array<AddUserToTeam>
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
     * @type Team
     * @memberof TeamsApicreateTeam
     */
    team: Team
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
}

export interface TeamsApiListOrganizationTeamsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
     * @type string
     * @memberof TeamsApilistOrganizationTeams
     */
    orgId: string
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
}

export interface TeamsApiListProjectTeamsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof TeamsApilistProjectTeams
     */
    groupId: string
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
     * @type Team
     * @memberof TeamsApirenameTeam
     */
    team: Team
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
     * @type TeamRole
     * @memberof TeamsApiupdateTeamRoles
     */
    teamRole: TeamRole
}

export class ObjectTeamsApi {
    private api: ObservableTeamsApi

    public constructor(configuration: Configuration, requestFactory?: TeamsApiRequestFactory, responseProcessor?: TeamsApiResponseProcessor) {
        this.api = new ObservableTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds one team to the specified project. All members of the team share the same project access. MongoDB Cloud limits the number of users to a maximum of 100 teams per project and a maximum of 250 teams per organization. To use this resource, the requesting API Key must have the Project Owner role.
     * Add One or More Teams to One Project
     * @param param the request object
     */
    public addAllTeamsToProject(param: TeamsApiAddAllTeamsToProjectRequest, options?: Configuration): Promise<PaginatedTeamRole> {
        return this.api.addAllTeamsToProject(param.groupId, param.teamRole,  options).toPromise();
    }

    /**
     * Adds one or more MongoDB Cloud users from the specified organization to the specified team. Teams enable you to grant project access roles to MongoDB Cloud users. You can assign up to 250 MongoDB Cloud users from one organization to one team. To use this resource, the requesting API Key must have the Organization Owner role.
     * Assign MongoDB Cloud Users from One Organization to One Team
     * @param param the request object
     */
    public addTeamUser(param: TeamsApiAddTeamUserRequest, options?: Configuration): Promise<PaginatedApiAppUser> {
        return this.api.addTeamUser(param.orgId, param.teamId, param.addUserToTeam,  options).toPromise();
    }

    /**
     * Creates one team in the specified organization. Teams enable you to grant project access roles to MongoDB Cloud users. MongoDB Cloud limits the number of teams to a maximum of 250 teams per organization. To use this resource, the requesting API Key must have the Organization Owner role.
     * Create One Team in One Organization
     * @param param the request object
     */
    public createTeam(param: TeamsApiCreateTeamRequest, options?: Configuration): Promise<Team> {
        return this.api.createTeam(param.orgId, param.team,  options).toPromise();
    }

    /**
     * Removes one team specified using its unique 24-hexadecimal digit identifier from the organization specified using its unique 24-hexadecimal digit identifier. To use this resource, the requesting API Key must have the Organization Owner role.
     * Remove One Team from One Organization
     * @param param the request object
     */
    public deleteTeam(param: TeamsApiDeleteTeamRequest, options?: Configuration): Promise<any> {
        return this.api.deleteTeam(param.orgId, param.teamId,  options).toPromise();
    }

    /**
     * Returns one team that you identified using its unique 24-hexadecimal digit ID. This team belongs to one organization. Teams enable you to grant project access roles to MongoDB Cloud users. To use this resource, the requesting API Key must have the Organization Member role.
     * Return One Team using its ID
     * @param param the request object
     */
    public getTeamById(param: TeamsApiGetTeamByIdRequest, options?: Configuration): Promise<TeamResponse> {
        return this.api.getTeamById(param.orgId, param.teamId,  options).toPromise();
    }

    /**
     * Returns one team that you identified using its human-readable name. This team belongs to one organization. Teams enable you to grant project access roles to MongoDB Cloud users. To use this resource, the requesting API Key must have the Organization Member role.
     * Return One Team using its Name
     * @param param the request object
     */
    public getTeamByName(param: TeamsApiGetTeamByNameRequest, options?: Configuration): Promise<TeamResponse> {
        return this.api.getTeamByName(param.orgId, param.teamName,  options).toPromise();
    }

    /**
     * Returns all teams that belong to the specified organization. Teams enable you to grant project access roles to MongoDB Cloud users. MongoDB Cloud only returns teams for which you have access. To use this resource, the requesting API Key must have the Organization Member role.
     * Return All Teams in One Organization
     * @param param the request object
     */
    public listOrganizationTeams(param: TeamsApiListOrganizationTeamsRequest, options?: Configuration): Promise<PaginatedTeam> {
        return this.api.listOrganizationTeams(param.orgId, param.itemsPerPage, param.includeCount, param.pageNum,  options).toPromise();
    }

    /**
     * Returns all teams to which the authenticated user has access in the project specified using its unique 24-hexadecimal digit identifier. All members of the team share the same project access. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All Teams in One Project
     * @param param the request object
     */
    public listProjectTeams(param: TeamsApiListProjectTeamsRequest, options?: Configuration): Promise<PaginatedTeamRole> {
        return this.api.listProjectTeams(param.groupId, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Returns all MongoDB Cloud users assigned to the team specified using its unique 24-hexadecimal digit identifier. This team belongs to one organization. Teams enable you to grant project access roles to MongoDB Cloud users. To use this resource, the requesting API Key must have the Organization Member role.
     * Return All MongoDB Cloud Users Assigned to One Team
     * @param param the request object
     */
    public listTeamUsers(param: TeamsApiListTeamUsersRequest, options?: Configuration): Promise<PaginatedApiAppUser> {
        return this.api.listTeamUsers(param.orgId, param.teamId, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Removes one team specified using its unique 24-hexadecimal digit identifier from the project specified using its unique 24-hexadecimal digit identifier. To use this resource, the requesting API Key must have the Project Owner role.
     * Remove One Team from One Project
     * @param param the request object
     */
    public removeProjectTeam(param: TeamsApiRemoveProjectTeamRequest, options?: Configuration): Promise<void> {
        return this.api.removeProjectTeam(param.groupId, param.teamId,  options).toPromise();
    }

    /**
     * Removes one MongoDB Cloud user from the specified team. This team belongs to one organization. Teams enable you to grant project access roles to MongoDB Cloud users. To use this resource, the requesting API Key must have the Organization Owner role.
     * Remove One MongoDB Cloud User from One Team
     * @param param the request object
     */
    public removeTeamUser(param: TeamsApiRemoveTeamUserRequest, options?: Configuration): Promise<void> {
        return this.api.removeTeamUser(param.orgId, param.teamId, param.userId,  options).toPromise();
    }

    /**
     * Renames one team in the specified organization. Teams enable you to grant project access roles to MongoDB Cloud users. To use this resource, the requesting API Key must have the Organization Owner role.
     * Rename One Team
     * @param param the request object
     */
    public renameTeam(param: TeamsApiRenameTeamRequest, options?: Configuration): Promise<TeamResponse> {
        return this.api.renameTeam(param.orgId, param.teamId, param.team,  options).toPromise();
    }

    /**
     * Updates the project roles assigned to the specified team. You can grant team roles for specific projects and grant project access roles to users in the team. All members of the team share the same project access. To use this resource, the requesting API Key must have the Project Owner role.
     * Update Team Roles in One Project
     * @param param the request object
     */
    public updateTeamRoles(param: TeamsApiUpdateTeamRolesRequest, options?: Configuration): Promise<PaginatedTeamRole> {
        return this.api.updateTeamRoles(param.groupId, param.teamId, param.teamRole,  options).toPromise();
    }

}

import { ObservableThirdPartyIntegrationsApi } from "./ObservableAPI";
import { ThirdPartyIntegrationsApiRequestFactory, ThirdPartyIntegrationsApiResponseProcessor} from "../apis/ThirdPartyIntegrationsApi";

export interface ThirdPartyIntegrationsApiCreateThirdPartyIntegrationRequest {
    /**
     * Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
     * @type string
     * @memberof ThirdPartyIntegrationsApicreateThirdPartyIntegration
     */
    integrationType: string
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ThirdPartyIntegrationsApicreateThirdPartyIntegration
     */
    groupId: string
    /**
     * Third-party integration that you want to configure for your project.
     * @type ThridPartyIntegration
     * @memberof ThirdPartyIntegrationsApicreateThirdPartyIntegration
     */
    thridPartyIntegration: ThridPartyIntegration
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
}

export interface ThirdPartyIntegrationsApiDeleteThirdPartyIntegrationRequest {
    /**
     * Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
     * @type string
     * @memberof ThirdPartyIntegrationsApideleteThirdPartyIntegration
     */
    integrationType: string
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ThirdPartyIntegrationsApideleteThirdPartyIntegration
     */
    groupId: string
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
     * @type string
     * @memberof ThirdPartyIntegrationsApigetThirdPartyIntegration
     */
    integrationType: string
}

export interface ThirdPartyIntegrationsApiListThirdPartyIntegrationsRequest {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ThirdPartyIntegrationsApilistThirdPartyIntegrations
     */
    groupId: string
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
}

export interface ThirdPartyIntegrationsApiUpdateThirdPartyIntegrationRequest {
    /**
     * Human-readable label that identifies the service which you want to integrate with MongoDB Cloud.
     * @type string
     * @memberof ThirdPartyIntegrationsApiupdateThirdPartyIntegration
     */
    integrationType: string
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof ThirdPartyIntegrationsApiupdateThirdPartyIntegration
     */
    groupId: string
    /**
     * Third-party integration that you want to configure for your project.
     * @type ThridPartyIntegration
     * @memberof ThirdPartyIntegrationsApiupdateThirdPartyIntegration
     */
    thridPartyIntegration: ThridPartyIntegration
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
}

export class ObjectThirdPartyIntegrationsApi {
    private api: ObservableThirdPartyIntegrationsApi

    public constructor(configuration: Configuration, requestFactory?: ThirdPartyIntegrationsApiRequestFactory, responseProcessor?: ThirdPartyIntegrationsApiResponseProcessor) {
        this.api = new ObservableThirdPartyIntegrationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds the settings for configuring one third-party service integration. These settings apply to all databases managed in the specified MongoDB Cloud project. Each project can have only one configuration per `{INTEGRATION-TYPE}`. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.
     * Configure One Third-Party Service Integration
     * @param param the request object
     */
    public createThirdPartyIntegration(param: ThirdPartyIntegrationsApiCreateThirdPartyIntegrationRequest, options?: Configuration): Promise<PaginatedIntegration> {
        return this.api.createThirdPartyIntegration(param.integrationType, param.groupId, param.thridPartyIntegration, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Removes the settings that permit configuring one third-party service integration. These settings apply to all databases managed in one MongoDB Cloud project. If you delete an integration from a project, you remove that integration configuration only for that project. This action doesn't affect any other project or organization's configured `{INTEGRATION-TYPE}` integrations. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.
     * Remove One Third-Party Service Integration
     * @param param the request object
     */
    public deleteThirdPartyIntegration(param: ThirdPartyIntegrationsApiDeleteThirdPartyIntegrationRequest, options?: Configuration): Promise<any> {
        return this.api.deleteThirdPartyIntegration(param.integrationType, param.groupId,  options).toPromise();
    }

    /**
     * Returns the settings for configuring integration with one third-party service. These settings apply to all databases managed in one MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.
     * Return One Third-Party Service Integration
     * @param param the request object
     */
    public getThirdPartyIntegration(param: ThirdPartyIntegrationsApiGetThirdPartyIntegrationRequest, options?: Configuration): Promise<ThridPartyIntegration> {
        return this.api.getThirdPartyIntegration(param.groupId, param.integrationType,  options).toPromise();
    }

    /**
     * Returns the settings that permit integrations with all configured third-party services. These settings apply to all databases managed in one MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.
     * Return All Active Third-Party Service Integrations
     * @param param the request object
     */
    public listThirdPartyIntegrations(param: ThirdPartyIntegrationsApiListThirdPartyIntegrationsRequest, options?: Configuration): Promise<PaginatedIntegration> {
        return this.api.listThirdPartyIntegrations(param.groupId, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

    /**
     * Updates the settings for configuring integration with one third-party service. These settings apply to all databases managed in one MongoDB Cloud project. To use this resource, the requesting API Key must have the Organization Owner or Project Owner role.
     * Update One Third-Party Service Integration
     * @param param the request object
     */
    public updateThirdPartyIntegration(param: ThirdPartyIntegrationsApiUpdateThirdPartyIntegrationRequest, options?: Configuration): Promise<PaginatedIntegration> {
        return this.api.updateThirdPartyIntegration(param.integrationType, param.groupId, param.thridPartyIntegration, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
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
}

export interface X509AuthenticationApiDisableCustomerManagedX509Request {
    /**
     * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @type string
     * @memberof X509AuthenticationApidisableCustomerManagedX509
     */
    groupId: string
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
}

export class ObjectX509AuthenticationApi {
    private api: ObservableX509AuthenticationApi

    public constructor(configuration: Configuration, requestFactory?: X509AuthenticationApiRequestFactory, responseProcessor?: X509AuthenticationApiResponseProcessor) {
        this.api = new ObservableX509AuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generates one X.509 certificate for the specified MongoDB user. Atlas manages the certificate and MongoDB user that belong to one project. To use this resource, the requesting API Key must have the Project Owner role.  To get MongoDB Cloud to generate a managed certificate for a database user, set `\"x509Type\" : \"MANAGED\"` on the desired MongoDB Database User.  If you are managing your own Certificate Authority (CA) in Self-Managed X.509 mode, you must generate certificates for database users using your own CA.
     * Create One X.509 Certificate for One MongoDB User
     * @param param the request object
     */
    public createDatabaseUserCertificate(param: X509AuthenticationApiCreateDatabaseUserCertificateRequest, options?: Configuration): Promise<string> {
        return this.api.createDatabaseUserCertificate(param.groupId, param.username, param.userCert,  options).toPromise();
    }

    /**
     * Clears the customer-managed X.509 settings on a project, including the uploaded Certificate Authority, which disables self-managed X.509.   Updating this configuration triggers a rolling restart of the database. You must have the Project Owner role to use this endpoint.
     * Disable Customer-Managed X.509
     * @param param the request object
     */
    public disableCustomerManagedX509(param: X509AuthenticationApiDisableCustomerManagedX509Request, options?: Configuration): Promise<UserSecurity> {
        return this.api.disableCustomerManagedX509(param.groupId,  options).toPromise();
    }

    /**
     * Returns all unexpired X.509 certificates for the specified MongoDB user. This MongoDB user belongs to one project. Atlas manages these certificates and the MongoDB user. To use this resource, the requesting API Key must have the Project Read Only role.
     * Return All X.509 Certificates Assigned to One MongoDB User
     * @param param the request object
     */
    public listDatabaseUserCertificates(param: X509AuthenticationApiListDatabaseUserCertificatesRequest, options?: Configuration): Promise<PaginatedUserCert> {
        return this.api.listDatabaseUserCertificates(param.groupId, param.username, param.includeCount, param.itemsPerPage, param.pageNum,  options).toPromise();
    }

}
