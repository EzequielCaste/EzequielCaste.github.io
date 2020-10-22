import React from 'react';
import './App.scss';

import { Navbar } from './components/Navbar';
import { MainSection } from './components/MainSection';
import { ProjectSection } from './components/ProjectSection';
import { ContactForm } from './components/ContactForm';

function App() {
  return (
    <>
    <Navbar />    
    <MainSection />
    <ProjectSection />
    <ContactForm />
    </>
  );
}

export default App;
