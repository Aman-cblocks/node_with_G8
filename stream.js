const fs = require("fs")

const writeStream = fs.createWriteStream("newStream.txt")
const data = fs.createReadStream("data.txt",{
   encoding:"utf-8",
    // highWaterMark:3
})

// data.on("data",(chunks)=>{
//     // console.log(chunks)
//     writeStream.write(chunks)
// })
data.pipe(writeStream)
data.on("end",()=>{
    console.log("finished")
})