$(function(){
var ids;
var $listitems = $('li');

$listitems.on('mouseover click', function(){
	ids = this.id;
	$listitems.children('span').remove();
	$(this).append('<span class = "priority"> ' + ids + '</span>');

	});
$listitems.on('mouseout', function(){
	$(this).children('span').remove();
});

});