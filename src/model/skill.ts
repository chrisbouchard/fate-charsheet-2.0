import { MakeTypedRecord } from '../common/typed-record';

module Skill {
    export interface Options {
        name: string;
        rank: number;
    }
}

export const DEFAULT_SKILL: Skill.Options = {
    name: undefined,
    rank: 0
};

export class Skill extends MakeTypedRecord(DEFAULT_SKILL) {}
