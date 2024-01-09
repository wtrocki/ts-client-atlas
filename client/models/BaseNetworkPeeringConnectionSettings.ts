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

import { HttpFile } from '../http/http';

export class BaseNetworkPeeringConnectionSettings {
    /**
    * Unique 24-hexadecimal digit string that identifies the MongoDB Cloud network container that contains the specified network peering connection.
    */

    'containerId': string;
    /**
    * Unique 24-hexadecimal digit string that identifies the network peering connection.
    */

    'id'?: string;
    /**
    * Cloud service provider that serves the requested network peering connection.
    */

    'providerName'?: string;
    /**
    * Amazon Web Services (AWS) region where the Virtual Peering Connection (VPC) that you peered with the MongoDB Cloud VPC resides. The resource returns `null` if your VPC and the MongoDB Cloud VPC reside in the same region.
    */

    'accepterRegionName'?: string;
    /**
    * Unique twelve-digit string that identifies the Amazon Web Services (AWS) account that owns the VPC that you peered with the MongoDB Cloud VPC.
    */

    'awsAccountId'?: string;
    /**
    * Unique string that identifies the peering connection on AWS.
    */

    'connectionId'?: string;
    /**
    * Type of error that can be returned when requesting an Amazon Web Services (AWS) peering connection. The resource returns `null` if the request succeeded.
    */

    'errorStateName'?: string;
    /**
    * Internet Protocol (IP) addresses expressed in Classless Inter-Domain Routing (CIDR) notation of the VPC's subnet that you want to peer with the MongoDB Cloud VPC.
    */

    'routeTableCidrBlock'?: string;
    /**
    * State of the network peering connection at the time you made the request.
    */

    'statusName'?: string;
    /**
    * Unique string that identifies the VPC on Amazon Web Services (AWS) that you want to peer with the MongoDB Cloud VPC.
    */

    'vpcId'?: string;
    /**
    * Unique string that identifies the Azure AD directory in which the VNet peered with the MongoDB Cloud VNet resides.
    */

    'azureDirectoryId'?: string;
    /**
    * Unique string that identifies the Azure subscription in which the VNet you peered with the MongoDB Cloud VNet resides.
    */

    'azureSubscriptionId'?: string;
    /**
    * Error message returned when a requested Azure network peering resource returns `\"status\" : \"FAILED\"`. The resource returns `null` if the request succeeded.
    */

    'errorState'?: string;
    /**
    * Human-readable label that identifies the resource group in which the VNet to peer with the MongoDB Cloud VNet resides.
    */

    'resourceGroupName'?: string;
    /**
    * State of the network peering connection at the time you made the request.
    */

    'status'?: string;
    /**
    * Human-readable label that identifies the VNet that you want to peer with the MongoDB Cloud VNet.
    */

    'vnetName'?: string;
    /**
    * Details of the error returned when requesting a GCP network peering resource. The resource returns `null` if the request succeeded.
    */

    'errorMessage'?: string;
    /**
    * Human-readable label that identifies the GCP project that contains the network that you want to peer with the MongoDB Cloud VPC.
    */

    'gcpProjectId'?: string;
    /**
    * Human-readable label that identifies the network to peer with the MongoDB Cloud VPC.
    */

    'networkName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "containerId",
            "baseName": "containerId",
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
            "name": "providerName",
            "baseName": "providerName",
            "type": "string",
            "format": ""
        },
        {
            "name": "accepterRegionName",
            "baseName": "accepterRegionName",
            "type": "string",
            "format": ""
        },
        {
            "name": "awsAccountId",
            "baseName": "awsAccountId",
            "type": "string",
            "format": ""
        },
        {
            "name": "connectionId",
            "baseName": "connectionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "errorStateName",
            "baseName": "errorStateName",
            "type": "string",
            "format": ""
        },
        {
            "name": "routeTableCidrBlock",
            "baseName": "routeTableCidrBlock",
            "type": "string",
            "format": ""
        },
        {
            "name": "statusName",
            "baseName": "statusName",
            "type": "string",
            "format": ""
        },
        {
            "name": "vpcId",
            "baseName": "vpcId",
            "type": "string",
            "format": ""
        },
        {
            "name": "azureDirectoryId",
            "baseName": "azureDirectoryId",
            "type": "string",
            "format": ""
        },
        {
            "name": "azureSubscriptionId",
            "baseName": "azureSubscriptionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "errorState",
            "baseName": "errorState",
            "type": "string",
            "format": ""
        },
        {
            "name": "resourceGroupName",
            "baseName": "resourceGroupName",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "vnetName",
            "baseName": "vnetName",
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
            "name": "networkName",
            "baseName": "networkName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BaseNetworkPeeringConnectionSettings.attributeTypeMap;
    }

    public constructor() {
    }
}
