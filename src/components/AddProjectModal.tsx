import { useState } from "react";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FormComponent from "./FormComponent";
import { Snackbar } from "@mui/material";
import "quill-mention";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "65vw",
  height: "auto",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
};
function AddProjectModal() {
  const [open, setOpen] = useState<boolean>(false);
  const [snackBar, setSnackBar] = useState<boolean>(false);

  const handleModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSnackBar(true);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button onClick={handleModal} variant="contained">
          Add Project
        </Button>
      </Box>
      <Snackbar
        open={snackBar}
        autoHideDuration={3000}
        onClose={() => setSnackBar(false)}
        message="Project Added Succefully"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 1.5,
              pl: 3,
              alignItems: "center",
              backgroundColor: "#EEEDEB",
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{}}>
              Add Project Information
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <FormComponent handleClose={handleClose} />
        </Box>
      </Modal>
      <br />
      <br />
    </>
  );
}

export default AddProjectModal;
