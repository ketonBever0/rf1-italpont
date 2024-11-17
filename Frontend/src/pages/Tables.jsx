import React from "react";
import {Admin, EditGuesser, ListGuesser, Resource} from "react-admin";
import { dataProvider } from "ra-data-simple-prisma";

const dataProvider = dataProvider("https://localhost:3306/")
  

const Tables = () => <Admin dataProvider={dataProvider}>
    <Resource  name="Warehouse" list={ListGuesser} edit={EditGuesser} />
    
</Admin>
return (<div>
    <h1> Raktárak</h1>
    <a href="Admin.jsx">Admin oldal</a>
    </div>);
export default Tables;