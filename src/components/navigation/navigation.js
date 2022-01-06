import React, {Component} from "react";
// import {FaUserCircle, FaFacebook, FaInstagram} from "../buttons/font-awesome";
// import {slide as Menu} from 'react-burger-menu'
// import {Link} from "react-router-dom";

import './navigation.scss'
import NavigationPc from "./navigation-pc";
import NavigationBurger from "./navigation-burger";

class Navigation extends Component {
    state = {
        mobile: document.documentElement.clientWidth
    }



widthScreen= (e)=> {
        if(document.documentElement.clientWidth!==this.state.mobile)
        {
            let mobile=document.documentElement.clientWidth;
            this.setState({mobile})
        }

}
componentDidMount() {
        window.addEventListener("resize",this.widthScreen)

}
componentWillUnmount() {
    window.removeEventListener("resize",this.widthScreen);
}


    render() {
       let {mobile}=this.state;
       // console.log(mobile);
        return (mobile<=980)?<NavigationBurger/>:<NavigationPc/>

    }
}


export default Navigation;