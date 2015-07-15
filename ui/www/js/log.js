angular.module('log.controllers', [])

.controller('LogCtrl', function($scope, $stateParams,$scope,socket_log,$ionicHistory) {
    $ionicHistory.nextViewOptions({
     disableBack: true
    });
    $scope.socket_log_value=socket_log.log;
    $scope.$apply();
    $scope.log_garbitu_click=function(){
        $scope.socket_log_value='';
        socket_log.log='';
    }
})