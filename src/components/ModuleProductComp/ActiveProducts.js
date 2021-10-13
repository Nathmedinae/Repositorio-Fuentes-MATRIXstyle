import React, {useEffect, useState} from 'react'


const ActiveProducts = () => {
    const [MostrarTabla, setMostrarTabla] = useState(false);
    const [TextoBoton, setTextoBoton] = useState("Mostrar Productos");

    useEffect(()=>{
        if (MostrarTabla) {
            setTextoBoton("Crear Nuevo Producto")
        }
        else{
            setTextoBoton("Mostrar Productos")
        }
           
    },  [MostrarTabla]);
    return (
        <main>
            <section>
                    
                <h2 class="subtitle_page">Lista Productos Activos</h2>         
                     
                <button onClick={()=>setMostrarTabla(!MostrarTabla)} className='text-white bg-green-500 p-5'>{TextoBoton}</button>
                {MostrarTabla? <TablaProductos />:<FormularioCreacion />} 
                
                </section>
        </main>                     
    )
    
}

const FormularioCreacion = () => {
    return(
        <div>
            Esto es otro div pero aquí irà el formulario para crear productos
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