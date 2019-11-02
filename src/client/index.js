import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from "redux";

import App from "./components/App";
import reducers from "./redux/reducers";
import Routes from "../Routes";
import {BrowserRouter} from "react-router-dom";

const store = createStore(reducers, {});

ReactDOM.hydrate(
  <Provider store={store}>
    <App>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </App>
  </Provider>,
  document.querySelector('#root')
);