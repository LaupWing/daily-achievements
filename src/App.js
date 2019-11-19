import React from 'react';
import Navbar from './nav/Navbar'
import Dashboard from './dashboard/Dashboard'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Navbar/>
            <Dashboard/>
        </div>
    </BrowserRouter>
  );
}

export default App;
