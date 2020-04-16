import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
// import Login from "./Login";
import { Animated } from "react-animated-css";
import Booknow from "./Booknow";
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

// This site has 3 pages, all of which are rendered dynamically in the browser (not server rendered).
// Although the page does not ever refresh, notice how React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history, making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  const loginUri = "https://auth.pujarig.com/login?response_type=token&client_id=4f2mhs8n77ceod461gt5cvvhbt&redirect_uri=" + getCallbackUrl();
  const logoutUri = "https://auth.pujarig.com/logout?client_id=4f2mhs8n77ceod461gt5cvvhbt&logout_uri=" + getCallbackUrl();

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
          <div className="container  text-uppercase p-2">
            <Link to="/" class="navbar-brand js-scroll-trigger">
              <img class="logo" src={process.env.PUBLIC_URL + "/img/logo1.png"} alt="PujariG" />
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
                    <button onClick={openBookNow} className="nav-link booknow">
                      BOOKNOW
                  </button>
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

function isProd() {
  return window.location.href.indexOf('localhost') < 0;
}

function getCallbackUrl() {
  return (isProd() ? 'https://pujarig.com' : 'http://localhost:3000');
}

function openBookNow() {
  window.open("/booknow");
}

// You can think of these components as "pages" in your app.

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }
