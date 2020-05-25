//M08-UF2-Act06-Introduir Dades
//David Vallejo Arcos

//Variables
var num1      = prompt("Diga'm un nombre");
var num2      = prompt("Diga'm un altre nombre");
var mult      = prompt("Indica una taula de multiplicar")
var nombreap  = prompt("Introdueix el teu nom i el teu cognoms");
var edad      = prompt("Introdueix la teva edat");
var correo    = prompt("Introdueix el teu correu electrónic");
var asd       = 0;
//

//Tasca 1. Demana introduir dos números i digues quin és més gran, quin és més petit o si són iguals.
document.write("<h4>El nombre més gran es </h4>")
if (num1 > num2) {
document.write(num1); }
else if (num2 > num1) {
document.write(num2); }
//
document.write("<h4>El nombre més petit es </h4>")
if (num1 < num2) {
document.write(num1); }
else if (num2 < num1) {
document.write(num2); }
//
document.write("<h4>Comprovació d'igualtat</h4>")
if (num1 == num2) {
document.write("Els nombres "+num1+" i "+num2+" són iguals!");
}
//
else {
  document.write("Els nombres "+num1+" i "+num2+" NO són iguals!");
}
//
//Tasca 2. Demana introduir un número, i mostra la seva taula de multiplicar.
document.write("<h4>Aquesta es la taula de multiplicar que has indicat</h4>")
for (asd = 1; asd <= 10; asd++) {
m = mult * asd;
document.write(+mult+ "x" +asd+ "=" + m);
document.write("<br></br>")
}
//
//Tasca 3. Demana introduir el nom, l’edat i el correu electrònic, i mostra’ls per pantalla juntament amb el text:
{
document.write("<br></br>")
document.write("<h4>Missatge de la web</h4>")
document.write("Hola "+nombreap+"! <br>Moltes gràcies per presentar-te, i dir-me que tens "+edad+" anys. <br>Em guardaré el teu correu electrònic ("+correo+") per si mai et vull enviar un missatge.</br> <br>A reveure!</br>");
}
