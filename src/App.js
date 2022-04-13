import React from 'react';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Select from './Components/Select';
import Certificate from './Components/Certificate';
import Email from './Components/Email';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/pdf-modifier">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create" element={<Select />} />
        <Route exact path="/certificate" element={<Certificate />} />
        <Route exact path="/email" element={<Email />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
