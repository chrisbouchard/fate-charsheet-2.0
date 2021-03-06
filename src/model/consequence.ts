import { MakeTypedRecord } from '../common/typed-record';

import { AddsShifts } from './adds-shifts';

module Consequence {
    export interface Options {
        label: string;
        name: string;
        rank: number;
    }
}

export const DEFAULT_CONSEQUENCE: Consequence.Options = {
    label: undefined,
    name: undefined,
    rank: 0
};

export class Consequence extends MakeTypedRecord(DEFAULT_CONSEQUENCE) implements AddsShifts {
    readonly shiftsAdded: number = 2;
}
