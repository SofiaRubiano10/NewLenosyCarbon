import React from 'react';
import './App.css';

import Cabecera from './components/Cabecera';
import BotonPrincipal from './components/BotonPrin';
import Registro from './components/Registro';
import Links from './components/Links';
import LinkForm from './components/LinkForm';

function App() {
  return (
    <>
      <Cabecera/>
      <BotonPrincipal/>
      <Registro/>
      {/* <LinkForm/>
      <Links/> */}
    </>

  );
}

export default App;
