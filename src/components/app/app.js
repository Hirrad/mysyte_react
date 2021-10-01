import React from "react";
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'fslightbox/index'
import {withFreedomstoreService} from '../hoc';

const App = ({freedomstoreService}) =>{
    console.log(freedomstoreService.getBlog())
    return <div>App</div>
}
export default withFreedomstoreService()(App);