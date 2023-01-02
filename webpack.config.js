const path = require("path");
const dotEnv = require('dotenv-webpack')


module.exports = {
   entry: {
      bundle: path.resolve(__dirname, '/client/src/index.jsx')},
   output: {
      path: path.join(__dirname, '/client/dist'),
      filename: 'bundle.js'
   },
   plugins: [new dotEnv()],
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
         },
         {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ],
        }
      ]
   },
   mode: 'development'
}
