import React from 'react';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Select from './Components/Select';
import Email from './Components/Email';
import Bulk from './Components/Bulk';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Diploma from './Components/Diploma';
import Participation from './Components/Participation';
import Completion from './Components/Completion';

function App() {
  return (
    <BrowserRouter basename="/">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create" element={<Select />} />
        <Route exact path="/completion" element={<Completion />} />
        <Route exact path="/participation" element={<Participation />} />
        <Route exact path="/diploma" element={<Diploma />} />
        <Route exact path="/bulk" element={<Bulk />} />
        <Route exact path="/email" element={<Email />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
