import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/index';
import './style/reset.less';

if (module && module.hot) {
  module.hot.accept();
}

ReactDOM.render(<Router />, document.getElementById('app'));
