import './App.css';
import React from 'react';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Skill from './components/siklls/Skill';
import Projects from './components/projects/Projects';
import Quote from './components/quote/Quote';
import Contact  from './components/contact/Contact';
import Footer  from './components/footer/Footer';
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
      <Footer />
      </main>
      
     
    </>
  );
}

export default App;
