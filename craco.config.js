const path = require('path');

module.exports = {
    style: {
        postcss: {
            plugins: [
                require('postcss-easy-import'),
                require('postcss-preset-env')({
                    stage: 1,
                }),
                require('postcss-nested'),
                require('autoprefixer'),
                require('postcss-media-variables'),
                require('postcss-css-variables'),
                require('postcss-calc'),
                require('postcss-media-variables'),
            ],
        }
    },
    babel: {
        "presets": ["@babel/preset-react"],
        "plugins": ["@babel/plugin-syntax-dynamic-import"]
    },
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
    },
};
