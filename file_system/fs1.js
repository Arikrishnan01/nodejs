// const fs =require("fs");

const fs = require("fs");
const data="Live more, worry less";
fs.writeFile("./backup/text_1.html",data,(err)=>{
    console.log("File created");
})


// const data="Live more, worry less";
// fs.writeFile("./Text_1.html",data,(err)=>{
//     console.log("File created.");
// })

// const fs = require("fs");
// const data=new Date();
// // console.log(data)
// fs.writeFile("./file_system/")