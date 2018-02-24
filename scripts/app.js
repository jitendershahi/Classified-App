// angular
//     .module('ngClassifieds', ['ngMaterial', 'ui.router', 'firebase'])
//     .config(function($mdThemingProvider, $stateProvider, $urlRouterProvider) {

//       $mdThemingProvider.theme('default')
//         .primaryPalette('teal')
//         .accentPalette('orange')
//     .directive("helloWorld",function(){
//         return{
//             template:"<h1> {{ message }} </h1>"
// 		}
		
//     });            
    
 
    (function() {

        "use strict";      
var app = angular
          .module('ngClassifieds', ['ngMaterial','ui.router']);
         app.config(function($mdThemingProvider,$stateProvider) {
      
            $mdThemingProvider.theme('default')
              .primaryPalette('teal')
              .accentPalette('orange');

            $stateProvider
              .state('classifieds', {
                  url: '/classifieds',
                  templateUrl:'components/classifieds/classifieds.tpl.html',
                  controller: 'classifiedsCtrl as vm'
              })

              .state('classifieds.new', {
                  url: '/new',
                  templateUrl:'components/classifieds/new/classifieds.new.tpl.html',
                  controller: 'newClassifiedsCtrl as vm'
              })

              .state('classifieds.edit', {
                url: '/edit/:id',
                templateUrl:'components/classifieds/edit/classifieds.edit.tpl.html',
                controller: 'editClassifiedsCtrl as vm',
                params: {
                    classified : null
                }
            });

 
          });

      })();







    //   app.directive('helloWorld',function(){
    //     return{
    //         template:"<h1> jitender sharma </h1>",
    //         link:function(scope,el,attrs){

    //         }
    //     }
    // })