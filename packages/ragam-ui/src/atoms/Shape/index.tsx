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
};

/******************************************************************************
 * Icon Component
 *****************************************************************************/
@observer
export default class Shape extends React.Component<IProps> 
{
  /** props規定値 */
  static defaultProps:IProps = {
  }

  /** コンストラクタ */
  constructor(props:IProps) {
    super(props);
  }

  /** life cycle */
  componentDidMount() {
    if (!this._refSelf.current) return;

    Konva.Node.create({
      attrs:{
        width:CANVAS_SIZE,
        height:CANVAS_SIZE,
        scaleX: 0.6,
        scaleY: 0.6,
      },
      className:"Stage",
      children:[{
        attrs:{},
        className:"Layer",
        children:[{
          attrs:{
            x:50,
            y:50,
            radius:40,
            fill:"red"
          },
          className:"Circle"
        }]
      }]
    }, this._refSelf.current);

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
}