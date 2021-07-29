import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


function SignUp(props) {

  const processSignUp = (e) => {
    e.preventDefault();
    const username = document.getElementById('signup-user').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const body = {
      username,
      email,
      password
    }
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        props.authenticateUser(username);
        props.history.push('/');
      })
      .catch(err => console.log('addUser fetch ERROR: ', err));
  }



  return (

    <form id="signup">
      <label htmlFor="signup-user">Username</label>
      <input id="signup-user" />
      <label htmlFor="signup-email">Email</label>
      <input id="signup-email" />
      <label htmlFor="signup-password" >Password</label>
      <input id="signup-password" type="password" />
      <input className="btn" type="submit" value="Sign up" onClick={processSignUp} />
    </form>

  );

}

export default withRouter(SignUp);