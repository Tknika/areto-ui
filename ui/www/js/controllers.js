angular.module('starter.controllers', [])

//.controller('AppCtrl', function($scope, $ionicModal, $timeout,LoadParaninfoXml) {
.controller('AppCtrl', function($scope, $ionicModal, $timeout,xml_data,xml_translation,konfig) {  
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use laterf
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
//intelsat-2015
.controller('OngiEtorriCtrl', function($scope, $stateParams,xml_data,xml_translation,konfig,gettextCatalog,$funciones,$timeout,$ionicHistory,$ionicPopup) {
    $ionicHistory.nextViewOptions({
     disableBack: true
    });
    //set_esaldiak_ongi_etorri($scope,xml_translation,konfig);
    $scope.hizkuntzak = [
        { text: "Euskera", value: "eu" },
        { text: "Castellano", value: "es" }
    ];
    $scope.data = {
        //hizkuntza:konfig.lang
        hizkuntza:gettextCatalog.currentLanguage
    };
    $scope.hizkuntza_change = function(item) {
        /*konfig.lang=item.value;
        set_esaldiak_ongi_etorri($scope,xml_translation,konfig);*/
        $scope.lang=item.value;
        gettextCatalog.setCurrentLanguage($scope.lang);
        //$scope.updateLang();
    };
    //$scope.sistema_click = function() {
    $scope.sistema_click = function(event) {
        //alert(event.target.id);
        $funciones.funciones_bidali_botoi_ebentua(11,event.target.id,$funciones,$timeout);
        send_ongi_etorri_sistema_message(xml_data,$funciones);
        //simulando
        //simulando($scope,$timeout);
    };
    $scope.frogatu_click = function(event) {
        $funciones.funciones_bidali_botoi_ebentua(19,event.target.id,$funciones,$timeout);
        send_ongi_etorri_frogatu_message(xml_data,$funciones);
        var msg=get_espera_translation("espere_comprobando");
        $scope.espera_erlojua_hasi(msg,$ionicPopup,gettextCatalog);
        //simulando
        //simulando($scope,$timeout);
    };
    $scope.sistema_mouseup=function(event){
        //alert(event.target.id);
        //$funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout);
    }
    $scope.frogatu_mouseup=function(event){
        //$funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout);
    }
    $scope.hizkuntza_click = function(item) {
        $funciones.funciones_bidali_botoi_ebentua(9,item.value,$funciones,$timeout);
    };
    $scope.hizkuntza_mouseup = function(item) {
        $funciones.funciones_bidali_botoi_ebentua(10,item.value,$funciones,$timeout);
    };
})
//intelsat-2015
.controller('HasieraCtrl', function($scope, $stateParams,xml_data,xml_translation,konfig,$funciones,$ionicHistory,$timeout) {
    $ionicHistory.nextViewOptions({
     disableBack: true
    });
    set_esaldiak_hasiera($scope,xml_translation,konfig);
    $scope.hitzaldia_click = function(event) {
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        send_hasiera_hitzaldia_message(xml_data,$funciones);
        //simulando
        //simulando($scope,$timeout);
    };
    $scope.bilera_click = function(event) {
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        send_hasiera_bilera_message(xml_data,$funciones);
        //simulando
        //simulando($scope,$timeout);
    };
    $scope.filma_click = function(event) {
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        send_hasiera_filma_message(xml_data,$funciones);
    };
    $scope.klaseak_bidali_click = function(event) {
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        send_hasiera_klaseak_bidali_message(xml_data,$funciones);
        //simulando
        //simulando($scope,$timeout);
    };
    $scope.klaseak_jaso_click = function(event) {
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);        
        send_hasiera_klaseak_jaso_message(xml_data,$funciones);
        //simulando
        //simulando($scope,$timeout);
    };
    $scope.hitzaldia_mouseup = function(event) {
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout);
    };
    $scope.bilera_mouseup = function(event) {
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout);
    };
    $scope.filma_mouseup = function(event) {
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout);
    };
    $scope.klaseak_bidali_mouseup = function(event) {
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout);        
    };
    $scope.klaseak_jaso_mouseup = function(event) {
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout);        
    };
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            event.targetScope.$watch('$viewContentLoaded', function(){
                if(toState.name=='app.hasiera'){
                    set_esaldiak_hasiera($scope,xml_translation,konfig);
                }
            });
       })
})
//intelsat-2015
.controller('GrabazioaCtrl', function($scope, $stateParams,xml_data,$ionicTabsDelegate,$funciones,$timeout,$state,konfig) {
    $scope.grabazioa_bolumena_value=0;
    $scope.nagusia_grabazioa_dvdgrab_egoera='';
    $scope.nagusia_grabazioa_dvdgrab_streaming_egoera='';
    //$funciones.funciones_nagusia_dispositivo_botoi_zapalketa('id_dispositivo_grabazioa',$scope,$funciones);
    $scope.on_nagusia_grabazioa_select = function(index) {
        /*$ionicTabsDelegate.select(index);
        //$scope.nagusia_grabazioa_dvdgrab_egoera='';
        send_nagusia_grabazioa_dispositibo_message(xml_data,$funciones);*/        
        nagusia_grabazioa_select($ionicTabsDelegate,index,xml_data,$funciones,null,$state);
    };
    $scope.drag = function(value) {
        //alert("send value="+value);
    };
    $scope.tb_kanal_gehi_click=function(event){
        //simulando
        //simulando($scope,$timeout);
        //
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout); 
        send_nagusia_grabazioa_kanal_gehi_message(xml_data,$funciones);
    };
    $scope.tb_kanal_ken_click=function(event){
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout); 
        send_nagusia_grabazioa_kanal_ken_message(xml_data,$funciones);
        //simulando
        //simulando($scope,$timeout);
    };
    $scope.source_click=function(event){
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        send_nagusia_grabazioa_source_message(xml_data,$funciones);
    };
    $scope.grabatu_click=function(event){
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        feed_lokala_nagusia_grabazioa_grabatu(xml_data,'dvdgrab','dvdgrab_abajo','grabar',$funciones,$state,konfig);        
        send_nagusia_grabazioa_grabatu_message(xml_data,$funciones);
        //simulando
        //simulando($scope,$timeout);
    };
    $scope.grabazioa_gelditu_click=function(event){
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        feed_lokala_nagusia_grabazioa_grabazioa_gelditu(xml_data,'dvdgrab','dvdgrab_abajo','parar_grabacion',$funciones,$state,konfig);
        send_nagusia_grabazioa_grabazioa_gelditu_message(xml_data,$funciones);
        //simulando
        //simulando($scope,$timeout);
    };
    $scope.streaming_grabatu_click=function(event){
        $scope.nagusia_grabazioa_dvdgrab_streaming_egoera='';                        
        //alert("Hemen dagokion shell-ari deitu behar da");
        feed_lokala_nagusia_grabazioa_streaming_grabatu(xml_data,'dvdgrab','grabazioa_tknika72','hasi',$funciones,$state,konfig);
        send_nagusia_grabazioa_streaming_grabatu_message(xml_data,$funciones);
    };
    $scope.streaming_grabazioa_gelditu_click=function(event){
        $scope.nagusia_grabazioa_dvdgrab_streaming_egoera='';                        
        //alert("Hemen dagokion shell-ari deitu behar da");
        feed_lokala_nagusia_grabazioa_streaming_grabazioa_gelditu(xml_data,'dvdgrab','grabazioa_tknika72','gelditu',$funciones,$state,konfig);        
        send_nagusia_grabazioa_streaming_gelditu_message(xml_data,$funciones);
    };
    $scope.grabazioa_bolumena_gehi_click=function(event){
        //simulando
        /*var gehi=5;
        if($scope.grabazioa_bolumena_value<=($scope.grabazioa_bolumena_value+gehi)){
            $scope.grabazioa_bolumena_value=$scope.grabazioa_bolumena_value+gehi;
        }*/    
        //
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        send_nagusia_grabazioa_bolumena_gehi_message(xml_data,$funciones);
        //simulando
        //simulando($scope,$timeout);
    };
    $scope.grabazioa_bolumena_ken_click=function(event){
        //simulando
        /*var ken=5;
        if($scope.grabazioa_bolumena_value>=ken){
            $scope.grabazioa_bolumena_value=$scope.grabazioa_bolumena_value-ken;
        }*/
        //
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout); 
        send_nagusia_grabazioa_bolumena_ken_message(xml_data,$funciones);
        //simulando
        //simulando($scope,$timeout);
    };
    $scope.grabazioa_bolumena_ken_mouseup=function(event){
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout); 
    };
    $scope.grabazioa_bolumena_gehi_mouseup=function(event){
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout);
    };
    $scope.tb_kanal_gehi_mouseup=function(event){
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout); 
    }
    $scope.tb_kanal_ken_mouseup=function(event){
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout); 
    }
    $scope.source_mouseup=function(event){
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout); 
    }
    $scope.$on('set_nagusia_grabazioa_dvdgrab_egoera', function(event, args){
        $scope.nagusia_grabazioa_dvdgrab_egoera=args[0];        
    });    
    $scope.$on('set_nagusia_grabazioa_bolumena_value', function(event, args){
        $scope.grabazioa_bolumena_value=Number(args[0]);        
    });    
})

//intelsat-2015        
.controller('indexCtrl',function($scope, gettextCatalog,xml_data,$funciones,$ionicPopup,$state,$rootScope,$http,konfig,$timeout,socket_log,items_menu,$location,$stateParams,$ionicSideMenuDelegate,$window)
{
$scope.langs = ["es","eu"];
$scope.lang = "eu";
var espera_erlojua='';
  $scope.menu_nagusia_array=create_menu_nagusia_array();
  $scope.ion_radio_menu_nagusia={value:""};
  $timeout(function(){
    controller_menuko_botoi_zapalketa($state,$scope,$funciones,$location);
  },250);
  $scope.on_ongi_etorri_menu_click = function() {
      if(!is_controller_pantalla_aktibo_dago('app.ongi_etorri',$state)){
        $funciones.funciones_menuko_botoi_zapalketa('id_ion_item_ongi_etorri_menu',$scope,$funciones);
        //$funciones.funciones_menuko_botoi_zapalketa('id_ion_item_ongi_etorri_menu_nagusia',$scope,$funciones);
        send_menu_ongi_etorri_message(xml_data,$funciones);
      }
  } 
  $scope.on_hasiera_menu_click = function() {
      if(!is_controller_pantalla_aktibo_dago('app.hasiera',$state)){
        $funciones.funciones_menuko_botoi_zapalketa('id_ion_item_hasiera_menu',$scope,$funciones);
        //$funciones.funciones_menuko_botoi_zapalketa_hasiera($scope,$funciones);
        //controller_menuko_botoi_zapalketa($state,$scope,$funciones,$location);
        send_menu_hasiera_message(xml_data,$funciones);
      }  
  }
  $scope.on_nagusia_menu_click = function() {
      //$ionicSideMenuDelegate.toggleLeft("ion_side_menu_nagusia_delegate_handle");
      //$ionicSideMenuDelegate.$getByHandle("ion_side_menu_nagusia_delegate_handle").toggleLeft();
      //if(!is_controller_pantalla_aktibo_dago('app.nagusia',$state)){
      //if(!is_nagusia_controller_aktibo_dago($state,$funciones)){
      if(!is_controller_pantalla_aktibo_dago('app.nagusia',$state)){
        $funciones.funciones_menuko_botoi_zapalketa_nagusia($scope,$funciones);
        send_nagusia_message(xml_data,$funciones);
      }  
  }
  $scope.on_deitu_eskegi_menu_click = function() {
      //if(is_item_menu_enabled('deitu_eskegi',items_menu)){
        if(!is_controller_pantalla_aktibo_dago('app.deitu_eskegi',$state)){
          $funciones.funciones_menuko_botoi_zapalketa('id_ion_item_deitu_eskegi_menu',$scope,$funciones);
          //$funciones.funciones_menuko_botoi_zapalketa('id_ion_item_deitu_eskegi_menu_nagusia',$scope,$funciones);
          send_deitu_eskegi_message(xml_data,$funciones);
          //$state.go('app.deitu_eskegi');
        }
      //}
  }
  $scope.on_soinua_menu_click=function(){
      if(!is_controller_pantalla_aktibo_dago('app.soinua',$state)){
        $funciones.funciones_menuko_botoi_zapalketa('id_ion_item_soinua_menu',$scope,$funciones);
        //$funciones.funciones_menuko_botoi_zapalketa('id_ion_item_soinua_menu_nagusia',$scope,$funciones);
        send_menu_soinua_message(xml_data,$funciones);
      }  
  }
  $scope.on_argiak_menu_click=function(){
      if(!is_controller_pantalla_aktibo_dago('app.argiak',$state)){
        $funciones.funciones_menuko_botoi_zapalketa('id_ion_item_argiak_menu',$scope,$funciones);
        //$funciones.funciones_menuko_botoi_zapalketa('id_ion_item_argiak_menu_nagusia',$scope,$funciones);
        send_menu_argiak_message(xml_data,$funciones);
      }  
  }
  $scope.on_itzali_menu_click=function(){
      if(!is_controller_pantalla_aktibo_dago('app.itzali',$state)){
        $funciones.funciones_menuko_botoi_zapalketa('id_ion_item_itzali_menu',$scope,$funciones);
        //$funciones.funciones_menuko_botoi_zapalketa('id_ion_item_itzali_menu_nagusia',$scope,$funciones);
        send_menu_itzali_message(xml_data,$funciones);
      }  
  }
  $scope.on_menu_nagusia_change=function(item){
      $scope.ion_radio_menu_nagusia.value=item.value;
      $state.go(item.value);
  }
  $scope.on_nagusia_grabazioa_sidemenu_select=function(){      
      nagusia_grabazioa_select(null,null,xml_data,$funciones,'sidemenu',$state,$window);
  }
  $scope.on_nagusia_think_client_sarea_sidemenu_select=function(){
      nagusia_think_client_sarea_select(null,null,xml_data,$funciones,'sidemenu',$state);
  }
  $scope.on_nagusia_sarrera_sidemenu_select=function(){
      nagusia_sarrera_select(null,null,xml_data,$funciones,'sidemenu',$state);
  }
  $scope.on_nagusia_feedback_sidemenu_select=function(){
      nagusia_feedback_select(null,null,xml_data,$funciones,'sidemenu',$state);
  }
  $scope.on_nagusia_plasma_sidemenu_select=function(){
      nagusia_plasma_select(null,null,xml_data,$funciones,'sidemenu',$state,$scope,$rootScope,$timeout);
  }
  $scope.on_nagusia_proiektorea_sidemenu_select=function(){
      nagusia_proiektorea_select(null,null,xml_data,$funciones,'sidemenu',$state);
  }
  $scope.on_nagusia_arbela_sidemenu_select=function(){
      nagusia_arbela_select(null,null,xml_data,$funciones,'sidemenu',$state);
  }  
  $scope.on_log_menu_click= function() {
      $funciones.funciones_menuko_botoi_zapalketa('id_ion_item_log_menu',$scope,$funciones);
      //$funciones.funciones_menuko_botoi_zapalketa('id_ion_item_log_menu_nagusia',$scope,$funciones);
  }
  //////////////////////////////////popup//////////////////////////////
  // Triggered on a button click, or some other target
  $scope.showPopup=function(msg,title,type,msg_bai,msg_ez,alert_param) {
            //$scope.data = {}

        var buttons=new Array({ text: gettextCatalog.getString('Ez') ,
                  onTap: function(e) {
                      on_popup_nok(xml_data,$funciones,type,$scope,msg_ez,$rootScope);
                  }
                },{
                  text: '<b>'+gettextCatalog.getString('Bai')+'</b>',
                  type: 'button-positive',
                  onTap: function(e) {
                      on_popup_ok(xml_data,$funciones,type,$scope,msg_bai);
                  }
                });    
            var button_ok='';
            if(type=='error'){
                button_ok=buttons[1];
                buttons=new Array(button_ok);
            }else if(alert_param=='X'){
                if(msg=='OK'){
                    $scope.espera_erlojua_itxi($scope);
                    button_ok=buttons[1];
                    button_ok.text='<b>'+gettextCatalog.getString('Itxi')+'</b>';
                    buttons=new Array(button_ok);
                }    
            }
                

            // An elaborate, custom popup
            var myPopup = $ionicPopup.show({
              template: gettextCatalog.getString(msg),
              title: get_ionic_popup_title_image()+title,
              subTitle: '',
              //scope: $scope,
              buttons:buttons
            });
            myPopup.then(function(res) {
              //console.log('Tapped!', res);
            });
            /*$timeout(function() {
               myPopup.close(); //close the popup after 3 seconds for some reason
            }, 3000);*/
        };   
 // A confirm dialog
 $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Consume Ice Cream',
     template: 'Are you sure you want to eat this ice cream?'
   });
   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };

 // An alert dialog
 $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Don\'t eat that!',
     template: 'It might taste good'
   });
   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
 };
 //$scope.espera_erlojua_hasi=function(msg,$ionicPopup,gettextCatalog) {
 $scope.espera_erlojua_hasi=function(msg) {
    if(espera_erlojua!=''){ 
        $scope.espera_erlojua_itxi($scope); 
    }
    var buttons=new Array({ text: gettextCatalog.getString('Itxi') ,
                  type: 'button-positive',  
                  onTap: function(e) {
                      if(espera_erlojua!=''){ 
                        $scope.espera_erlojua_itxi($scope); 
                      }
                  }
                });
    //call_espera_erlojua_hasi(msg,$ionicPopup,gettextCatalog,$scope,espera_erlojua);
    var html='';
    var html_array=new Array();
    html_array.push('<div class="div_espera_erlojua">'+gettextCatalog.getString(msg)+"</div>");
    html_array.push('<ion-spinner icon="spiral" class="spinner_espera_erlojua"></ion-spinner>');
    html=html_array.join('');
    espera_erlojua = $ionicPopup.show({
              template: html,
              buttons:buttons,
              title: get_ionic_popup_title_image(),
    })
 }
 $scope.espera_erlojua_itxi=function($scope){
        //$scope.espera_erlojua.close();
        if(espera_erlojua!=''){ 
            espera_erlojua.close();
            espera_erlojua='';
        }    
 }
//$scope.filtro_msg=function(msg,$state,$rootScope){
$scope.filtro_msg=function(msg){
    call_filtro_msg(msg,$state,$rootScope,$ionicPopup,gettextCatalog,$scope,xml_data,$funciones,konfig,$timeout,items_menu,socket_log);
} 
//simulando
//simulando($scope);
//
$scope.socket='';
load_paraninfo_xml($http,xml_data,konfig,$scope,$rootScope,$funciones,socket_log,$state,$ionicPopup,gettextCatalog,$timeout,items_menu);
})
//
.controller('ThinkClientSareaCtrl', function($scope, $stateParams,xml_data,$state,$ionicTabsDelegate,$funciones,$state,$timeout) {
    $scope.on_nagusia_think_client_sarea_select = function(index) {        
        nagusia_think_client_sarea_select($ionicTabsDelegate,index,xml_data,$funciones,null,$state);
    };    
    $scope.thin_client_sarea_portatil1_click=function(event){
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        send_nagusia_think_client_sarea_portatil1_message(xml_data,$funciones); 
    };
    $scope.thin_client_sarea_portatil2_click=function(event){
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        send_nagusia_think_client_sarea_portatil2_message(xml_data,$funciones);
    };
    $scope.thin_client_sarea_portatil3_click=function(event){
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        send_nagusia_think_client_sarea_portatil3_message(xml_data,$funciones);
    };
    $scope.thin_client_sarea_think_client_click=function(event){
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        send_nagusia_think_client_sarea_think_client_message(xml_data,$funciones);
    };
    $scope.thin_client_sarea_pclurra_click=function(event){
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        send_nagusia_think_client_sarea_pclurra_message(xml_data,$funciones);
    };
    $scope.thin_client_sarea_dokumentu_kamera_click=function(event){
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        send_nagusia_think_client_sarea_dokumentu_kamera_message(xml_data,$funciones);
        //simulando
        //$state.go("app.hasiera");
    };
    $scope.thin_client_sarea_atril_click=function(event){
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        send_nagusia_think_client_sarea_atril_message(xml_data,$funciones);
        //simulando
        //$state.go("app.grabazioa");
    };
    $scope.thin_client_sarea_portatil1_mouseup=function(event){
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout); 
    };
    $scope.thin_client_sarea_portatil2_mouseup=function(event){
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout);
        
    };
    $scope.thin_client_sarea_portatil3_mouseup=function(event){
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout);
        
    };
    $scope.thin_client_sarea_think_client_mouseup=function(event){
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout);
        
    };
    $scope.thin_client_sarea_pclurra_mouseup=function(event){
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout);
        
    };
    $scope.thin_client_sarea_dokumentu_kamera_mouseup=function(event){
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout);        
        //simulando
        //$state.go("app.hasiera");
    };
    $scope.thin_client_sarea_atril_mouseup=function(event){
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout);        
        //simulando
        //$state.go("app.grabazioa");
    };
})

//intelsat-2015
.controller('SarreraCtrl', function($scope, $stateParams,xml_data,$ionicTabsDelegate,$funciones,$state,konfig,$timeout,gettextCatalog) {
    $scope.nagusia_sarrera_class_active=' active disabled';
    if($scope.sarrera_piztu==null){
        $scope.sarrera_piztu=false;
        /*$scope.sarrera_piztu_text=$funciones.get_eragotzita_text(gettextCatalog);
        $scope.sarrera_piztu_disabled=true;*/
        $scope.sarrera_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
        $scope.sarrera_piztu_disabled=false;
        set_nagusia_sarrera_all_enabled(false,$funciones);
    }
    if(konfig.bakup_sarrera_piztu!=null){
        $scope.sarrera_piztu=konfig.bakup_sarrera_piztu;
        $scope.sarrera_piztu_text=konfig.bakup_sarrera_piztu_text;
        $scope.sarrera_piztu_disabled=konfig.bakup_sarrera_piztu_disabled;
        set_nagusia_sarrera_all_enabled($scope.sarrera_piztu,$funciones);
    } 
    $scope.on_nagusia_sarrera_select = function(index) {
        nagusia_sarrera_select($ionicTabsDelegate,index,xml_data,$funciones,null,$state);
    };
    $scope.nagusia_sarrera_piztu_click=function(event){
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        feed_lokala_nagusia_sarrera_piztu(xml_data,'pantalla_entrada','encender_apagar_pantalla','encender',$funciones,$state,konfig);
        send_nagusia_sarrera_piztu_message(xml_data,$funciones);
    }
    $scope.nagusia_sarrera_itzali_click=function(event){
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        feed_lokala_nagusia_sarrera_itzali(xml_data,'pantalla_entrada','encender_apagar_pantalla','apagar',$funciones,$state,konfig);
        send_nagusia_sarrera_itzali_message(xml_data,$funciones);
    }
    $scope.nagusia_sarrera_dvd_click=function(event){
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        send_nagusia_sarrera_dvd_message(xml_data,$funciones);
    }
    $scope.nagusia_sarrera_dvdgrab_click=function(event){
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        send_nagusia_sarrera_dvdgrab_message(xml_data,$funciones);
    }
    $scope.nagusia_sarrera_dokumentu_kamera_click=function(event){
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        send_nagusia_sarrera_dokumentu_kamera_message(xml_data,$funciones);
    }
    $scope.nagusia_sarrera_portatil1_click=function(event){
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        send_nagusia_sarrera_portatil1_message(xml_data,$funciones);
    }
    $scope.nagusia_sarrera_portatil2_click=function(event){
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        send_nagusia_sarrera_portatil2_message(xml_data,$funciones);
    }
    $scope.nagusia_sarrera_portatil3_click=function(event){
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        send_nagusia_sarrera_portatil3_message(xml_data,$funciones);
    }
    $scope.nagusia_sarrera_think_client_click=function(event){
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        send_nagusia_sarrera_think_client_message(xml_data,$funciones);
    }
    $scope.nagusia_sarrera_pclurra_click=function(event){
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        send_nagusia_sarrera_pclurra_message(xml_data,$funciones);
    }
    $scope.nagusia_sarrera_atril_click=function(event){
        $funciones.funciones_bidali_botoi_ebentua(1,event.target.id,$funciones,$timeout);
        send_nagusia_sarrera_atril_message(xml_data,$funciones);
    }
    $scope.nagusia_sarrera_dvd_mouseup=function(event){
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout);
    }
    $scope.nagusia_sarrera_dvdgrab_mouseup=function(event){
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout);
    }
    $scope.nagusia_sarrera_dokumentu_kamera_mouseup=function(event){
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout);
    }
    $scope.nagusia_sarrera_portatil1_mouseup=function(event){
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout);
    }
    $scope.nagusia_sarrera_portatil2_mouseup=function(event){
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout);
    }
    $scope.nagusia_sarrera_portatil3_mouseup=function(event){
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout);
    }
    $scope.nagusia_sarrera_think_client_mouseup=function(event){
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout);
    }
    $scope.nagusia_sarrera_pclurra_mouseup=function(event){
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout);
    }
    $scope.nagusia_sarrera_atril_mouseup=function(event){
        $funciones.funciones_bidali_botoi_ebentua(2,event.target.id,$funciones,$timeout);
    }
    $scope.sarrera_piztu_toggle_change=function(){
        if($scope.sarrera_piztu==true){
            $scope.sarrera_piztu=false;
            $scope.sarrera_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
            //$scope.$apply();
            konfig.bakup_sarrera_piztu_disabled=false;
            konfig.bakup_sarrera_piztu=false;
            konfig.bakup_sarrera_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
            set_nagusia_sarrera_all_enabled(false,$funciones);
        }else{
            $scope.sarrera_piztu=true;
            $scope.sarrera_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
            //$scope.$apply();
            konfig.bakup_sarrera_piztu_disabled=false;
            konfig.bakup_sarrera_piztu=true;
            konfig.bakup_sarrera_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
            set_nagusia_sarrera_all_enabled(true,$funciones);
        }        
        send_nagusia_sarrera_piztu_toggle_message($scope,xml_data,$funciones);
    }
    $scope.$on('set_nagusia_sarrera_on', function(event, args){
        $scope.sarrera_piztu_disabled=false;
        $scope.sarrera_piztu=true;
        $scope.sarrera_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
        //$scope.$apply();
        konfig.bakup_sarrera_piztu_disabled=false;
        konfig.bakup_sarrera_piztu=true;
        konfig.bakup_sarrera_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
        set_nagusia_sarrera_all_enabled(true,$funciones);
    });
    $scope.$on('set_nagusia_sarrera_off', function(event, args){
        $scope.sarrera_piztu_disabled=false;
        $scope.sarrera_piztu=false;
        $scope.sarrera_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
        //$scope.$apply();
        konfig.bakup_sarrera_piztu_disabled=false;
        konfig.bakup_sarrera_piztu=false;
        konfig.bakup_sarrera_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
        set_nagusia_sarrera_all_enabled(false,$funciones);
    });
    $scope.$on('set_nagusia_sarrera_disabled', function(event, args){
        $scope.sarrera_piztu_disabled=true;
        $scope.sarrera_piztu=false;
        $scope.sarrera_piztu_text=args[0];
        //$scope.$apply();
        konfig.bakup_sarrera_piztu_disabled=true;
        konfig.bakup_sarrera_piztu=false;
        konfig.bakup_sarrera_piztu_text=args[0];
        set_nagusia_sarrera_all_enabled(false,$funciones);
    });
})

//intelsat-2015
.controller('FeedbackCtrl', function($scope, $stateParams,xml_data,$ionicTabsDelegate,$funciones,$state,konfig,gettextCatalog) {
    $scope.nagusia_feedback_class_active=' active disabled';
    if($scope.feedback_piztu==null){
        $scope.feedback_piztu=false;
        /*$scope.feedback_piztu_text=$funciones.get_eragotzita_text(gettextCatalog);
        $scope.feedback_piztu_disabled=true;*/
        $scope.feedback_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
        $scope.feedback_piztu_disabled=false;
        set_nagusia_feedback_all_enabled(false,$funciones);
    }
    if(konfig.bakup_feedback_piztu!=null){
        $scope.feedback_piztu=konfig.bakup_feedback_piztu;
        $scope.feedback_piztu_text=konfig.bakup_feedback_piztu_text;
        $scope.feedback_piztu_disabled=konfig.bakup_feedback_piztu_disabled;
        set_nagusia_feedback_all_enabled($scope.feedback_piztu,$funciones);
    } 
    $scope.on_nagusia_feedback_select = function(index) {
        nagusia_feedback_select($ionicTabsDelegate,index,xml_data,$funciones,null,$state);
    };
    $scope.nagusia_feedback_piztu_click=function(){
        feed_lokala_nagusia_feedback_piztu(xml_data,'pantalla_presidencia','encender_apagar_pantalla','encender',$funciones,$state,"feedback",konfig);
        send_nagusia_feedback_piztu_message(xml_data,$funciones);
    }
    $scope.nagusia_feedback_itzali_click=function(){
        feed_lokala_nagusia_feedback_itzali(xml_data,'pantalla_presidencia','encender_apagar_pantalla','apagar',$funciones,$state,konfig);
        send_nagusia_feedback_itzali_message(xml_data,$funciones);
    }
    $scope.nagusia_feedback_solaskidea_erakutsi_click=function(){
        send_nagusia_feedback_solaskidea_erakutsi_message(xml_data,$funciones);
    }
    $scope.nagusia_feedback_gure_imajina_erakutsi_click=function(){
        send_nagusia_feedback_gure_imajina_erakutsi_message(xml_data,$funciones);
    }
    $scope.nagusia_feedback_dvd_click=function(){
        send_nagusia_feedback_dvd_message(xml_data,$funciones);
    }
    $scope.nagusia_feedback_dvdgrab_click=function(){
        send_nagusia_feedback_dvdgrab_message(xml_data,$funciones);
    }
    $scope.nagusia_feedback_dokumentu_kamera_click=function(){
        send_nagusia_feedback_dokumentu_kamera_message(xml_data,$funciones);
    }
    $scope.nagusia_feedback_portatil1_click=function(){
        send_nagusia_feedback_portatil1_message(xml_data,$funciones);
    }
    $scope.nagusia_feedback_portatil2_click=function(){
        send_nagusia_feedback_portatil2_message(xml_data,$funciones);
    }
    $scope.nagusia_feedback_portatil3_click=function(){
        send_nagusia_feedback_portatil3_message(xml_data,$funciones);
    }
    $scope.nagusia_feedback_think_client_click=function(){
        send_nagusia_feedback_think_client_message(xml_data,$funciones);
    }
    $scope.nagusia_feedback_pclurra_click=function(){
        send_nagusia_feedback_pclurra_message(xml_data,$funciones);
    }
    $scope.nagusia_feedback_atril_click=function(){
        send_nagusia_feedback_atril_message(xml_data,$funciones);
    }
    $scope.nagusia_feedback_solaskide_gure_imajina_click=function(){
        send_nagusia_feedback_solaskide_gure_imajina_message(xml_data,$funciones);
    }    
    $scope.feedback_piztu_toggle_change=function(){
        if($scope.feedback_piztu==true){
            $scope.feedback_piztu=false;
            $scope.feedback_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
            //$scope.$apply();
            konfig.bakup_feedback_piztu_disabled=false;
            konfig.bakup_feedback_piztu=false;
            konfig.bakup_feedback_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
            set_nagusia_feedback_all_enabled(false,$funciones);
        }else{
            $scope.feedback_piztu=true;
            $scope.feedback_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
            //$scope.$apply();
            konfig.bakup_feedback_piztu_disabled=false;
            konfig.bakup_feedback_piztu=true;
            konfig.bakup_feedback_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
            set_nagusia_feedback_all_enabled(true,$funciones);
        }        
        send_nagusia_feedback_piztu_toggle_message($scope,xml_data,$funciones);
    }
    $scope.$on('set_nagusia_feedback_on', function(event, args){
        $scope.feedback_piztu_disabled=false;
        $scope.feedback_piztu=true;
        $scope.feedback_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
        //$scope.$apply();
        konfig.bakup_feedback_piztu_disabled=false;
        konfig.bakup_feedback_piztu=true;
        konfig.bakup_feedback_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
        set_nagusia_feedback_all_enabled(true,$funciones);
    });
    $scope.$on('set_nagusia_feedback_off', function(event, args){
        $scope.feedback_piztu_disabled=false;
        $scope.feedback_piztu=false;
        $scope.feedback_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
        //$scope.$apply();
        konfig.bakup_feedback_piztu_disabled=false;
        konfig.bakup_feedback_piztu=false;
        konfig.bakup_feedback_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
        set_nagusia_feedback_all_enabled(false,$funciones);
    });
    $scope.$on('set_nagusia_feedback_disabled', function(event, args){
        $scope.feedback_piztu_disabled=true;
        $scope.feedback_piztu=false;
        $scope.feedback_piztu_text=args[0];
        //$scope.$apply();
        konfig.bakup_feedback_piztu_disabled=true;
        konfig.bakup_feedback_piztu=false;
        konfig.bakup_feedback_piztu_text=args[0];
        set_nagusia_feedback_all_enabled(false,$funciones);
    });
})

//intelsat-2015
.controller('PlasmaCtrl', function($scope, $stateParams,xml_data,$ionicTabsDelegate,$funciones,$state,konfig,$timeout,$rootScope,gettextCatalog) {
    $scope.nagusia_plasma_class_active=' active disabled';
    if($scope.plasma_piztu==null){
        $scope.plasma_piztu=false;
        $scope.plasma_piztu_text=$funciones.get_eragotzita_text(gettextCatalog);
        $scope.plasma_piztu_disabled=true;
        set_nagusia_plasma_all_enabled(false,$funciones);
    }
    if(konfig.bakup_plasma_piztu!=null){
        $scope.plasma_piztu=konfig.bakup_plasma_piztu;
        $scope.plasma_piztu_text=konfig.bakup_plasma_piztu_text;
        $scope.plasma_piztu_disabled=konfig.bakup_plasma_piztu_disabled;
        set_nagusia_plasma_all_enabled($scope.plasma_piztu,$funciones);
    }
    $scope.on_nagusia_plasma_select = function(index) {
        /*$ionicTabsDelegate.select(index);
        send_nagusia_plasma_dispositibo_message(xml_data,$funciones);*/
        nagusia_plasma_select($ionicTabsDelegate,index,xml_data,$funciones,null,$state,$scope,$rootScope,$timeout);
    };
    $scope.nagusia_plasma_piztu_click=function(){
        feed_lokala_nagusia_plasma_piztu(xml_data,'plasma','encender_apagar_pantalla','encender',$funciones,$state,konfig);        
        send_nagusia_plasma_piztu_message(xml_data,$funciones);
    }
    $scope.nagusia_plasma_itzali_click=function(){
        feed_lokala_nagusia_plasma_itzali(xml_data,'plasma','encender_apagar_pantalla','apagar',$funciones,$state,konfig);  
        send_nagusia_plasma_itzali_message(xml_data,$funciones);
    }
    $scope.nagusia_plasma_dvd_click=function(){
        //simulando($scope,$timeout);
        send_nagusia_plasma_dvd_message(xml_data,$funciones);
    }
    $scope.nagusia_plasma_dvdgrab_click=function(){
        send_nagusia_plasma_dvdgrab_message(xml_data,$funciones);
    }
    $scope.nagusia_plasma_dokumentu_kamera_click=function(){
        send_nagusia_plasma_dokumentu_kamera_message(xml_data,$funciones);
    }
    $scope.nagusia_plasma_portatil1_click=function(){
        send_nagusia_plasma_portatil1_message(xml_data,$funciones);
    }
    $scope.nagusia_plasma_portatil2_click=function(){
        send_nagusia_plasma_portatil2_message(xml_data,$funciones);
    }
    $scope.nagusia_plasma_portatil3_click=function(){
        send_nagusia_plasma_portatil3_message(xml_data,$funciones);
    }
    $scope.nagusia_plasma_think_client_click=function(){
        send_nagusia_plasma_think_client_message(xml_data,$funciones);
    }
    $scope.nagusia_plasma_pclurra_click=function(){
        send_nagusia_plasma_pclurra_message(xml_data,$funciones);
    }
    $scope.nagusia_plasma_atril_click=function(){
        send_nagusia_plasma_atril_message(xml_data,$funciones);
    }
    //intelsat-2015
    $scope.nagusia_plasma_kamera1_click=function(){
        send_nagusia_plasma_kamera1_message(xml_data,$funciones);
    }
    //intelsat-2015
    $scope.nagusia_plasma_kamera2_click=function(){
        send_nagusia_plasma_kamera2_message(xml_data,$funciones);
    }
    $scope.plasma_piztu_toggle_change=function(){
        //http://stackoverflow.com/questions/29790767/ionic-angularjs-ion-toggle-doesnt-update-the-model
        if($scope.plasma_piztu==true){
            $scope.plasma_piztu=false;
            $scope.plasma_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
            //$scope.$apply();
            konfig.bakup_plasma_piztu_disabled=false;
            konfig.bakup_plasma_piztu=false;
            konfig.bakup_plasma_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
            set_nagusia_plasma_all_enabled(false,$funciones);
        }else{
            $scope.plasma_piztu=true;
            $scope.plasma_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
            //$scope.$apply();
            konfig.bakup_plasma_piztu_disabled=false;
            konfig.bakup_plasma_piztu=true;
            konfig.bakup_plasma_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
            set_nagusia_plasma_all_enabled(true,$funciones);
        }
        //alert($scope.plasma_piztu);
        send_nagusia_plasma_piztu_toggle_message($scope,xml_data,$funciones);
    }
    $scope.$on('set_nagusia_plasma_on', function(event, args){
        $scope.plasma_piztu_disabled=false;
        $scope.plasma_piztu=true;
        $scope.plasma_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
        //$scope.$apply();
        konfig.bakup_plasma_piztu_disabled=false;
        konfig.bakup_plasma_piztu=true;
        konfig.bakup_plasma_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
        set_nagusia_plasma_all_enabled(true,$funciones);
    });
    $scope.$on('set_nagusia_plasma_off', function(event, args){
        $scope.plasma_piztu_disabled=false;
        $scope.plasma_piztu=false;
        $scope.plasma_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
        //$scope.$apply();
        konfig.bakup_plasma_piztu_disabled=false;
        konfig.bakup_plasma_piztu=false;
        konfig.bakup_plasma_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
        set_nagusia_plasma_all_enabled(false,$funciones);
    });
    $scope.$on('set_nagusia_plasma_disabled', function(event, args){
        $scope.plasma_piztu_disabled=true;
        $scope.plasma_piztu=false;
        $scope.plasma_piztu_text=args[0];
        //$scope.$apply();
        konfig.bakup_plasma_piztu_disabled=true;
        konfig.bakup_plasma_piztu=false;
        konfig.bakup_plasma_piztu_text=args[0];
        set_nagusia_plasma_all_enabled(false,$funciones);
    });
})

//intelsat-2015
.controller('ProiektoreaCtrl', function($scope, $stateParams,xml_data,$ionicTabsDelegate,$funciones,$state,konfig,$interval,$timeout,gettextCatalog) {
    $scope.nagusia_proiektorea_class_active=' active disabled';
    if(konfig.bakup_proiektorea_piztu!=null){
        $scope.proiektorea_piztu=konfig.bakup_proiektorea_piztu;
        $scope.proiektorea_piztu_text=konfig.bakup_proiektorea_piztu_text;
        $scope.proiektorea_piztu_disabled=konfig.bakup_proiektorea_piztu_disabled;
        set_nagusia_proiektorea_all_enabled($scope.proiektorea_piztu,$funciones);
    }else{    
        if($scope.proiektorea_piztu==null){
            $scope.proiektorea_piztu=false;
            $scope.proiektorea_piztu_text=$funciones.get_eragotzita_text(gettextCatalog);
            $scope.proiektorea_piztu_disabled=true;
            set_nagusia_proiektorea_all_enabled(false,$funciones);
        }
    }    
    if(konfig.is_nagusia_proiektorea_create_status_interval_timeout==null){
        konfig.is_nagusia_proiektorea_create_status_interval_timeout=true;
        nagusia_proiektorea_create_status_interval_timeout($state,$funciones,$interval,$timeout);
    }
    $scope.on_nagusia_proiektorea_select = function(index) {        
        nagusia_proiektorea_select($ionicTabsDelegate,index,xml_data,$funciones,null,$state);
    };
    $scope.nagusia_proiektorea_igo_click=function(){
        feed_lokala_nagusia_proiektorea_igo(xml_data,'pantalla_electrica','subir_bajar_pantalla','subir',$funciones,$state,konfig);   
        send_nagusia_proiektorea_igo_message(xml_data,$funciones);
    }
    $scope.nagusia_proiektorea_jaitsi_click=function(){
        feed_lokala_nagusia_proiektorea_jaitsi(xml_data,'pantalla_electrica','subir_bajar_pantalla','bajar',$funciones,$state,konfig);   
        send_nagusia_proiektorea_jaitsi_message(xml_data,$funciones);
    }    
    $scope.nagusia_proiektorea_piztu_click=function(){
        feed_lokala_nagusia_proiektorea_piztu(xml_data,'pantalla_electrica','encender_apagar','encender',$funciones,$state,konfig);                
        send_nagusia_proiektorea_piztu_message(xml_data,$funciones);
    }    
    $scope.nagusia_proiektorea_itzali_click=function(){
        popup_proy($scope,'proiektorea_itzali');
    }
    $scope.nagusia_proiektorea_muteatu_click=function(){
        feed_lokala_nagusia_proiektorea_muteatu(xml_data,'pantalla_electrica','encender_apagar','activar',$funciones,$state,konfig);                        
        send_nagusia_proiektorea_muteatu_message(xml_data,$funciones);
    }
    $scope.nagusia_proiektorea_desmuteatu_click=function(){
        feed_lokala_nagusia_proiektorea_desmuteatu(xml_data,'pantalla_electrica','encender_apagar','desactivar',$funciones,$state,konfig);        
        send_nagusia_proiektorea_desmuteatu_message(xml_data,$funciones);
    }    
    $scope.nagusia_proiektorea_dvd_click=function(){
        send_nagusia_proiektorea_dvd_message(xml_data,$funciones);
    }
    $scope.nagusia_proiektorea_dvdgrab_click=function(){
        send_nagusia_proiektorea_dvdgrab_message(xml_data,$funciones);
    }
    $scope.nagusia_proiektorea_dokumentu_kamera_click=function(){
        send_nagusia_proiektorea_dokumentu_kamera_message(xml_data,$funciones);
    }
    $scope.nagusia_proiektorea_portatil1_click=function(){
        send_nagusia_proiektorea_portatil1_message(xml_data,$funciones);
    }
    $scope.nagusia_proiektorea_portatil2_click=function(){
        send_nagusia_proiektorea_portatil2_message(xml_data,$funciones);
    }
    $scope.nagusia_proiektorea_portatil3_click=function(){
        send_nagusia_proiektorea_portatil3_message(xml_data,$funciones);
    }
    $scope.nagusia_proiektorea_think_client_click=function(){
        send_nagusia_proiektorea_think_client_message(xml_data,$funciones);
    }
    $scope.nagusia_proiektorea_pclurra_click=function(){
        send_nagusia_proiektorea_pclurra_message(xml_data,$funciones);
    }
    $scope.nagusia_proiektorea_atril_click=function(){
        send_nagusia_proiektorea_atril_message(xml_data,$funciones);
    }
    $scope.proiektorea_piztu_toggle_change=function(){
        if($scope.proiektorea_piztu==true){
            $scope.proiektorea_piztu=false;
            $scope.proiektorea_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
            //$scope.$apply();
            konfig.bakup_proiektorea_piztu_disabled=false;
            konfig.bakup_proiektorea_piztu=false;
            konfig.bakup_proiektorea_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
            popup_proy($scope,'proiektorea_itzali');
        }else{
            $scope.proiektorea_piztu=true;
            $scope.proiektorea_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
            //$scope.$apply();
            konfig.bakup_proiektorea_piztu_disabled=false;
            konfig.bakup_proiektorea_piztu=true;
            konfig.bakup_proiektorea_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
            set_nagusia_proiektorea_all_enabled(true,$funciones);
            send_nagusia_proiektorea_piztu_toggle_message($scope,xml_data,$funciones);
        }                
    }
    $scope.$on('set_nagusia_proiektorea_on', function(event, args){
        $scope.proiektorea_piztu_disabled=false;
        $scope.proiektorea_piztu=true;
        //intelsat-2015
        //$scope.proiektorea_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
        $scope.proiektorea_piztu_text=nagusia_proiektorea_get_piztu_text(args[0],$funciones,gettextCatalog);        

        //$scope.$apply();
        konfig.bakup_proiektorea_piztu_disabled=false;
        konfig.bakup_proiektorea_piztu=true;
        konfig.bakup_proiektorea_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
        set_nagusia_proiektorea_all_enabled(true,$funciones);
    });
    $scope.$on('set_nagusia_proiektorea_off', function(event, args){
        $scope.proiektorea_piztu_disabled=false;
        $scope.proiektorea_piztu=false;
        //intelsat-2015
        //$scope.proiektorea_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
        $scope.proiektorea_piztu_text=nagusia_proiektorea_get_itzalita_text(args[0],$funciones,gettextCatalog);
        //$scope.$apply();
        konfig.bakup_proiektorea_piztu_disabled=false;
        konfig.bakup_proiektorea_piztu=false;
        konfig.bakup_proiektorea_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
        set_nagusia_proiektorea_all_enabled(false,$funciones);
    });
    $scope.$on('set_nagusia_proiektorea_disabled', function(event, args){
        $scope.proiektorea_piztu_disabled=true;
        $scope.proiektorea_piztu=false;
        $scope.proiektorea_piztu_text=args[0];
        //$scope.$apply();
        konfig.bakup_proiektorea_piztu_disabled=true;
        konfig.bakup_proiektorea_piztu=false;
        konfig.bakup_proiektorea_piztu_text=args[0];
        set_nagusia_proiektorea_all_enabled(false,$funciones);
    });
})

//intelsat-2015
.controller('ArbelaCtrl', function($scope, $stateParams,xml_data,$ionicTabsDelegate,$funciones,$state,konfig,$interval,$timeout,gettextCatalog) {
    $scope.nagusia_arbela_class_active=' active disabled';
    if(konfig.bakup_arbela_piztu!=null){
        $scope.arbela_piztu=konfig.bakup_arbela_piztu;
        $scope.arbela_piztu_text=konfig.bakup_arbela_piztu_text;
        $scope.arbela_piztu_disabled=konfig.bakup_arbela_piztu_disabled;
        set_nagusia_arbela_all_enabled($scope.arbela_piztu,$funciones);
    }else{        
        if($scope.arbela_piztu==null){
            $scope.arbela_piztu=false;
            $scope.arbela_piztu_text=$funciones.get_eragotzita_text(gettextCatalog);
            $scope.arbela_piztu_disabled=true;
            set_nagusia_arbela_all_enabled(false,$funciones);
        }
    }    
    if(konfig.is_nagusia_arbela_create_status_interval_timeout==null){
        konfig.is_nagusia_arbela_create_status_interval_timeout=true;
        nagusia_arbela_create_status_interval_timeout($state,$funciones,$interval,$timeout);
    }    
    $scope.on_nagusia_arbela_select = function(index) {
        nagusia_arbela_select($ionicTabsDelegate,index,xml_data,$funciones,null,$state);
    };
    $scope.nagusia_arbela_piztu_click=function(){
        feed_lokala_nagusia_arbela_piztu(xml_data,'pizarra_digital','encender_apagar','encender',$funciones,$state,konfig);
        send_nagusia_arbela_piztu_message(xml_data,$funciones);
    }    
    $scope.nagusia_arbela_itzali_click=function(){
        popup_proy($scope,'arbela_itzali');
    }
    $scope.nagusia_arbela_muteatu_click=function(){
        feed_lokala_nagusia_arbela_muteatu(xml_data,'pizarra_digital','encender_apagar','activar',$funciones,$state,konfig);
        send_nagusia_arbela_muteatu_message(xml_data,$funciones);
    }
    $scope.nagusia_arbela_desmuteatu_click=function(){
        feed_lokala_nagusia_arbela_desmuteatu(xml_data,'pizarra_digital','encender_apagar','desactivar',$funciones,$state,konfig);
        send_nagusia_arbela_desmuteatu_message(xml_data,$funciones);
    }    
    $scope.nagusia_arbela_dvd_click=function(){
        send_nagusia_arbela_dvd_message(xml_data,$funciones);
    }
    $scope.nagusia_arbela_dvdgrab_click=function(){
        send_nagusia_arbela_dvdgrab_message(xml_data,$funciones);
    }
    $scope.nagusia_arbela_dokumentu_kamera_click=function(){
        send_nagusia_arbela_dokumentu_kamera_message(xml_data,$funciones);
    }
    $scope.nagusia_arbela_portatil1_click=function(){
        send_nagusia_arbela_portatil1_message(xml_data,$funciones);
    }
    $scope.nagusia_arbela_portatil2_click=function(){
        send_nagusia_arbela_portatil2_message(xml_data,$funciones);
    }
    $scope.nagusia_arbela_portatil3_click=function(){
        send_nagusia_arbela_portatil3_message(xml_data,$funciones);
    }
    $scope.nagusia_arbela_think_client_click=function(){
        send_nagusia_arbela_think_client_message(xml_data,$funciones);
    }
    $scope.nagusia_arbela_pclurra_click=function(){
        send_nagusia_arbela_pclurra_message(xml_data,$funciones);
    }
    $scope.nagusia_arbela_atril_click=function(){
        send_nagusia_arbela_atril_message(xml_data,$funciones);
    }
    $scope.arbela_piztu_toggle_change=function(){
        if($scope.arbela_piztu==true){
            $scope.arbela_piztu=false;
            $scope.arbela_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
            //$scope.$apply();
            konfig.bakup_arbela_piztu_disabled=false;
            konfig.bakup_arbela_piztu=false;
            konfig.bakup_arbela_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
            popup_proy($scope,'arbela_itzali');
        }else{
            $scope.arbela_piztu=true;
            $scope.arbela_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
            //$scope.$apply();
            konfig.bakup_arbela_piztu_disabled=false;
            konfig.bakup_arbela_piztu=true;
            konfig.bakup_arbela_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
            send_nagusia_arbela_piztu_toggle_message($scope,xml_data,$funciones);
            set_nagusia_arbela_all_enabled(true,$funciones);
        }                
    }
    $scope.$on('set_nagusia_arbela_on', function(event, args){
        $scope.arbela_piztu_disabled=false;
        $scope.arbela_piztu=true;        
        //intelsat-2015
        //$scope.arbela_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
        $scope.arbela_piztu_text=nagusia_arbela_get_piztu_text(args[0],$funciones,gettextCatalog);        
        //$scope.$apply();
        konfig.bakup_arbela_piztu_disabled=false;
        konfig.bakup_arbela_piztu=true;
        konfig.bakup_arbela_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
        set_nagusia_arbela_all_enabled(true,$funciones);
    });
    $scope.$on('set_nagusia_arbela_off', function(event, args){
        $scope.arbela_piztu_disabled=false;
        $scope.arbela_piztu=false;        
        //intelsat-2015
        //$scope.arbela_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
        $scope.arbela_piztu_text=nagusia_arbela_get_itzalita_text(args[0],$funciones,gettextCatalog);        
        
        //$scope.$apply();
        konfig.bakup_arbela_piztu_disabled=false;
        konfig.bakup_arbela_piztu=false;
        konfig.bakup_arbela_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
        set_nagusia_arbela_all_enabled(false,$funciones);
    });
    $scope.$on('set_nagusia_arbela_disabled', function(event, args){
        $scope.arbela_piztu_disabled=true;
        $scope.arbela_piztu=false;
        $scope.arbela_piztu_text=args[0];
        //$scope.$apply();
        konfig.bakup_arbela_piztu_disabled=true;
        konfig.bakup_arbela_piztu=false;
        konfig.bakup_arbela_piztu_text=args[0];
        set_nagusia_arbela_all_enabled(false,$funciones);
    });
})

//intelsat-2015
function set_esaldiak_ongi_etorri($scope,xml_translation,konfig){
    /*$scope.ongi_etorri_view_title=get_t(xml_translation,konfig,'BIENVENIDO_A_SINTA_DE_TKNIKA','Ongi Etorri');
    $scope.ongi_etorri_hizkuntza_aukeratu=get_t(xml_translation,konfig,'SELECCIONE_EL_LENGUAJE','HIZKUNTZA AUKERATU');
    $scope.sistema_erabili_nahi_baduzu_sakatu_hemen=get_t(xml_translation,konfig,'SI_QUIERE_USAR_EL_SISTEMA_PRESIONE_AQUI','SISTEMA ERABILI NAHI BADUZU SAKATU HEMEN');    
    $scope.frogatu=get_t(xml_translation,konfig,'COMPROBAR','FROGATU');*/
}
//intelsat-2015
function get_t(xml_translation,konfig,field,default_value){
    var result=default_value;
    if(is_xml_translation_loaded(xml_translation)){
        if(xml_translation.xml.translation[field]!=null){
            var lang="_"+konfig.lang
            result=xml_translation.xml.translation[field][lang];
            if(result!=null){
                if(result.length>0){
                    return result;
                }
            }
        }
        return default_value;
    }
    return result;
}
//intelsat-2015
function is_xml_translation_loaded(xml_translation){
    if(xml_translation!=null){
        if(xml_translation.xml!=null){
            if(xml_translation.xml!=''){
                return true;
            }
        }    
    }
    return false;
}
//intelsat-2015
function set_esaldiak_hasiera($scope,xml_translation,konfig){    
    /*$scope.hasiera_view_title=get_t(xml_translation,konfig,'INICIO','HASIERA');
    $scope.zer_egin_nahi_duzu=get_t(xml_translation,konfig,'QUE_QUIERE_HACER','ZER EGIN NAHI DUZU?');
    $scope.hitzaldia=get_t(xml_translation,konfig,'CLASE_LOCAL','HITZALDIA');    
    $scope.bilera=get_t(xml_translation,konfig,'SEMINARIO_CLASE','BILERA');
    $scope.filma=get_t(xml_translation,konfig,'PELICULA','FILMA');    
    $scope.klaseak_bidali=get_t(xml_translation,konfig,'ENVIAR_CLASES','KLASEAK BIDALI');
    $scope.klaseak_jaso=get_t(xml_translation,konfig,'RECIBIR_CLASES','KLASEAK JASO');*/
}
//intelsat-2015
function set_esaldiak_grabazioa($scope,xml_translation,konfig){    
    
}
//intelsat-2015
function send_ongi_etorri_sistema_message(xml_data,$funciones){
    var xml_string=get_send_xml_string(xml_data,'menu_items.bienvenido.sinta_inicio._msg',$funciones);
    $funciones.send_xml(xml_string);
}
//intelsat-2015
function get_send_xml_string(xml_data,field,$funciones){
    if(xml_data!=null){
        if(xml_data.xml!=null){
            if(xml_data.xml!=''){
               var result=xml_data.xml.config; 
               // return xml_data.xml.config.menu_items.bienvenido.sinta_inicio._msg;
               //return xml_data.xml.config[field]; 
               var field_array=field.split('.');
               for(var i in field_array){
                   result=result[field_array[i]];
               }
               //result='<sinta case="'+result+'"/>';
               result=$funciones.get_send_case_xml(result);
               return result;
            }
        }
    }
    return '';
}
//intelsat-2015
function send_ongi_etorri_frogatu_message(xml_data,$funciones){
    var xml_string=get_send_xml_string(xml_data,'menu_items.bienvenido.comprobar._msg',$funciones);
    $funciones.send_xml(xml_string);
}
//intelsat-2015
function send_hasiera_hitzaldia_message(xml_data,$funciones){  
   var xml_string=get_send_escenarios_xml_string(xml_data,'clase_local',$funciones);
   $funciones.send_xml(xml_string);
}
function get_send_escenarios_xml_string(xml_data,name,$funciones){
   if(xml_data!=null){
        if(xml_data.xml!=null){
            if(xml_data.xml!=''){
                var result='';
                var elem='';
                for(var i in xml_data.xml.config.menu_items.escenarios.elem){
                    elem=xml_data.xml.config.menu_items.escenarios.elem[i];
                    if(elem._name==name){
                        result=elem._msg;
                        result=$funciones.get_send_case_xml(result);
                        return result;
                    }
                }
            }
        }    
   }
   return '';
}
//intelsat-2015
function send_hasiera_bilera_message(xml_data,$funciones){
   var xml_string=get_send_escenarios_xml_string(xml_data,'seminario/clase',$funciones);
   $funciones.send_xml(xml_string);
}
//intelsat-2015
function send_hasiera_filma_message(xml_data,$funciones){
   var xml_string=get_send_escenarios_xml_string(xml_data,'pelicula',$funciones);
   $funciones.send_xml(xml_string); 
}
//intelsat-2015
function send_hasiera_klaseak_bidali_message(xml_data,$funciones){
   var xml_string=get_send_escenarios_xml_string(xml_data,'enviar_clases',$funciones);
   $funciones.send_xml(xml_string);  
}
//intelsat-2015
function send_hasiera_klaseak_jaso_message(xml_data,$funciones){
   var xml_string=get_send_escenarios_xml_string(xml_data,'recibir_clases',$funciones);
   $funciones.send_xml(xml_string);  
}
//intelsat-2015
function send_menu_ongi_etorri_message(xml_data,$funciones){
   var xml_string=get_send_xml_string(xml_data,'menu_items.bienvenido._msg',$funciones);
   $funciones.send_xml(xml_string); 
}
//intelsat-2015
function send_menu_hasiera_message(xml_data,$funciones){
   var xml_string=get_send_xml_string(xml_data,'menu_items.escenarios._msg',$funciones);
   $funciones.send_xml(xml_string);
}
//intelsat-2015
function send_nagusia_message(xml_data,$funciones){
   var xml_string=get_send_xml_string(xml_data,'menu_items.principal._msg',$funciones);
   $funciones.send_xml(xml_string);
}
//intelsat-2015
function send_nagusia_grabazioa_dispositibo_message(xml_data,$funciones){
   var xml_string=get_send_nagusia_dispositibo_xml_string(xml_data,'dvdgrab',$funciones);
   $funciones.send_xml(xml_string); 
}
//intelsat-2015
function get_send_nagusia_dispositibo_xml_string(xml_data,name,$funciones){
   var object=get_nagusia_object(xml_data,name);
   var result='';
   if(object!=null){
       result=object._msg;
       result=$funciones.get_send_case_xml(result);
       return result;
   }
   return ''; 
}
//intelsat-2015
function send_nagusia_think_client_sarea_disbositibo_message(xml_data,$funciones){
   var xml_string=get_send_nagusia_dispositibo_xml_string(xml_data,'red_think_client',$funciones);
   $funciones.send_xml(xml_string); 
}
//intelsat-2015
function send_nagusia_grabazioa_kanal_gehi_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'dvdgrab','dvdgrab_abajo','tv_gora',$funciones);
  $funciones.send_xml(xml_string); 
}
//intelsat-2015
function get_nagusia_object(xml_data,name){
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
}
//intelsat-2015
/*function get_nagusia_object_panel(object,name){
    var result='';
    for(var i in object.panel){
        result=object.panel[i];
        if(result._name==name){
            return result;
        }
    }
    return null;
}*/
//intelsat-2015
function get_send_nagusia_panel_elem_xml_string(xml_data,object_name,panel_name,elem_name,$funciones){
   /*var object=get_nagusia_object(xml_data,object_name);
   if(object!=null){
       var panel=get_nagusia_object_panel(object,panel_name);
       if(panel!=null){
           var result='';
           var elem=get_nagusia_object_panel_elem(panel,elem_name);
           if(elem!=null){
               result=$funciones.get_send_case_xml(elem._msg);
               return result;
           }
       }
   }
   return '';*/
   return $funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,object_name,panel_name,elem_name,$funciones); 
}
//intelsat-2015
/*function get_nagusia_object_panel_elem(panel,elem_name){
    var result='';
    for(var i in panel.elem){
        result=panel.elem[i];
        if(result._name==elem_name){
            return result;
        }
   }
}*/
//intelsat-2015
function send_nagusia_grabazioa_kanal_ken_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'dvdgrab','dvdgrab_abajo','tv_behera',$funciones);
  $funciones.send_xml(xml_string); 
}
//intelsat-2015
function send_nagusia_grabazioa_source_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'dvdgrab','dvdgrab_abajo','source',$funciones);
  $funciones.send_xml(xml_string);   
}
//intelsat-2015
function send_nagusia_grabazioa_grabatu_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'dvdgrab','dvdgrab_abajo','grabar',$funciones);
  $funciones.send_xml(xml_string);   
}
//intelsat-2015
function send_nagusia_grabazioa_grabazioa_gelditu_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'dvdgrab','dvdgrab_abajo','parar_grabacion',$funciones);
  $funciones.send_xml(xml_string);  
}
//intelsat-2015
function send_nagusia_grabazioa_streaming_grabatu_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'dvdgrab','grabazioa_tknika72','hasi',$funciones);
  $funciones.send_xml(xml_string);   
}
//intelsat-2015
function send_nagusia_grabazioa_streaming_gelditu_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'dvdgrab','grabazioa_tknika72','gelditu',$funciones);
  $funciones.send_xml(xml_string);   
}
//intelsat-2015
function send_nagusia_grabazioa_bolumena_gehi_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'dvdgrab','dvdgrab_abajo','vol_gora',$funciones);
  $funciones.send_xml(xml_string); 
}
//intelsat-2015
function send_nagusia_grabazioa_bolumena_ken_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'dvdgrab','dvdgrab_abajo','vol_behera',$funciones);
  $funciones.send_xml(xml_string); 
}
//intelsat-2015
function send_nagusia_think_client_sarea_portatil1_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'red_think_client','seleccion_red_think_client','portatil1',$funciones);
  $funciones.send_xml(xml_string);   
}
//intelsat-2015
function send_nagusia_think_client_sarea_portatil2_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'red_think_client','seleccion_red_think_client','portatil2',$funciones);
  $funciones.send_xml(xml_string);  
}
//intelsat-2015
function send_nagusia_think_client_sarea_portatil3_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'red_think_client','seleccion_red_think_client','portatil3',$funciones);
  $funciones.send_xml(xml_string);  
}
//intelsat-2015
function send_nagusia_think_client_sarea_think_client_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'red_think_client','seleccion_red_think_client','think_client',$funciones);
  $funciones.send_xml(xml_string);  
}
//intelsat-2015   
function send_nagusia_think_client_sarea_pclurra_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'red_think_client','seleccion_red_think_client','pcsuelo',$funciones);
  $funciones.send_xml(xml_string);   
}
//intelsat-2015     
function send_nagusia_think_client_sarea_dokumentu_kamera_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'red_think_client','seleccion_red_think_client','camara_de_documentos',$funciones);
  $funciones.send_xml(xml_string);  
}
//intelsat-2015          
function send_nagusia_think_client_sarea_atril_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'red_think_client','seleccion_red_think_client','atril',$funciones);
  $funciones.send_xml(xml_string);   
}
//intelsat-2015 
function send_nagusia_sarrera_dispositibo_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_dispositibo_xml_string(xml_data,'pantalla_entrada',$funciones);
  $funciones.send_xml(xml_string);  
}
//intelsat-2015
function send_nagusia_sarrera_piztu_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_entrada','encender_apagar_pantalla','encender',$funciones);
  $funciones.send_xml(xml_string);  
}
//intelsat-2015
function send_nagusia_sarrera_itzali_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_entrada','encender_apagar_pantalla','apagar',$funciones);
  $funciones.send_xml(xml_string);
}
function send_nagusia_sarrera_dvd_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_entrada','seleccion_en_pizarra','dvd',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_sarrera_dvdgrab_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_entrada','seleccion_en_pizarra','dvdgrab',$funciones);
  $funciones.send_xml(xml_string);  
}   
function send_nagusia_sarrera_dokumentu_kamera_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_entrada','seleccion_en_pizarra','camara_de_documentos',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_sarrera_portatil1_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_entrada','seleccion_en_pizarra','portatil1',$funciones);
  $funciones.send_xml(xml_string); 
}    
function send_nagusia_sarrera_portatil2_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_entrada','seleccion_en_pizarra','portatil2',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_sarrera_portatil3_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_entrada','seleccion_en_pizarra','portatil3',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_sarrera_think_client_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_entrada','seleccion_en_pizarra','think_client',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_sarrera_pclurra_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_entrada','seleccion_en_pizarra','pcsuelo',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_sarrera_atril_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_entrada','seleccion_en_pizarra','atril',$funciones);
  $funciones.send_xml(xml_string);   
}
function send_nagusia_feedback_dispositibo_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_dispositibo_xml_string(xml_data,'pantalla_presidencia',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_feedback_piztu_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_presidencia','encender_apagar_pantalla','encender',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_feedback_itzali_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_presidencia','encender_apagar_pantalla','apagar',$funciones);
  $funciones.send_xml(xml_string);
}
function send_nagusia_feedback_dvd_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_presidencia','seleccion_en_pizarra','dvd',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_feedback_dvdgrab_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_presidencia','seleccion_en_pizarra','dvdgrab',$funciones);
  $funciones.send_xml(xml_string);  
}   
function send_nagusia_feedback_dokumentu_kamera_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_presidencia','seleccion_en_pizarra','camara_de_documentos',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_feedback_portatil1_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_presidencia','seleccion_en_pizarra','portatil1',$funciones);
  $funciones.send_xml(xml_string); 
}    
function send_nagusia_feedback_portatil2_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_presidencia','seleccion_en_pizarra','portatil2',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_feedback_portatil3_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_presidencia','seleccion_en_pizarra','portatil3',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_feedback_think_client_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_presidencia','seleccion_en_pizarra','think_client',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_feedback_pclurra_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_presidencia','seleccion_en_pizarra','pcsuelo',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_feedback_atril_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_presidencia','seleccion_en_pizarra','atril',$funciones);
  $funciones.send_xml(xml_string);   
}
function send_nagusia_feedback_solaskidea_erakutsi_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_presidencia','imagen_a_mostrar','mostrar_contraparte',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_feedback_gure_imajina_erakutsi_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_presidencia','imagen_a_mostrar','mostrar_nuestra_imagen',$funciones);
  $funciones.send_xml(xml_string);
}
function send_nagusia_plasma_dispositibo_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_dispositibo_xml_string(xml_data,'plasma',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_plasma_piztu_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'plasma','encender_apagar_pantalla','encender',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_plasma_itzali_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'plasma','encender_apagar_pantalla','apagar',$funciones);
  $funciones.send_xml(xml_string);
}
function send_nagusia_plasma_dvd_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'plasma','seleccion_en_pizarra','dvd',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_plasma_dvdgrab_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'plasma','seleccion_en_pizarra','dvdgrab',$funciones);
  $funciones.send_xml(xml_string);  
}   
function send_nagusia_plasma_dokumentu_kamera_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'plasma','seleccion_en_pizarra','camara_de_documentos',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_plasma_portatil1_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'plasma','seleccion_en_pizarra','portatil1',$funciones);
  $funciones.send_xml(xml_string); 
}    
function send_nagusia_plasma_portatil2_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'plasma','seleccion_en_pizarra','portatil2',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_plasma_portatil3_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'plasma','seleccion_en_pizarra','portatil3',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_plasma_think_client_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'plasma','seleccion_en_pizarra','think_client',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_plasma_pclurra_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'plasma','seleccion_en_pizarra','pcsuelo',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_plasma_atril_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'plasma','seleccion_en_pizarra','atril',$funciones);
  $funciones.send_xml(xml_string);   
}
function send_nagusia_proiektorea_dispositibo_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_dispositibo_xml_string(xml_data,'pantalla_electrica',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_proiektorea_igo_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_electrica','subir_bajar_pantalla','subir',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_proiektorea_jaitsi_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_electrica','subir_bajar_pantalla','bajar',$funciones);
  $funciones.send_xml(xml_string);
}
function send_nagusia_proiektorea_dvd_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_electrica','seleccion_en_pizarra','dvd',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_proiektorea_dvdgrab_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_electrica','seleccion_en_pizarra','dvdgrab',$funciones);
  $funciones.send_xml(xml_string);  
}   
function send_nagusia_proiektorea_dokumentu_kamera_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_electrica','seleccion_en_pizarra','camara_de_documentos',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_proiektorea_portatil1_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_electrica','seleccion_en_pizarra','portatil1',$funciones);
  $funciones.send_xml(xml_string); 
}    
function send_nagusia_proiektorea_portatil2_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_electrica','seleccion_en_pizarra','portatil2',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_proiektorea_portatil3_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_electrica','seleccion_en_pizarra','portatil3',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_proiektorea_think_client_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_electrica','seleccion_en_pizarra','think_client',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_proiektorea_pclurra_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_electrica','seleccion_en_pizarra','pcsuelo',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_proiektorea_atril_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_electrica','seleccion_en_pizarra','atril',$funciones);
  $funciones.send_xml(xml_string);   
}
function send_nagusia_proiektorea_piztu_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_electrica','encender_apagar','encender',$funciones);
  $funciones.send_xml(xml_string);   
}
function send_nagusia_proiektorea_muteatu_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_electrica','encender_apagar','activar',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_proiektorea_desmuteatu_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_electrica','encender_apagar','desactivar',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_arbela_dispositibo_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_dispositibo_xml_string(xml_data,'pizarra_digital',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_arbela_dvd_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pizarra_digital','seleccion_en_pizarra','dvd',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_arbela_dvdgrab_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pizarra_digital','seleccion_en_pizarra','dvdgrab',$funciones);
  $funciones.send_xml(xml_string);  
}   
function send_nagusia_arbela_dokumentu_kamera_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pizarra_digital','seleccion_en_pizarra','camara_de_documentos',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_arbela_portatil1_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pizarra_digital','seleccion_en_pizarra','portatil1',$funciones);
  $funciones.send_xml(xml_string); 
}    
function send_nagusia_arbela_portatil2_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pizarra_digital','seleccion_en_pizarra','portatil2',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_arbela_portatil3_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pizarra_digital','seleccion_en_pizarra','portatil3',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_arbela_think_client_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pizarra_digital','seleccion_en_pizarra','think_client',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_arbela_pclurra_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pizarra_digital','seleccion_en_pizarra','pcsuelo',$funciones);
  $funciones.send_xml(xml_string);  
}    
function send_nagusia_arbela_atril_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pizarra_digital','seleccion_en_pizarra','atril',$funciones);
  $funciones.send_xml(xml_string);   
}
function send_nagusia_arbela_piztu_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pizarra_digital','encender_apagar','encender',$funciones);
  $funciones.send_xml(xml_string);   
}
function send_nagusia_arbela_muteatu_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pizarra_digital','encender_apagar','activar',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_nagusia_arbela_desmuteatu_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pizarra_digital','encender_apagar','desactivar',$funciones);
  $funciones.send_xml(xml_string);  
}
function send_menu_soinua_message(xml_data,$funciones){
   var xml_string=get_send_xml_string(xml_data,'menu_items.sonido._msg',$funciones);
   $funciones.send_xml(xml_string);
}
function send_menu_argiak_message(xml_data,$funciones){
   var xml_string=get_send_xml_string(xml_data,'menu_items.luces._msg',$funciones);
   $funciones.send_xml(xml_string);
}
function send_menu_itzali_message(xml_data,$funciones){
   var xml_string=get_send_xml_string(xml_data,'menu_items.apagar._msg',$funciones);
   $funciones.send_xml(xml_string);
}
function send_nagusia_proiektorea_itzali_message(xml_data,$funciones){
   var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_electrica','encender_apagar','apagar',$funciones);
  $funciones.send_xml(xml_string);
}
/*function call_espera_erlojua_hasi(msg,$ionicPopup,gettextCatalog,$scope,espera_erlojua){
    var html='';
    var html_array=new Array();
    html_array.push('<div class="div_espera_erlojua">'+gettextCatalog.getString(msg)+"</div>");
    html_array.push('<ion-spinner icon="spiral" class="spinner_espera_erlojua"></ion-spinner>');
    html=html_array.join('');
    espera_erlojua = $ionicPopup.show({
              template: html,
              title: ''
    })
}*/
function call_filtro_msg(msg_in,$state,$rootScope,$ionicPopup,gettextCatalog,$scope,xml_data,$funciones,konfig,$timeout,items_menu,socket_log){
   var msg=msg_in;
   //simulando
   /*$state.go('app.grabazioa');
   $rootScope.nagusia_grabazioa_dvdgrab_egoera='1234';*/
   //simulando 
   //msg=simulando();
   //
   /*if(msg==null || msg==undefined || msg=='undefined'){
	   return '';
   }*/
   /*if(socket_log.log==undefined){
	   alert('bai');
	   socket_log.log='';
   }*/
   if(msg.length>0){
        if(global_is_mugikorra){
            socket_log.log+=$funciones.funciones_get_datetime()+'\n'+msg+'\n';
        }else{
            socket_log.log+=$funciones.funciones_get_datetime()+'='+msg+'\n';
        }
        //alert(socket_log.log);
        //alert("msg="+msg);
        var x2js = new X2JS();
        var xml_sarr=x2js.xml_str2json(msg);
        //alert("sarr="+xml_sarr.sinta._sarr);
        itxarote_pantaila_kentzeko_mezuak(xml_sarr.sinta._sarr,$scope);
        var mezu_v=xml_sarr.sinta._sarr.split(':');
        //alert(mezu_v[0]);
        switch (mezu_v[0]) {
             case "BUTTON" :
                 //button_mezuak_tratatu(mezu_v,$rootScope);
                 break;
             case "ALERT" :
                 var msg_bai= mezu_v[0]+":"+mezu_v[1]+":"+"OK";
                 var msg_ez= mezu_v[0]+":"+mezu_v[1]+":"+"NOK";
                 $scope.showPopup(mezu_v[2],'','alert',msg_bai,msg_ez,mezu_v[1]);
                 break;
             case "ERROR" :
                 $scope.showPopup(mezu_v[1],'','error',null,null);
                 break;
             case "SISTEMA" :
                 sistema_mezuak_tratatu(mezu_v,$state,$rootScope,$ionicPopup,gettextCatalog,$scope,$funciones,items_menu);
                 break;
             case "MENU" :
                 menu_mezuak_tratatu(mezu_v[1],$state,$scope,$rootScope,$funciones);
                 break;
             case "PIZARRA_DIGITAL" :
                 pizarra_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,konfig,$scope,$rootScope,gettextCatalog);
                 break;
             case "PROYECTOR_CENTRAL" :
                 proyector_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,konfig,$scope,$rootScope,gettextCatalog);
                 break;
             case "INICIO" :
             case "ESCENARIO" :
                 escenario_mezuak_tratatu(mezu_v,xml_data,$state);
                 break;
             case "VIDEOCONFERENCIA" :
                 videoconferencia_mezuak_tratatu(mezu_v,$rootScope);
                 break;
             case "MICROFONO" :
                 microfono_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,$rootScope);
                 break;
             case "SONIDO" :
                 sonido_mezuak_tratatu(mezu_v,$rootScope);
                 break;
             case "DISPOSITIVO" :
                 dispositivo_mezuak_tratatu(mezu_v[1],$state);
                 break;
             case "CAMARA_1" :
             case "CAMARA_2" :
             case "CAMARA_3" :
                 camara_mezuak_tratatu(mezu_v,$rootScope,$state,$timeout);
                 break;
             case "DVD" :
                 dvd_mezuak_tratatu(mezu_v,$rootScope);
                 break;
             case "DVDGRAB" :
                 dvdgrab_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,konfig,$rootScope,gettextCatalog);
                 break;
             case "CAMARADOC" :
                 camaradoc_mezuak_tratatu(mezu_v,$rootScope);
                 break;
             case "PANTALLA_PRESIDENCIA" :
                 pantalla_presidencia_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,konfig,$rootScope);
                 break;
             case "PANTALLA_ENTRADA" :
                 pantalla_entrada_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,konfig,$rootScope);
                 break;
             case "LUZ" :
                 argiak_mezuak_tratatu(mezu_v,$rootScope);
                 break;
             case "PLASMA" :
                 plasma_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,konfig,$scope,$rootScope);
                 break;
             case "ESPERA" :
                 espera_mezuak_tratatu(mezu_v[1],$rootScope,$ionicPopup,gettextCatalog,$scope);
                 break;
             case "RED_THINK_CLIENT" :
                 red_think_client_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,konfig);
                 break;
             case "SELGRAB" :
                 //sel_grab_mezuak_tratatu(mezu_v[1]);
                 break;
             case "PANTALLA_ELECTRICA" :
                 pantalla_electrica_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,konfig);
                 break;
             default :
                 break;			    
         }
    }     
}
function sistema_mezuak_tratatu(mezu_v,$state,$rootScope,$ionicPopup,gettextCatalog,$scope,$funciones,items_menu){
		switch (mezu_v[1]) {
		case "BIENVENIDO" :
                        menuko_botoi_zapalketa('id_ion_item_ongi_etorri_menu',$scope,$funciones);
			$state.go('app.ongi_etorri');
			/*if (_root.tk_lang == undefined) {
				_root.pSinta.sortuSintaHizkuntzaAukeratu();
			}
			//menua bienvenidotik aurrera dago klip bezala.                                                                                     
			_root.pSinta.menuSintaHasieratu();*/
			break;
		case "ON" :
			//clearInterval(_root.pSinta.interval_amx_barra);
			//_root.gotoAndStop("s_inicio");
			//trace("SISTEMA:ON");
			break;
		case "INICIANDO" :
			//mezu_v[2]--itxaron behar den denbora egongo da, ez da erabiltzen
			//call_filtro_msg("<sinta sarr=\"ESPERA:espere_iniciando\"/>",$state,$rootScope);
                        espera_mezuak_tratatu('espere_iniciando',$rootScope,$ionicPopup,gettextCatalog,$scope);
                        break;
		case "OFF" :
			break;
		case "SALIENDO" :
			//mezu_v[2]--itxaron behar den denbora egongo da, ez da erabiltzen
			espera_mezuak_tratatu('espere_apagando',$rootScope,$ionicPopup,gettextCatalog,$scope);
			break;
		/*case "PROCESANDO" :
			//mezu_v[2]--itxaron behar den denbora egongo da, ez da erabiltzen
			_root.pSinta.filtroMsgSinta("<sinta sarr=\"ESPERA:procesando_peticion\"/>");
			break;*/
		case "MENU" :
			//SISTEMA:MENU:MOSTRAR edo SISTEMA:MENU:OCULTAR
			menu_mostrar_ocultar_tratatu(mezu_v,items_menu,$rootScope);
			break;
		case "ESPERA" :
			espera_mezuak_tratatu(mezu_v[2],$rootScope,$ionicPopup,gettextCatalog,$scope);
			break;
		/*case "XML_LOAD":
			this.kargatuSintaMezuak(true);
			break;*/
		default :
			break;
		}
}
function espera_mezuak_tratatu(auk,$rootScope,$ionicPopup,gettextCatalog,$scope){
    var msg='';
    switch (auk) {
        case "STOP" :
            //$rootScope.espera_erlojua.close();
            $scope.espera_erlojua_itxi($scope);
            break;
        default :
            msg=get_espera_translation(auk);
            $scope.espera_erlojua_hasi(msg,$ionicPopup,gettextCatalog);
            break;
    }
}
function get_espera_translation(auk){
    var msg='';
    if(auk=='espere_iniciando'){
        msg='Itxaron momentu bat mesedez, sistema hasieratu arte';
    }else if(auk=='espere_apagando'){
        msg='Itxaron momentu bat mesedez, sistema itzaltzen ari da';
    }else if(auk=='espere_comprobando'){
        msg='Itxaron momentu bat mesedez, sistema frogatu arte';
    }else{
        msg=auk;
    }
    if(msg.length>0){
        return msg;
    }
    return '';
}
function on_popup_ok(xml_data,$funciones,type,$scope,msg_bai){
   if(type=='proiektorea_itzali'){       
       send_nagusia_proiektorea_itzali_message(xml_data,$funciones,$scope);
   }else if(type=='proiektore_zentrala_itzali'){
       send_nagusia_proiektore_zentrala_itzali_message(xml_data,$funciones);
   }else if(type=='alert'){
       send_message($funciones,msg_bai);
   }else if(type=='arbela_itzali'){
       send_nagusia_arbela_itzali_message(xml_data,$funciones,$scope);
   }
}
function dispositivo_mezuak_tratatu(disp,$state){
   switch (disp) {
		case "CAMARA_1" :
			dispositivo_camara1_erakutsi($state);
			break;
		case "CAMARA_2" :
			dispositivo_camara2_erakutsi($state);
			break;
		case "CAMARA_3" :
			dispositivo_camara3_erakutsi($state);
			break;
		case "PANTALLA_PRESIDENCIA" :
			dispositivo_pantalla_presidencia_erakutsi($state);
			break;
		case "PANTALLA_ENTRADA" :
			dispositivo_pantalla_entrada_erakutsi($state);
			break;
		case "PIZARRA_DIGITAL" :
			dispositivo_erakutsi($state,'app.arbela');
			break;
		case "PROYECTOR_CENTRAL" :
			dispositivo_erakutsi($state,'app.proiektore_zentrala');
			break;
		case "PANTALLA_ELECTRICA" :
			dispositivo_erakutsi($state,'app.proiektorea');
			break;
		case "DVD" :
			dispositivo_erakutsi($state,'app.dvd');
			break;
		case "DVDGRAB" :
			dispositivo_erakutsi($state,'app.grabazioa');
                        break;
		case "ORDENADOR_PRINCIPAL" :
			dispositivo_erakutsi($state,'app.ordenadore_nagusia');
			break;
		case "PORTATIL1" :
			break;
		case "PORTATIL2" :
			break;
		case "PORTATIL3" :
			break;
		case "PORTATIL4" :
			break;
		case "CAMARA_DE_DOCUMENTOS" :
			dispositivo_erakutsi($state,'app.dokumentu_kamera');
			break;
		case "PLASMA" :                        
                    	dispositivo_erakutsi($state,'app.plasma');
			break;
		case "RED_THINK_CLIENT" :
			dispositivo_erakutsi($state,'app.think_client_sarea');
			break;
			//hauek oraingoz probisionalak dira jakin arte nola kontrolatu hau
		/*case "FOCO1" :
			_root.pSinta.objectErakutsi(_root.foco1);
			break;
		case "FOCO2" :
			_root.pSinta.objectErakutsi(_root.foco2);
			break;*/
		default :
			break;
		} 
}
function dispositivo_camara1_erakutsi($state){
    $state.go('app.camara1');    
}
function dispositivo_camara2_erakutsi($state){
    $state.go('app.camara2');    
}
function dispositivo_camara3_erakutsi($state){
    $state.go('app.camara3');    
}
function create_socket(ip,port_in,$scope,$rootScope,$funciones,socket_log,$state,$ionicPopup,gettextCatalog,xml_data,konfig,$timeout,socket_log_in,items_menu){
    var port=port_in;
    //socket_log_in ez da erabiltzen socket_log parametro bezela bi aldiz ari zen pasatzen eta horrek sor ditzakeen arazoak ekiditeko
    //port='8000';
    //port='8080';
    //alert(ip+"="+port);
    //var socket = io.connect('http://localhost:3000');
    /*$scope.socket = io.connect('http://'+ip+':'+port);
    
    $scope.socket.on('connect', function (data) {
    //console.log(data);
    //socket.emit('my other event', { my: 'data' });
        alert("on connect");
        //$scope.socket.emit('<sinta case="SISTEMA:ESTADO"/>');
  });
  $scope.socket.on("message",function(message){
    alert("message="+message);
    //call_filtro_msg(message);
  });
  $scope.socket.on("disconnect",function(){
    alert("disconnect");
  });*/
    
    /*var socket = io.connect('http://'+ip+':'+port);
    
    
    socket.on('connect', function (data) {
    //console.log(data);
    //socket.emit('my other event', { my: 'data' });
        alert("on connect");
        //$scope.socket.emit('<sinta case="SISTEMA:ESTADO"/>');
  });
  socket.on("message",function(message){
    alert("message="+message);
    //call_filtro_msg(message);
  });
  socket.on("disconnect",function(){
    alert("disconnect");
  });*/
    
    $rootScope.socket = io.connect('http://'+ip+':'+port);
    
    
    $rootScope.socket.on('connect', function (data) {
    //console.log(data);
    //socket.emit('my other event', { my: 'data' });
        //alert("on connect");
        $funciones.send_xml('<sinta case="SISTEMA:ESTADO"/>');
  });
  $rootScope.socket.on('result',function(message){
    //alert('result='+message);
	/*if(socket_log.log==undefined){
		alert('null');
	}*/  
    call_filtro_msg(message,$state,$rootScope,$ionicPopup,gettextCatalog,$scope,xml_data,$funciones,konfig,$timeout,items_menu,socket_log);    
  });
  $rootScope.socket.on('disconnect',function(){
    alert("disconnect");
  });
}
function load_paraninfo_xml($http,xml_data,konfig,$scope,$rootScope,$funciones,socket_log,$state,$ionicPopup,gettextCatalog,$timeout,items_menu){
    //dokumentazio interesgarria dago hemen
    //http://code.google.com/p/x2js/
    //alert(konfig.base_url+'www/files/config.xml');
    //$http.get(konfig.base_url+'www/files/config.xml').then(function(resp) {
    $http.get('files/config.xml').then(function(resp) {
        xml_data.xml=resp.data;
        var x2js = new X2JS();
        xml_data.xml = x2js.xml_str2json(xml_data.xml);
        //alert("ip="+xml_data.xml.config.ip._value);
        create_socket(xml_data.xml.config.ip._value,xml_data.xml.config.ip._port,$scope,$rootScope,$funciones,socket_log,$state,$ionicPopup,gettextCatalog,xml_data,konfig,$timeout,items_menu);        
  }, function(err) {
    alert("error:load_paraninfo_xml");
    // err.status will contain the status code
  })
}
function dispositivo_pantalla_presidencia_erakutsi($state){
  dispositivo_erakutsi($state,'app.feedback');      
}
function dispositivo_erakutsi($state,dispositivo){
    $state.go(dispositivo);      
}
function dispositivo_pantalla_entrada_erakutsi($state){
  dispositivo_erakutsi($state,'app.sarrera');      
}
function escenario_mezuak_tratatu(mezu_v,xml_data,$state){
    if (xml_data.xml.config.menu_items.escenarios._bertsio_berria != null && xml_data.xml.config.menu_items.escenarios._bertsio_berria == 1) {
			//bertsio_berria atributu hori probisionala da zeren ez da zihurra ESCENARIO:xxx
			//etortzean leku konkretu batera joan behar duen menuko aukera batera hau hasieran
			//horrela planteatu zuen jessikak baino xabierrek agian MENU:xxxx zerbait egiten du
			//eta feed aplikatu nahi bada txokatu egingo luke beraz,
			//bertsio_berria=1 bada aplikatuko feeda KAM aplikazioan sartzen diren mezuetan
			//bertsio_berria=0 bada feed=0 komeni da izatea xml escenarios atalan bestela ez du
			//zentzurik dena den, xabierrekin komentatu eta else adarra ez bada beharrezkoa kendu
			//eta ez bada beharrezkoa bertsio_berria atributua ere kendu
			alert('escenario_mezuak_tratatu=bertsio berria');
		} else {
                    	switch (mezu_v[1]) {
			case "ENVIAR_CLASES" :
				//deitu_eskegi_erakutsi($state);
				break;
			case "RECIBIR_CLASES" :
				nagusia_erakutsi($state);
				break;
			case "CLASE_LOCAL" :
				nagusia_erakutsi($state);
				break;
			case "SEMINARIO/CLASE" :
				nagusia_erakutsi($state);
				break;
			case "OPERADOR" :
				break;
			case "PELICULA" :
				nagusia_erakutsi($state);
				break;
			default :
				break;
			}
		}
}
function nagusia_erakutsi($state){
    //dispositivo_erakutsi($state,'app.grabazioa');
    dispositivo_erakutsi($state,'app.nagusia');
}
function pizarra_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,konfig,$scope,$rootScope,gettextCatalog){
    var object_name='pizarra_digital';
    var panel_name='encender_apagar';
    var id_button_aurrizkia='id_button_nagusia_arbela_';
    if (dispositiboa_aktibo_dago($state, mezu_v[0],null,$funciones)) {
			switch (mezu_v[1]) {
			case "ON" :
                                set_nagusia_arbela_on(mezu_v,$rootScope);
				$funciones.sakatua_utzi('id_button_nagusia_arbela_piztu',object_name,panel_name,'encender',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_arbela_itzali',object_name,panel_name,'apagar',$funciones,xml_data);
                                break;
			case "OFF" :
                                set_nagusia_arbela_off(mezu_v,$rootScope);
                                $funciones.sakatua_utzi('id_button_nagusia_arbela_itzali',object_name,panel_name,'apagar',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_arbela_piztu',object_name,panel_name,'encender',$funciones,xml_data);
                                /*OHARRA: beheko 2 lerroak komentatua daude zeren nahikoa da
				BUTTON:POPUP_OK_NOK:PRESS:_level0.sinta_winds1.frame.bidali
				etsi botoiarekin egiten denez, zergatik ez bidali botoiarekin berdina egin
				eta bidalitik PIZARRA_DIGITAL:OFF sortzen da horregatik zeuden 2 lerro horiek
				baino bueno... hala ere OFF hori lehiorik gabe iritxi daiteke hasierako egoera bat
				isladatzean edo horregatik hobe BUTTON:POPUP_OK_NOK erabiltzea*/
				//_root.pWinds.itxiVentanasSinta("sinta");
				//_root.pWinds.enabYesSinta();
				break;
			case "MUTE" :
				$funciones.sakatua_utzi('id_button_nagusia_arbela_muteatu',object_name,panel_name,'activar',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_arbela_desmuteatu',object_name,panel_name,'desactivar',$funciones,xml_data);                                
                                break;
			case "NO_MUTE" :
				$funciones.sakatua_utzi('id_button_nagusia_arbela_desmuteatu',object_name,panel_name,'desactivar',$funciones,xml_data);                                                                			
                                $funciones.askatua_utzi('id_button_nagusia_arbela_muteatu',object_name,panel_name,'activar',$funciones,xml_data);
                                break;
                        case "DISABLED" :
                                set_nagusia_arbela_disabled(mezu_v,$rootScope);
                                set_nagusia_arbela_egoera(mezu_v,$scope);
                                break;        
			default :
				seleccion_feed(mezu_v,object_name,$state,konfig,$funciones,xml_data,id_button_aurrizkia);
                                break;
			}
		}
                pizarra_bakup_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,konfig,$scope,$rootScope,gettextCatalog);
}
function dispositiboa_aktibo_dago($state,dispositiboa,object_name,$funciones){
    return $funciones.funciones_dispositiboa_aktibo_dago($state,dispositiboa,object_name,$funciones);
}
function seleccion_feed(mezu_v,object_name,$state,konfig,$funciones,xml_data,id_button_aurrizkia){
    var sarrera='';
    var panel_imagen_a_mostrar='';
    if (dispositiboa_aktibo_dago($state, mezu_v[0],object_name,$funciones)) {
        switch (mezu_v[1]) {
			case "DVD" :
			case "PCSUELO" :
			case "PORTATIL1" :
			case "PORTATIL2" :
			case "PORTATIL3" :
			case "THINK_CLIENT" :
			case "CAMARA_DE_DOCUMENTOS" :
			case "DVDGRAB" :
			case "MOSTRAR_CONTRAPARTE_Y_NUESTRA_IMAGEN" :
			case "MOSTRAR_NUESTRA_IMAGEN" :
			case "MOSTRAR_CONTRAPARTE" :
			case "ATRIL" :
                                var multzo_v=new Array();
				if (mezu_v[0] != "PANTALLA_PRESIDENCIA") {
                                    multzo_v =konfig.feed_pantailak;
                                    var panel_target;
                                    if (mezu_v[0] != "RED_THINK_CLIENT") {
                                        panel_target = 'seleccion_en_pizarra';
                                    } else {
                                        panel_target = 'seleccion_red_think_client';
                                    }
                                    sarrera=angular.lowercase(mezu_v[1]);
                                    multzo_feed(sarrera, panel_target, multzo_v,$funciones,object_name,xml_data,id_button_aurrizkia);                                    
                                } else {
                                    multzo_v=konfig.feed_pantailak;
                                    multzo_v=multzo_v.concat(konfig.feed_imagen_a_mostrar_v);
                                    sarrera=angular.lowercase(mezu_v[1]);
                                    panel_target = 'seleccion_en_pizarra';
                                    panel_imagen_a_mostrar='imagen_a_mostrar';
                                    multzo_principal_generikoa_feed(sarrera,panel_target,multzo_v,$funciones,object_name,xml_data,id_button_aurrizkia,panel_imagen_a_mostrar,konfig.feed_imagen_a_mostrar_v);
				}
				//_root.pFeed.multzoPrincipalGenerikoaFeed(mezu_v[1].toLowerCase(), multzo_v);
				break;
			default :
				break;
			}
    }
}
function  multzo_feed(sarrera, panel_name, botoiak,$funciones,object_name,xml_data,id_button_aurrizkia){
    $funciones.funciones_multzo_feed(sarrera, panel_name, botoiak,$funciones,object_name,xml_data,id_button_aurrizkia);
}
function proyector_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,konfig,$scope,$rootScope,gettextCatalog){
    var object_name='proyector_central';
    var panel_name='encender_apagar';
    var id_button_aurrizkia='id_button_nagusia_proiektore_zentrala_';
    if (dispositiboa_aktibo_dago($state, mezu_v[0],null,$funciones)) {
        switch (mezu_v[1]) {
			case "ON" :
                                set_nagusia_proiektore_zentrala_on(mezu_v,$rootScope);
				$funciones.sakatua_utzi('id_button_nagusia_proiektore_zentrala_piztu',object_name,panel_name,'encender',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_proiektore_zentrala_itzali',object_name,panel_name,'apagar',$funciones,xml_data);
                                break;
			case "OFF" :
                                set_nagusia_proiektore_zentrala_off(mezu_v,$rootScope);
                                $funciones.sakatua_utzi('id_button_nagusia_proiektore_zentrala_itzali',object_name,panel_name,'apagar',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_proiektore_zentrala_piztu',object_name,panel_name,'encender',$funciones,xml_data);
                                /*OHARRA: beheko 2 lerroak komentatua daude zeren nahikoa da
				BUTTON:POPUP_OK_NOK:PRESS:_level0.sinta_winds1.frame.bidali
				etsi botoiarekin egiten denez, zergatik ez bidali botoiarekin berdina egin
				eta bidalitik PIZARRA_DIGITAL:OFF sortzen da horregatik zeuden 2 lerro horiek
				baino bueno... hala ere OFF hori lehiorik gabe iritxi daiteke hasierako egoera bat
				isladatzean edo horregatik hobe BUTTON:POPUP_OK_NOK erabiltzea*/
				//_root.pWinds.itxiVentanasSinta("sinta");
				//_root.pWinds.enabYesSinta();
				break;
			case "MUTE" :
				$funciones.sakatua_utzi('id_button_nagusia_proiektore_zentrala_muteatu',object_name,panel_name,'activar',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_proiektore_zentrala_desmuteatu',object_name,panel_name,'desactivar',$funciones,xml_data);                                
                                break;
			case "NO_MUTE" :
				$funciones.sakatua_utzi('id_button_nagusia_proiektore_zentrala_desmuteatu',object_name,panel_name,'desactivar',$funciones,xml_data);                                                                			
                                $funciones.askatua_utzi('id_button_nagusia_proiektore_zentrala_muteatu',object_name,panel_name,'activar',$funciones,xml_data);
                                break;
                        case "DISABLED" :
                                set_nagusia_proiektore_zentrala_disabled(mezu_v,$rootScope);
                                //set_nagusia_proiektore_zentrala_egoera(mezu_v,$scope);
                                break;
			default :
				seleccion_feed(mezu_v,object_name,$state,konfig,$funciones,xml_data,id_button_aurrizkia);
                                break;
			}
    }else{
        pantalla_electrica_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,konfig,$scope,$rootScope,gettextCatalog);
    }
}
function pantalla_entrada_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,konfig,$rootScope){
    var object_name='pantalla_entrada';
    var panel_name='encender_apagar_pantalla';
    var id_button_aurrizkia='id_button_nagusia_sarrera_';
    if (dispositiboa_aktibo_dago($state, mezu_v[0],null,$funciones)) {
        switch (mezu_v[1]) {
			case "ON" :
                                set_nagusia_sarrera_on($rootScope);
                                $funciones.sakatua_utzi('id_button_nagusia_sarrera_piztu',object_name,panel_name,'encender',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_sarrera_itzali',object_name,panel_name,'apagar',$funciones,xml_data);
                                break;
			case "OFF" :
                                set_nagusia_sarrera_off($rootScope);
                                $funciones.sakatua_utzi('id_button_nagusia_sarrera_itzali',object_name,panel_name,'apagar',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_sarrera_piztu',object_name,panel_name,'encender',$funciones,xml_data);                                
				break;
                        case "DISABLED" :
                                set_nagusia_sarrera_disabled(mezu_v,$rootScope);
                                break;        
			default :
				seleccion_feed(mezu_v,object_name,$state,konfig,$funciones,xml_data,id_button_aurrizkia);
                                break;
			}
    }
}
function send_nagusia_proiektore_zentrala_itzali_message(xml_data,$funciones){
  var xml_string=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,'proyector_central','encender_apagar','apagar',$funciones);
  $funciones.send_xml(xml_string);
}
function pantalla_presidencia_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,konfig,$rootScope){
    var object_name='pantalla_presidencia';
    var panel_name='encender_apagar_pantalla';
    var id_button_aurrizkia='id_button_nagusia_feedback_';
    if (dispositiboa_aktibo_dago($state, mezu_v[0],null,$funciones)) {
        switch (mezu_v[1]) {
			case "ON" :
                                set_nagusia_feedback_on($rootScope);
                                $funciones.sakatua_utzi('id_button_nagusia_feedback_piztu',object_name,panel_name,'encender',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_feedback_itzali',object_name,panel_name,'apagar',$funciones,xml_data);
                                break;
			case "OFF" :
                                set_nagusia_feedback_off($rootScope);
                                $funciones.sakatua_utzi('id_button_nagusia_feedback_itzali',object_name,panel_name,'apagar',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_feedback_piztu',object_name,panel_name,'encender',$funciones,xml_data);                                
				break;
                        case "OFF" :
                                set_nagusia_feedback_disabled(mezu_v,$rootScope);
                                break;        
			default :
				seleccion_feed(mezu_v,object_name,$state,konfig,$funciones,xml_data,id_button_aurrizkia);
                                break;
			}
    }
}
function multzo_principal_generikoa_feed(sarrera,panel_name_in,botoiak,$funciones,object_name,xml_data,id_button_aurrizkia,panel_imagen_a_mostrar,imagen_a_mostrar_v_array){
    var panel_name=panel_name_in;
    if($funciones.is_feed_nagusia_panel(object_name,panel_name,xml_data,$funciones)){
        var num= botoiak.length;
        var i=0;
	var izena= "";
        var elem;
        var id_button;
	for (i=0; i<num; i++) {
            izena = botoiak[i];
            panel_name=panel_name_in;
            if($funciones.in_array(izena,imagen_a_mostrar_v_array)){
                panel_name=panel_imagen_a_mostrar;
            }
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
}
function plasma_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,konfig,$scope,$rootScope){
    var object_name='plasma';
    var panel_name='encender_apagar_pantalla';
    var id_button_aurrizkia='id_button_nagusia_plasma_';
    if (dispositiboa_aktibo_dago($state, mezu_v[0],null,$funciones)) {
        if(mezu_v[1]!=null){
            if(mezu_v[1].length>0){
                 switch (mezu_v[1]) {
                             case "ON" :
                                     set_nagusia_plasma_on($rootScope);
                                     $funciones.sakatua_utzi('id_button_nagusia_plasma_piztu',object_name,panel_name,'encender',$funciones,xml_data);
                                     $funciones.askatua_utzi('id_button_nagusia_plasma_itzali',object_name,panel_name,'apagar',$funciones,xml_data);                                     
                                     break;
                             case "OFF" :
                                     set_nagusia_plasma_off($rootScope);
                                     $funciones.sakatua_utzi('id_button_nagusia_plasma_itzali',object_name,panel_name,'apagar',$funciones,xml_data);
                                     $funciones.askatua_utzi('id_button_nagusia_plasma_piztu',object_name,panel_name,'encender',$funciones,xml_data);                                     
                                     break;
                             case "DISABLED" :
                                     set_nagusia_plasma_disabled(mezu_v,$rootScope);
                                     break;   
                             default :
                                     seleccion_feed(mezu_v,object_name,$state,konfig,$funciones,xml_data,id_button_aurrizkia);
                                     break;
                 }
            }
        }    
    }
}
function pantalla_electrica_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,konfig,$scope,$rootScope,gettextCatalog){
    var object_name='pantalla_electrica';
    var panel_name='subir_bajar_pantalla';    
    var id_button_aurrizkia='id_button_nagusia_proiektorea_';
    var panel_name_proiektorea='encender_apagar';
    if (dispositiboa_aktibo_dago($state, mezu_v[0],'pantalla_electrica',$funciones)) {
       switch (mezu_v[1]) {
			case "SUBIDA" :
                                $funciones.sakatua_utzi('id_button_nagusia_proiektorea_igo',object_name,panel_name,'subir',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_proiektorea_jaitsi',object_name,panel_name,'bajar',$funciones,xml_data);
                                break;
			case "BAJADA" :
                                $funciones.sakatua_utzi('id_button_nagusia_proiektorea_jaitsi',object_name,panel_name,'bajar',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_proiektorea_igo',object_name,panel_name,'subir',$funciones,xml_data);                                
				break;
                        case "ON" :
                                set_nagusia_proiektorea_on(mezu_v,$rootScope);
                                $funciones.sakatua_utzi('id_button_nagusia_proiektorea_piztu',object_name,panel_name_proiektorea,'encender',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_proiektorea_itzali',object_name,panel_name_proiektorea,'apagar',$funciones,xml_data);
                                break;
			case "OFF" :
                                set_nagusia_proiektorea_off(mezu_v,$rootScope);
                                $funciones.sakatua_utzi('id_button_nagusia_proiektorea_itzali',object_name,panel_name_proiektorea,'apagar',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_proiektorea_piztu',object_name,panel_name_proiektorea,'encender',$funciones,xml_data);                                
				break;
			case "MUTE" :
				$funciones.sakatua_utzi('id_button_nagusia_proiektorea_muteatu',object_name,panel_name_proiektorea,'activar',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_proiektorea_desmuteatu',object_name,panel_name_proiektorea,'desactivar',$funciones,xml_data);                                
                                break;
			case "NO_MUTE" :
				$funciones.sakatua_utzi('id_button_nagusia_proiektorea_desmuteatu',object_name,panel_name_proiektorea,'desactivar',$funciones,xml_data);                                                                			
                                $funciones.askatua_utzi('id_button_nagusia_proiektorea_muteatu',object_name,panel_name_proiektorea,'activar',$funciones,xml_data);
                                break;
			case "DISABLED" :
                                set_nagusia_proiektorea_disabled(mezu_v,$rootScope);
                                //set_nagusia_proiektorea_egoera(mezu_v,$scope);
                                break;        
			default :
				seleccion_feed(mezu_v,object_name,$state,konfig,$funciones,xml_data,id_button_aurrizkia);
                                break;
			}
    }
    pantalla_electrica_bakup_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,konfig,$scope,$rootScope,gettextCatalog);
}
function dvdgrab_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,konfig,$rootScope,gettextCatalog){
    var object_name='dvdgrab';
    var panel_name='dvdgrab_abajo';    
    var id_button_aurrizkia='id_button_nagusia_grabazioa_';
    		if (dispositiboa_aktibo_dago($state, mezu_v[0],null,$funciones)) {
                    switch (mezu_v[1]) {
			case "APAGAR_GRAB" :
				$rootScope.nagusia_grabazioa_dvdgrab_egoera='';
				break;
			case "ENCENDER_GRAB" :
				break;
			case "PONER_DVD" :
				break;
			case "PONER_TV" :
				break;
			case "CANAL_ARRIBA" :
				break;
			case "CANAL_ABAJO" :
				break;
			case "SOURCE" :
				$funciones.sakatua_utzi('id_button_nagusia_grabazioa_source',object_name,panel_name,'source',$funciones,xml_data);                                			                            
				break;
			case "GRABAR" :
				break;
			case "VOLUMEN" :
			case "SUBIRVOLUMEN_GRAB" :
			case "BAJARVOLUMEN_GRAB" :
				broadcast_nagusia_grabazioa_bolumena_value(mezu_v[2],$rootScope);
				break;
			case "PARAR_GRABACION" :
                            broadcast_nagusia_grabazioa_dvdgrab_egoera('GRABAZIOA GELDITUA',$rootScope,gettextCatalog);
                            $funciones.sakatua_utzi('id_button_nagusia_grabazioa_grabazioa_gelditu',object_name,panel_name,'parar_grabacion',$funciones,xml_data);                                			
                            $funciones.askatua_utzi('id_button_nagusia_grabazioa_grabatu',object_name,panel_name,'grabar',$funciones,xml_data);
                            break;
			case "GRABANDO" :
                            broadcast_nagusia_grabazioa_dvdgrab_egoera('GRABATZEN',$rootScope,gettextCatalog);
                            $funciones.sakatua_utzi('id_button_nagusia_grabazioa_grabatu',object_name,panel_name,'grabar',$funciones,xml_data);                            
                            $funciones.askatua_utzi('id_button_nagusia_grabazioa_grabazioa_gelditu',object_name,panel_name,'parar_grabacion',$funciones,xml_data);                                			
                            break;
			default :
				break;
			}
		}
}
function send_message($funciones,msg){
    var xml_string=$funciones.get_send_case_xml(msg);
    $funciones.send_xml(xml_string);
}
function on_popup_nok(xml_data,$funciones,type,$scope,msg_ez,$rootScope){
   if(type=='proiektorea_itzali'){       
       //set_nagusia_proiektorea_on($rootScope);
       nagusia_proiektorea_send_status($funciones);
   }else if(type=='proiektore_zentrala_itzali'){
       nagusia_proiektorea_send_status($funciones);
   }else if(type=='alert'){
       send_message($funciones,msg_ez);
   }else if(type=='arbela_itzali'){
       nagusia_arbela_send_status($funciones);
   }   
}
function menu_mezuak_tratatu(menu_auk,$state,$scope,$rootScope,$funciones) {
		switch (menu_auk) {
		case "INICIO" :
			menuko_botoi_zapalketa('id_ion_item_hasiera_menu',$scope,$funciones);			
                        $state.go('app.hasiera');
			break;
		case "ESCENARIOS" :
                        menuko_botoi_zapalketa('id_ion_item_hasiera_menu',$scope,$funciones);
			$state.go('app.hasiera');
			break;
		case "LLAMARCOLGAR" :
                        menuko_botoi_zapalketa('id_ion_item_deitu_eskegi_menu',$scope,$funciones);
                        //$state.go('app.deitu_eskegi');
			break;
		case "PRINCIPAL" :
			$funciones.funciones_menuko_botoi_zapalketa_nagusia($scope,$funciones);
                        //broadcast_menu_nagusia($rootScope);
                        //$state.go('app.grabazioa');
                        $state.go('app.nagusia');			
			break;
		case "SONIDO" :
                        menuko_botoi_zapalketa('id_ion_item_soinua_menu',$scope,$funciones);
			$state.go('app.soinua');
			break;
		case "LUCES" :
			menuko_botoi_zapalketa('id_ion_item_argiak_menu',$scope,$funciones);
			$state.go('app.argiak');
			break;
		case "APAGAR" :
			menuko_botoi_zapalketa('id_ion_item_itzali_menu',$scope,$funciones);
			$state.go('app.itzali');
			break;
		default :
			break;
		}
}
function red_think_client_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,konfig){
    var object_name='red_think_client';
    var id_button_aurrizkia='id_button_nagusia_think_client_sarea_';
    seleccion_feed(mezu_v,object_name,$state,konfig,$funciones,xml_data,id_button_aurrizkia);    
}
function menu_mostrar_ocultar_tratatu(mezu_v,items_menu,$rootScope){
		switch (mezu_v[2]) {
		case "MOSTRAR" :
                        angular.element(document.querySelector('#ion_side_menu_custom')).css('display','block');
                        angular.element(document.querySelector('#ion_side_menu_custom_nagusia')).css('display','block');
			break;
		case "VIDEOCONFERENCIA" :
			if (mezu_v[3] == "TRUE") {
                            set_menu_ion_item_enabled('deitu_eskegi',true,items_menu,'id_ion_item_deitu_eskegi_menu');
			} else {
                            set_menu_ion_item_enabled('deitu_eskegi',false,items_menu,'id_ion_item_deitu_eskegi_menu');
			}
                        //broadcast_set_menu_nagusia_items_enabled($rootScope);
                        set_menu_nagusia_items_enabled(items_menu);
			break;
		case "OCULTAR" :
                        /*angular.element(document.querySelector('#ion_side_menu_custom')).css('display','none');
                        angular.element(document.querySelector('#ion_side_menu_custom_nagusia')).css('display','none');*/
			break;
		default :
			break;
		}
}
function microfono_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,$rootScope){
    var pantalla="SONIDO";
    switch (mezu_v[1]) {
		case "1" :
                        if (mezu_v[2] == "ON") {
				micro_luz_feedback(pantalla, "mic1", 1,null,$state,$funciones,xml_data);
			} else if (mezu_v[2] == "OFF") {
				micro_luz_feedback(pantalla, "mic1", 2,null,$state,$funciones,xml_data);
			} else if (mezu_v[2] == "VOLUMEN") {
                            bolumena_bistaratu($rootScope,'soinua_mikr1_bolumena_value',Number(mezu_v[3]),$state,pantalla,$funciones);
			}
			break;
		case "2" :
			if (mezu_v[2] == "ON") {
				micro_luz_feedback(pantalla, "mic2", 1,null,$state,$funciones,xml_data);
			} else if (mezu_v[2] == "OFF") {
				micro_luz_feedback(pantalla, "mic2", 2,null,$state,$funciones,xml_data);
			} else if (mezu_v[2] == "VOLUMEN") {
                            bolumena_bistaratu($rootScope,'soinua_mikr2_bolumena_value',Number(mezu_v[3]),$state,pantalla,$funciones);
			}
			break;
		case "3" :
			if (mezu_v[2] == "ON") {
				micro_luz_feedback(pantalla, "mic3", 1,null,$state,$funciones,xml_data);
			} else if (mezu_v[2] == "OFF") {
				micro_luz_feedback(pantalla, "mic3", 2,null,$state,$funciones,xml_data);
			} else if (mezu_v[2] == "VOLUMEN") {
                            bolumena_bistaratu($rootScope,'soinua_mikr3_bolumena_value',Number(mezu_v[3]),$state,pantalla,$funciones);
			}
			break;
		case "4" :
			if (mezu_v[2] == "ON") {
				micro_luz_feedback(pantalla, "mic4", 1,null,$state,$funciones,xml_data);
			} else if (mezu_v[2] == "OFF") {
				micro_luz_feedback(pantalla, "mic4", 2,null,$state,$funciones,xml_data);
			} else if (mezu_v[2] == "VOLUMEN") {
                            bolumena_bistaratu($rootScope,'soinua_mikr4_bolumena_value',Number(mezu_v[3]),$state,pantalla,$funciones);
			}
			break;
		case "5" :
			if (mezu_v[2] == "ON") {
				micro_luz_feedback(pantalla, "mic_atril", 1,null,$state,$funciones,xml_data);
			} else if (mezu_v[2] == "OFF") {
				micro_luz_feedback(pantalla, "mic_atril", 2,null,$state,$funciones,xml_data);
			} else if (mezu_v[2] == "VOLUMEN") {
                            bolumena_bistaratu($rootScope,'soinua_mikr_atril_bolumena_value',Number(mezu_v[3]),$state,pantalla,$funciones);
			}
			break;
		case "6" :
			if (mezu_v[2] == "ON") {
				micro_luz_feedback(pantalla, "mic_atril2", 1,null,$state,$funciones,xml_data);
			} else if (mezu_v[2] == "OFF") {
				micro_luz_feedback(pantalla, "mic_atril2", 2,null,$state,$funciones,xml_data);
			} else if (mezu_v[2] == "VOLUMEN") {
                            bolumena_bistaratu($rootScope,'soinua_mikr_atril2_bolumena_value',Number(mezu_v[3]),$state,pantalla,$funciones);
			}
			break;
                case "7" :
			if (mezu_v[2] == "ON") {
				micro_luz_feedback(pantalla, "mic_eskua", 1,null,$state,$funciones,xml_data);
			} else if (mezu_v[2] == "OFF") {
				micro_luz_feedback(pantalla, "mic_eskua", 2,null,$state,$funciones,xml_data);
			} else if (mezu_v[2] == "VOLUMEN") {
                            bolumena_bistaratu($rootScope,'soinua_mikr_eskua_bolumena_value',Number(mezu_v[3]),$state,pantalla,$funciones);
			}
			break;
                //case "8" :
                case "12":
			if (mezu_v[2] == "ON") {
				micro_luz_feedback(pantalla, "mic_papar", 1,null,$state,$funciones,xml_data);
			} else if (mezu_v[2] == "OFF") {
				micro_luz_feedback(pantalla, "mic_papar", 2,null,$state,$funciones,xml_data);
			} else if (mezu_v[2] == "VOLUMEN") {
                            bolumena_bistaratu($rootScope,'soinua_mikr_papar_bolumena_value',Number(mezu_v[3]),$state,pantalla,$funciones);
			}
			break;        
		default :
			break;
		}
}
function micro_luz_feedback(pantalla,izena,mota,sfeed_lokala,$state,$funciones,xml_data){
    if (dispositiboa_aktibo_dago($state,pantalla,null,$funciones)) {
        $funciones.funciones_micro_luz_feedback(pantalla,izena,mota,sfeed_lokala,$state,$funciones,xml_data);
    }
}
function bolumena_bistaratu($rootScope,field,bolumena,$state,pantalla,$funciones){
    if (dispositiboa_aktibo_dago($state,pantalla,null,$funciones)){
        var args=new Array();
        args.push(field);
        args.push(bolumena);
        $rootScope.$broadcast('set_bolumena', args);
    }
}
function sonido_mezuak_tratatu(mezu_v,$rootScope){
    var args=new Array();
    args.push(mezu_v);
    $rootScope.$broadcast('soinua_sonido_mezuak_tratatu', args);
}
function argiak_mezuak_tratatu(mezu_v,$rootScope){
    var args=new Array();
    args.push(mezu_v);
    $rootScope.$broadcast('argiak_luces_mezuak_tratatu', args);
}
function broadcast_nagusia_grabazioa_dvdgrab_egoera(msg,$rootScope,gettextCatalog){
    var args=new Array();
    args.push(gettextCatalog.getString(msg));
    $rootScope.$broadcast('set_nagusia_grabazioa_dvdgrab_egoera', args);
}
function broadcast_nagusia_grabazioa_bolumena_value(bolumena,$rootScope){
    var args=new Array();
    args.push(bolumena);
    $rootScope.$broadcast('set_nagusia_grabazioa_bolumena_value', args);
}
function dvd_mezuak_tratatu(mezu_v,$rootScope){
    var args=new Array();
    args.push(mezu_v);
    $rootScope.$broadcast('nagusia_dvd_mezuak_tratatu', args);
}
function send_deitu_eskegi_message(xml_data,$funciones){
   var xml_string=get_send_xml_string(xml_data,'menu_items.llamar._msg',$funciones);
   $funciones.send_xml(xml_string);
}
function videoconferencia_mezuak_tratatu(mezu_v,$rootScope){
    var args=new Array();
    args.push(mezu_v);
    $rootScope.$broadcast('deitu_eskegi_videoconferencia_mezuak_tratatu', args);
}
function create_menu_nagusia_array(){
    var result=new Array();
    result.push({title:"GRABAZIOA",value:"app.grabazioa"});
    result.push({title:"THINK CLIENT SAREA",value:"app.think_client_sarea"});
    result.push({title:"SARRERA",value:"app.sarrera"});
    result.push({title:"FEEDBACK",value:"app.feedback"});
    result.push({title:"PLASMA",value:"app.plasma"});
    result.push({title:"PROIEKTOREA",value:"app.proiektorea"});
    result.push({title:"ARBELA",value:"app.arbela"});
    return result;
}
function nagusia_grabazioa_select($ionicTabsDelegate,index,xml_data,$funciones,type,$state,$window){
    if(!is_controller_pantalla_aktibo_dago('app.grabazioa',$state)){
        /*if(type==null){
            $ionicTabsDelegate.select(index);
        }else{*/
            dispositivo_erakutsi($state,'app.grabazioa');
            //$window.location.href = '#/app/grabazioa';
        //}
        //nagusia_dispositivo_botoi_zapalketa('id_dispositivo_grabazioa');
        //$funciones.funciones_nagusia_dispositivo_botoi_zapalketa('id_dispositivo_grabazioa',$scope,$funciones);    
        send_nagusia_grabazioa_dispositibo_message(xml_data,$funciones);
    }    
}
function nagusia_think_client_sarea_select($ionicTabsDelegate,index,xml_data,$funciones,type,$state){
    if(!is_controller_pantalla_aktibo_dago('app.think_client_sarea',$state)){
        /*if(type==null){
            $ionicTabsDelegate.select(index);
        }*/
        $state.go('app.think_client_sarea');
        send_nagusia_think_client_sarea_disbositibo_message(xml_data,$funciones);
    }
}
function nagusia_sarrera_select($ionicTabsDelegate,index,xml_data,$funciones,type,$state){
    if(!is_controller_pantalla_aktibo_dago('app.sarrera',$state)){
        /*if(type==null){
            $ionicTabsDelegate.select(index);
        }*/
        $state.go('app.sarrera');
        send_nagusia_sarrera_dispositibo_message(xml_data,$funciones);
    }    
}
function nagusia_feedback_select($ionicTabsDelegate,index,xml_data,$funciones,type,$state){
    if(!is_controller_pantalla_aktibo_dago('app.feedback',$state)){
        /*if(type==null){
            $ionicTabsDelegate.select(index);
        }*/
        $state.go('app.feedback');
        send_nagusia_feedback_dispositibo_message(xml_data,$funciones);
    }    
}
function nagusia_plasma_select($ionicTabsDelegate,index,xml_data,$funciones,type,$state,$scope,$rootScope,$timeout){
    if(!is_controller_pantalla_aktibo_dago('app.plasma',$state)){
        /*if(type==null){
            $ionicTabsDelegate.select(index);
        }*/
        $state.go('app.plasma');
        /*$timeout(function(){
            nagusia_plasma_menu_nagusia_dispositivo_botoi_zapalketa($state,$scope,$funciones);
        },250);*/           
        send_nagusia_plasma_dispositibo_message(xml_data,$funciones);
    }    
}
function nagusia_proiektorea_select($ionicTabsDelegate,index,xml_data,$funciones,type,$state){
    if(!is_controller_pantalla_aktibo_dago('app.proiektorea',$state)){
        /*if(type==null){
            $ionicTabsDelegate.select(index);
        }*/
        $state.go('app.proiektorea');
        send_nagusia_proiektorea_dispositibo_message(xml_data,$funciones);
    }    
}
function nagusia_arbela_select($ionicTabsDelegate,index,xml_data,$funciones,type,$state){
    if(!is_controller_pantalla_aktibo_dago('app.arbela',$state)){
        /*if(type==null){
            $ionicTabsDelegate.select(index);
        }*/
        $state.go('app.arbela');
        send_nagusia_arbela_dispositibo_message(xml_data,$funciones);
    }
}
function menuko_botoi_zapalketa(id_ion_item,$scope,$funciones){
    $funciones.funciones_menuko_botoi_zapalketa(id_ion_item,$scope,$funciones);
}
function broadcast_menu_nagusia($rootScope){
    var args=new Array();
    $rootScope.$broadcast('set_nagusia_menuko_botoi_zapalketa', args);
}
function camara_mezuak_tratatu(mezu_v,$rootScope,$state,$timeout){
    var args=new Array();
    args.push(mezu_v);
    switch (mezu_v[1]) {
		case "ZOOM" :
			break;
		case "PANR" :
			break;
		case "PANL" :
			break;
		case "TILTUP" :
			break;
		case "TILTUP" :
			break;
		case "TILTDOWN" :
			break;
		case "POSICION" :
			break;
		case "PARADA" :
			break;
		case "TODAS_POSICIONES" :
                        camara_posiciones_mezuak_tratatu(mezu_v,$rootScope,$state,$timeout);
                        break;
		default :
			break;
    }
}
function camara_posiciones_mezuak_tratatu(mezu_v,$rootScope,$state,$timeout){
    $state.go('app.kamara_posizioak');
    $timeout(function(){
        var args=new Array();
        args[0]=mezu_v;
        $rootScope.$broadcast('kamara_posizioak_mezuak_tratatu', args); 
    },250);
}
function camaradoc_mezuak_tratatu(mezu_v,$rootScope){
    var args=new Array();
    args[0]=mezu_v;
    $rootScope.$broadcast('dokumentu_kamera_mezuak_tratatu', args);
}
function deitu_eskegi_erakutsi($state){
    //$state.go('app.deitu_eskegi');
}
function set_menu_ion_item_enabled(item_menu_name,enabled,items_menu,id_ion_item){
    var id_item='#'+id_ion_item;
    var num=items_menu.items.length;
    var item=null;
    for(var i=0;i<num;i++){
        item=items_menu.items[i];
        if(item.name==item_menu_name){            
            items_menu.items[i].enabled=enabled;
        }
    }
    if(enabled){
        angular.element(document.querySelector(id_item)).removeClass('ion_item_custom_disabled');                
    }else{
        angular.element(document.querySelector(id_item)).addClass('ion_item_custom_disabled');  
    }
}
function is_item_menu_enabled(item_menu_name,items_menu){    
    var num=items_menu.items.length;
    var item=null;
    for(var i=0;i<num;i++){
        item=items_menu.items[i];
        if(item.name==item_menu_name){
            if(item.enabled){
                return true;
            }
            return false;
        }
    }
    return true;
}
function broadcast_set_menu_nagusia_items_enabled($rootScope){
    var args=new Array();
    $rootScope.$broadcast('set_menu_nagusia_items_enabled', args);
}
function is_controller_pantalla_aktibo_dago(konp,$state){
    var num=$state.$current.path.length;
    var current_state=$state.$current.path[num-1];
    if(current_state==konp){
        return true;
    }
    return false;
}
function is_nagusia_controller_aktibo_dago($state,$funciones){
    if(is_controller_pantalla_aktibo_dago('app.nagusia',$state)){
        return true;
    }
    var state_array=$funciones.funciones_create_state_array();
    for(var pantalla in state_array){
        if(is_controller_pantalla_aktibo_dago(state_array[pantalla],$state)){
            return true;
        }
    }
    return false;
}
function controller_menuko_botoi_zapalketa($state,$scope,$funciones,$location){
    var num=$state.$current.path.length;
    var current_state=$state.$current.path[num-1];
    var items_menu_id_array=$funciones.funciones_create_items_menu_id_array();
    var konp='';
    if(num==0){
        current_state=controller_get_current_state($location);   
    }
    /*if(current_state.length==0){
        current_state='app.ongi_etorri';
    }*/
    for(var id_button in items_menu_id_array){
        konp=items_menu_id_array[id_button];
        if(konp==current_state){
            $funciones.funciones_menuko_botoi_zapalketa(id_button,$scope,$funciones);
        }    
    }
}
function controller_get_current_state($location){
    var result=$location.path();
    var num=result.length;
    result=result.substr(1,num-1);
    result=result.replace('/','.');
    result=result.replace('tab','tabs');
    //alert(result);
    return result;
}
function set_menu_nagusia_items_enabled(items_menu){
    var id_item='';
    var num=items_menu.items.length;
    var item=null;
    for(var i=0;i<num;i++){
        item=items_menu.items[i];
        id_item='#'+item.id;                    
        add_remove_menu_nagusia_item_class(item,id_item);
        if(item.id_nagusia!=null){
            id_item='#'+item.id_nagusia;
            //alert(id_item);
            add_remove_menu_nagusia_item_class(item,id_item);
        }
    }    
}
function add_remove_menu_nagusia_item_class(item,id_item){
    if(item.enabled){
        angular.element(document.querySelector(id_item)).removeClass('ion_item_custom_disabled');
    }else{
        angular.element(document.querySelector(id_item)).addClass('ion_item_custom_disabled');  
    }
}
function feed_lokala_nagusia_feedback_piztu(xml_data,object_name,panel_name,elem_name,$funciones,$state,type,konfig){
  var msg_attr=null;
  var is_elem=true;
  var elem=$funciones.funciones_get_send_nagusia_panel_elem_xml_string(xml_data,object_name,panel_name,elem_name,$funciones,msg_attr,is_elem);
  if($funciones.funciones_is_feed_lokala(elem)){
    var mezu_v=elem._msg.split(':');
    if(type=="feedback"){
        feedback_pantallas_feed(mezu_v,xml_data,$state,$funciones,konfig);
    }else if(type=="sarrera"){
        sarrera_pantallas_feed(mezu_v,xml_data,$state,$funciones,konfig);
    }else if(type=='plasma'){
        plasma_pantallas_feed(mezu_v,xml_data,$state,$funciones,konfig);
    }else if(type=='arbela'){
        pizarra_feed(mezu_v,xml_data,$state,$funciones,konfig);
    }else if(type=='proiektorea'){
        proiektorea_feed(mezu_v,xml_data,$state,$funciones,konfig);
    }else if(type=='dvdgrab'){
        dvdgrab_feed(mezu_v,xml_data,$state,$funciones);
    }else if(type=='dvdgrab_shell'){
        button_shell_feed(mezu_v,xml_data,$state,$funciones);
    }   
  }
}
function feedback_pantallas_feed(mezu_v,xml_data,$state,$funciones,konfig){
  var object_name='pantalla_presidencia';
  var panel_name='encender_apagar_pantalla';
  var id_button_aurrizkia='id_button_nagusia_feedback_';
  if (dispositiboa_aktibo_dago($state, mezu_v[0],null,$funciones)) {
        		switch (mezu_v[1]) {
			case "ENCENDER" :
                                $funciones.sakatua_utzi('id_button_nagusia_feedback_piztu',object_name,panel_name,'encender',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_feedback_itzali',object_name,panel_name,'apagar',$funciones,xml_data);
                                break;
			case "APAGAR" :
                                $funciones.sakatua_utzi('id_button_nagusia_feedback_itzali',object_name,panel_name,'apagar',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_feedback_piztu',object_name,panel_name,'encender',$funciones,xml_data);                                
                               break;
			default :
				seleccion_feed(mezu_v,object_name,$state,konfig,$funciones,xml_data,id_button_aurrizkia);
				break;
			}
  }  
}
function feed_lokala_nagusia_feedback_itzali(xml_data,object_name,panel_name,elem_name,$funciones,$state,konfig){
  feed_lokala_nagusia_feedback_piztu(xml_data,object_name,panel_name,elem_name,$funciones,$state,"feedback",konfig);
}
function feed_lokala_nagusia_sarrera_piztu(xml_data,object_name,panel_name,elem_name,$funciones,$state,konfig){
  feed_lokala_nagusia_feedback_piztu(xml_data,object_name,panel_name,elem_name,$funciones,$state,'sarrera',konfig);  
}
function sarrera_pantallas_feed(mezu_v,xml_data,$state,$funciones,konfig){
    var object_name='pantalla_entrada';
    var panel_name='encender_apagar_pantalla';
    var id_button_aurrizkia='id_button_nagusia_sarrera_';    
    if (dispositiboa_aktibo_dago($state, mezu_v[0],null,$funciones)) {
        switch (mezu_v[1]) {
			case "ENCENDER" :
                                $funciones.sakatua_utzi('id_button_nagusia_sarrera_piztu',object_name,panel_name,'encender',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_sarrera_itzali',object_name,panel_name,'apagar',$funciones,xml_data);                                
                                break;
			case "APAGAR" :
                                $funciones.sakatua_utzi('id_button_nagusia_sarrera_itzali',object_name,panel_name,'apagar',$funciones,xml_data);                                
                                $funciones.askatua_utzi('id_button_nagusia_sarrera_piztu',object_name,panel_name,'encender',$funciones,xml_data);                                
        			break;
			default :
				seleccion_feed(mezu_v,object_name,$state,konfig,$funciones,xml_data,id_button_aurrizkia);
                                break;
			}
    }  
}
function feed_lokala_nagusia_sarrera_itzali(xml_data,object_name,panel_name,elem_name,$funciones,$state,konfig){
  feed_lokala_nagusia_feedback_piztu(xml_data,object_name,panel_name,elem_name,$funciones,$state,'sarrera',konfig);   
}
function feed_lokala_nagusia_plasma_piztu(xml_data,object_name,panel_name,elem_name,$funciones,$state,konfig){
  feed_lokala_nagusia_feedback_piztu(xml_data,object_name,panel_name,elem_name,$funciones,$state,'plasma',konfig);   
}
function feed_lokala_nagusia_plasma_itzali(xml_data,object_name,panel_name,elem_name,$funciones,$state,konfig){
  feed_lokala_nagusia_plasma_piztu(xml_data,object_name,panel_name,elem_name,$funciones,$state,'plasma',konfig);   
}
function plasma_pantallas_feed(mezu_v,xml_data,$state,$funciones,konfig){
    var object_name='plasma';
    var panel_name='encender_apagar_pantalla';
    var id_button_aurrizkia='id_button_nagusia_plasma_';
    if (dispositiboa_aktibo_dago($state, mezu_v[0],null,$funciones)) {
        switch (mezu_v[1]) {
			case "ENCENDER" :
                                $funciones.sakatua_utzi('id_button_nagusia_plasma_piztu',object_name,panel_name,'encender',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_plasma_itzali',object_name,panel_name,'apagar',$funciones,xml_data);                                
                                break;
			case "APAGAR" :
        			$funciones.sakatua_utzi('id_button_nagusia_plasma_itzali',object_name,panel_name,'apagar',$funciones,xml_data);                                                                                                
                                $funciones.askatua_utzi('id_button_nagusia_plasma_piztu',object_name,panel_name,'encender',$funciones,xml_data);
                                break;
			default :
				seleccion_feed(mezu_v,object_name,$state,konfig,$funciones,xml_data,id_button_aurrizkia);
                                break;
			}
    }  
}
function feed_lokala_nagusia_arbela_piztu(xml_data,object_name,panel_name,elem_name,$funciones,$state,konfig){
  feed_lokala_nagusia_feedback_piztu(xml_data,object_name,panel_name,elem_name,$funciones,$state,'arbela',konfig);   
}
function feed_lokala_nagusia_arbela_itzali(xml_data,object_name,panel_name,elem_name,$funciones,$state,konfig){
  feed_lokala_nagusia_feedback_piztu(xml_data,object_name,panel_name,elem_name,$funciones,$state,'arbela',konfig);   
}
function pizarra_feed(mezu_v,xml_data,$state,$funciones,konfig){
    var object_name='pizarra_digital';
    var panel_name='encender_apagar';
    var id_button_aurrizkia='id_button_nagusia_arbela_';
    if (dispositiboa_aktibo_dago($state, mezu_v[0],null,$funciones)) {
			switch (mezu_v[1]) {
			case "ENCENDER" :
				$funciones.sakatua_utzi('id_button_nagusia_arbela_piztu',object_name,panel_name,'encender',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_arbela_itzali',object_name,panel_name,'apagar',$funciones,xml_data);
                                break;
			case "APAGAR" :
                                //hau komentatua proy_popup funtzioa deitzen baita kasu honetan
                                /*$funciones.sakatua_utzi('id_button_nagusia_arbela_itzali',object_name,panel_name,'apagar',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_arbela_piztu',object_name,panel_name,'encender',$funciones,xml_data);*/
                                break;
			case "MUTEAR" :
				$funciones.sakatua_utzi('id_button_nagusia_arbela_muteatu',object_name,panel_name,'activar',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_arbela_desmuteatu',object_name,panel_name,'desactivar',$funciones,xml_data);                                
                                break;
			case "DESMUTEAR" :
				$funciones.sakatua_utzi('id_button_nagusia_arbela_desmuteatu',object_name,panel_name,'desactivar',$funciones,xml_data);                                                                			
                                $funciones.askatua_utzi('id_button_nagusia_arbela_muteatu',object_name,panel_name,'activar',$funciones,xml_data);
                                break;
			default :
				seleccion_feed(mezu_v,object_name,$state,konfig,$funciones,xml_data,id_button_aurrizkia);
                                break;
			}
		}
}
function popup_proy($scope,type){
    var msg='Proiektorea itzaltzen baduzu 5 minutu itxaron beharko duzu berriro piztu ahal izateko lanpara hozten den bitartean. Proiektorea itzali nahi duzu?';
    $scope.showPopup(msg,'',type);
}
function send_nagusia_arbela_itzali_message(xml_data,$funciones){
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pizarra_digital','encender_apagar','apagar',$funciones);
  $funciones.send_xml(xml_string);
}
function feed_lokala_nagusia_arbela_muteatu(xml_data,object_name,panel_name,elem_name,$funciones,$state,konfig){
  feed_lokala_nagusia_feedback_piztu(xml_data,object_name,panel_name,elem_name,$funciones,$state,'arbela',konfig);   
}
function feed_lokala_nagusia_arbela_desmuteatu(xml_data,object_name,panel_name,elem_name,$funciones,$state,konfig){
  feed_lokala_nagusia_feedback_piztu(xml_data,object_name,panel_name,elem_name,$funciones,$state,'arbela',konfig);   
}
function feed_lokala_nagusia_proiektorea_piztu(xml_data,object_name,panel_name,elem_name,$funciones,$state,konfig){
  feed_lokala_nagusia_feedback_piztu(xml_data,object_name,panel_name,elem_name,$funciones,$state,'proiektorea',konfig);   
}
function proiektorea_feed(mezu_v,xml_data,$state,$funciones,konfig){
  var object_name='pantalla_electrica';
    var panel_name='subir_bajar_pantalla';    
    var id_button_aurrizkia='id_button_nagusia_proiektorea_';
    var panel_name_proiektorea='encender_apagar';
    if (dispositiboa_aktibo_dago($state, mezu_v[0],'pantalla_electrica',$funciones)) {
       switch (mezu_v[1]) {
			case "SUBIR" :
                                $funciones.sakatua_utzi('id_button_nagusia_proiektorea_igo',object_name,panel_name,'subir',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_proiektorea_jaitsi',object_name,panel_name,'bajar',$funciones,xml_data);
                                break;
			case "BAJAR" :
                                $funciones.sakatua_utzi('id_button_nagusia_proiektorea_jaitsi',object_name,panel_name,'bajar',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_proiektorea_igo',object_name,panel_name,'subir',$funciones,xml_data);                                
				break;
                        case "ENCENDER" :
				$funciones.sakatua_utzi('id_button_nagusia_proiektorea_piztu',object_name,panel_name_proiektorea,'encender',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_proiektorea_itzali',object_name,panel_name_proiektorea,'apagar',$funciones,xml_data);
                                break;
			case "APAGAR" :
                                //hau komentatua proy_popup funtzioa deitzen baita kasu honetan
                                /*$funciones.sakatua_utzi('id_button_nagusia_proiektorea_itzali',object_name,panel_name_proiektorea,'apagar',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_proiektorea_piztu',object_name,panel_name_proiektorea,'encender',$funciones,xml_data);*/                                
				break;
			case "MUTEAR" :
				$funciones.sakatua_utzi('id_button_nagusia_proiektorea_muteatu',object_name,panel_name_proiektorea,'activar',$funciones,xml_data);
                                $funciones.askatua_utzi('id_button_nagusia_proiektorea_desmuteatu',object_name,panel_name_proiektorea,'desactivar',$funciones,xml_data);                                
                                break;
			case "DESMUTEAR" :
				$funciones.sakatua_utzi('id_button_nagusia_proiektorea_desmuteatu',object_name,panel_name_proiektorea,'desactivar',$funciones,xml_data);                                                                			
                                $funciones.askatua_utzi('id_button_nagusia_proiektorea_muteatu',object_name,panel_name_proiektorea,'activar',$funciones,xml_data);
                                break;
			        
			default :
				seleccion_feed(mezu_v,object_name,$state,konfig,$funciones,xml_data,id_button_aurrizkia);
                                break;
			}
    }
}
function feed_lokala_nagusia_proiektorea_muteatu(xml_data,object_name,panel_name,elem_name,$funciones,$state,konfig){
    feed_lokala_nagusia_proiektorea_piztu(xml_data,object_name,panel_name,elem_name,$funciones,$state,konfig);
}
function feed_lokala_nagusia_proiektorea_desmuteatu(xml_data,object_name,panel_name,elem_name,$funciones,$state,konfig){
    feed_lokala_nagusia_proiektorea_piztu(xml_data,object_name,panel_name,elem_name,$funciones,$state,konfig);
}
function feed_lokala_nagusia_proiektorea_igo(xml_data,object_name,panel_name,elem_name,$funciones,$state,konfig){
    feed_lokala_nagusia_proiektorea_piztu(xml_data,object_name,panel_name,elem_name,$funciones,$state,konfig);
}
function feed_lokala_nagusia_proiektorea_jaitsi(xml_data,object_name,panel_name,elem_name,$funciones,$state,konfig){
    feed_lokala_nagusia_proiektorea_piztu(xml_data,object_name,panel_name,elem_name,$funciones,$state,konfig);
}
function feed_lokala_nagusia_grabazioa_grabatu(xml_data,object_name,panel_name,elem_name,$funciones,$state,konfig){
    feed_lokala_nagusia_feedback_piztu(xml_data,object_name,panel_name,elem_name,$funciones,$state,'dvdgrab',konfig);   
}
function dvdgrab_feed(mezu_v,xml_data,$state,$funciones){
    var object_name='dvdgrab';
    var panel_name='dvdgrab_abajo';    
    var id_button_aurrizkia='id_button_nagusia_grabazioa_';
    		if (dispositiboa_aktibo_dago($state, mezu_v[0],null,$funciones)) {
                    switch (mezu_v[1]) {
			case "PARAR_GRABACION" :
                            $funciones.sakatua_utzi('id_button_nagusia_grabazioa_grabazioa_gelditu',object_name,panel_name,'parar_grabacion',$funciones,xml_data);                                			
                            $funciones.askatua_utzi('id_button_nagusia_grabazioa_grabatu',object_name,panel_name,'grabar',$funciones,xml_data);
                            break;
			case "GRABAR" :
                            $funciones.sakatua_utzi('id_button_nagusia_grabazioa_grabatu',object_name,panel_name,'grabar',$funciones,xml_data);                            
                            $funciones.askatua_utzi('id_button_nagusia_grabazioa_grabazioa_gelditu',object_name,panel_name,'parar_grabacion',$funciones,xml_data);                                			
                            break;
			default :
                            break;
			}
		}
}
function feed_lokala_nagusia_grabazioa_grabazioa_gelditu(xml_data,object_name,panel_name,elem_name,$funciones,$state,konfig){
    feed_lokala_nagusia_grabazioa_grabatu(xml_data,object_name,panel_name,elem_name,$funciones,$state,konfig);   
}
function feed_lokala_nagusia_grabazioa_streaming_grabatu(xml_data,object_name,panel_name,elem_name,$funciones,$state,konfig){
    feed_lokala_nagusia_feedback_piztu(xml_data,object_name,panel_name,elem_name,$funciones,$state,'dvdgrab_shell',konfig);
}
function button_shell_feed(mezu_v,xml_data,$state,$funciones){
    var object_name='dvdgrab';
    var panel_name='grabazioa_tknika72';    
    var id_button_aurrizkia='id_button_nagusia_grabazioa_';    
    switch (mezu_v[2]) {
		case "HASI_REFR" :
                        $funciones.sakatua_utzi('id_button_nagusia_grabazioa_streaming_grabatu',object_name,panel_name,'hasi',$funciones,xml_data);                            
                        $funciones.askatua_utzi('id_button_nagusia_grabazioa_streaming_grabazioa_gelditu',object_name,panel_name,'gelditu',$funciones,xml_data);                                			                            
                        break;
		case "GELDITU_REFR" :
                        $funciones.sakatua_utzi('id_button_nagusia_grabazioa_streaming_grabazioa_gelditu',object_name,panel_name,'gelditu',$funciones,xml_data);                                			                                                                            
                        $funciones.askatua_utzi('id_button_nagusia_grabazioa_streaming_grabatu',object_name,panel_name,'hasi',$funciones,xml_data);                            
                        break;
		default :
			break;
		}
}
function feed_lokala_nagusia_grabazioa_streaming_grabazioa_gelditu(xml_data,object_name,panel_name,elem_name,$funciones,$state,konfig){
    feed_lokala_nagusia_grabazioa_streaming_grabatu(xml_data,object_name,panel_name,elem_name,$funciones,$state,konfig);
}
function get_ionic_popup_title_image(){
    return '<div class="div_show_popup_title"><img src="img/messagebox_info.png"/></div>';
}
function itxarote_pantaila_kentzeko_mezuak(sarrera,$scope){
    switch (sarrera) {
		case "SISTEMA:BIENVENIDO" :
		case "MENU:ESCENARIOS" :
		case "MENU:PRINCIPAL" :
		case "MENU:LLAMARCOLGAR" :
                case "SISTEMA:BIENVENIDO:ON" :
		case "MENU:ESCENARIOS:ON" :
		case "MENU:PRINCIPAL:ON" :
		case "MENU:LLAMARCOLGAR:ON" :    
                    $scope.espera_erlojua_itxi($scope);
		default :
			break;
		}
}
function button_mezuak_tratatu(mezu_v,$rootScope){
    /*var args=new Array();
    args.push(mezu_v);
    $rootScope.$broadcast('mezuak_button_mezuak_tratatu', args);*/
}
function send_nagusia_plasma_piztu_toggle_message($scope,xml_data,$funciones){
    if($scope.plasma_piztu==true){
        send_nagusia_plasma_piztu_message(xml_data,$funciones);
    }else{
        send_nagusia_plasma_itzali_message(xml_data,$funciones);
    }
}
function send_nagusia_proiektorea_piztu_toggle_message($scope,xml_data,$funciones){
    if($scope.proiektorea_piztu==true){
        send_nagusia_proiektorea_piztu_message(xml_data,$funciones);
    }else{
        send_nagusia_proiektorea_itzali_message(xml_data,$funciones);
    }
}
function set_nagusia_proiektorea_egoera(mezu_v,$scope){
    if(mezu_v[2]!=null){
        $scope.proiektorea_piztu_text=mezu_v[2];
    }
}
function set_nagusia_proiektorea_on(mezu_v,$rootScope){
    var args=new Array();
    //intelsat-2015
    args[0]='';
    if(mezu_v[2]!=null){
        args[0]=mezu_v[2];
    }   
    $rootScope.$broadcast('set_nagusia_proiektorea_on', args);
}
function set_nagusia_proiektorea_off(mezu_v,$rootScope){
    var args=new Array();
    //intelsat-2015
    args[0]='';
    if(mezu_v[2]!=null){
        args[0]=mezu_v[2];
    }
    $rootScope.$broadcast('set_nagusia_proiektorea_off', args);
}
function set_nagusia_plasma_on($rootScope){
    var args=new Array();
    $rootScope.$broadcast('set_nagusia_plasma_on', args);
}
function set_nagusia_proiektorea_disabled(mezu_v,$rootScope){
    var args=new Array();
    args[0]='';
    if(mezu_v[2]!=null){
        args[0]=mezu_v[2];
    }
    $rootScope.$broadcast('set_nagusia_proiektorea_disabled', args);
}
function set_nagusia_plasma_off($rootScope){
    var args=new Array();
    $rootScope.$broadcast('set_nagusia_plasma_off', args);
}
function set_nagusia_plasma_disabled(mezu_v,$rootScope){
    var args=new Array();
    args[0]='';
    if(mezu_v[2]!=null){
        args[0]=mezu_v[2];
    }    
    $rootScope.$broadcast('set_nagusia_plasma_disabled', args);
}
function send_nagusia_sarrera_piztu_toggle_message($scope,xml_data,$funciones){
    if($scope.sarrera_piztu==true){
        send_nagusia_sarrera_piztu_message(xml_data,$funciones);
    }else{
        send_nagusia_sarrera_itzali_message(xml_data,$funciones);
    }
}
function set_nagusia_sarrera_on($rootScope){
    var args=new Array();
    $rootScope.$broadcast('set_nagusia_sarrera_on', args);
}
function set_nagusia_sarrera_off($rootScope){
    var args=new Array();
    $rootScope.$broadcast('set_nagusia_sarrera_off', args);
}
function set_nagusia_sarrera_disabled(mezu_v,$rootScope){
    var args=new Array();
    args[0]='';
    if(mezu_v[2]!=null){
        args[0]=mezu_v[2];
    }
    $rootScope.$broadcast('set_nagusia_sarrera_disabled', args);
}
function send_nagusia_feedback_piztu_toggle_message($scope,xml_data,$funciones){
    if($scope.feedback_piztu==true){
        send_nagusia_feedback_piztu_message(xml_data,$funciones);
    }else{
        send_nagusia_feedback_itzali_message(xml_data,$funciones);
    }
}
function set_nagusia_feedback_on($rootScope){
    var args=new Array();
    $rootScope.$broadcast('set_nagusia_feedback_on', args);
}
function set_nagusia_feedback_off($rootScope){
    var args=new Array();
    $rootScope.$broadcast('set_nagusia_feedback_off', args);
}
function set_nagusia_feedback_disabled(mezu_v,$rootScope){
    var args=new Array();
    args[0]='';
    if(mezu_v[2]!=null){
        args[0]=mezu_v[2];
    }
    $rootScope.$broadcast('set_nagusia_feedback_disabled', args);
}
/*
function nagusia_plasma_menu_nagusia_dispositivo_botoi_zapalketa($state,$scope,$funciones){
    var num=$state.$current.path.length;
    var current_state=$state.$current.path[num-1];
    var item_array=nagusia_define_menu_nagusia_item_array();
    if(item_array[current_state]!=null){
        $funciones.funciones_nagusia_dispositivo_botoi_zapalketa(item_array[current_state],$scope,$funciones);
    }        
}
function nagusia_define_menu_nagusia_item_array(){
    var result=new Array();
    result['app.grabazioa']='id_dispositivo_grabazioa';
    result['app.think_client_sarea']='id_dispositivo_think_client_sarea';
    result['app.sarrera']='id_dispositivo_sarrera';
    result['app.feedback']='id_dispositivo_feedback';
    result['app.plasma']='id_dispositivo_plasma';
    result['app.proiektorea']='id_dispositivo_proiektorea';
    result['app.arbela']='id_dispositivo_arbela';
    return result; 
}*/
function nagusia_proiektorea_create_status_interval_timeout($state,$funciones,$interval,$timeout){
    if (dispositiboa_aktibo_dago($state,'PANTALLA_ELECTRICA',null,$funciones)) {
        $timeout(function() {
          nagusia_proiektorea_create_status_interval($state,$funciones,$interval);
        }, 250);
    }    
}
function nagusia_proiektorea_create_status_interval($state,$funciones,$interval){
    $interval( function(){ 
       if (dispositiboa_aktibo_dago($state,'PANTALLA_ELECTRICA',null,$funciones)) {
        nagusia_proiektorea_send_status($funciones);
       }
    }, 10000);
}
function nagusia_proiektorea_send_status($funciones){
    var xml_string='<sinta case="PROYECTOR_CENTRAL:STATUS"/>';
    $funciones.send_xml(xml_string);
}
function nagusia_arbela_create_status_interval_timeout($state,$funciones,$interval,$timeout){
    if (dispositiboa_aktibo_dago($state,'PIZARRA_DIGITAL',null,$funciones)) {
        $timeout(function() {
          nagusia_arbela_create_status_interval($state,$funciones,$interval);
        }, 250);
    }    
}
function nagusia_arbela_create_status_interval($state,$funciones,$interval){
    $interval( function(){ 
       if (dispositiboa_aktibo_dago($state,'PIZARRA_DIGITAL',null,$funciones)) {
        nagusia_arbela_send_status($funciones);
       }
    }, 10000);
}
function nagusia_arbela_send_status($funciones){
    var xml_string='<sinta case="PIZARRA_DIGITAL:STATUS"/>';
    $funciones.send_xml(xml_string);
}
function set_nagusia_arbela_on(mezu_v,$rootScope){
    var args=new Array();
    //intelsat-2015
    args[0]='';
    if(mezu_v[2]!=null){
        args[0]=mezu_v[2];
    }
    $rootScope.$broadcast('set_nagusia_arbela_on', args);
}
function set_nagusia_arbela_off(mezu_v,$rootScope){
    var args=new Array();
    //intelsat-2015
    args[0]='';
    if(mezu_v[2]!=null){
        args[0]=mezu_v[2];
    }
    $rootScope.$broadcast('set_nagusia_arbela_off', args);
}
function set_nagusia_arbela_disabled(mezu_v,$rootScope){
    var args=new Array();
    args[0]='';
    if(mezu_v[2]!=null){
        args[0]=mezu_v[2];
    }
    $rootScope.$broadcast('set_nagusia_arbela_disabled', args);
}
function send_nagusia_arbela_piztu_toggle_message($scope,xml_data,$funciones){
    if($scope.arbela_piztu==true){
        send_nagusia_arbela_piztu_message(xml_data,$funciones);
    }else{
        send_nagusia_arbela_itzali_message(xml_data,$funciones);
    }
}
function set_nagusia_proiektore_zentrala_on(mezu_v,$rootScope){
    var args=new Array();
    //intelsat-2015
    args[0]='';
    if(mezu_v[2]!=null){
        args[0]=mezu_v[2];
    }
    $rootScope.$broadcast('set_nagusia_proiektore_zentrala_on', args);
}
function set_nagusia_proiektore_zentrala_off(mezu_v,$rootScope){
    var args=new Array();
    //intelsat-2015
    args[0]='';
    if(mezu_v[2]!=null){
        args[0]=mezu_v[2];
    }
    $rootScope.$broadcast('set_nagusia_proiektore_zentrala_off', args);
}
function set_nagusia_proiektore_zentrala_disabled(mezu_v,$rootScope){
    var args=new Array();
    args[0]='';
    if(mezu_v[2]!=null){
        args[0]=mezu_v[2];
    }
    $rootScope.$broadcast('set_nagusia_proiektore_zentrala_disabled', args);
}
function set_nagusia_proiektorea_all_enabled(enabled,$funciones,type){
    $funciones.funciones_set_nagusia_proiektorea_all_enabled(enabled,$funciones,type);
}
function set_nagusia_feedback_all_enabled(enabled,$funciones){
    set_nagusia_proiektorea_all_enabled(enabled,$funciones,'feedback');
}
function set_nagusia_sarrera_all_enabled(enabled,$funciones){
    set_nagusia_proiektorea_all_enabled(enabled,$funciones,'sarrera');
}
function set_nagusia_plasma_all_enabled(enabled,$funciones){
    set_nagusia_proiektorea_all_enabled(enabled,$funciones,'plasma');
}
function set_nagusia_arbela_all_enabled(enabled,$funciones){
    set_nagusia_proiektorea_all_enabled(enabled,$funciones,'arbela');
}
function pantalla_electrica_bakup_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,konfig,$scope,$rootScope,gettextCatalog){
    switch (mezu_v[1]) {
			case "ON" :
                               konfig.bakup_proiektorea_piztu=true;
                               konfig.bakup_proiektorea_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
                               konfig.bakup_proiektorea_piztu_disabled=false;
                               set_proiektorea_bakup_konfig(konfig);
                               break;
			case "OFF" :
                               konfig.bakup_proiektorea_piztu=false;
                               konfig.bakup_proiektorea_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
                               konfig.bakup_proiektorea_piztu_disabled=false;
                               set_proiektorea_bakup_konfig(konfig);
                               break;
			case "DISABLED" :
                               konfig.bakup_proiektorea_piztu=false;
                               konfig.bakup_proiektorea_piztu_text=mezu_v[2];
                               konfig.bakup_proiektorea_piztu_disabled=true;
                               set_proiektorea_bakup_konfig(konfig);
                               break;        
			default :
                               break;
    }
} 
function set_proiektorea_bakup_konfig(konfig){
    konfig.bakup_proiektore_zentrala_piztu=konfig.bakup_proiektorea_piztu;
    konfig.bakup_proiektore_zentrala_piztu_text=konfig.bakup_proiektorea_piztu_text;
    konfig.bakup_proiektore_zentrala_piztu_disabled=konfig.bakup_proiektorea_piztu_disabled;
}    
function pizarra_bakup_mezuak_tratatu(mezu_v,$state,$funciones,xml_data,konfig,$scope,$rootScope,gettextCatalog){
    switch (mezu_v[1]) {
			case "ON" :
                               konfig.bakup_arbela_piztu=true;
                               konfig.bakup_arbela_piztu_text=$funciones.get_piztuta_text(gettextCatalog);
                               $scope.arbela_piztu_disabled=false;     
                               break;
			case "OFF" :
                               konfig.bakup_arbela_piztu=false;
                               konfig.bakup_arbela_piztu_text=$funciones.get_itzalita_text(gettextCatalog);
                               $scope.arbela_piztu_disabled=false;  
                               break;
			case "DISABLED" :
                               konfig.bakup_arbela_piztu=false;
                               konfig.bakup_arbela_piztu_text=mezu_v[2];
                               $scope.arbela_piztu_disabled=true; 
                               break;        
			default :
                               break;
    }
}
function send_nagusia_feedback_solaskide_gure_imajina_message(xml_data,$funciones){
    var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'pantalla_presidencia','imagen_a_mostrar','mostrar_contraparte_y_nuestra_imagen',$funciones);
    $funciones.send_xml(xml_string);  
}
function nagusia_dispositibo_sakatua_utzi($funciones,id_button){
    //alert(id_button);
    $funciones.funciones_sakatua_utzi_id_button(id_button);
}
//intelsat-2015
function nagusia_proiektorea_get_piztu_text(piztu_text,$funciones,gettextCatalog){
    var result=$funciones.get_piztuta_text(gettextCatalog);
    if(piztu_text.length>0){
        result=piztu_text;
    }
    return result;
}
//intelsat-2015
function nagusia_proiektorea_get_itzalita_text(itzalita_text,$funciones,gettextCatalog){
    var result=$funciones.get_itzalita_text(gettextCatalog);
    if(itzalita_text.length>0){
        result=itzalita_text;
    }
    return result;
}
//intelsat-2015
function nagusia_arbela_get_piztu_text(piztu_text,$funciones,gettextCatalog){
    return nagusia_proiektorea_get_piztu_text(piztu_text,$funciones,gettextCatalog);
}
//intelsat-2015
function nagusia_arbela_get_itzalita_text(itzalita_text,$funciones,gettextCatalog){
    return nagusia_proiektorea_get_itzalita_text(itzalita_text,$funciones,gettextCatalog);
}
//intelsat-2015
function send_nagusia_plasma_kamera1_message(xml_data,$funciones){ 
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'plasma','seleccion_en_pizarra','camara1',$funciones);
  $funciones.send_xml(xml_string);   
}
//intelsat-2015
function send_nagusia_plasma_kamera2_message(xml_data,$funciones){ 
  var xml_string=get_send_nagusia_panel_elem_xml_string(xml_data,'plasma','seleccion_en_pizarra','camara2',$funciones);
  alert("sened::: "+xml_string);
  $funciones.send_xml(xml_string);   
}