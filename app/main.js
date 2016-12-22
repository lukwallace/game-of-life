import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import reducer from './reducers';

const logger = store => next => action => {
  console.log('[ ACTION ]:', action.type);
  const result = next(action);
  console.log('[ NEXT STATE ]:', store.getState());
  return result;
};

const store = createStore(reducer, applyMiddleware(logger));
const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <AppContainer />,
  document.getElementById('app')
);