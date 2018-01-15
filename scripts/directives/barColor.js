angular.module('ucitIIApp').directive('barColor', function ($timeout, $window) {
  return {
    restrict: 'A',
    link: function (scope, element) {
      var colours = ['#D56A28', '#FFCA16', '#9EC755', '#7BAD41', '#5DA07B', '#469887', '#487C88', '#345F8D', '#10496B'];
      var percentages = [];

      function getTranslateX(myElement) {
        var style = window.getComputedStyle(myElement);
        var matrix = new WebKitCSSMatrix(style.webkitTransform);
        return matrix.m41;
      }

      angular.element($window).bind('resize', function(){
        changePositions(500);
      });

      function changePositions(timeout){
        percentages = [];
        $timeout(function () {
          var windowWidthMultiplier = $(window).width();

          var ticks = document.getElementsByClassName('rz-tick');
          angular.forEach(ticks, function (tick) {
            //var pa = tick.offsetParent || tick;
            if (tick.childElementCount > 1) {
              var translateX = getTranslateX(tick);
              percentages.push(Math.round(((37 + translateX) / windowWidthMultiplier) * 100 * 100) / 100);
            }
          });
        }, timeout).then(function () {

          var style = colours[0] + ' 0%, ' +
            colours[0] + ' ' + percentages[0] + '%, ' +
            colours[1] + ' ' + percentages[0] + '%, ' +
            colours[1] + ' ' + percentages[1] + '%, ' +
            colours[2] + ' ' + percentages[1] + '%, ' +
            colours[2] + ' ' + percentages[2] + '%, ' +
            colours[3] + ' ' + percentages[2] + '%, ' +
            colours[3] + ' ' + percentages[3] + '%, ' +
            colours[4] + ' ' + percentages[3] + '%, ' +
            colours[4] + ' ' + percentages[4] + '%, ' +
            colours[5] + ' ' + percentages[4] + '%, ' +
            colours[5] + ' ' + percentages[5] + '%, ' +
            colours[6] + ' ' + percentages[5] + '%, ' +
            colours[6] + ' ' + percentages[6] + '%, ' +
            colours[7] + ' ' + percentages[6] + '%, ' +
            colours[7] + ' ' + percentages[7] + '%, ' +
            colours[8] + ' ' + percentages[7] + '%, ' +
            colours[8] + ' ' + '100%) ' +
            'repeat scroll 50%';

          var styles =[
            'background: -webkit-linear-gradient(left top, ' + style,
            'background: -o-linear-gradient(left top, ' + style,
            'background: -moz-linear-gradient(left top, ' + style,
            'background: linear-gradient(left top, ' + style
          ].join(';');

          element.attr('style', styles);
        });
      }

      changePositions(1000);
    }
  }
});
