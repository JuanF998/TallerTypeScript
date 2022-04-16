var op1 = 10;
var op2 = 15;
console.log("Mis variables iniciales son " + op1 + " y " + op2);
op1++;
op2 += 4;
console.log("Mis variables finales son " + op1 + " y " + op2);
var resultado = op1 / op2;
console.log("Resultado: " + resultado);
console.log("Resultado: " + resultado.toPrecision(2));
var varTipoDesconocido;
console.log("Variable tiene valor: " + varTipoDesconocido + " y es de tipo " + typeof (varTipoDesconocido));
varTipoDesconocido = "Ahora hay un texto";
console.log("Variable tiene valor: " + varTipoDesconocido + " y es de tipo " + typeof (varTipoDesconocido));
varTipoDesconocido = 2.8;
console.log("Variable tiene valor: " + varTipoDesconocido + " y es de tipo " + typeof (varTipoDesconocido));
function imprimirMensaje() {
    console.log("Mensaje generico");
}
imprimirMensaje();
