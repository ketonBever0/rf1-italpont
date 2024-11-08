import axios from "axios";


let products = [];


async function fetchProducts() {
  axios
    .get("http://localhost:3000/product/all")
    .catch((error) => {
      console.error(error);
      console.log("Termékeket nem sikerült elérni");
    })
    .then((response) => {
      
    });
}


export default products;
