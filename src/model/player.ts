import { makeTypedRecord, TypedRecord, TypedRecordFactory } from '../common/typed-record';

module Player {
  export interface Options {
    id: string;
    name: string;
  }
}

export const DEFAULT_PLAYER: Player.Options = {
  id: undefined,
  name: undefined
};

export interface Player extends TypedRecord<Player.Options> {}

export const makePlayer: TypedRecordFactory<Player.Options, Player> =
    makeTypedRecord(DEFAULT_PLAYER);

