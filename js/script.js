function codificar() {
    mensaje = document.getElementById("texto").value.toLowerCase();
    mensajeCodificado = [];
    for (let indice = 0; indice < mensaje.length; indice++) {
        codificado = mensaje[indice].replace("e","enter").replace("i", "imes").replace("a","ai").replace("o","ober").replace("u", "ufat");
        mensajeCodificado += codificado;
    }

    document.getElementById("msg").innerHTML = mensajeCodificado;
    
    ocultar();
}


function decodificar(){
    mensaje = document.getElementById("texto").value.toLowerCase();
    mensajeDecodificado = mensaje.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
    document.getElementById("msg").innerHTML = mensajeDecodificado;
    
   ocultar();
} 


/* function copiar(){
    var copiar = document.querySelector("#msg");
    copiar.select();
    document.execCommand("copy");
} */

function copiar(){
    var content = document.getElementById('msg').innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
        document.getElementById("texto").value = content;
        document.getElementById("msg").innerHTML = "";
        document.getElementById("msg").style.display = "none";
        document.getElementById("container").style.display = "block";
        document.getElementById("boton-copiar").style.display = "none";
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
 
}

function ocultar(){
    document.getElementById("texto").value = ""
    document.getElementById("msg").style.display = "block";
    document.getElementById("container").style.display = "none";
    document.getElementById("boton-copiar").style.display = "inline";
} 
