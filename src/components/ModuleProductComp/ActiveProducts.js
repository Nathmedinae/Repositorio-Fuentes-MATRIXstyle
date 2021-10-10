import React from "react";


function ActiveProducts () {
    return (
        <main>
            <section>
                
            <figure>
                <h2 class="subtitle_page">Lista Productos Activos</h2>
               
                <table>
                    <caption>Activos</caption>
                    <tr>
                       <th>Estado</th>
                       <th>Imagen</th>
                       <th>Producto</th>
                       <th>SKU</th>
                       <th>Inventario</th>
                    </tr>
                    <tr>
                        <td>Activo</td>
                        <td>Imagen</td>
                        <td>Camiseta Blanca</td>
                        <td>10000</td>
                        <td>100</td>
                     </tr>
                     <tr>
                        <td>Activo</td>
                        <td>Imagen</td>
                        <td>Camiseta Negra</td>
                        <td>20000</td>
                        <td>0</td>
                     </tr>
                     <tr>
                        <td>Activo</td>
                        <td>Imagen</td>
                        <td>Camiseta Gris</td>
                        <td>10000</td>
                        <td>100</td>
                     </tr>
                </table>

            </figure>
        </section>
        </main>                     
    )
};

export {ActiveProducts};