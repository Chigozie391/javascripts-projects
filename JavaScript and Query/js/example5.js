//ADDING AN ELEMENT TO START AND END OF LIST
var list = document.getElementsByTagName('ul')[0];
//END
var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);
//START
var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('kale');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);


//ADDING CLASS NAME TO THE LI ELEMENT
listItem = document.getElementsByTagName('li');
for (var i = 0; i < listItem.length;i++){
   listItem[i].className = 'cool';
}
/*
var heading = document.querySelector('h2');
var headText = heading.textContent;
var totalItem = listItem.length;
var newHead = headText + '<span>' + totalItem + '</span>';
heading.innerHTML = newHead;
*/
var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItem = listItem.length;
var newHeading = headingText + '<span>' + totalItem + '</span>';
heading.innerHTML = newHeading;