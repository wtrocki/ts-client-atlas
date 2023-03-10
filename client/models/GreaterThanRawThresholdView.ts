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

import { RawMetricUnits } from '../models/RawMetricUnits';
import { HttpFile } from '../http/http';

/**
* A Limit that triggers an alert when greater than a number.
*/
export class GreaterThanRawThresholdView {
    /**
    * Comparison operator to apply when checking the current metric value.
    */

    'operator'?: string;
    /**
    * Value of metric that, when exceeded, triggers an alert.
    */

    'threshold'?: number;

    'units'?: RawMetricUnits;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "operator",
            "baseName": "operator",
            "type": "string",
            "format": ""
        },
        {
            "name": "threshold",
            "baseName": "threshold",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "units",
            "baseName": "units",
            "type": "RawMetricUnits",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GreaterThanRawThresholdView.attributeTypeMap;
    }

    public constructor() {
    }
}


export type GreaterThanRawThresholdViewOperatorEnum = "GREATER_THAN" ;

