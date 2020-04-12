import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div class="container">
      
        
        <div class="row">
  <div class="col-6">
  <form class="form-signin book">
          
          <input
            type="text"
            class="form-control mb-2"
            name="username"
            placeholder="Email Address"
            required=""
            autofocus=""
          />
          <input
            type="password"
            class="form-control mb-2"
            name="password"
            placeholder="Password"
            required=""
          />
          <label class="checkbox mb-4">
            <input
              type="checkbox"
              value="remember-me"
              id="rememberMe"
              name="rememberMe"
            />{" "}
            Remember me
          </label>
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            Sign In
          </button>
        </form></div>
  <div class="col-6"> <form class="form-signin book">
          
          <input
            type="text"
            class="form-control mb-2"
            name="name"
            placeholder="Name"
            required="true"
            autofocus=""
          />
          <input
            type="email"
            class="form-control mb-2"
            name="email"
            placeholder="Email Address"
            required="true"
            autofocus=""
          />
          <input
            type="text"
            class="form-control mb-2"
            name="Family Name"
            placeholder="Family Name"
            required="true"
            autofocus=""
          />
          <input
            type="password"
            class="form-control mb-2"
            name="password"
            placeholder="Password"
            required="true"
          />
          <label class="checkbox mb-4">
            <input
              type="checkbox"
              value="remember-me"
              id="rememberMe"
              name="rememberMe"
            />{" "}
            Remember me
          </label>
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            Sign Up
          </button>
        </form></div>
</div>
      </div>
    );
  }
}

export default Login;
