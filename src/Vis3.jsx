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
        <Bar dataKey="time_in_hospital" fill="#222222" />
        <Bar dataKey="num_medications" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//   },
// ];
