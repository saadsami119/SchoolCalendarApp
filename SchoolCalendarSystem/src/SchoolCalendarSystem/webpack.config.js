"use strict";
module.exports = {
    entry: {
        core: './node_modules/core-js/client/shim.min.js',
        zone: './node_modules/zone.js/dist/zone.js',
        reflect: './node_modules/reflect-metadata/Reflect.js',
        system: './node_modules/systemjs/dist/system.src.js'
    },
    output: {
        filename: './wwwroot/js/[name].js'
    },
    target: 'web',
    node: {
        fs: "empty"
    }
};