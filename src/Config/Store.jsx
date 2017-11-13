import { createStore, combineReducers, applyMiddleware, compose } from 'redux'; //【redux】
import thunk from 'redux-thunk'; //【redux-thunk】
import reducer from '../Reducer/Index'; //【reducer】
// eslint-disable-next-line
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。
const store = createStore(
    combineReducers(reducer),
    composeEnhancers(applyMiddleware(thunk),
  ),
);

export default store;
