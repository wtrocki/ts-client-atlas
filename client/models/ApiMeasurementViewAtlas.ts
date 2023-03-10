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

import { ApiMetricDataPointViewAtlas } from '../models/ApiMetricDataPointViewAtlas';
import { HttpFile } from '../http/http';

export class ApiMeasurementViewAtlas {
    /**
    * List that contains the value of, and metadata provided for, one data point generated at a particular moment in time. If no data point exists for a particular moment in time, the `value` parameter returns `null`.
    */

    'dataPoints'?: Array<ApiMetricDataPointViewAtlas>;
    /**
    * Human-readable label of the measurement that this data point covers.
    */

    'name'?: string;
    /**
    * Element used to quantify the measurement. The resource returns units of throughput, storage, and time.
    */

    'units'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dataPoints",
            "baseName": "dataPoints",
            "type": "Array<ApiMetricDataPointViewAtlas>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "units",
            "baseName": "units",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiMeasurementViewAtlas.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ApiMeasurementViewAtlasUnitsEnum = "BYTES" | "BYTES_PER_SECOND" | "GIGABYTES" | "GIGABYTES_PER_HOUR" | "MEGABYTES_PER_SECOND" | "MILLISECONDS" | "PERCENT" | "SCALAR" | "SCALAR_PER_SECOND" ;

