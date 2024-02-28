
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
var total = 0;

var boton = document.getElementById("boton");

boton.addEventListener("click", guardar);
boton.addEventListener("click", limpiar);
boton.addEventListener("click", suma);
boton.addEventListener("click", productos);

function guardar()
{
    tipo.unshift(document.getElementById("type").value);
    precio.unshift(parseInt(document.getElementById("price").value));
}

function limpiar()
{
    document.getElementById('type').value = '';
    document.getElementById('price').value = '';
}

function suma(){
    total = total + precio[0];
    var totalPagar = document.getElementById("costos");
    totalPagar.innerHTML = "Total a pagar $" + total;
}

function productos(){

    var product = tipo[0];
    var cash = precio[0];
    var benzema = document.createElement("p");

    benzema.innerHTML = product + "........." + "$" + cash;
    var padre = document.getElementById("costos");
    padre.appendChild(benzema);

}




