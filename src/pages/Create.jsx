import { NavigateNext } from "@mui/icons-material";
import { Box, InputAdornment, TextField, Button } from "@mui/material";
import React from "react";

const Create = () => {
  return (
    <Box sx={{ width: "380px" }} component="form">
      <TextField
        label="Transaction Title"
        id="filled-start-adornment"
        fullWidth
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
      />

      <TextField
        label="Transaction Title"
        id="filled-start-adornment"
        fullWidth
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />
      <Button variant="contained" color="success" sx={{ mt: "20px" }}>
        Add <NavigateNext />
      </Button>
    </Box>
  );
};

export default Create;
