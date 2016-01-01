var appName = 'mean';
var app = angular.module(appName, ['ngRoute','example']);

angular.element(document).ready(function() {
		angular.bootstrap(document, [appName]);
		});


//for single page routing
app.config(['$locationProvider', function($locationProvider) {
		$locationProvider.hashPrefix('!');
		}
		]);
