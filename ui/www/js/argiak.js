angular.module('argiak.controllers', [])

.controller('ArgiakCtrl', function($scope, $stateParams,xml_data,$funciones,$state,$ionicHistory) {
    $ionicHistory.nextViewOptions({
     disableBack: true
    });
    var pantalla="LUCES";
    $scope.argiak_lehend_value=0;
    $scope.argiak_pasabide_value=0;
    $scope.argiak_ikasleak_value=0;
    $scope.argiak_lurreko_pasabide_value=0;
    $scope.argiak_lurreko_ikasleak_value=0;    
    //
    $scope.argiak_lehend_itzali_click=function(){
        argiak_feedback(pantalla,"presi_techo",2,null,$state,$funciones,xml_data);
        send_argiak_lehend_itzali_message(xml_data,$funciones,'presi_techo');
    }
    $scope.argiak_lehend_ken_click=function(){
        send_argiak_lehend_ken_message(xml_data,$funciones,'presi_techo');
    }
    $scope.argiak_lehend_gehi_click=function(){
        send_argiak_lehend_gehi_message(xml_data,$funciones,'presi_techo');
    }
    $scope.argiak_lehend_piztu_click=function(){
        argiak_feedback(pantalla,"presi_techo",1,null,$state,$funciones,xml_data);
        send_argiak_lehend_piztu_message(xml_data,$funciones,'presi_techo');
    }
    $scope.argiak_pasabide_itzali_click=function(){
        argiak_feedback(pantalla,"pasillo_techo",2,null,$state,$funciones,xml_data);
        send_argiak_pasabide_itzali_message(xml_data,$funciones,'pasillo_techo');
    }
    $scope.argiak_pasabide_ken_click=function(){
        send_argiak_pasabide_ken_message(xml_data,$funciones,'pasillo_techo');
    }
    $scope.argiak_pasabide_gehi_click=function(){
        send_argiak_pasabide_gehi_message(xml_data,$funciones,'pasillo_techo');
    }
    $scope.argiak_pasabide_piztu_click=function(){
        argiak_feedback(pantalla,"pasillo_techo",1,null,$state,$funciones,xml_data);
        send_argiak_pasabide_piztu_message(xml_data,$funciones,'pasillo_techo');
    }
    $scope.argiak_ikasleak_itzali_click=function(){
        argiak_feedback(pantalla,"alumnos_techo",2,null,$state,$funciones,xml_data);
        send_argiak_ikasleak_itzali_message(xml_data,$funciones,'alumnos_techo');
    }
    $scope.argiak_ikasleak_ken_click=function(){
        send_argiak_ikasleak_ken_message(xml_data,$funciones,'alumnos_techo');
    }
    $scope.argiak_ikasleak_gehi_click=function(){
        send_argiak_ikasleak_gehi_message(xml_data,$funciones,'alumnos_techo');
    }
    $scope.argiak_ikasleak_piztu_click=function(){
        argiak_feedback(pantalla,"alumnos_techo",1,null,$state,$funciones,xml_data);
        send_argiak_ikasleak_piztu_message(xml_data,$funciones,'alumnos_techo');
    }
    $scope.argiak_sabaia_itzali_click=function(){
        argiak_feedback(pantalla,"presi_techo",2,null,$state,$funciones,xml_data);
        argiak_feedback(pantalla,"pasillo_techo",2,null,$state,$funciones,xml_data);
        argiak_feedback(pantalla,"alumnos_techo",2,null,$state,$funciones,xml_data);
        send_argiak_sabaia_itzali_message(xml_data,$funciones);
    }
    $scope.argiak_sabaia_piztu_click=function(){
        argiak_feedback(pantalla,"presi_techo",1,null,$state,$funciones,xml_data);
        argiak_feedback(pantalla,"pasillo_techo",1,null,$state,$funciones,xml_data);
        argiak_feedback(pantalla,"alumnos_techo",1,null,$state,$funciones,xml_data);        
        send_argiak_sabaia_piztu_message(xml_data,$funciones);
    }
    $scope.argiak_lurreko_pasabide_itzali_click=function(){
        argiak_feedback(pantalla,"pasillo_suelo",2,null,$state,$funciones,xml_data);
        send_argiak_lurreko_pasabide_itzali_message(xml_data,$funciones,'pasillo_suelo');
    }
    $scope.argiak_lurreko_pasabide_ken_click=function(){
        send_argiak_lurreko_pasabide_ken_message(xml_data,$funciones,'pasillo_suelo');
    }
    $scope.argiak_lurreko_pasabide_gehi_click=function(){
        send_argiak_lurreko_pasabide_gehi_message(xml_data,$funciones,'pasillo_suelo');
    }
    $scope.argiak_lurreko_pasabide_piztu_click=function(){
        argiak_feedback(pantalla,"pasillo_suelo",1,null,$state,$funciones,xml_data);
        send_argiak_lurreko_pasabide_piztu_message(xml_data,$funciones,'pasillo_suelo');
    }
    $scope.argiak_lurreko_ikasleak_itzali_click=function(){
        argiak_feedback(pantalla,"alumnos_suelo",2,null,$state,$funciones,xml_data);
        send_argiak_lurreko_ikasleak_itzali_message(xml_data,$funciones,'alumnos_suelo');
    }
    $scope.argiak_lurreko_ikasleak_ken_click=function(){
        send_argiak_lurreko_ikasleak_ken_message(xml_data,$funciones,'alumnos_suelo');
    }
    $scope.argiak_lurreko_ikasleak_gehi_click=function(){
        send_argiak_lurreko_ikasleak_gehi_message(xml_data,$funciones,'alumnos_suelo');
    }
    $scope.argiak_lurreko_ikasleak_piztu_click=function(){
        argiak_feedback(pantalla,"alumnos_suelo",1,null,$state,$funciones,xml_data);
        send_argiak_lurreko_ikasleak_piztu_message(xml_data,$funciones,'alumnos_suelo');
    }
    $scope.argiak_lurra_itzali_click=function(){
        argiak_feedback(pantalla,"pasillo_suelo",2,null,$state,$funciones,xml_data);
        argiak_feedback(pantalla,"alumnos_suelo",2,null,$state,$funciones,xml_data);
        send_argiak_lurra_itzali_message(xml_data,$funciones);
    }
    $scope.argiak_lurra_piztu_click=function(){
        argiak_feedback(pantalla,"pasillo_suelo",1,null,$state,$funciones,xml_data);
        argiak_feedback(pantalla,"alumnos_suelo",1,null,$state,$funciones,xml_data);        
        send_argiak_lurra_piztu_message(xml_data,$funciones);
    }
    $scope.argiak_guztiak_itzali_click=function(){
        argiak_feedback(pantalla,"presi_techo",2,null,$state,$funciones,xml_data);
        argiak_feedback(pantalla,"pasillo_techo",2,null,$state,$funciones,xml_data);
        argiak_feedback(pantalla,"alumnos_techo",2,null,$state,$funciones,xml_data);
        argiak_feedback(pantalla,"pasillo_suelo",2,null,$state,$funciones,xml_data);
        argiak_feedback(pantalla,"alumnos_suelo",2,null,$state,$funciones,xml_data);
        send_argiak_guztiak_itzali_message(xml_data,$funciones);
    }
    $scope.argiak_guztiak_piztu_click=function(){
        argiak_feedback(pantalla,"presi_techo",1,null,$state,$funciones,xml_data);
        argiak_feedback(pantalla,"pasillo_techo",1,null,$state,$funciones,xml_data);
        argiak_feedback(pantalla,"alumnos_techo",1,null,$state,$funciones,xml_data);
        argiak_feedback(pantalla,"pasillo_suelo",1,null,$state,$funciones,xml_data);
        argiak_feedback(pantalla,"alumnos_suelo",1,null,$state,$funciones,xml_data);
        send_argiak_guztiak_piztu_message(xml_data,$funciones);
    }    
    $scope.$on('argiak_luces_mezuak_tratatu', function(event, args){
        var mezu_v=args[0];
        argiak_luces_mezuak_tratatu(mezu_v,$state,$scope,$funciones,xml_data);
    });
})
function send_argiak_lehend_itzali_message(xml_data,$funciones,grupo_name){
  var xml_string=get_send_argiak_grupo_elem_xml_string(xml_data,grupo_name,'apagar',$funciones);
  $funciones.send_xml(xml_string);
}
function get_send_argiak_grupo_elem_xml_string(xml_data,grupo_name,elem_name,$funciones){
   var result='';          
   var grupo=get_argiak_grupo(xml_data,grupo_name,$funciones);
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
function get_argiak_grupo(xml_data,grupo_name,$funciones){
   return $funciones.funciones_get_argiak_grupo(xml_data,grupo_name);
}
function send_argiak_lehend_ken_message(xml_data,$funciones,grupo_name){
  var xml_string=get_send_argiak_grupo_elem_xml_string(xml_data,grupo_name,'behera',$funciones);
  $funciones.send_xml(xml_string);
}
function send_argiak_lehend_gehi_message(xml_data,$funciones,grupo_name){
  var xml_string=get_send_argiak_grupo_elem_xml_string(xml_data,grupo_name,'gora',$funciones);
  $funciones.send_xml(xml_string);
}
function send_argiak_lehend_piztu_message(xml_data,$funciones,grupo_name){
  var xml_string=get_send_argiak_grupo_elem_xml_string(xml_data,grupo_name,'encender',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_argiak_pasabide_itzali_message(xml_data,$funciones,grupo_name){
  var xml_string=get_send_argiak_grupo_elem_xml_string(xml_data,grupo_name,'apagar',$funciones);
  $funciones.send_xml(xml_string);
}
function send_argiak_pasabide_ken_message(xml_data,$funciones,grupo_name){
  var xml_string=get_send_argiak_grupo_elem_xml_string(xml_data,grupo_name,'behera',$funciones);
  $funciones.send_xml(xml_string);
}
function send_argiak_pasabide_gehi_message(xml_data,$funciones,grupo_name){
  var xml_string=get_send_argiak_grupo_elem_xml_string(xml_data,grupo_name,'gora',$funciones);
  $funciones.send_xml(xml_string);
}
function send_argiak_pasabide_piztu_message(xml_data,$funciones,grupo_name){
  var xml_string=get_send_argiak_grupo_elem_xml_string(xml_data,grupo_name,'encender',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_argiak_ikasleak_itzali_message(xml_data,$funciones,grupo_name){
  var xml_string=get_send_argiak_grupo_elem_xml_string(xml_data,grupo_name,'apagar',$funciones);
  $funciones.send_xml(xml_string);
}
function send_argiak_ikasleak_ken_message(xml_data,$funciones,grupo_name){
  var xml_string=get_send_argiak_grupo_elem_xml_string(xml_data,grupo_name,'behera',$funciones);
  $funciones.send_xml(xml_string);
}
function send_argiak_ikasleak_gehi_message(xml_data,$funciones,grupo_name){
  var xml_string=get_send_argiak_grupo_elem_xml_string(xml_data,grupo_name,'gora',$funciones);
  $funciones.send_xml(xml_string);
}
function send_argiak_ikasleak_piztu_message(xml_data,$funciones,grupo_name){
  var xml_string=get_send_argiak_grupo_elem_xml_string(xml_data,grupo_name,'encender',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_argiak_sabaia_itzali_message(xml_data,$funciones){
  var xml_string=get_send_argiak_elem_xml_string(xml_data,'apagar_techo',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_argiak_sabaia_piztu_message(xml_data,$funciones){
  var xml_string=get_send_argiak_elem_xml_string(xml_data,'encender_techo',$funciones);
  $funciones.send_xml(xml_string);  
}
function get_send_argiak_elem_xml_string(xml_data,elem_name,$funciones){
   var elem=get_argiak_elem(xml_data,elem_name);
   var result='';
   if(elem!=null){       
       result=elem._msg;
       result=$funciones.get_send_case_xml(result);
       return result;
   }
   return '';
}
function get_argiak_elem(xml_data,elem_name){
   if(xml_data!=null){
        if(xml_data.xml!=null){
            if(xml_data.xml!=''){
                var result='';
                for(var i in xml_data.xml.config.menu_items.luces.elems.elem){
                    result=xml_data.xml.config.menu_items.luces.elems.elem[i];
                    if(result._name==elem_name){
                        return result;
                    }
                }
            }
        }
    }
    return null; 
}
function send_argiak_lurreko_pasabide_itzali_message(xml_data,$funciones,grupo_name){
  var xml_string=get_send_argiak_grupo_elem_xml_string(xml_data,grupo_name,'apagar',$funciones);
  $funciones.send_xml(xml_string);
}
function send_argiak_lurreko_pasabide_ken_message(xml_data,$funciones,grupo_name){
  var xml_string=get_send_argiak_grupo_elem_xml_string(xml_data,grupo_name,'behera',$funciones);
  $funciones.send_xml(xml_string);
}
function send_argiak_lurreko_pasabide_gehi_message(xml_data,$funciones,grupo_name){
  var xml_string=get_send_argiak_grupo_elem_xml_string(xml_data,grupo_name,'gora',$funciones);
  $funciones.send_xml(xml_string);
}
function send_argiak_lurreko_pasabide_piztu_message(xml_data,$funciones,grupo_name){
  var xml_string=get_send_argiak_grupo_elem_xml_string(xml_data,grupo_name,'encender',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_argiak_lurreko_ikasleak_itzali_message(xml_data,$funciones,grupo_name){
  var xml_string=get_send_argiak_grupo_elem_xml_string(xml_data,grupo_name,'apagar',$funciones);
  $funciones.send_xml(xml_string);
}
function send_argiak_lurreko_ikasleak_ken_message(xml_data,$funciones,grupo_name){
  var xml_string=get_send_argiak_grupo_elem_xml_string(xml_data,grupo_name,'behera',$funciones);
  $funciones.send_xml(xml_string);
}
function send_argiak_lurreko_ikasleak_gehi_message(xml_data,$funciones,grupo_name){
  var xml_string=get_send_argiak_grupo_elem_xml_string(xml_data,grupo_name,'gora',$funciones);
  $funciones.send_xml(xml_string);
}
function send_argiak_lurreko_ikasleak_piztu_message(xml_data,$funciones,grupo_name){
  var xml_string=get_send_argiak_grupo_elem_xml_string(xml_data,grupo_name,'encender',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_argiak_lurra_itzali_message(xml_data,$funciones){
  var xml_string=get_send_argiak_elem_xml_string(xml_data,'apagar_suelo',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_argiak_lurra_piztu_message(xml_data,$funciones){
  var xml_string=get_send_argiak_elem_xml_string(xml_data,'encender_suelo',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_argiak_guztiak_itzali_message(xml_data,$funciones){
  var xml_string=get_send_argiak_elem_xml_string(xml_data,'apagar_todo',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_argiak_guztiak_piztu_message(xml_data,$funciones){
  var xml_string=get_send_argiak_elem_xml_string(xml_data,'todas_luces',$funciones);
  $funciones.send_xml(xml_string);  
}
function argiak_luces_mezuak_tratatu(mezu_v,$state,$scope,$funciones,xml_data){
  switch (mezu_v[1]) {
		case "ENCENDER_TODAS" :
			encender_todas_luces(1,null,$state,$funciones,xml_data);
			break;
		case "APAGAR_TODAS" :
			encender_todas_luces(2,null,$state,$funciones,xml_data);
			break;
		case "TECHO" :
			argiak_techo_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,$scope);
			break;
		case "SUELO" :
			argiak_suelo_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,$scope);
			break;
		default :
			break;
		}  
}
function argiak_techo_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,$scope){
    var pantalla="LUCES";
    switch (mezu_v[2]) {
		case "PRESI" :
			if (mezu_v[3] == "ON") {
			    argiak_feedback(pantalla,"presi_techo",1,null,$state,$funciones,xml_data);    
			} else if (mezu_v[3] == "OFF") {
                            argiak_feedback(pantalla,"presi_techo",2,null,$state,$funciones,xml_data); 
			} else {
                            argiak_bolumena_bistaratu("argiak_lehend_value",Number(mezu_v[3]),$state,pantalla,$funciones,$scope);    
			}
			break;
		case "PASILLO" :
			if (mezu_v[3] == "ON") {
				argiak_feedback(pantalla,"pasillo_techo",1,null,$state,$funciones,xml_data);
			} else if (mezu_v[3] == "OFF") {
				argiak_feedback(pantalla,"pasillo_techo",2,null,$state,$funciones,xml_data);
			} else {
				argiak_bolumena_bistaratu("argiak_pasabide_value",Number(mezu_v[3]),$state,pantalla,$funciones,$scope);   
			}
			break;
		case "ALUMNOS" :
			if (mezu_v[3] == "ON") {
				argiak_feedback(pantalla,"alumnos_techo",1,null,$state,$funciones,xml_data);
			} else if (mezu_v[3] == "OFF") {
				argiak_feedback(pantalla,"alumnos_techo",2,null,$state,$funciones,xml_data);
			} else {
				argiak_bolumena_bistaratu("argiak_ikasleak_value",Number(mezu_v[3]),$state,pantalla,$funciones,$scope); 
			}
			break;
		case "ON" :
			encender_todas_luces(1, "techo",$state,$funciones,xml_data);
			break;
		case "OFF" :
			encender_todas_luces(2, "techo",$state,$funciones,xml_data);
			break;
		default :
			break;
		}
}
function encender_todas_luces(mota,nongoa,$state,$funciones,xml_data){
    var grupo='';
    var bai=true;
    var izena='';
    var pantalla="LUCES";
    for(var i in xml_data.xml.config.menu_items.luces.grupos.grupo){
        grupo=xml_data.xml.config.menu_items.luces.grupos.grupo[i];
        izena=grupo._name;
        if (nongoa != null) {
            var izena_v= izena.split("_");
            if (izena_v[1] == nongoa) {
                bai = true;
            } else {
                bai = false;
            }
	}
	if (bai) {
            argiak_feedback(pantalla,izena,mota,null,$state,$funciones,xml_data);           
        }
    }
}
function argiak_feedback(pantalla,izena,mota,sfeed_lokala,$state,$funciones,xml_data){
    if ($funciones.funciones_dispositiboa_aktibo_dago($state,pantalla,null,$funciones)) {
        $funciones.funciones_micro_luz_feedback(pantalla,izena,mota,sfeed_lokala,$state,$funciones,xml_data);
    }
}
function argiak_suelo_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,$scope){
    var pantalla="LUCES";
    switch (mezu_v[2]) {
		case "PASILLO" :
			if (mezu_v[3] == "ON") {
				argiak_feedback(pantalla,"pasillo_suelo",1,null,$state,$funciones,xml_data);
			} else if (mezu_v[3] == "OFF") {
				argiak_feedback(pantalla,"pasillo_suelo",2,null,$state,$funciones,xml_data);
			} else {
				argiak_bolumena_bistaratu("argiak_lurreko_pasabide_value",Number(mezu_v[3]),$state,pantalla,$funciones,$scope);
			}
			break;
		case "ALUMNOS" :
			if (mezu_v[3] == "ON") {
				argiak_feedback(pantalla,"alumnos_suelo",1,null,$state,$funciones,xml_data);
			} else if (mezu_v[3] == "OFF") {
				argiak_feedback(pantalla,"alumnos_suelo",2,null,$state,$funciones,xml_data);
			} else {
				argiak_bolumena_bistaratu("argiak_lurreko_ikasleak_value",Number(mezu_v[3]),$state,pantalla,$funciones,$scope);
			}
			break;
		case "ON" :
			encender_todas_luces(1, "suelo",$state,$funciones,xml_data);
			break;
		case "OFF" :
			encender_todas_luces(2, "suelo",$state,$funciones,xml_data);
			break;
		default :
			break;
		}
}
function argiak_bolumena_bistaratu(field,bolumena_in,$state,pantalla,$funciones,$scope){
    if ($funciones.funciones_dispositiboa_aktibo_dago($state,pantalla,null,$funciones)){
        var bolumena=bolumena_in;
        bolumena=$funciones.funciones_prepare_bolumena(bolumena);
        $scope[field]=bolumena;
        $scope.$apply();
    }
}