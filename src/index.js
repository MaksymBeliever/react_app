import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import rootReducer from './system/rootReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>,
   document.getElementById('root')
);
