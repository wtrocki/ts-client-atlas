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

import { ClusterMatcherField } from '../models/ClusterMatcherField';
import { HttpFile } from '../http/http';

/**
* Rules to apply when comparing an cluster against this alert configuration.
*/
export class ClusterMatcherView {

    'fieldName'?: ClusterMatcherField;
    /**
    * Comparison operator to apply when checking the current metric value against **matcher[n].value**.
    */

    'operator'?: string;
    /**
    * Value to match or exceed using the specified **matchers.operator**.
    */

    'value'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fieldName",
            "baseName": "fieldName",
            "type": "ClusterMatcherField",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ClusterMatcherView.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ClusterMatcherViewOperatorEnum = "EQUALS" | "CONTAINS" | "STARTS_WITH" | "ENDS_WITH" | "NOT_EQUALS" | "NOT_CONTAINS" | "REGEX" ;

