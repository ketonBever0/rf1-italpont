import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Értesülj legújabb akcióinkról</h1>
      <p>Iratkozz fel a hírlevelünk és ne maradj le!</p>
      <div>
        <input type="email" placeholder="E-mail címed" />
        <button>Feliratkozok</button>
      </div>
    </div>
  );
};

export default Newsletter;
