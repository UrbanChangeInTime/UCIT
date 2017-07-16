'use strict';

angular.module('ucitIIApp').service('mapService', function ($q) {
  var mapDef = $q.defer();

  this.setMap = function(map){
    mapDef.resolve(map);
  };

  this.getMap = function(){
    return mapDef.promise;
  }
});
