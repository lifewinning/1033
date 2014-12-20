$(document).ready(function(){
	$.getJSON("./data/allstates.json", function(data){
		$('#content').jscroll({
		loadingHtml: '',
		padding: 0
		});

		function get1033(arr, count) {
		    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
		    while (i-- > min) {
		        index = Math.floor((i + 1) * Math.random());
		        temp = shuffled[index];
		        shuffled[index] = shuffled[i];
		        shuffled[i] = temp;
		    }
		    return shuffled.slice(min);
		}

		var the1033 = get1033(data, 1033);

		for (var i = 0; i < the1033.length; i++) {
		// var google = "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=" + the1033[i].item_name_edited+'&imgsz=large';
		
		// $.ajax({
		// 	type: 'POST',
		// 	url: google,
		// 	dataType: 'jsonp',
		// 	crossDomain: true,
		// 	cache:false,
		// 	success:  function (data) {
		// 		console.log(data);
		// 	}
	 //    });

		// $.getJSON(google, function(image){
		// 	console.log(image);
		// }) 
		 //make a div
		 
		  var thisDiv = document.createElement('div');
		  thisDiv.ID = the1033[i].NSN;
		  thisDiv.className = "col-md-3";
		  thisDiv.style.minHeight = "250px";
		  var innerdiv = document.createElement('div');
		  innerdiv.className = "innerdiv"
		  var objID = document.createElement('h3');
		  objID.innerHTML = the1033[i].item_name_edited + ' ('+the1033[i].quantity+')';

		  var agency = document.createElement('p');
		  agency.innerHTML = the1033[i].agency_name +", "+the1033[i].state+", "+the1033[i].year;

		  $(innerdiv).append(objID);
		  $(innerdiv).append(agency);
		  $(thisDiv).append(innerdiv);
		  $('#content').append(thisDiv);
		}
	});


});

	// 	   call image search
	//       var google = "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=" + data[i].item_name_edited+'&imgsz=large';
	//       //load image search callback
	//       $.getJSON(google, function(image){
	//       	console.log(image.responseData.cursor.moreResultsUrl);
	//       	$.each(image.responseData.results, function(e, item){
	//       		$("<img>").attr("src", item.url).appendTo(thisDiv);
	//       		//only get one result
	//       		if(e == 1){return false;}
	//       	})
	//       });
	// 	}
	// $("img").lazyload({
	//       effect : "fadeIn"
	//       // event : "scrollstop"
	//   });
	// });

