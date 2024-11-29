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
  const [quantity, setQuantity] = React.useState({
    id: product.id,
    name: product.name,
    productId: product,
    warehouse: product.warehouse,
    warehouseId: product.warehouseId,
    quantity: product.quantity,
  });

  //console.log(productData);

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
      <AddBoxIcon variant="outlined" onClick={handleClickOpen} />
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
          <DialogContentText>{quantity.name}</DialogContentText>
          <label style={{ marginTop: "15px" }} htmlFor="name">
            Raktár:
          </label>
          <DialogContentText>{quantity.warehouse}</DialogContentText>

          <label style={{ marginTop: "15px" }} htmlFor="price">
            Mennyiség (db):
          </label>

          <TextField
            autoFocus
            required
            margin="dense"
            id="price"
            name="price"
            value={quantity.quantity}
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
