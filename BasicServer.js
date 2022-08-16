let http = require("http")
let fs = require("fs")
http.createServer(function(req,res){
    console.log("Request..."+req.url)
    if(req.url=="/login"){
        // res.write("login DashBoard")
        let login = fs.readFileSync("Login.html")
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(login);
    }else if(req.url=="/Home"){
        res.write("Home")
    }
    res.end();
}).listen(9090)