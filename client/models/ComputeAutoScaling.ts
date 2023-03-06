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
* Collection of settings that configures how a cluster might scale its cluster tier and whether the cluster can scale down. Cluster tier auto-scaling is unavailable for clusters using Low CPU or NVME storage classes.
*/
export class ComputeAutoScaling {
    /**
    * Flag that indicates whether cluster tier auto-scaling is enabled. Set to `true` to enable cluster tier auto-scaling. If enabled, you must specify a value for **providerSettings.autoScaling.compute.maxInstanceSize** also. Set to `false` to disable cluster tier auto-scaling.
    */

    'enabled'?: boolean;
    /**
    * Flag that indicates whether the cluster tier can scale down. This is required if **autoScaling.compute.enabled** is `true`. If you enable this option, specify a value for **providerSettings.autoScaling.compute.minInstanceSize**.
    */

    'scaleDownEnabled'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "scaleDownEnabled",
            "baseName": "scaleDownEnabled",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ComputeAutoScaling.attributeTypeMap;
    }

    public constructor() {
    }
}

