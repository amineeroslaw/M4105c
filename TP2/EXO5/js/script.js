/*o*-----------------------*o*/
/*Géolocalisation Google Maps*/
/*o*-----------------------*o*/

	var previousPosition = null;
   
    function initialize() {
      map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: new google.maps.LatLng(48.858565, 2.347198),
            mapTypeId: google.maps.MapTypeId.ROADMAP
          });   
    }
       
    if (navigator.geolocation)
      var watchId = navigator.geolocation.watchPosition(successCallback, null, {enableHighAccuracy:true});
    else
      alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");
       
    function successCallback(position){
      map.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude), 
        map: map
      });  
      if (previousPosition){
        var newLineCoordinates = [
           new google.maps.LatLng(previousPosition.coords.latitude, previousPosition.coords.longitude),
           new google.maps.LatLng(position.coords.latitude, position.coords.longitude)];
         
        var newLine = new google.maps.Polyline({
          path: newLineCoordinates,        
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        newLine.setMap(map);
      }
      previousPosition = position;
    };

$(document).ready(function(){

		$("#burger").click(function(e) {
			e.stopPropagation();
			if($("#humburger").hasClass("inactive")) {				
				$("#humburger").removeClass("inactive");
				$("#humburger").addClass("active");
			}
			else if($("#humburger").hasClass("active")){
				$("#humburger").removeClass("active");
				$("#humburger").addClass("inactive");
			}
			if($("#burger").hasClass("imgburger")){				
				$("#burger").removeClass("imgburger");
				$("#burger").addClass("imgdelburger");
			}
			else if($("#burger").hasClass("imgdelburger")){
				$("#burger").removeClass("imgdelburger");
				$("#burger").addClass("imgburger");
			}
		});

		$("section").click(function(e) {
			if($("#humburger").hasClass("active")){
				$("#humburger").removeClass("active");
				$("#humburger").addClass("inactive");
			}			
			if($("#burger").hasClass("imgdelburger")){
				$("#burger").removeClass("imgdelburger");
				$("#burger").addClass("imgburger");
			}
		});

	});
