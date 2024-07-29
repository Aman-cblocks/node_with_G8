const fs = require("fs/promises")


// async function readFun(){
//   try{
//   const file = await fs.readFile("./demo.tx","utf-8")
//    console.log(file)
//   }catch(err){
//     console.log(err.message)
//   }
// }
// readFun()

// async function writeFun(){
//   try{
//     await fs.writeFile("doc.txt","I am coding node js")
//   }catch(err){
//     console.log(err)
//   }
// }
// writeFun()

// async function copy(){
//   try{
//     const file = await fs.readFile("./demo.txt","utf-8")
//     await fs.writeFile("./doc.txt",file)
//   }
//   catch(err){
//     console.log(err)
//   }
// }
// copy()

// async function copyingFile(){
//   try{
//     await fs.copyFile("./demo.txt","./doc.txt")
//   }catch(err){
//    console.log(err)
//   }

// }

// copyingFile()

async function deleteFile(){
  try{
  await fs.unlink("./doc.txt")
  }catch(err){
    console.log(err)
  }
}
// deleteFile()

async function rename(){
  try{
    await fs.rename("demo.txt","renamed.txt")
  }catch(err){
    console.log(err)
  }
}
// rename()

async function stat(){
 try{
   const result = await fs.stat("renamed.txt")
   console.log(result.isFile())
 }catch(err){
  console.log(err)
 }
}

// stat()

// how to watch a file
async function watch(){
  try{
  const result = fs.watch("renamed.txt")
  for await (let event of result){
   console.log(event)
  }
  }catch(err){
    console.log(err)
  }
}
// watch()

// Directories

async function makeDir(){
  try{
    await fs.mkdir("newDir")
    await fs.writeFile("newDir/a.txt","new File")
  }catch(err){
    console.log(err)
  }
}
// makeDir()

async function readDir(){
  try{
   const data = await fs.readdir("newDir")
   console.log(data)
  }catch(err){
    console.log(err)
  }
}
// readDir()
async function deleteDir(){
try{
  const files = await fs.readdir("newDir")
  for(let file of files){
    await fs.unlink(`newDir/${file}`)
  }
  await fs.rmdir("newDir")
}catch(err){
  console.log(err)
}
}
// deleteDir()

async function copyDir(){
 try{
  await fs.mkdir("copyDir")
  const files = await fs.readdir("newDir")
  for(let file of files){
   await fs.copyFile(`newDir/${file}`,`copyDir/${file}`)
  }
 }catch(err){
 console.log(err)
 }
}
copyDir()

