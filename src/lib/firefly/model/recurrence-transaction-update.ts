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
 * @interface RecurrenceTransactionUpdate
 */
export interface RecurrenceTransactionUpdate {
    /**
     * 
     * @type {string}
     * @memberof RecurrenceTransactionUpdate
     */
    description?: string;
    /**
     * Amount of the transaction.
     * @type {string}
     * @memberof RecurrenceTransactionUpdate
     */
    amount?: string;
    /**
     * Foreign amount of the transaction.
     * @type {string}
     * @memberof RecurrenceTransactionUpdate
     */
    foreign_amount?: string | null;
    /**
     * Submit either a currency_id or a currency_code.
     * @type {string}
     * @memberof RecurrenceTransactionUpdate
     */
    currency_id?: string;
    /**
     * Submit either a currency_id or a currency_code.
     * @type {string}
     * @memberof RecurrenceTransactionUpdate
     */
    currency_code?: string;
    /**
     * Submit either a foreign_currency_id or a foreign_currency_code, or neither.
     * @type {string}
     * @memberof RecurrenceTransactionUpdate
     */
    foreign_currency_id?: string | null;
    /**
     * The budget ID for this transaction.
     * @type {string}
     * @memberof RecurrenceTransactionUpdate
     */
    budget_id?: string;
    /**
     * Category ID for this transaction.
     * @type {string}
     * @memberof RecurrenceTransactionUpdate
     */
    category_id?: string;
    /**
     * ID of the source account. Submit either this or source_name.
     * @type {string}
     * @memberof RecurrenceTransactionUpdate
     */
    source_id?: string;
    /**
     * ID of the destination account. Submit either this or destination_name.
     * @type {string}
     * @memberof RecurrenceTransactionUpdate
     */
    destination_id?: string;
    /**
     * Array of tags.
     * @type {Array<string>}
     * @memberof RecurrenceTransactionUpdate
     */
    tags?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof RecurrenceTransactionUpdate
     */
    piggy_bank_id?: string | null;
}


