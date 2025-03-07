/* tslint:disable */
/* eslint-disable */
/**
 * Firefly III API v1.5.6
 * This is the documentation of the Firefly III API. You can find accompanying documentation on the website of Firefly III itself (see below). Please report any bugs or issues. You may use the \"Authorize\" button to try the API below. This file was last generated on 2022-04-04T03:54:41+00:00 
 *
 * The version of the OpenAPI document: 1.5.6
 * Contact: james@firefly-iii.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface PiggyBank
 */
export interface PiggyBank {
    /**
     * 
     * @type {string}
     * @memberof PiggyBank
     */
    created_at?: string;
    /**
     * 
     * @type {string}
     * @memberof PiggyBank
     */
    updated_at?: string;
    /**
     * The ID of the asset account this piggy bank is connected to.
     * @type {string}
     * @memberof PiggyBank
     */
    account_id: string;
    /**
     * The name of the asset account this piggy bank is connected to.
     * @type {string}
     * @memberof PiggyBank
     */
    account_name?: string;
    /**
     * 
     * @type {string}
     * @memberof PiggyBank
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PiggyBank
     */
    currency_id?: string;
    /**
     * 
     * @type {string}
     * @memberof PiggyBank
     */
    currency_code?: string;
    /**
     * 
     * @type {string}
     * @memberof PiggyBank
     */
    currency_symbol?: string;
    /**
     * Number of decimals supported by the currency
     * @type {number}
     * @memberof PiggyBank
     */
    currency_decimal_places?: number;
    /**
     * 
     * @type {string}
     * @memberof PiggyBank
     */
    target_amount: string | null;
    /**
     * 
     * @type {number}
     * @memberof PiggyBank
     */
    percentage?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PiggyBank
     */
    current_amount?: string;
    /**
     * 
     * @type {string}
     * @memberof PiggyBank
     */
    left_to_save?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PiggyBank
     */
    save_per_month?: string | null;
    /**
     * The date you started with this piggy bank.
     * @type {string}
     * @memberof PiggyBank
     */
    start_date?: string;
    /**
     * The date you intend to finish saving money.
     * @type {string}
     * @memberof PiggyBank
     */
    target_date?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PiggyBank
     */
    order?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PiggyBank
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PiggyBank
     */
    notes?: string | null;
    /**
     * The group ID of the group this object is part of. NULL if no group.
     * @type {string}
     * @memberof PiggyBank
     */
    object_group_id?: string | null;
    /**
     * The order of the group. At least 1, for the highest sorting.
     * @type {number}
     * @memberof PiggyBank
     */
    object_group_order?: number | null;
    /**
     * The name of the group. NULL if no group.
     * @type {string}
     * @memberof PiggyBank
     */
    object_group_title?: string | null;
}


