/////////////////////////////////////////////////////// AJAX REQUEST ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$.ajax({
	/// Make AJAX request to get 12 employee profiles in json format
 	url: 'https://randomuser.me/api/?results=12',
  	dataType: 'json',

	success: function(data) {

  		let users = data.results;

/////////////////////////// RANDOM EMPLOYEE INFORMATION TO BE DISPLAYED EACH TIME PAGE REFRESHES ///////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  		// Open ul tag
  		var cards = `<ul id="users" style="list-style: none;">
  					<div id="header">
  						<h2>AWESOME STARTUP EMPLOYEE DIRECTORY</h2>
  						<input id="searchBar" type="text" class="form-control col-md-2" name="searchBox" placeholder="Filter by name or username...">
  					</div>`;
  		var i = 0;

  		// Iterate over all employee profiles 
  		$.each(users, function( index, value ) {
  		 	
  		 	//and build cards displaying correct information for each of them stored in individual list items
	  		cards  +=  `<li class="card" id="${i++}">
	  		 			<img class ="image" src="${users[index].picture.large}"> 
	  		 			 <div class="info">
			  		 		<p class= "fullName propper-noun"><i>${users[index].name.first} ${users[index].name.last}</i></p>
			  		 		<p ><i>${users[index].login.username}</i></p>
		  		 			<p class="propper-noun">${users[index].location.city}, ${users[index].nat}</p>
		  		 		 </div>
		  		 	    </li>`;	
  		});

  		//Close ul tag
  		cards += "</ul>";
  		//and dynamically add HTML to document 
    	$("#profiles").html(cards);

///////////////////////////////////////////////// MODAL WINDOW AND OVERLAY /////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		//Build and append overlay to dim screen when modal is displayed (hidden by default using css)
		var overlay = $('<div id="overlay">');
		$("body").append(overlay)

		 //Function to run when employee card is clicked
		 $('.card').on("click", function (e) {
		 	//Parse card's id attribute from string to number
		 	var thisCard =  parseInt($(this).attr('id'));
 	
		 	//Function to build modal 
		 	function updateModal(cardToShow) {
		 	$("#modal").html(`<div class="modal-image">
	  		 			 			<img src="${users[cardToShow].picture.large}"> 
	  		 			 	  </div>
	  		 			 	  <div class = "modal-info">
			 					  <p class="propper-noun fullName">${users[cardToShow].name.first}  ${users[cardToShow].name.last}</p>
			 					  <p>${users[cardToShow].email}</p>
			 					  <p class="propper-noun">${users[cardToShow].location.city}</p>
			 					  <hr>
			 					  <p>${users[cardToShow].phone}</p>
			 					  <div id="address">
				 						<p class="propper-noun">${users[cardToShow].location.street}</p>
				 						<p class="propper-noun">${users[cardToShow].location.city}</p>
				 						<p class="propper-noun">${users[cardToShow].location.state}</p> 
				 						<p>${users[cardToShow].location.postcode}</p>		 						
				 				  </div>
				 				  <p>Birthday: ${users[cardToShow].dob}</p>
				 				  <div id="arrows">
					 				  <a href="#" class="fa prev" id="prev" >&#xf060;</a>&nbsp&nbsp&nbsp<a href="#"  class="fa next" id="next">&#xf061;</a>	
					 			  </div>	  
		 					  </div>`);
			}
			 // Run updateModel function to build modal (correct index value taken from clicked card's id attribute)
			 updateModal(thisCard);
			 // Display modal
			 $("#modal").slideDown();
			 // Display overlay
			 overlay.show();

/////////////////////////////////////////////////////// BROWSE MODALS //////////////////////////////////////////////////////
////////////// Functionality to switch back and forth between employees when the detail modal window is open  ////////////// 

			// Attach a delegated event handler (http://learn.jquery.com/events/event-delegation/)
			// When 'next' button is clicked
			$("#modal").on('click', '#next', function () {
				// As long as modal shown ISN'T 12/12
				if  (thisCard !== users.length-1) {
					// Add 1 to index value
					thisCard ++;
					updateModal(thisCard);	
				// If modal shown IS 12/12		
				} else {
					// Reset index value to 0
					thisCard = 0;
					// Update Modal to show correct information
					updateModal(thisCard);			 
				}	
			});

			// As above
			$("#modal").on('click', '#prev', function () {  
				if (thisCard !== 0)	{	
					thisCard --;
					updateModal(thisCard);	
				} else {
					thisCard = users.length-1;
					updateModal(thisCard)
				}							 
			}); 	


			//Same functionality for when left and right keys are pressed
		 	$(document).keyup(function(e) {
		 		if (e.keyCode == 39) { 
					if  (thisCard !== users.length-1) {
						thisCard ++;
						updateModal(thisCard);	
					} else {0
						thisCard = 0;
						updateModal(thisCard);			 
					}	
				}	
			});

			$(document).keyup(function(e) {  
				if (e.keyCode == 37) { 
					if (thisCard !== 0)	{	
						thisCard --;
						updateModal(thisCard);	
					} else {
						thisCard = users.length-1;
						updateModal(thisCard)
					}
				}							 
			}); 
		 });	
		

//////////////////////////////////////////////////////// EXIT MODAL ////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

		// When overlay is clicked
		overlay.click(function(){
			// Hide the overlay
			overlay.hide();
			// Hide the modal
			$("#modal").hide();
		});

		// When Escape key is pressed
		$(document).keyup(function(e) {
	    	 if (e.keyCode == 27) { 
		     	// Hide the overlay
		     	overlay.hide();
				// Hide the modal
				$("#modal").hide();
    		}
		});

//////////////////////////////////////////////////////// SEARCH BAR ////////////////////////////////////////////////////////
//////////////////////////////////////  Employees can be filtered by name or username  /////////////////////////////////////

		var search = function() {

			// Declare variables
		   var filter = $('#searchBar').val().toLowerCase();
		   var li = $("#profiles li");

		   // Loop through all list items, and hide those who don't match the search query
		    for (i = 0; i < li.length; i++) {
		        var seachItemsName = li[i].getElementsByTagName("i")[0];
		        var seachItemsUser = li[i].getElementsByTagName("i")[1];
		        if ((seachItemsName.innerHTML.toLowerCase().indexOf(filter) > -1) || (seachItemsUser.innerHTML.toLowerCase().indexOf(filter) > -1)) {
		            li[i].style.display = "";
		        } else {
		            li[i].style.display = "none";
		        }
		    }
		}

		// Run search function on keyup of search bar input
		$('#searchBar').on('keyup', search);

  	}	
});
