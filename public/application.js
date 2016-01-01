var appName = 'mean';
var app = angular.module(appName, ['example']);

angular.element(document).ready(function() {
    angular.bootstrap(document, [appName]);
});

