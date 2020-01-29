import React, { Component } from 'react';

class Sidedrawer extends Component {
    render() {
        return (
            <nav className="side-drawer">
            <ul className="nav-menu">
              <li className="menu-active"><a href="/">Home</a></li>
              <li class="menu-has-children"><a href="/">Services</a>
              <ul>
                <li><a href="Sofa House">Sofa House</a></li>
                <li><a href="Hard Cloth & Mattress">Hard Cloth & Mattress</a></li>
                <li><a href="Leather Fabric">Leather Fabric</a></li>
                <li><a href="Fiber Glass Sheets">Fiber Glass Sheets</a></li>
                <li><a href="Tarpal House">Tarpal House</a></li>
              </ul>
              </li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="about">About Us</a></li>
              <li><a href="Contact">Contact</a></li>
            </ul>
          </nav>
  );
 }
}

export default Sidedrawer;
