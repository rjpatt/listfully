import React, { useState } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import ListCreator from './components/ListCreator';
import Homepage from './components/Homepage';
import EditListContainer from './containers/EditListContainer';

import ListContainer from './containers/ListContainer';

function App(props) {
  const [state, setState] = useState({});

  return (
    <>
      <header>
        <h1>Listfully</h1>
        <nav>
          <ul>
            <li>
              <NavLink to='/' activeClassName='active'><button>Home</button></NavLink>
            </li>
            <li>
              <NavLink to='/lists' activeClassName='active'><button>Lists</button></NavLink>
            </li>
            <li>
              <NavLink to='/addlist' activeClassName='active'><button>Add List</button></NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path='/lists'>
          <ListContainer />
        </Route>
        <Route exact path='/addlist'>
          <ListCreator />
        </Route>
        <Route path='/editlist/:id'>
          <EditListContainer />
        </Route>



        <Route exact path='/'>
          <Homepage />
        </Route>
      </Switch>
    </>
  );
}


export default App;