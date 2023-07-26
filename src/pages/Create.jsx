import styled from "@emotion/styled";
import { NavigateNext } from "@mui/icons-material";
import { Box, InputAdornment, TextField, Button } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green[500]),
  backgroundColor: theme.palette.myColor.main,
  "&:hover": {
    backgroundColor: green[700],
  },
}));

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

      <ColorButton
        variant="contained"
        endIcon={<NavigateNext />}
        sx={{ mt: "20px" }}
      >
        Add
      </ColorButton>
    </Box>
  );
};

export default Create;
