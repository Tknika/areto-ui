angular.module('itzali.controllers', [])

.controller('ItzaliCtrl', function($scope, $stateParams,xml_data,$funciones,$ionicHistory) {
    $ionicHistory.nextViewOptions({
     disableBack: true
    });
    $scope.itzali_itzali_click=function(){
        send_itzali_itzali_message(xml_data,$funciones);
    }
})
function send_itzali_itzali_message(xml_data,$funciones){
   var xml_string=get_send_xml_string(xml_data,'menu_items.apagar.apagar._msg',$funciones);
   $funciones.send_xml(xml_string);
}