import React from "react";
import {Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../veriable/variable.scss'
import './app.scss';
import 'fslightbox';

import {withFreedomstoreService} from '../hoc';
import Header from "../header";
import Blog from "../blog";
import Gallery from "../gallery";
import Travel from "../travel";
import Page from "../pages";
import PhotoGallery from "../gallery/photo-gallery";


const App = ({freedomstoreService}) =>{
    console.log(freedomstoreService.getBlog())
    return<React.Fragment>
        <Header/>
        <div className='container'>
            <Route path="/blog" component={Blog}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/page" component={Page}/>
            <Route path="/photo" component={PhotoGallery}/>
            {/*<Route path="/about" component={About}/>*/}
            <Route path="/travel" component={Travel}/>
        </div>
    </React.Fragment>



}
export default withFreedomstoreService()(App);