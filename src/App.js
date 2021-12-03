import React from 'react';
import './Navbar/Nav.css';
import Nav from './Navbar/Nav';
import Uppersection from './Upp/Uppersection';
import './Upp/Uppersection.css';
import Middlesection from './Mid/Middlesection';
import './Mid/Middlesection.css';
import Lowersection from './Low/Lowersection';
import './Low/Lowersection.css';

const App = () => {
  return (
    <>
      <Nav />
      <Uppersection />
      <Middlesection />
      <Lowersection/>
    </>
  );
};

export default App;
