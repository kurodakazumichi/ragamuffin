/******************************************************************************
 * import
 *****************************************************************************/
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
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
  const name = text('name', "Node");

  // actions
  // ...
  
  const props = {
    name,
  }
  return (
    <ul>
      <Component.default {...props} />
    </ul>
  );
  
}
stories.add('Node', defaultStory);