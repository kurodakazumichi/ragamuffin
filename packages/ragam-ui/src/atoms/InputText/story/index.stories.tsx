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
const stories = storiesOf('Atoms', module);

/**
 * 通常のストーリー
 */
const defaultStory = () => 
{
  // knobs
  const value = text("value", "");

  // actions
  // ...
  
  const props = {value}
  return <Component.default {...props} />;
}
stories.add('InputText', defaultStory);