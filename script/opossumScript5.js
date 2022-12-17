function ter2()
{
 /* Paralelogramma területének kiszámítása két szomszédos oldala és a köztük lévő szög alapján */

var a=document.getElementById("a").value;
var b=document.getElementById("b").value;
var gamma=document.getElementById("gamma").value;

if(a<=0 || b<=0 || (gamma<=0 || gamma>=Math.PI) ) { return "Hiba!"; }
else return a*b*(Math.sin(gamma));
}