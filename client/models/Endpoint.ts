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

import { AWSInterfaceEndpoint } from '../models/AWSInterfaceEndpoint';
import { AzurePrivateEndpoint } from '../models/AzurePrivateEndpoint';
import { GCPConsumerForwardingRule } from '../models/GCPConsumerForwardingRule';
import { GCPEndpointGroup } from '../models/GCPEndpointGroup';
import { HttpFile } from '../http/http';

export class Endpoint {
    /**
    * State of the Amazon Web Service PrivateLink connection when MongoDB Cloud received this request.
    */
    'connectionStatus'?: EndpointConnectionStatusEnum;
    /**
    * Flag that indicates whether MongoDB Cloud received a request to remove the specified private endpoint from the private endpoint service.
    */
    'deleteRequested'?: boolean;
    /**
    * Error message returned when requesting private connection resource. The resource returns `null` if the request succeeded.
    */
    'errorMessage'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the interface endpoint.
    */
    'interfaceEndpointId'?: string;
    /**
    * Human-readable label that MongoDB Cloud generates that identifies the private endpoint connection.
    */
    'privateEndpointConnectionName'?: string;
    /**
    * IPv4 address of the private endpoint in your Azure VNet that someone added to this private endpoint service.
    */
    'privateEndpointIPAddress'?: string;
    /**
    * Unique string that identifies the Azure private endpoint's network interface that someone added to this private endpoint service.
    */
    'privateEndpointResourceId'?: string;
    /**
    * State of the Google Cloud network endpoint group when MongoDB Cloud received this request.
    */
    'status'?: EndpointStatusEnum;
    /**
    * Human-readable label that identifies a set of endpoints.
    */
    'endpointGroupName'?: string;
    /**
    * List of individual private endpoints that comprise this endpoint group.
    */
    'endpoints'?: Array<GCPConsumerForwardingRule>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "connectionStatus",
            "baseName": "connectionStatus",
            "type": "EndpointConnectionStatusEnum",
            "format": ""
        },
        {
            "name": "deleteRequested",
            "baseName": "deleteRequested",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "errorMessage",
            "baseName": "errorMessage",
            "type": "string",
            "format": ""
        },
        {
            "name": "interfaceEndpointId",
            "baseName": "interfaceEndpointId",
            "type": "string",
            "format": ""
        },
        {
            "name": "privateEndpointConnectionName",
            "baseName": "privateEndpointConnectionName",
            "type": "string",
            "format": ""
        },
        {
            "name": "privateEndpointIPAddress",
            "baseName": "privateEndpointIPAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "privateEndpointResourceId",
            "baseName": "privateEndpointResourceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "EndpointStatusEnum",
            "format": ""
        },
        {
            "name": "endpointGroupName",
            "baseName": "endpointGroupName",
            "type": "string",
            "format": ""
        },
        {
            "name": "endpoints",
            "baseName": "endpoints",
            "type": "Array<GCPConsumerForwardingRule>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Endpoint.attributeTypeMap;
    }

    public constructor() {
    }
}


export type EndpointConnectionStatusEnum = "PENDING_ACCEPTANCE" | "PENDING" | "AVAILABLE" | "REJECTED" | "DELETING" ;
export type EndpointStatusEnum = "INITIATING" | "VERIFIED" | "AVAILABLE" | "FAILED" | "DELETING" ;

