import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);

/* Provider :  스토어에 접근필요한 컴포넌트들이 모두 접근할 수 있게 해준다.

The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.

Since any React component in a React Redux app can be connected to the store, most applications will render a <Provider> at the top level, with the entire app’s component tree inside of it.

The Hooks and connect APIs can then access the provided store instance via React's Context mechanism */