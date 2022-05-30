import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import FreedomstoreService from "./services/freedomstore-service copy";
import {FreedomstoreServiceProvider,CurrentUserProvider} from "./components/freedomstore-service-context";
import SimpleReactLightbox from 'simple-react-lightbox';

const freedomstoreService= new FreedomstoreService();

ReactDOM.render(
    <React.StrictMode>
    <CurrentUserProvider>
        <ErrorBoundry>
                        <SimpleReactLightbox>
                        <FreedomstoreServiceProvider value={freedomstoreService}>
                         <Router>
                             <App/>
                             </Router>
                             </FreedomstoreServiceProvider>
                         </SimpleReactLightbox>
                     
        </ErrorBoundry>
        </CurrentUserProvider>
        </React.StrictMode>,
    document.getElementById('root')
);