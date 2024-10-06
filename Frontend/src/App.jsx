import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart";
import ShopCategory from './pages/ShopCategory';
import Main from "./pages/Main"
import men_banner from './assets/banner_mens.png'

function App() {
  const [data, setData] = useState([])
  useEffect(()=> {
    fetch('http://localhost:8081/users')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
    //{data.map((d, i) => (
      //<tr key={i}>
      ////<td>{d.id}</td>
     // <td>{d.Name}</td>
     // <td>{d.Email}</td>
     // <td>{d.szul_ev}</td>
    //</tr>//
   // ))}
  })
 
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/alkoholos_italok' element={<ShopCategory banner={men_banner} category="alkoholos_italok"/>}/>
        <Route path='/uditok' element={<ShopCategory banner={men_banner} category="uditok"/>}/>
        <Route path='/kiegeszitok' element={<ShopCategory banner={men_banner} category="kiegesztiok"/>}/>
        <Route path='/regisztracio' element={<Signup />}/>
        <Route path='/bejelentkezes' element={<Login />}/>
        <Route path='/kosar' element={<Cart />}/>

      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
  )
}

export default App