const path = require('path');

module.exports = {
    entry: {
        'modal-confirmation': './src/resources/assets/js/modal-confirmation.js',
        'app': './src/resources/assets/js/app.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'src','public', 'assets', 'js'),
    },
};