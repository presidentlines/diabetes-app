import { readString } from "react-papaparse";
// import siteListCSV from "./animal_test.csv";
import indiv_data from "./Indiv_data_cleaned.csv";
export default async function parse_csv() {
  return new Promise((resolve) => {
    readString(indiv_data, {
      delimiter: ",",
      complete: (results, file) => {
        console.log("Parsing complete:", results, file);
        console.log(results.data);
        const array = results.data;
        let headers = array[0];
        let result = [];
        for (let i = 1; i < array.length; i++) {
          let current_obs = {};
          const things_in_array = array[i];
          headers.forEach((header, idx) => {
            current_obs[header] = things_in_array[idx];
          });
          result.push(current_obs);
        }
        resolve(result);
      },
      download: true,
      error: (error, file) => {
        console.log("Error while parsing:", error, file);
      },
    });
  });
}
