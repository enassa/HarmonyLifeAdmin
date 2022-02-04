

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/nathan.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './store/reducers/RootReducer'
import thunk from 'redux-thunk'


export const store =  createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);




