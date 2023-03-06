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
export class AzureCloudProviderContainer {
    /**
    * IP addresses expressed in Classless Inter-Domain Routing (CIDR) notation that MongoDB Cloud uses for the network peering containers in your project. MongoDB Cloud assigns all of the project's clusters deployed to this cloud provider an IP address from this range. MongoDB Cloud locks this value if an M10 or greater cluster or a network peering connection exists in this project.  These CIDR blocks must fall within the ranges reserved per RFC 1918. AWS and Azure further limit the block to between the `/24` and  `/21` ranges.  To modify the CIDR block, the target project cannot have:  - Any M10 or greater clusters - Any other VPC peering connections   You can also create a new project and create a network peering connection to set the desired MongoDB Cloud network peering container CIDR block for that project. MongoDB Cloud limits the number of MongoDB nodes per network peering connection based on the CIDR block and the region selected for the project.   **Example:** A project in an Amazon Web Services (AWS) region supporting three availability zones and an MongoDB CIDR network peering container block of limit of `/24` equals 27 three-node replica sets.
    */

    'atlasCidrBlock': string;
    /**
    * Unique string that identifies the Azure subscription in which the MongoDB Cloud VNet resides.
    */

    'azureSubscriptionId'?: string;
    /**
    * Azure region to which MongoDB Cloud deployed this network peering container.
    */

    'region': string;
    /**
    * Unique string that identifies the Azure VNet in which MongoDB Cloud clusters in this network peering container exist. The response returns **null** if no clusters exist in this network peering container.
    */

    'vnetName'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the network peering container.
    */

    'id'?: string;
    /**
    * Cloud service provider that serves the requested network peering containers.
    */

    'providerName'?: string;
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
            "name": "azureSubscriptionId",
            "baseName": "azureSubscriptionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
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
            "name": "provisioned",
            "baseName": "provisioned",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AzureCloudProviderContainer.attributeTypeMap;
    }

    public constructor() {
    }
}


export type AzureCloudProviderContainerRegionEnum = "US_CENTRAL" | "US_EAST" | "US_EAST_2" | "US_NORTH_CENTRAL" | "US_WEST" | "US_SOUTH_CENTRAL" | "EUROPE_NORTH" | "EUROPE_WEST" | "US_WEST_CENTRAL" | "US_WEST_2" | "US_WEST_3" | "CANADA_EAST" | "CANADA_CENTRAL" | "BRAZIL_SOUTH" | "BRAZIL_SOUTHEAST" | "AUSTRALIA_EAST" | "AUSTRALIA_SOUTH_EAST" | "AUSTRALIA_CENTRAL" | "AUSTRALIA_CENTRAL_2" | "UAE_NORTH" | "GERMANY_CENTRAL" | "GERMANY_NORTH_EAST" | "GERMANY_WEST_CENTRAL" | "GERMANY_NORTH" | "SWITZERLAND_NORTH" | "SWITZERLAND_WEST" | "SWEDEN_CENTRAL" | "SWEDEN_SOUTH" | "UK_SOUTH" | "UK_WEST" | "INDIA_CENTRAL" | "INDIA_WEST" | "INDIA_SOUTH" | "CHINA_EAST" | "CHINA_NORTH" | "ASIA_EAST" | "JAPAN_EAST" | "JAPAN_WEST" | "ASIA_SOUTH_EAST" | "KOREA_CENTRAL" | "KOREA_SOUTH" | "FRANCE_CENTRAL" | "FRANCE_SOUTH" | "SOUTH_AFRICA_NORTH" | "SOUTH_AFRICA_WEST" | "NORWAY_EAST" | "NORWAY_WEST" | "UAE_CENTRAL" ;
export type AzureCloudProviderContainerProviderNameEnum = "AWS" | "GCP" | "AZURE" | "TENANT" | "SERVERLESS" ;

