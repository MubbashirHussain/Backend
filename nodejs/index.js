console.log("helow world")
const fs = require("fs")
const http = require("http")

let data = fs.readFileSync('data.json', 'utf-8')

const server = http.createServer((req, res) => {
    console.log(req.url)
    console.log(req.method)
    if (req.method == "GET") {
        switch (req.url) {
            case "/": res.setHeader("Content-Type", "text/html"), res.end("<h1>Your APi is Runing</h1>")
                break;
            case "/products": res.setHeader("Content-Type", "application/json"), res.end(data)
                break;
            default: res.setHeader("Content-Type", "text/html"), res.end("<h1>There Is somthing Wrong</h1>")
        }
    } else {
        res.setHeader("Content-Type", "text/html")
        res.end("<h1>Please Make only GET req</h1>")
    }
})
server.listen(8080,()=>{console.log("server is runing")})
