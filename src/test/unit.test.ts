import { urlReceived }from './unit';

import { expect } from 'chai';
import 'mocha';

describe('Validate url', () => {
    
    it('should recieve a url', (urlToBeValidated) => {
        const result = urlToBeValidated();
        expect(result).to.equal(true);
    });
    
    const result = urlReceived()
});