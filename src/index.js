import React from 'react';
import ReactDOM from 'react-dom';

const fruits=["Apple","Banana","Grapes"]
const element=<div>
  <h1> Tasks List</h1>
  <ol>
    {fruits.map((fruit, index) =><li key={index}>{fruit} </li>)}
  </ol>
</div>
ReactDOM.render(
  element,
  document.getElementById('root')
);

