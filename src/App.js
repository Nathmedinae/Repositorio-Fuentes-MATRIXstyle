import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
// import './App.css';
import "./style.css";
import {AppRouter} from "./Routers/AppRouter";
import { HeaderMatrix } from './components/HeaderMatrix';

function App() {
  return (
    <React.Fragment>
      <HeaderMatrix />
      <AppRouter />
    </React.Fragment>
  );
}

export default App;