import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = (props) => {
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const isAdmin = currentUser != null ? currentUser.role === "ADMIN" : false;
  const isAdminPage = props.page;

  const [items, setItems] = useState(
    isAdmin
      ? [
          //itt adhatod meg a lista elem parametereit
          { name: "Adatok", isActive: true, linkTo: "/updateUser" },
          { name: "Rendelések", isActive: false, linkTo: "/rendeleseim" },
          { name: "Raktárak", isActive: false, linkTo: "/raktarak" },
          { name: "Admin", isActive: false, linkTo: "/admin" },
        ]
      : [
          { name: "Adatok", isActive: false, linkTo: "/adataim" },
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
    <div className="sidebar">
      {list}
      <a className="logout" onClick={() => logOut()}>
        Kijelentkezés
      </a>
    </div>
  );
};

export default Sidebar;
