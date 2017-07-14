
/*
var elements = document.getElementsByClassName('hot');
if (elements.length > 2) {
	var el = elements[2];
	el.className = 'cool';
};

*/

/*
var ele = document.querySelector('li.hot');
ele.className = 'cool';

var qel = document.querySelectorAll('li.hot');
qel[1].className = 'cool';
*/

//remeber to clear the white space in the html
/*
var startItem = document.getElementById('two');
var nextItem = startItem.nextSibling;
var prevItem = startItem.previousSibling;
nextItem.className = 'cool';
prevItem.className = 'complete';
*/

/*
//updating a text node
var itemtwo = document.getElementById('two');
elText = itemtwo.firstChild.nodeValue;
elUp = elText.replace('pine nuts', 'oranges');
itemtwo.firstChild.nodeValue = elUp; //updates the text
*/

// updating the text/link using inner HTML
var firstItem = document.getElementById('one');
var itemContent = firstItem.innerHTML;
firstItem.innerHTML = '<a href = \"http://example.org\">' + itemContent + '</a>';

//adding new node and upadting the text with DOm manipulation
var newEl = document.createElement('li');
var newText = document.createTextNode('BlueBerry');
newEl.appendChild(newText);
newEl.className = 'cool'
var position = document.getElementsByTagName('ul')[0];
position.appendChild(newEl);

//checking atrribute and gets its value

if (firstItem.hasAttribute('class')) {
	var attr = firstItem.getAttribute('class');

var newP = document.getElementById('scriptResults');
newP.innerHTML = '<p> the first item has a class name ' + attr + '</p>'; 
}