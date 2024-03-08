import Chip from "@mui/material/Chip";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import {
  Box,
  Typography,
  Card,
  CardActions,
  Button,
  CardContent,
  CardHeader,
  Grid,
  Select,
  MenuItem,
  OutlinedInput,
  SelectChangeEvent,
  InputLabel,
  FormControl,
} from "@mui/material";
import React from "react";
// import Calendar from 'react-calendar';

interface Card {
  Heading: string;
  DueDate: string;
  people: string[];
}

const cardTemp: Card[] = [
  {
    Heading: "Basis of Contract Qualifications",
    DueDate: "9/23/22",
    people: ["Arpit Singh", "Aditya Gupta"],
  },
  {
    Heading: "MEP Commission Planning",
    DueDate: "9/23/22",
    people: ["Arpit Singh", "Aditya Gupta"],
  },
  {
    Heading: "Owner Contract Review",
    DueDate: "9/23/22",
    people: ["Arpit Singh", "Aditya Gupta"],
  },
  {
    Heading: "Owner Contract Review",
    DueDate: "9/23/22",
    people: ["Arpit Singh", "Aditya Gupta"],
  },
  {
    Heading: "Owner Contract Review",
    DueDate: "9/23/22",
    people: ["Arpit Singh", "Aditya Gupta"],
  },
  {
    Heading: "MEP Commission Planning",
    DueDate: "9/23/22",
    people: ["Arpit Singh", "Aditya Gupta"],
  },
  {
    Heading: "MEP Commission Planning",
    DueDate: "9/23/22",
    people: ["Arpit Singh", "Aditya Gupta"],
  },
];

const PirgModalProcess = () => {
  // const handleDelete = (person: IDynamicPerson) => () => {
  //   console.log('Deleted');
  //   setName((name) => name.filter((n) => n !== person));
  // };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const names = ["Me", "Jon Doe", "Arpit"];
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "50px",
          backgroundColor: "white",
          backfaceVisibility: "hidden",
        }}
      >
        <Typography variant="body1" fontWeight="bold" sx={{ pl: 3, pt: 1 }}>
          Processes (7)
        </Typography>

        <div>
          <FormControl sx={{ pr: 8, pt: 1 }}>
            <InputLabel id="demo-multiple-name-label">Name</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
              sx={{ width: "200px", height: "40px" }}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Box>

      <Grid
        container
        spacing={1}
        sx={{
          height: "350px",
          p: 1,
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "0px",
          },
        }}
      >
        {cardTemp.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{}} variant="outlined" key={index}>
              <CardHeader
                subheader={
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    sx={{ fontSize: "14px" }}
                  >
                    {card.Heading}
                  </Typography>
                }
                sx={{ height: "1px" }}
              />
              <CardContent
                key={index}
                sx={{
                  height: "40px",
                  overflowY: "auto",
                  scrollBehavior: "auto",
                  "&::-webkit-scrollbar": {
                    width: "4px",
                  },
                }}
              >
                {card.people.length !== 0 ? (
                  card.people.map((temp, tempIndex) => (
                    <Chip
                      key={tempIndex}
                      label={<Typography fontSize="11px">{temp}</Typography>}
                      sx={{ height: "20px" }}
                      icon={
                        <PermIdentityIcon
                          fontSize="small"
                          sx={{ fontSize: "18px" }}
                        />
                      }
                    />
                  ))
                ) : (
                  <Typography>Yet to assign!</Typography>
                )}
              </CardContent>
              <Divider />
              <CardActions
                sx={{
                  justifyContent: "space-between",
                  pt: 2,
                }}
              >
                <Typography fontSize="12px">
                  <IconButton>
                    <CalendarTodayIcon sx={{ height: "12px" }} />
                  </IconButton>
                  Due Date : 9/12/23
                </Typography>

                <div>
                  <Button
                    variant="outlined"
                    style={{
                      maxWidth: "55px",
                      maxHeight: "25px",
                      minWidth: "30px",
                      minHeight: "25px",
                      marginRight: "5px",
                    }}
                    endIcon={<OpenInNewIcon sx={{ height: "15px" }} />}
                  >
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      sx={{ fontSize: "12px" }}
                    >
                      BPP
                    </Typography>
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      maxWidth: "45px",
                      maxHeight: "25px",
                      minWidth: "30px",
                      minHeight: "25px",
                    }}
                  >
                    <Typography variant="body2" sx={{ fontSize: "11px" }}>
                      View
                    </Typography>
                  </Button>
                </div>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PirgModalProcess;
