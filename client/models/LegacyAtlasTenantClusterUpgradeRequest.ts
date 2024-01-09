/**
 * MongoDB Atlas Administration API
 * The MongoDB Atlas Administration API allows developers to manage all components in MongoDB Atlas.  The Atlas Administration API uses HTTP Digest Authentication to authenticate requests. Provide a programmatic API public key and corresponding private key as the username and password when constructing the HTTP request. For example, to [return database access history](#tag/Access-Tracking/operation/listAccessLogsByClusterName) with [cURL](https://en.wikipedia.org/wiki/CURL), run the following command in the terminal:  ``` curl --user \"{PUBLIC-KEY}:{PRIVATE-KEY}\" \\   --digest \\   --header \"Accept: application/vnd.atlas.2023-02-01+json\" \\   GET \"https://cloud.mongodb.com/api/atlas/v2/groups/{groupId}/dbAccessHistory/clusters/{clusterName}?pretty=true\" ```  To learn more, see [Get Started with the Atlas Administration API](https://www.mongodb.com/docs/atlas/configure-api-access/). For support, see [MongoDB Support](https://www.mongodb.com/support/get-started).
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BiConnector } from '../models/BiConnector';
import { ClusterAutoScalingSettings } from '../models/ClusterAutoScalingSettings';
import { ClusterConnectionStrings } from '../models/ClusterConnectionStrings';
import { ClusterProviderSettings } from '../models/ClusterProviderSettings';
import { ComponentLabel } from '../models/ComponentLabel';
import { LegacyReplicationSpec } from '../models/LegacyReplicationSpec';
import { Link } from '../models/Link';
import { RegionSpec } from '../models/RegionSpec';
import { ResourceTag } from '../models/ResourceTag';
import { HttpFile } from '../http/http';

/**
* Request containing target state of tenant cluster to be upgraded
*/
export class LegacyAtlasTenantClusterUpgradeRequest {
    /**
    * If reconfiguration is necessary to regain a primary due to a regional outage, submit this field alongside your topology reconfiguration to request a new regional outage resistant topology. Forced reconfigurations during an outage of the majority of electable nodes carry a risk of data loss if replicated writes (even majority committed writes) have not been replicated to the new primary node. MongoDB Atlas docs contain more information. To proceed with an operation which carries that risk, set **acceptDataRisksAndForceReplicaSetReconfig** to the current date.
    */

    'acceptDataRisksAndForceReplicaSetReconfig'?: Date;

    'autoScaling'?: ClusterAutoScalingSettings;
    /**
    * Flag that indicates whether the cluster can perform backups. If set to `true`, the cluster can perform backups. You must set this value to `true` for NVMe clusters. Backup uses Cloud Backups for dedicated clusters and Shared Cluster Backups for tenant clusters. If set to `false`, the cluster doesn't use MongoDB Cloud backups.
    */

    'backupEnabled'?: boolean;

    'biConnector'?: BiConnector;
    /**
    * Configuration of nodes that comprise the cluster.
    */

    'clusterType'?: string;

    'connectionStrings'?: ClusterConnectionStrings;
    /**
    * Date and time when MongoDB Cloud created this serverless instance. MongoDB Cloud represents this timestamp in ISO 8601 format in UTC.
    */

    'createDate'?: Date;
    /**
    * Storage capacity that the host's root volume possesses expressed in gigabytes. Increase this number to add capacity. MongoDB Cloud requires this parameter if you set **replicationSpecs**. If you specify a disk size below the minimum (10 GB), this parameter defaults to the minimum disk size value. Storage charge calculations depend on whether you choose the default value or a custom value.  The maximum value for disk storage cannot exceed 50 times the maximum RAM for the selected cluster. If you require more storage space, consider upgrading your cluster to a higher tier.
    */

    'diskSizeGB'?: number;
    /**
    * Cloud service provider that manages your customer keys to provide an additional layer of Encryption at Rest for the cluster.
    */

    'encryptionAtRestProvider'?: string;
    /**
    * Unique 24-hexadecimal character string that identifies the project.
    */

    'groupId'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the cluster.
    */

    'id'?: string;
    /**
    * Collection of key-value pairs between 1 to 255 characters in length that tag and categorize the cluster. The MongoDB Cloud console doesn't display your labels.  Cluster labels are deprecated and will be removed in a future release. We strongly recommend that you use [resource tags](https://dochub.mongodb.org/core/add-cluster-tag-atlas) instead.
    */

    'labels'?: Array<ComponentLabel>;
    /**
    * List of one or more Uniform Resource Locators (URLs) that point to API sub-resources, related API resources, or both. RFC 5988 outlines these relationships.
    */

    'links'?: Array<Link>;
    /**
    * Major MongoDB version of the cluster. MongoDB Cloud deploys the cluster with the latest stable release of the specified version.
    */

    'mongoDBMajorVersion'?: string;
    /**
    * Version of MongoDB that the cluster runs.
    */

    'mongoDBVersion'?: string;
    /**
    * Base connection string that you can use to connect to the cluster. MongoDB Cloud displays the string only after the cluster starts, not while it builds the cluster.
    */

    'mongoURI'?: string;
    /**
    * Date and time when someone last updated the connection string. MongoDB Cloud represents this timestamp in ISO 8601 format in UTC.
    */

    'mongoURIUpdated'?: Date;
    /**
    * Connection string that you can use to connect to the cluster including the `replicaSet`, `ssl`, and `authSource` query parameters with values appropriate for the cluster. You may need to add MongoDB database users. The response returns this parameter once the cluster can receive requests, not while it builds the cluster.
    */

    'mongoURIWithOptions'?: string;
    /**
    * Human-readable label that identifies the cluster.
    */

    'name': string;
    /**
    * Number of shards up to 50 to deploy for a sharded cluster. The resource returns `1` to indicate a replica set and values of `2` and higher to indicate a sharded cluster. The returned value equals the number of shards in the cluster.
    */

    'numShards'?: number;
    /**
    * Flag that indicates whether the cluster is paused.
    */

    'paused'?: boolean;
    /**
    * Flag that indicates whether the cluster uses continuous cloud backups.
    */

    'pitEnabled'?: boolean;
    /**
    * Flag that indicates whether the M10 or higher cluster can perform Cloud Backups. If set to `true`, the cluster can perform backups. If this and **backupEnabled** are set to `false`, the cluster doesn't use MongoDB Cloud backups.
    */

    'providerBackupEnabled'?: boolean;

    'providerSettings'?: ClusterProviderSettings;
    /**
    * Number of members that belong to the replica set. Each member retains a copy of your databases, providing high availability and data redundancy. Use **replicationSpecs** instead.
    */

    'replicationFactor'?: number;
    /**
    * Physical location where MongoDB Cloud provisions cluster nodes.
    */

    'replicationSpec'?: { [key: string]: RegionSpec; };
    /**
    * List of settings that configure your cluster regions.  - For Global Clusters, each object in the array represents one zone where MongoDB Cloud deploys your clusters nodes. - For non-Global sharded clusters and replica sets, the single object represents where MongoDB Cloud deploys your clusters nodes.
    */

    'replicationSpecs'?: Array<LegacyReplicationSpec>;
    /**
    * Root Certificate Authority that MongoDB Atlas clusters uses. MongoDB Cloud supports Internet Security Research Group.
    */

    'rootCertType'?: string;
    /**
    * Connection string that you can use to connect to the cluster. The `+srv` modifier forces the connection to use Transport Layer Security (TLS). The `mongoURI` parameter lists additional options.
    */

    'srvAddress'?: string;
    /**
    * Human-readable label that indicates the current operating condition of the cluster.
    */

    'stateName'?: string;
    /**
    * List that contains key-value pairs between 1 to 255 characters in length for tagging and categorizing the cluster.
    */

    'tags'?: Array<ResourceTag>;
    /**
    * Flag that indicates whether termination protection is enabled on the cluster. If set to `true`, MongoDB Cloud won't delete the cluster. If set to `false`, MongoDB Cloud will delete the cluster.
    */

    'terminationProtectionEnabled'?: boolean;
    /**
    * Method by which the cluster maintains the MongoDB versions. If value is `CONTINUOUS`, you must not specify **mongoDBMajorVersion**.
    */

    'versionReleaseSystem'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "acceptDataRisksAndForceReplicaSetReconfig",
            "baseName": "acceptDataRisksAndForceReplicaSetReconfig",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "autoScaling",
            "baseName": "autoScaling",
            "type": "ClusterAutoScalingSettings",
            "format": ""
        },
        {
            "name": "backupEnabled",
            "baseName": "backupEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "biConnector",
            "baseName": "biConnector",
            "type": "BiConnector",
            "format": ""
        },
        {
            "name": "clusterType",
            "baseName": "clusterType",
            "type": "string",
            "format": ""
        },
        {
            "name": "connectionStrings",
            "baseName": "connectionStrings",
            "type": "ClusterConnectionStrings",
            "format": ""
        },
        {
            "name": "createDate",
            "baseName": "createDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "diskSizeGB",
            "baseName": "diskSizeGB",
            "type": "number",
            "format": "double"
        },
        {
            "name": "encryptionAtRestProvider",
            "baseName": "encryptionAtRestProvider",
            "type": "string",
            "format": ""
        },
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "Array<ComponentLabel>",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>",
            "format": ""
        },
        {
            "name": "mongoDBMajorVersion",
            "baseName": "mongoDBMajorVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "mongoDBVersion",
            "baseName": "mongoDBVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "mongoURI",
            "baseName": "mongoURI",
            "type": "string",
            "format": ""
        },
        {
            "name": "mongoURIUpdated",
            "baseName": "mongoURIUpdated",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "mongoURIWithOptions",
            "baseName": "mongoURIWithOptions",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "numShards",
            "baseName": "numShards",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "paused",
            "baseName": "paused",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "pitEnabled",
            "baseName": "pitEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "providerBackupEnabled",
            "baseName": "providerBackupEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "providerSettings",
            "baseName": "providerSettings",
            "type": "ClusterProviderSettings",
            "format": ""
        },
        {
            "name": "replicationFactor",
            "baseName": "replicationFactor",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "replicationSpec",
            "baseName": "replicationSpec",
            "type": "{ [key: string]: RegionSpec; }",
            "format": ""
        },
        {
            "name": "replicationSpecs",
            "baseName": "replicationSpecs",
            "type": "Array<LegacyReplicationSpec>",
            "format": ""
        },
        {
            "name": "rootCertType",
            "baseName": "rootCertType",
            "type": "string",
            "format": ""
        },
        {
            "name": "srvAddress",
            "baseName": "srvAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "stateName",
            "baseName": "stateName",
            "type": "string",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<ResourceTag>",
            "format": ""
        },
        {
            "name": "terminationProtectionEnabled",
            "baseName": "terminationProtectionEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "versionReleaseSystem",
            "baseName": "versionReleaseSystem",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LegacyAtlasTenantClusterUpgradeRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

