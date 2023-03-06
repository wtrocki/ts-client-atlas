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
* Collection of settings that configures the project.
*/
export class GroupSettings {
    /**
    * Flag that indicates whether to collect database-specific metrics  for the specified project.
    */

    'isCollectDatabaseSpecificsStatisticsEnabled'?: boolean;
    /**
    * Flag that indicates whether to enable the Data Explorer for the specified project.
    */

    'isDataExplorerEnabled'?: boolean;
    /**
    * Flag that indicates whether to enable extended storage sizes  for the specified project.
    */

    'isExtendedStorageSizesEnabled'?: boolean;
    /**
    * Flag that indicates whether to enable the Performance Advisor and Profiler  for the specified project.
    */

    'isPerformanceAdvisorEnabled'?: boolean;
    /**
    * Flag that indicates whether to enable the Real Time Performance Panel for the specified project.
    */

    'isRealtimePerformancePanelEnabled'?: boolean;
    /**
    * Flag that indicates whether to enable the Schema Advisor for the specified project.
    */

    'isSchemaAdvisorEnabled'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isCollectDatabaseSpecificsStatisticsEnabled",
            "baseName": "isCollectDatabaseSpecificsStatisticsEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isDataExplorerEnabled",
            "baseName": "isDataExplorerEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isExtendedStorageSizesEnabled",
            "baseName": "isExtendedStorageSizesEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isPerformanceAdvisorEnabled",
            "baseName": "isPerformanceAdvisorEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isRealtimePerformancePanelEnabled",
            "baseName": "isRealtimePerformancePanelEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isSchemaAdvisorEnabled",
            "baseName": "isSchemaAdvisorEnabled",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GroupSettings.attributeTypeMap;
    }

    public constructor() {
    }
}

