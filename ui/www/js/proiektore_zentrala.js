angular.module('proiektore_zentrala.controllers', [])

.controller('ProiektoreZentralaCtrl', function($scope, $stateParams,xml_data,$funciones,konfig,gettextCatalog) {
    if(konfig.bakup_proiektore_zentrala_piztu!=null){
        $scope.proiektore_zentrala_piztu=konfig.bakup_proiektore_zentrala_piztu;
        $scope.proiektore_zentrala_piztu_text=konfig.bakup_proiektore_zentrala_piztu_text;
        $scope.proiektore_zentrala_piztu_disabled=konfig.bakup_proiektore_zentrala_piztu_disabled;
        set_nagusia_proiektore_zentrala_all_enabled($scope.proiektore_zentrala_piztu,$funciones);
    }else{        
        if($scope.proiektore_zentrala_piztu==null){
            $scope.proiektore_zentrala_piztu=false;
            $scope.proiektore_zentrala_piztu_text=$funciones.get_eragotzita_text(gettextCatalog);
            $scope.proiektore_zentrala_piztu_disabled=true;
            set_nagusia_proiektore_zentrala_all_enabled(false,$funciones);
        }
    }
    /*if(konfig.is_nagusia_proiektore_zentrala_create_status_interval_timeout==null){
        konfig.is_nagusia_proiektore_zentrala_create_status_interval_timeout=true;
        nagusia_proiektore_zentrala_create_status_interval_timeout($state,$funciones,$interval,$timeout);
    }*/        
    $scope.nagusia_proiektore_zentrala_piztu_click=function(){
        send_nagusia_proiektore_zentrala_piztu_message(xml_data,$funciones);
    }    
    $scope.nagusia_proiektore_zentrala_itzali_click=function(){
        var msg='Proiektorea itzaltzen baduzu 5 minutu itxaron beharko duzu berriro piztu ahal izateko lanpara hozten den bitartean. Proiektorea itzali nahi duzu?';
        $scope.showPopup(msg,'','proiektore_zentrala_itzali');
    }
    $scope.nagusia_proiektore_zentrala_muteatu_click=function(){
        send_nagusia_proiektore_zentrala_muteatu_message(xml_data,$funciones);
    }
    $scope.nagusia_proiektore_zentrala_desmuteatu_click=function(){
        send_nagusia_proiektore_zentrala_desmuteatu_message(xml_data,$funciones);
    }    
    $scope.nagusia_proiektore_zentrala_dvd_click=function(){
        send_nagusia_proiektore_zentrala_dvd_message(xml_data,$funciones);
    }
    $scope.nagusia_proiektore_zentrala_dvdgrab_click=function(){
        send_nagusia_proiektore_zentrala_dvdgrab_message(xml_data,$funciones);
    }
    $scope.nagusia_proiektore_zentrala_dokumentu_kamera_click=function(){
        send_nagusia_proiektore_zentrala_dokumentu_kamera_message(xml_data,$funciones);
    }
    $scope.nagusia_proiektore_zentrala_portatil1_click=function(){
        send_nagusia_proiektore_zentrala_portatil1_message(xml_data,$funciones);
    }
    $scope.nagusia_proiektore_zentrala_portatil2_click=function(){
        send_nagusia_proiektore_zentrala_portatil2_message(xml_data,$funciones);
    }
    $scope.nagusia_proiektore_zentrala_portatil3_click=function(){
        send_nagusia_proiektore_zentrala_portatil3_message(xml_data,$funciones);
    }
    $scope.nagusia_proiektore_zentrala_think_client_click=function(){
        send_nagusia_proiektore_zentrala_think_client_message(xml_data,$funciones);
    }
    $scope.nagusia_proiektore_zentrala_pclurra_click=function(){
        send_nagusia_proiektore_zentrala_pclurra_message(xml_data,$funciones);
    }
    $scope.nagusia_proiektore_zentrala_atril_click=function(){
        send_nagusia_proiektore_zentrala_atril_message(xml_data,$funciones);
    }
    $scope.proiektore_zentrala_piztu_toggle_change=function(){
        if($scope.proiektore_zentrala_piztu==true){
            $scope.proiektore_zentrala_piztu=false;
            $scope.proiektore_zentrala_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
            //$scope.$apply();
            konfig.bakup_proiektore_zentrala_piztu_disabled=false;
            konfig.bakup_proiektore_zentrala_piztu=false;
            konfig.bakup_proiektore_zentrala_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
            popup_proy($scope,'proiektore_zentrala_itzali');
        }else{
            $scope.proiektore_zentrala_piztu=true;
            $scope.proiektore_zentrala_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
            //$scope.$apply();
            konfig.bakup_proiektore_zentrala_piztu_disabled=false;
            konfig.bakup_proiektore_zentrala_piztu=true;
            konfig.bakup_proiektore_zentrala_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
            send_nagusia_proiektore_zentrala_piztu_toggle_message($scope,xml_data,$funciones);
            set_nagusia_proiektore_zentrala_all_enabled(true,$funciones);
        }                
    }
    $scope.$on('set_nagusia_proiektore_zentrala_on', function(event, args){
        $scope.proiektore_zentrala_piztu_disabled=false;
        $scope.proiektore_zentrala_piztu=true;
        //intelsat-2015
        //$scope.proiektore_zentrala_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
        var proiektore_zentrala_piztu_text_value=proiektore_zentrala_get_piztu_text(args[0],$funciones,gettextCatalog);
        $scope.proiektore_zentrala_piztu_text=proiektore_zentrala_piztu_text_value;        
        //$scope.$apply();
        konfig.bakup_proiektore_zentrala_piztu_disabled=false;
        konfig.bakup_proiektore_zentrala_piztu=true;
        //intelsat-2015
        //konfig.bakup_proiektore_zentrala_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
        konfig.bakup_proiektore_zentrala_piztu_text=proiektore_zentrala_piztu_text_value;
        set_nagusia_proiektore_zentrala_all_enabled(true,$funciones);
    });
    $scope.$on('set_nagusia_proiektore_zentrala_off', function(event, args){
        $scope.proiektore_zentrala_piztu_disabled=false;
        $scope.proiektore_zentrala_piztu=false;
        //intelsat-2015
        //$scope.proiektore_zentrala_piztu_text=$funciones.get_itzalita_text(gettextCatalog);        
        var proiektore_zentrala_piztu_text_value=proiektore_zentrala_get_itzalita_text(args[0],$funciones,gettextCatalog); 
        $scope.proiektore_zentrala_piztu_text=proiektore_zentrala_piztu_text_value;       
        //$scope.$apply();
        konfig.bakup_proiektore_zentrala_piztu_disabled=false;
        konfig.bakup_proiektore_zentrala_piztu=false;
        //intelsat-2015
        //konfig.bakup_proiektore_zentrala_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
        konfig.bakup_proiektore_zentrala_piztu_text=proiektore_zentrala_piztu_text_value;
        set_nagusia_proiektore_zentrala_all_enabled(false,$funciones);
    });
    $scope.$on('set_nagusia_proiektore_zentrala_disabled', function(event, args){
        $scope.proiektore_zentrala_piztu_disabled=true;
        $scope.proiektore_zentrala_piztu=false;
        $scope.proiektore_zentrala_piztu_text=args[0];
        //$scope.$apply();
        konfig.bakup_proiektore_zentrala_piztu_disabled=true;
        konfig.bakup_proiektore_zentrala_piztu=false;
        konfig.bakup_proiektore_zentrala_piztu_text=args[0];
        set_nagusia_proiektore_zentrala_all_enabled(false,$funciones);
    });
})
function send_nagusia_proiektore_zentrala_piztu_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'proyector_central','encender_apagar','encender',$funciones);
  $funciones.send_xml(xml_string);
}   
function send_nagusia_proiektore_zentrala_muteatu_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'proyector_central','encender_apagar','activar',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_proiektore_zentrala_desmuteatu_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'proyector_central','encender_apagar','desactivar',$funciones);
  $funciones.send_xml(xml_string);  
}   
function send_nagusia_proiektore_zentrala_dvd_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'proyector_central','seleccion_en_pizarra','dvd',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_proiektore_zentrala_dvdgrab_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'proyector_central','seleccion_en_pizarra','dvdgrab',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_proiektore_zentrala_dokumentu_kamera_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'proyector_central','seleccion_en_pizarra','camara_de_documentos',$funciones);
  $funciones.send_xml(xml_string);    
}
function send_nagusia_proiektore_zentrala_portatil1_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'proyector_central','seleccion_en_pizarra','portatil1',$funciones);
  $funciones.send_xml(xml_string);  
}   
function send_nagusia_proiektore_zentrala_portatil2_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'proyector_central','seleccion_en_pizarra','portatil2',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_proiektore_zentrala_portatil3_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'proyector_central','seleccion_en_pizarra','portatil3',$funciones);
  $funciones.send_xml(xml_string);   
}
function send_nagusia_proiektore_zentrala_think_client_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'proyector_central','seleccion_en_pizarra','think_client',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_proiektore_zentrala_pclurra_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'proyector_central','seleccion_en_pizarra','pcsuelo',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_proiektore_zentrala_atril_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'proyector_central','seleccion_en_pizarra','atril',$funciones);
  $funciones.send_xml(xml_string);    
}
function send_nagusia_proiektore_zentrala_piztu_toggle_message($scope,xml_data,$funciones){
    if($scope.proiektore_zentrala_piztu==true){
        send_nagusia_proiektore_zentrala_piztu_message(xml_data,$funciones);
    }else{
        send_nagusia_proiektore_zentrala_itzali_message(xml_data,$funciones);
    }
}
function set_nagusia_proiektore_zentrala_all_enabled(enabled,$funciones){
    $funciones.funciones_set_nagusia_proiektorea_all_enabled(enabled,$funciones,'proiektore_zentrala');
}
//intelsat-2015
function proiektore_zentrala_get_piztu_text(piztu_text,$funciones,gettextCatalog){
    var result=$funciones.get_piztuta_text(gettextCatalog);
    if(piztu_text.length>0){
        result=piztu_text;
    }
    return result;
}
//intelsat-2015
function proiektore_zentrala_get_itzalita_text(itzalita_text,$funciones,gettextCatalog){
    var result=$funciones.get_itzalita_text(gettextCatalog);
    if(itzalita_text.length>0){
        result=itzalita_text;
    }
    return result;
}