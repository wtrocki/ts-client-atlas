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
* One or more settings that determine how the MongoDB Cloud creates this MongoDB index.
*/
export class IndexOptions {
    /**
    * Index version number applied to the 2dsphere index. MongoDB 3.2 and later use version 3. Use this option to override the default version number. This option applies to the **2dsphere** index type only.
    */
    '_2dsphereIndexVersion': number;
    /**
    * Flag that indicates whether MongoDB should build the index in the background. This applies to MongoDB databases running feature compatibility version 4.0 or earlier. MongoDB databases running FCV 4.2 or later build indexes using an optimized build process. This process holds the exclusive lock only at the beginning and end of the build process. The rest of the build process yields to interleaving read and write operations. MongoDB databases running FCV 4.2 or later ignore this option. This option applies to all index types.
    */
    'background'?: boolean;
    /**
    * Number of precision applied to the stored geohash value of the location data. This option applies to the **2d** index type only.
    */
    'bits'?: number;
    /**
    * Number of units within which to group the location values. You could group in the same bucket those location values within the specified number of units to each other. This option applies to the geoHaystack index type only.  MongoDB 5.0 removed geoHaystack Indexes and the `geoSearch` command.
    */
    'bucketSize'?: number;
    /**
    * Human language that determines the list of stop words and the rules for the stemmer and tokenizer. This option accepts the supported languages using its name in lowercase english or the ISO 639-2 code. If you set this parameter to `\"none\"`, then the text search uses simple tokenization with no list of stop words and no stemming. This option applies to the **text** index type only.
    */
    'defaultLanguage'?: string;
    /**
    * Number of seconds that MongoDB retains documents in a Time To Live (TTL) index.
    */
    'expireAfterSeconds'?: number;
    /**
    * Flag that determines whether the index is hidden from the query planner. A hidden index is not evaluated as part of the query plan selection.
    */
    'hidden'?: boolean;
    /**
    * Human-readable label that identifies the document parameter that contains the override language for the document. This option applies to the **text** index type only.
    */
    'languageOverride'?: string;
    /**
    * Upper inclusive boundary to limit the longitude and latitude values. This option applies to the 2d index type only.
    */
    'max'?: number;
    /**
    * Lower inclusive boundary to limit the longitude and latitude values. This option applies to the 2d index type only.
    */
    'min'?: number;
    /**
    * Human-readable label that identifies this index. This option applies to all index types.
    */
    'name'?: string;
    /**
    * Rules that limit the documents that the index references to a filter expression. All MongoDB index types accept a **partialFilterExpression** option. **partialFilterExpression** can include following expressions:  - equality (`\"parameter\" : \"value\"` or using the `$eq` operator) - `\"$exists\": true` , maximum: `$gt`, `$gte`, `$lt`, `$lte` comparisons - `$type` - `$and` (top-level only)  This option applies to all index types.
    */
    'partialFilterExpression'?: { [key: string]: any; };
    /**
    * Flag that indicates whether the index references documents that only have the specified parameter. These indexes use less space but behave differently in some situations like when sorting. The following index types default to sparse and ignore this option: `2dsphere`, `2d`, `geoHaystack`, `text`.  Compound indexes that includes one or more indexes with `2dsphere` keys alongside other key types, only the `2dsphere` index parameters determine which documents the index references. If you run MongoDB 3.2 or later, use partial indexes. This option applies to all index types.
    */
    'sparse'?: boolean;
    /**
    * Storage engine set for the specific index. This value can be set only at creation. This option uses the following format: `\"storageEngine\" : { \"<storage-engine-name>\" : \"<options>\" }` MongoDB validates storage engine configuration options when creating indexes. To support replica sets with members with different storage engines, MongoDB logs these options to the oplog during replication. This option applies to all index types.
    */
    'storageEngine'?: { [key: string]: any; };
    /**
    * Version applied to this text index. MongoDB 3.2 and later use version `3`. Use this option to override the default version number. This option applies to the **text** index type only.
    */
    'textIndexVersion'?: number;
    /**
    * Flag that indicates whether this index can accept insertion or update of documents when the index key value matches an existing index key value. Set `\"unique\" : true` to set this index as unique. You can't set a hashed index to be unique. This option applies to all index types.
    */
    'unique'?: boolean;
    /**
    * Relative importance to place upon provided index parameters. This object expresses this as key/value pairs of index parameter and weight to apply to that parameter. You can specify weights for some or all the indexed parameters. The weight must be an integer between 1 and 99,999. MongoDB 5.0 and later can apply **weights** to **text** indexes only.
    */
    'weights'?: { [key: string]: any; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "_2dsphereIndexVersion",
            "baseName": "2dsphereIndexVersion",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "background",
            "baseName": "background",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "bits",
            "baseName": "bits",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "bucketSize",
            "baseName": "bucketSize",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "defaultLanguage",
            "baseName": "default_language",
            "type": "string",
            "format": ""
        },
        {
            "name": "expireAfterSeconds",
            "baseName": "expireAfterSeconds",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "languageOverride",
            "baseName": "language_override",
            "type": "string",
            "format": ""
        },
        {
            "name": "max",
            "baseName": "max",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "min",
            "baseName": "min",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "partialFilterExpression",
            "baseName": "partialFilterExpression",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "sparse",
            "baseName": "sparse",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "storageEngine",
            "baseName": "storageEngine",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "textIndexVersion",
            "baseName": "textIndexVersion",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "unique",
            "baseName": "unique",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "weights",
            "baseName": "weights",
            "type": "{ [key: string]: any; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IndexOptions.attributeTypeMap;
    }

    public constructor() {
    }
}

