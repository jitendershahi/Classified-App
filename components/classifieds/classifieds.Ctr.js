(function() {
	'use strict';
	 
	var appC = angular
	 .module('ngClassifieds')
	appC.controller('classifiedsCtrl',function($scope, $state, $http,classifiedsFactory,$mdSidenav,$mdToast,$mdDialog) {

	  var vm = this;
	  
	  vm.categories;
	  vm.classified;
	  vm.classifieds;
	  vm.closeSidebar = closeSidebar;
	  vm.deleteClassified = deleteClassified;
	  vm.editing;
	  vm.saveEdit = saveEdit;
	  vm.editClassified = editClassified;
	  vm.openSidebar = openSidebar;
	  vm.saveClassified = saveClassified;

   classifiedsFactory.getClassifieds().then(function(classifieds) {

		vm.classifieds = classifieds.data;
	   //console.log(classifieds)
	   vm.categories = getCategories(vm.classifieds);
	 });

    $scope.$on('newClassified', function(event, classified){
		classified.id = vm.classifieds.length + 1;  //id of new classified
		vm.classifieds.push(classified);
		showToast('Classified Saved!');
	});

	$scope.$on('editSaved', function(event,message){
		showToast(message);
	});


	 var contact = {
		 name : 'jitender sharma',
		 phone : '9871883392',
		 email: 'jitendersharmasdec@gmail.com'
	 }

	

	 function showToast(message) {
        $mdToast.show(
          $mdToast.simple()
            .content(message)
            .position('top, right')
            .hideDelay(3000)
        );
      }

	 
	 
	 function openSidebar () {
		$state.go('classifieds.new');
	 }
	
	 function closeSidebar () {
		$mdSidenav('left').close();
	 }
  
	 function saveClassified (classified) {
		 if(classified){
			 classified.contact = contact;
			vm.classifieds.push(classified);
			vm.classified = {};
			closeSidebar();
			showToast('Classified Saved!');
		 }
		
	 }

	function editClassified(classified) {
		vm.editing = true;
		vm.classified = classified;
		 $state.go('classifieds.edit', {
			 id: classified.id,
			 classified: classified 
		 });
	 }

	function saveEdit  () {
		 vm.editing = false;
		 vm.classified = {};
		 closeSidebar();
		 showToast('Edit Saved!');
	 }

	 function deleteClassified (event,classified) {
		  var confirm = $mdDialog.confirm()
		     .title('Are you sure you want to delete ' + classified.title + '?')        
			  .ok('Yes')
			  .cancel('No')
			  .targetEvent(event);
			$mdDialog.show(confirm).then(function() {
				var index = vm.classifieds.indexOf(classified);
				vm.classifieds.splice(index , 1);
			},function() {
				
			});
    };

            function getCategories(classifieds) {
				var categories = [];
				angular.forEach(classifieds , function(item){
					angular.forEach(item.categories , function(category) {
                      categories.push(category);
					});

				});
				return _.uniq(categories);
			}





	 });
	
})();


  