$(document).ready(function(){
	$.getJSON("./data/allstates.json", function(data){
		for (var i = 0; i < data.length; i++) {
		 //console.log(data[i].item_name_edited);
		// var google = "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=" + data[i].item_name_edited+'&imgsz=large';
		// $.getJSON(google, function(image){
		// 	console.log(image);
		// }) 
		 //make a div
		 
		  var thisDiv = document.createElement('div');
		  thisDiv.ID = data[i].NSN;
		  thisDiv.className = "col-md-12";

		  var objID = document.createElement('h3');
		  objID.innerHTML = data[i].item_name_edited + ' ('+data[i].quantity+')';

		  var agency = document.createElement('p');
		  agency.innerHTML = data[i].agency_name +", "+data[i].state+", "+data[i].year;
		  
		  
		  $(thisDiv).append(objID);
		  $(thisDiv).append(agency);
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

