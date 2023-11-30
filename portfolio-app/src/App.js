import './App.css';
import React from 'react';
import Home from './components/home/Home';
import Header from './components/header/Header';


function App() {
  return (
    <>
      <Header />
      <main className='main'>
      <Home />
      </main>
     
    </>
  );
}

export default App;
