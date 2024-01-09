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

import { ClusterDescriptionConnectionStringsPrivateEndpoint } from '../models/ClusterDescriptionConnectionStringsPrivateEndpoint';
import { HttpFile } from '../http/http';

/**
* Collection of Uniform Resource Locators that point to the MongoDB database.
*/
export class ClusterConnectionStrings {
    /**
    * Private endpoint-aware connection strings that use AWS-hosted clusters with Amazon Web Services (AWS) PrivateLink. Each key identifies an Amazon Web Services (AWS) interface endpoint. Each value identifies the related `mongodb://` connection string that you use to connect to MongoDB Cloud through the interface endpoint that the key names.
    */

    'awsPrivateLink'?: { [key: string]: string; };
    /**
    * Private endpoint-aware connection strings that use AWS-hosted clusters with Amazon Web Services (AWS) PrivateLink. Each key identifies an Amazon Web Services (AWS) interface endpoint. Each value identifies the related `mongodb://` connection string that you use to connect to Atlas through the interface endpoint that the key names.
    */

    'awsPrivateLinkSrv'?: { [key: string]: string; };
    /**
    * Network peering connection strings for each interface Virtual Private Cloud (VPC) endpoint that you configured to connect to this cluster. This connection string uses the `mongodb+srv://` protocol. The resource returns this parameter once someone creates a network peering connection to this cluster. This protocol tells the application to look up the host seed list in the Domain Name System (DNS). This list synchronizes with the nodes in a cluster. If the connection string uses this Uniform Resource Identifier (URI) format, you don't need to append the seed list or change the URI if the nodes change. Use this URI format if your driver supports it. If it doesn't, use connectionStrings.private. For Amazon Web Services (AWS) clusters, this resource returns this parameter only if you enable custom DNS.
    */

    '_private'?: string;
    /**
    * List of private endpoint-aware connection strings that you can use to connect to this cluster through a private endpoint. This parameter returns only if you deployed a private endpoint to all regions to which you deployed this clusters' nodes.
    */

    'privateEndpoint'?: Array<ClusterDescriptionConnectionStringsPrivateEndpoint>;
    /**
    * Network peering connection strings for each interface Virtual Private Cloud (VPC) endpoint that you configured to connect to this cluster. This connection string uses the `mongodb+srv://` protocol. The resource returns this parameter when someone creates a network peering connection to this cluster. This protocol tells the application to look up the host seed list in the Domain Name System (DNS). This list synchronizes with the nodes in a cluster. If the connection string uses this Uniform Resource Identifier (URI) format, you don't need to append the seed list or change the Uniform Resource Identifier (URI) if the nodes change. Use this Uniform Resource Identifier (URI) format if your driver supports it. If it doesn't, use `connectionStrings.private`. For Amazon Web Services (AWS) clusters, this parameter returns only if you [enable custom DNS](https://docs.atlas.mongodb.com/reference/api/aws-custom-dns-update/).
    */

    'privateSrv'?: string;
    /**
    * Public connection string that you can use to connect to this cluster. This connection string uses the `mongodb://` protocol.
    */

    'standard'?: string;
    /**
    * Public connection string that you can use to connect to this cluster. This connection string uses the `mongodb+srv://` protocol.
    */

    'standardSrv'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "awsPrivateLink",
            "baseName": "awsPrivateLink",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "awsPrivateLinkSrv",
            "baseName": "awsPrivateLinkSrv",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "_private",
            "baseName": "private",
            "type": "string",
            "format": ""
        },
        {
            "name": "privateEndpoint",
            "baseName": "privateEndpoint",
            "type": "Array<ClusterDescriptionConnectionStringsPrivateEndpoint>",
            "format": ""
        },
        {
            "name": "privateSrv",
            "baseName": "privateSrv",
            "type": "string",
            "format": ""
        },
        {
            "name": "standard",
            "baseName": "standard",
            "type": "string",
            "format": ""
        },
        {
            "name": "standardSrv",
            "baseName": "standardSrv",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ClusterConnectionStrings.attributeTypeMap;
    }

    public constructor() {
    }
}

