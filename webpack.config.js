const CleanWebpackPlugin = require('clean-webpack-plugin')

const path = require("path");
const glob = require('glob');

module.exports = {
    entry: {
        tests: glob.sync('./tests/**/*.js')
    },
    devtool: 'source-map', // this is part of the problem, but not all of it
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new CleanWebpackPlugin("./dist") // for removing the previous build
    ]
};