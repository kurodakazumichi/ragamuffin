/** @jsx jsx */
/******************************************************************************
 * import area
 *****************************************************************************/
import * as React from 'react';
import { observer } from 'mobx-react';
import { jsx } from '@emotion/core';
import ClassNames from 'classnames';

/******************************************************************************
 *  Enum
 *****************************************************************************/

/******************************************************************************
 * 定数
 *****************************************************************************/

/******************************************************************************
 * Interface
 *****************************************************************************/
/** Icon Props */
export interface IProps {
  /** 入力値 */
  value: string;
};

/******************************************************************************
 * Icon Component
 *****************************************************************************/
@observer
export default class InputText extends React.Component<IProps> 
{
  /** props規定値 */
  static defaultProps:IProps = {
    value:"",
  }

  /** コンストラクタ */
  constructor(props:IProps) {
    super(props);
  }

  /** 描画 */
  render() {
    return (
      <input className={this.className} type="text" value={this.props.value} />
    );
  }

  /** css class name */
  private get className() {
    return ClassNames("a-inputText");
  }
}