import React from 'react';
import './App.css';

function App() {

  const add = () => {
    alert("Add clicked..");
  }

  const edit = () => {
    alert("Edit clicked..");
  }

  const del = () => {
    alert("Delete clicked..");
  }

  return (
    <React.Fragment>
      <button onClick={add}>Add</button>
      <button onClick={edit}>Edit</button>
      <button onClick={del}>Delete</button>
    </React.Fragment>
  );
}

export default App;
