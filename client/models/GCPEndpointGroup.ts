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

import { GCPConsumerForwardingRule } from '../models/GCPConsumerForwardingRule';
import { HttpFile } from '../http/http';

/**
* Group of Private Endpoint settings.
*/
export class GCPEndpointGroup {
    /**
    * Flag that indicates whether MongoDB Cloud received a request to remove the specified private endpoint from the private endpoint service.
    */

    'deleteRequested'?: boolean;
    /**
    * Human-readable label that identifies a set of endpoints.
    */

    'endpointGroupName'?: string;
    /**
    * List of individual private endpoints that comprise this endpoint group.
    */

    'endpoints'?: Array<GCPConsumerForwardingRule>;
    /**
    * Error message returned when requesting private connection resource. The resource returns `null` if the request succeeded.
    */

    'errorMessage'?: string;
    /**
    * State of the Google Cloud network endpoint group when MongoDB Cloud received this request.
    */

    'status'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "deleteRequested",
            "baseName": "deleteRequested",
            "type": "boolean",
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
        },
        {
            "name": "errorMessage",
            "baseName": "errorMessage",
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
        return GCPEndpointGroup.attributeTypeMap;
    }

    public constructor() {
    }
}


export type GCPEndpointGroupStatusEnum = "INITIATING" | "VERIFIED" | "AVAILABLE" | "FAILED" | "DELETING" ;

