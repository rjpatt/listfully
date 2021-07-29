import React, { Component } from 'react';


function SignUp(props) {




  return (

    <form id="signup">
      <label htmlFor="signup-user">Username</label>
      <input id="signup-user" />
      <label htmlFor="signup-email">Email</label>
      <input id="signup-email" />
      <label htmlFor="signup-password">Password</label>
      <input id="signup-password" />
      <input className="btn" type="submit" value="Sign up" />
    </form>

  );

}

export default SignUp