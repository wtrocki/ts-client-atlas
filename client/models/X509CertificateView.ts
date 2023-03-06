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

export class X509CertificateView {
    /**
    * Latest date that the certificate is valid.
    */

    'notAfter'?: Date;
    /**
    * Earliest date that the certificate is valid.
    */

    'notBefore'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "notAfter",
            "baseName": "notAfter",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "notBefore",
            "baseName": "notBefore",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return X509CertificateView.attributeTypeMap;
    }

    public constructor() {
    }
}

