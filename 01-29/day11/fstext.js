

const fs = require('fs');
const http = require('http');

const server = http.createServer(function(req,res){
    
    // if(req.url==='/'){
    //     let mydata = fs.readFileSync('about.html');
    //     res.writeHead(200,{'Content-Type':'text/html'});
    //     res.write(mydata);
    //     res.end();
    // }


    // if(req.url === '/'){
    //     fs.readFile('index.html',function(erro,data){
    //         res.writeHead(200,{'Content-Type':'text/html'})
    //         res.write(data)
    //         res.end()
    //     })
    // }
    
    // else if(req.url =='/about'){
    //     fs.readFile('about.html',function(erro,data){
    //         res.writeHead(200,{'Content-Type':'text/html'})
    //         res.write(data)
    //         res.end()
    //     })
    // }

    if(req.url=='/'){

        // .....Async writeFile
        // fs.writeFile('demo.txt',"welcome to hello world",function(error){
        //     if(error){
        //         res.writeHead(200,{'Content-Type':'text/html'})
        //         res.write('file write fail')
        //         res.end()
        //     }else{
        //         res.writeHead(200,{'Content-Type':'text/html'})
        //         res.write('file write success')
        //     }
        // })

        // ....async file rename
        // fs.rename('demo.txt','demorename.txt',function(error){
        //     if(error){
        //         res.writeHead(200,{'Content-Type':'text/html'})
        //         res.write('file rename fail')
        //         res.end()
        //     }else{
        //         res.writeHead(200,{'Content-Type':'text/html'})
        //         res.write('file rename success')
        //     }
        // })

        //.... async file delete
        // fs.unlink('demorename.txt',function(error){
        //     if(error){
        //         res.writeHead(200,{'Content-Type':'text/html'})
        //         res.write('file delete fail')
        //         res.end()
        //     }else{
        //         res.writeHead(200,{'Content-Type':'text/html'})
        //         res.write('file delete success')
        //     }
        // })


                // .... async file exits 
        // fs.exists('demo3.txt',function(result){
        //     if(result){
        //         res.end('file ace')
        //     }else{
        //         res.end('file nai')
        //     }
        // })

        
 



        // .....Sync write file
        // let error = fs.writeFileSync('demoSync.txt',"welcome to hello world")
        //     if(error){
        //         res.writeHead(200,{'Content-Type':'text/html'})
        //         res.write('file write fail')
        //         res.end()
        //     }else{
        //         res.writeHead(200,{'Content-Type':'text/html'})
        //         res.write('file write success')
        //     }

        // sync rename
        // let error = fs.renameSync('demoSyncRename','demoSyncRenameFile.txt');
        // if(error){
        //     res.writeHead(200,{'Content-Type':'text/html'})
        //     res.write('file rename fail')
        //     res.end();
        // }else{
        //     res.writeHead(200,{'Content-Type':'text/html'})
        //     res.write('file rename success')
        // }

       // sync delete
        // let error = fs.unlinkSync('demoSyncRenameFile.txt');
        // if(error){
        //     res.writeHead(200,{'Content-Type':'text/html'})
        //     res.write('file delte fail')
        //     res.end();
        // }else{
        //     res.writeHead(200,{'Content-Type':'text/html'})
        //     res.write('file delete success')
        // }


    //    sync exits 
        // let result = fs.existsSync('demoSync.txt');
        // if(result){
        //     res.end('file exists true')
        // }else{
        //     res.end('file exists false')
        // }

    }
    
})

server.listen(4000)
console.log('server is runing ')