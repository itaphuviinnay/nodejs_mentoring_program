#!/usr/bin/env node

const program = require("commander");
const path = require("path");
const fs = require("fs");
const csvjson = require("csvjson");
const through2 = require("through2");
const concat = require("concat");

const isFileCSV = fileName => /\.csv$/.test(fileName);

function reverse() {
  const transformer = through2(function(data, encode, callbackFn) {
    this.push(
      data
        .toString()
        .split("")
        .reverse()
        .join("") + "\n\n"
    );
    callbackFn();
  });
  console.log(
    "\nInput the strings to be reversed and press ENTER.\n\nTo exit press CTRL+C"
  );
  process.stdin.pipe(transformer).pipe(process.stdout);
}

function transform() {
  const transformer = through2(function(data, encode, callbackFn) {
    this.push(data.toString().toUpperCase());
    callbackFn();
  });
  console.log(
    "Input the strings to be transformed to uppercase and press ENTER.\n\nTo exit press CTRL+C"
  );
  process.stdin.pipe(transformer).pipe(process.stdout);
}

function outputFile(filePath) {
  fs.createReadStream(filePath)
    .on("error", error =>
      console.log(`An error occured while reading the file: ${error}`)
    )
    .pipe(process.stdout);
}

function transformFile(filePath, mode) {
  if (!isFileCSV(filePath)) {
    throw new Error("File provided should be a csv file");
  }
  const readStream = fs.createReadStream(filePath);
  const toObject = csvjson.stream.toObject();
  const stringify = csvjson.stream.stringify(" ");

  const outputType =
    mode === "stdout"
      ? process.stdout
      : fs.createWriteStream(filePath.replace(/csv$/, "json"));

  readStream
    .on("error", error =>
      console.log(`An error occured while reading the file: \n ${error}`)
    )
    .pipe(toObject)
    .pipe(stringify)
    .pipe(outputType);
}

function bundleCSS(dirPath) {
  const bundleFilePath = path.join(dirPath, "bundle.css");
  if (fs.existsSync(bundleFilePath)) {
    fs.unlinkSync(bundleFilePath);
  }
  const cssFiles = fs
    .readdirSync(dirPath)
    .map(file => path.join(dirPath, file));
  concat(cssFiles, bundleFilePath).then(() => {
    fs.appendFileSync(
      bundleFilePath,
      `.ngmp18 {
        background-color: #fff;
        overflow: hidden;
        width: 100%;
        height: 100%;
        position: relative;
      }
      .ngmp18__hw3 {
        color: #333;
      }
      .ngmp18__hw3--t7 {
        font-weight: bold;
      }`,
      "utf-8"
    );
  });
}

program
  .version("1.0.0")
  .option("-a, --action <required>", "Action to be executed")
  .option("-f, --file [optional]", "File to be processed")
  .option("-p, --path [optional]", "Folder path with css files")
  .parse(process.argv);

const isArgumentValid = (arg, value) => {
  if (typeof arg !== "string") {
    console.log(
      `Provide a valid value for ${value} with --${value} option (or) -${value.charAt(
        0
      )} option`
    );
    return false;
  }
  return true;
};

switch (program.action) {
  case "reverse":
    reverse();
    break;
  case "transform":
    transform();
    break;
  case "outputFile":
    if (!isArgumentValid(program.file, "file")) break;
    outputFile(program.file);
    break;
  case "convertFromFile":
    if (!isArgumentValid(program.file, "file")) break;
    transformFile(program.file, "stdout");
    break;
  case "convertToFile":
    if (!isArgumentValid(program.file, "file")) break;
    transformFile(program.file, "toFile");
    break;
  case "cssBundler":
    if (!isArgumentValid(program.path, "path")) break;
    bundleCSS(program.path);
    break;
  default:
    console.warn(
      "\nYou have passed an invalid action. Please pass one of the actions listed below "
    );
    program.outputHelp();
}
