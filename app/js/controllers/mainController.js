app.controller('MainCtrl', [
'$scope',
function($scope){

  $scope.phoneNumber = ''
  $scope.userId = "Slack id info"


  $scope.addPhoneNumber = function(number){
    //create new user using slack info and phoneNumber
    console.log(number)
    $scope.phoneNumber = number;
  }

  console.log($scope.phoneNumber)



}])
