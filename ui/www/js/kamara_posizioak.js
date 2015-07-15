angular.module('kamara_posizioak.controllers', [])

.controller('KamaraPosizioakCtrl', function($scope, $stateParams,$funciones,xml_data,$state) {
    $scope.kamara_posizioak_posizioak_array=new Array();
    $scope.kamara_posizioak_object_name='';
    $scope.kamara_posizioak_dispositivo='';
    $scope.$on('kamara_posizioak_mezuak_tratatu', function(event, args){
        var mezu_v=args[0];
        nagusia_kamara_posizioak_mezuak_tratatu(mezu_v,$funciones,xml_data,$scope,$state);
    });
    $scope.nagusia_kamara_posizioak_posizioa_click=function(item){
        send_nagusia_kamara_posizioak_posizioa_message(item.posizioa,xml_data,$scope,$funciones);
    }
    $scope.nagusia_kamara_posizioak_ezeztatu_click=function(){
        send_nagusia_kamara_posizioak_ezeztatu_message($scope,$funciones);
    }
})
function nagusia_kamara_posizioak_mezuak_tratatu(mezu_v,$funciones,xml_data,$scope,$state){
    $scope.kamara_posizioak_dispositivo=mezu_v[0];
    if (mezu_v[2] != null) {
        if (mezu_v[2] == "CANCELAR") {
            nagusia_kamara_posizioak_on_cancelar(mezu_v[0],$state,$funciones);
	}
    } else {
        var object_name=angular.lowercase(mezu_v[0].replace('_',''));
        $scope.kamara_posizioak_object_name=object_name;
        var max_pos=nagusia_kamara_posizioak_get_max_pos(xml_data,object_name,$funciones);
        $scope.kamara_posizioak_posizioak_array=nagusia_kamara_posizioak_sortu(max_pos);
    }
}
function nagusia_kamara_posizioak_get_max_pos(xml_data,object_name,$funciones){
    var result=70;
    var object=$funciones.funciones_get_nagusia_object(xml_data,object_name);
    if(object!=null){
        return object._max_pos; 
    }
    return result;
}
function nagusia_kamara_posizioak_sortu(max_pos){
    var result=new Array();
    var is_row=false;
    var kont=0;
    var klass='not_is_row';
    for(var i=1;i<=max_pos;i++){
        is_row=false;
        klass='not_is_row';
        if(kont>0){
            if((kont % 4)==0){
                is_row=true;
                klass='is_row';
            }
        }
        result.push({title:i,posizioa:i,is_row:is_row,klass:klass});
        kont++;
    }
    return result;
}
function send_nagusia_kamara_posizioak_posizioa_message(posizioa,xml_data,$scope,$funciones){
    var object_name=$scope.kamara_posizioak_object_name;
    var object=$funciones.funciones_get_nagusia_object(xml_data,object_name);
    if(object!=null){
        var xml_string=object._msg2;
        xml_string+=posizioa;
        xml_string=$funciones.get_send_case_xml(xml_string);
        $funciones.send_xml(xml_string);
    }
}
function send_nagusia_kamara_posizioak_ezeztatu_message($scope,$funciones){
    var xml_string=$scope.kamara_posizioak_dispositivo;
    xml_string+=':TODAS_POSICIONES:CANCELAR';
    $funciones.send_xml(xml_string);
}
function nagusia_kamara_posizioak_on_cancelar(dispositivo,$state,$funciones){
    var next_state=$funciones.funciones_get_dispositivo_state(dispositivo,$funciones);
    if(next_state.length>0){
        //alert('next_state='+next_state);
        $state.go(next_state);
    }    
}