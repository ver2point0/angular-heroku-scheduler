var scheduler = angular.module("scheduler",
  ["xeditable", "ngMockE2E", "ngAnimate", "ui.bootstrap"]);

scheduler.run(function(editableOptions) {
  editableOptions.theme = "bs3";
});

scheduler.controller("Control", function($scope, $filter, $http) {
  
  $scope.tasks = [{
    id: 0, name: "John Doe", dynoSize: "Free", frequency: "Every 1 minute",
    lastRun: "Never", nextDue: "00:01",
  }];
  
  $scope.dynoSizes = [ "Free" ];
  
  $scope.frequencies = [ "Daily", "Hourly", "Every 1 Minute" ];
  
  $scope.lastRun = [ "Never", "Yesterday" ];
  
  $scope.times = [ "00:01", "00:02", "00:03" ];
  
  $scope.newDate = new Date();
  $scope.newDate.setDate($scope.newDate.getDate() + 1);
  
  $scope.saveTask = function(data, id) {
    angular.extend(data, { id: id } );  
    return $http.post("/saveTask", data);
  };
  
  $scope.removeTask = function(index) {
    $scope.tasks.splice(index, 1);
  };
  
  $scope.addTask = function() {
    $scope.inserted = {
      id: $scope.tasks.length + 1,
    };
    $scope.tasks.push($scope.inserted);
  };
  
});

scheduler.run(function($httpBackend) {
  $httpBackend.whenPOST(/\/saveTask/).respond(function(method, url, data) {
    data = angular.fromJson(data);
    return [200, { status: "ok"}];
  });
});
