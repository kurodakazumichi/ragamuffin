/** @jsx jsx */
/******************************************************************************
 * import area
 *****************************************************************************/
import * as React from 'react';
import { observer } from 'mobx-react';
import { jsx, css } from '@emotion/core';
import { mouse } from '@puyan/ts-util';
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
    this.onMouseDown = this.onMouseDown.bind(this);
  }

  private _refSelf = React.createRef<HTMLDivElement>();
  private _canDrag = false;
  private _offset = {x:0, y:0};

  private onMouseDown(e:React.MouseEvent<HTMLDivElement>){
    if (!mouse.isPressedLeft(e.button)) return;

    this._canDrag = true;

    // 要素内のマウス座標(x, y)
    this._offset = {
      x:e.nativeEvent.offsetX,
      y:e.nativeEvent.offsetY,
    }

    const mmove = (e:MouseEvent) => {
      if (!this._refSelf.current) return;
      if (this._canDrag) {
        this._refSelf.current.style.left = e.pageX - this._offset.x + "px";
        this._refSelf.current.style.top  = e.pageY - this._offset.y + "px";
      }
    }

    document.body.addEventListener("mousemove", mmove, false);

    document.body.addEventListener("mouseup", () => {
      this._canDrag = false;
      document.body.removeEventListener("mousemove", mmove);
    }, {capture:false, once:true})
  }

  /** 描画 */
  render() {
    return (
      <div 
        ref={this._refSelf}
        className={this.className} 
        css={style.wrapper}
        onMouseDown={this.onMouseDown}
      >
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