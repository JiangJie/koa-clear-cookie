'use strict';

module.exports = function(options) {
    options = options || {};
    // options.signed

    return function* clearCookie(next) {
        var opts = {expires: new Date(1), path: '/'};
        this.cookies.constructor.prototype.clear = function(name) {
            if(!name) return;
            
            this.cookies.set(name, '', opts);
            options.signed && this.cookies.set(name + '.sig', '', opts);
        };

        yield* next;
    }
};