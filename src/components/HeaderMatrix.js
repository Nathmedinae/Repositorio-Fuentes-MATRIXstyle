import React from "react";
import "../style.css";
import logo from "../resources/matrixLogistics_icon2.png";

function HeaderMatrix () {
    return (
        <header>
            <figure>
                <img src={ logo } alt="icon"/>
            </figure>
            <h1>Plataforma de gestión corporativa</h1>
        </header>
    );  
}

export { HeaderMatrix };