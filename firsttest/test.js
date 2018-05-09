var mysql = require('mysql');
var express = require('express');
var app = express();

var connect = mysql.createConnection({
    host:'sql10.freemysqlhosting.net',
    user: 'sql10234556',
    password: 'esnXr5f4kI',
    database: 'sql10234556'
});

connection.connect(function(error){
    if(!!error){
        console.log('Error');
    } else {
        console.log('Connected');
    }
});

app.get('/', function(req,resp){
    connection.query("SELECT * FROM sql10234556", function(error, rows, fields){
        if(!!error){
            console.log('ero');
        }else {
            console.log('boa milhaça');
        }
    } );
})

app.listen(1337);


/*
const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.write('zapp');
        res.end();
    }

    if (req.url === '/api'){        
        var json = JSON.stringify({
            Nome: 'Roberto'
        })
        res.end(json);
    }
});

server.listen(3000);

console.log('Zap 3000');*/