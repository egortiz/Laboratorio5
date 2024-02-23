// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function capicua() {
	var a, b, n, n2, x;
	document.write("ESCRIBA UN NÚMERO",'<BR/>');
	n = Number(prompt());
	n2 = String(n);
	b = n2.length;
	a = 1;
	x = 0;
	while (a<b) {
		if (String.substring(n2,a-1,a)!=String.substring(n2,b-1,b)) {
			x = x+1;
		}
		b = b-1;
		a = a+1;
	}
	if (n>9) {
		if (x==0) {
			document.write("************************************",'<BR/>');
			document.write("EL NÚMERO",n,"SI ES CAPICUA",'<BR/>');
			document.write("************************************",'<BR/>');
		} else {
			document.write("************************************",'<BR/>');
			document.write("EL NÚMERO",n,"NO ES CAPICUA",'<BR/>');
			document.write("************************************",'<BR/>');
		}
	} else {
		document.write("ESCRIBE UN NUMERO MAYOR A UN DIGITO",'<BR/>');
	}
}

