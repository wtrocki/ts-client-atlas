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

import { ApiMeasurementView } from '../models/ApiMeasurementView';
import { Link } from '../models/Link';
import { HttpFile } from '../http/http';

export class ApiMeasurementsNonIndexView {
    /**
    * Date and time that specifies when to stop retrieving measurements. If you set **end**, you must set **start**. You can't set this parameter and **period** in the same request. This parameter expresses its value in the ISO 8601 timestamp format in UTC.
    */
    'end'?: Date;
    /**
    * Duration that specifies the interval between measurement data points. The parameter expresses its value in ISO 8601 timestamp format in UTC. If you set this parameter, you must set either **period** or **start** and **end**.
    */
    'granularity'?: ApiMeasurementsNonIndexViewGranularityEnum;
    /**
    * Unique 24-hexadecimal digit string that identifies the project. The project contains MongoDB processes that you want to return. The MongoDB process can be either the `mongod` or `mongos`.
    */
    'groupId'?: string;
    /**
    * List that contains the Atlas Search hardware measurements.
    */
    'hardwareMeasurements'?: Array<ApiMeasurementView>;
    /**
    * List of one or more Uniform Resource Locators (URLs) that point to API sub-resources, related API resources, or both. RFC 5988 outlines these relationships.
    */
    'links'?: Array<Link>;
    /**
    * Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (`mongod` or `mongos`). The port must be the IANA port on which the MongoDB process listens for requests.
    */
    'processId'?: string;
    /**
    * Date and time that specifies when to start retrieving measurements. If you set **start**, you must set **end**. You can't set this parameter and **period** in the same request. This parameter expresses its value in the ISO 8601 timestamp format in UTC.
    */
    'start'?: Date;
    /**
    * List that contains the Atlas Search status measurements.
    */
    'statusMeasurements'?: Array<ApiMeasurementView>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "end",
            "baseName": "end",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "granularity",
            "baseName": "granularity",
            "type": "ApiMeasurementsNonIndexViewGranularityEnum",
            "format": ""
        },
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "string",
            "format": ""
        },
        {
            "name": "hardwareMeasurements",
            "baseName": "hardwareMeasurements",
            "type": "Array<ApiMeasurementView>",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>",
            "format": ""
        },
        {
            "name": "processId",
            "baseName": "processId",
            "type": "string",
            "format": ""
        },
        {
            "name": "start",
            "baseName": "start",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "statusMeasurements",
            "baseName": "statusMeasurements",
            "type": "Array<ApiMeasurementView>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiMeasurementsNonIndexView.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ApiMeasurementsNonIndexViewGranularityEnum = "PT1M" | "PT5M" | "PT1H" | "P1D" ;
