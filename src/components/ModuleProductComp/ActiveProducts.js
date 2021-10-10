import React from "react";
import statics from "../../resources/Camisetas.png";

function ActiveProducts () {
    return (
        <main>
            <section>
                <figure>
                    <h2 className="subtitle_page">Productos Activos</h2>
                    <img className="contenedorImagen imagenPequeña" src={statics}/>                    
                </figure>
            </section>
        </main>
    )
};

export {ActiveProducts};