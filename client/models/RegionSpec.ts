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
* Physical location where MongoDB Cloud provisions cluster nodes.
*/
export class RegionSpec {
    /**
    * Number of analytics nodes in the region. Analytics nodes handle analytic data such as reporting queries from MongoDB Connector for Business Intelligence on MongoDB Cloud. Analytics nodes are read-only, and can never become the primary. Use **replicationSpecs[n].{region}.analyticsNodes** instead.
    */

    'analyticsNodes'?: number;
    /**
    * Number of electable nodes to deploy in the specified region. Electable nodes can become the primary and can facilitate local reads. Use **replicationSpecs[n].{region}.electableNodes** instead.
    */

    'electableNodes'?: number;
    /**
    * Number that indicates the election priority of the region. To identify the Preferred Region of the cluster, set this parameter to `7`. The primary node runs in the **Preferred Region**. To identify a read-only region, set this parameter to `0`.
    */

    'priority'?: number;
    /**
    * Number of read-only nodes in the region. Read-only nodes can never become the primary member, but can facilitate local reads. Use **replicationSpecs[n].{region}.readOnlyNodes** instead.
    */

    'readOnlyNodes'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "analyticsNodes",
            "baseName": "analyticsNodes",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "electableNodes",
            "baseName": "electableNodes",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "readOnlyNodes",
            "baseName": "readOnlyNodes",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return RegionSpec.attributeTypeMap;
    }

    public constructor() {
    }
}


export type RegionSpecElectableNodesEnum = "0" | "3" | "5" | "7" ;

