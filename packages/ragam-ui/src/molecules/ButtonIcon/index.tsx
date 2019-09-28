/** @jsx jsx */
/******************************************************************************
 * import area
 *****************************************************************************/
import * as React from 'react';
import { observer } from 'mobx-react';
import { jsx, css } from '@emotion/core';
import * as Icon from '../../atoms/Icon';

/******************************************************************************
 *  Enum
 *****************************************************************************/
export enum Type {
  Play,
  Shape,
  Image,
}

/******************************************************************************
 * 定数
 *****************************************************************************/
/** コンポーネントの設定データ */
const configs = {
  [Type.Play] : { icon:Icon.Type.Play  , text:"再生", color:"#000000"},
  [Type.Shape]: { icon:Icon.Type.Square, text:"図形", color:"#0FCD94"},
  [Type.Image]: { icon:Icon.Type.Image , text:"画像", color:"#D23794"}
}

/******************************************************************************
 * スタイル
 *****************************************************************************/
const style = {
  wrapper:css({
    display  :"inline-block",
    textAlign:"center",
  }),
  button:css({
    display     :"block",
    padding     :"3px 10px",
    marginBottom:"1px",
  }),
  text: css({
    fontSize:"10px",
    color   : "#aaa"
  })
}

/******************************************************************************
 * Interface
 *****************************************************************************/
/** Icon Props */
export interface IProps {
  /** ボタンのタイプ(再生、図形、イメージなど) */
  type: Type;
  /** クリック時のコールバック */
  onClick?:(e:React.MouseEvent<HTMLButtonElement>) => void
};

/******************************************************************************
 * Icon Component
 *****************************************************************************/
@observer
export default class ButtonIcon extends React.Component<IProps> 
{
  /** props規定値 */
  static defaultProps:IProps = {
    type   : Type.Play,
    onClick: undefined
  }

  /** コンストラクタ */
  constructor(props:IProps) {
    super(props);
  }

  /** 描画 */
  render() 
  {
    const buttonStyle = css(
      style.button,
      {["& > .a-icon"]: {
        color:this.iconColor
      }}
    );

    return (
      <div className="m-buttonIcon" css={style.wrapper}>
        <button css={buttonStyle} onClick={this.props.onClick}>
          <Icon.default type={this.icon} />
        </button>
        <span css={style.text}>{this.text}</span>
      </div>
    );
  }

  private get icon() {
    return configs[this.props.type].icon;
  }

  private get iconColor() {
    return configs[this.props.type].color;
  }

  private get text() {
    return configs[this.props.type].text;
  }
}