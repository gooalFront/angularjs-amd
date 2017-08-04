define([
    'app',
    "toolService"
], function(app) {
    app.controller('homeController', homecontroller)
    homecontroller.$inject = ['$scope', '$rootScope', 'myService'];

    function homecontroller($scope, $rootScope, myService) {
        console.log($rootScope);
        myService.greeting('joke');
        $scope.title = 123;
    }
});