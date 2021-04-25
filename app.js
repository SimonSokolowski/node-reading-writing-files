var fs = require("fs");
//
// sync file reading/writing
//
// var readMe = fs.readFileSync("readMe.txt", "utf-8");
// console.log(readMe);
//
// fs.writeFileSync("writeMe.txt", readMe);
//

//
// a-sync file reading/writing
//
fs.readFile("readMe.txt", "utf8", function(err, data){
    fs.writeFile("writeMe.txt", data);
});