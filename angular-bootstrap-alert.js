'use strict';

angular.module('angularBootstrapAlert')
    .directive('alert', function() {
        return {

            restrict: 'E',
            transclude: true,
            link: function (scope, element, attrs) {

                scope.dismissError = function() {
                    delete scope.Error;
                };
                scope.dismissSuccess = function() {
                    delete scope.Success;
                };
                scope.dismissWarning = function() {
                    delete scope.Warning;
                };
                scope.dismissInfo = function() {
                    delete scope.Info;
                };

            },
            templateUrl: function(elem, attr) {
                if (!attr.type) attr.type = "info";
                return './templates/alert-'+ attr.type +'.html';
            }

        };
    });
