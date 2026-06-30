import { Box, Container, Stack } from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Box>
      <Stack
        direction={"row"}
        spacing={2}
        sx={{
          justifyContent: "space-between",
          // alignItems: "center",
        }}
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
