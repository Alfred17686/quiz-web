angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://www.quiz-api-ag.eu-west-2.elasticbeanstalk.com/';

    return service;
}]);