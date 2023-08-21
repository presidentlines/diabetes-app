import { readString } from "react-papaparse";
import siteListCSV from "./animal_test.csv";
export default function parse_csv(filename = "animal_test.csv") {
  const papaConfig = {
    complete: (results, file) => {
      console.log("Parsing complete:", results, file);
    },
    download: true,
    error: (error, file) => {
      console.log("Error while parsing:", error, file);
    },
  };
  readString(siteListCSV, papaConfig);
  // console.log("these are the results", results);
  // console.log(results["data"]);

  // const array = csv.toString().split("\n");
  // let result = [];

  // let headers = array[0].split(",");
  // for (let i = 1; i < array.length - 1; i++) {
  //   let current_obs = {};
  //   const things_in_array = array[i].split(",");
  //   headers.forEach((header, idx) => {
  //     return (current_obs[header] = things_in_array[idx].replace("\n", ""));
  //   });

  //   result.push(current_obs);
  // }

  // let json = JSON.stringify(result);

  // return result;
}
