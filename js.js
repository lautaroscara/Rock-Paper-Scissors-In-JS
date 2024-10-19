//globales
var cont_v= 0;
var cont_e= 0;
var cont_d= 0;
var cont_r= 0;

//juego
function jugar(valor){
    var mano= document.getElementById("manoimg_jugador");
    var mano_j= document.getElementById("mano_maquina_j");
    var imgvs= document.getElementById("vs");
    var puntos= document.getElementById("footer");
    var resul= document.getElementById("resultado");
    var final= document.getElementById("fin");
    var div_img_fin= document.getElementById("img_fin");
    var img_goku= document.getElementById("imagen_goku");
    var pts_v= document.getElementById("esfera_v");
    var juego= document.getElementById("juego");
    var pts_e= document.getElementById("esfera_e");
    var pts_d= document.getElementById("esfera_d");
    var elecc_j= Math.round(Math.random()*2+1);
    var rondas= document.getElementById("rondas");
    mano_j.src="img/"+elecc_j+"jiren.png";
   if (valor==elecc_j){
        cont_e= cont_e+1;
        pts_e.src= "img/"+cont_e+"es.png";
        imgvs.src="img/vsempate.png";
   }
    else{
         if ((valor == 1 && elecc_j == 3) || (valor == 2 && elecc_j == 1) || (valor == 3 && elecc_j == 2)){
            cont_v= cont_v+1;
            pts_v.src= "img/"+cont_v+"es.png";
            imgvs.src="img/vsganar.png";
           }
            else{
                cont_d= cont_d+1;
                pts_d.src= "img/"+cont_d+"es.png";
                imgvs.src="img/vsderrota.png";

            }

    }
    cont_r= cont_r+1;
    rondas.innerHTML= "Ronda:"+cont_r+" de 7";
    if (cont_r==6) {
        rondas.innerHTML= "Ronda final";
    }
    else{
        if (cont_r>=7) {
            fin.style.display="block";
            juego.style.display="none";
            puntos.style.display="none";                                 
                    if (cont_v>cont_d) {
                        resul.innerHTML="Has vencido";
                        div_img_fin.style.width="60%";
                        img_goku.src="img/gokuganar.png";
                    }   
                        else{
                            if (cont_d>cont_v) {
                            resul.innerHTML="Te ha derrotado";
                            div_img_fin.style.width="30%";
                            img_goku.src="img/gokuderrota.png";
                            }  
                                else{
                                    resul.innerHTML="Estan igualados de poder";
                                    div_img_fin.style.width="60%";
                                    img_goku.src="img/gokuempate.png";
                                }                                                 
                        }

            }
        }
    
}




function subir(){
    var texto= document.getElementById("nombre");
    var nombre= document.getElementById("nombre_del_jugador");
    var puntos= document.getElementById("footer");
    var juego= document.getElementById("juego");
    var inicio= document.getElementById("inicio");
    if (texto.value=="Ingresa tu nombre"){
         alert("ERROR. Ingrese un nombre valido");
         texto.focus();
    }   
        else{
            if (texto.value==""){
                alert("ERROR. Ingrese un nombre valido");
                texto.focus();
            }
                else{
                     nombre.innerHTML=texto.value;
                     inicio.style.display="none";
                     juego.style.display="flex";             
                     puntos.style.display="flex";
                }
        }
        
}

function reiniciar(){
    var inicio= document.getElementById("inicio");
    var final= document.getElementById("fin");
    var imgvs= document.getElementById("vs");
    var juego= document.getElementById("juego");
    var puntos= document.getElementById("footer");
    var texto= document.getElementById("nombre");
    var rondas= document.getElementById("rondas");
    var pts_v= document.getElementById("esfera_v");
    var pts_e= document.getElementById("esfera_e");
    var pts_d= document.getElementById("esfera_d");
    fin.style.display="none";
    inicio.style.display="flex";
    texto.focus();
    cont_r=0;
    cont_e= 0;
    cont_d= 0;
    cont_v= 0;
    pts_e.src= "img/esfera_defecto.png";
    pts_v.src= "img/esfera_defecto.png";
    pts_d.src= "img/esfera_defecto.png";
    rondas.innerHTML= "Ronda:0";
    imgvs.src="img/vs.png";
}

//animaciones
function seleccion_p(){
    var mano= document.getElementById("manoimg_jugador");
    var pj= document.getElementById("pj");
    mano.src= "img/1.png";
}

function seleccion_t(){
    var mano= document.getElementById("manoimg_jugador");
    var tj= document.getElementById("tj");
    mano.src= "img/2.png";
}

function seleccion_pa(){
    var mano= document.getElementById("manoimg_jugador");
    var paj= document.getElementById("paj");
    mano.src= "img/3.png";
}

function escribir(){
    var texto= document.getElementById("nombre");
    texto.style.backgroundColor="#facf84";
    if (texto.value=="Ingresa tu nombre") {
        texto.value="";
    }

}

function salir() {
     var texto= document.getElementById("nombre");
        texto.style.backgroundColor="#fd8f00";
        if (texto.value=="") {
            texto.value="Ingresa tu nombre";
        }
}

function sobre(){
    var boton= document.getElementById("envio");
    var bot= document.getElementById("bot_fin");
    boton.style.backgroundColor="#facf84";
    bot.style.backgroundColor="#facf84";
}

function fuera() {
    var boton= document.getElementById("envio");
    var bot= document.getElementById("bot_fin");
    boton.style.backgroundColor="#fd8f00";
    bot.style.backgroundColor="#fd8f00";
}