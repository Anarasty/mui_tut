import { Button, styled, Typography } from "@mui/material";
import { Settings, Add } from "@mui/icons-material";

const BlueBtn = styled(Button)(({ theme }) => ({
  backgroundColor: "skyblue",
  color: "#888",
  margin: 5,
  "&:hover": {
    backgroundColor: "lightblue",
  },
  "&:disabled": {
    backgroundColor: "gray",
    color: "white",
  },
}));

function App() {
  return (
    <>
      Hello
      <Button color="secondary" variant="text">
        Text
      </Button>
      <Button variant="contained" color="primary" startIcon={<Settings />}>
        Settings
      </Button>
      <Button variant="outlined" startIcon={<Add />}>
        Outlined
      </Button>
      <Typography variant="h1" component="p">
        It is the p tag but has styles of a h1
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "skyblue",
          color: "#888",
          margin: 5,
          "&:hover": {
            backgroundColor: "lightblue",
          },
          "&:disabled": {
            backgroundColor: "gray",
            color: "white",
          },
        }}
      >
        Test
      </Button>
      <BlueBtn>A</BlueBtn>
    </>
  );
}

export default App;
