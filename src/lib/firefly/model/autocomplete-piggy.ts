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
 * @interface AutocompletePiggy
 */
export interface AutocompletePiggy {
    /**
     * 
     * @type {string}
     * @memberof AutocompletePiggy
     */
    id: string;
    /**
     * Name of the piggy bank found by an auto-complete search.
     * @type {string}
     * @memberof AutocompletePiggy
     */
    name: string;
    /**
     * Currency ID for this piggy bank.
     * @type {string}
     * @memberof AutocompletePiggy
     */
    currency_id?: string;
    /**
     * Currency code for this piggy bank.
     * @type {string}
     * @memberof AutocompletePiggy
     */
    currency_code?: string;
    /**
     * 
     * @type {string}
     * @memberof AutocompletePiggy
     */
    currency_symbol?: string;
    /**
     * Currency name for the currency used by this account.
     * @type {string}
     * @memberof AutocompletePiggy
     */
    currency_name?: string;
    /**
     * 
     * @type {number}
     * @memberof AutocompletePiggy
     */
    currency_decimal_places?: number;
    /**
     * The group ID of the group this object is part of. NULL if no group.
     * @type {string}
     * @memberof AutocompletePiggy
     */
    object_group_id?: string | null;
    /**
     * The name of the group. NULL if no group.
     * @type {string}
     * @memberof AutocompletePiggy
     */
    object_group_title?: string | null;
}


