function OPstr()
{
	var k1 = document.getElementById("kaja1").value;
	var k2 = document.getElementById("kaja2").value;
	var k3 = document.getElementById("kaja3").value;
	var k4 = document.getElementById("kaja4").value;
	var k5 = document.getElementById("kaja5").value;
	var k6 = document.getElementById("kaja6").value;
	
	var hamm = [k1, k2, k3, k4, k5, k6];
	var egy = (hamm[(Math.floor(Math.random() * 6))]);
	var ketto = (hamm[(Math.floor(Math.random() * 6))]);
	var harom = (hamm[(Math.floor(Math.random() * 6))]);
	do {
		var ketto = (hamm[(Math.floor(Math.random() * 6))]);
		var harom = (hamm[(Math.floor(Math.random() * 6))]);}
	while ((egy == ketto) || (egy == harom) || (ketto == harom));
	
return (egy +', '+ ketto +', '+ harom);
}