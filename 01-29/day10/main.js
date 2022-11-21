
var http = require('http');
var URL = require('url');

var server = http.createServer(function(req,res){

    var myUrl = 'http://rabbil.com/blog.html?year=2022&month=octobor';
    var myUrlObj =  URL.parse(myUrl,true)

    var myHostName = myUrlObj.host ;
    var myPathName = myUrlObj.pathname ;
    var mySearchName = myUrlObj.search ;

    console.log(myHostName)



   res.writeHead(200,{"Content-Type":'text/html'})
   res.write(mySearchName)
   res.end();

    
});


server.listen(5050);

console.log("server is run success");
