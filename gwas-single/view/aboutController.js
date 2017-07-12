define([
    'app',
    'mock'
], function(app,mock) {
    app.controller('AboutCtr',['$scope',function($scope){
        $scope.title='this is AboutPage'
        var data=mock.mock({
            'list|1-10':[
                {
                    "id|+1":1
                }
            ]
        })
        $scope.data=data;
    }])
});