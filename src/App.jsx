import './App.css';
import Header from '../src/components/Header.jsx';
import Favoritos from './components/Favoritos.jsx';
import ModalAgregar from './components/ModalAgregar.jsx';
import Cards from '../src/components/Cards.jsx'
import React from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';



function App() {

  return (
    <div className="App">
      <Favoritos/>
      <ModalAgregar/>
      <Header />
      <Cards />
    </div>

  );
}

export default App;
