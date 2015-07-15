angular.module('camara1.controllers', [])

.controller('Camara1Ctrl', function($scope, $stateParams,xml_data,$funciones) {
    $scope.nagusia_camara1_zoom_gehi_click=function(){
        $funciones.send_nagusia_camara_zoom_gehi_message(xml_data,$funciones,'camara1');
    }
    $scope.nagusia_camara1_zoom_ken_click=function(){
        $funciones.send_nagusia_camara_zoom_ken_message(xml_data,$funciones,'camara1');
    }
    $scope.nagusia_camara1_posizio_guztiak_ikusi_click=function(){
        $funciones.send_nagusia_camara_posizio_guztiak_ikusi(xml_data,$funciones,'camara1');
    }
    $scope.nagusia_camara1_ezkerrera_click=function(){
        $funciones.send_nagusia_camara_ezkerrera(xml_data,$funciones,'camara1');
    }
    $scope.nagusia_camara1_gora_click=function(){
        $funciones.send_nagusia_camara_gora(xml_data,$funciones,'camara1');
    }
    $scope.nagusia_camara1_eskubira_click=function(){
        $funciones.send_nagusia_camara_eskubira(xml_data,$funciones,'camara1');
    }
    $scope.nagusia_camara1_behera_click=function(){
        $funciones.send_nagusia_camara_behera(xml_data,$funciones,'camara1');
    }
})