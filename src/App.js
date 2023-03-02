import React from 'react'
import Cards from './components/Cards';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Food from './components/Food'
import Category from './components/Category';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Home/>
       <Cards/>
       <Food/>
       <Category/>
    </div>
  );
}

export default App;
