'use strict';

angular.module('ucitIIApp').controller('sliderController', function ($scope, constants, yearsFactory, $timeout) {
  var years = yearsFactory.getSliderYears($scope.mode);
  var yearsActive = yearsFactory.getActiveYears($scope.mode);

  $scope.$watch('mode', function(newValue, oldValue) {
    if(newValue != oldValue){
      years = yearsFactory.getSliderYears(newValue);
      yearsActive = yearsFactory.getActiveYears(newValue);
      $timeout(function () {
        $scope.slider.options.stepsArray = years;
        $scope.slider.value = $scope.mode == 'raster' ? current.raster : current.polygon;
        $scope.$broadcast('rzSliderForceRender');
      });
    }
  });

  var current = {
    raster: 1955,
    polygon: 2015
  };

  $scope.slider = {
    value: current.polygon,
    options: {
      id: "slider-raster",
      stepsArray: years,
      showTicksValues: true,
      keyboardSupport: false,
      ticksTooltip: function (index){
        if (yearsActive.indexOf(years[index].value) > -1) {
          return years[index].tooltip;
        }

        return undefined;
      },
      getTickColor: function (index) {
        if (yearsActive.indexOf(years[index].value) > -1) {
          return 'red';
        }

        return 'black';
      },
      onEnd: function (id, endValue) {
        var currentYear = $scope.mode == 'raster' ? current.raster : current.polygon;

        if (currentYear !== endValue) {
          if ($scope.mode == 'raster') {
            changeRasterLayer(endValue, currentYear);
            current.raster = endValue;
          } else {
            current.polygon = endValue;
            changePolygonYear(endValue);
          }

          if(endValue < currentYear){
            $scope.slider.buttons.leftDisabled = (endValue == 1760 || endValue == 1685);
            $scope.slider.buttons.rightDisabled = false;
          } else {
            $scope.slider.buttons.rightDisabled = (endValue == 2010 || endValue == 2015);
            $scope.slider.buttons.leftDisabled = false;
          }

        }
      },
      onChange: function (sliderId, endValue) {
        if (yearsActive.indexOf(endValue) == -1) {
          $scope.slider.value = $scope.mode == 'raster' ? current.raster : current.polygon;
        }
      }
    },
    buttons: {
      leftDisabled: false,
      rightDisabled: true     // starts with polygon end year so disable!
    }
  };

  // TODO disable the buttons within a service
  $scope.changeYear = function (direction) {
    var valueOld = $scope.slider.value;
    var valueNew;

    if (direction == 'left') {
        if ($scope.slider.buttons.leftDisabled) {
          return;
        }

        valueNew = yearsActive[yearsActive.indexOf($scope.slider.value) - 1];
        $scope.slider.value = valueNew;
    } else {
        if ($scope.slider.buttons.rightDisabled) {
          return;
        }

        valueNew = yearsActive[yearsActive.indexOf($scope.slider.value) + 1];
        $scope.slider.value = valueNew;
    }

    disableButtons(valueOld, valueNew);
    if($scope.mode == 'raster'){
      current.raster = valueNew;
      changeRasterLayer(valueNew, valueOld);
    } else {
      current.polygon = valueNew;
      changePolygonYear(valueNew);
    }
  };

  function changeRasterLayer(top, bottom) {
    var yearData = {
      bottom: bottom,
      top: top
    };
    $scope.$emit(constants.rasterYearChangeMessage, yearData);
  }


  function changePolygonYear(year){
    var style = yearsFactory.getPolygonStyle(year);
    $scope.$emit(constants.polygonYearChangeMessage, style);
  }

  $scope.$on(constants.modeChangeMessage, function(){
    disableButtons(null, $scope.slider.value);
  });

  function disableButtons(oldValue, newValue){
    if(oldValue == null){
      $scope.slider.buttons.leftDisabled = (newValue == 1760 || newValue == 1685);
      $scope.slider.buttons.rightDisabled = (newValue == 2010 || newValue == 2015);
      return;
    }

    if(newValue < oldValue){
      $scope.slider.buttons.leftDisabled = (newValue == 1760 || newValue == 1685);
      $scope.slider.buttons.rightDisabled = false;
    } else {
      $scope.slider.buttons.rightDisabled = (newValue == 2010 || newValue == 2015);
      $scope.slider.buttons.leftDisabled = false;
    }
  }

}).directive('slider', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/slider.html',
    controller: 'sliderController'
  };
});
