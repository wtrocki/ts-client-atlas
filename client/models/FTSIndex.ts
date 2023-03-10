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

import { ApiAtlasFTSAnalyzersViewManual } from '../models/ApiAtlasFTSAnalyzersViewManual';
import { ApiAtlasFTSMappingsViewManual } from '../models/ApiAtlasFTSMappingsViewManual';
import { FTSSynonymMappingDefinition } from '../models/FTSSynonymMappingDefinition';
import { HttpFile } from '../http/http';

export class FTSIndex {
    /**
    * Specific pre-defined method chosen to convert database field text into searchable words. This conversion reduces the text of fields into the smallest units of text. These units are called a **term** or **token**. This process, known as tokenization, involves a variety of changes made to the text in fields:  - extracting words - removing punctuation - removing accents - changing to lowercase - removing common words - reducing words to their root form (stemming) - changing words to their base form (lemmatization)  MongoDB Cloud uses the selected process to build the Atlas Search index.
    */

    'analyzer'?: string;
    /**
    * List of user-defined methods to convert database field text into searchable words.
    */

    'analyzers'?: Array<ApiAtlasFTSAnalyzersViewManual>;
    /**
    * Human-readable label that identifies the collection that contains one or more Atlas Search indexes.
    */

    'collectionName': string;
    /**
    * Human-readable label that identifies the database that contains the collection with one or more Atlas Search indexes.
    */

    'database': string;
    /**
    * Unique 24-hexadecimal digit string that identifies this Atlas Search index.
    */

    'indexID'?: string;

    'mappings'?: ApiAtlasFTSMappingsViewManual;
    /**
    * Human-readable label that identifies this index. Within each namespace, names of all indexes in the namespace must be unique.
    */

    'name': string;
    /**
    * Method applied to identify words when searching this index.
    */

    'searchAnalyzer'?: string;
    /**
    * Condition of the search index when you made this request.  | Status | Index Condition |  |---|---|  | IN_PROGRESS | Atlas is building or re-building the index after an edit. |  | STEADY | You can use this search index. |  | FAILED | Atlas could not build the index. |  | MIGRATING | Atlas is upgrading the underlying cluster tier and migrating indexes. |  | PAUSED | The cluster is paused. | 
    */

    'status'?: string;
    /**
    * Rule sets that map words to their synonyms in this index.
    */

    'synonyms'?: Array<FTSSynonymMappingDefinition>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "analyzer",
            "baseName": "analyzer",
            "type": "string",
            "format": ""
        },
        {
            "name": "analyzers",
            "baseName": "analyzers",
            "type": "Array<ApiAtlasFTSAnalyzersViewManual>",
            "format": ""
        },
        {
            "name": "collectionName",
            "baseName": "collectionName",
            "type": "string",
            "format": ""
        },
        {
            "name": "database",
            "baseName": "database",
            "type": "string",
            "format": ""
        },
        {
            "name": "indexID",
            "baseName": "indexID",
            "type": "string",
            "format": ""
        },
        {
            "name": "mappings",
            "baseName": "mappings",
            "type": "ApiAtlasFTSMappingsViewManual",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "searchAnalyzer",
            "baseName": "searchAnalyzer",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "synonyms",
            "baseName": "synonyms",
            "type": "Array<FTSSynonymMappingDefinition>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FTSIndex.attributeTypeMap;
    }

    public constructor() {
    }
}


export type FTSIndexAnalyzerEnum = "lucene.standard" | "lucene.simple" | "lucene.whitespace" | "lucene.keyword" | "lucene.arabic" | "lucene.armenian" | "lucene.basque" | "lucene.bengali" | "lucene.brazilian" | "lucene.bulgarian" | "lucene.catalan" | "lucene.chinese" | "lucene.cjk" | "lucene.czech" | "lucene.danish" | "lucene.dutch" | "lucene.english" | "lucene.finnish" | "lucene.french" | "lucene.galician" | "lucene.german" | "lucene.greek" | "lucene.hindi" | "lucene.hungarian" | "lucene.indonesian" | "lucene.irish" | "lucene.italian" | "lucene.japanese" | "lucene.korean" | "lucene.kuromoji" | "lucene.latvian" | "lucene.lithuanian" | "lucene.morfologik" | "lucene.nori" | "lucene.norwegian" | "lucene.persian" | "lucene.portuguese" | "lucene.romanian" | "lucene.russian" | "lucene.smartcn" | "lucene.sorani" | "lucene.spanish" | "lucene.swedish" | "lucene.thai" | "lucene.turkish" | "lucene.ukrainian" ;
export type FTSIndexSearchAnalyzerEnum = "lucene.standard" | "lucene.simple" | "lucene.whitespace" | "lucene.keyword" | "lucene.arabic" | "lucene.armenian" | "lucene.basque" | "lucene.bengali" | "lucene.brazilian" | "lucene.bulgarian" | "lucene.catalan" | "lucene.chinese" | "lucene.cjk" | "lucene.czech" | "lucene.danish" | "lucene.dutch" | "lucene.english" | "lucene.finnish" | "lucene.french" | "lucene.galician" | "lucene.german" | "lucene.greek" | "lucene.hindi" | "lucene.hungarian" | "lucene.indonesian" | "lucene.irish" | "lucene.italian" | "lucene.japanese" | "lucene.korean" | "lucene.kuromoji" | "lucene.latvian" | "lucene.lithuanian" | "lucene.morfologik" | "lucene.nori" | "lucene.norwegian" | "lucene.persian" | "lucene.portuguese" | "lucene.romanian" | "lucene.russian" | "lucene.smartcn" | "lucene.sorani" | "lucene.spanish" | "lucene.swedish" | "lucene.thai" | "lucene.turkish" | "lucene.ukrainian" ;
export type FTSIndexStatusEnum = "IN_PROGRESS" | "STEADY" | "FAILED" | "MIGRATING" | "STALE" | "PAUSED" ;

