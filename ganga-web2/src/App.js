import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import { Animated } from "react-animated-css";
import Booknow from "./Booknow";
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import PujariGCommon from "./PujariGCommon";
import {Image, Navbar, Nav, NavDropdown} from 'react-bootstrap';



const common = new PujariGCommon();
const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;
const loginUri = common.loginURI();
//const logoutUri = common.logoutURI();


// This site has 3 pages, all of which are rendered dynamically in the browser (not server rendered).
// Although the page does not ever refresh, notice how React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history, making sure things like the back button and bookmarks
// work properly.

// export default function BasicExample() {
class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      idToken: "userNotLoggedin",
    };
  }

  componentDidMount() {
    const state = common.loginHelper(this.state);
    this.setState(state);
  }

  render() {
    
    return (

      <Router>
      
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" id="mainNav">
        <div className="container" >    
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          
          <div className="container  text-uppercase p-2">
          <Link to="/" className="navbar-brand js-scroll-trigger ">
              <Image className="logo" src={window.location.origin + "/img/logoold.png"} alt="pujarig.com" fluid />
            </Link>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Nav.Link className="nav-link" href="/#services">
                    Services <span className="sr-only">(current)</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link className="nav-link" href="/#about">
                    About
                  </Nav.Link>
                </li>
                <li className="nav-item dropdown">
               
                  <NavDropdown title="Contact" id="navbarDropdown" >
                    <NavDropdown.Item  href="/#termsconditions">Terms & Conditions</NavDropdown.Item>
                    <NavDropdown.Item  href="/#contact">Get In Touch</NavDropdown.Item>
                  </NavDropdown>
                  
                </li>
                <li className="nav-item ">
                  <Nav.Link className="nav-link" href={loginUri}>
                    Login
                  </Nav.Link>
                </li>
                <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                  <li className="nav-item">
                    <Nav.Link className="nav-link booknow" href="/booknow">BOOKNOW</Nav.Link>
                  </li>
                </Animated>
              </ul>
          </div>
        </Navbar.Collapse>
        </div>
        </Navbar>
      <Switch>
        <Route exact path="/booknow" component={Booknow} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
    );
  }
}

export default App;