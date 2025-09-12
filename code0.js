gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.GDbot_95227o_9595iniciarObjects1= [];
gdjs.menuCode.GDbot_95227o_9595iniciarObjects2= [];
gdjs.menuCode.GDnome_9595do_9595jogoObjects1= [];
gdjs.menuCode.GDnome_9595do_9595jogoObjects2= [];
gdjs.menuCode.GDcoelho_9595rosaObjects1= [];
gdjs.menuCode.GDcoelho_9595rosaObjects2= [];
gdjs.menuCode.GDcoelho_9595vermelhoObjects1= [];
gdjs.menuCode.GDcoelho_9595vermelhoObjects2= [];
gdjs.menuCode.GDcoelho_9595laranjaObjects1= [];
gdjs.menuCode.GDcoelho_9595laranjaObjects2= [];
gdjs.menuCode.GDcoelho_9595verdeObjects1= [];
gdjs.menuCode.GDcoelho_9595verdeObjects2= [];
gdjs.menuCode.GDbunnyObjects1= [];
gdjs.menuCode.GDbunnyObjects2= [];
gdjs.menuCode.GDcoelho_9595amareloObjects1= [];
gdjs.menuCode.GDcoelho_9595amareloObjects2= [];
gdjs.menuCode.GDcoelho_9595roxoObjects1= [];
gdjs.menuCode.GDcoelho_9595roxoObjects2= [];
gdjs.menuCode.GDcoelho_9595azulObjects1= [];
gdjs.menuCode.GDcoelho_9595azulObjects2= [];
gdjs.menuCode.GDcoelhho_9595castanhoObjects1= [];
gdjs.menuCode.GDcoelhho_9595castanhoObjects2= [];
gdjs.menuCode.GDvidasObjects1= [];
gdjs.menuCode.GDvidasObjects2= [];
gdjs.menuCode.GDcontagem_9595de_9595moedas_9595textoObjects1= [];
gdjs.menuCode.GDcontagem_9595de_9595moedas_9595textoObjects2= [];
gdjs.menuCode.GDsolObjects1= [];
gdjs.menuCode.GDsolObjects2= [];
gdjs.menuCode.GDplayerObjects1= [];
gdjs.menuCode.GDplayerObjects2= [];
gdjs.menuCode.GDmoedaObjects1= [];
gdjs.menuCode.GDmoedaObjects2= [];
gdjs.menuCode.GDenemigoObjects1= [];
gdjs.menuCode.GDenemigoObjects2= [];
gdjs.menuCode.GDnuvemObjects1= [];
gdjs.menuCode.GDnuvemObjects2= [];
gdjs.menuCode.GDcobra_9595de_9595lavaObjects1= [];
gdjs.menuCode.GDcobra_9595de_9595lavaObjects2= [];
gdjs.menuCode.GDgoma_9595giganteObjects1= [];
gdjs.menuCode.GDgoma_9595giganteObjects2= [];
gdjs.menuCode.GDalienObjects1= [];
gdjs.menuCode.GDalienObjects2= [];
gdjs.menuCode.GDlimitesObjects1= [];
gdjs.menuCode.GDlimitesObjects2= [];
gdjs.menuCode.GDTransparentDarkJoystickObjects1= [];
gdjs.menuCode.GDTransparentDarkJoystickObjects2= [];
gdjs.menuCode.GDjump_9595buttonObjects1= [];
gdjs.menuCode.GDjump_9595buttonObjects2= [];


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("botão_iniciar"), gdjs.menuCode.GDbot_95227o_9595iniciarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDbot_95227o_9595iniciarObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDbot_95227o_9595iniciarObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDbot_95227o_9595iniciarObjects1[k] = gdjs.menuCode.GDbot_95227o_9595iniciarObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDbot_95227o_9595iniciarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "nivel 1", true);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDbot_95227o_9595iniciarObjects1.length = 0;
gdjs.menuCode.GDbot_95227o_9595iniciarObjects2.length = 0;
gdjs.menuCode.GDnome_9595do_9595jogoObjects1.length = 0;
gdjs.menuCode.GDnome_9595do_9595jogoObjects2.length = 0;
gdjs.menuCode.GDcoelho_9595rosaObjects1.length = 0;
gdjs.menuCode.GDcoelho_9595rosaObjects2.length = 0;
gdjs.menuCode.GDcoelho_9595vermelhoObjects1.length = 0;
gdjs.menuCode.GDcoelho_9595vermelhoObjects2.length = 0;
gdjs.menuCode.GDcoelho_9595laranjaObjects1.length = 0;
gdjs.menuCode.GDcoelho_9595laranjaObjects2.length = 0;
gdjs.menuCode.GDcoelho_9595verdeObjects1.length = 0;
gdjs.menuCode.GDcoelho_9595verdeObjects2.length = 0;
gdjs.menuCode.GDbunnyObjects1.length = 0;
gdjs.menuCode.GDbunnyObjects2.length = 0;
gdjs.menuCode.GDcoelho_9595amareloObjects1.length = 0;
gdjs.menuCode.GDcoelho_9595amareloObjects2.length = 0;
gdjs.menuCode.GDcoelho_9595roxoObjects1.length = 0;
gdjs.menuCode.GDcoelho_9595roxoObjects2.length = 0;
gdjs.menuCode.GDcoelho_9595azulObjects1.length = 0;
gdjs.menuCode.GDcoelho_9595azulObjects2.length = 0;
gdjs.menuCode.GDcoelhho_9595castanhoObjects1.length = 0;
gdjs.menuCode.GDcoelhho_9595castanhoObjects2.length = 0;
gdjs.menuCode.GDvidasObjects1.length = 0;
gdjs.menuCode.GDvidasObjects2.length = 0;
gdjs.menuCode.GDcontagem_9595de_9595moedas_9595textoObjects1.length = 0;
gdjs.menuCode.GDcontagem_9595de_9595moedas_9595textoObjects2.length = 0;
gdjs.menuCode.GDsolObjects1.length = 0;
gdjs.menuCode.GDsolObjects2.length = 0;
gdjs.menuCode.GDplayerObjects1.length = 0;
gdjs.menuCode.GDplayerObjects2.length = 0;
gdjs.menuCode.GDmoedaObjects1.length = 0;
gdjs.menuCode.GDmoedaObjects2.length = 0;
gdjs.menuCode.GDenemigoObjects1.length = 0;
gdjs.menuCode.GDenemigoObjects2.length = 0;
gdjs.menuCode.GDnuvemObjects1.length = 0;
gdjs.menuCode.GDnuvemObjects2.length = 0;
gdjs.menuCode.GDcobra_9595de_9595lavaObjects1.length = 0;
gdjs.menuCode.GDcobra_9595de_9595lavaObjects2.length = 0;
gdjs.menuCode.GDgoma_9595giganteObjects1.length = 0;
gdjs.menuCode.GDgoma_9595giganteObjects2.length = 0;
gdjs.menuCode.GDalienObjects1.length = 0;
gdjs.menuCode.GDalienObjects2.length = 0;
gdjs.menuCode.GDlimitesObjects1.length = 0;
gdjs.menuCode.GDlimitesObjects2.length = 0;
gdjs.menuCode.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.menuCode.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.menuCode.GDjump_9595buttonObjects1.length = 0;
gdjs.menuCode.GDjump_9595buttonObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);
gdjs.menuCode.GDbot_95227o_9595iniciarObjects1.length = 0;
gdjs.menuCode.GDbot_95227o_9595iniciarObjects2.length = 0;
gdjs.menuCode.GDnome_9595do_9595jogoObjects1.length = 0;
gdjs.menuCode.GDnome_9595do_9595jogoObjects2.length = 0;
gdjs.menuCode.GDcoelho_9595rosaObjects1.length = 0;
gdjs.menuCode.GDcoelho_9595rosaObjects2.length = 0;
gdjs.menuCode.GDcoelho_9595vermelhoObjects1.length = 0;
gdjs.menuCode.GDcoelho_9595vermelhoObjects2.length = 0;
gdjs.menuCode.GDcoelho_9595laranjaObjects1.length = 0;
gdjs.menuCode.GDcoelho_9595laranjaObjects2.length = 0;
gdjs.menuCode.GDcoelho_9595verdeObjects1.length = 0;
gdjs.menuCode.GDcoelho_9595verdeObjects2.length = 0;
gdjs.menuCode.GDbunnyObjects1.length = 0;
gdjs.menuCode.GDbunnyObjects2.length = 0;
gdjs.menuCode.GDcoelho_9595amareloObjects1.length = 0;
gdjs.menuCode.GDcoelho_9595amareloObjects2.length = 0;
gdjs.menuCode.GDcoelho_9595roxoObjects1.length = 0;
gdjs.menuCode.GDcoelho_9595roxoObjects2.length = 0;
gdjs.menuCode.GDcoelho_9595azulObjects1.length = 0;
gdjs.menuCode.GDcoelho_9595azulObjects2.length = 0;
gdjs.menuCode.GDcoelhho_9595castanhoObjects1.length = 0;
gdjs.menuCode.GDcoelhho_9595castanhoObjects2.length = 0;
gdjs.menuCode.GDvidasObjects1.length = 0;
gdjs.menuCode.GDvidasObjects2.length = 0;
gdjs.menuCode.GDcontagem_9595de_9595moedas_9595textoObjects1.length = 0;
gdjs.menuCode.GDcontagem_9595de_9595moedas_9595textoObjects2.length = 0;
gdjs.menuCode.GDsolObjects1.length = 0;
gdjs.menuCode.GDsolObjects2.length = 0;
gdjs.menuCode.GDplayerObjects1.length = 0;
gdjs.menuCode.GDplayerObjects2.length = 0;
gdjs.menuCode.GDmoedaObjects1.length = 0;
gdjs.menuCode.GDmoedaObjects2.length = 0;
gdjs.menuCode.GDenemigoObjects1.length = 0;
gdjs.menuCode.GDenemigoObjects2.length = 0;
gdjs.menuCode.GDnuvemObjects1.length = 0;
gdjs.menuCode.GDnuvemObjects2.length = 0;
gdjs.menuCode.GDcobra_9595de_9595lavaObjects1.length = 0;
gdjs.menuCode.GDcobra_9595de_9595lavaObjects2.length = 0;
gdjs.menuCode.GDgoma_9595giganteObjects1.length = 0;
gdjs.menuCode.GDgoma_9595giganteObjects2.length = 0;
gdjs.menuCode.GDalienObjects1.length = 0;
gdjs.menuCode.GDalienObjects2.length = 0;
gdjs.menuCode.GDlimitesObjects1.length = 0;
gdjs.menuCode.GDlimitesObjects2.length = 0;
gdjs.menuCode.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.menuCode.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.menuCode.GDjump_9595buttonObjects1.length = 0;
gdjs.menuCode.GDjump_9595buttonObjects2.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
