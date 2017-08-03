define([
    'app',
    "toolService"
], function(app) {
    app.controller('HomeCtr', ['$scope', 'myService', homefn])

    function homefn($scope, myService) {
        myService.greeting('joke');

        $scope.title = 123;
    }
});