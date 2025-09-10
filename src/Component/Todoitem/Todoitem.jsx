import React, { useState } from "react";
import "./Todoitem.css";
const Todoitem = ({ text, items, setitems }) => {
  function deleteitem(item) {
    let copyofitem = [...items];
    copyofitem = copyofitem.filter((el) => el !== item);
    setitems(copyofitem);
  }
  const [isediting, setisediting] = useState(false);
  function handler(event) {
    const copyOfTqsks = [...items];
    const index = copyOfTqsks.indexOf(text);
    copyOfTqsks[index] = updatedText;
    setitems(copyOfTqsks);
    setisediting(!isediting);
  }
  const [updatedText, setUpdatedText] = useState(text);
  function handlerinputchange(event) {
    setUpdatedText(event.target.value);
  }
  function additem() {
    if (!updatedText.trim() == "") {
      setitems([...items, updatedText.trim()]);
      setUpdatedText("");
    }
  }
  return (
    <div class="first">
      {isediting == true ? (
        <>
          <input
            type="text"
            value={updatedText}
            onChange={handlerinputchange}
          />
          <div className="butt">
            <button id="btn1" onClick={handler}>
              save
            </button>
            <button id="btn2" onClick={() => deleteitem(text)}>
              cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <p>{text}</p>
          <div className="butt">
            <button id="btn1" onClick={() => setisediting(true)}>
              edit
            </button>
            <button id="btn2" onClick={() => deleteitem(text)}>
              delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Todoitem;
