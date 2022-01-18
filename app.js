function btnCopiar(){
    const copyText = document.getElementById("campo2");
    copyText.select();
    document.execCommand("Copy");
    document.getElementById("campo2").value=" ";
}

function btnPegar(){
    document.getElementById("campo1").value = document.getElementById("campo2").value;
    document.getElementById("campo2").value=" ";
}

function btnEncriptar(){
        const encriptar = document.getElementById('campo1').value;
        const encriptado = encriptar.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
        document.getElementById("campo2").value = encriptado
        document.getElementById("campo1").value=" ";
}


function btnDesEncriptar(){
        const desencriptar= document.getElementById ("campo1").value;
        const desencriptado= desencriptar.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
        document.getElementById("campo2").value = desencriptado
        document.getElementById("campo1").value=" ";
}
