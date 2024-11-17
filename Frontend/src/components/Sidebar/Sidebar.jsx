import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const isAdmin = currentUser != null ? currentUser.role === "ADMIN" : false;

  console.log(isAdmin);
  const [items, setItems] = useState(
    isAdmin
      ? [
          { name: "Adatok", isActive: false, linkTo: "/adataim" },
          { name: "Rendelések", isActive: false, linkTo: "/rendeleseim" },
          { name: "Admin", isActive: false, linkTo: "/admin" },
        ]
      : [
          { name: "Adatok", isActive: false, linkTo: "/adataim" },
          { name: "Rendelések", isActive: false, linkTo: "/rendeleseim" },
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
    <div className="sidebar">
      {list}
      {isAdmin ? <a href="/admin">Admin</a> : <></>}
      <a className="logout" onClick={() => logOut()}>
        Kijelentkezés
      </a>
    </div>
  );
};

export default Sidebar;
