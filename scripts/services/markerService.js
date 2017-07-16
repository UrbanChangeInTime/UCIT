'use strict';

angular.module('ucitIIApp').service('markerService', function (mapService) {

  var markers = [];
  var vectorLayer = new ol.layer.Vector({
    /*style: new ol.style.Style({
      image: new ol.style.Icon(({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: 'images/pin.png'
      }))
    })*/
  });

  var defaultStyle = new ol.style.Style({
    image: new ol.style.Icon(({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 0.75,
      src: 'images/pin.png'
    }))
  });

  this.createMarkers = function (addresses) {

    var vectorSource = new ol.source.Vector({});

    for (var i = 0; i < addresses.length; i++) {
      var address = addresses[i];

      var iconFeature = new ol.Feature({
        geometry: new
          ol.geom.Point(ol.proj.transform([address.geometry.coordinates[0], address.geometry.coordinates[1]], 'EPSG:4326', 'EPSG:900913'))
      });

      iconFeature.setStyle(defaultStyle);
      vectorSource.addFeature(iconFeature);
      address.feature = iconFeature;
    }
    vectorLayer.setSource(vectorSource);

    mapService.getMap().then(function (map) {
      map.addLayer(vectorLayer);
    });
  };

  this.cleanMarkers = function () {
    mapService.getMap().then(function (map) {
      map.removeLayer(vectorLayer);
    });
  }

});
