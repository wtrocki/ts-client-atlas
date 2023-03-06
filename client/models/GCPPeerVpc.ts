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
* Group of Network Peering connection settings.
*/
export class GCPPeerVpc {
    /**
    * Unique 24-hexadecimal digit string that identifies the MongoDB Cloud network container that contains the specified network peering connection.
    */

    'containerId': string;
    /**
    * Details of the error returned when requesting a GCP network peering resource. The resource returns `null` if the request succeeded.
    */

    'errorMessage'?: string;
    /**
    * Human-readable label that identifies the GCP project that contains the network that you want to peer with the MongoDB Cloud VPC.
    */

    'gcpProjectId': string;
    /**
    * Unique 24-hexadecimal digit string that identifies the network peering connection.
    */

    'id'?: string;
    /**
    * Human-readable label that identifies the network to peer with the MongoDB Cloud VPC.
    */

    'networkName': string;
    /**
    * State of the network peering connection at the time you made the request.
    */

    'status'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "containerId",
            "baseName": "containerId",
            "type": "string",
            "format": ""
        },
        {
            "name": "errorMessage",
            "baseName": "errorMessage",
            "type": "string",
            "format": ""
        },
        {
            "name": "gcpProjectId",
            "baseName": "gcpProjectId",
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
            "name": "networkName",
            "baseName": "networkName",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GCPPeerVpc.attributeTypeMap;
    }

    public constructor() {
    }
}


export type GCPPeerVpcStatusEnum = "ADDING_PEER" | "WAITING_FOR_USER" | "AVAILABLE" | "FAILED" | "DELETING" ;

