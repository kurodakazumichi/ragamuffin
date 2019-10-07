/** @jsx jsx */
/******************************************************************************
 * import area
 *****************************************************************************/
import * as React from 'react';
import { observer } from 'mobx-react';
import { jsx, css } from '@emotion/core';
import ClassNames from 'classnames';
import * as Icon from '../../atoms/Icon';
import * as InputText from '../../atoms/InputText';

/******************************************************************************
 *  Enum
 *****************************************************************************/
export enum Type {
  Layer,
  Group,
  Shape,
}

export enum State {
  Usual,
  Active,
  Hover,
}

/******************************************************************************
 * 定数
 *****************************************************************************/

/******************************************************************************
 * スタイル
 *****************************************************************************/
const style= {
  wrapper: {
    display:"block",
    lineHeight:"2em",
    ".a-icon": { marginRight:"1em"}
  }
}
/******************************************************************************
 * Interface
 *****************************************************************************/
/** Icon Props */
export interface IProps {
  /** 開閉状態 */
  expand: boolean,
  /** 名称 */
  name: string,
  /** タイプ */
  type: Type,
  /** 可視 */
  visible: boolean,
  /** 状態 */
  state: State,
  /** 編集中 */
  editing: boolean,
};

/******************************************************************************
 * Icon Component
 *****************************************************************************/
@observer
export default class Node extends React.Component<IProps> 
{
  /** props規定値 */
  static defaultProps:IProps = {
    expand:false,
    name: "",
    type: Type.Layer,
    visible: true,
    state: State.Usual,
    editing: false,
  }

  /** コンストラクタ */
  constructor(props:IProps) {
    super(props);
  }

  /** 描画 */
  render() {



    return (
      <li className={this._className} css={css(style.wrapper)}>
        {this.Caret}
        {this.Icon}
        

        { (!this.props.editing)
          ?(
            <div css={css({display:"inline-block"})}>
            <span>{this.props.name}</span>
            <Icon.default type={this.props.visible? Icon.Type.Eye:Icon.Type.EyeSlash} />
          </div>
          )
          :(
            <div css={css({outline:"1px solid #0f0", display:"inline-block"})}>
            <InputText.default />
          </div>
          ) 
        }
      </li>
    );
  }

  /** css class name */
  private get _className() {
    return ClassNames("hierarchy-node");
  }

  /** Component Caret */
  private get Caret(){
    const { type, expand } = this.props;

    if (type === Type.Shape) return null;

    const icon = (expand)? Icon.Type.CaretDown : Icon.Type.CaretRight;

    return <Icon.default type={icon} />
  }

  /** Component Icon */
  private get Icon() {
    const type = () => {
      switch(this.props.type) {
        case Type.Layer: return Icon.Type.Layer;
        case Type.Group: return Icon.Type.Group;
        default: return Icon.Type.Square;
      }
    }

    return <Icon.default type={type()} />
  }
}