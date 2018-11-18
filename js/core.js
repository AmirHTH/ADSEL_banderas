

var idUSR = "";
var generoUSR ="";
var edadUSR ="";
var logPartida="";
var horaInicio=""

function loguea (textoNuevo) {
    logPartida += (textoNuevo +"\n");

}


function log2csv () {
    let separador=",";
    var csv=horaInicio+separador+idUSR+separador+generoUSR+separador+edadUSR
    Console.log(csv)

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
        document.getElementById('idusr').innerHTML = "Usuario: "+idUSR;
        document.getElementById('id01').style.display='none';
        horaInicio=Date.now();
        loguea("******Nueva partida******");
        loguea("jugador: "+idUSR+" de genero: "+generoUSR
        +" y con la edad de "+edadUSR
        +" ha iniciado partida a las "
        + horaInicio);
        console.log(logPartida);

    }

}

function compruebaBandera() {
    alert("FUNCIONAAAA");
}