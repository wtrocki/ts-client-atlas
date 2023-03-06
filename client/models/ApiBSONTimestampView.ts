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
* BSON timestamp that indicates when the checkpoint token entry in the oplog occurred.
*/
export class ApiBSONTimestampView {
    /**
    * Date and time when the oplog recorded this database operation. This parameter expresses its value in the ISO 8601 timestamp format in UTC.
    */
    'date'?: Date;
    /**
    * Order of the database operation that the oplog recorded at specific date and time.
    */
    'increment'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "date",
            "baseName": "date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "increment",
            "baseName": "increment",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return ApiBSONTimestampView.attributeTypeMap;
    }

    public constructor() {
    }
}
