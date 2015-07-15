angular.module('deitu_eskegi.controllers', [])

.controller('DeituEskegiCtrl', function($scope, $stateParams,xml_data,$funciones,gettextCatalog,$state,$ionicHistory) {
    $ionicHistory.nextViewOptions({
     disableBack: true
    });
    $scope.deitu_eskegi_telefono_zenbakia='';
    $scope.contactos=new Array();
    $scope.radio_contacto={value:''};
    $scope.anchos_banda=new Array();
    $scope.radio_ancho_banda={ancho_banda:''};
    $scope.contacto_selected=null;
    $scope.ancho_banda_selected=null;
    $scope.llamadas=new Array();
    $scope.radio_llamada={value:''};
    $scope.llamada_selected=null;
    $scope.deitu_eskegi_deiak_onartu_egoera='';
    $scope.deitu_eskegi_bolumena_solaskidea_value=0;    
    $scope.deitu_eskegi_zenbakia_click=function(zenbakia){
        send_deitu_eskegi_zenbakia_message(xml_data,$funciones,zenbakia);
    }
    $scope.deitu_eskegi_zenbakia_ezabatu_click=function(){
        send_deitu_eskegi_zenbakia_ezabatu_message(xml_data,$funciones);
    }
    $scope.deitu_eskegi_helbide_liburua_click=function(){
        send_deitu_eskegi_helbide_liburua_message(xml_data,$funciones);
    }
    $scope.deitu_eskegi_atzeratu_click=function(){
        send_deitu_eskegi_atzeratu_message(xml_data,$funciones);
    }
    $scope.$on('deitu_eskegi_videoconferencia_mezuak_tratatu', function(event, args){
        var mezu_v=args[0];
        deitu_eskegi_videoconferencia_mezuak_tratatu(mezu_v,$scope,gettextCatalog,xml_data,$state,$funciones);
    });
    $scope.deitu_eskegi_deitu_click=function(){
        send_deitu_eskegi_deitu_message(xml_data,$funciones,$scope);
    }
    $scope.deitu_eskegi_helbide_liburua_deitu_click=function(){
        if($scope.contacto_selected!=null){
            if($scope.contacto_selected.value.length>0){
                send_deitu_eskegi_helbide_liburua_deitu_message(xml_data,$funciones,$scope.contacto_selected.value);
            }    
        }
    }
    $scope.contactos_change=function(item){
       $scope.contacto_selected={value:item.value};
       //send_deitu_eskegi_contactos_change_message(xml_data,$funciones,$scope.radio_contacto.value);
       send_deitu_eskegi_contactos_change_message(xml_data,$funciones,item.value);
    }
    $scope.deitu_eskegi_helbide_liburua_ezeztatu_click=function(item){
       send_deitu_eskegi_helbide_liburua_ezeztatu_message(xml_data,$funciones);
    }
    $scope.anchos_banda_change=function(item){
       $scope.ancho_banda_selected={ancho_banda:item.ancho_banda};
       //send_deitu_eskegi_anchos_banda_change_message(xml_data,$funciones,$scope.radio_ancho_banda.ancho_banda);
       send_deitu_eskegi_anchos_banda_change_message(xml_data,$funciones,$scope.ancho_banda_selected.ancho_banda);
    }
    $scope.deitu_eskegi_banda_zabalera_onetsi_click=function(){
       if($scope.ancho_banda_selected!=null){
           if($scope.ancho_banda_selected.ancho_banda.length>0){
                send_deitu_eskegi_banda_zabalera_onetsi_message(xml_data,$funciones,$scope.ancho_banda_selected.ancho_banda);
           }     
       }
    }
    $scope.deitu_eskegi_banda_zabalera_ezeztatu_click=function(){
        send_deitu_eskegi_banda_zabalera_ezeztatu_message(xml_data,$funciones);
    }
    $scope.llamadas_change=function(item){
       $scope.llamada_selected={value:item.value};
       //send_deitu_eskegi_llamadas_change_message(xml_data,$funciones,$scope.radio_llamada.value);
       send_deitu_eskegi_llamadas_change_message(xml_data,$funciones,$scope.llamada_selected.value);
    }
    $scope.deitu_eskegi_aktibo_dauden_deiak_eskegi_click=function(){
       if($scope.llamada_selected!=null){
          if($scope.llamada_selected.value.length>0){ 
            send_deitu_eskegi_aktibo_dauden_deiak_eskegi_message(xml_data,$funciones,$scope.llamada_selected.value);
          }  
       } 
    }
    $scope.deitu_eskegi_ez_molestatu_itzali_click=function(){
        feed_lokala_deitu_eskegi_ez_molestatu_aktibatu(xml_data,$funciones,'apagar_no_interrumpir');
        send_deitu_eskegi_ez_molestatu_itzali_message(xml_data,$funciones);
    }
    $scope.deitu_eskegi_ez_molestatu_aktibatu_click=function(){        
        feed_lokala_deitu_eskegi_ez_molestatu_aktibatu(xml_data,$funciones,'activar_no_interrumpir');
        send_deitu_eskegi_ez_molestatu_aktibatu_message(xml_data,$funciones);
    }
    $scope.deitu_eskegi_bolumena_solaskidea_ken_click=function(){
        send_deitu_eskegi_bolumena_solaskidea_ken_message(xml_data,$funciones);
    }    
    $scope.deitu_eskegi_bolumena_solaskidea_gehi_click=function(){
        send_deitu_eskegi_bolumena_solaskidea_gehi_message(xml_data,$funciones);
    }
    $scope.deitu_eskegi_gure_soinua_bidali_click=function(){
        feed_lokala_deitu_eskegi_ez_molestatu_aktibatu(xml_data,$funciones,'enviar');
        send_deitu_eskegi_gure_soinua_bidali_message(xml_data,$funciones);
    }
    $scope.deitu_eskegi_gure_soinua_itzali_click=function(){
        feed_lokala_deitu_eskegi_ez_molestatu_aktibatu(xml_data,$funciones,'apagar_nuestro_sonido');
        send_deitu_eskegi_gure_soinua_itzali_message(xml_data,$funciones);
    }
    $scope.deitu_eskegi_grafikoak_click=function(){
        send_deitu_eskegi_grafikoak_message(xml_data,$funciones);
    }
})
function send_deitu_eskegi_zenbakia_message(xml_data,$funciones,zenbakia){
    var xml_string=get_send_deitu_eskegi_zenbakia_xml_string(xml_data,zenbakia,$funciones);
    $funciones.send_xml(xml_string); 
}
function get_send_deitu_eskegi_zenbakia_xml_string(xml_data,zenbakia,$funciones){
    var result=xml_data.xml.config.menu_items.llamar.numbers._msg;
    result+=zenbakia;
    result=$funciones.get_send_case_xml(result);
    return result;
}
function send_deitu_eskegi_zenbakia_ezabatu_message(xml_data,$funciones){
    var xml_string=get_send_deitu_eskegi_teclado_elem_xml_string(xml_data,'borrar_numero',null,$funciones);
    $funciones.send_xml(xml_string); 
}
function get_send_deitu_eskegi_teclado_elem_xml_string(xml_data,elem_name,msg_name,$funciones){
    var result='';
    var elem=get_send_deitu_teclado_elem(xml_data,elem_name);
    if(elem!=null){
        if(msg_name!=null){
            result=elem[msg_name];
            if($funciones!=null){
                result=$funciones.get_send_case_xml(result);
            }    
        }else{
            result=elem._msg;
            if($funciones!=null){
                result=$funciones.get_send_case_xml(result);
            }    
        }
    }
    return result;
}
function get_send_deitu_teclado_elem(xml_data,elem_name){
    var elem='';
    for(var i in xml_data.xml.config.menu_items.llamar.teclado.elem){
        elem=xml_data.xml.config.menu_items.llamar.teclado.elem[i];
        if(elem._name==elem_name){
            return elem;
        }
    }
    return null;
}
function send_deitu_eskegi_helbide_liburua_message(xml_data,$funciones){
    var xml_string=get_send_deitu_eskegi_teclado_elem_xml_string(xml_data,'libro_direcciones',null,$funciones);
    $funciones.send_xml(xml_string);
}
function send_deitu_eskegi_atzeratu_message(xml_data,$funciones){
    var xml_string=get_send_deitu_eskegi_teclado_elem_xml_string(xml_data,'retroceder',null,$funciones);
    $funciones.send_xml(xml_string);
}
function deitu_eskegi_videoconferencia_mezuak_tratatu(mezu_v,$scope,gettextCatalog,xml_data,$state,$funciones){
    var pantalla="VIDEOCONFERENCIA";
    if ($funciones.funciones_dispositiboa_aktibo_dago($state,pantalla,null,$funciones)){
        switch (mezu_v[1]) {
		case "ANCHO_DE_BANDA" :
                        banda_zabalerak_mezuak_tratatu(mezu_v,$scope);
			break;
		case "CONTACTOS" :
			contactos_mezuak_tratatu(mezu_v,$scope);
			break;
		case "LLAMADAS" :
			llamadas_mezuak_tratatu(mezu_v,$scope);
			break;
		case "CONECTANDO" :
			//alert("conectando="+mezu_v[2]);
			break;
		case "CONECTADO" :
			//alert("conectado="+mezu_v[2]);
			break;
		case "COLGADO" :
			//alert("colgado="+mezu_v[2]);
			break;
		case "DIRECCION" :
			//alert("direccion="+mezu_v[2]);
			break;
		case "DESCONECTADO" :
			//alert("desconectado");
			break;
		case "NO_INTERRUMPIR" :
                        set_no_interrumpir_egoera(mezu_v[2],$scope,gettextCatalog,xml_data);
			break;
		case "SONIDO_CONTRAPARTE" :
			if (mezu_v[2] == "VOLUMEN") {
                            bolumena_bistaratu_deitu_eskegi(mezu_v[3],$scope);
			}
			break;
		case "NUESTRO_SONIDO" :
			if (mezu_v[2] == "ON") {
                            sakatua_utzi_deitu_eskegi('id_button_deitu_eskegi_gure_soinua_bidali','enviar',xml_data);
                            askatua_utzi_deitu_eskegi('id_button_deitu_eskegi_gure_soinua_itzali','apagar_nuestro_sonido',xml_data);
			} else if (mezu_v[2] == "OFF") {
                            sakatua_utzi_deitu_eskegi('id_button_deitu_eskegi_gure_soinua_itzali','apagar_nuestro_sonido',xml_data);			
                            askatua_utzi_deitu_eskegi('id_button_deitu_eskegi_gure_soinua_bidali','enviar',xml_data);                        
			}
			break;
		case "MOSTRAR_CONTRAPARTE" :
			//alert("VIDEOCONFERENCIA:MOSTRAR_CONTRAPARTE");
			break;
		case "MARCADO" :
			refr_tel_zenb(mezu_v[2],$scope);
			break;
		case "BORRAR" :
			refr_borrar_telefono_zenbakia($scope);
			break;
		case "GRAFICOS" :
			if (mezu_v[2] == null) {
                            sakatua_utzi_deitu_eskegi('id_button_deitu_eskegi_grafikoak','graficos',xml_data,'elem');
			} else if (mezu_v[2] == "OFF") {
                            askatua_utzi_deitu_eskegi('id_button_deitu_eskegi_grafikoak','graficos',xml_data,'elem');
			}
			break;
		default :
			break;
	}
    }    
}
function refr_tel_zenb(markatua,$scope) {
    var testua= markatua;
    if (markatua == null) {
        testua = "";
    }
    if (testua != null) {
        $scope.deitu_eskegi_telefono_zenbakia=testua;
        $scope.$apply();
    }
}
function send_deitu_eskegi_deitu_message(xml_data,$funciones,$scope){
    var telefono_zenbakia=$scope.deitu_eskegi_telefono_zenbakia;
    if(telefono_zenbakia.length>0){
        var xml_string=get_send_deitu_eskegi_teclado_elem_xml_string(xml_data,'llamar',null,null);
        xml_string+=':'+telefono_zenbakia;
        xml_string=$funciones.get_send_case_xml(xml_string);
        $funciones.send_xml(xml_string);
    }    
}
function contactos_mezuak_tratatu(mezu_v,$scope){
    switch (mezu_v[2]) {
		case "CANCELAR" :
                    break;
		case "LISTA" :			
			mostrar_contactos(mezu_v[3],$scope);			
			break;
		case "SEL" :
			contactos_sel_refr(mezu_v[3], 1,$scope);
			break;
		case "DESEL" :
			contactos_sel_refr(mezu_v[3], 2,$scope);
			break;
		case "VACIAR" :
			vaciar_contactos($scope);
			break;
		default :
			//_root.pSinta.ancho_de_banda_txt_eguneratu(mezu_v, tg_erakutsi);
			break;
		}
}
function mostrar_contactos(contactos,$scope,type){
    var result=new Array();
    var contactos_array=contactos.split(',');
    var selected_value=null;        
    if(contactos_array.length>0){
        var row='';
        var row_array=new Array();
        var title='';
        var selected=false;
        var is_selected=0;
        var r='';
        for(var i in contactos_array){
            row=contactos_array[i];
            row_array=row.split('=');
            title=row_array[0];
            selected=false;
            is_selected=Number(row_array[1]);            
            if(is_selected==1){                
                selected=true;
            }
            r={title:title,value:title,selected:selected};
            if(selected){
                selected_value=title;
                $scope.contacto_selected={value:r.value};                    
            }
            result.push(r);                                        
        }
    }
    $scope.contactos=result;
    if(selected_value!=null){
        $scope.radio_contacto.value=selected_value;        
    }    
}
function send_deitu_eskegi_helbide_liburua_deitu_message(xml_data,$funciones,value){
    var xml_string=get_send_deitu_eskegi_teclado_elem_xml_string(xml_data,'libro_direcciones','_msg_option');
    xml_string+=value;
    xml_string=$funciones.get_send_case_xml(xml_string);
    $funciones.send_xml(xml_string);
}
function send_deitu_eskegi_contactos_change_message(xml_data,$funciones,value){
    var xml_string=get_send_deitu_eskegi_teclado_elem_xml_string(xml_data,'libro_direcciones','_msg_sel');
    xml_string+=value;
    xml_string=$funciones.get_send_case_xml(xml_string);
    $funciones.send_xml(xml_string);
}
function send_deitu_eskegi_helbide_liburua_ezeztatu_message(xml_data,$funciones){
    var xml_string=get_send_deitu_eskegi_teclado_elem_xml_string(xml_data,'libro_direcciones');
    xml_string+=':CANCELAR';
    xml_string=$funciones.get_send_case_xml(xml_string);
    $funciones.send_xml(xml_string);
}
function banda_zabalerak_mezuak_tratatu(mezu_v,$scope){
    switch (mezu_v[2]) {
		case "CANCELAR" :
			break;
		case "LISTA" :			
			mostrar_anchos_banda(mezu_v[3],$scope);			
			break;
		case "SEL" :
			//bigarren param kontrakoa jarri
			banda_zabalerak_sel_refr(mezu_v[3], 1,$scope);
			break;
		case "DESEL" :
			//bigarren param kontrakoa jarri
			banda_zabalerak_sel_refr(mezu_v[3], 2,$scope);
			break;
		case "VACIAR" :
			vaciar_anchos_banda($scope);
                        break;
		default :
			//_root.pSinta.ancho_de_banda_txt_eguneratu(mezu_v, tg_erakutsi);
			break;
		}
}
function mostrar_anchos_banda(anchos_banda,$scope){
    var result=new Array();
    var anchos_banda_array=anchos_banda.split(',');
    var selected_value=null;        
    if(anchos_banda_array.length>0){
        var row='';
        var row_array=new Array();
        var title='';
        var selected=false;
        var is_selected=0;
        var r='';
        for(var i in anchos_banda_array){
            row=anchos_banda_array[i];
            row_array=row.split('=');
            title=row_array[0];
            selected=false;
            is_selected=Number(row_array[1]);            
            if(is_selected==1){                
                selected=true;
            }
            r={title:title,ancho_banda:title,selected:selected};
            if(selected){
                selected_value=title;
                $scope.ancho_banda_selected=r;                    
            }
            result.push(r);                                        
        }
    }
    $scope.anchos_banda=result;
    if(selected_value!=null){
        $scope.radio_ancho_banda.ancho_banda=selected_value;        
    }    
}
function send_deitu_eskegi_anchos_banda_change_message(xml_data,$funciones,value){
    var xml_string=get_send_deitu_eskegi_elem_xml_string(xml_data,'ancho_de_banda','_msg_sel');
    xml_string+=value;
    xml_string=$funciones.get_send_case_xml(xml_string);
    $funciones.send_xml(xml_string);
}
function get_send_deitu_eskegi_elem_xml_string(xml_data,elem_name,msg_name){
    var elem=get_send_deitu_elem(xml_data,elem_name);
    if(elem!=null){
        if(msg_name!=null){
            return elem[msg_name];
        }else{
            return elem._msg;
        }
    }
    return '';
}
function get_send_deitu_elem(xml_data,elem_name){
    var elem='';
    for(var i in xml_data.xml.config.menu_items.llamar.elem){
        elem=xml_data.xml.config.menu_items.llamar.elem[i];
        if(elem._name==elem_name){
            return elem;
        }
    }
    return null;
}
function send_deitu_eskegi_banda_zabalera_onetsi_message(xml_data,$funciones,value){
    var xml_string=get_send_deitu_eskegi_elem_xml_string(xml_data,'ancho_de_banda','_msg_option');
    xml_string+=value;
    xml_string=$funciones.get_send_case_xml(xml_string);
    $funciones.send_xml(xml_string);
}
function send_deitu_eskegi_banda_zabalera_ezeztatu_message(xml_data,$funciones){
    var xml_string=get_send_deitu_eskegi_elem_xml_string(xml_data,'ancho_de_banda');
    xml_string+=':CANCELAR';
    xml_string=$funciones.get_send_case_xml(xml_string);
    $funciones.send_xml(xml_string);
}
function llamadas_mezuak_tratatu(mezu_v,$scope){
    switch (mezu_v[2]) {
		case "CANCELAR" :
			break;
		case "LISTA" :			
			mostrar_llamadas(mezu_v[3],$scope);			
			break;
		case "SEL" :
			llamadas_sel_refr(mezu_v[3], 1,$scope);
			break;
		case "DESEL" :
			llamadas_sel_refr(mezu_v[3], 2,$scope);
			break;
		case "VACIAR" :
			vaciar_llamadas($scope);
                        break;
		default :
			//_root.pSinta.ancho_de_banda_txt_eguneratu(mezu_v, tg_erakutsi);
			break;
		}
}
function mostrar_llamadas(llamadas,$scope,type){
    var result=new Array();
    var llamadas_array=llamadas.split(',');
    var selected_value=null;        
    if(llamadas_array.length>0){
        var row='';
        var row_array=new Array();
        var title='';
        var selected=false;
        var is_selected=0;
        var r='';
        for(var i in llamadas_array){
            row=llamadas_array[i];
            row_array=row.split('=');
            title=row_array[0];
            selected=false;
            is_selected=Number(row_array[1]);            
            if(is_selected==1){                
                selected=true;
            }
            r={title:title,value:title,selected:selected};
            if(selected){
                selected_value=title;
                $scope.llamada_selected=r;                    
            }
            result.push(r);                                        
        }
    }
    $scope.llamadas=result;
    if(selected_value!=null){
        $scope.radio_llamada.value=selected_value;        
    }    
}
function send_deitu_eskegi_llamadas_change_message(xml_data,$funciones,value){
    var xml_string=get_send_deitu_eskegi_elem_xml_string(xml_data,'colgar','_msg_sel');
    xml_string+=value;
    xml_string=$funciones.get_send_case_xml(xml_string);
    $funciones.send_xml(xml_string);
}
function send_deitu_eskegi_aktibo_dauden_deiak_eskegi_message(xml_data,$funciones,value){
    var xml_string=get_send_deitu_eskegi_elem_xml_string(xml_data,'colgar');
    xml_string+=':'+value;
    xml_string=$funciones.get_send_case_xml(xml_string);
    $funciones.send_xml(xml_string);
}
function contactos_sel_refr(id,type,$scope){
    if(type==1){
        $scope.radio_contacto={value:id};
        $scope.contacto_selected={value:id};
    }else if(type==2){
        if($scope.contacto_selected!=null){
            if($scope.contacto_selected.value==id || $scope.contacto_selected.length==0){
                $scope.radio_contacto={value:''};
                $scope.contacto_selected={value:''};                
            }
        }
    }    
}
function banda_zabalerak_sel_refr(id,type,$scope){
    if(type==1){
        $scope.radio_ancho_banda.ancho_banda=id;
        $scope.ancho_banda_selected={ancho_banda:id};
    }else if(type==2){
        if($scope.ancho_banda_selected!=null){
            if($scope.ancho_banda_selected.ancho_banda==id  || $scope.ancho_banda_selected.length==0){
                $scope.radio_ancho_banda={ancho_banda:''};
                $scope.ancho_banda_selected={ancho_banda:''};
            }
        }
    }    
}
function llamadas_sel_refr(id,type,$scope){
    if(type==1){
        $scope.radio_llamada={value:id};
        $scope.llamada_selected={value:id};
    }else if(type==2){
        if($scope.llamada_selected!=null){
            if($scope.llamada_selected.value==id || $scope.llamada_selected.length==0){
                $scope.radio_llamada={value:''};
                $scope.llamada_selected={value:''};
            }
        }
    }    
}
function ion_radio_sel_refr_array($scope,field,id){
    var row='';
    for(var i in $scope[field]){
        row=$scope[field][i];
        if(row.value==id){
            $scope[field][i].selected=false;
        }
    }
}
function ion_radio_vaciar($scope,field){
    $scope[field]=new Array();
}
function vaciar_contactos($scope){
    ion_radio_vaciar($scope,'contactos');
    $scope.radio_llamada={value:''};
    $scope.llamada_selected={value:''};
}
function vaciar_anchos_banda($scope){
    ion_radio_vaciar($scope,'anchos_banda');
    $scope.radio_ancho_banda={value:''};
    $scope.ancho_banda_selected={value:''};
}
function vaciar_llamadas($scope){
    ion_radio_vaciar($scope,'llamadas');
    $scope.radio_llamada={value:''};
    $scope.llamada_selected={value:''};
}
function send_deitu_eskegi_ez_molestatu_aktibatu_message(xml_data,$funciones){
    var xml_string=get_send_deitu_eskegi_eskubi_xml_string(xml_data,'activar_no_interrumpir');
    $funciones.send_xml(xml_string);
}
function get_send_deitu_eskegi_eskubi_xml_string(xml_data,elem_name){
    var elem=get_send_deitu_eskubi_elem(xml_data,elem_name);
    if(elem!=null){
        return elem._msg;
    }
    return '';
}
function get_send_deitu_eskubi_elem(xml_data,elem_name){
    var elem='';
    for(var i in xml_data.xml.config.menu_items.llamar.right.elem){
        elem=xml_data.xml.config.menu_items.llamar.right.elem[i];
        if(elem._name==elem_name){
            return elem;
        }
    }
    return null;
}
function send_deitu_eskegi_ez_molestatu_itzali_message(xml_data,$funciones){
    var xml_string=get_send_deitu_eskegi_eskubi_xml_string(xml_data,'apagar_no_interrumpir');
    $funciones.send_xml(xml_string);
}
function send_deitu_eskegi_bolumena_solaskidea_gehi_message(xml_data,$funciones){
    var xml_string=get_send_deitu_eskegi_eskubi_xml_string(xml_data,'sonido_gora');
    $funciones.send_xml(xml_string);
}
function send_deitu_eskegi_bolumena_solaskidea_ken_message(xml_data,$funciones){
    var xml_string=get_send_deitu_eskegi_eskubi_xml_string(xml_data,'sonido_behera');
    $funciones.send_xml(xml_string);
}
function send_deitu_eskegi_gure_soinua_bidali_message(xml_data,$funciones){
    var xml_string=get_send_deitu_eskegi_eskubi_xml_string(xml_data,'enviar');
    $funciones.send_xml(xml_string);
}
function send_deitu_eskegi_gure_soinua_itzali_message(xml_data,$funciones){
    var xml_string=get_send_deitu_eskegi_eskubi_xml_string(xml_data,'apagar_nuestro_sonido');
    $funciones.send_xml(xml_string);
}
function send_deitu_eskegi_grafikoak_message(xml_data,$funciones){
    var xml_string=get_send_deitu_eskegi_elem_xml_string(xml_data,'graficos');
    $funciones.send_xml(xml_string);
}
function set_no_interrumpir_egoera(aukera,$scope,gettextCatalog,xml_data) {
    switch (aukera) {
        case "ALLOCATED" :
            $scope.deitu_eskegi_deiak_onartu_egoera=gettextCatalog.getString(aukera);
            sakatua_utzi_deitu_eskegi('id_button_deitu_eskegi_ez_molestatu_aktibatu','activar_no_interrumpir',xml_data);
            askatua_utzi_deitu_eskegi('id_button_deitu_eskegi_ez_molestatu_itzali','apagar_no_interrumpir',xml_data);
            break;
        case "AUTOANSWER" :
            $scope.deitu_eskegi_deiak_onartu_egoera=gettextCatalog.getString(aukera);
            sakatua_utzi_deitu_eskegi('id_button_deitu_eskegi_ez_molestatu_itzali','apagar_no_interrumpir',xml_data);
            askatua_utzi_deitu_eskegi('id_button_deitu_eskegi_ez_molestatu_aktibatu','activar_no_interrumpir',xml_data);
            break;
        default :
            break;
    }
}
function sakatua_utzi_deitu_eskegi(id_button,elem_name,xml_data,type){
    if(is_bidea_feed_eskubi_deitu_eskegi(elem_name,xml_data,type)){
        var id_elem='#'+id_button;
        angular.element(document.querySelector(id_elem)).addClass('active disabled');
    }    
}
function is_bidea_feed_eskubi_deitu_eskegi(elem_name,xml_data,type){
            var elem=null;
            if(type==null){
                elem=get_send_deitu_eskubi_elem(xml_data,elem_name);
            }else{
                elem=get_send_deitu_elem(xml_data,elem_name);
            }        
            if(elem!=null){
                if(elem._feed!=null){
                    if(elem._feed==1 || elem._feed==2){
                        return true;
                    }
                }
            }
            return false;
}
function askatua_utzi_deitu_eskegi(id_button,elem_name,xml_data,type){
    if(is_bidea_feed_eskubi_deitu_eskegi(elem_name,xml_data,type)){
        var id_elem='#'+id_button;
        angular.element(document.querySelector(id_elem)).removeClass('active');
        angular.element(document.querySelector(id_elem)).removeClass('disabled');
    }    
}
function bolumena_bistaratu_deitu_eskegi(value,$scope){
    $scope.deitu_eskegi_bolumena_solaskidea_value=value;
}
function refr_borrar_telefono_zenbakia($scope){
    refr_tel_zenb(null,$scope);
}
function feed_lokala_deitu_eskegi_ez_molestatu_aktibatu(xml_data,$funciones,elem_name){
    var elem=get_send_deitu_eskubi_elem(xml_data,elem_name);
    if(elem!=null){
        if($funciones.funciones_is_feed_lokala(elem)){
            var mezu_v=elem._msg.split(':');
            videoconferencia_feed(mezu_v,xml_data);
        }
    }
}
function videoconferencia_feed(mezu_v,xml_data){
    switch (mezu_v[1]) {
		case "NO_INTERRUNPIR" :
			deitu_eskegi_no_interrumpir_feed(mezu_v[2],xml_data);
			break;
		case "NUESTRO_SONIDO" :
			deitu_eskegi_nuestro_sonido_feed(mezu_v[2],xml_data);
			break;
		default :
			break;
		}
}
function deitu_eskegi_no_interrumpir_feed(auk,xml_data){
    switch (auk) {
		case "ACTIVAR" :
			sakatua_utzi_deitu_eskegi('id_button_deitu_eskegi_ez_molestatu_aktibatu','activar_no_interrumpir',xml_data);
                        askatua_utzi_deitu_eskegi('id_button_deitu_eskegi_ez_molestatu_itzali','apagar_no_interrumpir',xml_data);
			break;
		case "APAGAR" :
			sakatua_utzi_deitu_eskegi('id_button_deitu_eskegi_ez_molestatu_itzali','apagar_no_interrumpir',xml_data);			
                        askatua_utzi_deitu_eskegi('id_button_deitu_eskegi_ez_molestatu_aktibatu','activar_no_interrumpir',xml_data);
                        break;
		default :
			break;
		}
}
function deitu_eskegi_nuestro_sonido_feed(auk,xml_data){
    switch (auk) {
		case "ENVIAR" :
			sakatua_utzi_deitu_eskegi('id_button_deitu_eskegi_gure_soinua_bidali','enviar',xml_data);
                        askatua_utzi_deitu_eskegi('id_button_deitu_eskegi_gure_soinua_itzali','apagar_nuestro_sonido',xml_data);			
                        break;
		case "APAGAR" :
			sakatua_utzi_deitu_eskegi('id_button_deitu_eskegi_gure_soinua_itzali','apagar_nuestro_sonido',xml_data);
			askatua_utzi_deitu_eskegi('id_button_deitu_eskegi_gure_soinua_bidali','enviar',xml_data);
                        break;
		default :
			break;
		}
}