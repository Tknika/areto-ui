angular.module('menu_nagusia.controllers', [])

.controller('MenuNagusiaCtrl', function($scope, $stateParams,$state,$scope,$funciones,items_menu,$timeout) {
    $funciones.funciones_menuko_botoi_zapalketa_nagusia($scope,$funciones);
    menu_nagusia_dispositivo_botoi_zapalketa($state,$scope,$funciones,items_menu);
    /*$scope.$on('set_menu_nagusia_items_enabled', function(event, args){
       //set_menu_nagusia_items_enabled(items_menu);
    });*/
    $timeout(function(){
        menu_nagusia_dispositivo_botoi_zapalketa($state,$scope,$funciones,items_menu);
    },250);   
})
function menu_nagusia_dispositivo_botoi_zapalketa($state,$scope,$funciones){
    var num=$state.$current.path.length;
    var current_state=$state.$current.path[num-1];
    //alert(current_state);
    var item_array=define_menu_nagusia_item_array();
    if(item_array[current_state]!=null){
        $funciones.funciones_nagusia_dispositivo_botoi_zapalketa(item_array[current_state],$scope,$funciones);
    }        
}
function define_menu_nagusia_item_array(){
    var result=new Array();
    result['app.grabazioa']='id_dispositivo_grabazioa';
    result['app.think_client_sarea']='id_dispositivo_think_client_sarea';
    result['app.sarrera']='id_dispositivo_sarrera';
    result['app.feedback']='id_dispositivo_feedback';
    result['app.plasma']='id_dispositivo_plasma';
    result['app.proiektorea']='id_dispositivo_proiektorea';
    result['app.arbela']='id_dispositivo_arbela';
    return result; 
}