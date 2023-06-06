import React from 'react';
import Home from './components/Home';
import Education from './components/Education';
import Footer from './components/Footer';
import Navigation from './components/Nativagion';
import ContactMe from './components/ContactMe';
import Experience from './components/Experience';
import Projects from './components/project/Projects';
import Organizations from './components/organizations/Organizations';

function App() {

  return (
    <>
      <Navigation />
      <Home />
      <Education />
      <Experience />
      <Projects />
      <Organizations />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
