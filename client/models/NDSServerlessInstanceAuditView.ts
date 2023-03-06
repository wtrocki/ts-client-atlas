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
import { NDSServerlessInstanceAuditTypeView } from '../models/NDSServerlessInstanceAuditTypeView';
import { Raw } from '../models/Raw';
import { HttpFile } from '../http/http';

/**
* NDS serverless instance audit identifies any activities around serverless instance.
*/
export class NDSServerlessInstanceAuditView {
    /**
    * Unique 24-hexadecimal digit string that identifies the [API Key](https://dochub.mongodb.org/core/atlas-create-prog-api-key) that triggered the event. If this resource returns this parameter, it doesn't return the **userId** parameter.
    */

    'apiKeyId'?: string;
    /**
    * Date and time when this event occurred. This parameter expresses its value in the <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener noreferrer\">ISO 8601</a> timestamp format in UTC.
    */

    'created': Date;

    'eventTypeName': NDSServerlessInstanceAuditTypeView;
    /**
    * Unique 24-hexadecimal digit string that identifies the project in which the event occurred. The **eventId** identifies the specific event.
    */

    'groupId'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the event.
    */

    'id': string;
    /**
    * Flag that indicates whether a MongoDB employee triggered the specified event.
    */

    'isGlobalAdmin'?: boolean;
    /**
    * List of one or more Uniform Resource Locators (URLs) that point to API sub-resources, related API resources, or both. RFC 5988 outlines these relationships.
    */

    'links'?: Array<Link>;
    /**
    * Unique 24-hexadecimal digit string that identifies the organization to which these events apply.
    */

    'orgId'?: string;
    /**
    * Public part of the [API Key](https://dochub.mongodb.org/core/atlas-create-prog-api-key) that triggered the event. If this resource returns this parameter, it doesn't return the **username** parameter.
    */

    'publicKey'?: string;

    'raw'?: Raw;
    /**
    * IPv4 or IPv6 address from which the user triggered this event.
    */

    'remoteAddress'?: string;
    /**
    * Unique 24-hexadecimal digit string that identifies the console user who triggered the event. If this resource returns this parameter, it doesn't return the **apiKeyId** parameter.
    */

    'userId'?: string;
    /**
    * Email address for the user who triggered this event. If this resource returns this parameter, it doesn't return the **publicApiKey** parameter.
    */

    'username'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiKeyId",
            "baseName": "apiKeyId",
            "type": "string",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "eventTypeName",
            "baseName": "eventTypeName",
            "type": "NDSServerlessInstanceAuditTypeView",
            "format": ""
        },
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "isGlobalAdmin",
            "baseName": "isGlobalAdmin",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>",
            "format": ""
        },
        {
            "name": "orgId",
            "baseName": "orgId",
            "type": "string",
            "format": ""
        },
        {
            "name": "publicKey",
            "baseName": "publicKey",
            "type": "string",
            "format": "email"
        },
        {
            "name": "raw",
            "baseName": "raw",
            "type": "Raw",
            "format": ""
        },
        {
            "name": "remoteAddress",
            "baseName": "remoteAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string",
            "format": ""
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": "email"
        }    ];

    static getAttributeTypeMap() {
        return NDSServerlessInstanceAuditView.attributeTypeMap;
    }

    public constructor() {
    }
}



