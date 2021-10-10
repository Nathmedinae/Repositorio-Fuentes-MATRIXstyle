import React from "react";


function ModifyProducts () {
    return (
        <main>
            <section>
                
                    <h2 className="subtitle_page">Modificar Productos</h2>

                <div className="grid">

                <section  class="contenedorSeccion">
                <span>Búsqueda</span>
                <form action="">
                    <label for="codigo">
                        <span>Código de Producto:</span>
                        <input type="number" id ="codigo" placeholder="Escribe el Código" autocomplete="off" required/>
                    </label>
                    <label for="nombre">
                        <span>Nombre de Producto:</span>
                        <input type="text" id ="nombre" placeholder="Escribe el Nombre del Producto" autocomplete="off" required/>
                    </label>
                        
                    <input class="submitButton" type="submit" value="Buscar Producto"/> 
                </form>    
                </section>  
                </div>
          
                                          
                
            </section>
        </main>
    )
};

export {ModifyProducts};