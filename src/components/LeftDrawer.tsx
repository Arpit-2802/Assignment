import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FeedIcon from "@mui/icons-material/Feed";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import BreadCrumb from "./BreadCrumb";
import TodayIcon from "@mui/icons-material/Today";
import PeopleIcon from "@mui/icons-material/People";
import CalculateIcon from "@mui/icons-material/Calculate";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { useNavigate } from "react-router-dom";
import PlanningItRightModal from "./PlanningItRightModal";
const drawerWidth = 260;

export default function PermanentDrawerLeft() {
  const nav = useNavigate();
  const handleProjectClick = () => {
    nav("/projects");
  };

  const handleOtherClick = () => {
    nav("/");
  };
  return (
    <Box sx={{ display: "flex", pt: 1 }}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          zIndex: 1,
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Expense Tracker App
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          zIndex: -1,
        }}
        variant="permanent"
        anchor="left"
        color="rgb(218, 215, 215)"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem>
            <ListItemButton onClick={handleProjectClick}>
              <ListItemIcon>
                <FeedIcon />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={handleOtherClick}>
              <ListItemIcon>
                <SettingsSuggestIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={handleOtherClick}>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Contributors" />
            </ListItemButton>
          </ListItem>
        </List>
        <ListItem>
          <ListItemButton onClick={handleOtherClick}>
            <ListItemIcon>
              <TodayIcon />
            </ListItemIcon>
            <ListItemText primary={"Schedule"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={handleOtherClick}>
            <ListItemIcon>
              <CalculateIcon />
            </ListItemIcon>
            <ListItemText primary={"Estimates"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <List>
          <ListItem>
            <ListItemButton onClick={handleOtherClick}>
              <ListItemIcon>
                <OpenInFullIcon />
              </ListItemIcon>
              <ListItemText primary={"Site Logistics"} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={handleOtherClick}>
              <ListItemIcon>
                <TodayIcon />
              </ListItemIcon>
              <ListItemText primary={"Schedule"} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={handleOtherClick}>
              <ListItemIcon>
                <FeedIcon />
              </ListItemIcon>
              <ListItemText primary={"Documents"} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={handleOtherClick}>
              <ListItemIcon>
                <TodayIcon />
              </ListItemIcon>
              <ListItemText primary={"Planning"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box>
        <BreadCrumb pathVal="Home/Projects" />
        <PlanningItRightModal />
      </Box>
    </Box>
  );
}
