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
                <Route exact path="/">
                    <InitialSesion />
                </Route>
                <Route exact path="/MenuPrincipal">
                    <MenupMatrix />
                </Route>
                <Route exact path="/Ventas">
                    <ModuleVentas />
                </Route>
                <Route exact path="/Productos">
                    <ModuleProducts />
                </Route>
                <Route exact path="/Usuarios">
                    <ModuleUsers />
                </Route>
                <Route path="*">
                    <h1>Error 404</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export {AppRouter};