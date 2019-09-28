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

  /** 描画 */
  render() {
    return (
      <div 
        ref={this._refSelf}
        className={this.className} 
        css={style.wrapper}
        onMouseDown={this.onMouseDown}
      >
        <div css={style.header} className="-js-header">
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

  /** 自身の参照 */
  private _refSelf = React.createRef<HTMLDivElement>();

  /**
   * ドラッグによる移動を制御するフラグ
   */
  private _canDrag = false;

  /**
   * ドラッグによる移動が開始されたタイミングにおける要素内のマウスoffset座標
   */
  private _offset = {x:0, y:0};

  /**
   * ドラッグによる要素の移動を制御するイベント。
   * @param e is mouse event.
   */
  private onMouseDown(e:React.MouseEvent<HTMLDivElement>)
  {
    // ドラッグによる移動をさせないケース
    // 1. 左クリック以外でイベントが発火
    // 2. ヘッダ領域の外(アイコン上など)でイベントが発火
    if (!mouse.isPressedLeft(e.button)) return;
    if (!(e.target as HTMLDivElement).className.match("-js-header")) return;

    // ドラッグを有効化
    this._canDrag = true;

    // 要素内のマウス座標(x, y)を保持
    this._offset = {
      x:e.nativeEvent.offsetX,
      y:e.nativeEvent.offsetY,
    }

    // mousemove:マウス移動時に要素の座標を更新する。
    const mmove = (e:MouseEvent) => {
      if (!this._refSelf.current) return;

      if (this._canDrag) {
        this._refSelf.current.style.left = e.pageX - this._offset.x + "px";
        this._refSelf.current.style.top  = e.pageY - this._offset.y + "px";
      }
    }
    document.body.addEventListener("mousemove", mmove, false);

    // mouseup: ドラッグを無効化
    document.body.addEventListener("mouseup", () => {
      this._canDrag = false;
      document.body.removeEventListener("mousemove", mmove);
    }, {capture:false, once:true})
  }

}