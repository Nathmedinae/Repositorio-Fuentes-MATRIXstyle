import React, {useState, useEffect, useRef, Fragment} from "react";
import {ActiveProductsRead} from "../ModuleProductComp/ActiveProductsRead";
import axios from "axios";

function RegistroVentas () {

    const form3 = useRef(null);

    const [MostrarProductoSeleccionado, setMostrarProductoSeleccionado] = useState(true);
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [productosfiltrados, setproductosfiltrados] = useState(products);

    const handleSubmitSales = (event) => {
        event.preventDefault();
        const formData = new FormData(form3.current);
        const dataNewInvoice = {
            invoice: formData.get("invoice"),
            nameClient: formData.get("nameClient"),
            dniCliente: formData.get("dniCliente"),
            codeProduct: formData.get("codeProduct"),
            amount: formData.get("amount"),
            subtotal: formData.get('subtotal'),
            dateSale: formData.get('dateSale'),
            discount: formData.get('discount'),
            vendor: formData.get('vendor')
        }
        console.log(dataNewInvoice);
        axios.post('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/matrixfacturas-ylvur/service/matrixFacturas/incoming_webhook/add', dataNewInvoice)
            .then(res => console.log(res.data), alert("Factura creada con éxito"));
        window.location.assign("/Ventas");
    }

    useEffect(() => {
        obtenerDatos()
        getData()
        }, []);

    const obtenerDatos = async () => {
        const data = await fetch('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/matrixapp-yjwwm/service/matrix/incoming_webhook/get');
        const saveUsers = await data.json();
        setUsers(saveUsers)
    }

    const getData = async () => {
        const data = await fetch('https://webhooks.mongodb-realm.com/api/client/v2.0/app/matrix-pfeao/service/Matrix/incoming_webhook/Matrix');
        const saveProducts = await data.json();
        setProducts(saveProducts)
    }

    const form = useRef(null);
    // const obtenerinfo = async (e) => {
    //     e.preventDefault ();
    //     const formData = new FormData(form.current);
    //     formData.forEach((key, value) =>{
    //         console.log();
    //     });
        
    // }

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
        <Fragment>
            <ActiveProductsRead />
        
        <main>

            <section class="contenedorSeccion">


                <h2 className="subtitle_page">Registro de Ventas</h2>
                <form ref={form3} onSubmit={handleSubmitSales}>
                    <label>
                        <span>Factura No.:</span>
                        <input type="number" name="invoice" placeholder="Indique el número de factura" required/>
                    </label>
                    <label>
                        <span>Nombre del cliente:</span>
                        <input type="text" name="nameClient" placeholder="Escriba el nombre del cliente" required/>
                    </label>

                    <label>
                        <span>DNI de cliente:</span>
                        <input type="number" name="dniCliente" placeholder="Escriba el número de identificación" required/>
                    </label>

                    <label>
                        <span>Código del producto:</span>
                        <select type="search" name="codeProduct" placeholder="Seleccione el código del producto" required>
                            {products.map(item => (<option key={item._id}>{item.codigo}</option>))}
                        </select>
                    </label>

                    <label>
                        <span>Cantidad a vender:</span>
                        <input type="number" name="amount" placeholder="Escriba la cantidad de productos" required/>
                    </label>

                    <label>
                        <span>Subtotal:</span>
                        <input type="number" name="subtotal" required/>
                    </label>

                    <label>
                        <span>Fecha de la venta:</span>
                        <input type="date" name="dateSale" id="DD/MM/AAAA" placeholder="DD/MM/AAAA" required/>
                    </label>

                    <label>
                        <span>Seleccione el valor de descuento:</span>
                        <label></label>
                            <select name="discount">
                                <option selected= "true" value="0" disabled="disabled">Seleccione una opción</option> 
                                <option value="0%">0%</option> 
                                <option value="5%">5%</option> 
                                <option value="10%">10%</option> 
                                <option value="15%">15%</option>
                            </select>
                    </label>

                    <label>
                        <span>Vendedor encargado:</span>
                        <select name="vendor">
                                <option selected= "true" value="0" disabled="disabled">Seleccione una opción</option> 
                                {users.map((item, i) => (<option>{item.name} {item.lastname}</option>
                                        ))}
                        </select>
                    </label>
                
                    <input type="submit" value="Añadir venta"/>    
                        
                </form>
            </section>

        </main>
        </Fragment>

    )
};
export {RegistroVentas};