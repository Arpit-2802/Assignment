import { TextField, FormLabel, Button } from "@mui/material";
import { Box, Grid } from "@mui/material";
import { FormEvent, useContext, useState } from "react";
import cardData from "../models/cardData";
import { cardContext } from "../context/CardContext";
interface IProps {
  handleClose: () => void;
}
const FormComponent = (props: IProps) => {
  const [_id, setId] = useState<number>(0);
  const [projectTile, setProjectTitle] = useState<string>("");
  const [projectNumber, setProjectNumber] = useState<number>(0);
  const [region, setRegion] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [spw, setSpw] = useState<string>("");
  const [contractValue, setContractValue] = useState<number>(0);
  const { saveCard } = useContext(cardContext)!;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setId((i) => i + 1);
    const data = new cardData(
      _id,
      projectTile,
      projectNumber,
      region,
      status,
      spw,
      contractValue
    );
    const stringFromLocalStorage = localStorage.getItem("Projects");
    if (stringFromLocalStorage != null) {
      const dataArray = JSON.parse(stringFromLocalStorage);
      dataArray.push(data);
      console.log(dataArray);
      localStorage.setItem("Projects", JSON.stringify(dataArray));
      saveCard(data);
    } else {
      localStorage.setItem("Projects", JSON.stringify([data]));
      saveCard(data);
    }
    console.log(data);
    props.handleClose();
  };
  //console.log(localStorage.getItem("0"));
  return (
    <>
      <form>
        <Box sx={{ justifyContent: "center" }}>
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: "12px",
            }}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            >
              <Grid item xs={6}>
                <Box sx={{ display: "flex", p: 3, alignItems: "center" }}>
                  <FormLabel>Project Title:</FormLabel> &nbsp; &nbsp;
                  <TextField
                    label="project title"
                    size="small"
                    onChange={(e) => setProjectTitle(e.target.value)}
                  ></TextField>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ display: "flex", p: 3, alignItems: "center" }}>
                  <FormLabel>Project Number:</FormLabel> &nbsp; &nbsp;
                  <TextField
                    label="project number"
                    type="number"
                    size="small"
                    onChange={(e) => setProjectNumber(+e.target.value)}
                    required
                  ></TextField>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ display: "flex", p: 3, alignItems: "center" }}>
                  <FormLabel>Region:</FormLabel> &nbsp; &nbsp;
                  <TextField
                    label="project region"
                    size="small"
                    onChange={(e) => setRegion(e.target.value)}
                  ></TextField>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ display: "flex", p: 3, alignItems: "center" }}>
                  <FormLabel>Status:</FormLabel> &nbsp; &nbsp;
                  <TextField
                    label="project status"
                    size="small"
                    onChange={(e) => setStatus(e.target.value)}
                  ></TextField>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ display: "flex", p: 3, alignItems: "center" }}>
                  <FormLabel>SPW: </FormLabel> &nbsp; &nbsp;
                  <TextField
                    label="spw"
                    size="small"
                    onChange={(e) => setSpw(e.target.value)}
                  ></TextField>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ display: "flex", p: 3, alignItems: "center" }}>
                  <FormLabel>Contract Value:</FormLabel> &nbsp; &nbsp;
                  <TextField
                    label="Contract Value"
                    size="small"
                    type="number"
                    onChange={(e) => setContractValue(+e.target.value)}
                  ></TextField>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pb: 3,
          }}
        >
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default FormComponent;
