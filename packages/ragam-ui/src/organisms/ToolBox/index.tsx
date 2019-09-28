/** @jsx jsx */
/******************************************************************************
 * import area
 *****************************************************************************/
import * as React from 'react';
import { observer } from 'mobx-react';
import { jsx, css } from '@emotion/core';
import ClassNames from 'classnames';
import * as Icon from '../../atoms/Icon'

/******************************************************************************
 *  Enum
 *****************************************************************************/

/******************************************************************************
 * 定数
 *****************************************************************************/

/******************************************************************************
 * スタイル
 *****************************************************************************/
const style = {
  wrapper: css({
    position: "absolute",
    border:"1px solid #ddd",
    borderRadius:"3px",
    overflow:"hidden",
    paddingBottom:"3px",
    backgroundColor:"#eee",
  }),
  header: css({
    backgroundColor: "#333",
    padding:"3px 5px",
    borderBottom:"1px solid #ddd",
    
    "& > .a-icon": {
      color:"#C7243A",
      cursor:"pointer",
      "&:hover": {
        color:"#DA6272",
      }
    }
  })
}

/******************************************************************************
 * Interface
 *****************************************************************************/
/** Icon Props */
export interface IProps {
  /** 閉じる処理 */
  onClose?:(e:React.MouseEvent<HTMLElement>) => void;
};

/******************************************************************************
 * Icon Component
 *****************************************************************************/
@observer
export default class ToolBox extends React.Component<IProps> 
{
  /** props規定値 */
  static defaultProps:IProps = {
  }

  /** コンストラクタ */
  constructor(props:IProps) {
    super(props);
  }

  /** 描画 */
  render() {
    return (
      <div className={this.className} css={style.wrapper}>
        <div css={style.header}>
          <Icon.default type={Icon.Type.Circle} onClick={this.props.onClose} />
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }

  /** css class name */
  private get className() {
    return ClassNames("o-toolBox");
  }
}