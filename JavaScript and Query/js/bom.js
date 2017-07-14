var msg = '<h2>browser window</h2><p>width: ' + window.innerWidth +'</p>';
msg += '<p> height: ' + window.innerHeight +'</p>';

msg += '<h2>history</h2><p>items: ' + window.history.length +'</p>';
msg += '<h2>Screen </h2><p> width: '+ window.screen.width + '</p>';
msg += '<p> height: ' + window.screen.height + '</p>';

msg += '<p><b>page title: </b>' + document.title + '</p>';
msg += '<p><b>page address:</b> '+ document.URL + '</p>';
msg += '<p><b>last modified:</b> ' + document.lastModified + '</p>'

var today = new Date();
var year = today.getFullYear();
var est = new Date('Apr 16, 1996 15:45:55');
var difference = today.getTime() - est.getTime();
difference = (difference/31536000000);

var el = document.getElementById('info');
el.innerHTML = msg;

var elMsg = document.getElementById('message');
elMsg.textContent = Math.floor(difference) + ' years of online travel service';
