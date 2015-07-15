// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
//intelsat-2015
//gettext gehitu da
angular.module('starter', ['ionic', 'starter.controllers','gettext','soinua.controllers','argiak.controllers','itzali.controllers','camara1.controllers'
,'camara2.controllers','camara3.controllers','dvd.controllers','ordenadore_nagusia.controllers','dokumentu_kamera.controllers','proiektore_zentrala.controllers'
,'deitu_eskegi.controllers','nagusia.controllers','menu_nagusia.controllers','kamara_posizioak.controllers','log.controllers','simulando_popup.controllers'])
//intelsat-2015
.value('xml_data',{xml:''})
.value('konfig',{
    base_url:'http://192.168.110.216/ionic_aplik/my_menuside/',
    feed_pantailak:new Array("dvd", "pcsuelo", "portatil1", "portatil2", "portatil3", "think_client", "camara_de_documentos", "dvdgrab", "atril"),
    feed_imagen_a_mostrar_v:new Array("mostrar_contraparte", "mostrar_nuestra_imagen", "mostrar_contraparte_y_nuestra_imagen"),
    feed_dvd_botoiak:new Array("activar", "parar", "pausa", "retroceder", "avanzar"),
    feed_dvd_norabideak:new Array("norte", "oeste", "este", "sur", "aceptar")
})
.value('xml_translation',{xml:''})
.value('socket_log',{log:''})
.value('items_menu',{items:new Array({name:'deitu_eskegi',enabled:true,id:'id_ion_item_deitu_eskegi_menu',id_nagusia:'id_ion_item_deitu_eskegi_menu_nagusia'})})
//
.factory("$funciones", function($state,$ionicPopup,gettextCatalog,$rootScope,socket_log)
{    
return {
        send_xml: function(xml_string){
            $rootScope.socket.emit('cmd',xml_string);
            //
            var now     = new Date(); 
            var year    = now.getFullYear();
            var month   = now.getMonth()+1; 
            var day     = now.getDate();
            var hour    = now.getHours();
            var minute  = now.getMinutes();
            var second  = now.getSeconds(); 
            if(month.toString().length == 1) {
                var month = '0'+month;
            }
            if(day.toString().length == 1) {
                var day = '0'+day;
            }   
            if(hour.toString().length == 1) {
                var hour = '0'+hour;
            }
            if(minute.toString().length == 1) {
                var minute = '0'+minute;
            }
            if(second.toString().length == 1) {
                var second = '0'+second;
            }   
            var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second; 
            //
            if(global_is_mugikorra){
                socket_log.log+=dateTime+'\n'+xml_string+'\n';
            }else{
                socket_log.log+=dateTime+'='+xml_string+'\n';
            }    
            //alert("send="+xml_string);                        
        },
        get_send_case_xml: function(msg){
            var result='<sinta case="'+msg+'"/>';
            return result;
        },
        get_grupo_elem: function(grupo,elem_name){
            var result='';
            for(var i in grupo.elem){
                result=grupo.elem[i];
                if(result._name==elem_name){
                    return result;
                }
            }
            return null;
        },
        funciones_get_send_nagusia_panel_elem_xml_string: function(xml_data,object_name,panel_name,elem_name,$funciones,msg_attr_in,is_elem){
            //msg_attr_in aukerakoa
            var msg_attr='_msg';
            if(msg_attr_in!=null){
                if(msg_attr_in.length>0){
                    msg_attr=msg_attr_in;
                }
            }
            var object=$funciones.funciones_get_nagusia_object(xml_data,object_name);
            if(object!=null){
                var panel=$funciones.funciones_get_nagusia_object_panel(object,panel_name);
                if(panel!=null){
                    var result='';
                    var elem=$funciones.funciones_get_nagusia_object_panel_elem(panel,elem_name);
                    if(elem!=null){
                        //result=$funciones.get_send_case_xml(elem._msg);
                        if(is_elem==null){
                            result=$funciones.get_send_case_xml(elem[msg_attr]);
                            return result;
                        }else{
                            return elem;
                        }    
                    }
                }
            }
            if(is_elem==null){
                return '';
            }else{
                return null;
            }    
        },
        funciones_get_nagusia_object:function(xml_data,name){
            if(xml_data!=null){
                if(xml_data.xml!=null){
                    if(xml_data.xml!=''){
                        var result='';
                        for(var i in xml_data.xml.config.menu_items.principal.object){
                            result=xml_data.xml.config.menu_items.principal.object[i];
                            if(result._name==name){
                                return result;
                            }
                        }
                    }
                }
            }
            return null;
        },
        funciones_get_nagusia_object_panel:function(object,name){
            var result='';
            for(var i in object.panel){
                result=object.panel[i];
                if(result._name==name){
                    return result;
                }
            }
            return null;
        },
        funciones_get_nagusia_object_panel_elem:function(panel,elem_name){
            var result='';
            for(var i in panel.elem){
                result=panel.elem[i];
                if(result._name==elem_name){
                    return result;
                }
           }
        },
        send_nagusia_camara_zoom_gehi_message:function(xml_data,$funciones,object_name){
            var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,object_name,'camara_generico','zoom_mas',$funciones);
            $funciones.send_xml(xml_string);
            xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,object_name,'camara_generico','zoom_mas',$funciones,'_msg_stop');
            $funciones.send_xml(xml_string);
        },
        send_nagusia_camara_zoom_ken_message:function(xml_data,$funciones,object_name){
            var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,object_name,'camara_generico','zoom_menos',$funciones);
            $funciones.send_xml(xml_string);
            xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,object_name,'camara_generico','zoom_menos',$funciones,'_msg_stop');
            $funciones.send_xml(xml_string);
        },
        send_nagusia_camara_posizio_guztiak_ikusi:function(xml_data,$funciones,object_name){
          var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,object_name,'camara_generico','todas_posiciones',$funciones);
          $funciones.send_xml(xml_string);  
        },
        send_nagusia_camara_ezkerrera:function(xml_data,$funciones,object_name){
          var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,object_name,'camara_generico','kamara_ezkerrera',$funciones);
          $funciones.send_xml(xml_string);
          xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,object_name,'camara_generico','kamara_ezkerrera',$funciones,'_msg_stop');
          $funciones.send_xml(xml_string);
        },
        send_nagusia_camara_gora:function(xml_data,$funciones,object_name){
          var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,object_name,'camara_generico','kamara_gora',$funciones);
          $funciones.send_xml(xml_string);
          xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,object_name,'camara_generico','kamara_gora',$funciones,'_msg_stop');
          $funciones.send_xml(xml_string);
        },
        send_nagusia_camara_eskubira:function(xml_data,$funciones,object_name){
          var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,object_name,'camara_generico','kamara_eskubira',$funciones);
          $funciones.send_xml(xml_string);
          xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,object_name,'camara_generico','kamara_eskubira',$funciones,'_msg_stop');
          $funciones.send_xml(xml_string);
        },
        send_nagusia_camara_behera:function(xml_data,$funciones,object_name){
          var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,object_name,'camara_generico','kamara_behera',$funciones);
          $funciones.send_xml(xml_string);
          xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,object_name,'camara_generico','kamara_behera',$funciones,'_msg_stop');
          $funciones.send_xml(xml_string);
        },
        sakatua_utzi:function(id_button,object_name,panel_name,elem_name,$funciones,xml_data){
            if($funciones.is_bidea_feed(object_name,panel_name,elem_name,$funciones,xml_data)){
                $funciones.funciones_sakatua_utzi_id_button(id_button);
            }    
        },
        is_bidea_feed:function(object_name,panel_name,elem_name,$funciones,xml_data){
            var elem=$funciones.funciones_get_nagusia_object_panel_elem_row(object_name,panel_name,elem_name,$funciones,xml_data);
            if(elem!=null){
                if(elem._feed!=null){
                    if(elem._feed==1 || elem._feed==2){
                        return true;
                    }
                }
            }
            return false;
        },
        funciones_get_nagusia_object_panel_elem_row:function(object_name,panel_name,elem_name,$funciones,xml_data){
            var object=$funciones.funciones_get_nagusia_object(xml_data,object_name);
            if(object!=null){
                var panel=$funciones.funciones_get_nagusia_object_panel(object,panel_name);
                if(panel!=null){
                    var result=$funciones.funciones_get_nagusia_object_panel_elem(panel,elem_name);
                    if(result!=null){
                        return result;
                    }
                }
            }
            return null;
        },askatua_utzi:function(id_button,object_name,panel_name,elem_name,$funciones,xml_data){
            if($funciones.is_bidea_feed(object_name,panel_name,elem_name,$funciones,xml_data)){
                $funciones.funciones_askatua_utzi_id_button(id_button);
            }    
        },
        is_feed_nagusia_panel:function(object_name,panel_name,xml_data,$funciones){
            var object=$funciones.funciones_get_nagusia_object(xml_data,object_name);
            if(object!=null){
                var panel=$funciones.funciones_get_nagusia_object_panel(object,panel_name);
                if(panel!=null){
                    if(panel._feed!=null){
                        if(panel._feed==1){
                            return true;
                        }
                    }
                }
            }
            return false;
        },
        in_array:function(value,values_array){
            for(var i in values_array){
                if(values_array[i]==value){
                    return true;
                }
            }
            return false;
        },
        funciones_get_soinua_grupo:function(xml_data,grupo_name,$funciones){
            if(xml_data!=null){
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
        return null;
        },
        sakatua_utzi_soinua_argiak:function(id_button,grupo_name,elem_name,$funciones,xml_data,pantalla){
            if($funciones.is_bidea_feed_soinua_argiak(grupo_name,elem_name,$funciones,xml_data,pantalla)){
                var id_elem='#'+id_button;
                angular.element(document.querySelector(id_elem)).addClass('active disabled');
            } 
        },
        is_bidea_feed_soinua_argiak:function(grupo_name,elem_name,$funciones,xml_data,pantalla){
            var elem=$funciones.funciones_get_soinua_argiak_grupo_elem_row(grupo_name,elem_name,$funciones,xml_data,pantalla);
            if(elem!=null){
                if(elem._feed!=null){
                    if(elem._feed==1 || elem._feed==2){
                        return true;
                    }
                }
            }
            return false;
        },
        funciones_get_soinua_argiak_grupo_elem_row:function(grupo_name,elem_name,$funciones,xml_data,pantalla){
            var grupo=null;
            var result=null;
            if(pantalla=="SONIDO"){
                //if($funciones.in_array(grupo_name,new Array('entrante_activar','entrante_silenciar'))){
                if(grupo_name=='soinua_elem'){
                    result=$funciones.funciones_get_soinua_elem(xml_data,elem_name);
                    return result;
                }else{    
                    grupo=$funciones.funciones_get_soinua_grupo(xml_data,grupo_name,$funciones);
                }    
            }else if(pantalla=="LUCES"){
                grupo=$funciones.funciones_get_argiak_grupo(xml_data,grupo_name,$funciones);
            }
            if(grupo!=null){
                result=$funciones.get_grupo_elem(grupo,elem_name);
                if(result!=null){
                    return result;
                }
            }
            return null;            
        },
        askatua_utzi_soinua_argiak:function(id_button,grupo_name,elem_name,$funciones,xml_data,pantalla){
            if($funciones.is_bidea_feed_soinua_argiak(grupo_name,elem_name,$funciones,xml_data,pantalla)){
                var id_elem='#'+id_button;
                angular.element(document.querySelector(id_elem)).removeClass('active');
                angular.element(document.querySelector(id_elem)).removeClass('disabled');
            } 
        },
        funciones_get_soinua_elem:function(xml_data,elem_name){
            if(xml_data!=null){
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
            return null;
        },
        funciones_micro_luz_feedback:function(pantalla,izena,mota,sfeed_lokala,$state,$funciones,xml_data){
            switch (mota) {
                case 1 :
                    if (sfeed_lokala == null) {
                        //_root.pSinta.sakatuaUtzi(targeta.encender);
                        if(pantalla=="SONIDO"){
                            $funciones.sakatua_utzi_soinua_argiak('id_button_soinua_'+izena+'_aktibatu',izena,'encender',$funciones,xml_data,pantalla);
                        }else if(pantalla=="LUCES"){
                            $funciones.sakatua_utzi_soinua_argiak('id_button_argiak_'+izena+'_aktibatu',izena,'encender',$funciones,xml_data,pantalla);
                        }    
                    }
                    if(pantalla=="SONIDO"){
                        $funciones.askatua_utzi_soinua_argiak('id_button_soinua_'+izena+'_desaktibatu',izena,'apagar',$funciones,xml_data,pantalla);
                    }else if(pantalla=="LUCES"){    
                        $funciones.askatua_utzi_soinua_argiak('id_button_argiak_'+izena+'_itzali',izena,'apagar',$funciones,xml_data,pantalla);
                    }    
                    break;
                case 2 :
                    if (sfeed_lokala == null) {
                        if(pantalla=="SONIDO"){
                            $funciones.sakatua_utzi_soinua_argiak('id_button_soinua_'+izena+'_desaktibatu',izena,'apagar',$funciones,xml_data,pantalla);
                        }else if(pantalla=="LUCES"){
                            $funciones.sakatua_utzi_soinua_argiak('id_button_argiak_'+izena+'_itzali',izena,'apagar',$funciones,xml_data,pantalla);
                        }
                    }
                    if(pantalla=="SONIDO"){
                        $funciones.askatua_utzi_soinua_argiak('id_button_soinua_'+izena+'_aktibatu',izena,'encender',$funciones,xml_data,pantalla);
                    }else if(pantalla=="LUCES"){
                        $funciones.askatua_utzi_soinua_argiak('id_button_argiak_'+izena+'_aktibatu',izena,'encender',$funciones,xml_data,pantalla);
                    }    
                    break;
                default :
                    break;
                }        
        },
        funciones_dispositiboa_aktibo_dago:function($state,dispositiboa,object_name,$funciones){
            var num=$state.$current.path.length;
            var current_state=$state.$current.path[num-1];
            var konp=$funciones.funciones_get_dispositivo_state(dispositiboa,$funciones);
            if(current_state==konp){
                return true;
            }
            if(object_name!=null){
                if(object_name=='pantalla_electrica'){
                    if(dispositiboa=='PROYECTOR_CENTRAL'){
                        konp=$funciones.funciones_get_dispositivo_state('PANTALLA_ELECTRICA',$funciones);
                        if(current_state==konp){
                            return true;
                        }
                    }
                }
            }    
            return false;
        },
        funciones_get_dispositivo_state:function(dispositiboa,$funciones){
            var state_array=$funciones.funciones_create_state_array();
            if(state_array[dispositiboa]!=null){
                return state_array[dispositiboa];
            }
            return '';
        },
        funciones_get_argiak_grupo:function(xml_data,grupo_name){
            if(xml_data!=null){
                if(xml_data.xml!=null){
                    if(xml_data.xml!=''){
                        var result='';
                        for(var i in xml_data.xml.config.menu_items.luces.grupos.grupo){
                            result=xml_data.xml.config.menu_items.luces.grupos.grupo[i];
                            if(result._name==grupo_name){
                                return result;
                            }
                        }
                    }
                }
            }
            return null;
        },
        funciones_multzo_feed:function(sarrera, panel_name, botoiak,$funciones,object_name,xml_data,id_button_aurrizkia){
            if($funciones.is_feed_nagusia_panel(object_name,panel_name,xml_data,$funciones)){
                var num= botoiak.length;
                var i=0;
                var izena= "";
                var elem;
                var id_button;
                for (i=0; i<num; i++) {
                    izena = botoiak[i];
                    elem=$funciones.funciones_get_nagusia_object_panel_elem_row(object_name,panel_name,izena,$funciones,xml_data);
                    if(elem!=null){
                        id_button=id_button_aurrizkia+izena;
                        if (sarrera == izena) {
                            $funciones.sakatua_utzi(id_button,object_name,panel_name,izena,$funciones,xml_data);
                        } else {
                            $funciones.askatua_utzi(id_button,object_name,panel_name,izena,$funciones,xml_data);
                        }
                    }
                }
            }
        },
        funciones_menuko_botoi_zapalketa:function(id_ion_item,$scope,$funciones,type){
            /*var id_item='#'+id_ion_item;
            $funciones.funciones_desel_menu_items(type);
            angular.element(document.querySelector(id_item)).addClass('active');*/    
        },
        funciones_menuko_botoi_zapalketa_nagusia:function($scope,$funciones){
            $funciones.funciones_menuko_botoi_zapalketa('id_ion_item_nagusia_menu',$scope,$funciones);
            $funciones.funciones_menuko_botoi_zapalketa('id_ion_item_nagusia_menu_nagusia',$scope,$funciones);    
        },
        funciones_desel_menu_items:function(type){
            /*var class_item='.ion_item_menu_class';
            angular.element(document.querySelector(class_item)).removeClass('active');*/            
            var id_array=new Array();
            if(type==null){
                id_array=new Array('id_ion_item_ongi_etorri_menu'
            ,'id_ion_item_ongi_etorri_menu_nagusia'    
            ,'id_ion_item_hasiera_menu'
            ,'id_ion_item_hasiera_menu_nagusia'
            ,'id_ion_item_nagusia_menu_nagusia'
            ,'id_ion_item_nagusia_menu'
            ,'id_ion_item_deitu_eskegi_menu'
            ,'id_ion_item_deitu_eskegi_menu_nagusia'
            ,'id_ion_item_soinua_menu'
            ,'id_ion_item_soinua_menu_nagusia'
            ,'id_ion_item_argiak_menu'
            ,'id_ion_item_argiak_menu_nagusia'
            ,'id_ion_item_log_menu'
            ,'id_ion_item_log_menu_nagusia'
            ,'id_ion_item_itzali_menu'
            ,'id_ion_item_itzali_menu_nagusia');            
            }else if(type=='dispositivo'){
                id_array=new Array('id_dispositivo_grabazioa');
            }
            var id_item='';
            for(var i in id_array){
                id_item='#'+id_array[i];
                angular.element(document.querySelector(id_item)).removeClass('active');   
            }
        },
        funciones_nagusia_dispositivo_botoi_zapalketa:function(id_ion_item,$scope,$funciones){
            $funciones.funciones_menuko_botoi_zapalketa(id_ion_item,$scope,$funciones,'dispositivo');
        },
        funciones_get_datetime:function(){
            var now     = new Date(); 
            var year    = now.getFullYear();
            var month   = now.getMonth()+1; 
            var day     = now.getDate();
            var hour    = now.getHours();
            var minute  = now.getMinutes();
            var second  = now.getSeconds(); 
            if(month.toString().length == 1) {
                var month = '0'+month;
            }
            if(day.toString().length == 1) {
                var day = '0'+day;
            }   
            if(hour.toString().length == 1) {
                var hour = '0'+hour;
            }
            if(minute.toString().length == 1) {
                var minute = '0'+minute;
            }
            if(second.toString().length == 1) {
                var second = '0'+second;
            }
            var result = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;
            return result;
        },
        funciones_menuko_botoi_askapena:function(id_ion_item){
            var id_item='#'+id_ion_item;
            angular.element(document.querySelector(id_item)).removeClass('active');    
        },
        funciones_create_state_array:function(){
            var state_array=new Array();
            state_array['PIZARRA_DIGITAL']='app.arbela';
            state_array['PROYECTOR_CENTRAL']='app.proiektore_zentrala';
            state_array['PANTALLA_ENTRADA']='app.sarrera';
            state_array['PANTALLA_PRESIDENCIA']='app.feedback';
            state_array['PLASMA']='app.plasma';
            state_array['PANTALLA_ELECTRICA']='app.proiektorea';
            state_array['DVDGRAB']='app.grabazioa';
            state_array['RED_THINK_CLIENT']='app.think_client_sarea';
            state_array['SONIDO']='app.soinua';
            state_array['LUCES']='app.argiak';
            state_array['DVD']='app.dvd';
            state_array['VIDEOCONFERENCIA']='app.deitu_eskegi';
            state_array['CAMARA_1']='app.camara1';
            state_array['CAMARA_2']='app.camara2';
            state_array['CAMARA_3']='app.camara3';
            state_array['CAMARADOC']='app.dokumentu_kamera';
            return state_array;
        },
        funciones_create_items_menu_id_array:function(){
            var result=new Array();
            result['id_ion_item_ongi_etorri_menu']='app.ongi_etorri';
            //result['id_ion_item_ongi_etorri_menu_nagusia']='app.ongi_etorri';            
            result['id_ion_item_hasiera_menu']='app.hasiera';
            result['id_ion_item_nagusia_menu_nagusia']='app.nagusia';            
            result['id_ion_item_nagusia_menu']='app.nagusia';
            result['id_ion_item_nagusia_menu_nagusia']='app.nagusia';            
            result['id_ion_item_deitu_eskegi_menu']='app.deitu_eskegi';
            result['id_ion_item_deitu_eskegi_menu_nagusia']='app.deitu_eskegi';            
            result['id_ion_item_soinua_menu']='app.soinua';
            result['id_ion_item_soinua_menu_nagusia']='app.soinua';            
            result['id_ion_item_argiak_menu']='app.argiak';
            result['id_ion_item_argiak_menu_nagusia']='app.argiak';            
            result['id_ion_item_log_menu']='app.log';
            result['id_ion_item_log_menu_nagusia']='app.log';            
            result['id_ion_item_itzali_menu']='app.itzali';
            result['id_ion_item_itzali_menu_nagusia']='app.itzali';            
            return result;
        },
        funciones_menuko_botoi_zapalketa_hasiera:function($scope,$funciones){
            $funciones.funciones_menuko_botoi_zapalketa('id_ion_item_hasiera_menu',$scope,$funciones);
            //$funciones.funciones_menuko_botoi_zapalketa('id_ion_item_hasiera_menu_nagusia',$scope,$funciones);
        },
        funciones_is_feed_lokala:function(elem){
            if(elem._feed!=null){
                var feed=Number(elem._feed);
                if(feed==1 || feed==2){
                    return true;
                }
            }
            return false;
        },
        funciones_prepare_bolumena:function(bolumena){
            var result=bolumena;
            if(isNaN(result)){
                return 0;
            }
            if(result<0){
                return 0;
            }
            if(result>100){
                return 100;
            }
            return result;
        },
        funciones_sakatua_utzi_id_button:function(id_button){
            var id_elem='#'+id_button;
            angular.element(document.querySelector(id_elem)).addClass('active disabled');
        },
        funciones_askatua_utzi_id_button:function(id_button){
            var id_elem='#'+id_button;
            angular.element(document.querySelector(id_elem)).removeClass('active');
            angular.element(document.querySelector(id_elem)).removeClass('disabled');
        },        
        funciones_efektua_sakatu_botoia_id_button:function(id_button,$funciones,$timeout){
            $timeout(function(){
                $funciones.funciones_askatua_utzi_id_button(id_button);
            },500);
        },
        funciones_bidali_botoi_ebentua:function(type,button_id,$funciones,$timeout){
            return '';
            var mezua="";
		switch (type) {
		case 1 :
			mezua = "BUTTON:NORMAL:PRESS:"+button_id;
			break;
		case 2 :
			mezua = "BUTTON:NORMAL:RELEASE:"+button_id;                        
			break;
		/*case 3 :
			mezua = "BUTTON:APAGAR:PRESS:"+button_id;
			break;
		case 4 :
			mezua = "BUTTON:APAGAR:RELEASE:"+button_id;
			break;
		case 5 :
			mezua = "BUTTON:POPUP_PROY:PRESS:"+button_id;
			break;
		case 6 :
			mezua = "BUTTON:POPUP_PROY:RELEASE:"+button_id;
			break;
		case 7 :
			mezua = "BUTTON:POPUP_OK_NOK:PRESS:"+button_id;
			break;
		case 8 :
			//ez da erabiltzen
			mezua = "BUTTON:POPUP_OK_NOK:RELEASE:"+button_id;
			break;*/
		case 9 :
			//hau tknika72 barruan gaudenian ez da gertatuko
			mezua = "BUTTON:LANG:PRESS:"+button_id;
			break;
		case 10 :
			//hau tknika72 barruan gaudenian ez da gertatuko
			mezua = "BUTTON:LANG:RELEASE:"+button_id;
			break;
		case 11 :
			mezua = "BUTTON:SINTA_INICIO:PRESS:"+button_id;
			break;
		case 12 :
			mezua = "BUTTON:SINTA_INICIO:RELEASE:"+button_id;
			break;
		/*case 13 :
			mezua = "BUTTON:BAJAR_BTN:PRESS:"+button_id;
			break;
		case 14 :
			mezua = "BUTTON:BAJAR_BTN:RELEASE:"+button_id;
			break;
		case 15 :
			mezua = "BUTTON:SUBIR_BTN:PRESS:"+button_id;
			break;
		case 16 :
			mezua = "BUTTON:SUBIR_BTN:RELEASE:"+button_id;
			break;*/
		/*case 17 :
			mezua = "BUTTON:SHELL:HASI:"+button_id;
			break;
		case 18 :
			mezua = "BUTTON:SHELL:GELDITU:"+button_id;
			break;*/
		case 19 :
			mezua = "BUTTON:COMPROBAR:PRESS:"+button_id;
			break;
		case 20 :
			mezua = "BUTTON:COMPROBAR:RELEASE:"+button_id;
			break;
		default :
			break;
		}
		if (mezua.length>0) {
			//alert('mezua='+mezua);
                        mezua=$funciones.get_send_case_xml(mezua);                            
                        var timeout_array=new Array();
                        timeout_array.push(2);
                        timeout_array.push(10);
                        if($funciones.in_array(type,timeout_array)){
                        //if(type==2){
                            $timeout(function(){
                                $funciones.send_xml(mezua);
                            },10);
                        }else{
                            $funciones.send_xml(mezua);
                        }    
                }
        },get_piztuta_text:function(gettextCatalog){
            return gettextCatalog.getString('PIZTUTA');
        },get_itzalita_text:function(gettextCatalog){
            return gettextCatalog.getString('ITZALITA');
        },get_eragotzita_text:function(gettextCatalog){
            return gettextCatalog.getString('ERAGOTZITA');
        },funciones_set_botoi_enabled:function(id_button,enabled){
            var id_elem='#'+id_button;
            if(!enabled){
                angular.element(document.querySelector(id_elem)).addClass('disabled');
            }else{
                angular.element(document.querySelector(id_elem)).removeClass('disabled');
            }    
        },funciones_set_nagusia_proiektorea_all_enabled:function(enabled,$funciones,type){
            var botoi_array=new Array();
            if(type==null){
                botoi_array=new Array('id_button_nagusia_proiektorea_igo','id_button_nagusia_proiektorea_jaitsi','id_button_nagusia_proiektorea_muteatu'
                ,'id_button_nagusia_proiektorea_desmuteatu','id_button_nagusia_proiektorea_dvd','id_button_nagusia_proiektorea_camara_de_documentos',
                'id_button_nagusia_proiektorea_portatil1','id_button_nagusia_proiektorea_portatil2','id_button_nagusia_proiektorea_portatil3',
                'id_button_nagusia_proiektorea_pcsuelo','id_button_nagusia_proiektorea_atril');
            }else if(type=='feedback'){
                botoi_array=new Array('id_button_nagusia_feedback_mostrar_contraparte','id_button_nagusia_feedback_mostrar_nuestra_imagen'
                ,'id_button_nagusia_feedback_dvd','id_button_nagusia_feedback_camara_de_documentos','id_button_nagusia_feedback_portatil1',
                'id_button_nagusia_feedback_portatil2','id_button_nagusia_feedback_portatil3','id_button_nagusia_feedback_pcsuelo','id_button_nagusia_feedback_atril');
            }else if(type=='sarrera'){
                botoi_array=new Array('id_button_nagusia_sarrera_dvd','id_button_nagusia_sarrera_camara_de_documentos','id_button_nagusia_sarrera_portatil1'
                ,'id_button_nagusia_sarrera_portatil2','id_button_nagusia_sarrera_portatil3','id_button_nagusia_sarrera_pcsuelo','id_button_nagusia_sarrera_atril');
            }else if(type=='plasma'){
                botoi_array=new Array('id_button_nagusia_plasma_dvd','id_button_nagusia_plasma_camara_de_documentos','id_button_nagusia_plasma_portatil1'
                ,'id_button_nagusia_plasma_portatil2','id_button_nagusia_plasma_portatil3','id_button_nagusia_plasma_pcsuelo','id_button_nagusia_plasma_atril');
            }else if(type=='arbela'){
                botoi_array=new Array('id_button_nagusia_arbela_muteatu','id_button_nagusia_arbela_desmuteatu','id_button_nagusia_arbela_dvd'
                ,'id_button_nagusia_arbela_camara_de_documentos','id_button_nagusia_arbela_portatil1','id_button_nagusia_arbela_portatil2',
                'id_button_nagusia_arbela_portatil3','id_button_nagusia_arbela_pcsuelo','id_button_nagusia_arbela_atril');
            }else if(type=='proiektore_zentrala'){                
                botoi_array=new Array('id_button_nagusia_proiektore_zentrala_muteatu','id_button_nagusia_proiektore_zentrala_desmuteatu'
                ,'id_button_nagusia_proiektore_zentrala_dvd','id_button_nagusia_proiektore_zentrala_camara_de_documentos',
                'id_button_nagusia_proiektore_zentrala_portatil1','id_button_nagusia_proiektore_zentrala_portatil2',
                'id_button_nagusia_proiektore_zentrala_portatil3','id_button_nagusia_proiektore_zentrala_pcsuelo','id_button_nagusia_proiektore_zentrala_atril');
            }    
            var num=botoi_array.length;
            var i=0;
            for(i=0;i<num;i++){
                $funciones.funciones_set_botoi_enabled(botoi_array[i],enabled);
            }
        }                           
}})
/*
.factory('$socket', function ($rootScope) {
  var socket = io.connect('http://192.168.110.14:8080');
  return {
    on: function (eventName, callback) {
      //socket.on(eventName, function () {  
      //  var args = arguments;
      //  $rootScope.$apply(function () {
      //    callback.apply(socket, args);
      //  });
      //});
      //alert(eventName);  
    },
    emit: function (eventName, data, callback) {
      //socket.emit(eventName, data, function () {
      //  var args = arguments;
      //  $rootScope.$apply(function () {
      //    if (callback) {
      //      callback.apply(socket, args);
      //    }
      //  });
      //})
    }
  };
})*/


.run(function($ionicPlatform,$http,xml_data,konfig,xml_translation,$location,gettextCatalog,$state,$funciones) {
  //intelsat-2015
  gettextCatalog.currentLanguage = "eu";
  //gettextCatalog.debug = true;
  // 
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    //intelsat-2015
    //gettextCatalog.currentLanguage = "es";
    //gettextCatalog.debug = true;
    //create_socket();    
    //load_paraninfo_xml($http,xml_data,konfig);
    //load_translation_xml($http,xml_translation,konfig);   
    //simulando
    //$rootScope.filtro_msg("prueba",$state,$rootScope);
    //
  
    
  });
})
         
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  var platform=ionic.Platform.platform();
  var is_mugikorra=false;
  $ionicConfigProvider.views.transition('none');
  //alert("window.innerWidth="+window.innerWidth);        
  //alert(platform);
  /*if(platform=='linux'){
    is_mugikorra=false;
  }*/
  /*if(ionic.Platform.isIPad()){
      is_mugikorra=false;
  }else if(ionic.Platform.isIOS()){
      is_mugikorra=true;
  }else if(ionic.Platform.isAndroid()){
      is_mugikorra=true;
  }else if(ionic.Platform.isWindowsPhone()){
      is_mugikorra=true;
  }*/
  if (window.innerWidth <= 816){
      is_mugikorra=true;
  }  
  var templates_path='templates';
  if(is_mugikorra){
      templates_path='templates_mugikorra';
  }  
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: templates_path+"/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: templates_path+"/search.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: templates_path+"/browse.html"
      }
    }
  })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: templates_path+"/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })
    
    .state('app.ongi_etorri', {
      url: "/ongi_etorri",
      views: {
        'menuContent': {
          templateUrl: templates_path+"/ongi_etorri.html",
          controller: 'OngiEtorriCtrl'
        }
      }
    })
    
    .state('app.hasiera', {
      url: "/hasiera",
      views: {
        'menuContent': {
          templateUrl: templates_path+"/hasiera.html",
          controller: 'HasieraCtrl'
        }
      }
    })
       
  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: templates_path+"/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  })
  
   /*.state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: templates_path+"/nagusia.html"
    })*/
  
  .state('app.grabazioa', {
      url: "/grabazioa",
      views: {
        'menuContent': {
          templateUrl: templates_path+"/grabazioa.html",
          controller: 'GrabazioaCtrl'
        }
      }
    })
    .state('app.think_client_sarea', {
      url: "/think_client_sarea",
      views: {
        'menuContent': {
          templateUrl: templates_path+"/think_client_sarea.html",
          controller: 'ThinkClientSareaCtrl'
        }
      }
    })
    .state('app.sarrera', {
      url: "/sarrera",
      views: {
        'menuContent': {
          templateUrl: templates_path+"/sarrera.html",
          controller: 'SarreraCtrl'
        }
      }
    })  
    .state('app.feedback', {
      url: "/feedback",
      views: {
        'menuContent': {
          templateUrl: templates_path+"/feedback.html",
          controller: 'FeedbackCtrl'
        }
      }
    })
    .state('app.plasma', {
      url: "/plasma",
      views: {
        'menuContent': {
          templateUrl: templates_path+"/plasma.html",
          controller: 'PlasmaCtrl'
        }
      }
    })
    .state('app.proiektorea', {
      url: "/proiektorea",
      views: {
        'menuContent': {
          templateUrl: templates_path+"/proiektorea.html",
          controller: 'ProiektoreaCtrl'
        }
      }
    })
    .state('app.arbela', {
      url: "/arbela",
      views: {
        'menuContent': {
          templateUrl: templates_path+"/arbela.html",
          controller: 'ArbelaCtrl'
        }
      }
    })
    .state('app.soinua', {
    url: "/soinua",
    views: {
      'menuContent': {
        templateUrl: templates_path+"/soinua.html",
        controller: 'SoinuaCtrl'
      }
    }
  })
  .state('app.argiak', {
    url: "/argiak",
    views: {
      'menuContent': {
        templateUrl: templates_path+"/argiak.html",
        controller: 'ArgiakCtrl'
      }
    }
  })
  .state('app.itzali', {
    url: "/itzali",
    views: {
      'menuContent': {
        templateUrl: templates_path+"/itzali.html",
        controller: 'ItzaliCtrl'
      }
    }
  })
  .state('app.camara1', {
      url: "/camara1",
      views: {
        'menuContent': {
          templateUrl: templates_path+"/camara1.html",
          controller: 'Camara1Ctrl'
        }
      }
    })
    .state('app.camara2', {
      url: "/camara2",
      views: {
        'menuContent': {
          templateUrl: templates_path+"/camara2.html",
          controller: 'Camara2Ctrl'
        }
      }
    })
    .state('app.camara3', {
      url: "/camara3",
      views: {
        'menuContent': {
          templateUrl: templates_path+"/camara3.html",
          controller: 'Camara3Ctrl'
        }
      }
    })
    .state('app.dvd', {
      url: "/dvd",
      views: {
        'menuContent': {
          templateUrl: templates_path+"/dvd.html",
          controller: 'DvdCtrl'
        }
      }
    })
    .state('app.ordenadore_nagusia', {
      url: "/ordenadore_nagusia",
      views: {
        'menuContent': {
          templateUrl: templates_path+"/ordenadore_nagusia.html",
          controller: 'OrdenadoreNagusiaCtrl'
        }
      }
    })
    .state('app.dokumentu_kamera', {
      url: "/dokumentu_kamera",
      views: {
        'menuContent': {
          templateUrl: templates_path+"/dokumentu_kamera.html",
          controller: 'DokumentuKameraCtrl'
        }
      }
    })
    .state('app.proiektore_zentrala', {
      url: "/proiektore_zentrala",
      views: {
        'menuContent': {
          templateUrl: templates_path+"/proiektore_zentrala.html",
          controller: 'ProiektoreZentralaCtrl'
        }
      }
    })
    
    .state('app.deitu_eskegi', {
      url: "/deitu_eskegi",
      views: {
        'menuContent': {
          templateUrl: templates_path+"/deitu_eskegi.html",
          controller: 'DeituEskegiCtrl'
        }
      }
    })
    
   .state('app.nagusia', {
      url: "/nagusia",
      views: {
        'menuContent': {
          templateUrl: templates_path+"/nagusia_dispositiboa.html",
          controller: 'NagusiaCtrl'
        }
      }
    })
    
    .state('app.kamara_posizioak', {
      url: "/kamara_posizioak",
      views: {
        'menuContent': {
          templateUrl: templates_path+"/kamara_posizioak.html",
          controller: 'KamaraPosizioakCtrl'
        }
      }
    })
    
    .state('app.log', {
    url: "/log",
    views: {
      'menuContent': {
        templateUrl: templates_path+"/log.html",
        controller: 'LogCtrl'
      }
    }
  })
  
  /*
  .state('app.mezuak', {
    url: "/mezuak",
    views: {
      'menuContent': {
        templateUrl: templates_path+"/mezuak.html",
        controller: 'MezuakCtrl'
      }
    }
  });*/
  
  .state('app.simulando_popup', {
    url: "/simulando_popup",
    views: {
      'menuContent': {
        templateUrl: templates_path+"/simulando_popup.html",
        controller: 'SimulandoPopupCtrl'
      }
    }
  });
  
    
   
        
  // if none of the above states are matched, use this as the fallback
  
  //intelsat-2015
  //$urlRouterProvider.otherwise('/app/hasiera');
  $urlRouterProvider.otherwise('/app/ongi_etorri');
  //$urlRouterProvider.otherwise('/tab/grabazioa');
});
function load_translation_xml($http,xml_translation,konfig){
    //$http.get(konfig.base_url+'www/files/translation.xml').then(function(resp) {
    $http.get('files/translation.xml').then(function(resp) {
        xml_translation.xml=resp.data;
        var x2js = new X2JS();
        xml_translation.xml = x2js.xml_str2json(xml_translation.xml);
  }, function(err) {
    alert("error:load_translation_xml");
    // err.status will contain the status code
  })
}