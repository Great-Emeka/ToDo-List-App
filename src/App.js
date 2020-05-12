import React from 'react';
import Todoinputs from './components/Todoinputs';
import Todolist from './components/Todolist';

//importing some modules
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalized text-center">Todo Input</h3>
          <Todoinputs />
          <Todolist />
        </div>
      </div>
    </div>
  );
}

export default App;
