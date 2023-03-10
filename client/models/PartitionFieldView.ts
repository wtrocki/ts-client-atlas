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
* Metadata to partition this online archive.
*/
export class PartitionFieldView {
    /**
    * Human-readable label that identifies the parameter that MongoDB Cloud uses to partition data. To specify a nested parameter, use the dot notation.
    */

    'fieldName': string;
    /**
    * Data type of the parameter that that MongoDB Cloud uses to partition data. Partition parameters of type [UUID](http://bsonspec.org/spec.html) must be of binary subtype 4. MongoDB Cloud skips partition parameters of type UUID with subtype 3.
    */

    'fieldType'?: string;
    /**
    * Sequence in which MongoDB Cloud slices the collection data to create partitions. The resource expresses this sequence starting with zero. The value of the **criteria.dateField** parameter defaults as the first item in the partition sequence.
    */

    'order': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fieldName",
            "baseName": "fieldName",
            "type": "string",
            "format": ""
        },
        {
            "name": "fieldType",
            "baseName": "fieldType",
            "type": "string",
            "format": ""
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return PartitionFieldView.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PartitionFieldViewFieldTypeEnum = "date" | "int" | "long" | "objectId" | "string" | "uuid" ;

