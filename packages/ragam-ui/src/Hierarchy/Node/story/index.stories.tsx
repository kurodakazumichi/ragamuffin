/******************************************************************************
 * import
 *****************************************************************************/
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import * as util from '@puyan/ts-util';
import * as Component from '../';

/******************************************************************************
 * 定数
 *****************************************************************************/
const types :any = util.enum2StringKeyObject(Component.Type);

/******************************************************************************
 * story
 *****************************************************************************/
const stories = storiesOf('Hierarchy', module);

/**
 * 通常のストーリー
 */
const defaultStory = () => 
{
  // knobs
  const expand = boolean('expand', false);
  const name = text('name', "Node");
  const type = select('type', types, Component.Type.Layer);
  const visible = boolean('visible', true);
  // actions
  // ...
  
  const props = {
    expand,
    name,
    type,
    visible,
  }
  return (
    <ul>
      <Component.default {...props} />
    </ul>
  );
  
}
stories.add('Node', defaultStory);