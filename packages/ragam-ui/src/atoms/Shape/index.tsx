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
 * 定数
 *****************************************************************************/
/** base canvas size (正方形)) */
const BASE_CANVAS_SIZE = 100;

/******************************************************************************
 * Interface
 *****************************************************************************/
/** Icon Props */
export interface IProps {
  /** Konva形式の図形データ */
  data: any,
  /** 表示サイズ(px) */
  size: number,
  /** onClick */
  onClick?: (e:React.MouseEvent<HTMLDivElement>) => void;
};

/******************************************************************************
 * Icon Component
 *****************************************************************************/
@observer
export default class Shape extends React.Component<IProps> 
{
  /** props規定値 */
  static defaultProps:IProps = {
    data: {},
    size: BASE_CANVAS_SIZE,
  }

  /** コンストラクタ */
  constructor(props:IProps) {
    super(props);
    
    this._onClick = this._onClick.bind(this);
  }

  /** props.dataに指定された図形を描画する。 */
  componentDidMount() {
    if (!this._refSelf.current) return;

    this._stage = new Konva.Stage({
      container:this._refSelf.current,
      ...this._stageAttrs
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
      this._stage.setAttrs(this._stageAttrs)
      this._shape.setAttrs(this.props.data);
      this._stage.draw();
    }
  }

  /** 描画 */
  render() {
    const { size } = this.props;

    return (
      <div 
        ref={this._refSelf} 
        className={this._className}
        css={css({
          backgroundColor:"#ddd", 
          borderRadius   : 4, 
          width          : size, 
          height         : size
        })}
        onClick={this._onClick}
      />
    );
  }

  /** css class name */
  private get _className() {
    return ClassNames("a-shape");
  }

  /**
   * 指定されたサイズとCanvasの基本サイズとの比率
   * Canvasの基本サイズ(100)を基準として
   * props.size = 200: => _rate = 2
   * props.size = 50 : => _rate = 0.5
   */
  private get _rate() {
    return this.props.size / BASE_CANVAS_SIZE;
  }

  /**
   * 指定されたサイズから算出されるStage(canvasの描画領域)のサイズ
   * 図形データを100x100と想定しているため、canvasのサイズが100x100以下にならないように調整。
   */
  private get _stageSize() {
    if (this._rate < 1.0) {
      return BASE_CANVAS_SIZE;
    }
    return this.props.size * this._rate;
  }

  /**
   * propsに指定されたサイズに合わせるために計算されたStageの属性
   */
  private get _stageAttrs() {
    const size  = this._stageSize;
    const scale = this._rate;
    return {
      width : size,
      height: size,
      scaleX: scale,
      scaleY: scale,
    }
  }

  private _onClick(e:React.MouseEvent<HTMLDivElement>) {
    this.props.onClick && this.props.onClick(e);
  }

  /** 自身の参照 */
  private _refSelf = React.createRef<HTMLDivElement>();

  /** Konva.Stage props.dataに変更があった際に再描画するためにメンバに保持する。 */
  private _stage:Konva.Stage|null = null;

  /** Konva.Node 表示するメインの図形ノード  */
  private _shape:Konva.Shape|null = null;
}