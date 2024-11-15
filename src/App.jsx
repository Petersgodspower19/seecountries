import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './AppLayout';
import Home from './pages/Home';
import Description from './pages/Description';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/countries/:country" element={<Description />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
