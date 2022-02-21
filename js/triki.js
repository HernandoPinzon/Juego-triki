let posiciones = [0,0,0,0,0,0,0,0,0]
let ganador;
function sumama1(){ 
    document.getElementById("btnTriki1").disabled = true
    document.getElementById("triki1").src="../images/vaso.jpeg"
    posiciones[0]=1
    turnoMaquina()
}
function sumama2(){ 
    document.getElementById("btnTriki2").disabled = true
    document.getElementById("triki2").src="../images/vaso.jpeg"
    posiciones[1]=1
    turnoMaquina()
}
function sumama3(){ 
    document.getElementById("btnTriki3").disabled = true
    document.getElementById("triki3").src="../images/vaso.jpeg"
    posiciones[2]=1
    turnoMaquina()
}
function sumama4(){ 
    document.getElementById("btnTriki4").disabled = true
    document.getElementById("triki4").src="../images/vaso.jpeg"
    posiciones[3]=1
    turnoMaquina()
}
function sumama5(){ 
    document.getElementById("btnTriki5").disabled = true
    document.getElementById("triki5").src="../images/vaso.jpeg"
    posiciones[4]=1
    turnoMaquina()
}
function sumama6(){ 
    document.getElementById("btnTriki6").disabled = true
    document.getElementById("triki6").src="../images/vaso.jpeg"
    posiciones[5]=1
    turnoMaquina()
}
function sumama7(){ 
    document.getElementById("btnTriki7").disabled = true
    document.getElementById("triki7").src="../images/vaso.jpeg"
    posiciones[6]=1
    turnoMaquina()
}
function sumama8(){ 
    document.getElementById("btnTriki8").disabled = true
    document.getElementById("triki8").src="../images/vaso.jpeg"
    posiciones[7]=1
    turnoMaquina()
}
function sumama9(){ 
    document.getElementById("btnTriki9").disabled = true
    document.getElementById("triki9").src="../images/vaso.jpeg"
    posiciones[8]=1
    turnoMaquina()
}

function turnoMaquina(){
    if (endgame()) {
        setTimeout(function(){
                alert("el gandor es el jugador "+ ganador)
            }
        ,1000);

    } else {
        max= 10;
        min= 1;
        do {
            maquina = Math.floor(Math.random() * (max - min)) + min;
        } while (posiciones[maquina-1]!=0);
        posiciones[maquina-1]=2;
        document.getElementById("btnTriki"+maquina).disabled = true
        document.getElementById("triki"+maquina).src="../images/isaac.png"
        console.log(posiciones)
    }
    
}

function reiniciar(){
    for (let i = 1; i < 10; i++) {
        document.getElementById("btnTriki"+i).disabled = false;
        document.getElementById("triki"+i).src="../images/blanco.png";
        posiciones = [0,0,0,0,0,0,0,0,0]
    }
}

function endgame() {
    if (comprobarganador()) {
        return true;
    }
    let turnos=0;
    for (let i = 0; i < 9; i++) {
        if (posiciones[i] !=0) {
            turnos++;
        }
    }
    if (turnos>8) {
        return true;
    }
    
    return false;
}

function comprobarganador(){
    ganador=0;
    if ((posiciones[0]==posiciones[1]) && (posiciones[1]==posiciones[2]) && posiciones[2]!=0) {
        if (posiciones[0]==1) {
            ganador = 1;
        } else {
            ganador = 2;
        }
    }
    if ((posiciones[3]==posiciones[4]) && (posiciones[4]==posiciones[5]) && posiciones[5]!=0) {
        if (posiciones[0]==1) {
            ganador = 1;
        } else {
            ganador = 2;
        }
    }
    if ((posiciones[6]==posiciones[7]) && (posiciones[7]==posiciones[8]) && posiciones[8]!=0) {
        if (posiciones[0]==1) {
            ganador = 1;
        } else {
            ganador = 2;
        }
    }
    if ((posiciones[0]==posiciones[3]) && (posiciones[3]==posiciones[6]) && posiciones[6]!=0) {
        if (posiciones[0]==1) {
            ganador = 1;
        } else {
            ganador = 2;
        }
    }
    if ((posiciones[1]==posiciones[4]) && (posiciones[4]==posiciones[7]) && posiciones[7]!=0) {
        if (posiciones[0]==1) {
            ganador = 1;
        } else {
            ganador = 2;
        }
    }
    if ((posiciones[2]==posiciones[5]) && (posiciones[5]==posiciones[8]) && posiciones[8]!=0) {
        if (posiciones[0]==1) {
            ganador = 1;
        } else {
            ganador = 2;
        }
    }
    if ((posiciones[0]==posiciones[4]) && (posiciones[4]==posiciones[8]) && posiciones[8]!=0) {
        if (posiciones[0]==1) {
            ganador = 1;
        } else {
            ganador = 2;
        }
    }
    if ((posiciones[2]==posiciones[4]) && (posiciones[4]==posiciones[6]) && posiciones[6]!=0) {
        if (posiciones[0]==1) {
            ganador = 1;
        } else {
            ganador = 2;
        }
    }
    if (ganador==0) {
        return false;
    } else {
        return true;
    }
}
