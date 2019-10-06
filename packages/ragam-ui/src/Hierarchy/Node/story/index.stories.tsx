/******************************************************************************
 * import
 *****************************************************************************/
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import * as Component from '../';

/******************************************************************************
 * 定数
 *****************************************************************************/


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

  // actions
  // ...
  
  const props = {
    expand,
    name,
  }
  return (
    <ul>
      <Component.default {...props} />
    </ul>
  );
  
}
stories.add('Node', defaultStory);