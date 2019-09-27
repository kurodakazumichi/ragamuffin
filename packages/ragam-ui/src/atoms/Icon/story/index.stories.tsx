/******************************************************************************
 * import
 *****************************************************************************/
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import * as Icon from '../';
import * as util from '@puyan/ts-util';

/******************************************************************************
 * 定数
 *****************************************************************************/
const types :any = util.enum2StringKeyObject(Icon.Type);
const styles:any = util.enum2StringKeyObject(Icon.Style);

/******************************************************************************
 * story
 *****************************************************************************/
const stories = storiesOf('Atoms', module);

/**
 * 通常のストーリー
 */
const defaultStory = () => {

  // knobs-props.style
  const style    = select(
    "style",
    styles, 
    Icon.Style.Solid
  );

  // knobs-props.type
  const type = select("type", types, Icon.Type.Eye)

  // action
  const onClick = action('onClick');
  
  const props = {style, type, onClick}
  return <Icon.default {...props} />;
}
stories.add('Icon', defaultStory);