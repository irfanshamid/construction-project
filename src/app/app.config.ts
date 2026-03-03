import * as angular from 'angular';

export function configureRoutes($routeProvider: angular.route.IRouteProvider, $locationProvider: angular.ILocationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            template: '<project-list></project-list>'
        })
        .when('/:id', {
            template: '<project-detail></project-detail>'
        })
        .otherwise({
            redirectTo: '/'
        });
}

configureRoutes.$inject = ['$routeProvider', '$locationProvider'];
