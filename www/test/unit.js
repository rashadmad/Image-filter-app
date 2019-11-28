"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validUrl = require('valid-url');
//receive
exports.urlReceived = (url) => {
    if (validUrl.isUri(url)) {
        return true;
    }
    else {
        return false;
    }
};
//# sourceMappingURL=unit.js.map