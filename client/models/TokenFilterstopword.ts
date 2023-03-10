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
* Filter that removes tokens that correspond to the specified stop words. This token filter doesn't analyze the stop words that you specify.
*/
export class TokenFilterstopword {
    /**
    * Flag that indicates whether to ignore the case of stop words when filtering the tokens to remove.
    */

    'ignoreCase'?: boolean;
    /**
    * The stop words that correspond to the tokens to remove. Value must be one or more stop words.
    */

    'tokens': Array<string>;
    /**
    * Human-readable label that identifies this token filter type.
    */

    'type': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ignoreCase",
            "baseName": "ignoreCase",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "tokens",
            "baseName": "tokens",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TokenFilterstopword.attributeTypeMap;
    }

    public constructor() {
    }
}


export type TokenFilterstopwordTypeEnum = "stopword" ;

