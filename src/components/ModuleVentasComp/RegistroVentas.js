import React, {useState, useEffect, useRef} from "react";
import axios from "axios";

function RegistroVentas () {

    const [MostrarProductoSeleccionado, setMostrarProductoSeleccionado] = useState(true);
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [productosfiltrados, setproductosfiltrados] = useState(products);

    useEffect(() => {
        obtenerDatos()
        }, []);

    const obtenerDatos = async () => {
        const data = await fetch('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/matrixapp-yjwwm/service/matrix/incoming_webhook/get');
        const saveUsers = await data.json();
        setUsers(saveUsers)
    }
    
    useEffect(() => {
        getData()
      }, []);

    const getData = async () => {
        const data = await fetch('https://webhooks.mongodb-realm.com/api/client/v2.0/app/matrix-pfeao/service/Matrix/incoming_webhook/Matrix');
        const saveProducts = await data.json();
        setProducts(saveProducts)
    }

    const form = useRef(null);
    const obtenerinfo = async (e) => {
        e.preventDefault ();
        const formData = new FormData(form.current);
        formData.forEach((key, value) =>{
            console.log();
        });
        
    }

    const [busqueda,setbusqueda] = useState(" ");
    useEffect (() => {
        console.log("busqueda", busqueda);
        console.log("Lista Original", products);
        setproductosfiltrados(
            products.filter((elemento=>{
            return elemento.codigo.includes(busqueda); 
        })
        ));
    }, [busqueda, products]);

    return (
            
        <main>

            <section class="contenedorSeccion">
                <p><span>Productos:</span></p>
                <form ref={form} onSubmit={obtenerinfo} action="">
                    
                    <label>
                        <span>Introduzca el código del Producto:</span>
                        <label>
                            <input 
                                type={Number}
                                name="Busqueda" 
                                value={busqueda}
                                onChange={(e)=> setbusqueda(e.target.value)}
                                placeholder="Introduzca el código del Producto"
                            />
                        </label>
                    </label>

                    <button className="buttonV" type="submit" onClick={()=>setMostrarProductoSeleccionado(true)}>Seleccionar</button>    

                </form>
            </section>

            {MostrarProductoSeleccionado && (
            <section class="contenedorSeccion">
                <p><span>Información de selección:</span></p>
                <table>
                    <thead> 
                        <tr>
                            <th>Código de Producto</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Color</th>
                            <th>Talla</th>
                            <th>Categoria</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead> 
                    <tbody> 
                        {productosfiltrados.map(item => (<tr>
                                                <td key={item._id}>{item.codigo}<br/></td>
                                                <td key={item._id}>{item.nombre}<br/></td>
                                                <td key={item._id}>{item.descripcion}<br/></td>
                                                <td key={item._id}>{item.color}</td>
                                                <td key={item._id}>{item.talla}</td>
                                                <td key={item._id}>{item.categoria}</td>
                                                <td key={item._id}>{item.precio}</td>
                                                <td key={item._id}>{item.inventario}</td>

                                            </tr>       
                        ))}
                    </tbody>
                </table>

                <p><span>Registro de Venta:</span></p>
                <form ref={form} onSubmit={obtenerinfo} action="">

                    <label>
                        <span>Indique el nombre del cliente:</span>
                        <input type="Nombre" id="Nombre" placeholder="Nombre" autocomplete="off"/>
                    </label>

                    <label>
                        <span>Indique el número de documento del cliente:</span>
                        <input type="Documento" id="Documento" placeholder="Documento" autocomplete="off"/>
                    </label>
                
                    <label>
                        <span>Indique la cantidad a vender:</span>
                        <input type="Cantidad" id="Cantidad" placeholder="Cantidad" autocomplete="off"/>
                    </label>

                    <label>
                        <span>Fecha de la venta:</span>
                        <input type="date" id="DD/MM/AAAA" placeholder="DD/MM/AAAA" autocomplete="off"/>
                    </label>

                    <label>
                        <span>Seleccione el valor de descuento:</span>
                        <label for="SelecciónColor"></label>
                            <select name="Descuento">
                                <option selected= "true" value="0" disabled="disabled">Seleccione una opción</option> 
                                <option value="0%">0%</option> 
                                <option value="5%">5%</option> 
                                <option value="10%">10%</option> 
                                <option value="15%">15%</option>
                            </select>
                    </label>

                    <label for="codigo">
                        <span>Asigne un vendedor:</span>
                        <label></label>
                            <select name="Username">
                                <option selected= "true" value="0" disabled="disabled">Seleccione una opción</option> 
                                {users.map((item, i) => (<option>{item.name} {item.lastname}</option>
                                        ))}
                        </select>
                    </label>
                
                    <button className="buttonV" type="submit" placeholder="Añadir Venta" >Añadir Venta</button>    
                        
                </form>
            </section>
            )}

        </main>

    )
};
export {RegistroVentas};