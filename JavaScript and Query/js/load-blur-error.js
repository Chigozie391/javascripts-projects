//load event
function setup() {
	var textInput;
	textInput = document.getElementById('username');
	textInput.focus();
}
window.addEventListener('load', setup, false);
//focus and blur event
function checkUsername(){
	if (el.value.length == 0){
		elMsg.textContent = '';
	}else if(el.value.length < 5 ){
		elMsg.className = 'warning';
		elMsg.textContent = 'Not long enough, yet....';
	}else{
		elMsg.textContent = '';
	}
}
function tipUsername(){
	elMsg.className = 'tip';
	elMsg.innerHTML = 'Username must be 5 or more characters';
}

var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');

el.addEventListener('focus', tipUsername, false);
el.addEventListener('blur', checkUsername, false);