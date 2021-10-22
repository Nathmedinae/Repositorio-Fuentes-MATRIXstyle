import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { RegistroVentas } from "./ModuleVentasComp/RegistroVentas";
import { HomeVentasModule } from "./ModuleVentasComp/HomeVentasModule";
import {Cuenta} from "./ModuleVentasComp/Cuenta";

function ModuleVentas() {
    return (
        <BrowserRouter>
            <HomeVentasModule />
            <Switch>
                <Route exact path="/Ventas" component={RegistroVentas}/>
                <Route exact path="/Ventas/Cuenta" component={Cuenta}/>
            </Switch>
        </BrowserRouter>
    )
};

export {ModuleVentas};