import React, { useState } from "react";
import "./Sidebar.css";

//TODO: CSS még fontos!
const Sidebar = () => {
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const isLoggedIn = currentUser != null ? true : false;
  const isAdmin = currentUser != null ? currentUser.role === "ADMIN" : false;

  const [items, setItems] = useState([
    //itt adhatod meg a lista elem parametereit
    { name: "Foldal", isActive: true, linkTo: "/" },
    { name: "Rendelesek", isActive: false, linkTo: "/rendeleseim" },
    { name: "Adatok", isActive: false, linkTo: "/updateUser" },
  ]);
  //TODO: admin csak akkor jelenjen meg ha muszáj
  if (isAdmin) {
  }

  const handleClick = (index) => {
    setItems((prevItems) =>
      prevItems.map((e, i) => ({ ...e, isActive: i === index }))
    );
  };

  const list = items.map((item, index) => {
    return (
      <a
        key={index}
        href={item.linkTo}
        onClick={() => handleClick(index)}
        className={item.isActive ? "active" : null}
      >
        {item.name}
      </a>
    );
  });

  return (
    <div>
      <div className="sidebar">
        {list}
        {isAdmin ? <a href="/admin">Admin</a> : <></>}
      </div>
    </div>
  );
};

export default Sidebar;
