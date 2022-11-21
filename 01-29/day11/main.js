const http = require('http');
const URL = require('url')


const server = http.createServer(function(req,res){

    const myUrl = 'https://ostad.app/dashboard/my-courses/63202ce744c5e613ea5c96cb/videos'
    const myUrlObj = URL.parse(myUrl,true)

    const hostname = myUrlObj.host;
    const hostSearch = myUrlObj.search;
    const hostPath = myUrlObj.pathname;

    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(hostname);
    res.end();

})



server.listen(4050)

console.log('runing')
