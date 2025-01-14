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


import { RuleTriggerKeyword } from './rule-trigger-keyword';

/**
 * 
 * @export
 * @interface RuleTriggerStore
 */
export interface RuleTriggerStore {
    /**
     * 
     * @type {RuleTriggerKeyword}
     * @memberof RuleTriggerStore
     */
    type: RuleTriggerKeyword;
    /**
     * The accompanying value the trigger responds to. This value is often mandatory, but this depends on the trigger.
     * @type {string}
     * @memberof RuleTriggerStore
     */
    value: string;
    /**
     * Order of the trigger
     * @type {number}
     * @memberof RuleTriggerStore
     */
    order?: number;
    /**
     * If the trigger is active. Defaults to true.
     * @type {boolean}
     * @memberof RuleTriggerStore
     */
    active?: boolean;
    /**
     * When true, other triggers will not be checked if this trigger was triggered. Defaults to false.
     * @type {boolean}
     * @memberof RuleTriggerStore
     */
    stop_processing?: boolean;
}


