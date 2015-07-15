angular.module('mezuak.controllers', [])

.controller('MezuakCtrl', function($scope,$funciones,$timeout) {
    $scope.$on('mezuak_button_mezuak_tratatu', function(event, args){
        //var mezu_v=args[0];
        //mezuak_button_mezuak_tratatu(mezu_v,$funciones,$timeout);
    });
})
function mezuak_button_mezuak_tratatu(mezu_v,$funciones,$timeout){
    if (mezu_v[1] == "POPUP_OK_NOK") {
			//_root.pSinta.buttonPopupOKNOKMezuakTratatu(mezu_v[2], targeta);
		} else {
                    	if (mezuak_is_button_pantalla(mezu_v)) {
				//botoia igual ez dago pantailan horregatik begiratzen da undefined ez izatea
				switch (mezu_v[1]) {
				case "NORMAL" :
                                        button_normal_mezuak_tratatu(mezu_v,$funciones,$timeout);
					break;
				/*case "APAGAR" :
					_root.pSinta.buttonApagarMezuakTratatu(mezu_v[2], targeta);
					break;
				case "POPUP_PROY" :
					_root.pSinta.buttonPopupProyMezuakTratatu(mezu_v[2], targeta);
					break;
				case "POPUP_OK_NOK" :
					_root.pSinta.buttonPopupOKNOKMezuakTratatu(mezu_v[2], targeta);
					break;
				case "LANG" :
					_root.pSinta.buttonLangMezuakTratatu(mezu_v[2], targeta);
					break;
				case "SINTA_INICIO" :
					_root.pSinta.buttonSinta_InicioMezuakTratatu(mezu_v[2], targeta);
					break;
				case "BAJAR_BTN" :
					_root.pSinta.buttonBajarBtnMezuakTratatu(mezu_v[2], targeta);
					break;
				case "SUBIR_BTN" :
					_root.pSinta.buttonSubirBtnMezuakTratatu(mezu_v[2], targeta);
					break;
				case "SHELL" :
					_root.pFeed.shellMezuakTratatu(mezu_v[2], targeta);
					break;
				case "COMPROBAR":
					_root.pFeed.buttonComprobarMezuakTratatu(mezu_v[2], targeta);
					break;*/
				default :
					break;
				}
			}
		}
}
function  button_normal_mezuak_tratatu(mezu_v,$funciones,$timeout){
    var ebentua=mezu_v[2];
    var id_button=mezu_v[3];
    switch (ebentua) {
		case "PRESS" :
                        $funciones.funciones_sakatua_utzi_id_button(id_button);
			break;
		case "RELEASE" :
                    	$funciones.funciones_efektua_sakatu_botoia_id_button(id_button,$funciones,$timeout);
			break;
		default :
			break;
		}
}
function mezuak_is_button_pantalla(mezu_v){
    //begiratu behar dena da botoia pantailan dagoen
    /*if(mezu_v[3]!=null){
        
    }*/
    return 1;
}