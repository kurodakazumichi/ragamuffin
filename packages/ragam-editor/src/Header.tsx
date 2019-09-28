/** @jsx jsx */
/******************************************************************************
 * import
 *****************************************************************************/
import * as React from 'react';
import { atoms, molecules }  from '@puyan/ragam-ui';
import { jsx } from '@emotion/core';

/******************************************************************************
 * Header
 *****************************************************************************/
export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div><atoms.InputText.default value="タイトル" /></div>
        <div>
          <molecules.ButtonIcon.default type={molecules.ButtonIcon.Type.Play}/>
          <molecules.ButtonIcon.default type={molecules.ButtonIcon.Type.Shape}/>
          <molecules.ButtonIcon.default type={molecules.ButtonIcon.Type.Image}/>
        </div>
      </div>
    );
  }
}
