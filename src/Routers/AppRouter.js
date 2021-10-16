import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {MenupMatrix} from "../components/MenupMatrix";
import {InitialSesion} from "../components/InitialSesion";
import { ModuleVentas } from "../components/ModuleVentas";
import { ModuleProducts } from "../components/ModuleProducts";
import { ModuleUsers } from "../components/ModuleUsers";

function AppRouter () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={InitialSesion}/>
                <Route exact path="/MenuPrincipal" component={MenupMatrix}/>
                <Route exact path="/Ventas" component={ModuleVentas}/>
                <Route exact path="/Productos" component={ModuleProducts}/>
                <Route exact path="/Usuarios" component={ModuleUsers}/>
                <Route path="*" component={"Error-404"}/>
            </Switch>
        </BrowserRouter>
    )
};

export {AppRouter};