var map;
var info = [];
var visbility = false;
var mk3, mk4, mk5;

window.onload = function() {
  var center = new L.latLng(28.549948, 77.268241); /*WGS location object*/
  var pt1 = new L.latLng(28.549948, 77.268241); /*WGS location object*/
  var pt2 = new L.latLng(28.552232, 77.268941); /*WGS location object*/
  var pt3 = new L.latLng(28.551748, 77.269022); /*WGS location object*/
  var pt4 = new L.latLng(28.551738, 77.270164); /*WGS location object*/
  var pt5 = new L.latLng(28.548602, 77.271546); /*WGS location object*/
  var pt6 = new L.latLng(28.554603, 77.268305); /*WGS location object*/
  map = new MapmyIndia.Map('map', {
    center: center,
    zoomControl: true,
    hybrid: true,
    zoom: 17
  });
  /*
   1. Create a MapmyIndia Map by simply calling new MapmyIndia.Map() and passing it a html div id, all other parameters are optional...
   2. All leaflet mapping functions can be called simply by using "L" object.
   3. In future, MapmyIndia may extend the customised/forked Leaflet object to enhance mapping functionality for developers, 
      which will be clearly documented in the MapmyIndia API documentation section.
   */



  /***content for custom info window***/
 
    var const1 =" <div class=\"card shadow bg-white rounded\" style=\"width:18rem; height: 18rem;\">"+
        "<img src=\"one_mart.jfif\" class=\"card-img-top h-50\" alt=\"...\">"+" <div class=\"card-body d-inline\"> "+

    "<h3 class=\"d-inline\">One Mart</h3>"+
    "<div class=\"d-inline float-right\"><i class=\"fa fa-star pr-1 \" style=\"color: green;\"></i><strong>8.0</strong></div><br>"+
    "<small>Grocery store</small> &#183; <small>1.5km</small>"+
    "&#183; <small>Open now</small> <br></div> ";

  var mk1 = addMarker(pt1, '', "Marker1").addTo(map);
  var mk2 = addMarker(pt2, '', "Marker2").addTo(map);
  mk3 = addMarker(pt3, '', "Marker3").addTo(map);
  mk4 = addMarker(pt4, '', "Marker4").addTo(map);
  mk5 = addMarker(pt5, '', "Marker5").addTo(map);

  var position = mk1.getLatLng();
  /***bind popup with marker***/
  mk1.bindPopup(const1);
  mk2.bindPopup(const1);
  mk3.bindPopup(cont1);
  mk4.bindPopup(const1)
  mapmyindia_fancy_info_window();
};

function addMarker(position, icon, title) {
  /*** position must be instance of L.LatLng ***/
 
  if (icon == '') {
    /***Marker with a default icon and optional parameter draggable, title***/
    var mk = new L.Marker(position, {
      draggable: false,
      title: title
    });
  } else {
    /***Marker with a custom icon and optional parameter draggable, title***/
    var mk = new L.Marker(position, {
      icon: icon,
      draggable: false,
      title: title
    });
  }
  /*Add the marker to the map*/
  map.addLayer(mk);
  /**Marker events**/
 
  return mk;
}

function mapmyindia_show_info_window() {
  /*Bind popup with marker*/
  mk4.openPopup();
}

function content() {
  return "<div style=\"padding:15px;font-size:12px;width:250px;\">This is example of multiple info window with diffrent arrow position!.</div>";
}
var create_content = function(tittle, content) {
  var h = new Array();
  h.push("<div>");
  h.push("<div class=\"header\">");
  h.push("<span>");
  h.push(tittle);
  h.push("</span> ");

  h.push("</div>");
  h.push("<div class=\"info_css\">");
  h.push(content);
  h.push("</div>");
  h.push("</div>");
  return h.join("");
};
var mapmyindia_fancy_info_window = function() {
  var content = create_content("A Better Info Window", "An example of a richer info window.");
  /*bind popup with marker*/
  mk5.bindPopup(content);
};
var mapmyindia_open_fancy_info_window = function() {
  mk5.openPopup();
}
var mapmyindia_custom_info_window = function() {
  mk3.openPopup();
}
var mapmyindia_hide_info_window = function() {
  map.closePopup();
}
