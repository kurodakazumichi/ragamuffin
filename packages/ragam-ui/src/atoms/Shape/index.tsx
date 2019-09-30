/** @jsx jsx */
/******************************************************************************
 * import area
 *****************************************************************************/
import * as React from 'react';
import { observer } from 'mobx-react';
import { jsx, css } from '@emotion/core';
import Konva from 'konva';
import ClassNames from 'classnames';

/******************************************************************************
 *  Enum
 *****************************************************************************/

/******************************************************************************
 * 定数
 *****************************************************************************/
/** canvas size (正方形)) */
const CANVAS_SIZE = 100;

/******************************************************************************
 * Interface
 *****************************************************************************/
/** Icon Props */
export interface IProps {
  /** Konva形式の図形データ */
  data: any,
};

/******************************************************************************
 * Icon Component
 *****************************************************************************/
@observer
export default class Shape extends React.Component<IProps> 
{
  /** props規定値 */
  static defaultProps:IProps = {
    data:{}
  }

  /** コンストラクタ */
  constructor(props:IProps) {
    super(props);
  }

  /** props.dataに指定された図形を描画する。 */
  componentDidMount() {
    if (!this._refSelf.current) return;

    this._stage = new Konva.Stage({
      container:this._refSelf.current,
      width:CANVAS_SIZE,
      height:CANVAS_SIZE,
      scaleX: 0.6,
      scaleY: 0.6,
    })

    const layer = new Konva.Layer();

    this._shape = Konva.Node.create(this.props.data);

    if (this._stage && this._shape) {
      layer.add(this._shape);
      this._stage.add(layer);
    }
  }

  /** 図形の再描画 */
  componentDidUpdate() {
    if (this._stage && this._shape) {
      this._shape.setAttrs(this.props.data);
      this._stage.draw();
    }
  }

  /** 描画 */
  render() {
    return (
      <div 
        ref={this._refSelf} 
        className={this._className}
        css={css({backgroundColor:"#ddd", borderRadius:4, width:CANVAS_SIZE * 0.6, height:CANVAS_SIZE * 0.6})}
      />
    );
  }

  /** css class name */
  private get _className() {
    return ClassNames("a-shape");
  }

  /** 自身の参照 */
  private _refSelf = React.createRef<HTMLDivElement>();

  /** Konva.Stage props.dataに変更があった際に再描画するためにメンバに保持する。 */
  private _stage:Konva.Stage|null = null;

  /** Konva.Node 表示するメインの図形ノード  */
  private _shape:Konva.Shape|null = null;
}