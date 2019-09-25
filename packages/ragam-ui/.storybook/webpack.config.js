const path = require('path');

// TypeScriptのコメントをStorybook上にドキュメント化するためのプラグイン
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

// Storybookでtsconfig.jsonに定義されたpathsオプションを有効にするためのプラグイン
// 各種コンポーネント内で使われているalias(~/**/*/)で書かれたパスを有効にする
const TsConfigPathPlugin = require('tsconfig-paths-webpack-plugin');

// Storybookのwebpackの設定に追記
module.exports = ({ config, mode }) => {

  // SASSのルールを追加
  config.module.rules.push({
    test: /\.scss$/,
    use:[
      {loader: 'style-loader'},
      {loader: 'css-loader'},
      {loader: 'sass-loader', options: {implementation: require('sass')}}
    ]
  });

  // TypeScriptのルールを追加
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [{
      loader: require.resolve('awesome-typescript-loader'),
    }],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  
  // TypeScriptのドキュメントプラグインを追加
  config.plugins.push(new TSDocgenPlugin());
  
  // tsconfig.jsonに書かれたpathの設定をstorybookで使えるようにプラグインを追加
  config.resolve.plugins = config.resolve.plugins || [];
  config.resolve.plugins.push( 
    new TsConfigPathPlugin({configFile: path.resolve(__dirname, '../tsconfig.json')})
  );

  // 設定を返却することで反映される
  return config;
};