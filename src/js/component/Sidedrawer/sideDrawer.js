import React, { Component } from 'react';

import './Sidedrawer.css';

const Sidedrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
    return (
            <nav className={drawerClasses} >
            <div className="pull-left">
         <img className="logo" src="../img/logo.png" alt="logo" />
        </div>
        <div className="spacer" />
        <nav className="nav-menu-container">
          <ul className="nav-menu">
            <li className="menu-active"><a href="/">Home</a></li>
            <li class="new"><a href="/">Services</a>
            <ul>
              <li><a href="Sofa House">Sofa House</a></li>
              <li><a href="Hard Cloth & Mattress">Hard Cloth & Mattress</a></li>
              <li><a href="Leather Fabric">Leather Fabric</a></li>
              <li><a href="Fiber Glass Sheets">Fiber Glass Sheets</a></li>
              <li><a href="Tarpal House">Tarpal House</a></li>
            </ul>
            </li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="About">About Us</a></li>
            <li><a href="Contact">Contact</a></li>
          </ul>
        </nav>
          </nav>
  );        
};

export default Sidedrawer;
