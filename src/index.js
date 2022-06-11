import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import FreedomstoreService from "./services/freedomstore-service copy";
import {FreedomstoreServiceProvider,CurrentUserProvider} from "./components/freedomstore-service-context";
import SimpleReactLightbox from 'simple-react-lightbox';
import AuthorizationToken from "./components/authorization/authorizationToken/authorizationToken";
const freedomstoreService= new FreedomstoreService();

ReactDOM.render(
    <React.StrictMode>
    <CurrentUserProvider>
        <ErrorBoundry>
                        <SimpleReactLightbox>
                        <FreedomstoreServiceProvider value={freedomstoreService}>
                        <AuthorizationToken>
                         <Router>
                             <App/>
                             </Router>
                             </AuthorizationToken>
                             </FreedomstoreServiceProvider>
                         </SimpleReactLightbox>
                     
        </ErrorBoundry>
        </CurrentUserProvider>
        </React.StrictMode>,
    document.getElementById('root')
);