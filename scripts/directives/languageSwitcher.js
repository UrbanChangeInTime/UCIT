'use strict';

angular.module('ucitIIApp').directive('languageSwitcher', function (constants) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'views/language-switcher.html',
    controller: function($scope, $translate){
      $scope.changeLang = function (key) {
        $translate.use(key);

        // checks to see if this exists
        if(typeof $scope.fetchTableTranslations == 'function'){
          $scope.fetchTableTranslations();
        }

        $scope.$emit(constants.languageChangeMessage);
      };
    }
  };
});
