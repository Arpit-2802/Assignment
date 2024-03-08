import CardView from "./CardView";
import CardContextProvider from "../context/CardContext";
import BreadCrumb from "./BreadCrumb";
import AddProjectModal from "./AddProjectModal";
import ErrorBoundary from "./ErrorBoundary";
import { Box } from "@mui/material";
function Home() {
  return (
    <CardContextProvider>
      <ErrorBoundary>
        <BreadCrumb pathVal="Home" />
        <Box sx={{ m: 1, backgroundColor: "white", borderRadius: 3 }}>
          <CardView />
          <AddProjectModal />
        </Box>
      </ErrorBoundary>
    </CardContextProvider>
  );
}

export default Home;
