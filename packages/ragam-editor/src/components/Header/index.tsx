/** @jsx jsx */
/******************************************************************************
 * import
 *****************************************************************************/
import * as React from 'react';
import { atoms, molecules }  from '@puyan/ragam-ui';
import { jsx, css } from '@emotion/core';

/******************************************************************************
 * style
 *****************************************************************************/
const style = {
  wrapper: css({
    display: "flex",
    alignItems:"center",
    backgroundColor:"#333",
    padding: "5px 10px",
  }),
  title: css({
    flexGrow:2,
    "& > .a-inputText":{
      color:"white",
      width:"100%",
    }
  }),
  player: css({
    flexGrow:3,
  }),
  toolbox: css({
    flexGrow:3,
    "& > .m-buttonIcon": {
      marginRight: "5px"
    }
  })
}

/******************************************************************************
 * Header
 *****************************************************************************/
export default class Header extends React.Component {
  render() {
    return (
      <div css={style.wrapper}>
        <div css={style.title}>
          <atoms.InputText.default value="タイトル" />
        </div>
        <div css={style.player}>
          <molecules.ButtonIcon.default type={molecules.ButtonIcon.Type.Play}/>
        </div>
        <div css={style.toolbox}>
          <molecules.ButtonIcon.default type={molecules.ButtonIcon.Type.Shape}/>
          <molecules.ButtonIcon.default type={molecules.ButtonIcon.Type.Image}/>
        </div>
      </div>
    );
  }
}
