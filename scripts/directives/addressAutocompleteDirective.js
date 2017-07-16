'use strict';

angular.module('ucitIIApp').directive('addressAutocomplete', function (addressFetchService, markerService, $log) {
  return {
    templateUrl: "views/addressAutocomplete.html",
    replace: true,
    scope: {
      map: "=",
      mode: "="
    },
    link: function (scope, element, attrs, model) {
      var previousHoverAddress;
      scope.address = {};
      scope.fetchAddress = addressFetchService.fetchAddress;
      scope.isShown = false;

      scope.toggleAutocompleteVis = function(){
        scope.isShown = !scope.isShown;
      };

      scope.getIconForAddress = function(addressType){
        switch (addressType){
          case "Strassenname":
                return "address";
          case "Denkmal":
                return "monument";
          case "Museen und Sammlungen":
                return "museum";
          default:
                return "address";
        }
      };

      scope.convertDistrict = function(district){
         if(district > 0 && district < 24){
           return "1".concat(('0' + district).slice(-2)).concat("0");
         }

      };

      scope.$watch('address.selected', function(newValue, oldValue) {
        if(newValue != oldValue && newValue){
          console.log("address changed");

          scope.map.setView(new ol.View({
            center: ol.proj.transform([newValue.geometry.coordinates[0], newValue.geometry.coordinates[1]], 'EPSG:4326', 'EPSG:900913'),
            zoom: 18
          }));
        }
      });

      scope.onTextChange = function(){
        markerService.cleanMarkers();
      };

      scope.highlightMarker = function(address){
        if(previousHoverAddress && address == previousHoverAddress){
          return;
        }

        $log.info("marker highlight");
        address.feature.setStyle(new ol.style.Style({
          image: new ol.style.Icon(({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            opacity: 0.75,
            src: 'images/pin-selected.png'
          }))
        }));

        if(previousHoverAddress){
          previousHoverAddress.feature.setStyle(new ol.style.Style({
            image: new ol.style.Icon(({
              anchor: [0.5, 46],
              anchorXUnits: 'fraction',
              anchorYUnits: 'pixels',
              opacity: 0.75,
              src: 'images/pin.png'
            }))
          }));
        }

        previousHoverAddress = address;
      }
    }
  }
});
