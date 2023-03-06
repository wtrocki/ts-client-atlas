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

import { Destination } from '../models/Destination';
import { Source } from '../models/Source';
import { HttpFile } from '../http/http';

export class LiveMigrationRequestView {
    /**
    * Unique 24-hexadecimal digit string that identifies the migration request.
    */
    'id'?: string;
    'destination': Destination;
    /**
    * Flag that indicates whether the migration process drops all collections from the destination cluster before the migration starts.
    */
    'dropEnabled': boolean;
    /**
    * List of migration hosts used for this migration.
    */
    'migrationHosts'?: Array<string>;
    'source': Source;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "Destination",
            "format": ""
        },
        {
            "name": "dropEnabled",
            "baseName": "dropEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "migrationHosts",
            "baseName": "migrationHosts",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "Source",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LiveMigrationRequestView.attributeTypeMap;
    }

    public constructor() {
    }
}
