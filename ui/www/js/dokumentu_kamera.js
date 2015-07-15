angular.module('dokumentu_kamera.controllers', [])

.controller('DokumentuKameraCtrl', function($scope, $stateParams,xml_data,$funciones,$state,xml_data) {
    $scope.dokumentu_kamera_fokua_gehi_click=function(){
        send_dokumentu_kamera_fokua_gehi_message(xml_data,$funciones);
    }
    $scope.dokumentu_kamera_zoom_gehi_click=function(){
        send_dokumentu_kamera_zoom_gehi_message(xml_data,$funciones);
    }
    $scope.dokumentu_kamera_fokua_ken_click=function(){
        send_dokumentu_kamera_fokua_ken_message(xml_data,$funciones);
    }
    $scope.dokumentu_kamera_zoom_ken_click=function(){
        send_dokumentu_kamera_zoom_ken_message(xml_data,$funciones);
    }
    $scope.dokumentu_kamera_piztu_click=function(){
        feed_lokala_nagusia_dokumentu_kamera_piztu(xml_data,'camara_de_documentos','control_camara_doc','encender_campana',$funciones,$state);        
        send_dokumentu_kamera_piztu_message(xml_data,$funciones);
    }
    $scope.dokumentu_kamera_itzali_click=function(){
        feed_lokala_nagusia_dokumentu_kamera_itzali(xml_data,'camara_de_documentos','control_camara_doc','apagar_campana',$funciones,$state);
        send_dokumentu_kamera_itzali_message(xml_data,$funciones);
    }
    $scope.dokumentu_kamera_a3_tamainua_click=function(){
        send_dokumentu_kamera_a3_tamainua_message(xml_data,$funciones);
    }
    $scope.dokumentu_kamera_a4_tamainua_click=function(){
        send_dokumentu_kamera_a4_tamainua_message(xml_data,$funciones);
    }
    $scope.$on('dokumentu_kamera_mezuak_tratatu', function(event, args){
        var mezu_v=args[0];
        dokumentu_kamera_mezuak_tratatu(mezu_v,$state,$funciones,xml_data);
    });
})
function send_dokumentu_kamera_fokua_gehi_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'camara_de_documentos','ajuste_de_lentes','foco_mas',$funciones);
  $funciones.send_xml(xml_string);
}
function send_dokumentu_kamera_zoom_gehi_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'camara_de_documentos','ajuste_de_lentes','zoom_mas',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_dokumentu_kamera_fokua_ken_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'camara_de_documentos','ajuste_de_lentes','foco_menos',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_dokumentu_kamera_zoom_ken_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'camara_de_documentos','ajuste_de_lentes','zoom_menos',$funciones);
  $funciones.send_xml(xml_string);   
}
function send_dokumentu_kamera_piztu_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'camara_de_documentos','control_camara_doc','encender_campana',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_dokumentu_kamera_itzali_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'camara_de_documentos','control_camara_doc','apagar_campana',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_dokumentu_kamera_a3_tamainua_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'camara_de_documentos','control_camara_doc','tamaño_a3',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_dokumentu_kamera_a4_tamainua_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'camara_de_documentos','control_camara_doc','tamaño_a4',$funciones);
  $funciones.send_xml(xml_string);  
}
function dokumentu_kamera_mezuak_tratatu(mezu_v,$state,$funciones,xml_data){
  var object_name='camara_de_documentos';
  var panel_name='control_camara_doc';  
  if ($funciones.funciones_dispositiboa_aktibo_dago($state, mezu_v[0],null,$funciones)) {
    switch (mezu_v[1]) {
        case "ON" :
            $funciones.sakatua_utzi('id_button_nagusia_dokumentu_kamera_piztu',object_name,panel_name,'encender_campana',$funciones,xml_data);
            $funciones.askatua_utzi('id_button_nagusia_dokumentu_kamera_itzali',object_name,panel_name,'apagar_campana',$funciones,xml_data);
            break;
        case "OFF" :
            $funciones.sakatua_utzi('id_button_nagusia_dokumentu_kamera_itzali',object_name,panel_name,'apagar_campana',$funciones,xml_data);
            $funciones.askatua_utzi('id_button_nagusia_dokumentu_kamera_piztu',object_name,panel_name,'encender_campana',$funciones,xml_data);            
            break;
	case "SUBIR_FOCO" :
            break;
	case "BAJAR_FOCO" :
            break;
	case "DINA_A3" :
            $funciones.sakatua_utzi('id_button_nagusia_dokumentu_kamera_a3',object_name,panel_name,'tamaño_a3',$funciones,xml_data);
            $funciones.askatua_utzi('id_button_nagusia_dokumentu_kamera_a4',object_name,panel_name,'tamaño_a4',$funciones,xml_data);
            break;
        case "DINA_A4" :
            $funciones.askatua_utzi('id_button_nagusia_dokumentu_kamera_a3',object_name,panel_name,'tamaño_a3',$funciones,xml_data);
            $funciones.sakatua_utzi('id_button_nagusia_dokumentu_kamera_a4',object_name,panel_name,'tamaño_a4',$funciones,xml_data);           
            break;
	case "MEZCLAR_CAMARA_CAMARADOC" :
            break;
        case "AYUDA" :
            break;
	case "ZOOM" :
            break;
	default :
            break;
    }
  } 
}
function feed_lokala_nagusia_dokumentu_kamera_piztu(xml_data,object_name,panel_name,elem_name,$funciones,$state){
  var msg_attr=null;
  var is_elem=true;
  var elem=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,object_name,panel_name,elem_name,$funciones,msg_attr,is_elem);
  if($funciones.funciones_is_feed_lokala(elem)){
    var mezu_v=elem._msg.split(':');
    camaradoc_feed(mezu_v,xml_data,$state,$funciones);
  }
}
function feed_lokala_nagusia_dokumentu_kamera_itzali(xml_data,object_name,panel_name,elem_name,$funciones,$state){
  feed_lokala_nagusia_dokumentu_kamera_piztu(xml_data,object_name,panel_name,elem_name,$funciones,$state);  
}
function camaradoc_feed(mezu_v,xml_data,$state,$funciones){
  var object_name='camara_de_documentos';
  var panel_name='control_camara_doc';  
  if ($funciones.funciones_dispositiboa_aktibo_dago($state, mezu_v[0],null,$funciones)) {
    switch (mezu_v[1]) {
        case "ENCENDER" :
            $funciones.sakatua_utzi('id_button_nagusia_dokumentu_kamera_piztu',object_name,panel_name,'encender_campana',$funciones,xml_data);
            $funciones.askatua_utzi('id_button_nagusia_dokumentu_kamera_itzali',object_name,panel_name,'apagar_campana',$funciones,xml_data);
            break;
        case "APAGAR" :
            $funciones.sakatua_utzi('id_button_nagusia_dokumentu_kamera_itzali',object_name,panel_name,'apagar_campana',$funciones,xml_data);
            $funciones.askatua_utzi('id_button_nagusia_dokumentu_kamera_piztu',object_name,panel_name,'encender_campana',$funciones,xml_data);            
            break;
	case "DINA_A3" :
            $funciones.sakatua_utzi('id_button_nagusia_dokumentu_kamera_a3',object_name,panel_name,'tamaño_a3',$funciones,xml_data);
            $funciones.askatua_utzi('id_button_nagusia_dokumentu_kamera_a4',object_name,panel_name,'tamaño_a4',$funciones,xml_data);
            break;
        case "DINA_A4" :
            $funciones.askatua_utzi('id_button_nagusia_dokumentu_kamera_a3',object_name,panel_name,'tamaño_a3',$funciones,xml_data);
            $funciones.sakatua_utzi('id_button_nagusia_dokumentu_kamera_a4',object_name,panel_name,'tamaño_a4',$funciones,xml_data);           
            break;
	default :
            break;
    }
  }  
}