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
* Filter that removes tokens that are too short or too long.
*/
export class TokenFilterlength {
    /**
    * Number that specifies the maximum length of a token. Value must be greater than or equal to **min**.
    */

    'max'?: number;
    /**
    * Number that specifies the minimum length of a token. This value must be less than or equal to **max**.
    */

    'min'?: number;
    /**
    * Human-readable label that identifies this token filter type.
    */

    'type': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "max",
            "baseName": "max",
            "type": "number",
            "format": ""
        },
        {
            "name": "min",
            "baseName": "min",
            "type": "number",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TokenFilterlength.attributeTypeMap;
    }

    public constructor() {
    }
}


export type TokenFilterlengthTypeEnum = "length" ;

