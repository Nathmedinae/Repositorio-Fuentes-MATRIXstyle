import React from "react";
import statics from "../../resources/Camisetas.png";

function Products () {
    return (
        <main>
            <section>
                <figure>
                    <h2 className="subtitle_page">Product Home Page</h2>
                    <img className="contenedorImagen imagenPequeña" src={statics}/>                    
                </figure>
            </section>
        </main>
    )
};

export {Products};