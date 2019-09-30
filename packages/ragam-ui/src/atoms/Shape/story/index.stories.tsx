/******************************************************************************
 * import
 *****************************************************************************/
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { object, number } from '@storybook/addon-knobs';
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
  const data = object("data", {
    attrs:{
      x:50,
      y:50,
      radius:40,
      fill:"black"
    },
    className:"Circle"
  });

  const size = number("size", 100);

  // actions
  // ...
  
  const props = { data, size }
  return <Component.default {...props} />;
}
stories.add('Shape', defaultStory);