'use strict';

angular.module('ucitIIApp').controller('mapController', function ($scope, constants, $http, mapService, cfpLoadingBar, $timeout, popupService) {

  $scope.mode = "polygon";
  var previousFeature;

  var vectorSource = new ol.source.Vector();
  $scope.loading ={
    value: -1
  };

  var proj32633 = ol.proj.get('EPSG:32633');
  proj32633.setExtent([166021.4431, 0.0000, 833978.5569, 9329005.1825]);

  var styleSelected = new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(255, 255, 0, 0.5)',
      width: 5
    })
  });

  var geojsonSource = new ol.source.Vector({
    url: 'resources/rasterinfo/1955.geojson',
    format: new ol.format.GeoJSON({
      defaultDataProjection: proj32633,
      projection: proj32633
    })
  });

  var googleLayer = new olgm.layer.Google({
    styles: [
      {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "saturation": 36
          },
          {
            "color": "#333333"
          },
          {
            "lightness": 40
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#ffffff"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#fefefe"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#fefefe"
          },
          {
            "lightness": 17
          },
          {
            "weight": 1.2
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "administrative.province",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dedede"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 29
          },
          {
            "weight": 0.2
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 18
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f2f2f2"
          },
          {
            "lightness": 19
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e9e9e9"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      }
    ],
    visible: false
  });

  var polygonWMS = new ol.source.TileWMS({
    url: constants.wmsServer,
    params: {
      'LAYERS': 'vienna_buildings',
      'SRS': 'EPSG:4326',
      'TILED': true,
      'FORMAT' :'image/png',
      'VERSION': '1.1.1'
    },
    serverType: 'geoserver'
    //wrapX: true,
    //projection: '3857'
  });

  function checkAndFire(){
    if($scope.loading.value == -1){
      cfpLoadingBar.complete();
    } else if($scope.loading.value == 0){
      cfpLoadingBar.start();
    }
  }

  polygonWMS.on('tileloadstart', function() {
    $scope.loading.value++;
    checkAndFire();
  });

  polygonWMS.on('tileloadend', function() {
    $scope.loading.value--;
    checkAndFire();
  });

  polygonWMS.on('tileloaderror', function() {
    $scope.loading.value--;
    checkAndFire();
  });

  var polygonTileLayer = new ol.layer.Tile({
    //extend: [16.1873771, 48.11896611, 16.576969, 48.324297],
    //extent: ol.proj.get('EPSG:3857').getExtent(),
    //extent: ol.proj.get('EPSG:4326').getExtent(),
    source: polygonWMS,
    visible: true
  });

  var topWms = new ol.source.TileWMS({
    projection: proj32633,
    url: constants.wmsServer,
    params: {
      'LAYERS': '1955',
      'TILED': true,
      'FORMAT': 'image/jpeg',
      'VERSION': '1.1.1'
    },
    serverType: 'geoserver'
  });

  topWms.on('tileloadstart', function() {
    $scope.loading.value++;
    checkAndFire();
  });

  topWms.on('tileloadend', function() {
    $scope.loading.value--;
    checkAndFire();
  });

  topWms.on('tileloaderror', function() {
    $scope.loading.value--;
    checkAndFire();
  });

  var bottomWms = new ol.source.TileWMS({
    projection: proj32633,
    url: constants.wmsServer,
    params: {
      'LAYERS': '1950',
      'TILED': true,
      'FORMAT': 'image/jpeg',
      'VERSION': '1.1.1'
    },
    serverType: 'geoserver'
  });

  var style = new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'transparent'
    })
  });

  var polygonClickLayer = new ol.layer.Vector({
    source: vectorSource,
    visible: true,
    style: new ol.style.Style()
  });

  var rasterClickLayer = new ol.layer.Vector({
    source: geojsonSource,
    visible: false,
    style: style
  });

  var topRasterTileLayer  =  new ol.layer.Tile({
    source: topWms,
    visible: false
  });
  var bottomRasterTileLayer  =  new ol.layer.Tile({
    source: bottomWms,
    visible: false
  });

// Create a regular OL3 map, containing our Google layer
  var map = new ol.Map({
    // use OL3-Google-Maps recommended default interactions
    interactions: olgm.interaction.defaults(),
    controls: ol.control.defaults().extend([
      new ol.control.ScaleLine()
    ]),
    loadTilesWhileAnimating: true,
    loadTilesWhileInteracting: true,
    layers: [
      polygonTileLayer,
      polygonClickLayer,
      googleLayer,
      topRasterTileLayer,
      bottomRasterTileLayer,
      rasterClickLayer
    ],
    extent: [166021.4431, 0.0000, 833978.5569, 9329005.1825],
    target: 'main-map',
    view: new ol.View({
      center: ol.proj.transform([16.373819, 48.208174], 'EPSG:4326', 'EPSG:900913'),
      zoom: 14,
      maxZoom: 17,
      minZoom: 11
    })
  });

  $scope.map = map;
  mapService.setMap(map);

  $scope.$on(constants.rasterYearChangeMessage, function (event, years) {
    topWms.updateParams({'LAYERS':years.top});
    bottomWms.updateParams({'LAYERS':years.bottom});

    geojsonSource = new ol.source.Vector({
      url: 'resources/rasterinfo/' + years.top + '.geojson',
      format: new ol.format.GeoJSON({
        defaultDataProjection: proj32633,
        projection: proj32633
      })
    });
    rasterClickLayer.setVisible(true);
    rasterClickLayer.setSource(geojsonSource);

    topRasterTileLayer.set('source',topWms);
    topRasterTileLayer.setVisible(true);
    bottomRasterTileLayer.set('source',bottomWms);

    popupService.close();
  });

  $scope.$on(constants.polygonYearChangeMessage, function(event, year){
    polygonWMS.updateParams({'STYLES': year});
    polygonTileLayer.set('source', polygonWMS);

    if(googleLayer.getVisible()){
      // only removing & adding the layer works for google maps
      map.removeLayer(polygonTileLayer);
      map.addLayer(polygonTileLayer);
    }
  });

// Activate the library
  var olGM = new olgm.OLGoogleMaps({map: map});
  olGM.activate();

  map.on('click', function(evt){
    $scope.$apply(function() {

      if($scope.mode == 'polygon'){
        var url = polygonTileLayer.getSource().getGetFeatureInfoUrl(
          evt.coordinate, map.getView().getResolution(), 'EPSG:900913',
          {'INFO_FORMAT': 'application/json'});

        if (url) {
          $http.get(url).then(function(results){
            if(results.data.features != null && results.data.features.length != 0 && results.data.features[0].properties.count === 1){

              //popup.show(evt.coordinate, '<div><h2>Coordinates</h2><p>hello</p></div>');
              popupService.show(evt.coordinate, results.data.features[0].properties, 'polygon');

              vectorSource = new ol.source.Vector();
              for(var i = 0; i < results.data.features[0].geometry.coordinates.length; i++){
                var polygonGeometry = new ol.geom.Polygon(results.data.features[0].geometry.coordinates[i]).transform('EPSG:4326', 'EPSG:900913');

                var polygonFeature = new ol.Feature({
                  style: new ol.style.Style({
                    stroke: new ol.style.Stroke({
                      color: 'transparent'
                    })
                  }),
                  geometry: polygonGeometry
                });

                vectorSource.addFeature(polygonFeature);
              }

              polygonClickLayer.setSource(vectorSource);
            } else {
              popupService.close();
            }
          })
        } else {
          popupService.close();
        }


      } else if($scope.mode == 'raster'){
        $scope.selectedFeature = map.forEachFeatureAtPixel(evt.pixel,
          function(feature, layer) {
            return feature;
          });

        if ($scope.selectedFeature) {
          if(previousFeature != null){
            previousFeature.setStyle(style);
          }
          var geometry =  $scope.selectedFeature.getGeometry();
          var coord = geometry.getCoordinates();

          popupService.show(evt.coordinate, $scope.selectedFeature.getProperties(), 'raster');

          $scope.selectedFeature.setStyle(styleSelected);
          previousFeature = $scope.selectedFeature;
        } else {
          popupService.close();
        }
      }
    });

  });

  $scope.closeInfo = function(){
    if($scope.mode == 'raster'){
      $scope.selectedFeature.setStyle(style);
    }
    popupService.close();
  };

  $scope.toggleLayer = function(layer){
    if(layer === $scope.mode){
      return;
    }

    polygonTileLayer.setVisible(!polygonTileLayer.getVisible());
    topRasterTileLayer.setVisible(!topRasterTileLayer.getVisible());
    rasterClickLayer.setVisible(!rasterClickLayer.getVisible());

    popupService.close();
    if(layer === 'raster'){
      $scope.mode = 'raster';
      googleLayer.setVisible(false);
      $scope.googleVisible = false;

      if(map.getView().getZoom() > 16){
        map.setView(new ol.View({
          center: map.getView().getCenter(),
          zoom: 16,
          maxZoom: 16,
          minZoom: 11
        }));
      }

    } else {
      $scope.mode = 'polygon';
      map.setView(new ol.View({
        center: map.getView().getCenter(),
        zoom: map.getView().getZoom(),
        maxZoom: 17,
        minZoom: 11
      }));
    }

    $scope.$broadcast('rzSliderForceRender');

    $timeout(function(){
      $scope.$broadcast(constants.modeChangeMessage);
    }, 200);

  };

  $scope.toggleGoogle = function(){
    googleLayer.setVisible(!googleLayer.getVisible());
    $scope.googleVisible = googleLayer.getVisible();
  }

}).directive('map', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/map.html',
    controller: 'mapController'
  };
}).directive('mapSideController', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/map-sidecontroller.html',
    replace: true
  };
});
