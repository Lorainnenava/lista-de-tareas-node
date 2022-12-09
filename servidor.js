const http= require('http');
const host='localhost';
const port= 8000;
const json= require('./data.json');

    const requestListener = function(req, res){
        const url= new URL(req.url, `https://${host}:${port}`)
        console.log(url)
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(json));
    } 


const servidor= http.createServer(requestListener);
servidor.listen(port, host,()=>{
    console.log(`listening on port http://${host}:${port}`)
})
module.exports = servidor;