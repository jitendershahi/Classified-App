(function() {
 'use strict';

 var appF = angular.module('ngClassifieds')
       appF.factory('classifiedsFactory', function($http) {
 
      function getClassifieds() {
           return $http.get('data/classifieds.json');
      }


     return {
         getClassifieds: getClassifieds
     }


       })



})();