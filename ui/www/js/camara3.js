angular.module('camara3.controllers', [])

.controller('Camara3Ctrl', function($scope, $stateParams,xml_data,$funciones) {
    $scope.nagusia_camara3_zoom_gehi_click=function(){
        $funciones.send_nagusia_camara_zoom_gehi_message(xml_data,$funciones,'camara3');
    }
    $scope.nagusia_camara3_zoom_ken_click=function(){
        $funciones.send_nagusia_camara_zoom_ken_message(xml_data,$funciones,'camara3');
    }
    $scope.nagusia_camara3_posizio_guztiak_ikusi_click=function(){
        $funciones.send_nagusia_camara_posizio_guztiak_ikusi(xml_data,$funciones,'camara3');
    }
    $scope.nagusia_camara3_ezkerrera_click=function(){
        $funciones.send_nagusia_camara_ezkerrera(xml_data,$funciones,'camara3');
    }
    $scope.nagusia_camara3_gora_click=function(){
        $funciones.send_nagusia_camara_gora(xml_data,$funciones,'camara3');
    }
    $scope.nagusia_camara3_eskubira_click=function(){
        $funciones.send_nagusia_camara_eskubira(xml_data,$funciones,'camara3');
    }
    $scope.nagusia_camara3_behera_click=function(){
        $funciones.send_nagusia_camara_behera(xml_data,$funciones,'camara3');
    }
})