/** @jsx jsx */
/******************************************************************************
 * import area
 *****************************************************************************/
import * as React from 'react';
import { observer } from 'mobx-react';
import { jsx, css } from '@emotion/core';
import ClassNames from 'classnames';

/******************************************************************************
 * CSS
 *****************************************************************************/
const style = {
  input: css({
    border:"none",
    background: "transparent",
    "&:focus": {
      outline:0,
    }
  })
}

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
  /** onBlur */
  onBlur?:(e:React.FocusEvent<HTMLInputElement>) => void;
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
    onBlur:() => {},
  }

  /** コンストラクタ */
  constructor(props:IProps) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onFocus  = this.onFocus.bind(this);
    this.onBlur   = this.onBlur.bind(this);
  }

  /** 描画 */
  render() {
    return (
      <input 
        css={style.input}
        className={this.className} 
        type="text" 
        value={this.props.value} 
        onChange={this.onChange}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
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

  /** callback for onBlur */
  private onBlur(e:React.FocusEvent<HTMLInputElement>) {
    this.props.onBlur && this.props.onBlur(e);
  }
}