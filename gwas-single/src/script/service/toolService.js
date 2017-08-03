define([
    'app',
], function(app) {
    app.service('myService', function() {
        this.greeting = function(name) {
            console.log('hello : ' + name)
        }
    })
});