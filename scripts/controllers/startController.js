'use strict';

angular.module('ucitIIApp').controller('startController', function ($scope, $translate, $global, constants) {
  $scope.$global = $global;
  $scope.mapTable = {
    data: $global.mapTableData,
    types: []
  };

  $scope.buildingDataTable = {
    years: [],
    texts: []
  };

  $scope.aboutVisible = true;

  $scope.$on(constants.languageChangeMessage, function () {
    fetchTableTranslations();
  });

  function fetchTableTranslations() {
    $translate(['MAPS.TABLE.TYPES.1', 'MAPS.TABLE.TYPES.2', 'MAPS.TABLE.TYPES.3',
      'MAPS.TABLE.TYPES.4', 'MAPS.TABLE.TYPES.5', 'MAPS.TABLE.TYPES.6',
      'MAPS.TABLE.TYPES.7', 'MAPS.TABLE.TYPES.8', 'MAPS.TABLE.TYPES.9',
      'MAPS.TABLE.TYPES.10', 'MAPS.TABLE.TYPES.11', 'MAPS.TABLE.TYPES.12',
      'MAPS.TABLE.TYPES.13', 'MAPS.TABLE.TYPES.14', 'MAPS.TABLE.TYPES.15'
    ]).then(function (types) {
      $scope.mapTable.types = [];
      for (var o in types) {
        $scope.mapTable.types.push(types[o]);
      }
    });

    $translate(['BUILDING_DATA.TABLE.1.YEAR', 'BUILDING_DATA.TABLE.2.YEAR', 'BUILDING_DATA.TABLE.3.YEAR',
      'BUILDING_DATA.TABLE.4.YEAR', 'BUILDING_DATA.TABLE.5.YEAR', 'BUILDING_DATA.TABLE.6.YEAR', 'BUILDING_DATA.TABLE.7.YEAR',
      'BUILDING_DATA.TABLE.8.YEAR', 'BUILDING_DATA.TABLE.9.YEAR'
    ]).then(function (years) {
      $scope.buildingDataTable.years = [];
      for (var o in years) {
        $scope.buildingDataTable.years.push(years[o]);
      }
    });

    $translate(['BUILDING_DATA.TABLE.1.TEXT', 'BUILDING_DATA.TABLE.2.TEXT', 'BUILDING_DATA.TABLE.3.TEXT',
      'BUILDING_DATA.TABLE.4.TEXT', 'BUILDING_DATA.TABLE.5.TEXT', 'BUILDING_DATA.TABLE.6.TEXT', 'BUILDING_DATA.TABLE.7.TEXT',
      'BUILDING_DATA.TABLE.8.TEXT', 'BUILDING_DATA.TABLE.9.TEXT'
    ]).then(function (texts) {
      $scope.buildingDataTable.texts = [];
      for (var o in texts) {
        $scope.buildingDataTable.texts.push(texts[o]);
      }
    });
  }

  fetchTableTranslations();

  $scope.toggleAbout = function(){
    $scope.aboutVisible = !$scope.aboutVisible;
  };

}).directive('about', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/about.html',
    controller: 'startController'
  };
});
