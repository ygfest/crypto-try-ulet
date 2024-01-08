import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AffineCaesarPage from './components/AffineCaesarPage';
import AutoMonoPage from './components/AutoMonoPage';
import PlayHomoPage from './components/PlayHomoPage';
import VigenerePolyPage from './components/VigenerePolyPage';
import HillPolyalphaPage from './components/HillPolyalphaPage';
import IntegrationPage from './components/IntegrationPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AffineCaesarPage />} />
      <Route path="/automono" element={<AutoMonoPage />} />
      <Route path="/playhomo" element={<PlayHomoPage />} />
      <Route path="/vigenerepoly" element={<VigenerePolyPage />} />
      <Route path="/hillpoly-alpha" element={<HillPolyalphaPage />} />
    </Routes>
  );
};

export default AppRoutes;
