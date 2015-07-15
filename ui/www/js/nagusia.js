angular.module('nagusia.controllers', [])

.controller('NagusiaCtrl', function($scope, $stateParams,xml_data,$funciones,$ionicTabsDelegate,gettextCatalog,$state,$ionicSideMenuDelegate) {
    menuko_botoi_zapalketa_nagusia($scope,$funciones);
    $scope.items_nagusia_dispositiboa=define_items_nagusia_dispositiboa(gettextCatalog);
    $scope.$on('set_nagusia_menuko_botoi_zapalketa', function(event, args){
       menuko_botoi_zapalketa_nagusia($funciones,$scope);
    });
    $scope.item_nagusia_dispositiboa_click=function(item){
       $ionicTabsDelegate.select(item.index);
       item_nagusia_dispositiboa_select($ionicTabsDelegate,item.index,xml_data,$funciones,null,$state);       
    }
    /*$scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
    $scope.toggleLeft();*/
})
function menuko_botoi_zapalketa_nagusia($scope,$funciones){
    $funciones.funciones_menuko_botoi_zapalketa_nagusia($scope,$funciones);
}
function define_items_nagusia_dispositiboa(gettextCatalog){
    var result=new Array();
    var label_grabazioa=gettextCatalog.getString('GRABAZIOA');   
    result.push({title:label_grabazioa,index:1});
    var label_think_client_sarea=gettextCatalog.getString('THINK CLIENT SAREA');     
    result.push({title:label_think_client_sarea,index:2});
    var label_sarrera=gettextCatalog.getString('SARRERA'); 
    result.push({title:label_sarrera,index:3});
    var label_feedback=gettextCatalog.getString('FEEDBACK'); 
    result.push({title:label_feedback,index:4});
    var label_plasma=gettextCatalog.getString('PLASMA'); 
    result.push({title:label_plasma,index:5});
    var label_proiektorea=gettextCatalog.getString('PROIEKTOREA'); 
    result.push({title:label_proiektorea,index:6});
    var label_arbela=gettextCatalog.getString('ARBELA'); 
    result.push({title:label_arbela,index:7});    
    return result;
}
function item_nagusia_dispositiboa_select($ionicTabsDelegate,item_index,xml_data,$funciones,type,$state){
    var xml_string="";
    if(item_index==1){
        xml_string=get_send_nagusia_dispositibo_xml_string(xml_data,'dvdgrab',$funciones);
        $funciones.send_xml(xml_string);
    }else if(item_index==2){
        xml_string=get_send_nagusia_dispositibo_xml_string(xml_data,'red_think_client',$funciones);
        $funciones.send_xml(xml_string);
    }else if(item_index==3){
        xml_string=get_send_nagusia_dispositibo_xml_string(xml_data,'pantalla_entrada',$funciones);
        $funciones.send_xml(xml_string);
    }else if(item_index==4){
        xml_string=get_send_nagusia_dispositibo_xml_string(xml_data,'pantalla_presidencia',$funciones);
        $funciones.send_xml(xml_string);
    }else if(item_index==5){
        xml_string=get_send_nagusia_dispositibo_xml_string(xml_data,'plasma',$funciones);
        $funciones.send_xml(xml_string);
    }else if(item_index==6){
        xml_string=get_send_nagusia_dispositibo_xml_string(xml_data,'pantalla_electrica',$funciones);
        $funciones.send_xml(xml_string);
    }else if(item_index==7){
        xml_string=get_send_nagusia_dispositibo_xml_string(xml_data,'pizarra_digital',$funciones);
        $funciones.send_xml(xml_string);
    }
}