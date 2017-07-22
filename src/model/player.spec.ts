import { expect } from 'chai';

import { Player } from './player';

describe('Player', () => {
    it('has its id given in the constructor', () => {
        const player = new Player({id: '1', name: 'test'});
        expect(player.id).to.equal('1');
    });

    it('has its name given in the constructor', () => {
        const player = new Player({id: '1', name: 'test'});
        expect(player.name).to.equal('test');
    });
});

