'use strict';

angular.module('ucitIIApp').factory('$global', function () {
  var currentLanguage = 'DE';
  var nextLanguage = 'EN';
  var mapTableData = [
    {
      "year": 1870,
      "coverage": "1872-1875",
      "scale": "1:12.500"
    },
    {
      "year": 1900,
      "coverage": "1903-1915",
      "scale": "1:25.000"
    },
    {
      "year": 1910,
      "coverage": "1907-1910",
      "scale": "1:75.000"
    },
    {
      "year": 1920,
      "coverage": "1915-1916",
      "scale": "1:75.000"
    },
    {
      "year": 1930,
      "coverage": "1936-1937",
      "scale": "1:75.000"
    },
    {
      "year": 1940,
      "coverage": "1946",
      "scale": "1:50.000"
    },
    {
      "year": 1950,
      "coverage": "1950-1955",
      "scale": "1:50.000"
    },
    {
      "year": 1955,
      "coverage": "1954",
      "scale": "1:25.000"
    },
    {
      "year": 1960,
      "coverage": "1959-1962",
      "scale": "1:50.000"
    },
    {
      "year": 1970,
      "coverage": "1972-1973",
      "scale": "1:50.000"
    },
    {
      "year": 1980,
      "coverage": "1979-1981",
      "scale": "1:50.000"
    },
    {
      "year": 1990,
      "coverage": "1987-1988",
      "scale": "1:50.000"
    },
    {
      "year": 1995,
      "coverage": "1993-1995",
      "scale": "1:50.000"
    },
    {
      "year": 2000,
      "coverage": "2000-2004",
      "scale": "1:50.000"
    },
    {
      "year": 2010,
      "coverage": "2007-2012",
      "scale": "1:50.000"
    }
  ];

  return {
    currentlanguage: currentLanguage,
    switchAndReturnLanguage: function () {
      // fast switch
      nextLanguage = [currentLanguage, currentLanguage = nextLanguage][0];
      return currentLanguage;
    },
    mapTableData: mapTableData
  }
});
