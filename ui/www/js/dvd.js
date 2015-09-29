angular.module('dvd.controllers', [])

.controller('DvdCtrl', function($scope, $stateParams,xml_data,$funciones,$state,konfig,$rootScope,gettextCatalog) {
    $scope.nagusia_dvd_bolumena_value=0;
    nagusia_dvd_set_testua_on($scope,gettextCatalog,"ON");
    $scope.nagusia_dvd_bolumena_ken_click=function(){
        send_nagusia_dvd_bolumena_ken_message(xml_data,$funciones);
    }
    $scope.nagusia_dvd_bolumena_gehi_click=function(){
        send_nagusia_dvd_bolumena_gehi_message(xml_data,$funciones);
    }
    $scope.nagusia_dvd_ezkerrera_click=function(){
        send_nagusia_dvd_ezkerrera_message(xml_data,$funciones);
    }    
    $scope.nagusia_dvd_gora_click=function(){
        send_nagusia_dvd_gora_message(xml_data,$funciones);
    }
    $scope.nagusia_dvd_onetsi_click=function(){
        send_nagusia_dvd_onetsi_message(xml_data,$funciones);
    }
    $scope.nagusia_dvd_eskubira_click=function(){
        send_nagusia_dvd_eskubira_message(xml_data,$funciones);
    }
    $scope.nagusia_dvd_behera_click=function(){
        send_nagusia_dvd_behera_message(xml_data,$funciones);
    }
    $scope.nagusia_dvd_rstep_click=function(){
        send_nagusia_dvd_rstep_message(xml_data,$funciones);
    }
    $scope.nagusia_dvd_fstep_click=function(){
        send_nagusia_dvd_fstep_message(xml_data,$funciones);
    }
    $scope.nagusia_dvd_play_click=function(){
        send_nagusia_dvd_play_message(xml_data,$funciones);
    }
    $scope.nagusia_dvd_stop_click=function(){
        send_nagusia_dvd_stop_message(xml_data,$funciones);
    }
    $scope.nagusia_dvd_pause_click=function(){
        send_nagusia_dvd_pause_message(xml_data,$funciones);
    }
    $scope.nagusia_dvd_menua_pantailan_click=function(){
        send_nagusia_dvd_menua_pantailan_message(xml_data,$funciones);
    }
    $scope.nagusia_dvd_atzera_click=function(){
        send_nagusia_dvd_atzera_message(xml_data,$funciones);
    }
    $scope.nagusia_dvd_aurrera_click=function(){
        send_nagusia_dvd_aurrera_message(xml_data,$funciones);
    }
    $scope.nagusia_dvd_on_click=function(){
        send_nagusia_dvd_on_message(xml_data,$funciones);
    }
    $scope.$on('nagusia_dvd_mezuak_tratatu', function(event, args){
        var mezu_v=args[0];
        nagusia_dvd_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,konfig,$scope,gettextCatalog);
    });
})
function send_nagusia_dvd_bolumena_ken_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'dvd','control_de_niveles','dvd_vol_behera',$funciones);
  $funciones.send_xml(xml_string); 
}
function send_nagusia_dvd_bolumena_gehi_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'dvd','control_de_niveles','dvd_vol_gora',$funciones);
  $funciones.send_xml(xml_string); 
}
function send_nagusia_dvd_ezkerrera_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'dvd','control_de_niveles','oeste',$funciones);
  $funciones.send_xml(xml_string);   
}
function send_nagusia_dvd_gora_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'dvd','control_de_niveles','norte',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_dvd_onetsi_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'dvd','control_de_niveles','aceptar',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_dvd_eskubira_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'dvd','control_de_niveles','este',$funciones);
  $funciones.send_xml(xml_string);   
}
function send_nagusia_dvd_behera_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'dvd','control_de_niveles','sur',$funciones);
  $funciones.send_xml(xml_string);   
}
function send_nagusia_dvd_rstep_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'dvd','control_de_niveles','rstep',$funciones);
  $funciones.send_xml(xml_string);   
}
function send_nagusia_dvd_fstep_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'dvd','control_de_niveles','fstep',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_dvd_play_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'dvd','play_pause_eta_abar','activar',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_dvd_stop_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'dvd','play_pause_eta_abar','parar',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_dvd_pause_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'dvd','play_pause_eta_abar','pausa',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_dvd_menua_pantailan_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'dvd','play_pause_eta_abar','menu_en_pantalla',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_dvd_atzera_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'dvd','play_pause_eta_abar','retroceder',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_dvd_aurrera_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'dvd','play_pause_eta_abar','avanzar',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_dvd_on_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'dvd','play_pause_eta_abar','on_off',$funciones);
  $funciones.send_xml(xml_string);   
}
function nagusia_dvd_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,konfig,$scope,gettextCatalog){
    var object_name='dvd';
    var panel_name='control_de_niveles';    
    var id_button_aurrizkia='id_button_nagusia_dvd_';
    var sarrera='';
    var panel_name_play="play_pause_eta_abar";                                
    if ($funciones.funciones_dispositiboa_aktibo_dago($state, mezu_v[0],null,$funciones)) {
        		switch (mezu_v[1]) {
			case "VOLUMEN" :
				$scope.nagusia_dvd_bolumena_value=mezu_v[2];                                
				break;
			case "NORTE" :
			case "SUR" :
			case "ESTE" :
			case "OESTE" :
			case "ACEPTAR" :
				sarrera=angular.lowercase(mezu_v[1]);
				$funciones.funciones_multzo_feed(sarrera, panel_name, konfig.feed_dvd_norabideak,$funciones,object_name,xml_data,id_button_aurrizkia);				
                                break;
			case "ACTIVAR" :
			case "PARAR" :
			case "PAUSA" :
			case "RETROCEDER" :
			case "AVANZAR" :
                                sarrera=angular.lowercase(mezu_v[1]);
				$funciones.funciones_multzo_feed(sarrera, panel_name_play, konfig.feed_dvd_botoiak,$funciones,object_name,xml_data,id_button_aurrizkia);
				break;
			case "RSTEP" :
				$funciones.sakatua_utzi('id_button_nagusia_dvd_rstep',object_name,panel_name,'rstep',$funciones,xml_data);
				$funciones.askatua_utzi('id_button_nagusia_dvd_fstep',object_name,panel_name,'fstep',$funciones,xml_data);
                                break;
			case "FSTEP" :
				$funciones.sakatua_utzi('id_button_nagusia_dvd_fstep',object_name,panel_name,'fstep',$funciones,xml_data);
				$funciones.askatua_utzi('id_button_nagusia_dvd_rstep',object_name,panel_name,'rstep',$funciones,xml_data);
				break;
			case "MENU_PANTALLA" :
				$funciones.sakatua_utzi('id_button_nagusia_dvd_menu_pantalla',object_name,panel_name_play,'menu_en_pantalla',$funciones,xml_data);
				break;
			case "ON" :
				nagusia_dvd_set_testua_on($scope,gettextCatalog,"OFF");
                                break;
			case "OFF" :
				nagusia_dvd_set_testua_on($scope,gettextCatalog,"ON");
                                break;
			default :
				break;
			}
    }
}
function nagusia_dvd_set_testua_on($scope,gettextCatalog,dvd_on_label){
    $scope.nagusia_dvd_on_label=gettextCatalog.getString(dvd_on_label);
    //intelsat-2015
    $scope.nagusia_dvd_on_class="button-power-off";
    if(dvd_on_label=="ON"){
        $scope.nagusia_dvd_on_class="button-power-on";
    }
}    