angular.module('simulando_popup.controllers', [])

.controller('SimulandoPopupCtrl', function($scope, $stateParams,$state,$rootScope,$ionicPopup,gettextCatalog,xml_data,$funciones,konfig,$timeout,items_menu,socket_log) {
    $scope.simulando_popup_proiektorea_itzali_click=function(){
        /*var msg='<sinta sarr="MENU:SONIDO"/>';
        call_filtro_msg(msg,$state,$rootScope,$ionicPopup,gettextCatalog,$scope,xml_data,$funciones,konfig,$timeout,items_menu,socket_log);*/
        popup_proy($scope,'proiektorea_itzali');
    }
    $scope.simulando_popup_espera_click=function(){
        var msg='<sinta sarr="ESPERA:Esperando a que el sistema se inicie"/>';
        //call_filtro_msg(msg,$state,$rootScope,$ionicPopup,gettextCatalog,$scope,xml_data,$funciones,konfig,$timeout,items_menu,socket_log);
        $scope.filtro_msg(msg);
    }
    $scope.simulando_popup_errorea_click=function(){
        var msg='<sinta sarr="ERROR:Errorea gertatu da"/>';
        //call_filtro_msg(msg,$state,$rootScope,$ionicPopup,gettextCatalog,$scope,xml_data,$funciones,konfig,$timeout,items_menu,socket_log);
        $scope.filtro_msg(msg);
    }
    $scope.simulando_popup_alerta_click=function(){
        var msg='<sinta sarr="ALERT:COD0:Alerta kodearekin da hau"/>';
        $scope.filtro_msg(msg);    
    }
})