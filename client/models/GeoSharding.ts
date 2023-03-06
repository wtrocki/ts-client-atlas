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

import { ManagedNamespaces } from '../models/ManagedNamespaces';
import { HttpFile } from '../http/http';

export class GeoSharding {
    /**
    * List that contains comma-separated key value pairs to map zones to geographic regions. These pairs map an ISO 3166-1a2 location code, with an ISO 3166-2 subdivision code when possible, to a unique 24-hexadecimal string that identifies the custom zone.  This parameter returns an empty object if no custom zones exist.
    */
    'customZoneMapping'?: { [key: string]: string; };
    /**
    * List that contains a namespace for a Global Cluster. MongoDB Cloud manages this cluster.
    */
    'managedNamespaces'?: Array<ManagedNamespaces>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "customZoneMapping",
            "baseName": "customZoneMapping",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "managedNamespaces",
            "baseName": "managedNamespaces",
            "type": "Array<ManagedNamespaces>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GeoSharding.attributeTypeMap;
    }

    public constructor() {
    }
}

