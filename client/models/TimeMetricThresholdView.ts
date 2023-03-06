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
import { TimeMetricUnits } from '../models/TimeMetricUnits';
import { HttpFile } from '../http/http';

export class TimeMetricThresholdView {
    /**
    * Human-readable label that identifies the metric against which MongoDB Cloud checks the configured **metricThreshold.threshold**.
    */

    'metricName'?: string;
    /**
    * MongoDB Cloud computes the current metric value as an average.
    */

    'mode'?: string;

    'operator'?: Operator;
    /**
    * Value of metric that, when exceeded, triggers an alert.
    */

    'threshold'?: number;

    'units'?: TimeMetricUnits;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "metricName",
            "baseName": "metricName",
            "type": "string",
            "format": ""
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "string",
            "format": ""
        },
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
            "format": "double"
        },
        {
            "name": "units",
            "baseName": "units",
            "type": "TimeMetricUnits",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TimeMetricThresholdView.attributeTypeMap;
    }

    public constructor() {
    }
}


export type TimeMetricThresholdViewModeEnum = "AVERAGE" ;

