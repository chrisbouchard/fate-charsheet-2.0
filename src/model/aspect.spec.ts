import * as assert from 'assert';

import { Aspect } from './aspect';

describe('Aspect', () => {
    it('has its name given in the constructor', () => {
        const aspect = new Aspect({ name: 'test' });
        assert.equal(aspect.name, 'test');
    });
});

