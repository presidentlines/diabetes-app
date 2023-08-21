import React from "react";
import { useState, useEffect } from "react";
import parsing_PCA from "./parsingCSV/analysis/parsing_PCA";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Line,
} from "recharts";
import { Box, Typography } from "@mui/material";

export default function Vis2() {
  const [data, setData] = useState("");

  useEffect(() => {
    (async () => {
      const PCA_data = await parsing_PCA();
      console.log("This is data");
      console.log(PCA_data);
      setData(PCA_data);
    })();

    return () => {
      // this now gets called when the component unmounts
    };
  }, []);

  return (
    <Box display="grid" gridTemplateRows={".9fr .1fr"}>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="component" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="gender" stroke="#8884d8" />
          <Line type="monotone" dataKey="race" stroke="#c1502e" />
          <Line type="monotone" dataKey="num_medications" stroke="#96897f" />
          <Line type="monotone" dataKey="num_procedures" stroke="#563f46" />
        </LineChart>
      </ResponsiveContainer>
      <Box border="1px solid black">
        <Typography fontWeight={"bold"}>
          Explained Variance By Principal Component
        </Typography>
        <Typography>PCA 1 -- 0.91564942</Typography>
        <Typography> PCA 2 -- 0.03637418</Typography>
        <Typography>PCA 3 -- 0.032714</Typography>
        <Typography>PCA 4 -- 0.01188623</Typography>
      </Box>
    </Box>
  );
}
