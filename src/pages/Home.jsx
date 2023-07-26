import { Close } from "@mui/icons-material";
import { Box, Paper, Typography, IconButton } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Box>
      <Paper
        sx={{
          width: "366px",
          display: "flex",
          justifyContent: "space-between",
          mt: "22px",
          pt: "27px",
          pb: "7px",
          position: "relative",
        }}
      >
        <Typography variant="h6" sx={{ ml: "16px", fontSize: "1.3em" }}>
          Food
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mr: "33px",
            fontWeight: "500",
            fontSize: "1.4em",
            opacity: "0.8",
          }}
        >
          $60
        </Typography>
        <IconButton
          aria-label="clear"
          sx={{ position: "absolute", top: "0", right: "0" }}
        >
          <Close />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default Home;
