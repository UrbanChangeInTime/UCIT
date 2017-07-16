angular.module('ucitIIApp').controller('feedbackController', function ($scope, $log, feedbackService) {
  var slider = angular.element(document.getElementById('feedback-slider'))[0];
  var button = angular.element(document.getElementById('feedback-button'))[0];
  var open = false;
  $scope.disabled = false;

  $scope.feedback = {
    email: undefined,
    firstName: undefined,
    lastName: undefined,
    subject: undefined,
    message: undefined
  };

  $scope.toggleFeedback = function(){
    $log.info("slider toggle");
    if(open){
      slider.style.right = "-400px";
      button.style.right = "-30px";
    } else {
      slider.style.right = "0";
      button.style.right = "-100px";
    }

    open = !open;
  };

  $scope.submit = function(){
    $scope.disabled = true;

    $log.info("Submitting feedback...");
     feedbackService.sendFeedback($scope.feedback).then(function(){
       // close the feedback after it is done
       $scope.toggleFeedback();
       $scope.disabled = false;
     })
  };

}).directive('feedbackPanel', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/feedbackPanel.html',
    controller: 'feedbackController'
  };
});
