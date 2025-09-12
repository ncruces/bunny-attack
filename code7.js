gdjs.GAME_32OVERCode = {};
gdjs.GAME_32OVERCode.localVariables = [];
gdjs.GAME_32OVERCode.GDbot_95227o_9595recome_95231arObjects1= [];
gdjs.GAME_32OVERCode.GDbot_95227o_9595recome_95231arObjects2= [];
gdjs.GAME_32OVERCode.GDnome_9595do_9595jogoObjects1= [];
gdjs.GAME_32OVERCode.GDnome_9595do_9595jogoObjects2= [];
gdjs.GAME_32OVERCode.GDcoelho_9595rosaObjects1= [];
gdjs.GAME_32OVERCode.GDcoelho_9595rosaObjects2= [];
gdjs.GAME_32OVERCode.GDcoelho_9595vermelhoObjects1= [];
gdjs.GAME_32OVERCode.GDcoelho_9595vermelhoObjects2= [];
gdjs.GAME_32OVERCode.GDcoelho_9595laranjaObjects1= [];
gdjs.GAME_32OVERCode.GDcoelho_9595laranjaObjects2= [];
gdjs.GAME_32OVERCode.GDcoelho_9595verdeObjects1= [];
gdjs.GAME_32OVERCode.GDcoelho_9595verdeObjects2= [];
gdjs.GAME_32OVERCode.GDbunnyObjects1= [];
gdjs.GAME_32OVERCode.GDbunnyObjects2= [];
gdjs.GAME_32OVERCode.GDcoelho_9595amareloObjects1= [];
gdjs.GAME_32OVERCode.GDcoelho_9595amareloObjects2= [];
gdjs.GAME_32OVERCode.GDcoelho_9595roxoObjects1= [];
gdjs.GAME_32OVERCode.GDcoelho_9595roxoObjects2= [];
gdjs.GAME_32OVERCode.GDcoelho_9595azulObjects1= [];
gdjs.GAME_32OVERCode.GDcoelho_9595azulObjects2= [];
gdjs.GAME_32OVERCode.GDNewTextObjects1= [];
gdjs.GAME_32OVERCode.GDNewTextObjects2= [];
gdjs.GAME_32OVERCode.GDcoelho_9595castanhoObjects1= [];
gdjs.GAME_32OVERCode.GDcoelho_9595castanhoObjects2= [];
gdjs.GAME_32OVERCode.GDvidasObjects1= [];
gdjs.GAME_32OVERCode.GDvidasObjects2= [];
gdjs.GAME_32OVERCode.GDcontagem_9595de_9595moedas_9595textoObjects1= [];
gdjs.GAME_32OVERCode.GDcontagem_9595de_9595moedas_9595textoObjects2= [];
gdjs.GAME_32OVERCode.GDsolObjects1= [];
gdjs.GAME_32OVERCode.GDsolObjects2= [];
gdjs.GAME_32OVERCode.GDplayerObjects1= [];
gdjs.GAME_32OVERCode.GDplayerObjects2= [];
gdjs.GAME_32OVERCode.GDmoedaObjects1= [];
gdjs.GAME_32OVERCode.GDmoedaObjects2= [];
gdjs.GAME_32OVERCode.GDenemigoObjects1= [];
gdjs.GAME_32OVERCode.GDenemigoObjects2= [];
gdjs.GAME_32OVERCode.GDnuvemObjects1= [];
gdjs.GAME_32OVERCode.GDnuvemObjects2= [];
gdjs.GAME_32OVERCode.GDcobra_9595de_9595lavaObjects1= [];
gdjs.GAME_32OVERCode.GDcobra_9595de_9595lavaObjects2= [];
gdjs.GAME_32OVERCode.GDgoma_9595giganteObjects1= [];
gdjs.GAME_32OVERCode.GDgoma_9595giganteObjects2= [];
gdjs.GAME_32OVERCode.GDalienObjects1= [];
gdjs.GAME_32OVERCode.GDalienObjects2= [];


gdjs.GAME_32OVERCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("botão_recomeçar"), gdjs.GAME_32OVERCode.GDbot_95227o_9595recome_95231arObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32OVERCode.GDbot_95227o_9595recome_95231arObjects1.length;i<l;++i) {
    if ( gdjs.GAME_32OVERCode.GDbot_95227o_9595recome_95231arObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32OVERCode.GDbot_95227o_9595recome_95231arObjects1[k] = gdjs.GAME_32OVERCode.GDbot_95227o_9595recome_95231arObjects1[i];
        ++k;
    }
}
gdjs.GAME_32OVERCode.GDbot_95227o_9595recome_95231arObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "nivel 1", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botão_recomeçar"), gdjs.GAME_32OVERCode.GDbot_95227o_9595recome_95231arObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32OVERCode.GDbot_95227o_9595recome_95231arObjects1.length;i<l;++i) {
    if ( gdjs.GAME_32OVERCode.GDbot_95227o_9595recome_95231arObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32OVERCode.GDbot_95227o_9595recome_95231arObjects1[k] = gdjs.GAME_32OVERCode.GDbot_95227o_9595recome_95231arObjects1[i];
        ++k;
    }
}
gdjs.GAME_32OVERCode.GDbot_95227o_9595recome_95231arObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.GAME_32OVERCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GAME_32OVERCode.GDbot_95227o_9595recome_95231arObjects1.length = 0;
gdjs.GAME_32OVERCode.GDbot_95227o_9595recome_95231arObjects2.length = 0;
gdjs.GAME_32OVERCode.GDnome_9595do_9595jogoObjects1.length = 0;
gdjs.GAME_32OVERCode.GDnome_9595do_9595jogoObjects2.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595rosaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595rosaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595vermelhoObjects1.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595vermelhoObjects2.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595laranjaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595laranjaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595verdeObjects1.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595verdeObjects2.length = 0;
gdjs.GAME_32OVERCode.GDbunnyObjects1.length = 0;
gdjs.GAME_32OVERCode.GDbunnyObjects2.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595amareloObjects1.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595amareloObjects2.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595roxoObjects1.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595roxoObjects2.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595azulObjects1.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595azulObjects2.length = 0;
gdjs.GAME_32OVERCode.GDNewTextObjects1.length = 0;
gdjs.GAME_32OVERCode.GDNewTextObjects2.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595castanhoObjects1.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595castanhoObjects2.length = 0;
gdjs.GAME_32OVERCode.GDvidasObjects1.length = 0;
gdjs.GAME_32OVERCode.GDvidasObjects2.length = 0;
gdjs.GAME_32OVERCode.GDcontagem_9595de_9595moedas_9595textoObjects1.length = 0;
gdjs.GAME_32OVERCode.GDcontagem_9595de_9595moedas_9595textoObjects2.length = 0;
gdjs.GAME_32OVERCode.GDsolObjects1.length = 0;
gdjs.GAME_32OVERCode.GDsolObjects2.length = 0;
gdjs.GAME_32OVERCode.GDplayerObjects1.length = 0;
gdjs.GAME_32OVERCode.GDplayerObjects2.length = 0;
gdjs.GAME_32OVERCode.GDmoedaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDmoedaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDenemigoObjects1.length = 0;
gdjs.GAME_32OVERCode.GDenemigoObjects2.length = 0;
gdjs.GAME_32OVERCode.GDnuvemObjects1.length = 0;
gdjs.GAME_32OVERCode.GDnuvemObjects2.length = 0;
gdjs.GAME_32OVERCode.GDcobra_9595de_9595lavaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDcobra_9595de_9595lavaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDgoma_9595giganteObjects1.length = 0;
gdjs.GAME_32OVERCode.GDgoma_9595giganteObjects2.length = 0;
gdjs.GAME_32OVERCode.GDalienObjects1.length = 0;
gdjs.GAME_32OVERCode.GDalienObjects2.length = 0;

gdjs.GAME_32OVERCode.eventsList0(runtimeScene);
gdjs.GAME_32OVERCode.GDbot_95227o_9595recome_95231arObjects1.length = 0;
gdjs.GAME_32OVERCode.GDbot_95227o_9595recome_95231arObjects2.length = 0;
gdjs.GAME_32OVERCode.GDnome_9595do_9595jogoObjects1.length = 0;
gdjs.GAME_32OVERCode.GDnome_9595do_9595jogoObjects2.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595rosaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595rosaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595vermelhoObjects1.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595vermelhoObjects2.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595laranjaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595laranjaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595verdeObjects1.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595verdeObjects2.length = 0;
gdjs.GAME_32OVERCode.GDbunnyObjects1.length = 0;
gdjs.GAME_32OVERCode.GDbunnyObjects2.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595amareloObjects1.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595amareloObjects2.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595roxoObjects1.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595roxoObjects2.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595azulObjects1.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595azulObjects2.length = 0;
gdjs.GAME_32OVERCode.GDNewTextObjects1.length = 0;
gdjs.GAME_32OVERCode.GDNewTextObjects2.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595castanhoObjects1.length = 0;
gdjs.GAME_32OVERCode.GDcoelho_9595castanhoObjects2.length = 0;
gdjs.GAME_32OVERCode.GDvidasObjects1.length = 0;
gdjs.GAME_32OVERCode.GDvidasObjects2.length = 0;
gdjs.GAME_32OVERCode.GDcontagem_9595de_9595moedas_9595textoObjects1.length = 0;
gdjs.GAME_32OVERCode.GDcontagem_9595de_9595moedas_9595textoObjects2.length = 0;
gdjs.GAME_32OVERCode.GDsolObjects1.length = 0;
gdjs.GAME_32OVERCode.GDsolObjects2.length = 0;
gdjs.GAME_32OVERCode.GDplayerObjects1.length = 0;
gdjs.GAME_32OVERCode.GDplayerObjects2.length = 0;
gdjs.GAME_32OVERCode.GDmoedaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDmoedaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDenemigoObjects1.length = 0;
gdjs.GAME_32OVERCode.GDenemigoObjects2.length = 0;
gdjs.GAME_32OVERCode.GDnuvemObjects1.length = 0;
gdjs.GAME_32OVERCode.GDnuvemObjects2.length = 0;
gdjs.GAME_32OVERCode.GDcobra_9595de_9595lavaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDcobra_9595de_9595lavaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDgoma_9595giganteObjects1.length = 0;
gdjs.GAME_32OVERCode.GDgoma_9595giganteObjects2.length = 0;
gdjs.GAME_32OVERCode.GDalienObjects1.length = 0;
gdjs.GAME_32OVERCode.GDalienObjects2.length = 0;


return;

}

gdjs['GAME_32OVERCode'] = gdjs.GAME_32OVERCode;
