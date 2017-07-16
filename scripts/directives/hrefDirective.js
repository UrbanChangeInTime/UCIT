'use strict';

angular.module('ucitIIApp').directive('href', function () {
  return {
    compile: function(element) {
      element.attr('target', '_blank');
    }
  };
});
