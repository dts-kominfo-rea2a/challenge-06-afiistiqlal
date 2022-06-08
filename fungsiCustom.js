// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const fnCallback = (err, data) => {
  if (err) {
    return console.log(err);
  }
  return data;
}

const files = [file1, file2, file3];
const bacaData = (fnCallback) => {
  let dataFile = "";
  const hasil = [];
  files.forEach(element => {
    fs.readFile(element, 'utf8', (err, data) => {
      if (err) {
        return(fnCallback("Error! Something goes wrong!", null));
      }

      data = JSON.parse(data);
      if (element == file1) {
        dataFile = data.message;
      }
      if (element == file2) {
        dataFile = data[0].message;
      }
      if (element == file3) {
        dataFile = data[0].data.message;
      }
      const arrHasil = dataFile.split(" ");
      hasil.push(arrHasil[1]);
      return hasil;
    });
  });
  fnCallback(null, hasil);
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
