$(document).ready(function(){
	$('#content').jscroll({
		loadingHtml: '<small>(There are a lot of things, like 193,176 of them, so it might take a while to load. They are totaly loading though.)',
		padding: 20
	});

	$.getJSON("./data/allstates.json", function(data){
		for (var i = 0; i < data.length; i++) {
		// var google = "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=" + data[i].item_name_edited+'&imgsz=large';
		// $.getJSON(google, function(image){
		// 	console.log(image);
		// }) 
		 //make a div
		 
		  var thisDiv = document.createElement('div');
		  thisDiv.ID = data[i].NSN;
		  thisDiv.className = "col-md-3";
		  thisDiv.style.minHeight = "250px";
		  var innerdiv = document.createElement('div');
		  innerdiv.className = "innerdiv"
		  var objID = document.createElement('h3');
		  objID.innerHTML = data[i].item_name_edited + ' ('+data[i].quantity+')';

		  var agency = document.createElement('p');
		  agency.innerHTML = data[i].agency_name +", "+data[i].state+", "+data[i].year;

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

