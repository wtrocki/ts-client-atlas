import { RequestContext } from "../http/http";

/**
 * Interface authentication schemes.
 */
export interface SecurityAuthentication {
    /*
     * @return returns the name of the security authentication as specified in OAI
     */
    getName(): string;

    /**
     * Applies the authentication scheme to the request context
     *
     * @params context the request context which should use this authentication scheme
     */
    applySecurityAuthentication(context: RequestContext): void | Promise<void>;
}

export interface TokenProvider {
  getToken(): Promise<string> | string;
}

/**
 * Applies http authentication to the request context.
 */
export class DigestAuthAuthentication implements SecurityAuthentication {

    public getName(): string {
        return "DigestAuth";
    }

    public applySecurityAuthentication(context: RequestContext) {
    }
}


export type AuthMethods = {
    "default"?: SecurityAuthentication,
    "DigestAuth"?: SecurityAuthentication
}

export type ApiKeyConfiguration = string;
export type HttpBasicConfiguration = { "username": string, "password": string };
export type HttpBearerConfiguration = { tokenProvider: TokenProvider };
export type OAuth2Configuration = { accessToken: string };

export type AuthMethodsConfiguration = {
    "default"?: SecurityAuthentication,
    "DigestAuth"?: 
}

/**
 * Creates the authentication methods from a swagger description.
 *
 */
export function configureAuthMethods(config: AuthMethodsConfiguration | undefined): AuthMethods {
    let authMethods: AuthMethods = {}

    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"]

    if (config["DigestAuth"]) {
        authMethods["DigestAuth"] = new DigestAuthAuthentication(
        );
    }

    return authMethods;
}