import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { HomeProductModule } from "./ModuleProductComp/HomeProductModule";
import { ActiveProducts} from "./ModuleProductComp/ActiveProducts";
import { NewProducts} from "./ModuleProductComp/NewProducts";
import { ModifyProducts} from "./ModuleProductComp/ModifyProducts";
import { Products} from "./ModuleProductComp/Products";

function ModuleProducts () {
    return (
        <BrowserRouter>
            <HomeProductModule />
            <Switch>
                <Route exact path="/Productos" component={Products}/>
                <Route exact path="/Productos/CrearProductos" component={NewProducts}/>
                <Route exact path="/Productos/ProductosActivos" component={ActiveProducts}/>
                <Route exact path="/Productos/ModificarProductos" component={ModifyProducts}/>
                <Route path="*" component={<h1>Error 404</h1>}/>
            </Switch>
        </BrowserRouter>
    )
};

export {ModuleProducts};