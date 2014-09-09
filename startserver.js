/**
 * Created by elgato on 07.09.14.
 */
function CreateBasicServer (){
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<!doctype html>\n<html lang="en">\n' +
            '<head>\n<meta charset="utf-8">\n<title>Test web page on node.js</title>\n' +
            '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
            '</head>\n<body>\n<h1>Euro 2012 teams</h1>\n' +
            '<div id="content"><p>The teams in Group D for Euro 2012 are:</p><ul><li>England</li><li>France</li><li>Sweden</li><li>Ukraine</li></ul></div>' +
            '<div id="currentWord">Current Form</div>' +
            '<div id="wordsForm"><input id="formZero"><input id="formOne"><input id="formTwo"><input id="formThree"><input id="formFour"><input id="formFive"></div>' +
            '\n</body>\n</html>');
        res.end();
    }).listen(serverPort, serverIp);
    console.log('Server now running at http://' + serverIp + ':' + serverPort);
}

function CreateHtmlServer(){
    var server = http.createServer(function(req, res) {
        console.log("Request: " + req.url);
        if(req.url == "/words") {
            fs.readFile("words.html", function(err, text){
                res.setHeader("Content-Type", "text/html");
                res.end(text);
            });
            return;
        }
        res.setHeader("Content-Type", "text/html");
        res.end('<p>Hello World.</p>\n' + '<a href="/words">Verbs</a>');
    });
    server.listen(serverPort, serverIp);
    console.log('Server now running at http://' + serverIp + ':' + serverPort);
}

function CreateMultiServer (){
    http.createServer( function(req, res) {
        var now = new Date();
        var filename = req.url || "index.html";
        console.log("filename:" + filename + "; url:" + req.uri );
        var ext = path.extname(filename);
        var localPath = __dirname;
        var validExtensions = {
            ".html" : "text/html",
            ".js": "application/javascript",
            ".css": "text/css",
            ".txt": "text/plain",
            ".jpg": "image/jpeg",
            ".gif": "image/gif",
            ".png": "image/png"
        };
        var isValidExt = validExtensions[ext];

        if (isValidExt) {

            localPath += filename;
            path.exists(localPath, function(exists) {
                if(exists) {
                    console.log("Serving file: " + localPath);
                    getFile(localPath, res, ext);
                } else {
                    console.log("File not found: " + localPath);
                    res.writeHead(404);
                    res.end();
                }
            });

        } else {
            console.log("Invalid file extension detected: " + ext)
        }

    }).listen(serverPort, serverIp);
    console.log('Server now running at http://' + serverIp + ':' + serverPort);
}

function getFile(localPath, res, mimeType) {
    fs.readFile(localPath, function(err, contents) {
        if(!err) {
            res.setHeader("Content-Length", contents.length);
            res.setHeader("Content-Type", mimeType);
            res.statusCode = 200;
            res.end(contents);
        } else {
            res.writeHead(500);
            res.end();
        }
    });
}

var http = require('http');
var fs = require('fs');
var path = require('path');
var serverIp = "192.168.1.100";
var serverPort = 8888;

//CreateBasicServer();
//CreateHtmlServer();
CreateMultiServer();

var wordslib = require('./wordslib.js');
var words = wordslib.getWords();

for (var i= 0; i<words.length; i++){
    currentWord = words[i];
    //console.log (currentWord.formZero + ", " + currentWord.formOne + ", " +currentWord.formTwo + ", " +currentWord.formThree + ", " +currentWord.formFour + ", " + currentWord.formFive);
}

//console.log("fin");