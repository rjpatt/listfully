import React, { useState } from 'react';
import { Switch, Route, NavLink, Link } from 'react-router-dom';
import ListCreator from './components/ListCreator';
import Homepage from './components/Homepage';
import PageNotFound from './components/PageNotFound';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import EditListContainer from './containers/EditListContainer';
import ListPage from './containers/ListPage';

import ListContainer from './containers/ListContainer';

function App(props) {
  const [state, setState] = useState({});
  const [currentUser, setCurrentUser] = useState(null);

  const authenticateUser = (username) => {
    setCurrentUser(username);
  }

  return (
    <>
      <header>
        <Link to="/"><h1>Listfully</h1></Link>
        <nav>
          <ul>

            {currentUser &&
              <>
                <li>
                  <NavLink to='/' activeClassName='active'><button>Home</button></NavLink>
                </li>
                <li>
                  <NavLink to='/lists' activeClassName='active'><button>Lists</button></NavLink>
                </li>
                <li>
                  <NavLink to='/addlist' activeClassName='active'><button>Add List</button></NavLink>
                </li>
              </>
            }
            {!currentUser &&
              <>
                <li>
                  <NavLink to='/login' activeClassName='active'><button>Login</button></NavLink>

                </li>
                <li>
                  <NavLink to='/signup' activeClassName='active'><button>Sign Up</button></NavLink>

                </li>
              </>
            }

          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path='/lists'>
          <ListContainer />
        </Route>
        <Route path='/lists/:id'>
          <ListPage />
        </Route>
        <Route exact path='/addlist'>
          <ListCreator />
        </Route>
        <Route path='/editlist/:id'>
          <EditListContainer />
        </Route>
        <Route exact path='/login'>
          <Login authenticateUser={authenticateUser} />
        </Route>
        <Route exact path='/signup'>
          <SignUp authenticateUser={authenticateUser} />
        </Route>

        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}


export default App;