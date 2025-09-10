import React from "react";
import Todoitem from "../Todoitem/Todoitem";

const Mytodo = ({ items, setitems }) => {
  return (
    <div class="todo">
      {items.map((item) => (
        <Todoitem text={item} setitems={setitems} items={items} />
      ))}
    </div>
  );
};
export default Mytodo;
