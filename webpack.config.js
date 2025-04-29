// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx', // Entry point of the app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Output bundled file
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // For JavaScript files and JSX files
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/, // For CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|jpg)$/i,
        type: 'asset/resource', // Webpack 5 built-in
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Allows you to omit .js/.jsx in imports
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template HTML file
    }),
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    open: true,
    historyApiFallback: true,  // 👈 Enables React Router to handle routes
    hot: true,
  },
  mode: 'development', // Or 'production' for production builds
};
