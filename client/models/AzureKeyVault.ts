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
* Details that define the configuration of Encryption at Rest using Azure Key Vault (AKV).
*/
export class AzureKeyVault {
    /**
    * Azure environment in which your account credentials reside.
    */

    'azureEnvironment'?: string;
    /**
    * Unique 36-hexadecimal character string that identifies an Azure application associated with your Azure Active Directory tenant.
    */

    'clientID'?: string;
    /**
    * Flag that indicates whether someone enabled encryption at rest for the specified  project. To disable encryption at rest using customer key management and remove the configuration details, pass only this parameter with a value of `false`.
    */

    'enabled'?: boolean;
    /**
    * Web address with a unique key that identifies for your Azure Key Vault.
    */

    'keyIdentifier'?: string;
    /**
    * Unique string that identifies the Azure Key Vault that contains your key.
    */

    'keyVaultName'?: string;
    /**
    * Name of the Azure resource group that contains your Azure Key Vault.
    */

    'resourceGroupName'?: string;
    /**
    * Private data that you need secured and that belongs to the specified Azure Key Vault (AKV) tenant (**azureKeyVault.tenantID**). This data can include any type of sensitive data such as passwords, database connection strings, API keys, and the like. AKV stores this information as encrypted binary data.
    */

    'secret'?: string;
    /**
    * Unique 36-hexadecimal character string that identifies your Azure subscription.
    */

    'subscriptionID'?: string;
    /**
    * Unique 36-hexadecimal character string that identifies the Azure Active Directory tenant within your Azure subscription.
    */

    'tenantID'?: string;
    /**
    * Flag that indicates whether the Azure encryption key can encrypt and decrypt data.
    */

    'valid'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "azureEnvironment",
            "baseName": "azureEnvironment",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientID",
            "baseName": "clientID",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "keyIdentifier",
            "baseName": "keyIdentifier",
            "type": "string",
            "format": ""
        },
        {
            "name": "keyVaultName",
            "baseName": "keyVaultName",
            "type": "string",
            "format": ""
        },
        {
            "name": "resourceGroupName",
            "baseName": "resourceGroupName",
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
            "name": "subscriptionID",
            "baseName": "subscriptionID",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "tenantID",
            "baseName": "tenantID",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "valid",
            "baseName": "valid",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AzureKeyVault.attributeTypeMap;
    }

    public constructor() {
    }
}


export type AzureKeyVaultAzureEnvironmentEnum = "AZURE" | "AZURE_CHINA" | "AZURE_GERMANY" ;

