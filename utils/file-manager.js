var fs = require('fs');

/**
 * Creates the CSV file from the result table.
 *
 * @param {Array} table
 */
function csvCreator(table) {
  let csv = "\ufeff"; //"utf" header for utf8 encoding.
  let arrRow = [];
  let arrNames = [];
  let arrData = [];
  let c = 0;

  // Loop the array of objects
  for (let row in table) {
    arrRow = [];

    c++;
    v = table[row]["dataValues"];

    for (let field in v) {
      value = v[field];

      if (typeof value === "object") { // Handling point case
        if (value !== null) {
          value = "[" + value["coordinates"] + "]";
        }
        else {
          value = "";
        }
      }

      if (c === 1) {
        arrNames.push(field);
      }

      arrRow.push(value);
    }
    arrData.push(arrRow);
  }

  for (let i = 0; i < arrNames.length; i++) {
    csv += '"' + arrNames[i] + '"' + ";";
  }

  csv = csv.substr(0, csv.length - 1); //DROPPING LAST ";".
  csv += "\r\n";

  for (let i = 0; i < arrData.length; i++) {
    for (let j = 0; j < arrData[i].length; j++) {
      csv += '"' + arrData[i][j] + '"' + ";";
    }
    csv = csv.substr(0, csv.length - 1); //DROPPING LAST ";".
    csv += "\r\n";
  }

  let date = new Date();
  let now = date.toLocaleTimeString().replace(/:/g, "-");
  console.log(now);
  let path = "file-" + now + ".csv";

  fs.writeFile(path, csv, err => {
    if (err)
      throw err;
    console.log("file saved");
  });

}

/**
 * Creates the CSV file from the result table.
 *
 * @param {Array} table
 * @param {String} path
 * @param {Bool} creation
 *    indicates if file is being created or if values are added.
 
 */
function csvFileDownload(table, path, creation) {
  
  let csv = "\ufeff"; //"utf" header for utf8 encoding.
  let arrNames = [];
  let arrRow = [];
  let arrData = [];
  let c = 0;

  // Loop the array of objects
  for (let row in table.sirene) {
    arrRow = [];

    c++;
    v = table.sirene[row];//["dataValues"];

    for (let field in v) {
      value = v[field];

      if (typeof value === "object") { // Handling point case
        if (value !== null) {
          value = "[" + value["coordinates"] + "]";
        }
        else {
          value = "";
        }
      }
      
      if (c === 1 && creation) {
        arrNames.push(field);
      }

      arrRow.push(value);
    }
    arrData.push(arrRow);
  }
  
  if (creation) {
    for (let i = 0; i < arrNames.length; i++) {
      csv += '"' + arrNames[i] + '"' + ";";
    }
    csv = csv.substr(0, csv.length - 1); //DROPPING LAST ";".
    csv += "\r\n";
  }


  for (let i = 0; i < arrData.length; i++) {
    for (let j = 0; j < arrData[i].length; j++) {
      csv += '"' + arrData[i][j] + '"' + ";";
    }
    csv = csv.substr(0, csv.length - 1); //DROPPING LAST ";".
    csv += "\r\n";
  }

  fs.appendFile(path, csv, err => {
    if (err)
      throw err;
    if(creation){
    console.log("file saved as : " + path);
  }
  else{
    console.log("data appent to file " + path);
  }
  });

}

function jsonFileCreator(json, path = '') {

  fs.writeFile(path + 'file.json', json, err => {
    if (err)
      throw err;
    console.log("file saved");
  });

  return json;
}

function jsonCreator(table) {

  let json = [];

  for (let row in table) {

    vRow = table[row]["dataValues"]; //Value of row - Object
    //console.log(vRow);
    //This part appears blury
    /*
     if (typeof vRow === "object") { // Handling point case
     if (vRow !== null) {
     vRow = "[" + value["coordinates"] + "]";
     }
     else {
     vRow = "";
     }
     }
     */

    json.push(vRow);
  }

  JSONstr = JSON.stringify(json);
  return JSONstr;
}


/**
 * Delete file after download
 * 
 * @param {type} file
 * @returns {undefined}
 */
function deleteFile(file) {
  fs.unlink(file, function (err) {
    if (err) {
      console.error(err.toString());
    }
    else {
      console.warn(file + ' deleted');
    }
  });
}


exports.csvCreator = csvCreator;
exports.csvFileDownload = csvFileDownload;
exports.jsonCreator = jsonCreator;
exports.jsonFileCreator = jsonFileCreator;
exports.deleteFile = deleteFile;