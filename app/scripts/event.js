'use strict';

angular.module('weddingApp.event', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/event', {
        templateUrl: 'views/event.html',
        controller: 'EventCtrl'
    });
}])

.controller('EventCtrl', ['$http', '$scope', 'moment', '$anchorScroll','$timeout', function($http, $scope, moment, $anchorScroll,$timeout) {
    $http.get('json/event.json').success(function(data) {
        // you can do some processing here
        $scope.data = data;
        $scope.backup = data;
        $scope.contacts = data.ContactList;
    });

    $scope.selected = "Choose a name";
    $scope.names = ["Groom", "Bride", "Reine", "Kathlyn", "Kyan", "Esther", "YouJun", "James", "Wei Qiang", "Genghis", "Yilong"];

    $scope.change = function() {
        if ($scope.selectedName === "") {
            $scope.data = $scope.backup;
        } else {
            var people = $scope.backup.People;
            $scope.data = $scope.backup.People[$scope.selectedName];
            $timeout(function() {
                scrollToDiv();
            }, 100);
        }
    };

    $scope.setImage = function(url)
    {
       $scope.imgLink = url;
    }

    function scrollToDiv() {
        var now = moment();

        for (var i = 0; i < $scope.data["Events"].length; i++) {
            var currentEvent = moment($scope.data["Events"][i].datetime, "YYYY-MM-DD HH:mm:ss");
            if (i + 1 < $scope.data["Events"].length) {
                var nextEvent = moment($scope.data["Events"][i + 1].datetime, "YYYY-MM-DD HH:mm:ss");
            }

            if (nextEvent >= now && now >= currentEvent) {
                // ongoing
                // scroll to that div
                console.log("found");
                $anchorScroll('event' + i);
            }
        }
    }
    //{bg-primary: selected, bg-success: selected, bg-dark: selected}
    $scope.getClass = function(index) {
        var now = moment();
        var currentEvent = moment($scope.data["Events"][index].datetime, "YYYY-MM-DD HH:mm:ss");
        if (index - 1 >= 0) {
            var previousEvent = moment($scope.data["Events"][index - 1].datetime, "YYYY-MM-DD HH:mm:ss");
        }
        if (index + 1 < $scope.data["Events"].length) {
            var nextEvent = moment($scope.data["Events"][index + 1].datetime, "YYYY-MM-DD HH:mm:ss");
        }

        if (nextEvent >= now && now >= currentEvent) {
            // ongoing
            return "bg-success";
        } else if (now > currentEvent) {
            // event passed
            return "bg-dark";
        } else if (currentEvent > now && now > previousEvent) {
            // upcoming
            return "bg-primary";
        } else {
            // not time yet
            return "bg-secondary";
        }
    }

    //border-primary
    $scope.getBorder = function(index) {
        var now = moment();
        var currentEvent = moment($scope.data["Events"][index].datetime, "YYYY-MM-DD HH:mm:ss");
        if (index - 1 >= 0) {
            var previousEvent = moment($scope.data["Events"][index - 1].datetime, "YYYY-MM-DD HH:mm:ss");
        }
        if (index + 1 < $scope.data["Events"].length) {
            var nextEvent = moment($scope.data["Events"][index + 1].datetime, "YYYY-MM-DD HH:mm:ss");
        }

        if (nextEvent >= now && now >= currentEvent) {
            // ongoing
            return "border-success";
        } else if (now > currentEvent) {
            // event passed
            return "border-dark";
        } else if (currentEvent > now && now > previousEvent) {
            // upcoming
            return "border-primary";
        } else {
            // not time yet
            return "border-secondary";
        }
    }

    $scope.convertDate = function(dateString) {
        return moment(dateString).toISOString();
    }

    $scope.imgLink = "";

    $scope.calculateNext = function(index) {
        var now = moment();
        var currentEvent = moment($scope.data["Events"][index].datetime, "YYYY-MM-DD HH:mm:ss");
        if (index - 1 >= 0) {
            var previousEvent = moment($scope.data["Events"][index - 1].datetime, "YYYY-MM-DD HH:mm:ss");
        }
        if (index + 1 < $scope.data["Events"].length) {
            var nextEvent = moment($scope.data["Events"][index + 1].datetime, "YYYY-MM-DD HH:mm:ss");
        }

        if (nextEvent >= now && now >= currentEvent) {
            return "Event is ongoing";
        } else if (now > currentEvent) {
            return "Event has passed";
        } else if (currentEvent > now && now > previousEvent) {
            return "Next Event " + currentEvent.from(previousEvent);
        } else {
            return "Not Time for this event";
        }
    }
}]);