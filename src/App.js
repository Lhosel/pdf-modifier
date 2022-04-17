import React from 'react';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Select from './Components/Select';
import Certificate from './Components/Certificate';
import Email from './Components/Email';
import Bulk from './Components/Bulk';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Diploma from './Components/Diploma';

function App() {
  return (
    <BrowserRouter basename="/">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create" element={<Select />} />
        <Route exact path="/certificate" element={<Certificate />} />
        <Route exact path="/diploma" element={<Diploma />} />
        <Route exact path="/bulk" element={<Bulk />} />
        <Route exact path="/email" element={<Email />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
