/******************************************************************************
 * import
 *****************************************************************************/
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import * as Component from '..';
import * as util from '@puyan/ts-util';

/******************************************************************************
 * 定数
 *****************************************************************************/
const types :any = util.enum2StringKeyObject(Component.Type);

/******************************************************************************
 * story
 *****************************************************************************/
const stories = storiesOf('Molecules', module);

/**
 * 通常のストーリー
 */
const defaultStory = () => 
{
  // knobs-props.type
  const type = select("type", types, Component.Type.Play)

  // action
  const onClick = action('onClick');
  
  // render
  const props = {type, onClick}
  return <Component.default {...props} />;
}

stories.add('ButtonIcon', defaultStory, {info:{propTables:[]}});