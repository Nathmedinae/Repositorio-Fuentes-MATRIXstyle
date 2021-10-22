import React, {useState, useEffect, Fragment} from "react";
import { Link } from 'react-router-dom';

function ActiveProductsRead () {

    const [products, setProducts] = useState([]);
    const [searchProduct, setSearchProduct] = useState([]);

    useEffect(() => {
        getData()
      }, []);

    const getData = async () => {
        const data = await fetch('https://webhooks.mongodb-realm.com/api/client/v2.0/app/matrix-pfeao/service/Matrix/incoming_webhook/Matrix');
        const saveProducts = await data.json();
        setProducts(saveProducts)
    }

    const handleSearch = e => {
        e.preventDefault();
        const handle = e.target.value.toLowerCase();
        setSearchProduct(handle);
        console.log(searchProduct);
    };

    const filterProduct = products.filter( product => {
        return JSON.stringify(product).toLowerCase().includes(searchProduct)
    })

    return (
        <Fragment>
        <main>

        <label>
            <p>Búscar</p>
                    <input type="text"
                    codigo="searchProducts"
                    placeholder="Escribe el código del producto"
                    onChange={handleSearch}
                    value={searchProduct}
                    />
        </label>
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
                    </tr>
                
                    {filterProduct.map((item, i) => (<tr key={i}>
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
        </main>

        </Fragment>

    )
};

export {ActiveProductsRead};
