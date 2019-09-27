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
  /** onChange */
  onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
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
    onChange:() => {}
  }

  /** コンストラクタ */
  constructor(props:IProps) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  /** 描画 */
  render() {
    return (
      <input 
        className={this.className} 
        type="text" 
        value={this.props.value} 
        onChange={this.onChange}
      />
    );
  }

  /** css class name */
  private get className() {
    return ClassNames("a-inputText");
  }

  /** callback for onChange */
  private onChange(e:React.ChangeEvent<HTMLInputElement>) {
    this.props.onChange && this.props.onChange(e);
  }
}