import axios from "axios";
import React, {useRef, useState, useEffect} from "react";
import {useLocation } from 'react-router-dom';

function EditProducts () {

    const location = useLocation()
    const idProduct = location.pathname.split("/").pop()

    const [products, setProducts] = useState([])

    useEffect(() => {
        getDataProduct()
      }, []);

    const getDataProduct = async () => {
        const data = await fetch('https://webhooks.mongodb-realm.com/api/client/v2.0/app/matrix-pfeao/service/Matrix/incoming_webhook/edit?id=' + idProduct)
        const saveProducts = await data.json()
        setProducts(saveProducts)
    }

    const handleInputChange = (e) => {
        setProducts({[e.target.name]: e.target.value});
    }

    const form2= useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form2.current);
        const dataEditProducts = {
            product_id: idProduct,
            codigo: formData.get("codigo"),
            nombre: formData.get("nombre"),  
            descripcion: formData.get("descripcion"), 
            color: formData.get("color"), 
            talla: formData.get("talla"), 
            categoria: formData.get("categoria"), 
            precio: formData.get("precio"), 
            inventario: formData.get("inventario") 

        }
        console.log(dataEditProducts);
        axios.post('https://webhooks.mongodb-realm.com/api/client/v2.0/app/matrix-pfeao/service/Matrix/incoming_webhook/update', dataEditProducts)
            .then(res => console.log(res.data), alert("Producto actualizado con éxito"));
        window.location.assign("/Productos/ProductosActivos");
    }

    return (

        <main>
     
            <section className="contenedorSeccion">
                   
            <form ref={form2} onSubmit={handleSubmit}>

                        <label htmlFor="codigo">
                            <span>Código de Producto:</span>
                            <input name='codigo' type="number" id="codigo" placeholder="Escribe el Código" 
                            autocomplete="off" required
                            onChange={handleInputChange}
                            value={products.codigo}
                            />
                        </label>
                        <label htmlFor="nombre">
                            <span>Nombre de Producto:</span>
                            <input  name='nombre' type="text" id="nombre" placeholder="Escribe el Nombre del Producto" 
                            autocomplete="off" required
                            onChange={handleInputChange}
                            value={products.nombre}
                            />
                        </label>
                        
                        <label htmlFor="Descripcion">
                            <span>Descripción:</span>
                            <input name='descripcion'type="text" id="descripción" placeholder="Descripciòn de Producto" 
                            autocomplete="off" required
                            onChange={handleInputChange}
                            value={products.descripcion}
                            />
                        </label>
                        <label htmlFor="color">
                            <span>Color:</span>
                            <select name='color' onChange={handleInputChange} value={products.color}>
                                <option value="Blanco">Blanco</option>
                                <option value="Negro">Negro</option>
                                <option value="Gris">Gris</option>
                            </select>

                        </label>
                        <label htmlFor="talla">
                            <span>Talla:</span>
                            <select name='talla' onChange={handleInputChange} value={products.talla}>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="X">X</option>
                            </select>
                        </label>
                                             
                       
                        <label label htmlFor="categoria">
                            <span>Categoria:</span>
                            <input name= 'categoria' type="text" id="categoria" placeholder="Escribe la categoria" 
                            autocomplete="off" required
                            onChange={handleInputChange} 
                            value={products.categoria}
                             />
                        </label>

                                                               
                        
                        <label label htmlFor="Precio">
                            <span>Precio COP:</span>
                            <input  name='precio' type="number" id="Precio" placeholder="precio" 
                            autocomplete="off" required
                            onChange={handleInputChange} 
                            value={products.precio}
                             />
                        </label>
                            
                      
                        <label label htmlFor="Inventario">
                            <span>Adicionar al Inventario</span>
                            <input name='inventario' type="Inventario" id="Inventario" placeholder="Inventario" 
                            autocomplete="off" required
                            onChange={handleInputChange} 
                            value={products.inventario}
                             />
                        </label> 
              
                        <input  type="submit" value="Agregar Producto" />
                    </form>
                </section>    
        </main>

       
    )
};
export {EditProducts};