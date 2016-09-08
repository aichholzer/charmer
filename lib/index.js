'use strict';


module.exports = (input, options) => {

    options = options || {};
    if (['asc', 'desc'].indexOf(options.sort) >= 0) {
        let sorted = {};
        const sort = options.sort === 'asc' ? (a, b) => a > b : (a, b) => a < b;
        Object.keys(input).sort(sort).forEach(key => {
            sorted[key] = input[key];
        });
        input = sorted;
    }

    const charm = JSON.stringify(input, null, 2);
    if (options.fetch) {
        return charm;
    }

    console.log(charm);
};
