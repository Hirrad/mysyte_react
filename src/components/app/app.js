import React from "react";
import {Route,Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../veriable/variable.scss'
import './app.scss';
import 'fslightbox';

import {withFreedomstoreService} from '../hoc';
import Header from "../header";
import Blog from "../blog";
import Gallery from "../gallery";
import Travel from "../travel";
import {Page1} from "../pages";
import PhotoGallery from "../gallery/photo-gallery";
import Footer from "../footer";
// import NavigationBurger from "../navigation/navigation-burger";



const App = ({freedomstoreService}) =>{
    // console.log(freedomstoreService.getBlog())
    return<React.Fragment>
        {/*<NavigationBurger/>*/}
        <Header/>
        <div className='container'>
            <Switch>
                <Route path="/blog/:id?" component={Blog}/>
                <Route path="/gallery/:id?" component={Gallery}/>
                <Route path="/page1" component={Page1}/>
                <Route path="/photo/:id?" component={PhotoGallery}/>
                {/*<Route path="/about" component={About}/>*/}
                <Route path="/travel" component={Travel}/>
            </Switch>
            <Footer/>
        </div>
    </React.Fragment>



}

export default withFreedomstoreService()(App);