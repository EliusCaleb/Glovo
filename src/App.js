import React from 'react'
import Cards from './components/Cards';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Food from './components/Food'

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Home/>
       <Cards/>
       <Food/>
    </div>
  );
}

export default App;
