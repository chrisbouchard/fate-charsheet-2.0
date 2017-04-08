import { Set } from 'immutable';

import { MakeTypedRecord } from '../common/typed-record';

import { Aspect } from './aspect';
import { Skill } from './skill';


export module CharacterDetail {
  export interface Options {
    selectedAspects: Set<Aspect>;
    selectedSkills: Set<Skill>;
  }
}

export const DEFAULT_CHARACTER_DETAIL: CharacterDetail.Options = {
  selectedAspects: Set<Aspect>(),
  selectedSkills: Set<Skill>()
};

export class CharacterDetail extends MakeTypedRecord(DEFAULT_CHARACTER_DETAIL) {}

