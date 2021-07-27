import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ListCreator from './components/ListCreator';
import Homepage from './components/Homepage';
import ListContainer from './containers/ListContainer';

function App() {
  const [state, setState] = useState({});

  return (
    <Router>
      <header>
        <h1>Listfully</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'><button>Home</button></Link>
            </li>
            <li>
              <Link to='/lists'><button>Lists</button></Link>
            </li>
            <li>
              <Link to='/addlist'><button>Add List</button></Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path='/lists'>
          <ListContainer />
        </Route>
        <Route path='/addlist'>
          <ListCreator />
        </Route>
        <Route path='/'>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;