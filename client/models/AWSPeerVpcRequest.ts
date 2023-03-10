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

export class AWSPeerVpcRequest {
    /**
    * Unique 24-hexadecimal digit string that identifies the MongoDB Cloud network container that contains the specified network peering connection.
    */

    'containerId': string;
    /**
    * Cloud service provider that determines the needed settings to configure the network connection for a virtual private connection.
    */

    'providerName': string;
    /**
    * Amazon Web Services (AWS) region where the Virtual Peering Connection (VPC) that you peered with the MongoDB Cloud VPC resides. The resource returns `null` if your VPC and the MongoDB Cloud VPC reside in the same region.
    */

    'accepterRegionName': string;
    /**
    * Unique twelve-digit string that identifies the Amazon Web Services (AWS) account that owns the VPC that you peered with the MongoDB Cloud VPC.
    */

    'awsAccountId': string;
    /**
    * Unique string that identifies the peering connection on AWS.
    */

    'connectionId'?: string;
    /**
    * Type of error that can be returned when requesting an Amazon Web Services (AWS) peering connection. The resource returns `null` if the request succeeded.
    */

    'errorStateName'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the network peering connection.
    */

    'id'?: string;
    /**
    * Internet Protocol (IP) addresses expressed in Classless Inter-Domain Routing (CIDR) notation of the VPC's subnet that you want to peer with the MongoDB Cloud VPC.
    */

    'routeTableCidrBlock': string;
    /**
    * State of the network peering connection at the time you made the request.
    */

    'statusName'?: string;
    /**
    * Unique string that identifies the VPC on Amazon Web Services (AWS) that you want to peer with the MongoDB Cloud VPC.
    */

    'vpcId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "containerId",
            "baseName": "containerId",
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
            "name": "id",
            "baseName": "id",
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
        }    ];

    static getAttributeTypeMap() {
        return AWSPeerVpcRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type AWSPeerVpcRequestProviderNameEnum = "AWS" | "AZURE" | "GCP" ;
export type AWSPeerVpcRequestErrorStateNameEnum = "REJECTED" | "EXPIRED" | "INVALID_ARGUMENT" ;
export type AWSPeerVpcRequestStatusNameEnum = "INITIATING" | "PENDING_ACCEPTANCE" | "FAILED" | "FINALIZING" | "AVAILABLE" | "TERMINATING" ;

