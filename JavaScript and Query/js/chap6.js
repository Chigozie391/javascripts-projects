/*
var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function checkUsername(minLength) {
	if(elUsername.value.length < minLength){
		elMsg.textContent = 'Username must be ' + minLength + ' characters or more';
	
	}else{
		elMsg.innerHTML = '';
	}
}

elUsername.addEventListener('blur', function(){ //when it loses focus
	checkUsername(5);                          //pass arguement
}, false);
*/

/*using the event listeer is bettter because it can check
the length of any text as long as it that input is directly followed
an empty element
*/ 
function checkLength(e, minLength){
	var el, elMsg;
	el = e.target //gets the target event which is the username
	elMsg = el.nextSibling; //gets its nextsibling

	if(el.value.length < minLength){
		elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';

	}else{
		elMsg.innerHTML = '';
	}
}
var elUsername = document.getElementById('username');
elUsername.addEventListener('blur', function(e){
	checkLength(e, 5);
},false);