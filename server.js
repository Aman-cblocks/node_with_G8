const http = require("http")
const fs = require("fs")
const qs = require("querystring")
const ts = require("fs/promises")


const server = http.createServer(async(request, response) => {
    // const person = {
    //     name:"jack",
    //     age:25,
    //     city:"Delhi"
    // }
    // console.log(JSON.stringify(person))
    //  response.end(<h1>hello world</h1>)
    const { url, method } = request;
    console.log(request.url)
    const log = `${Date.now()} from ${url} \n`
     await ts.writeFile("logger.txt",log,{flag:"a"})
    if (url == "/") {
        response.writeHead(200, { "Content-Type": "text/html" });
        const data = fs.createReadStream("./index.html")
        data.pipe(response)
    }
    else if (url == "/newurl") {
        response.writeHead(200, { "Content-Type": "text/html" });
        const data = fs.createReadStream("./newFile.html")
        data.pipe(response)
    }
    else if (url == "/style.css") {
        response.writeHead(200, { "Content-Type": "text/css" });
        const data = fs.createReadStream("./style.css")
        data.pipe(response)
    }
    else if (url == "/userRegistered" && method === "POST") {
        response.writeHead(200, { "Content-Type": "application/json" });
        let body = [];
        request
          .on('data', chunk => {
            body.push(chunk);
          })
          .on('end', async() => {
            try{
            body = Buffer.concat(body).toString();
             console.log(qs.parse(body))
             const newData = qs.parse(body);
             let redData = await ts.readFile("db.json")
             readData = JSON.parse(redData);
             readData = [...readData,newData]
             await ts.writeFile("db.json",JSON.stringify(readData))
             response.end(JSON.stringify(readData))
            }catch(err){
                console.log(err.message)
            }
            // at this point, `body` has the entire request body stored in it as a string
          });
    }
    else if (url == "/register") {
        response.writeHead(200, { "Content-Type": "text/html" });
        const data = fs.createReadStream("./registration.html")
        data.pipe(response)
    }else{
        response.writeHead(404)
        response.end("No Such page Exist")
    }
})
server.listen(4000, () => {
    console.log("server is staring on 4000 Port")
})

