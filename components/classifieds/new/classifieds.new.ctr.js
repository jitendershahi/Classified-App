(function() {
    'use strict';

  angular
      .module('ngClassifieds')
      .controller('newClassifiedsCtrl', function($scope, $state ,$mdSidenav, $timeout, $mdDialog, classifiedsFactory){

        var vm = this;
        vm.closeSidebar = closeSidebar;
        vm.saveClassified = saveClassified;
        
        $timeout(function () {
            $mdSidenav('left').open();
        });
        

        $scope.$watch('vm.sidenavOpen', function(sidenav) {
            if(sidenav == false) {
                $mdSidenav('left')
                   .close()
                   .then(function() {
                       $state.go('classifieds');
                   })
            }
        });

        function closeSidebar () {
           vm.sidenavOpen = false;
        }

        function saveClassified(classified) {
            if(classified) {

                classified.contact = {
                    name : 'jitender sharma',
                    phone : '9871883392',
                    email: 'jitendersharmasdec@gmail.com'
                }
           
                $scope.$emit('newClassified' , classified);
                vm.sidenavOpen = false;
            }
        }

        


      });
})();