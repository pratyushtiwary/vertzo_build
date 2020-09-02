import React, { useState } from 'react';
import Header from './components/header';
import './components/css/fonts.css';
import './components/css/index.css';
import Home from './components/home';
import Footer from './components/footer';
import Loader from './components/loader';

function App() {
  return (
    <>
      <Loader/>
      <Header/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
