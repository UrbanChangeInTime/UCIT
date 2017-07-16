'use strict';

angular.module('ucitIIApp').service('addressFetchService', function ($http, constants, markerService) {
    this.fetchAddress = function (addressText) {
        var url = constants.addressSearchAPI.concat(addressText);
        return $http.get(url).then(function (result) {
            markerService.createMarkers(result.data.features);
            return result.data.features;
        });
    };
});
