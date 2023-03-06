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

import { DataMetricThresholdView } from '../models/DataMetricThresholdView';
import { NumberMetricThresholdView } from '../models/NumberMetricThresholdView';
import { NumberMetricUnits } from '../models/NumberMetricUnits';
import { Operator } from '../models/Operator';
import { RawMetricThresholdView } from '../models/RawMetricThresholdView';
import { TimeMetricThresholdView } from '../models/TimeMetricThresholdView';
import { HttpFile } from '../http/http';

/**
* Threshold for the metric that, when exceeded, triggers an alert. The metric threshold pertains to event types which reflects changes of measurements and metrics about mongod host.
*/
export class HostMetricThresholdView {
    /**
    * Human-readable label that identifies the metric against which MongoDB Cloud checks the configured **metricThreshold.threshold**.
    */
    'metricName'?: string;
    /**
    * MongoDB Cloud computes the current metric value as an average.
    */
    'mode'?: HostMetricThresholdViewModeEnum;
    'operator'?: Operator;
    /**
    * Value of metric that, when exceeded, triggers an alert.
    */
    'threshold'?: number;
    'units'?: NumberMetricUnits;

    static readonly discriminator: string | undefined = "metricName";

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
            "type": "HostMetricThresholdViewModeEnum",
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
            "type": "NumberMetricUnits",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return HostMetricThresholdView.attributeTypeMap;
    }

    public constructor() {
        this.metricName = "HostMetricThresholdView";
    }
}


export type HostMetricThresholdViewModeEnum = "AVERAGE" ;

