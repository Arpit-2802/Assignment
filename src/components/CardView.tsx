import { useContext } from "react";
import { cardContext } from "../context/CardContext";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Grid,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import { Link } from "react-router-dom";
function CardView() {
  const context = useContext(cardContext);

  // const handleSnackBar = () => {
  //   setSnackBar(true);
  // };
  if (!context) {
    // Handle the case where the context is null
    return <div>Loading...</div>;
  }
  const { cards } = context;
  console.log(cards);

  return (
    <>
      <Grid container spacing={2} sx={{ pt: 2, pl: 4, pr: 4 }}>
        {cards === null || cards.length === 0 ? (
          <Typography sx={{ pl: 4 }}>Loading ...</Typography>
        ) : (
          cards.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{}}>
                <CardHeader
                  sx={{ height: "60px", backgroundColor: "#005A9C" }}
                  subheader={
                    <Typography
                      variant="h6"
                      fontWeight=""
                      sx={{
                        color: "white",
                        alignItems: "center",
                        fontSize: "18px",
                      }}
                    >
                      {card.projectTitle}
                    </Typography>
                  }
                />
                <Divider />
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography fontWeight="bold">Project Id:</Typography>
                    &nbsp;
                    <Typography>{card.id}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography fontWeight="bold">Project Number:</Typography>
                    &nbsp;
                    <Typography>{card.projectNumber}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography fontWeight="bold">Region:</Typography>
                    &nbsp;
                    <Typography>{card.region}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography fontWeight="bold">SPW:</Typography>
                    &nbsp;
                    <Typography>{card.spw}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography fontWeight="bold">Contract Value:</Typography>
                    &nbsp;
                    <Typography>{card.contractValue}</Typography>
                  </Box>
                </CardContent>
                <Divider />
                <CardActions>
                  <Box sx={{ display: "flex" }}>
                    <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
                    &nbsp;&nbsp;
                    <Link to="/projects">
                      <OpenInNewOutlinedIcon />
                    </Link>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}

export default CardView;
