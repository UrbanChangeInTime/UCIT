'use strict';

angular.module('ucitIIApp').factory('yearsFactory', function () {

  var data = {};

  data.years = [];
  // init years
  (function () {
    for (var i = 1650; i < 2051; i = i + 5) {
      data.years.push(i);
    }
  })();

  data.raster = [
    {
      year: 1760,
      legend: '●',
      tooltip: '1760'
    },
    {
      year: 1800,
      legend: '●',
      tooltip: '1800'
    },
    {
      year: 1870,
      legend: '●',
      tooltip: '1870'
    },
    {
      year: 1900,
      legend: '●',
      tooltip: '1900'
    },
    {
      year: 1910,
      legend: '●',
      tooltip: '1910'
    },
    {
      year: 1920,
      legend: '●',
      tooltip: '1920'
    },
    {
      year: 1930,
      legend: '●',
      tooltip: '1930'
    },
    {
      year: 1940,
      legend: '●',
      tooltip: '1940'
    },
    {
      year: 1950,
      legend: '●',
      tooltip: '1950'
    },
    {
      year: 1955,
      legend: '●',
      tooltip: '1955'
    },
    {
      year: 1960,
      legend: '●',
      tooltip: '1960'
    },
    {
      year: 1970,
      legend: '●',
      tooltip: '1970'
    },
    {
      year: 1980,
      legend: '●',
      tooltip: '1980'
    },
    {
      year: 1990,
      legend: '●',
      tooltip: '1990'
    },
    {
      year: 1995,
      legend: '●',
      tooltip: '1995'
    },
    {
      year: 2000,
      legend: '●',
      tooltip: '2000'
    },
    {
      year: 2010,
      legend: '●',
      tooltip: '2010'
    }
  ];

  data.polygon = [
    {
      year: 1685,
      legend: '●',
      tooltip: 'vor 1683 - vor der Zweiten Türkenbelagerung',
      style: 'vor 1683'
    },
    {
      year: 1740,
      legend: '●',
      tooltip: '1740 - Hochbarock',
      style: '1740'
    },
    {
      year: 1850,
      legend: '●',
      tooltip: '1848 - Rokoko, Klassizismus - Biedermeier',
      style: '1848'
    },
    {
      year: 1860,
      legend: '●',
      tooltip: '1848 - 1859<br>Frühgründerzeit',
      style: '1859'
    },
    {
      year: 1885,
      legend: '●',
      tooltip: '1883 - Hochgründerzeit',
      style: '1883'
    },
    {
      year: 1920,
      legend: '●',
      tooltip: '1918 - Spätgründerzeit',
      style: '1918'
    },
    {
      year: 1945,
      legend: '●',
      tooltip: '1945 - Zwischenkriegszeit',
      style: '1945'
    },
    {
      year: 1975,
      legend: '●',
      tooltip: '1976 - Nachkriegszeit',
      style: '1976'
    },
    {
      year: 2015,
      legend: '●',
      tooltip: 'nach 1976 - Gegenwart',
      style: 'nach 1976'
    }
  ];

  data.getSliderYears = function (mode) {
    var years = [];

    angular.forEach(data.years, function (year) {
      var singleYear = {};
      var stop = false;

      var selectedYears = mode == 'raster' ? data.raster : data.polygon;
      angular.forEach(selectedYears, function (raster) {
        if (!stop) {
          if (raster.year == year) {
            singleYear.legend = raster.legend;
            singleYear.tooltip = raster.tooltip;
            stop = true;
          }
        }
      });

      singleYear.value = year;
      years.push(singleYear);
    });

    return years;
  };

  data.getActiveYears = function(mode){
    var years = [];

    var selectedYears = mode == 'raster' ? data.raster : data.polygon;
    angular.forEach(selectedYears, function (o) {
      years.push(o.year);
    });

    return years;
  };

  data.getPolygonStyle = function(year){
    for(var i = 0; i< data.polygon.length; i++){
      if(year === data.polygon[i].year){
        return data.polygon[i].style;
      }
    }

    return null;
  };


  return data;

});
