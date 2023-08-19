import React from "react";
import CustomTabPanel from "./CustomTabPanel.jsx";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import Vis1 from "../Vis1.jsx";
import Vis2 from "../Vis2.jsx";
import Vis3 from "../Vis3.jsx";
import Vis4 from "../Vis4.jsx";
import Vis5 from "../Vis5.jsx";
import Vis6 from "../Vis6.jsx";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MenuBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "#eaece5",
        }}
      >
        <Typography fontSize="20px" textAlign={"center"}>
          Diabetes Visualization
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="black"
          backgroundColor="black"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#222222",
            },
          }}
        >
          <Tab label="Vis 1" {...a11yProps(0)} />
          <Tab label="Vis 2" {...a11yProps(1)} />
          <Tab label="Vis 3" {...a11yProps(2)} />
          <Tab label="Vis 4" {...a11yProps(3)} />
          <Tab label="Vis 5" {...a11yProps(4)} />
          <Tab label="Vis 6" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Vis1 />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Vis2 />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Vis3 />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Vis4 />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Vis5 />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <Vis6 />
      </CustomTabPanel>
    </>
  );
}
