/**
 * Created by elgato on 07.09.14.
 */
var http = require('http');
var serverIp = "192.168.1.100";
var serverPort = 8888;
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<!doctype html>\n<html lang="en">\n' +
        '<head>\n<meta charset="utf-8">\n<title>Test web page on node.js</title>\n' +
        '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
        '</head>\n<body>\n<h1>Euro 2012 teams</h1>\n' +
        '<div id="content"><p>The teams in Group D for Euro 2012 are:</p><ul><li>England</li><li>France</li><li>Sweden</li><li>Ukraine</li></ul></div>' +
        '\n</body>\n</html>');
    res.end();
}).listen(serverPort, serverIp);
console.log('Server now running at http://' + serverIp + ':' + serverPort);

var wordslib = require('./wordslib.js');
var words = wordslib.getWords();

for (var i= 0; i<words.length; i++){
    currentWord = words[i];
    console.log (currentWord.formZero + ", " + currentWord.formOne + ", " +currentWord.formTwo + ", " +currentWord.formThree + ", " +currentWord.formFour + ", " + currentWord.formFive);
}

console.log("fin");