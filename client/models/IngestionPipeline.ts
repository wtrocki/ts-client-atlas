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

import { FieldTransformation } from '../models/FieldTransformation';
import { IngestionSink } from '../models/IngestionSink';
import { IngestionSource } from '../models/IngestionSource';
import { HttpFile } from '../http/http';

/**
* Details of a Data Lake Pipeline.
*/
export class IngestionPipeline {
    /**
    * Unique 24-hexadecimal digit string that identifies the Data Lake Pipeline.
    */
    'id'?: string;
    /**
    * Timestamp that indicates when the Data Lake Pipeline was created.
    */
    'createdDate'?: Date;
    /**
    * Unique 24-hexadecimal digit string that identifies the group.
    */
    'groupId'?: string;
    /**
    * Timestamp that indicates the last time that the Data Lake Pipeline was updated.
    */
    'lastUpdatedDate'?: Date;
    /**
    * Name of this Data Lake Pipeline.
    */
    'name'?: string;
    'sink'?: IngestionSink;
    'source'?: IngestionSource;
    /**
    * State of this Data Lake Pipeline.
    */
    'state'?: IngestionPipelineStateEnum;
    /**
    * Fields to be excluded for this Data Lake Pipeline.
    */
    'transformations'?: Array<FieldTransformation>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastUpdatedDate",
            "baseName": "lastUpdatedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "sink",
            "baseName": "sink",
            "type": "IngestionSink",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "IngestionSource",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "IngestionPipelineStateEnum",
            "format": ""
        },
        {
            "name": "transformations",
            "baseName": "transformations",
            "type": "Array<FieldTransformation>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IngestionPipeline.attributeTypeMap;
    }

    public constructor() {
    }
}


export type IngestionPipelineStateEnum = "ACTIVE" | "PAUSED" ;
