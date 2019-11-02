import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import reducers from '../client/redux/reducers';
import Routes from "../Routes";
import status from "../constants";
import App from "../client/components/App";


export default (req) => {
  let loggedInStatus = status.PENDING;
  if (req.get('cookie'))
   loggedInStatus = req.get('cookie').split('=')[1] === 'true' ? status.LOGGED_IN : status.PENDING;

  const store = createStore(reducers, {loggedIn: loggedInStatus});

  const content = renderToString(
    <Provider store={store}>
      <App>
        <StaticRouter location={req.path} context={{}}>
          <Routes />
        </StaticRouter>
      </App>
    </Provider>
  );

  return `
    <html lang="eng">
        <head>
            <title>My APP</title>
            <link rel="stylesheet" href="reset.css" />
            <link rel="stylesheet" href="styles.css" />
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
  `;
};