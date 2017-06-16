import { MakeTypedRecord } from '../common/typed-record';

module Stunt {
    export interface Options {
        name: string;
        description: string;
    }
}

export const DEFAULT_STUNT: Stunt.Options = {
    name: undefined,
    description: undefined
};

export class Stunt extends MakeTypedRecord(DEFAULT_STUNT) {}
