const http = require('http');
const moment = require('moment');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        let msg = {code:201, msg:'Esta pagina es HOME'}
        res.end(JSON.stringify(msg, null, 2));
    } else if(req.url == '/coders') {
        let fecha = new Date().getHours()
        let fecha2 = moment(new Date(),"DD/MM/YYYY HH:mm:ss");
        let msg = {code:201, msg:'Hola Coders al mundo de los servicios web Node.js!', fecha, fecha2}

        res.end(JSON.stringify(msg, null, 2));
    }

});

const connectedServer = server.listen(8080, ()=>{
    console.log(`Servidor escucha un puerto ${connectedServer.address().port}`)
});