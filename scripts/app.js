'use strict';

angular.module('ucitIIApp', [
  'ngAnimate',
  'ngRoute',
  'ngSanitize',
  'ui.bootstrap',
  'pascalprecht.translate',
  'rzModule',
  'ngMaterial',
  'cfp.loadingBar',
  'perfect_scrollbar'
]).config(function ($routeProvider, $httpProvider, $mdIconProvider, cfpLoadingBarProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/start.html',
      controller: 'startController',
      controllerAs: 'start'
    })
    .otherwise({
      redirectTo: '/'
    });


  proj4.defs('EPSG:32633', '+proj=utm +zone=33 +ellps=WGS84 +datum=WGS84 +units=m +no_defs');

  // $httpProvider.defaults.withCredentials = true;

  $mdIconProvider.icon('address', 'images/address.svg', 24)
    .icon('monument', 'images/monument.svg', 24)
    .icon('museum', 'images/museum.svg', 24)
    .icon('left', 'images/left.svg', 24)
    .icon('right', 'images/right.svg', 24);

  cfpLoadingBarProvider.includeSpinner = false;

}).constant('constants', {
  rasterYearChangeMessage: "rasterYearChangeMessageSent",
  polygonYearChangeMessage: "polygonYearChangeMessageSent",
  modeChangeMessage: "modeChangedMessageSent",
  languageChangeMessage: "languageChangedMessageSent",

  wmsServer: "http://ucit.or.at/tomcat/geoserver/ucit/gwc/service/wms",
  feedbackAPI: "http://ucit.or.at/tomcat/ucit/api/feedback",
  addressSearchAPI: " http://data.wien.gv.at/daten/OGDAddressService.svc/GetAddressInfo?crs=EPSG:4326&Address="
});
