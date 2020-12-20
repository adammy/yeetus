import { yeet } from './yeet';
import * as chai from 'chai';

const expect = chai.expect;

describe('Yeet', () => {

    it('should throw an error extra hard', () => {
        expect(yeet.bind(yeet, 'Test yeet')).to.throw('Test yeet');
    });

    it('should throw an error without a message', () => {
        expect(yeet.bind(yeet)).to.throw();
    });

});