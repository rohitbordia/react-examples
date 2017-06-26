import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux"

import { reducers } from "./reducers";

import { Main } from "./pages/main";

let store = createStore(reducers);

store.subscribe(() => {
    
})

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById("app")
);