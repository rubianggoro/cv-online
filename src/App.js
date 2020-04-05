import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navbar from './components/navbar'
import Section from './components/section'
import About from './components/about'
import Skill from './components/skill'
import Contact from './components/contact'

function App() {
  return (
    <div>
       <Navbar></Navbar>
       <Section></Section>
       <About></About>
       <Skill></Skill>
       <Contact></Contact>
    </div>
  );
}

export default App;
