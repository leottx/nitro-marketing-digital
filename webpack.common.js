const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Consulta Encomendas',
      template: './src/template.html'
    })
  ],
  module: {
    rules: [
      { 
        test: /\.s[ac]ss$/i,
        use: [ 
          'style-loader', // 3. Injeta os estilos na DOM
          'css-loader', // 2. Compila o css em commonJS
          'sass-loader' // 1. Compila arquivos sass em arquivos css
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name].[hash][ext]'
        }
      }
    ]
  },
}