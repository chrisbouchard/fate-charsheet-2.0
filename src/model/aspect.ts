import { MakeTypedRecord } from '../common/typed-record';

import { AddsShifts } from './adds-shifts';

module Aspect {
    export interface Options {
        label?: string;
        name: string;
    }
}

export const DEFAULT_ASPECT: Aspect.Options = {
    label: undefined,
    name: undefined
};

export class Aspect extends MakeTypedRecord(DEFAULT_ASPECT) implements AddsShifts {
    readonly shiftsAdded: number = 2;
}
