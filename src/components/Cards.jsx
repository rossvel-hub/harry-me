import React from "react";
import Harry from '../assets/harry.jpg';
import Favorito from '../assets/favorito.png';

export default function Cards (){

    return (
        <div className="container-cards">
            <div className="card">
                <div className="card-img">
                <img  className="img-style"
                src={Harry} 
                alt="" />
                </div>
                <div className="card-info">
                <p className="name">Harry Potter</p>
                <p className="B-day">Cumpleaños: </p>
                <p className="gender">Genero: </p>
                <p className="color-eyes">Color de ojos: </p>
                <p className="color-hair">Color de pelo: </p>
                </div>   
            </div>

            <div className="card">
                <div className="card-img">
                <img  className="img-style"
                src={Harry} 
                alt="" />
                </div>
                <div className="card-info">
                <p className="name">Harry Potter</p>
                <p className="B-day">Cumpleaños: </p>
                <p className="gender">Genero: </p>
                <p className="color-eyes">Color de ojos: </p>
                <p className="color-hair">Color de pelo: </p>
                </div>   
            </div>


            <div className="card">
                <div className="card-img">
                <img  className="img-style"
                src={Harry} 
                alt="" />
                </div>
                <div className="card-info">
                <img 
                src={Favorito} 
                className="icon-favorite"
                alt="" />
                <p className="status">VIVO / ESTUDIANTE</p>
                <p className="name">Harry Potter</p>
                <p className="b-day">Cumpleaños: 05 - 02 - 1985 </p>
                <p className="gender">Genero: Male </p>
                <p className="color-eyes">Color de ojos: Green </p>
                <p className="color-hair">Color de pelo: Black </p>
                </div>   
            </div>

            <div className="card">
                <div className="card-img">
                <img  className="img-style"
                src={Harry} 
                alt="" />
                </div>
                <div className="card-info">
                <img 
                src={Favorito} 
                className="icon-favorite"
                alt="" />
                <p className="status">VIVO / ESTUDIANTE</p>
                <p className="name">Harry Potter</p>
                <p className="b-day">Cumpleaños: 05 - 02 - 1985 </p>
                <p className="gender">Genero: Male </p>
                <p className="color-eyes">Color de ojos: Green </p>
                <p className="color-hair">Color de pelo: Black </p>
                </div>   
            </div>

        </div>
    );
}