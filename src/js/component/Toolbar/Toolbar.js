import React from "react";

import DrawerToggleButton from "../Sidedrawer/drawerToggleButton";

// import './Toolbar.css';

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toogle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
    </nav>
  </header>
);

export default Toolbar;
