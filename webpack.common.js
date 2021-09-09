const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Consulta Encomendas',
      template: './src/template.html'
    })
  ],
  module: {
    rules: [
      { 
        test: /\.s[ac]ss$/,
        use: [ 
          'style-loader', // 3. Injeta os estilos na DOM
          'css-loader', // 2. Compila o css em commonJS
          'sass-loader' // 1. Compila arquivos sass em arquivos css
        ]
      }
    ]
  },
}