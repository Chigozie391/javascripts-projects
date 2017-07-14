//this code has IE8 support

function getTarget(e){
	if (!e) {
		e = window.event;
	}
	return e.target || e.srcElement;
}

function itemDone(e) {
	//remove item from list
	var target, elParent, elGrandparent;
	target = getTarget(e);
/*
  The book used the following code - but it had two shortcomings
  - Clicking between list items would remove the whole list
  - Clicking on italic text would remove the link - not the list item

  elParent = target.parentNode;//li
  elGrandparent = target.parentNode.parentNode; //ul
  elGrandparent.removeChild(elParent);

  The next 10 lines improve that example
  */

  if ( target.nodeName.toLowerCase() == "a" ){ //if the user clicks a element
  	elParent = target.parentNode; //li
  	elGrandparent = elParent.parentNode; //ul
  	elGrandparent.removeChild(elParent);
  }
  if ( target.nodeName.toLowerCase() == "em"){
  	elParent = target.parentNode.parentNode; //li
  	elGrandparent = elParent.parentNode; //ul
  	elGrandparent.removeChild(elParent);
  }

//prevent the link from taking elsewhere
if(e.preventDefault){
	e.preventDefault();
}else{
	e.returnValue = false;
 }
}

var el = document.getElementById('shoppingList');
if(el.addEventListener){
	el.addEventListener('click', function(e){
		itemDone(e);
	}, false);
}else {
	el.attachEvent('onclick', function(e){
		itemDone(e);
	});
}