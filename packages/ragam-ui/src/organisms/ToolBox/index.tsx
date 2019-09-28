/** @jsx jsx */
/******************************************************************************
 * import area
 *****************************************************************************/
import * as React from 'react';
import { observer } from 'mobx-react';
import { jsx } from '@emotion/core';
import ClassNames from 'classnames';
import * as Icon from '../../atoms/Icon'

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
      <div className={this.className}>
        <div>
          <Icon.default type={Icon.Type.Circle} />
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