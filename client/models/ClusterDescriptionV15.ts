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

import { BiConnector } from '../models/BiConnector';
import { ClusterDescriptionConnectionStrings } from '../models/ClusterDescriptionConnectionStrings';
import { Link } from '../models/Link';
import { NDSLabel } from '../models/NDSLabel';
import { ReplicationSpec } from '../models/ReplicationSpec';
import { HttpFile } from '../http/http';

export class ClusterDescriptionV15 {
    /**
    * Flag that indicates whether the cluster can perform backups. If set to `true`, the cluster can perform backups. You must set this value to `true` for NVMe clusters. Backup uses [Cloud Backups](https://docs.atlas.mongodb.com/backup/cloud-backup/overview/) for dedicated clusters and [Shared Cluster Backups](https://docs.atlas.mongodb.com/backup/shared-tier/overview/) for tenant clusters. If set to `false`, the cluster doesn't use backups.
    */

    'backupEnabled'?: boolean;

    'biConnector'?: BiConnector;
    /**
    * Configuration of nodes that comprise the cluster.
    */

    'clusterType'?: string;

    'connectionStrings'?: ClusterDescriptionConnectionStrings;
    /**
    * Date and time when MongoDB Cloud created this cluster. This parameter expresses its value in ISO 8601 format in UTC.
    */

    'createDate'?: Date;
    /**
    * Storage capacity that the host's root volume possesses expressed in gigabytes. Increase this number to add capacity. MongoDB Cloud requires this parameter if you set **replicationSpecs**. If you specify a disk size below the minimum (10 GB), this parameter defaults to the minimum disk size value. Storage charge calculations depend on whether you choose the default value or a custom value.  The maximum value for disk storage cannot exceed 50 times the maximum RAM for the selected cluster. If you require more storage space, consider upgrading your cluster to a higher tier.
    */

    'diskSizeGB'?: number;
    /**
    * Cloud service provider that manages your customer keys to provide an additional layer of encryption at rest for the cluster. To enable customer key management for encryption at rest, the cluster **replicationSpecs[n].regionConfigs[m].{type}Specs.instanceSize** setting must be `M10` or higher and `\"backupEnabled\" : false` or omitted entirely.
    */

    'encryptionAtRestProvider'?: string;
    /**
    * Unique 24-hexadecimal character string that identifies the project.
    */

    'groupId'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the replication object for a zone in a Global Cluster. If you include existing zones in the request, you must specify this parameter. If you add a new zone to an existing Global Cluster, you may specify this parameter. The request deletes any existing zones in a Global Cluster that you exclude from the request.
    */

    'id'?: string;
    /**
    * Collection of key-value pairs between 1 to 255 characters in length that tag and categorize the cluster. The MongoDB Cloud console doesn't display your labels.
    */

    'labels'?: Array<NDSLabel>;
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
    * Human-readable label that identifies the advanced cluster.
    */

    'name'?: string;
    /**
    * Flag that indicates whether the cluster is paused.
    */

    'paused'?: boolean;
    /**
    * Flag that indicates whether the cluster uses continuous cloud backups.
    */

    'pitEnabled'?: boolean;
    /**
    * List of settings that configure your cluster regions. For Global Clusters, each object in the array represents a zone where your clusters nodes deploy. For non-Global sharded clusters and replica sets, this array has one object representing where your clusters nodes deploy.
    */

    'replicationSpecs'?: Array<ReplicationSpec>;
    /**
    * Root Certificate Authority that MongoDB Cloud cluster uses. MongoDB Cloud supports Internet Security Research Group.
    */

    'rootCertType'?: string;
    /**
    * Human-readable label that indicates the current operating condition of this cluster.
    */

    'stateName'?: string;
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
            "type": "ClusterDescriptionConnectionStrings",
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
            "type": "Array<NDSLabel>",
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
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
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
            "name": "replicationSpecs",
            "baseName": "replicationSpecs",
            "type": "Array<ReplicationSpec>",
            "format": ""
        },
        {
            "name": "rootCertType",
            "baseName": "rootCertType",
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
        return ClusterDescriptionV15.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ClusterDescriptionV15ClusterTypeEnum = "REPLICASET" | "SHARDED" | "GEOSHARDED" ;
export type ClusterDescriptionV15EncryptionAtRestProviderEnum = "NONE" | "AWS" | "AZURE" | "GCP" ;
export type ClusterDescriptionV15MongoDBMajorVersionEnum = "4.2" | "4.4" | "5.0" | "6.0" ;
export type ClusterDescriptionV15RootCertTypeEnum = "ISRGROOTX1" ;
export type ClusterDescriptionV15StateNameEnum = "IDLE" | "CREATING" | "UPDATING" | "DELETING" | "DELETED" | "REPAIRING" ;
export type ClusterDescriptionV15VersionReleaseSystemEnum = "LTS" | "CONTINUOUS" ;

