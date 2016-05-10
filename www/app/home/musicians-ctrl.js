(function (){
  'use strict';
  angular.module('eliteApp').controller('MusiciansCtrl', ['$state', 'letsjamApi', MusiciansCtrl]);
  function MusiciansCtrl($state, letsjamApi){
    var vm = this;

    letsjamApi.getUsers(function(data){
    	vm.users = data;
    	console.log(vm.users)
    });
    //vm.users = users;

    

    vm.selectUser = function(id){
    	letsjamApi.setUserId(id);
    	$state.go("app.teams");

    };
  };
})();
