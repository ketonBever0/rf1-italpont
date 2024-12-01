import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import { CategoryContext } from "../../context/CategoryContext";
import axios from "axios";

export default function WarehouseFormDialog() {
  const BEARER_TOKEN = window.localStorage.getItem("token");
  const { url } = React.useContext(CategoryContext);  // API URL lekérése a contextből
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const [warehouseData, setWarehouseData] = React.useState({
    name: "",
    postcode: "",
    city: "",
    address: "",
    capacity: "",
  });

  function onChange(e) {
    setWarehouseData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function createWarehouse() {
    
    axios
      .post(url + "warehouses", warehouseData, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      })
      .then((response) => {
        console.log("Raktár sikeresen létrehozva:", response.data);
        handleClose();  
      })
      .catch((error) => {
        console.log("Hiba a raktár létrehozásakor:", error);
      });
  }

  return (
    <React.Fragment>
      <WarehouseIcon variant="outlined" onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
        }}
      >
        <DialogTitle>Új raktár létrehozása</DialogTitle>
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
            value={warehouseData.name}
            onChange={(e) => onChange(e)}
            type="text"
            fullWidth
            variant="standard"
          />
          <label style={{ marginTop: "15px" }} htmlFor="postcode">
            Irányítószám:
          </label>
          <TextField
            required
            margin="dense"
            id="postcode"
            name="postcode"
            value={warehouseData.postcode}
            onChange={(e) => onChange(e)}
            type="text"
            fullWidth
            variant="standard"
          />
          <label style={{ marginTop: "15px" }} htmlFor="city">
            Város:
          </label>
          <TextField
            required
            margin="dense"
            id="city"
            name="city"
            value={warehouseData.city}
            onChange={(e) => onChange(e)}
            type="text"
            fullWidth
            variant="standard"
          />
          <label style={{ marginTop: "15px" }} htmlFor="address">
            Cím:
          </label>
          <TextField
            required
            margin="dense"
            id="address"
            name="address"
            value={warehouseData.address}
            onChange={(e) => onChange(e)}
            type="text"
            fullWidth
            variant="standard"
          />
          <label style={{ marginTop: "15px" }} htmlFor="capacity">
            Kapacitás:
          </label>
          <TextField
            required
            margin="dense"
            id="capacity"
            name="capacity"
            value={warehouseData.capacity}
            onChange={(e) => onChange(e)}
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Mégse</Button>
          <Button onClick={createWarehouse}>Létrehozás</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
