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
* Collection of settings that configures the network container for a virtual private connection on Amazon Web Services.
*/
export class AWSCloudProviderContainer {
    /**
    * IP addresses expressed in Classless Inter-Domain Routing (CIDR) notation that MongoDB Cloud uses for the network peering containers in your project. MongoDB Cloud assigns all of the project's clusters deployed to this cloud provider an IP address from this range. MongoDB Cloud locks this value if an M10 or greater cluster or a network peering connection exists in this project.  These CIDR blocks must fall within the ranges reserved per RFC 1918. AWS and Azure further limit the block to between the `/24` and  `/21` ranges.  To modify the CIDR block, the target project cannot have:  - Any M10 or greater clusters - Any other VPC peering connections   You can also create a new project and create a network peering connection to set the desired MongoDB Cloud network peering container CIDR block for that project. MongoDB Cloud limits the number of MongoDB nodes per network peering connection based on the CIDR block and the region selected for the project.   **Example:** A project in an Amazon Web Services (AWS) region supporting three availability zones and an MongoDB CIDR network peering container block of limit of `/24` equals 27 three-node replica sets.
    */
    'atlasCidrBlock'?: string;
    /**
    * Geographic area that Amazon Web Services (AWS) defines to which MongoDB Cloud deployed this network peering container.
    */
    'regionName': AWSCloudProviderContainerRegionNameEnum;
    /**
    * Unique string that identifies the MongoDB Cloud VPC on AWS.
    */
    'vpcId'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the network peering container.
    */
    'id'?: string;
    /**
    * Cloud service provider that serves the requested network peering containers.
    */
    'providerName'?: AWSCloudProviderContainerProviderNameEnum;
    /**
    * Flag that indicates whether MongoDB Cloud clusters exist in the specified network peering container.
    */
    'provisioned'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "atlasCidrBlock",
            "baseName": "atlasCidrBlock",
            "type": "string",
            "format": ""
        },
        {
            "name": "regionName",
            "baseName": "regionName",
            "type": "AWSCloudProviderContainerRegionNameEnum",
            "format": ""
        },
        {
            "name": "vpcId",
            "baseName": "vpcId",
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
            "type": "AWSCloudProviderContainerProviderNameEnum",
            "format": ""
        },
        {
            "name": "provisioned",
            "baseName": "provisioned",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AWSCloudProviderContainer.attributeTypeMap;
    }

    public constructor() {
    }
}


export type AWSCloudProviderContainerRegionNameEnum = "US_EAST_1" | "US_EAST_2" | "US_WEST_1" | "US_WEST_2" | "CA_CENTRAL_1" | "EU_NORTH_1" | "EU_WEST_1" | "EU_WEST_2" | "EU_WEST_3" | "EU_CENTRAL_1" | "SA_EAST_1" | "AP_EAST_1" | "AP_SOUTHEAST_2" | "AP_SOUTHEAST_3" | "AP_NORTHEAST_1" | "AP_NORTHEAST_2" | "AP_NORTHEAST_3" | "AP_SOUTHEAST_1" | "AP_SOUTH_1" | "CN_NORTH_1" | "CN_NORTHWEST_1" | "ME_SOUTH_1" | "AF_SOUTH_1" | "EU_SOUTH_1" | "GLOBAL" | "US_GOV_WEST_1" | "US_GOV_EAST_1" ;
export type AWSCloudProviderContainerProviderNameEnum = "AWS" | "GCP" | "AZURE" | "TENANT" | "SERVERLESS" ;
