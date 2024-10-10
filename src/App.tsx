import React from 'react';

import './App.css';
import Greeting from './Components/Greeting';
import Counter from './Components/Counter';
const App:React.FC=()=> {
  return (
    <div className="App">
     <Greeting name="said"/>
     <Counter />
    </div>
  );
}

export default App;
