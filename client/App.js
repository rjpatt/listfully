import React, { useState } from 'react';
import ListCreator from './components/ListCreator';
import Header from './components/Header';

function App() {
  const [state, setState] = useState({});

  return (
    <div>
      <Header />
      <ListCreator />
    </div>
  );
}

export default App;