import React from "react";
import { Stack } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { dataVizTheme } from "./theme.ts";
import LayoutWrapper from "./Layout/LayoutWrapper.jsx";

export default function App() {
  return (
    <ThemeProvider theme={dataVizTheme}>
      <Stack className="App" height="100%">
        <LayoutWrapper />
      </Stack>
    </ThemeProvider>
  );
}
