import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import FreedomstoreService from "./services/freedomstore-service";
import {FreedomstoreServiceProvider} from "./components/freedomstore-service-context";

import store from "./store";
const freedomstoreService= new FreedomstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
                <FreedomstoreServiceProvider value={freedomstoreService}>
                     <Router>
                             <App/>
                     </Router>
                </FreedomstoreServiceProvider>
        </ErrorBoundry>
        </Provider>,
    document.getElementById('root')
);