const webpack = require('webpack');

module.exports = {
    devServer: {
        disableHostCheck: true
    },
    css: {
        loaderOptions: {
            css: {},
            sass: {
                prependData: '@import "src/scss/variable.scss";\n' +
                    '@import "~bootstrap/scss/functions";\n' +
                    '    @import "~bootstrap/scss/variables";\n' +
                    '    @import "~bootstrap/scss/mixins";'
            }
        },
        sourceMap: true
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: []
            }
        }
    }
};