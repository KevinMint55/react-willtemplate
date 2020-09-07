import React from 'react';
import ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
// import { BrowserRouter } from 'react-router-dom';
import Router from './router/index';
import './style/reset.less';

ReactDOM.render(<Router />, document.getElementById('app'));

// function renderWithHotReload(Router: any) {
//   ReactDOM.render(
//     <AppContainer>
//       <BrowserRouter>
//         <Router />
//       </BrowserRouter>
//     </AppContainer>,
//     document.getElementById('app'),
//   );
// }

// /* 初始化 */
// renderWithHotReload(router);

// /* 热更新 */
// if (module.hot) {
//   module.hot.accept('./router/index.tsx', () => {
//     const Router = require('./router/index.tsx').default;
//     renderWithHotReload(Router);
//   });
// }
