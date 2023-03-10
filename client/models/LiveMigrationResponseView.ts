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

export class LiveMigrationResponseView {
    /**
    * Unique 24-hexadecimal digit string that identifies the migration job.
    */

    'id'?: string;
    /**
    * Replication lag between the source and destination clusters. Atlas returns this setting only during an active migration, before the cutover phase.
    */

    'lagTimeSeconds'?: number;
    /**
    * List of hosts running MongoDB Agents. These Agents can transfer your MongoDB data between one source and one target cluster.
    */

    'migrationHosts'?: Array<string>;
    /**
    * Flag that indicates the migrated cluster can be cut over to MongoDB Atlas.
    */

    'readyForCutover'?: boolean;
    /**
    * Progress made in migrating one cluster to MongoDB Atlas.  | Status   | Explanation | |----------|-------------| | NEW      | Someone scheduled a local cluster migration to MongoDB Atlas. | | FAILED   | The cluster migration to MongoDB Atlas failed.                | | COMPLETE | The cluster migration to MongoDB Atlas succeeded.             | | EXPIRED  | MongoDB Atlas prepares to begin the cut over of the migrating cluster when source and target clusters have almost synchronized. If `\"readyForCutover\" : true`, this synchronization starts a timer of 120 hours. You can extend this timer. If the timer expires, MongoDB Atlas returns this status. | | WORKING  | The cluster migration to MongoDB Atlas is performing one of the following tasks:<ul><li>Preparing connections to source and target clusters</li><li>Replicating data from source to target</li><li>Verifying MongoDB Atlas connection settings</li><li>Stopping replication after the cut over</li></ul> | 
    */

    'status'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "lagTimeSeconds",
            "baseName": "lagTimeSeconds",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "migrationHosts",
            "baseName": "migrationHosts",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "readyForCutover",
            "baseName": "readyForCutover",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LiveMigrationResponseView.attributeTypeMap;
    }

    public constructor() {
    }
}


export type LiveMigrationResponseViewStatusEnum = "NEW" | "WORKING" | "FAILED" | "COMPLETE" | "EXPIRED" ;

