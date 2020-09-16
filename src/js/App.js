import React, { Component } from "react";
import Header from "./component/Header/header";
import SideDrawer from "./component/Sidedrawer/sideDrawer";
import Backdrop from "./component/Backdrop/backdrop";
import Home from "./Home/home";
import Contact from "./Contact/contact";
import HardCloth from "./Services/hardcloth";
import { BrowserRouter, Route, Switch,Link,NavLink } from "react-router-dom";
import LeatherFabric from "./Services/leatherfabric";
import SofaHouse from "./Services/sofaHouse";
import TarpalHouse from "./Services/tarpalHouse";
import FiberGlass from "./Services/fiberglass";

class App extends Component {
  state = {
   sideDrawerOpen: false
 };
 drawerToggleClickHandler = () => {
   this.setState((prevState) =>{
       return{sideDrawerOpen: !prevState.sideDrawerOpen}
   });
 };
 backdropClickHandler =() => {
   this.setState({sideDrawerOpen: false})
 };
 render(){
   let backdrop;

   if (this.state.sideDrawerOpen){
     backdrop = <Backdrop click={this.backdropClickHandler}/>
   } return (
      <BrowserRouter>
        <div className="App">
          <Header drawerClickHandler={this.drawerToggleClickHandler} />
           <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <Switch>
            <Route exact path="/" exact component={Home} />
            <Route path="/hardclothmattress" component={HardCloth} />
            <Route path="/leatherfabric" component={LeatherFabric} />
            <Route path="/sofahouse" component={SofaHouse} />
            <Route path="/tarpalhouse" component={TarpalHouse} />
            <Route path="/fiberglasssheets" component={FiberGlass} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
