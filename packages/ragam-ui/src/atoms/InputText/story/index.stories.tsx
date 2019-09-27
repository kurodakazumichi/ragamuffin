/******************************************************************************
 * import
 *****************************************************************************/
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import * as Component from '../';

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
  const value = text("value", "input text");

  // actions
  const onChange = action('onChange');
  const onFocus  = action('onFocus');
  const onBlur   = action('onBlur');
  
  const props = {
    value, 
    onChange, 
    onFocus,
    onBlur,
  };

  return <Component.default {...props} />;
}
stories.add('InputText', defaultStory);