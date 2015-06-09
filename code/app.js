var years = ["1870", "1900", "1910", "1920", "1930", "1940", "1950", "1955", "1960", "1970", "1980", "1990", "1995", "2000", "2010"];
var lastValue = 0;
var init = true;
var startYear = 1870;
var url = 'http://ucit.or.at/tomcat/geoserver/ucit/gwc/service/wms';

$("#slider").slider({
	 min: 0,
	 max: 14,
	 step: 1,
	 value: lastValue,
	 animate: "slow",
	 create: function(event, ui){
		$("#slider").find(".ui-slider-handle").text(startYear);	
		$('.label'+lastValue).css({'color':'rgba(255,255,255,1)', 'z-index':'2000'}); 
	 },
	 stop: function(event, ui){
		changeLayer(years[ui.value]);		 
	 },
	 start: function (event, ui){
		$('.label'+ui.value).css({'color':'', 'transition-property':'color'});
	 },
	 change: function(event, ui){
	 	var value = years[ui.value];
		$("#slider").find(".ui-slider-handle").text(value);
		$('.label'+ui.value).css({'color':'rgba(255,255,255,1)', 'transition-property':'color', 'z-index':'2000'});
	 },
	 slide: function(event, ui){
		var value = years[ui.value];
	 	$("#slider").find(".ui-slider-handle").text(value);	

		if((lastValue + 1 == ui.value || lastValue -1 == ui.value)){
			$('.label'+ui.value).css({'color':'rgba(255,255,255,1)','transition-property':'none', 'z-index':'2000'});			
		}
		for(i = 0; i <  $("#slider").slider("option", "max")+1; i++){
				if(i != ui.value){
					$('.label'+i).css({'color':'', 'transition-property':'color'});
				}
		}
		lastValue = ui.value;
		
	 }
})
.each(function() {
  var opt = $(this).data().uiSlider.options;
  var vals = opt.max - opt.min;
  
  for (var i = 0; i <= vals; i++) {    
  	if(i != $('#slider').slider("option", "value")){
	  	var el = $('<label class="label'+i+'">'+years[i]+'</label>').css('left',(i/vals*100)+'%');
	} else {
		var el = $('<label class="label'+i+'">'+years[i]+'</label>').css({'left': (i/vals*100)+'%', 'color': 'rgba(255,255,255,1)', 'z-index':'2000'});
	}
	
    $( "#slider" ).append(el);
  }
});

// disable right-click
$('body').on('contextmenu', 'img', function(e){ return false; });

/* #################### OPENLAYERS #################### */
var map;
// pink tile avoidance
OpenLayers.IMAGE_RELOAD_ATTEMPTS = 5;

var bounds = new OpenLayers.Bounds(
   	561470.642379, 5316585.120631009,636667.3523788243, 5373427.860631
);

var posX = 0;
var posY = 0;
var projection = new OpenLayers.Projection("EPSG:32633");	
var maxResolution = 40;
var maxZoomLevel = 5;
var units = "m";
var	format = "image/jpeg";

function initmap() {
    var options = {
		controls: [
		new OpenLayers.Control.Navigation({
			dragPanOptions: {
				enableKinetic: true
			}
		}),
		new OpenLayers.Control.Attribution(),
        new OpenLayers.Control.Zoom()
		],
		
		numZoomLevels: maxZoomLevel,
		maxResolution: maxResolution,
		resolutions: [40, 20, 10, 5, 2.5], 
		maxExtent: bounds,
		projection: projection,
		units: units
	};

	map = new OpenLayers.Map('map_div', options);		
	
	var boundsOverviewmap = new OpenLayers.Bounds(
   		570776.9939821202, 5313428.320796276 ,627129.8598477306, 5362486.344524053
	);
	
	var ovrMapUrl = OpenLayers.Util.getImagesLocation() + "overviewMap.png";
	var sizeMap = new OpenLayers.Size(150, 135);
	var size = new OpenLayers.Size(160, 145);

	var ovmapLayer = new OpenLayers.Layer.Image(
		"overview", 
		ovrMapUrl, 
		boundsOverviewmap,
		sizeMap
	);			   

	var ovmOptions = {
		maximized: false,
		maxextend: boundsOverviewmap,
		restrictedExtend: boundsOverviewmap,
		projection: projection,
		units: units,
		minZoomLevel:0,
		maxZoomLevel:4,
		minRatio:2,
		maxRatio:16,
		singleTile: true,
		size: size,
		layers: [ovmapLayer],
		isSuitableOverview: function(){
			return true;	
		}
	};
	var ovmControl = new OpenLayers.Control.OverviewMap(ovmOptions);

	changeLayer(startYear);	
	map.setCenter(new OpenLayers.LonLat(601819.66140,5340512.69353), 3);
	map.addControl(ovmControl);
	map.addControl(new OpenLayers.Control.ScaleLine({}));

	init = false;

	$('[id^="OpenLayers_Control_Zoom_"]').css('display','none');
	$('[id^="OpenLayers_Control_OverviewMap_"]').css('display','none');
	$('[id^="OpenLayers_Control_ScaleLine_"]').css('display','none');
}

function changeLayer(year){


	var selectedLayer = map.getLayersByName(year)[0];
	var isbaseLayer = (map.getNumLayers() > 0) ? false : true;

	// check if the selected layer exists
	if(selectedLayer != null){		
		/*	
			if it exists and is a base layer, then it should be set to false.
			Because otherwise it will not pushed to top if it is selected again.
		*/
		if( selectedLayer.isBaseLayer == true){
			selectedLayer.setIsBaseLayer(false);
			map.layers[1].setIsBaseLayer(true);
		}
		
		// raise the layer to the top
		map.raiseLayer(selectedLayer,map.layers.length);	
		return;
	}


	var mapLayer = new OpenLayers.Layer.WMS(
		year, url,{
        	"layers": year,
			format: format
		},
		//options
		{
		buffer: 0,
		displayOutsideMaxExtent: true,
		isBaseLayer: isbaseLayer
		} 
	);			   
	map.addLayer(mapLayer);
	
	/*
		if there is a 3rd layer added, first one has to be removed and the second one will become the first one.
		In this case, second one hs to selected as the base map, otherwise layer change doesn't work properly.	
	*/
	if(map.getNumLayers() > 2){
		map.layers[0].destroy();
		map.layers[0].setIsBaseLayer(true);
		map.setBaseLayer(map.layers[0]);
	}
}


// click functions
$(".logo").on("click", function(e){
	$("#contents").css('display','block');
	$("#slider_container").css('display','none');
	$(".logo").css('display','none');

	$('[id^="OpenLayers_Control_Zoom_"]').css('display','none');
	$('[id^="OpenLayers_Control_OverviewMap_"]').css('display','none');
	$('[id^="OpenLayers_Control_ScaleLine_"]').css('display','none');
});

$(".start-img").on("click", function(e){
	$("#contents").css('display','none');
	$("#slider_container").css('display','block');
	$(".logo").css('display','block');

	$('[id^="OpenLayers_Control_Zoom_"]').css('display','block');
	$('[id^="OpenLayers_Control_OverviewMap_"]').css('display','block');
	$('[id^="OpenLayers_Control_ScaleLine_"]').css('display','block');
});