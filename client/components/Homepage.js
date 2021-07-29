import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {


  return (
    <div id="homepage">
      <h3>Welcome to Listfully!</h3>
      <img src='../public/img/list-making.jpg' width='500px' />
      <p>
        Do you live your life in lists? Want to share lists about your favorites and your life? <br />You've come to the right place! <Link to='/signup'>Sign up</Link> and get started listing today.
      </p>
    </div >
  );
}

export default Homepage;