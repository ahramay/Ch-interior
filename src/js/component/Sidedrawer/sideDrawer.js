import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
const Sidedrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
    return (
            <nav className={drawerClasses} >
            <ul className="toolbar__navigation">
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
  );
 }

export default Sidedrawer;
