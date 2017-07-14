
var username, noteName, textEntered, target;

noteName = document.getElementById('noteName');
noteInput = document.getElementById('noteInput');

function writeLabel(e){
	textEntered = e.target.value;
	noteName.textContent = textEntered;
}



function recorderControl(e) {
	e.preventDefault();
	target = e.target;

switch(target.getAttribute('data-state')){
	case 'record':
	  record(target);
	  break;
	case 'stop':
	  stop(target);
	  break;
      //more botttn could go here
     }
}



function record(target){
	target.setAttribute('data-state', 'stop');
	target.textContent = 'stop';
}

function stop(target){
	target.setAttribute('data-state', 'record');
	target.textContent = 'record';
}



document.addEventListener('click', function(e){ //call recor..function on any click
	recorderControl(e);
}, false);
noteInput.addEventListener('input', writeLabel, false); // call writeLabel if input event fires

