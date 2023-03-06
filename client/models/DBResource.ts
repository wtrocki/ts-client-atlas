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
* Namespace to which this database user has access.
*/
export class DBResource {
    /**
    * Flag that indicates whether to grant the action on the cluster resource. If `true`, MongoDB Cloud ignores the **actions.resources.collection** and **actions.resources.db** parameters.
    */

    'cluster': boolean;
    /**
    * Human-readable label that identifies the collection on which you grant the action to one MongoDB user. If you don't set this parameter, you grant the action to all collections in the database specified in the **actions.resources.db** parameter. If you set `\"actions.resources.cluster\" : true`, MongoDB Cloud ignores this parameter.
    */

    'collection': string;
    /**
    * Human-readable label that identifies the database on which you grant the action to one MongoDB user. If you set `\"actions.resources.cluster\" : true`, MongoDB Cloud ignores this parameter.
    */

    'db': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cluster",
            "baseName": "cluster",
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
            "name": "db",
            "baseName": "db",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DBResource.attributeTypeMap;
    }

    public constructor() {
    }
}

