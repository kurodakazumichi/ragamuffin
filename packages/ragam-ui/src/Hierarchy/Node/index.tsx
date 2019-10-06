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
  // type: Type,
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
  }

  /** コンストラクタ */
  constructor(props:IProps) {
    super(props);
  }

  /** 描画 */
  render() {



    return (
      <li className={this._className} css={css(style.wrapper)}>
        {
          this.props.expand
            ?<Icon.default type={Icon.Type.CaretDown} />
            :<Icon.default type={Icon.Type.CaretRight} />
        }
        
        <Icon.default type={Icon.Type.Layer} />
        <div css={css({display:"inline-block"})}>
          <span>{this.props.name}</span>
          <Icon.default type={Icon.Type.Eye} />
        </div>
        <div css={css({outline:"1px solid #0f0", display:"inline-block"})}>
          <InputText.default />
        </div>
      </li>
    );
  }

  /** css class name */
  private get _className() {
    return ClassNames("hierarchy-node");
  }
}