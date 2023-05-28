import React from 'react';
import { Card, CardBody, Typography } from "@material-tailwind/react";
import Home from './components/Home';
import Education from './components/Education';
import Footer from './components/Footer';
import Navigation from './components/Nativagion';
import ContactMe from './components/ContactMe';

function App() {
  
  return (
    <>
   <Navigation />
      <Home/>
      <Education/>
      <ContactMe/>
    <Card>
      <CardBody>
       <Typography>
     Under Construction
      </Typography>
      </CardBody>
    </Card>
    <Footer/>
    </>
  );
}

export default App;
