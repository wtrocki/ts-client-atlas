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

import { Operator } from '../models/Operator';
import { HttpFile } from '../http/http';

/**
* A Limit that triggers an alert when  exceeded. The resource returns this parameter when **eventTypeName** has not been set to `OUTSIDE_METRIC_THRESHOLD`.
*/
export class ThresholdViewInteger {
    'operator'?: Operator;
    /**
    * Value of metric that, when exceeded, triggers an alert.
    */
    'threshold'?: number;
    /**
    * Element used to express the quantity. This can be an element of time, storage capacity, and the like.
    */
    'units'?: ThresholdViewIntegerUnitsEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "operator",
            "baseName": "operator",
            "type": "Operator",
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
            "type": "ThresholdViewIntegerUnitsEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ThresholdViewInteger.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ThresholdViewIntegerUnitsEnum = "bits" | "Kbits" | "Mbits" | "Gbits" | "bytes" | "KB" | "MB" | "GB" | "TB" | "PB" | "nsec" | "msec" | "sec" | "min" | "hours" | "million minutes" | "days" | "requests" | "1000 requests" | "GB seconds" | "GB hours" | "GB days" | "RPU" | "thousand RPU" | "million RPU" | "WPU" | "thousand WPU" | "million WPU" | "count" | "thousand" | "million" | "billion" | "" ;

