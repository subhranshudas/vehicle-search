"use strict";

var vSeacrhApp = angular.module('vSeacrhApp',[]);

vSeacrhApp.controller('PanelController',function($scope){
   $scope.vehicle = {
    type:'choose'
   };
   $scope.vList = [];

   $scope.addVehicle = function(v){
     $scope.vList.push(v);
     $scope.vehicle = {
      type:'choose'
     };
   };
});