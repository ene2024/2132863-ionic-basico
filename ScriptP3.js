
/*var usuario = document.getElementById("User");
var contrasegna = document.getElementById("Password");

document.getElementById("b1").addEventListener("click", LogIn);
document.getElementById("b1").addEventListener("click", SignIn);

function LogIn()
{
    var respuesta = document.createElement("div");
    var texto = document.createTextNode("Log in correcto");

    respuesta.appendChild(texto);
    document.getElementById("Impresion").appendChild(respuesta);
}

function SignIn()
{
    var respuesta = document.createElement("div");
    var texto = document.createTextNode("Registro correcto");

    respuesta.appendChild(texto);
    document.getElementById("Impresion").appendChild(respuesta);
}*/



var tipo = [];
var precio = [];

var boton = document.getElementById("boton");

boton.addEventListener("click", guardar, limpiar);

function guardar()
{
    tipo.push(document.getElementById("type"));
    precio.push(document.getElementById("precio"));
}

function limpiar()
{
    document.getElementById('type').value = '';
    document.getElementById('price').value = '';
}



