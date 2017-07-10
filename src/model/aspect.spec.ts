import { Aspect } from './aspect';

describe('Aspect', () => {
    it('has its name given in the constructor', () => {
        let aspect = new Aspect({ name: 'test' });
        expect(aspect.name).toEqual('test');
    });
});

