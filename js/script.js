function codificar() {
    mensaje = document.getElementById("texto").value
    mensajeCodificado = [];
    for (let indice = 0; indice < mensaje.length; indice++) {
        codificado = mensaje[indice].replace("e","enter").replace("i", "imes").replace("a","ai").replace("o","ober").replace("u", "ufat");
        mensajeCodificado += codificado;
    }
    document.getElementById("msg").innerHTML = mensajeCodificado;
    document.getElementById("texto").value = ""

    document.getElementById("msg").style.display = "block";
    document.getElementById("container").style.display = "none";
    document.getElementById("boton-copiar").style.display = "inline";
}


function decodificar(){
    mensaje = document.getElementById("texto").value
    mensajeDecodificado = mensaje.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
    document.getElementById("msg").innerHTML = mensajeDecodificado;
    document.getElementById("texto").value = ""

    document.getElementById("msg").style.display = "block";
    document.getElementById("container").style.display = "none";
    document.getElementById("boton-copiar").style.display = "inline";
} 


function copiar(){
    var copiar = document.querySelector("#msg");
    copiar.select();
    document.execCommand("copy");
}

