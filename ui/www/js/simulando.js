var simulando_var = angular.module("simulando.controllers", [])

simulando_var.factory("$simulando", function() {
    return {
        simulando: function(){
            return call_simulando();
        }
}})
//function call_simulando(){
/*function simulando(){
    var result="";
    result="<sinta sarr=\"SISTEMA:INICIANDO\"/>";
    return result;
}*/
//function simulando($state,$rootScope,$scope){
function simulando($scope,$timeout){
    //$scope.filtro_msg("<sinta sarr=\"SISTEMA:INICIANDO\"/>",$state,$rootScope);
    //$scope.filtro_msg("<sinta sarr=\"ESPERA:STOP\"/>",$state,$rootScope);
    //$scope.filtro_msg('<sinta sarr="DISPOSITIVO:CAMARA_1"/>');
    //$scope.filtro_msg('<sinta sarr="DISPOSITIVO:CAMARA_2"/>');
    //$scope.filtro_msg('<sinta sarr="DISPOSITIVO:CAMARA_3"/>');
    //$scope.filtro_msg('<sinta sarr="DISPOSITIVO:PANTALLA_PRESIDENCIA"/>');
    //$scope.filtro_msg('<sinta sarr="DISPOSITIVO:PANTALLA_ENTRADA"/>');
    //$scope.filtro_msg('<sinta sarr="DISPOSITIVO:PIZARRA_DIGITAL"/>');
    //$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:DISABLED:PROJECTOR JUST SHUT OFF AND IS IN 90 SECOND COOL DOWN MODE." />');
    //$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:ON"/>');
    //$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:OFF"/>');        
    //$scope.filtro_msg('<sinta sarr="DISPOSITIVO:PANTALLA_ELECTRICA"/>');
    //$scope.filtro_msg('<sinta sarr="DISPOSITIVO:DVD"/>');
    //$scope.filtro_msg('<sinta sarr="DISPOSITIVO:DVDGRAB"/>');
    //$scope.filtro_msg('<sinta sarr="DISPOSITIVO:ORDENADOR_PRINCIPAL"/>');
    //$scope.filtro_msg('<sinta sarr="DISPOSITIVO:CAMARA_DE_DOCUMENTOS"/>');
    //$scope.filtro_msg('<sinta sarr="PIZARRA_DIGITAL:DISABLED:PROJECTOR JUST SHUT OFF AND IS IN 90 SECOND COOL DOWN MODE."/>');
    //$scope.filtro_msg('<sinta sarr="PIZARRA_DIGITAL:ON"/>');
    //$scope.filtro_msg('<sinta sarr="PIZARRA_DIGITAL:OFF"/>');    
    //$scope.filtro_msg('<sinta sarr="DISPOSITIVO:PIZARRA_DIGITAL"/>');
    //$scope.filtro_msg('<sinta sarr="DISPOSITIVO:PROYECTOR_CENTRAL"/>');
    //$scope.filtro_msg('<sinta sarr="ESCENARIO:ENVIAR_CLASES"/>');
    //$scope.filtro_msg('<sinta sarr="ESCENARIO:RECIBIR_CLASES"/>');
    //$scope.filtro_msg('<sinta sarr="ESCENARIO:CLASE_LOCAL"/>');
    //$scope.filtro_msg('<sinta sarr="ESCENARIO:SEMINARIO/CLASE"/>');
    //$scope.filtro_msg('<sinta sarr="ESCENARIO:PELICULA"/>');
    //$scope.filtro_msg('<sinta sarr="DISPOSITIVO:PLASMA"/>');
    //$scope.filtro_msg('<sinta sarr="DISPOSITIVO:RED_THINK_CLIENT"/>');
    //$scope.filtro_msg('<sinta sarr="INICIO:ENVIAR_CLASES"/>');
    //$scope.filtro_msg('<sinta sarr="INICIO:RECIBIR_CLASES"/>');
    //$scope.filtro_msg('<sinta sarr="INICIO:CLASE_LOCAL"/>');
    //$scope.filtro_msg('<sinta sarr="INICIO:SEMINARIO/CLASE"/>');
    //$scope.filtro_msg('<sinta sarr="INICIO:PELICULA"/>');
    //$scope.filtro_msg('<sinta sarr="SISTEMA:INICIANDO:6"/>');
    //$scope.filtro_msg('<sinta sarr="SISTEMA:INICIANDO:8"/>');
    //$scope.filtro_msg('<sinta sarr="MENU:INICIO"/>');
    //$scope.filtro_msg('<sinta sarr="SISTEMA:SALIENDO:6"/>');
    //$scope.filtro_msg('<sinta sarr="ESPERA:espere_iniciando"/>');
    //$scope.filtro_msg('<sinta sarr="ESPERA:espere_iniciando"/>');
    //$scope.filtro_msg('<sinta sarr="SISTEMA:MENU:OCULTAR"/>');
    //$scope.filtro_msg('<sinta sarr="SISTEMA:ON"/>');
    //$scope.filtro_msg('<sinta sarr="MENU:SONIDO"/>');
    //$scope.filtro_msg('<sinta sarr="MENU:LUCES"/>');
    //$scope.filtro_msg('<sinta sarr="MENU:LLAMARCOLGAR"/>');
    //$scope.filtro_msg('<sinta sarr="MENU:PRINCIPAL"/>');
    //$scope.filtro_msg('<sinta sarr="MENU:APAGAR"/>');
    //$scope.filtro_msg('<sinta sarr="SISTEMA:BIENVENIDO"/>');
    //$scope.filtro_msg('<sinta sarr="CAMARA_1:TODAS_POSICIONES"/>');
    //$scope.filtro_msg('<sinta sarr="CAMARA_2:TODAS_POSICIONES"/>');
    //$scope.filtro_msg('<sinta sarr="CAMARA_2:TODAS_POSICIONES:CANCELAR"/>');
    //$scope.filtro_msg('<sinta sarr="DISPOSITIVO:PANTALLA_ELECTRICA"/>');
    //$scope.filtro_msg('<sinta sarr="ESCENARIO:PELICULA"/>');
    //$scope.filtro_msg('<sinta sarr="MENU:ESCENARIOS"/>');    
    //$scope.filtro_msg('');
    //$scope.filtro_msg('<sinta sarr="ESPERA:espere_comprobando"/>');
    //simulando_log($scope,$timeout);
    //simulando_log2($scope,$timeout);
    //simulando_log4($scope,$timeout);
    //simulando_sistema_iniciar($scope);
    //simulando_press($scope,$timeout);
    //simulando_dvd($scope,$timeout);
    //simulando_pizarra($scope,$timeout);
    //simulando_cambio_pantalla($scope);
    $timeout(
    function(){
        //$scope.filtro_msg('<sinta sarr="PIZARRA_DIGITAL:ON"/>');
        //$scope.filtro_msg('<sinta sarr="PIZARRA_DIGITAL:OFF"/>');
        //$scope.filtro_msg('<sinta sarr="PIZARRA_DIGITAL:DISABLED:ABCD"/>');
        /*$scope.filtro_msg('<sinta sarr="PIZARRA_DIGITAL:MUTE"/>');
	$scope.filtro_msg('<sinta sarr="PIZARRA_DIGITAL:NO_MUTE"/>');
        $scope.filtro_msg('<sinta sarr="PIZARRA_DIGITAL:DVD"/>');
        $scope.filtro_msg('<sinta sarr="PIZARRA_DIGITAL:PCSUELO"/>');
	$scope.filtro_msg('<sinta sarr="PIZARRA_DIGITAL:PORTATIL1"/>');
	$scope.filtro_msg('<sinta sarr="PIZARRA_DIGITAL:PORTATIL2"/>');
	$scope.filtro_msg('<sinta sarr="PIZARRA_DIGITAL:THINK_CLIENT"/>');
	$scope.filtro_msg('<sinta sarr="PIZARRA_DIGITAL:CAMARA_DE_DOCUMENTOS"/>');
	$scope.filtro_msg('<sinta sarr="PIZARRA_DIGITAL:DVDGRAB"/>');
	$scope.filtro_msg('<sinta sarr="PIZARRA_DIGITAL:PORTATIL3"/>');
	$scope.filtro_msg('<sinta sarr="PIZARRA_DIGITAL:ATRIL"/>');*/
        //$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:ON"/>');
	//$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:OFF"/>');
        //$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:DISABLED:ABCD"/>');
        //$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:ON"/>');
	//$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:MUTE"/>');
	//$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:NO_MUTE"/>');
	//$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:DVD"/>');
	/*$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:PCSUELO"/>');
	$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:PORTATIL1"/>');
	$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:PORTATIL2"/>');
	$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:THINK_CLIENT"/>');
	$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:CAMARA_DE_DOCUMENTOS"/>');
	$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:DVDGRAB"/>');
	$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:PORTATIL3"/>');
	$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:ATRIL"/>');*/
	//$scope.filtro_msg('<sinta sarr="PANTALLA_ENTRADA:ON"/>');
	//$scope.filtro_msg('<sinta sarr="PANTALLA_ENTRADA:OFF"/>');
        //$scope.filtro_msg('<sinta sarr="PANTALLA_ENTRADA:DISABLED:ABCD"/>');
	/*$scope.filtro_msg('<sinta sarr="PANTALLA_ENTRADA:DVD"/>');
	$scope.filtro_msg('<sinta sarr="PANTALLA_ENTRADA:PCSUELO"/>');
	$scope.filtro_msg('<sinta sarr="PANTALLA_ENTRADA:PORTATIL1"/>');
	$scope.filtro_msg('<sinta sarr="PANTALLA_ENTRADA:PORTATIL2"/>');
	$scope.filtro_msg('<sinta sarr="PANTALLA_ENTRADA:PORTATIL3"/>');
	$scope.filtro_msg('<sinta sarr="PANTALLA_ENTRADA:THINK_CLIENT"/>');
	$scope.filtro_msg('<sinta sarr="PANTALLA_ENTRADA:CAMARA_DE_DOCUMENTOS"/>');
	$scope.filtro_msg('<sinta sarr="PANTALLA_ENTRADA:DVDGRAB"/>');
	$scope.filtro_msg('<sinta sarr="PANTALLA_ENTRADA:ATRIL"/>');*/
	//$scope.filtro_msg('<sinta sarr="PANTALLA_PRESIDENCIA:ON"/>');
	//$scope.filtro_msg('<sinta sarr="PANTALLA_PRESIDENCIA:OFF"/>');
        /*$scope.filtro_msg('<sinta sarr="PANTALLA_PRESIDENCIA:MOSTRAR_CONTRAPARTE"/>');
        $scope.filtro_msg('<sinta sarr="PANTALLA_PRESIDENCIA:MOSTRAR_NUESTRA_IMAGEN"/>');
	$scope.filtro_msg('<sinta sarr="PANTALLA_PRESIDENCIA:DVD"/>');
	$scope.filtro_msg('<sinta sarr="PANTALLA_PRESIDENCIA:PCSUELO"/>');
	$scope.filtro_msg('<sinta sarr="PANTALLA_PRESIDENCIA:PORTATIL1"/>');
	$scope.filtro_msg('<sinta sarr="PANTALLA_PRESIDENCIA:PORTATIL2"/>');
	$scope.filtro_msg('<sinta sarr="PANTALLA_PRESIDENCIA:THINK_CLIENT"/>');
	$scope.filtro_msg('<sinta sarr="PANTALLA_PRESIDENCIA:CAMARA_DE_DOCUMENTOS"/>');
	$scope.filtro_msg('<sinta sarr="PANTALLA_PRESIDENCIA:DVDGRAB"/>');
	$scope.filtro_msg('<sinta sarr="PANTALLA_PRESIDENCIA:PORTATIL3"/>');
	$scope.filtro_msg('<sinta sarr="PANTALLA_PRESIDENCIA:ATRIL"/>');*/
	//$scope.filtro_msg('<sinta sarr="PLASMA:OFF"/>');	
        //$scope.filtro_msg('<sinta sarr="PLASMA:ON"/>');
        //$scope.filtro_msg('<sinta sarr="DISPOSITIVO:PLASMA"/>');
        //$scope.filtro_msg('<sinta sarr="PLASMA:OFF"/>');
        //$scope.filtro_msg('<sinta sarr="PLASMA:ON"/>');
        //$scope.filtro_msg('<sinta sarr="PLASMA:DISABLED:ABCD"/>');
	/*$scope.filtro_msg('<sinta sarr="PLASMA:DVD"/>');
	$scope.filtro_msg('<sinta sarr="PLASMA:PCSUELO"/>');
	$scope.filtro_msg('<sinta sarr="PLASMA:PORTATIL1"/>');
       	$scope.filtro_msg('<sinta sarr="PLASMA:PORTATIL2"/>');
	$scope.filtro_msg('<sinta sarr="PLASMA:THINK_CLIENT"/>');
	$scope.filtro_msg('<sinta sarr="PLASMA:CAMARA_DE_DOCUMENTOS"/>');
	$scope.filtro_msg('<sinta sarr="PLASMA:DVDGRAB"/>');
	$scope.filtro_msg('<sinta sarr="PLASMA:PORTATIL3"/>');
	$scope.filtro_msg('<sinta sarr="PLASMA:ATRIL"/>');*/
        /*$scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:SUBIDA"/>');
	$scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA"/>');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:ON"/>');
	$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:OFF"/>');
	$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:MUTE"/>');
	$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:NO_MUTE"/>');
	$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:DVD"/>');
	$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:PCSUELO"/>');
	$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:PORTATIL1"/>');
	$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:PORTATIL2"/>');
	$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:THINK_CLIENT"/>');
	$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:CAMARA_DE_DOCUMENTOS"/>');
	$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:DVDGRAB"/>');
	$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:PORTATIL3"/>');
	$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:ATRIL"/>');*/
	//$scope.filtro_msg('<sinta sarr="DVDGRAB:PARAR_GRABACION"/>');
	//$scope.filtro_msg('<sinta sarr="DVDGRAB:GRABANDO"/>');
        //$scope.filtro_msg('<sinta sarr="DVDGRAB:APAGAR_GRAB"/>');
        //$scope.filtro_msg('<sinta sarr="DVDGRAB:SOURCE"/>');
        //$scope.filtro_msg('<sinta sarr="DVDGRAB:VOLUMEN:20"/>');
        //$scope.filtro_msg('<sinta sarr="DVDGRAB:BAJARVOLUMEN_GRAB:20"/>');
        //$scope.filtro_msg('<sinta sarr="DVDGRAB:SUBIRVOLUMEN_GRAB:90"/>');
        //$scope.filtro_msg('<sinta sarr="ALERT:COD0:sgfdhfsdgfhfdghgfd"/>');
        //$scope.filtro_msg('<sinta sarr="ESPERA:esperando"/>');
        //$scope.filtro_msg('<sinta sarr="SISTEMA:BIENVENIDO"/>');
        //$scope.filtro_msg('<sinta sarr="SISTEMA:BIENVENIDO:ON"/>');
        //$scope.filtro_msg('<sinta sarr="MENU:ESCENARIOS"/>');
        //$scope.filtro_msg('<sinta sarr="MENU:ESCENARIOS:ON"/>');
        //$scope.filtro_msg('<sinta sarr="MENU:PRINCIPAL"/>');
        /*$scope.filtro_msg('<sinta sarr="RED_THINK_CLIENT:CAMARA_DE_DOCUMENTOS"/>');
	$scope.filtro_msg('<sinta sarr="RED_THINK_CLIENT:DVD"/>');
	$scope.filtro_msg('<sinta sarr="RED_THINK_CLIENT:PORTATIL1"/>');
	$scope.filtro_msg('<sinta sarr="RED_THINK_CLIENT:PORTATIL2"/>');
	$scope.filtro_msg('<sinta sarr="RED_THINK_CLIENT:PORTATIL3"/>');
	$scope.filtro_msg('<sinta sarr="RED_THINK_CLIENT:THINK_CLIENT"/>');
	$scope.filtro_msg('<sinta sarr="RED_THINK_CLIENT:PCSUELO"/>');
	$scope.filtro_msg('<sinta sarr="RED_THINK_CLIENT:ATRIL"/>');*/
        //$scope.filtro_msg('<sinta sarr="ESPERA:STOP"/>');
        //$scope.filtro_msg('<sinta sarr="SISTEMA:MENU:MOSTRAR"/>');
        //$scope.filtro_msg('<sinta sarr="SISTEMA:ESPERA:STOP"/>');
        //$scope.filtro_msg('<sinta sarr="DVD:ON"/>');
	//$scope.filtro_msg('<sinta sarr="DVD:OFF"/>');
	//$scope.filtro_msg('<sinta sarr="DVD:ACTIVAR"/>');
	//$scope.filtro_msg('<sinta sarr="DVD:PARAR"/>');
	//$scope.filtro_msg('<sinta sarr="DVD:PAUSA"/>');
	//$scope.filtro_msg('<sinta sarr="DVD:AVANZAR"/>');
	//$scope.filtro_msg('<sinta sarr="DVD:RETROCEDER"/>');
	//$scope.filtro_msg('<sinta sarr="DVD:MENU_PANTALLA"/>');
	//$scope.filtro_msg('<sinta sarr="DVD:RSTEP"/>');
	//$scope.filtro_msg('<sinta sarr="DVD:FSTEP"/>');
	/*$scope.filtro_msg('<sinta sarr="DVD:NORTE"/>');
	$scope.filtro_msg('<sinta sarr="DVD:SUR"/>');
	$scope.filtro_msg('<sinta sarr="DVD:OESTE"/>');
	$scope.filtro_msg('<sinta sarr="DVD:ESTE"/>');
	$scope.filtro_msg('<sinta sarr="DVD:ACEPTAR"/>');
        $scope.filtro_msg('<sinta sarr="DVD:VOLUMEN:100"/>');*/
        //$scope.filtro_msg('<sinta sarr="ERROR:Errore bat gertatu da"/>');
        //$scope.filtro_msg('<sinta sarr="ERROR:bi"/>');
        //$scope.filtro_msg('<sinta sarr="MENU:LLAMARCOLGAR"/>');
        //$scope.filtro_msg('<sinta sarr="ALERT:X:OK"/>');        
        //simulando_sonido($scope);
        //simulando_argiak($scope);
        //simulando_deitu_eskegi($scope);
        //simulando_camara_documentos($scope);
        //simulando_sistema($scope);        
    }
    ,500);
}
/*function timeout_sarr($scope){
    $scope.filtro_msg('<sinta sarr="PIZARRA_DIGITAL:ON"/>');    
}*/
function simulando_sonido($scope){
    $scope.filtro_msg('<sinta sarr="MICROFONO:1:ON"/>');
    //$scope.filtro_msg('<sinta sarr="MICROFONO:1:OFF"/>');
	$scope.filtro_msg('<sinta sarr="MICROFONO:1:VOLUMEN:20"/>');
	$scope.filtro_msg('<sinta sarr="MICROFONO:2:ON"/>');
	$scope.filtro_msg('<sinta sarr="MICROFONO:2:OFF"/>');
	$scope.filtro_msg('<sinta sarr="MICROFONO:2:VOLUMEN:40"/>');
	$scope.filtro_msg('<sinta sarr="MICROFONO:3:OFF"/>');	
        $scope.filtro_msg('<sinta sarr="MICROFONO:3:ON"/>');
	$scope.filtro_msg('<sinta sarr="MICROFONO:3:VOLUMEN:50"/>');
	$scope.filtro_msg('<sinta sarr="MICROFONO:4:ON"/>');
	//$scope.filtro_msg('<sinta sarr="MICROFONO:4:OFF"/>');
	$scope.filtro_msg('<sinta sarr="MICROFONO:4:VOLUMEN:60"/>');
	$scope.filtro_msg('<sinta sarr="MICROFONO:5:ON"/>');
	$scope.filtro_msg('<sinta sarr="MICROFONO:5:OFF"/>');
	$scope.filtro_msg('<sinta sarr="MICROFONO:5:VOLUMEN:80"/>');
	//$scope.filtro_msg('<sinta sarr="MICROFONO:6:ON"/>');
	$scope.filtro_msg('<sinta sarr="MICROFONO:6:OFF"/>');
	$scope.filtro_msg('<sinta sarr="MICROFONO:6:VOLUMEN:90"/>');
        //
        $scope.filtro_msg('<sinta sarr="SONIDO:VOLUMEN:90"/>');
        $scope.filtro_msg('<sinta sarr="SONIDO:ENTRANTE:OFF"/>');
        $scope.filtro_msg('<sinta sarr="SONIDO:ENTRANTE:ON"/>');
        $scope.filtro_msg('<sinta sarr="SONIDO:SALIENTE:OFF"/>');
        $scope.filtro_msg('<sinta sarr="SONIDO:SALIENTE:ON"/>');
        $scope.filtro_msg('<sinta sarr="SONIDO:GENERAL:ON"/>');
        $scope.filtro_msg('<sinta sarr="SONIDO:GENERAL:OFF"/>');
        $scope.filtro_msg('<sinta sarr="MICROFONO:7:ON"/>');
	$scope.filtro_msg('<sinta sarr="MICROFONO:7:OFF"/>');
	$scope.filtro_msg('<sinta sarr="MICROFONO:7:VOLUMEN:90"/>');
        $scope.filtro_msg('<sinta sarr="MICROFONO:12:ON"/>');
	//$scope.filtro_msg('<sinta sarr="MICROFONO:12:OFF"/>');
	$scope.filtro_msg('<sinta sarr="MICROFONO:12:VOLUMEN:100"/>');
}
function simulando_argiak($scope){
                /*$scope.filtro_msg('<sinta sarr="LUZ:TECHO:ON"/>');
		$scope.filtro_msg('<sinta sarr="LUZ:TECHO:OFF"/>');
		$scope.filtro_msg('<sinta sarr="LUZ:SUELO:ON"/>');
		$scope.filtro_msg('<sinta sarr="LUZ:SUELO:OFF"/>');
		$scope.filtro_msg('<sinta sarr="LUZ:ENCENDER_TODAS"/>');
		$scope.filtro_msg('<sinta sarr="LUZ:APAGAR_TODAS"/>');*/
		$scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:ON"/>');
		$scope.filtro_msg('<sinta sarr="LUZ:TECHO:PASILLO:ON"/>');
		$scope.filtro_msg('<sinta sarr="LUZ:TECHO:ALUMNOS:ON"/>');
		$scope.filtro_msg('<sinta sarr="LUZ:SUELO:PASILLO:ON"/>');
		$scope.filtro_msg('<sinta sarr="LUZ:SUELO:ALUMNOS:ON"/>');
		//$scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:OFF"/>');
		//$scope.filtro_msg('<sinta sarr="LUZ:TECHO:PASILLO:OFF"/>');
		//$scope.filtro_msg('<sinta sarr="LUZ:TECHO:ALUMNOS:OFF"/>');
		//$scope.filtro_msg('<sinta sarr="LUZ:SUELO:PASILLO:OFF"/>');
		//$scope.filtro_msg('<sinta sarr="LUZ:SUELO:ALUMNOS:OFF"/>');
                $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:20"/>');
                $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PASILLO:40"/>');
		$scope.filtro_msg('<sinta sarr="LUZ:TECHO:ALUMNOS:70"/>');
		$scope.filtro_msg('<sinta sarr="LUZ:SUELO:PASILLO:90"/>');
		$scope.filtro_msg('<sinta sarr="LUZ:SUELO:ALUMNOS:100"/>');
}
function simulando_deitu_eskegi($scope){
    $scope.filtro_msg('<sinta sarr="VIDEOCONFERENCIA:MARCADO:123"/>');
    $scope.filtro_msg('<sinta sarr="VIDEOCONFERENCIA:CONTACTOS:LISTA:bat=0,bi=0,hiru=0,lau=1,bost=0,sei=0,zazpi=0,zortzi=0,betzi=0,hamar=0"/>');
    $scope.filtro_msg('<sinta sarr="VIDEOCONFERENCIA:ANCHO_DE_BANDA:LISTA:28=0,64=0,200=0,300=0,360=1,500=0,620=0,700=0,820=0,900=0"/>');
    //$scope.filtro_msg('<sinta sarr="VIDEOCONFERENCIA:ANCHO_DE_BANDA:200"/>');
    $scope.filtro_msg('<sinta sarr="VIDEOCONFERENCIA:LLAMADAS:LISTA:DIOCE=0,LOOPBACK 1=0,LOOPBACK 2=0,MIGUEL ALTUNA=0,POLYCOM AUSTIN STEREO=1,POLYCOM AUSTIN USA=0,POLYCOM AUSTIN USA IP=0,POLYCOM AUSTRALIA=0,POLYCOM BRAZIL=0,POLYCOM EUROPE=0,POLYCOM HONG KONG=0,POLYCOM JAPAN=0,POLYCOM JAPAN=0,POLYCOM MEXICO=0,POLYCOM MILPITAS LOBBY=0,POLYCOM PERU=0,POLYCOM SOUTHERN EUROPE=0"/>');
    //$scope.filtro_msg('<sinta sarr="VIDEOCONFERENCIA:CONTACTOS:SEL:bost"/>');
    //$scope.filtro_msg('<sinta sarr="VIDEOCONFERENCIA:CONTACTOS:DESEL:bost"/>');
    $scope.filtro_msg('<sinta sarr="VIDEOCONFERENCIA:CONTACTOS:DESEL:lau"/>');
    //$scope.filtro_msg('<sinta sarr="VIDEOCONFERENCIA:ANCHO_DE_BANDA:SEL:200"/>');
    //$scope.filtro_msg('<sinta sarr="VIDEOCONFERENCIA:ANCHO_DE_BANDA:DESEL:200"/>');
    $scope.filtro_msg('<sinta sarr="VIDEOCONFERENCIA:ANCHO_DE_BANDA:DESEL:360"/>');
    //$scope.filtro_msg('<sinta sarr="VIDEOCONFERENCIA:LLAMADAS:SEL:MIGUEL ALTUNA"/>');
    //$scope.filtro_msg('<sinta sarr="VIDEOCONFERENCIA:LLAMADAS:DESEL:MIGUEL ALTUNA"/>');
    $scope.filtro_msg('<sinta sarr="VIDEOCONFERENCIA:LLAMADAS:DESEL:POLYCOM AUSTIN STEREO"/>');
    //$scope.filtro_msg('<sinta sarr="VIDEOCONFERENCIA:CONTACTOS:VACIAR"/>');
    //$scope.filtro_msg('<sinta sarr="VIDEOCONFERENCIA:ANCHO_DE_BANDA:VACIAR"/>');
    //$scope.filtro_msg('<sinta sarr="VIDEOCONFERENCIA:LLAMADAS:VACIAR"/>');
    $scope.filtro_msg('<sinta sarr="VIDEOCONFERENCIA:NO_INTERRUMPIR:ALLOCATED"/>');
    $scope.filtro_msg('<sinta sarr="VIDEOCONFERENCIA:NO_INTERRUMPIR:AUTOANSWER"/>');
    $scope.filtro_msg('<sinta sarr="VIDEOCONFERENCIA:SONIDO_CONTRAPARTE:VOLUMEN:100"/>');
    $scope.filtro_msg('<sinta sarr="VIDEOCONFERENCIA:NUESTRO_SONIDO:ON"/>');
    $scope.filtro_msg('<sinta sarr="VIDEOCONFERENCIA:NUESTRO_SONIDO:OFF"/>');
    //$scope.filtro_msg('<sinta sarr="VIDEOCONFERENCIA:BORRAR"/>');
    $scope.filtro_msg('<sinta sarr="VIDEOCONFERENCIA:GRAFICOS"/>');
    $scope.filtro_msg('<sinta sarr="VIDEOCONFERENCIA:GRAFICOS:OFF"/>');
}
function simulando_camara_documentos($scope){
    $scope.filtro_msg('<sinta sarr="CAMARADOC:ON"/>');  
    $scope.filtro_msg('<sinta sarr="CAMARADOC:OFF"/>');
    $scope.filtro_msg('<sinta sarr="CAMARADOC:DINA_A3"/>');
    $scope.filtro_msg('<sinta sarr="CAMARADOC:DINA_A4"/>');
}
function simulando_sistema($scope){
    $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:NO_MUTE"/>');
	$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:ON"/>');
	$scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:PC_SUELO"/>');
	$scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA"/>');
	$scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA"/>');
	$scope.filtro_msg('<sinta sarr="SISTEMA:MENU:MOSTRAR"/>');
	$scope.filtro_msg('<sinta sarr="SISTEMA:MENU:VIDEOCONFERENCIA:FALSE"/>');
        //$scope.filtro_msg('<sinta sarr="SISTEMA:MENU:OCULTAR"/>');
        //$scope.filtro_msg('<sinta sarr="SISTEMA:MENU:VIDEOCONFERENCIA:TRUE"/>');
}
function simulando_log($scope,$timeout){
    //<sinta case="SISTEMA:ESTADO"/>
    //$scope.filtro_msg('<sinta sarr="MENU:SONIDO" />');
    //<sinta case="MENU:LUCES"/>
    //simulando_log_luces_timeout($scope,$timeout);
    //<sinta case="MENU:SONIDO"/>
    //simulando_log_sonido_timeout($scope,$timeout);
    //<sinta case="MENU:LUCES"/>
    simulando_log_luces_timeout2($scope,$timeout);    
    //<sinta case="MENU:SONIDO"/>
    //simulando_log_sonido_timeout2($scope,$timeout);
    //<sinta case="MENU:PRINCIPAL"/>
    //simulando_log_pantalla_electrica($scope,$timeout);
    //simulando_log_pantalla_electrica2($scope,$timeout);
    //simulando_log_sonido_timeout4($scope,$timeout);
    //simulando_log_pantalla_electrica4($scope,$timeout);
    //simulando_log_sonido_timeout5($scope,$timeout);
    //simulando_log_pantalla_electrica5($scope,$timeout);
}
function simulando_log_luces_timeout($scope,$timeout){
    $scope.filtro_msg('<sinta sarr="MENU:LUCES" />');
    $scope.filtro_msg('<sinta sarr="MENU:LUCES" />');    
    $timeout(
    function(){
        $scope.filtro_msg('<sinta sarr="LUZ:SUELO:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:SUELO:ALUMNOS:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:SUELO:PASILLO:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:SUELO:ALUMNOS:50" />');
        $scope.filtro_msg('<sinta sarr="LUZ:SUELO:PASILLO:50" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:ALUMNOS:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PASILLO:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:ALUMNOS:100" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PASILLO:100" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:100" />');
    },500);
}
function simulando_log_sonido_timeout($scope,$timeout){
    $scope.filtro_msg('<sinta sarr="MENU:SONIDO" />');
    $timeout(
    function(){
        $scope.filtro_msg('<sinta sarr="MICROFONO:1:VOLUMEN:0" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:1:ON" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:2:VOLUMEN:0" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:2:OFF" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:3:VOLUMEN:0" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:3:OFF" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:4:VOLUMEN:0" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:4:OFF" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:5:VOLUMEN:0" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:5:OFF" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:6:VOLUMEN:0" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:6:OFF" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:1:VOLUMEN" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:1:ON" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:2:VOLUMEN" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:2:ON" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:3:VOLUMEN" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:3:ON" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:4:VOLUMEN" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:4:ON" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:5:VOLUMEN" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:5:ON" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:6:VOLUMEN" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:6:ON" />');
        $scope.filtro_msg('<sinta sarr="SONIDO:ENTRANTE:ON" />');
        $scope.filtro_msg('<sinta sarr="SONIDO:SALIENTE:ON" />');
        $scope.filtro_msg('<sinta sarr="SONIDO:GENERAL:ON" />');
        $scope.filtro_msg('<sinta sarr="SONIDO:VOLUMEN:100" />');
        $scope.filtro_msg('<sinta sarr="MENU:SONIDO" />');
    },500);
}
function simulando_log_luces_timeout2($scope,$timeout){
    $scope.filtro_msg('<sinta sarr="MENU:LUCES" />');
    $scope.filtro_msg('<sinta sarr="MENU:LUCES" />');
    $timeout(
    function(){
        $scope.filtro_msg('<sinta sarr="LUZ:SUELO:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:SUELO:ALUMNOS:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:SUELO:PASILLO:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:SUELO:ALUMNOS:50" />');
        $scope.filtro_msg('<sinta sarr="LUZ:SUELO:PASILLO:50" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:ALUMNOS:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PASILLO:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:ALUMNOS:100" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PASILLO:100" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:100" />');
        ////<sinta case="LUZ:TECHO:PRESI_APAGAR"/>
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:-55" />');    
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:OFF" />');
        //<sinta case="LUZ:TECHO:PRESI_ENCENDER"/>
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:100" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:ON" />');
        //<sinta case="LUZ:TECHO:PRESI_BAJAR"/>
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:100" />');
        //<sinta case="LUZ:TECHO:PRESI_BAJAR"/>
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:90" />');
        //<sinta case="LUZ:TECHO:PRESI_BAJAR"/>
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:80" />');
        //<sinta case="LUZ:TECHO:PRESI_BAJAR"/>
        //<sinta case="LUZ:TECHO:PRESI_BAJAR"/>
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:70" />');
        //<sinta case="LUZ:TECHO:PRESI_BAJAR"/>
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:60" />');
        //<sinta case="LUZ:TECHO:PRESI_BAJAR"/>
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:50" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:40" />');
        //<sinta case="LUZ:TECHO:PRESI_BAJAR"/>
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:30" />');
        //<sinta case="LUZ:TECHO:PRESI_BAJAR"/>
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:20" />');
        //<sinta case="LUZ:TECHO:PRESI_SUBIR"/>
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:20" />');
        //<sinta case="LUZ:TECHO:PRESI_SUBIR"/>
        //<sinta case="LUZ:TECHO:PRESI_SUBIR"/>
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:30" />');
        //<sinta case="LUZ:TECHO:PRESI_SUBIR"/>
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:40" />');
        //<sinta case="LUZ:TECHO:PRESI_SUBIR"/>
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:50" />');
        //<sinta case="LUZ:TECHO:PRESI_SUBIR"/>
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:60" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:70" />');
        $scope.filtro_msg('<sinta sarr="MENU:LUCES" />');
        //
        $scope.filtro_msg('<sinta sarr="LUZ:SUELO:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:SUELO:ALUMNOS:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:SUELO:PASILLO:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:SUELO:ALUMNOS:50" />');
        $scope.filtro_msg('<sinta sarr="LUZ:SUELO:PASILLO:50" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:ALUMNOS:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PASILLO:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:ALUMNOS:100" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PASILLO:100" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:80" />');
        $scope.filtro_msg('<sinta sarr="SISTEMA:MENU:MOSTRAR" />');
        $scope.filtro_msg('<sinta sarr="SISTEMA:MENU:VIDEOCONFERENCIA:FALSE" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:70" />');
        $scope.filtro_msg('<sinta sarr="MENU:LUCES" />');
        $scope.filtro_msg('<sinta sarr="LUZ:SUELO:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:SUELO:ALUMNOS:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:SUELO:PASILLO:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:SUELO:ALUMNOS:50" />');
        $scope.filtro_msg('<sinta sarr="LUZ:SUELO:PASILLO:50" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:ALUMNOS:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PASILLO:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:ON" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:ALUMNOS:100" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PASILLO:100" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:80" />');
        $scope.filtro_msg('<sinta sarr="SISTEMA:MENU:MOSTRAR" />');
        $scope.filtro_msg('<sinta sarr="SISTEMA:MENU:VIDEOCONFERENCIA:FALSE" />');
        //
        //<sinta case="LUZ:TECHO:PRESI_BAJAR"/>
        //<sinta case="LUZ:TECHO:PRESI_BAJAR"/>
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:70" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:60" />');
        //<sinta case="LUZ:TECHO:PRESI_BAJAR"/>
        //<sinta case="LUZ:TECHO:PRESI_BAJAR"/>
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:50" />');
        $scope.filtro_msg('<sinta sarr="LUZ:TECHO:PRESI:40" />');
    },500);
}
function simulando_log_sonido_timeout2($scope,$timeout){
    $scope.filtro_msg('<sinta sarr="MENU:SONIDO" />');
    $timeout(
    function(){
        $scope.filtro_msg('<sinta sarr="MICROFONO:1:VOLUMEN:0" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:1:OFF" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:2:VOLUMEN:0" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:2:OFF" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:3:VOLUMEN:0" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:3:OFF" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:4:VOLUMEN:0" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:4:OFF" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:5:VOLUMEN:0" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:5:OFF" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:6:VOLUMEN:0" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:6:OFF" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:1:VOLUMEN" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:1:ON" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:2:VOLUMEN" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:2:ON" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:3:VOLUMEN" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:3:ON" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:4:VOLUMEN" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:4:ON" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:5:VOLUMEN" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:5:ON" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:6:VOLUMEN" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:6:ON" />');
        $scope.filtro_msg('<sinta sarr="SONIDO:ENTRANTE:ON" />');
        $scope.filtro_msg('<sinta sarr="SONIDO:SALIENTE:ON" />');
        $scope.filtro_msg('<sinta sarr="SONIDO:GENERAL:ON" />');
        $scope.filtro_msg('<sinta sarr="SONIDO:VOLUMEN:100" />');
        $scope.filtro_msg('<sinta sarr="MENU:SONIDO" />');
        //<sinta case="SONIDO:SUBIR_VOLUMEN"/>
        $scope.filtro_msg('<sinta sarr="SONIDO:VOLUMEN:100" />');
        //<sinta case="SONIDO:SUBIR_VOLUMEN"/>
        $scope.filtro_msg('<sinta sarr="SONIDO:VOLUMEN:100" />');
        //<sinta case="SONIDO:BAJAR_VOLUMEN"/>
        //<sinta case="SONIDO:BAJAR_VOLUMEN"/>
        $scope.filtro_msg('<sinta sarr="SONIDO:VOLUMEN:91.6666666667" />');
        //<sinta case="SONIDO:BAJAR_VOLUMEN"/>
        $scope.filtro_msg('<sinta sarr="SONIDO:VOLUMEN:83.3333333333" />');
        //<sinta case="SONIDO:BAJAR_VOLUMEN"/>
        $scope.filtro_msg('<sinta sarr="SONIDO:VOLUMEN:75" />');
        //<sinta case="SONIDO:BAJAR_VOLUMEN"/>
        $scope.filtro_msg('<sinta sarr="SONIDO:VOLUMEN:66.6666666667" />');
        //<sinta case="SONIDO:BAJAR_VOLUMEN"/>
        $scope.filtro_msg('<sinta sarr="SONIDO:VOLUMEN:58.3333333333" />');
        $scope.filtro_msg('<sinta sarr="SONIDO:VOLUMEN:50" />');
        //<sinta case="SONIDO:SUBIR_VOLUMEN"/>
        $scope.filtro_msg('<sinta sarr="SONIDO:VOLUMEN:58.3333333333" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:1:VOLUMEN:41.6666666667" />');
        //<sinta case="SONIDO:SUBIR_VOLUMEN"/>
        //<sinta case="SONIDO:SUBIR_VOLUMEN"/>
        //<sinta case="SONIDO:SUBIR_VOLUMEN"/>
        $scope.filtro_msg('<sinta sarr="MICROFONO:1:VOLUMEN:33.3333333333" />');
        $scope.filtro_msg('<sinta sarr="SONIDO:VOLUMEN:66.6666666667" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:1:VOLUMEN:41.6666666667" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:1:VOLUMEN:50" />');
        //<sinta case="SONIDO:SUBIR_VOLUMEN"/>
        $scope.filtro_msg('<sinta sarr="SONIDO:VOLUMEN:75" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:1:VOLUMEN:58.3333333333" />');
        //<sinta case="SONIDO:SUBIR_VOLUMEN"/>
        $scope.filtro_msg('<sinta sarr="MICROFONO:1:VOLUMEN:66.6666666667" />');
        $scope.filtro_msg('<sinta sarr="SONIDO:VOLUMEN:83.3333333333" />');
        $scope.filtro_msg('<sinta sarr="SONIDO:VOLUMEN:91.6666666667" />');
        $scope.filtro_msg('<sinta sarr="SONIDO:VOLUMEN:100" />');
    },500);
}
function simulando_log_pantalla_electrica($scope,$timeout){
    $scope.filtro_msg('<sinta sarr="MENU:PRINCIPAL" />');
    $scope.filtro_msg('<sinta sarr="MENU:PRINCIPAL" />');
    //<sinta case="DISPOSITIVO:PANTALLA_ELECTRICA"/>');
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:PANTALLA_ELECTRICA" />');
    $timeout(
    function(){
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:NO_MUTE" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:ON" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:PC_SUELO" />');
        $scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA" />');
        $scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA" />');
        $scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA" />');
        $scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:NO_MUTE" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:ON" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:PC_SUELO" />');
        //<sinta case="PROYECTOR_CENTRAL:MUTEAR"/>
        //<sinta case="PROYECTOR_CENTRAL:MUTEAR"/>
        //<sinta case="PROYECTOR_CENTRAL:MUTEAR"/>
        //<sinta case="PROYECTOR_CENTRAL:MUTEAR"/>
        //<sinta case="PROYECTOR_CENTRAL:MUTEAR"/> 
    },500);
}
function simulando_log_pantalla_electrica2($scope,$timeout){
    //<sinta case="MENU:PRINCIPAL"/>
    $scope.filtro_msg('<sinta sarr="MENU:PRINCIPAL" />');
    $scope.filtro_msg('<sinta sarr="MENU:PRINCIPAL" />');
    //<sinta case="DISPOSITIVO:PANTALLA_ELECTRICA"/>');
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:PANTALLA_ELECTRICA" />');        
    $timeout(
    function(){
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:NO_MUTE" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:ON" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:PC_SUELO" />');
        $scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA" />');
        $scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA" />');
        $scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA" />');
        $scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:NO_MUTE" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:ON" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:PC_SUELO" />');
    },500);
}
function simulando_log_sonido_timeout4($scope,$timeout){
    //<sinta case="MENU:SONIDO"/>
    //<sinta case="SONIDO:SUBIR_VOLUMEN"/>
    $scope.filtro_msg('<sinta sarr="MENU:SONIDO" />');        
    $timeout(
    function(){
        $scope.filtro_msg('<sinta sarr="MICROFONO:1:VOLUMEN:0" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:1:OFF" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:2:VOLUMEN:0" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:2:OFF" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:3:VOLUMEN:0" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:3:OFF" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:4:VOLUMEN:0" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:4:OFF" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:5:VOLUMEN:0" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:5:OFF" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:6:VOLUMEN:0" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:6:OFF" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:1:VOLUMEN" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:1:ON" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:2:VOLUMEN" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:2:ON" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:3:VOLUMEN" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:3:ON" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:4:VOLUMEN" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:4:ON" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:5:VOLUMEN" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:5:ON" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:6:VOLUMEN" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:6:ON" />');
        $scope.filtro_msg('<sinta sarr="SONIDO:ENTRANTE:ON" />');
        $scope.filtro_msg('<sinta sarr="SONIDO:SALIENTE:ON" />');
        $scope.filtro_msg('<sinta sarr="SONIDO:GENERAL:ON" />');
        $scope.filtro_msg('<sinta sarr="SONIDO:VOLUMEN:100" />');
        $scope.filtro_msg('<sinta sarr="MENU:SONIDO" />');
        $scope.filtro_msg('<sinta sarr="SONIDO:VOLUMEN:100" />');

    },500);
}
function simulando_log_pantalla_electrica4($scope,$timeout){
    //<sinta case="MENU:PRINCIPAL"/>
    $scope.filtro_msg('<sinta sarr="MENU:PRINCIPAL" />');
    $scope.filtro_msg('<sinta sarr="MENU:PRINCIPAL" />');
    //<sinta case="DISPOSITIVO:PANTALLA_ELECTRICA"/>');
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:PANTALLA_ELECTRICA" />');        
    $timeout(
    function(){
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:NO_MUTE" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:ON" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:PC_SUELO" />');
        $scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA" />');
        $scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA" />');
        $scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA" />');
        $scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:NO_MUTE" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:ON" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:PC_SUELO" />');
        //<sinta case="PROYECTOR_CENTRAL:MUTEAR"/>
    },500);
}
function simulando_log_sonido_timeout5($scope,$timeout){
    //<sinta case="MENU:SONIDO"/>
    //<sinta case="SONIDO:SUBIR_VOLUMEN"/>
    $scope.filtro_msg('<sinta sarr="MENU:SONIDO" />');        
    $timeout(
    function(){        
        $scope.filtro_msg('<sinta sarr="MICROFONO:1:VOLUMEN:0" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:1:OFF" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:2:VOLUMEN:0" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:2:OFF" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:3:VOLUMEN:0" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:3:OFF" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:4:VOLUMEN:0" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:4:OFF" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:5:VOLUMEN:0" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:5:OFF" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:6:VOLUMEN:0" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:6:OFF" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:1:VOLUMEN" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:1:ON" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:2:VOLUMEN" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:2:ON" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:3:VOLUMEN" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:3:ON" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:4:VOLUMEN" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:4:ON" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:5:VOLUMEN" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:5:ON" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:6:VOLUMEN" />');
        $scope.filtro_msg('<sinta sarr="MICROFONO:6:ON" />');
        $scope.filtro_msg('<sinta sarr="SONIDO:ENTRANTE:ON" />');
        $scope.filtro_msg('<sinta sarr="SONIDO:SALIENTE:ON" />');
        $scope.filtro_msg('<sinta sarr="SONIDO:GENERAL:ON" />');
        $scope.filtro_msg('<sinta sarr="SONIDO:VOLUMEN:100" />');
        $scope.filtro_msg('<sinta sarr="MENU:SONIDO" />');
        $scope.filtro_msg('<sinta sarr="SONIDO:VOLUMEN:100" />');
    },500);
}
function simulando_log_pantalla_electrica5($scope,$timeout){
    //'<sinta case="MENU:PRINCIPAL"/>
    //<sinta case="DISPOSITIVO:PANTALLA_ELECTRICA"/>
    $scope.filtro_msg('<sinta sarr="MENU:PRINCIPAL" />');
    $scope.filtro_msg('<sinta sarr="MENU:PRINCIPAL" />');
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:PANTALLA_ELECTRICA" />');            
    $timeout(
    function(){
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:NO_MUTE" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:ON" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:PC_SUELO" />');
        $scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA" />');
        $scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA" />');
        $scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA" />');
        $scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:NO_MUTE" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:ON" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:PC_SUELO" />');
    },500);
}
function simulando_log2($scope,$timeout){
    //simulando_log2_sistema($scope,$timeout);
    //simulando_log2_plasma($scope,$timeout);
    //simulando_log2_pantalla_electrica($scope,$timeout);
    simulando_log2_pizarra_digital($scope,$timeout);  
}
function simulando_log2_sistema($scope,$timeout){
    //<sinta case="SISTEMA:ESTADO"/>
    $scope.filtro_msg('<sinta sarr="MENU:PRINCIPAL" />');
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:PANTALLA_ELECTRICA" />');
    $timeout(
    function(){
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:NO_MUTE" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:ON" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:PC_SUELO" />');
        $scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA" />');
        $scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA" />');
        $scope.filtro_msg('<sinta sarr="SISTEMA:MENU:MOSTRAR" />');
        $scope.filtro_msg('<sinta sarr="SISTEMA:MENU:VIDEOCONFERENCIA:FALSE" />');
    },500);    
}
function simulando_log2_plasma($scope,$timeout){
    //<sinta case="MENU:PRINCIPAL"/>
    $scope.filtro_msg('<sinta sarr="MENU:PRINCIPAL" />');
    $scope.filtro_msg('<sinta sarr="MENU:PRINCIPAL" />');
    //<sinta case="DISPOSITIVO:PLASMA"/>');
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:PLASMA" />');
    $timeout(
    function(){
        $scope.filtro_msg('<sinta sarr="PLASMA:ON" />');
        $scope.filtro_msg('<sinta sarr="PLASMA" />');
        $scope.filtro_msg('<sinta sarr="PLASMA:ON" />');
        $scope.filtro_msg('<sinta sarr="PLASMA" />');    
    },500);    
}
function simulando_log2_pantalla_electrica($scope,$timeout){
    //<sinta case="DISPOSITIVO:PANTALLA_ELECTRICA"/>
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:PANTALLA_ELECTRICA" />');        
    $timeout(
    function(){
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:NO_MUTE" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:ON" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:PC_SUELO" />');
        $scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA" />');
        $scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA" />');
        $scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA" />');
        $scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:NO_MUTE" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:ON" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:PC_SUELO" />');
    },500);
}
function simulando_log2_pizarra_digital($scope,$timeout){
    //<sinta case="PROYECTOR_CENTRAL:DVD"/>
    //<sinta case="PROYECTOR_CENTRAL:PCSUELO"/>
    //<sinta case="DISPOSITIVO:PIZARRA_DIGITAL"/>
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:PIZARRA_DIGITAL" />');       
    $timeout(
    function(){
        $scope.filtro_msg('<sinta sarr="PIZARRA_DIGITAL:NO_MUTE" />');
        $scope.filtro_msg('<sinta sarr="PIZARRA_DIGITAL:ON" />');
        $scope.filtro_msg('<sinta sarr="PIZARRA_DIGITAL:PC_SUELO" />');
        $scope.filtro_msg('<sinta sarr="PIZARRA_DIGITAL:NO_MUTE" />');
        $scope.filtro_msg('<sinta sarr="PIZARRA_DIGITAL:ON" />');
        $scope.filtro_msg('<sinta sarr="PIZARRA_DIGITAL:PC_SUELO" />');
        //<sinta case="PIZARRA_DIGITAL:MUTEAR"/>
    },500);
}
function simulando_log4($scope,$timeout){
    //<sinta case="SISTEMA:ESTADO"/>    
    simulando_log4_pantalla_electrica($scope,$timeout);
}
function simulando_log4_pantalla_electrica($scope,$timeout){
    $scope.filtro_msg('<sinta sarr="MENU:PRINCIPAL" />');
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:PANTALLA_ELECTRICA" />');
    $timeout(
    function(){
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:NO_MUTE" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:ON" />');
        $scope.filtro_msg('<sinta sarr="PROYECTOR_CENTRAL:PC_SUELO" />');
        $scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA" />');
        $scope.filtro_msg('<sinta sarr="PANTALLA_ELECTRICA:BAJADA" />');
        $scope.filtro_msg('<sinta sarr="SISTEMA:MENU:MOSTRAR" />');
        $scope.filtro_msg('<sinta sarr="SISTEMA:MENU:VIDEOCONFERENCIA:FALSE" />');
    },500);
}
function simulando_sistema_iniciar($scope){
    $scope.filtro_msg('<sinta sarr="SISTEMA:MENU:OCULTAR"/>');
    $scope.filtro_msg('<sinta sarr="SISTEMA:ON"/>');
    $scope.filtro_msg('<sinta sarr="MENU:ESCENARIOS"/>');
    //$scope.filtro_msg('<sinta sarr="SISTEMA:MENU:MOSTRAR"/>');
    //$scope.filtro_msg('<sinta sarr="MENU:SONIDO"/>');
    //$scope.filtro_msg('<sinta sarr="SISTEMA:ESPERA:esperando"/>');
}
function simulando_press($scope,$timeout){
    //$scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:PRESS:id_button_ongi_etorri_frogatu"/>');
    //$scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:PRESS:id_button_ongi_etorri_sistema"/>');
    //$scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:PRESS:id_button_hasiera_hitzaldia"/>');
    //$scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:PRESS:id_button_hasiera_bilera"/>');
    //$scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:PRESS:id_button_hasiera_filma"/>');
    //$scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:PRESS:id_button_hasiera_klaseak_bidali"/>');
    //$scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:PRESS:id_button_hasiera_klaseak_jaso"/>');
    //$scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:PRESS:id_button_nagusia_grabazioa_bolumena_ken"/>');
    //$scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:PRESS:id_button_nagusia_grabazioa_bolumena_gehi"/>');
    //$scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:PRESS:id_button_nagusia_tb_kanal_ken"/>');
    //$scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:PRESS:id_button_nagusia_tb_kanal_gehi"/>');
    //$scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:PRESS:id_button_nagusia_grabazioa_source"/>');
    //$scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:PRESS:id_button_nagusia_grabazioa_grabatu"/>');
    $scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:PRESS:id_button_nagusia_grabazioa_grabazioa_gelditu"/>');
    $timeout(
    function(){
        //$scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:RELEASE:id_button_ongi_etorri_frogatu"/>');
        //$scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:RELEASE:id_button_ongi_etorri_sistema"/>');
        //$scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:RELEASE:id_button_hasiera_hitzaldia"/>');
        //$scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:RELEASE:id_button_hasiera_bilera"/>');
        //$scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:RELEASE:id_button_hasiera_filma"/>');
        //$scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:RELEASE:id_button_hasiera_klaseak_bidali"/>');
        //$scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:RELEASE:id_button_hasiera_klaseak_jaso"/>');
        //$scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:RELEASE:id_button_nagusia_grabazioa_bolumena_ken"/>');
        //$scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:RELEASE:id_button_nagusia_grabazioa_bolumena_gehi"/>');
        //$scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:RELEASE:id_button_nagusia_tb_kanal_ken"/>');
        //$scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:RELEASE:id_button_nagusia_tb_kanal_gehi"/>');
        //$scope.filtro_msg('<sinta sarr="BUTTON:NORMAL:RELEASE:id_button_nagusia_grabazioa_source"/>');          
    },500);
}
function simulando_dvd($scope,$timeout){
    //$scope.filtro_msg('<sinta sarr="PIZARRA_DIGITAL:DVD" />');
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:DVD" />'); 
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:DVD" />');
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:DVD" />');    
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:DVD" />');    
        /*$scope.filtro_msg('<sinta sarr="DVD:ON" />');
        $scope.filtro_msg('<sinta sarr="DVD:ACTIVAR" />');
        $scope.filtro_msg('<sinta sarr="DVD:VOLUMEN:84" />');*/                 
    
    $timeout(
    function(){
        $scope.filtro_msg('<sinta sarr="DVD:ON" />');
        $scope.filtro_msg('<sinta sarr="DVD:ACTIVAR" />');
        $scope.filtro_msg('<sinta sarr="DVD:VOLUMEN:84" />');                
    },500);
}
function simulando_pizarra($scope,$timeout){
$scope.filtro_msg('<sinta sarr="DISPOSITIVO:PLASMA" />');    
$scope.filtro_msg('<sinta sarr="DISPOSITIVO:PLASMA" />');    
$scope.filtro_msg('<sinta sarr="DISPOSITIVO:PLASMA" />');    
$scope.filtro_msg('<sinta sarr="DISPOSITIVO:PLASMA" />');    
    $timeout(
    function(){
         $scope.filtro_msg('<sinta sarr="PLASMA:OFF" />');    
$scope.filtro_msg('<sinta sarr="PLASMA:OFF" />');    
$scope.filtro_msg('<sinta sarr="PLASMA:OFF" />');    
$scope.filtro_msg('<sinta sarr="PLASMA" />');    
$scope.filtro_msg('<sinta sarr="PLASMA:OFF" />');    
$scope.filtro_msg('<sinta sarr="PLASMA" />');    
$scope.filtro_msg('<sinta sarr="PLASMA" />');    
$scope.filtro_msg('<sinta sarr="PLASMA" />');    
$scope.filtro_msg('<sinta sarr="PLASMA:OFF" />');    
$scope.filtro_msg('<sinta sarr="PLASMA:OFF" />');    
$scope.filtro_msg('<sinta sarr="PLASMA" />');    
$scope.filtro_msg('<sinta sarr="PLASMA" />');    
$scope.filtro_msg('<sinta sarr="PLASMA:OFF" />');    
$scope.filtro_msg('<sinta sarr="PLASMA" />');    
$scope.filtro_msg('<sinta sarr="PLASMA:OFF" />');    
$scope.filtro_msg('<sinta sarr="PLASMA" />');    
    },500);
}
function simulando_cambio_pantalla($scope){
    //$scope.filtro_msg('<sinta sarr="MENU:ESCENARIOS"/>'); 
    //$scope.filtro_msg('<sinta sarr="MENU:PRINCIPAL"/>'); 
    //$scope.filtro_msg('<sinta sarr="MENU:LLAMARCOLGAR"/>'); 
    //$scope.filtro_msg('<sinta sarr="MENU:SONIDO"/>'); 
    //$scope.filtro_msg('<sinta sarr="MENU:LUCES"/>'); 
    //$scope.filtro_msg('<sinta sarr="MENU:APAGAR"/>'); 
    //$scope.filtro_msg('<sinta sarr="MENU:INICIO"/>');
    //$scope.filtro_msg('<sinta sarr="DISPOSITIVO:CAMARA_1"/>');
    //$scope.filtro_msg('<sinta sarr="DISPOSITIVO:CAMARA_2"/>');
    /*$scope.filtro_msg('<sinta sarr="DISPOSITIVO:CAMARA_3"/>');
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:PANTALLA_PRESIDENCIA"/>');
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:PANTALLA_ENTRADA"/>');
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:PIZARRA_DIGITAL"/>');
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:PROYECTOR_CENTRAL"/>'); 
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:PANTALLA_ELECTRICA"/>');
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:DVD"/>');
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:DVDGRAB"/>');
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:ORDENADOR_PRINCIPAL"/>');
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:PORTATIL1"/>');
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:PORTATIL2"/>');
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:PORTATIL3"/>');
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:PORTATIL4"/>');
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:CAMARA_DE_DOCUMENTOS"/>');
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:PLASMA"/>');
    $scope.filtro_msg('<sinta sarr="DISPOSITIVO:RED_THINK_CLIENT"/>');*/
    //$scope.filtro_msg('<sinta sarr="SISTEMA:BIENVENIDO"/>');
    //$scope.filtro_msg('<sinta sarr="CAMARA_1:TODAS_POSICIONES"/>');
    //$scope.filtro_msg('<sinta sarr="CAMARA_2:TODAS_POSICIONES"/>');
    //$scope.filtro_msg('<sinta sarr="CAMARA_3:TODAS_POSICIONES"/>');
    //$scope.filtro_msg('<sinta sarr="CAMARA_1:TODAS_POSICIONES:CANCELAR"/>');
    //$scope.filtro_msg('<sinta sarr="CAMARA_2:TODAS_POSICIONES:CANCELAR"/>');
    //$scope.filtro_msg('<sinta sarr="CAMARA_3:TODAS_POSICIONES:CANCELAR"/>');
}