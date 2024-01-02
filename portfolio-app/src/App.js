import './App.css';
import React from 'react';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Skill from './components/siklls/Skill';
import Projects from './components/projects/Projects';
import Quote from './components/quote/Quote';
import Contact  from './components/contact/Contact';
function App() {
  return (
    <>
      <Header />
      <main className='main'>
      <Home />
      <Skill />
      <Projects />
      <Quote />
      <Contact />
      </main>
      
     
    </>
  );
}

export default App;
