import React from 'react';
import './App.css';
import Grid from './Grid';
import MapBox from './Map';
import ResponsiveAppBar from './Navbar';
import Hero from './header';

function App() {
  return (
    <section>
      <ResponsiveAppBar />
      <Hero />
      <div className="content">
        <Grid />
        <div className='map-container'><MapBox /></div>
      </div>
    </section>
  );
}

export default App;
