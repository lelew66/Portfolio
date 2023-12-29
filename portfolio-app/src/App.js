import './App.css';
import React from 'react';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Skill from './components/siklls/Skill';
import Projects from './components/projects/Projects';
function App() {
  return (
    <>
      <Header />
      <main className='main'>
      <Home />
      <Skill />
      <Projects />
      </main>
      
     
    </>
  );
}

export default App;
