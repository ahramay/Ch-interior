import React, { Component } from 'react';

class DrawerToggleButton extends Component {
    render() {
        return (
          <button className="toggle-button">
              <div className="toggle-button__line"/>
              <div className="toggle-button__line"/>
              <div className="toggle-button__line"/>
          </button>  
  );
 }
}

export default DrawerToggleButton;
