import React, { useState } from "react";

function App() {

  const [input,currentInput]=useState("")
  const [Items,newItem]=useState([]);

function changeItem(event){
 const newValue=event.target.value;
 currentInput(newValue);
}
  function changeItemsArray(){
    newItem(preValues =>{
      return[...preValues,input]
    })
    currentInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changeItem} type="text" value={input} />
        <button onClick={changeItemsArray}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {Items.map(Item=>(<li>{Item}</li>))}
        </ul>
      </div>
    </div>
  );
}

export default App;
