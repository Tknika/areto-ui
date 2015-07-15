angular.module('soinua.controllers', [])

.controller('SoinuaCtrl', function($scope, $stateParams,xml_data,$funciones,$timeout,$rootScope,$state,$ionicHistory) {
    $ionicHistory.nextViewOptions({
     disableBack: true
    });
    var pantalla="SONIDO";
    $scope.soinua_mikr1_bolumena_value=0;
    $scope.soinua_mikr2_bolumena_value=0;
    $scope.soinua_mikr3_bolumena_value=0;
    $scope.soinua_mikr4_bolumena_value=0;
    $scope.soinua_mikr_atril_bolumena_value=0;
    $scope.soinua_mikr_atril2_bolumena_value=0;
    $scope.soinua_bolumena_value=0;
    $scope.soinua_mikr_eskua_bolumena_value=0;
    $scope.soinua_mikr_papar_bolumena_value=0;
    //
    $scope.soinua_mikr1_bolumena_desaktibatu_click=function(){
        soinua_micro_luz_feedback(pantalla, "mic1", 2,null,$state,$funciones,xml_data);
        send_soinua_bolumena_desaktibatu_message(xml_data,$funciones,'mic1');        
    }
    $scope.soinua_mikr1_bolumena_ken_click=function(){
        send_soinua_bolumena_ken_message(xml_data,$funciones,'mic1');
    }
    $scope.soinua_mikr1_bolumena_gehi_click=function(){
        send_soinua_bolumena_gehi_message(xml_data,$funciones,'mic1');
    }
    $scope.soinua_mikr1_bolumena_aktibatu_click=function(){
        soinua_micro_luz_feedback(pantalla, "mic1", 1,null,$state,$funciones,xml_data);
        send_soinua_bolumena_aktibatu_message(xml_data,$funciones,'mic1');
    }
    $scope.soinua_mikr2_bolumena_desaktibatu_click=function(){
        soinua_micro_luz_feedback(pantalla, "mic2", 2,null,$state,$funciones,xml_data);
        send_soinua_bolumena_desaktibatu_message(xml_data,$funciones,'mic2');
    }
    $scope.soinua_mikr2_bolumena_ken_click=function(){
        send_soinua_bolumena_ken_message(xml_data,$funciones,'mic2');
    }
    $scope.soinua_mikr2_bolumena_gehi_click=function(){
        send_soinua_bolumena_gehi_message(xml_data,$funciones,'mic2');
    }
    $scope.soinua_mikr2_bolumena_aktibatu_click=function(){
        soinua_micro_luz_feedback(pantalla, "mic2", 1,null,$state,$funciones,xml_data);
        send_soinua_bolumena_aktibatu_message(xml_data,$funciones,'mic2');
    }
    $scope.soinua_mikr3_bolumena_desaktibatu_click=function(){
        soinua_micro_luz_feedback(pantalla, "mic3", 2,null,$state,$funciones,xml_data);
        send_soinua_bolumena_desaktibatu_message(xml_data,$funciones,'mic3');
    }
    $scope.soinua_mikr3_bolumena_ken_click=function(){
        send_soinua_bolumena_ken_message(xml_data,$funciones,'mic3');
    }
    $scope.soinua_mikr3_bolumena_gehi_click=function(){
        send_soinua_bolumena_gehi_message(xml_data,$funciones,'mic3');
    }
    $scope.soinua_mikr3_bolumena_aktibatu_click=function(){
        soinua_micro_luz_feedback(pantalla, "mic3", 1,null,$state,$funciones,xml_data);
        send_soinua_bolumena_aktibatu_message(xml_data,$funciones,'mic3');
    }
    $scope.soinua_mikr4_bolumena_desaktibatu_click=function(){
        soinua_micro_luz_feedback(pantalla, "mic4", 2,null,$state,$funciones,xml_data);
        send_soinua_bolumena_desaktibatu_message(xml_data,$funciones,'mic4');
    }
    $scope.soinua_mikr4_bolumena_ken_click=function(){
    	
        send_soinua_bolumena_ken_message(xml_data,$funciones,'mic4');
    	
    }
    $scope.soinua_mikr4_bolumena_gehi_click=function(){
        send_soinua_bolumena_gehi_message(xml_data,$funciones,'mic4');
    }
    $scope.soinua_mikr4_bolumena_aktibatu_click=function(){
        soinua_micro_luz_feedback(pantalla, "mic4", 1,null,$state,$funciones,xml_data);
        send_soinua_bolumena_aktibatu_message(xml_data,$funciones,'mic4');
    }
    $scope.soinua_mikr_atril_bolumena_desaktibatu_click=function(){
        soinua_micro_luz_feedback(pantalla, "mic_atril", 2,null,$state,$funciones,xml_data);
        send_soinua_bolumena_desaktibatu_message(xml_data,$funciones,'mic_atril');
    }
    $scope.soinua_mikr_atril_bolumena_ken_click=function(){
        send_soinua_bolumena_ken_message(xml_data,$funciones,'mic_atril');
    }
    $scope.soinua_mikr_atril_bolumena_gehi_click=function(){
        send_soinua_bolumena_gehi_message(xml_data,$funciones,'mic_atril');
    }
    $scope.soinua_mikr_atril_bolumena_aktibatu_click=function(){
        soinua_micro_luz_feedback(pantalla, "mic_atril", 1,null,$state,$funciones,xml_data);
        send_soinua_bolumena_aktibatu_message(xml_data,$funciones,'mic_atril');
    }
    $scope.soinua_mikr_atril2_bolumena_desaktibatu_click=function(){
        soinua_micro_luz_feedback(pantalla, "mic_atril2", 2,null,$state,$funciones,xml_data);
        send_soinua_bolumena_desaktibatu_message(xml_data,$funciones,'mic_atril2');
    }
    $scope.soinua_mikr_atril2_bolumena_ken_click=function(){
        send_soinua_bolumena_ken_message(xml_data,$funciones,'mic_atril2');
    }
    $scope.soinua_mikr_atril2_bolumena_gehi_click=function(){
        send_soinua_bolumena_gehi_message(xml_data,$funciones,'mic_atril2');
    }
    $scope.soinua_mikr_atril2_bolumena_aktibatu_click=function(){
        soinua_micro_luz_feedback(pantalla, "mic_atril2", 1,null,$state,$funciones,xml_data);
        send_soinua_bolumena_aktibatu_message(xml_data,$funciones,'mic_atril2');
    }
    $scope.soinua_mikr_eskua_bolumena_desaktibatu_click=function(){
        soinua_micro_luz_feedback(pantalla, "mic_eskua", 2,null,$state,$funciones,xml_data);
        send_soinua_bolumena_desaktibatu_message(xml_data,$funciones,'mic_eskua');
    }
    $scope.soinua_mikr_eskua_bolumena_ken_click=function(){
        send_soinua_bolumena_ken_message(xml_data,$funciones,'mic_eskua');
    }
    $scope.soinua_mikr_eskua_bolumena_gehi_click=function(){
        send_soinua_bolumena_gehi_message(xml_data,$funciones,'mic_eskua');
    }
    $scope.soinua_mikr_eskua_bolumena_aktibatu_click=function(){
        soinua_micro_luz_feedback(pantalla, "mic_eskua", 1,null,$state,$funciones,xml_data);
        send_soinua_bolumena_aktibatu_message(xml_data,$funciones,'mic_eskua');
    }
    $scope.soinua_mikr_papar_bolumena_desaktibatu_click=function(){
        soinua_micro_luz_feedback(pantalla, "mic_papar", 2,null,$state,$funciones,xml_data);
        send_soinua_bolumena_desaktibatu_message(xml_data,$funciones,'mic_papar');
    }
    $scope.soinua_mikr_papar_bolumena_ken_click=function(){
        send_soinua_bolumena_ken_message(xml_data,$funciones,'mic_papar');
    }
    $scope.soinua_mikr_papar_bolumena_gehi_click=function(){
        send_soinua_bolumena_gehi_message(xml_data,$funciones,'mic_papar');
    }
    $scope.soinua_mikr_papar_bolumena_aktibatu_click=function(){
        soinua_micro_luz_feedback(pantalla, "mic_papar", 1,null,$state,$funciones,xml_data);
        send_soinua_bolumena_aktibatu_message(xml_data,$funciones,'mic_papar');
    }
    $scope.soinua_datorren_soinua_isilarazi_click=function(){
        $funciones.sakatua_utzi_soinua_argiak('id_button_soinua_datorren_soinua_isilarazi','soinua_elem','entrante_silenciar',$funciones,xml_data,pantalla);     							
        $funciones.askatua_utzi_soinua_argiak('id_button_soinua_datorren_soinua_aktibatu','soinua_elem','entrante_activar',$funciones,xml_data,pantalla);        
        send_soinua_datorren_soinua_isilarazi_message(xml_data,$funciones);
    }
    $scope.soinua_datorren_soinua_aktibatu_click=function(){
        $funciones.sakatua_utzi_soinua_argiak('id_button_soinua_datorren_soinua_aktibatu','soinua_elem','entrante_activar',$funciones,xml_data,pantalla);     
	$funciones.askatua_utzi_soinua_argiak('id_button_soinua_datorren_soinua_isilarazi','soinua_elem','entrante_silenciar',$funciones,xml_data,pantalla);     				        
        send_soinua_datorren_soinua_aktibatu_message(xml_data,$funciones);
    }
    $scope.soinua_bidaltzen_soinua_isilarazi_click=function(){
        $funciones.sakatua_utzi_soinua_argiak('id_button_soinua_bidaltzen_soinua_isilarazi','soinua_elem','envia_silenciar',$funciones,xml_data,pantalla);     								
        $funciones.askatua_utzi_soinua_argiak('id_button_soinua_bidaltzen_soinua_aktibatu','soinua_elem','envia_activar',$funciones,xml_data,pantalla);             		
        send_soinua_bidaltzen_soinua_isilarazi_message(xml_data,$funciones);
    }
    $scope.soinua_bidaltzen_soinua_aktibatu_click=function(){
        $funciones.sakatua_utzi_soinua_argiak('id_button_soinua_bidaltzen_soinua_aktibatu','soinua_elem','envia_activar',$funciones,xml_data,pantalla);     
        $funciones.askatua_utzi_soinua_argiak('id_button_soinua_bidaltzen_soinua_isilarazi','soinua_elem','envia_silenciar',$funciones,xml_data,pantalla);     										
        send_soinua_bidaltzen_soinua_aktibatu_message(xml_data,$funciones);
    }
    $scope.soinua_soinu_orokorra_isilarazi_click=function(){
        $funciones.sakatua_utzi_soinua_argiak('id_button_soinua_orokorra_soinua_isilarazi','soinua_elem','general_silenciar',$funciones,xml_data,pantalla);     								
        $funciones.askatua_utzi_soinua_argiak('id_button_soinua_orokorra_soinua_aktibatu','soinua_elem','general_activar',$funciones,xml_data,pantalla);             		
        send_soinua_soinu_orokorra_isilarazi_message(xml_data,$funciones);
    }
    $scope.soinua_soinu_orokorra_aktibatu_click=function(){
        $funciones.sakatua_utzi_soinua_argiak('id_button_soinua_orokorra_soinua_aktibatu','soinua_elem','general_activar',$funciones,xml_data,pantalla);     
        $funciones.askatua_utzi_soinua_argiak('id_button_soinua_orokorra_soinua_isilarazi','soinua_elem','general_silenciar',$funciones,xml_data,pantalla);     										
        send_soinua_soinu_orokorra_aktibatu_message(xml_data,$funciones);
    }
    $scope.soinua_soinuen_mailak_doitu_bolumena_ken_click=function(){
        send_soinua_soinuen_mailak_doitu_bolumena_ken_message(xml_data,$funciones);
    }
    $scope.soinua_soinuen_mailak_doitu_bolumena_gehi_click=function(){
        send_soinua_soinuen_mailak_doitu_bolumena_gehi_message(xml_data,$funciones);
    }
    $scope.$on('set_bolumena', function(event, args){
        var field=args[0];
        var bolumena=args[1];
        //alert('bolumena='+bolumena);
        /*if(isNaN(bolumena)){
            bolumena=0;
        }*/
        bolumena=$funciones.funciones_prepare_bolumena(bolumena);
        $scope[field]=bolumena;
        $scope.$apply();
    });
    $scope.$on('soinua_sonido_mezuak_tratatu', function(event, args){
        var mezu_v=args[0];
        soinua_sonido_mezuak_tratatu(mezu_v,$state,$scope,$funciones,xml_data);
    });
})
function send_soinua_bolumena_desaktibatu_message(xml_data,$funciones,grupo_name){
   var xml_string=get_send_soinua_grupo_elem_xml_string(xml_data,grupo_name,'apagar',$funciones);
  $funciones.send_xml(xml_string); 
}
function get_send_soinua_grupo_elem_xml_string(xml_data,grupo_name,elem_name,$funciones){
   var result='';
   
   var grupo=$funciones.funciones_get_soinua_grupo(xml_data,grupo_name,$funciones);
   if(grupo!=null){
	   
       var elem=$funciones.get_grupo_elem(grupo,elem_name);
       if(elem!=null){
    	   
           result=elem._msg;
           result=$funciones.get_send_case_xml(result);
           return result;
       }
   }
   return ''; 
}
function get_soinua_grupo(xml_data,grupo_name,$funciones){
   /*if(xml_data!=null){
        if(xml_data.xml!=null){
            if(xml_data.xml!=''){
                var result='';
                for(var i in xml_data.xml.config.menu_items.sonido.grupos.grupo){
                    result=xml_data.xml.config.menu_items.sonido.grupos.grupo[i];
                    if(result._name==grupo_name){
                        return result;
                    }
                }
            }
        }
    }
    return null;*/
    return $funciones.funciones_get_soinua_grupo(xml_data,grupo_name,$funciones);
}
function send_soinua_bolumena_ken_message(xml_data,$funciones,grupo_name){
   var xml_string=get_send_soinua_grupo_elem_xml_string(xml_data,grupo_name,'behera',$funciones);   
  $funciones.send_xml(xml_string); 
}
function send_soinua_bolumena_gehi_message(xml_data,$funciones,grupo_name){
   var xml_string=get_send_soinua_grupo_elem_xml_string(xml_data,grupo_name,'gora',$funciones);
  $funciones.send_xml(xml_string); 
}
function send_soinua_bolumena_aktibatu_message(xml_data,$funciones,grupo_name){
   var xml_string=get_send_soinua_grupo_elem_xml_string(xml_data,grupo_name,'encender',$funciones);
  $funciones.send_xml(xml_string); 
}
function send_soinua_datorren_soinua_isilarazi_message(xml_data,$funciones){
   var xml_string=get_send_soinua_elem_xml_string(xml_data,'entrante_silenciar',$funciones);
   $funciones.send_xml(xml_string);
}
function get_send_soinua_elem_xml_string(xml_data,elem_name,$funciones){
   var elem=get_soinua_elem(xml_data,elem_name,$funciones);
   var result='';
   if(elem!=null){       
       result=elem._msg;
       result=$funciones.get_send_case_xml(result);
       return result;
   }
   return '';
}
function get_soinua_elem(xml_data,elem_name,$funciones){
   /*if(xml_data!=null){
        if(xml_data.xml!=null){
            if(xml_data.xml!=''){
                var result='';
                for(var i in xml_data.xml.config.menu_items.sonido.elem){
                    result=xml_data.xml.config.menu_items.sonido.elem[i];
                    if(result._name==elem_name){
                        return result;
                    }
                }
            }
        }
    }
    return null;*/
    return $funciones.funciones_get_soinua_elem(xml_data,elem_name);
}
function send_soinua_datorren_soinua_aktibatu_message(xml_data,$funciones){
   var xml_string=get_send_soinua_elem_xml_string(xml_data,'entrante_activar',$funciones);
   $funciones.send_xml(xml_string);
}
function send_soinua_bidaltzen_soinua_isilarazi_message(xml_data,$funciones){
   var xml_string=get_send_soinua_elem_xml_string(xml_data,'envia_silenciar',$funciones);
   $funciones.send_xml(xml_string);
}
function send_soinua_bidaltzen_soinua_aktibatu_message(xml_data,$funciones){
   var xml_string=get_send_soinua_elem_xml_string(xml_data,'envia_activar',$funciones);
   $funciones.send_xml(xml_string);
}
function send_soinua_soinu_orokorra_isilarazi_message(xml_data,$funciones){
   var xml_string=get_send_soinua_elem_xml_string(xml_data,'general_silenciar',$funciones);
   $funciones.send_xml(xml_string); 
}
function send_soinua_soinu_orokorra_aktibatu_message(xml_data,$funciones){
   var xml_string=get_send_soinua_elem_xml_string(xml_data,'general_activar',$funciones);
   $funciones.send_xml(xml_string); 
}
function send_soinua_soinuen_mailak_doitu_bolumena_ken_message(xml_data,$funciones){
   var xml_string=get_send_soinua_elem_xml_string(xml_data,'vol_son_behera',$funciones);
   $funciones.send_xml(xml_string); 
}
function send_soinua_soinuen_mailak_doitu_bolumena_gehi_message(xml_data,$funciones){
   var xml_string=get_send_soinua_elem_xml_string(xml_data,'vol_son_gora',$funciones);
   $funciones.send_xml(xml_string); 
}
function soinua_sonido_mezuak_tratatu(mezu_v,$state,$scope,$funciones,xml_data){
    var pantalla="SONIDO";
    switch (mezu_v[1]) {
		case "VOLUMEN" :
			soinua_bolumena_bistaratu(Number(mezu_v[2]),$state,pantalla,$scope,$funciones);
			break;
		case "ENTRANTE" :
			if (mezu_v[2] == "ON") {
                            	$funciones.sakatua_utzi_soinua_argiak('id_button_soinua_datorren_soinua_aktibatu','soinua_elem','entrante_activar',$funciones,xml_data,pantalla);     
				$funciones.askatua_utzi_soinua_argiak('id_button_soinua_datorren_soinua_isilarazi','soinua_elem','entrante_silenciar',$funciones,xml_data,pantalla);     				
			} else if (mezu_v[2] == "OFF") {
				$funciones.sakatua_utzi_soinua_argiak('id_button_soinua_datorren_soinua_isilarazi','soinua_elem','entrante_silenciar',$funciones,xml_data,pantalla);     							
                                $funciones.askatua_utzi_soinua_argiak('id_button_soinua_datorren_soinua_aktibatu','soinua_elem','entrante_activar',$funciones,xml_data,pantalla);     			
			}                   
			break;
		case "SALIENTE" :
			if (mezu_v[2] == "ON") {
                            $funciones.sakatua_utzi_soinua_argiak('id_button_soinua_bidaltzen_soinua_aktibatu','soinua_elem','envia_activar',$funciones,xml_data,pantalla);     
                            $funciones.askatua_utzi_soinua_argiak('id_button_soinua_bidaltzen_soinua_isilarazi','soinua_elem','envia_silenciar',$funciones,xml_data,pantalla);     							
			} else if (mezu_v[2] == "OFF") {
                            $funciones.sakatua_utzi_soinua_argiak('id_button_soinua_bidaltzen_soinua_isilarazi','soinua_elem','envia_silenciar',$funciones,xml_data,pantalla);     							
                            $funciones.askatua_utzi_soinua_argiak('id_button_soinua_bidaltzen_soinua_aktibatu','soinua_elem','envia_activar',$funciones,xml_data,pantalla);     						
			}
			break;
		case "GENERAL" :
			if (mezu_v[2] == "ON") {
                            $funciones.sakatua_utzi_soinua_argiak('id_button_soinua_orokorra_soinua_aktibatu','soinua_elem','general_activar',$funciones,xml_data,pantalla);     
                            $funciones.askatua_utzi_soinua_argiak('id_button_soinua_orokorra_soinua_isilarazi','soinua_elem','general_silenciar',$funciones,xml_data,pantalla);     							
			} else if (mezu_v[2] == "OFF") {
                            $funciones.sakatua_utzi_soinua_argiak('id_button_soinua_orokorra_soinua_isilarazi','soinua_elem','general_silenciar',$funciones,xml_data,pantalla);     							
                            $funciones.askatua_utzi_soinua_argiak('id_button_soinua_orokorra_soinua_aktibatu','soinua_elem','general_activar',$funciones,xml_data,pantalla);     						
			}			
			break;
		}    
}
function soinua_bolumena_bistaratu(bolumena,$state,pantalla,$scope,$funciones){
//alert('vol='+bolumena);
    if ($funciones.funciones_dispositiboa_aktibo_dago($state,pantalla,null,$funciones)){
    //alert('vol2='+bolumena);
        $scope.soinua_bolumena_value=bolumena;
        $scope.$apply();
    }
}
function soinua_micro_luz_feedback(pantalla,izena,mota,sfeed_lokala,$state,$funciones,xml_data){
    //if (dispositiboa_aktibo_dago($state,pantalla,null,$funciones)) {
    $funciones.funciones_micro_luz_feedback(pantalla,izena,mota,sfeed_lokala,$state,$funciones,xml_data);
    //}
}