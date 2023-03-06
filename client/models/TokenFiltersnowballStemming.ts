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
* Filter that stems tokens using a Snowball-generated stemmer.
*/
export class TokenFiltersnowballStemming {
    /**
    * Snowball-generated stemmer to use.
    */

    'stemmerName': string;
    /**
    * Human-readable label that identifies this token filter type.
    */

    'type': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "stemmerName",
            "baseName": "stemmerName",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TokenFiltersnowballStemming.attributeTypeMap;
    }

    public constructor() {
    }
}


export type TokenFiltersnowballStemmingStemmerNameEnum = "arabic" | "armenian" | "basque" | "catalan" | "danish" | "dutch" | "english" | "finnish" | "french" | "german" | "german2" | "hungarian" | "irish" | "italian" | "kp" | "lithuanian" | "lovins" | "norwegian" | "porter" | "portuguese" | "romanian" | "russian" | "spanish" | "swedish" | "turkish" ;
export type TokenFiltersnowballStemmingTypeEnum = "snowballStemming" ;

