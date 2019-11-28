"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unit_1 = require("./unit");
const chai_1 = require("chai");
require("mocha");
describe('Validate url', () => {
    it('should recieve a url', (urlToBeValidated) => {
        const result = urlToBeValidated();
        chai_1.expect(result).to.equal(true);
    });
    const result = unit_1.urlReceived();
});
//# sourceMappingURL=unit.test.js.map