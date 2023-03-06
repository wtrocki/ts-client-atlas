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

/**
* **DATE criteria.type**.
*/
export class DateCriteriaView {
    /**
    * Indexed database parameter that stores the date that determines when data moves to the online archive. MongoDB Cloud archives the data when the current date exceeds the date in this database parameter plus the number of days specified through the **expireAfterDays** parameter. Set this parameter when you set `\"criteria.type\" : \"DATE\"`.
    */
    'dateField'?: string;
    /**
    * Syntax used to write the date after which data moves to the online archive. Date can be expressed as ISO 8601 or Epoch timestamps. The Epoch timestamp can be expressed as nanoseconds, milliseconds, or seconds. Set this parameter when **\"criteria.type\" : \"DATE\"**. You must set **\"criteria.type\" : \"DATE\"** if **\"collectionType\": \"TIMESERIES\"**.
    */
    'dateFormat'?: DateCriteriaViewDateFormatEnum;
    /**
    * Number of days after the value in the **criteria.dateField** when MongoDB Cloud archives data in the specified cluster. Set this parameter when you set **\"criteria.type\" : \"DATE\"**.
    */
    'expireAfterDays'?: number;
    /**
    * Means by which MongoDB Cloud selects data to archive. Data can be chosen using the age of the data or a MongoDB query. **DATE** selects documents to archive based on a date. **CUSTOM** selects documents to archive based on a custom JSON query. MongoDB Cloud doesn't support **CUSTOM** when `\"collectionType\": \"TIMESERIES\"`.
    */
    'type'?: DateCriteriaViewTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dateField",
            "baseName": "dateField",
            "type": "string",
            "format": ""
        },
        {
            "name": "dateFormat",
            "baseName": "dateFormat",
            "type": "DateCriteriaViewDateFormatEnum",
            "format": ""
        },
        {
            "name": "expireAfterDays",
            "baseName": "expireAfterDays",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "DateCriteriaViewTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DateCriteriaView.attributeTypeMap;
    }

    public constructor() {
    }
}


export type DateCriteriaViewDateFormatEnum = "ISODATE" | "EPOCH_SECONDS" | "EPOCH_MILLIS" | "EPOCH_NANOSECONDS" ;
export type DateCriteriaViewTypeEnum = "DATE" | "CUSTOM" ;

