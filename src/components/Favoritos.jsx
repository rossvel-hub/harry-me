import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

export default function Favoritos (){

    const [dropdown, setDropdown]= useState(false);
  
  const abrirCerarDropdown=()=>{
    setDropdown(!dropdown);
  }

  const accionBtnEliminar=()=>{
    alert("Deseas eliminar a este personaje");
  }

    return(
        <div>
            <div>
      <Dropdown isOpen={dropdown} toggle={abrirCerarDropdown}>
        <DropdownToggle className='btn-dropdown' caret>
            FAVORITOS
        </DropdownToggle>

        <DropdownMenu>
          <DropdownItem onClick={()=>{accionBtnEliminar()}}>Luna Lovegood </DropdownItem>
          <DropdownItem divider></DropdownItem>
          <DropdownItem onClick={()=>{accionBtnEliminar()}}>Harry Potter </DropdownItem>
          <DropdownItem divider></DropdownItem>
          <DropdownItem onClick={()=>{accionBtnEliminar()}}>Ron </DropdownItem>
          <DropdownItem divider></DropdownItem>
          <DropdownItem onClick={()=>{accionBtnEliminar()}}>Hermione</DropdownItem>
          <DropdownItem divider></DropdownItem>
          <DropdownItem onClick={()=>{accionBtnEliminar()}}>Minerva </DropdownItem>
          <DropdownItem divider></DropdownItem>
        </DropdownMenu>

      </Dropdown>
      </div>
        </div>
    );
}