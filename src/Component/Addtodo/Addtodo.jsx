import React, { useState } from "react";
import "./Addtodo.css";

const Addtodo = ({ items, setitems }) => {
  const [text, setText] = useState("");
  function handlerinputchange(event) {
    setText(event.target.value);
  }
  function additem() {
    if (!text.trim() == "") {
      setitems([...items, text.trim()]);
      setText("");
    }
  }
  return (
    <div class="add">
      <input type="text" value={text} onChange={handlerinputchange} />
      <button onClick={additem}>Add</button>
    </div>
  );
};

export default Addtodo;
