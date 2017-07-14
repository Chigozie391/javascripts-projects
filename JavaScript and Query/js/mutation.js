
var newEl,newText,elList,addremovelink;

addremovelink = document.querySelectorAll('a');
elList=document.getElementById('list');
counter= document.getElementById('counter');

function additem(event){
	event.preventDefault();
	newEl = document.createElement('li');
	newText = document.createTextNode('New List Item');
	newEl.appendChild(newText);
	elList.appendChild(newEl);
}
function updateCount(){
	listitems = list.getElementsByTagName('li').length; //list and elList is the same
	counter.innerHTML = listitems;
}
function removeItem(event){
	event.preventDefault();
	elList.removeChild(elList.lastChild);
}


addremovelink[0].addEventListener('click', additem, false);
addremovelink[1].addEventListener('click', removeItem, false);

//this mutation observer from stackoverflow
var listObserver = new MutationObserver(updateCount);
listObserver.observe(elList, {attributes:true, childList: true, characterData:true});
