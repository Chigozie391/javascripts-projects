(function(){

	var hotel = {
		name: 'Park',
		roomRate:240,
		discount:15,
		offerRate: function() {
			var offerRate = this.roomRate * ((100 - this.discount) / 100);
			return offerRate;
		}
	};
	var hotelName,roomRate,specialRate;

	hotelName = document.getElementById('hotelName');
	roomRate = document.getElementById('roomRate');
	specialRate = document.getElementById('specialRate');

	hotelName.textContent = hotel.name;
	roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
	specialRate.textContent = '$' + hotel.offerRate();


	var expiryMsg; //message displayed to users
	var today; //today's date
	var elEnds; // the element that shows when the message about the offer ending
 
	function offerExpires(today){
		var weekFromToday, day, date, month, year, dayNames, monthNames;
		//Add 7 days time (added in milliseconds)
		weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
		//array to hold the names of days/months
		dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
		monthNames = ['January', 'February', 'March', 'April', 'May','June', 'July', 'August',
		'September','October','November','December']
		//coolect the part of the date to show on the page
		day = dayNames[weekFromToday.getDay()];
		date = weekFromToday.getDate();
		month = monthNames[weekFromToday.getMonth()];
		year = weekFromToday.getFullYear();

		//create the message
		expiryMsg = 'Offer expires next ';
		expiryMsg += day + '<br />(' + date + ' ' + month + ' ' + year + ')';
		return expiryMsg;
	}

	today = new Date();
	elEnds = document.getElementById('offerEnds');
	elEnds.innerHTML = offerExpires(today);
}());