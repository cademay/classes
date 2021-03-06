'use strict';

cs142App.controller('UserDetailController', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
    /*
     * Since the route is specified as '/users/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = $routeParams.userId;

    /*console.log('UserDetail of ', userId);*/

    /*console.log('window.cs142models.userModel($routeParams.userId)', window.cs142models.userModel(userId));*/

    /*$scope.userObject = window.cs142models.userModel(userId);*/


    var url = "/user/" + userId;


    function doneCallback(model) { 
	$scope.$apply(function () { 
		$scope.userObject = model;
		$scope.main.app_context = "User Detail of " + model.first_name + " " + model.last_name;
	});
    }


    $scope.FetchModel(url, doneCallback); 


  }]);
