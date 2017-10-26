var webpackConfig = require('./webpack/webpack.unit.tests.js');
const path = require('path');

module.exports = function (config) {
    var _config = {
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            { pattern: 'test/karma-shim.ts', watched: false }
        ],
        preprocessors: {
            'test/karma-shim.ts' : ['webpack']
        },
        plugins: [ 
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-jasmine-html-reporter',
            'karma-remap-istanbul',
            'karma-webpack'
        ],
        mime: {
            'text/x-typescript': ['ts', 'tsx']
        },
        webpackMiddleware: {
            stats: 'errors-only'
        },
        webpackServer: {
            noInfo: true
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: false,
        webpackMiddleware: { stats: 'errors-only' },
        webpack: webpackConfig,
        reporters: ['progress', 'karma-remap-istanbul'],
        coverageReporter: {
            type: 'in-memory'
        },
        remapIstanbulReporter: {
            reports: {
                html: 'coverage/html',
                cobertura: 'coverage/cobertura/cobertura.xml'
            },
            remapOptions: {
                exclude: './test/'
            }
        }
    };
    config.set(_config);
};