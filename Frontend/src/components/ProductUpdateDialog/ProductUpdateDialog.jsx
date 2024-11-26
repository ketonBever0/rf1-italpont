import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SettingsIcon from "@mui/icons-material/Settings";
import { CategoryContext } from "../../context/CategoryContext"
import axios from "axios";

export default function FormDialog(props) {
  const { product } = props;
  const BEARER_TOKEN = window.localStorage.getItem("token");
  const { url } = React.useContext(CategoryContext);
  //console.log(product);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [productData, setProductData] = React.useState({
    id: product.id,
    name: product.name,
    category: product.category,
    subCategory: product.subCategory,
    brand: product.brand,
    discount: product.discount,
    volume: product.volume,
    alcoholPercentage: product.alcoholPercentage,
    description: product.description,
    images: product.images,
    price: product.price,
  });

  console.log(productData);

  function onChange(e) {
    setProductData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function updateProduct() {
    //TODO: valós api kell
    axios
      .patch(url + "product/update/" + productData.id, productData, {
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
      <SettingsIcon variant="outlined" onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
        }}
      >
        <DialogTitle>Termék szerkesztése</DialogTitle>
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
            value={productData.subCategory}
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
            type="text"
            fullWidth
            variant="standard"
          />
          <label style={{ marginTop: "15px" }} htmlFor="alcohol">
            Alkoholszázalék:
          </label>
          <TextField
            autoFocus
            required
            margin="dense"
            id="alcohol"
            name="alcohol"
            value={productData.alcoholPercentage}
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
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Mégse</Button>
          <Button onClick={() => updateProduct()}>Módosít</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
