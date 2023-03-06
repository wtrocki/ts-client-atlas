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

import { DailyScheduleView } from '../models/DailyScheduleView';
import { DefaultScheduleView } from '../models/DefaultScheduleView';
import { MonthlyScheduleView } from '../models/MonthlyScheduleView';
import { WeeklyScheduleView } from '../models/WeeklyScheduleView';
import { HttpFile } from '../http/http';

/**
* Regular frequency and duration when archiving process occurs.
*/
export class OnlineArchiveSchedule {
    'type': string;
    /**
    * Hour of the day when the scheduled window to run one online archive ends.
    */
    'endHour'?: number;
    /**
    * Minute of the hour when the scheduled window to run one online archive ends.
    */
    'endMinute'?: number;
    /**
    * Hour of the day when the when the scheduled window to run one online archive starts.
    */
    'startHour'?: number;
    /**
    * Minute of the hour when the scheduled window to run one online archive starts.
    */
    'startMinute'?: number;
    /**
    * Day of the week when the scheduled archive starts. The week starts with Monday (`1`) and ends with Sunday (`7`).
    */
    'dayOfWeek'?: number;
    /**
    * Day of the month when the scheduled archive starts.
    */
    'dayOfMonth'?: number;

    static readonly discriminator: string | undefined = "type";

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "endHour",
            "baseName": "endHour",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "endMinute",
            "baseName": "endMinute",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "startHour",
            "baseName": "startHour",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "startMinute",
            "baseName": "startMinute",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "dayOfWeek",
            "baseName": "dayOfWeek",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "dayOfMonth",
            "baseName": "dayOfMonth",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return OnlineArchiveSchedule.attributeTypeMap;
    }

    public constructor() {
        this.type = "OnlineArchiveSchedule";
    }
}

