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
* Tokenizer that splits tokens using a regular-expression based delimiter.
*/
export class TokenizerregexSplit {
    /**
    * Regular expression to match against.
    */
    'pattern': string;
    /**
    * Human-readable label that identifies this tokenizer type.
    */
    'type': TokenizerregexSplitTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pattern",
            "baseName": "pattern",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TokenizerregexSplitTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TokenizerregexSplit.attributeTypeMap;
    }

    public constructor() {
    }
}


export type TokenizerregexSplitTypeEnum = "regexSplit" ;

