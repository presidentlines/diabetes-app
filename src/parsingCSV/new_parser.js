import * as fs from "fs";
import { parse } from "csv-parse/sync";

const inputPath = "./animal_test.csv";

const parser = parse({
  delimiter: ",",
});

fs.readFile(inputPath, function (err, fileData) {
  console.log("Hey");
  parse(fileData, { columns: false, trim: true }, function (err, rows) {
    console.log(rows);
    console.log("Hey");
  });
});

console.log("hey");
