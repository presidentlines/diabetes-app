import React from "react";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import parse_csv from "./parsingCSV/parsingCSV";
import { Box, Typography } from "@mui/material";

export default function Vis6() {
  const [data, setData] = useState([]);

  const columns = [
    { field: "encounter_id", headerName: "ID", width: 100 },
    { field: "patient_nbr", headerName: "Patient Number", width: 130 },
    { field: "race", headerName: "Race", width: 130 },
    {
      field: "gender",
      headerName: "Gender",
      type: "number",
      width: 90,
    },
    { field: "admission_type_id", headerName: "Admission Type", width: 130 },
    { field: "num_procedures", headerName: "Number of Procedures", width: 200 },
  ];

  useEffect(() => {
    (async () => {
      const data2 = await parse_csv();
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
        Diabetic CSV Table
      </Typography>
      <DataGrid
        sx={{ color: "black" }}
        getRowId={(row) => row.encounter_id}
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 30 },
          },
        }}
        pageSizeOptions={[5, 30]}
        checkboxSelection
      />
    </Box>
  );
}
