const path = require ( 'path' )

module.exports = {
    entry: { main: './js/script.js' },
    output: {
        path: path.resolve ( __dirname, 'build' ),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jp?g|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 25000,
                        name: 'images/[name].[ext]'
                    },
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}