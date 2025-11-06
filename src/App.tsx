// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { CounterAmount } from './components/CounterAmount/CounterAmount';

//import { Application } from './components/application/application';
// import { Counter } from './components/counter/counter';
// import { Skills } from './components/skills/skills';

function App() {
  return (
    <div className="App">
			<CounterAmount />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

