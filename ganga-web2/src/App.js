import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import { Animated } from "react-animated-css";
import Booknow from "./Booknow";
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import PujariGCommon from "./PujariGCommon";

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

  render() {
    
    return (

      <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
          <div className="container  text-uppercase p-2">
            <Link to="/" class="navbar-brand js-scroll-trigger">
              <img class="logo" src={window.location.origin + "/img/logo1.png"} alt="PujariG" />
            </Link>
            {/* <a class="navbar-brand js-scroll-trigger" href="#page-top">
              <img class="logo" src="/img/logo1.png" alt="PujariG" />
            </a> */}
            <button className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/#services">
                    Services <span className="sr-only">(current)</span>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/#about">
                    About
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Contact
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/#termsconditions">Terms & Conditions</a>
                    <a class="dropdown-item" href="/#contact">Get In Touch</a>

                  </div>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href={loginUri}>
                    Login
                  </a>
                </li>


                <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                  <li className="nav-item">
                    <a className="nav-link booknow" href="/booknow">BOOKNOW</a>
                  </li>
                </Animated>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/login" component={Login} /> */}

        <Route exact path="/booknow" component={Booknow} />
      </Switch>
    </Router>
    );
  }
}

export default App;