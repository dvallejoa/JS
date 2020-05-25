//M08-UF2-Act04-Comparadors
//David Vallejo Arcos

//Tasca 1. Comparar totes les variables, i digues quina és més gran de totes
//Anotació personal: Variable que empieza if = Variable del document.write
document.write("<br/>");
var pri   = 10;
var seg   = 20;
var terc  = 30;
var quar  = 40;

if (pri >= seg && pri >= terc && pri >= quar) {
document.write("La variable més gran es ", pri);
}
else if (seg >= pri && seg >= terc && seg >= quar) {
document.write("La variable més gran es ", seg);
}
else if (terc >= pri && terc >= seg && terc >= quar) {
document.write("La variable més gran es ", terc);
}
else {
document.write("La variable més gran es ", quar);
}

//Tasca 2. Comparar totes les variables, i digues quina és  més petita de totes:
//Anotació personal: Variable que empieza if = Variable del document.write
document.write("<br/><br/><br/>");
var tr = 30;
var vi = 20;
var de = 10;
var cu = 40;

if (tr <= vi && tr <= de && tri <= cu) {
  document.write("La variable més petita es ", tr);
}
else if (vi <= tr && vi <= de && vi <= cu) {
  document.write("La variable més petita es ", vi);
}
else if (de <= tr && de <= vi && de <= cu) {
  document.write("La variable més petita es ", de);
}
else {
  document.write("La variable més petita es ", cu);
}

//Tasca 3. Comparar totes les variables, i digues quines són iguals (si n’hi ha alguna):
//Anotació personal: Variable que empieza if = Variable del document.write
document.write("<br/><br/><br/>");
var diez      = 10;
var veinte    = 20;
var treinta   = 30;
var cuarenta  = 40;

if (diez !== veinte && veinte !== treinta  && treinta !== cuarenta) {
  document.write("Les variables no són iguals")
}
