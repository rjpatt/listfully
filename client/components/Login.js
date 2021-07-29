import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

function Login(props) {

  const processLogin = (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const body = {
      email,
      password
    }
    console.log('body: ', body)
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        if (data) {
          props.authenticateUser(email);
          props.history.push('/');
        } else props.history.push('/signup')
      })
      .catch(err => console.log('authenticateUser fetch ERROR: ', err));
  }


  return (

    <form id="login">
      <label htmlFor="login-email">Email</label>
      <input type="text" id="login-email" />
      <label htmlFor="login-password">Password</label>
      <input id="login-password" type="password" />
      <input className="btn" type="submit" value="Log in" onClick={processLogin} />
    </form>

  );

}

export default withRouter(Login);