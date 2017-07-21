import * as assert from 'assert';

import { Player } from './player';

describe('Player', () => {
    it('has its id given in the constructor', () => {
        const player = new Player({id: '1', name: 'test'});
        assert.equal(player.id, '1');
    });

    it('has its name given in the constructor', () => {
        const player = new Player({id: '1', name: 'test'});
        assert.equal(player.name, 'test');
    });
});

