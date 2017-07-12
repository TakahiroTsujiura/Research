var directionsDisplay;
var directionsService;
var map;
 
var center = new google.maps.LatLng(35.681382, 139.766084);
var gc = new google.maps.Geocoder();
 
function initialize() {
  var mapOptions = {
    zoom: 14,
    center: center,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
   
  directionsDisplay = new google.maps.DirectionsRenderer();
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('directionsPanel'));
}

 

function onOKButtonClick() {
    address_str = document.forms.id_form1.s.value;
    url_str = document.forms.id_form1.m.value;
	gc.geocode({ address : address_str }, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);

			var pos = map.getCenter();
			var lat = pos.lat();
			var lng = pos.lng();
			
			// マーカーを立てる
			marker = new google.maps.Marker({
				position: new google.maps.LatLng(lat, lng),
				map: map
			});
			
			marker.setPosition(new google.maps.LatLng(lat, lng));

		} else {
			alert("情報の取得に失敗しました");
		}
	});
	var div_element = document.createElement("div");
        
    /*div_element.innerHTML = '<hr><input type="radio" name="radio" value="サンプル">スカイツリー<a href= "url_str" target="_blank" id="favURL">URL</a><br>';*/
    div_element.innerHTML = '<hr><input type="radio" name="radio" value="サンプル"><input type="text" name="example" id="name" size="40" value= ""><div><a href= "url_str" target="_blank" id="favURL"><div id="url"><div></a><br>';
        
    var parent_object = document.getElementById("piyo");
    parent_object.appendChild(div_element);
    
    //URLを動的に変化
    var testTarget = document.getElementById('favURL');
    testTarget.href = url_str;
    testTarget.innerText = url_str;
    var testTarget = document.getElementById('name');
    testTarget.value = address_str;
    
    //var div_element = document.createElement("div");
    
    //var nameid = document.getElementById("name");
    //var urlid = document.getElementById("url");
    //var nametext = document.createTextNode(address_str);
    //var urltext = document.createTextNode(url_str);*/
    //nameid.appendChild(address_str);
    //urlid.appendChild(address_str);

    
 
 
}
        


 
google.maps.event.addDomListener(window, 'load', function() {
  initialize();
  //calcRoute();
});

