import React, {useState, useEffect, Fragment} from "react";
import { Link } from 'react-router-dom';

function ActiveProducts () {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData()
      }, []);

    const getData = async () => {
        const data = await fetch('https://webhooks.mongodb-realm.com/api/client/v2.0/app/matrix-pfeao/service/Matrix/incoming_webhook/Matrix');
        const saveProducts = await data.json();
        setProducts(saveProducts)
    }

    return (
        <Fragment>
        <main>
            <h2 className="subtitle_page">Productos Activos</h2>
            
            <table>
                <tbody>
                    <tr>
                        <th>Código de Producto</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Color</th>
                        <th>Talla</th>
                        <th>Categoria</th>
                        <th>Precio</th>
                        <th>Inventario</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                
                    {products.map(item => (<tr>
                                            <td key={item._id}>{item.codigo}<br/></td>
                                            <td key={item._id}>{item.nombre}<br/></td>
                                            <td key={item._id}>{item.descripcion}<br/></td>
                                            <td key={item._id}>{item.color}</td>
                                            <td key={item._id}>{item.talla}</td>
                                            <td key={item._id}>{item.categoria}</td>
                                            <td key={item._id}>{item.precio}</td>
                                            <td key={item._id}>{item.inventario}</td>
                                            <td key={item._id}><Link to={"/Productos/EditarProductos/" + item._id}>Modificar</Link></td>
                                            <td key={item._id}><Link to={"/Productos/InactivarProductos/" + item._id}>Inactivar</Link></td>
                                        </tr>       
                    ))}
                </tbody>
            </table>
        </main>

        </Fragment>

    )
};

export {ActiveProducts};
