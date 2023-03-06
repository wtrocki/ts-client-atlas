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

import { ApiAtlasFTSAnalyzersViewManualCharFiltersInner } from '../models/ApiAtlasFTSAnalyzersViewManualCharFiltersInner';
import { ApiAtlasFTSAnalyzersViewManualTokenFiltersInner } from '../models/ApiAtlasFTSAnalyzersViewManualTokenFiltersInner';
import { ApiAtlasFTSAnalyzersViewManualTokenizer } from '../models/ApiAtlasFTSAnalyzersViewManualTokenizer';
import { HttpFile } from '../http/http';

/**
* Settings that describe one Atlas Search custom analyzer.
*/
export class ApiAtlasFTSAnalyzersViewManual {
    /**
    * Filters that examine text one character at a time and perform filtering operations.
    */
    'charFilters'?: Array<ApiAtlasFTSAnalyzersViewManualCharFiltersInner>;
    /**
    * Human-readable name that identifies the custom analyzer. Names must be unique within an index, and must not start with any of the following strings: - `lucene.` - `builtin.` - `mongodb.`
    */
    'name': string;
    /**
    * Filter that performs operations such as:  - Stemming, which reduces related words, such as \"talking\", \"talked\", and \"talks\" to their root word \"talk\".  - Redaction, the removal of sensitive information from public documents.
    */
    'tokenFilters'?: Array<ApiAtlasFTSAnalyzersViewManualTokenFiltersInner>;
    'tokenizer': ApiAtlasFTSAnalyzersViewManualTokenizer;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "charFilters",
            "baseName": "charFilters",
            "type": "Array<ApiAtlasFTSAnalyzersViewManualCharFiltersInner>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenFilters",
            "baseName": "tokenFilters",
            "type": "Array<ApiAtlasFTSAnalyzersViewManualTokenFiltersInner>",
            "format": ""
        },
        {
            "name": "tokenizer",
            "baseName": "tokenizer",
            "type": "ApiAtlasFTSAnalyzersViewManualTokenizer",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiAtlasFTSAnalyzersViewManual.attributeTypeMap;
    }

    public constructor() {
    }
}

