var directionsDisplay;
var directionsService;
var map;
 
var center = new google.maps.LatLng(35.681382, 139.766084);
var start = '日本, 〒100-0005 東京都千代田区丸の内1 丁目９ 呑んき１丸の内北口店 東京駅';
var end = '日本, 〒108-0074 東京都港区高輪３丁目２６ 品川駅';
 
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

 
/*function calcRoute() {
  var request = {
    origin: {lat: 35.681298, lng:139.76405827}, //start
    destination: {lat: 35.6284713, lng:139.736571}, //end
    travelMode: google.maps.TravelMode.DRIVING, //
    avoidHighways: true,
  };
  directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      alert('ルートが見つかりませんでした…');
    }
  });
}*/

function favoritePage() {
    window.open('favorite.html', '_blank');
}



function onButtonClick() {
    //mode = google.maps.TravelMode.TRAIN,;
    //移動方法の変更
    //var mode;
    
    //$(function(){ //セレクトボックスでの透明度の変更
      /*$('.ChangeSelect').bind('change',function() {
                              if($('.ChangeSelect').val() === '1'){
                              mode = google.maps.DirectionsTravelMode.DRIVING;
                              
                              }else if($('.ChangeSelect').val() === '2'){
                              mode = google.maps.DirectionsTravelMode.DRIVING;
                              
                              }else if($('.ChangeSelect').val() === '3'){
                              mode = google.maps.DirectionsTravelMode.DRIVING;
                              
                              }else if($('.ChangeSelect').val() === '4'){
                              mode = google.maps.DirectionsTravelMode.WALKING;
                              
                              }
                              });*/
      //});
    
    /*switch($("#mode").val()){
        case "driving":
            mode = google.maps.DirectionsTravelMode.DRIVING;
            break;
        case "bicycling":
            mode = google.maps.DirectionsTravelMode.BICYCLING;
            break;
        case "transit":
            mode = google.maps.DirectionsTravelMode.TRANSIT;
            break;
        case "walking":
            mode = google.maps.DirectionsTravelMode.WALKING;
            break;
    }*/
    
    
          target = document.getElementById("directionsPanel");
    
            var request = {
    			origin: document.forms.id_form1.s.value,
    			destination: document.forms.id_form1.m.value,
    			travelMode: google.maps.TravelMode.WALKING,//DRIVING
    			avoidHighways: true,
    			alternatives: true,
  			};
  			directionsService = new google.maps.DirectionsService();
  			directionsService.route(request, function(response, status) {
  			  if (status == google.maps.DirectionsStatus.OK) {directionsDisplay.setDirections(response);
    } else {
      alert('ルートが見つかりませんでした…');
    }
  });

        }
        
function addElement() { 
        var div_element = document.createElement("div");
        /*div_element.innerHTML = '出発地<br><input type="text" id="s" name="example" size="50" value=""> <br>目的地<br><input type="text" id="m" name="example" size="50" value=""> <br><p><input type="button" value="OK" onclick="onButtonClick();"><input type="button" value="追加" onclick="addElement();">';*/
        
        div_element.innerHTML = '<form name="form1" id="id_form1" action=""><p>出発地<br><input type="text" name="example" id="s" size="50" value=""></p><div id="directionsPanel"></div><p>目的地<br><input type="text" name="example" id="m" size="50" value=""></p><p><input type="button" value="OK" onclick="onButtonClick();"/><input type="button" value="追加" onclick="addElement();"><p></form>';
        
    var parent_object = document.getElementById("piyo");
    parent_object.appendChild(div_element);


} 


 
google.maps.event.addDomListener(window, 'load', function() {
  initialize();
  //calcRoute();
});

