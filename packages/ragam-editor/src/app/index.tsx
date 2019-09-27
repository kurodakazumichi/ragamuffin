/** @jsx jsx */
/******************************************************************************
 * import
 *****************************************************************************/
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { jsx, css } from '@emotion/core';

/**
/******************************************************************************
 * Header
 *****************************************************************************/
export class Header extends React.Component {
  render() {
    return (
      <div>
        Header
      </div>
    );
  }
}

/******************************************************************************
 * アプリケーション
 *****************************************************************************/
export default class App extends React.Component {

  constructor(props:any) {
    super(props);
  }

  render() {
    
    return (
      <div className="app">
        Hello World
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);