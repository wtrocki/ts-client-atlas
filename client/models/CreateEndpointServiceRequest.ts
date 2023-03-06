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

export class CreateEndpointServiceRequest {
    /**
    * Human-readable label that identifies the cloud service provider for which you want to create the private endpoint service.
    */
    'providerName': CreateEndpointServiceRequestProviderNameEnum;
    /**
    * Cloud provider region in which you want to create the private endpoint service. Regions accepted as values differ for [Amazon Web Services](https://docs.atlas.mongodb.com/reference/amazon-aws/), [Google Cloud Platform](https://docs.atlas.mongodb.com/reference/google-gcp/), and [Microsoft Azure](https://docs.atlas.mongodb.com/reference/microsoft-azure/).
    */
    'region': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "providerName",
            "baseName": "providerName",
            "type": "CreateEndpointServiceRequestProviderNameEnum",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateEndpointServiceRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type CreateEndpointServiceRequestProviderNameEnum = "AWS" | "AZURE" | "GCP" ;
