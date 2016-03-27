var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  $scope.dock_state='restore';
  
  $scope.dock_expand=function(){
    $scope.dock_state='expand';
  };
  
  $scope.dock_collapse=function(){
    $scope.dock_state='collapse';
  };
  
  $scope.dock_restore=function(){
    $scope.dock_state='restore';
  };
});
