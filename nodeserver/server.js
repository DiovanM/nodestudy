var mysql = require('mysql');
var express = require('express');
var app = express();

var connection = mysql.createConnection({
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

app.get('/:table', function(req,resp){
    var table = req.params.table;
    connection.query("SELECT * FROM " + table + " ORDER BY score LIMIT 10",
     function(error, result, fields){
        if(!!error){
            console.log('Error doing query');
        }else {
            console.log('Query made in table ' + table);
           var objToJson = {};
           objToJson.resp = result;
          json = JSON.stringify(objToJson);
          resp.end(json);
        }
    } );
})

app.get('/:table/:nome/:score', function(req, resp){

    var table = req.params.table;
    var nome = req.params.nome;
    var score = req.params.score;

    connection.query("INSERT INTO " + table + " VALUES ('"+ nome +"',"+ score +")" ,
     function(error, result, fields){
        if(!!error){
            console.log('Table update Error');
        }else {
           
            console.log('Table '+ table +' updated with the following data: ' + nome + ' ' + score);
            resp.end();
        }
    } );
})

app.listen(1337);