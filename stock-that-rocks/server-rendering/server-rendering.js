import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { reducers } from "../dist/main.bundle";

var store = createStore(reducers);
  
var html = renderToString(
  <Provider store={store}>
    <Main />
  </Provider>
);

function renderFullPage(html, preloadedState) {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8" />
                <title>IPP</title>
                <link rel="stylesheet" href="assets/css/bootstrap.css" media="all">
                <link rel="stylesheet" href="assets/css/bootstrap-theme.css" media="all">
                <link rel="stylesheet" href="assets/css/styles.css" media="all">
            </head> 
            <body>
                <div id="app">${html}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, "\\u003c")}
                </script>
                <script type="text/javascript" src="inline.bundle.js"></script>
                <script type="text/javascript" src="polyfills.bundle.js"></script>
                <script type="text/javascript" src="vendor.bundle.js"></script>
                <script type="text/javascript" src="main.bundle.js"></script>
            </body>
        </html>
    `;
}