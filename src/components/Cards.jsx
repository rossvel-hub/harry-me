// import React, { useState, useEffect } from "react";
import Harry from '../assets/harry.jpg';
import Ron from '../assets/ron.jpg';
import Hermione from '../assets/hermione.jpg';
import Hagrid from '../assets/hagrid.jpg';
import Favorito from '../assets/favorito.png';

import 'bootstrap/dist/css/bootstrap.min.css';

// import axios from 'axios';
// const baseUrl='http://localhost:5000/tipo';

export default function Cards() {

    // const [data, setData]= useState([]);

    // const peticionGet=async()=>{
    //     await axios.get(baseUrl)
    //     .then(response=>{
    //         console.log(response.data);
    //     })
    // }

    // useEffect(async()=>{
    //     await peticionGet();
    // },[])

    const containerCardsStyle = {
        height: '100%',
        width: '100%',
        display: 'flex',
        borderWidth: '4px',
        borderStyle: 'solid',
        borderRadius: '5px',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: 'black',
        marginTop: '0px'
    }

    const cardStyles = {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        wordWrap: 'break-word',
        backgroundColor: '#fff',
        backgroundClip: 'border-box',
        border: '1px solid rgba(0,0,0,.125)',
        borderRadius: '0.25rem',
        margin: '10px',
        height: '274px',
        width: '475px',
    }

    const cardImgStyles = {
        width: '60%',
        background: 'linear-gradient(to top right, #FF0000, #FED482)',
        borderRadius: '10px',
        boxShadow: '3px 3px 20px rgba(0, 0, 0, .5)'
    }

    const cardInfoStyles = {
        alignItems: 'flex-start',
        width: '111%',
        border: 'none',
        textAlign: 'left',
        padding: '25px'
    }

    const imgStyle = {
        height: '60%',
        width: '77%',
        borderRadius: '50%',
        marginTop: '40px'
    }

    return (
        <div className="container-cards" style={containerCardsStyle}>
            <div className="cards" style={cardStyles}>
                <div className="card-img" style={cardImgStyles}>
                    <img className="img-style" style={imgStyle}
                        src={Harry}
                        alt="" />
                </div>
                <div className="card-info" style={cardInfoStyles}>
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

            <div className="cards" style={cardStyles}>
                <div className="card-img" style={cardImgStyles}>
                    <img className="img-style" style={imgStyle}
                        src={Ron}
                        alt="" />
                </div>
                <div className="card-info" style={cardInfoStyles}>
                    <img
                        src={Favorito}
                        className="icon-favorite"
                        alt="" />
                    <p className="status">VIVO / ESTUDIANTE</p>
                    <p className="name">Ron</p>
                    <p className="b-day">Cumpleaños: 05 - 02 - 1985 </p>
                    <p className="gender">Genero: Male </p>
                    <p className="color-eyes">Color de ojos: Green </p>
                    <p className="color-hair">Color de pelo: Black </p>
                </div>
            </div>

            <div className="cards" style={cardStyles}>
                <div className="card-img" style={cardImgStyles}>
                    <img className="img-style" style={imgStyle}
                        src={Hermione}
                        alt="" />
                </div>
                <div className="card-info" style={cardInfoStyles}>
                    <img
                        src={Favorito}
                        className="icon-favorite"
                        alt="" />
                    <p className="status">VIVO / ESTUDIANTE</p>
                    <p className="name">Hermione</p>
                    <p className="b-day">Cumpleaños: 05 - 02 - 1985 </p>
                    <p className="gender">Genero: Male </p>
                    <p className="color-eyes">Color de ojos: Green </p>
                    <p className="color-hair">Color de pelo: Black </p>
                </div>
            </div>

            <div className="cards" style={cardStyles}>
                <div className="card-img" style={cardImgStyles}>
                    <img className="img-style" style={imgStyle}
                        src={Hagrid}
                        alt="" />
                </div>
                <div className="card-info" style={cardInfoStyles}>
                    <img
                        src={Favorito}
                        className="icon-favorite"
                        alt="" />
                    <p className="status">VIVO / ESTUDIANTE</p>
                    <p className="name">Hagrid</p>
                    <p className="b-day">Cumpleaños: 05 - 02 - 1985 </p>
                    <p className="gender">Genero: Male </p>
                    <p className="color-eyes">Color de ojos: Green </p>
                    <p className="color-hair">Color de pelo: Black </p>
                </div>
            </div>
        </div>
    );
}