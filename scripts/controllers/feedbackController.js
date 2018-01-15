angular.module('ucitIIApp').controller('feedbackController', function ($scope, feedbackService, $translate, $window) {
    var slider = angular.element(document.getElementById('feedback-slider'))[0];
    var button = angular.element(document.getElementById('feedback-button'))[0];
    var open = false;
    $scope.disabled = false;
    $scope.panelIsOpen = false;
    $scope.error = false;

    $scope.feedback = {
        email: undefined,
        firstName: undefined,
        lastName: undefined,
        subject: undefined,
        message: undefined
    };

    $scope.toggleFeedback = function () {
        if (open) {
            slider.style.right = "-400px";
            button.style.right = "-30px";
        } else {
            slider.style.right = "0";
            button.style.right = "-100px";
        }

        open = !open;
    };

    $scope.submit = function () {
        $scope.disabled = true;

        feedbackService.sendFeedback($scope.feedback).then(function () {
            // close the feedback after it is done
            $scope.toggleFeedback();
            $scope.disabled = false;
            $scope.error = false;

            $scope.feedback = {
                email: undefined,
                firstName: undefined,
                lastName: undefined,
                subject: undefined,
                message: undefined
            };

            $scope.panelIsOpen = false;

        }, function () {
            $scope.error = true;
            $scope.disabled = false;
        })
    };

    $scope.openSurvey = function () {
        if ($translate.use() === 'EN') {
            $window.open('https://goo.gl/forms/VTDlb3hlDVTGK4LU2', '_blank');
        } else {
            $window.open('https://goo.gl/forms/LU1dx2b9cbJWD41P2', '_blank');
        }
    };

}).directive('feedbackPanel', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/feedbackPanel.html',
        controller: 'feedbackController'
    };
});
