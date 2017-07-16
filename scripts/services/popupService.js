'use strict';

angular.module('ucitIIApp').service('popupService', function (mapService, $templateCache, $compile, $rootScope) {
  var popup = new ol.Overlay.Popup();
  var scope = $rootScope.$new(true);

  mapService.getMap().then(function (map) {
    map.addOverlay(popup);
  });

  var raster =
    '<div layout="column" class="infowindow">' +
      '<div class="toolbar">' +
        '<span>INFO</span>' +
      '</div>' +
        '<table>' +
          '<tbody>' +
            '<tr>' +
              '<td class="label-iw" translate="INFOWINDOW.TYPE">' +
              '</td>' +
              '<td align="right">' +
                '{{properties.Type}}' +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td class="label-iw" translate="INFOWINDOW.SCALE">' +
              '</td>' +
              '<td align="right">' +
                '{{properties.Scale}}' +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td class="label-iw" translate="INFOWINDOW.ACTUAL_YEAR">' +
              '</td>' +
              '<td align="right">' +
                '{{properties.Year}}' +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td class="label-iw" translate="INFOWINDOW.SOURCE">' +
              '</td>' +
              '<td align="right">' +
                '{{properties.Source}}' +
              '</td>' +
            '</tr>' +
          '</tbody>' +
        '</table>' +
    '</div>';


  var polygon =
    '<div layout="column" class="infowindow">' +
      '<div class="toolbar">' +
        '<span>INFO</span>' +
      '</div>' +
        '<table>' +
          '<tbody>' +
            '<tr>' +
              '<td class="label-iw" translate="INFOWINDOW.YEAR">' +
              '</td>' +
              '<td align="right">' +
                '{{properties.year}}' +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td class="label-iw" translate="INFOWINDOW.SOURCE">' +
              '</td>' +
              '<td align="right">' +
                '{{properties.y_source}}' +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td class="label-iw" translate="INFOWINDOW.PERIOD">' +
              '</td>' +
              '<td align="right">' +
                '{{properties.period}}' +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td class="label-iw" translate="INFOWINDOW.SOURCE">' +
              '</td>' +
              '<td align="right">' +
                '{{properties.p_source}}' +
              '</td>' +
            '</tr>' +
          '</tbody>' +
        '</table>' +
        '<div>' +
          '<p>Some built years and periods are estimates</p>' +
        '</div>' +
    '</div>';

  $templateCache.put('raster', raster);
  $templateCache.put('polygon', polygon);

  this.show = function(coord, contentObject, type){
    var template = $templateCache.get(type);

    // replace infowindow content with content object.
    scope.properties = contentObject;

    popup.show(coord, template);
    $compile($('.infowindow'))(scope)
  };

  this.close = function(){
    popup.hide();
  };

});
