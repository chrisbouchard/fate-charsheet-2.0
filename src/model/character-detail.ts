import { Set } from 'immutable';

import { makeTypedRecord } from '../common/typed-record';

export module CharacterDetail {
  export interface Options {
    selectedAspects: Set<string>;
    selectedSkills: Set<string>;
  }
}

export const DEFAULT_CHARACTER_DETAIL: CharacterDetail.Options = {
  selectedAspects: Set<string>(),
  selectedSkills: Set<string>()
};

export class CharacterDetail extends makeTypedRecord(DEFAULT_CHARACTER_DETAIL) {}

