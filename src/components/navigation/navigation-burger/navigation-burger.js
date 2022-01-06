import React, {Component} from "react";
import {slide as Menu} from 'react-burger-menu'
import {Link} from "react-router-dom";
import './navigation-burger.scss';
import {FaFacebook, FaInstagram, FaUserCircle} from "../../buttons/font-awesome";

class NavigationBurger extends Component {
    state={
        menuOpen: false
    }
    showSettings(event) {
        event.preventDefault();

    }
    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})
    }
    closeMenu () {
        this.setState({menuOpen: false})
    }
    toggleMenu () {
        this.setState(state => ({menuOpen: !state.menuOpen}))
    }

    render() {
        // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling

        return (
            <Menu right  isOpen={this.state.menuOpen}
                  onStateChange={(state) => this.handleStateChange(state)} width={250}>
                <ul>
                    <li className="nav-tittle"><Link to="/" onClick={() => this.closeMenu()}>freedom</Link></li>
                    <li><Link className="nav-item" to="/gallery/" onClick={() => this.closeMenu()}>Галерея</Link></li>
                    <li><Link className="nav-item" to="/about/" onClick={() => this.closeMenu()}>Обо мне</Link></li>
                    <li><Link className="nav-item" to="/blog/" onClick={() => this.closeMenu()}>Блог</Link></li>
                    <li><Link className="nav-item" to="/travel/" onClick={() => this.closeMenu()}>В поход с нами</Link></li>
                    <li className="nav-account" >
                        <Link to='' onClick={() => this.closeMenu()}><FaUserCircle/>
                            <span>Account</span></Link>
                    </li>
                    <li><Link to='' className="nav-icon" onClick={() => this.closeMenu()}><FaFacebook/></Link>
                        <Link to='' className="nav-icon" onClick={() => this.closeMenu()}><FaInstagram/></Link>
                    </li>
                </ul>


            </Menu>
        );
    }
}

export default NavigationBurger;