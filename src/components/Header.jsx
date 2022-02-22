import React from "react";
import title from '../assets/harry-logo-title.png';


export default function Header (){
    return (
        <header className="App-header">
        <div className='title'>
          <img 
          src={title} 
          className="title-logo"
          alt="logo-title" />
          <h2 className="text-filter">Selecciona tu filtro</h2>
        </div>
        <div className='btns'>
        <button className="btn-student">ESTUDIANTES</button>
        <button className="btn-staff">STAFF</button>
        </div>   
      </header>
    );
    
}