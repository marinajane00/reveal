import React from 'react';//【react】
import ReactDOM from 'react-dom';//【react-dom】
import 'babel-polyfill';//【polyfill】
import { Provider } from 'react-redux';//【react-redux Provider】


import { AppContainer } from 'react-hot-loader'; //【react-hot-loader AppContainer】
// AppContainer 是一个 HMR 必须的包裹(wrapper)组件

import App from './Config/Route'; // 路由配置 //【route】
import store from './Config/Store'; // 引入Store //【store】

// 订阅state改变
store.subscribe(() => {//【subscribe】
    // console.log(store.getState());
});


const render = (Component) => {//【Provider store】
  ReactDOM.render(
    <AppContainer >
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>, document.getElementById('root'));
};

render(App);

// 模块热替换的 API
if (module.hot) {
  module.hot.accept('./Config/Route', () => {//【hot render】
    render(App);
  });
}
