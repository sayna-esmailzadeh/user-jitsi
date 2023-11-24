const path = require('path');

module.exports = {

    resolve: {
        alias: {
            '@ui': path.resolve(__dirname, 'src/components/UI'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@api': path.resolve(__dirname, 'src/api'),
        },
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    }
};