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


import { AccountTypeProperty } from './account-type-property';

/**
 * 
 * @export
 * @interface RecurrenceTransaction
 */
export interface RecurrenceTransaction {
    /**
     * 
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    description: string;
    /**
     * Amount of the transaction.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    amount: string;
    /**
     * Foreign amount of the transaction.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    foreign_amount?: string | null;
    /**
     * Submit either a currency_id or a currency_code.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    currency_id?: string;
    /**
     * Submit either a currency_id or a currency_code.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    currency_code?: string;
    /**
     * 
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    currency_symbol?: string;
    /**
     * Number of decimals in the currency
     * @type {number}
     * @memberof RecurrenceTransaction
     */
    currency_decimal_places?: number;
    /**
     * Submit either a foreign_currency_id or a foreign_currency_code, or neither.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    foreign_currency_id?: string | null;
    /**
     * Submit either a foreign_currency_id or a foreign_currency_code, or neither.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    foreign_currency_code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    foreign_currency_symbol?: string | null;
    /**
     * Number of decimals in the currency
     * @type {number}
     * @memberof RecurrenceTransaction
     */
    foreign_currency_decimal_places?: number | null;
    /**
     * The budget ID for this transaction.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    budget_id?: string;
    /**
     * The name of the budget to be used. If the budget name is unknown, the ID will be used or the value will be ignored.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    budget_name?: string | null;
    /**
     * Category ID for this transaction.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    category_id?: string;
    /**
     * Category name for this transaction.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    category_name?: string;
    /**
     * ID of the source account. Submit either this or source_name.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    source_id?: string;
    /**
     * Name of the source account. Submit either this or source_id.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    source_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    source_iban?: string | null;
    /**
     * 
     * @type {AccountTypeProperty}
     * @memberof RecurrenceTransaction
     */
    source_type?: AccountTypeProperty;
    /**
     * ID of the destination account. Submit either this or destination_name.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    destination_id?: string;
    /**
     * Name of the destination account. Submit either this or destination_id.
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    destination_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    destination_iban?: string | null;
    /**
     * 
     * @type {AccountTypeProperty}
     * @memberof RecurrenceTransaction
     */
    destination_type?: AccountTypeProperty;
    /**
     * Array of tags.
     * @type {Array<string>}
     * @memberof RecurrenceTransaction
     */
    tags?: Array<string> | null;
    /**
     * Optional. Use either this or the piggy_bank_name
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    piggy_bank_id?: string | null;
    /**
     * Optional. Use either this or the piggy_bank_id
     * @type {string}
     * @memberof RecurrenceTransaction
     */
    piggy_bank_name?: string | null;
}


