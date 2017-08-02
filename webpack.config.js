module.exports = {
    entry: "./js/master.jsx",
    output: {
        filename: "./bundle.js"
    },
    watch : true,
    module: {
        rules: [
            {
                test:[/\.js$/, /\.jsx$/],
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "react"]
                }
            },
            {
                enforce: "pre",
                test: [/\.js$/, /\.jsx$/],
                exclude: /node_modules/,
                loader: "eslint-loader"
            }
        ]
    }
}