import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import FreedomstoreService from "./services/freedomstore-service copy";
import {FreedomstoreServiceProvider} from "./components/freedomstore-service-context";
import SimpleReactLightbox from 'simple-react-lightbox';

import store from "./store";
const freedomstoreService= new FreedomstoreService();

ReactDOM.render(
    <React.StrictMode>
    <Provider store={store}>
        <ErrorBoundry>
                        <SimpleReactLightbox>
                        <FreedomstoreServiceProvider value={freedomstoreService}>
                         <Router>
                             <App/>
                             </Router>
                             </FreedomstoreServiceProvider>
                         </SimpleReactLightbox>
                     
        </ErrorBoundry>
        </Provider>
        </React.StrictMode>,
    document.getElementById('root')
);