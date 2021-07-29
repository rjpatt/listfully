import React, { Component } from 'react';


function Login(props) {




  return (

    <form id="login">
      <label htmlFor="login-email">Email</label>
      <input id="login-email" />
      <label htmlFor="login-password">Password</label>
      <input id="login-password" />
      <input className="btn" type="submit" value="Log in" />
    </form>

  );

}

export default Login