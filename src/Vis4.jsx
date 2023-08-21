import React from "react";
import { useEffect, useState } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import get_race_statistics from "./parsingCSV/analysis/get_race_csv";

export default function Vis3() {
  const [data, setData] = useState("");

  useEffect(() => {
    (async () => {
      const race_data = await get_race_statistics();
      console.log("This is data");
      console.log(race_data);
      setData(race_data);
    })();

    return () => {
      // this now gets called when the component unmounts
    };
  }, []);

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="race" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#618685" />
      </BarChart>
    </ResponsiveContainer>
  );
}
