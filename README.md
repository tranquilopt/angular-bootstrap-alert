# angular-bootstrap-alert
Angular Directive for simplified usage of Bootstrap dismissable alerts

## Dependencies
- angular 1.4.7
- bootstrap 3.3.5
- font-awesome 4.4.0

## Installation
    bower install angular-bootstrap-alert --save
    
#### Include the module on your app
    angular.module('yourApp', ['angular-bootstrap-alert'])

## Description
The directive transcludes the following $scope elements:
    
    $scope.Error
    $scope.Success
    $scope.Warning
    $scope.Information

This means all you have to do to pop the alert would be something like:

    $scope.Error = "There has been a terrible error in your application. Please try again until madness.";

## Usage examples

### Html
The alert possible types:

    <alert type="error"></alert>
    <alert type="success"></alert>
    <alert type="warning"></alert>
    <alert type="info"></alert>
    
Button calling the example bellow:
    
    <button type="button" ng-click="doSomethingUseful"></button>

### Controller

    $scope.doSomethingUseful = function() {
    
        $http.get("/api/useful")
            .then(....)
            .catch(err) {
               $scope.Error = err;
            }
    }

## Author
- Ricardo Cunha <ricardocunha@tranquilo.pt>

## License
[MIT] (/LICENSE)