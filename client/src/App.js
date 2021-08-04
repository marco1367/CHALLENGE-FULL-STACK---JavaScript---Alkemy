import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Home from "./components/Home/home";
import NavBar from  "./components/NavBar/NavBar";
import FormNewOperation from "./components/FormNewOperation/FormNewOperation";
import AllOperations from "./components/AllOperations/index";

function App() {
  return (
    <React.Fragment>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Home} />
      <Route exact path="/newoperation" component={FormNewOperation} />
      <Route exact path="/alloperations" component={AllOperations} />
    </React.Fragment>
  );
}

export default App;
