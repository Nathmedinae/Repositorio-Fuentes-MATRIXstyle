import React from 'react';
// import './App.css';
import "./style.css";
import {AppRouter} from "./Routers/AppRouter";
import { HeaderMatrix } from './components/HeaderMatrix';

const express = require("express");
const morgan = require("morgan");
const app = express();


//settings
const port = 3000;
// app.set("port", process.env.PORT || 3000);

//middleWares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/tasks", require("./backend/TaskRoutes"));



app.listen(port, () => {
    console.log(`Server on port ${port}`);
});

function App() {
  return (
    <React.Fragment>
      <HeaderMatrix />
      <AppRouter />
    </React.Fragment>
  );
}

export default App;