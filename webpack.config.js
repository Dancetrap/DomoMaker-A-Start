const path = require('path');

module.exports = {
    entry: './client/client.js',
    mode: 'production',
    watchOptions: {
        aggregateTimeout: 200,
    },
    module:{
        rules: [
            {
                test: /\.(js||jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, 'hosted'),
        filename: 'bundle.js',
    },
};