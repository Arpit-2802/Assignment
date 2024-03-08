import React from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import PirgModalProcess from "./PirgModalProcess";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85vw",
  height: "auto",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
};

function PlanningItRightModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ pl: 55, pt: 35 }}>
      <Button onClick={handleOpen} variant="contained">
        Trigger Modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="section"
            sx={{
              p: 1,
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#EEEDEB",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ pl: 2 }}>
              Planing it Right Guideline | Leveraging Experience to Mitigate
              Risk
            </Typography>

            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Typography
            variant="body2"
            sx={{
              pt: 1,
              pl: 3,
              pr: 1,
              pb: 1,
            }}
          >
            Work with the project team to connect relevant past experience and
            leverage it to identify, track & develop plans to address or
            mitigate risks, in alignment with the contract, then regularly
            reviewing, adding and updating throughout the project as a
            collective team (inclusive of client, design team & trade partners).
          </Typography>

          <Divider variant="middle" />

          <Box sx={{ pt: 1, pl: 3, pb: 2 }}>
            <Typography fontWeight="bold" fontSize="16px">
              Obectives (2)
            </Typography>

            <Stack
              direction="row"
              spacing={3}
              sx={{ paddingTop: "10px", paddingLeft: "20px" }}
            >
              <Chip
                label="Learning Organization"
                sx={{ backgroundColor: "orange", height: "20px" }}
              />
              <Chip
                label="Managing Risk"
                sx={{ backgroundColor: "red", height: "20px" }}
                size="small"
              />
            </Stack>
          </Box>

          <Divider variant="middle" />

          <PirgModalProcess />
        </Box>
      </Modal>
    </Box>
  );
}

export default PlanningItRightModal;
