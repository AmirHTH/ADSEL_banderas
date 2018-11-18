var idUSR = "";
var generoUSR ="";
var edadUSR ="";
var logPartida="";
var horaInicio="";
var horaFin="";
var imagenes = new Array() ;
var banderasSeleccionadas = new Array();
var aciertos=0;
var fallos=0;
var tiempoEtapasCSV="";

var elegido="";
var turno=0;


function loguea (textoNuevo) {
    logPartida += (textoNuevo +"\n");
}

function log2csv () {
    let separador=",";
    var csv=horaInicio+separador+horaFin+separador+idUSR+separador+generoUSR+separador+edadUSR+separador+aciertos+separador+fallos+separador+tiempoEtapasCSV
    console.log(csv) 
}

function login() {
    console.log("ENTRANDO");
    document.getElementById('id01').style.display='block'
}

function guardarDatosUSR() {
    idUSR = document.getElementById("form_idusr").value;
    generoUSR = document.getElementById("form_genero").value;
    edadUSR = document.getElementById("form_edad").value;
    if ((idUSR==="") || (generoUSR==="") || (edadUSR==="")){
        alert("TODOS LOS CAMPOS DEBEN ESTAR RELLENADOS, GRACIAS")

    }else {
        document.getElementById('id01').style.display='none';
        horaInicio=Date.now();
        loguea("******Nueva partida******");
        loguea("jugador: "+idUSR+" de genero: "+generoUSR
        +" y con la edad de "+edadUSR
        +" ha iniciado partida a las "
        + horaInicio);
        console.log(logPartida);
        initPartida();
    }

}

function initPartida() {
    document.getElementById('idusr').innerHTML = "Usuario: "+idUSR;

    console.log("iniciando partida");
    var classname = document.getElementsByClassName("gallery");

    var myFunction = function(event) {
        console.log("click en: "+event.target.id);
        var urlIMG = document.getElementById(event.target.id).src;
        console.log("url bandera: "+urlIMG);

        if (urlIMG.includes(banderasSeleccionadas[elegido])) {
            aciertos++;
            document.getElementById('aciertos').innerHTML = "Aciertos: "+aciertos;


        } else {
            fallos++;
            document.getElementById('errores').innerHTML = "Errores: "+fallos;


        }
    
        if (turno<7) {
            initRonda();
        } else {
            document.getElementById("preguntasBanderas").style.display = "none";
            horaFin=Date.now();
            loguea("******FIN partida******");
            loguea(tiempoEtapasCSV);
            loguea("jugador: "+idUSR+" ha acertad0: "+aciertos+" y fallado "+fallos
             +" ha finalizado la partida a las "+ horaFin);
             console.log(logPartida);
             log2csv();

            alert("Gracias por participar y por favor recuerde rellenar la encuesta");
        }
    };

    for (var i = 0; i < classname.length; i++) {
            classname[i].addEventListener('click', myFunction, false);
    }


    imagenes[0] = "alabama.png"
    imagenes[1] = "alaska.png"
    imagenes[2] = "arizona.png" 
    imagenes[3] = "arkansas.png"
    imagenes[4] = "california.png"
    imagenes[5] = "carolina_del_norte.png"
    imagenes[6] = "carolina_del_sur.png"
    imagenes[7] = "colorado.png"
    imagenes[8] = "connecticut.png"
    imagenes[9] = "dakota_del_norte.png"
    imagenes[10] = "dakota_del_sur.png"
    imagenes[21] = "delaware.png"
    imagenes[22] = "florida.png"
    imagenes[23] = "georgia.png"
    imagenes[24] = "hawai.png"
    imagenes[25] = "idaho.png"
    imagenes[26] = "illinois.png"
    imagenes[27] = "indiana.png"
    imagenes[28] = "iowa.png"
    imagenes[29] = "kansas.png"
    imagenes[30] = "kentucky.png"
    imagenes[31] = "luisiana.png"
    imagenes[32] = "maine.png"
    imagenes[33] = "maryland.png"
    imagenes[34] = "massachusetts.png"
    imagenes[35] = "michigan.png"
    imagenes[36] = "minnesota.png"
    imagenes[37] = "misisipi.png"
    imagenes[38] = "misuri.png"
    imagenes[39] = "montana.png"
    imagenes[40] = "nebraska.png"
    imagenes[41] = "nevada.png"
    imagenes[42] = "nueva_jersey.png"
    imagenes[43] = "nueva_york.png"
    imagenes[44] = "nuevo_hampshire.png"
    imagenes[45] = "nuevo_mexico.png"
    imagenes[46] = "ohio.png"
    imagenes[47] = "oklahoma.png"
    imagenes[48] = "oregon.png"
    imagenes[49] = "pensilvania.png"
    imagenes[20] = "rhode_island.png"
    imagenes[11] = "tennessee.png"
    imagenes[12] = "texas.png"
    imagenes[13] = "utah.png"
    imagenes[14] = "vermont.png"
    imagenes[15] = "virginia.png"
    imagenes[16] = "virginia_occidental.png"
    imagenes[17] = "washington.png"
    imagenes[18] = "wisconsin.png"
    imagenes[19] = "wyoming.png"

    initRonda();
}

function initRonda() {

if (tiempoEtapasCSV===""){
    tiempoEtapasCSV += Date.now();
}
else {
    tiempoEtapasCSV += ","+Date.now();
}


turno++;
var j = 0
var p = imagenes.length;
var numImg1 = 0;
var numImg2 = 0;
var numImg3 = 0;
var numImg4 = 0;
do {
    numImg1 = Math.round(Math.random()*(p-1));
    numImg2 = Math.round(Math.random()*(p-1));
    numImg3 = Math.round(Math.random()*(p-1));
    numImg4 = Math.round(Math.random()*(p-1));
    console.log(numImg1);
    console.log(numImg2);
    console.log(numImg3);
    console.log(numImg4);


} while ((numImg1==numImg2)||(numImg1==numImg4)||(numImg1==numImg2)
||(numImg2==numImg3)||(numImg2==numImg4)||(numImg3==numImg4));

console.log(imagenes[numImg1]);
console.log(imagenes[numImg2]);
console.log(imagenes[numImg3]);
console.log(imagenes[numImg4]);

//e3_pic
document.getElementById("e1_pic").src="banderas/"+imagenes[numImg1];
document.getElementById("e2_pic").src="banderas/"+imagenes[numImg2];
document.getElementById("e3_pic").src="banderas/"+imagenes[numImg3];
document.getElementById("e4_pic").src="banderas/"+imagenes[numImg4];

banderasSeleccionadas[0]=imagenes[numImg1];
banderasSeleccionadas[1]=imagenes[numImg2];
banderasSeleccionadas[2]=imagenes[numImg3]
banderasSeleccionadas[3]=imagenes[numImg4]



elegido = Math.round(Math.random()*(4-1));
txtbanderaBuena=banderasSeleccionadas[elegido].toUpperCase();
txtbanderaBuena=txtbanderaBuena.substring(0, txtbanderaBuena.indexOf("."));

var txtbanderaBuena = txtbanderaBuena.replace(/_/g, ' ');

console.log(txtbanderaBuena);

document.getElementById("progreso").value=turno;
document.getElementById('estadoElegido').innerHTML = txtbanderaBuena;

var para1 = document.createElement("p");
var node = document.createTextNode("¿"+txtbanderaBuena+"?");
para1.appendChild(node);
var para2 = para1.cloneNode(true);
var para3 = para1.cloneNode(true);
var para4 = para1.cloneNode(true);

var element1 = document.getElementById("e1_desc");
var element2 = document.getElementById("e2_desc");
var element3 = document.getElementById("e3_desc");
var element4 = document.getElementById("e4_desc");

element1.appendChild(para1);
element2.appendChild(para2);
element3.appendChild(para3);
element4.appendChild(para4);

}

function reiniciar () {
    idUSR = "";
    generoUSR ="";
    edadUSR ="";
    logPartida="";
    horaInicio="";
    horaFin="";
    imagenes = new Array() ;
    banderasSeleccionadas = new Array();
    aciertos=0;
    fallos=0;
    tiempoEtapasCSV="";

    elegido="";
    turno=0;

    document.getElementById('aciertos').innerHTML = "Aciertos: "+aciertos;
    document.getElementById('errores').innerHTML = "Errores: "+fallos;
    document.getElementById("progreso").value=turno;
    document.getElementById('estadoElegido').innerHTML = "";
    document.getElementById("preguntasBanderas").style.display = "block";

    login();

}

