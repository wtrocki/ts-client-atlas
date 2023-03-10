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

import { AWSPrivateLinkConnection } from '../models/AWSPrivateLinkConnection';
import { AzurePrivateLinkConnection } from '../models/AzurePrivateLinkConnection';
import { GCPEndpointService } from '../models/GCPEndpointService';
import { HttpFile } from '../http/http';

export class EndpointService {
    /**
    * Unique string that identifies the Amazon Web Services (AWS) PrivateLink endpoint service. MongoDB Cloud returns null while it creates the endpoint service.
    */

    'endpointServiceName'?: string;
    /**
    * Error message returned when requesting private connection resource. The resource returns `null` if the request succeeded.
    */

    'errorMessage'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the Private Endpoint Service.
    */

    'id'?: string;
    /**
    * List of strings that identify private endpoint interfaces applied to the specified project.
    */

    'interfaceEndpoints'?: Array<string>;
    /**
    * Cloud provider region that manages this Private Endpoint Service.
    */

    'regionName'?: string;
    /**
    * State of the Private Endpoint Service connection when MongoDB Cloud received this request.
    */

    'status'?: string;
    /**
    * List of private endpoints assigned to this Azure Private Link Service.
    */

    'privateEndpoints'?: Array<string>;
    /**
    * Unique string that identifies the Azure Private Link Service that MongoDB Cloud manages.
    */

    'privateLinkServiceName'?: string;
    /**
    * Root-relative path that identifies of the Azure Private Link Service that MongoDB Cloud manages. Use this value to create a private endpoint connection to an Azure VNet.
    */

    'privateLinkServiceResourceId'?: string;
    /**
    * List of Google Cloud network endpoint groups that corresponds to the Private Service Connect endpoint service.
    */

    'endpointGroupNames'?: Array<string>;
    /**
    * List of Uniform Resource Locators (URLs) that identifies endpoints that MongoDB Cloud can use to access one Google Cloud Service across a Google Cloud Virtual Private Connection (VPC) network.
    */

    'serviceAttachmentNames'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "endpointServiceName",
            "baseName": "endpointServiceName",
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
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "interfaceEndpoints",
            "baseName": "interfaceEndpoints",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "regionName",
            "baseName": "regionName",
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
            "name": "privateEndpoints",
            "baseName": "privateEndpoints",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "privateLinkServiceName",
            "baseName": "privateLinkServiceName",
            "type": "string",
            "format": ""
        },
        {
            "name": "privateLinkServiceResourceId",
            "baseName": "privateLinkServiceResourceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "endpointGroupNames",
            "baseName": "endpointGroupNames",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "serviceAttachmentNames",
            "baseName": "serviceAttachmentNames",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EndpointService.attributeTypeMap;
    }

    public constructor() {
    }
}


export type EndpointServiceStatusEnum = "INITIATING" | "AVAILABLE" | "WAITING_FOR_USER" | "FAILED" | "DELETING" ;

