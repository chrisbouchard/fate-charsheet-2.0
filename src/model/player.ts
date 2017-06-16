import { MakeTypedRecord } from '../common/typed-record';

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

export class Player extends MakeTypedRecord(DEFAULT_PLAYER) {}
