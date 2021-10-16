import React, {useEffect, useState, useRef} from 'react'


const ActiveProducts = () => {
    const [MostrarTabla, setMostrarTabla] = useState(false);
    const [TextoBoton, setTextoBoton] = useState("Crear Nuevo Producto");

    useEffect(()=>{
        if (MostrarTabla) {
            setTextoBoton("Mostrar Productos")
        }
        else{
            setTextoBoton("Crear Nuevo Producto")
        }
           
    },  [MostrarTabla]);
    return (
        <main>
            <section>
                    
                <h2 class="subtitle_page">Lista Productos Activos</h2>         
                     
                <button onClick={()=>setMostrarTabla(!MostrarTabla)} className='text-white bg-green-500 p-5'>{TextoBoton}</button>
                {MostrarTabla? <FormularioCreacion />:<TablaProductos />} 
                
                </section>
        </main>                     
    )
    
}

const FormularioCreacion = () => {
    return(
        <div>
            <section className="contenedorSeccion">
                   
                   <form action="">

                       <label htmlFor="codigo">
                           <span>Código de Producto:</span>
                           <input type="number" id="codigo" placeholder="Escribe el Código" autocomplete="off" required />
                       </label>
                       <label htmlFor="nombre">
                           <span>Nombre de Producto:</span>
                           <input type="text" id="nombre" placeholder="Escribe el Nombre del Producto" autocomplete="off" required />
                       </label>
                       <label htmlFor="Resumen">
                           <span>Resumen:</span>
                           <input type="text" id="resumen" placeholder="Escribe Resumen breve" autocomplete="off" required />
                       </label>
                       <label htmlFor="nombre">
                           <span>Descripción:</span>
                           <input type="text" id="descripción" placeholder="Descripciòn de Producto" autocomplete="off" required />
                       </label>
                       <label htmlFor="Color">
                           <span>Color:</span>
                           <select name="Color">
                               <option value="Blanco">Blanco</option>
                               <option value="Negro">Negro</option>
                               <option value="Gris">Gris</option>
                           </select>

                       </label>
                       <label htmlFor="Talla">
                           <span>Talla:</span>
                           <select name="Talla">
                               <option value="S">S</option>
                               <option value="M">M</option>
                               <option value="L">L</option>
                               <option value="X">X</option>
                           </select>
                       </label>
                                            
                      
                       <label label htmlFor="categoria">
                           <span>Categoria:</span>
                           <input type="text" id="categoria" placeholder="Escribe la categoria" autocomplete="off" required />
                       </label>

                       <label label htmlFor="IVA">
                           <span>%IVA:</span>
                           <input type="number" id="IVA" placeholder="%IVA" autocomplete="off" required />
                       </label>

                       <label label htmlFor="Peso">
                           <span>Peso kg:</span>
                           <input type="number" id="Peso" placeholder="Escribe el Peso" autocomplete="off" required />
                       </label>

                       <label label htmlFor="Largo">
                           <span>Largo cm:</span>
                           <input type="largo" id="largo" placeholder="%IVA" autocomplete="off" required />
                       </label>
                                       
                       
                       <label label htmlFor="Precio">
                           <span>Precio COP:</span>
                           <input type="number" id="Precio" placeholder="precio" autocomplete="off" required />
                       </label>
                           
                     
                       <label label htmlFor="Unidades">
                           <span>Adicionar al Inventario</span>
                           <input type="Inventario" id="Inventario" placeholder="Inventario" autocomplete="off" required />
                       </label>
             
                       <input class="submitButton" type="submit" value="Agregar Producto" />
                   </form>
               </section>    
        </div>
    )
} 
const TablaProductos = () =>{   
    return(
        <div>
        Esto es un div pero aquí debería ir una tabla

        </div>
    )
}

export {ActiveProducts};