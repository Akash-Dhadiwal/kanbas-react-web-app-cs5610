import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Labs from './Labs';
import Kanbas from './Kanbas';
import LandingPage from './LandingPage';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import store from "./Kanbas/store";
import { Provider } from "react-redux";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="LandingPage" />} />
            <Route path='/Labs/*' element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
            <Route path='/LandingPage' element={<LandingPage />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
