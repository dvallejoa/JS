//Variables de numeros
var numnueve = 9;
var numcinco = 5;
var numuno = 1;

//Variables de resultados
var resultadoa = 1;
var resultadob = 1;
var resultadoc = 1;

//Tasca 1. Imprimeix la taula de multiplicar del 9, utilitzant un bucle.
document.write("<h2> Activitat 1</h2>")
for (vallejo = 0; resultadoa <= 11; vallejo++) {
  document.write(numnueve + "x" +vallejo+ "=" +numnueve*mult+"</br>");
  resultadoa++
  document.write("</br>")
}

//Tasca 2. Imprimeix la taula de multiplicar del 5 a la inversa, utilitzant un bucle.
document.write("<h2> Activitat 2</h2>")
for (vallejo = 10; resultadob <= 11; vallejo--) {
    document.write(numcinco + "x" +mult+ "=" +numcinco*mult+ "</br>");
    resultadob++
    document.write("</br>")
}

//Tasca 3. Imprimeix totes les taules de multiplicar, utilitzant dos o més bucles.
document.write("<h2> Activitat 3</h2>")
for (vallejo = 0; resultadoc <= 101; vallejo++) {
  document.write(numuno + "x" +mult+ "=" +numuno*mult+ "</br>");
  resultadoc++
  if (vallejo == 10) {
    document.write("</br>");
    mult = 0;
    numuno++;
  }
}
