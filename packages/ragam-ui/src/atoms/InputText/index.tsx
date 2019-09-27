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
  /** onFocus */
  onFocus?:(e:React.FocusEvent<HTMLInputElement>) => void;
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
    onChange:() => {},
    onFocus:() => {},
  }

  /** コンストラクタ */
  constructor(props:IProps) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onFocus  = this.onFocus.bind(this);
  }

  /** 描画 */
  render() {
    return (
      <input 
        className={this.className} 
        type="text" 
        value={this.props.value} 
        onChange={this.onChange}
        onFocus={this.onFocus}
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

  /** callback for onFocus */
  private onFocus(e:React.FocusEvent<HTMLInputElement>) {
    this.props.onFocus && this.props.onFocus(e);
  }
}