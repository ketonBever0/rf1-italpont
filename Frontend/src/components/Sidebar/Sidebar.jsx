import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const isLoggedIn = currentUser != null ? true : false;
  const isAdmin = currentUser != null ? currentUser.role === "ADMIN" : false;

  const [items, setItems] = useState(
    //admin csak akkor jelenjen meg ha muszáj
    isAdmin
      ? [
          //itt adhatod meg a lista elem parametereit
          { name: "Adatok", isActive: true, linkTo: "/updateUser" },
          { name: "Rendelések", isActive: false, linkTo: "/rendeleseim" },
          { name: "Raktárak", isActive:false, linkTo: "/tables" },
          { name: "Admin", isActive: false, linkTo: "/admin" },
        ]
      : [
          { name: "Adatok", isActive: true, linkTo: "/updateUser" },
          { name: "Rendelések", isActive: false, linkTo: "/rendeleseim" },
          { name: "Raktárak", isActive:false, linkTo: "/tables" },
        ]
  );

  function logOut() {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("currentUser");
    window.location.href = "/";
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
        <a className="logout" onClick={() => logOut()}>
          Kijelentkezés
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
