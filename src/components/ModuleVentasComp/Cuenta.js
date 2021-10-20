import React from 'react'

const Cuenta = () => {
    return (
        <main>
        <section class="contenedorSeccion">
        <p><span class="titulosSecciones">Cuenta</span></p>
        <form action="">
            
            <p><label for="Indicador de Venta">
                <span>Venta N°:</span>
                <label for ="Traer consecutivo"></label>
            </label></p>

            <p><label for="Fecha">
                <span>Fecha registrada:</span>
                <label for ="Traer de Registro"></label>
            </label></p>
            
            <label for="Productos en la Cuenta">
                <table>
                    <tbody>
                        <tr>
                            <th>CÓDIGO</th>
                            <th>NOMBRE</th>
                            <th>VALOR UNITARIO</th>
                            <th>CANTIDAD</th>
                            <th>SUBTOTAL PRODUCTO</th>
                        </tr>
                        <tr>
                            <td>Traer de BD</td>
                            <td>Traer de BD</td>
                            <td>Traer de BD</td>
                            <td>Traer de registro</td>
                            <td>Sumar</td>
                        </tr>
                    </tbody>
                </table>
            </label>          
            
            <p><label for="Total de la Venta">
                <span>Valor total de la venta:</span>
                <label for ="Suma de valores de Producto"></label>
            </label></p>

            <p><label for="Vendedor">
                <span>Nombre del vendedor:</span>
                <label for ="Traer de Registro"></label>
            </label></p>

        <input class="submitButton" type="submit" value="Registrar Venta"/>   

        </form>

    </section>    
 
    </main>
    )
}

export default Cuenta
