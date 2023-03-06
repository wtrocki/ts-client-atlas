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

import { PerformanceAdvisorOpStatsView } from '../models/PerformanceAdvisorOpStatsView';
import { HttpFile } from '../http/http';

export class PerformanceAdvisorOperationView {
    /**
    * List that contains the search criteria that the query uses. To use the values in key-value pairs in these predicates requires **Project Data Access Read Only** permissions or greater. Otherwise, MongoDB Cloud redacts these values.
    */
    'predicates'?: Array<any>;
    'stats'?: PerformanceAdvisorOpStatsView;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "predicates",
            "baseName": "predicates",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "stats",
            "baseName": "stats",
            "type": "PerformanceAdvisorOpStatsView",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PerformanceAdvisorOperationView.attributeTypeMap;
    }

    public constructor() {
    }
}

