import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

/**
 * Storybookの設定
 */
addParameters({
  options: {
    panelPosition: "right",
    resizePane: {x:300}
  }
})

/**
 * addon-infoを適用する
 * addon-infoはpropsの定義などを表示してくれる。
 */
addDecorator(withInfo({
  header:false,
  inline:true,
}));

/**
 * addon-knobsを適用する
 * addon-knobsはstorybook場でpropsを操作することができる。
 */
addDecorator(withKnobs);

/**
 * addon-viewportを適用する
 * addon-viewportはstorybook上でiphoneなど様々な端末設定での表示が可能。
 */
addParameters({
  viewport: {
    viewports: {...INITIAL_VIEWPORTS}
  }
})

/**
 * storybookに読み込ませる対象ファイルをここで定義しているよ。
 * 「../stories/*.stories.tsx」このルールに一致するファイルは全部対象だ。
 */
const req = require.context('../src', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);