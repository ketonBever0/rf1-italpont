import React from "react";
import {Admin, EditGuesser, ListGuesser, Resource} from "react-admin";
import { dataProvider } from "ra-data-simple-prisma";

const dataProvider = dataProvider("https://localhost:3306/")
  

<<<<<<< Updated upstream
const Tables = () =>{
    const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
    const isAdmin = currentUser != null ? currentUser.role === "ADMIN" : false;
    if (!isAdmin) {
      window.location.href = "/";
      return null;
    }

return (<div>
    <h1> Raktárak</h1>
    <Admin dataProvider={dataProvider}>
    <Resource  name="Warehouse" list={ListGuesser} edit={EditGuesser} />
    
    </Admin>
    <div>
     
        < a href="Admin.jsx">Admin oldal</a>
    </div>
</div>);
};
=======
const Tables = () => <Admin dataProvider={dataProvider}>
    <Resource  name="Warehouse" list={ListGuesser} edit={EditGuesser} />
    
</Admin>
return (<div>
    <h1> Raktárak</h1>
    <a href="Admin.jsx">Admin oldal</a>
    </div>);
>>>>>>> Stashed changes
export default Tables;