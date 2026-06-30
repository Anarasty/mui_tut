import { Box } from "@mui/material";

const Rightbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "violet",
        flex: 2,
        padding: 2,
        display:{
            xs: "none",
            sm: "block"
        }
      }}
    >
      Rightbar
    </Box>
  );
};

export default Rightbar;
