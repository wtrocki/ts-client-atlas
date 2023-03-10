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
* Details to integrate one Slack account with one MongoDB Cloud project.
*/
export class ApiSlackView {
    /**
    * Key that allows MongoDB Cloud to access your Slack account.  **NOTE**: After you create a notification which requires an API or integration key, the key appears partially redacted when you:  * View or edit the alert through the Atlas UI.  * Query the alert for the notification through the Atlas Administration API.  **IMPORTANT**: Slack integrations now use the OAuth2 verification method and must  be initially configured, or updated from a legacy integration, through the Atlas  third-party service integrations page. Legacy tokens will soon no longer be  supported.
    */

    'apiToken': string;
    /**
    * Name of the Slack channel to which MongoDB Cloud sends alert notifications.
    */

    'channelName': string;
    /**
    * Human-readable label that identifies your Slack team. Set this parameter when you configure a legacy Slack integration.
    */

    'teamName'?: string;
    /**
    * Human-readable label that identifies the service to which you want to integrate with MongoDB Cloud. The value must match the third-party service integration type.
    */

    'type'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiToken",
            "baseName": "apiToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "channelName",
            "baseName": "channelName",
            "type": "string",
            "format": ""
        },
        {
            "name": "teamName",
            "baseName": "teamName",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiSlackView.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ApiSlackViewTypeEnum = "SLACK" ;

