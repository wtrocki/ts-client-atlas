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

import { X509Certificate } from '../models/X509Certificate';
import { HttpFile } from '../http/http';

/**
* PEM file information for the identity provider's certificates.
*/
export class PemFileInfo {

    'certificates'?: Array<X509Certificate>;

    'fileName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "certificates",
            "baseName": "certificates",
            "type": "Array<X509Certificate>",
            "format": ""
        },
        {
            "name": "fileName",
            "baseName": "fileName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PemFileInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

