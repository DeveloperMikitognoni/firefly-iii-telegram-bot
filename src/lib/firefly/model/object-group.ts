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



/**
 * 
 * @export
 * @interface ObjectGroup
 */
export interface ObjectGroup {
    /**
     * 
     * @type {string}
     * @memberof ObjectGroup
     */
    created_at?: string;
    /**
     * 
     * @type {string}
     * @memberof ObjectGroup
     */
    updated_at?: string;
    /**
     * 
     * @type {string}
     * @memberof ObjectGroup
     */
    title: string;
    /**
     * Order of the object group
     * @type {number}
     * @memberof ObjectGroup
     */
    order: number;
}


