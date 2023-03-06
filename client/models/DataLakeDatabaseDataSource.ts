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
* Data store that maps to a collection for this data lake.
*/
export class DataLakeDatabaseDataSource {
    /**
    * Flag that validates the scheme in the specified URLs. If `true`, allows insecure `HTTP` scheme, doesn't verify the server's certificate chain and hostname, and accepts any certificate with any hostname presented by the server. If `false`, allows secure `HTTPS` scheme only.
    */

    'allowInsecure'?: boolean;
    /**
    * Human-readable label that identifies the collection in the database. For creating a wildcard (`*`) collection, you must omit this parameter.
    */

    'collection'?: string;
    /**
    * Regex pattern to use for creating the wildcard (*) collection. To learn more about the regex syntax, see [Go programming language](https://pkg.go.dev/regexp).
    */

    'collectionRegex'?: string;
    /**
    * Human-readable label that identifies the database, which contains the collection in the cluster. You must omit this parameter to generate wildcard (`*`) collections for dynamically generated databases.
    */

    'database'?: string;
    /**
    * Regex pattern to use for creating the wildcard (*) database. To learn more about the regex syntax, see [Go programming language](https://pkg.go.dev/regexp).
    */

    'databaseRegex'?: string;
    /**
    * File format that MongoDB Cloud uses if it encounters a file without a file extension while searching **storeName**.
    */

    'defaultFormat'?: string;
    /**
    * File path that controls how MongoDB Cloud searches for and parses files in the **storeName** before mapping them to a collection.Specify ``/`` to capture all files and folders from the ``prefix`` path.
    */

    'path'?: string;
    /**
    * Name for the field that includes the provenance of the documents in the results. MongoDB Cloud returns different fields in the results for each supported provider.
    */

    'provenanceFieldName'?: string;
    /**
    * Human-readable label that identifies the data store that MongoDB Cloud maps to the collection.
    */

    'storeName'?: string;
    /**
    * URLs of the publicly accessible data files. You can't specify URLs that require authentication. Atlas Data Lake creates a partition for each URL. If empty or omitted, Data Lake uses the URLs from the store specified in the **dataSources.storeName** parameter.
    */

    'urls'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "allowInsecure",
            "baseName": "allowInsecure",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "collection",
            "baseName": "collection",
            "type": "string",
            "format": ""
        },
        {
            "name": "collectionRegex",
            "baseName": "collectionRegex",
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
            "name": "databaseRegex",
            "baseName": "databaseRegex",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultFormat",
            "baseName": "defaultFormat",
            "type": "string",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "provenanceFieldName",
            "baseName": "provenanceFieldName",
            "type": "string",
            "format": ""
        },
        {
            "name": "storeName",
            "baseName": "storeName",
            "type": "string",
            "format": ""
        },
        {
            "name": "urls",
            "baseName": "urls",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DataLakeDatabaseDataSource.attributeTypeMap;
    }

    public constructor() {
    }
}


export type DataLakeDatabaseDataSourceDefaultFormatEnum = ".avro" | ".avro.bz2" | ".avro.gz" | ".bson" | ".bson.bz2" | ".bson.gz" | ".bsonx" | ".csv" | ".csv.bz2" | ".csv.gz" | ".json" | ".json.bz2" | ".json.gz" | ".orc" | ".parquet" | ".tsv" | ".tsv.bz2" | ".tsv.gz" ;

