'use strict';

angular.module('ucitIIApp').service('feedbackService', function ($http, constants, $q) {

  this.sendFeedback = function (data) {
    var def = $q.defer();
    $http.post(constants.feedbackAPI, data).then(function (response) {
      if (response.data.result == 'OK') {
        def.resolve();
      } else {
        def.reject();
      }
    });

    return def.promise;
  }
});
