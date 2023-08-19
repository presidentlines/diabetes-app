import React from "react";
import { Paper, Box } from "@mui/material";
import MenuBar from "../menuBar/menuBar.jsx";

export default function LayoutWrapper() {
  return (
    <Box display="grid" gridLayoutRows={"30px auto"}>
      <Paper
        sx={{
          position: "relative",
          height: "100vh",
          width: "100%",
          backgroundColor: "primary.main",
        }}
      >
        <MenuBar />
      </Paper>
    </Box>
  );
}
