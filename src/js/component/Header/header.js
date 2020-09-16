import React, { Component }from 'react';
import DrawerToggleButton from '../SideDrawer/drawerToggleButton';
import { NavLink } from "react-router-dom";
const Header = props => (
      <header className="header">
       <div className="container">
       <div className="toolbar__toogle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
        <div className="pull-left">
       
         <img className="logo" src="../img/logo.png" alt="logo" />
        </div>
        <div className="spacer" />
        <nav className="nav-menu-container">
          <ul className="nav-menu">
          <NavLink className="menu-active" to="/" activeClassName="is-active"><li><a>Home</a></li></NavLink>
            <NavLink  to="#services" activeClassName="is-active">
              <li className="new"><a>Services</a>
            <ul className="nav-link">
              <NavLink  to="sofahouse" activeClassName="is-active"><li><a>sofahouse</a></li></NavLink>
              <NavLink  to="hardclothmattress" activeClassName="is-active"><li><a>hardclothmattress</a></li></NavLink>
              <NavLink  to="leatherfabric" activeClassName="is-active"><li><a>leatherfabric</a></li></NavLink>
              <NavLink  to="fiberglasssheets" activeClassName="is-active"><li><a>fiberglasssheets</a></li></NavLink>
              <NavLink  to="tarpalhouse" activeClassName="is-active"><li><a>tarpalhouse</a></li></NavLink>
            </ul>
            </li> 
            </NavLink>
            <NavLink to="#portfolio" activeClassName="is-active"><li><a>Portfolio</a></li></NavLink>
          <NavLink to="contact" activeClassName="is-active"> <li><a>Contact</a> </li></NavLink>
          </ul>
        </nav>
      </div>
     </header> 
    );

export default Header;