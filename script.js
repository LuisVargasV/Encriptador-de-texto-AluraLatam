const campo_texto = document.querySelector("#TextoEncriptado");
const campo_mensaje = document.querySelector("#campo-mensaje");

//console.log(campo_mensaje, campo_texto);

const matriz_code = [
    ["e", "enter"], //indice 0
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"], //indice 4
];

function btnEncriptar(){
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value= texto;
}

function encriptar(fraseEncriptada){
    for(let i = 0; i< matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            )
        }
        
    }
    return fraseEncriptada;
}

function btnDesencriptar(){
    const texto = Desencriptar(campo_texto.value);
    campo_mensaje.value= texto;
}

function Desencriptar(fraseEncriptada){
    for(let i = 0; i< matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][1])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            )
        }
        
    }
    return fraseEncriptada;
}