var numb = 3;
var operator = 'addition';
var msg = '';
var i = 1;
var input;
input = prompt('Enter addition or multiplication');

if (input === 'addition'){
  while(i < 11){
    msg += i + ' + ' + numb + ' = ' + (i + numb) + '<br />';
    i++;
  }
}else{
  while(i < 11){
    msg += i + '*' + numb + ' = ' + (i * numb) + '<br />';
    i++;
  }
}
document.getElementById('blackboard').innerHTML = msg;
