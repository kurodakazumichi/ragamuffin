/******************************************************************************
 * import
 *****************************************************************************/
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as Component from '../';

/******************************************************************************
 * 定数
 *****************************************************************************/


/******************************************************************************
 * story
 *****************************************************************************/
const stories = storiesOf('Organisms', module);

/**
 * 通常のストーリー
 */
const defaultStory = () => 
{
  // knobs
  // ...

  // actions
  const onClose = action("onClose");
  
  const props = {
    onClose,
  }
  return <Component.default {...props}>ToolBox</Component.default>;
}
stories.add('ToolBox', defaultStory);