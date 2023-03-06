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

import { Link } from '../models/Link';
import { ServerlessInstanceDescription } from '../models/ServerlessInstanceDescription';
import { HttpFile } from '../http/http';

export class PaginatedServerlessInstanceDescriptionView {
    /**
    * List of one or more Uniform Resource Locators (URLs) that point to API sub-resources, related API resources, or both. RFC 5988 outlines these relationships.
    */
    'links'?: Array<Link>;
    /**
    * List of returned documents that MongoDB Cloud providers when completing this request.
    */
    'results'?: Array<ServerlessInstanceDescription>;
    /**
    * Number of documents returned in this response.
    */
    'totalCount'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<ServerlessInstanceDescription>",
            "format": ""
        },
        {
            "name": "totalCount",
            "baseName": "totalCount",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return PaginatedServerlessInstanceDescriptionView.attributeTypeMap;
    }

    public constructor() {
    }
}

