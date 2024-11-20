// App.js
import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Family from './components/Family';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contributions from './components/Contributions';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Hobbies />
        <Family />
        <Education />
        <Certificates />
        <Contributions />
      </main>
      <Footer />
    </div>
  );
}

export default App;
