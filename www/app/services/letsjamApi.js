(function(){
  'use strict';
  angular.module('eliteApp').factory('letsjamApi', ['$http',letsjamApi]);
  function letsjamApi($http){

    var currentUserId;

    function getJams(){
      return jams
    }

    function getGroups(){
      return groups
    }

    function getUsers(callback){
      $http.get("http://beta.letsjam.com/api/v1/users")
        .success(function(data){
          callback(data);
          //console.log(data);
        });
    }

    function getUserData(callback){
      $http.get("http://beta.letsjam.com/api/v1/users/"+currentUserId)
        .success(function(data, status){
          console.log("Recieved data via http",data, status);
          callback(data);
        })
        .error(function(){
          console.log("erros retireving data via http")
        });
    }

    function setUserId(userId){
      currentUserId = userId;
    }

    return{
      getJams: getJams,
      getGroups: getGroups,
      getUsers: getUsers,
      setUserId: setUserId
    };
  };
})();
