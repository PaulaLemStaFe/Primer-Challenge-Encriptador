function botonCopiar(){
    const copyText = document.getElementById("salida_texto");
    copyText.select();
    document.execCommand("Copy");
    document.getElementById("salida_texto").value=" ";
}

function botonPegar(){
    document.getElementById("entrada_texto").value = document.getElementById("salida_texto").value;
    document.getElementById("salida_texto").value=" ";
}

function botonEncriptar(){
        const encriptar = document.getElementById('entrada_texto').value;
        const encriptado = encriptar.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
        document.getElementById("salida_texto").value = encriptado
        document.getElementById("entrada_texto").value=" ";
}


function botonDesencriptar(){
        const desencriptar= document.getElementById ("entrada_texto").value;
        const desencriptado= desencriptar.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
        document.getElementById("salida_texto").value = desencriptado
        document.getElementById("entrada_texto").value=" ";
}
