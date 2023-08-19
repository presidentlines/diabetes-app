import React from "react";
import { Box } from "@mui/material";
import Vis1 from "../Vis1.jsx";
import Vis2 from "../Vis2.jsx";
import Vis3 from "../Vis3.jsx";
import Vis4 from "../Vis4.jsx";
import Vis5 from "../Vis5.jsx";
import Vis6 from "../Vis6.jsx";

export default function Layout() {
  return (
    <Box display="grid" gridTemplateColumns={"auto auto auto"} height="100vh">
      <Box display="grid" gridTemplateRows={"auto auto"}>
        <Vis1 />
        <Vis2 />
      </Box>
      <Box display="grid" gridTemplateRows={"auto auto"}>
        <Vis3 />
        <Vis4 />
      </Box>

      <Box display="grid" gridTemplateRows={"auto auto"}>
        <Vis5 />
        <Vis6 />
      </Box>
    </Box>
  );
}
