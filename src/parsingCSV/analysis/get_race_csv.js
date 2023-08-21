import { readString } from "react-papaparse";
// import siteListCSV from "./animal_test.csv";
import median_race_vals from "./median_race_vals.csv";
export default async function get_race_statistics() {
  return new Promise((resolve) => {
    readString(median_race_vals, {
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
