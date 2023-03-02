import React from 'react'
import Cards from './components/Cards';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Home/>
       <Cards/>
    </div>
  );
}

export default App;
