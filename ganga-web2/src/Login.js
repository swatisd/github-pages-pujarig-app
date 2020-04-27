import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="container">
      
        
        <div className="row">
  <div className="col-6">
  <form className="form-signin book">
          
          <input
            type="text"
            className="form-control mb-2"
            name="username"
            placeholder="Email Address"
            required=""
            autofocus=""
          />
          <input
            type="password"
            className="form-control mb-2"
            name="password"
            placeholder="Password"
            required=""
          />
          <label className="checkbox mb-4">
            <input
              type="checkbox"
              value="remember-me"
              id="rememberMe"
              name="rememberMe"
            />{" "}
            Remember me
          </label>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign In
          </button>
        </form></div>
  <div className="col-6"> <form className="form-signin book">
          
          <input
            type="text"
            className="form-control mb-2"
            name="name"
            placeholder="Name"
            required="true"
            autofocus=""
          />
          <input
            type="email"
            className="form-control mb-2"
            name="email"
            placeholder="Email Address"
            required="true"
            autofocus=""
          />
          <input
            type="text"
            className="form-control mb-2"
            name="Family Name"
            placeholder="Family Name"
            required="true"
            autofocus=""
          />
          <input
            type="password"
            className="form-control mb-2"
            name="password"
            placeholder="Password"
            required="true"
          />
          <label className="checkbox mb-4">
            <input
              type="checkbox"
              value="remember-me"
              id="rememberMe"
              name="rememberMe"
            />{" "}
            Remember me
          </label>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign Up
          </button>
        </form></div>
</div>
      </div>
    );
  }
}

export default Login;
