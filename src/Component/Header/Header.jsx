import React from "react";
import "./Header.css";
const Header = ({ items }) => {
  return (
    <div class="head">
      <h1>My to do List ({items.length})</h1>
    </div>
  );
};

export default Header;
