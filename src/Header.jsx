import { Box, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box sx={{ display: "flex", gap: "1rem" }}>
      <Typography>Home</Typography>
      <Typography>Product</Typography>
      <Typography>User</Typography>
    </Box>
  );
};

export default Header;
