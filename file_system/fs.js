const fs =require("fs");
const data="Hey Ari";
fs.writeFile("./ari.txt",data,(err)=>{
    console.log("File created");
})