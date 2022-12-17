function legkis() {
	var sz1 = document.getElementById("opsz1").value;
	var sz2 = document.getElementById("opsz2").value;
	var sz3 = document.getElementById("opsz3").value;
	var sz4 = document.getElementById("opsz4").value;
	var sz5 = document.getElementById("opsz5").value;
	var sz6 = document.getElementById("opsz6").value;
	
	var o1 = document.getElementById("op1").value;
	var o2 = document.getElementById("op2").value;
	var o3 = document.getElementById("op3").value;
	var o4 = document.getElementById("op4").value;
	var o5 = document.getElementById("op5").value;
	var o6 = document.getElementById("op6").value;
	
	var t = [sz1, sz2, sz3, sz4, sz5, sz6];
	var names = [o1, o2, o3, o4, o5, o6];
	
	if (Math.min(...t) == sz1) {return o1;}
	else if (Math.min(...t) == sz2) {return o2;}
	else if (Math.min(...t) == sz3) {return o3;}
	else if (Math.min(...t) == sz4) {return o4;}
	else if (Math.min(...t) == sz5) {return o5;}
	else {return o6;}
	//return names[t.indexOf(Number(Math.min(...t)))] valamiért nem működik;
}


function stat() 
{
	
	var sz1 = document.getElementById("opsz1").value;
	var sz2 = document.getElementById("opsz2").value;
	var sz3 = document.getElementById("opsz3").value;
	var sz4 = document.getElementById("opsz4").value;
	var sz5 = document.getElementById("opsz5").value;
	var sz6 = document.getElementById("opsz6").value;
	var t = [sz1, sz2, sz3, sz4, sz5, sz6];
	
  var sum = 0;
  var n;
  var atl = sum / t.length;
  var t1 = 0;
  var n1;

  var std;

  for (var i = 0; i < t.length; ++i) {
    n = parseFloat(t[i]);
    sum += n;
  }

  atl = sum / t.length;

  for (var j = 0; j < t.length; ++j) {
    n1 = parseFloat(Math.pow((t[j] - atl), 2));
    t1 += n1;
  }

  std = Math.sqrt(t1 / t.length);

	return [atl +', '+ std];
}