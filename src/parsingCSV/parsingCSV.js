import { readString } from "react-papaparse";
// import siteListCSV from "./animal_test.csv";
import diabeticCSV from "./diabetic_data.csv";
export default async function parse_csv() {
  return new Promise((resolve) => {
    readString(diabeticCSV, {
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

// const papaConfig = {
//   complete: (results, file) => {
//     console.log("Parsing complete:", results, file);
//     console.log(results.data);
//     return results.data;
//   },
//   download: true,
//   error: (error, file) => {
//     console.log("Error while parsing:", error, file);
//   },
// };
