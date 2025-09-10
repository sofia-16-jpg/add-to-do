import { useState } from "react";
import "./App.css";
import Todoitem from "./Component/Todoitem/Todoitem";
import Addtodo from "./Component/Addtodo/Addtodo";
import Header from "./Component/Header/Header";
import Mytodo from "./Component/Mytodo/Mytodo";

let items = [
  {
    text: "do the exercice",
    bnt1: "edit",
    btn2: "delete",
  },
  {
    text: "go take a nap",
    bnt1: "edit",
    btn2: "delete",
  },
  {
    text: "help my friend with to do list",
    bnt1: "edit",
    btn2: "delete",
  },
];
function App() {
  const [items, setitems] = useState([
    "do the exercice",
    "take a nap",
    "help my friend with to do list",
  ]);
  return (
    <div class="container">
      <Header items={items} />
      <Mytodo items={items} setitems={setitems} />
      <Addtodo items={items} setitems={setitems} />
    </div>
  );
}

export default App;
