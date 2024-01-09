/**
 * MongoDB Atlas Administration API
 * The MongoDB Atlas Administration API allows developers to manage all components in MongoDB Atlas.  The Atlas Administration API uses HTTP Digest Authentication to authenticate requests. Provide a programmatic API public key and corresponding private key as the username and password when constructing the HTTP request. For example, to [return database access history](#tag/Access-Tracking/operation/listAccessLogsByClusterName) with [cURL](https://en.wikipedia.org/wiki/CURL), run the following command in the terminal:  ``` curl --user \"{PUBLIC-KEY}:{PRIVATE-KEY}\" \\   --digest \\   --header \"Accept: application/vnd.atlas.2023-02-01+json\" \\   GET \"https://cloud.mongodb.com/api/atlas/v2/groups/{groupId}/dbAccessHistory/clusters/{clusterName}?pretty=true\" ```  To learn more, see [Get Started with the Atlas Administration API](https://www.mongodb.com/docs/atlas/configure-api-access/). For support, see [MongoDB Support](https://www.mongodb.com/support/get-started).
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
* Collection of settings that describe third-party integrations.
*/
export class ThridPartyIntegration {
    /**
    * Integration type  Alternatively: Human-readable label that identifies the service to which you want to integrate with MongoDB Cloud. The value must match the third-party service integration type.  Alternatively: Human-readable label that identifies the service to which you want to integrate with MongoDB Cloud. The value must match the third-party service integration type.  Alternatively: Human-readable label that identifies the service to which you want to integrate with MongoDB Cloud. The value must match the third-party service integration type.  Alternatively: Human-readable label that identifies the service to which you want to integrate with MongoDB Cloud. The value must match the third-party service integration type.  Alternatively: Human-readable label that identifies the service to which you want to integrate with MongoDB Cloud. The value must match the third-party service integration type.  Alternatively: Human-readable label that identifies the service to which you want to integrate with MongoDB Cloud. The value must match the third-party service integration type.  Alternatively: Human-readable label that identifies the service to which you want to integrate with MongoDB Cloud. The value must match the third-party service integration type.  Alternatively: Human-readable label that identifies the service to which you want to integrate with MongoDB Cloud. The value must match the third-party service integration type.  Alternatively: Human-readable label that identifies the service to which you want to integrate with MongoDB Cloud. The value must match the third-party service integration type.
    */

    'type'?: string;
    /**
    * Key that allows MongoDB Cloud to access your Datadog account.  **NOTE**: After you create a notification which requires an API or integration key, the key appears partially redacted when you:  * View or edit the alert through the Atlas UI.  * Query the alert for the notification through the Atlas Administration API.  Alternatively: Key that allows MongoDB Cloud to access your Opsgenie account.  **NOTE**: After you create a notification which requires an API or integration key, the key appears partially redacted when you:  * View or edit the alert through the Atlas UI.  * Query the alert for the notification through the Atlas Administration API.  Alternatively: Key that allows MongoDB Cloud to access your VictorOps account.  **NOTE**: After you create a notification which requires an API or integration key, the key appears partially redacted when you:  * View or edit the alert through the Atlas UI.  * Query the alert for the notification through the Atlas Administration API.
    */

    'apiKey'?: string;
    /**
    * Two-letter code that indicates which regional URL MongoDB uses to access the Datadog API.  To learn more about Datadog's regions, see <a href=\"https://docs.datadoghq.com/getting_started/site/\" target=\"_blank\" rel=\"noopener noreferrer\">Datadog Sites</a>.  Alternatively: Two-letter code that indicates which regional URL MongoDB uses to access the Opsgenie API.  Alternatively: PagerDuty region that indicates the API Uniform Resource Locator (URL) to use.
    */

    'region'?: string;
    /**
    * Endpoint web address of the Microsoft Teams webhook to which MongoDB Cloud sends notifications.  **NOTE**: When you view or edit the alert for a Microsoft Teams notification, the URL appears partially redacted.
    */

    'microsoftTeamsWebhookUrl'?: string;
    /**
    * Unique 40-hexadecimal digit string that identifies your New Relic account.
    */

    'accountId'?: string;
    /**
    * Unique 40-hexadecimal digit string that identifies your New Relic license.  **IMPORTANT**: Effective Wednesday, June 16th, 2021, New Relic no longer supports the plugin-based integration with MongoDB. We do not recommend that you sign up for the plugin-based integration. To learn more, see the <a href=\"https://discuss.newrelic.com/t/new-relic-plugin-eol-wednesday-june-16th-2021/127267\" target=\"_blank\">New Relic Plugin EOL Statement</a> Consider configuring an alternative monitoring integration before June 16th to maintain visibility into your MongoDB deployments.
    */

    'licenseKey'?: string;
    /**
    * Query key used to access your New Relic account.
    */

    'readToken'?: string;
    /**
    * Insert key associated with your New Relic account.
    */

    'writeToken'?: string;
    /**
    * Service key associated with your PagerDuty account.  **NOTE**: After you create a notification which requires an API or integration key, the key appears partially redacted when you:  * View or edit the alert through the Atlas UI.  * Query the alert for the notification through the Atlas Administration API.
    */

    'serviceKey'?: string;
    /**
    * Flag that indicates whether someone has activated the Prometheus integration.
    */

    'enabled'?: boolean;
    /**
    * Combination of IPv4 address and Internet Assigned Numbers Authority (IANA) port or the IANA port alone to which Prometheus binds to ingest MongoDB metrics.
    */

    'listenAddress'?: string;

    'password'?: string;

    'rateLimitInterval'?: number;
    /**
    * Security Scheme to apply to HyperText Transfer Protocol (HTTP) traffic between Prometheus and MongoDB Cloud.
    */

    'scheme'?: string;
    /**
    * Desired method to discover the Prometheus service.
    */

    'serviceDiscovery'?: string;
    /**
    * Root-relative path to the Transport Layer Security (TLS) Privacy Enhanced Mail (PEM) key and certificate file on the host.
    */

    'tlsPemPath'?: string;
    /**
    * Human-readable label that identifies your Prometheus incoming webhook.
    */

    'username'?: string;
    /**
    * Key that allows MongoDB Cloud to access your Slack account.  **NOTE**: After you create a notification which requires an API or integration key, the key appears partially redacted when you:  * View or edit the alert through the Atlas UI.  * Query the alert for the notification through the Atlas Administration API.  **IMPORTANT**: Slack integrations now use the OAuth2 verification method and must  be initially configured, or updated from a legacy integration, through the Atlas  third-party service integrations page. Legacy tokens will soon no longer be  supported.
    */

    'apiToken'?: string;
    /**
    * Name of the Slack channel to which MongoDB Cloud sends alert notifications.
    */

    'channelName'?: string;
    /**
    * Human-readable label that identifies your Slack team. Set this parameter when you configure a legacy Slack integration.
    */

    'teamName'?: string;
    /**
    * Routing key associated with your Splunk On-Call account.
    */

    'routingKey'?: string;
    /**
    * An optional field returned if your webhook is configured with a secret.  **NOTE**: When you view or edit the alert for a webhook notification, the secret appears completely redacted.
    */

    'secret'?: string;
    /**
    * Endpoint web address to which MongoDB Cloud sends notifications.  **NOTE**: When you view or edit the alert for a webhook notification, the URL appears partially redacted.
    */

    'url'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "apiKey",
            "baseName": "apiKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string",
            "format": ""
        },
        {
            "name": "microsoftTeamsWebhookUrl",
            "baseName": "microsoftTeamsWebhookUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string",
            "format": ""
        },
        {
            "name": "licenseKey",
            "baseName": "licenseKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "readToken",
            "baseName": "readToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "writeToken",
            "baseName": "writeToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "serviceKey",
            "baseName": "serviceKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "listenAddress",
            "baseName": "listenAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        },
        {
            "name": "rateLimitInterval",
            "baseName": "rateLimitInterval",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "scheme",
            "baseName": "scheme",
            "type": "string",
            "format": ""
        },
        {
            "name": "serviceDiscovery",
            "baseName": "serviceDiscovery",
            "type": "string",
            "format": ""
        },
        {
            "name": "tlsPemPath",
            "baseName": "tlsPemPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        },
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
            "name": "routingKey",
            "baseName": "routingKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "secret",
            "baseName": "secret",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ThridPartyIntegration.attributeTypeMap;
    }

    public constructor() {
    }
}
