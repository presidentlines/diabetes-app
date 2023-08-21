import React from "react";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import parse_indiv_data from "./parsingCSV/parse_indiv_data";
import { Box, Typography } from "@mui/material";

export default function Vis6() {
  const [data, setData] = useState([]);

  const columns = [
    { field: "Patient", headerName: "Patient Number", width: 150 },
    { field: "Date", headerName: "Date", width: 200 },
    { field: "Time", headerName: "Time", width: 130 },
    { field: "Code", headerName: "Code", width: 130 },
    { field: "Action", headerName: "Action", width: 100 },
    { field: "Action_Value", headerName: "Action Value", width: 130 },
  ];

  useEffect(() => {
    (async () => {
      const data2 = await parse_indiv_data();
      console.log("This is data");
      console.log(data2);
      setData(data2);
    })();

    return () => {
      // this now gets called when the component unmounts
    };
  }, []);
  return (
    <Box
      style={{ height: 800, width: "100%" }}
      display="grid"
      gridTemplateRows={"auto 100%"}
    >
      <Typography fontSize="20px" textAlign="center" border="1px solid green">
        Individual Diabetic Data
      </Typography>
      <DataGrid
        sx={{ color: "black" }}
        getRowId={(row) => row.Time}
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 20 },
          },
          sorting: {
            sortModel: [{ field: "Patient", sort: "asc" }],
          },
        }}
        pageSizeOptions={[20, 50]}
        checkboxSelection
      />
    </Box>
  );
}
