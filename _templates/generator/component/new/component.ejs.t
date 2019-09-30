---
to: _templates/dist/<%= name %>/index.tsx
---
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
};

/******************************************************************************
 * Icon Component
 *****************************************************************************/
@observer
export default class <%= name %> extends React.Component<IProps> 
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
      <div className={this._className}>
        <%= name %>
      </div>
    );
  }

  /** css class name */
  private get _className() {
    return ClassNames("<%= cn %>");
  }
}