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

import { TokenFilterasciiFolding } from '../models/TokenFilterasciiFolding';
import { TokenFilterdaitchMokotoffSoundex } from '../models/TokenFilterdaitchMokotoffSoundex';
import { TokenFilteredgeGram } from '../models/TokenFilteredgeGram';
import { TokenFiltericuFolding } from '../models/TokenFiltericuFolding';
import { TokenFiltericuNormalizer } from '../models/TokenFiltericuNormalizer';
import { TokenFilterlength } from '../models/TokenFilterlength';
import { TokenFilterlowercase } from '../models/TokenFilterlowercase';
import { TokenFilternGram } from '../models/TokenFilternGram';
import { TokenFilterregex } from '../models/TokenFilterregex';
import { TokenFilterreverse } from '../models/TokenFilterreverse';
import { TokenFiltershingle } from '../models/TokenFiltershingle';
import { TokenFiltersnowballStemming } from '../models/TokenFiltersnowballStemming';
import { TokenFilterstopword } from '../models/TokenFilterstopword';
import { TokenFiltertrim } from '../models/TokenFiltertrim';
import { HttpFile } from '../http/http';

export class ApiAtlasFTSAnalyzersViewManualTokenFiltersInner {
    /**
    * Value that indicates whether to include or omit the original tokens in the output of the token filter.  Choose `include` if you want to support queries on both the original tokens as well as the converted forms.   Choose `omit` if you want to query only on the converted forms of the original tokens.
    */
    'originalTokens'?: ApiAtlasFTSAnalyzersViewManualTokenFiltersInnerOriginalTokensEnum;
    /**
    * Human-readable label that identifies this token filter type.
    */
    'type': ApiAtlasFTSAnalyzersViewManualTokenFiltersInnerTypeEnum;
    /**
    * Value that specifies the maximum length of generated n-grams. This value must be greater than or equal to **minGram**.
    */
    'maxGram': number;
    /**
    * Value that specifies the minimum length of generated n-grams. This value must be less than or equal to **maxGram**.
    */
    'minGram': number;
    /**
    * Value that indicates whether to index tokens shorter than **minGram** or longer than **maxGram**.
    */
    'termNotInBounds'?: ApiAtlasFTSAnalyzersViewManualTokenFiltersInnerTermNotInBoundsEnum;
    /**
    * Normalization form to apply.
    */
    'normalizationForm'?: ApiAtlasFTSAnalyzersViewManualTokenFiltersInnerNormalizationFormEnum;
    /**
    * Number that specifies the maximum length of a token. Value must be greater than or equal to **min**.
    */
    'max'?: number;
    /**
    * Number that specifies the minimum length of a token. This value must be less than or equal to **max**.
    */
    'min'?: number;
    /**
    * Value that indicates whether to replace only the first matching pattern or all matching patterns.
    */
    'matches': ApiAtlasFTSAnalyzersViewManualTokenFiltersInnerMatchesEnum;
    /**
    * Regular expression pattern to apply to each token.
    */
    'pattern': string;
    /**
    * Replacement string to substitute wherever a matching pattern occurs.
    */
    'replacement': string;
    /**
    * Value that specifies the maximum number of tokens per shingle. This value must be greater than or equal to **minShingleSize**.
    */
    'maxShingleSize': number;
    /**
    * Value that specifies the minimum number of tokens per shingle. This value must be less than or equal to **maxShingleSize**.
    */
    'minShingleSize': number;
    /**
    * Snowball-generated stemmer to use.
    */
    'stemmerName': ApiAtlasFTSAnalyzersViewManualTokenFiltersInnerStemmerNameEnum;
    /**
    * Flag that indicates whether to ignore the case of stop words when filtering the tokens to remove.
    */
    'ignoreCase'?: boolean;
    /**
    * The stop words that correspond to the tokens to remove. Value must be one or more stop words.
    */
    'tokens': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "originalTokens",
            "baseName": "originalTokens",
            "type": "ApiAtlasFTSAnalyzersViewManualTokenFiltersInnerOriginalTokensEnum",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ApiAtlasFTSAnalyzersViewManualTokenFiltersInnerTypeEnum",
            "format": ""
        },
        {
            "name": "maxGram",
            "baseName": "maxGram",
            "type": "number",
            "format": ""
        },
        {
            "name": "minGram",
            "baseName": "minGram",
            "type": "number",
            "format": ""
        },
        {
            "name": "termNotInBounds",
            "baseName": "termNotInBounds",
            "type": "ApiAtlasFTSAnalyzersViewManualTokenFiltersInnerTermNotInBoundsEnum",
            "format": ""
        },
        {
            "name": "normalizationForm",
            "baseName": "normalizationForm",
            "type": "ApiAtlasFTSAnalyzersViewManualTokenFiltersInnerNormalizationFormEnum",
            "format": ""
        },
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
            "name": "matches",
            "baseName": "matches",
            "type": "ApiAtlasFTSAnalyzersViewManualTokenFiltersInnerMatchesEnum",
            "format": ""
        },
        {
            "name": "pattern",
            "baseName": "pattern",
            "type": "string",
            "format": ""
        },
        {
            "name": "replacement",
            "baseName": "replacement",
            "type": "string",
            "format": ""
        },
        {
            "name": "maxShingleSize",
            "baseName": "maxShingleSize",
            "type": "number",
            "format": ""
        },
        {
            "name": "minShingleSize",
            "baseName": "minShingleSize",
            "type": "number",
            "format": ""
        },
        {
            "name": "stemmerName",
            "baseName": "stemmerName",
            "type": "ApiAtlasFTSAnalyzersViewManualTokenFiltersInnerStemmerNameEnum",
            "format": ""
        },
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
        }    ];

    static getAttributeTypeMap() {
        return ApiAtlasFTSAnalyzersViewManualTokenFiltersInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ApiAtlasFTSAnalyzersViewManualTokenFiltersInnerOriginalTokensEnum = "omit" | "include" ;
export type ApiAtlasFTSAnalyzersViewManualTokenFiltersInnerTypeEnum = "trim" ;
export type ApiAtlasFTSAnalyzersViewManualTokenFiltersInnerTermNotInBoundsEnum = "omit" | "include" ;
export type ApiAtlasFTSAnalyzersViewManualTokenFiltersInnerNormalizationFormEnum = "nfd" | "nfc" | "nfkd" | "nfkc" ;
export type ApiAtlasFTSAnalyzersViewManualTokenFiltersInnerMatchesEnum = "all" | "first" ;
export type ApiAtlasFTSAnalyzersViewManualTokenFiltersInnerStemmerNameEnum = "arabic" | "armenian" | "basque" | "catalan" | "danish" | "dutch" | "english" | "finnish" | "french" | "german" | "german2" | "hungarian" | "irish" | "italian" | "kp" | "lithuanian" | "lovins" | "norwegian" | "porter" | "portuguese" | "romanian" | "russian" | "spanish" | "swedish" | "turkish" ;

