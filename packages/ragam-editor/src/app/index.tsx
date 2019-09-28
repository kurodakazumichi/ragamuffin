/** @jsx jsx */
/******************************************************************************
 * import
 *****************************************************************************/
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { jsx } from '@emotion/core';
import Header from '../components/Header'

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
        <Header />
        Hello World
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);