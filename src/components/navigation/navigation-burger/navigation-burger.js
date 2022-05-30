import React, {useState,useEffect} from "react";
import {slide as Menu} from 'react-burger-menu'
import {Link,NavLink} from "react-router-dom";
import './navigation-burger.scss';
import {FaFacebook, FaInstagram, FaUserCircle} from "../../buttons/font-awesome";

const NavigationBurger =({db})=> {
    // const home = db.data.find((data) => {
    //     return data.attributes.home === true
    // });
    const [menuOpen,setMenuOpen]= useState(false)


   const handleStateChange = ({isOpen})=> {
    setMenuOpen(isOpen)
    }
  const  closeMenu= (e)=> {
        setMenuOpen(false)

    }

    
        // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling

        return (
            <Menu right  isOpen={menuOpen}
            pageWrapId={ "root" }             
                  onStateChange={handleStateChange} width={250}>
                <ul>
                    {db.data.map((data, index) => {
                        if (data.attributes.home) {
                         return   <li className="nav-tittle nav-tittle--home" key={index}>
                            <NavLink to={data.attributes.url_navigation}
                             onClick={(e) => closeMenu(e)}>
                             {data.attributes.name}
                             </NavLink>
                             </li>
 
                        }
                           return <li key={index}>
                                <NavLink to={data.attributes.url_navigation}                                
                                onClick={(e) => closeMenu(e)}
                                className="nav-item">
                                {data.attributes.name}
                                </NavLink>
                                </li>

                            
                        })}
                    {/* <li><Link className="nav-item" to="/gallery/" onClick={(e) => closeMenu(e)}>Галерея</Link></li>
                    <li><Link className="nav-item" to="/about/" onClick={(e) => closeMenu(e)}>Обо мне</Link></li>
                    <li><Link className="nav-item" to="/blog/" onClick={(e) => closeMenu(e)}>Блог</Link></li>
                    <li><Link className="nav-item" to="/travel/" onClick={(e) => closeMenu(e)}>В поход с нами</Link></li> */}
                    {/* <li className="nav-account" >
                        <Link to='' onClick={() => this.closeMenu()}><FaUserCircle/>
                            <span>Account</span></Link>
                    </li> */}
                    <li><Link to='' className="nav-icon" onClick={(e) => closeMenu(e)}><FaFacebook/></Link>
                        <Link to='' className="nav-icon" onClick={(e) => closeMenu(e)}><FaInstagram/></Link>
                    </li>
                </ul>


            </Menu>
        );
    }


export default NavigationBurger;