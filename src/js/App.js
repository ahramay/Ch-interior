import React, { Component } from "react";
import Header from "./Header/header";
import Toolbar from "./component/Toolbar/Toolbar";
import SideDrawer from "./component/Sidedrawer/sideDrawer";
import Backdrop from "./component/Backdrop/backdrop";
import Home from "./Home/home";
import Contact from "./Contact/contact";
import About from "./About/about";
import HardCloth from "./Services/Hardcloth";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LeatherFabric from "./Services/leatherfabric";
import SofaHouse from "./Services/SofaHouse";
import TarpalHouse from "./Services/TarpalHouse";
import FiberGlass from "./Services/FiberGlass";
// import ReactDOM from 'react-dom';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState({
      sideDrawerOpen: !this.state.sideDrawerOpen
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <Switch>
            <Route exact path="/" exact component={Home} />
            {/* <Route path="/services" component={Services} />     */}
            <Route path="/Hard Cloth & Mattress" component={HardCloth} />
            <Route path="/Leather Fabric" component={LeatherFabric} />
            <Route path="/Sofa House" component={SofaHouse} />
            <Route path="/Tarpal House" component={TarpalHouse} />
            <Route path="/Fiber Glass Sheets" component={FiberGlass} />
            <Route path="/Contact" component={Contact} />
            <Route path="/About" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
