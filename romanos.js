  var getData=function romanos() {
  var n=document.getElementById("n") 
	alert('Convertir a Romanos?');
	
	var n = Number(prompt('Ingrese un Numero'));
	var n;
	var millar = new Number();
	var centena = new Number();
	var decena = new Number();
	var unidades = new Number();
	
	millar = Math.trunc(n/1000)%10;
	centena = Math.trunc(n/100)%10;
	decena = Math.trunc(n/10)%10;
	unidades = Math.trunc(n/1)%10;
	document.write("*********************DESCOMPOSICIÓN DE DIGITOS**********************",'<BR/>');
	document.write(millar,'<BR/>');
	document.write(centena,'<BR/>');
	document.write(decena,'<BR/>');
	document.write(unidades,'<BR/>');
	document.write("*************************************************************************",'<BR/>');
	if (millar>3) {
		document.write(" EL NÚMERO NO SE PUEDE REPRESENTAR",'<BR/>');
	} else {
		document.write("***************************NÚMEROS ROMANOS**************************",'<BR/>');
		switch (millar) {
		case 1:
			document.write("M");
			break;
		case 2:
			document.write("MM");
			break;
		case 3:
			document.write("MMM");
			break;
		}
		switch (centena) {
		case 1:
			document.write("C");
			break;
		case 2:
			document.write("CC");
			break;
		case 3:
			document.write("CCC");
			break;
		case 4:
			document.write("CD");
			break;
		case 5:
			document.write("D");
			break;
		case 6:
			document.write("DC");
			break;
		case 7:
			document.write("DCC");
			break;
		case 8:
			document.write("DCCC");
			break;
		case 9:
			document.write("CM");
			break;
		}
		switch (decena) {
		case 1:
			document.write("X");
			break;
		case 2:
			document.write("XX");
			break;
		case 3:
			document.write("XXX");
			break;
		case 4:
			document.write("XL");
			break;
		case 5:
			document.write("L");
			break;
		case 6:
			document.write("LX");
			break;
		case 7:
			document.write("LXX");
			break;
		case 8:
			document.write("LXXX");
			break;
		case 9:
			document.write("XC");
			break;
		}
		switch (unidades) {
		case 1:
			document.write("I");
			break;
		case 2:
			document.write("II");
			break;
		case 3:
			document.write("III");
			break;
		case 4:
			document.write("IV");
			break;
		case 5:
			document.write("V");
			break;
		case 6:
			document.write("VI");
			break;
		case 7:
			document.write("VII");
			break;
		case 8:
			document.write("VIII");
			break;
		case 9:
			document.write("IX");
			break;
		}
	}
	document.write("",'<BR/>');
	document.write("*************************************************************************",'<BR/>');
}

