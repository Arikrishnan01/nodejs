const fs = require('fs');
const process = require('process');
const data="Worry less, Live more";
var number=10;
var [,number]=process.argv;
for(var i=1;i<=number;i++){
    fs.writeFile(`./backup/task-${i}.html`,data,(err)=>{
        console.log("file");
    })
}

// const task=