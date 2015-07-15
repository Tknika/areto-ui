angular.module('ordenadore_nagusia.controllers', [])

.controller('OrdenadoreNagusiaCtrl', function($scope, $stateParams,xml_data,$funciones) {
    $scope.nagusia_ordenadore_nagusia_zoom_gehi_click=function(){
        send_nagusia_ordenadore_nagusia_zoom_gehi_message(xml_data,$funciones);
    }
    $scope.nagusia_ordenadore_nagusia_zoom_ken_click=function(){
        send_nagusia_ordenadore_nagusia_zoom_ken_message(xml_data,$funciones);
    }
    $scope.nagusia_ordenadore_nagusia_ezkerrera_click=function(){
        send_nagusia_ordenadore_nagusia_ezkerrera_message(xml_data,$funciones);
    }
    $scope.nagusia_ordenadore_nagusia_gora_click=function(){
        send_nagusia_ordenadore_nagusia_gora_message(xml_data,$funciones);
    }
    $scope.nagusia_ordenadore_nagusia_eskubira_click=function(){
        send_nagusia_ordenadore_nagusia_eskubira_message(xml_data,$funciones);
    }
    $scope.nagusia_ordenadore_nagusia_behera_click=function(){
        send_nagusia_ordenadore_nagusia_behera_message(xml_data,$funciones);
    }
    $scope.nagusia_ordenadore_nagusia_angelu_zabalaren_posizioa_click=function(){
        send_nagusia_ordenadore_nagusia_angelu_zabalaren_posizioa_message(xml_data,$funciones);
    }
    $scope.nagusia_ordenadore_nagusia_lehenetsitako_posizioa1_click=function(){
        send_nagusia_ordenadore_nagusia_lehenetsitako_posizioa1_message(xml_data,$funciones);
    }
    $scope.nagusia_ordenadore_nagusia_lehenetsitako_posizioa2_click=function(){
        send_nagusia_ordenadore_nagusia_lehenetsitako_posizioa2_message(xml_data,$funciones);
    }
    $scope.nagusia_ordenadore_nagusia_imajina_handitu_txikitu_click=function(){
        send_nagusia_ordenadore_nagusia_imajina_handitu_txikitu_message(xml_data,$funciones);
    }
    $scope.nagusia_ordenadore_nagusia_imajina_zentratu_click=function(){
        send_nagusia_ordenadore_nagusia_imajina_zentratu_message(xml_data,$funciones);
    }
    $scope.nagusia_ordenadore_nagusia_ordenadore_kamara_nahastu_bai_ez_click=function(){
        send_nagusia_ordenadore_nagusia_ordenadore_kamara_nahastu_bai_ez_message(xml_data,$funciones);
    }
})
function send_nagusia_ordenadore_nagusia_zoom_gehi_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'ordenador_principal','control_camara_principal','zoom_mas',$funciones);
  $funciones.send_xml(xml_string);
}
function send_nagusia_ordenadore_nagusia_zoom_ken_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'ordenador_principal','control_camara_principal','zoom_menos',$funciones);
  $funciones.send_xml(xml_string);
}
function send_nagusia_ordenadore_nagusia_ezkerrera_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'ordenador_principal','control_camara_principal','kamara_ezkerrera',$funciones);
  $funciones.send_xml(xml_string);  
}  
function send_nagusia_ordenadore_nagusia_gora_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'ordenador_principal','control_camara_principal','kamara_gora',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_ordenadore_nagusia_eskubira_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'ordenador_principal','control_camara_principal','kamara_eskubira',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_ordenadore_nagusia_behera_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'ordenador_principal','control_camara_principal','kamara_behera',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_ordenadore_nagusia_angelu_zabalaren_posizioa_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'ordenador_principal','control_camara_principal','posicion_angulo_ancho',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_ordenadore_nagusia_lehenetsitako_posizioa1_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'ordenador_principal','control_camara_principal','posicion_prefijada1',$funciones);
  $funciones.send_xml(xml_string);
}
function send_nagusia_ordenadore_nagusia_lehenetsitako_posizioa2_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'ordenador_principal','control_camara_principal','posicion_prefijada2',$funciones);
  $funciones.send_xml(xml_string);
}
function send_nagusia_ordenadore_nagusia_imajina_handitu_txikitu_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'ordenador_principal','ajustar_imagen_ordenador','agrandar_achicar',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_ordenadore_nagusia_imajina_zentratu_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'ordenador_principal','ajustar_imagen_ordenador','centrar_imagen',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_ordenadore_nagusia_ordenadore_kamara_nahastu_bai_ez_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'ordenador_principal','ajustar_imagen_ordenador','mezclar_camara_ord',$funciones);
  $funciones.send_xml(xml_string);  
}