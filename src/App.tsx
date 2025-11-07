// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { MuiMode } from './components/mui/mui-mode';
import { AppProviders } from './components/providers/app-providers';

//import { Application } from './components/application/application';
// import { Counter } from './components/counter/counter';
// import { Skills } from './components/skills/skills';

function App() {
  return (
		<AppProviders >
    	<div className="App">
				<MuiMode />
			</div>
		</AppProviders>
  );
}

export default App;

