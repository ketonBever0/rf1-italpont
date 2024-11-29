import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { CategoryContext } from "../../context/CategoryContext";
import axios from "axios";

export default function FormDialog(props) {
  const BEARER_TOKEN = window.localStorage.getItem("token");
  const { url } = React.useContext(CategoryContext);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [productData, setProductData] = React.useState({
    name: "",
    category: "",
    subCategory: "",
    brand: "",
    discount: 0,
    volume: 0,
    alcoholPercentage: 0,
    description: "",
    images: "",
    price: 0,
  });

  function onChange(e) {
    setProductData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  console.log(productData);

  async function newProduct() {
    axios
      .post(url + "product/add", productData, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      })
      .then((response) => {
        console.log(JSON.stringify(response.data));
        console.log(response);
        console.log("adatok elkuldve");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <React.Fragment>
      <AddBoxIcon variant="outlined" onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
        }}
      >
        <DialogTitle>Új termék hozzáadása</DialogTitle>
        <DialogContent>
          <label style={{ marginTop: "15px" }} htmlFor="name">
            Név:
          </label>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            value={productData.name}
            onChange={(e) => onChange(e)}
            type="text"
            fullWidth
            variant="standard"
          />
          <label style={{ marginTop: "15px" }} htmlFor="category">
            Kategória:
          </label>
          <TextField
            autoFocus
            required
            margin="dense"
            id="category"
            name="category"
            value={productData.category}
            onChange={(e) => onChange(e)}
            type="text"
            fullWidth
            variant="standard"
          />
          <label style={{ marginTop: "15px" }} htmlFor="subCategory">
            Alkategória:
          </label>
          <TextField
            autoFocus
            required
            margin="dense"
            id="subCategory"
            name="subCategory"
            value={productData.subCategory}
            onChange={(e) => onChange(e)}
            type="text"
            fullWidth
            variant="standard"
          />
          <label style={{ marginTop: "15px" }} htmlFor="brand">
            Márka:
          </label>
          <TextField
            autoFocus
            required
            margin="dense"
            id="brand"
            name="brand"
            value={productData.brand}
            onChange={(e) => onChange(e)}
            type="text"
            fullWidth
            variant="standard"
          />
          <label style={{ marginTop: "15px" }} htmlFor="discount">
            Kedvezmény:
          </label>
          <TextField
            autoFocus
            required
            margin="dense"
            id="discount"
            name="discount"
            value={productData.discount}
            onChange={(e) => onChange(e)}
            type="number"
            fullWidth
            variant="standard"
          />
          <label style={{ marginTop: "15px" }} htmlFor="volume">
            Űrtartalom:
          </label>
          <TextField
            autoFocus
            required
            margin="dense"
            id="volume"
            name="volume"
            value={productData.volume}
            onChange={(e) => onChange(e)}
            type="number"
            fullWidth
            variant="standard"
          />
          <label style={{ marginTop: "15px" }} htmlFor="alcoholPercentage">
            Alkoholszázalék:
          </label>
          <TextField
            autoFocus
            required
            margin="dense"
            id="alcoholPercentage"
            name="alcoholPercentage"
            value={productData.alcoholPercentage}
            onChange={(e) => onChange(e)}
            type="number"
            fullWidth
            variant="standard"
          />
          <label style={{ marginTop: "15px" }} htmlFor="description">
            Leírás:
          </label>
          <TextField
            autoFocus
            required
            margin="dense"
            id="description"
            name="description"
            value={productData.description}
            onChange={(e) => onChange(e)}
            type="text"
            fullWidth
            variant="standard"
          />
          <label style={{ marginTop: "15px" }} htmlFor="price">
            Ár:
          </label>
          <TextField
            autoFocus
            required
            margin="dense"
            id="price"
            name="price"
            value={productData.price}
            onChange={(e) => onChange(e)}
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Mégse</Button>
          <Button onClick={() => newProduct()}>Hozzáad</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
