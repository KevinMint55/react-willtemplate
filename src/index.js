import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import router from './router';
import './style/reset.less';

function renderWithHotReload(Router) {
  ReactDOM.render(
    <AppContainer>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </AppContainer>,
    document.getElementById('app'),
  );
}

/* 初始化 */
renderWithHotReload(router);

/* 热更新 */
if (module.hot) {
  module.hot.accept('./router/index.js', () => {
    const Router = require('./router/index.js').default;
    renderWithHotReload(Router);
  });
}

// 判断该浏览器支不支持 serviceWorker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => {
        console.log('service-worker registed');
      })
      .catch(() => {
        console.log('service-worker registed error');
      });
  });
}
