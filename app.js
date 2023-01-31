//ENIGMA EJERCICIO I:

var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";

var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var text1 = "hola mundo";

var text2 = "b': yqg ,:agr(hue:) shrerg jq,u'qf q !hg ,:psqñrf:g rg,fuwurae: s:f r' ,yq!x mbg:z 'q 'r,yrn !hfua( t'usqfuq ,:apu(:)m z q ,:a!uahq,u:a rajuq ha pragqir ,utfqe:n br' dhr !h dhurfqg)";

var getPlainText = () => document.getElementById("sinEncriptado").value;


var getEncryptedText = () => document.getElementById("encriptado").value;

var getIndex = (alphabet, letter) => {
    for (var i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === letter) return i;
    }
    return -1;
}

var transformMyMessage = (originAlphabet, resultAlphabet, text, textboxID) => {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var letterIndex = getIndex(originAlphabet, text[i]);
        letterIndex > -1 ? result += resultAlphabet[letterIndex] : result += text[i];
    }
    document.getElementById(textboxID).innerText = result;
}

document.getElementById("encriptar").addEventListener('click', function () { transformMyMessage(plainAlphabet, encryptedAlphabet, getPlainText(), "encriptado") })

document.getElementById("desencriptar").addEventListener("click", function () { transformMyMessage(encryptedAlphabet, plainAlphabet, getEncryptedText(), "sinEncriptado") })



//ENIGMA EJERCICIO II: no consigo ver cómo usar el Indexof().

// var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";

// var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

// var text1 = "hola mundo";

// var text2 = "b': yqg ,:agr(hue:) shrerg jq,u'qf q !hg ,:psqñrf:g rg,fuwurae: s:f r' ,yq!x mbg:z 'q 'r,yrn !hfua( t'usqfuq ,:apu(:)m z q ,:a!uahq,u:a rajuq ha pragqir ,utfqe:n br' dhr !h dhurfqg)";


// var getPlainText = () => {
//     return document.getElementById("sinEncriptado").value;
// }

// var getEncryptedText = () => {
//     return document.getElementById("encriptado").value;
// }

// var transformMyMessage = (originAlphabet, resultAlphabet, text, textboxID) => {
//     var result = "";
//     for (var i = 0; i < text.length; i++) {
//         var letterIndex = originAlphabet.indexOf(text[i]);
//         letterIndex > -1 ? result += resultAlphabet[letterIndex] : result += text[i];
//     }
//     document.getElementById(textboxID).innerText = result;
// }

// document.getElementById("encriptar").addEventListener('click', function () { transformMyMessage(plainAlphabet, encryptedAlphabet, getPlainText(), "encriptado") })

// document.getElementById("desencriptar").addEventListener("click", function () { transformMyMessage(encryptedAlphabet, plainAlphabet, getEncryptedText(), "sinEncriptado") })








// GENERADOR ALEATORIO:

// var max = 100, min = 1;
// var n = 10;

// var randomPick = (n, min, max) => {
//     var range = max - min + 1;
//     var myArray = [];
//     for (var i = 1; i <= n; i++) {
//         myArray.push(Math.floor(Math.random() * range));
//     }
//     return myArray;
// }

// console.log(randomPick(10, 1, 100));