import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import './Styles/index.css'
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BrowserRouter>

      <Main />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
    </BrowserRouter>


  );
}

export default App;
