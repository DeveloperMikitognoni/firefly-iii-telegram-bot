/* tslint:disable */
/* eslint-disable */
/**
 * Firefly III API v1.5.4
 * This is the documentation of the Firefly III API. You can find accompanying documentation on the website of Firefly III itself (see below). Please report any bugs or issues. You may use the \"Authorize\" button to try the API below. This file was last generated on 2021-09-25T14:21:28+00:00 
 *
 * The version of the OpenAPI document: 1.5.4
 * Contact: james@firefly-iii.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { User } from '../model';
// @ts-ignore
import { UserArray } from '../model';
// @ts-ignore
import { UserSingle } from '../model';
// @ts-ignore
import { ValidationError } from '../model';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a user. You cannot delete the user you\'re authenticated with. This cannot be undone. Be careful!
         * @summary Delete a user.
         * @param {number} id The user ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUser: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteUser', 'id', id)
            const localVarPath = `/api/v1/users/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication firefly_iii_auth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "firefly_iii_auth", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets all info of a single user.
         * @summary Get a single user.
         * @param {number} id The user ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getUser', 'id', id)
            const localVarPath = `/api/v1/users/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication firefly_iii_auth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "firefly_iii_auth", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all the users in this instance of Firefly III.
         * @summary List all users.
         * @param {number} [page] The page number, if necessary. The default pagination is 50, so 50 users per page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listUser: async (page?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication firefly_iii_auth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "firefly_iii_auth", [], configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a new user. The data required can be submitted as a JSON body or as a list of parameters. The user will be given a random password, which they can reset using the \"forgot password\" function. 
         * @summary Store a new user
         * @param {User} user JSON array or key&#x3D;value pairs with the necessary user information. See the model for the exact specifications.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storeUser: async (user: User, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'user' is not null or undefined
            assertParamExists('storeUser', 'user', user)
            const localVarPath = `/api/v1/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication firefly_iii_auth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "firefly_iii_auth", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(user, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update existing user.
         * @summary Update an existing user\'s information.
         * @param {number} id The user ID.
         * @param {User} user JSON array with updated user information. See the model for the exact specifications.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUser: async (id: number, user: User, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateUser', 'id', id)
            // verify required parameter 'user' is not null or undefined
            assertParamExists('updateUser', 'user', user)
            const localVarPath = `/api/v1/users/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication firefly_iii_auth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "firefly_iii_auth", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(user, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete a user. You cannot delete the user you\'re authenticated with. This cannot be undone. Be careful!
         * @summary Delete a user.
         * @param {number} id The user ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteUser(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteUser(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets all info of a single user.
         * @summary Get a single user.
         * @param {number} id The user ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUser(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserSingle>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUser(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all the users in this instance of Firefly III.
         * @summary List all users.
         * @param {number} [page] The page number, if necessary. The default pagination is 50, so 50 users per page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listUser(page?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserArray>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listUser(page, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates a new user. The data required can be submitted as a JSON body or as a list of parameters. The user will be given a random password, which they can reset using the \"forgot password\" function. 
         * @summary Store a new user
         * @param {User} user JSON array or key&#x3D;value pairs with the necessary user information. See the model for the exact specifications.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async storeUser(user: User, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserSingle>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.storeUser(user, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update existing user.
         * @summary Update an existing user\'s information.
         * @param {number} id The user ID.
         * @param {User} user JSON array with updated user information. See the model for the exact specifications.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateUser(id: number, user: User, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserSingle>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUser(id, user, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * Delete a user. You cannot delete the user you\'re authenticated with. This cannot be undone. Be careful!
         * @summary Delete a user.
         * @param {number} id The user ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUser(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.deleteUser(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets all info of a single user.
         * @summary Get a single user.
         * @param {number} id The user ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser(id: number, options?: any): AxiosPromise<UserSingle> {
            return localVarFp.getUser(id, options).then((request) => request(axios, basePath));
        },
        /**
         * List all the users in this instance of Firefly III.
         * @summary List all users.
         * @param {number} [page] The page number, if necessary. The default pagination is 50, so 50 users per page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listUser(page?: number, options?: any): AxiosPromise<UserArray> {
            return localVarFp.listUser(page, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new user. The data required can be submitted as a JSON body or as a list of parameters. The user will be given a random password, which they can reset using the \"forgot password\" function. 
         * @summary Store a new user
         * @param {User} user JSON array or key&#x3D;value pairs with the necessary user information. See the model for the exact specifications.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storeUser(user: User, options?: any): AxiosPromise<UserSingle> {
            return localVarFp.storeUser(user, options).then((request) => request(axios, basePath));
        },
        /**
         * Update existing user.
         * @summary Update an existing user\'s information.
         * @param {number} id The user ID.
         * @param {User} user JSON array with updated user information. See the model for the exact specifications.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUser(id: number, user: User, options?: any): AxiosPromise<UserSingle> {
            return localVarFp.updateUser(id, user, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteUser operation in UsersApi.
 * @export
 * @interface UsersApiDeleteUserRequest
 */
export interface UsersApiDeleteUserRequest {
    /**
     * The user ID.
     * @type {number}
     * @memberof UsersApiDeleteUser
     */
    readonly id: number
}

/**
 * Request parameters for getUser operation in UsersApi.
 * @export
 * @interface UsersApiGetUserRequest
 */
export interface UsersApiGetUserRequest {
    /**
     * The user ID.
     * @type {number}
     * @memberof UsersApiGetUser
     */
    readonly id: number
}

/**
 * Request parameters for listUser operation in UsersApi.
 * @export
 * @interface UsersApiListUserRequest
 */
export interface UsersApiListUserRequest {
    /**
     * The page number, if necessary. The default pagination is 50, so 50 users per page.
     * @type {number}
     * @memberof UsersApiListUser
     */
    readonly page?: number
}

/**
 * Request parameters for storeUser operation in UsersApi.
 * @export
 * @interface UsersApiStoreUserRequest
 */
export interface UsersApiStoreUserRequest {
    /**
     * JSON array or key&#x3D;value pairs with the necessary user information. See the model for the exact specifications.
     * @type {User}
     * @memberof UsersApiStoreUser
     */
    readonly user: User
}

/**
 * Request parameters for updateUser operation in UsersApi.
 * @export
 * @interface UsersApiUpdateUserRequest
 */
export interface UsersApiUpdateUserRequest {
    /**
     * The user ID.
     * @type {number}
     * @memberof UsersApiUpdateUser
     */
    readonly id: number

    /**
     * JSON array with updated user information. See the model for the exact specifications.
     * @type {User}
     * @memberof UsersApiUpdateUser
     */
    readonly user: User
}

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * Delete a user. You cannot delete the user you\'re authenticated with. This cannot be undone. Be careful!
     * @summary Delete a user.
     * @param {UsersApiDeleteUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public deleteUser(requestParameters: UsersApiDeleteUserRequest, options?: any) {
        return UsersApiFp(this.configuration).deleteUser(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets all info of a single user.
     * @summary Get a single user.
     * @param {UsersApiGetUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getUser(requestParameters: UsersApiGetUserRequest, options?: any) {
        return UsersApiFp(this.configuration).getUser(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all the users in this instance of Firefly III.
     * @summary List all users.
     * @param {UsersApiListUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public listUser(requestParameters: UsersApiListUserRequest = {}, options?: any) {
        return UsersApiFp(this.configuration).listUser(requestParameters.page, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a new user. The data required can be submitted as a JSON body or as a list of parameters. The user will be given a random password, which they can reset using the \"forgot password\" function. 
     * @summary Store a new user
     * @param {UsersApiStoreUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public storeUser(requestParameters: UsersApiStoreUserRequest, options?: any) {
        return UsersApiFp(this.configuration).storeUser(requestParameters.user, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update existing user.
     * @summary Update an existing user\'s information.
     * @param {UsersApiUpdateUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public updateUser(requestParameters: UsersApiUpdateUserRequest, options?: any) {
        return UsersApiFp(this.configuration).updateUser(requestParameters.id, requestParameters.user, options).then((request) => request(this.axios, this.basePath));
    }
}
