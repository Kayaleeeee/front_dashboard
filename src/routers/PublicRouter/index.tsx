import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/Main';

export const PublicRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/front_dashboard' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};
