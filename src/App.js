import About from './components/about/About';
import Intro from './components/intro/Intro';
import 'animate.css';
import Market from './components/market/Market';
import Contact from './components/contact/Contact';
import React from 'react';

function App() {
  return (
    <div className="App">
     <Intro></Intro>
     <About></About>
     <Market></Market>
    </div>
  );
}

export default App;
